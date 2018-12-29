var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req,res){
	try{
		var fileContent = fs.readFileSync(__dirname +'/client' + req.url,'binary')
        res.write(fileContent,'binary')
	}catch(e){
		res.write('404 not found')
	}
	res.end()
})
server.listen(9000)
console.log('visit http://10.211.101.46:9000/index.html')

