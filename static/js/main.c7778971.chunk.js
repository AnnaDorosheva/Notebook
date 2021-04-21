(this.webpackJsonpnotebook=this.webpackJsonpnotebook||[]).push([[0],{12:function(t,e,a){t.exports={container:"App_container__329Ax",headText:"App_headText__2G-IA"}},14:function(t,e,a){t.exports={taskList:"TaskList_taskList__3iCTS"}},16:function(t,e,a){t.exports={filter:"TaskFilter_filter__SP7WN"}},3:function(t,e,a){t.exports={task:"Task_task__2Q9wM",lowPriority:"Task_lowPriority__1hD0i",normalPriority:"Task_normalPriority__3wL2n",highPriority:"Task_highPriority__zUZmL",taskMenu:"Task_taskMenu__3vw_L",text:"Task_text__3OzJK",btnDelete:"Task_btnDelete__1rqdj"}},31:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(13),s=a.n(r),i=a(17),o=a(1),c=a(7),l=a(8),d=a(10),u=a(9),h=a(6),j=a(4),p=a.n(j),b=a(0),k=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={text:"",priority:"normal"},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddTask(Object(o.a)({},t.state)),t.clearState()},t.handleChange=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(h.a)({},a,n))},t.clearState=function(){t.setState({text:"",priority:"normal"})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.priority,a=t.text;return Object(b.jsxs)("div",{className:p.a.head,children:[Object(b.jsx)("h1",{className:p.a.headName,children:"Your task manager"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("textarea",{className:p.a.textarea,type:"text",name:"text",value:a,placeholder:"Enter t\u0430sk content...",onChange:this.handleChange}),Object(b.jsx)("button",{className:p.a.createBtn,type:"submit",onSubmit:this.handleSubmit,children:"Create task"}),Object(b.jsx)("div",{className:p.a.selectPriority,children:Object(b.jsxs)("label",{children:["Select task priority:",Object(b.jsxs)("select",{name:"priority",value:e,onChange:this.handleChange,children:[Object(b.jsx)("option",{value:"low",children:"low"}),Object(b.jsx)("option",{value:"normal",children:"normal"}),Object(b.jsx)("option",{value:"high",children:"high"})]})]})})]})]})}}]),a}(n.Component),m=a(3),x=a.n(m),f=function(t){var e=t.text,a=t.complited,n=void 0!==a&&a,r=t.priority,s=void 0===r?"normal":r,i=t.id,o=t.onDeleteTasks,c=t.onUpdateCompleted,l=t.onUpdatePrioriry;return Object(b.jsxs)("div",{className:"".concat(x.a.task," ").concat(x.a["".concat(s,"Priority")]),children:[Object(b.jsx)("p",{className:x.a.text,children:e}),Object(b.jsxs)("div",{className:x.a.taskMenu,children:[Object(b.jsxs)("label",{children:["Your prioriry:",Object(b.jsxs)("select",{className:x.a.select,name:"priority",value:s,onChange:function(t){return l(i,t.target.value)},children:[Object(b.jsx)("option",{value:"low",children:"low"}),Object(b.jsx)("option",{value:"normal",children:"normal"}),Object(b.jsx)("option",{value:"high",children:"high"})]})]}),Object(b.jsxs)("label",{children:["Completed:",Object(b.jsx)("input",{type:"checkbox",checked:n,onChange:c})]}),Object(b.jsx)("button",{className:x.a.btnDelete,type:"button",onClick:o})]})]})},O=a(14),_=a.n(O),v=function(t){var e=t.items,a=t.onDeleteTask,n=t.onUpdateCompleted,r=t.onUpdatePrioriry;return e.length>0&&Object(b.jsx)("ul",{className:_.a.taskList,children:e.map((function(t){return Object(b.jsx)("li",{children:Object(b.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{onDeleteTasks:function(){return a(t.id)},onUpdateCompleted:function(){return n(t.id)},onUpdatePrioriry:r}))},t.id)}))})},y=a(15),g=a.n(y),T=a(16),C=a.n(T),S=function(t){var e=t.value,a=t.onChangeFilter;return Object(b.jsxs)("label",{className:C.a.filter,children:["Filter for tasks:",Object(b.jsx)("input",{type:"text",placeholder:"Type of filter tasks...",value:e,onChange:a})]})},N=a(12),P=a.n(N),w=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={tasks:[],filter:""},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.addTask=function(e){var a=Object(o.a)(Object(o.a)({},e),{},{id:g.a.generate(),complited:!1});t.setState((function(t){return{tasks:[].concat(Object(i.a)(t.tasks),[a])}}))},t.updateCompleted=function(e){t.setState((function(t){return{tasks:t.tasks.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{complited:!t.complited}):t}))}}))},t.updatePriority=function(e,a){t.setState((function(t){return{tasks:t.tasks.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{priority:a}):t}))}}))},t.deleteTask=function(e){t.setState((function(t){return{tasks:t.tasks.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("tasks");if(console.log(t),t){var e=JSON.parse(t);this.setState({tasks:e})}}},{key:"componentDidUpdate",value:function(t,e){e.tasks!==this.state.tasks&&localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"render",value:function(){var t=this.state,e=t.tasks,a=t.filter,n=function(t,e){return e.filter((function(e){return e.text.toLowerCase().includes(t.toLowerCase())}))}(a,e);return console.log(n),Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{onAddTask:this.addTask}),Object(b.jsxs)("div",{className:P.a.container,children:[Object(b.jsx)("h2",{className:P.a.headText,children:"Create your day... create your life..."}),Object(b.jsx)(S,{value:a,onChangeFilter:this.changeFilter}),Object(b.jsx)(v,{items:n,onDeleteTask:this.deleteTask,onUpdateCompleted:this.updateCompleted,onUpdatePrioriry:this.updatePriority})]})]})}}]),a}(n.Component);s.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))},4:function(t,e,a){t.exports={head:"TaskEditor_head__1ZTWc",headName:"TaskEditor_headName__Mb00o",textarea:"TaskEditor_textarea__BQEFB",createBtn:"TaskEditor_createBtn__2P-kH",selectPriority:"TaskEditor_selectPriority__1yjEh"}}},[[31,1,2]]]);
//# sourceMappingURL=main.c7778971.chunk.js.map