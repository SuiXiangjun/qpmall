var ShufflingImg = React.createClass({
	getInitialState:function(){
		var a="./img/new.jpg";
		var b = "新活动";
		var c = "#"
		return{
			a:a,
			b:b,
			c:c
		}
	},
	render:function(){
		return(
			<div className="shufflingImg">
				<a href={this.state.c} target="_blank">
					<img src={this.state.a} title={this.state.b} />
				</a>
			</div>
		)
	}
});
module.exports = ShufflingImg;