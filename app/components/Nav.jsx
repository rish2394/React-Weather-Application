var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=React.createClass({
    render:function(){
      return(
        <div>
          <h2>Nav Component</h2>
          <IndexLink to="/about" activeClass="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
          <Link to="/examples" activeClass="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
          <Link to="/" activeClass="active" activeStyle={{fontWeight:'bold'}}>Get Weather</Link>


        </div>
      );
    }
});

module.exports=Nav;
