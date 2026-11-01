import mongoose, {Schema} from "mongoose"
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema)