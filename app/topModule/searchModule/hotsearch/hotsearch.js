//热搜
var data = [
		{carName:"行车记录仪"},
		{carName:"车载蓝牙"},
		{carName:"车载雷达，摄像头"},
		{carName:"车载冰箱"},
		{carName:"GPS导航"},
		{carName:"车载电视"},
		{carName:"车载加湿器"},
		{carName:"功放"}
	];
var Hotsearch = React.createClass({
	getInitialState:function(){
		//初始化数据 
		var a=[];
		data.forEach(function(val,key){
			a.push(<li><a href = "#">{val.carName}</a>/</li>)
		});	
		return {
			carItemData:a
		}
	},
	render:function(){
		return(
			<div className = "hotSeacth"><ul>{this.state.carItemData}</ul></div>
		)
	}
});
module.exports = Hotsearch;