/** @format */

const success = (res, status) => (data) => {
  if (data) {
    data = {
      ...data,
      status: status || 200,
      statusText: 'SUCCESS',
      subStatus: 200,
      subStatusText: '',
      message: 'Get success',
    };
    res.status(status || 200).json(data);
  }
  // console.log('data', data);
  return data;
};
const successBackdoor = ({bodyParams, queryParams, data, status, statusText}) => {
  return {
    ...bodyParams,
    ...queryParams,
    response: {
      status: status || 200,
      statusText: statusText || 'SUCCESS',
      message: 'Get success',
      ...data,
    },
  };
};

const notFoundBackdoor = ({bodyParams, queryParams, data, message, status, statusText}) => {
  return {
    ...bodyParams,
    ...queryParams,
    response: {
      status: status || 404,
      statusText: statusText || 'NOT_FOUND',
      message: message || "The data you're looking for was not found",
      ...data,
    },
  };
};
const notFound = (res) => (entity) => {
  if (entity) {
    return entity;
  }
  res.status(404).end();
  return null;
};
const authorOrAdmin = (res, user, userField) => (entity) => {
  if (entity) {
    const isAdmin = user.role === 'admin';
    const isAuthor = entity[userField] && entity[userField].equals(user.id);
    if (isAuthor || isAdmin) {
      return entity;
    }
    res.status(401).end();
  }
  return null;
};

const apiError = (res, statusCode, msg) => {
  const code = statusCode || 500;

  return () => {
    res.status(code).json({
      status: code,
      statusText: 'ERROR',
      subStatus: code,
      subStatusText: 'ERROR',
      message: msg,
      data: null,
    });
  };
};

module.exports = {success, successBackdoor, notFound, notFoundBackdoor, authorOrAdmin, apiError};
