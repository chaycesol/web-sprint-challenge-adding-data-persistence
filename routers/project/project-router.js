const express = require('express');

// connection to database database
// const db = require('../data/connection')
// use Router
const router = express.Router();


/* GET REQUESTS */

// Get list of all Car Inventory
router.get('/', (req, res) => {
    res.status(200).json({message: 'endpoint route is working'})
//     db('cars')
//     .then(cars => {
//         res.status(200).json({ data: cars });
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json({ message: err.message })
//     })
})

// Get info on specific car by ID
router.get('/:id', (req, res) => {
    // const { id } = req.params;

    // db('cars')
    // .where({ id }).first()
    // .then(fruit =>{
    //     res.status(200).json(fruit);
    // })
    // .catch(err =>{
    //     console.log(err);
    //     res.status(500).json({ error: err.message })
    // });
});


/* POST REQUESTS */
// adds new car
router.post('/', (req, res) => {
    // const carData = req.body

    // db('cars')
    // .insert(carData)
    // .returning('id')
    // .then(ids => {
    //     res.status(201).json({ data: ids })
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json({ error: err.message })
    // });
});

/* PUT REQUESTS */
//edits specific car record by ID
router.put('/:id', (req, res) =>{
    // const changes = req.body;
    
    // db('cars')
    // .where("id", "=", req.params.id)
    // .update(changes)
    // .then( count => {
    //     if (count) {
    //         res.status(200).json({ data: count });
    //     } else {
    //         res.status(404).json({ message: "record not found"});
    //     }
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json({ message: err.message })
    // });
});

/* DELETE REQUESTS */
router.delete('/:id', (req,res) => {
    // db('cars')
    // .where("id", "=", req.params.id)
    // .del()
    // .then( count => {
    //     res.status(200).json({ data: count })
    // })
    // .catch(err => {
    //     res.status(500).json({ message: error.message });
    // });
});
module.exports = router