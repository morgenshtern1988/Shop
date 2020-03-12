"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (request, response) => {
    response.send(' index.ts');
});
app.listen(3000);
//# sourceMappingURL=index.js.map