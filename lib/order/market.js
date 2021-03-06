var assert = require('assert');

var _ = require('lodash');

module.exports = function (action, quantity, transmitOrder) {
  assert(_.isString(action), 'Action must be a string.');
  assert(_.isNumber(quantity), 'Quantity must be a string.');

  if (transmitOrder === undefined) {
    transmitOrder = true;
  }

  return {
    action: action,
    orderType: 'MKT',
    totalQuantity: quantity,
    transmit: transmitOrder
  };
};
