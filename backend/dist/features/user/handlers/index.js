"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
exports.adminShowUser = async (req, res) => {
    services_1.showUser()
        .then((userArr) => res.json(userArr))
        .catch((err) => res.json(err));
};
//# sourceMappingURL=index.js.map