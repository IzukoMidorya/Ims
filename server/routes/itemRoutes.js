const express = require('express');
const router = express.Router();

const itemCountroller = require('../controllers/itemController');

router.get('/', itemCountroller.items);
router.get('/new-item', itemCountroller.addItemForm);
router.post('/create-item', itemCountroller.addItem);
router.get('/:id', itemCountroller.viewItem);
router.get('/:id/edit', itemCountroller.editItemForm);
router.put('/:id', itemCountroller.updateItem);
router.delete('/:id', itemCountroller.deleteItem);
module.exports = router;
