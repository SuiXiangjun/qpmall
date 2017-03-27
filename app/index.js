var Header = require('./header/header.js');
var TopModule = require('./topModule/topModule.js');
var Bar = require('./bar/bar.js');
var Banner = require("./banner/banner.js");
var SpeedFind = require("./speedFind/speedFind.js");
var New = require("./news/new.js");
var GdBar = require("./gdBar/gdBar.js");
var RecomPro = require("./recomPro/recomPro.js");
var FloorModule = require("./floorModule/floorModule.js");
var BotModule = require('./botModule/botModule.js');
var MainContent = React.createClass({
	getInitialState:function(){
		//第一个楼层
		var floorDataOne={
			//楼层号
			floornum:0,
			//楼层图片
			floorimg:'https://www.qpmall.com:10000/M00/23/5F/ZcjD5VdWNgSAM2JjAACH-9qgppk841.jpg',
			//楼层图片下面的链接
			floorlin:[
				["#","油品a"],
				["#","过滤系统"],
				["#","点火系统"],
				["#","照明系统"],
				["#","化工养护"],
				["#","制动系统"],
				["#","雨刮"],
				["#","正时系统"],
				["#","蓄电池"],
				["#","轮胎"],
				["#","季节性产品"],
				["#","组合套餐"]
			],
			//楼层标题导航
			floorbar:[
			//id 名字 是否当前选中
				[00,"热门","cur"],[11,"奥迪",""],[22,"大众",""],[33,"丰田",""],[44,"路虎",""],[55,"福特",""],[66,"雷诺",""]
			],
			//楼层数据1
			floordata1:[
				["https://www.qpmall.com:10000/M00/26/90/ZcjD5VgrxziAQL10AAC0eTeZIg8287.jpg","#","ss这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
				["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/26/90/ZcjD5VgrxziAQL10AAC0eTeZIg8287.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这44444里是产品名字","333"]
			],
			//楼层数据2
			floordata2:[
				["https://www.qpmall.com:10000/M00/26/90/ZcjD5VgrxziAQL10AAC0eTeZIg8287.jpg","#","ff222这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
				["https://www.qpmall.com:10000/M00/24/3E/ZcjD5VgrxziAQL10AAC0eTeZIg8287-FAARf865WFq0009.jpg","#","222这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/26/90/ZcjD5VgrxziAQL10AAC0eTeZIg8287.jpg","#","2222这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/24/3E/ZcjD5VgrxziAQL10AAC0eTeZIg8287-FAARf865WFq0009.jpg","#","222这44444里是产品名字","333"]
			]
		};
		//第二个楼层
		var floorDataTwo={
			//楼层号
			floornum:1,
			//楼层图片
			floorimg:'https://www.qpmall.com:10000/M00/23/5F/ZcjD5VdWNmuALnWWAACjC7Juqs0238.jpg',
			//楼层图片下面的链接
			floorlin:[
				["#","安全防盗"],
				["#","汽车电子"],
				["#","第二从娄"],
				["#","等等等等"],
				["#","化工养护"],
				["#","制动系统"],
				["#","雨刮"],
				["#","正时系统"],
				["#","蓄电池"],
				["#","轮胎"],
				["#","季节性产品"],
				["#","组合套餐"]
			],
			//楼层标题导航
			floorbar:[
			//id 名字
				[00,"热门","cur"],[11,"美容车蜡",""],[22,"美容清洁",""],[33,"丰田",""],[44,"路虎",""],[55,"福特",""],[66,"雷诺",""]
			],
			//楼层数据1
			floordata1:[
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","ss这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","这44444里是产品名字","333"]
			],
			//楼层数据2
			floordata2:[
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","ff222这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","222这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","2222这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","222这44444里是产品名字","333"]
			]
		};
		var floordata=[];
		floordata.push(floorDataOne);
		floordata.push(floorDataTwo);
		return{
			floordata:floordata
		}
	},
	render: function(){
		var floorHtml = [];
		this.state.floordata.forEach(function(val,key){
			floorHtml.push(<FloorModule floorData={val}/>)
		}.bind(this));
		return(
			<div>
				<div className="wheader"><Header/></div>
				<TopModule/>
				<Bar/> 
				<div className="show-box">
					<Banner/>
					<div className ="new-side">
						<SpeedFind/>	
						<New/>
					</div>
					<div className="clear"></div>
				</div>
				<div className="w1200">
					<GdBar/>
					<RecomPro/>
					{floorHtml}
				</div>
				<BotModule/>
			</div>
		);	
	}
});


ReactDOM.render(<MainContent/>,document.getElementById('qpcontion'))