var Bar = React.createClass({
	getInitialState:function(){
		//拼接字符串 初始化数据
		var a=[];
		a.push(
            <li className="first selectd"><a className="alist">全部商品分类</a></li>
            );
        a.push(
        	<li><a className="alist" href="/index.html">首页</a></li>
        );
        a.push(
        	<li><a className="alist" href="/customer/addInquiry.html">发布询价</a></li>
        );
        a.push(
        	<li><a className="alist">下载中心</a>
                <div className="app">
                    <p className="fl"><i>图片</i>iphone</p>
                    <p className="fr"><i>图片</i>Android</p>
                </div>
            </li>
        );
        a.push(
        	<li className="last"><a className="alist">4000-876599</a></li>
        );       
		return{
			a:a
		};
	},
	render:function(){
		return(
			<div className="bar"><ul className="w1200">{this.state.a}</ul></div>
		)
	}
});
module.exports = Bar;