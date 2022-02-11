const express = require('express');
const { validateUser } = require('./middleware/middleware');
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

router.post('/register', validateUser, (req, res) => {
    users.push(req.body);
    res.json(users);
})

router.post('/login', validateUser, (req, res) => {
    users.map(user => {
        if(user.username === req.body.username && user.password === req.body.password){
            res.json('Welcome!');
        } else{
            res.status(500).json('Incorrect username or password');
        }
    })
})



module.exports = router;