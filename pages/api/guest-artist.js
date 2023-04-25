import fs from 'fs';
import path from 'path';

function buildPath() {
	return path.join(process.cwd(), 'data', 'guestArtist.json');
}
function buildData(filePath) {
	const fileData = fs.readFileSync(filePath);
	return JSON.parse(fileData);
}
function handler(req, res) {
	if (req.method == "POST") {

		const artistRequest = req.body;
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
		const filePath = buildPath();
		const data = buildData(filePath);
		data.push(newArtistRequest);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({message: "successful upload", artistRequest: newArtistRequest});

	} else {
		const filePath = buildPath();
		const data = buildData(filePath);
		res.status(200).json({message: "functioning", artistRequests: data}); 
	}
}

export default handler;