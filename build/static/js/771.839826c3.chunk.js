"use strict";(self.webpackChunksubatec=self.webpackChunksubatec||[]).push([[771],{53771:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,i,a,o,s=t(74165),l=t(15861),c=t(79429),u=t(26672),d=t(91372),p=t(61113),m=t(40712),f=function(e){var n={};return""===e.username.trim()&&(n.username="Nombre de usuario no puede ir vac\xedo"),""===e.nombres.trim()&&(n.nombres="El campo nombre no puede ir vac\xedo"),""===e.apellidos.trim()&&(n.apellidos="El campo apellido no puede ir vac\xedo"),""===e.email_user.trim()?n.email_user="El campo correo no puede ir vac\xedo":/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email_user.trim())||(n.email_user="Correo no v\xe1lido"),n},x=t(50638),b=t(71404),v=t(91068),h=t(63016),g=t(30168),j=t(1413),Z=t(29439),w=t(93433),k=t(47313),A=t(63339),y=t(259),D=t(69099),P=t(46417),I=y.ZP.div(r||(r=(0,g.Z)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 50px;\n\tborder-width: 2px;\n\tborder-radius: 3px;\n\tborder-color: ",";\n\tborder-style: ",";\n\tbackground-color: #fafafa;\n\toutline: none;\n\tcursor: pointer;\n\ttransition: border 0.24s ease-in-out;\n\tp {\n\t\tcolor: #000;\n\t\tfont-weight: 600;\n\t\tuser-select: none;\n\t\ttext-align: center;\n\t}\n"])),(function(e){return F(e)}),(function(e){return e.isDragActive?"solid":"dashed"})),F=function(e){return e.isDragAccept?"#00e676":e.isDragReject?"#ff1744":e.isFocused||e.isDragActive?"#2196f3":"#2b2b2b"},_=y.ZP.aside(i||(i=(0,g.Z)(["\n\tdisplay: 'flex';\n\tflex-direction: 'column';\n\tflex-wrap: 'wrap';\n\tmargin-top: 16px;\n"]))),U=y.ZP.div(a||(a=(0,g.Z)(["\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tmargin: 16px;\n\tmin-height: 100px;\n\n\tbutton {\n\t\tdisplay: none;\n\t}\n\n\t&:hover button {\n\t\tdisplay: inline;\n\t\tposition: absolute;\n\t\tbottom: -10px;\n\t\tbox-shadow: none !important;\n\t\tleft: 25px;\n\t}\n"]))),C=y.ZP.div(o||(o=(0,g.Z)(["\n\toverflow: hidden;\n\twidth: 120px;\n\theight: 120px;\n\tposition: relative;\n\tdisplay: block;\n\tborder-radius: 10px;\n\tbackground: #999;\n\tbackground: linear-gradient(to bottom, #eee, #ddd);\n\t&:hover {\n\t\t-webkit-filter: blur(2.5px);\n\t\tfilter: blur(2.5px);\n\t}\n\n\timg {\n\t\tobject-fit: cover;\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\tmax-width: 100%;\n\t}\n\n\tsvg {\n\t}\n"]))),z=function(e){var n=e.accept,t=void 0===n?{"image/*":[]}:n,r=e.action,i=void 0===r?"multiple":r,a=e.labelText,o=void 0===a?"Arrastra y suelta los archivos aqui para subir":a,c=e.iconPreview,d=e.limit,p=void 0===d?10:d,m=e.onUpload,f=e.onDeleteFile,x=e.canDelete,v=void 0===x||x,g=(0,k.useCallback)((function(e){var n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));"multiple"===i&&([].concat((0,w.Z)(z),(0,w.Z)(n)).length<=p?(E([].concat((0,w.Z)(z),(0,w.Z)(n))),m&&m(n)):h.Am.error("Has excedido la cantidad de im\xe1gnes permitidas que son ".concat(p)));"single"===i&&(E(n),m&&m(n[0]))}),[]),y=(0,k.useState)([]),F=(0,Z.Z)(y,2),z=F[0],E=F[1],L=(0,A.uI)({accept:t,onDrop:g,multiple:"multiple"===i}),R=L.getRootProps,S=L.getInputProps,N=L.isDragActive,O=z.map((function(e,n){return(0,P.jsxs)(U,{children:[(0,P.jsx)(C,{children:c?(0,P.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100",children:c}):(0,P.jsx)("img",{src:e.preview,alt:"preview"})}),v&&(0,P.jsxs)(D.Z,{color:"error",size:"small",variant:"contained",onClick:(0,l.Z)((0,s.Z)().mark((function t(){var r,i,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete z[n],(r=z.filter((function(e){return null!==e}))).sort(),i=0;case 4:if(!(i<r.length)){t.next=13;break}if((a=r[i]).id){t.next=10;break}return t.next=9,(0,b.s3)(a);case 9:r[i].preview=t.sent;case 10:i++,t.next=4;break;case 13:f&&f(e),E(r);case 15:case"end":return t.stop()}}),t)}))),children:["Eliminar ",(0,P.jsx)(u.Xm5,{})]})]},n)}));return(0,k.useEffect)((function(){return function(){z.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[z]),{DropzoneContenedor:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(I,(0,j.Z)((0,j.Z)({isDragActive:N},R({className:"dropzone"})),{},{children:[(0,P.jsx)("input",(0,j.Z)({},S())),N?(0,P.jsxs)("p",{children:["Suelta el fichero para subir",(0,P.jsx)(u.DUB,{})]}):(0,P.jsxs)("p",{children:[o," ",(0,P.jsx)(u.DUB,{})]})]})),(0,P.jsx)(_,{children:O})]}),files:z,setFiles:E}},E=t(26719),L=t.n(E),R=t(48058),S=function(){var e=(0,m.E)(),n=e.usuario,t=e.usuarioAutenticado,r=(0,R.U)().setLoader,i=z({action:"single",labelText:"\xa1Arrastra y suelta para actualizar su foto de perfil autom\xe1ticamente!",onUpload:function(e){Array.isArray(e)||new(L())(e,{quality:.8,maxWidth:500,success:function(e){return(0,l.Z)((0,s.Z)().mark((function n(){var i,a;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0,"Subiendo foto de Perfil"),(i=new FormData).append("file",e,e.name),"/perfil/changeFotoPerfil",n.next=7,v.Z.put("/perfil/changeFotoPerfil",i,{headers:{"content-type":"multipart/form-data"}});case 7:return a=n.sent,e.id=1,e.preview=b.PF+a.data.image_profile,o([e]),h.Am.success(a.data.msg),n.next=14,t();case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),(0,b.S3)(n.t0);case 19:return n.prev=19,r(!1),n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[0,16,19,22]])})))()},error:function(e){console.log(e)}})}}),a=i.DropzoneContenedor,o=i.setFiles;if(!Object.keys(n).length)return null;var g={username:n.username,email_user:n.email_user,nombres:n.nombres,apellidos:n.apellidos,telefono:n.telefono},j=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(r){var i,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,""!==n.username&&(r={email_user:r.email_user,nombres:r.nombres,apellidos:r.apellidos,telefono:r.telefono}),e.next=4,v.Z.put("perfil/putPerfil",r);case 4:i=e.sent,a=i.data,h.Am.success(a.msg),t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),(0,b.S3)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,P.jsxs)(k.Fragment,{children:[(0,P.jsx)(x.Z,{children:(0,P.jsx)(c.J9,{initialValues:g,onSubmit:j,validate:f,children:(0,P.jsxs)(c.l0,{children:[(0,P.jsxs)(p.Z,{marginY:4,variant:"h5",textAlign:"center",children:["Datos Personales ",(0,P.jsx)(u.m3W,{})]}),(0,P.jsx)(d.II,{disabled:""!==n.username,label:"Nombre de Usuario",name:"username"}),(0,P.jsx)(d.II,{label:"Correo",name:"email_user"}),(0,P.jsx)(d.II,{label:"Nombres",name:"nombres"}),(0,P.jsx)(d.II,{label:"Apellidos",name:"apellidos"}),(0,P.jsx)(d.II,{label:"Tel\xe9fono",name:"telefono"}),(0,P.jsxs)(d.zx,{children:["Actualizar Perfil"," ",(0,P.jsx)(u.FJM,{style:{marginLeft:"5px"}})]})]})})}),(0,P.jsx)(x.Z,{children:a})]})}}}]);