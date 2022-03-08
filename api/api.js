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

app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});

function getJson() {

}