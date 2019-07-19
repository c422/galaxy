(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(81),o=r(n(120)),c=r(n(206)),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.default.createElement("div",{className:c.default.hstack,style:{alignItems:this.props.verticalAlignment}},this.props.children)},t.defaultProps={verticalAlignment:i.FlexAlignment.Leading},t}(o.default.Component);t.default=l},122:function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(120)),o=r(n(207)),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:o.default.hstack},this.props.children)},t}(i.default.Component);t.default=c},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(179);t.Space=a.Space},174:function(e,t,n){e.exports=n(351)},179:function(e,t,n){"use strict";var a=n(109),r=n(110),i=n(180),o=n(183),c=n(184);Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(e){return a(this,t),i(this,o(t).call(this,e))}return c(t,e),r(t,[{key:"auth",value:function(e,t){return this.requestAPI("/space/auth",JSON.stringify({resource:e,password:t}),{method:"POST"})}},{key:"getFileList",value:function(e){return this.requestAPI("/space/list",JSON.stringify({path:e}))}},{key:"createFolder",value:function(e){var t="/"===e.slice(-1)?e:e+"/";return this.requestAPI("/space/list",JSON.stringify({path:t}),{method:"POST"})}},{key:"deleteFileOrFolder",value:function(e){return this.requestAPI("/space/list",JSON.stringify({path:e}),{method:"DELETE"})}}]),t}(n(186).BaseAPI);t.Space=l},186:function(e,t,n){"use strict";var a=n(109),r=n(110),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(187)),c=function(){function e(t){a(this,e),this.endpoint="",this.endpoint=t.endpoint}return r(e,[{key:"requestAPI",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this.endpoint+e,r=null;return n.method&&"GET"!==n.method?r=t:a=a+"?"+new URLSearchParams(Object.entries(JSON.parse(t))),o.default.request(Object.assign({data:r,headers:{"Content-Type":"application/json"},url:a,withCredentials:!0},n)).then(function(e){if(e.status>=400)throw new Error(e.statusText);return Promise.resolve(e.data)})}}]),e}();t.BaseAPI=c},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(152);t.default={hstack:a.style({display:"flex"})}},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(152);t.default={hstack:a.style({display:"flex",flexDirection:"row"})}},334:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(38),o=n.n(i),c=n(20),l=n(21),s=n(24),u=n(22),p=n(25),d=n(100),h=n(33),f=n(359),m=n(31),g={fileBrowserSegment:Object(m.a)({border:"none !important",padding:"0 !important"}),fileItem:Object(m.a)({cursor:"pointer"}),hide:Object(m.a)({display:"none !important"}),infoStack:Object(m.a)({alignItems:"center"}),nowrap:Object(m.a)({whiteSpace:"nowrap"}),padded:Object(m.a)({padding:"0 1rem"}),path:Object(m.a)({flexGrow:1}),pathSpan:Object(m.a)({color:"#4183C4",cursor:"pointer"}),selector:Object(m.a)({cursor:"pointer",marginRight:"0 !important"}),uploader:Object(m.a)({height:"1px",left:0,opacity:0,position:"absolute",top:0,width:"1px"})},v=n(364),y=n(362),E=n(357),b=n(358),O=n(361),S=n(41),k=n(352),j={Space:n(153).Space},w=n(119),C=n.n(w),P=(n(122),n(81)),_=n(154),x=n.n(_),I="https://nexus.coden.hk",N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fileList:[],loading:!0,prefix:"",selectedIndex:-1,uploadEnabled:!1,uploadProgress:0,uploadStatus:""},n.space=new j.Space({endpoint:I}),n.onUploaderPreprocess=function(e,t){n.setState({uploadEnabled:!0,uploadProgress:0,uploadStatus:""}),t(e)},n.onUploaderProgress=function(e){n.setState({uploadProgress:e})},n.onUploaderFinish=function(){n.setState({uploadStatus:"success"}),n.refresh(),setTimeout(function(){n.setState({uploadEnabled:!1})},300)},n.onNewFolderButtonClick=function(){var e=window.prompt("Folder Name");e&&n.space.createFolder(n.getPathString()+e).then(function(e){n.refresh()})},n.onDeleteButtonClick=function(){if(!(n.state.selectedIndex<0)){var e=n.state.fileList[n.state.selectedIndex],t="folder"===e.type?"/":"";n.space.deleteFileOrFolder(n.getPathString()+e.name+t).then(function(e){n.refresh()})}},n.onLeadingIconClick=function(e){n.state.selectedIndex===e?n.setState({selectedIndex:-1}):n.setState({selectedIndex:e})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"refresh",value:function(){this.props.onPathChange(this.props.pathStack),this.setState({selectedIndex:-1})}},{key:"componentDidMount",value:function(){this.listBucket(this.getPathString())}},{key:"componentWillReceiveProps",value:function(e){this.listBucket(this.getPathString(e.pathStack))}},{key:"getPathString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.pathStack,t=e.length>0?"/":"";return e.join("/")+t}},{key:"listBucket",value:function(e){var t=this;this.setState({loading:!0}),this.space.getFileList(e).then(function(e){t.setState({fileList:e.data,loading:!1,prefix:e.prefix})}).catch(function(e){t.props.history.push("/login/"+t.props.match.params.resource)})}},{key:"navigate",value:function(e){this.props.onPathChange(e.split("/").filter(function(e){return!!e}))}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{className:g.fileBrowserSegment},this.state.loading&&r.a.createElement(y.a,{active:!0,inverted:!0},r.a.createElement(E.a,null)),r.a.createElement(b.a,{color:"green",className:this.state.uploadEnabled?"":g.hide,percent:this.state.uploadProgress,attached:"top",success:"success"===this.state.uploadStatus,warning:"warning"===this.state.uploadStatus,error:"error"===this.state.uploadStatus}),r.a.createElement(O.a,{celled:!0,striped:!0},r.a.createElement(O.a.Header,null,r.a.createElement(O.a.Row,null,r.a.createElement(O.a.HeaderCell,{colSpan:"4"},r.a.createElement(C.a,{verticalAlignment:P.FlexAlignment.Center},r.a.createElement("span",{className:g.pathSpan,onClick:function(){e.navigate("")}},r.a.createElement(S.a,{name:"home"})),r.a.createElement("span",null,"/"),r.a.createElement("div",{className:g.path},this.props.pathStack.map(function(t,n,a){return r.a.createElement("span",{key:"".concat(e.getPathString(),"-nav-").concat(n)},r.a.createElement("span",{className:g.pathSpan,onClick:function(){e.navigate(a.slice(0,n+1).join("/"))}},t),r.a.createElement("span",null,"/"))})),r.a.createElement(C.a,null,r.a.createElement(k.a,{color:"green",size:"mini",type:"button",onClick:function(){document.querySelector("#s3-uploader").click()}},"Upload"),r.a.createElement(x.a,{id:"s3-uploader",className:g.uploader,signingUrl:"/space/sign",signingUrlMethod:"GET",accept:"*/*",signingUrlWithCredentials:!0,signingUrlQueryParams:{prefix:this.getPathString()},contentDisposition:"auto",scrubFilename:function(e){return encodeURI(e)},server:I,autoUpload:!0,preprocess:this.onUploaderPreprocess,onProgress:this.onUploaderProgress,onFinish:this.onUploaderFinish}),r.a.createElement(k.a,{color:"blue",size:"mini",onClick:this.onNewFolderButtonClick},"New Folder"),r.a.createElement(k.a,{color:"red",size:"mini",onClick:this.onDeleteButtonClick},"Delete"))))),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.HeaderCell,null),r.a.createElement(O.a.HeaderCell,null,"Name"),r.a.createElement(O.a.HeaderCell,null,"Size"),r.a.createElement(O.a.HeaderCell,{className:g.nowrap},"Last Modified"))),r.a.createElement(O.a.Body,null,this.state.fileList.map(function(t,n){var a,i;return a="file"===t.type?r.a.createElement("a",{href:"https://cdn.coden.hk/"+e.state.prefix+e.getPathString()+t.name},t.name):r.a.createElement("span",null,t.name),i=n===e.state.selectedIndex?"check square outline":"square outline",r.a.createElement(O.a.Row,{key:"".concat(e.getPathString(),"-").concat(n)},r.a.createElement(O.a.Cell,{collapsing:!0},r.a.createElement(S.a,{className:g.selector,name:i,onClick:function(){return e.onLeadingIconClick(n)}})),r.a.createElement(O.a.Cell,null,r.a.createElement("span",{className:g.fileItem,onClick:function(){if("file"===t.type){var n=encodeURI(e.getPathString()+t.name);window.open("".concat(I,"/space/file/?path=").concat(n))}else e.navigate(e.getPathString()+t.name+"/"),e.setState({selectedIndex:-1})}},r.a.createElement(S.a,{name:t.type}),a)),r.a.createElement(O.a.Cell,{collapsing:!0},r.a.createElement("div",{className:g.padded},t.size||"-")),r.a.createElement(O.a.Cell,{collapsing:!0,textAlign:"center"},r.a.createElement("div",{className:g.padded},t.lastModified||"-")))}))))}}]),t}(r.a.Component),A=Object(h.f)(N),F=n(363),L=(n(334),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"home"},n.handleItemClick=function(e,t){return n.setState({activeItem:t.name||""})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(f.a,{className:"navigation-bar-container"},r.a.createElement(F.a,{secondary:!0},r.a.createElement("div",{className:"main-title"},"CODEN | SPACE"),r.a.createElement(F.a.Menu,{position:"right"},r.a.createElement(F.a.Item,{name:"logout",active:"logout"===e,onClick:this.handleItemClick}))))}}]),t}(r.a.Component)),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pathStack:[]},n.onPathChange=function(e){n.setState({pathStack:e})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(f.a,null,r.a.createElement(A,{pathStack:this.state.pathStack,onPathChange:this.onPathChange})))}}]),t}(r.a.Component),U=n(360),B="https://nexus.coden.hk",D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputRef:null,loading:!1,password:""},n.space=new j.Space({endpoint:B}),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onInputChange",value:function(e){this.setState({inputRef:e.target,password:e.target.value})}},{key:"onInputKeyDown",value:function(e){13===e.keyCode&&this.onConfirm()}},{key:"onConfirm",value:function(){var e=this,t=this.props.match.params.resource;this.setState({loading:!0}),this.space.auth(t,this.state.password).then(function(n){e.props.history.push("/files/".concat(t))}).catch(function(t){e.setState({loading:!1}),e.state.inputRef.value="",alert("\u5bc6\u7801\u9519\u8bef")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{alignItems:"center",backgroundColor:"#eeeeee",display:"flex",height:"100vh",justifyContent:"center",width:"100vw"}},r.a.createElement("div",{style:{width:"40%"}},r.a.createElement(v.a,{color:"grey"},this.state.loading&&r.a.createElement(y.a,{active:!0,inverted:!0},r.a.createElement(E.a,null)),r.a.createElement("h3",null,"Login into ",this.props.match.params.resource),r.a.createElement(U.a,{fluid:!0,type:"password",placeholder:"Password",onKeyDown:function(t){e.onInputKeyDown(t)},onChange:function(t){e.onInputChange(t)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:10}},r.a.createElement(k.a,{onClick:function(){e.onConfirm()}},"Login")))))}}]),t}(r.a.Component),R=Object(h.f)(D),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{alignItems:"center",display:"flex",height:"100vh",justifyContent:"center"}},r.a.createElement("div",{style:{display:"flex",fontSize:40}},r.a.createElement(S.a,{name:"ban"}),r.a.createElement("span",{style:{marginLeft:20}},"404 Not Found")))}}]),t}(r.a.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/files/:resource",exact:!0,component:M}),r.a.createElement(h.a,{path:"/login/:resource",exact:!0,component:R}),r.a.createElement(h.a,{component:T})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(350);o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Center="center",e.Leading="flex-start",e.Trailing="flex-end"}(t.FlexAlignment||(t.FlexAlignment={}))}},[[174,1,2]]]);
//# sourceMappingURL=main.7a486a58.chunk.js.map