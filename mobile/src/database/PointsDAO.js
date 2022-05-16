import {database} from './db';
import {Q} from '@nozbe/watermelondb';

const pointsLists = database.collections.get('points_lists');
const points = database.collections.get('points');
const openingDates = database.collections.get('opening_dates');

const listNames = {SZOP: 'szop', PSZOK: 'pszok'};

export default {
  getPointsLists: () => pointsLists.query(),
  getPoints: () => points.query(),

  getSzopPointsList: () =>
    pointsLists.query(
      Q.where('name', Q.like(`%${Q.sanitizeLikeString(listNames.SZOP)}%`)),
    ),

  getSzopPoints: () =>
    points.query(
      Q.on(
        'points_lists',
        Q.where('name', Q.like(`%${Q.sanitizeLikeString(listNames.SZOP)}%`)),
      ),
    ),

  createSzopPointsList: async ({version, list}) => {
    await database.write(async () => {
      await pointsLists
        .create(pointsList => {
          pointsList.version = version;
          pointsList.name = listNames.SZOP;
          return pointsList;
        })
        .then(async pointsList => {
          //   if (list !== undefined)
          return await Promise.all(
            list.map(async point => {
              await pointsList.callWriter(() => pointsList.addPoint(point));
            }),
          );
        });
    });
  },

  deleteAllLists: async () => {
    await database.write(async () => {
      // database.unsafeResetDatabase();
      // await openingDates.query().destroyAllPermanently();
      // await points.query().destroyAllPermanently();
      await pointsLists.query().destroyAllPermanently();
    });
  },

  deleteSzopLists: async () => {
    await database.write(async () => {
      // database.unsafeResetDatabase();
      // await openingDates.query().destroyAllPermanently();
      // await points.query().destroyAllPermanently();
      await pointsLists
        .query(
          Q.where('name', Q.like(`%${Q.sanitizeLikeString(listNames.SZOP)}%`)),
        )
        .destroyAllPermanently();
    });
  },
};
