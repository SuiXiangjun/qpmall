var Product = require('../../Product/Product.js');
var FloorProduct = React.createClass({
	render:function(){
		return(
			<div>
				<div className="cont"><Product proData={this.props.floordata1}/></div>
				<div className="cont"><Product proData={this.props.floordata2}/></div>
			</div>
		);
	}
});
module.exports = FloorProduct;