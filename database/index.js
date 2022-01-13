const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://francois:francois@localhost:27017/demo?retryWrites=true',
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
