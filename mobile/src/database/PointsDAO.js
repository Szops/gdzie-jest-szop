import {database} from './db';

const pointsLists = database.collections.get('points_lists');
const points = database.collections.get('points');
const openingDates = database.collections.get('opening_dates');

const listNames = {SZOP: 'szop', PSZOK: 'pszok'};

export default {
  observePointsLists: () => pointsLists.query().observe(),

  createSzopPointsList: async ({version, list}) => {
    await database.write(async () => {
      await pointsLists
        .create(pointsList => {
          pointsList.version = version;
          pointsList.name = listNames.SZOP;
          return pointsList;
        })
        .then(pointsList => {
          if (list !== undefined)
            Promise.all(
              list.map(async point => {
                await pointsList.callWriter(() => pointsList.addPoint(point));
              }),
            );
        });
    });
  },

  deleteAllLists: async () => {
    await database.write(async () => {
      await openingDates.query().destroyAllPermanently();
      await points.query().destroyAllPermanently();
      await pointsLists.query().destroyAllPermanently();
    });
  },
};
