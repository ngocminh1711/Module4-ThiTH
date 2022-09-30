import { Request, Response } from "express";
export declare class StaffController {
    showFormStaff(req: Request, res: Response): Promise<void>;
    showFormCreate(req: Request, res: Response): void;
    createStaff(req: Request, res: Response): Promise<void>;
    deleteStaff(req: Request, res: Response): Promise<void>;
    showFormUpdate(req: Request, res: Response): Promise<void>;
    updateStaff(req: Request, res: Response): Promise<void>;
}
