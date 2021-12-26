const pubCtrl = {}

const Pub = require('../models/Pubs')

pubCtrl.getPubs = async (req,res) => {
    const pubs = await Pub.find()
    res.json(pubs)
}
pubCtrl.createPub = async (req,res) => {
    //console.log(req.body)
    const newPub = new Pub(req.body)
    
    await newPub.save()

    res.send({message: 'Se agregó la publicación'})
}
pubCtrl.getPub = async (req,res) => {
    console.log(req.params)
    const pub = await Pub.findById(req.params.id)
    res.send(pub)
}
pubCtrl.editPub = async (req,res) => {
    await Pub.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'Publicación Actualizada'})
}
pubCtrl.deletePub = async (req,res) => {
    await Pub.findByIdAndDelete(req.params.id)
    res.json({status: 'Publicación Eliminada'})
}

module.exports = pubCtrl;