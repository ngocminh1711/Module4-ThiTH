"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const staff_router_1 = __importDefault(require("./src/router/staff.router"));
const ConnectDB_1 = require("./src/models/ConnectDB");
const index = (0, express_1.default)();
const PORT = 1711;
index.set('view engine', 'ejs');
index.set('views', path_1.default.join(__dirname, 'views'));
index.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
index.use(express_1.default.json());
index.use(body_parser_1.default.json());
const db = new ConnectDB_1.ConnectDB();
db.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err.message);
});
index.use('/', staff_router_1.default);
index.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});
//# sourceMappingURL=index.js.map