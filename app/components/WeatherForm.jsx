var React=require('react');
var WeatherForm=React.createClass({

        onButtonClick:function(e){
            e.preventDefault();
            var city=this.refs.cityName.value;
            if(city.length > 0){
              
                 this.props.onCityEntered(city);
            }
        },
        render:function(){
          return(
            <div>
              <form onSubmit={this.onButtonClick}>
                 <input type="text" ref="cityName" placeholder="Enter city"></input>
                 <button>Get Weather</button>
              </form>

            </div>
          )
        }
});
module.exports=WeatherForm;
