// @flow
Boolean.prototype.toggle = function() {
  if (this == true) {
    return false;
  } else {
    return true;
  }
}

module.exports = Boolean.prototype.toggle
