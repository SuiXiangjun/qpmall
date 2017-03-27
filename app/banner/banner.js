var ShufflingImg = require('./shufflingImg/shufflingImg.js');
var BannerBar = require("./bannerBar/bannerBar.js");
var Banner = React.createClass({
	render:function(){
		return(
			<div className="banner">
				<ShufflingImg/><BannerBar/>
			</div>
		)
	}
});
module.exports = Banner;
