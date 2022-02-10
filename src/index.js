
const server = require('./server');

require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`party happening on port ${PORT}`);
})

server.use('*', (req, res) => {
    res.send(`<h2>wrong route</h2>`);
});

