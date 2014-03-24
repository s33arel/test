var cp = require('child_process').spawn,
	pwd = cp('pwd'),
	ls = cp('ls', ['-a'])

pwd.stdout.pipe(process.stdout)
ls.stdout.pipe(process.stdout)


