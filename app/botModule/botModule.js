var BotModule = React.createClass({
	getInitialState:function(){
		var botdata = {
			logoref:"./img/bot_logo.png",
			botdaohang:[[<a target="_blank" href="#">首页</a>],
			           [<a target="_blank" href="#">新手上路</a>],
			           [<a target="_blank" href="#">配送方式</a>],
			           [<a target="_blank" href="#">支付方式</a>],
			           [<a target="_blank" href="#">售后服务</a>],
			           [<a target="_blank" href="#">走进千品猫</a>]],
			rexian:"4000-876599",
			youqing: [[<li><a target="_blank" rel="nofollow" href="http://www.changjiu.com.cn/">长久集团</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.xcar.com.cn/">爱卡汽车网</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://zhihuiqiche.com/">智慧汽车网</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.auto-maintenance.com.cn/">北京汽保展</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.carservice.com.cn/">汽车与驾驶维修</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.qpzone.com.cn/index.html">汽配圈</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.xdy885.com/">新动源</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.hc360.com/">慧聪网</a><b>/</b></li>],
			         [<li><a target="_blank" rel="nofollow" href="http://www.jiadaoqiche.com/">驾到</a><b>/</b></li>]],
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
			<div className="bot clear">
			    <div className="botfloor">
			        <div className="bot-logo">
			            <img className="fl" src={this.state.botdata.logoref} />
			            <div className="bar fl">{this.state.botdata.botdaohang}</div>
			            <div className="fr" style={style.rexian}>
			                服务热线：
			                <div className="bot-tel">{this.state.botdata.rexian}</div>
			            </div>
			            <div className="clear"></div>
			        </div>
			        <div className="fl bot-link">
			            <div className="link">
			                <div><font style={style.colorfff}>友情链接：</font></div>
			                <div style={style.w500}>
			                    <ul>
			                        {this.state.botdata.youqing}       
			                    </ul>
			                </div>
			                <div className="clear"></div>
			            </div>
			            <div className="baq">
			                电信与信息服务业务经营许可证：京ICP证160311号 | 京ICP备15056593号-1 北京朝阳石各庄99号长久大厦<br/>北京千品猫科技有限公司版权所有&nbsp;&nbsp;&nbsp;&nbsp;<a href="/toSiteMap.htm" style={style.color888}>网站地图</a>
			            </div>
			        </div>
			        <div className="fr bot-ewm">
			            <ul>
			                <li>
			                    <h4>APP下载：</h4>
			                    <img src={this.state.botdata.android} width="95px" height="95px" />
			                    <span>安卓手机</span>
			                </li>
			                <li>
			                    <img src={this.state.botdata.iossrc} width="95px" height="95px"/>
			                    <span>苹果手机</span>
			                </li>
			                <li>
			                    <h4>微信询价：</h4>
			                    <img src={this.state.botdata.weixin} width="95px" height="95px"/>
			                    <span>扫一扫找货不愁</span>
			                </li>
			            </ul>
			        </div>
			        <div className="clear"></div>
			    </div>
			</div>
		)
	}
});
module.exports = BotModule;
