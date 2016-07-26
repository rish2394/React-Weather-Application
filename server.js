var express=require('express');
var app=express();
const PORT=process.env.PORT || 3000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']==='https'){
    console.log("hostname= "+req.hostname);
    res.redirect('http://'+req.hostname+req.url);
  }else{
    next();
  }
})

app.use(express.static('public'));

app.listen(PORT,function(){
  console.log("Server started listening on "+PORT);
});
