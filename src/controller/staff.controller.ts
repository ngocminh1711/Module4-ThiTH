import {Request, Response} from "express"
import Staff from "../models/schemas/staff.schema";

export class StaffController {


    async showFormStaff(req: Request, res: Response) {
        let staffs = await Staff.find();
        console.log(staffs)


        res.render('home', { staffs: staffs });

    }

    showFormCreate(req: Request, res: Response) {
        res.render('create-staff')
    }

    async createStaff(req: Request, res: Response) {
        let data = {
            fullname: req.body.fullName,
            age: req.body.age,
            staffcode: req.body.staffCode,
            department: req.body.department
        }

        let staff = new Staff({name: data.fullname, age: data.age, staffId: data.staffcode, department: data.department})

        await staff.save()
        console.log(staff)


       res.redirect('/')
    }
    async deleteStaff(req: Request, res: Response) {
        let data = req.params.staffId
        await Staff.deleteOne({ _id: data})
        res.redirect('/')
    }
    async showFormUpdate(req: Request, res: Response) {


        res.render('update-staff')
    }
    async updateStaff(req: Request, res: Response) {
        let data = {
            fullname: req.body.fullName,
            age: req.body.age,
            staffcode: req.body.staffCode,
            department: req.body.department
        }
        let staffId = req.params.staffId
        await Staff.findOneAndUpdate({_id : staffId}, {name: data.fullname, age: data.age, staffId: data.staffcode, department: data.department})
        res.redirect('/')
    }
}