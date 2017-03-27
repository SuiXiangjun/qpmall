var BannerBar = React.createClass({
	getInitialState:function(){
		var data = [
		["快修保养",
		 [
		 	["润滑剂","#"],
		 	["机油滤清器","#"],
		 	["火花塞","#"],
		 	["刹车片","#"],
		 	["无骨雨刮片","#"],
		 	["正时皮带","#"],
		 	["轮胎","#"]
		 ]
		],
		["汽车用品",
		 [
		 	["行车记录仪","#"],
		 	["GPS导航","#"],
		 	["真皮座椅","#"],
		 	["太阳膜","#"],
		 	["方向盘套","#"],
		 	["汽车座套","#"],
		 	["镀晶","#"],
		 	["镀膜","#"],
		 	["洗车液","#"]
		 ]
		],
		["全车配件",
		 [
		 	["变速箱客体","#"],
		 	["离合器","#"],
		 	["前叶子板","#"],
		 	["前门总成","#"],
		 	["后门总成","#"]
		 ]
		]
		];
		var a=[];
		data.forEach(function(val,key){
			var hStr = <h2>{val[0]}</h2>;
			var aStr = [];
			val[1].forEach(function(vals,keys){
				aStr.push(<a href={vals[1]}>{vals[0]}</a>)
			});
			a.push(
				<li>{hStr}<div className="s_listA clear">{aStr}</div><div className="clear"></div></li>
			)
		});
		a.push(<li><h2><a href="#">全部商品分类</a></h2></li>);
		return{
			a:a
		}
	},
	render:function(){
		return(
			<div>
			<div className="s_indexBar"></div>
			 <ul className="s_indexBarUl">{this.state.a}</ul>
			</div>
		)
	}
});
module.exports=BannerBar;