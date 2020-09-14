const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const Member = require('../models/Member');

// @route       GET api/members
// @desc        Get all Members
// @access      Private
// Second parammeter (auth) to make it protected
router.get('/', auth, async (req, res) => {
    try {
        const members = await Member.find({ user: req.user.id }).sort({ date: -1 });
        res.json(members);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
});

// @route       POST api/members
// @desc        Add new member
// @access      Private
router.post('/', [auth, [
    body('firstName', 'firstName is required').not().isEmpty(),
    body('lastName', 'lastName is required').not().isEmpty()
]], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName } = req.body;

    try {
        const newMember = new Member({
            user: req.user.id,
            firstName,
            lastName
        });

        const member = await newMember.save();
        res.json(member);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;