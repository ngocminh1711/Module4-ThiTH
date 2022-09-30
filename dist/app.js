"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const staff_router_1 = __importDefault(require("./src/router/staff.router"));
const app = (0, express_1.default)();
const PORT = 1711;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use('/', staff_router_1.default);
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});
//# sourceMappingURL=app.js.map