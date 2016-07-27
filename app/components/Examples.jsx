var React=require('react');
var {Link}=require('react-router');

var Example=React.createClass({
      render:function(){
          return(
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are few examples</p>
                <ol>
                   <li>
                       <Link to='/?location=Roorkee'>Roorkee</Link>
                   </li>
                   <li>
                       <Link to='/?location=Rishikesh'>Rishikesh</Link>
                   </li>
                </ol>
            </div>
          )
      }
});

module.exports=Example;
