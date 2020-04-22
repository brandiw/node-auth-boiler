// Node Modules/Variables
let router = require('express').Router()

// Routes
// GET /auth/login - this is a page that renders the login form
router.get('/login', (req, res) => {
    res.render('auth/login')
})

// POST /auth/login - this is a place for the login form to post to
router.post('/login', (req, res) => {
    console.log('DATA', req.body)
    res.send('Hello from the post route!')
})

// GET /auth/signup - this is a page that renders the signup form
router.get('/signup', (req, res) => {
    res.render('auth/signup', { data: {} })
})

// POST /auth/signup
router.post('/signup', (req, res) => {
    console.log('REQUEST BODY', req.body)
    if (req.body.password !== req.body.password_verify) {
        // Send a message on why things didn't work
        // Put the user back onto the signup form to try again
        res.render('auth/signup', { data: req.body })
    }
    else {
        res.send('POST route reached - PASSWORDS WERE GOOD!')
    }
})

// Export (allow me to include this in another page)
module.exports = router