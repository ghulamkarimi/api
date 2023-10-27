import mongoose from 'mongoose';

const validateEmail = (email) => {
   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
   return emailRegex.test(email);
};
const validateName = (name) => {
   const nameRegex = /^[a-zA-Z\s'-]+$/;
   return nameRegex.test(name);
};

const userSchema = mongoose.Schema({

   firstName: {
      type: String, maxLength: 30, validate: {
         validator: validateName,
         message: "Invalid Name Format"
      }
   },
   lastName: {
      type: String, maxLength: 30, validate: {
         validator: validateName,
         message: "Invalid Name Format"
      }
   },
   email: {
      type: String, required: true, unique: true, validate: {
         validator: validateEmail,
         message: "Invalid Email Message"
      }
   },
   password: { type: String },
   photo: { type: String, default: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" },
});
export default mongoose.model("User", userSchema);