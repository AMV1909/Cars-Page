import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
    },
    mark: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    cylinderCapacity: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    sold: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        required: true
    },
},
{
    versionKey: false,
    timestamps: false
});

export default model("Vehiculo", vehiculoSchema);
