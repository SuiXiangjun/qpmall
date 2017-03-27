/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Product = React.createClass({displayName: "Product", 
	render:function(){
		var style = {
	      disinl:{
	      	display: 'inline'
	      }
	  };
		var proData = this.props.proData;
		var a = [];
		proData.forEach(function(val,key){
			a.push(
				React.createElement("li", {className: "playponull"}, 
                    React.createElement("a", {className: "lk-img", href: val[1]}, 
                    	React.createElement("img", {className: "lazy", alt: "", src: val[0], style: style.disinl})
                    ), 
                    React.createElement("p", {className: "lk-name"}, React.createElement("a", {href: "#"}, val[2])), 
                    React.createElement("p", {className: "lk-price sitePrice"}, "¥", React.createElement("strong", null, val[3]))
               )
			);
		}.bind(this));
		return(
			React.createElement("div", {className: "sNameTest"}, 
			React.createElement("ul", {className: "like-pros", ref: "playponull"}, 
				a
			)
        	)
			);
	},
	componentWillUpdate:function(){
		var t = ReactDOM.findDOMNode(this.refs.playponull);
		$(t).find("li").fadeOut(10);
	},
	componentDidMount:function(){
		var t = ReactDOM.findDOMNode(this.refs.playponull);
		$(t).find("li").fadeIn(300);
	},
	componentDidUpdate:function(){
		var t = ReactDOM.findDOMNode(this.refs.playponull);
		$(t).find("li").fadeIn(300);
	}
});
module.exports = Product;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var ShufflingImg = __webpack_require__(12);
var BannerBar = __webpack_require__(11);
var Banner = React.createClass({displayName: "Banner",
	render:function(){
		return(
			React.createElement("div", {className: "banner"}, 
				React.createElement(ShufflingImg, null), React.createElement(BannerBar, null)
			)
		)
	}
});
module.exports = Banner;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Bar = React.createClass({displayName: "Bar",
	getInitialState:function(){
		//拼接字符串 初始化数据
		var a=[];
		a.push(
            React.createElement("li", {className: "first selectd"}, React.createElement("a", {className: "alist"}, "全部商品分类"))
            );
        a.push(
        	React.createElement("li", null, React.createElement("a", {className: "alist", href: "/index.html"}, "首页"))
        );
        a.push(
        	React.createElement("li", null, React.createElement("a", {className: "alist", href: "/customer/addInquiry.html"}, "发布询价"))
        );
        a.push(
        	React.createElement("li", null, React.createElement("a", {className: "alist"}, "下载中心"), 
                React.createElement("div", {className: "app"}, 
                    React.createElement("p", {className: "fl"}, React.createElement("i", null, "图片"), "iphone"), 
                    React.createElement("p", {className: "fr"}, React.createElement("i", null, "图片"), "Android")
                )
            )
        );
        a.push(
        	React.createElement("li", {className: "last"}, React.createElement("a", {className: "alist"}, "4000-876599"))
        );       
		return{
			a:a
		};
	},
	render:function(){
		return(
			React.createElement("div", {className: "bar"}, React.createElement("ul", {className: "w1200"}, this.state.a))
		)
	}
});
module.exports = Bar;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var BotModule = React.createClass({displayName: "BotModule",
	getInitialState:function(){
		var botdata = {
			logoref:"./img/bot_logo.png",
			botdaohang:[[React.createElement("a", {target: "_blank", href: "#"}, "首页")],
			           [React.createElement("a", {target: "_blank", href: "#"}, "新手上路")],
			           [React.createElement("a", {target: "_blank", href: "#"}, "配送方式")],
			           [React.createElement("a", {target: "_blank", href: "#"}, "支付方式")],
			           [React.createElement("a", {target: "_blank", href: "#"}, "售后服务")],
			           [React.createElement("a", {target: "_blank", href: "#"}, "走进千品猫")]],
			rexian:"4000-876599",
			youqing: [[React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.changjiu.com.cn/"}, "长久集团"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.xcar.com.cn/"}, "爱卡汽车网"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://zhihuiqiche.com/"}, "智慧汽车网"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.auto-maintenance.com.cn/"}, "北京汽保展"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.carservice.com.cn/"}, "汽车与驾驶维修"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.qpzone.com.cn/index.html"}, "汽配圈"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.xdy885.com/"}, "新动源"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.hc360.com/"}, "慧聪网"), React.createElement("b", null, "/"))],
			         [React.createElement("li", null, React.createElement("a", {target: "_blank", rel: "nofollow", href: "http://www.jiadaoqiche.com/"}, "驾到"), React.createElement("b", null, "/"))]],
			iossrc:"./img/iosewm.jpg",
			android:"./img/anzhewm.jpg",
			weixin:"./img/weixin.jpg"
		}
		return{botdata:botdata}
	},
	render:function(){				
		var style={
			rexian:{textAlign: 'right',fontSize:'14px'},
			w500:{width:'500px'},
			colorfff:{color:'#fff'},
			color888:{color:'#888'}
		};
		return(
			React.createElement("div", {className: "bot clear"}, 
			    React.createElement("div", {className: "botfloor"}, 
			        React.createElement("div", {className: "bot-logo"}, 
			            React.createElement("img", {className: "fl", src: this.state.botdata.logoref}), 
			            React.createElement("div", {className: "bar fl"}, this.state.botdata.botdaohang), 
			            React.createElement("div", {className: "fr", style: style.rexian}, 
			                "服务热线：", 
			                React.createElement("div", {className: "bot-tel"}, this.state.botdata.rexian)
			            ), 
			            React.createElement("div", {className: "clear"})
			        ), 
			        React.createElement("div", {className: "fl bot-link"}, 
			            React.createElement("div", {className: "link"}, 
			                React.createElement("div", null, React.createElement("font", {style: style.colorfff}, "友情链接：")), 
			                React.createElement("div", {style: style.w500}, 
			                    React.createElement("ul", null, 
			                        this.state.botdata.youqing
			                    )
			                ), 
			                React.createElement("div", {className: "clear"})
			            ), 
			            React.createElement("div", {className: "baq"}, 
			                "电信与信息服务业务经营许可证：京ICP证160311号 | 京ICP备15056593号-1 北京朝阳石各庄99号长久大厦", React.createElement("br", null), "北京千品猫科技有限公司版权所有    ", React.createElement("a", {href: "/toSiteMap.htm", style: style.color888}, "网站地图")
			            )
			        ), 
			        React.createElement("div", {className: "fr bot-ewm"}, 
			            React.createElement("ul", null, 
			                React.createElement("li", null, 
			                    React.createElement("h4", null, "APP下载："), 
			                    React.createElement("img", {src: this.state.botdata.android, width: "95px", height: "95px"}), 
			                    React.createElement("span", null, "安卓手机")
			                ), 
			                React.createElement("li", null, 
			                    React.createElement("img", {src: this.state.botdata.iossrc, width: "95px", height: "95px"}), 
			                    React.createElement("span", null, "苹果手机")
			                ), 
			                React.createElement("li", null, 
			                    React.createElement("h4", null, "微信询价："), 
			                    React.createElement("img", {src: this.state.botdata.weixin, width: "95px", height: "95px"}), 
			                    React.createElement("span", null, "扫一扫找货不愁")
			                )
			            )
			        ), 
			        React.createElement("div", {className: "clear"})
			    )
			)
		)
	}
});
module.exports = BotModule;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var FloorTitle = __webpack_require__(15);
var FloorProbox = __webpack_require__(13);
var FloorProduct = __webpack_require__(14);
var FloorModule = React.createClass({displayName: "FloorModule",
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
			React.createElement("div", {className: "proLists"}, 
				React.createElement(FloorTitle, {floorbar: this.state.floorData.floorbar, floornum: this.state.floorData.floornum, screeningData: this.screeningData}), 
				React.createElement("div", {className: "proWp"}, 
					React.createElement("div", {className: "fl"}, React.createElement(FloorProbox, {floorimg: this.state.floorData.floorimg, floorlin: this.state.floorData.floorlin})), 
					React.createElement("div", {className: "fl"}, 
						React.createElement(FloorProduct, {floordata1: this.state.floorData.floordata1, floordata2: this.state.floorData.floordata2})
					), 
					React.createElement("div", {className: "clear"})
				)
			)
		)
	}
});
module.exports = FloorModule;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var GdBar = React.createClass({displayName: "GdBar",
	render:function(){
		var style = {
			divStyle:{width: '100%', height: '75px'},
			iStyle:{left:'234px'}
			}
		return(
			React.createElement("div", {style: style.divStyle}, 
		        React.createElement("div", {className: "s_gdBar"}, 
		            React.createElement("ul", null, 
		                React.createElement("li", {class: "sel"}, "精品推荐"), 
		                React.createElement("li", null, "快修保养"), 
		                React.createElement("li", null, "汽车用品"), 
		                React.createElement("li", null, "乘用车配件"), 
		                React.createElement("li", null, "商用车配件"), 
		                React.createElement("li", null, "汽保设备")
		            ), 
		            React.createElement("i", {style: style.iStyle})
		        )
        	)
		);
	}
});
module.exports = GdBar;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var Header = React.createClass({displayName: "Header",
	getInitialState:function(){
		var hear = [];
		hear.push(React.createElement("a", {className: "hrf hearOne", href: "/"}, "商城首页")); 
		hear.push(
				React.createElement("div", {className: "personal"}, 
            		React.createElement("span", null, React.createElement("a", {className: "cent", href: "#"}, "个人中心")), 
            		React.createElement("ul", null, 
               		 	React.createElement("li", null, React.createElement("a", {href: "#"}, "我的订单")), 
                	 	React.createElement("li", null, React.createElement("a", {href: "#"}, "我的询价单"))
            		)
        		));
        hear.push(React.createElement("a", {className: "hrf", href: "#"}, "联系客服"));
        hear.push(React.createElement("a", {className: "hrf", href: "#"}, "免费注册"));
        hear.push(React.createElement("a", {className: "hrf qin", href: "#"}, "亲，请先登录"));
		return{
			hear:hear			
		}
	},
	render:function(){
		return(
			React.createElement("div", {className: "header w1200"}, this.state.hear)
		)
	}
});
module.exports = Header;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var New = React.createClass({displayName: "New",
	getInitialState:function(){
		var a=[];
		var b = [
			["这2里是新闻新闻列表啦啦啦阿里阿里","#"],
			["这3里是新闻新闻列表啦啦啦阿里阿里","#"],
			["这4里是新闻新闻列表啦啦啦阿里阿里","#"],
			["这5里是新闻新闻列表啦啦啦阿里阿里","#"]
		];
		b.forEach(function(val,key){
			a.push(React.createElement("li", null, key+1, ". ", React.createElement("a", {href: val[1]}, val[0])));
		});
		return{
			a:a
		}
	},
	render:function(){
		return(
			React.createElement("div", {className: "news"}, 
                React.createElement("div", {className: "tit"}, 
                    React.createElement("h3", null, "千品资讯"), 
                    React.createElement("a", {className: "more", href: "#"}, "更多 >>")
                ), 
                React.createElement("ul", {className: "news-list"}, this.state.a)
            )
		)
	}
});
module.exports = New;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var RecomProTitle = __webpack_require__(16);
var RecomProduct = __webpack_require__(17);
var RecomPro = React.createClass({displayName: "RecomPro",
	getInitialState:function(){
		var data = [
		//图片地址 链接  名字 价格
			["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
			["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这里是2品名字","111"],
			["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这里是产5字","555"],
			["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这44444里是产品名字","333"],
			["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这里是5666666产品名字","7777"],
			["https://www.qpmall.com:10000/M00/24/3E/ZcjD5Ve_8dKAUH-FAARf865WFq0009.jpg","#","这里是5666666产品名字","7777"]
		]
		return{
			data:data
		}
	},
	batch:function(){
		var a4 =[];
		a4.push([
		//图片地址 链接  名字 价格
			["https://www26.qpmall.com:10000/M00/0B/A0/ZcjD5VZb822AbGlXAAbgvchBnGA191.jpg","#","这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
			["https://www26.qpmall.com:10000/M00/0B/A0/ZcjD5VZb822AbGlXAAbgvchBnGA191.jpg","#","这里是2品名字","111"],
			["https://www26.qpmall.com:10000/M00/0B/A0/ZcjD5VZb822AbGlXAAbgvchBnGA191.jpg","#","这里是产5字","555"],
			["https://www26.qpmall.com:10000/M00/0B/A0/ZcjD5VZb822AbGlXAAbgvchBnGA191.jpg","#","这44444里是产品名字","333"],
			["https://www26.qpmall.com:10000/M00/0B/A0/ZcjD5VZb822AbGlXAAbgvchBnGA191.jpg","#","这里是5666666产品名字","7777"],
			["https://www26.qpmall.com:10000/M00/0B/A0/ZcjD5VZb822AbGlXAAbgvchBnGA191.jpg","#","这里是5666666产品名字","7777"]
			]);
			a4.push([
		//图片地址 链接  名字 价格
			["https://www.qpmall.com:10000/M00/26/9E/ZcjD5VhCPE2ABKBTAAIgEco9QeU342.jpg","#","这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
			["https://www.qpmall.com:10000/M00/26/9E/ZcjD5VhCPE2ABKBTAAIgEco9QeU342.jpg","#","这里是2品名字","111"],
			["https://www.qpmall.com:10000/M00/26/9E/ZcjD5VhCPE2ABKBTAAIgEco9QeU342.jpg","#","这里是产5字","555"],
			["https://www.qpmall.com:10000/M00/26/9E/ZcjD5VhCPE2ABKBTAAIgEco9QeU342.jpg","#","这44444里是产品名字","333"],
			["https://www.qpmall.com:10000/M00/26/9E/ZcjD5VhCPE2ABKBTAAIgEco9QeU342.jpg","#","这里是5666666产品名字","7777"],
			["https://www.qpmall.com:10000/M00/26/9E/ZcjD5VhCPE2ABKBTAAIgEco9QeU342.jpg","#","这里是5666666产品名字","7777"]
			]);
			a4.push([
		//图片地址 链接  名字 价格
			["https://www.qpmall.com:10000/M00/22/F4/ZcjD5VchZ8iASuxBAAKuvMcsGRo741.jpg","#","这是电话费三大部分坚实的报告啥都不干你们都不敢你不等方面干嘛呢电饭锅美女豆腐干豆腐卖不过里是产品名字","6666"],
			["https://www.qpmall.com:10000/M00/22/F4/ZcjD5VchZ8iASuxBAAKuvMcsGRo741.jpg","#","这里是2品名字","111"],
			["https://www.qpmall.com:10000/M00/22/F4/ZcjD5VchZ8iASuxBAAKuvMcsGRo741.jpg","#","这里是产5字","555"],
			["https://www.qpmall.com:10000/M00/22/F4/ZcjD5VchZ8iASuxBAAKuvMcsGRo741.jpg","#","这44444里是产品名字","333"],
			["https://www.qpmall.com:10000/M00/22/F4/ZcjD5VchZ8iASuxBAAKuvMcsGRo741.jpg","#","这里是5666666产品名字","7777"],
			["https://www.qpmall.com:10000/M00/22/F4/ZcjD5VchZ8iASuxBAAKuvMcsGRo741.jpg","#","这里是5666666产品名字","7777"]
			]);
		//换一批换一批
		this.setState({
			data:a4[Math.round(Math.random()*(a4.length-1))]
		});
		//console.log(this.state.data);
	},
	render:function(){
		return(
			React.createElement("div", {className: "likes"}, 
				React.createElement(RecomProTitle, {batch: this.batch}), 
				React.createElement(RecomProduct, {data: this.state.data})
			)
		);
	}
});
module.exports = RecomPro;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var SpeedFind = React.createClass({displayName: "SpeedFind",
	onToggleOrder:function(){
		var tel = this.refs.speedPhone.value;
            if(tel){
                var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
                if(!reg.test(tel)){
                    alert("手机格式不正确！");
                }else{
                   this.refs.initquy.style.display="none";
                   this.refs.relquy.style.display="block";
                   this.daoTime();
                }
            }else{
                alert("手机号不能为空！");
            }
	},
	//倒计时
    daoTime:function() {
        var wait = 3;
        var tthis = this;
        var tdjs = setInterval(function () {
            if (wait == 1) {
                window.clearInterval(tdjs);
                tthis.refs.speedPhone.value="";
                tthis.refs.initquy.style.display="block";
                tthis.refs.relquy.style.display="none";
                tthis.refs.djtime.innerHTML ="3";
            } else {
                wait--;
                tthis.refs.djtime.innerHTML=wait;

            }
        }, 1000);
    },
	render:function(){
		var style = {
			newsStley:{marginTop:'5px'},
			titStley:{marginBottom:'3px'},
			relquyfontStley:{display:'none'},
			fontStyle:{
				fontSize: '16px',
				fontWeight: '800',
				lineHeight: '32px'
			},
			sxjTimeStyle:{
				color:'#cfcfcf',
				marginTop:'10px'
			}
		}
		return(
				React.createElement("div", {className: "news", style: style.newsStley}, 
                    React.createElement("div", {className: "tit", style: style.titStley}, 
                        React.createElement("h3", null, "极速找货"), 
                        React.createElement("a", {className: "more", href: "#", target: "_self"}, "发布精准询价 >>")
                    ), 
                    React.createElement("ul", {className: "news-list"}, 
                        React.createElement("div", {className: "zuoy", ref: "initquy"}, 
                            React.createElement("img", {src: "./img/index_1mor.png"}), 
                            React.createElement("input", {ref: "speedPhone", type: "text", placeholder: "请输入手机号"}), 
                            React.createElement("span", {onClick: this.onToggleOrder}, "我要询价")
                        ), 
                        React.createElement("div", {className: "relquyfont", style: style.relquyfontStley, ref: "relquy"}, 
                            React.createElement("font", {style: style.fontStyle}, "您的询价请求已提交"), React.createElement("br", null), "客服会与您联系，请耐心等待！", 
                            React.createElement("div", {class: "sxjTime", style: style.sxjTimeStyle}, React.createElement("span", {ref: "djtime"}, "3"), "秒后返回")
                        )
                    )
                )
		)
		
	}
});
module.exports = SpeedFind;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Logo = __webpack_require__(18);
var SearchModule = __webpack_require__(20);
var TopModule = React.createClass({displayName: "TopModule",
 render:function(){
 	return(
 		React.createElement("div", {className: "top w1200"}, 
 			React.createElement("div", {className: "fl"}, React.createElement(Logo, null)), 
 			React.createElement("div", {className: "fl"}, React.createElement(SearchModule, null)), 
 			React.createElement("div", {className: "clear"})
 		)
 	)
 }
});
module.exports = TopModule;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var BannerBar = React.createClass({displayName: "BannerBar",
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
			var hStr = React.createElement("h2", null, val[0]);
			var aStr = [];
			val[1].forEach(function(vals,keys){
				aStr.push(React.createElement("a", {href: vals[1]}, vals[0]))
			});
			a.push(
				React.createElement("li", null, hStr, React.createElement("div", {className: "s_listA clear"}, aStr), React.createElement("div", {className: "clear"}))
			)
		});
		a.push(React.createElement("li", null, React.createElement("h2", null, React.createElement("a", {href: "#"}, "全部商品分类"))));
		return{
			a:a
		}
	},
	render:function(){
		return(
			React.createElement("div", null, 
			React.createElement("div", {className: "s_indexBar"}), 
			 React.createElement("ul", {className: "s_indexBarUl"}, this.state.a)
			)
		)
	}
});
module.exports=BannerBar;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var ShufflingImg = React.createClass({displayName: "ShufflingImg",
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
			React.createElement("div", {className: "shufflingImg"}, 
				React.createElement("a", {href: this.state.c, target: "_blank"}, 
					React.createElement("img", {src: this.state.a, title: this.state.b})
				)
			)
		)
	}
});
module.exports = ShufflingImg;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var FloorProbox = React.createClass({displayName: "FloorProbox",
	render:function(){
		var style = {display: 'inline'};
		var plinksHtml =[];
		this.props.floorlin.forEach(function(val,kay){
			plinksHtml.push(
				React.createElement("li", null, React.createElement("a", {href: val[0]}, val[1]))
			);
		});
		return(
			React.createElement("div", {className: "proBox"}, 
                React.createElement("a", {href: "#"}, 
                	React.createElement("img", {className: "lazy", alt: "", src: this.props.floorimg, style: style})
                ), 
                React.createElement("div", {className: "pLinks"}, 
                    React.createElement("ul", null, plinksHtml)
                )
            )
		);
	}
});
module.exports = FloorProbox;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Product = __webpack_require__(0);
var FloorProduct = React.createClass({displayName: "FloorProduct",
	render:function(){
		return(
			React.createElement("div", null, 
				React.createElement("div", {className: "cont"}, React.createElement(Product, {proData: this.props.floordata1})), 
				React.createElement("div", {className: "cont"}, React.createElement(Product, {proData: this.props.floordata2}))
			)
		);
	}
});
module.exports = FloorProduct;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var FloorTitle = React.createClass({displayName: "FloorTitle",
	render:function(){
		var floorbarHtml = [];
		this.props.floorbar.forEach(function(val,key){				
			floorbarHtml.push(React.createElement("li", {className: val[2], onClick: this.props.screeningData.bind(this,val[0])}, React.createElement("a", {target: "_self", id: val[0]}, val[1])));
		}.bind(this));
		return(
			React.createElement("div", {className: "title"}, 
                React.createElement("h2", {onClick: this.clickData}, "快修保养"), 
                React.createElement("ul", {className: "proTabs"}, floorbarHtml), 
                React.createElement("div", {className: "clear"})
			)
		)
	}
});
module.exports = FloorTitle;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var RecomProTitle = React.createClass({displayName: "RecomProTitle",
	render:function(){
		console.log(this.props.batch);
		return(
			React.createElement("div", {className: "title"}, 
                React.createElement("h2", null, "精品推荐"), 
                React.createElement("a", {id: "replace-btn", target: "_self", onClick: this.props.batch}, "换一批", React.createElement("b", null)), 
                React.createElement("div", {className: "clear"})
            )
		)
	}
});
module.exports = RecomProTitle;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Product = __webpack_require__(0)
var RecomProduct = React.createClass({displayName: "RecomProduct",
	render:function(){
		return(
			React.createElement("div", {className: "cont"}, React.createElement(Product, {proData: this.props.data}))
		);
	}
});
module.exports = RecomProduct;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var Logo = React.createClass({displayName: "Logo",
	render:function (){
		return(
			React.createElement("div", {className: "logo"}, React.createElement("a", {href: "#", title: "千品猫"}))
		)
	}
});
module.exports = Logo;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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
var Hotsearch = React.createClass({displayName: "Hotsearch",
	getInitialState:function(){
		//初始化数据 
		var a=[];
		data.forEach(function(val,key){
			a.push(React.createElement("li", null, React.createElement("a", {href: "#"}, val.carName), "/"))
		});	
		return {
			carItemData:a
		}
	},
	render:function(){
		return(
			React.createElement("div", {className: "hotSeacth"}, React.createElement("ul", null, this.state.carItemData))
		)
	}
});
module.exports = Hotsearch;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Search = __webpack_require__(21);
var Hotsearch = __webpack_require__(19);
var SearchModule = React.createClass({displayName: "SearchModule",
	render:function(){
		return(
			React.createElement("div", {className: "searchModule"}, 
				React.createElement(Search, null), React.createElement(Hotsearch, null)
			)
		)
	}
});
module.exports = SearchModule;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

