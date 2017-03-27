var Logo = require('./logo/logo.js');
var SearchModule = require("./searchModule/searchModule.js");
var TopModule = React.createClass({
 render:function(){
 	return(
 		<div className = "top w1200">
 			<div className="fl"><Logo/></div>
 			<div className="fl"><SearchModule/></div>
 			<div className="clear"></div>
 		</div>
 	)
 }
});
module.exports = TopModule;
