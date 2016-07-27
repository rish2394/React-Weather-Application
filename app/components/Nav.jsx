var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=React.createClass({
    render:function(){
      return(
          <div className="top-bar">
               <div className="top-bar-left">
                 <ul className="menu">

                   <li className="menu-text">React Weather App</li>
                   <li>
                       <IndexLink to="/about" activeClass="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
                   </li>
                   <li>
                       <Link to="/examples" activeClass="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                   </li>
                   <li>
                       <Link to="/" activeClass="active"

                          activeStyle={{fontWeight:'bold'}}>Get Weather</Link>
                   </li>
                 </ul>
              </div>

              <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                  <ul className="menu">
                    <li>
                        <input type="search" placeholder="search Weather"/>
                    </li>
                    <li>
                        <input type="submit" className="success button" value="Get Weather"/>
                    </li>
                  </ul>
                </form>
               </div>
          </div>
      );
    }
});
module.exports=Nav;
