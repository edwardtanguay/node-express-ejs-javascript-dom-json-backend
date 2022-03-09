import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 3100;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	fs.readFile('./api/data/data.json', (err, data) => {
		res.send(data.toString());
	});
});

app.post('/', (req, res) => {
	const message = req.body.message;
	const data = {
		message
	};
	fs.writeFile('./api/data/data.json', JSON.stringify(data), (err) => {
		res.status(200).json({
			success: true,
			message
		});
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});