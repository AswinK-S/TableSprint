// tepmorary file to create hashed password for admin

const bcrypt = require('bcryptjs');

const password = 'your_pasword for admin'; 
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
    } else {
        console.log('Hashed password:', hash);
    }
});
