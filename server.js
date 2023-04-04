const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

const emailUser = {
	emailUserName: process.env.EMAIL_USERNAME_LOCAL,
	emailPassword: process.env.EMAIL_PASSWORD_LOCAL
}

const contactEmail = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: emailUser.emailUserName,
		pass: emailUser.emailPassword
	}
});

contactEmail.verify((error) => {
	if (error) {
		
	}
})
app.use(cors());
app.use(express.json());
app.use("/", router);
app.lister(5000, () => {

})