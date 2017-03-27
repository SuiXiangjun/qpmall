var FloorTitle = React.createClass({
	render:function(){
		var floorbarHtml = [];
		this.props.floorbar.forEach(function(val,key){				
			floorbarHtml.push(<li className={val[2]} onClick={this.props.screeningData.bind(this,val[0])}><a target="_self" id={val[0]}>{val[1]}</a></li>);
		}.bind(this));
		return(
			<div className="title">
                <h2 onClick={this.clickData}>快修保养</h2>
                <ul className="proTabs">{floorbarHtml}</ul>
                <div className="clear"></div>
			</div>
		)
	}
});
module.exports = FloorTitle;
