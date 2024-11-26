/** @format */
const {success} = require('../../../services/response');
const {Category} = require('../../models/category');
const index = ({querymen: {query, select, cursor}}, res, next) => {
  Category.countDocuments(query)
    .lean()
    .then((total) => {
      if (!total) {
        return {data: [], total};
      }
      return Category.aggregate([
        {
          $match: query,
        },
        {
          $lookup: {
            from: 'products',
            localField: '_id',
            foreignField: 'category',
            as: 'products',
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            thumbnail: 1,
            items: {
              $size: '$products',
            },
          },
        },
        {
          $sort: cursor.sort,
        },
        {
          $skip: cursor.skip,
        },
        {
          $limit: cursor.limit,
        },
      ]).then((docs) => ({
        total,
        results: docs.length,
        data: docs,
      }));
    })
    .then(success(res))
    .catch(next);
};
module.exports = {index};
