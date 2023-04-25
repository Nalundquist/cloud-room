import fs from 'fs';
import path from 'path';

let path = require("path");
let http = require("http");

function handler(req, res) {
	if (req.method == "POST") {

		const artistRequest = req.body.artistRequest;
		const newArtistRequest = {
			id: new Date().toISOString(),
		  name: artistRequest.nameInputRef,
			email: artistRequest.emailInputRef,
			phone: artistRequest.phoneInputRef,
			website: artistRequest.website,
			subject: artistRequest.subject,
			startDate: artistRequest.startDate,
			endDate: artistRequest.endDate,
			message: artistRequest.message,
			accepted: artistRequest.accepted
		}
		const filePath = path.join(process.cwd(), 'data', 'guestArtist.json');
		const fileData = fs.readFileSync(filePath);
		const data = JSON.parse(fileData);
		data.push(newArtistRequest);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({message: "successful upload", artistRequest: newArtistRequest});

	} else {
		res.status(200).json({message: "functioning"}); 
	}
}

export default handler;