import{S as J,i as K,s as N,E as T,Y as I,k as C,l as p,m as v,h as A,Z as L,b as j,I as B,J as O,K as P,_ as R,g as U,d as V,$ as M,a2 as Z,a0 as Y,a as z,c as F,p as b,M as S,G as D,L as H,a3 as Q,o as W,a4 as X,x as y,r as w,u as x,v as $}from"./index.aad57b58.mjs";import{w as ee}from"./index.89499e6d.mjs";function te(l){let t,e;const _=l[3].default,i=T(_,l,l[2],null);let h=[{"data-accordion":""},l[0]],n={};for(let s=0;s<h.length;s+=1)n=I(n,h[s]);return{c(){t=C("ul"),i&&i.c(),this.h()},l(s){t=p(s,"UL",{"data-accordion":!0});var c=v(t);i&&i.l(c),c.forEach(A),this.h()},h(){L(t,n)},m(s,c){j(s,t,c),i&&i.m(t,null),e=!0},p(s,[c]){i&&i.p&&(!e||c&4)&&B(i,_,s,s[2],e?P(_,s[2],c,null):O(s[2]),null),L(t,n=R(h,[{"data-accordion":""},c&1&&s[0]]))},i(s){e||(U(i,s),e=!0)},o(s){V(i,s),e=!1},d(s){s&&A(t),i&&i.d(s)}}}function le(l,t,e){const _=["multiselect"];let i=M(t,_),{$$slots:h={},$$scope:n}=t,{multiselect:s=!1}=t;const c=ee({});return Z("Accordion",{items:c,add:d=>{c.update(m=>({...m,[d.id]:d.expanded}))},remove:d=>{c.update(m=>{const o={...m};return delete o[d.id],o})},toggle:d=>{c.update(m=>(s||Object.keys(m).forEach(o=>m[o]=!1),{...m,[d.id]:d.expanded}))}}),l.$$set=d=>{t=I(I({},t),Y(d)),e(0,i=M(t,_)),"multiselect"in d&&e(1,s=d.multiselect),"$$scope"in d&&e(2,n=d.$$scope)},[i,s,n,h]}class ae extends J{constructor(t){super(),K(this,t,le,te,N,{multiselect:1})}}const fe=ae,ie=l=>({}),G=l=>({});function se(l){let t;return{c(){t=w(l[2])},l(e){t=x(e,l[2])},m(e,_){j(e,t,_)},p(e,_){_&4&&$(t,e[2])},d(e){e&&A(t)}}}function ne(l){let t,e,_,i,h,n,s,c;const d=l[9].title,m=T(d,l,l[8],G),o=m||se(l),g=l[9].default,f=T(g,l,l[8],null);let k=[{"data-accordion-item":""},l[7]],E={};for(let a=0;a<k.length;a+=1)E=I(E,k[a]);return{c(){t=C("li"),e=C("button"),o&&o.c(),_=z(),i=C("div"),f&&f.c(),this.h()},l(a){t=p(a,"LI",{"data-accordion-item":!0});var u=v(t);e=p(u,"BUTTON",{type:!0,"aria-expanded":!0,"aria-controls":!0,"aria-disabled":!0,id:!0});var r=v(e);o&&o.l(r),r.forEach(A),_=F(u),i=p(u,"DIV",{role:!0,id:!0,"aria-labelledby":!0});var q=v(i);f&&f.l(q),q.forEach(A),u.forEach(A),this.h()},h(){b(e,"type","button"),b(e,"aria-expanded",l[0]),b(e,"aria-controls",l[4]),b(e,"aria-disabled",l[3]),e.disabled=l[3],b(e,"id",l[5]),b(i,"role","region"),b(i,"id",l[4]),b(i,"aria-labelledby",l[5]),i.hidden=h=!l[0],L(t,E)},m(a,u){j(a,t,u),S(t,e),o&&o.m(e,null),l[11](e),S(t,_),S(t,i),f&&f.m(i,null),n=!0,s||(c=[D(e,"click",l[10]),D(e,"click",l[12])],s=!0)},p(a,[u]){m?m.p&&(!n||u&256)&&B(m,d,a,a[8],n?P(d,a[8],u,ie):O(a[8]),G):o&&o.p&&(!n||u&4)&&o.p(a,n?u:-1),(!n||u&1)&&b(e,"aria-expanded",a[0]),(!n||u&16)&&b(e,"aria-controls",a[4]),(!n||u&8)&&b(e,"aria-disabled",a[3]),(!n||u&8)&&(e.disabled=a[3]),(!n||u&32)&&b(e,"id",a[5]),f&&f.p&&(!n||u&256)&&B(f,g,a,a[8],n?P(g,a[8],u,null):O(a[8]),null),(!n||u&16)&&b(i,"id",a[4]),(!n||u&32)&&b(i,"aria-labelledby",a[5]),(!n||u&1&&h!==(h=!a[0]))&&(i.hidden=h),L(t,E=R(k,[{"data-accordion-item":""},u&128&&a[7]]))},i(a){n||(U(o,a),U(f,a),n=!0)},o(a){V(o,a),V(f,a),n=!1},d(a){a&&A(t),o&&o.d(a),l[11](null),f&&f.d(a),s=!1,H(c)}}}function oe(l,t,e){let _;const i=["title","expanded","disabled","id","ref"];let h=M(t,i),{$$slots:n={},$$scope:s}=t,{title:c="Title"}=t,{expanded:d=!1}=t,{disabled:m=!1}=t,{id:o="item"+Math.random().toString(36)}=t,{ref:g=null}=t;const f=Q("Accordion");let k;W(()=>()=>{f&&f.remove({id:o}),k&&k()});function E(r){X.call(this,l,r)}function a(r){y[r?"unshift":"push"](()=>{g=r,e(1,g)})}const u=()=>{f&&(f.toggle({id:o,expanded:!d}),d&&g&&g.getBoundingClientRect().top<0&&g.scrollIntoView())};return l.$$set=r=>{t=I(I({},t),Y(r)),e(7,h=M(t,i)),"title"in r&&e(2,c=r.title),"expanded"in r&&e(0,d=r.expanded),"disabled"in r&&e(3,m=r.disabled),"id"in r&&e(4,o=r.id),"ref"in r&&e(1,g=r.ref),"$$scope"in r&&e(8,s=r.$$scope)},l.$$.update=()=>{l.$$.dirty&16&&e(5,_=`button-${o}`),l.$$.dirty&17&&f&&(f.add({id:o,expanded:d}),k=f.items.subscribe(r=>{e(0,d=r[o])}))},[d,g,c,m,o,_,f,h,s,n,E,a,u]}class de extends J{constructor(t){super(),K(this,t,oe,ne,N,{title:2,expanded:0,disabled:3,id:4,ref:1})}}const ce=de;export{fe as A,ce as a};