import mongoose, { Schema } from "mongoose";

const schama = new Schema(
    {
        points: {
            type: Number,
        },
        success: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
// schama.index({ email: 1 }, { unique: true });
// schama.index({ phone: 1 }, { unique: true });
const Unity = mongoose.models.Unity || mongoose.model("Unity", schama);

export default Unity;