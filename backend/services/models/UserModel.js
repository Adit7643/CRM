import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    googleId:{
        type:String,
        unique:true,
        sparse:true
    },
    displayName:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        sparse:true
    },
    password:String,
    photo:String,
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try{
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }catch(error){
        console.error("Error hashing password:", error);
        next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        console.error("Error comparing password:", error);
        throw error;
    }
}

export default mongoose.model('User', userSchema);