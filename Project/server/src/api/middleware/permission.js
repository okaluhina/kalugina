const httpStatus = require("http-status");

function permit(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['admin', 'user'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(httpStatus.FORBIDDEN).send("Forbidden");
      }
      // authorization successful
      next();
    }
}

module.exports = permit;