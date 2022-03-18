const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const Session = new Schema({
    refreshToken: {
        type: String,
        default: "",
    },
});

const User = new Schema({
    firstName: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    authStrategy: {
        type: String,
        default: "local",
    },
    refreshToken: {
        type: [Session],
    },
});

// Remove refreshToken from the response
User.set("toJSON", {
    tranform: function(doc, ret, options) {
        delete ret.refreshToken;
        return ret;
    },
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", User);