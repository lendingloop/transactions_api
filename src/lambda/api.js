import transactions from '../transactions.json';

exports.handler = (_event, _context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(transactions),
  });
};