import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 4,
  tables: [
    tableSchema({
      name: 'points',
      columns: [
        {name: '_id', type: 'number', isIndexed: true},
        {name: 'points_list_id', type: 'string', isIndexed: true},
        {name: 'street', type: 'string'},
        {name: 'sector', type: 'string'},
        {name: 'estate', type: 'string'},
        {name: 'latitude', type: 'number'},
        {name: 'longitude', type: 'number'},
        {name: 'description', type: 'string', isOptional: true},
        {name: 'is_notifications_enabled', type: 'boolean', isIndexed: true},
      ],
    }),
    tableSchema({
      name: 'points_lists',
      columns: [
        //{name: 'id', type: 'string'},
        {name: 'version', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'created_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'opening_dates',
      columns: [
        //{name: 'id', type: 'string'},
        {name: 'point_id', type: 'string', isIndexed: true},
        {name: 'date', type: 'number'},
      ],
    }),
  ],
});
