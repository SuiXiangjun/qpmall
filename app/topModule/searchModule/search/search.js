//搜索
var Search = React.createClass({
	render:function(){
		return(
			<div className="search">
				<label>请选择车型</label><em></em>
				<input type="text" placeholder="请输入商品名或OEM号" name="搜索" autocomplete="off" />
				<button>搜索</button>
			</div>
		)
	}
});
module.exports = Search;