var Search = require('./search/search.js');
var Hotsearch = require('./hotsearch/hotsearch.js');
var SearchModule = React.createClass({
	render:function(){
		return(
			<div className="searchModule">
				<Search/><Hotsearch/>
			</div>
		)
	}
});
module.exports = SearchModule;