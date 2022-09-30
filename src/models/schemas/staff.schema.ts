import mongoose, { Schema, model } from "mongoose";

const staffSchema = new Schema({
    name: String,
    staffId: String,
    age: Number,
    department: String,
})
const Staff = mongoose.model('Staff', staffSchema);
export default Staff;