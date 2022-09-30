"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffController = void 0;
const staff_schema_1 = __importDefault(require("../models/schemas/staff.schema"));
class StaffController {
    async showFormStaff(req, res) {
        let staffs = await staff_schema_1.default.find();
        console.log(staffs);
        res.render('home', { staffs: staffs });
    }
    showFormCreate(req, res) {
        res.render('create-staff');
    }
    async createStaff(req, res) {
        let data = {
            fullname: req.body.fullName,
            age: req.body.age,
            staffcode: req.body.staffCode,
            department: req.body.department
        };
        let staff = new staff_schema_1.default({ name: data.fullname, age: data.age, staffId: data.staffcode, department: data.department });
        await staff.save();
        console.log(staff);
        res.redirect('/');
    }
    async deleteStaff(req, res) {
        let data = req.params.staffId;
        await staff_schema_1.default.deleteOne({ _id: data });
        res.redirect('/');
    }
    async showFormUpdate(req, res) {
        res.render('update-staff');
    }
    async updateStaff(req, res) {
        let data = {
            fullname: req.body.fullName,
            age: req.body.age,
            staffcode: req.body.staffCode,
            department: req.body.department
        };
        let staffId = req.params.staffId;
        await staff_schema_1.default.findOneAndUpdate({ _id: staffId }, { name: data.fullname, age: data.age, staffId: data.staffcode, department: data.department });
        res.redirect('/');
    }
}
exports.StaffController = StaffController;
//# sourceMappingURL=staff.controller.js.map