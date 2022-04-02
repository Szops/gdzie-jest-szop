import {Model} from '@nozbe/watermelondb';
import {immutableRelation, date} from '@nozbe/watermelondb/decorators';

export default class OpeningDate extends Model {
  static table = 'opening_dates';
  static associations = {
    points: {type: 'belongs_to', key: 'point_id'},
  };

  @date('date') date;

  @immutableRelation('points', 'point_id') point;
}
