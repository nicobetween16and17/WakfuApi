const { ObjectId } = require('mongodb');
const Item = require('../models/item.js');

module.exports = {


    getAll: (req, res) => {
        Item.find()
            .then(item => {
                res.status(200).json({ Result: item })

            })
            .catch(error => {
                res.status(500).json(error);
            })

    },

    getOne: (req, res) => {
        const { ref } = req.params;
        const range = parseInt(ref)
        const testquerry = Item.find({ 'definition.item.level': { '$gte': range, '$lte': range + 15 } })

        console.log(testquerry.getFilter())
        Item.find(
            { 'definition.item.level': { $gte: range-15, $lte: range } }
        ).where('definition.item.baseParameters.rarity').in([4,5,6,7]).sort({'definition.item.level':-1})
            .then(item => {

                if (item) {
                    res.status(200).json(item);
                    console.log("1");
                }
                else {
                    res.sendStatus(404);
                    console.log("2");
                }

            })
            .catch(error => {
                res.status(500).json(error);
                console.log("3",error);
            })
    },
    getSome:(req,res)=>{
        const {ref,range} = req.params
        const level = parseInt(ref)
        const rarities = range.split('_').map(Number)
        console.log('level',level,'rarities',rarities,'range',range)
        Item.find(
            { 'definition.item.level': { $gte: level-15, $lte: level} }
        ).where('definition.item.baseParameters.rarity').in(rarities).sort({'definition.item.level':-1})
            .then(item => {

                if (item) {
                    res.status(200).json(item);
                    console.log("1");
                }
                else {
                    res.sendStatus(404);
                    console.log("2");
                }

            })
            .catch(error => {
                res.status(500).json(error);
                console.log("3",error);
            })
    
    },
    getSelected:(req,res)=>{
        const {ref,range,type} = req.params
        const level = parseInt(ref)
        const rarities = range.split('_').map(Number)
        const types = type.split('_').map(Number)
        Item.find(
            { 'definition.item.level': { $gte: level-15, $lte: level } }
        ).where('definition.item.baseParameters.rarity').in(rarities).where('definition.item.baseParameters.itemTypeId').in(types).sort({'definition.item.level':-1})
            .then(item => {

                if (item) {
                    res.status(200).json(item);
                    console.log("1");
                }
                else {
                    res.sendStatus(404);
                    console.log("2");
                }

            })
            .catch(error => {
                res.status(500).json(error);
                console.log("3",error);
            })
    }
}