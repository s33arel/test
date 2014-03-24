var cp = require('child_process').spawn,
	i = 0,
	infos = [],
	lasterr = ''

//cd's up one dir until root, stores an ls 
while(true){
	var cwd = process.cwd(),
		ls = cp('ls')
	
	infos[i] = {dir:cwd, contents:''}
	ls.stdout.on('data', ondata.bind(infos[i]))
	ls.stdout.on('end', onend.bind(infos[i]))

	if(cwd !== '/'){
		process.chdir('..')
	}else{
		break
	}
i++}

function ondata(d){this.contents += d.toString()}
function onend(){this.contents = this.contents.split("\n")}

//basic repl
process.stdin.resume()
process.stdin.on("data", function(d) {
	try{
		console.log(eval(d.toString()))
	}catch(err){
		lasterr = err
		console.log('------------------------------------\nerror! type "lasterr" to see message\n------------------------------------\n')
	}
});