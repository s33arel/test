var http = require('http'),
	url = process.argv[2],
	data_str = ''

if(!url){
	console.log('need url as first arg')
	process.exit()
}

http.request(url, function(res){
	res.on('data', function(data){
		data_str += data
	})
	res.on('end', function(data){
		console.log(data_str.length)
		console.log(data_str)
	})
	res.on('error', function(e){
		console.log(e)
	})
}).end()