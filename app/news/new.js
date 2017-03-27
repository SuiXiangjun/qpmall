var New = React.createClass({
	getInitialState:function(){
		var a=[];
		var b = [
			["这2里是新闻新闻列表啦啦啦阿里阿里","#"],
			["这3里是新闻新闻列表啦啦啦阿里阿里","#"],
			["这4里是新闻新闻列表啦啦啦阿里阿里","#"],
			["这5里是新闻新闻列表啦啦啦阿里阿里","#"]
		];
		b.forEach(function(val,key){
			a.push(<li>{key+1}.&nbsp;<a href={val[1]}>{val[0]}</a></li>);
		});
		return{
			a:a
		}
	},
	render:function(){
		return(
			<div className="news">
                <div className="tit">
                    <h3>千品资讯</h3>
                    <a className="more" href="#">更多 &gt;&gt;</a>
                </div>
                <ul className="news-list">{this.state.a}</ul>
            </div>
		)
	}
});
module.exports = New;