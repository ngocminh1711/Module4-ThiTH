"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staff_controller_1 = require("../controller/staff.controller");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const staffRouter = express_1.default.Router();
const staffController = new staff_controller_1.StaffController();
staffRouter.get('/', (req, res) => {
    staffController.showFormStaff(req, res);
});
staffRouter.get('/create', (req, res) => {
    staffController.showFormCreate(req, res);
});
staffRouter.post('/create', upload.none(), (req, res) => {
    staffController.createStaff(req, res);
});
staffRouter.get('/delete/:staffId', (req, res) => {
    staffController.deleteStaff(req, res);
});
staffRouter.get('/update/:staffId', (req, res, next) => {
    staffController.showFormUpdate(req, res);
});
staffRouter.post('/update/:staffId', upload.none(), (req, res, next) => {
    staffController.updateStaff(req, res).catch(err => {
        res.status(404).json({ err: err.message });
    });
});
exports.default = staffRouter;
//# sourceMappingURL=staff.router.js.map