'use strict';

module.exports.postFunction = (event, context, callback) => {
  let data = JSON.parse(event.body);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless Post executed',
      data: data
    }),
  };
  callback(null, response);
};
