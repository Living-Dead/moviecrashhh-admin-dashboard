const mongoose = require('mongoose');

const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}:${process.env.MONGO_PORT}/yggdrasil`;

const mongoConnect = mongoose.connect(mongoURI, {
    server:  { auto_reconnect: true },
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', function(error) {
    console.error(`Error in MongoDb connection: ${error}`);
    mongoose.disconnect();
});
db.on('connected', function() {
    console.log('MongoDB connected!');
});
db.once('open', function() {
    console.log('MongoDB connection opened!');
});
db.on('reconnected', function() {
    console.log('MongoDB reconnected!');
});
db.on('disconnected', function() {
    console.log('MongoDB disconnected!');
    mongoose.connect(mongoURI, {
        server: { auto_reconnect: true },
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

module.exports = mongoConnect;