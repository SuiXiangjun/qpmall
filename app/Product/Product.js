var Product = React.createClass({ 
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
				<li className="playponull">
                    <a className="lk-img" href={val[1]}>
                    	<img className="lazy" alt="" src={val[0]} style={style.disinl} />
                    </a>
                    <p className="lk-name"><a href="#">{val[2]}</a></p>
                    <p className="lk-price sitePrice">¥<strong>{val[3]}</strong></p>
               </li>
			);
		}.bind(this));
		return(
			<div className ="sNameTest" >
			<ul className="like-pros"  ref="playponull">
				{a}
			</ul>
        	</div>
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