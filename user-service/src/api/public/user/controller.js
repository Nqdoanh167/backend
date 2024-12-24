/** @format */

const {success} = require('../../../services/response');
const {User} = require('../../models/user');

const updateMe = ({user, bodymen: {body}, params}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      console.log({user});
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) delete body[key];
      });
      const item = await User.findOne({_id: user._id});
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

      return resolve(Object.assign(item, body).save());
    } catch (error) {
      return reject(new Error(JSON.stringify({item: 500, message: error.toString()})));
    }
  })
    .then((item) => ({data: item.view()}))
    .then(success(res))
    .catch(next);
};

const getMe = ({user}, res) => {
  delete user.password;
  return success(res)({data: user});
};

module.exports = {updateMe, getMe};
