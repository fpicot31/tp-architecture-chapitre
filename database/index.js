const mongoose = require('mongoose');

mongoose
  .connect(
    /* Pour une base sur le cloud cloud.mongodb.com avec le compte gmail */
    'mongodb+srv://francois:francois@cluster0.jzi6n.mongodb.net/demo?retryWrites=true&w=majority',
    /*'mongodb://francois:francois@localhost:27017/demo?retryWrites=true',*/
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connexion ok !');
  })
  .catch((err) => {
    console.log('connexion not ok !');
    console.log(err);
  });
