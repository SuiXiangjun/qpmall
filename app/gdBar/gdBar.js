var GdBar = React.createClass({
	render:function(){
		var style = {
			divStyle:{width: '100%', height: '75px'},
			iStyle:{left:'234px'}
			}
		return(
			<div style={style.divStyle}>
		        <div className="s_gdBar">
		            <ul>
		                <li class="sel">精品推荐</li>
		                <li>快修保养</li>
		                <li>汽车用品</li>
		                <li>乘用车配件</li>
		                <li>商用车配件</li>
		                <li>汽保设备</li>
		            </ul>
		            <i style={style.iStyle}></i>
		        </div>
        	</div>
		);
	}
});
module.exports = GdBar;
