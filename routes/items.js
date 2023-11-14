const express = require('express');
const router = express.Router();

module.exports = router;

const { getItems, getItem, addItem, updateItem, deleteItem } = require('../controllers/items');

router.route('/')
  .get(getItems)
  .post(addItem)

router.route('/:id')
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem)