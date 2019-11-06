/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

//Hello World
router.get('/hello', (req, res) => res.send("Hello World!"));

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

// Create Member - POST REQUESTS
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        status: 'active'
    };

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);
    //.json(members);
    res.redirect('/');
});

// Update Member - PUT REQUEST
//http://localhost:5000/api/members/1 row -> {"email": "john@yahoo.com"}

router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name; // just to check if it is sended
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member updated', member });
            }
        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

// Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

module.exports = router;