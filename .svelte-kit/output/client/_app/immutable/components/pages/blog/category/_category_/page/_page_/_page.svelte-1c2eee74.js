import{S as M,i as R,s as j,k as f,a as I,e as x,R as F,l as g,h as d,c as S,n as p,L as l,b as H,f as O,t as q,q as P,m as v,r as C,B as D,w as A,x as L,y as N,z}from"../../../../../../../chunks/index-120223f3.js";import{P as G,a as J}from"../../../../../../../chunks/Pagination-36ec6323.js";function K(h){let s,a,t,o,r,u,i,_,c,b;return{c(){s=f("section"),a=f("div"),t=f("div"),o=f("h1"),r=P("Oops!"),u=I(),i=f("p"),_=P("Sorry, no posts to show here. "),c=f("a"),b=P("Bring me back"),this.h()},l(e){s=g(e,"SECTION",{class:!0});var n=v(s);a=g(n,"DIV",{class:!0});var $=v(a);t=g($,"DIV",{class:!0});var y=v(t);o=g(y,"H1",{class:!0});var k=v(o);r=C(k,"Oops!"),k.forEach(d),u=S(y),i=g(y,"P",{});var m=v(i);_=C(m,"Sorry, no posts to show here. "),c=g(m,"A",{href:!0,class:!0});var E=v(c);b=C(E,"Bring me back"),E.forEach(d),m.forEach(d),y.forEach(d),$.forEach(d),n.forEach(d),this.h()},h(){p(o,"class","heading-5 padding-top-10"),p(c,"href","/blog"),p(c,"class","link-underlined"),p(t,"class","container-l text-center"),p(a,"class","content"),p(s,"class","padding-top-10 padding-bottom-10")},m(e,n){H(e,s,n),l(s,a),l(a,t),l(t,o),l(o,r),l(t,u),l(t,i),l(i,_),l(i,c),l(c,b)},p:D,i:D,o:D,d(e){e&&d(s)}}}function Q(h){let s,a,t,o,r,u,i,_,c,b,e,n,$,y,k;return n=new G({props:{posts:h[3]}}),y=new J({props:{currentPage:h[0],totalPosts:h[2],path:"/blog/category/"+h[1]+"/page"}}),{c(){s=f("section"),a=f("div"),t=f("div"),o=f("div"),r=f("h1"),u=P("Category: "),i=P(h[1]),_=I(),c=f("p"),b=P("Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."),e=I(),A(n.$$.fragment),$=I(),A(y.$$.fragment),this.h()},l(m){s=g(m,"SECTION",{class:!0});var E=v(s);a=g(E,"DIV",{class:!0});var T=v(a);t=g(T,"DIV",{class:!0});var w=v(t);o=g(w,"DIV",{class:!0});var B=v(o);r=g(B,"H1",{class:!0});var V=v(r);u=C(V,"Category: "),i=C(V,h[1]),V.forEach(d),_=S(B),c=g(B,"P",{class:!0});var W=v(c);b=C(W,"Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."),W.forEach(d),B.forEach(d),e=S(w),L(n.$$.fragment,w),$=S(w),L(y.$$.fragment,w),w.forEach(d),T.forEach(d),E.forEach(d),this.h()},h(){p(r,"class","heading-5 text-center padding-top-10"),p(c,"class","padding-top-2-bigscreen text-center"),p(o,"class","container-m"),p(t,"class","container-l"),p(a,"class","content"),p(s,"class","padding-top-10")},m(m,E){H(m,s,E),l(s,a),l(a,t),l(t,o),l(o,r),l(r,u),l(r,i),l(o,_),l(o,c),l(c,b),l(t,e),N(n,t,null),l(t,$),N(y,t,null),k=!0},p:D,i(m){k||(O(n.$$.fragment,m),O(y.$$.fragment,m),k=!0)},o(m){q(n.$$.fragment,m),q(y.$$.fragment,m),k=!1},d(m){m&&d(s),z(n),z(y)}}}function U(h){let s,a,t,o,r,u,i;document.title=s="Blog Category "+h[1]+" - page "+h[0];const _=[Q,K],c=[];function b(e,n){return e[3]&&e[3].length?0:1}return o=b(h),r=c[o]=_[o](h),{c(){a=f("meta"),t=I(),r.c(),u=x(),this.h()},l(e){const n=F("svelte-175qwgh",document.head);a=g(n,"META",{"data-key":!0,name:!0,content:!0}),n.forEach(d),t=S(e),r.l(e),u=x(),this.h()},h(){p(a,"data-key","description"),p(a,"name","description"),p(a,"content",`
	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.`)},m(e,n){l(document.head,a),H(e,t,n),c[o].m(e,n),H(e,u,n),i=!0},p(e,[n]){(!i||n&3)&&s!==(s="Blog Category "+e[1]+" - page "+e[0])&&(document.title=s),r.p(e,n)},i(e){i||(O(r),i=!0)},o(e){q(r),i=!1},d(e){d(a),e&&d(t),c[o].d(e),e&&d(u)}}}function X(h,s,a){let{data:t}=s;const{page:o,category:r,totalPosts:u,posts:i}=t;return h.$$set=_=>{"data"in _&&a(4,t=_.data)},[o,r,u,i,t]}class ee extends M{constructor(s){super(),R(this,s,X,U,j,{data:4})}}export{ee as default};
