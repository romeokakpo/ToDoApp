(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{10:function(t,e,s){},20:function(t,e,s){},21:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),i=s(11),c=s.n(i),o=s(7),r=s(2),l=s(3),h=s(5),u=s(4),d=s(0),b=function(t){return Object(d.jsxs)("header",{children:[Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)("h2",{children:"To do App\ud83d\udcdd"}),Object(d.jsx)("small",{children:"By Rom\xe9o Kakpo"})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn-dark pos",onClick:function(){return t.formClick()},children:["Nouvelle liste"," ",Object(d.jsx)("i",{className:"bi bi-plus-circle"})]})]})},j=s(13),p=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={task:""},a}return Object(l.a)(s,[{key:"handleChange",value:function(t){this.setState({task:t.target.value}),this.props.lastTask&&this.props.lastTask(t.target.value)}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[!this.props.tasks.length&&"Entrez votre t\xe2che ci-dessous et cliquez sur le bouton + pour l'ajouter :)",!this.props.toogleTaskList&&Object(d.jsx)("ul",{className:"list-group",children:this.props.tasks.map((function(e){return Object(d.jsx)("li",{className:"list-group-item",children:e},"add".concat(t.props.tasks.indexOf(e)))}))}),Object(d.jsxs)("div",{className:"input-group mb-2",children:[Object(d.jsx)("input",{type:"text",name:"tasks",className:"form-control","aria-describedby":"button-addon2",value:this.state.task,onChange:this.handleChange.bind(this)}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-success",id:"button-addon2",onClick:function(){t.state.task&&-1===t.props.tasks.indexOf(t.state.task)&&t.props.onClick(t.state.task),t.setState({task:""})},children:Object(d.jsx)("i",{className:"bi bi-plus-square"})})]})]})}}]),s}(n.a.Component);function k(t){return Object(d.jsx)("button",{type:"button",className:"btn btn-outline-danger",title:"Supprimer une t\xe2che",children:Object(d.jsx)("i",{className:"bi bi-trash"})})}function m(t){var e=Object(a.useState)(t.content.status),s=Object(j.a)(e,2),i=s[0],c=s[1];return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("input",{id:"".concat(t.id,"-").concat(t.tasks.indexOf(t.content)),className:"form-check-input me-2",type:"checkbox",checked:i,onChange:function(e){c(e.target.checked),t.onTaskStatusChange(t.listIndex,t.taskIndex,e.target.checked)}}),Object(d.jsx)("label",{htmlFor:"".concat(t.id,"-").concat(t.tasks.indexOf(t.content)),children:t.content.content}),Object(d.jsx)("i",{className:"bi bi-trash task-trash",onClick:function(){return t.onDelTask(t.listIndex,t.taskIndex)}})]})}function O(t){return t.tasks.map((function(e,s){return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(m,{content:e,id:t.id,listIndex:t.listIndex,taskIndex:s,onDelTask:t.onDelTask,onTaskStatusChange:t.onTaskStatusChange,tasks:t.tasks})},"add".concat(t.tasks.indexOf(e)))}))}var f=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={isToogle:!0},a}return Object(l.a)(s,[{key:"handleClick",value:function(){this.setState((function(t){return{isToogle:!t.isToogle}}))}},{key:"render",value:function(){var t=this;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"list-group",children:[Object(d.jsxs)("li",{className:"list-group-item listTitle",onClick:this.handleClick.bind(this),children:[Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsxs)("h3",{children:[this.props.listofTask.name," ",this.props.listofTask.status?Object(d.jsx)("i",{style:{color:"lime"},className:"bi bi-check-square-fill"}):null]}),Object(d.jsx)("small",{children:this.props.listofTask.date})]}),Object(d.jsx)("div",{className:"buttonTrash",onClick:function(){return t.props.onTrash(t.props.i)},children:Object(d.jsx)(k,{})})]}),!this.state.isToogle&&Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)(O,{tasks:this.props.listofTask.tasks,id:this.props.id,listIndex:this.props.i,onDelTask:this.props.onDelTask,onTaskStatusChange:this.props.onTaskStatusChange}),Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsx)(p,{tasks:this.props.listofTask.tasks.map((function(t){return t.content})),onClick:function(e){return t.props.onUpdate(t.props.i,e)},toogleTaskList:!0})})]})]})}),Object(d.jsx)("hr",{})]})}}]),s}(n.a.Component);var x=function(t){var e=[];return t.data.length&&t.data.forEach((function(s,a){e.push(Object(d.jsx)(f,{listofTask:s,id:s.id,onTrash:t.onTrash,onUpdate:t.onUpdate,onDelTask:t.onDelTask,onTaskStatusChange:t.onTaskStatusChange,i:a},"".concat(s.id)))})),t.data.length?Object(d.jsx)("div",{className:"container",children:e}):Object(d.jsx)("div",{className:"container text-primary",children:"Pas de liste pour le moment :)"})},v=s(12),g=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={name:"",date:"".concat((new Date).getFullYear(),"-").concat(1===((new Date).getMonth()+1+"").length?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1,"-").concat(1===((new Date).getDate()+"").length?"0"+(new Date).getDate():(new Date).getDate()),status:!1,tasks:[],error:[!1,!1]},a}return Object(l.a)(s,[{key:"handleLastTaskAdd",value:function(t){this.lastTask=t}},{key:"handleChange",value:function(t){this.setState(Object(v.a)({},t.target.name,t.target.value))}},{key:"handleAddTask",value:function(t){var e=[].concat(Object(o.a)(this.state.tasks),[t]);this.setState({tasks:e})}},{key:"handleSubmit",value:function(t){void 0===this.lastTask||this.state.tasks.includes(this.lastTask)||this.state.tasks.push(this.lastTask);var e=[!1,!1];if(this.state.name||(e[0]=!0),!1===/^\d{4}-\d{2}-\d{2}$/.test(this.state.date)&&(e[1]=!0),!1===e[0]&&!1===e[1])return this.props.submitNewList(this.state,t);this.setState({error:e}),t.preventDefault()}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"container form",style:{border:"1px solid #c6c6c6"},children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Nom de la liste"}),this.state.error[0]&&Object(d.jsxs)("span",{className:"text-danger",children:[Object(d.jsx)("br",{}),"Nom obligatoire !"]}),Object(d.jsx)("input",{name:"name",type:"text",className:"form-control",id:"exampleFormControlInput1",value:this.state.name,onChange:this.handleChange.bind(this)})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"exampleFormControlInput2",className:"form-label",children:"D\xe9finir la date"}),this.state.error[1]&&Object(d.jsxs)("span",{className:"text-danger",children:[Object(d.jsx)("br",{}),"Date Invalide !"]}),Object(d.jsx)("input",{name:"date",type:"date",className:"form-control",id:"exampleFormControlInput2",value:this.state.date,onChange:this.handleChange.bind(this)})]}),Object(d.jsx)(p,{tasks:this.state.tasks,onClick:this.handleAddTask.bind(this),lastTask:this.handleLastTaskAdd.bind(this)}),Object(d.jsxs)("button",{type:"submit",className:"btn btn-success mb-2",children:["Ajouter"," "]})]})})}}]),s}(n.a.Component),T=(s(10),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).setListStatus=function(t,e){t[e].tasks.every((function(t){return t.status}))?t[e].status=!0:t[e].status=!1},a.state={formActive:!1,data:[]},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"shouldComponentUpdate",value:function(t,e){return localStorage.setItem("todoAppList",JSON.stringify(e.data)),!0}},{key:"loadData",value:function(){var t;try{t=JSON.parse(localStorage.getItem("todoAppList"))}catch(e){}this.setState({data:t?t.sort((function(t,e){return t.status-e.status})):[]})}},{key:"handleFormStatus",value:function(){this.setState((function(t){return{formActive:!t.formActive}}))}},{key:"handleSubmitNewList",value:function(t,e){var s={name:t.name,date:t.date,tasks:t.tasks.map((function(t){return{content:t,status:!1}})),id:this.state.data.length?Math.max.apply(Math,Object(o.a)(this.state.data.map((function(t){return t.id}))))+1:1,status:!1};this.setState((function(t){return{formActive:!t.formActive,data:[s].concat(Object(o.a)(t.data))}})),e.preventDefault()}},{key:"handleTrashList",value:function(t){var e=this.state.data.slice();e.splice(t,1),this.setState({data:e})}},{key:"handleUpdateDataTask",value:function(t,e){var s=this.state.data.slice();s[t].tasks.push({content:e,status:!1}),this.setListStatus(s,t),this.setState({data:s})}},{key:"handleTrashTask",value:function(t,e){var s=this.state.data.slice();s[t].tasks.splice(e,1),this.setListStatus(s,t),this.setState({data:s})}},{key:"handleTaskStatusChange",value:function(t,e,s){var a=this.state.data.slice();a[t].tasks[e].status=s,this.setListStatus(a,t),this.setState({data:a})}},{key:"render",value:function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(b,{formClick:this.handleFormStatus.bind(this)}),Object(d.jsxs)("div",{className:"contenu",children:[this.state.formActive&&Object(d.jsx)(g,{submitNewList:this.handleSubmitNewList.bind(this)}),Object(d.jsx)(x,{data:this.state.data,onUpdate:this.handleUpdateDataTask.bind(this),onTrash:this.handleTrashList.bind(this),onDelTask:this.handleTrashTask.bind(this),onTaskStatusChange:this.handleTaskStatusChange.bind(this)})]})]})}}]),s}(n.a.Component));s(19),s(20);c.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f630900b.chunk.js.map