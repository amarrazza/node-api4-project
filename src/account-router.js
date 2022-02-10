const express = require('express');

const router = express.Router();

const users = [{
    username: 'austin',
    password: 'lalala'
},
{
    username: 'ben',
    password: 'bababa'
}];

router.get('/users', (req, res) => {
    res.json(users);
});

router.post('/register', (req, res) => {
    users.push(req.body);
    res.json(users);
})

module.exports = router;