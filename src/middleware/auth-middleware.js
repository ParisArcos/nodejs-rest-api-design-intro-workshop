const { auth } = require("../firebase");

//`Bearer ${auth_token}`;

async function authMiddleware(req, res, next) {
  if (
    req.header.authorization &&
    req.header.authorization.startsWith("Bearer")
  ) {
    const bearerToken = req.headers.authorization.substr(7);
    try {
      const userClaims = await auth.verifyIdTokem(bearerToken);
      const { email, uId } = userClaims;
      //todo se podria comprobar el rol (admin,user, superAdmin...)
      req.user = {
        email: email,
        uId: uId,
      };
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).send({
      data: null,
      error: "Not auth",
    });
  }
}

module.exports = authMiddleware;
