const express = require('express');
const app = express();
const port = 3000;
const User = require('./User');

app.get('/', (req, res) => {
  res.send('Hello World! again')
});

app.post('/users', function createUser(request, response) {
    User.findOrCreate({ where: request.body })
        .then(function (user) {
            console.log('Progress: findOrCreate Completed: Starting User.GetContacts');
            user.getContacts()
                .then(contacts => {
                    console.log('Progress: getContacts Completed');
                    console.log('Session id set', user.id);
                    //request.session.userId = user.id
                    response.json({user, contacts})
                });
            console.log('Im logging after user.GetContacts() is called!');
        })
        .catch((e) => console.log('failed..', e))
    console.log(`/users route called with ${request.body}`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
