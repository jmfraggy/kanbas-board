const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// Use DB Model
const Progress = require('../models/Progress');

// @route       GET api/progresses
// @desc        Get all Progress cards
// @access      Private
// Second parammeter (auth) to make it protected
router.get('/', auth, async (req, res) => {
    try {
        const card = await Progress.find({ user: req.user.id }).sort({ date: -1 });
        res.json(card);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
});

// @route       POST api/progresses
// @desc        Add new Progress card
// @access      Private
router.post('/', [auth, [
    body('description', 'Description is required').not().isEmpty()
]], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { description } = req.body;

    try {
        const newCard = new Progress({
            user: req.user.id,
            description
        });

        const card = await newCard.save();
        res.json(card);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route       PUT api/progresses/:id
// @desc        Update Progress Card
// @access      Private
router.put('/:id', [auth, [
    body('description', 'Description is required').not().isEmpty()
]], async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { description } = req.body;
    // Build Card object

    const cardFields = {
        description
    };

    try {
        // Find List by ID
        let card = await Progress.findById(req.params.id); 
        if (!card) return res.status(404).json({ msg: 'List not found' });

        // Make sure user owns card
        if (card.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }
        console.log(cardFields);
        card = await Progress.findByIdAndUpdate(req.params.id,
            { $set: cardFields },
            { new: true });
        
        res.json(card);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route       DELETE api/progresses/:id
// @desc        Delete Progress Card
// @access      Private
router.delete('/:id', auth, async (req, res) => {
    try {
        // Find List by ID
        let card = await Progress.findById(req.params.id); 
        if (!card) return res.status(404).json({ msg: 'List not found' });

        // Make sure user owns card
        if (card.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // Remove List
        await Progress.findByIdAndRemove(req.params.id)
        res.json({ msg: 'List Deleted' });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
    
});

module.exports = router;