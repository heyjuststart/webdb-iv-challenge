const express = require('express');

const Recipes = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.get();
    res.status(200).json(recipes);
  } catch (e) {
    /* handle error */
    res.status(500).json({
      message: 'The recipes information could not be retrieved'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipes.getById(req.params.id);

    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res
        .status(404)
        .json({ message: 'The recipe with the specified ID does not exist.' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      error: 'The recipe information could not be retrieved.'
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
    const recipe = await Recipes.insert(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'There was an error while saving the recipe to the database'
    });
  }
});

module.exports = router;

