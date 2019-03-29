const express = require('express');

const Dishes = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.get();
    res.status(200).json(dishes);
  } catch (e) {
    /* handle error */
    res.status(500).json({
      message: 'The dishes information could not be retrieved'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getById(req.params.id);

    if (dish) {
      res.status(200).json(dish);
    } else {
      res
        .status(404)
        .json({ message: 'The dish with the specified ID does not exist.' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      error: 'The dish information could not be retrieved.'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        errorMessage: 'Please provide a name'
      });
    }
    const dish = await Dishes.insert(req.body);
    res.status(201).json(dish);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'There was an error while saving the dish to the database'
    });
  }
});

module.exports = router;
