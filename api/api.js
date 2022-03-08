import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3100;

app.use(cors());

app.get('/', (req, res) => {
	res.send('info from backend');
});

app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});