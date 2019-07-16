const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.json(cars); 
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve cars' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const car = await db('cars').where({ id });
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve car' });
    }
});

router.post('/', async (req, res) => {
    try {
        const carData = req.body;
        const [ id ] = await db('cars').insert(carData)
        const newCarEntry = await db('cars').where({ id })
        res.status(201).json(newCarEntry)
    } catch (err) {
        res.status(500).json({ message: 'Failed to post car' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await db('cars').where({ id }).del();
            if(deleted) {
                res.status(200).json({ message: 'Car was deleted.' }) 
            }   else {
                res.status(400).json({ errorMessage: 'Car with that ID could not be deleted' })
            }
    } catch (err) {
        res.status(500).json({ errorMessage: 'This car could not be deleted.' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateCar = req.body;
        const id = req.params.id;
        await db('cars').where({ id }).update(updateCar)

        const updatedEntry = await db('cars').where({ id })
        res.status(201).json(updatedEntry)
    }
    catch (err) {
        res.status(500).json({ errorMessage: 'This car could not be updated.' })
    }
});


module.exports = router;