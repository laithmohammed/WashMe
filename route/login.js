// Dependencies
const express = require('express');
const router  = express.Router();
const Joi     = require('joi');
const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcrypt');
const firebase= require('firebase');
const Params  = require('./params.json');
const saltRounds = 10;
const secret  = 'chachacha14e'

function getObjects(obj, key, val) {
    var OBJ = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            OBJ = OBJ.concat(getObjects(obj[i], key, val));    
        } else {
            if (i == key && obj[i] == val || i == key && val == '') { OBJ.push(obj); }
            else{ 
                if (obj[i] == val && key == ''){
                    if (OBJ.lastIndexOf(obj) == -1){ OBJ.push(obj); }
                }
            }
        }
    }
    return OBJ;
}

router.post('/',(req,res)=>{
    const valid = Validating(req.body);
    if(valid.error){
        let errvalid = '';
        if(valid.error){ valid.error.details.map((index)=>{return errvalid = index.message}) }
        res.redirect(`${Params.originApp}/login?error`)
    }else{
        firebase.firestore().collection('wash').doc('users').get().then(doc => {
            let data = doc.data();
            let error = [];
            let target;
            let Email    = getObjects(data, 'email'   , req.body.user   );
            let Phone    = getObjects(data, 'phone'   , req.body.user   );
            if(Email.length === 0 && Phone.length === 0){ error.push('incorrect information, try again !!') }
            if(Email.length === 1){ target = Email[0]; }
            if(Phone.length === 1){ target = Phone[0]; }
            if(error.length > 0 ){
                // res.send(error)
                res.redirect(`${Params.originApp}/login?error`)
            }else{
                bcrypt.compare(req.body.password, target.password, function(err, result) {
                    if(err){
                        res.send(err);
                    }else{
                        if(result){
                            const token = jwt.sign({id : target.id}, secret)
                            res.cookie('X-auth-token',token);
                            res.redirect(Params.originApp)
                        }else{
                            error.push('incorrect information, try again !!');
                            // res.send(error)
                            res.redirect(`${Params.originApp}/login?error`)
                        }
                    }
                });
            }
        })
    }
})

function Validating(user) {
    const newuserSchema = {
        'user': Joi.string().min(3).max(40).required().regex(/^[a-z0-9@_.]{3,40}$/).label("phone or email"),
        'password': Joi.string().min(8).max(30).required().label("Password"),
        'submit'  : Joi.string()
    }
    return Joi.validate(user, newuserSchema);
}

module.exports = router;