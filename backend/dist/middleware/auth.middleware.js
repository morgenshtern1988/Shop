"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = (req, res, next) => {
    const { Authorization: authToken } = req.headers;
    console.log(authToken);
    // if(!authToken) return res.status(401).send("no token provider");
    // jwt.verify(authToken,appJwt.jwt.secret, (err,decodet)=>{
    //     if(err)return res.status(401).send(err);
    //     req["userInfo"] = decodet;
    next();
    // })
};
//# sourceMappingURL=auth.middleware.js.map