

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
	}
	res.status(200).json({message: "functioning"}); 
}

export default handler;