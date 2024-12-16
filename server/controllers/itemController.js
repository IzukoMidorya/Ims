const mongoose = require('mongoose');
const Item = require('../../models/item');

mongoose
  .connect(
    'mongodb+srv://netninja:Salinas051288@node-tuts.4ygbqsh.mongodb.net/?retryWrites=true&w=majority&appName=Node-tuts'
  )
  .then(() => {
    console.log('Opened MongoDB connection.');
  })
  .catch((err) => {
    console.log('Error');
    console.log(err);
  });

//List of all User
exports.items = async (req, res) => {
  // const items = await Item.find({});
  // res.render('indexItem', { items });
  res.send('Hello');
};

exports.addItemForm = (req, res) => {
  res.render('new-item');
};

exports.addItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.redirect('/items');
};

exports.viewItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('show-item', { item });
};

exports.editItemForm = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('edit-item', { item });
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndUpdate(id, { ...req.body });
  res.redirect(`/items/${id}`);
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.redirect('/items');
};
