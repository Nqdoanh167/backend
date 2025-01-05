/** @format */

const {notFound, success} = require('../response');
const create =
  (Model) =>
  ({user, bodymen: {body}}, res, next) => {
    new Promise(async (resolve, reject) => {
      try {
        Object.keys(body).forEach((key) => {
          if (body[key] === undefined) {
            delete body[key];
          }
        });
        body.updatedBy = {
          _id: user?._id,
          name: user?.name,
          avatar: user?.avatar,
        };
        return resolve(Model.create(body));
      } catch (error) {
        return reject(
          new Error(
            JSON.stringify({
              status: 500,
              statusText: 'ERROR',
              message: error.toString(),
            }),
          ),
        );
      }
    })
      .then((item) => ({data: item.view()}))
      .then(success(res))
      .catch(next);
  };
const index =
  (Model) =>
  ({querymen: {query, select, cursor}}, res, next) => {
    if (query.search) {
      query.$text = {$search: query.search};
      delete query.search;
    }
    Model.countDocuments(query)
      .lean()
      .then((total) => {
        if (!total) {
          return {data: [], total};
        }
        return Model.find(query, select, cursor).then((docs) => ({
          total,
          results: docs.length,
          data: docs.map((doc) => doc.view()),
        }));
      })
      .then(success(res))
      .catch(next);
  };
const show =
  (Model) =>
  ({params}, res, next) => {
    Model.findOne({_id: params.id})
      .then(notFound(res))
      .then((item) => ({data: item ? item.view() : null}))
      .then(success(res))
      .catch(next);
  };

const update =
  (Model) =>
  ({user, bodymen: {body}, params}, res, next) => {
    new Promise(async (resolve, reject) => {
      try {
        Object.keys(body).forEach((key) => {
          if (body[key] === undefined) delete body[key];
        });
        const item = await Model.findOne({_id: params.id});
        if (!item) {
          return reject(
            new Error(
              JSON.stringify({
                item: 404,
                statusText: 'ITEM_NOT_FOUND',
                message: 'Không tìm thấy !',
              }),
            ),
          );
        }
        body.updatedBy = {
          _id: user?._id,
          name: user?.name,
          avatar: user?.avatar,
        };
        return resolve(Object.assign(item, body).save());
      } catch (error) {
        return reject(new Error(JSON.stringify({item: 500, message: error.toString()})));
      }
    })
      .then((item) => ({data: item.view()}))
      .then(success(res))
      .catch(next);
  };

const destroy =
  (Model) =>
  ({params}, res, next) => {
    new Promise(async (resolve, reject) => {
      try {
        const item = await Model.findOneAndDelete({_id: params.id});
        if (!item) {
          return reject(
            new Error(
              JSON.stringify({
                status: 404,
                statusText: 'ITEM_NOT_FOUND:',
                message: 'Không tìm thấy!',
              }),
            ),
          );
        }

        return resolve(item);
      } catch (error) {
        return reject(
          new Error(
            JSON.stringify({
              status: 500,
              statusText: 'ERROR',
              message: error.toString(),
            }),
          ),
        );
      }
    })
      .then((item) => ({data: item.view()}))
      .then(success(res, 200))
      .catch(next);
  };
module.exports = FactoryController = {
  create,
  index,
  show,
  update,
  destroy,
};
