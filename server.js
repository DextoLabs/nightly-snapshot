var Firebase = require('firebase')

var ref = new Firebase('https://dexto.firebaseio.com')

setInterval(function(){
	var d = new Date()
	if(d.getHours()==2 && d.getMinutes()==0) {
		ref.once('value', function(snapshot){
			ref.child('snapshot').child(d.getTime()).set(snapshot.exportVal())
		})
	}
}, 60000)

