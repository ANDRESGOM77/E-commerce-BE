const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({ include: [{ model: Product, through: ProductTag }] });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: "Tags not found" })
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagDat = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: Product, through: ProductTag }
      ]
    }
    );
    res.status(200).json(tagDat);
  }
  catch (error) {
    res.status(500).json({ message: "tag not found" })
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json(createTag);
  }
  catch (error) {
    res.status(500).json({ message: "tag not created" })
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(updateTag);
  }
  catch (error) {
    res.status(500).json({ message: "tag not updated" })
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({ 
      where: { id: req.params.id } });

    res.status(200).json({ message: "tag deleted"})
  }
  catch (err) {
    res.status(500).json({ message: "tag not deleted" })
  }
});

module.exports = router;
