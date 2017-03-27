var FloorProbox = React.createClass({
	render:function(){
		var style = {display: 'inline'};
		var plinksHtml =[];
		this.props.floorlin.forEach(function(val,kay){
			plinksHtml.push(
				<li><a href={val[0]}>{val[1]}</a></li>
			);
		});
		return(
			<div className="proBox">
                <a href="#">
                	<img className="lazy" alt="" src={this.props.floorimg} style={style} />
                </a>
                <div className="pLinks">
                    <ul>{plinksHtml}</ul>
                </div>
            </div>
		);
	}
});
module.exports = FloorProbox;