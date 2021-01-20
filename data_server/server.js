const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
    res.status(200).json(['dog', 'cat', 'horse', 'pig', 'squirrel', 'cow']);
});

app.listen(3010, () => console.log('Listening on http://localhost:3010'));