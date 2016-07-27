var React=require('react');

var WeatherMessage=React.createClass({
       render:function(){
        var {temp,city}=this.props;
         return(
           <div>
                <h4 className="text-center">It's {temp} in {city}!</h4>
           </div>
         )
       }
});

module.exports=WeatherMessage;
