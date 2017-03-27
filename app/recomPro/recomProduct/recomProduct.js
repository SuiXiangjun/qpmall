var Product = require('../../Product/Product.js')
var RecomProduct = React.createClass({
	render:function(){
		return(
			<div className="cont"><Product proData={this.props.data}/></div>
		);
	}
});
module.exports = RecomProduct;