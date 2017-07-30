var Out = {
	template: '<div>A custom out component!</div>'
};
var exampleComp = new Vue({
	el: '#example',
	components:{
        "my-component": Out
	}
});

Vue.component('child', {
  // 声明 props
  props: ['myMsg'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像“this.message”这样使用
  template: '<div><span>{{ myMsg }}</span></div>'
})
var ChildComponent = new Vue({
    el: "#example2"
});

Vue.component('props-out',{
    props: {
    	propA: Number,
    	propB: [String,Number]
    },
    template: "<div>{{ propA }}</div>"
});
var propsComp = new Vue({
	el: "#example3"
});

Vue.component('layout-temp',{
	template: '<div>'+
	              '<slot name="header">没有内容，我就显示（头）</slot>'+
	              '<p>模板内容：bala,bala,bala...</p>'+
	              '<slot name="footer">没有内容，我就显示（尾）</slot>'+
	          '</div>'
});

Vue.component('layout-dad',{
    template: '<div>'+
                   '<h1>我是父组件的标题</h1>'+
                   '<div id="inner1">'+
                       '<layout-temp>'+
                           '<h2 slot="header">父组件需要的header</h2>'+
                           '<h2 slot="footer">父组件需要的footer</h2>'+
                       '</layout-temp>'+
                   '</div>'+
                   '<h1>我是父组件的footer</h1>'+
               '</div>'
});
var layoutTemp = new Vue({
	el: "#example4"
});

var innerTemp = new Vue({
	el: "#inner1"
});

