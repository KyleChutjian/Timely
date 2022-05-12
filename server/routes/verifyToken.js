const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};


const verifyUser = (req, res, next) => {
  // check header or url parameters or post parameters for token
  //retrieve token from one of these places
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  // decode token

  console.log(token);
  if (token) {
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        var err = new Error("You are not authenticated !");
        err.status = 401;
        return next(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    var err = new Error("No token provided!");
    err.status = 403;
    return next(err);
  }
};




module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyUser,
};