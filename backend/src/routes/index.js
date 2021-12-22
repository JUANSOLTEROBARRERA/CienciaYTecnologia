

const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/',(req,res) => res.send('Hello World'))

router.post('/registro', async (req,res) => {
    const{ user, pass, email} = req.body;
    const newUser = new User({user:user, pass:pass,email:email});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'secretkey')

    res.status(200).json({token})
})

router.post('/inisesion', async(req,res)=>{

    const { user, pass} = req.body;
    const userr = await User.findOne({user: user})
    if(!userr) return res.status(401).send('El usuario no existe.');
    if(userr.pass !== pass) return res.status(401).send('Constraseña erronea.');

    const token = jwt.sign({_id: user._id},'secretkey');
    return res.status(200).json({token});

});

router.get('/principal',(req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'Artículo 1',
            description: 'Juan Soltero',
            date: "2021-12-12"
        },
        {
            _id: 2,
            name: 'Artículo 2',
            description: 'Juan Soltero',
            date: "2021-12-12"
        },
        {
            _id: 3,
            name: 'Artículo 3',
            description: 'Juan Soltero',
            date: "2021-12-12"
        }
    ])
})

router.get('/principal2', verifyToken,(req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'Artículo 1',
            description: 'Juan Soltero',
            date: "2021-12-12"
        },
        {
            _id: 2,
            name: 'Artículo 2',
            description: 'Juan Soltero',
            date: "2021-12-12"
        },
        {
            _id: 3,
            name: 'Artículo 3',
            description: 'Juan Soltero',
            date: "2021-12-12"
        }
    ])
})

router.get('/perfil', verifyToken,(req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'Artículo xd',
            description: 'Juan Soltero',
            date: "2021-12-12"
        }
    ])
})

module.exports = router;

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('No estás autorizado 1.');
    }

    const token = req.headers.authorization.split(' ')[1]
    
    if(token == 'null'){
        return res.status(401).send('No estás autorizado 2.');
    }
    console.log(token)
    const payload = jwt.verify(token, 'secretkey', (err, decoded) => { 
        if (err) {
            return res.json({ mensaje: 'No estás autorizado 3.' });    
          } else {
            req.userId = decoded;    
            next();
          }
    })

    console.log(req.userId)
}