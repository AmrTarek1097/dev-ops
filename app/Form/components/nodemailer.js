import nodemailer from "nodemailer";

const email ='flockerlabsdevelopers@gmail.com';
const pass = 'klobmqdwygbpdnoz'
const pass2 = 'dexenykdkuusthzl'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:email,
        pass,
    }
});

export const mailOptions ={
    from:email,
    to:email,
}