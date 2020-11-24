const db = require('../models')
const express = require('express')
const router = express.Router()

//middleware
router.use(express.urlencoded({ extended: false }));

router.post('/signup', (req,res) =>{
    db.user.findOrCreate({
        where:{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
    }).then(([user, created]) =>{
        console.log('this is user', user)
        console.log('this is created', created)
        res.redirect('/')
    })
})

router.get('/', (req,res) =>{
    db.user.findAll().then(users =>{
        res.status(200).json({ user: users})
    })
})



module.exports = router