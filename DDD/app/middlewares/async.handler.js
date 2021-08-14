/**
 * @param {Function} func
 * @returns Function wrapped by try & catch
 */
module.exports = (func) => {
  return async (req, res) => {
    try {
      await func(req, res);
    } catch (err) {
      res.status(500).json(err.toString());
    }
  };
};
