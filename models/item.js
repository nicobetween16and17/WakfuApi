const mongoose = require('mongoose');

// Create Schema for quest
// -Add fields (Type, constraint, validation)
// -Options 

const itemShema = mongoose.Schema({
    definition: {
        item: {
            id: Number, level: Number,
            baseParameters: { itemTypeId: Number, itemSetId: Number, rarity: Number, bindType: Number, minimumShardSlotNumber: Number, maximumShardSlotNumber: Number },
            useParameters: { useCostAp: Number, useCostMp: Number, useCostWp: Number, useRangeMin: Number, useRangeMax: Number, useTestFreeCell: Number, useTestLos: Number, useTestOnlyLine: Number, useTestNoBorderCell: Number, useWorldTarget: Number },
            graphicParameters: { gfxId: Number, femalegfxId: Number },
            properties: Array,
        },
        properties:Array,
        useEffects: Array,
        useCriticalEffects: Array,
        equipEffects: {type:Array,default:[{ effect: { definition: { actionId: Number, areaShape: Number, areaSize: Array, id: Number, params: Array } } }]}
    },
    title: { fr: String, en: String, es: String, pt: String },
    description: { fr: String, en: String, es: String, pt: String }
}, {
    collection: 'items'
})




// Create model "item"  base on "schema"
const Item = mongoose.model('Item', itemShema);
module.exports = Item;