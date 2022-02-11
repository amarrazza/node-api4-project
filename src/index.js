
const server = require('./server');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`party happening on port ${PORT}`);
})

server.use('*', (req, res) => {
    res.send(`<h2>wrong route</h2>`);
});

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

