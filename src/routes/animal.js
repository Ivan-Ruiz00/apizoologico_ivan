const express= require("express");
const router=express.Router();
const animalSchema=require("../models/animalModel");

router.post(
    "/animalitos",(req,res)=>{
        let animal=animalSchema(req.body);
        animal.save().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
    }
);

router.get(
    "/animalitos",(req,res)=>{
        animalSchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
    }
);

router.get(
    "/animalitos/:id", (req, res) => {
        const { id } = req.params;
        animalSchema
            .findById(id)
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    }
);

router.put(
    "/animalitos/:id", (req, res) => {
        let { id } = req.params;
        let { nombre, edad, tipo, fecha } = req.body;
        animalSchema
            .updateOne({ _id: id }, {
                $set: { nombre, edad, tipo, fecha }
            })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    }
);

router.delete(
    "/animalitos/:id", (req, res) => {
        const { id } = req.params;
        animalSchema
            .findByIdAndDelete(id)
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                res.json({ message: error });
            });
    }
);

module.exports=router;