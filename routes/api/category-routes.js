const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll({include:[{model: Product}]});
    res.status(200).json(categories);
  }
  catch(err){
    res.status(500).json({message: 'Error retrieving categories'});
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const category = await Category.findByPK(req.params.id, {include: [{model:Product}]});
    res.status(200).json(category);
  }
  catch(err){
    res.status(500).json({message: 'Error retrieving id'});
  }
});

router.post('/',async (req, res) => {
  // create a new category
  try{
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  }
  catch(err){
    res.status(500).json({message: 'Error creating new category'});
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const updatedCategory = await Category.update(req.body, {where: {id: req.params.id}});
    res.status(200).json(updatedCategory);
  }
  catch(err){
    res.status(500).json({message: 'Error updating category'});
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const deletedCat = await Category.destroy({where: {id: req.params.id}});
    res.status(200).json(deletedCat);
  }
  catch(err){
    res.status(500).json({message: 'Error deleting category'});
  }
});

module.exports = router;
