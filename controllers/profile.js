let router = require('express').Router()

// GET /profile/user - a normal profile for the plebs
router.get('/user', (req, res) => {
    res.render('profile/user')
})

// GET /profile/admin - a special profile admins
router.get('/admin', (req, res) => {
    res.render('profile/admin')
})

module.exports = router