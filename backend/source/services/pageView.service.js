const statisticsModel = require('../database/models/statistics.model.js');
const detailsOfStatisticModel = require('../database/models/detailsOfStatistic.model.js');
const dateService = require('./date.service.js');
const moment = require('moment');

class PageViewService {

    insertPageView(username) {

    };
    pageViewCountOfYears(object, hash) {

        const year = {};
        const month = {};
        const week = {};
        let weekNumber = new dateService(object).getWeek().toString();
        let monthNumber = new dateService(object).getMonthName();
        let yearNumber = object.getFullYear().toString();
        let queryParam = {};
        const updateObject = {};
        const updateCountValue = {};
        let query = {
            weekUpdate: '',
            countIncrement: '',
        };
        let countIncrementQuery = '';

        const newHashElement = [{
            hash: hash,
        }];

        const updateHashElement = {
            hash: hash,
        };

        week[weekNumber] = newHashElement;
        month[monthNumber] = week;
        week['count'] = 1;
        year[yearNumber] = month;

        const details = {
            dOfS: year,
        };

        const detailsOfStatistic = new detailsOfStatisticModel(details);

        detailsOfStatisticModel.find({}).exec((err, data) => {
            if (err) {

                return;
            }

            /* details of statistic data array is empty */
            /* create new collection structure */
            if (data.length === 0) {
                detailsOfStatistic.save()
                    .then(() => console.log(`New visit saved to details of statistic collection!`))
                    .catch((err) => console.log(err));
            } else {
            /* update exist collection data */

            queryParam = {
                _id: data[0]._id,
            };

            /* queries */
            query.weekUpdate = `dOfS.0.${yearNumber}.${monthNumber}.${weekNumber}`;
            query.countIncrement = `dOfS.0.${yearNumber}.${monthNumber}.count`

            updateObject[query.weekUpdate] = updateHashElement;
            updateCountValue[query.countIncrement] = 1;
            detailsOfStatisticModel.updateOne(
                    queryParam, {
                        $push: updateObject,
                        $inc: updateCountValue
                    })
                .then(() => console.log(`Update success`))
                .catch(err => console.log(`Update failed: ${err}`));
            }

        });
    };
}

module.exports = PageViewService;