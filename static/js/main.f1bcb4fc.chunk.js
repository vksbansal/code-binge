(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(78)},39:function(e,t,a){},40:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(31),o=a.n(r),c=a(3),s=a(4),l=a(6),u=a(5),d=a(7),m=(a(39),a(40),a(13)),v=a.n(m),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bottomText,a=e.ideas;return i.a.createElement("div",{id:"banner"},i.a.createElement("div",{className:"top"},i.a.createElement(v.a,{controls:!1,indicators:!1,pauseOnHover:!0,slide:!0,interval:2e4},a.map(function(e,t){return i.a.createElement(v.a.Item,{key:t},i.a.createElement("div",{className:"title"},e.title),i.a.createElement("div",{className:"desc"},e.description.replace("\n","")),i.a.createElement("div",{className:"creator"},e.creator))}))),i.a.createElement("div",{className:"bottom"},i.a.createElement("div",null,t)))}}]),t}(n.Component),h=(a(57),a(14)),f=a.n(h),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).update=function(){var e=a.props,t=(e.prefix,e.targetDate),n=f.a.duration(t.getTime()-(new Date).getTime());if(n.asSeconds()<=0)return clearInterval(a.intervalId),void a.setState({timeToDisplay:"Countdown Ended"});var i=(n=f.a.duration(n.asSeconds()-1,"seconds")).days()+" Days, "+n.hours()+" Hours, "+n.minutes()+" Min, "+n.seconds()+" Sec";a.setState({timeToDisplay:i})},a.state={timeToDisplay:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.update,1e3),this.update()}},{key:"render",value:function(){this.state.timeToDisplay;return i.a.createElement("div",{className:"countdown"},i.a.createElement("div",null,this.props.prefix),i.a.createElement("div",null,this.state.timeToDisplay))}}]),t}(n.Component),E=(a(59),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.text;return i.a.createElement("div",{id:"Footline"},i.a.createElement("span",null,e))}}]),t}(n.Component)),O=a(32),j=a.n(O),w=(a(77),new Date("2019-07-24 23:59:59")),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={ideas:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get(window.location.href+"/data.json").then(function(t){var a=t.data;e.setState({ideas:a})})}},{key:"render",value:function(){var e=this.state.ideas;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"top"},i.a.createElement("img",{src:"logo.png"}),i.a.createElement(b,{targetDate:w,prefix:"Idea Box Closes In:"})),i.a.createElement("div",{id:"bottom"}," "),i.a.createElement(p,{ideas:e,bottomText:"SUBMIT YOUR IDEA BY 24TH JULY 2019"}),i.a.createElement(E,{text:"Exciting Prizes to be won for the Most Popular Idea"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.f1bcb4fc.chunk.js.map