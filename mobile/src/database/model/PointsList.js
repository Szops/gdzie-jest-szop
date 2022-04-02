import {Model} from '@nozbe/watermelondb';
import {Q} from '@nozbe/watermelondb';
import {
  text,
  date,
  children,
  readonly,
  lazy,
  writer,
} from '@nozbe/watermelondb/decorators';

export default class PointsList extends Model {
  static table = 'points_lists';
  static associations = {
    points: {type: 'has_many', foreignKey: 'points_list_id'},
  };

  @text('version') version;
  @text('name') name;
  @readonly @date('created_at') createdAt;

  @children('points') points;

  @lazy subscribedPoints = this.points.extend(
    Q.where('is_notifications_enabled', true),
  );

  @writer async addPoint(pointData) {
    return await this.collections
      .get('points')
      .create(point => {
        point.pointsList.set(this);
        point.pointId = pointData.pointId;
        point.street = pointData.street;
        point.sector = pointData.sector;
        point.estate = pointData.estate;
        point.latitude = pointData.latitude;
        point.longitude = pointData.longitude;
        point.description = pointData.description;
        point.isNotificationsEnabled = false;
        return point;
      })
      .then(point => {
        Promise.all(
          pointData.openingDateTimes.map(async date => {
            let b = date.split(/\D+/);
            --b[1]; // month {0, ... , 11}, not {1, ... , 12}
            await this.callWriter(() => point.addOpeningDate(Date.UTC(...b)));
          }),
        );
      });
  }
}
