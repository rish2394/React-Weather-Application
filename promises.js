function getTempCallBack(location,callback){
  callback(undefined,89);
  callback('City not Found');
}

getTempCallBack('Roorkee',function(err,temp){
     if(err){
       console.log('error',err);
     }else{
       console.log('success',temp)
     }
});

function getTempPromise(location){
  return new Promise(function(resolve, reject) {
       resolve(33);
       reject('City Not found');
  });
}

getTempPromise('Philadelphia').then(function(temp){
      console.log('promise success',temp);
},function(err){
         console.log("error",error);
});


function adder(a,b){
  return new Promise(function(resolve,reject){
           if(typeof a === 'number' && typeof b === 'number'){
             resolve([a,b]);
           }
           else{
             reject('either or both  of a and b is/are not number');
           }
  });
}


adder(3,4).then(function(...sum){
      var add=0;
      sum.forEach(function(item){
          add+=Number(item);
      })
      console.log(add);
},function(err){
  console.log('error',err);
})

adder("Hello",4).then(function(sum){
      console.log("sum =",sum);
},function(err){
  console.log('error',err);
})
