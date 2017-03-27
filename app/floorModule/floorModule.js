var FloorTitle = require('./floorTitle/floorTitle.js');
var FloorProbox = require('./floorProbox/floorProbox.js');
var FloorProduct = require('./floorProduct/floorProduct.js');
var FloorModule = React.createClass({
	getInitialState:function(){
		return{floorData:this.props.floorData}
	},
	//点击帅选数据
	screeningData:function(liId,event){
		console.log("当前id:"+liId);
		var musData = [
			[
				["https://www.qpmall.com:10000/M00/21/3C/ZcjD5VaxwaCAVCmSAAFnrJbPKfg646.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/21/3C/ZcjD5VaxwaCAVCmSAAFnrJbPKfg646.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/21/3C/ZcjD5VaxwaCAVCmSAAFnrJbPKfg646.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/21/3C/ZcjD5VaxwaCAVCmSAAFnrJbPKfg646.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/21/4A/ZcjD5VazBAyAAfh6AAEeBur0HJc185.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/1D/A8/ZcjD5VaaC3yAHzGGAAD8pGihUeI075.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/21/41/ZcjD5Vaxy-CAbmC3AAF9MAFhw2g342.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/21/41/ZcjD5Vaxy-CAbmC3AAF9MAFhw2g342.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/21/41/ZcjD5Vaxy-CAbmC3AAF9MAFhw2g342.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/21/41/ZcjD5Vaxy-CAbmC3AAF9MAFhw2g342.jpg.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/21/37/ZcjD5VaxuveAf8iQAAF5cVJYHsI350.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/21/37/ZcjD5VaxuveAf8iQAAF5cVJYHsI350.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/21/37/ZcjD5VaxuveAf8iQAAF5cVJYHsI350.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/21/37/ZcjD5VaxuveAf8iQAAF5cVJYHsI350.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/21/3B/ZcjD5VaxwF-AE6K4AAFpRsxDntY773.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/21/3B/ZcjD5VaxwF-AE6K4AAFpRsxDntY773.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/21/3B/ZcjD5VaxwF-AE6K4AAFpRsxDntY773.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/21/3B/ZcjD5VaxwF-AE6K4AAFpRsxDntY773.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/24/87/ZcjD5Vfg0IuAPuaJAAUzkOwIzK0713.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/24/87/ZcjD5Vfg0IuAPuaJAAUzkOwIzK0713.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/24/87/ZcjD5Vfg0IuAPuaJAAUzkOwIzK0713.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/24/87/ZcjD5Vfg0IuAPuaJAAUzkOwIzK0713.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/23/FC/ZcjD5Ve1GmOAWsDwAAGHGhdhxoY893.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/23/FC/ZcjD5Ve1GmOAWsDwAAGHGhdhxoY893.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/23/FC/ZcjD5Ve1GmOAWsDwAAGHGhdhxoY893.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/23/FC/ZcjD5Ve1GmOAWsDwAAGHGhdhxoY893.jpg","#","这44444里是产品名字","333"]
			],
			[
				["https://www.qpmall.com:10000/M00/24/16/ZcjD5Ve2XEGAZfZhAABvaktgkZ4436.jpg","#","这里是点击改变的改变的顶不动按实际课代表节哀顺变基本上都上班你说的把尚德个","111111"],
				["https://www.qpmall.com:10000/M00/24/16/ZcjD5Ve2XEGAZfZhAABvaktgkZ4436.jpg","#","s这里是2品名字","111"],
				["https://www.qpmall.com:10000/M00/24/16/ZcjD5Ve2XEGAZfZhAABvaktgkZ4436.jpg","#","这里是产5字","555"],
				["https://www.qpmall.com:10000/M00/24/16/ZcjD5Ve2XEGAZfZhAABvaktgkZ4436.jpg","#","这44444里是产品名字","333"]
			]
		];
		var floordata = this.state.floorData;
		//通过id获取的数据
		floordata.floordata1=musData[Math.round(Math.random()*(musData.length-1))];
		floordata.floordata2 = musData[Math.round(Math.random()*(musData.length-1))];
		//改变当前元素的class
		floordata.floorbar.forEach(function(val,key){	
			if(liId==val[0]){
				val[2]="cur";
			}else{
				val[2]="";	
			}
		});
		this.setState({
			floorData:floordata
		});
	},
	render:function(){
		return(
			<div className = "proLists">
				<FloorTitle floorbar={this.state.floorData.floorbar} floornum={this.state.floorData.floornum} screeningData={this.screeningData} />
				<div className = "proWp">
					<div className="fl"><FloorProbox floorimg={this.state.floorData.floorimg} floorlin={this.state.floorData.floorlin} /></div>
					<div className="fl">
						<FloorProduct floordata1={this.state.floorData.floordata1} floordata2={this.state.floorData.floordata2} />
					</div>
					<div className="clear"></div>
				</div>
			</div>
		)
	}
});
module.exports = FloorModule;