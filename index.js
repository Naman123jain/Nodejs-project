const express = require('express');
const dotenv = require('dotenv');
const vendorUsersRoute = require('./routes/vendorUsers');

dotenv.config();

const app = express();
const vendorUsersRoute = require('./routes/vendorUsers');

app.use('/api', vendorUsersRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
