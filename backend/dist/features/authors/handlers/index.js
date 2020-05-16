"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
exports.adminCreateAuthor = async (request, response) => {
    services_1.createAuthor(request.body)
        .then((author) => response.json(author))
        .catch((err) => response.json(err));
};
exports.adminShowAuthor = async (request, response) => {
    services_1.showAuthor()
        .then((author) => response.json(author))
        .catch((err) => response.json(err));
};
exports.adminRemoveAuthor = async (request, response) => {
    const id = request.params.id;
    services_1.removeAuthor(id)
        .then((author) => response.json(author))
        .catch((err) => response.json(err));
};
//# sourceMappingURL=index.js.map