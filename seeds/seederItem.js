const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose
  .connect('mongodb://127.0.0.1:27017/item-db')
  .then(() => {
    console.log('Opened MongoDB Connection.');
  })
  .catch((err) => {
    console.log('Error');
    console.log(err);
  });

const seedDB = async () => {
  const items = new Item({
    name: `Tender Juicy Hotdog`,
    category: `Food`,
    quantity: 100,
    price: 45,
    description: 'Tender Juicy Hotdog jumbo size.',
  });

  await items.save();
};

seedDB().then(() => {
  mongoose.connection.close();
});
