var http = require('http'),
	urls = process.argv.slice(2,5),
	responses = [];

for(i in urls){
	responses[i] = new get(i, urls[i])
}

function get(id, url){
	this.data = '';
	this.id = id;
	this.complete = false;
	this.handle_data = function(data){self.data += data;}
	this.handle_end = function(){
		self.complete = true;
		if(responses.length === urls.length){
			for(r in responses){if(!responses[r].complete){return}}
			for(r in responses){console.log(responses[r].data)}
		}
	}

	var self = this;

	http.get(url, function(res){
		res.on('data', self.handle_data)
		res.on('end', self.handle_end)
	})
}