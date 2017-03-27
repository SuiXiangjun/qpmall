var RecomProTitle = require('./recomProTitle/recomProTitle.js');
var RecomProduct = require('./recomProduct/recomProduct.js');
var RecomPro = React.createClass({
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
			<div className="likes">
				<RecomProTitle batch={this.batch} />
				<RecomProduct data = {this.state.data}/>
			</div>
		);
	}
});
module.exports = RecomPro;