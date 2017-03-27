var RecomProTitle = React.createClass({
	render:function(){
		console.log(this.props.batch);
		return(
			<div className="title">
                <h2>精品推荐</h2>
                <a id="replace-btn" target="_self" onClick={this.props.batch}>换一批<b></b></a>
                <div className="clear"></div>
            </div>
		)
	}
});
module.exports = RecomProTitle;