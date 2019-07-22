var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', function(req, res, next) {
  //  res.send(req.session.user);
    var Nloginbar=document.getElementsByName(loginbar);
    var Nuserinfobar=document.getElementsByName(userinfobar);
    if (req.session.user)
    {
        Nloginbar.style.display="none";
        Nuserinfobar.style.display="block";
    }
    else
    {
        Nloginbar.style.display="block";
        Nuserinfobar.style.display="none";
    }
});