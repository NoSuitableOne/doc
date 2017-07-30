var app1 = new Vue({
	el: "#app-1",
	data: {
		message: "Hello Vue!"
	}
});

var app2 = new Vue({
	el: "#app-2",
	data: {
		message: "页面加载于" + new Date()
	}
});

var app3 = new Vue({
	el: "#app-3",
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: "#app-4",
	data: {
		todos: [
            {
                text: "Beijing"
            },
            {
                text: "Tokyo"
            },
            {
                text: "London"
            }
		]
	}
});

var app5 = new Vue({
	el: "#app-5",
	data: {
		message: "Hello Vue JS!"
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

Vue.component("show-msg",{
	props: ["msg"],
	template: "<div>{{ msg }}</div>"
});
var app6 = new Vue({
	el: "#app-6",
	data: {
		typetext: " "
	}
});

var timer = setInterval(function(){
    app3.seen = !app3.seen;
},3000);

Vue.component("todo-item",{
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
}); 
var app7 = new Vue({
    el: '#app-7',
    data: {
    	lists: [
            {
            	text: 'vagetable'
            },
            {
            	text: 'cheese'
            },
            {
            	text: 'any other food'
            }
    	]
    }
});

var app8 = new Vue({
    el: '#app-8',
    data: {
    	msg: "msg"
    }
});
//app8.$msg = "changed";
