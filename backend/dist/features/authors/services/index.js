"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
async function createAuthor(author) {
    if (author === null) {
        return "some field is null";
    }
    else {
        return await repositories_1.adminCreateAuthor(author);
    }
}
exports.createAuthor = createAuthor;
exports.showAuthor = async () => {
    return await repositories_1.adminShowAuthor();
};
exports.removeAuthor = async (id) => {
    return repositories_1.adminRemoveAuthor(id);
};
//# sourceMappingURL=index.js.map