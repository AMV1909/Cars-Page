import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},
{
    versionKey: false,
    timestamps: false
});

export default model("Empleado", empleadoSchema);
