(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,t,n){},202:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(37),r=n.n(a),s=n(2),o=n(27),i=n(75),u=n(7),l=n(10),j=(n(89),n(19)),d=n.n(j),b=n(3),p=n.n(b),f=n(5),h=n(22),O=n.n(h),g="https://gamingzone-ptoject.herokuapp.com",m=function(e){return O.a.get("".concat(g,"/").concat(e))},v=function(e){return O.a.get("".concat(g,"/mobile/").concat(e))},x=function(e){return O.a.get("".concat(g,"/computer/").concat(e))},w=function(e){return O.a.get("".concat(g,"/science/").concat(e))},y=function(e,t){return O.a.post("".concat(g,"/search/").concat(e),t)},N=function(e){return O.a.get("".concat(g,"/dashboard/").concat(e))},A=function(e){return O.a.delete("".concat(g,"/dashboard/delete/").concat(e))},E=function(e,t){return O.a.patch("".concat(g,"/dashboard/create/").concat(e),t)},P=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"IS_LOADING",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"IS_LOGGED_IN",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_PAGE_HOME",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_PAGE_MOBILE",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_PAGE_COMPUTER",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_PAGE_SCIENCE",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_PAGE_SEARCH",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_PAGE_DASHBOARD",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=(n(127),n(76)),U=n.n(S),M=n(77),D=n.n(M),G=(n(202),n(0)),B=function(e){var t=e.match,n=Object(s.c)((function(e){return e.articleId})),c=Object(s.c)((function(e){return e.posts.filter((function(e){return e._id===n}))}));return console.log(c),t&&!n?Object(G.jsx)("h1",{children:"Match avaliable"}):Object(G.jsxs)("div",{className:"article-div",children:[Object(G.jsx)("h1",{className:"title",children:c[0].title}),Object(G.jsxs)("p",{className:"author",children:["By ",c[0].creator," | ",D()(c[0].createdAt).format("ll")," "]}),Object(G.jsx)("img",{className:"content-img",src:c[0].selectedFile,alt:"img"}),Object(G.jsx)(U.a,{className:"content",children:c[0].markdown})]})},H=function(e){var t=e.post,n=Object(s.b)();return Object(G.jsxs)(u.b,{to:"/article/".concat(t._id),className:"card",onClick:function(){return n((e=t._id,function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ARTICLE_ID",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(G.jsx)("div",{className:"img-div",children:Object(G.jsx)("img",{className:"card-img",src:t.selectedFile,alt:"img"})}),Object(G.jsx)("h3",{className:"card-title",children:t.title})]})},J=(n(207),n.p,function(e){var t=e.posts,n=e.setCurrentPage,a=e.currentPage,r=e.pageName,o=Object(s.b)();Object(c.useEffect)((function(){o(P(!1))}));return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("h4",{className:"page-heading",children:r}),Object(G.jsx)("div",{className:"card-container",children:t.map((function(e){return Object(G.jsx)(H,{post:e},e._id)}))}),Object(G.jsxs)("div",{className:"page-div",children:[1!==a?Object(G.jsx)("span",{className:"previous-page",onClick:function(){o(P(!0)),o(n(a-1))},children:"Previous Page"}):null,12==t.length?Object(G.jsx)("span",{className:"next-page",onClick:function(){o(P(!0)),o(n(a+1))},children:"Next Page"}):null]})]})})}),V=n.p+"static/media/home.1d0cb61f.png",W=function(){console.log("Home Page");var e=Object(s.b)(),t=Object(s.c)((function(e){return e.isLoading})),n=Object(s.c)((function(e){return e.idFor.currentPageHome})),a=Object(s.c)((function(e){return e.posts}));return Object(c.useEffect)((function(){console.log("Home useEffect called"),e(P(!0)),e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:c=t.sent,a=c.data,n(P(!1)),n({type:"FETCH_ALL",payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[e,n]),t?Object(G.jsx)(d.a,{type:"Ovel",color:"#FFFF33",height:500,width:80}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{class:"bg-image-cards",children:Object(G.jsx)("img",{src:V})}),Object(G.jsx)(J,{posts:a,setCurrentPage:C,currentPage:n,pageName:"GAMING NEWS"})]})},Z=function(){console.log("In Mobile");var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mobilePosts})),n=Object(s.c)((function(e){return e.idFor.currentPageMobile})),a=Object(s.c)((function(e){return e.isLoading}));return Object(c.useEffect)((function(){e(P(!0)),console.log("first in Mobile"),e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("res in ac mo"),t.next=4,v(e);case 4:c=t.sent,a=c.data,n(P(!1)),console.log(a,"mobile"),n({type:"FETCH_ALL",payload:a}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error in ac mo"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[e,n]),a?Object(G.jsx)(d.a,{type:"Ovelots",color:"#FFFF33",height:500,width:80}):Object(G.jsx)(J,{posts:t,setCurrentPage:F,currentPage:n,pageName:"GAMES"})},K=function(){console.log("In comp");var e=Object(s.b)(),t=Object(s.c)((function(e){return e.computerPosts})),n=Object(s.c)((function(e){return e.idFor.currentPageComputer})),a=Object(s.c)((function(e){return e.isLoading}));return Object(c.useEffect)((function(){e(P(!0)),e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:c=t.sent,a=c.data,n(P(!1)),console.log(a,"computer"),n({type:"FETCH_ALL",payload:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[e,n]),a?Object(G.jsx)(d.a,{type:"Ovelots",color:"#FFFF33",height:500,width:80}):Object(G.jsx)(J,{posts:t,setCurrentPage:T,currentPage:n,pageName:"NEWS"})},Q=(s.b,function(){console.log("In Science");var e=Object(s.b)(),t=Object(s.c)((function(e){return e.sciencePosts})),n=Object(s.c)((function(e){return e.idFor.currentPageScience})),a=Object(s.c)((function(e){return e.isLoading}));return Object(c.useEffect)((function(){e(P(!0)),e(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:c=t.sent,a=c.data,n(P(!1)),console.log(a,"science"),n({type:"FETCH_ALL",payload:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[e,n]),a?Object(G.jsx)(d.a,{type:"Ovelots",color:"#FFFF33",height:500,width:80}):Object(G.jsx)(J,{posts:t,setCurrentPage:L,currentPage:n,pageName:"REVIEWS"})}),X=function(){console.log("In Search");var e=Object(s.b)(),t=Object(l.g)(),n=Object(s.c)((function(e){return e.SearchedPosts})),a=Object(s.c)((function(e){return e.idFor.currentPageSearch})),r=Object(s.c)((function(e){return e.isLoading}));console.log(n,"sesasasasasasaarchedpost");var o={data:t.state.query.toString().split(" ")};return Object(c.useEffect)((function(){e(P(!0)),e(function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(c){var a,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y(e,t);case 3:a=n.sent,r=a.data,console.log("searched data",r),c(P(!1)),c({type:"FETCH_ALL",payload:r}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(a,o))}),[e,a,n,o]),r?Object(G.jsx)(d.a,{type:"Ovelots",color:"#FFFF33",height:500,width:80}):Object(G.jsx)(J,{posts:n,setCurrentPage:I,currentPage:a,pageName:"RESULT"})},z=n(21),q=n(38),_=(n(208),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.idFor.isLoggedIn})),n=Object(c.useState)(""),a=Object(z.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(z.a)(i,2),j=u[0],d=u[1];return t?Object(G.jsx)(l.a,{to:"/dashboard"}):Object(G.jsx)("div",{className:"login-form-div",children:Object(G.jsxs)("form",{className:"login-form",onSubmit:function(t){t.preventDefault(),q.a.auth().signInWithEmailAndPassword(r,j).then((function(t){console.log("res",t),e(k(!0))})).catch((function(e){console.log("error",e)}))},children:[Object(G.jsx)("h1",{className:"login-form-h1",children:"Login"}),Object(G.jsx)("input",{className:"email-input",type:"email",placeholder:"E-mail",value:r,onChange:function(e){return o(e.target.value)}}),Object(G.jsx)("input",{className:"password-input",type:"password",placeholder:"Password",value:j,onChange:function(e){return d(e.target.value)}}),Object(G.jsx)("button",{className:"login-btn",type:"submit",children:"Login"})]})})}),Y=(n(209),n(210),function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENT_ID",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),$=function(e){var t=e.post,n=Object(s.b)();Object(c.useEffect)((function(){n(P(!1))}));return Object(G.jsxs)("div",{className:"dashboard-card",children:[Object(G.jsx)("p",{className:"dash-title",children:t.title}),Object(G.jsx)("button",{className:"dash-delete-btn",onClick:function(){var e;window.confirm("Do you want to delete the Post?")&&n((e=t._id,function(){var t=Object(f.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:c=t.sent,a=c.data,n(P(!1)),console.log("delete data",a),n({type:"DELETE",payload:e}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Delete"}),Object(G.jsx)(u.b,{to:"dashboard/markdownform",children:Object(G.jsx)("button",{className:"dash-edit-btn",onClick:function(){n(Y(t._id))},children:"Edit"})})]})},ee=function(){var e=Object(c.useState)(!1),t=Object(z.a)(e,2),n=t[0],a=t[1],r=Object(s.b)(),o=Object(s.c)((function(e){return e.dashboardPosts})),i=Object(s.c)((function(e){return e.idFor.currentPageDashboard})),u=Object(s.c)((function(e){return e.idFor.isLoggedIn})),j=Object(s.c)((function(e){return e.isLoading}));if(Object(c.useEffect)((function(){r(P(!0)),r(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:c=t.sent,a=c.data,n(P(!1)),console.log(a,"dashboard data"),n({type:"FETCH_ALL",payload:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(i))}),[i]),!u)return Object(G.jsx)(l.a,{to:"/"});if(n)return Object(G.jsx)(l.a,{to:"dashboard/markdownform"});return console.log(o),j?Object(G.jsx)(d.a,{type:"Ovel",color:"\t#FFFF33",height:500,width:80}):Object(G.jsxs)("div",{className:"dashboard-container",children:[Object(G.jsxs)("div",{className:"logout-div",children:[Object(G.jsx)("p",{className:"welcome-p",children:"Welcome back, Mujammil"}),Object(G.jsxs)("div",{className:"logout-span-div",children:[Object(G.jsx)("span",{className:"logout-span",onClick:function(){a(!0)},children:"Create Post"}),Object(G.jsx)("span",{className:"logout-span",onClick:function(){r(k(!1))},children:"Logout"})]})]}),o.map((function(e){return Object(G.jsx)($,{post:e},e._id)})),Object(G.jsxs)("div",{className:"page-div",children:[1!==i?Object(G.jsx)("span",{className:"previous-page",onClick:function(){r(P(!0)),r(R(i-1))},children:"<"}):null,Object(G.jsx)("span",{className:"next-page",onClick:function(){r(P(!0)),r(R(i+1))},children:">"})]})]})},te=(n(211),n(212),function(){return Object(G.jsxs)("form",{className:"saerch-mobile-form",children:[Object(G.jsx)("input",{placeholder:"Search"}),Object(G.jsx)("button",{children:Object(G.jsx)("i",{class:"fas fa-search"})})]})}),ne=function(e){var t=e.setMenuClicked,n=function(){t(!1)};return Object(G.jsxs)("div",{className:"mobile-menu-container",children:[Object(G.jsx)("div",{className:"menu-close",children:Object(G.jsx)("button",{onClick:n,children:Object(G.jsx)("i",{class:"fas fa-times"})})}),Object(G.jsx)(te,{}),Object(G.jsxs)("ul",{className:"mobile-menu",children:[Object(G.jsx)(u.b,{to:"/games",onClick:n,children:Object(G.jsx)("li",{children:"GAMES"})}),Object(G.jsx)(u.b,{to:"/news",onClick:n,children:Object(G.jsx)("li",{children:"NEWS"})}),Object(G.jsx)(u.b,{to:"/reviews",onClick:n,children:Object(G.jsx)("li",{children:"REVIEWS"})}),Object(G.jsx)(u.b,{to:"/login",onClick:n,children:Object(G.jsx)("li",{children:"LOGIN"})})]})]})},ce=(n(213),n(214),function(){var e=Object(s.c)((function(e){return e.idFor.isLoggedIn})),t=Object(c.useState)(!1),n=Object(z.a)(t,2),a=n[0],r=n[1];return a?Object(G.jsx)(ne,{setMenuClicked:r}):Object(G.jsxs)("div",{className:"nav-container",children:[Object(G.jsx)("div",{className:"menu-bars",children:Object(G.jsx)("button",{onClick:function(){return r(!0)},children:Object(G.jsx)("i",{class:"fas fa-bars"})})}),Object(G.jsx)("div",{className:"logo-div",children:Object(G.jsx)(u.b,{to:"/",children:Object(G.jsx)("div",{class:"logo-img",children:Object(G.jsx)("img",{src:"data:image/png;base64,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"})})})}),Object(G.jsxs)("ul",{className:"menu",children:[Object(G.jsx)(u.b,{to:"/games",style:{TextDecoration:"none"},children:Object(G.jsx)("li",{children:"GAMES"})}),Object(G.jsx)(u.b,{to:"/news",children:Object(G.jsx)("li",{children:"NEWS"})}),Object(G.jsx)(u.b,{to:"/reviews",children:Object(G.jsx)("li",{children:"REVIEWS"})}),e?Object(G.jsx)(u.b,{className:"loginlink",to:"/login",children:Object(G.jsx)("li",{children:"Dashboard"})}):Object(G.jsx)(u.b,{to:"/login",children:Object(G.jsx)("li",{className:"loginlink",children:"Login / Register"})})]}),Object(G.jsx)("div",{className:"mobile-search",children:Object(G.jsx)("button",{onClick:function(){return r(!0)},children:Object(G.jsx)("i",{class:"fas fa-search"})})})]})}),ae=(n(215),function(){return Object(G.jsxs)("div",{className:"footer-container",children:[Object(G.jsx)("div",{className:"social-network-p",children:Object(G.jsx)("p",{children:"FOLLOW US"})}),Object(G.jsxs)("div",{className:"social-network-div",children:[Object(G.jsx)("a",{target:"_blank",href:"https://www.instagram.com/mujammil4444/",children:Object(G.jsx)("div",{children:Object(G.jsx)("i",{class:"fab fa-instagram"})})}),Object(G.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/mujammil-shaikh-80a33619b/",children:Object(G.jsx)("div",{children:Object(G.jsx)("i",{class:"fab fa-linkedin-in"})})})]}),Object(G.jsx)("div",{className:"copyright-div",children:Object(G.jsxs)("p",{children:["Copyright \xa9 2021 All rights reserved by ",Object(G.jsx)("a",{children:"GAMING ZONE"})]})})]})}),re=(n(216),function(){return Object(G.jsxs)("div",{className:"page-not-found-div",children:[Object(G.jsx)("i",{class:"fas fa-ghost"}),Object(G.jsx)("h1",{className:"error-h1",children:"404"}),Object(G.jsx)("p",{className:"error-p",children:"PAGE NOT FOUND"}),Object(G.jsxs)("p",{className:"error-p2",children:["Go to ",Object(G.jsx)(u.b,{to:"/",children:"Home"})]})]})}),se=n(8),oe=n(78),ie=n.n(oe),ue=(n(217),function(){var e=Object(c.useState)({title:"",markdown:"",tags:"",selectedFile:""}),t=Object(z.a)(e,2),n=t[0],a=t[1],r=Object(s.b)(),o=Object(s.c)((function(e){return e.currentId})),i=Object(s.c)((function(e){return o?e.dashboardPosts.find((function(e){return e._id===o})):null}));console.log("Dashboard current id",o),console.log("Dashboard current post",i),Object(c.useEffect)((function(){i&&a(i)}),[i]);var u=function(){Y(""),a({title:"",markdown:"",tags:"",selectedFile:""})};return Object(G.jsxs)("form",{className:"content-form",onSubmit:function(e){var t;e.preventDefault(),""===o?(r((t=n,function(){var e=Object(f.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=t,O.a.post("".concat(g,"/dashboard/create"),n);case 3:e.sent.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),u()):(r(function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(c){var a,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("action dashboardposts editpost",t),n.prev=1,n.next=4,E(e,t);case 4:a=n.sent,r=a.data,c(P(!1)),console.log("edit data",r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(o,n)),u())},children:[Object(G.jsx)("h1",{className:"form-name",children:"Add New Post"}),Object(G.jsx)("input",{className:"input",name:"title",value:n.title,onChange:function(e){return a(Object(se.a)(Object(se.a)({},n),{},{title:e.target.value}))},placeholder:"Title",type:"text"}),Object(G.jsx)("textarea",{className:"input",name:"markdown",value:n.markdown,onChange:function(e){return a(Object(se.a)(Object(se.a)({},n),{},{markdown:e.target.value}))},placeholder:"Markdown",type:"text"}),Object(G.jsx)("input",{className:"input",name:"tags",value:n.tags,onChange:function(e){return a(Object(se.a)(Object(se.a)({},n),{},{tags:e.target.value.split(",")}))},placeholder:"Tags",type:"text"}),Object(G.jsx)(ie.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return a(Object(se.a)(Object(se.a)({},n),{},{selectedFile:t}))}}),Object(G.jsxs)("div",{className:"btn-div",children:[Object(G.jsx)("button",{className:"btn",type:"submit",children:"Submit"}),Object(G.jsx)("button",{className:"btn",onClick:function(){u()},children:"Clear"})]})]})});n(218);q.a.initializeApp({apiKey:"AIzaSyBiNUuKACuPs1SnBmNrHUymEoKQNCfkMLM",authDomain:"gaming-786.firebaseapp.com",projectId:"gaming-786",storageBucket:"gaming-786.appspot.com",messagingSenderId:"1054966162072",appId:"1:1054966162072:web:ea98f4da79b96b4f2e26ed",measurementId:"G-N7DT5XZ2L4"});var le=function(){return Object(G.jsx)(u.a,{children:Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(ce,{}),Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)(l.d,{children:[Object(G.jsx)(l.b,{path:"/",exact:!0,component:W}),Object(G.jsx)(l.b,{path:"/games",exact:!0,component:Z}),Object(G.jsx)(l.b,{path:"/news",exact:!0,component:K}),Object(G.jsx)(l.b,{path:"/reviews",exact:!0,component:Q}),Object(G.jsx)(l.b,{path:"/search",exact:!0,component:X}),Object(G.jsx)(l.b,{path:"/login",exact:!0,component:_}),Object(G.jsx)(l.b,{path:"/article/:id",exact:!0,component:B}),Object(G.jsx)(l.b,{path:"/dashboard",exact:!0,component:ee}),Object(G.jsx)(l.b,{path:"/dashboard/markdownform",exact:!0,component:ue}),Object(G.jsx)(l.b,{path:"/*",component:re})]})}),Object(G.jsx)(ae,{})]})})},je={idForDelete:"",isLoggedIn:!1,currentPageHome:1,currentPageMobile:1,currentPageComputer:1,currentPageScience:1,currentPageSearch:1,currentPageDashboard:1},de=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;default:return e}},idFor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ID_FOR_DELETE":return Object(se.a)(Object(se.a)({},e),{},{idForDelete:t.payload});case"IS_LOGGED_IN":return Object(se.a)(Object(se.a)({},e),{},{isLoggedIn:t.payload});case"CURRENT_PAGE_HOME":return Object(se.a)(Object(se.a)({},e),{},{currentPageHome:t.payload});case"CURRENT_PAGE_MOBILE":return Object(se.a)(Object(se.a)({},e),{},{currentPageMobile:t.payload});case"CURRENT_PAGE_COMPUTER":return Object(se.a)(Object(se.a)({},e),{},{currentPageComputer:t.payload});case"CURRENT_PAGE_SCIENCE":return Object(se.a)(Object(se.a)({},e),{},{currentPageScience:t.payload});case"CURRENT_PAGE_SEARCH":return Object(se.a)(Object(se.a)({},e),{},{currentPageSearch:t.payload});case"CURRENT_PAGE_DASHBOARD":return Object(se.a)(Object(se.a)({},e),{},{currentPageDashboard:t.payload});default:return e}},mobilePosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;default:return e}},computerPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;default:return e}},sciencePosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;default:return e}},dashboardPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"DELETE":return e.filter((function(e){return e._id!==t.payload}));case"EDIT":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},articleId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLE_ID":return t.payload;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return t.payload;default:return e}},currentId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_ID":return t.payload;default:return e}},searchedPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;default:return e}}}),be=Object(o.e)(de,Object(o.d)(Object(o.a)(i.a)));r.a.render(Object(G.jsx)(s.a,{store:be,children:Object(G.jsx)(le,{})}),document.getElementById("root"))},89:function(e,t,n){}},[[220,1,2]]]);
//# sourceMappingURL=main.f03c5b01.chunk.js.map