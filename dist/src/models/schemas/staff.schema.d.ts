import mongoose from "mongoose";
declare const Staff: mongoose.Model<{
    name?: string;
    staffId?: string;
    age?: number;
    department?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    staffId?: string;
    age?: number;
    department?: string;
}>>;
export default Staff;
