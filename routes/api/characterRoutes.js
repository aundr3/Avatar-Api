const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Characters
// 1ocalhost:3000/characters
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/avatar/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/characters', {
                title: 'All Characters',
                name: 'Character List',
                data
            })
        })

})

// single character
// localhost:3000/:id
router.get('/:id', (req, res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/avatar/characters/${id}`

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        res.render('pages/single-character', {
            title: `${data.name}`,
            name: `${data.name}`,
            data
        })
    })
})

module.exports = router