//搜索
var Search = React.createClass({displayName: "Search",
	render:function(){
		return(
			React.createElement("div", {className: "search"}, 
				React.createElement("label", null, "请选择车型"), React.createElement("em", null), 
				React.createElement("input", {type: "text", placeholder: "请输入商品名或OEM号", name: "搜索", autocomplete: "off"}), 
				React.createElement("button", null, "搜索")
			)
		)
	}
});
module.exports = Search;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Header = __webpack_require__(6);
var TopModule = __webpack_require__(10);
var Bar = __webpack_require__(2);
var Banner = __webpack_require__(1);
var SpeedFind = __webpack_require__(9);
var New = __webpack_require__(7);
var GdBar = __webpack_require__(5);
var RecomPro = __webpack_require__(8);
var FloorModule = __webpack_require__(4);
var BotModule = __webpack_require__(3);
var MainContent = React.createClass({displayName: "MainContent",
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
			floorHtml.push(React.createElement(FloorModule, {floorData: val}))
		}.bind(this));
		return(
			React.createElement("div", null, 
				React.createElement("div", {className: "wheader"}, React.createElement(Header, null)), 
				React.createElement(TopModule, null), 
				React.createElement(Bar, null), 
				React.createElement("div", {className: "show-box"}, 
					React.createElement(Banner, null), 
					React.createElement("div", {className: "new-side"}, 
						React.createElement(SpeedFind, null), 	
						React.createElement(New, null)
					), 
					React.createElement("div", {className: "clear"})
				), 
				React.createElement("div", {className: "w1200"}, 
					React.createElement(GdBar, null), 
					React.createElement(RecomPro, null), 
					floorHtml
				), 
				React.createElement(BotModule, null)
			)
		);	
	}
});


ReactDOM.render(React.createElement(MainContent, null),document.getElementById('qpcontion'))

/***/ })
/******/ ]);