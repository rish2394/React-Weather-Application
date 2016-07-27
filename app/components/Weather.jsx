var React=require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeatherMap=require('openWeatherMap');

var Weather=React.createClass({
       getInitialState:function(){
            return{
                   isLoading:false
            }
       },
       handleNewCity:function(city){
            var that=this;
            this.setState({isLoading:true});
            openWeatherMap.getTemp(city).then(function(temp){
            console.log("temp: " + temp + ", city: " + city);
            setTimeout(()=>{
              that.setState({
                    city:city,
                    temp:temp,
                    isLoading:false
                  })
            },300)
           },function(errorMessage){
             that.setState({city:null, temp:null, isLoading:false});
                alert(errorMessage);
            //    this.setState({isLoading:false});

           })
       },
       render:function(){
         var {isLoading,city,temp}=this.state;
        //debugger;
        function readerMessage(){
              console.log("Inside Render Message, isLoading: "+ isLoading + ", city: " + city + ", temp: " + temp);
                    if(isLoading){
                      return <h3 className="text-center">Fetching Data</h3>;
                    }else if(city && temp){
                       return <WeatherMessage temp={temp} city={city} />
                    }
        }
        return(
               <div>
                 <h3 className="text-center">Weather Component</h3>
                 <WeatherForm onCityEntered={this.handleNewCity}/>
                 {readerMessage()}
              </div>
         )
       }
});

module.exports=Weather;
