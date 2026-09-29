const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://athulkrishnakt123_db_user:rMb68uLy8boGgHlt@localservice.8vu0zlx.mongodb.net/"
    );
};

 
module.exports = connectDB