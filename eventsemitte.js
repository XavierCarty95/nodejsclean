const events = require("events");
const util = require("util")


var Person = function(name){
    this.name = name;
}
util.inherits(Person,events.EventEmitter);

var james = new Person("james");
var nyu = new Person("nyu");
var ryan = new Person("ryan");

var people = [james , nyu , ryan];

people.forEach(function(person){
    person.on("speak", function(mesg){
        console.log(person.name + " said " + mesg)
        
    });
});

james.emit('speak', "hey guy")



