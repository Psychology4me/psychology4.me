import{S as L,i as j,s as F,k as f,a as I,e as q,T as G,l as g,h as d,c as S,p as m,M as l,b as H,g as O,d as T,r as P,m as v,u as C,n as D,z as M,A as N,B as x,C as z}from"../chunks/index.aad57b58.mjs";import{P as J,a as K}from"../chunks/Pagination.65e4b73e.mjs";function Q(h){let s,a,t,o,r,u,i,_,c,b;return{c(){s=f("section"),a=f("div"),t=f("div"),o=f("h1"),r=P("Oops!"),u=I(),i=f("p"),_=P("Sorry, no posts to show here. "),c=f("a"),b=P("Bring me back"),this.h()},l(e){s=g(e,"SECTION",{class:!0});var n=v(s);a=g(n,"DIV",{class:!0});var $=v(a);t=g($,"DIV",{class:!0});var y=v(t);o=g(y,"H1",{class:!0});var k=v(o);r=C(k,"Oops!"),k.forEach(d),u=S(y),i=g(y,"P",{});var p=v(i);_=C(p,"Sorry, no posts to show here. "),c=g(p,"A",{href:!0,class:!0});var E=v(c);b=C(E,"Bring me back"),E.forEach(d),p.forEach(d),y.forEach(d),$.forEach(d),n.forEach(d),this.h()},h(){m(o,"class","heading-5 padding-top-10"),m(c,"href","/blog"),m(c,"class","link-underlined"),m(t,"class","container-l text-center"),m(a,"class","content"),m(s,"class","padding-top-10 padding-bottom-10")},m(e,n){H(e,s,n),l(s,a),l(a,t),l(t,o),l(o,r),l(t,u),l(t,i),l(i,_),l(i,c),l(c,b)},p:D,i:D,o:D,d(e){e&&d(s)}}}function R(h){let s,a,t,o,r,u,i,_,c,b,e,n,$,y,k;return n=new J({props:{posts:h[3]}}),y=new K({props:{currentPage:h[0],totalPosts:h[2],path:"/blog/category/"+h[1]+"/page"}}),{c(){s=f("section"),a=f("div"),t=f("div"),o=f("div"),r=f("h1"),u=P("Category: "),i=P(h[1]),_=I(),c=f("p"),b=P("Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."),e=I(),M(n.$$.fragment),$=I(),M(y.$$.fragment),this.h()},l(p){s=g(p,"SECTION",{class:!0});var E=v(s);a=g(E,"DIV",{class:!0});var A=v(a);t=g(A,"DIV",{class:!0});var w=v(t);o=g(w,"DIV",{class:!0});var B=v(o);r=g(B,"H1",{class:!0});var V=v(r);u=C(V,"Category: "),i=C(V,h[1]),V.forEach(d),_=S(B),c=g(B,"P",{class:!0});var W=v(c);b=C(W,"Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."),W.forEach(d),B.forEach(d),e=S(w),N(n.$$.fragment,w),$=S(w),N(y.$$.fragment,w),w.forEach(d),A.forEach(d),E.forEach(d),this.h()},h(){m(r,"class","heading-5 text-center padding-top-10"),m(c,"class","padding-top-2-bigscreen text-center"),m(o,"class","container-m"),m(t,"class","container-l"),m(a,"class","content"),m(s,"class","padding-top-10")},m(p,E){H(p,s,E),l(s,a),l(a,t),l(t,o),l(o,r),l(r,u),l(r,i),l(o,_),l(o,c),l(c,b),l(t,e),x(n,t,null),l(t,$),x(y,t,null),k=!0},p:D,i(p){k||(O(n.$$.fragment,p),O(y.$$.fragment,p),k=!0)},o(p){T(n.$$.fragment,p),T(y.$$.fragment,p),k=!1},d(p){p&&d(s),z(n),z(y)}}}function U(h){let s,a,t,o,r,u,i;document.title=s="Blog Category "+h[1]+" - page "+h[0];const _=[R,Q],c=[];function b(e,n){return e[3]&&e[3].length?0:1}return o=b(h),r=c[o]=_[o](h),{c(){a=f("meta"),t=I(),r.c(),u=q(),this.h()},l(e){const n=G("svelte-175qwgh",document.head);a=g(n,"META",{"data-key":!0,name:!0,content:!0}),n.forEach(d),t=S(e),r.l(e),u=q(),this.h()},h(){m(a,"data-key","description"),m(a,"name","description"),m(a,"content",`
	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.`)},m(e,n){l(document.head,a),H(e,t,n),c[o].m(e,n),H(e,u,n),i=!0},p(e,[n]){(!i||n&3)&&s!==(s="Blog Category "+e[1]+" - page "+e[0])&&(document.title=s),r.p(e,n)},i(e){i||(O(r),i=!0)},o(e){T(r),i=!1},d(e){d(a),e&&d(t),c[o].d(e),e&&d(u)}}}function X(h,s,a){let{data:t}=s;const{page:o,category:r,totalPosts:u,posts:i}=t;return h.$$set=_=>{"data"in _&&a(4,t=_.data)},[o,r,u,i,t]}class ee extends L{constructor(s){super(),j(this,s,X,U,F,{data:4})}}export{ee as default};
