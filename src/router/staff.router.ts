import express from "express";
import {StaffController} from "../controller/staff.controller";
import multer from 'multer'
const upload = multer();


const staffRouter = express.Router();
const staffController = new StaffController()

staffRouter.get('/', (req, res) => {
    staffController.showFormStaff(req, res);
})

staffRouter.get('/create', (req, res) => {
    staffController.showFormCreate(req, res )
})
staffRouter.post('/create',upload.none(), (req, res) => {
    staffController.createStaff(req, res);
})
staffRouter.get('/delete/:staffId', (req, res) => {
    staffController.deleteStaff(req, res)
})
staffRouter.get('/update/:staffId',(req, res, next) => {
    staffController.showFormUpdate(req, res)
})
staffRouter.post('/update/:staffId',upload.none(),(req, res, next) =>{
    staffController.updateStaff(req, res).catch(err => {
        res.status(404).json({ err : err.message });
    });
})




export default staffRouter;


