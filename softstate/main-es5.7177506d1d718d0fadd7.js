function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("zUnb")},zUnb:function(t,n,e){"use strict";e.r(n);var o,a,i,r,c,s,l,b,p,d,g,f,u,h,m,x=e("fXoL"),C=e("jhN1"),_=e("Jho9"),v=e("tyNb"),w=e("l5mm"),O=((i=function(){function t(){var n=this;_classCallCheck(this,t),Object(w.a)(1e3).subscribe((function(t){n.setDate()}))}return _createClass(t,[{key:"setDate",value:function(){this.horaAtual=this.getData(),this.dataDoDia=this.getHora()}},{key:"getHora",value:function(){var t=new Date,n=t.getHours(),e=t.getMinutes(),o=t.getSeconds();return n+":"+(e=this.checkTime(e))+":"+(o=this.checkTime(o))}},{key:"checkTime",value:function(t){return t<10&&(t="0"+t),t}},{key:"getData",value:function(){var t=new Date;return t.getDate().toString().padStart(2,"0")+"/"+(t.getMonth()+1).toString().padStart(2,"0")+"/"+t.getFullYear()}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275prov=x.Db({token:i,factory:i.\u0275fac,providedIn:"root"}),i),M=((a=function(){function t(n){var e=this;_classCallCheck(this,t),this.props=n,Object(w.a)(1e3).subscribe((function(){e.dataDoDia=e.props.dataDoDia,e.horaAtual=e.props.horaAtual}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)(x.Hb(O))},a.\u0275cmp=x.Bb({type:a,selectors:[["app-footer"]],decls:47,vars:2,consts:[[1,"text-align-center"],[1,"footer-grids"],[1,"footer","one"],["href","https://www.facebook.com/softstate.solutions/","target","_blank"],["src","assets/footer/facebook.webp","alt","facebook link"],["href","https://www.instagram.com/softstate.solutions/","target","_blank"],["src","assets/footer/instagram.webp","alt","instagram link"],["href","https://www.linkedin.com/company/softstate-solutions/","target","_blank"],["src","assets/footer/linkedin.webp","alt","linkedin link"],[1,"footer","two"],[1,"footer","three"],["href","https://m.me/softstate.solutions","target","_blank"],["src","assets/footer/msm.webp","alt","mensseger link"],["href","https://api.whatsapp.com/send?phone=5567984437779&text=Softstate...%20Ol\xe1%21%20o/%20.","target","_blank"],["src","assets/footer/whatsapp.webp","alt","whatsapp link"],["href","mailto:contato@softstate.com.br?subject=Contato&body=(digite%20o%20corpo%20do%20e-mail%2C%20ex%3A%20Gostaria%20de%20solicitar%20maiores%20informa%C3%A7%C3%B5es...)%20","target","_blank"],["src","assets/footer/email.webp","alt","email link"],[1,"copy-right-grids"],[1,"copy-right"],["href","https://letsencrypt.org/","target","_blank"],["src","assets/footer/letsencrypt.webp","alt","letsencrypt link",1,"letsencrypt"],["href","https://sectigo.com/ssl-certificates-tls","target","_blank"],["src","assets/footer/sectigo.webp","alt","sectigo link"],[1,"clear"]],template:function(t,n){1&t&&(x.Kb(0,"footer",0),x.Kb(1,"div",1),x.Kb(2,"div",2),x.Kb(3,"h3"),x.ac(4,"Redes Sociais"),x.Jb(),x.Kb(5,"ul"),x.Kb(6,"li"),x.Kb(7,"a",3),x.Ib(8,"img",4),x.Jb(),x.Jb(),x.Kb(9,"li"),x.Kb(10,"a",5),x.Ib(11,"img",6),x.Jb(),x.Jb(),x.Kb(12,"li"),x.Kb(13,"a",7),x.Ib(14,"img",8),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Kb(15,"div",9),x.Kb(16,"h3"),x.ac(17,"Sobre N\xf3s"),x.Jb(),x.Kb(18,"p"),x.ac(19," Somos uma empresa com foco no cliente e suas necessidades, se importando desde sua imagina\xe7\xe3o com o produto at\xe9 a realiza\xe7\xe3o concreta de suas conquistas."),x.Jb(),x.Jb(),x.Kb(20,"div",10),x.Kb(21,"h3"),x.ac(22,"Nossos Contatos"),x.Jb(),x.Kb(23,"ul"),x.Kb(24,"li"),x.Kb(25,"a",11),x.Ib(26,"img",12),x.Jb(),x.Jb(),x.Kb(27,"li"),x.Kb(28,"a",13),x.Ib(29,"img",14),x.Jb(),x.Jb(),x.Kb(30,"li"),x.Kb(31,"a",15),x.Ib(32,"img",16),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Kb(33,"div",17),x.Kb(34,"div",18),x.Kb(35,"h3"),x.ac(36,"\xa9 >> SOFTSTATE SOLUTIONS"),x.Jb(),x.Kb(37,"ul"),x.Kb(38,"li"),x.Kb(39,"a",19),x.Ib(40,"img",20),x.Jb(),x.Jb(),x.Kb(41,"li"),x.Kb(42,"a",21),x.Ib(43,"img",22),x.Jb(),x.Jb(),x.Jb(),x.Kb(44,"small"),x.ac(45),x.Jb(),x.Jb(),x.Ib(46,"div",23),x.Jb(),x.Jb()),2&t&&(x.xb(45),x.cc("All Rights Reserved : ",n.dataDoDia," - ",n.horaAtual,""))},styles:["ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}img[_ngcontent-%COMP%]{width:100%;height:auto}.letsencrypt[_ngcontent-%COMP%]{border-radius:8px;width:auto;height:32px}.footer-grids[_ngcontent-%COMP%]{background:#282828;opacity:.8;overflow:hidden}footer[_ngcontent-%COMP%]{left:0;right:0;bottom:0;width:100%;text-shadow:1px 1px 1px #000;display:block;position:static}.footer[_ngcontent-%COMP%]{float:left}.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-weight:500;margin-bottom:20px}.footer.one[_ngcontent-%COMP%]{width:18vw}.footer.one[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline-flex;padding:0 0 0 10px}.footer.two[_ngcontent-%COMP%]{width:64vw}.footer.two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#908f8f;line-height:2em}.footer.three[_ngcontent-%COMP%]{width:16vw}.footer.three[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline-flex;padding:0 0 0 10px}.copy-right-grids[_ngcontent-%COMP%]{padding:20px;color:#908f8f;font-weight:700;height:auto;margin:0 auto;background-color:#282828;border-bottom:1px solid #565b73;opacity:.8;overflow:hidden}.copy-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline-flex;margin:0;border-left:1px solid #444343;padding:0 12px}.copy-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border:none}@media (max-width:800px){.footer.three[_ngcontent-%COMP%]{width:100%}.footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:18px}.footer.two[_ngcontent-%COMP%]{width:100%}.footer.one[_ngcontent-%COMP%]{width:100%;margin:30px 0}}"]}),a),P=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x.Bb({type:o,selectors:[["app-error"]],decls:11,vars:0,consts:[["id","notfound"],[1,"notfound"],[1,"notfound-404"],["href","https://softstate.com.br/#/"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Kb(2,"div",2),x.Ib(3,"div"),x.Kb(4,"h1"),x.ac(5,"404"),x.Jb(),x.Jb(),x.Kb(6,"h2"),x.ac(7,"P\xe1gina n\xe3o encontrada"),x.Jb(),x.Kb(8,"a",3),x.ac(9,"Voltar"),x.Jb(),x.Jb(),x.Jb(),x.Ib(10,"app-footer"))},directives:[M],styles:['@font-face{font-family:Cabin;font-style:normal;font-weight:400;src:local("Cabin"),local("Cabin-Regular"),url(https://fonts.gstatic.com/s/cabin/v14/u-4x0qWljRw-Pd8-__1amg.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Cabin;font-style:normal;font-weight:400;src:local("Cabin"),local("Cabin-Regular"),url(https://fonts.gstatic.com/s/cabin/v14/u-4x0qWljRw-Pd8w__0.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Cabin;font-style:normal;font-weight:700;src:local("Cabin Bold"),local("Cabin-Bold"),url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdeL2uhruylWeg.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Cabin;font-style:normal;font-weight:700;src:local("Cabin Bold"),local("Cabin-Bold"),url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdeL2uhluyk.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{padding:0;margin:0}#notfound[_ngcontent-%COMP%]{position:relative;height:100vh}#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.notfound[_ngcontent-%COMP%]{max-width:460px;width:100%;text-align:center;line-height:1.4}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]{position:relative;width:180px;height:180px;margin:0 auto 50px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;left:0;right:0;top:0;bottom:0;background:#ffa200;transform:rotate(45deg);border:5px dashed #000;border-radius:5px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child:before{content:"";position:absolute;left:-5px;right:-5px;bottom:-5px;top:-5px;box-shadow:inset 0 0 0 5px rgba(0,0,0,.1);border-radius:5px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#000;margin:0;font-size:90px;position:absolute;top:50%;transform:translate(-50%,-50%);left:50%;text-align:center;height:40px;line-height:40px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Cabin,sans-serif;font-weight:700}.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:33px;text-transform:uppercase;letter-spacing:7px;color:#fff}.notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#000;font-weight:400}.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Cabin,sans-serif}.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:10px 25px;background-color:#8f8f8f;border:none;border-radius:40px;color:#fff;font-size:14px;font-weight:700;text-transform:uppercase;text-decoration:none;transition:all .2s}.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#2c2c2c}']}),o),y=e("wHSu"),k=e("6NWb"),J=((c=function(){function t(){_classCallCheck(this,t),this.faUserAstronaut=y.e,this.faCode=y.b,this.faQuestionCircle=y.c,this.faServer=y.d}return _createClass(t,[{key:"ngOnInit",value:function(){$("body").mousemove((function(t){var n=$(".eye"),e=n.offset().left+n.width()/2,o=n.offset().top+n.height()/2,a=Math.atan2(t.pageX-e,t.pageY-o)*(180/Math.PI)*-1+180;n.css({"-webkit-transform":"rotate("+a+"deg)","-moz-transform":"rotate("+a+"deg)","-ms-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})}))}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=x.Bb({type:c,selectors:[["app-navbar"]],decls:31,vars:4,consts:[[1,"inner"],[1,"menu"],["href","#inicio",1,"nav"],["src","assets/icons/favicon-16x16.png","alt","Softstate",1,"cloud_logo"],["href","#servicos",1,"nav"],[3,"icon"],["href","#pilares",1,"nav"],["href","#contato",1,"nav"],["href","#sobre",1,"nav"],[1,"nav",2,"vertical-align","middle"],[1,"eye"]],template:function(t,n){1&t&&(x.Kb(0,"nav"),x.Kb(1,"div",0),x.Kb(2,"ul",1),x.Kb(3,"li"),x.Kb(4,"a",2),x.Ib(5,"img",3),x.Kb(6,"span"),x.ac(7,"In\xedcio"),x.Jb(),x.Jb(),x.Jb(),x.Kb(8,"li"),x.Kb(9,"a",4),x.Ib(10,"fa-icon",5),x.Kb(11,"span"),x.ac(12,"Servi\xe7os"),x.Jb(),x.Jb(),x.Jb(),x.Kb(13,"li"),x.Kb(14,"a",6),x.Ib(15,"fa-icon",5),x.Kb(16,"span"),x.ac(17,"Pilares"),x.Jb(),x.Jb(),x.Jb(),x.Kb(18,"li"),x.Kb(19,"a",7),x.Ib(20,"fa-icon",5),x.Kb(21,"span"),x.ac(22,"Contato"),x.Jb(),x.Jb(),x.Jb(),x.Kb(23,"li"),x.Kb(24,"a",8),x.Ib(25,"fa-icon",5),x.Kb(26,"span"),x.ac(27,"Sobre"),x.Jb(),x.Jb(),x.Jb(),x.Kb(28,"li",9),x.Ib(29,"div",10),x.Ib(30,"div",10),x.Jb(),x.Jb(),x.Jb(),x.Jb()),2&t&&(x.xb(10),x.Vb("icon",n.faCode),x.xb(5),x.Vb("icon",n.faServer),x.xb(5),x.Vb("icon",n.faUserAstronaut),x.xb(5),x.Vb("icon",n.faQuestionCircle))},directives:[k.a],styles:['.cloud_logo[_ngcontent-%COMP%]{vertical-align:middle;-webkit-filter:drop-shadow(1px 1px 0 #000) drop-shadow(-1px -1px 0 #000);filter:drop-shadow(1px 1px 0 rgb(0,0,0)) drop-shadow(-1px -1px 0 rgb(170,170,170))}nav[_ngcontent-%COMP%]{align-content:space-around;position:fixed;display:flex;flex-wrap:wrap;z-index:1;top:0;width:100%;height:auto;margin:0 auto;padding:10px 0;background-color:#1f243c;border-bottom:1px solid #565b73;opacity:.9;overflow:hidden}nav[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-table;padding-left:10px;margin-right:10px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-bottom:0 solid #474747;opacity:.8}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{font-size:12px;color:#e8e8e8;text-decoration:none}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-left:5px}nav[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]{float:left}span[_ngcontent-%COMP%]{-webkit-font-smoothing:none;font-size:14px}.eye[_ngcontent-%COMP%]{position:relative;display:inline-block;height:30px;width:30px;background:#ccc}.eye[_ngcontent-%COMP%], .eye[_ngcontent-%COMP%]:after{border-radius:50%}.eye[_ngcontent-%COMP%]:after{position:absolute;bottom:17px;right:10px;width:10px;height:10px;background:#000;content:" "}@media (min-width:768px) and (max-width:1024px){nav[_ngcontent-%COMP%]{display:none}}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){nav[_ngcontent-%COMP%]{display:none}}@media (min-width:481px) and (max-width:767px){nav[_ngcontent-%COMP%]{display:none}}@media (min-width:320px) and (max-width:480px){nav[_ngcontent-%COMP%]{display:none}}']}),c),K=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=x.Bb({type:r,selectors:[["app-logomarca"]],decls:4,vars:0,consts:[[1,"container"],[1,"background"],["src","assets/logomarca/softstate.webp","alt","Softstate",1,"logo"],["src","assets/logomarca/software-white.webp","alt","software solutions",1,"sobrelogo"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Ib(2,"img",2),x.Ib(3,"img",3),x.Jb(),x.Jb())},styles:["img.logo[_ngcontent-%COMP%]{-webkit-filter:drop-shadow(1px 1px 0 #000) drop-shadow(-1px -1px 0 #fff);filter:drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 white)}img.logo[_ngcontent-%COMP%], img.sobrelogo[_ngcontent-%COMP%]{max-width:80%;max-height:auto}img.sobrelogo[_ngcontent-%COMP%]{-webkit-filter:drop-shadow(1px 1px 0 #000) drop-shadow(-1px -1px 0 #000);filter:drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)}.background[_ngcontent-%COMP%]{background-image:url(background.dbf646decdf5b27dd8ef.webp);background-repeat:no-repeat;background-position:top;background-attachment:cover;border-radius:8px;text-align:center;padding:5vw;height:auto;width:auto;margin:auto}@media (max-width:1024px){.background[_ngcontent-%COMP%]{background-image:url(background_night.848a18825757498b15d6.webp)}}@media (max-width:425px){.background[_ngcontent-%COMP%]{background-image:url(background_night_small.138b4185b8d3b24cc316.webp)}}"]}),r),I=e("Wgzd"),E=e.n(I),S=((l=function(){function t(n){var e=this;_classCallCheck(this,t),this.props=n,Object(w.a)(1e3).subscribe((function(t){e.setData()}))}return _createClass(t,[{key:"setData",value:function(){this.horaAtual=this.props.horaAtual,this.dataDoDia=this.props.dataDoDia,this.clock()}},{key:"clock",value:function(){for(var t="....".split(""),n=".....".split(""),e="......".split(""),o=new Date,a=o.getSeconds(),i=o.getMinutes(),r=o.getHours(),c=Math.PI*a/30-1.57,s=Math.PI*i/30-1.57,l=Math.PI*r/6-1.57+Math.PI*Number(o.getMinutes())/360,b=0;b<12;++b)document.getElementById("dig"+(b+1)).style.top=40*Number(Math.sin(11.51+b/1.9).toString())-15+"px",document.getElementById("dig"+(b+1)).style.left=40*Number(Math.cos(11.51+b/1.9).toString())-14+"px";for(var p=0;p<e.length;p++)document.getElementById("sec"+(p+1)).style.top=0+8*p*Number(Math.sin(c).toString())+"px",document.getElementById("sec"+(p+1)).style.left=0+8*p*Number(Math.cos(c).toString())+"px";for(var d=0;d<n.length;d++)document.getElementById("min"+(d+1)).style.top=0+8*d*Number(Math.sin(s).toString())+"px",document.getElementById("min"+(d+1)).style.left=0+8*d*Number(Math.cos(s).toString())+"px";for(var g=0;g<t.length;g++)document.getElementById("hour"+(g+1)).style.top=0+8*g*Number(Math.sin(l).toString())+"px",document.getElementById("hour"+(g+1)).style.left=0+8*g*Number(Math.cos(l).toString())+"px"}}]),t}()).\u0275fac=function(t){return new(t||l)(x.Nb(O))},l.\u0275prov=x.Db({token:l,factory:l.\u0275fac,providedIn:"root"}),l),z=((s=function t(n){var e=this;_classCallCheck(this,t),this.props=n,Object(w.a)(1e3).subscribe((function(t){e.horaAtual=e.props.horaAtual,e.dataDoDia=e.props.dataDoDia}))}).\u0275fac=function(t){return new(t||s)(x.Hb(S))},s.\u0275cmp=x.Bb({type:s,selectors:[["app-relogio-analogico"]],decls:44,vars:1,consts:[[1,"text-align-center"],[1,"clock","normal-font-size","white-text-shadow"],["id","dig1",1,"dig",2,"top","-49.823px","left","5.6814px"],["id","dig2",1,"dig",2,"top","-35.2232px","left","20.5112px"],["id","dig3",1,"dig",2,"top","-15.1496px","left","25.9997px"],["id","dig4",1,"dig",2,"top","4.96459px","left","20.6614px"],["id","dig5",1,"dig",2,"top","19.6749px","left","5.94126px"],["id","dig6",1,"dig",2,"top","24.9996px","left","-14.1765px"],["id","dig7",1,"dig",2,"top","19.4976px","left","-34.2464px"],["id","dig8",1,"dig",2,"top","4.65796px","left","-48.8363px"],["id","dig9",1,"dig",2,"top","-15.5025px","left","-53.9968px"],["id","dig10",1,"dig",2,"top","-35.527px","left","-48.3314px"],["id","dig11",1,"dig",2,"top","-49.9953px","left","-33.3734px"],["id","dig12",1,"dig",2,"top","-54.9914px","left","-13.1715px"],["id","hour1",1,"hour",2,"top","0px","left","0px"],["id","hour2",1,"hour",2,"top","7.95551px","left","-0.842563px"],["id","hour3",1,"hour",2,"top","15.911px","left","-1.68513px"],["id","hour4",1,"hour",2,"top","23.8665px","left","-2.52769px"],["id","min1",1,"min",2,"top","0px","left","0px"],["id","min2",1,"min",2,"top","-2.46608px","left","7.61042px"],["id","min3",1,"min",2,"top","-4.93215px","left","15.2208px"],["id","min4",1,"min",2,"top","-7.39823px","left","22.8313px"],["id","min5",1,"min",2,"top","-9.86431px","left","30.4417px"],["id","sec1",1,"sec",2,"top","0px","left","0px"],["id","sec2",1,"sec",2,"top","4.00552px","left","6.92502px"],["id","sec3",1,"sec",2,"top","8.01103px","left","13.85px"],["id","sec4",1,"sec",2,"top","12.0165px","left","20.775px"],["id","sec5",1,"sec",2,"top","16.0221px","left","27.7001px"],["id","sec6",1,"sec",2,"top","20.0276px","left","34.6251px"],[1,"text-align-center","white-text-shadow"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Kb(2,"div",2),x.ac(3,"1"),x.Jb(),x.Kb(4,"div",3),x.ac(5,"2"),x.Jb(),x.Kb(6,"div",4),x.ac(7,"3"),x.Jb(),x.Kb(8,"div",5),x.ac(9,"4"),x.Jb(),x.Kb(10,"div",6),x.ac(11,"5"),x.Jb(),x.Kb(12,"div",7),x.ac(13,"6"),x.Jb(),x.Kb(14,"div",8),x.ac(15,"7"),x.Jb(),x.Kb(16,"div",9),x.ac(17,"8"),x.Jb(),x.Kb(18,"div",10),x.ac(19,"9"),x.Jb(),x.Kb(20,"div",11),x.ac(21,"10"),x.Jb(),x.Kb(22,"div",12),x.ac(23,"11"),x.Jb(),x.Kb(24,"div",13),x.ac(25,"12"),x.Jb(),x.Ib(26,"div",14),x.Ib(27,"div",15),x.Ib(28,"div",16),x.Ib(29,"div",17),x.Ib(30,"div",18),x.Ib(31,"div",19),x.Ib(32,"div",20),x.Ib(33,"div",21),x.Ib(34,"div",22),x.Ib(35,"div",23),x.Ib(36,"div",24),x.Ib(37,"div",25),x.Ib(38,"div",26),x.Ib(39,"div",27),x.Ib(40,"div",28),x.Jb(),x.Jb(),x.Kb(41,"p",29),x.Kb(42,"small"),x.ac(43),x.Jb(),x.Jb()),2&t&&(x.xb(43),x.bc(n.dataDoDia))},styles:[".clock[_ngcontent-%COMP%]{width:120px;height:100px;position:relative;top:40px;left:49.7%}div.dig[_ngcontent-%COMP%], div.hour[_ngcontent-%COMP%], div.min[_ngcontent-%COMP%], div.sec[_ngcontent-%COMP%]{position:absolute}div.hour[_ngcontent-%COMP%], div.min[_ngcontent-%COMP%], div.sec[_ngcontent-%COMP%]{width:2px;height:2px;font-size:2px}div.dig[_ngcontent-%COMP%]{width:30px;height:30px;font-family:arial,verdana,sans-serif;font-size:10px;color:#fff;text-align:center;padding-top:10px}div.min[_ngcontent-%COMP%]{background:#6464ff}div.hour[_ngcontent-%COMP%]{background:#fff}div.sec[_ngcontent-%COMP%]{background:red}"]}),s),D=["subslogan"],A=["subslogan1"],B=["slogan"],N=["comboslogan"],R=((g=function(){function t(){_classCallCheck(this,t),this.slogan="TODA EMPRESA",this.slogan2=" PRECISA DEIXAR SUA MARCA NA INTERNET!",this.slogan3=" PRECISA TER PRESEN\xc7A NA WEB!",this.slogan4=" SABE QUE PODE CONTAR CONOSCO!",this.subslogan="Conhecemos os desafios das pequenas, m\xe9dias e grandes empresas atuais e com essas experi\xeancias, juntamos as melhores t\xe9cnicas para criar o marketing digital de sucesso!",this.subslogan1="Conte conosco na hora de planejar as melhores maneiras para o seu neg\xf3cio!"}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this.typewriterElement.nativeElement,n=this.typewriterElement1.nativeElement,e=this.typewriterElement3.nativeElement,o=new E.a(this.typewriterElement2.nativeElement,{typeColor:"white"}),a=new E.a(e,{typeColor:"white"});o.type(this.slogan).removeCursor().then(a.start.bind(a)).start(),a.type(this.slogan2).rest(1e3).clear().changeTypeColor("white").type(this.slogan3).rest(1e3).clear().changeTypeColor("white").type(this.slogan4).rest(1e3).clear().changeTypeColor("white").clear().then(o.start.bind(o)),new E.a(t,{loop:!1,typeColor:"white",typeSpeed:10}).type(this.subslogan).rest(1e3).start(),new E.a(n,{loop:!0,typeColor:"white",typeSpeed:10,deleteSpeed:5}).type(this.subslogan1).rest(1e4).start()}}]),t}()).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=x.Bb({type:g,selectors:[["app-inicio"]],viewQuery:function(t,n){var e;1&t&&(x.dc(D,!0),x.dc(A,!0),x.dc(B,!0),x.dc(N,!0)),2&t&&(x.Wb(e=x.Sb())&&(n.typewriterElement=e.first),x.Wb(e=x.Sb())&&(n.typewriterElement1=e.first),x.Wb(e=x.Sb())&&(n.typewriterElement2=e.first),x.Wb(e=x.Sb())&&(n.typewriterElement3=e.first))},decls:58,vars:0,consts:[[1,"container"],[1,"hr"],[1,"line"],[1,"stroke"],[1,"large-font-size","text-align-center","white-text-shadow"],["slogan",""],["comboslogan",""],[1,"background-text-static"],[1,"block-quote","text-align-left","white-text-shadow"],[1,"large-font-size"],[1,"small-font-size"],["href","https://abc.xyz/","target","_blank"],[1,"hr-block-separator","is-style-dots"],[1,"text-container","normal-font-size","text-align-left","white-text-shadow"],[1,"subslogan"],["subslogan",""],[1,"medium-font-size"],[1,"small-font-size",2,"padding-top","5px"],["href","https://amazon.com/","target","_blank"],[1,"subslogan1"],["subslogan1",""],[1,"background-text"],[1,"small-font-size",2,"padding-top","15px"],["href","https://www.virgin.com/","target","_blank"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Kb(2,"div",2),x.Ib(3,"div",3),x.Jb(),x.Jb(),x.Kb(4,"p",4),x.Ib(5,"strong",null,5),x.Ib(7,"strong",null,6),x.Jb(),x.Ib(9,"app-relogio-analogico"),x.Kb(10,"div",7),x.Ib(11,"br"),x.Ib(12,"br"),x.Kb(13,"blockquote",8),x.Kb(14,"div",9),x.Kb(15,"b"),x.ac(16,'"88% das empresas atuais est\xe3o, de certa forma, investindo em marketing digital." '),x.Jb(),x.Jb(),x.Kb(17,"cite",10),x.ac(18,"\xa0"),x.Kb(19,"b"),x.Kb(20,"a",11),x.ac(21,"Alphabet Inc."),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Ib(22,"hr",12),x.Kb(23,"div",13),x.Ib(24,"b",14,15),x.Jb(),x.Ib(26,"hr",12),x.Kb(27,"div",7),x.Ib(28,"br"),x.Kb(29,"blockquote",8),x.Kb(30,"div",16),x.Kb(31,"b"),x.ac(32,"\u201cSe voc\xea deixar os clientes insatisfeitos no mundo real, eles v\xe3o contar para 6 amigos. Se voc\xea fizer a mesma coisa no mundo digital, cada um deles vai contar para 6 mil contatos.\u201d "),x.Jb(),x.Jb(),x.Kb(33,"cite",17),x.ac(34,"\u2013\xa0Jeff Bezos, CEO da\xa0"),x.Kb(35,"b"),x.Kb(36,"a",18),x.ac(37,"Amazon Inc."),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Ib(38,"hr",12),x.Kb(39,"div",13),x.Ib(40,"strong",19,20),x.Jb(),x.Ib(42,"hr",12),x.Kb(43,"div",21),x.Ib(44,"br"),x.Ib(45,"br"),x.Kb(46,"blockquote",8),x.Kb(47,"div",16),x.Kb(48,"b"),x.ac(49,"\u201cN\xe3o se envergonhe por seus fracassos, aprenda com eles e comece novamente\u201d "),x.Jb(),x.Jb(),x.Kb(50,"cite",22),x.ac(51,"\u2013\xa0Richard Branson, Investidor Magnata e fundador do \xa0"),x.Kb(52,"b"),x.Kb(53,"a",23),x.ac(54,"Virgin Group"),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Jb(),x.Kb(55,"div",1),x.Kb(56,"div",2),x.Ib(57,"div",3),x.Jb(),x.Jb(),x.Jb())},directives:[z],styles:[".block-quote[_ngcontent-%COMP%]{border-left:none}.block-quote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]{float:right}.block-quote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.background-text[_ngcontent-%COMP%]{background-image:url(background-text.ddf77346f307940bb30a.webp)}.background-text[_ngcontent-%COMP%], .background-text-static[_ngcontent-%COMP%]{background-repeat:no-repeat;background-attachment:fixed;background-size:cover;width:100%;height:200px}.background-text-static[_ngcontent-%COMP%]{background-image:url(background-blur.32cf3603889abf5892d2.webp)}@media (max-width:768px){.background-text[_ngcontent-%COMP%]{height:150px}.cite[_ngcontent-%COMP%]{font-size:medium}}"]}),g),T=((d=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||d)},d.\u0275cmp=x.Bb({type:d,selectors:[["app-terminal"]],decls:43,vars:0,consts:[[1,"container"],[1,"terminal"],[1,"line4"],[1,"cursor4"],[1,"white-text-shadow"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Kb(2,"p",2),x.ac(3,"#!/bin/bash >"),x.Kb(4,"span",3),x.ac(5,"_"),x.Jb(),x.Jb(),x.Kb(6,"div",4),x.Kb(7,"h3"),x.ac(8,"Nossos Servi\xe7os:"),x.Jb(),x.Kb(9,"strong"),x.ac(10,"\u2022 Cria\xe7\xe3o de Aplicativos"),x.Jb(),x.Ib(11,"br"),x.ac(12,"\xa0\xa0\xa0> E-commerces "),x.Ib(13,"br"),x.ac(14,"\xa0\xa0\xa0> Gerenciador de Neg\xf3cios "),x.Ib(15,"br"),x.Kb(16,"strong"),x.Ib(17,"br"),x.ac(18,"\u2022 Cria\xe7\xe3o de Websites"),x.Jb(),x.Ib(19,"br"),x.ac(20,"\xa0\xa0\xa0> Registro de Dom\xednios "),x.Ib(21,"br"),x.ac(22,"\xa0\xa0\xa0> E-commerces "),x.Ib(23,"br"),x.ac(24,"\xa0\xa0\xa0> Blogs "),x.Ib(25,"br"),x.ac(26,"\xa0\xa0\xa0> Gerenciador de Neg\xf3cios "),x.Ib(27,"br"),x.ac(28,"\xa0\xa0\xa0> P\xe1gina Informativa (Banner) "),x.Ib(29,"br"),x.ac(30,"\xa0\xa0\xa0> P\xe1gina Pessoal (Curr\xedculo) "),x.Ib(31,"br"),x.Kb(32,"strong"),x.Ib(33,"br"),x.ac(34,"\u2022 Marketing Digital"),x.Jb(),x.Ib(35,"br"),x.ac(36,"\xa0\xa0\xa0> Posicionamento Digital "),x.Ib(37,"br"),x.ac(38,"\xa0\xa0\xa0> Cria\xe7\xe3o de SEO "),x.Ib(39,"br"),x.ac(40,"\xa0\xa0\xa0> Automa\xe7\xe3o de E-mails "),x.Ib(41,"br"),x.ac(42,"\xa0\xa0\xa0> Integra\xe7\xe3o de Redes Sociais "),x.Jb(),x.Jb(),x.Jb())},styles:['.terminal[_ngcontent-%COMP%]{position:relative;border-radius:6px;padding-top:10px;margin-top:1px;overflow:hidden;background-color:#0f0f10}.terminal[_ngcontent-%COMP%]:before{content:"\\2022 \\2022 \\2022";position:absolute;top:0;left:0;background:#3a3a3a;color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:10px 0;text-indent:4px}.bash[_ngcontent-%COMP%]{color:#87ceeb}.terminal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:20px;padding-bottom:20px}p[_ngcontent-%COMP%]{padding-left:1%;text-align:left;font-family:monospace;white-space:normal;overflow:hidden;width:0}span[_ngcontent-%COMP%]{color:#fff;font-weight:700}.line4[_ngcontent-%COMP%]{color:#fff;-webkit-animation:type .5s steps(20) 1s forwards;animation:type .5s steps(20) 1s forwards}.cursor4[_ngcontent-%COMP%]{-webkit-animation:blink 1s 1.5s infinite;animation:blink 1s 2s infinite}@-webkit-keyframes blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}to{opacity:0}}@keyframes blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}to{opacity:0}}@-webkit-keyframes type{to{width:17em}}@keyframes type{to{width:17em}}']}),d),j=((p=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=x.Bb({type:p,selectors:[["app-pilares"]],decls:63,vars:0,consts:[[1,"container"],[1,"hr"],[1,"line"],[1,"stroke"],[1,"text-container"],[1,"text-align-center",2,"border-radius","10px","background-color","rgb(146, 146, 146)"],["width","80%","height","auto","src","assets/pilares/pilares.webp","alt","pilares do sucesso de neg\xf3cio",2,"padding","5%"],["width","80%","height","auto","src","assets/pilares/grafico-pilares.webp","alt","gr\xe1fico de pilares",2,"padding-bottom","5%","-webkit-filter","drop-shadow(1px 1px 0 black)","filter","drop-shadow(1px 1px 0 black)"],[1,"wp-block-separator","is-style-dots"],[1,"wp-block-separator"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Kb(2,"div",2),x.Ib(3,"div",3),x.Jb(),x.Jb(),x.Kb(4,"div",4),x.Kb(5,"div",5),x.Ib(6,"img",6),x.Ib(7,"img",7),x.Jb(),x.Ib(8,"hr",8),x.Kb(9,"p"),x.Kb(10,"b"),x.ac(11,"- Inbound marketing"),x.Jb(),x.ac(12," ou "),x.Kb(13,"b"),x.ac(14,"marketing de atra\xe7\xe3o"),x.Jb(),x.ac(15," \xe9 uma forma de "),x.Kb(16,"b"),x.ac(17,"publicidade on-line"),x.Jb(),x.ac(18," na qual uma empresa se promove "),x.Kb(19,"b"),x.ac(20,"atrav\xe9s de blogs, e-commerces, SEO (Otimiza\xe7\xe3o para motores de busca) "),x.Jb(),x.ac(21," entre outras formas de marketing de conte\xfado e se diferencia dos m\xe9todos tradicionais para conseguir atrair a aten\xe7\xe3o de potenciais clientes, diferente de outros meios publicit\xe1rios como r\xe1dio, televis\xe3o, flyers, telemarketing, entre outros. "),x.Jb(),x.Ib(22,"br"),x.Ib(23,"hr",9),x.Kb(24,"p"),x.Kb(25,"b"),x.ac(26,"- Growth hacking"),x.Jb(),x.Kb(27,"span"),x.ac(28," ou "),x.Jb(),x.Kb(29,"b"),x.ac(30,"reconfigura\xe7\xe3o de crescimento"),x.Jb(),x.Kb(31,"span"),x.ac(32," \xe9 uma forma de "),x.Jb(),x.Kb(33,"b"),x.ac(34,"adotar estrat\xe9gias inteligentes"),x.Jb(),x.Kb(35,"span"),x.ac(36," visando o "),x.Jb(),x.Kb(37,"b"),x.ac(38,"crescimento"),x.Jb(),x.Kb(39,"span"),x.ac(40," significativo e acelerado "),x.Jb(),x.Kb(41,"b"),x.ac(42,"dos neg\xf3cios "),x.Jb(),x.Kb(43,"span"),x.ac(44,"a partir da uni\xe3o de diferentes aspectos da empresa, buscando identificar seus pontos mais cr\xedticos e \u201creconfigur\xe1-los\u201d."),x.Jb(),x.Jb(),x.Ib(45,"br"),x.Ib(46,"hr",9),x.Kb(47,"p"),x.Kb(48,"b"),x.ac(49,"- Consultoria"),x.Jb(),x.Kb(50,"span"),x.ac(51," se baseia na troca de experi\xeancias internas de uma organiza\xe7\xe3o e tem como finalidade "),x.Jb(),x.Kb(52,"b"),x.ac(53,"identificar problemas e formular solu\xe7\xf5es"),x.Jb(),x.Kb(54,"span"),x.ac(55," relacionadas a determinado processo ou \xe1rea da empresa. "),x.Ib(56,"br"),x.ac(57," Existem 4 tipos de consultorias principais e essenciais para uma empresa de sucesso:"),x.Jb(),x.Kb(58,"b"),x.ac(59," Gest\xe3o empresarial, Gest\xe3o de Finan\xe7as, Gest\xe3o de marketing e Gest\xe3o de Recursos Humanos."),x.Jb(),x.Jb(),x.Jb(),x.Kb(60,"div",1),x.Kb(61,"div",2),x.Ib(62,"div",3),x.Jb(),x.Jb(),x.Jb())},styles:[""]}),p),q=((b=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=x.Bb({type:b,selectors:[["app-contato"]],decls:21,vars:0,consts:[[1,"container","text-align-center"],[1,"email-cta"],[1,"highlight"]],template:function(t,n){1&t&&(x.Kb(0,"div",0),x.Kb(1,"div",1),x.Kb(2,"h2"),x.ac(3,"Entre em contato conosco para or\xe7amentos!"),x.Jb(),x.Kb(4,"p"),x.ac(5,"Estamos sempre dispon\xedveis para quaisquer "),x.Kb(6,"span",2),x.ac(7,"id\xe9ias"),x.Jb(),x.ac(8,", "),x.Kb(9,"span",2),x.ac(10,"problemas"),x.Jb(),x.ac(11,", "),x.Kb(12,"span",2),x.ac(13,"d\xfavidas"),x.Jb(),x.ac(14,", "),x.Kb(15,"span",2),x.ac(16,"reclama\xe7\xf5es"),x.Jb(),x.ac(17," e/ou "),x.Kb(18,"span",2),x.ac(19,"sugest\xf5es"),x.Jb(),x.ac(20,"! "),x.Jb(),x.Jb(),x.Jb())},styles:['.highlight[_ngcontent-%COMP%]{color:#ffe000}.email-cta[_ngcontent-%COMP%]{background-color:#1f243c;border:1px solid #565b73;padding:20px;color:#e8e8e8;line-height:1.6em}.email-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 20px}.email-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px}form.notifications[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form.notifications[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin:0 auto}form.notifications[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#ffe000;margin:10px 0 5px;font-size:12px}form.notifications[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:5px}form.notifications[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:block;margin-top:10px;font-size:14px;line-height:1.4em}form.notifications[_ngcontent-%COMP%]   em.error[_ngcontent-%COMP%]{color:#f22f46}form.notifications[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::-webkit-input-placeholder, form.notifications[_ngcontent-%COMP%]   input[type=phone][_ngcontent-%COMP%]::-webkit-input-placeholder, form.notifications[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder{font-style:italic;color:#bbb}form.notifications[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::-moz-placeholder, form.notifications[_ngcontent-%COMP%]   input[type=phone][_ngcontent-%COMP%]::-moz-placeholder, form.notifications[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-moz-placeholder{font-style:italic;color:#bbb}form.notifications[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::-ms-input-placeholder, form.notifications[_ngcontent-%COMP%]   input[type=phone][_ngcontent-%COMP%]::-ms-input-placeholder, form.notifications[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-ms-input-placeholder{font-style:italic;color:#bbb}form.notifications[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::placeholder, form.notifications[_ngcontent-%COMP%]   input[type=phone][_ngcontent-%COMP%]::placeholder, form.notifications[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::placeholder{font-style:italic;color:#bbb}.pixel2[_ngcontent-%COMP%]{font-size:25px;height:auto;display:inline-block;vertical-align:top;box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pixel2[_ngcontent-%COMP%]:active{top:2px}.pixel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;position:relative;width:auto;text-align:center;margin:-20px;line-height:20px;padding:10px 20px;background:#000;background:linear-gradient(135deg,transparent 10px,#000 0) 0 0,linear-gradient(225deg,transparent 10px,#000 0) 100% 0,linear-gradient(315deg,transparent 10px,#000 0) 100% 100%,linear-gradient(45deg,transparent 10px,#000 0) 0 100%;background-size:50% 50%;background-repeat:no-repeat;background-image:radial-gradient(circle at 0 0,rgba(204,0,0,0) 14px,#000 15px),radial-gradient(circle at 100% 0,rgba(204,0,0,0) 14px,#000 15px),radial-gradient(circle at 100% 100%,rgba(204,0,0,0) 14px,#000 15px),radial-gradient(circle at 0 100%,rgba(204,0,0,0) 14px,#000 15px)}.pixel2[_ngcontent-%COMP%]{display:block;margin:10px;text-transform:uppercase;color:#fff;-webkit-filter:drop-shadow(1px 1px 0 #000) drop-shadow(-1px -1px 0 #000);filter:drop-shadow(1px 1px 0 rgb(0,0,0)) drop-shadow(-1px -1px 0 rgb(170,170,170))}.pixel2[_ngcontent-%COMP%]:before{top:10px;bottom:10px;left:-10px;right:-10px}.pixel2[_ngcontent-%COMP%]:after, .pixel2[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;background:#000;z-index:-1}.pixel2[_ngcontent-%COMP%]:after{top:4px;bottom:4px;left:-6px;right:-6px}.pixel2[_ngcontent-%COMP%]{padding:10px;position:relative;background:#000;width:auto;z-index:2}.pixel2[_ngcontent-%COMP%]:active{transform:translateY(4px);-webkit-filter:drop-shadow(1px 1px 0 #fff) drop-shadow(-1px -1px 0 #000);filter:drop-shadow(1px 1px 0 rgb(255,255,255)) drop-shadow(-1px -1px 0 rgb(0,0,0))}']}),b),W=[{path:"",component:(f=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=x.Bb({type:f,selectors:[["app-index"]],decls:12,vars:0,consts:[["id","inicio"],["id","servicos"],["id","pilares"],["id","contato"],["id","sobre"]],template:function(t,n){1&t&&(x.Ib(0,"app-navbar"),x.Ib(1,"div",0),x.Ib(2,"app-logomarca"),x.Ib(3,"app-inicio"),x.Ib(4,"div",1),x.Ib(5,"app-terminal"),x.Ib(6,"div",2),x.Ib(7,"app-pilares"),x.Ib(8,"div",3),x.Ib(9,"app-contato"),x.Ib(10,"div",4),x.Ib(11,"app-footer"))},directives:[J,K,R,T,j,q,M],styles:[""]}),f)},{path:"**",component:P}],U=((m=function t(){_classCallCheck(this,t)}).\u0275mod=x.Fb({type:m}),m.\u0275inj=x.Eb({factory:function(t){return new(t||m)},imports:[[v.a.forRoot(W)],v.a]}),m),G=((h=function(){function t(){_classCallCheck(this,t),this.faCaretUp=y.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;$(document).ready((function(){var n={x:null,y:null};function e(t,n){return Math.round(Math.random()*(n-t+1))+t}$(window).mousemove((function(t){n.x=t.pageX,n.y=t.pageY})),$(window).mouseleave((function(t){n.x=-1,n.y=-1})),setInterval((function(){if(n.x>0&&n.y>0){var o="background: rgb(0,"+e(0,205)+","+e(0,205)+");",a=e(10,30),i="height: "+a+"px; width: "+a+"px;",r="left: "+e(n.x-10-a,n.x+10)+"px;",c="top: "+e(n.y-10-a,n.y+10)+"px;";$("<div class='ball' style='"+(r+c+o+i)+"'></div>").appendTo("#wrap").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){$(t).remove()}))}}),1)}))}}]),t}()).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=x.Bb({type:h,selectors:[["app-root"]],decls:3,vars:1,consts:[["href","#inicio",1,"float"],[1,"my-float",3,"icon"]],template:function(t,n){1&t&&(x.Ib(0,"router-outlet"),x.Kb(1,"a",0),x.Ib(2,"fa-icon",1),x.Jb()),2&t&&(x.xb(2),x.Vb("icon",n.faCaretUp))},directives:[v.b,k.a],styles:[".float[_ngcontent-%COMP%]{position:fixed;width:50px;height:50px;bottom:30px;right:30px;background-color:rgba(31,36,60,.8);color:#fff;border-radius:50px;text-align:center;font-size:40px;box-shadow:2px 2px 3px #000;z-index:100}.my-float[_ngcontent-%COMP%]{display:inline-flex}@media (max-width:720px){.float[_ngcontent-%COMP%]{width:40px;height:40px;font-size:30px}}"]}),h),H=((u=function t(){_classCallCheck(this,t)}).\u0275mod=x.Fb({type:u,bootstrap:[G]}),u.\u0275inj=x.Eb({factory:function(t){return new(t||u)},providers:[],imports:[[C.a,U,k.b,_.a.register("ngsw-worker.js",{enabled:!0,registrationStrategy:"registerImmediately"})]]}),u);Object(x.R)(),C.c().bootstrapModule(H).catch((function(t){return console.log(t)}))},zn8P:function(t,n){function e(t){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}))}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,5]]]);
//# sourceMappingURL=main-es5.7177506d1d718d0fadd7.js.map