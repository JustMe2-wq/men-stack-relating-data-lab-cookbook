const express = require('express');
const router = express.Router();

const User = require('../models/user.js');



router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('users/index.ejs', { users });
    } catch (error) {
        console.log(error);
        res.send('error');
    }
});


router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const foods = user.foods.id(req.params.foodId);
        res.render('users/show.ejs',
            {
                user: user,
                foods: user.foods,
                food: foods,
            });
    } catch (error) {
        console.log(error);
        res.send('error');
    }
});

module.exports = router;