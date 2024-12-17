const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose
  .connect(
    'mongodb+srv://netninja:Salinas051288@node-tuts.4ygbqsh.mongodb.net/?retryWrites=true&w=majority&appName=Node-tuts'
  )
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
