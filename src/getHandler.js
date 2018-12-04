'use strict';

module.exports.getFunction = (event, context, callback) => {
  let data = event.pathParameters;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello ' + data.name
    }),
  };
  callback(null, response);
};
