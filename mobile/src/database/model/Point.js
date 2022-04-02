import {Model} from '@nozbe/watermelondb';
import {
  field,
  text,
  immutableRelation,
  children,
  writer,
} from '@nozbe/watermelondb/decorators';

export default class Point extends Model {
  static table = 'points';
  static associations = {
    opening_dates: {type: 'has_many', foreignKey: 'point_id'},
    points_lists: {type: 'belongs_to', key: 'points_list_id'},
  };

  @field('_id') pointId;
  @text('street') street;
  @text('sector') sector;
  @text('estate') estate;
  @field('latitude') latitude;
  @field('longitude') longitude;
  @text('description') description;
  @field('is_notifications_enabled') isNotificationsEnabled;

  @immutableRelation('points_lists', 'points_list_id') pointsList;

  @children('opening_dates') openingDates;

  @writer async turnOnNotifications() {
    await this.update(point => {
      point.isNotificationsEnabled = true;
    });
  }
  @writer async turnOffNotifications() {
    await this.update(point => {
      point.isNotificationsEnabled = false;
    });
  }
  @writer async addOpeningDate(date) {
    return this.collections.get('opening_dates').create(openingDate => {
      openingDate.point.set(this);
      //openingDate.point = 2.0; //.set(this);
      openingDate.date = date;
    });
  }
}
