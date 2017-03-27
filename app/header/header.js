var Header = React.createClass({
	getInitialState:function(){
		var hear = [];
		hear.push(<a className="hrf hearOne" href="/">商城首页</a>); 
		hear.push(
				<div className="personal">
            		<span><a className="cent" href="#">个人中心</a></span>
            		<ul>
               		 	<li><a href="#">我的订单</a></li>
                	 	<li><a href="#">我的询价单</a></li>
            		</ul>
        		</div>);
        hear.push(<a className="hrf" href="#">联系客服</a>);
        hear.push(<a className="hrf" href="#">免费注册</a>);
        hear.push(<a className="hrf qin" href="#">亲，请先登录</a>);
		return{
			hear:hear			
		}
	},
	render:function(){
		return(
			<div className="header w1200">{this.state.hear}</div>
		)
	}
});
module.exports = Header;