const mongoose = require('mongoose');

const actionSchema = mongoose.Schema({
    definition:
    {
        id: Number,
        effect: String
    },
    description:
    {
        fr: String,
        en: String,
        es: String,
        pt: String
    }

}, {
    collection: 'actions'
})

const Action = mongoose.model('Action', actionSchema);
module.exports = Action