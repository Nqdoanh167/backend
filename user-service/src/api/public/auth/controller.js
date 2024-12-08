/** @format */
const {success} = require('../../../services/response');
const {User} = require('../../models/user');
const bcrypt = require('bcrypt');
const config = require('../../../config');
const jwt = require('jsonwebtoken');
const login = async ({bodymen: {body}}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });

      const {email, password} = body;
      const existingUser = await User.findOne({email});
      if (existingUser) {
        const match = await bcrypt.compare(password, existingUser.password);
        if (match) {
          const token = await generateToken(existingUser, res);
          return resolve({user: existingUser, token});
        } else {
          return reject(
            new Error(
              JSON.stringify({
                status: 400,
                statusText: 'PASSWORD_NOT_MATCH',
                message: 'Mật khẩu không đúng',
              }),
            ),
          );
        }
      } else {
        return reject(
          new Error(
            JSON.stringify({
              status: 400,
              statusText: 'USER_NOT_FOUND',
              message: 'Sai tên đăng nhập hoặc mật khẩu',
            }),
          ),
        );
      }
    } catch (error) {
      return reject(
        new Error(
          JSON.stringify({
            status: 500,
            statusText: 'ERROR',
            message: 'Lỗi không xác định',
          }),
        ),
      );
    }
  })
    .then(({user, token}) => ({
      token,
      data: user.view(),
    }))
    .then(success(res))
    .catch(next);
};

const register = async ({bodymen: {body}}, res, next) => {
  new Promise(async (resolve, reject) => {
    try {
      Object.keys(body).forEach((key) => {
        if (body[key] === undefined) {
          delete body[key];
        }
      });

      const {email, password, name, telephoneNumber} = body;

      const existingUser = await User.findOne({email}).lean();
      if (existingUser) {
        return reject(
          new Error(
            JSON.stringify({
              status: 400,
              statusText: 'USER_ALREADY_EXISTS',
              message: 'Người dùng đã tồn tại',
            }),
          ),
        );
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const user = await User.create({
        email,
        password: passwordHash,
        telephoneNumber,
        name,
      });
      return resolve(user);
    } catch (error) {
      return reject(
        new Error(
          JSON.stringify({
            status: 500,
            statusText: 'ERROR',
            message: 'Lỗi không xác định',
          }),
        ),
      );
    }
  })
    .then((user) => ({data: user.view()}))
    .then(success(res))
    .catch(next);
};

const signToken = async (user) => {
  return jwt.sign(
    {
      user,
    },
    config.jwtSecret,
    {
      expiresIn: config.jwtExpiresIn,
    },
  );
};

const generateToken = async (user, res) => {
  const token = await signToken(user);
  const cookieOptions = {
    expiresIn: new Date(Date.now() + 1 * 24 * 60 * 60 * 100000),
    // httpOnly: true,
  };
  res.cookie('jwt', token, cookieOptions);
  return token;
};

const getToken = async (req, res, next) => {
  const {token} = req.body;

  if (!token) {
    return res.status(400).json({message: 'Token is required'});
  }

  try {
    // Giải mã token
    const {user} = jwt.verify(token, config.jwtSecret);

    // Trả thông tin người dùng (chỉ trả các thông tin cần thiết)
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(403).json({success: false, message: 'Invalid or expired token', error: error.message});
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.json({
      data: null,
      status: 200,
      statusText: 'SUCCESS',
      message: 'Logout success',
    });
  } catch (error) {}
};

module.exports = {login, register, getToken, logout};
