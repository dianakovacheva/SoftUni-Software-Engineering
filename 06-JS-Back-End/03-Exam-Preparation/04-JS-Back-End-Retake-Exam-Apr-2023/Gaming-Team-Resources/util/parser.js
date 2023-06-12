function parseError(error) {
  if (error.name == "ValidatorError") {
    return Object.values(error.errors).map((value) => value.message);
  } else if (Array.isArray(error)) {
    return error.map((x) => x.msg);
  } else {
    return error.message.split("\n");
  }
}

module.exports = {
  parseError,
};
