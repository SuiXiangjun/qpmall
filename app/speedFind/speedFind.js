var SpeedFind = React.createClass({
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
				<div className="news" style={style.newsStley}>
                    <div className="tit" style={style.titStley}>
                        <h3>极速找货</h3>
                        <a className="more" href="#" target="_self">发布精准询价 &gt;&gt;</a>
                    </div>
                    <ul className="news-list">
                        <div className="zuoy" ref ="initquy" >
                            <img src="./img/index_1mor.png" />
                            <input ref="speedPhone" type="text" placeholder="请输入手机号" />
                            <span onClick = {this.onToggleOrder}>我要询价</span>
                        </div>
                        <div className="relquyfont" style={style.relquyfontStley} ref="relquy">
                            <font style={style.fontStyle}>您的询价请求已提交</font><br/>客服会与您联系，请耐心等待！
                            <div class="sxjTime" style={style.sxjTimeStyle}><span ref="djtime">3</span>秒后返回</div>
                        </div>
                    </ul>
                </div>
		)
		
	}
});
module.exports = SpeedFind;