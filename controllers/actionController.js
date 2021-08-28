const Action= require('../models/action.js')


module.exports = {
    getAllaction:(req,res)=>{
        Action.find().then(action=>{if(action){res.status(200).json(action);console.log("1")}else{res.sendStatus(404);console.log("2")}}).catch(error=>{res.status(500).json(error);console.log("3",error)})
    },
    getbyId:(req,res)=>{
        console.log('Retrieve an action')
        const { id } = req.params;
        Action.find(
            {'definition.id':id}
        )
        .then(action => {

            if (action) {
                res.status(200).json(action);
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