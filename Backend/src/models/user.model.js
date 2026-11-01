import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minLength: 7,
            maxLength: 15,
        },
        password:{
            type: String,
            required: true,
            minLength: 6,
            maxLength: 10,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)