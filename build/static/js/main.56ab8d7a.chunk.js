(this["webpackJsonpform-list"]=this["webpackJsonpform-list"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),l=a.n(i),o=(a(15),a(16),a(9)),r=a(2),c=a(3),h=a(5),d=a(4),u=a(1),m=a(6);var b=function(e){return s.a.createElement("ul",null,e.list.map((function(t,a){return s.a.createElement("li",{key:a},t,s.a.createElement("i",{className:"fas fa-check btn btn-done",onClick:e.funcDone}),s.a.createElement("i",{className:"fas fa-window-close btn btn-delete",onClick:e.funcDelete}))})))},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={value:"",list:["\u0417\u0440\u043e\u0431\u0438\u0442\u0438 ToDo List","\u0417\u0440\u043e\u0431\u0438\u0442\u0438 \u0441\u0442\u0438\u043b\u0456"]},a.onAddItem=a.onAddItem.bind(Object(u.a)(a)),a.onChangeValue=a.onChangeValue.bind(Object(u.a)(a)),a.onMakeDone=a.onMakeDone.bind(Object(u.a)(a)),a.onDelete=a.onDelete.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onChangeValue",value:function(e){this.setState({value:e.target.value})}},{key:"onAddItem",value:function(){this.setState((function(e){return{list:[].concat(Object(o.a)(e.list),[e.value]),value:""}})),console.log(this.state.list)}},{key:"onMakeDone",value:function(e){e.target.parentNode.classList.add("done")}},{key:"onDelete",value:function(e){var t=this.state.list.indexOf(e.target.parentNode.innerText);console.log(t),this.setState(this.state.list.splice(t,1))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b,{list:this.state.list,funcDone:this.onMakeDone,funcDelete:this.onDelete}),s.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChangeValue}),s.a.createElement("button",{className:"btn-add",type:"button",onClick:this.onAddItem,disabled:!this.state.value},"Add"))}}]),t}(s.a.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleName=a.handleName.bind(Object(u.a)(a)),a.handlePassword=a.handlePassword.bind(Object(u.a)(a)),a.handleCheck=a.handleCheck.bind(Object(u.a)(a)),a.handleMail=a.handleMail.bind(Object(u.a)(a)),a.state={name:"",password:"",email:"",checked:!0,validation:!1,errorName:"",errorPassword:"",errorMail:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){!this.state.name||" "===this.state.name||this.state.name.match(/\d+/)?this.setState({validation:!1}):""===this.state.password||" "===this.state.password||this.state.password.includes("{")?this.setState({validation:!1}):!1===this.state.checked?this.setState({validation:!1}):""!==this.state.email&&" "!==this.state.email&&this.state.email.match(/^.+@.+\..+$/gim)?this.setState({validation:!0}):this.setState({validation:!1}),this.state.validation&&alert("You are awesome!"),e.preventDefault()}},{key:"handleName",value:function(e){this.setState({name:e.target.value}),this.state.name.match(/\d+/)?this.setState({errorName:"Numbers is forbidden",validation:!1}):this.state.name.match(/\d+/)||this.setState({errorName:""})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value}),this.state.password.includes("{")?this.setState({errorPassword:"'{' sign is forbidden",validation:!1}):this.state.password.includes("/")||this.setState({errorPassword:""}),console.log(this.state.password)}},{key:"handleCheck",value:function(e){this.setState({checked:!this.state.checked}),console.log(this.state.checked)}},{key:"handleMail",value:function(e){this.setState({email:e.target.value}),this.state.email.match(/^.+@.+\..+$/gim)?this.state.password.match(/^.+@.+\..+$/gim)||this.setState({errorMail:""}):this.setState({errorMail:"Not correct email",validation:!1}),console.log(this.state.email)}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",name:"name",onChange:this.handleName,placeholder:"your name"}),s.a.createElement("p",null,this.state.errorName),s.a.createElement("input",{type:"text",name:"password",onChange:this.handlePassword,placeholder:"password"}),s.a.createElement("p",null,this.state.errorPassword),s.a.createElement("input",{type:"text",name:"email",onChange:this.handleMail,placeholder:"email@inbox.com"}),s.a.createElement("p",null,this.state.errorMail),s.a.createElement("div",{className:"checkBox"},s.a.createElement("input",{type:"checkbox",name:"checkbox",id:"checkbox",onChange:this.handleCheck,checked:this.state.checked}),s.a.createElement("label",{for:"checkbox"},"Keep me signed in")),s.a.createElement("button",{type:"submit"},"SIGN IN"))}}]),t}(s.a.Component);var f=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"ToDoList"},s.a.createElement("h1",{className:"title"},"To Do List:"),s.a.createElement(v,null)),s.a.createElement("div",{className:"LoginForm"},s.a.createElement("h1",null,"sign in to your account"),s.a.createElement(p,null),s.a.createElement("a",{href:"https://yarko-ua.github.io/boot/"},"Forgot your password?")))};var k=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.56ab8d7a.chunk.js.map