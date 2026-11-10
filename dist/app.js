(()=>{var DR=Object.create;var vm=Object.defineProperty;var NR=Object.getOwnPropertyDescriptor;var UR=Object.getOwnPropertyNames;var FR=Object.getPrototypeOf,OR=Object.prototype.hasOwnProperty;var yr=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var E=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var BR=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of UR(e))!OR.call(n,r)&&r!==t&&vm(n,r,{get:()=>e[r],enumerable:!(i=NR(e,r))||i.enumerable});return n};var Yh=(n,e,t)=>(t=n!=null?DR(FR(n)):{},BR(e||!n||!n.__esModule?vm(t,"default",{value:n,enumerable:!0}):t,n));function zR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wg(){let n=_o("canvas");return n.style.display="block",n}function Xu(...n){let e="THREE."+n.shift();hs?hs("log",e,...n):console.log(e,...n)}function Eg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=Eg(n);let e="THREE."+n.shift();if(hs)hs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Qe(...n){n=Eg(n);let e="THREE."+n.shift();if(hs)hs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function uo(...n){let e=n.join(" ");e in ym||(ym[e]=!0,Ye(...n))}function Ag(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ws(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function kR(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function VR(n,e,t){return n!==e?(t-n)/(e-n):0}function po(n,e,t){return(1-t)*n+t*e}function GR(n,e,t,i){return po(n,e,1-Math.exp(-t*i))}function HR(n,e=1){return e-Math.abs(Yu(n,e*2)-e)}function WR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function XR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function YR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ZR(n,e){return n+Math.random()*(e-n)}function $R(n){return n*(.5-Math.random())}function JR(n){n!==void 0&&(Sm=n);let e=Sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KR(n){return n*fo}function jR(n){return n*us}function QR(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function eP(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tP(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $u(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cg(n,e){if(e.constructor===Float32Array)return n;let t=$u(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Rg(n,e){if(e.constructor===Float32Array)return n;let t=$u(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function nP(){let n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=as(r.r),r.g=as(r.g),r.b=as(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?xo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:bm,fromXYZ:wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:bm,fromXYZ:wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function as(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function au(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mr.fromArray(n,s);let a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),c=e.dot(Mr),l=t.dot(Mr),h=i.dot(Mr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}function _P(n,e,t,i,r,s,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===tr,a),c===null)return null;$a.copy(a),$a.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($a);return l<t.near||l>t.far?null:{distance:l,point:$a.clone(),object:n}}function Ja(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Wa),n.getVertexPosition(c,Xa),n.getVertexPosition(l,Ya);let h=_P(n,e,t,i,Wa,Xa,Ya,Um);if(h){let u=new V;Yi.getBarycoord(Um,Wa,Xa,Ya,u),r&&(h.uv=Yi.getInterpolatedAttribute(r,a,c,l,u,new Ge)),s&&(h.uv1=Yi.getInterpolatedAttribute(s,a,c,l,u,new Ge)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,c,l,u,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new V,materialIndex:0};Yi.getNormal(Wa,Xa,Ya,f.normal),h.face=f,h.barycoord=u}return h}function Pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Om(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Om(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Pr(n[t]);for(let r in i)e[r]=i[r]}return e}function Om(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function yP(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ku(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}function rs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ja(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Lg(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function bP(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function wP(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Lg(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let c=bP(s,e,t,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}function Bm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function zm(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function ef(n,e,t,i){let r=DP(i);switch(t){case zu:return n*e;case ku:return n*e/r.components*r.byteLength;case kc:return n*e/r.components*r.byteLength;case nr:return n*e*2/r.components*r.byteLength;case Vc:return n*e*2/r.components*r.byteLength;case qu:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case Gc:return n*e*4/r.components*r.byteLength;case Fo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:case Yc:return Math.max(n,16)*Math.max(e,8)/4;case Hc:case Xc:return Math.max(n,8)*Math.max(e,8)/2;case Zc:case $c:case Kc:case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case qo:case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ko:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function DP(n){switch(n){case _n:case Uu:return{byteLength:1,components:1};case bs:case Fu:case Xn:return{byteLength:2,components:1};case zc:case qc:return{byteLength:2,components:4};case Hn:case Bc:case Wn:return{byteLength:4,components:1};case Ou:case Bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Qi,er,Wm,Su,Xm,No,Ym,ys,tr,dn,Pn,Ar,Ss,Mu,bu,wu,Zm,Tr,$m,Jm,Km,jm,Qm,eg,tg,ng,Eu,Au,ig,rg,sg,og,ag,cg,lg,hg,ug,ic,rc,sc,cs,oc,ac,cc,lc,Nc,fg,dg,ii,Tu,Cu,Ru,Pu,Iu,Lu,Du,Nu,Cr,Ms,Uc,Fc,hc,jn,uc,Zt,pg,Uo,fn,Oc,Ai,_n,Uu,Fu,bs,Bc,Hn,Wn,Xn,zc,qc,Rr,Ou,Bu,zu,qu,Yn,bi,Ti,ku,kc,nr,Vc,Gc,Fo,Oo,Bo,zo,Hc,Wc,Xc,Yc,Zc,$c,Jc,Kc,jc,qo,Qc,el,tl,nl,il,rl,sl,ol,al,cl,ll,hl,ul,fl,dl,pl,ml,gl,xl,_l,ko,vl,mo,fc,tc,pu,mu,gu,xu,mg,yl,gg,Ci,hn,go,xo,St,nc,xg,_g,vg,yg,Vu,Sg,Mg,Gu,Hu,bg,Wu,On,ls,ym,hs,Tg,Vn,rn,Sm,fo,us,Ju,Ge,An,V,Zh,Mm,Ze,$h,bm,wm,pt,Zr,dc,iP,fs,rP,Kh,xn,gt,pc,Tn,vo,mc,_t,$r,zn,sP,oP,Vi,Ua,bn,Em,Am,wi,yo,aP,Tm,Jr,gi,Fa,ao,cP,lP,Cm,Rm,Pm,Im,hP,Kr,jh,jt,Si,uP,ds,Pg,Gi,Oa,Je,sn,So,qn,xi,eu,_i,jr,Qr,Lm,tu,nu,iu,ru,su,ou,Yi,Gn,vi,kn,Ba,es,ts,ns,Hi,Wi,Sr,co,za,qa,Mr,Bt,ka,fP,Qn,Mo,bo,gn,dP,lo,cu,ps,pP,Fn,lu,is,wn,ho,Yt,ei,hu,mP,gP,En,xP,Zi,yi,uu,Va,Ga,ms,gc,Dm,br,Ha,Nm,Wa,Xa,Ya,fu,Za,Um,$a,Cn,xc,wr,vP,Ka,ti,Fm,_c,wo,Ei,Eo,Ao,$i,To,Ig,SP,MP,ni,vc,gs,yc,Sc,Ji,Mc,bc,wc,Ec,Rn,Ki,Ac,Tc,Cc,Co,ji,Rc,Pc,Dg,Ic,Ro,Po,du,qm,km,Lc,Qa,ec,Kn,Er,Xi,Vm,Gm,un,Io,_u,Lo,ss,os,xs,Dc,ju,EP,Qu,AP,TP,CP,RP,PP,IP,LP,vu,Rt,zY,_s,yu,Hm,vs,Do,tf=yr(()=>{Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wm=0,Su=1,Xm=2,No=1,Ym=2,ys=3,tr=0,dn=1,Pn=2,Ar=0,Ss=1,Mu=2,bu=3,wu=4,Zm=5,Tr=100,$m=101,Jm=102,Km=103,jm=104,Qm=200,eg=201,tg=202,ng=203,Eu=204,Au=205,ig=206,rg=207,sg=208,og=209,ag=210,cg=211,lg=212,hg=213,ug=214,ic=0,rc=1,sc=2,cs=3,oc=4,ac=5,cc=6,lc=7,Nc=0,fg=1,dg=2,ii=0,Tu=1,Cu=2,Ru=3,Pu=4,Iu=5,Lu=6,Du=7,Nu=300,Cr=301,Ms=302,Uc=303,Fc=304,hc=1e3,jn=1001,uc=1002,Zt=1003,pg=1004,Uo=1005,fn=1006,Oc=1007,Ai=1008,_n=1009,Uu=1010,Fu=1011,bs=1012,Bc=1013,Hn=1014,Wn=1015,Xn=1016,zc=1017,qc=1018,Rr=1020,Ou=35902,Bu=35899,zu=1021,qu=1022,Yn=1023,bi=1026,Ti=1027,ku=1028,kc=1029,nr=1030,Vc=1031,Gc=1033,Fo=33776,Oo=33777,Bo=33778,zo=33779,Hc=35840,Wc=35841,Xc=35842,Yc=35843,Zc=36196,$c=37492,Jc=37496,Kc=37488,jc=37489,qo=37490,Qc=37491,el=37808,tl=37809,nl=37810,il=37811,rl=37812,sl=37813,ol=37814,al=37815,cl=37816,ll=37817,hl=37818,ul=37819,fl=37820,dl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,ko=36285,vl=36286,mo=2300,fc=2301,tc=2302,pu=2303,mu=2400,gu=2401,xu=2402,mg=3200,yl=0,gg=1,Ci="",hn="srgb",go="srgb-linear",xo="linear",St="srgb",nc=7680,xg=519,_g=512,vg=513,yg=514,Vu=515,Sg=516,Mg=517,Gu=518,Hu=519,bg=35044,Wu="300 es",On=2e3,ls=2001;ym={},hs=null;Tg={[ic]:ic,[sc]:cc,[oc]:oc,[cs]:ac,[rc]:rc,[cc]:sc,[lc]:lc,[ac]:cs},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sm=1234567,fo=Math.PI/180,us=180/Math.PI;Ju={DEG2RAD:fo,RAD2DEG:us,generateUUID:ws,clamp:lt,euclideanModulo:Yu,mapLinear:kR,inverseLerp:VR,lerp:po,damp:GR,pingpong:HR,smoothstep:WR,smootherstep:XR,randInt:YR,randFloat:ZR,randFloatSpread:$R,seededRandom:JR,degToRad:KR,radToDeg:jR,isPowerOfTwo:QR,ceilPowerOfTwo:eP,floorPowerOfTwo:Zu,setQuaternionFromProperEuler:tP,normalize:Rg,denormalize:Cg},Ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(u!==_||c!==f||l!==d||h!==g){let p=c*f+l*d+h*g+u*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let v=Math.acos(p),A=Math.sin(v);m=Math.sin(m*v)/A,a=Math.sin(a*v)/A,c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+_*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+_*a;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zh=new V,Mm=new An,Ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=r[0],p=r[3],m=r[6],v=r[1],A=r[4],M=r[7],y=r[2],b=r[5],x=r[8];return s[0]=o*_+a*v+c*y,s[3]=o*p+a*A+c*b,s[6]=o*m+a*M+c*x,s[1]=l*_+h*v+u*y,s[4]=l*p+h*A+u*b,s[7]=l*m+h*M+u*x,s[2]=f*_+d*v+g*y,s[5]=f*p+d*A+g*b,s[8]=f*m+d*M+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(r*l-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($h.makeScale(e,t)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($h.makeRotation(-e)),this}translate(e,t){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$h=new Ze,bm=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt=nP();dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zr===void 0&&(Zr=_o("canvas")),Zr.width=e.width,Zr.height=e.height;let r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_o("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iP=0,fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iP++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jh(r[o].image)):s.push(Jh(r[o]))}else s=Jh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};rP=0,Kh=new V,xn=class n extends Vn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=jn,r=jn,s=fn,o=Ai,a=Yn,c=_n,l=n.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rP++}),this.uuid=ws(),this.name="",this.source=new fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Nu;xn.DEFAULT_ANISOTROPY=1;gt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,M=(d+1)/2,y=(m+1)/2,b=(h+f)/4,x=(u+_)/4,w=(g+p)/4;return A>M&&A>y?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=x/i):M>y?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=w/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=x/s,r=w/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new xn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends pc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vo=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},mc=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},_t=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,h,u,f,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,f,d,g,_,p)}set(e,t,i,r,s,o,a,c,l,h,u,f,d,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sP,e,oP)}lookAt(e,t,i){let r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Vi.crossVectors(i,bn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Vi.crossVectors(i,bn)),Vi.normalize(),Ua.crossVectors(bn,Vi),r[0]=Vi.x,r[4]=Ua.x,r[8]=bn.x,r[1]=Vi.y,r[5]=Ua.y,r[9]=bn.y,r[2]=Vi.z,r[6]=Ua.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],A=i[7],M=i[11],y=i[15],b=r[0],x=r[4],w=r[8],P=r[12],R=r[1],L=r[5],D=r[9],z=r[13],I=r[2],q=r[6],F=r[10],k=r[14],te=r[3],H=r[7],ne=r[11],ie=r[15];return s[0]=o*b+a*R+c*I+l*te,s[4]=o*x+a*L+c*q+l*H,s[8]=o*w+a*D+c*F+l*ne,s[12]=o*P+a*z+c*k+l*ie,s[1]=h*b+u*R+f*I+d*te,s[5]=h*x+u*L+f*q+d*H,s[9]=h*w+u*D+f*F+d*ne,s[13]=h*P+u*z+f*k+d*ie,s[2]=g*b+_*R+p*I+m*te,s[6]=g*x+_*L+p*q+m*H,s[10]=g*w+_*D+p*F+m*ne,s[14]=g*P+_*z+p*k+m*ie,s[3]=v*b+A*R+M*I+y*te,s[7]=v*x+A*L+M*q+y*H,s[11]=v*w+A*D+M*F+y*ne,s[15]=v*P+A*z+M*k+y*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=c*d-l*f,A=a*d-l*u,M=a*f-c*u,y=o*d-l*h,b=o*f-c*h,x=o*u-a*h;return t*(_*v-p*A+m*M)-i*(g*v-p*y+m*b)+r*(g*A-_*y+m*x)-s*(g*M-_*b+p*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*a-i*o,A=t*c-r*o,M=t*l-s*o,y=i*c-r*a,b=i*l-s*a,x=r*l-s*c,w=h*_-u*g,P=h*p-f*g,R=h*m-d*g,L=u*p-f*_,D=u*m-d*_,z=f*m-d*p,I=v*z-A*D+M*L+y*R-b*P+x*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(a*z-c*D+l*L)*q,e[1]=(r*D-i*z-s*L)*q,e[2]=(_*x-p*b+m*y)*q,e[3]=(f*b-u*x-d*y)*q,e[4]=(c*R-o*z-l*P)*q,e[5]=(t*z-r*R+s*P)*q,e[6]=(p*M-g*x-m*A)*q,e[7]=(h*x-f*M+d*A)*q,e[8]=(o*D-a*R+l*w)*q,e[9]=(i*R-t*D-s*w)*q,e[10]=(g*b-_*M+m*v)*q,e[11]=(u*M-h*b-d*v)*q,e[12]=(a*P-o*L-c*w)*q,e[13]=(t*L-i*P+r*w)*q,e[14]=(_*A-g*y-p*v)*q,e[15]=(h*y-u*A+f*v)*q,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,g=s*u,_=o*h,p=o*u,m=a*u,v=c*l,A=c*h,M=c*u,y=i.x,b=i.y,x=i.z;return r[0]=(1-(_+m))*y,r[1]=(d+M)*y,r[2]=(g-A)*y,r[3]=0,r[4]=(d-M)*b,r[5]=(1-(f+m))*b,r[6]=(p+v)*b,r[7]=0,r[8]=(g+A)*x,r[9]=(p-v)*x,r[10]=(1-(f+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=$r.set(r[0],r[1],r[2]).length(),a=$r.set(r[4],r[5],r[6]).length(),c=$r.set(r[8],r[9],r[10]).length();s<0&&(o=-o),zn.copy(this);let l=1/o,h=1/a,u=1/c;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=On,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===On)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ls)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=On,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===On)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ls)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$r=new V,zn=new _t,sP=new V(0,0,0),oP=new V(1,1,1),Vi=new V,Ua=new V,bn=new V,Em=new _t,Am=new An,wi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},aP=0,Tm=new V,Jr=new An,gi=new _t,Fa=new V,ao=new V,cP=new V,lP=new An,Cm=new V(1,0,0),Rm=new V(0,1,0),Pm=new V(0,0,1),Im={type:"added"},hP={type:"removed"},Kr={type:"childadded",child:null},jh={type:"childremoved",child:null},jt=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aP++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new V,t=new wi,i=new An,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ao,Fa,this.up):gi.lookAt(Fa,ao,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(gi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hP),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,cP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,lP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new V(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Si=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},uP={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uP)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=Yu(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qh(o,s,e+1/3),this.g=Qh(o,s,e),this.b=Qh(o,s,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let i=Pg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return pt.workingToColorSpace(sn.copy(this),e),Math.round(lt(sn.r*255,0,255))*65536+Math.round(lt(sn.g*255,0,255))*256+Math.round(lt(sn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(sn.copy(this),t);let i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=hn){pt.workingToColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,r=sn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Oa);let i=po(Gi.h,Oa.h,t),r=po(Gi.s,Oa.s,t),s=po(Gi.l,Oa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Je;Je.NAMES=Pg;So=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new V,xi=new V,eu=new V,_i=new V,jr=new V,Qr=new V,Lm=new V,tu=new V,nu=new V,iu=new V,ru=new gt,su=new gt,ou=new gt,Yi=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),xi.subVectors(i,t),eu.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(xi),c=qn.dot(eu),l=xi.dot(xi),h=xi.dot(eu),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ru.setScalar(0),su.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(e,t),su.fromBufferAttribute(e,i),ou.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ru,s.x),o.addScaledVector(su,s.y),o.addScaledVector(ou,s.z),o}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),xi.subVectors(e,t),qn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),qn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;jr.subVectors(r,i),Qr.subVectors(s,i),tu.subVectors(e,i);let c=jr.dot(tu),l=Qr.dot(tu);if(c<=0&&l<=0)return t.copy(i);nu.subVectors(e,r);let h=jr.dot(nu),u=Qr.dot(nu);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(i).addScaledVector(jr,o);iu.subVectors(e,s);let d=jr.dot(iu),g=Qr.dot(iu);if(g>=0&&d<=g)return t.copy(s);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Qr,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Lm.subVectors(s,r),a=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(Lm,a);let m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(jr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),za.subVectors(this.max,co),es.subVectors(e.a,co),ts.subVectors(e.b,co),ns.subVectors(e.c,co),Hi.subVectors(ts,es),Wi.subVectors(ns,ts),Sr.subVectors(es,ns);let t=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-Sr.z,Sr.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,Sr.z,0,-Sr.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-Sr.y,Sr.x,0];return!au(t,es,ts,ns,za)||(t=[1,0,0,0,1,0,0,0,1],!au(t,es,ts,ns,za))?!1:(qa.crossVectors(Hi,Wi),t=[qa.x,qa.y,qa.z],au(t,es,ts,ns,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new V,new V,new V,new V,new V,new V,new V,new V],kn=new V,Ba=new Gn,es=new V,ts=new V,ns=new V,Hi=new V,Wi=new V,Sr=new V,co=new V,za=new V,qa=new V,Mr=new V;Bt=new V,ka=new Ge,fP=0,Qn=class extends Vn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bg,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?$u(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cg(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rg(e,this.array)}},Mo=class extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},bo=class extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},gn=class extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}},dP=new Gn,lo=new V,cu=new V,ps=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(cu)),this.expandByPoint(lo.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pP=0,Fn=new _t,lu=new jt,is=new V,wn=new Gn,ho=new Gn,Yt=new V,ei=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pP++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zR(e)?bo:Mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(wn.min,ho.min),wn.expandByPoint(Yt),Yt.addVectors(wn.max,ho.max),wn.expandByPoint(Yt)):(wn.expandByPoint(ho.min),wn.expandByPoint(ho.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),Yt.add(is)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Qn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new V,c[P]=new V;let h=new V,u=new V,f=new V,d=new Ge,g=new Ge,_=new Ge,p=new V,m=new V;function v(P,R,L){l[P]=l[R]=l[L]=1,h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,L),d.fromBufferAttribute(s,P),g.fromBufferAttribute(s,R),_.fromBufferAttribute(s,L),u.sub(h),f.sub(h),g.sub(d),_.sub(d);let D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(D),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(D),a[P].add(p),a[R].add(p),a[L].add(p),c[P].add(m),c[R].add(m),c[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,R=A.length;P<R;++P){let L=A[P],D=L.start,z=L.count;for(let I=D,q=D+z;I<q;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new V,y=new V,b=new V,x=new V;function w(P){b.fromBufferAttribute(r,P),x.copy(b);let R=a[P];M.copy(R),M.sub(b.multiplyScalar(b.dot(R))).normalize(),y.crossVectors(x,R);let D=y.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,R=i.count;P<R;++P)l[P]&&w(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new Qn(f,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new V,mP=new V,gP=new Ze,En=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=hu.subVectors(i,t).cross(mP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gP.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xP=0,Zi=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xP++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Ss,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Au,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nc,this.stencilZFail=nc,this.stencilZPass=nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new En().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yi=new V,uu=new V,Va=new V,Ga=new V,ms=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uu.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Ga.copy(this.origin).sub(uu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Va),a=Ga.dot(this.direction),c=-Ga.dot(Va),l=Ga.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(uu).addScaledVector(Va,f),d}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,_=t.y-o.y,p=t.z-o.z,m=i.x-o.x,v=i.y-o.y,A=i.z-o.z,M=Math.abs(c),y=Math.abs(l),b=Math.abs(h),x,w,P,R,L,D,z,I,q,F,k,te;if(M>=y&&M>=b?(P=c,D=u,q=g,te=m,c>=0?(x=l,w=h,R=f,L=d,z=_,I=p,F=v,k=A):(x=h,w=l,R=d,L=f,z=p,I=_,F=A,k=v)):y>=b?(P=l,D=f,q=_,te=v,l>=0?(x=h,w=c,R=d,L=u,z=p,I=g,F=A,k=m):(x=c,w=h,R=u,L=d,z=g,I=p,F=m,k=A)):(P=h,D=d,q=p,te=A,h>=0?(x=c,w=l,R=u,L=f,z=g,I=_,F=m,k=v):(x=l,w=c,R=f,L=u,z=_,I=g,F=v,k=m)),P===0)return null;let H=x/P,ne=w/P,ie=1/P,be=R-H*D,Ce=L-ne*D,$=z-H*q,se=I-ne*q,xe=F-H*te,Be=k-ne*te,Se=xe*se-Be*$,Xe=be*Be-Ce*xe,Et=$*Ce-se*be;if(r){if(Se<0||Xe<0||Et<0)return null}else if((Se<0||Xe<0||Et<0)&&(Se>0||Xe>0||Et>0))return null;let Ve=Se+Xe+Et;if(Ve===0)return null;let at=ie*(Se*D+Xe*q+Et*te);return(Ve>0?at<0:at>0)?null:this.at(at/Ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gc=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dm=new _t,br=new ms,Ha=new ps,Nm=new V,Wa=new V,Xa=new V,Ya=new V,fu=new V,Za=new V,Um=new V,$a=new V,Cn=class extends jt{constructor(e=new ei,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(fu.fromBufferAttribute(u,e),o?Za.addScaledVector(fu,h):Za.addScaledVector(fu.sub(t),h))}t.add(Za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Ha.containsPoint(br.origin)===!1&&(br.intersectSphere(Ha,Nm)===null||br.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Dm.copy(s).invert(),br.copy(e.ray).applyMatrix4(Dm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),A=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,y=A;M<y;M+=3){let b=a.getX(M),x=a.getX(M+1),w=a.getX(M+2);r=Ja(this,m,e,i,l,h,u,b,x,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let v=a.getX(p),A=a.getX(p+1),M=a.getX(p+2);r=Ja(this,o,e,i,l,h,u,v,A,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),A=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,y=A;M<y;M+=3){let b=M,x=M+1,w=M+2;r=Ja(this,m,e,i,l,h,u,b,x,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let v=p,A=p+1,M=p+2;r=Ja(this,o,e,i,l,h,u,v,A,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};xc=class extends xn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Zt,h=Zt,u,f){super(null,o,a,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wr=new ps,vP=new Ge(.5,.5),Ka=new V,ti=class{constructor(e=new En,t=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],A=s[13],M=s[14],y=s[15];if(r[0].setComponents(l-o,d-h,m-g,y-v).normalize(),r[1].setComponents(l+o,d+h,m+g,y+v).normalize(),r[2].setComponents(l+a,d+u,m+_,y+A).normalize(),r[3].setComponents(l-a,d-u,m-_,y-A).normalize(),i)r[4].setComponents(c,f,p,M).normalize(),r[5].setComponents(l-c,d-f,m-p,y-M).normalize();else if(r[4].setComponents(l-c,d-f,m-p,y-M).normalize(),t===On)r[5].setComponents(l+c,d+f,m+p,y+M).normalize();else if(t===ls)r[5].setComponents(c,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);let t=vP.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fm=new _t,_c=class n{constructor(){this.coordinateSystem=On,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Fm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new ti),i[r].setFromProjectionMatrix(Fm,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ti),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}},wo=class extends xn{constructor(e=[],t=Cr,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends xn{constructor(e,t,i=Hn,r,s,o,a=Zt,c=Zt,l,h=bi,u=1){if(h!==bi&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Eo=class extends Ei{constructor(e,t=Hn,i=Cr,r,s,o=Zt,a=Zt,c,l=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ao=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$i=class n extends ei{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(u,2));function g(_,p,m,v,A,M,y,b,x,w,P){let R=M/x,L=y/w,D=M/2,z=y/2,I=b/2,q=x+1,F=w+1,k=0,te=0,H=new V;for(let ne=0;ne<F;ne++){let ie=ne*L-z;for(let be=0;be<q;be++){let Ce=be*R-D;H[_]=Ce*v,H[p]=ie*A,H[m]=I,l.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[m]=b>0?1:-1,h.push(H.x,H.y,H.z),u.push(be/x),u.push(1-ne/w),k+=1}}for(let ne=0;ne<w;ne++)for(let ie=0;ie<x;ie++){let be=f+ie+q*ne,Ce=f+ie+q*(ne+1),$=f+(ie+1)+q*(ne+1),se=f+(ie+1)+q*ne;c.push(be,Ce,se),c.push(Ce,$,se),te+=6}a.addGroup(d,te,P),d+=te,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},To=class n extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*f-o;for(let A=0;A<l;A++){let M=A*u-s;g.push(M,-v,0),_.push(0,0,1),p.push(A/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let A=v+l*m,M=v+l*(m+1),y=v+1+l*(m+1),b=v+1+l*m;d.push(A,M,b),d.push(M,y,b)}this.setIndex(d),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};Ig={clone:Pr,merge:on},SP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SP,this.fragmentShader=MP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=yP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vc=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gs=class extends Zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ji=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mc=class extends Ji{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case gu:s=e,a=2*t-i;break;case xu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case gu:o=e,c=2*i-t;break;case xu:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,A=(-1-d)*p+(1.5+d)*_+.5*g,M=d*p-d*_;for(let y=0;y!==a;++y)s[y]=m*o[h+y]+v*o[l+y]+A*o[c+y]+M*o[u+y];return s}},bc=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},wc=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ec=class extends Ji{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(r-t),_=1-g;for(let p=0;p!==a;++p)s[p]=o[l+p]*_+o[c+p]*g;return s}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let _=o[l+g],p=o[c+g],m=d*f+g*2,v=u[m],A=u[m+1],M=e*f+g*2,y=h[M],b=h[M+1],x=wP(i,t,v,y,r);s[g]=Lg(x,_,A,b,p)}return s}};Rn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rs(t,this.TimeBufferType),this.values=rs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:rs(e.times,Array),values:rs(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),ja(e.settings)&&(i.settings={inTangents:rs(e.settings.inTangents,Array),outTangents:rs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ec(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case fc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;ja(this.settings)&&(Bm(this.settings.inTangents,e),Bm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;ja(this.settings)&&(zm(this.settings.inTangents,e),zm(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&qR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===tc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,ja(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=fc;Ki=class extends Rn{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=mo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;Ac=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}};Ac.prototype.ValueTypeName="color";Tc=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}};Tc.prototype.ValueTypeName="number";Cc=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)An.slerpFlat(s,0,o,l-a,o,l,c);return s}},Co=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;ji=class extends Rn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=mo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;Rc=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}};Rc.prototype.ValueTypeName="vector";Pc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dg=new Pc,Ic=class{constructor(e){this.manager=e!==void 0?e:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";Ro=class extends jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Po=class extends Ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},du=new _t,qm=new V,km=new V,Lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ti,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(qm),km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(km),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(du,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qa=new V,ec=new An,Kn=new V,Er=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,ec,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ec,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qa,ec,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ec,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new V,Vm=new Ge,Gm=new Ge,un=class extends Er{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Vm,Gm),t.subVectors(Gm,Vm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Io=class extends Er{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_u=class extends Lc{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new _u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ss=-90,os=1,xs=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(ss,os,e,t);r.layers=this.layers,this.add(r);let s=new un(ss,os,e,t);s.layers=this.layers,this.add(s);let o=new un(ss,os,e,t);o.layers=this.layers,this.add(o);let a=new un(ss,os,e,t);a.layers=this.layers,this.add(a);let c=new un(ss,os,e,t);c.layers=this.layers,this.add(c);let l=new un(ss,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Dc=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ju="\\[\\]\\.:\\/",EP=new RegExp("["+ju+"]","g"),Qu="[^"+ju+"]",AP="[^"+ju.replace("\\.","")+"]",TP=/((?:WC+[\/:])*)/.source.replace("WC",Qu),CP=/(WCOD+)?/.source.replace("WCOD",AP),RP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),PP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),IP=new RegExp("^"+TP+CP+RP+PP+"$"),LP=["material","materials","bones","map"],vu=class{constructor(e,t,i){let r=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(EP,"")}static parseTrackName(e){let t=IP.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);LP.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=vu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];zY=new Float32Array(1),_s=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},yu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}},Hm=new Ge,vs=class{constructor(e=new Ge(1/0,1/0),t=new Ge(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Do=class extends Vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function t0(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function UP(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}function gL(n,e,t,i,r,s){let o=new Je(0),a=r===!0?0:1,c,l,h=null,u=0,f=null;function d(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let M=v.backgroundBlurriness>0;A=e.get(A,M)}return A}function g(v){let A=!1,M=d(v);M===null?p(o,a):M&&M.isColor&&(p(M,1),A=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,A){let M=d(A);M&&M.isCubeTexture?(l===void 0&&(l=new Cn(new $i(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Pr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mL.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(n0),l.material.toneMapped=pt.getTransfer(M.colorSpace)!==St,(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Cn(new To(2,2),new ni({name:"BackgroundMaterial",uniforms:Pr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=pt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,A){v.getRGB(Sl,Ku(n)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,A,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:_,dispose:m}}function xL(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(L,D,z,I,q){let F=!1,k=u(L,I,z,D);s!==k&&(s=k,l(s.object)),F=d(L,I,z,q),F&&g(L,I,z,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(L,D,z,I),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function u(L,D,z,I){let q=I.wireframe===!0,F=i[D.id];F===void 0&&(F={},i[D.id]=F);let k=L.isInstancedMesh===!0?L.id:0,te=F[k];te===void 0&&(te={},F[k]=te);let H=te[z.id];H===void 0&&(H={},te[z.id]=H);let ne=H[q];return ne===void 0&&(ne=f(c()),H[q]=ne),ne}function f(L){let D=[],z=[],I=[];for(let q=0;q<t;q++)D[q]=0,z[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,D,z,I){let q=s.attributes,F=D.attributes,k=0,te=z.getAttributes();for(let H in te)if(te[H].location>=0){let ie=q[H],be=F[H];if(be===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),ie===void 0||ie.attribute!==be||be&&ie.data!==be.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function g(L,D,z,I){let q={},F=D.attributes,k=0,te=z.getAttributes();for(let H in te)if(te[H].location>=0){let ie=F[H];ie===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));let be={};be.attribute=ie,ie&&ie.data&&(be.data=ie.data),q[H]=be,k++}s.attributes=q,s.attributesNum=k,s.index=I}function _(){let L=s.newAttributes;for(let D=0,z=L.length;D<z;D++)L[D]=0}function p(L){m(L,0)}function m(L,D){let z=s.newAttributes,I=s.enabledAttributes,q=s.attributeDivisors;z[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),q[L]!==D&&(n.vertexAttribDivisor(L,D),q[L]=D)}function v(){let L=s.newAttributes,D=s.enabledAttributes;for(let z=0,I=D.length;z<I;z++)D[z]!==L[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function A(L,D,z,I,q,F,k){k===!0?n.vertexAttribIPointer(L,D,z,q,F):n.vertexAttribPointer(L,D,z,I,q,F)}function M(L,D,z,I){_();let q=I.attributes,F=z.getAttributes(),k=D.defaultAttributeValues;for(let te in F){let H=F[te];if(H.location>=0){let ne=q[te];if(ne===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){let ie=ne.normalized,be=ne.itemSize,Ce=e.get(ne);if(Ce===void 0)continue;let $=Ce.buffer,se=Ce.type,xe=Ce.bytesPerElement,Be=se===n.INT||se===n.UNSIGNED_INT||ne.gpuType===Bc;if(ne.isInterleavedBufferAttribute){let Se=ne.data,Xe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Et=ne.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ve=0;Ve<H.locationSize;Ve++)m(H.location+Ve,Se.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)p(H.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Ve=0;Ve<H.locationSize;Ve++)A(H.location+Ve,be/H.locationSize,se,ie,Xe*xe,(Et+be/H.locationSize*Ve)*xe,Be)}else{if(ne.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)m(H.location+Se,ne.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<H.locationSize;Se++)p(H.location+Se);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Se=0;Se<H.locationSize;Se++)A(H.location+Se,be/H.locationSize,se,ie,be*xe,be/H.locationSize*Se*xe,Be)}}else if(k!==void 0){let ie=k[te];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(H.location,ie);break;case 3:n.vertexAttrib3fv(H.location,ie);break;case 4:n.vertexAttrib4fv(H.location,ie);break;default:n.vertexAttrib1fv(H.location,ie)}}}}v()}function y(){P();for(let L in i){let D=i[L];for(let z in D){let I=D[z];for(let q in I){let F=I[q];for(let k in F)h(F[k].object),delete F[k];delete I[q]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let D=i[L.id];for(let z in D){let I=D[z];for(let q in I){let F=I[q];for(let k in F)h(F[k].object),delete F[k];delete I[q]}}delete i[L.id]}function x(L){for(let D in i){let z=i[D];for(let I in z){let q=z[I];if(q[L.id]===void 0)continue;let F=q[L.id];for(let k in F)h(F[k].object),delete F[k];delete q[L.id]}}}function w(L){for(let D in i){let z=i[D],I=L.isInstancedMesh===!0?L.id:0,q=z[I];if(q!==void 0){for(let F in q){let k=q[F];for(let te in k)h(k[te].object),delete k[te];delete q[F]}delete z[I],Object.keys(z).length===0&&delete i[D]}}}function P(){R(),o=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function _L(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function vL(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==Yn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==_n&&x!==Wn&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:M,maxSamples:y,samples:b}}function yL(n){let e=this,t=null,i=0,r=!1,s=!1,o=new En,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{let v=s?0:i,A=v*4,M=m.clippingState||null;c.value=M,M=h(g,f,A,d);for(let y=0;y!==A;++y)M[y]=t[y];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,M=d;A!==_;++A,M+=4)o.copy(u[A]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ug(n,e,t){return new Ho(n,{minFilter:Ai,generateMipmaps:e,type:Xn,colorSpace:go,depthBuffer:t})}function Wo(n,e,t){return new ni({name:n,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:dn,blending:Ar,depthTest:!1,depthWrite:!1})}function AL(){return Wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${i0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function TL(){return Wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:r0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function CL(){return Wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ML}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fg(){return Wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Og(){return Wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function RL(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Uc||d===Fc)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Ho(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Uc||d===Fc,_=d===Cr||d===Ms;if(g||_){let p=t.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new bl(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return g&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new bl(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Uc?f.mapping=Cr:d===Fc&&(f.mapping=Ms),f}function c(f){let d=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function PL(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&uo("WebGLRenderer: "+i+" extension not supported."),r}}}function IL(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let _=s.get(g);_&&(e.remove(_),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,_){return r[_.id]!==void 0||(_.addEventListener("dispose",a),r[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let p in _)e.update(_[p],n.ARRAY_BUFFER)}function u(g){let _=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,A=p.count>=65535?bo:Mo,M=new A(Math.ceil(v/3)*6,1),y=M.array;if(_!==null){let x=_.array;m=_.version;for(let w=0,P=0;w<v;w+=3){let R=x[w+0],L=x[w+1],D=x[w+2];y[P++]=R,y[P++]=L,y[P++]=L,y[P++]=D,y[P++]=D,y[P++]=R}}else{m=p.version;for(let x=0,w=0;x<v;x+=3){let P=x+0,R=x+1,L=x+2;y[w++]=P,y[w++]=R,y[w++]=R,y[w++]=L,y[w++]=L,y[w++]=P}}M.version=m;let b=s.get(g);b&&e.remove(b),s.set(g,M)}function f(g){let _=s.get(g);if(_){let p=g.index;p!==null&&_.version<p.version&&u(g)}else u(g);return s.get(g)}function d(){for(let g in r){let _=r[g].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function LL(n,e,t){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,s,u*o),t.update(f,i,1)}function l(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function DL(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NL(n,e,t){let i=new WeakMap,r=new gt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let M=a.attributes.position.count*A,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*y*4*u),x=new vo(b,M,y,u);x.type=Wn,x.needsUpdate=!0;let w=A*4;for(let R=0;R<u;R++){let L=p[R],D=m[R],z=v[R],I=M*y*4*R;for(let q=0;q<L.count;q++){let F=q*w;d===!0&&(r.fromBufferAttribute(L,q),b[I+F+0]=r.x,b[I+F+1]=r.y,b[I+F+2]=r.z,b[I+F+3]=0),g===!0&&(r.fromBufferAttribute(D,q),b[I+F+4]=r.x,b[I+F+5]=r.y,b[I+F+6]=r.z,b[I+F+7]=0),_===!0&&(r.fromBufferAttribute(z,q),b[I+F+8]=r.x,b[I+F+9]=r.y,b[I+F+10]=r.z,b[I+F+11]=z.itemSize===4?r.w:1)}}f={count:u,texture:x,size:new Ge(M,y)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function UL(n,e,t,i,r){let s=new WeakMap;function o(l){let h=r.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function OL(n,e,t,i,r,s){let o=new Tn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new ei;h.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gn([0,2,0,0,2,0],2));let u=new vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Cn(h,u),d=new Io(-1,1,1,-1,0,1),g=null,_=null,p=!1,m,v=null,A=[],M=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),c!==null&&c.setSize(y,b);for(let x=0;x<A.length;x++){let w=A[x];w.setSize&&w.setSize(y,b)}},this.setEffects=function(y){A=y,M=A.length>0&&A[0].isRenderPass===!0;let b=o.width,x=o.height;A.length>0&&a===null&&(a=new Tn(b,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new Tn(b,x,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let w=r===!0&&A.some(P=>P.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new Ei(b,x),s===!0&&(l.format=Ti,l.type=Rr)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let P=0;P<A.length;P++){let R=A[P];R.setSize&&R.setSize(b,x),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(y,b){if(p||y.toneMapping===ii&&A.length===0)return!1;if(v=b,b!==null){let x=b.width,w=b.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return M===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=ii,!0},this.hasRenderPass=function(){return M},this.end=function(y,b){y.toneMapping=m,p=!0;let x=o,w=a;for(let P=0;P<A.length;P++){let R=A[P];R.enabled!==!1&&(R.render(y,w,x,b),R.needsSwap!==!1&&(x=w,w=w===a?c:a))}if(g!==y.outputColorSpace||_!==y.toneMapping){g=y.outputColorSpace,_=y.toneMapping,u.defines={},pt.getTransfer(g)===St&&(u.defines.SRGB_TRANSFER="");let P=FL[_];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(v),y.render(f,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}function As(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Bg[r];if(s===void 0&&(s=new Float32Array(r),Bg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=zg[e];t===void 0&&(t=new Int32Array(e),zg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function qL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function kL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function VL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;Vg.set(i),n.uniformMatrix2fv(this.addr,!1,Vg),Ht(t,i)}}function GL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;kg.set(i),n.uniformMatrix3fv(this.addr,!1,kg),Ht(t,i)}}function HL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,i))return;qg.set(i),n.uniformMatrix4fv(this.addr,!1,qg),Ht(t,i)}}function WL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function YL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function ZL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function $L(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function KL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function jL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Al(n){return n.version===0&&(n.compareFunction=Hu,n.needsUpdate=!0),n}function QL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Al(o0):s=s0,t.setTexture2D(e||s,r)}function eD(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||l0,r)}function tD(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Al(a0):s=h0,t.setTextureCube(e||s,r)}function nD(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||c0,r)}function iD(n){switch(n){case 5126:return BL;case 35664:return zL;case 35665:return qL;case 35666:return kL;case 35674:return VL;case 35675:return GL;case 35676:return HL;case 5124:case 35670:return WL;case 35667:case 35671:return XL;case 35668:case 35672:return YL;case 35669:case 35673:return ZL;case 5125:return $L;case 36294:return JL;case 36295:return KL;case 36296:return jL;case 35678:case 36198:case 36298:case 36306:case 35682:return QL;case 35679:case 36299:case 36307:return eD;case 35680:case 36300:case 36308:case 36293:return tD;case 36289:case 36303:case 36311:case 36292:return nD}}function rD(n,e){n.uniform1fv(this.addr,e)}function sD(n,e){let t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function oD(n,e){let t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function aD(n,e){let t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function cD(n,e){let t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lD(n,e){let t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hD(n,e){let t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uD(n,e){n.uniform1iv(this.addr,e)}function fD(n,e){n.uniform2iv(this.addr,e)}function dD(n,e){n.uniform3iv(this.addr,e)}function pD(n,e){n.uniform4iv(this.addr,e)}function mD(n,e){n.uniform1uiv(this.addr,e)}function gD(n,e){n.uniform2uiv(this.addr,e)}function xD(n,e){n.uniform3uiv(this.addr,e)}function _D(n,e){n.uniform4uiv(this.addr,e)}function vD(n,e,t){let i=this.cache,r=e.length,s=El(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Al(o0):o=s0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function yD(n,e,t){let i=this.cache,r=e.length,s=El(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||l0,s[o])}function SD(n,e,t){let i=this.cache,r=e.length,s=El(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Al(a0):o=h0;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function MD(n,e,t){let i=this.cache,r=e.length,s=El(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||c0,s[o])}function bD(n){switch(n){case 5126:return rD;case 35664:return sD;case 35665:return oD;case 35666:return aD;case 35674:return cD;case 35675:return lD;case 35676:return hD;case 5124:case 35670:return uD;case 35667:case 35671:return fD;case 35668:case 35672:return dD;case 35669:case 35673:return pD;case 5125:return mD;case 36294:return gD;case 36295:return xD;case 36296:return _D;case 35678:case 36198:case 36298:case 36306:case 35682:return vD;case 35679:case 36299:case 36307:return yD;case 35680:case 36300:case 36308:case 36293:return SD;case 36289:case 36303:case 36311:case 36292:return MD}}function Gg(n,e){n.seq.push(e),n.map[e.id]=e}function wD(n,e,t){let i=n.name,r=i.length;for(nf.lastIndex=0;;){let s=nf.exec(i),o=nf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gg(t,l===void 0?new sf(a,n,e):new of(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new af(a),Gg(t,u)),t=u}}}function Hg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function TD(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function CD(n){pt._getMatrix(Wg,pt.workingColorSpace,n);let e=`mat3( ${Wg.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case xo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+TD(n.getShaderSource(e),a)}else return s}function RD(n,e){let t=CD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function ID(n,e){let t=PD[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LD(){pt.getLuminanceCoefficients(Ml);let n=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function ND(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function UD(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Go(n){return n!==""}function Yg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function cf(n){return n.replace(FD,OD)}function OD(n,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cf(t)}function $g(n){return n.replace(BD,zD)}function zD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kD(n){return qD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function GD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":VD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function WD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":HD[n.combine]||"ENVMAP_BLENDING_NONE"}function XD(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=kD(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=GD(t),u=WD(t),f=DD(t),d=ND(s),g=r.createProgram(),_,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Go).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(_=[Jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[Jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ot.tonemapping_pars_fragment:"",t.toneMapping!==ii?ID("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,RD("linearToOutputTexel",t.outputColorSpace),LD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),o=cf(o),o=Yg(o,t),o=Zg(o,t),a=cf(a),a=Yg(a,t),a=Zg(a,t),o=$g(o),a=$g(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+_+o,A=m+p+a,M=Hg(r,r.VERTEX_SHADER,v),y=Hg(r,r.FRAGMENT_SHADER,A);r.attachShader(g,M),r.attachShader(g,y),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(R){if(n.debug.checkShaderErrors){let L=r.getProgramInfoLog(g)||"",D=r.getShaderInfoLog(M)||"",z=r.getShaderInfoLog(y)||"",I=L.trim(),q=D.trim(),F=z.trim(),k=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,M,y);else{let H=Xg(r,M,"vertex"),ne=Xg(r,y,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+H+`
`+ne)}else I!==""?Ye("WebGLProgram: Program Info Log:",I):(q===""||F==="")&&(te=!1);te&&(R.diagnostics={runnable:k,programLog:I,vertexShader:{log:q,prefix:_},fragmentShader:{log:F,prefix:p}})}r.deleteShader(M),r.deleteShader(y),x=new Es(r,g),w=UD(r,g)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(g,ED)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AD++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=y,this}function ZD(n){return n===nr||n===qo||n===ko}function $D(n,e,t,i,r,s){let o=new yo,a=new lf,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,w,P,R,L,D){let z=R.fog,I=L.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||q,F),te=f[x.type],H=i.precision;x.precision!==null&&(H=i.getMaxPrecision(x.precision),H!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=ne!==void 0?ne.length:0,be=0;I.morphAttributes.position!==void 0&&(be=1),I.morphAttributes.normal!==void 0&&(be=2),I.morphAttributes.color!==void 0&&(be=3);let Ce,$,se,xe;if(te){let ye=si[te];Ce=ye.vertexShader,$=ye.fragmentShader}else{Ce=x.vertexShader,$=x.fragmentShader;let ye=a.getVertexShaderStage(x),ut=a.getFragmentShaderStage(x);a.update(x,ye,ut),se=ye.id,xe=ut.id}let Be=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Xe=L.isInstancedMesh===!0,Et=L.isBatchedMesh===!0,Ve=!!x.map,at=!!x.matcap,ht=!!k,tt=ht&&k.isPMREMTexture===!0,Nt=!!x.aoMap,It=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,X=!!x.normalMap,oe=!!x.displacementMap,me=!!x.emissiveMap,de=!!x.metalnessMap,he=!!x.roughnessMap,ke=x.anisotropy>0,N=x.clearcoat>0,He=x.diffuseRoughness>0,je=x.dispersion>0,Ie=x.retroreflectivity>0,ce=x.iridescence>0,qe=x.sheen>0,_e=x.transmission>0,Re=ke&&!!x.anisotropyMap,C=N&&!!x.clearcoatMap,S=N&&!!x.clearcoatNormalMap,B=N&&!!x.clearcoatRoughnessMap,Q=He&&!!x.diffuseRoughnessMap,Y=ce&&!!x.iridescenceMap,ae=ce&&!!x.iridescenceThicknessMap,le=qe&&!!x.sheenColorMap,J=qe&&!!x.sheenRoughnessMap,K=!!x.specularMap,fe=!!x.specularColorMap,U=!!x.specularIntensityMap,ee=_e&&!!x.transmissionMap,j=_e&&!!x.thicknessMap,ve=!!x.gradientMap,pe=!!x.alphaMap,ge=x.alphaTest>0,Fe=!!x.alphaHash,nt=!!x.extensions,re=ii;x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(re=n.toneMapping);let Pe=tt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,We={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:$,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:Et,batchingColor:Et&&L._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&L.instanceColor!==null,instancingMorph:Xe&&L.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:at,envMap:ht,envMapMode:ht&&k.mapping,envMapPMREM:tt,envMapMaxLod:tt?Pe.length-1:null,envMapSize:tt?Pe[0].width:null,aoMap:Nt,lightMap:It,bumpMap:Vt,normalMap:X,displacementMap:oe,emissiveMap:me,normalMapObjectSpace:X&&x.normalMapType===gg,normalMapTangentSpace:X&&x.normalMapType===yl,packedNormalMap:X&&x.normalMapType===yl&&ZD(x.normalMap.format),metalnessMap:de,roughnessMap:he,anisotropy:ke,anisotropyMap:Re,clearcoat:N,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:He,diffuseRoughnessMap:Q,dispersion:je,retroreflection:Ie,iridescence:ce,iridescenceMap:Y,iridescenceThicknessMap:ae,sheen:qe,sheenColorMap:le,sheenRoughnessMap:J,specularMap:K,specularColorMap:fe,specularIntensityMap:U,transmission:_e,transmissionMap:ee,thicknessMap:j,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ge,alphaHash:Fe,combine:x.combine,mapUv:Ve&&d(x.map.channel),aoMapUv:Nt&&d(x.aoMap.channel),lightMapUv:It&&d(x.lightMap.channel),bumpMapUv:Vt&&d(x.bumpMap.channel),normalMapUv:X&&d(x.normalMap.channel),displacementMapUv:oe&&d(x.displacementMap.channel),emissiveMapUv:me&&d(x.emissiveMap.channel),metalnessMapUv:de&&d(x.metalnessMap.channel),roughnessMapUv:he&&d(x.roughnessMap.channel),anisotropyMapUv:Re&&d(x.anisotropyMap.channel),clearcoatMapUv:C&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Q&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:Y&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(x.sheenRoughnessMap.channel),specularMapUv:K&&d(x.specularMap.channel),specularColorMapUv:fe&&d(x.specularColorMap.channel),specularIntensityMapUv:U&&d(x.specularIntensityMap.channel),transmissionMapUv:ee&&d(x.transmissionMap.channel),thicknessMapUv:j&&d(x.thicknessMap.channel),alphaMapUv:pe&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(X||ke),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ve||pe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&X===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:D.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:me&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function _(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(w,x),m(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let w=f[x.type],P;if(w){let R=si[w];P=Ig.clone(R.uniforms)}else P=x.uniforms;return P}function A(x,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new XD(n,w,x,r),l.push(P),h.set(w,P)),P}function M(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){a.remove(x)}function b(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:A,releaseProgram:M,releaseShaderCache:y,programs:l,dispose:b}}function JD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function KD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Kg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jg(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,_,p,m){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=m),e++,v}function c(f,d,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);let A=a(f,d,g,_,p,m);g.transmission>0?i.push(A):g.transparent===!0?r.push(A):t.push(A)}function l(f,d,g,_,p,m){let v=a(f,d,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||KD),i.length>1&&i.sort(d||Kg),r.length>1&&r.sort(d||Kg)}function u(){for(let f=e,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:u,sort:h}}function jD(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new jg,n.set(i,[o])):r>=s.length?(o=new jg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QD(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new Je};break;case"SpotLight":t={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function eN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function nN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iN(n){let e=new QD,t=eN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let r=new V,s=new _t,o=new _t;function a(l){let h=0,u=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,v=0,A=0,M=0,y=0,b=0,x=0,w=0,P=0,R=0;l.sort(nN);for(let D=0,z=l.length;D<z;D++){let I=l[D],q=I.color,F=I.intensity,k=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===nr?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*F,u+=q.g*F,f+=q.b*F;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],F);R++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[g]=ie,i.sunShadowMap[g]=te;let be=ne.getViewportCount();for(let Ce=0;Ce<be;Ce++)i.sunShadowMatrix[_+Ce]=ne.getMatrix(Ce),i.sunShadowCascade[_+Ce]=ne._cascadeData[Ce];_+=be,g++}i.sun[d]=H,d++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=H,p++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(q).multiplyScalar(F),H.distance=k,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[v]=H;let ne=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,ne.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[v]=ne.matrix,I.castShadow){let ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=te,x++}v++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(q).multiplyScalar(F),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=H,A++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let ne=I.shadow,ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(F),H.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[M]=H,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==A||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==w||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=p,i.spot.length=v,i.rectArea.length=A,i.point.length=m,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=A,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=w,L.numLightProbes=R,i.version=tN++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let v=0,A=l.length;v<A;v++){let M=l[v];if(M.isSunLight){let y=i.sun[u];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(M.isSpotLight){let y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:i}}function Qg(n){let e=new iN(n),t=[],i=[],r=[];function s(u){h.camera=u,t.length=0,i.length=0,r.length=0}function o(u){u.isLightProbeGrid?r.push(u):t.push(u)}function a(u){i.push(u)}function c(){e.setup(t),r.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function rN(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Qg(n),e.set(r,[a])):s>=o.length?(a=new Qg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function lN(n,e,t){let i=new ti,r=new Ge,s=new Ge,o=new gt,a=new yc,c=new Sc,l={},h=t.maxTextureSize,u={[tr]:dn,[dn]:tr,[Pn]:Pn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:sN,fragmentShader:oN}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ei;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Cn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let m=this.type;this.render=function(b,x,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Ym&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let P=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ar),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=b.length;I<q;I++){let F=b[I],k=F.shadow;if(k===void 0){Ye("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let te=k.getFrameExtents();r.multiply(te),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,k.mapSize.y=s.y));let H=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=H,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ys){if(F.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Tn(r.x,r.y,{format:nr,type:Xn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new Ei(r.x,r.y,Wn),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=bi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt}else F.isPointLight?(k.map=new Ho(r.x),k.map.depthTexture=new Eo(r.x,Hn)):(k.map=new Tn(r.x,r.y),k.map.depthTexture=new Ei(r.x,r.y,Hn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=bi,this.type===No?(k.map.depthTexture.compareFunction=H?Gu:Vu,k.map.depthTexture.minFilter=fn,k.map.depthTexture.magFilter=fn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Zt,k.map.depthTexture.magFilter=Zt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);let ne=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,w);let ie=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let be=0;be<ne;be++){let Ce=k.getCamera(be);if(F.isPointLight){let $=k.camera,se=k.matrix,xe=F.distance||$.far;xe!==$.far&&($.far=xe,$.updateProjectionMatrix()),Vo.setFromMatrixPosition(F.matrixWorld),$.position.copy(Vo),rf.copy($.position),rf.add(aN[be]),$.up.copy(cN[be]),$.lookAt(rf),$.updateMatrixWorld(),se.makeTranslation(-Vo.x,-Vo.y,-Vo.z),e0.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),k._frustum.setFromProjectionMatrix(e0,$.coordinateSystem,$.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,be),n.clear();else{be===0&&(n.setRenderTarget(k.map),n.clear());let $=k.getViewport(be);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),D.viewport(o)}i=k.getFrustum(be),M(x,w,Ce,F,ie,this.type)}k.isPointLightShadow!==!0&&this.type===ys&&v(k,w),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(P,R,L)};function v(b,x){let w=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(r.x,r.y,{format:nr,type:Xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(x,null,w,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(x,null,w,d,_,null)}function A(b,x,w,P){let R=null,L=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=w.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=R.uuid,z=x.uuid,I=l[D];I===void 0&&(I={},l[D]=I);let q=I[z];q===void 0&&(q=R.clone(),I[z]=q,x.addEventListener("dispose",y)),R=q}if(R.visible=x.visible,R.wireframe=x.wireframe,P===ys?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=n.properties.get(R);D.light=w}return R}function M(b,x,w,P,R,L){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===ys)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let I=e.update(b),q=b.material;if(Array.isArray(q)){let F=I.groups;for(let k=0,te=F.length;k<te;k++){let H=F[k],ne=q[H.materialIndex];if(ne&&ne.visible){let ie=A(b,ne,P,L);b.onBeforeShadow(n,b,x,w,I,ie,H),n.renderBufferDirect(w,null,I,ie,b,H),b.onAfterShadow(n,b,x,w,I,ie,H)}}}else if(q.visible){let F=A(b,q,P,L);b.onBeforeShadow(n,b,x,w,I,F,null),n.renderBufferDirect(w,null,I,F,b,null),b.onAfterShadow(n,b,x,w,I,F,null)}}let z=b.children;for(let I=0,q=z.length;I<q;I++)M(z[I],x,w,P,R,L)}function y(b){b.target.removeEventListener("dispose",y);for(let w in l){let P=l[w],R=b.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function hN(n,e){function t(){let U=!1,ee=new gt,j=null,ve=new gt(0,0,0,0);return{setMask:function(pe){j!==pe&&!U&&(n.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ge,Fe,nt,re){re===!0&&(pe*=nt,ge*=nt,Fe*=nt),ee.set(pe,ge,Fe,nt),ve.equals(ee)===!1&&(n.clearColor(pe,ge,Fe,nt),ve.copy(ee))},reset:function(){U=!1,j=null,ve.set(-1,0,0,0)}}}function i(){let U=!1,ee=!1,j=null,ve=null,pe=null;return{setReversed:function(ge){if(ee!==ge){let Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ee=ge;let nt=pe;pe=null,this.setClear(nt)}},getReversed:function(){return ee},setTest:function(ge){ge?Se(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(ge){j!==ge&&!U&&(n.depthMask(ge),j=ge)},setFunc:function(ge){if(ee&&(ge=Tg[ge]),ve!==ge){switch(ge){case ic:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case oc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ge}},setLocked:function(ge){U=ge},setClear:function(ge){pe!==ge&&(pe=ge,ee&&(ge=1-ge),n.clearDepth(ge))},reset:function(){U=!1,j=null,ve=null,pe=null,ee=!1}}}function r(){let U=!1,ee=null,j=null,ve=null,pe=null,ge=null,Fe=null,nt=null,re=null;return{setTest:function(Pe){U||(Pe?Se(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(Pe){ee!==Pe&&!U&&(n.stencilMask(Pe),ee=Pe)},setFunc:function(Pe,We,ye){(j!==Pe||ve!==We||pe!==ye)&&(n.stencilFunc(Pe,We,ye),j=Pe,ve=We,pe=ye)},setOp:function(Pe,We,ye){(ge!==Pe||Fe!==We||nt!==ye)&&(n.stencilOp(Pe,We,ye),ge=Pe,Fe=We,nt=ye)},setLocked:function(Pe){U=Pe},setClear:function(Pe){re!==Pe&&(n.clearStencil(Pe),re=Pe)},reset:function(){U=!1,ee=null,j=null,ve=null,pe=null,ge=null,Fe=null,nt=null,re=null}}}let s=new t,o=new i,a=new r,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,A=null,M=null,y=null,b=null,x=null,w=new Je(0,0,0),P=0,R=!1,L=null,D=null,z=null,I=null,q=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,te=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=te>=2);let ne=null,ie={},be=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),$=new gt().fromArray(be),se=new gt().fromArray(Ce);function xe(U,ee,j,ve){let pe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(U,ge),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<j;Fe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(ee+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ge}let Be={};Be[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(n.DEPTH_TEST),o.setFunc(cs),Vt(!1),X(Su),Se(n.CULL_FACE),Nt(Ar);function Se(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Xe(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Et(U,ee){return f[U]!==ee?(n.bindFramebuffer(U,ee),f[U]=ee,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ee),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ve(U,ee){let j=g,ve=!1;if(U){j=d.get(ee),j===void 0&&(j=[],d.set(ee,j));let pe=U.textures;if(j.length!==pe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Fe=pe.length;ge<Fe;ge++)j[ge]=n.COLOR_ATTACHMENT0+ge;j.length=pe.length,ve=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ve=!0);ve&&n.drawBuffers(j)}function at(U){return _!==U?(n.useProgram(U),_=U,!0):!1}let ht={[Tr]:n.FUNC_ADD,[$m]:n.FUNC_SUBTRACT,[Jm]:n.FUNC_REVERSE_SUBTRACT};ht[Km]=n.MIN,ht[jm]=n.MAX;let tt={[Qm]:n.ZERO,[eg]:n.ONE,[tg]:n.SRC_COLOR,[Eu]:n.SRC_ALPHA,[ag]:n.SRC_ALPHA_SATURATE,[sg]:n.DST_COLOR,[ig]:n.DST_ALPHA,[ng]:n.ONE_MINUS_SRC_COLOR,[Au]:n.ONE_MINUS_SRC_ALPHA,[og]:n.ONE_MINUS_DST_COLOR,[rg]:n.ONE_MINUS_DST_ALPHA,[cg]:n.CONSTANT_COLOR,[lg]:n.ONE_MINUS_CONSTANT_COLOR,[hg]:n.CONSTANT_ALPHA,[ug]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(U,ee,j,ve,pe,ge,Fe,nt,re,Pe){if(U===Ar){p===!0&&(Xe(n.BLEND),p=!1);return}if(p===!1&&(Se(n.BLEND),p=!0),U!==Zm){if(U!==m||Pe!==R){if((v!==Tr||y!==Tr)&&(n.blendEquation(n.FUNC_ADD),v=Tr,y=Tr),Pe)switch(U){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}A=null,M=null,b=null,x=null,w.set(0,0,0),P=0,m=U,R=Pe}return}pe=pe||ee,ge=ge||j,Fe=Fe||ve,(ee!==v||pe!==y)&&(n.blendEquationSeparate(ht[ee],ht[pe]),v=ee,y=pe),(j!==A||ve!==M||ge!==b||Fe!==x)&&(n.blendFuncSeparate(tt[j],tt[ve],tt[ge],tt[Fe]),A=j,M=ve,b=ge,x=Fe),(nt.equals(w)===!1||re!==P)&&(n.blendColor(nt.r,nt.g,nt.b,re),w.copy(nt),P=re),m=U,R=!1}function It(U,ee){U.side===Pn?Xe(n.CULL_FACE):Se(n.CULL_FACE);let j=U.side===dn;ee&&(j=!j),Vt(j),U.blending===Ss&&U.transparent===!1?Nt(Ar):Nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let ve=U.stencilWrite;a.setTest(ve),ve&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function X(U){U!==Wm?(Se(n.CULL_FACE),U!==D&&(U===Su?n.cullFace(n.BACK):U===Xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),D=U}function oe(U){U!==z&&(k&&n.lineWidth(U),z=U)}function me(U,ee,j){U?(Se(n.POLYGON_OFFSET_FILL),(I!==ee||q!==j)&&(I=ee,q=j,o.getReversed()&&(ee=-ee,j=-j),n.polygonOffset(ee,j))):Xe(n.POLYGON_OFFSET_FILL)}function de(U){U?Se(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function he(U){U===void 0&&(U=n.TEXTURE0+F-1),ne!==U&&(n.activeTexture(U),ne=U)}function ke(U,ee,j){j===void 0&&(ne===null?j=n.TEXTURE0+F-1:j=ne);let ve=ie[j];ve===void 0&&(ve={type:void 0,texture:void 0},ie[j]=ve),(ve.type!==U||ve.texture!==ee)&&(ne!==j&&(n.activeTexture(j),ne=j),n.bindTexture(U,ee||Be[U]),ve.type=U,ve.texture=ee)}function N(){let U=ie[ne];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function He(){try{n.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function je(){try{n.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ie(){try{n.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ce(){try{n.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function qe(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Re(){try{n.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function C(){try{n.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function S(){try{n.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function B(){try{n.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Q(U){return u[U]!==void 0?u[U]:n.getParameter(U)}function Y(U,ee){u[U]!==ee&&(n.pixelStorei(U,ee),u[U]=ee)}function ae(U){$.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),$.copy(U))}function le(U){se.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function J(U,ee){let j=l.get(ee);j===void 0&&(j=new WeakMap,l.set(ee,j));let ve=j.get(U);ve===void 0&&(ve=n.getUniformBlockIndex(ee,U.name),n.uniformBlockBinding(ee,ve,ve),j.set(U,ve))}function K(U,ee,j){let pe=l.get(ee).get(U);c[pe]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,pe,j),c[pe]=j)}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,ie={},f={},c={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,A=null,M=null,y=null,b=null,x=null,w=new Je(0,0,0),P=0,R=!1,L=null,D=null,z=null,I=null,q=null,$.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Se,disable:Xe,bindFramebuffer:Et,drawBuffers:Ve,useProgram:at,setBlending:Nt,setMaterial:It,setFlipSided:Vt,setCullFace:X,setLineWidth:oe,setPolygonOffset:me,setScissorTest:de,activeTexture:he,bindTexture:ke,unbindTexture:N,compressedTexImage2D:He,compressedTexImage3D:je,texImage2D:S,texImage3D:B,pixelStorei:Y,getParameter:Q,updateUBOMapping:J,uniformBlockBinding:K,texStorage2D:Re,texStorage3D:C,texSubImage2D:Ie,texSubImage3D:ce,compressedTexSubImage2D:qe,compressedTexSubImage3D:_e,scissor:ae,viewport:le,reset:fe}}function uN(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,_=new FinalizationRegistry(C=>g.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return p?new OffscreenCanvas(C,S):_o("canvas")}function v(C,S,B){let Q=1,Y=Re(C);if((Y.width>B||Y.height>B)&&(Q=B/Math.max(Y.width,Y.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ae=Math.floor(Q*Y.width),le=Math.floor(Q*Y.height);f===void 0&&(f=m(ae,le));let J=S?m(ae,le):f;return J.width=ae,J.height=le,J.getContext("2d").drawImage(C,0,0,ae,le),Ye("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ae+"x"+le+")."),J}else return"data"in C&&Ye("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function A(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,S,B,Q,Y,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;Q&&(le=e.get("EXT_texture_norm16"),le||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),B===n.SHORT&&le&&(J=le.R16_SNORM_EXT)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),S===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),B===n.SHORT&&le&&(J=le.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),S===n.RGB&&(B===n.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),B===n.SHORT&&le&&(J=le.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),S===n.RGBA){let K=ae?xo:pt.getTransfer(Y);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=K===St?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),B===n.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(C,S){let B;return C?S===null||S===Hn||S===Rr?B=n.DEPTH24_STENCIL8:S===Wn?B=n.DEPTH32F_STENCIL8:S===bs&&(B=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hn||S===Rr?B=n.DEPTH_COMPONENT24:S===Wn?B=n.DEPTH_COMPONENT32F:S===bs&&(B=n.DEPTH_COMPONENT16),B}function w(C,S){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=new WeakRef(C);i.get(C).__ref=S,g.add(S),_.register(C,S,S)}function R(C){let S=i.get(C).__ref;S!==void 0&&(g.delete(S),_.unregister(S))}function L(C){z(C.target)}function D(C){I(C.target)}function z(C){C.removeEventListener("dispose",L),R(C),F(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",D),R(C),te(C)}function q(){for(let C of g){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):z(S))}g.clear(),u.clear()}function F(C){let S=i.get(C);if(S.__webglInit===void 0)return;let B=C.source,Q=d.get(B);if(Q){let Y=Q[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&k(C),Object.keys(Q).length===0&&d.delete(B)}i.remove(C)}function k(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let B=C.source,Q=d.get(B);delete Q[S.__cacheKey],o.memory.textures--}function te(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=C.depthTexture;if(B&&B.renderTarget===C&&z(B),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ae=0;ae<S.__webglFramebuffer[Y].length;ae++)n.deleteFramebuffer(S.__webglFramebuffer[Y][ae]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Q=C.textures;for(let Y=0,ae=Q.length;Y<ae;Y++){let le=i.get(Q[Y]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(Q[Y])}i.remove(C)}let H=0;function ne(){H=0}function ie(){return H}function be(C){H=C}function Ce(){let C=H;return C>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,C}function $(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function se(C,S){let B=i.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let Q=C.image;if(Q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{It(B,C,S);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function xe(C,S){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){It(B,C,S);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function Be(C,S){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){It(B,C,S);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function Se(C,S){let B=i.get(C);if(C.version>0&&B.__version!==C.version){Vt(B,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}let Xe={[hc]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},Et={[Zt]:n.NEAREST,[pg]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Oc]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Ve={[_g]:n.NEVER,[Hu]:n.ALWAYS,[vg]:n.LESS,[Vu]:n.LEQUAL,[yg]:n.EQUAL,[Gu]:n.GEQUAL,[Sg]:n.GREATER,[Mg]:n.NOTEQUAL};function at(C,S){if(S.type===Wn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Oc||S.magFilter===Uo||S.magFilter===Ai||S.minFilter===fn||S.minFilter===Oc||S.minFilter===Uo||S.minFilter===Ai)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Xe[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Xe[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Xe[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Et[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==Uo&&S.minFilter!==Ai||S.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ht(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L),P(S));let Q=S.source,Y=d.get(Q);Y===void 0&&(Y={},d.set(Q,Y));let ae=$(S);if(ae!==C.__cacheKey){Y[ae]===void 0&&(Y[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[ae].usedTimes++;let le=Y[C.__cacheKey];le!==void 0&&(Y[C.__cacheKey].usedTimes--,le.usedTimes===0&&k(S)),C.__cacheKey=ae,C.__webglTexture=Y[ae].texture}return B}function tt(C,S,B){return Math.floor(Math.floor(C/B)/S)}function Nt(C,S,B,Q){let ae=C.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,B,Q,S.data);else{ae.sort((U,ee)=>U.start-ee.start);let le=0;for(let U=1;U<ae.length;U++){let ee=ae[le],j=ae[U],ve=ee.start+ee.count,pe=tt(j.start,S.width,4),ge=tt(ee.start,S.width,4);j.start<=ve+1&&pe===ge&&tt(j.start+j.count-1,S.width,4)===pe?ee.count=Math.max(ee.count,j.start+j.count-ee.start):(++le,ae[le]=j)}ae.length=le+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let U=0,ee=ae.length;U<ee;U++){let j=ae[U],ve=Math.floor(j.start/4),pe=Math.ceil(j.count/4),ge=ve%S.width,Fe=Math.floor(ve/S.width),nt=pe,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,ge,Fe,nt,re,B,Q,S.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe)}}function It(C,S,B){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);let Y=ht(C,S),ae=S.source;t.bindTexture(Q,C.__webglTexture,n.TEXTURE0+B);let le=i.get(ae);if(ae.version!==le.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=pt.getPrimaries(pt.workingColorSpace),Pe=S.colorSpace===Ci?null:pt.getPrimaries(S.colorSpace),We=S.colorSpace===Ci||re===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let K=v(S.image,!1,r.maxTextureSize);K=_e(S,K);let fe=s.convert(S.format,S.colorSpace),U=s.convert(S.type),ee=b(S.internalFormat,fe,U,S.normalized,S.colorSpace,S.isVideoTexture);at(Q,S);let j,ve=S.mipmaps,pe=S.isVideoTexture!==!0,ge=le.__version===void 0||Y===!0,Fe=ae.dataReady,nt=w(S,K);if(S.isDepthTexture)ee=x(S.format===Ti,S.type),ge&&(pe?t.texStorage2D(n.TEXTURE_2D,1,ee,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,ee,K.width,K.height,0,fe,U,null));else if(S.isDataTexture)if(ve.length>0){pe&&ge&&t.texStorage2D(n.TEXTURE_2D,nt,ee,ve[0].width,ve[0].height);for(let re=0,Pe=ve.length;re<Pe;re++)j=ve[re],pe?Fe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,j.width,j.height,fe,U,j.data):t.texImage2D(n.TEXTURE_2D,re,ee,j.width,j.height,0,fe,U,j.data);S.generateMipmaps=!1}else pe?(ge&&t.texStorage2D(n.TEXTURE_2D,nt,ee,K.width,K.height),Fe&&Nt(S,K,fe,U)):t.texImage2D(n.TEXTURE_2D,0,ee,K.width,K.height,0,fe,U,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,ee,ve[0].width,ve[0].height,K.depth);for(let re=0,Pe=ve.length;re<Pe;re++)if(j=ve[re],S.format!==Yn)if(fe!==null)if(pe){if(Fe)if(S.layerUpdates.size>0){let We=ef(j.width,j.height,S.format,S.type);for(let ye of S.layerUpdates){let ut=j.data.subarray(ye*We/j.data.BYTES_PER_ELEMENT,(ye+1)*We/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ye,j.width,j.height,1,fe,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,K.depth,fe,j.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,ee,j.width,j.height,K.depth,0,j.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,j.width,j.height,K.depth,fe,U,j.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,ee,j.width,j.height,K.depth,0,fe,U,j.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{pe&&ge&&t.texStorage2D(n.TEXTURE_2D,nt,ee,ve[0].width,ve[0].height);for(let re=0,Pe=ve.length;re<Pe;re++)j=ve[re],S.format!==Yn?fe!==null?pe?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,j.width,j.height,fe,j.data):t.compressedTexImage2D(n.TEXTURE_2D,re,ee,j.width,j.height,0,j.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Fe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,j.width,j.height,fe,U,j.data):t.texImage2D(n.TEXTURE_2D,re,ee,j.width,j.height,0,fe,U,j.data)}else if(S.isDataArrayTexture)if(pe){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,ee,K.width,K.height,K.depth),Fe)if(S.layerUpdates.size>0){let re=ef(K.width,K.height,S.format,S.type);for(let Pe of S.layerUpdates){let We=K.data.subarray(Pe*re/K.data.BYTES_PER_ELEMENT,(Pe+1)*re/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,K.width,K.height,1,fe,U,We)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,U,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,K.width,K.height,K.depth,0,fe,U,K.data);else if(S.isData3DTexture)pe?(ge&&t.texStorage3D(n.TEXTURE_3D,nt,ee,K.width,K.height,K.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,U,K.data)):t.texImage3D(n.TEXTURE_3D,0,ee,K.width,K.height,K.depth,0,fe,U,K.data);else if(S.isFramebufferTexture){if(ge)if(pe)t.texStorage2D(n.TEXTURE_2D,nt,ee,K.width,K.height);else{let re=K.width,Pe=K.height;for(let We=0;We<nt;We++)t.texImage2D(n.TEXTURE_2D,We,ee,re,Pe,0,fe,U,null),re>>=1,Pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),K.parentNode!==re){re.appendChild(K),u.add(S),re.onpaint=Pe=>{let We=Pe.changedElements;for(let ye of u)We.includes(ye.image)&&(ye.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let We=n.RGBA,ye=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,ye,ut,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(pe&&ge){let re=Re(ve[0]);t.texStorage2D(n.TEXTURE_2D,nt,ee,re.width,re.height)}for(let re=0,Pe=ve.length;re<Pe;re++)j=ve[re],pe?Fe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe,U,j):t.texImage2D(n.TEXTURE_2D,re,ee,fe,U,j);S.generateMipmaps=!1}else if(pe){if(ge){let re=Re(K);t.texStorage2D(n.TEXTURE_2D,nt,ee,re.width,re.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,U,K)}else t.texImage2D(n.TEXTURE_2D,0,ee,fe,U,K);A(S)&&S.mipmapsAutoUpdate===!0&&M(Q),le.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Vt(C,S,B){if(S.image.length!==6)return;let Q=ht(C,S),Y=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);let ae=i.get(Y);if(Y.version!==ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);let le=pt.getPrimaries(pt.workingColorSpace),J=S.colorSpace===Ci?null:pt.getPrimaries(S.colorSpace),K=S.colorSpace===Ci||le===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let fe=S.isCompressedTexture||S.image[0].isCompressedTexture,U=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let ye=0;ye<6;ye++)!fe&&!U?ee[ye]=v(S.image[ye],!0,r.maxCubemapSize):ee[ye]=U?S.image[ye].image:S.image[ye],ee[ye]=_e(S,ee[ye]);let j=ee[0],ve=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),ge=b(S.internalFormat,ve,pe,S.normalized,S.colorSpace),Fe=S.isVideoTexture!==!0,nt=ae.__version===void 0||Q===!0,re=Y.dataReady,Pe=w(S,j);at(n.TEXTURE_CUBE_MAP,S);let We;if(S.isDepthTexture){if(ge=x(S.format===Ti,S.type),nt)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ge,j.width,j.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ge,j.width,j.height,0,ve,pe,null)}else if(fe){Fe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ge,j.width,j.height);for(let ye=0;ye<6;ye++){We=ee[ye].mipmaps;for(let ut=0;ut<We.length;ut++){let Ut=We[ut];S.format!==Yn?ve!==null?Fe?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,0,0,Ut.width,Ut.height,ve,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,ge,Ut.width,Ut.height,0,Ut.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,0,0,Ut.width,Ut.height,ve,pe,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut,ge,Ut.width,Ut.height,0,ve,pe,Ut.data)}}}else{if(We=S.mipmaps,Fe&&nt){We.length>0&&Pe++;let ye=Re(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ge,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(U){Fe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ee[ye].width,ee[ye].height,ve,pe,ee[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ge,ee[ye].width,ee[ye].height,0,ve,pe,ee[ye].data);for(let ut=0;ut<We.length;ut++){let pi=We[ut].image[ye].image;Fe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,0,0,pi.width,pi.height,ve,pe,pi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,ge,pi.width,pi.height,0,ve,pe,pi.data)}}else{Fe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ve,pe,ee[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ge,ve,pe,ee[ye]);for(let ut=0;ut<We.length;ut++){let Ut=We[ut];Fe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,0,0,ve,pe,Ut.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ut+1,ge,ve,pe,Ut.image[ye])}}}A(S)&&S.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ae.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function X(C,S,B,Q,Y,ae){let le=s.convert(B.format,B.colorSpace),J=s.convert(B.type),K=b(B.internalFormat,le,J,B.normalized,B.colorSpace),fe=i.get(S),U=i.get(B);if(U.__renderTarget=S,!fe.__hasExternalTextures){let ee=Math.max(1,S.width>>ae),j=Math.max(1,S.height>>ae);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,ae,K,ee,j,S.depth,0,le,J,null):t.texImage2D(Y,ae,K,ee,j,0,le,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ce(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,U.__webglTexture,0,Ie(S)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,U.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(C,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let Q=S.depthTexture,Y=Q&&Q.isDepthTexture?Q.type:null,ae=x(S.stencilBuffer,Y),le=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ce(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(S),ae,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(S),ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ae,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,C)}else{let Q=S.textures;for(let Y=0;Y<Q.length;Y++){let ae=Q[Y],le=s.convert(ae.format,ae.colorSpace),J=s.convert(ae.type),K=b(ae.internalFormat,le,J,ae.normalized,ae.colorSpace);ce(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(S),K,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(S),K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,S,B){let Q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(S.depthTexture);Y.__renderTarget=S;let ae=Q?S.depthTexture.image[0]:S.depthTexture.image;(!Y.__webglTexture||ae.width!==S.width||ae.height!==S.height)&&(ae.width=S.width,ae.height=S.height,S.depthTexture.needsUpdate=!0),Q?Se(S.depthTexture,0):se(S.depthTexture,0);let le=Y.__webglTexture,J=Ie(S),K=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,fe=S.depthTexture.format===Ti?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===bi)ce(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,K,le,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,fe,K,le,0);else if(S.depthTexture.format===Ti)ce(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,K,le,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,fe,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(C){let S=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){let Y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",Y)};Q.addEventListener("dispose",Y),S.__depthDisposeCallback=Y}S.__boundDepthTexture=Q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)me(S.__webglFramebuffer[Q],C,Q);else C.texture.mipmaps.length>0?me(S.__webglFramebuffer[0],C,0):me(S.__webglFramebuffer,C,0);else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=n.createRenderbuffer(),oe(S.__webglDepthbuffer[Q],C,!1);else{let Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ae)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),oe(S.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(C,S,B){let Q=i.get(C);S!==void 0&&X(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&de(C)}function ke(C){let S=C.texture,B=i.get(C),Q=i.get(S);C.addEventListener("dispose",D),P(C);let Y=C.textures,ae=C.isWebGLCubeRenderTarget===!0,le=Y.length>1;if(le||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++),ae){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let K=0;K<S.mipmaps.length;K++)B.__webglFramebuffer[J][K]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(le)for(let J=0,K=Y.length;J<K;J++){let fe=i.get(Y[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ce(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let K=Y[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let fe=s.convert(K.format,K.colorSpace),U=s.convert(K.type),ee=b(K.internalFormat,fe,U,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),j=Ie(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,ee,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),at(n.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)X(B.__webglFramebuffer[J][K],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else X(B.__webglFramebuffer[J],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);A(S)?M(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(le){for(let J=0,K=Y.length;J<K;J++){let fe=Y[J],U=i.get(fe),ee=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,U.__webglTexture),at(ee,fe),X(B.__webglFramebuffer,C,fe,n.COLOR_ATTACHMENT0+J,ee,0),A(fe)&&M(ee)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,Q.__webglTexture),at(J,S),S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)X(B.__webglFramebuffer[K],C,S,n.COLOR_ATTACHMENT0,J,K);else X(B.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,J,0);A(S)?M(J):S.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&de(C)}function N(C){let S=C.textures;for(let B=0,Q=S.length;B<Q;B++){let Y=S[B];if(A(Y)&&Y.mipmapsAutoUpdate===!0){let ae=y(C),le=i.get(Y).__webglTexture;t.bindTexture(ae,le),M(ae),t.unbindTexture()}}}let He=[];function je(C){if(C.samples>0){if(ce(C)===!1){let S=C.textures,B=C.width,Q=C.height,Y=n.COLOR_BUFFER_BIT,ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(C),J=S.length>1;if(J)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[fe]);let U=i.get(S[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,Y,n.NEAREST),c===!0&&(He.length=0,He.push(n.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&He.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,le.__webglColorRenderbuffer[fe]);let U=i.get(S[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ie(C){return Math.min(r.maxSamples,C.samples)}function ce(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function _e(C,S){let B=C.colorSpace,Q=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==go&&B!==Ci&&(pt.getTransfer(B)===St?(Q!==Yn||Y!==_n)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),S}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Ce,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=be,this.setTexture2D=se,this.setTexture2DArray=xe,this.setTexture3D=Be,this.setTextureCube=Se,this.rebindTextures=he,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ce,this.dispose=q}function fN(n,e){function t(i,r=Ci){let s,o=pt.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===zu)return n.ALPHA;if(i===qu)return n.RGB;if(i===Yn)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Ti)return n.DEPTH_STENCIL;if(i===ku)return n.RED;if(i===kc)return n.RED_INTEGER;if(i===nr)return n.RG;if(i===Vc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Fo||i===Oo||i===Bo||i===zo)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hc||i===Wc||i===Xc||i===Yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zc||i===$c||i===Jc||i===Kc||i===jc||i===qo||i===Qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zc||i===$c)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kc)return s.COMPRESSED_R11_EAC;if(i===jc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qo)return s.COMPRESSED_RG11_EAC;if(i===Qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll||i===hl||i===ul||i===fl||i===dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===el)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===ml||i===gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pl)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===_l||i===ko||i===vl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function gN(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ku(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,A,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,A):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),A=v.envMap,M=v.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(mN.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(u0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xN(n,e,t,i){let r={},s={};function o(v,A){let M=A.program;i.uniformBlockBinding(v,M,r[v.id])}function a(v,A){let M=r[v.id];M===void 0&&(g(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",p));let y=A.program;i.updateUBOMapping(v,y);let b=e.render.frame;s[v.id]!==b&&(l(v),s[v.id]=b)}function c(v){let A=n.createBuffer(),M=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,M,y),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function l(v){let A=r[v.id],M=v.uniforms,y=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let b=0,x=M.length;b<x;b++){let w=M[b];if(Array.isArray(w))for(let P=0,R=w.length;P<R;P++)h(w[P],b,P,y);else h(w,b,0,y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,A,M,y){if(f(v,A,M,y)===!0){let b=v.__offset,x=v.value;if(Array.isArray(x)){let w=0;for(let P=0;P<x.length;P++){let R=x[P],L=_(R,!0);u(R,v.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,v.__data)}}function u(v,A,M){typeof v=="number"||typeof v=="boolean"?A[M]=v:v.isMatrix3?(A[M]=v.elements[0],A[M+1]=v.elements[1],A[M+2]=v.elements[2],A[M+3]=0,A[M+4]=v.elements[3],A[M+5]=v.elements[4],A[M+6]=v.elements[5],A[M+7]=0,A[M+8]=v.elements[6],A[M+9]=v.elements[7],A[M+10]=v.elements[8],A[M+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-M),M):v.toArray(A,M)}function f(v,A,M,y){let b=v.value,x=A+"_"+M;if(Array.isArray(b)){y[x]===void 0&&(y[x]=[]);let w=y[x],P=!1;for(let R=0;R<b.length;R++)d(b[R],w,R)===!0&&(P=!0);return P}return d(b,y,x)}function d(v,A,M){if(A[M]===void 0)return typeof v=="number"||typeof v=="boolean"?A[M]=v:ArrayBuffer.isView(v)?A[M]=v.slice():A[M]=v.clone(),!0;{let y=A[M];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return A[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(y.equals(v)===!1)return y.copy(v),!0}}return!1}function g(v){let A=v.uniforms,M=0,y=16;for(let x=0,w=A.length;x<w;x++){let P=Array.isArray(A[x])?A[x]:[A[x]];for(let R=0,L=P.length;R<L;R++){let D=P[R],z=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(A[x])||Array.isArray(D.value),q=M;for(let k=0,te=z.length;k<te;k++){let H=z[k],ne=_(H,I),ie=M%y,be=ie%ne.boundary,Ce=ie+be;M+=be,Ce!==0&&y-Ce<ne.storage&&(M+=y-Ce),k===0&&(q=M),M+=ne.storage}let F=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new F((M-q)/Float32Array.BYTES_PER_ELEMENT),D.__offset=q}}let b=M%y;return b>0&&(M+=y-b),v.__size=M,v.__cache={},this}function _(v,A){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(v){let A=v.target;A.removeEventListener("dispose",p),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function m(){for(let v in r)n.deleteBuffer(r[v]);r={},s={}}return{bind:o,update:a,dispose:m}}function vN(){return ri===null&&(ri=new xc(_N,16,16,nr,Xn),ri.name="DFG_LUT",ri.minFilter=fn,ri.magFilter=fn,ri.wrapS=jn,ri.wrapT=jn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var FP,OP,BP,zP,qP,kP,VP,GP,HP,WP,XP,YP,ZP,$P,JP,KP,jP,QP,eI,tI,nI,iI,rI,sI,oI,aI,cI,lI,hI,uI,fI,dI,pI,mI,gI,xI,_I,vI,yI,SI,MI,bI,wI,EI,AI,TI,CI,RI,PI,II,LI,DI,NI,UI,FI,OI,BI,zI,qI,kI,VI,GI,HI,WI,XI,YI,ZI,$I,JI,KI,jI,QI,e5,t5,n5,i5,r5,s5,o5,a5,c5,l5,h5,u5,f5,d5,p5,m5,g5,x5,_5,v5,y5,S5,M5,b5,w5,E5,A5,T5,C5,R5,P5,I5,L5,D5,N5,U5,F5,O5,B5,z5,q5,k5,V5,G5,H5,W5,X5,Y5,Z5,$5,J5,K5,j5,Q5,eL,tL,nL,iL,rL,sL,oL,aL,cL,lL,hL,uL,fL,dL,pL,ot,Ae,si,Sl,mL,n0,Ho,Ng,SL,ML,i0,r0,bL,wL,EL,bl,FL,s0,o0,a0,c0,l0,h0,Bg,zg,qg,kg,Vg,sf,of,af,nf,Es,ED,AD,Wg,PD,Ml,FD,BD,qD,VD,HD,YD,lf,hf,tN,sN,oN,aN,cN,e0,Vo,rf,dN,pN,uf,ff,mN,u0,_N,ri,wl,Xo=yr(()=>{tf();tf();FP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$P=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rI=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,aI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uI="gl_FragColor = linearToOutputTexel( gl_FragColor );",fI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_I=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,TI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,CI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,II=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DI=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FI=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OI=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$I=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e5=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x5=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_5=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R5=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B5=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:FP,alphahash_pars_fragment:OP,alphamap_fragment:BP,alphamap_pars_fragment:zP,alphatest_fragment:qP,alphatest_pars_fragment:kP,aomap_fragment:VP,aomap_pars_fragment:GP,batching_pars_vertex:HP,batching_vertex:WP,begin_vertex:XP,beginnormal_vertex:YP,bsdfs:ZP,iridescence_fragment:$P,bumpmap_pars_fragment:JP,clipping_planes_fragment:KP,clipping_planes_pars_fragment:jP,clipping_planes_pars_vertex:QP,clipping_planes_vertex:eI,color_fragment:tI,color_pars_fragment:nI,color_pars_vertex:iI,color_vertex:rI,common:sI,defaultnormal_vertex:oI,displacementmap_pars_vertex:aI,displacementmap_vertex:cI,emissivemap_fragment:lI,emissivemap_pars_fragment:hI,colorspace_fragment:uI,colorspace_pars_fragment:fI,envmap_fragment:dI,envmap_common_pars_fragment:pI,envmap_pars_fragment:mI,envmap_pars_vertex:gI,envmap_physical_pars_fragment:TI,envmap_vertex:xI,fog_vertex:_I,fog_pars_vertex:vI,fog_fragment:yI,fog_pars_fragment:SI,gradientmap_pars_fragment:MI,lightmap_pars_fragment:bI,lights_lambert_fragment:wI,lights_lambert_pars_fragment:EI,lights_pars_begin:AI,lights_toon_fragment:CI,lights_toon_pars_fragment:RI,lights_phong_fragment:PI,lights_phong_pars_fragment:II,lights_physical_fragment:LI,lights_physical_pars_fragment:DI,lights_fragment_begin:NI,lights_fragment_maps:UI,lights_fragment_end:FI,lightprobes_pars_fragment:OI,logdepthbuf_fragment:BI,logdepthbuf_pars_fragment:zI,logdepthbuf_pars_vertex:qI,logdepthbuf_vertex:kI,map_fragment:VI,map_pars_fragment:GI,map_particle_fragment:HI,map_particle_pars_fragment:WI,metalnessmap_fragment:XI,metalnessmap_pars_fragment:YI,morphinstance_vertex:ZI,morphcolor_vertex:$I,morphnormal_vertex:JI,morphtarget_pars_vertex:KI,morphtarget_vertex:jI,normal_fragment_begin:QI,normal_fragment_maps:e5,normal_pars_fragment:t5,normal_pars_vertex:n5,normal_vertex:i5,normalmap_pars_fragment:r5,clearcoat_normal_fragment_begin:s5,clearcoat_normal_fragment_maps:o5,clearcoat_pars_fragment:a5,iridescence_pars_fragment:c5,opaque_fragment:l5,packing:h5,premultiplied_alpha_fragment:u5,project_vertex:f5,dithering_fragment:d5,dithering_pars_fragment:p5,roughnessmap_fragment:m5,roughnessmap_pars_fragment:g5,shadowmap_pars_fragment:x5,shadowmap_pars_vertex:_5,shadowmap_vertex:v5,shadowmask_pars_fragment:y5,skinbase_vertex:S5,skinning_pars_vertex:M5,skinning_vertex:b5,skinnormal_vertex:w5,specularmap_fragment:E5,specularmap_pars_fragment:A5,tonemapping_fragment:T5,tonemapping_pars_fragment:C5,transmission_fragment:R5,transmission_pars_fragment:P5,uv_pars_fragment:I5,uv_pars_vertex:L5,uv_vertex:D5,worldpos_vertex:N5,background_vert:U5,background_frag:F5,backgroundCube_vert:O5,backgroundCube_frag:B5,cube_vert:z5,cube_frag:q5,depth_vert:k5,depth_frag:V5,distance_vert:G5,distance_frag:H5,equirect_vert:W5,equirect_frag:X5,linedashed_vert:Y5,linedashed_frag:Z5,meshbasic_vert:$5,meshbasic_frag:J5,meshlambert_vert:K5,meshlambert_frag:j5,meshmatcap_vert:Q5,meshmatcap_frag:eL,meshnormal_vert:tL,meshnormal_frag:nL,meshphong_vert:iL,meshphong_frag:rL,meshphysical_vert:sL,meshphysical_frag:oL,meshtoon_vert:aL,meshtoon_frag:cL,points_vert:lL,points_frag:hL,shadow_vert:uL,shadow_frag:fL,sprite_vert:dL,sprite_frag:pL},Ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},si={basic:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:on([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:on([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:on([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:on([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:on([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:on([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:on([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:on([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:on([Ae.common,Ae.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:on([Ae.lights,Ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};si.physical={uniforms:on([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};Sl={r:0,b:0,g:0},mL=new _t,n0=new Ze;n0.set(-1,0,0,0,1,0,0,0,1);Ho=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $i(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ar});s.uniforms.tEquirect.value=t;let o=new Cn(r,s),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=fn),new xs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Ng=256,SL=3,ML=20,i0=256,r0=16,bL=3,wL=new V,EL=new Je,bl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xs(1,10,null),this._boxMesh=new Cn(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=wL}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(EL));let p=new xs(i,r,h);return p.position.copy(a),p.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ng,Zu(e))}_fromTexture(e,t){e.mapping===Cr||e.mapping===Ms?this._setSize(e.image.length===0?Ng:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Ug(e,!1,!1),i=Math.log2(e)-SL;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ug(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cr||e.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Og()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=AL(),this._integrationMaterial=TL());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/r0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-bL)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(i0*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=CL());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};FL={[Tu]:"LINEAR_TONE_MAPPING",[Cu]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[Pu]:"ACES_FILMIC_TONE_MAPPING",[Lu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};s0=new xn,o0=new Ei(1,1),a0=new Eo(1),c0=new vo,l0=new mc,h0=new wo,Bg=[],zg=[],qg=new Float32Array(16),kg=new Float32Array(9),Vg=new Float32Array(4);sf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iD(t.type)}},of=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bD(t.type)}},af=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},nf=/(\w+)(\])?(\[|\.)?/g;Es=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);wD(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};ED=37297,AD=0;Wg=new Ze;PD={[Tu]:"Linear",[Cu]:"Reinhard",[Ru]:"Cineon",[Pu]:"ACESFilmic",[Lu]:"AgX",[Du]:"Neutral",[Iu]:"Custom"};Ml=new V;FD=/^[ \t]*#include +<([\w\d./]+)>/gm;BD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;qD={[No]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};VD={[Ms]:"ENVMAP_MODE_REFRACTION"};HD={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[fg]:"ENVMAP_BLENDING_MIX",[dg]:"ENVMAP_BLENDING_ADD"};YD=0,lf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hf(e),t.set(e,i)),i}},hf=class{constructor(e){this.id=YD++,this.code=e,this.usedTimes=0}};tN=0;sN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aN=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],cN=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],e0=new _t,Vo=new V,rf=new V;dN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ni({vertexShader:dN,fragmentShader:pN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends Vn{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new uf,m={},v=t.getContextAttributes(),A=null,M=null,y=[],b=[],x=new Ge,w=null,P=null,R=new un;R.viewport=new gt;let L=new un;L.viewport=new gt;let D=[R,L],z=new Dc,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=y[$];return se===void 0&&(se=new ds,y[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=y[$];return se===void 0&&(se=new ds,y[$]=se),se.getGripSpace()},this.getHand=function($){let se=y[$];return se===void 0&&(se=new ds,y[$]=se),se.getHandSpace()};function F($){let se=b.indexOf($.inputSource);if(se===-1)return;let xe=y[se];xe!==void 0&&(xe.update($.inputSource,$.frame,l||o),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",te);for(let $=0;$<y.length;$++){let se=b[$];se!==null&&(b[$]=null,y[$].disconnect(se))}I=null,q=null,p.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(A),d=null,f=null,u=null,r=null,M=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),P!==null){let $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?Ti:bi,Be=v.stencil?Rr:Hn);let Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Tn(f.textureWidth,f.textureHeight,{format:Yn,type:_n,depthTexture:new Ei(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Tn(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te($){for(let se=0;se<$.removed.length;se++){let xe=$.removed[se],Be=b.indexOf(xe);Be>=0&&(b[Be]=null,y[Be].disconnect(xe))}for(let se=0;se<$.added.length;se++){let xe=$.added[se],Be=b.indexOf(xe);if(Be===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=b.length){b.push(xe),Be=Xe;break}else if(b[Xe]===null){b[Xe]=xe,Be=Xe;break}if(Be===-1)break}let Se=y[Be];Se&&Se.connect(xe)}}function H($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,xe=$.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),z.near=L.near=R.near=se,z.far=L.far=R.far=xe,(I!==z.near||q!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,q=z.far),z.layers.mask=$.layers.mask|6,R.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Be=$.parent,Se=z.cameras;H(z,Be);for(let Xe=0;Xe<Se.length;Xe++)H(Se[Xe],Be);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),ne($,z,Be)};function ne($,se,xe){xe===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=us*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function($){return m[$]};let ie=null;function be($,se){if(h=se.getViewerPose(l||o),g=se,h!==null){let xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Be=!1;xe.length!==z.cameras.length&&(z.cameras.length=0,Be=!0);for(let Ve=0;Ve<xe.length;Ve++){let at=xe[Ve],ht=null;if(d!==null)ht=d.getViewport(at);else{let Nt=u.getViewSubImage(f,at);ht=Nt.viewport,Ve===0&&(e.setRenderTargetTextures(M,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(M))}let tt=D[Ve];tt===void 0&&(tt=new un,tt.layers.enable(Ve),tt.viewport=new gt,D[Ve]=tt),tt.matrix.fromArray(at.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(at.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ht.x,ht.y,ht.width,ht.height),Ve===0&&(z.matrix.copy(tt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Be===!0&&z.cameras.push(tt)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let Ve=u.getDepthInformation(xe[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,r.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Ve=0;Ve<xe.length;Ve++){let at=xe[Ve].camera;if(at){let ht=m[at];ht||(ht=new Ao,m[at]=ht);let tt=u.getCameraImage(at);ht.sourceTexture=tt}}}}for(let xe=0;xe<y.length;xe++){let Be=b[xe],Se=y[xe];Be!==null&&Se!==void 0&&Se.update(Be,se,l||o)}ie&&ie($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ce=new t0;Ce.setAnimationLoop(be),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}},mN=new _t,u0=new Ze;u0.set(-1,0,0,0,1,0,0,0,1);_N=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;wl=class{constructor(e={}){let{canvas:t=wg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let _=d,p=new Set([Gc,Vc,kc]),m=new Set([_n,Hn,bs,Rr,zc,qc]),v=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},y=null,b=null,x=[],w=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,D=null,z=null,I=null,q=null;this._outputColorSpace=hn;let F=0,k=0,te=null,H=-1,ne=null,ie=new gt,be=new gt,Ce=null,$=new Je(0),se=0,xe=t.width,Be=t.height,Se=1,Xe=null,Et=null,Ve=new gt(0,0,xe,Be),at=new gt(0,0,xe,Be),ht=!1,tt=new ti,Nt=new _c,It=!1,Vt=!1,X=new _t,oe=new V,me=new gt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ke(){return te===null?Se:1}let N=i;function He(T,O){return t.getContext(T,O)}let je,Ie,ce,qe,_e,Re,C,S,B,Q,Y,ae,le,J,K,fe,U,ee,j,ve,pe,ge,Fe;try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){let O="webgl2";if(N=He(O,T),N===null)throw He(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(T){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Qe("WebGLRenderer: "+T.message),T}function nt(){je=new PL(N),je.init(),pe=new fN(N,je),Ie=new vL(N,je,e,pe),ce=new hN(N,je),Ie.reversedDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),z=N.createFramebuffer(),I=N.createFramebuffer(),q=N.createFramebuffer(),qe=new DL(N),_e=new JD,Re=new uN(N,je,ce,_e,Ie,pe,qe),C=new RL(R),S=new UP(N),ge=new xL(N,S),B=new IL(N,S,qe,ge),Q=new UL(N,B,S,ge,qe),ee=new NL(N,Ie,Re),K=new yL(_e),Y=new $D(R,C,je,Ie,ge,K),ae=new gN(R,_e),le=new jD,J=new rN(je),U=new gL(R,C,ce,Q,g,c),fe=new lN(R,Q,Ie),Fe=new xN(N,qe,Ie,ce),j=new _L(N,je,qe),ve=new LL(N,je,qe),qe.programs=Y.programs,R.capabilities=Ie,R.extensions=je,R.properties=_e,R.renderLists=le,R.shadowMap=fe,R.state=ce,R.info=qe}_!==_n&&(P=new OL(_,t.width,t.height,a,r,s));let re=new ff(R,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(T){T!==void 0&&(Se=T,this.setSize(xe,Be,!1))},this.getSize=function(T){return T.set(xe,Be)},this.setSize=function(T,O,Z=!0){if(re.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=T,Be=O,t.width=Math.floor(T*Se),t.height=Math.floor(O*Se),Z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(xe*Se,Be*Se).floor()},this.setDrawingBufferSize=function(T,O,Z){xe=T,Be=O,Se=Z,t.width=Math.floor(T*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===_n){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ie)},this.getViewport=function(T){return T.copy(Ve)},this.setViewport=function(T,O,Z,G){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,O,Z,G),ce.viewport(ie.copy(Ve).multiplyScalar(ke()).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,O,Z,G){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,O,Z,G),ce.scissor(be.copy(at).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){ce.setScissorTest(ht=T)},this.setOpaqueSort=function(T){Xe=T},this.setTransparentSort=function(T){Et=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Z=!0){let G=0;if(T){let W=!1;if(te!==null){let we=te.texture.format;W=p.has(we)}if(W){let we=te.texture.type,Le=m.has(we),Me=U.getClearColor(),Te=U.getClearAlpha(),Oe=Me.r,it=Me.g,ft=Me.b;Le?(v[0]=Oe,v[1]=it,v[2]=ft,v[3]=Te,N.clearBufferuiv(N.COLOR,0,v)):(A[0]=Oe,A[1]=it,A[2]=ft,A[3]=Te,N.clearBufferiv(N.COLOR,0,A))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),U.dispose(),le.dispose(),J.dispose(),Re.dispose(),_e.dispose(),C.dispose(),Q.dispose(),B.dispose(),ge.dispose(),Fe.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",lm),re.removeEventListener("sessionend",hm),xr.stop()};function Pe(T){T.preventDefault(),Xu("WebGLRenderer: Context Lost."),L=!0}function We(){Xu("WebGLRenderer: Context Restored."),L=!1;let T=qe.autoReset,O=fe.enabled,Z=fe.autoUpdate,G=fe.needsUpdate,W=fe.type;nt(),qe.autoReset=T,fe.enabled=O,fe.autoUpdate=Z,fe.needsUpdate=G,fe.type=W}function ye(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){let O=T.target;O.removeEventListener("dispose",ut),Ut(O)}function Ut(T){pi(T),_e.remove(T)}function pi(T){let O=_e.get(T).programs;O!==void 0&&(O.forEach(function(Z){Y.releaseProgram(Z)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Z,G,W,we){O===null&&(O=de);let Le=W.isMesh&&W.matrixWorld.determinantAffine()<0,Me=PR(T,O,Z,G,W);ce.setMaterial(G,Le);let Te=Z.index,Oe=1;if(G.wireframe===!0){if(Te=B.getWireframeAttribute(Z),Te===void 0)return;Oe=2}let it=Z.drawRange,ft=Z.attributes.position,De=it.start*Oe,dt=(it.start+it.count)*Oe;we!==null&&(De=Math.max(De,we.start*Oe),dt=Math.min(dt,(we.start+we.count)*Oe)),Te!==null?(De=Math.max(De,0),dt=Math.min(dt,Te.count)):ft!=null&&(De=Math.max(De,0),dt=Math.min(dt,ft.count));let Ot=dt-De;if(Ot<0||Ot===1/0)return;ge.setup(W,G,Me,Z,Te);let Ct,At=j;if(Te!==null&&(Ct=S.get(Te),At=ve,At.setIndex(Ct)),W.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*ke()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if(W.isLine){let tn=G.linewidth;tn===void 0&&(tn=1),ce.setLineWidth(tn*ke()),W.isLineSegments?At.setMode(N.LINES):W.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else W.isPoints?At.setMode(N.POINTS):W.isSprite&&At.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(je.get("WEBGL_multi_draw"))At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let tn=W._multiDrawStarts,Ne=W._multiDrawCounts,ln=W._multiDrawCount,xt=Te?S.get(Te).bytesPerElement:1,_r=_e.get(G).currentProgram.getUniforms();for(let nn=0;nn<ln;nn++)_r.setValue(N,"_gl_DrawID",nn),At.render(tn[nn]/xt,Ne[nn])}else if(W.isInstancedMesh)At.renderInstances(De,Ot,W.count);else if(Z.isInstancedBufferGeometry){let tn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ne=Math.min(Z.instanceCount,tn);At.renderInstances(De,Ot,Ne)}else At.render(De,Ot)};function cm(T,O,Z,G){D!==null&&T.isNodeMaterial&&D.setObject(G,T),It===!0&&K.setState(T,Z,!1),T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,oo(T,O,G),T.side=tr,T.needsUpdate=!0,oo(T,O,G),T.side=Pn):oo(T,O,G)}this.compile=function(T,O,Z=null){Z===null&&(Z=T),D!==null&&D.renderStart(T,O,Z),b=J.get(Z),b.init(O),w.push(b),Z.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Vt=this.localClippingEnabled,It=K.init(this.clippingPlanes,Vt),It===!0&&K.setGlobalState(this.clippingPlanes,O),D!==null&&fe.render(b.state.shadowsArray,Z,O);let G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){let Me=we[Le];cm(Me,Z,O,W),G.add(Me)}else cm(we,Z,O,W),G.add(we)}),b=w.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(T,O,Z=null){let G=this.compile(T,O,Z);return new Promise(W=>{function we(){if(G.forEach(function(Le){let Te=_e.get(Le).currentProgram;(Te===void 0||Te.isReady())&&G.delete(Le)}),G.size===0){W(T);return}setTimeout(we,10)}je.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Wh=null;function CR(T){Wh&&Wh(T)}function lm(){xr.stop()}function hm(){xr.start()}let xr=new t0;xr.setAnimationLoop(CR),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(T){Wh=T,re.setAnimationLoop(T),T===null?xr.stop():xr.start()},re.addEventListener("sessionstart",lm),re.addEventListener("sessionend",hm),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,O);let Z=re.enabled===!0&&re.isPresenting===!0,G=P!==null&&(te===null||Z)&&P.begin(R,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,te),b=J.get(T,w.length),b.init(O),b.state.textureUnits=Re.getTextureUnits(),w.push(b),X.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Nt.setFromArrayCamera(O):tt.setFromProjectionMatrix(X,On,O.reversedDepth),Vt=this.localClippingEnabled,It=K.init(this.clippingPlanes,Vt),y=le.get(T,x.length),y.init(),x.push(y),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&Xh(Le,O,-1/0,R.sortObjects)}Xh(T,O,0,R.sortObjects),y.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&y.sort(Xe,Et),he=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,he&&U.addToRenderList(y,T),this.info.autoReset===!0&&this.info.reset(),It===!0&&K.beginShadows();let W=b.state.shadowsArray;if(fe.render(W,T,O),It===!0&&K.endShadows(),(G&&P.hasRenderPass())===!1){let Le=y.opaque,Me=y.transmissive;if(b.setupLights(),O.isArrayCamera){let Te=O.cameras;if(Me.length>0)for(let Oe=0,it=Te.length;Oe<it;Oe++){let ft=Te[Oe];fm(Le,Me,T,ft)}he&&U.render(T);for(let Oe=0,it=Te.length;Oe<it;Oe++){let ft=Te[Oe];um(y,T,ft,ft.viewport)}}else Me.length>0&&fm(Le,Me,T,O),he&&U.render(T),um(y,T,O)}te!==null&&k===0&&(Re.updateMultisampleRenderTarget(te),Re.updateRenderTargetMipmap(te)),G&&P.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),ge.resetDefaultState(),H=-1,ne=null,w.pop(),w.length>0?(b=w[w.length-1],Re.setTextureUnits(b.state.textureUnits),It===!0&&K.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?y=x[x.length-1]:y=null,D!==null&&D.renderEnd()};function Xh(T,O,Z,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){let Le=O.isArrayCamera?Nt:tt;if(!T.frustumCulled||T.intersectsFrustum(Le)){G&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);let Me=Q.update(T),Te=T.material;Te.visible&&y.push(T,Me,Te,Z,me.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){let Le=O.isArrayCamera?Nt:tt;if(!T.frustumCulled||T.intersectsFrustum(Le)){let Me=Q.update(T),Te=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),me.copy(Me.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(X)),Array.isArray(Te)){let Oe=Me.groups;for(let it=0,ft=Oe.length;it<ft;it++){let De=Oe[it],dt=Te[De.materialIndex];dt&&dt.visible&&y.push(T,Me,dt,Z,me.z,De,O)}}else Te.visible&&y.push(T,Me,Te,Z,me.z,null,O)}}}let we=T.children;for(let Le=0,Me=we.length;Le<Me;Le++)Xh(we[Le],O,Z,G)}function um(T,O,Z,G){let{opaque:W,transmissive:we,transparent:Le}=T;b.setupLightsView(Z),It===!0&&K.setGlobalState(R.clippingPlanes,Z),G&&ce.viewport(ie.copy(G)),W.length>0&&Da(W,O,Z),we.length>0&&Da(we,O,Z),Le.length>0&&Da(Le,O,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function fm(T,O,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let De=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Tn(1,1,{generateMipmaps:!0,type:De?Xn:_n,minFilter:Ai,samples:Math.max(4,Ie.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let we=b.state.transmissionRenderTarget[G.id],Le=G.viewport||ie;we.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Te=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor($),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),he&&U.render(Z);let it=R.toneMapping;R.toneMapping=ii;let ft=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),It===!0&&K.setGlobalState(R.clippingPlanes,G),Da(T,Z,G),Re.updateMultisampleRenderTarget(we),Re.updateRenderTargetMipmap(we),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,Ot=O.length;dt<Ot;dt++){let Ct=O[dt],{object:At,geometry:tn,material:Ne,group:ln}=Ct;if(Ne.side===Pn&&At.layers.test(G.layers)){let xt=Ne.side;Ne.side=dn,Ne.needsUpdate=!0,dm(At,Z,G,tn,Ne,ln),Ne.side=xt,Ne.needsUpdate=!0,De=!0}}De===!0&&(Re.updateMultisampleRenderTarget(we),Re.updateRenderTargetMipmap(we))}R.setRenderTarget(Me,Te,Oe),R.setClearColor($,se),ft!==void 0&&(G.viewport=ft),R.toneMapping=it}function Da(T,O,Z){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,we=T.length;W<we;W++){let Le=T[W],{object:Me,geometry:Te,group:Oe}=Le,it=Le.material;it.allowOverride===!0&&G!==null&&(it=G),Me.layers.test(Z.layers)&&dm(Me,O,Z,Te,it,Oe)}}function dm(T,O,Z,G,W,we){D!==null&&W.isNodeMaterial&&D.setObject(T,W),T.onBeforeRender(R,O,Z,G,W,we),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,O,Z,G,T,we),W.transparent===!0&&W.side===Pn&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,R.renderBufferDirect(Z,O,G,W,T,we),W.side=tr,W.needsUpdate=!0,R.renderBufferDirect(Z,O,G,W,T,we),W.side=Pn):R.renderBufferDirect(Z,O,G,W,T,we),T.onAfterRender(R,O,Z,G,W,we)}function pm(T){let O=0;for(let Z of T)Z.texture!==null&&O++;return O}function oo(T,O,Z){O.isScene!==!0&&(O=de);let G=_e.get(T),W=b.state.lights,we=b.state.shadowsArray,Le=W.state.version,Me=Y.getParameters(T,W.state,we,O,Z,b.state.lightProbeGridArray),Te=Y.getProgramCacheKey(Me),Oe=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=C.get(T.envMap||G.environment,it),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",ut),Oe=new Map,G.programs=Oe,G.programVariants=new Map);let ft=Oe.get(Te);if(ft!==void 0){if(G.currentProgram===ft&&G.lightsStateVersion===Le)return gm(T,Me),ft}else Me.uniforms=Y.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Z,Me),T.onBeforeCompile(Me,R),ft=Y.acquireProgram(Me,Te),Oe.set(Te,ft),G.uniforms=Me.uniforms;let De=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=K.uniform),gm(T,Me),G.needsLights=LR(T),G.lightsStateVersion=Le,G.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.sunLights.value=W.state.sun,De.sunLightShadows.value=W.state.sunShadow,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.sunShadowMatrix.value=W.state.sunShadowMatrix,De.sunShadowCascade.value=W.state.sunShadowCascade,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=pm(b.state.lightProbeGridArray),G.currentProgram=ft,G.uniformsList=null,ft}function RR(T,O,Z,G,W){let we=_e.get(T),Le=we.currentProgram.id+","+G+","+W,Me=we.programVariants.get(Le);return Me===void 0?(Me=oo(T,O,Z),we.programVariants.set(Le,Me)):(we.currentProgram=Me,we.uniformsList=null,we.outputColorSpace=G,we.toneMapping=W),Me}function mm(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Es.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function gm(T,O){let Z=_e.get(T);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function PR(T,O,Z,G,W){O.isScene!==!0&&(O=de),Re.resetTextureUnits();let we=O.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Me=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:pt.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Oe=C.get(G.envMap||Le,Te),it=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ft=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Ot=!!Z.morphAttributes.color,Ct=ii;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ct=R.toneMapping);let At=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,tn=At!==void 0?At.length:0,Ne=_e.get(G),ln=b.state.lights;if(It===!0&&(Vt===!0||T!==ne)){let Lt=T===ne&&G.id===H;K.setState(G,T,Lt)}let xt=!1,_r=!1;G.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==ln.state.version||W.isBatchedMesh&&Ne.batching===!1||!W.isBatchedMesh&&Ne.batching===!0||W.isBatchedMesh&&Ne.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ne.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||W.isInstancedMesh&&Ne.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ne.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ne.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ne.instancingMorph===!1&&W.morphTexture!==null||Ne.envMap!==Oe||G.fog===!0&&Ne.fog!==we||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==K.numPlanes||Ne.numIntersection!==K.numIntersection)||Ne.vertexAlphas!==it||Ne.vertexTangents!==ft||Ne.morphTargets!==De||Ne.morphNormals!==dt||Ne.morphColors!==Ot||Ne.morphTargetsCount!==tn||Ne.numLightProbeGrids!==pm(b.state.lightProbeGridArray)?xt=!0:(Ne.outputColorSpace!==Me||Ne.toneMapping!==Ct)&&(_r=!0):(xt=!0,Ne.__version=G.version);let nn=Ne.currentProgram;(xt===!0||_r===!0)&&(nn=_r===!0?RR(G,O,W,Me,Ct):oo(G,O,W),D&&G.isNodeMaterial&&D.onUpdateProgram(G,nn,Ne));let Na=!1,ki=!1,vr=!1,mt=nn.getUniforms(),Kt=Ne.uniforms;if(ce.useProgram(nn.program)&&(Na=!0,ki=!0,vr=!0),G.id!==H&&(H=G.id,ki=!0),Na||ne!==T){ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),mt.setValue(N,"projectionMatrix",T.projectionMatrix),mt.setValue(N,"viewMatrix",T.matrixWorldInverse);let Xt=mt.map.cameraPosition;Xt!==void 0&&Xt.setValue(N,oe.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,ki=!0,vr=!0)}if(Ne.needsLights&&(ln.state.sunShadowMap.length>0&&mt.setValue(N,"sunShadowMap",ln.state.sunShadowMap,Re),ln.state.directionalShadowMap.length>0&&mt.setValue(N,"directionalShadowMap",ln.state.directionalShadowMap,Re),ln.state.spotShadowMap.length>0&&mt.setValue(N,"spotShadowMap",ln.state.spotShadowMap,Re),ln.state.pointShadowMap.length>0&&mt.setValue(N,"pointShadowMap",ln.state.pointShadowMap,Re)),W.isSkinnedMesh){mt.setOptional(N,W,"bindMatrix"),mt.setOptional(N,W,"bindMatrixInverse");let Lt=W.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(N,"boneTexture",Lt.boneTexture,Re))}W.isBatchedMesh&&(mt.setOptional(N,W,"batchingTexture"),mt.setValue(N,"batchingTexture",W._matricesTexture,Re),mt.setOptional(N,W,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",W._indirectTexture,Re),mt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",W._colorsTexture,Re));let Bn=Z.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ee.update(W,Z,nn),(ki||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,mt.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Kt.envMapIntensity.value=O.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=vN()),ki){if(mt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ne.needsLights&&IR(Kt,vr),we&&G.fog===!0&&ae.refreshFogUniforms(Kt,we),ae.refreshMaterialUniforms(Kt,G,Se,Be,b.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Lt=M,Xt=0;for(let mi of b.state.lightProbeGridArray)mi.texture!==null&&(Lt.textures[Xt]=mi.texture,Lt.min[Xt]=mi.boundingBox.min,Lt.max[Xt]=mi.boundingBox.max,Lt.resolution[Xt]=mi.resolution,Xt++);for(let mi in Lt)Lt[mi].length=Xt;Kt.probesSH.value=Lt.textures,Kt.probesMin.value=Lt.min,Kt.probesMax.value=Lt.max,Kt.probesResolution.value=Lt.resolution}Es.upload(N,mm(Ne),Kt,Re)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Es.upload(N,mm(Ne),Kt,Re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(N,"center",W.center),mt.setValue(N,"modelViewMatrix",W.modelViewMatrix),mt.setValue(N,"normalMatrix",W.normalMatrix),mt.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Lt=G.uniformsGroups;for(let Xt=0,mi=Lt.length;Xt<mi;Xt++){let _m=Lt[Xt];Fe.update(_m,nn),Fe.bind(_m,nn)}}return nn}function IR(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function LR(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,O,Z){let G=_e.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_e.get(T.texture).__webglTexture=O,_e.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Z=_e.get(T);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Z=0){te=T,F=O,k=Z;let G=null,W=!1,we=!1;if(T){let Me=_e.get(T);if(Me.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(N.FRAMEBUFFER,Me.__webglFramebuffer),ie.copy(T.viewport),be.copy(T.scissor),Ce=T.scissorTest,ce.viewport(ie),ce.scissor(be),ce.setScissorTest(Ce),H=-1;return}else if(Me.__webglFramebuffer===void 0)Re.setupRenderTarget(T);else if(Me.__hasExternalTextures)Re.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let it=T.depthTexture;if(Me.__boundDepthTexture!==it){if(it!==null&&_e.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(T)}}let Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(we=!0);let Oe=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?G=Oe[O][Z]:G=Oe[O],W=!0):T.samples>0&&Re.useMultisampledRTT(T)===!1?G=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[Z]:G=Oe,ie.copy(T.viewport),be.copy(T.scissor),Ce=T.scissorTest}else ie.copy(Ve).multiplyScalar(Se).floor(),be.copy(at).multiplyScalar(Se).floor(),Ce=ht;if(Z!==0&&(G=z),ce.bindFramebuffer(N.FRAMEBUFFER,G)&&ce.drawBuffers(T,G),ce.viewport(ie),ce.scissor(be),ce.setScissorTest(Ce),W){let Me=_e.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,Z)}else if(we){let Me=O;for(let Te=0;Te<T.textures.length;Te++){let Oe=_e.get(T.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Oe.__webglTexture,Z,Me)}}else if(T!==null&&Z!==0){let Me=_e.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me.__webglTexture,Z)}H=-1};function xm(T){let O=_e.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=Ie.textureFormatReadable(T.format),O.__typeReadable=Ie.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,Z,G,W,we,Le,Me=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le],Array.isArray(Te)&&(Te=Te[0])),Te){ce.bindFramebuffer(N.FRAMEBUFFER,Te);try{let Oe=T.textures[Me],it=Oe.format,ft=Oe.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me);let De=xm(Oe);if(De.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&Z>=0&&Z<=T.height-W&&N.readPixels(O,Z,G,W,pe.convert(it),pe.convert(ft),we)}finally{let Oe=te!==null?_e.get(te).__webglFramebuffer:null;ce.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,O,Z,G,W,we,Le,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=T.width-G&&Z>=0&&Z<=T.height-W){ce.bindFramebuffer(N.FRAMEBUFFER,Te);let Oe=T.textures[Me],it=Oe.format,ft=Oe.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me);let De=xm(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.bufferData(N.PIXEL_PACK_BUFFER,we.byteLength,N.STREAM_READ),N.readPixels(O,Z,G,W,pe.convert(it),pe.convert(ft),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ot=te!==null?_e.get(te).__webglFramebuffer:null;ce.bindFramebuffer(N.FRAMEBUFFER,Ot);let Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ag(N,Ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,dt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,we),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(dt),N.deleteSync(Ct),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Z=0){let G=Math.pow(2,-Z),W=Math.floor(T.image.width*G),we=Math.floor(T.image.height*G),Le=O!==null?O.x:0,Me=O!==null?O.y:0;Re.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Le,Me,W,we),ce.unbindTexture()},this.copyTextureToTexture=function(T,O,Z=null,G=null,W=0,we=0){let Le,Me,Te,Oe,it,ft,De,dt,Ot,Ct=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Z!==null)Le=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,it=Z.min.y,ft=Z.isBox3?Z.min.z:0;else{let mt=Math.pow(2,-W);Le=Math.floor(Ct.width*mt),Me=Math.floor(Ct.height*mt),T.isDataArrayTexture?Te=Ct.depth:T.isData3DTexture?Te=Math.floor(Ct.depth*mt):Te=1,Oe=0,it=0,ft=0}G!==null?(De=G.x,dt=G.y,Ot=G.z):(De=0,dt=0,Ot=0);let At=pe.convert(O.format),tn=pe.convert(O.type),Ne;O.isData3DTexture?(Re.setTexture3D(O,0),Ne=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Re.setTexture2DArray(O,0),Ne=N.TEXTURE_2D_ARRAY):(Re.setTexture2D(O,0),Ne=N.TEXTURE_2D),ce.activeTexture(N.TEXTURE0),ce.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),ce.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ce.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let ln=ce.getParameter(N.UNPACK_ROW_LENGTH),xt=ce.getParameter(N.UNPACK_IMAGE_HEIGHT),_r=ce.getParameter(N.UNPACK_SKIP_PIXELS),nn=ce.getParameter(N.UNPACK_SKIP_ROWS),Na=ce.getParameter(N.UNPACK_SKIP_IMAGES);ce.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),ce.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),ce.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),ce.pixelStorei(N.UNPACK_SKIP_ROWS,it),ce.pixelStorei(N.UNPACK_SKIP_IMAGES,ft);let ki=T.isDataArrayTexture||T.isData3DTexture,vr=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let mt=_e.get(T),Kt=_e.get(O),Bn=_e.get(mt.__renderTarget),Lt=_e.get(Kt.__renderTarget);ce.bindFramebuffer(N.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Xt=0;Xt<Te;Xt++)ki&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(T).__webglTexture,W,ft+Xt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(O).__webglTexture,we,Ot+Xt)),N.blitFramebuffer(Oe,it,Oe+Le,it+Me,De,dt,De+Le,dt+Me,N.DEPTH_BUFFER_BIT,N.NEAREST);ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||_e.has(T)){let mt=_e.get(T),Kt=_e.get(O);ce.bindFramebuffer(N.READ_FRAMEBUFFER,I),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,q);for(let Bn=0;Bn<Te;Bn++)ki?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mt.__webglTexture,W,ft+Bn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,W),vr?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,we,Ot+Bn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,we),W!==0?N.blitFramebuffer(Oe,it,Oe+Le,it+Me,De,dt,De+Le,dt+Me,N.COLOR_BUFFER_BIT,N.NEAREST):vr?N.copyTexSubImage3D(Ne,we,De,dt,Ot+Bn,Oe,it,Le,Me):N.copyTexSubImage2D(Ne,we,De,dt,Oe,it,Le,Me);ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else vr?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ne,we,De,dt,Ot,Le,Me,Te,At,tn,Ct.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,we,De,dt,Ot,Le,Me,Te,At,Ct.data):N.texSubImage3D(Ne,we,De,dt,Ot,Le,Me,Te,At,tn,Ct):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,we,De,dt,Le,Me,At,tn,Ct.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,we,De,dt,Ct.width,Ct.height,At,Ct.data):N.texSubImage2D(N.TEXTURE_2D,we,De,dt,Le,Me,At,tn,Ct);ce.pixelStorei(N.UNPACK_ROW_LENGTH,ln),ce.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),ce.pixelStorei(N.UNPACK_SKIP_PIXELS,_r),ce.pixelStorei(N.UNPACK_SKIP_ROWS,nn),ce.pixelStorei(N.UNPACK_SKIP_IMAGES,Na),we===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&N.generateMipmap(Ne),ce.unbindTexture()},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&Re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){F=0,k=0,te=null,ce.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}});function MN(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bN(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function wN(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(p0),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function EN(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=vt.DOLLY;break;case Qi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}break;case Qi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(pf)}function AN(n){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function TN(n){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(n.preventDefault(),this.dispatchEvent(pf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(p0))}function CN(n){this.enabled!==!1&&this._handleKeyDown(n)}function RN(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case er.ROTATE:if(this.enableRotate===!1){this.state=vt.NONE;break}this._handleTouchStartRotate(n),this.state=vt.TOUCH_ROTATE;break;case er.PAN:if(this.enablePan===!1){this.state=vt.NONE;break}this._handleTouchStartPan(n),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=vt.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(pf)}function PN(n){switch(this._trackPointer(n),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=vt.NONE}}function IN(n){this.enabled!==!1&&n.preventDefault()}function LN(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DN(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var f0,pf,p0,Tl,d0,SN,Wt,vn,vt,df,Cl,m0=yr(()=>{Xo();f0={type:"change"},pf={type:"start"},p0={type:"end"},Tl=new ms,d0=new En,SN=Math.cos(70*Ju.DEG2RAD),Wt=new V,vn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},df=1e-6,Cl=class extends Do{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new An,this._lastTargetPosition=new V,this._quat=new An().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _s,this._sphericalDelta=new _s,this._scale=1,this._panOffset=new V,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new V,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bN.bind(this),this._onPointerDown=MN.bind(this),this._onPointerUp=wN.bind(this),this._onContextMenu=IN.bind(this),this._onMouseWheel=TN.bind(this),this._onKeyDown=CN.bind(this),this._onTouchStart=RN.bind(this),this._onTouchMove=PN.bind(this),this._onMouseDown=EN.bind(this),this._onMouseMove=AN.bind(this),this._interceptControlDown=LN.bind(this),this._interceptControlUp=DN.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=vt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f0),this.update(),this.state=vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),r<-Math.PI?r+=vn:r>Math.PI&&(r-=vn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Wt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new V(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Tl.origin.copy(this.object.position),Tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tl.direction))<SN?this.object.lookAt(this.target):(d0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tl.intersectPlane(d0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>df||8*(1-this._lastQuaternion.dot(this.object.quaternion))>df||this._lastTargetPosition.distanceToSquared(this.target)>df?(this.dispatchEvent(f0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Wt.copy(r).sub(this.target);let s=Wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var mf,Yo,Ri,Zo,$o,Rl,g0=yr(()=>{Xo();mf=class{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}},Yo=class{constructor(){this.id=0,this.v1=new Ri,this.v2=new Ri,this.v3=new Ri,this.normalModel=new V,this.vertexNormalsModel=[new V,new V,new V],this.vertexNormalsLength=0,this.color=new Je,this.material=null,this.uvs=[new Ge,new Ge,new Ge],this.z=0,this.renderOrder=0}},Ri=class{constructor(){this.position=new V,this.positionWorld=new V,this.positionScreen=new gt,this.visible=!0}copy(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)}},Zo=class{constructor(){this.id=0,this.v1=new Ri,this.v2=new Ri,this.vertexColors=[new Je,new Je],this.material=null,this.z=0,this.renderOrder=0}},$o=class{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new Ge,this.material=null,this.renderOrder=0}},Rl=class{constructor(){let e,t,i=0,r,s,o=0,a,c,l=0,h,u,f=0,d,g,_=0,p,m=[],v=[],A={objects:[],lights:[],elements:[]},M=new V,y=new gt,b=new Gn(new V(-1,-1,-1),new V(1,1,1)),x=new Gn,w=new Array(3),P=new _t,R=new _t,L=new _t,D=new ti,z=[],I=[],q=[],F=[],k=[],te=[],H=new gt,ne=new gt,ie=new gt,be=[],Ce=[null,null,null],$=[{sign:1},{sign:-1}];function se(){let X=[],oe=[],me=[],de=null,he=new Ze;function ke(S){de=S,he.getNormalMatrix(de.matrixWorld),X.length=0,oe.length=0,me.length=0}function N(S){let B=S.position,Q=S.positionWorld,Y=S.positionScreen;Q.copy(B).applyMatrix4(p),Y.copy(Q).applyMatrix4(R);let ae=1/Y.w;Y.x*=ae,Y.y*=ae,Y.z*=ae,S.visible=Y.x>=-1&&Y.x<=1&&Y.y>=-1&&Y.y<=1&&Y.z>=-1&&Y.z<=1}function He(S,B,Q){r=Ve(),r.position.set(S,B,Q),N(r)}function je(S,B,Q){X.push(S,B,Q)}function Ie(S,B,Q){oe.push(S,B,Q)}function ce(S,B){me.push(S,B)}function qe(S,B,Q){return S.visible===!0||B.visible===!0||Q.visible===!0?!0:(w[0]=S.positionScreen,w[1]=B.positionScreen,w[2]=Q.positionScreen,b.intersectsBox(x.setFromPoints(w)))}function _e(S,B,Q){return(Q.positionScreen.x-S.positionScreen.x)*(B.positionScreen.y-S.positionScreen.y)-(Q.positionScreen.y-S.positionScreen.y)*(B.positionScreen.x-S.positionScreen.x)<0}function Re(S,B){let Q=I[S],Y=I[B];Q.positionScreen.copy(Q.position).applyMatrix4(L),Y.positionScreen.copy(Y.position).applyMatrix4(L),Vt(Q.positionScreen,Y.positionScreen)===!0&&(Q.positionScreen.multiplyScalar(1/Q.positionScreen.w),Y.positionScreen.multiplyScalar(1/Y.positionScreen.w),h=ht(),h.id=de.id,h.v1.copy(Q),h.v2.copy(Y),h.z=Math.max(Q.positionScreen.z,Y.positionScreen.z),h.renderOrder=de.renderOrder,h.material=de.material,de.material.vertexColors&&(h.vertexColors[0].fromArray(oe,S*3),h.vertexColors[1].fromArray(oe,B*3)),A.elements.push(h))}function C(S,B,Q,Y){let ae=I[S],le=I[B],J=I[Q],K=ae.positionScreen.w,fe=le.positionScreen.w,U=J.positionScreen.w,ee=K*(ae.positionScreen.z+1),j=fe*(le.positionScreen.z+1),ve=U*(J.positionScreen.z+1),pe=K*(1-ae.positionScreen.z),ge=fe*(1-le.positionScreen.z),Fe=U*(1-J.positionScreen.z);if(ee<0&&j<0&&ve<0||pe<0&&ge<0&&Fe<0)return;if(ee>=0&&j>=0&&ve>=0&&pe>=0&&ge>=0&&Fe>=0){if(qe(ae,le,J)===!1)return;if(Y.side===Pn||_e(ae,le,J)===!0){a=at(),a.id=de.id,a.v1.copy(ae),a.v2.copy(le),a.v3.copy(J),a.z=(ae.positionScreen.z+le.positionScreen.z+J.positionScreen.z)/3,a.renderOrder=de.renderOrder,M.subVectors(J.position,le.position),y.subVectors(ae.position,le.position),M.cross(y),a.normalModel.copy(M),a.normalModel.applyMatrix3(he).normalize();for(let re=0;re<3;re++){let Pe=a.vertexNormalsModel[re];Pe.fromArray(X,arguments[re]*3),Pe.applyMatrix3(he).normalize(),a.uvs[re].fromArray(me,arguments[re]*2)}a.vertexNormalsLength=3,a.material=Y,Y.vertexColors&&a.color.fromArray(oe,S*3),A.elements.push(a)}return}H.set(ae.positionScreen.x*K,ae.positionScreen.y*K,ae.positionScreen.z*K,K),ne.set(le.positionScreen.x*fe,le.positionScreen.y*fe,le.positionScreen.z*fe,fe),ie.set(J.positionScreen.x*U,J.positionScreen.y*U,J.positionScreen.z*U,U),Ce[0]=H,Ce[1]=ne,Ce[2]=ie;let nt=It(Ce);if(!(nt<3)){for(let re=0;re<nt;re++){let Pe=m[re],We=be[re];We||(We=new Ri,be[re]=We);let ye=1/Pe.w;We.positionScreen.set(Pe.x*ye,Pe.y*ye,Pe.z*ye,1),We.positionWorld.copy(ae.positionWorld),We.visible=!0}for(let re=1;re<nt-1;re++){let Pe=be[0],We=be[re],ye=be[re+1];if(Y.side===Pn||_e(Pe,We,ye)===!0){a=at(),a.id=de.id,a.v1.copy(Pe),a.v2.copy(We),a.v3.copy(ye),a.z=(Pe.positionScreen.z+We.positionScreen.z+ye.positionScreen.z)/3,a.renderOrder=de.renderOrder,M.subVectors(J.position,le.position),y.subVectors(ae.position,le.position),M.cross(y),a.normalModel.copy(M),a.normalModel.applyMatrix3(he).normalize();for(let ut=0;ut<3;ut++){let Ut=a.vertexNormalsModel[ut];Ut.fromArray(X,arguments[ut]*3),Ut.applyMatrix3(he).normalize(),a.uvs[ut].fromArray(me,arguments[ut]*2)}a.vertexNormalsLength=3,a.material=Y,Y.vertexColors&&a.color.fromArray(oe,S*3),A.elements.push(a)}}}}return{setObject:ke,projectVertex:N,checkTriangleVisibility:qe,checkBackfaceCulling:_e,pushVertex:He,pushNormal:je,pushColor:Ie,pushUv:ce,pushLine:Re,pushTriangle:C}}let xe=new se;function Be(X){if(X.visible===!1)return;if(X.isLight)A.lights.push(X);else if(X.isMesh||X.isLine||X.isPoints){if(X.material.visible===!1||X.frustumCulled===!0&&D.intersectsObject(X)===!1)return;Se(X)}else if(X.isSprite){if(X.material.visible===!1||X.frustumCulled===!0&&D.intersectsSprite(X)===!1)return;Se(X)}let oe=X.children;for(let me=0,de=oe.length;me<de;me++)Be(oe[me])}function Se(X){e=Et(),e.id=X.id,e.object=X,M.setFromMatrixPosition(X.matrixWorld),M.applyMatrix4(R),e.z=M.z,e.renderOrder=X.renderOrder,A.objects.push(e)}this.projectScene=function(X,oe,me,de){c=0,u=0,g=0,A.elements.length=0,X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),P.copy(oe.matrixWorldInverse),R.multiplyMatrices(oe.projectionMatrix,P),D.setFromProjectionMatrix(R),t=0,A.objects.length=0,A.lights.length=0,Be(X),me===!0&&A.objects.sort(Nt);let he=A.objects;for(let ke=0,N=he.length;ke<N;ke++){let He=he[ke].object,je=He.geometry;if(xe.setObject(He),p=He.matrixWorld,s=0,He.isMesh){let Ie=He.material,ce=Array.isArray(Ie),qe=je.attributes,_e=je.groups;if(qe.position===void 0)continue;let Re=qe.position.array;for(let C=0,S=Re.length;C<S;C+=3){let B=Re[C],Q=Re[C+1],Y=Re[C+2],ae=je.morphAttributes.position;if(ae!==void 0){let le=je.morphTargetsRelative,J=He.morphTargetInfluences;for(let K=0,fe=ae.length;K<fe;K++){let U=J[K];if(U===0)continue;let ee=ae[K];le?(B+=ee.getX(C/3)*U,Q+=ee.getY(C/3)*U,Y+=ee.getZ(C/3)*U):(B+=(ee.getX(C/3)-Re[C])*U,Q+=(ee.getY(C/3)-Re[C+1])*U,Y+=(ee.getZ(C/3)-Re[C+2])*U)}}xe.pushVertex(B,Q,Y)}if(qe.normal!==void 0){let C=qe.normal.array;for(let S=0,B=C.length;S<B;S+=3)xe.pushNormal(C[S],C[S+1],C[S+2])}if(qe.color!==void 0){let C=qe.color.array;for(let S=0,B=C.length;S<B;S+=3)xe.pushColor(C[S],C[S+1],C[S+2])}if(qe.uv!==void 0){let C=qe.uv.array;for(let S=0,B=C.length;S<B;S+=2)xe.pushUv(C[S],C[S+1])}if(je.index!==null){let C=je.index.array;if(_e.length>0)for(let S=0;S<_e.length;S++){let B=_e[S];if(Ie=ce===!0?He.material[B.materialIndex]:He.material,Ie!==void 0)for(let Q=B.start,Y=B.start+B.count;Q<Y;Q+=3)xe.pushTriangle(C[Q],C[Q+1],C[Q+2],Ie)}else for(let S=0,B=C.length;S<B;S+=3)xe.pushTriangle(C[S],C[S+1],C[S+2],Ie)}else if(_e.length>0)for(let C=0;C<_e.length;C++){let S=_e[C];if(Ie=ce===!0?He.material[S.materialIndex]:He.material,Ie!==void 0)for(let B=S.start,Q=S.start+S.count;B<Q;B+=3)xe.pushTriangle(B,B+1,B+2,Ie)}else for(let C=0,S=Re.length/3;C<S;C+=3)xe.pushTriangle(C,C+1,C+2,Ie)}else if(He.isLine){L.multiplyMatrices(R,p);let Ie=je.attributes;if(Ie.position!==void 0){let ce=Ie.position.array;for(let qe=0,_e=ce.length;qe<_e;qe+=3)xe.pushVertex(ce[qe],ce[qe+1],ce[qe+2]);if(Ie.color!==void 0){let qe=Ie.color.array;for(let _e=0,Re=qe.length;_e<Re;_e+=3)xe.pushColor(qe[_e],qe[_e+1],qe[_e+2])}if(je.index!==null){let qe=je.index.array;for(let _e=0,Re=qe.length;_e<Re;_e+=2)xe.pushLine(qe[_e],qe[_e+1])}else{let qe=He.isLineSegments?2:1;for(let _e=0,Re=ce.length/3-1;_e<Re;_e+=qe)xe.pushLine(_e,_e+1)}}}else if(He.isPoints){L.multiplyMatrices(R,p);let Ie=je.attributes;if(Ie.position!==void 0){let ce=Ie.position.array;for(let qe=0,_e=ce.length;qe<_e;qe+=3)y.set(ce[qe],ce[qe+1],ce[qe+2],1),y.applyMatrix4(L),Xe(y,He,oe)}}else He.isSprite&&(He.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,He.matrixWorld),y.set(p.elements[12],p.elements[13],p.elements[14],1),y.applyMatrix4(R),Xe(y,He,oe))}return de===!0&&A.elements.sort(Nt),A};function Xe(X,oe,me){let de=1/X.w;X.z*=de,X.z>=-1&&X.z<=1&&(d=tt(),d.id=oe.id,d.x=X.x*de,d.y=X.y*de,d.z=X.z,d.renderOrder=oe.renderOrder,d.object=oe,d.rotation=oe.rotation,d.scale.x=oe.scale.x*Math.abs(d.x-(X.x+me.projectionMatrix.elements[0])/(X.w+me.projectionMatrix.elements[12])),d.scale.y=oe.scale.y*Math.abs(d.y-(X.y+me.projectionMatrix.elements[5])/(X.w+me.projectionMatrix.elements[13])),d.material=oe.material,A.elements.push(d))}function Et(){if(t===i){let X=new mf;return z.push(X),i++,t++,X}return z[t++]}function Ve(){if(s===o){let X=new Ri;return I.push(X),o++,s++,X}return I[s++]}function at(){if(c===l){let X=new Yo;return q.push(X),l++,c++,X}return q[c++]}function ht(){if(u===f){let X=new Zo;return F.push(X),f++,u++,X}return F[u++]}function tt(){if(g===_){let X=new $o;return k.push(X),_++,g++,X}return k[g++]}function Nt(X,oe){return X.renderOrder!==oe.renderOrder?X.renderOrder-oe.renderOrder:X.z!==oe.z?oe.z-X.z:X.id!==oe.id?X.id-oe.id:0}function It(X){m[0]=X[0],m[1]=X[1],m[2]=X[2];let oe=3,me=0;for(let de=0;de<$.length;de++){let he=$[de];if(me=0,oe===0)break;for(let N=0;N<oe;N++){let He=m[N],je=m[(N+1)%oe],Ie=he.sign*He.z+He.w,ce=he.sign*je.z+je.w,qe=Ie>=0,_e=ce>=0;if(qe&&_e)v[me++]=He;else if(qe&&!_e){v[me++]=He;let Re=Ie/(Ie-ce),C=te[me];C||(C=new gt,te[me]=C),C.lerpVectors(He,je,Re),v[me++]=C}else if(!qe&&_e){let Re=Ie/(Ie-ce),C=te[me];C||(C=new gt,te[me]=C),C.lerpVectors(He,je,Re),v[me++]=C}}let ke=m;m=v,v=ke,oe=me}return oe}function Vt(X,oe){let me=0,de=1,he=X.z+X.w,ke=oe.z+oe.w,N=-X.z+X.w,He=-oe.z+oe.w;return he>=0&&ke>=0&&N>=0&&He>=0?!0:he<0&&ke<0||N<0&&He<0?!1:(he<0?me=Math.max(me,he/(he-ke)):ke<0&&(de=Math.min(de,he/(he-ke))),N<0?me=Math.max(me,N/(N-He)):He<0&&(de=Math.min(de,N/(N-He))),de<me?!1:(X.lerp(oe,me),oe.lerp(X,1-de),!0))}}}});var Pl,x0=yr(()=>{Xo();g0();Pl=class{constructor(){let e,t,i,r,s,o,a,c,l,h,u,f=0,d=0,g=0,_=null,p=1,m,v,A=this,M=new vs,y=new vs,b=new Je,x=new Je,w=new Je,P=new Je,R=new Je,L=new Je,D=new V,z=new V,I=new V,q=new V,F=new Ze,k=new _t,te=new _t,H=[],ne=[],ie=[],be=new Rl,Ce=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=Ce,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=hn,this.info={render:{vertices:0,faces:0}},this.setQuality=function(X){switch(X){case"high":p=1;break;case"low":p=0;break}},this.setClearColor=function(X){L.set(X)},this.setPixelRatio=function(){},this.setSize=function(X,oe){r=X,s=oe,o=r/2,a=s/2,Ce.setAttribute("viewBox",-o+" "+-a+" "+r+" "+s),Ce.setAttribute("width",r),Ce.setAttribute("height",s),M.min.set(-o,-a),M.max.set(o,a)},this.getSize=function(){return{width:r,height:s}},this.setPrecision=function(X){_=X};function $(){for(f=0;Ce.childNodes.length>0;)Ce.removeChild(Ce.childNodes[0])}function se(X){return _!==null?X.toFixed(_):X}function xe(X,oe){let me=X.data.renderOrder!==void 0?X.data.renderOrder:0,de=oe.data.renderOrder!==void 0?oe.data.renderOrder:0;if(me!==de)return me-de;{let he=X.data.z!==void 0?X.data.z:0;return(oe.data.z!==void 0?oe.data.z:0)-he}}this.clear=function(){$(),Ce.style.backgroundColor=L.getStyle(A.outputColorSpace)},this.render=function(X,oe){if(!(oe instanceof Er)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}let me=X.background;me&&me.isColor?($(),Ce.style.backgroundColor=me.getStyle(A.outputColorSpace)):this.autoClear===!0&&this.clear(),A.info.render.vertices=0,A.info.render.faces=0,k.copy(oe.matrixWorldInverse),te.multiplyMatrices(oe.projectionMatrix,k),e=be.projectScene(X,oe,this.sortObjects,this.sortElements),t=e.elements,i=e.lights,F.getNormalMatrix(oe.matrixWorldInverse),Be(i),g=0;for(let de=0,he=t.length;de<he;de++){let ke=t[de],N=ke.material;N===void 0||N.opacity===0||Vt(g++,"element",ke,N)}d=0,X.traverseVisible(function(de){if(de.isSVGObject){if(D.setFromMatrixPosition(de.matrixWorld),D.applyMatrix4(te),D.z<-1||D.z>1)return;let he=D.x*o,ke=-D.y*a,N=It(d++);N.node=de.node,N.x=he,N.y=ke,N.z=D.z,N.renderOrder=de.renderOrder,Vt(g++,"svgObject",N,null)}}),ie.length=g,this.sortElements&&d>0&&ie.sort(xe),m="",v="";for(let de=0;de<g;de++){let he=ie[de];if(he.type==="svgObject"){tt();let ke=he.data,N=ke.node;N.setAttribute("transform","translate("+ke.x+","+ke.y+")"),Ce.appendChild(N)}else{let ke=he.data,N=he.material;y.makeEmpty(),ke instanceof $o?(c=ke,c.x*=o,c.y*=-a,Xe(c,ke,N)):ke instanceof Zo?(c=ke.v1,l=ke.v2,c.positionScreen.x*=o,c.positionScreen.y*=-a,l.positionScreen.x*=o,l.positionScreen.y*=-a,y.setFromPoints([c.positionScreen,l.positionScreen]),M.intersectsBox(y)===!0&&Et(c,l,N)):ke instanceof Yo&&(c=ke.v1,l=ke.v2,h=ke.v3,c.positionScreen.x*=o,c.positionScreen.y*=-a,l.positionScreen.x*=o,l.positionScreen.y*=-a,h.positionScreen.x*=o,h.positionScreen.y*=-a,this.overdraw>0&&(at(c.positionScreen,l.positionScreen,this.overdraw),at(l.positionScreen,h.positionScreen,this.overdraw),at(h.positionScreen,c.positionScreen,this.overdraw)),y.setFromPoints([c.positionScreen,l.positionScreen,h.positionScreen]),M.intersectsBox(y)===!0&&Ve(c,l,h,ke,N))}}tt()};function Be(X){w.setRGB(0,0,0),P.setRGB(0,0,0),R.setRGB(0,0,0);for(let oe=0,me=X.length;oe<me;oe++){let de=X[oe],he=de.color;de.isAmbientLight?(w.r+=he.r,w.g+=he.g,w.b+=he.b):de.isDirectionalLight?(P.r+=he.r,P.g+=he.g,P.b+=he.b):de.isPointLight&&(R.r+=he.r,R.g+=he.g,R.b+=he.b)}}function Se(X,oe,me,de){for(let he=0,ke=X.length;he<ke;he++){let N=X[he],He=N.color;if(N.isDirectionalLight){let je=D.setFromMatrixPosition(N.matrixWorld).sub(z.setFromMatrixPosition(N.target.matrixWorld)).normalize(),Ie=me.dot(je);if(Ie<=0)continue;Ie*=N.intensity,de.r+=He.r*Ie,de.g+=He.g*Ie,de.b+=He.b*Ie}else if(N.isPointLight){let je=D.setFromMatrixPosition(N.matrixWorld),Ie=me.dot(D.subVectors(je,oe).normalize());if(Ie<=0||(Ie*=N.distance==0?1:1-Math.min(oe.distanceTo(je)/N.distance,1),Ie==0))continue;Ie*=N.intensity,de.r+=He.r*Ie,de.g+=He.g*Ie,de.b+=He.b*Ie}}}function Xe(X,oe,me){let de=oe.scale.x*o,he=oe.scale.y*a;me.isPointsMaterial&&(de*=me.size,he*=me.size);let ke="M"+se(X.x-de*.5)+","+se(X.y-he*.5)+"h"+se(de)+"v"+se(he)+"h"+se(-de)+"z",N="";(me.isSpriteMaterial||me.isPointsMaterial)&&(N="fill:"+me.color.getStyle(A.outputColorSpace)+";fill-opacity:"+me.opacity),ht(N,ke)}function Et(X,oe,me){let de="M"+se(X.positionScreen.x)+","+se(X.positionScreen.y)+"L"+se(oe.positionScreen.x)+","+se(oe.positionScreen.y);if(me.isLineBasicMaterial){let he="fill:none;stroke:"+me.color.getStyle(A.outputColorSpace)+";stroke-opacity:"+me.opacity+";stroke-width:"+me.linewidth+";stroke-linecap:"+me.linecap;me.isLineDashedMaterial&&(he=he+";stroke-dasharray:"+me.dashSize+","+me.gapSize),ht(he,de)}}function Ve(X,oe,me,de,he){A.info.render.vertices+=3,A.info.render.faces++;let ke="M"+se(X.positionScreen.x)+","+se(X.positionScreen.y)+"L"+se(oe.positionScreen.x)+","+se(oe.positionScreen.y)+"L"+se(me.positionScreen.x)+","+se(me.positionScreen.y)+"z",N="";he.isMeshBasicMaterial?(b.copy(he.color),he.vertexColors&&b.multiply(de.color)):he.isMeshLambertMaterial||he.isMeshPhongMaterial||he.isMeshStandardMaterial?(x.copy(he.color),he.vertexColors&&x.multiply(de.color),b.copy(w),I.copy(X.positionWorld).add(oe.positionWorld).add(me.positionWorld).divideScalar(3),Se(i,I,de.normalModel,b),b.multiply(x).add(he.emissive)):he.isMeshNormalMaterial&&(q.copy(de.normalModel).applyMatrix3(F).normalize(),b.setRGB(q.x,q.y,q.z).multiplyScalar(.5).addScalar(.5)),he.wireframe?N="fill:none;stroke:"+b.getStyle(A.outputColorSpace)+";stroke-opacity:"+he.opacity+";stroke-width:"+he.wireframeLinewidth+";stroke-linecap:"+he.wireframeLinecap+";stroke-linejoin:"+he.wireframeLinejoin:N="fill:"+b.getStyle(A.outputColorSpace)+";fill-opacity:"+he.opacity,ht(N,ke)}function at(X,oe,me){let de=oe.x-X.x,he=oe.y-X.y,ke=de*de+he*he;if(ke===0)return;let N=me/Math.sqrt(ke);de*=N,he*=N,oe.x+=de,oe.y+=he,X.x-=de,X.y-=he}function ht(X,oe){v===X?m+=oe:(tt(),v=X,m=oe)}function tt(){m&&(u=Nt(f++),u.setAttribute("d",m),u.setAttribute("style",v),Ce.appendChild(u)),m="",v=""}function Nt(X){let oe=H[X];return oe===void 0&&(oe=document.createElementNS("http://www.w3.org/2000/svg","path"),p==0&&oe.setAttribute("shape-rendering","crispEdges"),H[X]=oe),oe}function It(X){let oe=ne[X];return oe===void 0&&(oe={node:null,x:0,y:0,z:0,renderOrder:0},ne[X]=oe),oe}function Vt(X,oe,me,de){let he=ie[X];return he===void 0?(he={type:oe,data:me,material:de},ie[X]=he,he):(he.type=oe,he.data=me,he.material=de,he)}}}});var $e=E((EK,_0)=>{var NN=n=>n.flat(1/0);_0.exports=NN});var y0=E((AK,v0)=>{var UN=n=>Object.assign({},n);v0.exports=UN});var M0=E((TK,S0)=>{var FN=(n,e,t)=>(n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n);S0.exports=FN});var Il=E((CK,b0)=>{var ON=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];b0.exports=ON});var E0=E((RK,w0)=>{var BN=Il(),zN=n=>{let e=BN();return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e};w0.exports=zN});var gf=E((PK,A0)=>{var qN=(n,e)=>(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n);A0.exports=qN});var C0=E((IK,T0)=>{var kN=(n,e)=>{let t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*a-i*o,A=t*c-r*o,M=t*l-s*o,y=i*c-r*a,b=i*l-s*a,x=r*l-s*c,w=h*_-u*g,P=h*p-f*g,R=h*m-d*g,L=u*p-f*_,D=u*m-d*_,z=f*m-d*p,I=v*z-A*D+M*L+y*R-b*P+x*w;return I?(I=1/I,n[0]=(a*z-c*D+l*L)*I,n[1]=(r*D-i*z-s*L)*I,n[2]=(_*x-p*b+m*y)*I,n[3]=(f*b-u*x-d*y)*I,n[4]=(c*R-o*z-l*P)*I,n[5]=(t*z-r*R+s*P)*I,n[6]=(p*M-g*x-m*A)*I,n[7]=(h*x-f*M+d*A)*I,n[8]=(o*D-a*R+l*w)*I,n[9]=(i*R-t*D-s*w)*I,n[10]=(g*b-_*M+m*v)*I,n[11]=(u*M-h*b-d*v)*I,n[12]=(a*P-o*L-c*w)*I,n[13]=(t*L-i*P+r*w)*I,n[14]=(_*A-g*y-p*v)*I,n[15]=(h*y-u*A+f*v)*I,n):null};T0.exports=kN});var P0=E((LK,R0)=>{var VN=(n,e)=>n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]&&n[3]===e[3]&&n[4]===e[4]&&n[5]===e[5]&&n[6]===e[6]&&n[7]===e[7]&&n[8]===e[8]&&n[9]===e[9]&&n[10]===e[10]&&n[11]===e[11]&&n[12]===e[12]&&n[13]===e[13]&&n[14]===e[14]&&n[15]===e[15];R0.exports=VN});var ct=E((DK,I0)=>{var GN=Math.PI*2;I0.exports={EPS:1e-5,NEPS:1e-13,TAU:GN,spatialResolution:1e5}});var $t=E((NK,D0)=>{var{NEPS:HN}=ct(),L0=n=>Math.abs(n)<HN?0:n,WN=n=>L0(Math.sin(n)),XN=n=>L0(Math.cos(n));D0.exports={sin:WN,cos:XN}});var xf=E((UK,N0)=>{var YN=n=>(n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n);N0.exports=YN});var _f=E((FK,U0)=>{var{EPS:ZN}=ct(),{sin:$N,cos:JN}=$t(),KN=xf(),jN=(n,e,t)=>{let[i,r,s]=t,o=i*i+r*r+s*s;if(Math.abs(o)<ZN)return KN(n);let a=1/Math.sqrt(o);i*=a,r*=a,s*=a;let c=$N(e),l=JN(e),h=1-l;return n[0]=i*i*h+l,n[1]=r*i*h+s*c,n[2]=s*i*h-r*c,n[3]=0,n[4]=i*r*h-s*c,n[5]=r*r*h+l,n[6]=s*r*h+i*c,n[7]=0,n[8]=i*s*h+r*c,n[9]=r*s*h-i*c,n[10]=s*s*h+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n};U0.exports=jN});var O0=E((OK,F0)=>{var QN=(n,e)=>(n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n);F0.exports=QN});var z0=E((BK,B0)=>{var{sin:vf,cos:yf}=$t(),eU=(n,e,t,i)=>{let r=vf(e),s=yf(e),o=vf(t),a=yf(t),c=vf(i),l=yf(i);return n[0]=a*s,n[1]=a*r,n[2]=-o,n[3]=0,n[4]=c*o*s-l*r,n[5]=l*s+c*o*r,n[6]=c*a,n[7]=0,n[8]=c*r+l*o*s,n[9]=l*o*r-c*s,n[10]=l*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n};B0.exports=eU});var k0=E((zK,q0)=>{var tU=(n,e)=>(n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n);q0.exports=tU});var G0=E((qK,V0)=>{var nU=Il(),iU=(n,e,t,i,r,s,o,a,c,l,h,u,f,d,g,_)=>{let p=nU();return p[0]=n,p[1]=e,p[2]=t,p[3]=i,p[4]=r,p[5]=s,p[6]=o,p[7]=a,p[8]=c,p[9]=l,p[10]=h,p[11]=u,p[12]=f,p[13]=d,p[14]=g,p[15]=_,p};V0.exports=iU});var Sf=E((kK,H0)=>{var rU=(n,e)=>(n[0]=Math.abs(e[0]),n[1]=Math.abs(e[1]),n[2]=Math.abs(e[2]),n);H0.exports=rU});var Mf=E((VK,W0)=>{var sU=(n,e,t)=>(n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n);W0.exports=sU});var Jo=E((GK,X0)=>{var oU=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];X0.exports=oU});var Z0=E((HK,Y0)=>{var aU=Jo(),cU=(n,e)=>{let t=n[0],i=n[1],r=n[2],s=e[0],o=e[1],a=e[2],c=Math.sqrt(t*t+i*i+r*r),l=Math.sqrt(s*s+o*o+a*a),h=c*l,u=h&&aU(n,e)/h;return Math.acos(Math.min(Math.max(u,-1),1))};Y0.exports=cU});var Ko=E((WK,$0)=>{var lU=()=>[0,0,0];$0.exports=lU});var K0=E((XK,J0)=>{var hU=Ko(),uU=n=>{let e=hU();return e[0]=n[0],e[1]=n[1],e[2]=n[2],e};J0.exports=uU});var bf=E((YK,j0)=>{var fU=(n,e)=>(n[0]=e[0],n[1]=e[1],n[2]=e[2],n);j0.exports=fU});var Ts=E((ZK,Q0)=>{var dU=(n,e,t)=>{let i=e[0],r=e[1],s=e[2],o=t[0],a=t[1],c=t[2];return n[0]=r*c-s*a,n[1]=s*o-i*c,n[2]=i*a-r*o,n};Q0.exports=dU});var wf=E(($K,ex)=>{var pU=(n,e)=>{let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return Math.sqrt(t*t+i*i+r*r)};ex.exports=pU});var nx=E((JK,tx)=>{var mU=(n,e,t)=>(n[0]=e[0]/t[0],n[1]=e[1]/t[1],n[2]=e[2]/t[2],n);tx.exports=mU});var rx=E((KK,ix)=>{var gU=(n,e)=>n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2];ix.exports=gU});var ox=E((jK,sx)=>{var xU=(n,e)=>(n[0]=e,n[1]=e,n[2]=e,n);sx.exports=xU});var cx=E((QK,ax)=>{var _U=Ko(),vU=(n,e,t)=>{let i=_U();return i[0]=n,i[1]=e,i[2]=t,i};ax.exports=vU});var hx=E((ej,lx)=>{var yU=(n,e,t=0)=>(n[0]=e[0],n[1]=e[1],n[2]=t,n);lx.exports=yU});var Ef=E((tj,ux)=>{var SU=n=>{let e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)};ux.exports=SU});var dx=E((nj,fx)=>{var MU=(n,e,t,i)=>(n[0]=e[0]+i*(t[0]-e[0]),n[1]=e[1]+i*(t[1]-e[1]),n[2]=e[2]+i*(t[2]-e[2]),n);fx.exports=MU});var Af=E((ij,px)=>{var bU=(n,e,t)=>(n[0]=Math.max(e[0],t[0]),n[1]=Math.max(e[1],t[1]),n[2]=Math.max(e[2],t[2]),n);px.exports=bU});var Tf=E((rj,mx)=>{var wU=(n,e,t)=>(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n[2]=Math.min(e[2],t[2]),n);mx.exports=wU});var xx=E((sj,gx)=>{var EU=(n,e,t)=>(n[0]=e[0]*t[0],n[1]=e[1]*t[1],n[2]=e[2]*t[2],n);gx.exports=EU});var vx=E((oj,_x)=>{var AU=(n,e)=>(n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n);_x.exports=AU});var Ll=E((aj,yx)=>{var TU=(n,e)=>{let t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=t*s,n[1]=i*s,n[2]=r*s,n};yx.exports=TU});var Mx=E((cj,Sx)=>{var CU=Sf(),RU=Ko(),PU=Ts(),IU=(n,e)=>{let t=CU(RU(),e),i=0+(t[0]<t[1]&&t[0]<t[2]),r=0+(t[1]<=t[0]&&t[1]<t[2]),s=0+(t[2]<=t[0]&&t[2]<=t[1]);return PU(n,e,[i,r,s])};Sx.exports=IU});var wx=E((lj,bx)=>{var LU=(n,e,t,i)=>{let r=[],s=[];return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],s[0]=r[0],s[1]=r[1]*Math.cos(i)-r[2]*Math.sin(i),s[2]=r[1]*Math.sin(i)+r[2]*Math.cos(i),n[0]=s[0]+t[0],n[1]=s[1]+t[1],n[2]=s[2]+t[2],n};bx.exports=LU});var Ax=E((hj,Ex)=>{var DU=(n,e,t,i)=>{let r=[],s=[];return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],s[0]=r[2]*Math.sin(i)+r[0]*Math.cos(i),s[1]=r[1],s[2]=r[2]*Math.cos(i)-r[0]*Math.sin(i),n[0]=s[0]+t[0],n[1]=s[1]+t[1],n[2]=s[2]+t[2],n};Ex.exports=DU});var Cx=E((uj,Tx)=>{var NU=(n,e,t,i)=>{let r=[],s=[];return r[0]=e[0]-t[0],r[1]=e[1]-t[1],s[0]=r[0]*Math.cos(i)-r[1]*Math.sin(i),s[1]=r[0]*Math.sin(i)+r[1]*Math.cos(i),n[0]=s[0]+t[0],n[1]=s[1]+t[1],n[2]=e[2],n};Tx.exports=NU});var Cf=E((fj,Rx)=>{var UU=(n,e,t)=>(n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n);Rx.exports=UU});var Ix=E((dj,Px)=>{var FU=(n,e,t)=>(n[0]=Math.round(e[0]/t)*t+0,n[1]=Math.round(e[1]/t)*t+0,n[2]=Math.round(e[2]/t)*t+0,n);Px.exports=FU});var Rf=E((pj,Lx)=>{var OU=(n,e)=>{let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return t*t+i*i+r*r};Lx.exports=OU});var Pf=E((mj,Dx)=>{var BU=n=>{let e=n[0],t=n[1],i=n[2];return e*e+t*t+i*i};Dx.exports=BU});var jo=E((gj,Nx)=>{var zU=(n,e,t)=>(n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n);Nx.exports=zU});var Fx=E((xj,Ux)=>{var qU=n=>`[${n[0].toFixed(7)}, ${n[1].toFixed(7)}, ${n[2].toFixed(7)}]`;Ux.exports=qU});var Bx=E((_j,Ox)=>{var kU=(n,e,t)=>{let i=e[0],r=e[1],s=e[2],o=t[3]*i+t[7]*r+t[11]*s+t[15];return o=o||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/o,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/o,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/o,n};Ox.exports=kU});var Ue=E((vj,zx)=>{zx.exports={abs:Sf(),add:Mf(),angle:Z0(),clone:K0(),copy:bf(),create:Ko(),cross:Ts(),distance:wf(),divide:nx(),dot:Jo(),equals:rx(),fromScalar:ox(),fromValues:cx(),fromVec2:hx(),length:Ef(),lerp:dx(),max:Af(),min:Tf(),multiply:xx(),negate:vx(),normalize:Ll(),orthogonal:Mx(),rotateX:wx(),rotateY:Ax(),rotateZ:Cx(),scale:Cf(),snap:Ix(),squaredDistance:Rf(),squaredLength:Pf(),subtract:jo(),toString:Fx(),transform:Bx()}});var kx=E((yj,qx)=>{var ir=Ue(),VU=_f(),GU=(n,e,t)=>{let i=ir.normalize(ir.create(),e),r=ir.normalize(ir.create(),t),s=ir.cross(ir.create(),r,i),o=ir.dot(r,i);if(o===-1)return VU(n,Math.PI,ir.orthogonal(s,i));let a=1/(1+o);return n[0]=s[0]*s[0]*a+o,n[1]=s[1]*s[0]*a-s[2],n[2]=s[2]*s[0]*a+s[1],n[3]=0,n[4]=s[0]*s[1]*a+s[2],n[5]=s[1]*s[1]*a+o,n[6]=s[2]*s[1]*a-s[0],n[7]=0,n[8]=s[0]*s[2]*a-s[1],n[9]=s[1]*s[2]*a+s[0],n[10]=s[2]*s[2]*a+o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n};qx.exports=GU});var Gx=E((Sj,Vx)=>{var{sin:HU,cos:WU}=$t(),XU=(n,e)=>{let t=HU(e),i=WU(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=i,n[6]=t,n[7]=0,n[8]=0,n[9]=-t,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n};Vx.exports=XU});var Wx=E((Mj,Hx)=>{var{sin:YU,cos:ZU}=$t(),$U=(n,e)=>{let t=YU(e),i=ZU(e);return n[0]=i,n[1]=0,n[2]=-t,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=t,n[9]=0,n[10]=i,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n};Hx.exports=$U});var Yx=E((bj,Xx)=>{var{sin:JU,cos:KU}=$t(),jU=(n,e)=>{let t=JU(e),i=KU(e);return n[0]=i,n[1]=t,n[2]=0,n[3]=0,n[4]=-t,n[5]=i,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n};Xx.exports=jU});var $x=E((wj,Zx)=>{var QU=n=>n[0]===1&&n[1]===0&&n[2]===0&&n[3]===0&&n[4]===0&&n[5]===1&&n[6]===0&&n[7]===0&&n[8]===0&&n[9]===0&&n[10]===1&&n[11]===0&&n[12]===0&&n[13]===0&&n[14]===0&&n[15]===1;Zx.exports=QU});var Kx=E((Ej,Jx)=>{var eF=n=>Pi(n[1])&&Pi(n[2])&&Pi(n[3])&&Pi(n[4])&&Pi(n[6])&&Pi(n[7])&&Pi(n[8])&&Pi(n[9])&&Pi(n[11])&&n[15]===1,Pi=n=>Math.abs(n)<Number.EPSILON;Jx.exports=eF});var Qx=E((Aj,jx)=>{var tF=n=>{let e=n[4]*n[9]-n[8]*n[5],t=n[8]*n[1]-n[0]*n[9],i=n[0]*n[5]-n[4]*n[1];return e*n[2]+t*n[6]+i*n[10]<0};jx.exports=tF});var t1=E((Tj,e1)=>{var nF=(n,e)=>{let[t,i,r,s]=e;return n[0]=1-2*t*t,n[1]=-2*i*t,n[2]=-2*r*t,n[3]=0,n[4]=-2*t*i,n[5]=1-2*i*i,n[6]=-2*r*i,n[7]=0,n[8]=-2*t*r,n[9]=-2*i*r,n[10]=1-2*r*r,n[11]=0,n[12]=2*t*s,n[13]=2*i*s,n[14]=2*r*s,n[15]=1,n};e1.exports=nF});var i1=E((Cj,n1)=>{var iF=(n,e,t)=>{let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],c=e[5],l=e[6],h=e[7],u=e[8],f=e[9],d=e[10],g=e[11],_=e[12],p=e[13],m=e[14],v=e[15],A=t[0],M=t[1],y=t[2],b=t[3];return n[0]=A*i+M*a+y*u+b*_,n[1]=A*r+M*c+y*f+b*p,n[2]=A*s+M*l+y*d+b*m,n[3]=A*o+M*h+y*g+b*v,A=t[4],M=t[5],y=t[6],b=t[7],n[4]=A*i+M*a+y*u+b*_,n[5]=A*r+M*c+y*f+b*p,n[6]=A*s+M*l+y*d+b*m,n[7]=A*o+M*h+y*g+b*v,A=t[8],M=t[9],y=t[10],b=t[11],n[8]=A*i+M*a+y*u+b*_,n[9]=A*r+M*c+y*f+b*p,n[10]=A*s+M*l+y*d+b*m,n[11]=A*o+M*h+y*g+b*v,A=t[12],M=t[13],y=t[14],b=t[15],n[12]=A*i+M*a+y*u+b*_,n[13]=A*r+M*c+y*f+b*p,n[14]=A*s+M*l+y*d+b*m,n[15]=A*o+M*h+y*g+b*v,n};n1.exports=iF});var s1=E((Rj,r1)=>{var{EPS:rF}=ct(),{sin:sF,cos:oF}=$t(),aF=gf(),cF=(n,e,t,i)=>{let[r,s,o]=i,a=r*r+s*s+o*o;if(Math.abs(a)<rF)return aF(n,e);let c=1/Math.sqrt(a);r*=c,s*=c,o*=c;let l=sF(t),h=oF(t),u=1-h,f=e[0],d=e[1],g=e[2],_=e[3],p=e[4],m=e[5],v=e[6],A=e[7],M=e[8],y=e[9],b=e[10],x=e[11],w=r*r*u+h,P=s*r*u+o*l,R=o*r*u-s*l,L=r*s*u-o*l,D=s*s*u+h,z=o*s*u+r*l,I=r*o*u+s*l,q=s*o*u-r*l,F=o*o*u+h;return n[0]=f*w+p*P+M*R,n[1]=d*w+m*P+y*R,n[2]=g*w+v*P+b*R,n[3]=_*w+A*P+x*R,n[4]=f*L+p*D+M*z,n[5]=d*L+m*D+y*z,n[6]=g*L+v*D+b*z,n[7]=_*L+A*D+x*z,n[8]=f*I+p*q+M*F,n[9]=d*I+m*q+y*F,n[10]=g*I+v*q+b*F,n[11]=_*I+A*q+x*F,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n};r1.exports=cF});var a1=E((Pj,o1)=>{var{sin:lF,cos:hF}=$t(),uF=(n,e,t)=>{let i=lF(t),r=hF(t),s=e[4],o=e[5],a=e[6],c=e[7],l=e[8],h=e[9],u=e[10],f=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+l*i,n[5]=o*r+h*i,n[6]=a*r+u*i,n[7]=c*r+f*i,n[8]=l*r-s*i,n[9]=h*r-o*i,n[10]=u*r-a*i,n[11]=f*r-c*i,n};o1.exports=uF});var l1=E((Ij,c1)=>{var{sin:fF,cos:dF}=$t(),pF=(n,e,t)=>{let i=fF(t),r=dF(t),s=e[0],o=e[1],a=e[2],c=e[3],l=e[8],h=e[9],u=e[10],f=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-l*i,n[1]=o*r-h*i,n[2]=a*r-u*i,n[3]=c*r-f*i,n[8]=s*i+l*r,n[9]=o*i+h*r,n[10]=a*i+u*r,n[11]=c*i+f*r,n};c1.exports=pF});var u1=E((Lj,h1)=>{var{sin:mF,cos:gF}=$t(),xF=(n,e,t)=>{let i=mF(t),r=gF(t),s=e[0],o=e[1],a=e[2],c=e[3],l=e[4],h=e[5],u=e[6],f=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+l*i,n[1]=o*r+h*i,n[2]=a*r+u*i,n[3]=c*r+f*i,n[4]=l*r-s*i,n[5]=h*r-o*i,n[6]=u*r-a*i,n[7]=f*r-c*i,n};h1.exports=xF});var d1=E((Dj,f1)=>{var _F=(n,e,t)=>{let i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};f1.exports=_F});var m1=E((Nj,p1)=>{var vF=(n,e,t)=>(n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n);p1.exports=vF});var x1=E((Uj,g1)=>{var yF=n=>n.map(e=>e.toFixed(7)).toString();g1.exports=yF});var v1=E((Fj,_1)=>{var SF=(n,e,t)=>{let i=t[0],r=t[1],s=t[2],o,a,c,l,h,u,f,d,g,_,p,m;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],h=e[4],u=e[5],f=e[6],d=e[7],g=e[8],_=e[9],p=e[10],m=e[11],n[0]=o,n[1]=a,n[2]=c,n[3]=l,n[4]=h,n[5]=u,n[6]=f,n[7]=d,n[8]=g,n[9]=_,n[10]=p,n[11]=m,n[12]=o*i+h*r+g*s+e[12],n[13]=a*i+u*r+_*s+e[13],n[14]=c*i+f*r+p*s+e[14],n[15]=l*i+d*r+m*s+e[15]),n};_1.exports=SF});var bt=E((Oj,y1)=>{y1.exports={add:M0(),clone:E0(),copy:gf(),create:Il(),invert:C0(),equals:P0(),fromRotation:_f(),fromScaling:O0(),fromTaitBryanRotation:z0(),fromTranslation:k0(),fromValues:G0(),fromVectorRotation:kx(),fromXRotation:Gx(),fromYRotation:Wx(),fromZRotation:Yx(),identity:xf(),isIdentity:$x(),isOnlyTransformScale:Kx(),isMirroring:Qx(),mirrorByPlane:t1(),multiply:i1(),rotate:s1(),rotateX:a1(),rotateY:l1(),rotateZ:u1(),scale:d1(),subtract:m1(),toString:x1(),translate:v1()}});var Qo=E((Bj,S1)=>{var MF=bt(),bF=n=>(n===void 0&&(n=[]),{sides:n,transforms:MF.create()});S1.exports=bF});var b1=E((zj,M1)=>{var wF=(n,e)=>(n[0]=Math.abs(e[0]),n[1]=Math.abs(e[1]),n);M1.exports=wF});var E1=E((qj,w1)=>{var EF=(n,e,t)=>(n[0]=e[0]+t[0],n[1]=e[1]+t[1],n);w1.exports=EF});var Dl=E((kj,A1)=>{var AF=n=>Math.atan2(n[1],n[0]);A1.exports=AF});var C1=E((Vj,T1)=>{T1.exports=Dl()});var P1=E((Gj,R1)=>{var TF=Dl(),CF=n=>TF(n)*57.29577951308232;R1.exports=CF});var ea=E((Hj,I1)=>{var RF=()=>[0,0];I1.exports=RF});var D1=E((Wj,L1)=>{var PF=ea(),IF=n=>{let e=PF();return e[0]=n[0],e[1]=n[1],e};L1.exports=IF});var U1=E((Xj,N1)=>{var LF=(n,e)=>(n[0]=e[0],n[1]=e[1],n);N1.exports=LF});var O1=E((Yj,F1)=>{var DF=(n,e,t)=>(n[0]=0,n[1]=0,n[2]=e[0]*t[1]-e[1]*t[0],n);F1.exports=DF});var z1=E((Zj,B1)=>{var NF=(n,e)=>{let t=e[0]-n[0],i=e[1]-n[1];return Math.sqrt(t*t+i*i)};B1.exports=NF});var k1=E(($j,q1)=>{var UF=(n,e,t)=>(n[0]=e[0]/t[0],n[1]=e[1]/t[1],n);q1.exports=UF});var G1=E((Jj,V1)=>{var FF=(n,e)=>n[0]*e[0]+n[1]*e[1];V1.exports=FF});var W1=E((Kj,H1)=>{var OF=(n,e)=>n[0]===e[0]&&n[1]===e[1];H1.exports=OF});var If=E((jj,X1)=>{var{sin:BF,cos:zF}=$t(),qF=(n,e)=>(n[0]=zF(e),n[1]=BF(e),n);X1.exports=qF});var Z1=E((Qj,Y1)=>{var kF=If(),VF=(n,e)=>kF(n,e*.017453292519943295);Y1.exports=VF});var J1=E((eQ,$1)=>{var GF=(n,e)=>(n[0]=e,n[1]=e,n);$1.exports=GF});var j1=E((tQ,K1)=>{var HF=ea(),WF=(n,e)=>{let t=HF();return t[0]=n,t[1]=e,t};K1.exports=WF});var e_=E((nQ,Q1)=>{var XF=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]);Q1.exports=XF});var n_=E((iQ,t_)=>{var YF=(n,e,t,i)=>{let r=e[0],s=e[1];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n};t_.exports=YF});var r_=E((rQ,i_)=>{var ZF=(n,e,t)=>(n[0]=Math.max(e[0],t[0]),n[1]=Math.max(e[1],t[1]),n);i_.exports=ZF});var o_=E((sQ,s_)=>{var $F=(n,e,t)=>(n[0]=Math.min(e[0],t[0]),n[1]=Math.min(e[1],t[1]),n);s_.exports=$F});var c_=E((oQ,a_)=>{var JF=(n,e,t)=>(n[0]=e[0]*t[0],n[1]=e[1]*t[1],n);a_.exports=JF});var h_=E((aQ,l_)=>{var KF=(n,e)=>(n[0]=-e[0],n[1]=-e[1],n);l_.exports=KF});var Lf=E((cQ,u_)=>{var jF=(n,e,t,i)=>{let r=e[0]-t[0],s=e[1]-t[1],o=Math.cos(i),a=Math.sin(i);return n[0]=r*o-s*a+t[0],n[1]=r*a+s*o+t[1],n};u_.exports=jF});var d_=E((lQ,f_)=>{var{TAU:QF}=ct(),eO=ea(),tO=Lf(),nO=(n,e)=>tO(n,e,eO(),QF/4);f_.exports=nO});var m_=E((hQ,p_)=>{var iO=(n,e)=>{let t=e[0],i=e[1],r=t*t+i*i;return r>0&&(r=1/Math.sqrt(r)),n[0]=t*r,n[1]=i*r,n};p_.exports=iO});var x_=E((uQ,g_)=>{var rO=(n,e,t)=>(n[0]=e[0]*t,n[1]=e[1]*t,n);g_.exports=rO});var v_=E((fQ,__)=>{var sO=(n,e,t)=>(n[0]=Math.round(e[0]/t)*t+0,n[1]=Math.round(e[1]/t)*t+0,n);__.exports=sO});var S_=E((dQ,y_)=>{var oO=(n,e)=>{let t=e[0]-n[0],i=e[1]-n[1];return t*t+i*i};y_.exports=oO});var b_=E((pQ,M_)=>{var aO=n=>{let e=n[0],t=n[1];return e*e+t*t};M_.exports=aO});var E_=E((mQ,w_)=>{var cO=(n,e,t)=>(n[0]=e[0]-t[0],n[1]=e[1]-t[1],n);w_.exports=cO});var T_=E((gQ,A_)=>{var lO=n=>`[${n[0].toFixed(7)}, ${n[1].toFixed(7)}]`;A_.exports=lO});var R_=E((xQ,C_)=>{var hO=(n,e,t)=>{let i=e[0],r=e[1];return n[0]=t[0]*i+t[4]*r+t[12],n[1]=t[1]*i+t[5]*r+t[13],n};C_.exports=hO});var rt=E((_Q,P_)=>{P_.exports={abs:b1(),add:E1(),angle:C1(),angleDegrees:P1(),angleRadians:Dl(),clone:D1(),copy:U1(),create:ea(),cross:O1(),distance:z1(),divide:k1(),dot:G1(),equals:W1(),fromAngleDegrees:Z1(),fromAngleRadians:If(),fromScalar:J1(),fromValues:j1(),length:e_(),lerp:n_(),max:r_(),min:o_(),multiply:c_(),negate:h_(),normal:d_(),normalize:m_(),rotate:Lf(),scale:x_(),snap:v_(),squaredDistance:S_(),squaredLength:b_(),subtract:E_(),toString:T_(),transform:R_()}});var L_=E((vQ,I_)=>{var Df=rt(),uO=Qo(),fO=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");let e=n.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");Df.equals(n[0],n[e-1])&&--e;let t=[],i=n[e-1];for(let r=0;r<e;r++){let s=n[r];t.push([Df.clone(i),Df.clone(s)]),i=s}return uO(t)};I_.exports=fO});var U_=E((yQ,N_)=>{var dO=bt(),D_=rt(),pO=Qo(),mO=n=>{if(n[0]!==0)throw new Error("invalid compact binary data");let e=pO();e.transforms=dO.clone(n.slice(1,17));for(let t=21;t<n.length;t+=4){let i=D_.fromValues(n[t+0],n[t+1]),r=D_.fromValues(n[t+2],n[t+3]);e.sides.push([i,r])}return n[17]>=0&&(e.color=[n[17],n[18],n[19],n[20]]),e};N_.exports=mO});var Nf=E((SQ,F_)=>{var gO=n=>!!(n&&typeof n=="object"&&"sides"in n&&"transforms"in n&&Array.isArray(n.sides)&&"length"in n.transforms);F_.exports=gO});var z_=E((MQ,B_)=>{var O_=bt(),Nl=rt(),xO=n=>(O_.isIdentity(n.transforms)||(n.sides=n.sides.map(e=>{let t=Nl.transform(Nl.create(),e[0],n.transforms),i=Nl.transform(Nl.create(),e[1],n.transforms);return[t,i]}),n.transforms=O_.create()),n);B_.exports=xO});var Cs=E((bQ,q_)=>{var _O=z_(),vO=n=>_O(n).sides;q_.exports=vO});var Uf=E((wQ,k_)=>{var yO=Qo(),SO=Cs(),MO=n=>{let t=SO(n).map(i=>[i[1],i[0]]);return t.reverse(),yO(t)};k_.exports=MO});var Ff=E((EQ,V_)=>{var ta=rt(),bO=Cs(),wO=n=>{let e=new Map,t=i=>{let r=i.toString();return e.has(r)?e.get(r):(e.set(r,i),i)};return n.map(i=>i.map(t))},EO=n=>{let e=new Map;return wO(n).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},AO=n=>{let e=EO(bO(n)),t=[];for(;;){let i;for(let[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;let r=[],s=i[0];for(;;){r.push(i[0]);let o=i[1];if(o===s)break;let a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);let c=TO(i,a);a.length===0&&e.delete(o),i=c}r.length>0&&r.push(r.shift()),t.push(r)}return e.clear(),t},TO=(n,e)=>{if(e.length===1)return e.pop();let t=ta.create(),i=ta.angleDegrees(ta.subtract(t,n[1],n[0])),r,s;e.forEach((a,c)=>{let h=ta.angleDegrees(ta.subtract(t,a[1],a[0]))-i;h<-180&&(h+=360),h>=180&&(h-=360),(s===void 0||h>r)&&(s=c,r=h)});let o=e[s];return e.splice(s,1),o};V_.exports=AO});var H_=E((AQ,G_)=>{var CO=Cs(),RO=n=>{let t=CO(n).map(i=>i[0]);return t.length>0&&t.push(t.shift()),t};G_.exports=RO});var Y_=E((TQ,X_)=>{var W_=rt(),PO=Cs(),IO=n=>{let e=PO(n),t="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{t+="  ["+W_.toString(i[0])+", "+W_.toString(i[1])+`]
`}),t+=`]
`,t};X_.exports=IO});var $_=E((CQ,Z_)=>{var LO=n=>{let e=n.sides,t=n.transforms,i=[-1,-1,-1,-1];n.color&&(i=n.color);let r=new Float32Array(21+e.length*4);r[0]=0,r[1]=t[0],r[2]=t[1],r[3]=t[2],r[4]=t[3],r[5]=t[4],r[6]=t[5],r[7]=t[6],r[8]=t[7],r[9]=t[8],r[10]=t[9],r[11]=t[10],r[12]=t[11],r[13]=t[12],r[14]=t[13],r[15]=t[14],r[16]=t[15],r[17]=i[0],r[18]=i[1],r[19]=i[2],r[20]=i[3];for(let s=0;s<e.length;s++){let o=s*4+21,a=e[s][0],c=e[s][1];r[o+0]=a[0],r[o+1]=a[1],r[o+2]=c[0],r[o+3]=c[1]}return r};Z_.exports=LO});var j_=E((RQ,K_)=>{var J_=bt(),DO=Uf(),NO=(n,e)=>{let t=J_.multiply(J_.create(),n,e.transforms),i=Object.assign({},e,{transforms:t});return n[0]*n[5]-n[4]*n[1]<0?DO(i):i};K_.exports=NO});var ev=E((PQ,Q_)=>{var UO=rt(),FO=Nf(),OO=Ff(),BO=n=>{if(!FO(n))throw new Error("invalid geom2 structure");if(OO(n),n.sides.forEach(e=>{if(UO.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!n.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${n.transforms}`)};Q_.exports=BO});var et=E((IQ,tv)=>{tv.exports={clone:y0(),create:Qo(),fromPoints:L_(),fromCompactBinary:U_(),isA:Nf(),reverse:Uf(),toOutlines:Ff(),toPoints:H_(),toSides:Cs(),toString:Y_(),toCompactBinary:$_(),transform:j_(),validate:ev()}});var iv=E((LQ,nv)=>{var zO=n=>Object.assign({},n);nv.exports=zO});var Rs=E((DQ,rv)=>{var qO=bt(),kO=n=>(n===void 0&&(n=[]),{polygons:n,transforms:qO.create()});rv.exports=kO});var cv=E((NQ,av)=>{var VO=Ts(),sv=jo(),ov=Pf(),GO=(n,e,t)=>{let i=[],r=[],s=[];sv(i,t,e),sv(r,n,e);let o=ov(VO(s,r,i)),a=ov(i);if(a===0)throw Error("a and b are the same point");return o/a},HO=(n,e,t)=>Math.sqrt(GO(n,e,t));av.exports=HO});var uv=E((UQ,hv)=>{var WO=Ts(),XO=Ll(),lv=jo(),YO=(n,e,t,i)=>{let r=[0,0,0];return lv(n,e,t),lv(r,t,i),WO(n,n,r),XO(n,n)};hv.exports=YO});var dv=E((FQ,fv)=>{var Of=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,t){t.prev=e.prev,t.next=e,t.prev?t.prev.next=t:this.head=t,e.prev=t}insertAfter(e,t){t.prev=e,t.next=e.next,t.next?t.next.prev=t:this.tail=t,e.next=t}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,t){e.prev?e.prev.next=t.next:this.head=t.next,t.next?t.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};fv.exports=Of});var mv=E((OQ,pv)=>{var Bf=class{constructor(e,t){this.point=e,this.index=t,this.next=null,this.prev=null,this.face=null}};pv.exports=Bf});var xv=E((BQ,gv)=>{var ZO=wf(),$O=Rf(),zf=class{constructor(e,t){this.vertex=e,this.face=t,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?ZO(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?$O(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};gv.exports=zf});var yv=E((zQ,vv)=>{var qf=Mf(),JO=bf(),KO=Ts(),kf=Jo(),jO=Ef(),QO=Ll(),Ul=Cf(),Vf=jo(),Gf=xv(),_v=0,eB=1,Hf=2,Wf=class n{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=_v,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let t=this.edge;for(;e>0;)t=t.next,e-=1;for(;e<0;)t=t.prev,e+=1;return t}computeNormal(){let e=this.edge,t=e.next,i=t.next,r=Vf([],t.head().point,e.head().point),s=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)JO(o,r),Vf(r,i.head().point,e.head().point),qf(this.normal,this.normal,KO(s,o,r)),i=i.next,this.nVertices+=1;this.area=jO(this.normal),this.normal=Ul(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let t,i=0,r=this.edge;do{let h=r.lengthSquared();h>i&&(t=r,i=h),r=r.next}while(r!==this.edge);let s=t.tail().point,o=t.head().point,a=Vf([],o,s),c=Math.sqrt(i);Ul(a,a,1/c);let l=kf(this.normal,a);Ul(a,a,-l),qf(this.normal,this.normal,a),QO(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do qf(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);Ul(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=kf(this.normal,this.centroid)}distanceToPlane(e){return kf(this.normal,e)-this.offset}connectHalfEdges(e,t){let i;if(e.opposite.face===t.opposite.face){let r=t.opposite.face,s;e===this.edge&&(this.edge=t),r.nVertices===3?(s=t.opposite.prev.opposite,r.mark=Hf,i=r):(s=t.opposite.next,r.edge===s.prev&&(r.edge=s),s.prev=s.prev.prev,s.prev.next=s),t.prev=e.prev,t.prev.next=t,t.setOpposite(s),r.computeNormalAndCentroid()}else e.next=t,t.prev=e;return i}mergeAdjacentFaces(e,t){let i=e.opposite,r=i.face;t.push(r),r.mark=Hf;let s=e.prev,o=e.next,a=i.prev,c=i.next;for(;s.opposite.face===r;)s=s.prev,c=c.next;for(;o.opposite.face===r;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let h;return h=this.connectHalfEdges(a,o),h&&t.push(h),h=this.connectHalfEdges(s,c),h&&t.push(h),this.computeNormalAndCentroid(),t}collectIndices(){let e=[],t=this.edge;do e.push(t.head().index),t=t.next;while(t!==this.edge);return e}static createTriangle(e,t,i,r=0){let s=new n,o=new Gf(e,s),a=new Gf(t,s),c=new Gf(i,s);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,s.edge=o,s.computeNormalAndCentroid(r),s}};vv.exports={VISIBLE:_v,NON_CONVEX:eB,DELETED:Hf,Face:Wf}});var Ev=E((qQ,wv)=>{var Xf=Jo(),tB=cv(),nB=uv(),Sv=dv(),iB=mv(),{Face:Ii,VISIBLE:Ps,NON_CONVEX:Mv,DELETED:rB}=yv(),sB=1,bv=2,Yf=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new Sv,this.unclaimed=new Sv,this.vertices=[];for(let t=0;t<e.length;t+=1)this.vertices.push(new iB(e[t],t));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,t){e.face=t,t.outside?this.claimed.insertBefore(t.outside,e):this.claimed.add(e),t.outside=e}removeVertexFromFace(e,t){e===t.outside&&(e.next&&e.next.face===t?t.outside=e.next:t.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let t=e.outside;for(;t.next&&t.next.face===e;)t=t.next;return this.claimed.removeChain(e.outside,t),t.next=null,e.outside}}deleteFaceVertices(e,t){let i=this.removeAllVerticesFromFace(e);if(i)if(!t)this.unclaimed.addAll(i);else{let r;for(let s=i;s;s=r)r=s.next,t.distanceToPlane(s.point)>this.tolerance?this.addVertexToFace(s,t):this.unclaimed.add(s)}}resolveUnclaimedPoints(e){let t=this.unclaimed.first();for(let i=t;i;i=t){t=i.next;let r=this.tolerance,s;for(let o=0;o<e.length;o+=1){let a=e[o];if(a.mark===Ps){let c=a.distanceToPlane(i.point);if(c>r&&(r=c,s=a),r>1e3*this.tolerance)break}}s&&this.addVertexToFace(i,s)}}computeExtremes(){let e=[],t=[],i=[],r=[],s,o;for(s=0;s<3;s+=1)i[s]=r[s]=this.vertices[0];for(s=0;s<3;s+=1)e[s]=t[s]=this.vertices[0].point[s];for(s=1;s<this.vertices.length;s+=1){let a=this.vertices[s],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>t[o]&&(t[o]=c[o],r[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(t[0]))+Math.max(Math.abs(e[1]),Math.abs(t[1]))+Math.max(Math.abs(e[2]),Math.abs(t[2]))),[i,r]}createInitialSimplex(){let e=this.vertices,[t,i]=this.computeExtremes(),r,s,o,a,c=0,l=0;for(o=0;o<3;o+=1){let _=i[o].point[o]-t[o].point[o];_>c&&(c=_,l=o)}let h=t[l],u=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){let _=this.vertices[o];if(_!==h&&_!==u){let p=tB(_.point,h.point,u.point);p>c&&(c=p,r=_)}}let f=nB([],h.point,u.point,r.point),d=Xf(h.point,f);for(c=-1,o=0;o<this.vertices.length;o+=1){let _=this.vertices[o];if(_!==h&&_!==u&&_!==r){let p=Math.abs(Xf(f,_.point)-d);p>c&&(c=p,s=_)}}let g=[];if(Xf(s.point,f)-d<0)for(g.push(Ii.createTriangle(h,u,r),Ii.createTriangle(s,u,h),Ii.createTriangle(s,r,u),Ii.createTriangle(s,h,r)),o=0;o<3;o+=1){let _=(o+1)%3;g[o+1].getEdge(2).setOpposite(g[0].getEdge(_)),g[o+1].getEdge(1).setOpposite(g[_+1].getEdge(0))}else for(g.push(Ii.createTriangle(h,r,u),Ii.createTriangle(s,h,u),Ii.createTriangle(s,u,r),Ii.createTriangle(s,r,h)),o=0;o<3;o+=1){let _=(o+1)%3;g[o+1].getEdge(2).setOpposite(g[0].getEdge((3-o)%3)),g[o+1].getEdge(0).setOpposite(g[_+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(g[o]);for(o=0;o<e.length;o+=1){let _=e[o];if(_!==h&&_!==u&&_!==r&&_!==s){c=this.tolerance;let p;for(a=0;a<4;a+=1){let m=g[a].distanceToPlane(_.point);m>c&&(c=m,p=g[a])}p&&this.addVertexToFace(_,p)}}}reindexFaceAndVertices(){let e=[];for(let t=0;t<this.faces.length;t+=1){let i=this.faces[t];i.mark===Ps&&e.push(i)}this.faces=e}collectFaces(e){let t=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==Ps)throw Error("attempt to include a destroyed face in the hull");let r=this.faces[i].collectIndices();if(e)t.push(r);else for(let s=0;s<r.length-2;s+=1)t.push([r[0],r[s+1],r[s+2]])}return t}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,t,i=0,r=this.claimed.first().face;for(t=r.outside;t&&t.face===r;t=t.next){let s=r.distanceToPlane(t.point);s>i&&(i=s,e=t)}return e}}computeHorizon(e,t,i,r){this.deleteFaceVertices(i),i.mark=rB;let s;t?s=t.next:s=t=i.getEdge(0);do{let o=s.opposite,a=o.face;a.mark===Ps&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,r):r.push(s)),s=s.next}while(s!==t)}addAdjoiningFace(e,t){let i=Ii.createTriangle(e,t.tail(),t.head());return this.faces.push(i),i.getEdge(-1).setOpposite(t.opposite),i.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let i,r;for(let s=0;s<t.length;s+=1){let o=t[s],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(r):i=a,this.newFaces.push(a.face),r=a}i.next.setOpposite(r)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,t){let i=e.edge,r=!0,s=0;do{if(s>=e.nVertices)throw Error("merge recursion limit exceeded");let o=i.opposite.face,a=!1;if(t===bv?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(r=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(r=!1),a){let c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,s+=1}while(i!==e.edge);return r||(e.mark=Mv),!1}addVertexToHull(e){let t=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t);for(let i=0;i<this.newFaces.length;i+=1){let r=this.newFaces[i];if(r.mark===Ps)for(;this.doAdjacentMerge(r,sB););}for(let i=0;i<this.newFaces.length;i+=1){let r=this.newFaces[i];if(r.mark===Mv)for(r.mark=Ps;this.doAdjacentMerge(r,bv););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};wv.exports=Yf});var Zf=E((kQ,Av)=>{var oB=Ev(),aB=(n,e={})=>{let t=new oB(n);return t.build(),t.collectFaces(e.skipTriangulation)};Av.exports=aB});var Ir=E((VQ,Tv)=>{var cB=n=>((n===void 0||n.length<3)&&(n=[]),{vertices:n});Tv.exports=cB});var Rv=E((GQ,Cv)=>{var lB=Ir(),hB=Ue(),uB=(...n)=>{let e,t;return n.length===1?(e=lB(),t=n[0]):(e=n[0],t=n[1]),e.vertices=t.vertices.map(i=>hB.clone(i)),e};Cv.exports=uB});var Iv=E((HQ,Pv)=>{var fB=Ue(),dB=Ir(),pB=n=>{let e=n.map(t=>fB.clone(t));return dB(e)};Pv.exports=pB});var Dv=E((WQ,Lv)=>{var mB=Ir(),gB=(n,e)=>{let t=mB(n);return t.plane=e,t};Lv.exports=gB});var na=E((XQ,Nv)=>{var xB=()=>[0,0,0,0];Nv.exports=xB});var $f=E((YQ,Uv)=>{var _B=na(),vB=n=>{let e=_B();return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e};Uv.exports=vB});var Jf=E((ZQ,Fv)=>{var yB=(n,e)=>(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n);Fv.exports=yB});var Kf=E(($Q,Ov)=>{var SB=(n,e)=>n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]&&n[3]===e[3];Ov.exports=SB});var jf=E((JQ,Bv)=>{var MB=(n,e)=>(n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n);Bv.exports=MB});var ed=E((KQ,zv)=>{var Qf=Ue(),bB=(n,e,t)=>{let i=Qf.normalize(Qf.create(),e),r=Qf.dot(t,i);return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=r,n};zv.exports=bB});var td=E((jQ,qv)=>{var wB=na(),EB=(n,e,t,i)=>{let r=wB();return r[0]=n,r[1]=e,r[2]=t,r[3]=i,r};qv.exports=EB});var Vv=E((QQ,kv)=>{var In=Ue(),AB=ed(),TB=(n,...e)=>{n[0]=0,n[1]=0,n[2]=0,n[3]=0;let t=e.length;e.forEach(d=>{In.add(n,n,d)}),In.scale(n,n,1/t);let i=0,r=0,s=0,o=0,a=0,c=0,l=In.create();e.forEach(d=>{In.subtract(l,d,n),i+=l[0]*l[0],r+=l[0]*l[1],s+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=t,r/=t,s/=t,o/=t,a/=t,c/=t,l[0]=0,l[1]=0,l[2]=0;let h=In.create(),u=o*c-a*a;h[0]=u,h[1]=s*a-r*c,h[2]=r*a-s*o;let f=u*u;return In.add(l,l,In.scale(h,h,f)),u=i*c-s*s,h[0]=s*a-r*c,h[1]=u,h[2]=r*s-a*i,f=u*u,In.dot(l,h)<0&&(f=-f),In.add(l,l,In.scale(h,h,f)),u=i*o-r*r,h[0]=r*a-s*o,h[1]=r*s-a*i,h[2]=u,f=u*u,In.dot(l,h)<0&&(f=-f),In.add(l,l,In.scale(h,h,f)),AB(n,l,n)};kv.exports=TB});var nd=E((eee,Gv)=>{var oi=Ue(),CB=(n,...e)=>{let t=e.length,i=oi.create(),r=oi.create(),s=o=>{let a=e[o],c=e[(o+1)%t],l=e[(o+2)%t];return oi.subtract(i,c,a),oi.subtract(r,l,a),oi.cross(i,i,r),oi.normalize(i,i),i};return n[0]=0,n[1]=0,n[2]=0,t===3?oi.copy(n,s(0)):(e.forEach((o,a)=>{oi.add(n,n,s(a))}),oi.normalize(n,n)),n[3]=oi.dot(n,e[0]),n};Gv.exports=CB});var Wv=E((tee,Hv)=>{var{EPS:id}=ct(),pn=Ue(),RB=(n,e,t,i)=>{let r=pn.subtract(pn.create(),t,e),s=pn.subtract(pn.create(),i,e);pn.length(r)<id&&(r=pn.orthogonal(r,s)),pn.length(s)<id&&(s=pn.orthogonal(s,r));let o=pn.cross(pn.create(),r,s);pn.length(o)<id&&(s=pn.orthogonal(s,r),o=pn.cross(o,r,s)),o=pn.normalize(o,o);let a=pn.dot(o,e);return n[0]=o[0],n[1]=o[1],n[2]=o[2],n[3]=a,n};Hv.exports=RB});var Yv=E((nee,Xv)=>{var PB=Ue(),IB=(n,e)=>{let t=e[0]*n[0]+e[1]*n[1]+e[2]*n[2]-n[3],i=e[0]-t*n[0],r=e[1]-t*n[1],s=e[2]-t*n[2];return PB.fromValues(i,r,s)};Xv.exports=IB});var rd=E((iee,Zv)=>{var LB=Ue(),DB=(n,e)=>LB.dot(n,e)-n[3];Zv.exports=DB});var sd=E((ree,$v)=>{var NB=n=>`(${n[0].toFixed(9)}, ${n[1].toFixed(9)}, ${n[2].toFixed(9)}, ${n[3].toFixed(9)})`;$v.exports=NB});var Kv=E((see,Jv)=>{var UB=bt(),mn=Ue(),FB=nd(),OB=jf(),BB=(n,e,t)=>{let i=UB.isMirroring(t),r=mn.orthogonal(mn.create(),e),s=mn.cross(r,e,r),o=mn.cross(mn.create(),e,s),a=mn.fromScalar(mn.create(),e[3]);mn.multiply(a,a,e);let c=mn.add(mn.create(),a,s),l=mn.add(mn.create(),a,o);return a=mn.transform(a,a,t),c=mn.transform(c,c,t),l=mn.transform(l,l,t),FB(n,a,c,l),i&&OB(n,n),n};Jv.exports=BB});var Zn=E((oee,jv)=>{jv.exports={clone:$f(),copy:Jf(),create:na(),equals:Kf(),flip:jf(),fromNormalAndPoint:ed(),fromValues:td(),fromNoisyPoints:Vv(),fromPoints:nd(),fromPointsRandom:Wv(),projectionOfPoint:Yv(),signedDistanceToPoint:rd(),toString:sd(),transform:Kv()}});var ty=E((aee,ey)=>{var Qv=Zn(),zB=Ir(),qB=n=>{let e=n.vertices.slice().reverse(),t=zB(e);return n.plane&&(t.plane=Qv.flip(Qv.create(),n.plane)),t};ey.exports=qB});var od=E((cee,ny)=>{var kB=n=>!!(n&&typeof n=="object"&&"vertices"in n&&Array.isArray(n.vertices));ny.exports=kB});var ad=E((lee,ry)=>{var iy=Zn(),Lr=Ue(),VB=n=>GB(n.vertices),GB=n=>{let e=n.length;if(e>2){let t=iy.fromPoints(iy.create(),...n),i=n[e-2],r=n[e-1];for(let s=0;s<e;s++){let o=n[s];if(!HB(i,r,o,t))return!1;i=r,r=o}}return!0},HB=(n,e,t,i)=>{let r=Lr.cross(Lr.create(),Lr.subtract(Lr.create(),e,n),Lr.subtract(Lr.create(),t,e));return Lr.dot(r,i)>=0};ry.exports=VB});var Fl=E((hee,oy)=>{var sy=Zn(),WB=n=>(n.plane||(n.plane=sy.fromPoints(sy.create(),...n.vertices)),n.plane);oy.exports=WB});var cd=E((uee,ay)=>{var XB=Fl(),YB=n=>{let e=n.vertices.length;if(e<3)return 0;let t=n.vertices,i=XB(n),r=Math.abs(i[0]),s=Math.abs(i[1]),o=Math.abs(i[2]);if(r+s+o===0)return 0;let a=3;r>s&&r>o?a=1:s>o&&(a=2);let c=0,l=0,h=1,u=2;switch(a){case 1:for(h=1;h<e;h++)l=h-1,u=(h+1)%e,c+=t[h][1]*(t[u][2]-t[l][2]);c+=t[0][1]*(t[1][2]-t[e-1][2]),c/=2*i[0];break;case 2:for(h=1;h<e;h++)l=h-1,u=(h+1)%e,c+=t[h][2]*(t[u][0]-t[l][0]);c+=t[0][2]*(t[1][0]-t[e-1][0]),c/=2*i[1];break;default:for(h=1;h<e;h++)l=h-1,u=(h+1)%e,c+=t[h][0]*(t[u][1]-t[l][1]);c+=t[0][0]*(t[1][1]-t[e-1][1]),c/=2*i[2];break}return c};ay.exports=YB});var ly=E((fee,cy)=>{var ia=Ue(),ZB=n=>{let e=n.vertices,t=e.length,i=t===0?ia.create():ia.clone(e[0]),r=ia.clone(i);for(let s=1;s<t;s++)ia.min(i,i,e[s]),ia.max(r,r,e[s]);return[i,r]};cy.exports=ZB});var uy=E((dee,hy)=>{var $B=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3];hy.exports=$B});var dy=E((pee,fy)=>{var JB=(n,e)=>(n[0]=e,n[1]=e,n[2]=e,n[3]=e,n);fy.exports=JB});var my=E((mee,py)=>{var KB=(n,e,t)=>{let[i,r,s,o]=e;return n[0]=t[0]*i+t[4]*r+t[8]*s+t[12]*o,n[1]=t[1]*i+t[5]*r+t[9]*s+t[13]*o,n[2]=t[2]*i+t[6]*r+t[10]*s+t[14]*o,n[3]=t[3]*i+t[7]*r+t[11]*s+t[15]*o,n};py.exports=KB});var ld=E((gee,gy)=>{gy.exports={clone:$f(),copy:Jf(),create:na(),dot:uy(),equals:Kf(),fromScalar:dy(),fromValues:td(),toString:sd(),transform:my()}});var vy=E((xee,_y)=>{var jB=ld(),xy=new WeakMap,QB=n=>{let e=xy.get(n);if(e)return e;let t=n.vertices,i=jB.create();if(t.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let r=t[0],s=r,o=r,a=r,c=r,l=r;t.forEach(d=>{r[0]>d[0]&&(r=d),s[1]>d[1]&&(s=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),c[1]<d[1]&&(c=d),l[2]<d[2]&&(l=d)}),i[0]=(r[0]+a[0])*.5,i[1]=(s[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;let h=i[0]-a[0],u=i[1]-c[1],f=i[2]-l[2];return i[3]=Math.sqrt(h*h+u*u+f*f),xy.set(n,i),i};_y.exports=QB});var Sy=E((_ee,yy)=>{var hd=Ue(),e4=n=>{let e=0,t=n.vertices,i=hd.create();for(let r=0;r<t.length-2;r++)hd.cross(i,t[r+1],t[r+2]),e+=hd.dot(t[0],i);return e/=6,e};yy.exports=e4});var by=E((vee,My)=>{var t4=n=>n.vertices;My.exports=t4});var Ey=E((yee,wy)=>{var n4=Ue(),i4=n=>{let e="poly3: vertices: [";return n.vertices.forEach(t=>{e+=`${n4.toString(t)}, `}),e+="]",e};wy.exports=i4});var Cy=E((See,Ty)=>{var r4=bt(),Ay=Ue(),s4=Ir(),o4=(n,e)=>{let t=e.vertices.map(i=>Ay.transform(Ay.create(),i,n));return r4.isMirroring(n)&&t.reverse(),s4(t)};Ty.exports=o4});var Py=E((Mee,Ry)=>{var a4=rd(),{NEPS:c4}=ct(),l4=Ue(),h4=od(),u4=ad(),f4=cd(),d4=Fl(),p4=n=>{if(!h4(n))throw new Error("invalid poly3 structure");if(n.vertices.length<3)throw new Error(`poly3 not enough vertices ${n.vertices.length}`);if(f4(n)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<n.vertices.length;e++)if(l4.equals(n.vertices[e],n.vertices[(e+1)%n.vertices.length]))throw new Error(`poly3 duplicate vertex ${n.vertices[e]}`);if(!u4(n))throw new Error("poly3 must be convex");if(n.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),n.vertices.length>3){let e=d4(n);n.vertices.forEach(t=>{let i=Math.abs(a4(e,t));if(i>c4)throw new Error(`poly3 must be coplanar: vertex ${t} distance ${i}`)})}};Ry.exports=p4});var st=E((bee,Iy)=>{Iy.exports={clone:Rv(),create:Ir(),fromPoints:Iv(),fromPointsAndPlane:Dv(),invert:ty(),isA:od(),isConvex:ad(),measureArea:cd(),measureBoundingBox:ly(),measureBoundingSphere:vy(),measureSignedVolume:Sy(),plane:Fl(),toPoints:by(),toString:Ey(),transform:Cy(),validate:Py()}});var Dy=E((wee,Ly)=>{var m4=Zf(),g4=Rs(),x4=st(),_4=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");let t=m4(n,{skipTriangulation:!0}).map(i=>{let r=i.map(s=>n[s]);return x4.create(r)});return g4(t)};Ly.exports=_4});var Uy=E((Eee,Ny)=>{var v4=st(),y4=Rs(),S4=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");let e=n.map((i,r)=>v4.create(i));return y4(e)};Ny.exports=S4});var Oy=E((Aee,Fy)=>{var M4=Ue(),b4=bt(),w4=st(),E4=Rs(),A4=n=>{if(n[0]!==1)throw new Error("invalid compact binary data");let e=E4();e.transforms=b4.clone(n.slice(1,17));let t=n[21],i=22,r=n.length-t*3;for(;r<n.length;){let s=n[i];i++;let o=[];for(let a=0;a<s;a++)o.push(M4.fromValues(n[r],n[r+1],n[r+2])),r+=3;e.polygons.push(w4.create(o))}return n[17]>=0&&(e.color=[n[17],n[18],n[19],n[20]]),e};Fy.exports=A4});var qy=E((Tee,zy)=>{var By=bt(),T4=st(),C4=n=>(By.isIdentity(n.transforms)||(n.polygons=n.polygons.map(e=>T4.transform(n.transforms,e)),n.transforms=By.create()),n);zy.exports=C4});var Is=E((Cee,ky)=>{var R4=qy(),P4=n=>R4(n).polygons;ky.exports=P4});var Gy=E((Ree,Vy)=>{var I4=st(),L4=Rs(),D4=Is(),N4=n=>{let t=D4(n).map(i=>I4.invert(i));return L4(t)};Vy.exports=N4});var Ol=E((Pee,Hy)=>{var U4=n=>!!(n&&typeof n=="object"&&"polygons"in n&&"transforms"in n&&Array.isArray(n.polygons)&&"length"in n.transforms);Hy.exports=U4});var Xy=E((Iee,Wy)=>{var{EPS:F4}=ct(),O4=Ue(),B4=Ol(),z4=Is(),q4=st(),k4=n=>{if(!B4(n))throw new Error("isConvex requires a geom3 geometry");let e=z4(n);if(e.length===0)return!0;let t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r].vertices;for(let o=0;o<s.length;o++){let a=s[o],c=`${a[0]},${a[1]},${a[2]}`;i.has(c)||(i.add(c),t.push(a))}}for(let r=0;r<e.length;r++){let s=q4.plane(e[r]);for(let o=0;o<t.length;o++){let a=t[o];if(O4.dot(s,a)-s[3]>F4)return!1}}return!0};Wy.exports=k4});var Zy=E((Lee,Yy)=>{var V4=st(),G4=Is(),H4=n=>G4(n).map(i=>V4.toPoints(i));Yy.exports=H4});var Jy=E((Dee,$y)=>{var W4=st(),X4=Is(),Y4=n=>{let e=X4(n),t="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{t+="  "+W4.toString(i)+`
`}),t};$y.exports=Y4});var jy=E((Nee,Ky)=>{var Z4=st(),$4=n=>{let e=n.polygons,t=n.transforms,i=e.length,r=e.reduce((l,h)=>l+h.vertices.length,0),s=[-1,-1,-1,-1];n.color&&(s=n.color);let o=new Float32Array(22+i+r*3);o[0]=1,o[1]=t[0],o[2]=t[1],o[3]=t[2],o[4]=t[3],o[5]=t[4],o[6]=t[5],o[7]=t[6],o[8]=t[7],o[9]=t[8],o[10]=t[9],o[11]=t[10],o[12]=t[11],o[13]=t[12],o[14]=t[13],o[15]=t[14],o[16]=t[15],o[17]=s[0],o[18]=s[1],o[19]=s[2],o[20]=s[3],o[21]=r;let a=22,c=a+i;return e.forEach(l=>{let h=Z4.toPoints(l);o[a]=h.length,a++;for(let u=0;u<h.length;u++){let f=h[u];o[c+0]=f[0],o[c+1]=f[1],o[c+2]=f[2],c+=3}}),o};Ky.exports=$4});var tS=E((Uee,eS)=>{var Qy=bt(),J4=(n,e)=>{let t=Qy.multiply(Qy.create(),n,e.transforms);return Object.assign({},e,{transforms:t})};eS.exports=J4});var iS=E((Fee,nS)=>{var K4=st(),j4=Ol(),Q4=n=>{if(!j4(n))throw new Error("invalid geom3 structure");if(n.polygons.forEach(K4.validate),ez(n),!n.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${n.transforms}`)},ez=n=>{let e=new Map;n.polygons.forEach(({vertices:i})=>{i.forEach((r,s)=>{let o=`${r}`,a=`${i[(s+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});let t=[];if(e.forEach((i,r)=>{let s=r.split("/").reverse().join("/"),o=e.get(s);i!==o&&t.push(r.replace("/"," -> "))}),t.length>0)throw new Error(`non-manifold edges ${t.length}
${t.join(`
`)}`)};nS.exports=Q4});var Ke=E((Oee,rS)=>{rS.exports={clone:iv(),create:Rs(),fromPointsConvex:Dy(),fromPoints:Uy(),fromCompactBinary:Oy(),invert:Gy(),isA:Ol(),isConvex:Xy(),toPoints:Zy(),toPolygons:Is(),toString:Jy(),toCompactBinary:jy(),transform:tS(),validate:iS()}});var Bl=E((Bee,sS)=>{var tz=n=>Object.assign({},n);sS.exports=tz});var ud=E((zee,aS)=>{var{EPS:oS}=ct(),nz=rt(),iz=Bl(),rz=n=>{if(n.isClosed)return n;let e=iz(n);if(e.isClosed=!0,e.points.length>1){let t=e.points,i=t[0],r=t[t.length-1];for(;nz.distance(i,r)<oS*oS&&(t.pop(),t.length!==1);)r=t[t.length-1]}return e};aS.exports=rz});var ra=E((qee,cS)=>{var sz=bt(),oz=n=>(n===void 0&&(n=[]),{points:n,isClosed:!1,transforms:sz.create()});cS.exports=oz});var zl=E((kee,uS)=>{var{EPS:lS}=ct(),hS=rt(),az=ud(),cz=ra(),lz=(n,e)=>{let t={closed:!1},{closed:i}=Object.assign({},t,n),r=cz();if(r.points=e.map(s=>hS.clone(s)),r.points.length>1){let s=r.points[0],o=r.points[r.points.length-1];hS.distance(s,o)<lS*lS&&(i=!0)}return i===!0&&(r=az(r)),r};uS.exports=lz});var mS=E((Vee,pS)=>{var fS=bt(),dS=rt(),hz=n=>(fS.isIdentity(n.transforms)||(n.points=n.points.map(e=>dS.transform(dS.create(),e,n.transforms)),n.transforms=fS.create()),n);pS.exports=hz});var Dr=E((Gee,gS)=>{var uz=mS(),fz=n=>uz(n).points;gS.exports=fz});var _S=E((Hee,xS)=>{var{TAU:ql}=ct(),zt=rt(),dz=zl(),pz=Dr(),mz=(n,e)=>{let t={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16},{endpoint:i,radius:r,xaxisrotation:s,clockwise:o,large:a,segments:c}=Object.assign({},t,n);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=zt.clone(i),!Array.isArray(r))throw new Error("radius must be an array of X and Y values");if(r.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");let l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");let h=pz(e);if(h.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let u=r[0],f=r[1],d=h[h.length-1];u=Math.round(u*l)/l,f=Math.round(f*l)/l,i=zt.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);let g=!o,_=[];if(u===0||f===0)_.push(i);else{u=Math.abs(u),f=Math.abs(f);let m=s,v=Math.cos(m),A=Math.sin(m),M=zt.subtract(zt.create(),d,i);zt.scale(M,M,.5);let y=Math.round((v*M[0]+A*M[1])*l)/l,b=Math.round((-A*M[0]+v*M[1])*l)/l,x=zt.fromValues(y,b),w=x[0]*x[0]/(u*u)+x[1]*x[1]/(f*f);if(w>1){let te=Math.sqrt(w);u*=te,f*=te,u=Math.round(u*l)/l,f=Math.round(f*l)/l}let P=Math.sqrt((u*u*f*f-u*u*x[1]*x[1]-f*f*x[0]*x[0])/(u*u*x[1]*x[1]+f*f*x[0]*x[0]));g===a&&(P=-P);let R=zt.fromValues(u*x[1]/f,-f*x[0]/u);zt.scale(R,R,P);let L=zt.fromValues(v*R[0]-A*R[1],A*R[0]+v*R[1]);L=zt.add(L,L,zt.scale(zt.create(),zt.add(zt.create(),d,i),.5));let D=zt.fromValues((x[0]-R[0])/u,(x[1]-R[1])/f),z=zt.fromValues((-x[0]-R[0])/u,(-x[1]-R[1])/f),I=zt.angleRadians(D),F=zt.angleRadians(z)-I;F=F%ql,!g&&F>0?F-=ql:g&&F<0&&(F+=ql);let k=Math.floor(c*(Math.abs(F)/ql));k<1&&(k=1);for(let te=1;te<k;te++){let H=I+te/k*F,ne=Math.cos(H),ie=Math.sin(H),be=zt.fromValues(v*u*ne-A*f*ie,A*u*ne+v*f*ie);zt.add(be,be,L),_.push(be)}k&&_.push(n.endpoint)}return _=h.concat(_),dz({},_)};xS.exports=mz});var fd=E((Wee,vS)=>{var gz=zl(),xz=Dr(),{equals:_z}=rt(),vz=(...n)=>{let e=!1,t=[];return n.forEach((i,r)=>{let s=xz(i).slice();if(t.length>0&&s.length>0&&_z(s[0],t[t.length-1])&&s.shift(),s.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${r}th path`);e=i.isClosed,t=t.concat(s)}),gz({closed:e},t)};vS.exports=vz});var dd=E((Xee,yS)=>{var yz=fd(),Sz=ra(),Mz=(n,e)=>yz(e,Sz(n));yS.exports=Mz});var MS=E((Yee,SS)=>{var{TAU:bz}=ct(),Ln=rt(),wz=rt(),Ez=dd(),Az=Dr(),Tz=(n,e)=>{let t={segments:16},{controlPoints:i,segments:r}=Object.assign({},t,n);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(r<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");let s=Az(e);if(s.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let b=s[s.length-2];if("lastBezierControlPoint"in e&&(b=e.lastBezierControlPoint),!Array.isArray(b))throw new Error("the given path must contain TWO or more points if given a null control point");let x=Ln.scale(Ln.create(),s[s.length-1],2);Ln.subtract(x,x,b),i[0]=x}i.unshift(s[s.length-1]);let a=i.length-1,c=[],l=1;for(let b=0;b<=a;++b)b>0&&(l*=b),c.push(l);let h=[];for(let b=0;b<=a;++b){let x=c[a]/(c[b]*c[a-b]);h.push(x)}let u=Ln.create(),f=Ln.create(),d=wz.create(),g=b=>{let x=1,w=Math.pow(1-b,a),P=b!==1?1/(1-b):1,R=Ln.create();for(let L=0;L<=a;++L){L===a&&(w=1);let D=h[L]*x*w,z=Ln.scale(u,i[L],D);Ln.add(R,R,z),x*=b,w*=P}return R},_=[],p=[],m=a+1;for(let b=0;b<m;++b){let x=b/(m-1),w=g(x);_.push(w),p.push(x)}let v=1,A=bz/r,M=Math.sin(A);for(;v<_.length-1;){let b=Ln.subtract(u,_[v],_[v-1]);Ln.normalize(b,b);let x=Ln.subtract(f,_[v+1],_[v]);Ln.normalize(x,x);let w=Ln.cross(d,b,x);if(Math.abs(w[2])>M){let P=p[v-1],R=p[v+1],L=P+(R-P)*1/3,D=P+(R-P)*2/3,z=g(L),I=g(D);_.splice(v,1,z,I),p.splice(v,1,L,D),v--,v<1&&(v=1)}else++v}_.shift();let y=Ez(_,e);return y.lastBezierControlPoint=i[i.length-2],y};SS.exports=Tz});var ES=E((Zee,wS)=>{var Cz=rt(),bS=Dr(),Rz=(n,e)=>{if(n.isClosed!==e.isClosed||n.points.length!==e.points.length)return!1;let t=bS(n),i=bS(e),r=t.length,s=0;do{let o=!1;for(let a=0;a<r;a++)if(!Cz.equals(t[a],i[(a+s)%r])){o=!0;break}if(o===!1)return!0;if(!n.isClosed)return!1}while(++s<r);return!1};wS.exports=Rz});var TS=E(($ee,AS)=>{var Pz=bt(),Iz=rt(),Lz=ra(),Dz=n=>{if(n[0]!==2)throw new Error("invalid compact binary data");let e=Lz();e.transforms=Pz.clone(n.slice(1,17)),e.isClosed=!!n[17];for(let t=22;t<n.length;t+=2){let i=Iz.fromValues(n[t],n[t+1]);e.points.push(i)}return n[18]>=0&&(e.color=[n[18],n[19],n[20],n[21]]),e};AS.exports=Dz});var pd=E((Jee,CS)=>{var Nz=n=>!!(n&&typeof n=="object"&&"points"in n&&"transforms"in n&&"isClosed"in n&&Array.isArray(n.points)&&"length"in n.transforms);CS.exports=Nz});var PS=E((Kee,RS)=>{var Uz=Bl(),Fz=n=>{let e=Uz(n);return e.points=n.points.slice().reverse(),e};RS.exports=Fz});var LS=E((jee,IS)=>{var Oz=rt(),Bz=Dr(),zz=n=>{let e=Bz(n),t="path ("+e.length+" points, "+n.isClosed+`):
[
`;return e.forEach(i=>{t+="  "+Oz.toString(i)+`,
`}),t+=`]
`,t};IS.exports=zz});var NS=E((Qee,DS)=>{var qz=n=>{let e=n.points,t=n.transforms,i=[-1,-1,-1,-1];n.color&&(i=n.color);let r=new Float32Array(22+e.length*2);r[0]=2,r[1]=t[0],r[2]=t[1],r[3]=t[2],r[4]=t[3],r[5]=t[4],r[6]=t[5],r[7]=t[6],r[8]=t[7],r[9]=t[8],r[10]=t[9],r[11]=t[10],r[12]=t[11],r[13]=t[12],r[14]=t[13],r[15]=t[14],r[16]=t[15],r[17]=n.isClosed?1:0,r[18]=i[0],r[19]=i[1],r[20]=i[2],r[21]=i[3];for(let s=0;s<e.length;s++){let o=s*2+22,a=e[s];r[o]=a[0],r[o+1]=a[1]}return r};DS.exports=qz});var OS=E((ete,FS)=>{var US=bt(),kz=(n,e)=>{let t=US.multiply(US.create(),n,e.transforms);return Object.assign({},e,{transforms:t})};FS.exports=kz});var zS=E((tte,BS)=>{var Vz=rt(),Gz=pd(),Hz=n=>{if(!Gz(n))throw new Error("invalid path2 structure");if(n.points.length>1){for(let e=0;e<n.points.length;e++)if(Vz.equals(n.points[e],n.points[(e+1)%n.points.length]))throw new Error(`path2 duplicate points ${n.points[e]}`)}if(n.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!n.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${n.transforms}`)};BS.exports=Hz});var Mt=E((nte,qS)=>{qS.exports={appendArc:_S(),appendBezier:MS(),appendPoints:dd(),clone:Bl(),close:ud(),concat:fd(),create:ra(),equals:ES(),fromPoints:zl(),fromCompactBinary:TS(),isA:pd(),reverse:PS(),toPoints:Dr(),toString:LS(),toCompactBinary:NS(),transform:OS(),validate:zS()}});var XS=E((ite,WS)=>{var Wz=$e(),kS=et(),VS=Ke(),GS=Mt(),HS=st(),Xz=(n,e)=>{let t=kS.clone(e);return t.color=n,t},Yz=(n,e)=>{let t=VS.clone(e);return t.color=n,t},Zz=(n,e)=>{let t=GS.clone(e);return t.color=n,t},$z=(n,e)=>{let t=HS.clone(e);return t.color=n,t},Jz=(n,...e)=>{if(!Array.isArray(n))throw new Error("color must be an array");if(n.length<3)throw new Error("color must contain R, G and B values");if(n.length===3&&(n=[n[0],n[1],n[2],1]),e=Wz(e),e.length===0)throw new Error("wrong number of arguments");let t=e.map(i=>kS.isA(i)?Xz(n,i):VS.isA(i)?Yz(n,i):GS.isA(i)?Zz(n,i):HS.isA(i)?$z(n,i):(i.color=n,i));return t.length===1?t[0]:t};WS.exports=Jz});var md=E((rte,YS)=>{var Kz={black:[0,0,0],silver:[.7529411764705882,.7529411764705882,.7529411764705882],gray:[.5019607843137255,.5019607843137255,.5019607843137255],white:[1,1,1],maroon:[.5019607843137255,0,0],red:[1,0,0],purple:[.5019607843137255,0,.5019607843137255],fuchsia:[1,0,1],green:[0,.5019607843137255,0],lime:[0,1,0],olive:[.5019607843137255,.5019607843137255,0],yellow:[1,1,0],navy:[0,0,.5019607843137255],blue:[0,0,1],teal:[0,.5019607843137255,.5019607843137255],aqua:[0,1,1],aliceblue:[.9411764705882353,.9725490196078431,1],antiquewhite:[.9803921568627451,.9215686274509803,.8431372549019608],aquamarine:[.4980392156862745,1,.8313725490196079],azure:[.9411764705882353,1,1],beige:[.9607843137254902,.9607843137254902,.8627450980392157],bisque:[1,.8941176470588236,.7686274509803922],blanchedalmond:[1,.9215686274509803,.803921568627451],blueviolet:[.5411764705882353,.16862745098039217,.8862745098039215],brown:[.6470588235294118,.16470588235294117,.16470588235294117],burlywood:[.8705882352941177,.7215686274509804,.5294117647058824],cadetblue:[.37254901960784315,.6196078431372549,.6274509803921569],chartreuse:[.4980392156862745,1,0],chocolate:[.8235294117647058,.4117647058823529,.11764705882352941],coral:[1,.4980392156862745,.3137254901960784],cornflowerblue:[.39215686274509803,.5843137254901961,.9294117647058824],cornsilk:[1,.9725490196078431,.8627450980392157],crimson:[.8627450980392157,.0784313725490196,.23529411764705882],cyan:[0,1,1],darkblue:[0,0,.5450980392156862],darkcyan:[0,.5450980392156862,.5450980392156862],darkgoldenrod:[.7215686274509804,.5254901960784314,.043137254901960784],darkgray:[.6627450980392157,.6627450980392157,.6627450980392157],darkgreen:[0,.39215686274509803,0],darkgrey:[.6627450980392157,.6627450980392157,.6627450980392157],darkkhaki:[.7411764705882353,.7176470588235294,.4196078431372549],darkmagenta:[.5450980392156862,0,.5450980392156862],darkolivegreen:[.3333333333333333,.4196078431372549,.1843137254901961],darkorange:[1,.5490196078431373,0],darkorchid:[.6,.19607843137254902,.8],darkred:[.5450980392156862,0,0],darksalmon:[.9137254901960784,.5882352941176471,.47843137254901963],darkseagreen:[.5607843137254902,.7372549019607844,.5607843137254902],darkslateblue:[.2823529411764706,.23921568627450981,.5450980392156862],darkslategray:[.1843137254901961,.30980392156862746,.30980392156862746],darkslategrey:[.1843137254901961,.30980392156862746,.30980392156862746],darkturquoise:[0,.807843137254902,.8196078431372549],darkviolet:[.5803921568627451,0,.8274509803921568],deeppink:[1,.0784313725490196,.5764705882352941],deepskyblue:[0,.7490196078431373,1],dimgray:[.4117647058823529,.4117647058823529,.4117647058823529],dimgrey:[.4117647058823529,.4117647058823529,.4117647058823529],dodgerblue:[.11764705882352941,.5647058823529412,1],firebrick:[.6980392156862745,.13333333333333333,.13333333333333333],floralwhite:[1,.9803921568627451,.9411764705882353],forestgreen:[.13333333333333333,.5450980392156862,.13333333333333333],gainsboro:[.8627450980392157,.8627450980392157,.8627450980392157],ghostwhite:[.9725490196078431,.9725490196078431,1],gold:[1,.8431372549019608,0],goldenrod:[.8549019607843137,.6470588235294118,.12549019607843137],greenyellow:[.6784313725490196,1,.1843137254901961],grey:[.5019607843137255,.5019607843137255,.5019607843137255],honeydew:[.9411764705882353,1,.9411764705882353],hotpink:[1,.4117647058823529,.7058823529411765],indianred:[.803921568627451,.3607843137254902,.3607843137254902],indigo:[.29411764705882354,0,.5098039215686274],ivory:[1,1,.9411764705882353],khaki:[.9411764705882353,.9019607843137255,.5490196078431373],lavender:[.9019607843137255,.9019607843137255,.9803921568627451],lavenderblush:[1,.9411764705882353,.9607843137254902],lawngreen:[.48627450980392156,.9882352941176471,0],lemonchiffon:[1,.9803921568627451,.803921568627451],lightblue:[.6784313725490196,.8470588235294118,.9019607843137255],lightcoral:[.9411764705882353,.5019607843137255,.5019607843137255],lightcyan:[.8784313725490196,1,1],lightgoldenrodyellow:[.9803921568627451,.9803921568627451,.8235294117647058],lightgray:[.8274509803921568,.8274509803921568,.8274509803921568],lightgreen:[.5647058823529412,.9333333333333333,.5647058823529412],lightgrey:[.8274509803921568,.8274509803921568,.8274509803921568],lightpink:[1,.7137254901960784,.7568627450980392],lightsalmon:[1,.6274509803921569,.47843137254901963],lightseagreen:[.12549019607843137,.6980392156862745,.6666666666666666],lightskyblue:[.5294117647058824,.807843137254902,.9803921568627451],lightslategray:[.4666666666666667,.5333333333333333,.6],lightslategrey:[.4666666666666667,.5333333333333333,.6],lightsteelblue:[.6901960784313725,.7686274509803922,.8705882352941177],lightyellow:[1,1,.8784313725490196],limegreen:[.19607843137254902,.803921568627451,.19607843137254902],linen:[.9803921568627451,.9411764705882353,.9019607843137255],magenta:[1,0,1],mediumaquamarine:[.4,.803921568627451,.6666666666666666],mediumblue:[0,0,.803921568627451],mediumorchid:[.7294117647058823,.3333333333333333,.8274509803921568],mediumpurple:[.5764705882352941,.4392156862745098,.8588235294117647],mediumseagreen:[.23529411764705882,.7019607843137254,.44313725490196076],mediumslateblue:[.4823529411764706,.40784313725490196,.9333333333333333],mediumspringgreen:[0,.9803921568627451,.6039215686274509],mediumturquoise:[.2823529411764706,.8196078431372549,.8],mediumvioletred:[.7803921568627451,.08235294117647059,.5215686274509804],midnightblue:[.09803921568627451,.09803921568627451,.4392156862745098],mintcream:[.9607843137254902,1,.9803921568627451],mistyrose:[1,.8941176470588236,.8823529411764706],moccasin:[1,.8941176470588236,.7098039215686275],navajowhite:[1,.8705882352941177,.6784313725490196],oldlace:[.9921568627450981,.9607843137254902,.9019607843137255],olivedrab:[.4196078431372549,.5568627450980392,.13725490196078433],orange:[1,.6470588235294118,0],orangered:[1,.27058823529411763,0],orchid:[.8549019607843137,.4392156862745098,.8392156862745098],palegoldenrod:[.9333333333333333,.9098039215686274,.6666666666666666],palegreen:[.596078431372549,.984313725490196,.596078431372549],paleturquoise:[.6862745098039216,.9333333333333333,.9333333333333333],palevioletred:[.8588235294117647,.4392156862745098,.5764705882352941],papayawhip:[1,.9372549019607843,.8352941176470589],peachpuff:[1,.8549019607843137,.7254901960784313],peru:[.803921568627451,.5215686274509804,.24705882352941178],pink:[1,.7529411764705882,.796078431372549],plum:[.8666666666666667,.6274509803921569,.8666666666666667],powderblue:[.6901960784313725,.8784313725490196,.9019607843137255],rosybrown:[.7372549019607844,.5607843137254902,.5607843137254902],royalblue:[.2549019607843137,.4117647058823529,.8823529411764706],saddlebrown:[.5450980392156862,.27058823529411763,.07450980392156863],salmon:[.9803921568627451,.5019607843137255,.4470588235294118],sandybrown:[.9568627450980393,.6431372549019608,.3764705882352941],seagreen:[.1803921568627451,.5450980392156862,.3411764705882353],seashell:[1,.9607843137254902,.9333333333333333],sienna:[.6274509803921569,.3215686274509804,.17647058823529413],skyblue:[.5294117647058824,.807843137254902,.9215686274509803],slateblue:[.41568627450980394,.35294117647058826,.803921568627451],slategray:[.4392156862745098,.5019607843137255,.5647058823529412],slategrey:[.4392156862745098,.5019607843137255,.5647058823529412],snow:[1,.9803921568627451,.9803921568627451],springgreen:[0,1,.4980392156862745],steelblue:[.27450980392156865,.5098039215686274,.7058823529411765],tan:[.8235294117647058,.7058823529411765,.5490196078431373],thistle:[.8470588235294118,.7490196078431373,.8470588235294118],tomato:[1,.38823529411764707,.2784313725490196],turquoise:[.25098039215686274,.8784313725490196,.8156862745098039],violet:[.9333333333333333,.5098039215686274,.9333333333333333],wheat:[.9607843137254902,.8705882352941177,.7019607843137254],whitesmoke:[.9607843137254902,.9607843137254902,.9607843137254902],yellowgreen:[.6039215686274509,.803921568627451,.19607843137254902]};YS.exports=Kz});var $S=E((ste,ZS)=>{var jz=md(),Qz=n=>jz[n.toLowerCase()];ZS.exports=Qz});var KS=E((ote,JS)=>{var eq=n=>{if(n=n.replace("#",""),n.length<6)throw new Error("the given notation must contain 3 or more hex values");let e=parseInt(n.substring(0,2),16)/255,t=parseInt(n.substring(2,4),16)/255,i=parseInt(n.substring(4,6),16)/255;if(n.length>=8){let r=parseInt(n.substring(6,8),16)/255;return[e,t,i,r]}return[e,t,i]};JS.exports=eq});var gd=E((ate,jS)=>{var tq=(n,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?n+(e-n)*6*t:t<.5?e:t<.6666666666666666?n+(e-n)*(.6666666666666666-t)*6:n);jS.exports=tq});var eM=E((cte,QS)=>{var nq=$e(),xd=gd(),iq=(...n)=>{if(n=nq(n),n.length<3)throw new Error("values must contain H, S and L values");let e=n[0],t=n[1],i=n[2],r=i,s=i,o=i;if(t!==0){let a=i<.5?i*(1+t):i+t-i*t,c=2*i-a;r=xd(c,a,e+1/3),s=xd(c,a,e),o=xd(c,a,e-1/3)}if(n.length>3){let a=n[3];return[r,s,o,a]}return[r,s,o]};QS.exports=iq});var nM=E((lte,tM)=>{var rq=$e(),sq=(...n)=>{if(n=rq(n),n.length<3)throw new Error("values must contain H, S and V values");let e=n[0],t=n[1],i=n[2],r=0,s=0,o=0,a=Math.floor(e*6),c=e*6-a,l=i*(1-t),h=i*(1-c*t),u=i*(1-(1-c)*t);switch(a%6){case 0:r=i,s=u,o=l;break;case 1:r=h,s=i,o=l;break;case 2:r=l,s=i,o=u;break;case 3:r=l,s=h,o=i;break;case 4:r=u,s=l,o=i;break;case 5:r=i,s=l,o=h;break}if(n.length>3){let f=n[3];return[r,s,o,f]}return[r,s,o]};tM.exports=sq});var rM=E((hte,iM)=>{var oq=$e(),aq=(...n)=>{if(n=oq(n),n.length<3)throw new Error("values must contain R, G and B values");let e=n[0]*255,t=n[1]*255,i=n[2]*255,r=`#${Number(16777216+e*65536+t*256+i).toString(16).substring(1,7)}`;return n.length>3&&(r=r+Number(n[3]*255).toString(16)),r};iM.exports=aq});var oM=E((ute,sM)=>{var cq=$e(),lq=(...n)=>{if(n=cq(n),n.length<3)throw new Error("values must contain R, G and B values");let e=n[0],t=n[1],i=n[2],r=Math.max(e,t,i),s=Math.min(e,t,i),o,a,c=(r+s)/2;if(r===s)o=a=0;else{let l=r-s;switch(a=c>.5?l/(2-r-s):l/(r+s),r){case e:o=(t-i)/l+(t<i?6:0);break;case t:o=(i-e)/l+2;break;case i:o=(e-t)/l+4;break}o/=6}if(n.length>3){let l=n[3];return[o,a,c,l]}return[o,a,c]};sM.exports=lq});var cM=E((fte,aM)=>{var hq=$e(),uq=(...n)=>{if(n=hq(n),n.length<3)throw new Error("values must contain R, G and B values");let e=n[0],t=n[1],i=n[2],r=Math.max(e,t,i),s=Math.min(e,t,i),o,a=r,c=r-s,l=r===0?0:c/r;if(r===s)o=0;else{switch(r){case e:o=(t-i)/c+(t<i?6:0);break;case t:o=(i-e)/c+2;break;case i:o=(e-t)/c+4;break}o/=6}if(n.length>3){let h=n[3];return[o,l,a,h]}return[o,l,a]};aM.exports=uq});var hM=E((dte,lM)=>{lM.exports={colorize:XS(),colorNameToRgb:$S(),cssColors:md(),hexToRgb:KS(),hslToRgb:eM(),hsvToRgb:nM(),hueToColorComponent:gd(),rgbToHex:rM(),rgbToHsl:oM(),rgbToHsv:cM()}});var dM=E((pte,fM)=>{var fq=n=>{if(!Array.isArray(n))throw new Error("Bezier points must be a valid array/");if(n.length<2)throw new Error("Bezier points must contain at least 2 values.");let e=dq(n);return{points:n,pointType:e,dimensions:e==="float_single"?0:n[0].length,permutations:uM(n.length-1),tangentPermutations:uM(n.length-2)}},dq=function(n){let e=null;return n.forEach(t=>{let i="";if(Number.isFinite(t))i="float_single";else if(Array.isArray(t))t.forEach(r=>{if(!Number.isFinite(r))throw new Error("Bezier point values must all be numbers.")}),i="float_"+t.length;else throw new Error("Bezier points must all be numbers or arrays of number.");if(e==null)e=i;else if(e!==i)throw new Error("Bezier points must be either all numbers or all arrays of numbers of the same size.")}),e},uM=function(n){let e=[];for(let t=0;t<=n;t++)e.push(_d(n)/(_d(t)*_d(n-t)));return e},_d=function(n){let e=1;for(let t=2;t<=n;t++)e*=t;return e};fM.exports=fq});var vd=E((mte,mM)=>{var pq=(n,e)=>{if(n<0||n>1)throw new Error("Bezier valueAt() input must be between 0 and 1");if(e.pointType==="float_single")return pM(e,e.points,n);{let t=[];for(let i=0;i<e.dimensions;i++){let r=[];for(let s=0;s<e.points.length;s++)r.push(e.points[s][i]);t.push(pM(e,r,n))}return t}},pM=function(n,e,t){let i=e.length-1,r=0;for(let s=0;s<=i;s++)r+=n.permutations[s]*Math.pow(1-t,i-s)*Math.pow(t,s)*e[s];return r};mM.exports=pq});var _M=E((gte,xM)=>{var mq=(n,e)=>{if(n<0||n>1)throw new Error("Bezier tangentAt() input must be between 0 and 1");if(e.pointType==="float_single")return gM(e,e.points,n);{let t=[];for(let i=0;i<e.dimensions;i++){let r=[];for(let s=0;s<e.points.length;s++)r.push(e.points[s][i]);t.push(gM(e,r,n))}return t}},gM=function(n,e,t){let i=e.length-1,r=0;for(let s=0;s<i;s++){let o=i*(e[s+1]-e[s]);r+=n.tangentPermutations[s]*Math.pow(1-t,i-1-s)*Math.pow(t,s)*o}return r};xM.exports=mq});var kl=E((xte,yM)=>{var vM=vd(),gq=(n,e)=>{let t=0,i=[0],r=vM(0,e);for(let s=1;s<=n;s++){let o=vM(s/n,e);t+=xq(o,r),i.push(t),r=o}return i},xq=(n,e)=>{if(Number.isFinite(n)&&Number.isFinite(e))return Math.abs(n-e);if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)throw new Error("The operands must have the same number of dimensions.");let t=0;for(let i=0;i<n.length;i++)t+=(e[i]-n[i])*(e[i]-n[i]);return Math.sqrt(t)}else throw new Error("The operands must be of the same type, either number or array.")};yM.exports=gq});var MM=E((_te,SM)=>{var _q=kl(),vq=(n,e)=>_q(n,e)[n];SM.exports=vq});var wM=E((vte,bM)=>{var yq=kl(),Sq=(n,e)=>{let t={distance:0,segments:100},{distance:i,segments:r}=Object.assign({},t,n),s=yq(r,e),o=0,a=r;for(;o<=a;){let d=Math.floor(o+(a-o)/2),g=s[d]-i;if(g<0)o=d+1;else if(g>0)a=d-1;else{a=d;break}}let c=a;if(s[c]===i)return c/r;let l=s[c],u=s[c+1]-l,f=(i-l)/u;return(c+f)/r};bM.exports=Sq});var AM=E((yte,EM)=>{EM.exports={create:dM(),valueAt:vd(),tangentAt:_M(),lengths:kl(),length:MM(),arcLengthToT:wM()}});var CM=E((Ste,TM)=>{TM.exports={bezier:AM()}});var sa=E((Mte,RM)=>{var Mq=n=>{let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t][0]*n[i][1],e-=n[i][0]*n[t][1]}return e/2};RM.exports=Mq});var yd=E((bte,PM)=>{var bq=sa(),wq=n=>bq(n.vertices);PM.exports=wq});var Sd=E((wte,IM)=>{var Eq=n=>((n===void 0||n.length<3)&&(n=[]),{vertices:n});IM.exports=Eq});var Md=E((Ete,LM)=>{var Aq=Sd(),Tq=n=>{let e=n.vertices.slice().reverse();return Aq(e)};LM.exports=Tq});var NM=E((Ate,DM)=>{var Cq=yd(),Rq=Md(),Pq=(n,e)=>{if(n.length===0)return 0;let t=e.vertices;return t.length<3?0:(Cq(e)<0&&(e=Rq(e)),n.reduce((r,s)=>r+Iq(s,t),0)===n.length?1:0)},Iq=(n,e)=>{let t=e.length,i=n[0],r=n[1],s=e[t-1],o=e[0],a=s[1]>r,c=0,l=0;for(let h=t+1;--h;){let u=o[1]>r;if(a!==u){let f=s[0]>i,d=o[0]>i;(f&&d||o[0]-(o[1]-r)*(s[0]-o[0])/(s[1]-o[1])>=i)&&(c=!c)}a=u,s=o,o=e[++l]}return c};DM.exports=Pq});var Vl=E((Tte,UM)=>{UM.exports={arePointsInside:NM(),create:Sd(),flip:Md(),measureArea:yd()}});var Gl=E((Cte,FM)=>{FM.exports={geom2:et(),geom3:Ke(),path2:Mt(),poly2:Vl(),poly3:st()}});var Hl=E((Rte,OM)=>{var Lq=()=>[0,1,0];OM.exports=Lq});var zM=E((Pte,BM)=>{var Dq=Hl(),Nq=n=>{let e=Dq();return e[0]=n[0],e[1]=n[1],e[2]=n[2],e};BM.exports=Nq});var Wl=E((Ite,qM)=>{var bd=rt(),Uq=n=>{let e=bd.normal(bd.create(),n);return bd.negate(e,e),e};qM.exports=Uq});var oa=E((Lte,VM)=>{var kM=rt(),Fq=n=>kM.scale(kM.create(),n,n[2]);VM.exports=Fq});var HM=E((Dte,GM)=>{var aa=rt(),Oq=Wl(),Bq=oa(),zq=(n,e)=>{let t=Bq(n),i=Oq(n),r=aa.subtract(aa.create(),e,t),s=aa.dot(r,i);return aa.scale(r,i,s),aa.add(r,r,t),r};GM.exports=zq});var wd=E((Nte,WM)=>{var qq=(n,e)=>(n[0]=e[0],n[1]=e[1],n[2]=e[2],n);WM.exports=qq});var YM=E((Ute,XM)=>{var kq=rt(),Vq=(n,e)=>{let t=kq.dot(e,n);return t=Math.abs(t-n[2]),t};XM.exports=Vq});var $M=E((Fte,ZM)=>{var Gq=(n,e)=>n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2];ZM.exports=Gq});var Ed=E((Ote,JM)=>{var ca=rt(),Hq=(n,e,t)=>{let i=ca.subtract(ca.create(),t,e);ca.normal(i,i),ca.normalize(i,i);let r=ca.dot(e,i);return n[0]=i[0],n[1]=i[1],n[2]=r,n};JM.exports=Hq});var Ad=E((Bte,KM)=>{var Wq=Hl(),Xq=(n,e,t)=>{let i=Wq();return i[0]=n,i[1]=e,i[2]=t,i};KM.exports=Xq});var Xl=E((zte,jM)=>{var{NEPS:Td}=ct(),Yq=(n,e)=>Math.abs(n[0]-e[0])<=Td&&Math.abs(n[1]-e[1])<=Td&&Math.abs(n[2]-e[2])<=Td;jM.exports=Yq});var Cd=E((qte,QM)=>{var Zq=(n,e,t)=>{let i=t-n[1],r=e[1]-n[1];r<0&&(i=-i,r=-r);let s;return i<=0?s=0:i>=r?s=1:r<1e-10?s=.5:s=i/r,n[0]+s*(e[0]-n[0])};QM.exports=Zq});var Rd=E((kte,eb)=>{var $q=(n,e,t,i)=>{if(n[0]===e[0]&&n[1]===e[1]||t[0]===i[0]&&t[1]===i[1])return;let r=(i[1]-t[1])*(e[0]-n[0])-(i[0]-t[0])*(e[1]-n[1]);if(Math.abs(r)<Number.MIN_VALUE)return;let s=((i[0]-t[0])*(n[1]-t[1])-(i[1]-t[1])*(n[0]-t[0]))/r,o=((e[0]-n[0])*(n[1]-t[1])-(e[1]-n[1])*(n[0]-t[0]))/r;if(s<0||s>1||o<0||o>1)return;let a=n[0]+s*(e[0]-n[0]),c=n[1]+s*(e[1]-n[1]);return[a,c]};eb.exports=$q});var nb=E((Vte,tb)=>{var Jq=(n,e,t,i,r,s)=>{let a=1/(n*i-e*t),c=r*i-e*s,l=-r*t+n*s;return c*=a,l*=a,[c,l]};tb.exports=Jq});var Ls=E((Gte,ib)=>{ib.exports={aboutEqualNormals:Xl(),area:sa(),cos:$t().cos,interpolateBetween2DPointsForY:Cd(),intersect:Rd(),sin:$t().sin,solve2Linear:nb()}});var sb=E((Hte,rb)=>{var Kq=rt(),{solve2Linear:jq}=Ls(),Qq=(n,e)=>{let t=jq(n[0],n[1],e[0],e[1],n[2],e[2]);return Kq.clone(t)};rb.exports=Qq});var cb=E((Wte,ab)=>{var ob=rt(),ek=wd(),tk=Ad(),nk=(n,e)=>{let t=ob.negate(ob.create(),e),i=-e[2];return ek(n,tk(t[0],t[1],i))};ab.exports=nk});var hb=E((Xte,lb)=>{var ik=n=>`line2: (${n[0].toFixed(7)}, ${n[1].toFixed(7)}, ${n[2].toFixed(7)})`;lb.exports=ik});var db=E((Yte,fb)=>{var ub=rt(),rk=Ed(),sk=oa(),ok=Wl(),ak=(n,e,t)=>{let i=sk(e),r=ok(e);return ub.transform(i,i,t),ub.transform(r,r,t),rk(n,i,r)};fb.exports=ak});var mb=E((Zte,pb)=>{var ck=oa(),lk=(n,e)=>{let t=(n[2]-n[1]*e)/n[0];return Number.isNaN(t)&&(t=ck(n)[0]),t};pb.exports=lk});var Yl=E(($te,gb)=>{gb.exports={clone:zM(),closestPoint:HM(),copy:wd(),create:Hl(),direction:Wl(),distanceToPoint:YM(),equals:$M(),fromPoints:Ed(),fromValues:Ad(),intersectPointOfLines:sb(),origin:oa(),reverse:cb(),toString:hb(),transform:db(),xAtY:mb()}});var Pd=E((Jte,_b)=>{var xb=Ue(),hk=()=>[xb.fromValues(0,0,0),xb.fromValues(0,0,1)];_b.exports=hk});var Sb=E((Kte,yb)=>{var vb=Ue(),uk=Pd(),fk=n=>{let e=uk();return vb.copy(e[0],n[0]),vb.copy(e[1],n[1]),e};yb.exports=fk});var Id=E((jte,Mb)=>{var Nr=Ue(),dk=(n,e)=>{let t=n[0],i=n[1],r=Nr.dot(Nr.subtract(Nr.create(),e,t),i),s=Nr.dot(i,i),o=r/s,a=Nr.scale(Nr.create(),i,o);return Nr.add(a,a,t),a};Mb.exports=dk});var Eb=E((Qte,wb)=>{var bb=Ue(),pk=(n,e)=>(bb.copy(n[0],e[0]),bb.copy(n[1],e[1]),n);wb.exports=pk});var Tb=E((ene,Ab)=>{var mk=n=>n[1];Ab.exports=mk});var Rb=E((tne,Cb)=>{var Ld=Ue(),gk=Id(),xk=(n,e)=>{let t=gk(n,e),i=Ld.subtract(Ld.create(),e,t);return Ld.length(i)};Cb.exports=xk});var Lb=E((nne,Ib)=>{var Pb=Ue(),_k=(n,e)=>!(!Pb.equals(n[1],e[1])||!Pb.equals(n[0],e[0]));Ib.exports=_k});var Ds=E((ine,Db)=>{var Zl=Ue(),vk=(n,e,t)=>{let i=Zl.normalize(Zl.create(),t);return Zl.copy(n[0],e),Zl.copy(n[1],i),n};Db.exports=vk});var Ub=E((rne,Nb)=>{var Ur=Ue(),{solve2Linear:Dd}=Ls(),{EPS:yk}=ct(),Sk=Ds(),Mk=(n,e,t)=>{let i=Ur.cross(Ur.create(),e,t),r=Ur.length(i);if(r<yk)throw new Error("parallel planes do not intersect");r=1/r,i=Ur.scale(i,i,r);let s=Math.abs(i[0]),o=Math.abs(i[1]),a=Math.abs(i[2]),c,l;return s>=o&&s>=a?(l=Dd(e[1],e[2],t[1],t[2],e[3],t[3]),c=Ur.fromValues(0,l[0],l[1])):o>=s&&o>=a?(l=Dd(e[0],e[2],t[0],t[2],e[3],t[3]),c=Ur.fromValues(l[0],0,l[1])):(l=Dd(e[0],e[1],t[0],t[1],e[3],t[3]),c=Ur.fromValues(l[0],l[1],0)),Sk(n,c,i)};Nb.exports=Mk});var Bb=E((sne,Ob)=>{var Fb=Ue(),bk=Ds(),wk=(n,e,t)=>{let i=Fb.subtract(Fb.create(),t,e);return bk(n,e,i)};Ob.exports=wk});var qb=E((one,zb)=>{var Ns=Ue(),Ek=(n,e)=>{let t=e,i=e[3],r=n[0],s=n[1],o=(i-Ns.dot(t,r))/Ns.dot(t,s);return Ns.add(Ns.create(),r,Ns.scale(Ns.create(),s,o))};zb.exports=Ek});var Vb=E((ane,kb)=>{var Ak=n=>n[0];kb.exports=Ak});var Hb=E((cne,Gb)=>{var Nd=Ue(),Tk=Ds(),Ck=(n,e)=>{let t=Nd.clone(e[0]),i=Nd.negate(Nd.create(),e[1]);return Tk(n,t,i)};Gb.exports=Ck});var Xb=E((lne,Wb)=>{var Rk=n=>{let e=n[0],t=n[1];return`line3: point: (${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)}) direction: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`};Wb.exports=Rk});var Zb=E((hne,Yb)=>{var Us=Ue(),Pk=Ds(),Ik=(n,e,t)=>{let i=e[0],r=e[1],s=Us.add(Us.create(),i,r),o=Us.transform(Us.create(),i,t),a=Us.transform(s,s,t),c=Us.subtract(a,a,o);return Pk(n,o,c)};Yb.exports=Ik});var Jb=E((une,$b)=>{$b.exports={clone:Sb(),closestPoint:Id(),copy:Eb(),create:Pd(),direction:Tb(),distanceToPoint:Rb(),equals:Lb(),fromPlanes:Ub(),fromPointAndDirection:Ds(),fromPoints:Bb(),intersectPointOfLineAndPlane:qb(),origin:Vb(),reverse:Hb(),toString:Xb(),transform:Zb()}});var jb=E((fne,Kb)=>{Kb.exports={constants:ct(),line2:Yl(),line3:Jb(),mat4:bt(),plane:Zn(),utils:Ls(),vec2:rt(),vec3:Ue(),vec4:ld()}});var Ud=E((dne,tw)=>{var Lk=$e(),Qb=et(),ew=Ke(),Dk=Mt(),Nk=st(),$l=new WeakMap,Uk=()=>0,Fk=n=>{let e=$l.get(n);return e||(e=Qb.toSides(n).reduce((i,r)=>i+(r[0][0]*r[1][1]-r[0][1]*r[1][0]),0),e*=.5,$l.set(n,e),e)},Ok=n=>{let e=$l.get(n);return e||(e=ew.toPolygons(n).reduce((i,r)=>i+Nk.measureArea(r),0),$l.set(n,e),e)},Bk=(...n)=>{if(n=Lk(n),n.length===0)throw new Error("wrong number of arguments");let e=n.map(t=>Dk.isA(t)?Uk(t):Qb.isA(t)?Fk(t):ew.isA(t)?Ok(t):0);return e.length===1?e[0]:e};tw.exports=Bk});var iw=E((pne,nw)=>{var zk=$e(),qk=Ud(),kk=(...n)=>{if(n=zk(n),n.length===0)throw new Error("measureAggregateArea: no geometries supplied");let e=qk(n);return n.length===1?e:e.reduce((i,r)=>i+r,0)};nw.exports=kk});var rr=E((mne,cw)=>{var Vk=$e(),ai=rt(),la=Ue(),sw=et(),ow=Ke(),aw=Mt(),rw=st(),Fs=new WeakMap,Gk=n=>{let e=Fs.get(n);if(e)return e;let t=aw.toPoints(n),i;t.length===0?i=ai.create():i=ai.clone(t[0]);let r=ai.clone(i);return t.forEach(s=>{ai.min(i,i,s),ai.max(r,r,s)}),i=[i[0],i[1],0],r=[r[0],r[1],0],e=[i,r],Fs.set(n,e),e},Hk=n=>{let e=Fs.get(n);if(e)return e;let t=sw.toPoints(n),i;t.length===0?i=ai.create():i=ai.clone(t[0]);let r=ai.clone(i);return t.forEach(s=>{ai.min(i,i,s),ai.max(r,r,s)}),i=[i[0],i[1],0],r=[r[0],r[1],0],e=[i,r],Fs.set(n,e),e},Wk=n=>{let e=Fs.get(n);if(e)return e;let t=ow.toPolygons(n),i=la.create();if(t.length>0){let s=rw.toPoints(t[0]);la.copy(i,s[0])}let r=la.clone(i);return t.forEach(s=>{rw.toPoints(s).forEach(o=>{la.min(i,i,o),la.max(r,r,o)})}),i=[i[0],i[1],i[2]],r=[r[0],r[1],r[2]],e=[i,r],Fs.set(n,e),e},Xk=(...n)=>{if(n=Vk(n),n.length===0)throw new Error("wrong number of arguments");let e=n.map(t=>aw.isA(t)?Gk(t):sw.isA(t)?Hk(t):ow.isA(t)?Wk(t):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};cw.exports=Xk});var Jl=E((gne,lw)=>{var Yk=$e(),Zk=Tf(),$k=Af(),Jk=rr(),Kk=(...n)=>{if(n=Yk(n),n.length===0)throw new Error("measureAggregateBoundingBox: no geometries supplied");let e=Jk(n);if(n.length===1)return e;let t=[[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]];return e.reduce((i,r)=>(i=[Zk(i[0],i[0],r[0]),$k(i[1],i[1],r[1])],i),t)};lw.exports=Kk});var Fd=E((xne,hw)=>{var{EPS:jk}=ct(),Qk=(n,e)=>{let t=0;for(let i=0;i<e;i++)t+=n[1][i]-n[0][i];return jk*t/e};hw.exports=Qk});var fw=E((_ne,uw)=>{var eV=$e(),tV=Jl(),nV=Fd(),{geom2:iV,geom3:rV,path2:sV}=Gl(),oV=(...n)=>{if(n=eV(n),n.length===0)throw new Error("measureAggregateEpsilon: no geometries supplied");let e=tV(n),t=0;return t=n.reduce((i,r)=>sV.isA(r)||iV.isA(r)?Math.max(i,2):rV.isA(r)?Math.max(i,3):0,t),nV(e,t)};uw.exports=oV});var Od=E((vne,mw)=>{var aV=$e(),cV=et(),pw=Ke(),lV=Mt(),hV=st(),dw=new WeakMap,uV=()=>0,fV=()=>0,dV=n=>{let e=dw.get(n);return e||(e=pw.toPolygons(n).reduce((i,r)=>i+hV.measureSignedVolume(r),0),dw.set(n,e),e)},pV=(...n)=>{if(n=aV(n),n.length===0)throw new Error("wrong number of arguments");let e=n.map(t=>lV.isA(t)?uV(t):cV.isA(t)?fV(t):pw.isA(t)?dV(t):0);return e.length===1?e[0]:e};mw.exports=pV});var xw=E((yne,gw)=>{var mV=$e(),gV=Od(),xV=(...n)=>{if(n=mV(n),n.length===0)throw new Error("measureAggregateVolume: no geometries supplied");let e=gV(n);return n.length===1?e:e.reduce((i,r)=>i+r,0)};gw.exports=xV});var ww=E((Sne,bw)=>{var _V=$e(),vw=rt(),yn=Ue(),yw=et(),Sw=Ke(),Mw=Mt(),_w=st(),Os=new WeakMap,vV=n=>{let e=Os.get(n);if(e!==void 0)return e;let t=yn.create(),i=0,r=Mw.toPoints(n);if(r.length>0){let s=0,o=yn.create();r.forEach(a=>{yn.add(t,t,yn.fromVec2(o,a,0)),s++}),yn.scale(t,t,1/s),r.forEach(a=>{i=Math.max(i,vw.squaredDistance(t,a))}),i=Math.sqrt(i)}return e=[t,i],Os.set(n,e),e},yV=n=>{let e=Os.get(n);if(e!==void 0)return e;let t=yn.create(),i=0,r=yw.toSides(n);if(r.length>0){let s=0,o=yn.create();r.forEach(a=>{yn.add(t,t,yn.fromVec2(o,a[0],0)),s++}),yn.scale(t,t,1/s),r.forEach(a=>{i=Math.max(i,vw.squaredDistance(t,a[0]))}),i=Math.sqrt(i)}return e=[t,i],Os.set(n,e),e},SV=n=>{let e=Os.get(n);if(e!==void 0)return e;let t=yn.create(),i=0,r=Sw.toPolygons(n);if(r.length>0){let s=0;r.forEach(o=>{_w.toPoints(o).forEach(a=>{yn.add(t,t,a),s++})}),yn.scale(t,t,1/s),r.forEach(o=>{_w.toPoints(o).forEach(a=>{i=Math.max(i,yn.squaredDistance(t,a))})}),i=Math.sqrt(i)}return e=[t,i],Os.set(n,e),e},MV=(...n)=>{n=_V(n);let e=n.map(t=>Mw.isA(t)?vV(t):yw.isA(t)?yV(t):Sw.isA(t)?SV(t):[[0,0,0],0]);return e.length===1?e[0]:e};bw.exports=MV});var Aw=E((Mne,Ew)=>{var bV=$e(),wV=rr(),EV=(...n)=>{n=bV(n);let e=n.map(t=>{let i=wV(t);return[i[0][0]+(i[1][0]-i[0][0])/2,i[0][1]+(i[1][1]-i[0][1])/2,i[0][2]+(i[1][2]-i[0][2])/2]});return e.length===1?e[0]:e};Ew.exports=EV});var Pw=E((bne,Rw)=>{var AV=$e(),ci=Ue(),Tw=et(),Cw=Ke(),Kl=new WeakMap,TV=n=>{let e=Kl.get(n);if(e!==void 0)return e;let t=Tw.toSides(n),i=0,r=0,s=0;if(t.length>0){for(let a=0;a<t.length;a++){let c=t[a][0],l=t[a][1],h=c[0]*l[1]-c[1]*l[0];i+=h,r+=(c[0]+l[0])*h,s+=(c[1]+l[1])*h}i/=2;let o=1/(i*6);r*=o,s*=o}return e=ci.fromValues(r,s,0),Kl.set(n,e),e},CV=n=>{let e=Kl.get(n);if(e!==void 0)return e;e=ci.create();let t=Cw.toPolygons(n);if(t.length===0)return e;let i=0,r=ci.create();return t.forEach(s=>{let o=s.vertices;for(let a=0;a<o.length-2;a++){ci.cross(r,o[a+1],o[a+2]);let c=ci.dot(o[0],r)/6;i+=c,ci.add(r,o[0],o[a+1]),ci.add(r,r,o[a+2]);let l=ci.scale(r,r,1/4*c);ci.add(e,e,l)}}),ci.scale(e,e,1/i),Kl.set(n,e),e},RV=(...n)=>{n=AV(n);let e=n.map(t=>Tw.isA(t)?TV(t):Cw.isA(t)?CV(t):[0,0,0]);return e.length===1?e[0]:e};Rw.exports=RV});var Lw=E((wne,Iw)=>{var PV=$e(),IV=rr(),LV=(...n)=>{n=PV(n);let e=n.map(t=>{let i=IV(t);return[i[1][0]-i[0][0],i[1][1]-i[0][1],i[1][2]-i[0][2]]});return e.length===1?e[0]:e};Iw.exports=LV});var Li=E((Ene,Dw)=>{var DV=$e(),{geom2:NV,geom3:UV,path2:FV}=Gl(),Bd=Fd(),zd=rr(),OV=n=>Bd(zd(n),2),BV=n=>Bd(zd(n),2),zV=n=>Bd(zd(n),3),qV=(...n)=>{if(n=DV(n),n.length===0)throw new Error("wrong number of arguments");let e=n.map(t=>FV.isA(t)?OV(t):NV.isA(t)?BV(t):UV.isA(t)?zV(t):0);return e.length===1?e[0]:e};Dw.exports=qV});var Uw=E((Ane,Nw)=>{Nw.exports={measureAggregateArea:iw(),measureAggregateBoundingBox:Jl(),measureAggregateEpsilon:fw(),measureAggregateVolume:xw(),measureArea:Ud(),measureBoundingBox:rr(),measureBoundingSphere:ww(),measureCenter:Aw(),measureCenterOfMass:Pw(),measureDimensions:Lw(),measureEpsilon:Li(),measureVolume:Od()}});var qt=E((Tne,Fw)=>{var kV=(n,e)=>Array.isArray(n)&&n.length>=e?n.every(t=>Number.isFinite(t)):!1,VV=(n,e)=>Number.isFinite(n)&&n>e,GV=(n,e)=>Number.isFinite(n)&&n>=e;Fw.exports={isNumberArray:kV,isGT:VV,isGTE:GV}});var zw=E((Cne,Bw)=>{var{EPS:Ow,TAU:Bs}=ct(),Di=rt(),HV=Mt(),{isGT:WV,isGTE:qd,isNumberArray:XV}=qt(),YV=n=>{let e={center:[0,0],radius:1,startAngle:0,endAngle:Bs,makeTangent:!1,segments:32},{center:t,radius:i,startAngle:r,endAngle:s,makeTangent:o,segments:a}=Object.assign({},e,n);if(!XV(t,2))throw new Error("center must be an array of X and Y values");if(!WV(i,0))throw new Error("radius must be greater than zero");if(!qd(r,0))throw new Error("startAngle must be positive");if(!qd(s,0))throw new Error("endAngle must be positive");if(!qd(a,4))throw new Error("segments must be four or more");r=r%Bs,s=s%Bs;let c=Bs;r<s&&(c=s-r),r>s&&(c=s+(Bs-r));let l=Math.acos((i*i+i*i-Ow*Ow)/(2*i*i)),h=Di.clone(t),u,f=[];if(c<l)u=Di.fromAngleRadians(Di.create(),r),Di.scale(u,u,i),Di.add(u,u,h),f.push(u);else{let d=Math.floor(a*(Math.abs(c)/Bs)),g=d*.5/c;g>.25&&(g=.25);let _=o?d+2:d;for(let p=0;p<=_;p++){let m=p;o&&(m=(p-1)*(d-2*g)/d+g,m<0&&(m=0),m>d&&(m=d));let v=r+m*(c/d);u=Di.fromAngleRadians(Di.create(),v),Di.scale(u,u,i),Di.add(u,u,h),f.push(u)}}return HV.fromPoints({closed:!1},f)};Bw.exports=YV});var Gd=E((Rne,Gw)=>{var{EPS:qw,TAU:sr}=ct(),kd=rt(),kw=et(),{sin:ZV,cos:$V}=$t(),{isGTE:Vd,isNumberArray:Vw}=qt(),JV=n=>{let e={center:[0,0],radius:[1,1],startAngle:0,endAngle:sr,segments:32},{center:t,radius:i,startAngle:r,endAngle:s,segments:o}=Object.assign({},e,n);if(!Vw(t,2))throw new Error("center must be an array of X and Y values");if(!Vw(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!Vd(r,0))throw new Error("startAngle must be positive");if(!Vd(s,0))throw new Error("endAngle must be positive");if(!Vd(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return kw.create();r=r%sr,s=s%sr;let a=sr;r<s&&(a=s-r),r>s&&(a=s+(sr-r));let c=Math.min(i[0],i[1]),l=Math.acos((c*c+c*c-qw*qw)/(2*c*c));if(a<l)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/sr));let h=kd.clone(t),u=a/o,f=[];o=a<sr?o+1:o;for(let d=0;d<o;d++){let g=u*d+r,_=kd.fromValues(i[0]*$V(g),i[1]*ZV(g));kd.add(_,h,_),f.push(_)}return a<sr&&f.push(h),kw.fromPoints(f)};Gw.exports=JV});var Hd=E((Pne,Hw)=>{var{TAU:KV}=ct(),jV=Gd(),{isGTE:QV}=qt(),eG=n=>{let e={center:[0,0],radius:1,startAngle:0,endAngle:KV,segments:32},{center:t,radius:i,startAngle:r,endAngle:s,segments:o}=Object.assign({},e,n);if(!QV(i,0))throw new Error("radius must be positive");return i=[i,i],jV({center:t,radius:i,startAngle:r,endAngle:s,segments:o})};Hw.exports=eG});var jl=E((Ine,Yw)=>{var Ww=Ke(),tG=st(),{isNumberArray:Xw}=qt(),nG=n=>{let e={center:[0,0,0],size:[2,2,2]},{center:t,size:i}=Object.assign({},e,n);if(!Xw(t,3))throw new Error("center must be an array of X, Y and Z values");if(!Xw(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(s=>s>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?Ww.create():Ww.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(s=>{let o=s[0].map(a=>[t[0]+i[0]/2*(2*!!(a&1)-1),t[1]+i[1]/2*(2*!!(a&2)-1),t[2]+i[2]/2*(2*!!(a&4)-1)]);return tG.create(o)}))};Yw.exports=nG});var $w=E((Lne,Zw)=>{var iG=jl(),{isGTE:rG}=qt(),sG=n=>{let e={center:[0,0,0],size:2},{center:t,size:i}=Object.assign({},e,n);if(!rG(i,0))throw new Error("size must be positive");return i=[i,i,i],iG({center:t,size:i})};Zw.exports=sG});var Yd=E((Dne,Kw)=>{var{EPS:Jw,TAU:or}=ct(),Jt=Ue(),oG=Ke(),aG=st(),{sin:cG,cos:lG}=$t(),{isGT:hG,isGTE:Wd,isNumberArray:Xd}=qt(),uG=n=>{let e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:or,segments:32},{center:t,height:i,startRadius:r,startAngle:s,endRadius:o,endAngle:a,segments:c}=Object.assign({},e,n);if(!Xd(t,3))throw new Error("center must be an array of X, Y and Z values");if(!hG(i,0))throw new Error("height must be greater then zero");if(!Xd(r,2))throw new Error("startRadius must be an array of X and Y values");if(!r.every(P=>P>=0))throw new Error("startRadius values must be positive");if(!Xd(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(P=>P>=0))throw new Error("endRadius values must be positive");if(o.every(P=>P===0)&&r.every(P=>P===0))throw new Error("at least one radius must be positive");if(!Wd(s,0))throw new Error("startAngle must be positive");if(!Wd(a,0))throw new Error("endAngle must be positive");if(!Wd(c,4))throw new Error("segments must be four or more");s=s%or,a=a%or;let l=or;s<a&&(l=a-s),s>a&&(l=a+(or-s));let h=Math.min(r[0],r[1],o[0],o[1]),u=Math.acos((h*h+h*h-Jw*Jw)/(2*h*h));if(l<u)throw new Error("startAngle and endAngle do not define a significant rotation");let f=Math.floor(c*(l/or)),d=Jt.fromValues(0,0,-(i/2)),g=Jt.fromValues(0,0,i/2),_=Jt.subtract(Jt.create(),g,d),p=Jt.fromValues(1,0,0),m=Jt.fromValues(0,1,0),v=Jt.create(),A=Jt.create(),M=Jt.create(),y=(P,R,L)=>{let D=R*l+s;return Jt.scale(v,p,L[0]*lG(D)),Jt.scale(A,m,L[1]*cG(D)),Jt.add(v,v,A),Jt.scale(M,_,P),Jt.add(M,M,d),Jt.add(Jt.create(),v,M)},b=(...P)=>{let R=P.map(L=>Jt.add(Jt.create(),L,t));return aG.create(R)},x=[];for(let P=0;P<f;P++){let R=P/f,L=(P+1)/f;l===or&&P===f-1&&(L=0),o[0]===r[0]&&o[1]===r[1]?(x.push(b(d,y(0,L,o),y(0,R,o))),x.push(b(y(0,L,o),y(1,L,o),y(1,R,o),y(0,R,o))),x.push(b(g,y(1,R,o),y(1,L,o)))):(r[0]>0&&r[1]>0&&x.push(b(d,y(0,L,r),y(0,R,r))),(r[0]>0||r[1]>0)&&x.push(b(y(0,R,r),y(0,L,r),y(1,R,o))),o[0]>0&&o[1]>0&&x.push(b(g,y(1,R,o),y(1,L,o))),(o[0]>0||o[1]>0)&&x.push(b(y(1,R,o),y(0,L,r),y(1,L,o))))}return l<or&&(x.push(b(d,y(0,0,r),g)),x.push(b(y(0,0,r),y(1,0,o),g)),x.push(b(d,g,y(0,1,r))),x.push(b(y(0,1,r),g,y(1,1,o)))),oG.create(x)};Kw.exports=uG});var Zd=E((Nne,jw)=>{var fG=Ke(),dG=Yd(),{isGTE:pG}=qt(),mG=n=>{let e={center:[0,0,0],height:2,radius:1,segments:32},{center:t,height:i,radius:r,segments:s}=Object.assign({},e,n);if(!pG(r,0))throw new Error("radius must be positive");return i===0||r===0?fG.create():dG({center:t,height:i,startRadius:[r,r],endRadius:[r,r],segments:s})};jw.exports=mG});var $d=E((Une,s2)=>{var{TAU:Qw}=ct(),ze=Ue(),e2=Ke(),t2=st(),{sin:n2,cos:i2}=$t(),{isGTE:gG,isNumberArray:r2}=qt(),xG=n=>{let e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:t,radius:i,segments:r,axes:s}=Object.assign({},e,n);if(!r2(t,3))throw new Error("center must be an array of X, Y and Z values");if(!r2(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(g=>g>=0))throw new Error("radius values must be positive");if(!gG(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return e2.create();let o=ze.scale(ze.create(),ze.normalize(ze.create(),s[0]),i[0]),a=ze.scale(ze.create(),ze.normalize(ze.create(),s[1]),i[1]),c=ze.scale(ze.create(),ze.normalize(ze.create(),s[2]),i[2]),l=Math.round(r/4),h,u=[],f=ze.create(),d=ze.create();for(let g=0;g<=r;g++){let _=Qw*g/r,p=ze.add(ze.create(),ze.scale(f,o,i2(_)),ze.scale(d,a,n2(_)));if(g>0){let m,v;for(let A=0;A<=l;A++){let M=Qw/4*A/l,y=i2(M),b=n2(M);if(A>0){let x=[],w;w=ze.subtract(ze.create(),ze.scale(f,h,m),ze.scale(d,c,v)),x.push(ze.add(w,w,t)),w=ze.subtract(ze.create(),ze.scale(f,p,m),ze.scale(d,c,v)),x.push(ze.add(w,w,t)),A<l&&(w=ze.subtract(ze.create(),ze.scale(f,p,y),ze.scale(d,c,b)),x.push(ze.add(w,w,t))),w=ze.subtract(ze.create(),ze.scale(f,h,y),ze.scale(d,c,b)),x.push(ze.add(w,w,t)),u.push(t2.create(x)),x=[],w=ze.add(ze.create(),ze.scale(f,h,m),ze.scale(d,c,v)),x.push(ze.add(ze.create(),t,w)),w=ze.add(w,ze.scale(f,p,m),ze.scale(d,c,v)),x.push(ze.add(ze.create(),t,w)),A<l&&(w=ze.add(w,ze.scale(f,p,y),ze.scale(d,c,b)),x.push(ze.add(ze.create(),t,w))),w=ze.add(w,ze.scale(f,h,y),ze.scale(d,c,b)),x.push(ze.add(ze.create(),t,w)),x.reverse(),u.push(t2.create(x))}m=y,v=b}}h=p}return e2.create(u)};s2.exports=xG});var Jd=E((Fne,a2)=>{var _G=Ke(),vG=st(),{isNumberArray:o2}=qt(),yG=n=>{let e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:t,faces:i,colors:r,orientation:s}=Object.assign({},e,n);if(!(Array.isArray(t)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(t.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(r){if(!Array.isArray(r))throw new Error("colors must be an array");if(r.length!==i.length)throw new Error("faces and colors must have the same length")}t.forEach((a,c)=>{if(!o2(a,3))throw new Error(`point ${c} must be an array of X, Y, Z values`)}),i.forEach((a,c)=>{if(a.length<3)throw new Error(`face ${c} must contain 3 or more indexes`);if(!o2(a,a.length))throw new Error(`face ${c} must be an array of numbers`)}),s!=="outward"&&i.forEach(a=>a.reverse());let o=i.map((a,c)=>{let l=vG.create(a.map(h=>t[h]));return r&&r[c]&&(l.color=r[c]),l});return _G.create(o)};a2.exports=yG});var d2=E((One,f2)=>{var c2=bt(),l2=Ue(),h2=Ke(),SG=Jd(),{isGTE:u2}=qt(),MG=n=>{let e={radius:1,frequency:6},{radius:t,frequency:i}=Object.assign({},e,n);if(!u2(t,0))throw new Error("radius must be positive");if(!u2(i,6))throw new Error("frequency must be six or more");if(t===0)return h2.create();i=Math.floor(i/6);let r=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],s=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(f,d,g)=>{let _=f[0],p=f[1],m=f[2],v=g,A=[],M=[];for(let y=0;y<d;y++)for(let b=0;b<d-y;b++){let x=y/d,w=(y+1)/d,P=b/(d-y),R=(b+1)/(d-y),L=d-y-1?b/(d-y-1):1,D=[];D[0]=a(a(_,p,P),m,x),D[1]=a(a(_,p,R),m,x),D[2]=a(a(_,p,L),m,w);for(let z=0;z<3;z++){let I=l2.length(D[z]);for(let q=0;q<3;q++)D[z][q]/=I}if(A.push(D[0],D[1],D[2]),M.push([v,v+1,v+2]),v+=3,b<d-y-1){let z=d-y-1?(b+1)/(d-y-1):1;D[0]=a(a(_,p,R),m,x),D[1]=a(a(_,p,z),m,w),D[2]=a(a(_,p,L),m,w);for(let I=0;I<3;I++){let q=l2.length(D[I]);for(let F=0;F<3;F++)D[I][F]/=q}A.push(D[0],D[1],D[2]),M.push([v,v+1,v+2]),v+=3}}return{points:A,triangles:M,offset:v}},a=(f,d,g)=>{let _=1-g,p=[];for(let m=0;m<3;m++)p[m]=f[m]*_+d[m]*g;return p},c=[],l=[],h=0;for(let f=0;f<s.length;f++){let d=o([r[s[f][0]],r[s[f][1]],r[s[f][2]]],i,h);c=c.concat(d.points),l=l.concat(d.triangles),h=d.offset}let u=SG({points:c,faces:l,orientation:"inward"});return t!==1&&(u=h2.transform(c2.fromScaling(c2.create(),[t,t,t]),u)),u};f2.exports=MG});var m2=E((Bne,p2)=>{var bG=Mt(),wG=n=>{if(!Array.isArray(n))throw new Error("points must be an array");return bG.fromPoints({},n)};p2.exports=wG});var x2=E((zne,g2)=>{var Ql=et(),EG=n=>{let e={points:[],paths:[],orientation:"counterclockwise"},{points:t,paths:i,orientation:r}=Object.assign({},e,n);if(!(Array.isArray(t)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let s=t;Array.isArray(t[0])&&(Array.isArray(t[0][0])||(s=[t])),s.forEach((h,u)=>{if(!Array.isArray(h))throw new Error("list of points "+u+" must be an array");if(h.length<3)throw new Error("list of points "+u+" must contain three or more points");h.forEach((f,d)=>{if(!Array.isArray(f))throw new Error("list of points "+u+", point "+d+" must be an array");if(f.length<2)throw new Error("list of points "+u+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let h=0;o=s.map(u=>u.map(f=>h++))}let a=[];s.forEach(h=>h.forEach(u=>a.push(u)));let c=[];o.forEach(h=>{let u=h.map(d=>a[d]),f=Ql.fromPoints(u);c=c.concat(Ql.toSides(f))});let l=Ql.create(c);return r==="clockwise"&&(l=Ql.reverse(l)),l};g2.exports=EG});var eh=E((qne,y2)=>{var ar=rt(),_2=et(),{isNumberArray:v2}=qt(),AG=n=>{let e={center:[0,0],size:[2,2]},{center:t,size:i}=Object.assign({},e,n);if(!v2(t,2))throw new Error("center must be an array of X and Y values");if(!v2(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return _2.create();let r=[i[0]/2,i[1]/2],s=[r[0],-r[1]],o=[ar.subtract(ar.create(),t,r),ar.add(ar.create(),t,s),ar.add(ar.create(),t,r),ar.subtract(ar.create(),t,s)];return _2.fromPoints(o)};y2.exports=AG});var C2=E((kne,T2)=>{var{EPS:th,TAU:ha}=ct(),Kd=rt(),Ft=Ue(),S2=Ke(),zs=st(),{sin:TG,cos:CG}=$t(),{isGTE:M2,isNumberArray:b2}=qt(),RG=jl(),w2=(n,e,t,i,r,s)=>{let o=ha/4*r/i,a=CG(o),c=TG(o),l=i-r,h=t*a,u=e[2]-(t-t*c);s||(u=t-t*c-e[2]),h=h>th?h:0;let f=Ft.add(Ft.create(),n,[e[0]-t,e[1]-t,u]),d=Ft.add(Ft.create(),n,[t-e[0],e[1]-t,u]),g=Ft.add(Ft.create(),n,[t-e[0],t-e[1],u]),_=Ft.add(Ft.create(),n,[e[0]-t,t-e[1],u]),p=[],m=[],v=[],A=[];for(let M=0;M<=l;M++){let y=l>0?ha/4*M/l:0,b=Kd.fromAngleRadians(Kd.create(),y);Kd.scale(b,b,h);let x=Ft.fromVec2(Ft.create(),b);p.push(Ft.add(Ft.create(),f,x)),Ft.rotateZ(x,x,[0,0,0],ha/4),m.push(Ft.add(Ft.create(),d,x)),Ft.rotateZ(x,x,[0,0,0],ha/4),v.push(Ft.add(Ft.create(),g,x)),Ft.rotateZ(x,x,[0,0,0],ha/4),A.push(Ft.add(Ft.create(),_,x))}return s?[p,m,v,A]:(p.reverse(),m.reverse(),v.reverse(),A.reverse(),[A,v,m,p])},E2=(n,e)=>{let t=[];for(let i=0;i<n.length;i++){let r=n[i],s=e[i];for(let o=0;o<r.length-1;o++)t.push(zs.create([r[o],r[o+1],s[o]])),o<s.length-1&&t.push(zs.create([s[o],r[o+1],s[o+1]]))}return t},A2=(n,e)=>{let t=[];for(let i=0;i<n.length;i++){let r=n[i],s=e[i],o=r[r.length-1],a=s[s.length-1],c=(i+1)%n.length;r=n[c],s=e[c];let l=r[0],h=s[0];t.push(zs.create([o,l,h,a]))}return t},PG=(n,e)=>{n=[n[3],n[2],n[1],n[0]],n=n.map(s=>s.slice().reverse());let t=[];n.forEach(s=>{s.forEach(o=>t.push(o))});let i=[];e.forEach(s=>{s.forEach(o=>i.push(o))});let r=[];for(let s=0;s<i.length;s++){let o=(s+1)%i.length;r.push(zs.create([t[s],t[o],i[o],i[s]]))}return r},IG=n=>{let e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32},{center:t,size:i,roundRadius:r,segments:s}=Object.assign({},e,n);if(!b2(t,3))throw new Error("center must be an array of X, Y and Z values");if(!b2(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(l=>l>=0))throw new Error("size values must be positive");if(!M2(r,0))throw new Error("roundRadius must be positive");if(!M2(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return S2.create();if(r===0)return RG({center:t,size:i});if(i=i.map(l=>l/2),r>i[0]-th||r>i[1]-th||r>i[2]-th)throw new Error("roundRadius must be smaller than the radius of all dimensions");s=Math.floor(s/4);let o=null,a=null,c=[];for(let l=0;l<=s;l++){let h=w2(t,i,r,s,l,!0),u=w2(t,i,r,s,l,!1);if(l===0&&(c=c.concat(PG(u,h))),o&&(c=c.concat(E2(o,h),A2(o,h))),a&&(c=c.concat(E2(a,u),A2(a,u))),l===s){let f=h.map(d=>d[0]);c.push(zs.create(f)),f=u.map(d=>d[0]),c.push(zs.create(f))}o=h,a=u}return S2.create(c)};T2.exports=IG});var N2=E((Vne,D2)=>{var{EPS:LG,TAU:R2}=ct(),Ee=Ue(),P2=Ke(),DG=st(),{sin:I2,cos:L2}=$t(),{isGTE:nh,isNumberArray:NG}=qt(),UG=Zd(),FG=n=>{let e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:t,height:i,radius:r,roundRadius:s,segments:o}=Object.assign({},e,n);if(!NG(t,3))throw new Error("center must be an array of X, Y and Z values");if(!nh(i,0))throw new Error("height must be positive");if(!nh(r,0))throw new Error("radius must be positive");if(!nh(s,0))throw new Error("roundRadius must be positive");if(s>r)throw new Error("roundRadius must be smaller than the radius");if(!nh(o,4))throw new Error("segments must be four or more");if(i===0||r===0)return P2.create();if(s===0)return UG({center:t,height:i,radius:r});let a=[0,0,-(i/2)],c=[0,0,i/2],l=Ee.subtract(Ee.create(),c,a),h=Ee.length(l);if(2*s>h-LG)throw new Error("height must be larger than twice roundRadius");let u;Math.abs(l[0])>Math.abs(l[1])?u=Ee.fromValues(0,1,0):u=Ee.fromValues(1,0,0);let f=Ee.scale(Ee.create(),Ee.normalize(Ee.create(),l),s),d=Ee.scale(Ee.create(),Ee.normalize(Ee.create(),Ee.cross(Ee.create(),f,u)),r),g=Ee.scale(Ee.create(),Ee.normalize(Ee.create(),Ee.cross(Ee.create(),d,f)),r);Ee.add(a,a,f),Ee.subtract(c,c,f);let _=Math.floor(.25*o),p=b=>{let x=b.map(w=>Ee.add(w,w,t));return DG.create(x)},m=[],v=Ee.create(),A=Ee.create(),M;for(let b=0;b<=o;b++){let x=R2*b/o,w=Ee.add(Ee.create(),Ee.scale(v,d,L2(x)),Ee.scale(A,g,I2(x)));if(b>0){let P=[];P.push(Ee.add(Ee.create(),a,w)),P.push(Ee.add(Ee.create(),a,M)),P.push(Ee.add(Ee.create(),c,M)),P.push(Ee.add(Ee.create(),c,w)),m.push(p(P));let R,L;for(let D=0;D<=_;D++){let z=R2/4*D/_,I=L2(z),q=I2(z);if(D>0){P=[];let F;F=Ee.add(Ee.create(),a,Ee.subtract(v,Ee.scale(v,M,R),Ee.scale(A,f,L))),P.push(F),F=Ee.add(Ee.create(),a,Ee.subtract(v,Ee.scale(v,w,R),Ee.scale(A,f,L))),P.push(F),D<_&&(F=Ee.add(Ee.create(),a,Ee.subtract(v,Ee.scale(v,w,I),Ee.scale(A,f,q))),P.push(F)),F=Ee.add(Ee.create(),a,Ee.subtract(v,Ee.scale(v,M,I),Ee.scale(A,f,q))),P.push(F),m.push(p(P)),P=[],F=Ee.add(Ee.create(),Ee.scale(v,M,R),Ee.scale(A,f,L)),Ee.add(F,F,c),P.push(F),F=Ee.add(Ee.create(),Ee.scale(v,w,R),Ee.scale(A,f,L)),Ee.add(F,F,c),P.push(F),D<_&&(F=Ee.add(Ee.create(),Ee.scale(v,w,I),Ee.scale(A,f,q)),Ee.add(F,F,c),P.push(F)),F=Ee.add(Ee.create(),Ee.scale(v,M,I),Ee.scale(A,f,q)),Ee.add(F,F,c),P.push(F),P.reverse(),m.push(p(P))}R=I,L=q}}M=w}return P2.create(m)};D2.exports=FG});var q2=E((Gne,z2)=>{var{EPS:U2,TAU:ih}=ct(),Pt=rt(),F2=et(),{isGTE:O2,isNumberArray:B2}=qt(),OG=eh(),BG=n=>{let e={center:[0,0],size:[2,2],roundRadius:.2,segments:32},{center:t,size:i,roundRadius:r,segments:s}=Object.assign({},e,n);if(!B2(t,2))throw new Error("center must be an array of X and Y values");if(!B2(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(_=>_>=0))throw new Error("size values must be positive");if(!O2(r,0))throw new Error("roundRadius must be positive");if(!O2(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return F2.create();if(r===0)return OG({center:t,size:i});if(i=i.map(_=>_/2),r>i[0]-U2||r>i[1]-U2)throw new Error("roundRadius must be smaller than the radius of all dimensions");let o=Math.floor(s/4),a=Pt.add(Pt.create(),t,[i[0]-r,i[1]-r]),c=Pt.add(Pt.create(),t,[r-i[0],i[1]-r]),l=Pt.add(Pt.create(),t,[r-i[0],r-i[1]]),h=Pt.add(Pt.create(),t,[i[0]-r,r-i[1]]),u=[],f=[],d=[],g=[];for(let _=0;_<=o;_++){let p=ih/4*_/o,m=Pt.fromAngleRadians(Pt.create(),p);Pt.scale(m,m,r),u.push(Pt.add(Pt.create(),a,m)),Pt.rotate(m,m,Pt.create(),ih/4),f.push(Pt.add(Pt.create(),c,m)),Pt.rotate(m,m,Pt.create(),ih/4),d.push(Pt.add(Pt.create(),l,m)),Pt.rotate(m,m,Pt.create(),ih/4),g.push(Pt.add(Pt.create(),h,m))}return F2.fromPoints(u.concat(f,d,g))};z2.exports=BG});var jd=E((Hne,k2)=>{var zG=$d(),{isGTE:qG}=qt(),kG=n=>{let e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:t,radius:i,segments:r,axes:s}=Object.assign({},e,n);if(!qG(i,0))throw new Error("radius must be positive");return i=[i,i,i],zG({center:t,radius:i,segments:r,axes:s})};k2.exports=kG});var G2=E((Wne,V2)=>{var VG=eh(),{isGTE:GG}=qt(),HG=n=>{let e={center:[0,0],size:2},{center:t,size:i}=Object.assign({},e,n);if(!GG(i,0))throw new Error("size must be positive");return i=[i,i],VG({center:t,size:i})};V2.exports=HG});var Y2=E((Xne,X2)=>{var{TAU:W2}=ct(),ua=rt(),WG=et(),{isGT:XG,isGTE:rh,isNumberArray:YG}=qt(),ZG=(n,e)=>n>0&&e>1&&e<n/2?Math.cos(Math.PI*e/n)/Math.cos(Math.PI*(e-1)/n):0,H2=(n,e,t,i)=>{let r=W2/n,s=[];for(let o=0;o<n;o++){let a=ua.fromAngleRadians(ua.create(),r*o+t);ua.scale(a,a,e),ua.add(a,i,a),s.push(a)}return s},$G=n=>{let e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0},{center:t,vertices:i,outerRadius:r,innerRadius:s,density:o,startAngle:a}=Object.assign({},e,n);if(!YG(t,2))throw new Error("center must be an array of X and Y values");if(!rh(i,2))throw new Error("vertices must be two or more");if(!XG(r,0))throw new Error("outerRadius must be greater than zero");if(!rh(s,0))throw new Error("innerRadius must be greater than zero");if(!rh(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%W2,s===0){if(!rh(o,2))throw new Error("density must be two or more");s=r*ZG(i,o)}let c=ua.clone(t),l=H2(i,r,a,c),h=H2(i,s,a+Math.PI/i,c),u=[];for(let f=0;f<i;f++)u.push(l[f]),u.push(h[f]);return WG.fromPoints(u)};X2.exports=$G});var qs=E((Yne,Q2)=>{var JG=$e(),Z2=bt(),$2=Zn(),J2=et(),K2=Ke(),j2=Mt(),sh=(n,...e)=>{let t={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:r}=Object.assign({},t,n);if(e=JG(e),e.length===0)throw new Error("wrong number of arguments");let s=$2.fromNormalAndPoint($2.create(),r,i);if(Number.isNaN(s[0]))throw new Error("the given origin and normal do not define a proper plane");let o=Z2.mirrorByPlane(Z2.create(),s),a=e.map(c=>j2.isA(c)?j2.transform(o,c):J2.isA(c)?J2.transform(o,c):K2.isA(c)?K2.transform(o,c):c);return a.length===1?a[0]:a},KG=(...n)=>sh({normal:[1,0,0]},n),jG=(...n)=>sh({normal:[0,1,0]},n),QG=(...n)=>sh({normal:[0,0,1]},n);Q2.exports={mirror:sh,mirrorX:KG,mirrorY:jG,mirrorZ:QG}});var Qd=E((Zne,tE)=>{var eE=Zn(),Fr=Ue(),e8=n=>{let e=n.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");let t=e.reduce((o,a)=>Fr.add(Fr.create(),o,a[0]),Fr.create());Fr.scale(t,t,1/e.length);let i,r=0;e.forEach(o=>{if(!Fr.equals(o[0],o[1])){let a=Fr.squaredDistance(t,o[0]);a>r&&(i=o,r=a)}});let s=e.find(o=>Fr.equals(o[1],i[0]));return eE.fromPoints(eE.create(),s[0],i[0],i[1])};tE.exports=e8});var cr=E(($ne,nE)=>{var t8=n=>(n||(n=[]),{edges:n});nE.exports=t8});var sE=E((Jne,rE)=>{var n8=cr(),iE=Ue(),i8=(...n)=>{let e,t;return n.length===1?(e=n8(),t=n[0]):(e=n[0],t=n[1]),e.edges=t.edges.map(i=>[iE.clone(i[0]),iE.clone(i[1])]),e};rE.exports=i8});var aE=E((Kne,oE)=>{var r8=Ue(),s8=(n,e)=>{let t=n.edges,i=e.edges;return t.length!==i.length?!1:t.reduce((s,o,a)=>{let c=i[a],l=r8.squaredDistance(o[0],c[0]);return s&&l<Number.EPSILON},!0)};oE.exports=s8});var lE=E((jne,cE)=>{var oh=Ue(),o8=cr(),a8=n=>{if(!Array.isArray(n))throw new Error("the given points must be an array");if(n.length<3)throw new Error("the given points must contain THREE or more points");let e=[],t=n[n.length-1];return n.forEach(i=>{i.length===2&&e.push([oh.fromVec2(oh.create(),t),oh.fromVec2(oh.create(),i)]),i.length===3&&e.push([t,i]),t=i}),o8(e)};cE.exports=a8});var uE=E((Qne,hE)=>{var ah=Ue(),c8=cr(),l8=n=>{if(!Array.isArray(n))throw new Error("the given sides must be an array");let e=[];return n.forEach(t=>{e.push([ah.fromVec2(ah.create(),t[0]),ah.fromVec2(ah.create(),t[1])])}),c8(e)};hE.exports=l8});var dE=E((eie,fE)=>{var h8=n=>!!(n&&typeof n=="object"&&"edges"in n&&Array.isArray(n.edges));fE.exports=h8});var mE=E((tie,pE)=>{var u8=cr(),f8=(...n)=>{let e,t;return n.length===1?(e=u8(),t=n[0]):(e=n[0],t=n[1]),e.edges=t.edges.map(i=>[i[1],i[0]]),e};pE.exports=f8});var xE=E((nie,gE)=>{var d8=n=>n.edges;gE.exports=d8});var vE=E((iie,_E)=>{var p8=(n,e)=>{let t,i,r,s,o,a=1;do{i=n,n=null;let c=null;for(o=0;i;){o++,r=i;let l=0;for(t=0;t<a&&(l++,r=r.nextZ,!!r);t++);let h=a;for(;l>0||h>0&&r;)l!==0&&(h===0||!r||e(i)<=e(r))?(s=i,i=i.nextZ,l--):(s=r,r=r.nextZ,h--),c?c.nextZ=s:n=s,s.prevZ=c,c=s;i=r}c.nextZ=null,a*=2}while(o>1);return n};_E.exports=p8});var ep=E((rie,yE)=>{var m8=vE(),ch=class{constructor(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}},g8=(n,e,t,i)=>{let r=new ch(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r},x8=n=>{n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)};yE.exports={Node:ch,insertNode:g8,removeNode:x8,sortLinked:m8}});var lh=E((sie,SE)=>{var _8=(n,e,t,i,r,s,o,a)=>(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0,v8=(n,e,t)=>(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y);SE.exports={area:v8,pointInTriangle:_8}});var tp=E((oie,AE)=>{var{Node:ME,insertNode:bE,removeNode:uh}=ep(),{area:Sn}=lh(),y8=(n,e,t,i,r)=>{let s;if(r===A8(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=bE(o,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=bE(o,n[o],n[o+1],s);return s&&fh(s,s.next)&&(uh(s),s=s.next),s},wE=(n,e)=>{if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fh(t,t.next)||Sn(t.prev,t,t.next)===0)){if(uh(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e},S8=(n,e,t)=>{let i=n;do{let r=i.prev,s=i.next.next;!fh(r,s)&&EE(r,i,i.next,s)&&fa(r,s)&&fa(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),uh(i),uh(i.next),i=n=s),i=i.next}while(i!==n);return wE(i)},M8=(n,e)=>{let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&EE(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1},fa=(n,e)=>Sn(n.prev,n,n.next)<0?Sn(n,e,n.next)>=0&&Sn(n,n.prev,e)>=0:Sn(n,e,n.prev)<0||Sn(n,n.next,e)<0,b8=(n,e)=>{let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i},w8=(n,e)=>{let t=new ME(n.i,n.x,n.y),i=new ME(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i},E8=(n,e)=>n.next.i!==e.i&&n.prev.i!==e.i&&!M8(n,e)&&(fa(n,e)&&fa(e,n)&&b8(n,e)&&(Sn(n.prev,n,e.prev)||Sn(n,e.prev,e))||fh(n,e)&&Sn(n.prev,n,n.next)>0&&Sn(e.prev,e,e.next)>0),EE=(n,e,t,i)=>{let r=Math.sign(Sn(n,e,t)),s=Math.sign(Sn(n,e,i)),o=Math.sign(Sn(t,i,n)),a=Math.sign(Sn(t,i,e));return!!(r!==s&&o!==a||r===0&&hh(n,t,e)||s===0&&hh(n,i,e)||o===0&&hh(t,n,i)||a===0&&hh(t,e,i))},hh=(n,e,t)=>e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y),A8=(n,e,t,i)=>{let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r},fh=(n,e)=>n.x===e.x&&n.y===e.y;AE.exports={cureLocalIntersections:S8,filterPoints:wE,isValidDiagonal:E8,linkedPolygon:y8,locallyInside:fa,splitPolygon:w8}});var RE=E((aie,CE)=>{var{filterPoints:np,linkedPolygon:T8,locallyInside:C8,splitPolygon:R8}=tp(),{area:TE,pointInTriangle:P8}=lh(),I8=(n,e,t,i)=>{let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=T8(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(U8(l))}r.sort((s,o)=>s.x-o.x);for(let s=0;s<r.length;s++)t=L8(r[s],t),t=np(t,t.next);return t},L8=(n,e)=>{let t=D8(n,e);if(!t)return e;let i=R8(t,n),r=np(t,t.next);return np(i,i.next),e===t?r:e},D8=(n,e)=>{let t=e,i=n.x,r=n.y,s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s){if(s=u,u===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&P8(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){let u=Math.abs(r-t.y)/(i-t.x);C8(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&N8(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o},N8=(n,e)=>TE(n.prev,n,e.prev)<0&&TE(e.next,n,n.next)<0,U8=n=>{let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t};CE.exports=I8});var IE=E((cie,PE)=>{var F8=RE(),{removeNode:O8,sortLinked:B8}=ep(),{cureLocalIntersections:z8,filterPoints:dh,isValidDiagonal:q8,linkedPolygon:k8,splitPolygon:V8}=tp(),{area:Or,pointInTriangle:da}=lh(),G8=(n,e,t=2)=>{let i=e&&e.length,r=i?e[0]*t:n.length,s=k8(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u;if(i&&(s=F8(n,e,s,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let f=t;f<r;f+=t){let d=n[f],g=n[f+1];d<a&&(a=d),g<c&&(c=g),d>l&&(l=d),g>h&&(h=g)}u=Math.max(l-a,h-c),u=u!==0?1/u:0}return pa(s,o,t,a,c,u),o},pa=(n,e,t,i,r,s,o)=>{if(!n)return;!o&&s&&Y8(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?W8(n,i,r,s):H8(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),O8(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=z8(dh(n),e,t),pa(n,e,t,i,r,s,2)):o===2&&X8(n,e,t,i,r,s):pa(dh(n),e,t,i,r,s,1);break}}},H8=n=>{let e=n.prev,t=n,i=n.next;if(Or(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(da(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Or(r.prev,r,r.next)>=0)return!1;r=r.next}return!0},W8=(n,e,t,i)=>{let r=n.prev,s=n,o=n.next;if(Or(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=ip(a,c,e,t,i),f=ip(l,h,e,t,i),d=n.prevZ,g=n.nextZ;for(;d&&d.z>=u&&g&&g.z<=f;){if(d!==n.prev&&d!==n.next&&da(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Or(d.prev,d,d.next)>=0||(d=d.prevZ,g!==n.prev&&g!==n.next&&da(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Or(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=u;){if(d!==n.prev&&d!==n.next&&da(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Or(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==n.prev&&g!==n.next&&da(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Or(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0},X8=(n,e,t,i,r,s)=>{let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q8(o,a)){let c=V8(o,a);o=dh(o,o.next),c=dh(c,c.next),pa(o,e,t,i,r,s),pa(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)},Y8=(n,e,t,i)=>{let r=n;do r.z===null&&(r.z=ip(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,B8(r,s=>s.z)},ip=(n,e,t,i,r)=>(n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1);PE.exports=G8});var DE=E((lie,LE)=>{var{area:Z8}=Ls(),{toOutlines:$8}=et(),{arePointsInside:J8}=Vl(),K8=n=>{let e=$8(n),t=[],i=[];e.forEach((o,a)=>{let c=Z8(o);c<0?i.push(a):c>0&&t.push(a)});let r=[],s=[];return t.forEach((o,a)=>{let c=e[o];r[a]=[],i.forEach((l,h)=>{let u=e[l];J8([u[0]],{vertices:c})&&(r[a].push(l),s[h]||(s[h]=[]),s[h].push(a))})}),i.forEach((o,a)=>{if(s[a]&&s[a].length>1){let c=j8(s[a],l=>r[l].length);s[a].forEach((l,h)=>{h!==c&&(r[l]=r[l].filter(u=>u!==o))})}}),r.map((o,a)=>({solid:e[t[a]],holes:o.map(c=>e[c])}))},j8=(n,e)=>{let t,i;return n.forEach((r,s)=>{let o=e(r);(i===void 0||o<i)&&(t=s,i=o)}),t};LE.exports=K8});var FE=E((hie,UE)=>{var Q8=et(),NE=Zn(),e6=rt(),Qt=Ue(),t6=Qd(),n6=DE(),rp=class{constructor(e){this.plane=t6(e);let t=Qt.orthogonal(Qt.create(),this.plane),i=Qt.cross(Qt.create(),this.plane,t);this.v=Qt.normalize(i,i),this.u=Qt.cross(Qt.create(),this.v,this.plane),this.basisMap=new Map;let r=e.edges.map(o=>o.map(a=>this.to2D(a))),s=Q8.create(r);this.roots=n6(s)}to2D(e){let t=e6.fromValues(Qt.dot(e,this.u),Qt.dot(e,this.v));return this.basisMap.set(t,e),t}to3D(e){let t=this.basisMap.get(e);if(t)return t;{console.log("Warning: point not in original slice");let i=Qt.scale(Qt.create(),this.u,e[0]),r=Qt.scale(Qt.create(),this.v,e[1]),s=Qt.scale(Qt.create(),NE,NE[3]),o=Qt.add(i,i,s);return Qt.add(r,r,o)}}};UE.exports=rp});var BE=E((uie,OE)=>{var i6=st(),r6=IE(),s6=FE(),o6=n=>{let e=new s6(n),t=[];return e.roots.forEach(({solid:i,holes:r})=>{let s=i.length,o=[];r.forEach((u,f)=>{o.push(s),s+=u.length});let a=[i,...r].flat(),c=a.flat(),l=u=>e.to3D(a[u]),h=r6(c,o);for(let u=0;u<h.length;u+=3){let f=h.slice(u,u+3).map(l);t.push(i6.fromPointsAndPlane(f,e.plane))}}),t};OE.exports=o6});var kE=E((fie,qE)=>{var zE=Ue(),a6=n=>n.reduce((e,t)=>e+=`[${zE.toString(t[0])}, ${zE.toString(t[1])}], `,""),c6=n=>`[${a6(n.edges)}]`;qE.exports=c6});var GE=E((die,VE)=>{var ph=Ue(),l6=cr(),h6=(n,e)=>{let t=e.edges.map(i=>[ph.transform(ph.create(),i[0],n),ph.transform(ph.create(),i[1],n)]);return l6(t)};VE.exports=h6});var Br=E((pie,HE)=>{HE.exports={calculatePlane:Qd(),clone:sE(),create:cr(),equals:aE(),fromPoints:lE(),fromSides:uE(),isA:dE(),reverse:mE(),toEdges:xE(),toPolygons:BE(),toString:kE(),transform:GE()}});var YE=E((mie,XE)=>{var WE=Ue(),u6=cr(),f6=n=>{if(!n.edges)return n;let e=n.edges,t=new Map,i=new Map;e=e.filter(o=>!WE.equals(o[0],o[1])),e.forEach(o=>{let a=o[0].toString(),c=o[1].toString();t.set(a,o[0]),t.set(c,o[1]),i.set(a,(i.get(a)||0)+1),i.set(c,(i.get(c)||0)-1)});let r=[],s=[];return i.forEach((o,a)=>{o<0&&r.push(a),o>0&&s.push(a)}),r.forEach(o=>{let a=t.get(o),c=1/0,l;s.forEach(h=>{let u=t.get(h),f=WE.distance(a,u);f<c&&(c=f,l=u)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${l} distance ${c}`),e=e.map(h=>h[0].toString()===o?[l,h[1]]:h[1].toString()===o?[h[0],l]:h)}),u6(e)};XE.exports=f6});var QE=E((gie,jE)=>{var{EPS:ZE}=ct(),ks=Ue(),mh=st(),$E=Br(),sp=(n,e)=>n===e?n:n<e?sp(e,n):e===1?1:e===0?n:sp(e,n%e),d6=(n,e)=>n*e/sp(n,e),JE=(n,e)=>{let t=n/e.length;if(t===1)return e;let i=ks.fromValues(t,t,t),r=ks.create(),s=[];return e.forEach(o=>{ks.subtract(r,o[1],o[0]),ks.divide(r,r,i);let a=o[0];for(let c=1;c<=t;++c){let l=ks.add(ks.create(),a,r);s.push([a,l]),a=l}}),s},KE=ZE*ZE/2*Math.sin(Math.PI/3),p6=(n,e)=>{let t=$E.toEdges(n),i=$E.toEdges(e);if(t.length!==i.length){let s=d6(t.length,i.length);s!==t.length&&(t=JE(s,t)),s!==i.length&&(i=JE(s,i))}let r=[];return t.forEach((s,o)=>{let a=i[o],c=mh.create([s[0],s[1],a[1]]),l=mh.measureArea(c);Number.isFinite(l)&&l>KE&&r.push(c);let h=mh.create([s[0],a[1],a[0]]),u=mh.measureArea(h);Number.isFinite(u)&&u>KE&&r.push(h)}),r};jE.exports=p6});var ma=E((xie,iA)=>{var eA=bt(),tA=et(),m6=Ke(),op=st(),lr=Br(),g6=YE(),nA=QE(),x6=(n,e,t)=>{let i=null;return tA.isA(t)&&(i=lr.fromSides(tA.toSides(t))),op.isA(t)&&(i=lr.fromPoints(op.toPoints(t))),n===0||n===1?lr.transform(eA.fromTranslation(eA.create(),[0,0,n]),i):null},_6=(n,e)=>{let t={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:x6},{numberOfSlices:i,capStart:r,capEnd:s,close:o,repair:a,callback:c}=Object.assign({},t,n);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=g6(e));let l=i-1,h=null,u=null,f=null,d=[];for(let g=0;g<i;g++){let _=c(g/l,g,e);if(_){if(!lr.isA(_))throw new Error("the callback function must return slice objects");if(lr.toEdges(_).length===0)throw new Error("the callback function must return slices with one or more edges");if(f){let m=nA(f,_);for(let v=0;v<m.length;v++)d.push(m[v])}g===0&&(h=_),g===i-1&&(u=_),f=_}}if(s){let g=lr.toPolygons(u);for(let _=0;_<g.length;_++)d.push(g[_])}if(r){let g=lr.toPolygons(h).map(op.invert);for(let _=0;_<g.length;_++)d.push(g[_])}if(!r&&!s&&o&&!lr.equals(u,h)){let g=nA(u,h);for(let _=0;_<g.length;_++)d.push(g[_])}return m6.create(d)};iA.exports=_6});var cp=E((_ie,rA)=>{var{TAU:Dn}=ct(),Vs=bt(),{mirrorX:v6}=qs(),gh=et(),ap=Br(),y6=ma(),S6=(n,e)=>{let t={segments:12,startAngle:0,angle:Dn,overflow:"cap"},{segments:i,startAngle:r,angle:s,overflow:o}=Object.assign({},t,n);if(i<3)throw new Error("segments must be greater then 3");r=Math.abs(r)>Dn?r%Dn:r,s=Math.abs(s)>Dn?s%Dn:s;let a=r+s;if(a=Math.abs(a)>Dn?a%Dn:a,a<r){let M=r;r=a,a=M}let c=a-r;if(c<=0&&(c=Dn),Math.abs(c)<Dn){let M=Dn/i;i=Math.floor(Math.abs(c)/M),Math.abs(c)>i*M&&i++}let l=gh.toSides(e);if(l.length===0)throw new Error("the given geometry cannot be empty");let h=l.filter(M=>M[0][0]<0),u=l.filter(M=>M[0][0]>=0);h.length>0&&u.length>0&&o==="cap"&&(h.length>u.length?(l=l.map(M=>{let y=M[0],b=M[1];return y=[Math.min(y[0],0),y[1]],b=[Math.min(b[0],0),b[1]],[y,b]}),e=gh.create(l),e=v6(e)):u.length>=h.length&&(l=l.map(M=>{let y=M[0],b=M[1];return y=[Math.max(y[0],0),y[1]],b=[Math.max(b[0],0),b[1]],[y,b]}),e=gh.create(l)));let d=c/i,g=Math.abs(c)<Dn,_=ap.fromSides(gh.toSides(e));ap.reverse(_,_);let p=Vs.create(),m=Vs.fromXRotation(Vs.create(),Dn/4),v=Vs.create(),A=(M,y,b)=>{let x=d*y+r;return c===Dn&&y===i&&(x=r),Vs.fromZRotation(v,x),Vs.multiply(p,v,m),ap.transform(p,b)};return n={numberOfSlices:i+1,capStart:g,capEnd:g,close:!g,callback:A},y6(n,_)};rA.exports=S6});var Gs=E((vie,lA)=>{var M6=$e(),sA=bt(),oA=et(),aA=Ke(),cA=Mt(),xh=(n,...e)=>{if(!Array.isArray(n))throw new Error("angles must be an array");if(e=M6(e),e.length===0)throw new Error("wrong number of arguments");for(n=n.slice();n.length<3;)n.push(0);let t=n[2],i=n[1],r=n[0],s=sA.fromTaitBryanRotation(sA.create(),t,i,r),o=e.map(a=>cA.isA(a)?cA.transform(s,a):oA.isA(a)?oA.transform(s,a):aA.isA(a)?aA.transform(s,a):a);return o.length===1?o[0]:o},b6=(n,...e)=>xh([n,0,0],e),w6=(n,...e)=>xh([0,n,0],e),E6=(n,...e)=>xh([0,0,n],e);lA.exports={rotate:xh,rotateX:b6,rotateY:w6,rotateZ:E6}});var hr=E((yie,pA)=>{var A6=$e(),hA=bt(),uA=et(),fA=Ke(),dA=Mt(),_h=(n,...e)=>{if(!Array.isArray(n))throw new Error("offset must be an array");if(e=A6(e),e.length===0)throw new Error("wrong number of arguments");for(n=n.slice();n.length<3;)n.push(0);let t=hA.fromTranslation(hA.create(),n),i=e.map(r=>dA.isA(r)?dA.transform(t,r):uA.isA(r)?uA.transform(t,r):fA.isA(r)?fA.transform(t,r):r);return i.length===1?i[0]:i},T6=(n,...e)=>_h([n,0,0],e),C6=(n,...e)=>_h([0,n,0],e),R6=(n,...e)=>_h([0,0,n],e);pA.exports={translate:_h,translateX:T6,translateY:C6,translateZ:R6}});var gA=E((Sie,mA)=>{var{TAU:P6}=ct(),I6=cp(),{rotate:L6}=Gs(),{translate:D6}=hr(),N6=Hd(),{isGT:lp,isGTE:hp}=qt(),U6=n=>{let e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:P6},{innerRadius:t,innerSegments:i,outerRadius:r,outerSegments:s,innerRotation:o,startAngle:a,outerRotation:c}=Object.assign({},e,n);if(!lp(t,0))throw new Error("innerRadius must be greater than zero");if(!hp(i,3))throw new Error("innerSegments must be three or more");if(!lp(r,0))throw new Error("outerRadius must be greater than zero");if(!hp(s,3))throw new Error("outerSegments must be three or more");if(!hp(a,0))throw new Error("startAngle must be positive");if(!lp(c,0))throw new Error("outerRotation must be greater than zero");if(t>=r)throw new Error("inner circle is too large to rotate about the outer circle");let l=N6({radius:t,segments:i});return o!==0&&(l=L6([0,0,o],l)),l=D6([r,0],l),I6({startAngle:a,angle:c,segments:s},l)};mA.exports=U6});var _A=E((Mie,xA)=>{var{NEPS:Hs}=ct(),ga=rt(),F6=et(),{isNumberArray:O6}=qt(),up=(n,e,t)=>Math.acos((n*n+e*e-t*t)/(2*n*e)),B6=(n,e,t)=>e>Hs?Math.sqrt(n*n+t*t-2*n*t*Math.cos(e)):Math.sqrt((n-t)*(n-t)+n*t*e*e*(1-e*e/12)),z6=n=>{if(Math.abs(n[0]+n[1]+n[2]-Math.PI)>Hs)throw new Error("AAA triangles require angles that sum to PI");let t=n[0],i=n[1],r=Math.PI-t-i,s=1,o=s/Math.sin(r)*Math.sin(t),a=s/Math.sin(r)*Math.sin(i);return Ws(t,i,r,o,a,s)},q6=n=>{let e=n[0],t=n[1],i=Math.PI+Hs-e-t;if(i<Hs)throw new Error("AAS triangles require angles that sum to PI");let r=n[2],s=r/Math.sin(e)*Math.sin(t),o=r/Math.sin(e)*Math.sin(i);return Ws(e,t,i,r,s,o)},k6=n=>{let e=n[0],t=n[2],i=Math.PI+Hs-e-t;if(i<Hs)throw new Error("ASA triangles require angles that sum to PI");let r=n[1],s=r/Math.sin(i)*Math.sin(e),o=r/Math.sin(i)*Math.sin(t);return Ws(e,t,i,s,o,r)},V6=n=>{let e=n[0],t=n[1],i=n[2],r=B6(e,t,i),s=up(r,e,i),o=Math.PI-s-t;return Ws(s,t,o,i,r,e)},G6=n=>{let e=n[0],t=n[1],i=n[2],r=Math.asin(t*Math.sin(i)/e),s=Math.PI-r-i,o=e/Math.sin(i)*Math.sin(s);return Ws(r,s,i,t,o,e)},H6=n=>{let e=n[1],t=n[2],i=n[0];if(e+t<=i||t+i<=e||i+e<=t)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");let r=up(t,i,e),s=up(i,e,t),o=Math.PI-r-s;return Ws(r,s,o,e,t,i)},Ws=(n,e,t,i,r,s)=>{let o=ga.fromValues(0,0),a=ga.fromValues(s,0),c=ga.fromValues(i,0);return ga.add(c,ga.rotate(c,c,[0,0],Math.PI-e),a),F6.fromPoints([o,a,c])},W6=n=>{let e={type:"SSS",values:[1,1,1]},{type:t,values:i}=Object.assign({},e,n);if(typeof t!="string")throw new Error("triangle type must be a string");if(t=t.toUpperCase(),!((t[0]==="A"||t[0]==="S")&&(t[1]==="A"||t[1]==="S")&&(t[2]==="A"||t[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!O6(i,3))throw new Error("triangle values must contain three values");if(!i.every(r=>r>0))throw new Error("triangle values must be greater than zero");switch(t){case"AAA":return z6(i);case"AAS":return q6(i);case"ASA":return k6(i);case"SAS":return V6(i);case"SSA":return G6(i);case"SSS":return H6(i);default:throw new Error("invalid triangle type, try again")}};xA.exports=W6});var yA=E((bie,vA)=>{vA.exports={arc:zw(),circle:Hd(),cube:$w(),cuboid:jl(),cylinder:Zd(),cylinderElliptic:Yd(),ellipse:Gd(),ellipsoid:$d(),geodesicSphere:d2(),line:m2(),polygon:x2(),polyhedron:Jd(),rectangle:eh(),roundedCuboid:C2(),roundedCylinder:N2(),roundedRectangle:q2(),sphere:jd(),square:G2(),star:Y2(),torus:gA(),triangle:_A()}});var MA=E((wie,SA)=>{SA.exports={height:14,32:[16],33:[10,5,21,5,7,void 0,5,2,4,1,5,0,6,1,5,2],34:[16,4,21,4,14,void 0,12,21,12,14],35:[21,11,25,4,-7,void 0,17,25,10,-7,void 0,4,12,18,12,void 0,3,6,17,6],36:[20,8,25,8,-4,void 0,12,25,12,-4,void 0,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],37:[24,21,21,3,0,void 0,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,void 0,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7],38:[26,23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2],39:[10,5,19,4,20,5,21,6,20,6,18,5,16,4,15],40:[14,11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7],41:[14,3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7],42:[16,8,21,8,9,void 0,3,18,13,12,void 0,13,18,3,12],43:[26,13,18,13,0,void 0,4,9,22,9],44:[10,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],45:[26,4,9,22,9],46:[10,5,2,4,1,5,0,6,1,5,2],47:[22,20,25,2,-7],48:[20,9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21],49:[20,6,17,8,18,11,21,11,0],50:[20,4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0],51:[20,5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],52:[20,13,21,3,7,18,7,void 0,13,21,13,0],53:[20,15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],54:[20,16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7],55:[20,17,21,7,0,void 0,3,21,17,21],56:[20,8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21],57:[20,16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3],58:[10,5,14,4,13,5,12,6,13,5,14,void 0,5,2,4,1,5,0,6,1,5,2],59:[10,5,14,4,13,5,12,6,13,5,14,void 0,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],60:[24,20,18,4,9,20,0],61:[26,4,12,22,12,void 0,4,6,22,6],62:[24,4,18,20,9,4,0],63:[18,3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,void 0,9,2,8,1,9,0,10,1,9,2],64:[27,18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,void 0,12,16,10,14,9,11,9,8,10,6,11,5,void 0,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,void 0,19,16,18,8,18,6,19,5],65:[18,9,21,1,0,void 0,9,21,17,0,void 0,4,7,14,7],66:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,void 0,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0],67:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5],68:[21,4,21,4,0,void 0,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0],69:[19,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11,void 0,4,0,17,0],70:[18,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11],71:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,void 0,13,8,18,8],72:[22,4,21,4,0,void 0,18,21,18,0,void 0,4,11,18,11],73:[8,4,21,4,0],74:[16,12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7],75:[21,4,21,4,0,void 0,18,21,4,7,void 0,9,12,18,0],76:[17,4,21,4,0,void 0,4,0,16,0],77:[24,4,21,4,0,void 0,4,21,12,0,void 0,20,21,12,0,void 0,20,21,20,0],78:[22,4,21,4,0,void 0,4,21,18,0,void 0,18,21,18,0],79:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21],80:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10],81:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,void 0,12,4,18,-2],82:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,void 0,11,11,18,0],83:[20,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],84:[16,8,21,8,0,void 0,1,21,15,21],85:[22,4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21],86:[18,1,21,9,0,void 0,17,21,9,0],87:[24,2,21,7,0,void 0,12,21,7,0,void 0,12,21,17,0,void 0,22,21,17,0],88:[20,3,21,17,0,void 0,17,21,3,0],89:[18,1,21,9,11,9,0,void 0,17,21,9,11],90:[20,17,21,3,0,void 0,3,21,17,21,void 0,3,0,17,0],91:[14,4,25,4,-7,void 0,5,25,5,-7,void 0,4,25,11,25,void 0,4,-7,11,-7],92:[14,0,21,14,-3],93:[14,9,25,9,-7,void 0,10,25,10,-7,void 0,3,25,10,25,void 0,3,-7,10,-7],94:[16,6,15,8,18,10,15,void 0,3,12,8,17,13,12,void 0,8,17,8,0],95:[16,0,-2,16,-2],96:[10,6,21,5,20,4,18,4,16,5,15,6,16,5,17],97:[19,15,14,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],98:[19,4,21,4,0,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],99:[18,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],100:[19,15,21,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],101:[18,3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],102:[12,10,21,8,21,6,20,5,17,5,0,void 0,2,14,9,14],103:[19,15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],104:[19,4,21,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],105:[8,3,21,4,20,5,21,4,22,3,21,void 0,4,14,4,0],106:[10,5,21,6,20,7,21,6,22,5,21,void 0,6,14,6,-3,5,-6,3,-7,1,-7],107:[17,4,21,4,0,void 0,14,14,4,4,void 0,8,8,15,0],108:[8,4,21,4,0],109:[30,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0,void 0,15,10,18,13,20,14,23,14,25,13,26,10,26,0],110:[19,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],111:[19,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14],112:[19,4,14,4,-7,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],113:[19,15,14,15,-7,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],114:[13,4,14,4,0,void 0,4,8,5,11,7,13,9,14,12,14],115:[17,14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3],116:[12,5,21,5,4,6,1,8,0,10,0,void 0,2,14,9,14],117:[19,4,14,4,4,5,1,7,0,10,0,12,1,15,4,void 0,15,14,15,0],118:[16,2,14,8,0,void 0,14,14,8,0],119:[22,3,14,7,0,void 0,11,14,7,0,void 0,11,14,15,0,void 0,19,14,15,0],120:[17,3,14,14,0,void 0,14,14,3,0],121:[16,2,14,8,0,void 0,14,14,8,0,6,-4,4,-6,2,-7,1,-7],122:[17,14,14,3,0,void 0,3,14,14,14,void 0,3,0,14,0],123:[14,9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,void 0,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,void 0,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7],124:[8,4,25,4,-7],125:[14,5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,void 0,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,void 0,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7],126:[24,3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,void 0,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]}});var fp=E((Eie,bA)=>{var X6=MA(),Y6={xOffset:0,yOffset:0,input:"?",align:"left",font:X6,height:14,lineSpacing:2.142857142857143,letterSpacing:1,extrudeOffset:0},Z6=(n,e)=>{!e&&typeof n=="string"&&(n={input:n}),n=n||{};let t=Object.assign({},Y6,n);return t.input=e||t.input,t};bA.exports=Z6});var dp=E((Aie,wA)=>{var $6=fp(),J6=(n,e)=>{let{xOffset:t,yOffset:i,input:r,font:s,height:o,extrudeOffset:a}=$6(n,e),c=r.charCodeAt(0);(!c||!s[c])&&(c=63);let l=[].concat(s[c]),h=(o-a)/s.height,u=a/2,f=l.shift()*h,d=[],g=[];for(let _=0,p=l.length;_<p;_+=2){let m=h*l[_]+t,v=h*l[_+1]+i+u;if(l[_]!==void 0){g.push([m,v]);continue}d.push(g),g=[],_--}return g.length&&d.push(g),{width:f,height:o,segments:d}};wA.exports=J6});var TA=E((Tie,AA)=>{var K6=dp(),j6=fp(),EA=(n,e)=>{let{x:t,y:i}=Object.assign({x:0,y:0},n||{}),r=e.segments,s=null,o=null;for(let a=0,c=r.length;a<c;a++){s=r[a];for(let l=0,h=s.length;l<h;l++)o=s[l],s[l]=[o[0]+t,o[1]+i]}return e},Q6=(n,e)=>{let{xOffset:t,yOffset:i,input:r,font:s,height:o,align:a,extrudeOffset:c,lineSpacing:l,letterSpacing:h}=j6(n,e),[u,f]=[t,i],d,g,_,p,m,v,A={width:0,segments:[]},M=[],y=[],b=0,x=u,w=()=>{M.push(A),b=Math.max(b,A.width),A={width:0,segments:[]}};for(d=0,g=r.length;d<g;d++){if(_=r[d],p=K6({xOffset:u,yOffset:f,font:s,height:o,extrudeOffset:c},_),_===`
`){u=x,f-=p.height*l,w();continue}m=p.width*h,A.width+=m,u+=m,_!==" "&&(A.segments=A.segments.concat(p.segments))}for(A.segments.length&&w(),d=0,g=M.length;d<g;d++)A=M[d],b>A.width&&(v=b-A.width,a==="right"?A=EA({x:v},A):a==="center"&&(A=EA({x:v/2},A))),y=y.concat(A.segments);return y};AA.exports=Q6});var RA=E((Cie,CA)=>{CA.exports={vectorChar:dp(),vectorText:TA()}});var Xs=E((Rie,PA)=>{var eH=et(),tH=Ke(),nH=Mt(),iH=n=>{let e;for(let t of n){let i=0;if(eH.isA(t)&&(i=1),tH.isA(t)&&(i=2),nH.isA(t)&&(i=3),e&&i!==e)return!1;e=i}return!0};PA.exports=iH});var LA=E((Pie,IA)=>{var rH=n=>n*.017453292519943295;IA.exports=rH});var pp=E((Iie,DA)=>{var sH=(n,e)=>n-e;DA.exports=sH});var UA=E((Lie,NA)=>{var oH=(n,e,t)=>{let i=0,r=n.length;for(;r>i;){let s=Math.floor((i+r)/2),o=n[s];t(e,o)>0?i=s+1:r=s}n.splice(i,0,e)};NA.exports=oH});var BA=E((Die,OA)=>{var{TAU:FA}=ct(),aH=(n,e,t)=>{let i=e>0?n*FA/e:0,r=t>0?FA/t:0;return Math.ceil(Math.max(i,r,4))};OA.exports=aH});var qA=E((Nie,zA)=>{var cH=n=>n*57.29577951308232;zA.exports=cH});var mp=E((Uie,kA)=>{kA.exports={areAllShapesTheSameType:Xs(),degToRad:LA(),flatten:$e(),fnNumberSort:pp(),insertSorted:UA(),radiusToSegments:BA(),radToDeg:qA()}});var vh=E((Fie,GA)=>{var VA=rt(),lH=et(),hH=(n,e)=>{if(e.vertices.length<4)return null;let t=[],i=e.vertices.filter((o,a)=>o[2]>0?(t.push(a),!0):!1);if(i.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");let r=i.map(o=>{let a=Math.round(o[0]/n)*n+0,c=Math.round(o[1]/n)*n+0;return VA.fromValues(a,c)});if(VA.equals(r[0],r[1]))return null;let s=t[1]-t[0];if(s===1||s===3)s===1&&r.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return r},uH=(n,e)=>{let t=e.map(i=>hH(n,i)).filter(i=>i!==null);return lH.create(t)};GA.exports=uH});var yh=E((Oie,HA)=>{var ur=Ue(),fH=et(),dH=Ke(),pH=st(),mH=(n,e,t)=>{let i=[ur.fromVec2(ur.create(),t[0],n),ur.fromVec2(ur.create(),t[1],n),ur.fromVec2(ur.create(),t[1],e),ur.fromVec2(ur.create(),t[0],e)];return pH.create(i)},gH=(n,e)=>{let i=fH.toSides(e).map(s=>mH(n.z0,n.z1,s));return dH.create(i)};HA.exports=gH});var ZA=E((Bie,YA)=>{var WA=bt(),xH=rt(),kt=Ue(),XA=function(n,e){arguments.length<2&&(e=kt.orthogonal(kt.create(),n)),this.v=kt.normalize(kt.create(),kt.cross(kt.create(),n,e)),this.u=kt.cross(kt.create(),this.v,n),this.plane=n,this.planeorigin=kt.scale(kt.create(),n,n[3])};XA.prototype={getProjectionMatrix:function(){return WA.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){let n=kt.scale(kt.create(),this.plane,this.plane[3]);return WA.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,n[0],n[1],n[2],1)},to2D:function(n){return xH.fromValues(kt.dot(n,this.u),kt.dot(n,this.v))},to3D:function(n){let e=kt.scale(kt.create(),this.u,n[0]),t=kt.scale(kt.create(),this.v,n[1]),i=kt.add(e,e,this.planeorigin);return kt.add(t,t,i)}};YA.exports=XA});var KA=E((zie,JA)=>{var{EPS:Ni}=ct(),fr=Yl(),$n=rt(),_H=ZA(),Ys=Cd(),{insertSorted:vH,fnNumberSort:yH}=mp(),$A=st(),SH=n=>{if(n.length<2)return n;let e=[],t=n.length,i=$A.plane(n[0]),r=new _H(i),s=[],o=[],a=new Map,c=new Map,l=new Map,h=10/Ni;for(let g=0;g<t;g++){let _=n[g],p=[],m=_.vertices.length,v=-1;if(m>0){let A,M;for(let y=0;y<m;y++){let b=r.to2D(_.vertices[y]),x=Math.floor(b[1]*h),w;l.has(x)?w=l.get(x):l.has(x+1)?w=l.get(x+1):l.has(x-1)?w=l.get(x-1):(w=b[1],l.set(x,b[1])),b=$n.fromValues(b[0],w),p.push(b);let P=b[1];(y===0||P<A)&&(A=P,v=y),(y===0||P>M)&&(M=P);let R=c.get(P);R||(R={},c.set(P,R)),R[g]=!0}if(A>=M)p=[],m=0,v=-1;else{let y=a.get(A);y||(y=[],a.set(A,y)),y.push(g)}}p.reverse(),v=m-v-1,s.push(p),o.push(v)}let u=[];c.forEach((g,_)=>u.push(_)),u.sort(yH);let f=[],d=[];for(let g=0;g<u.length;g++){let _=[],p=u[g],m=c.get(p),v=0;for(let M=0;M<f.length;++M){let y=f[M],b=y.polygonindex;if(m[b]){let x=s[b],w=x.length,P=y.leftvertexindex,R=y.rightvertexindex;for(;;){let D=P+1;if(D>=w&&(D=0),x[D][1]!==p)break;P=D}let L=R-1;if(L<0&&(L=w-1),x[L][1]===p&&(R=L),P!==y.leftvertexindex&&P===R)y._remove=!0,v++;else{y.leftvertexindex=P,y.rightvertexindex=R,y.topleft=x[P],y.topright=x[R];let D=P+1;D>=w&&(D=0),y.bottomleft=x[D];let z=R-1;z<0&&(z=w-1),y.bottomright=x[z]}}}v>0&&(f=f.filter(M=>!M._remove));let A;if(g>=u.length-1)f=[],A=null;else{A=Number(u[g+1]);let M=.5*(p+A),y=a.get(p);for(let b in y){let x=y[b],w=s[x],P=w.length,R=o[x],L=R;for(;;){let F=L+1;if(F>=P&&(F=0),w[F][1]!==p||F===R)break;L=F}let D=R;for(;;){let F=D-1;if(F<0&&(F=P-1),w[F][1]!==p||F===L)break;D=F}let z=L+1;z>=P&&(z=0);let I=D-1;I<0&&(I=P-1);let q={polygonindex:x,leftvertexindex:L,rightvertexindex:D,topleft:w[L],topright:w[D],bottomleft:w[z],bottomright:w[I]};vH(f,q,(F,k)=>{let te=Ys(F.topleft,F.bottomleft,M),H=Ys(k.topleft,k.bottomleft,M);return te>H?1:te<H?-1:0})}}for(let M in f){let y=f[M],b=Ys(y.topleft,y.bottomleft,p),x=$n.fromValues(b,p);b=Ys(y.topright,y.bottomright,p);let w=$n.fromValues(b,p);b=Ys(y.topleft,y.bottomleft,A);let P=$n.fromValues(b,A);b=Ys(y.topright,y.bottomright,A);let R=$n.fromValues(b,A),L={topleft:x,topright:w,bottomleft:P,bottomright:R,leftline:fr.fromPoints(fr.create(),x,P),rightline:fr.fromPoints(fr.create(),R,w)};if(_.length>0){let D=_[_.length-1],z=$n.distance(L.topleft,D.topright),I=$n.distance(L.bottomleft,D.bottomright);z<Ni&&I<Ni&&(L.topleft=D.topleft,L.leftline=D.leftline,L.bottomleft=D.bottomleft,_.splice(_.length-1,1))}_.push(L)}if(g>0){let M=new Set,y=new Set;for(let b=0;b<_.length;b++){let x=_[b];for(let w=0;w<d.length;w++)if(!y.has(w)){let P=d[w];if($n.distance(P.bottomleft,x.topleft)<Ni&&$n.distance(P.bottomright,x.topright)<Ni){y.add(w);let R=fr.direction(x.leftline),L=fr.direction(P.leftline),D=R[0]-L[0],z=fr.direction(x.rightline),I=fr.direction(P.rightline),q=z[0]-I[0],F=Math.abs(D)<Ni,k=Math.abs(q)<Ni,te=F||D>=0,H=k||q>=0;te&&H&&(x.outpolygon=P.outpolygon,x.leftlinecontinues=F,x.rightlinecontinues=k,M.add(w));break}}}for(let b=0;b<d.length;b++)if(!M.has(b)){let x=d[b];x.outpolygon.rightpoints.push(x.bottomright),$n.distance(x.bottomright,x.bottomleft)>Ni&&x.outpolygon.leftpoints.push(x.bottomleft),x.outpolygon.leftpoints.reverse();let P=x.outpolygon.rightpoints.concat(x.outpolygon.leftpoints).map(L=>r.to3D(L)),R=$A.fromPointsAndPlane(P,i);R.vertices.length&&e.push(R)}}for(let M=0;M<_.length;M++){let y=_[M];y.outpolygon?(y.leftlinecontinues||y.outpolygon.leftpoints.push(y.topleft),y.rightlinecontinues||y.outpolygon.rightpoints.push(y.topright)):(y.outpolygon={leftpoints:[],rightpoints:[]},y.outpolygon.leftpoints.push(y.topleft),$n.distance(y.topleft,y.topright)>Ni&&y.outpolygon.rightpoints.push(y.topright))}d=_}return e};JA.exports=SH});var Zs=E((qie,QA)=>{var jA=Ke(),MH=st(),{NEPS:bH}=ct(),wH=KA(),EH=n=>{if(n.isRetesselated)return n;let e=jA.toPolygons(n).map((s,o)=>({vertices:s.vertices,plane:MH.plane(s),index:o})),t=AH(e),i=[];t.forEach(s=>{if(Array.isArray(s)){let o=wH(s);for(let a=0;a<o.length;a++)i.push(o[a])}else i.push(s)});let r=jA.create(i);return r.isRetesselated=!0,r},AH=n=>{let e=[n],t=[];for(let r=3;r>=0;r--){let s=[],o=r===3?15e-9:bH;e.forEach(a=>{a.sort(TH(r,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[r]-a[c].plane[r]>o&&(l-c===1?t.push(a[c]):s.push(a.slice(c,l)),c=l);a.length-c===1?t.push(a[c]):s.push(a.slice(c))}),e=s}let i=[];return e.forEach(r=>{r[0]&&(i[r[0].index]=r)}),t.forEach(r=>{i[r.index]=r}),i},TH=(n,e)=>(t,i)=>t.plane[n]-i.plane[n]>e?1:i.plane[n]-t.plane[n]>e?-1:0;QA.exports=EH});var Sh=E((kie,tT)=>{var{EPS:$s}=ct(),eT=rr(),CH=(n,e)=>{if(n.polygons.length===0||e.polygons.length===0)return!1;let t=eT(n),i=t[0],r=t[1],s=eT(e),o=s[0],a=s[1];return!(o[0]-r[0]>$s||i[0]-a[0]>$s||o[1]-r[1]>$s||i[1]-a[1]>$s||o[2]-r[2]>$s||i[2]-a[2]>$s)};tT.exports=CH});var rT=E((Vie,iT)=>{var nT=Zn(),RH=st(),gp=class n{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=e}invert(){let e=[this],t;for(let i=0;i<e.length;i++){t=e[i],t.plane&&(t.plane=nT.flip(nT.create(),t.plane)),t.front&&e.push(t.front),t.back&&e.push(t.back);let r=t.front;t.front=t.back,t.back=r}}clipPolygons(e,t){let i={node:this,polygontreenodes:e},r,s=[];do{if(r=i.node,e=i.polygontreenodes,r.plane){let o=r.plane,a=[],c=[],l=t?a:c,h=e.length;for(let f=0;f<h;f++){let d=e[f];d.isRemoved()||d.splitByPlane(o,l,a,c,a)}r.front&&c.length>0&&s.push({node:r.front,polygontreenodes:c});let u=a.length;if(r.back&&u>0)s.push({node:r.back,polygontreenodes:a});else for(let f=0;f<u;f++)a[f].remove()}i=s.pop()}while(i!==void 0)}clipTo(e,t){let i=this,r=[];do i.polygontreenodes.length>0&&e.rootnode.clipPolygons(i.polygontreenodes,t),i.front&&r.push(i.front),i.back&&r.push(i.back),i=r.pop();while(i!==void 0)}addPolygonTreeNodes(e){let t={node:this,polygontreenodes:e},i=[];do{let r=t.node,s=t.polygontreenodes;if(s.length===0){t=i.pop();continue}if(!r.plane){let l=0;l=Math.floor(s.length/2);let h=s[l].getPolygon();r.plane=RH.plane(h)}let o=[],a=[],c=s.length;for(let l=0;l<c;++l)s[l].splitByPlane(r.plane,r.polygontreenodes,a,o,a);o.length>0&&(r.front||(r.front=new n(r)),c===o.length&&a.length===0?r.front.polygontreenodes=o:i.push({node:r.front,polygontreenodes:o})),a.length>0&&(r.back||(r.back=new n(r)),c===a.length&&o.length===0?r.back.polygontreenodes=a:i.push({node:r.back,polygontreenodes:a})),t=i.pop()}while(t!==void 0)}};iT.exports=gp});var oT=E((Gie,sT)=>{var Js=Ue(),PH=(n,e,t)=>{let i=Js.subtract(Js.create(),t,e),r=(n[3]-Js.dot(n,e))/Js.dot(n,i);return Number.isNaN(r)&&(r=0),r>1&&(r=1),r<0&&(r=0),Js.scale(i,i,r),Js.add(i,e,i),i};sT.exports=PH});var lT=E((Hie,cT)=>{var{EPS:Mh}=ct(),IH=Zn(),_p=Ue(),xp=st(),LH=oT(),DH=Mh*Mh,aT=n=>{let e=[],t=n[n.length-1];for(let i=0;i<n.length;i++){let r=n[i];_p.squaredDistance(r,t)>=DH&&e.push(r),t=r}return e},NH=(n,e)=>{let t={type:null,front:null,back:null},i=e.vertices,r=i.length,s=xp.plane(e);if(IH.equals(s,n))t.type=0;else{let o=!1,a=!1,c=[],l=-Mh;for(let h=0;h<r;h++){let u=_p.dot(n,i[h])-n[3],f=u<l;c.push(f),u>Mh&&(o=!0),u<l&&(a=!0)}if(!o&&!a){let h=_p.dot(n,s);t.type=h>=0?0:1}else if(!a)t.type=2;else if(!o)t.type=3;else{t.type=4;let h=[],u=[],f=c[0];for(let d=0;d<r;d++){let g=i[d],_=d+1;_>=r&&(_=0);let p=c[_];if(f===p)f?u.push(g):h.push(g);else{let m=i[_],v=LH(n,g,m);f?(u.push(g),u.push(v),h.push(v)):(h.push(g),h.push(v),u.push(v))}f=p}if(h.length>=3){let d=aT(h);d.length>=3&&(t.front=xp.fromPointsAndPlane(d,s))}if(u.length>=3){let d=aT(u);d.length>=3&&(t.back=xp.fromPointsAndPlane(d,s))}}}return t};cT.exports=NH});var fT=E((Wie,uT)=>{var{EPS:UH}=ct(),FH=Ue(),hT=st(),OH=lT(),vp=class n{constructor(e,t){this.parent=e,this.children=[],this.polygon=t,this.removed=!1}addPolygons(e){if(!this.isRootNode())throw new Error("Assertion failed");let t=this;e.forEach(i=>{t.addChild(i)})}remove(){this.removed||(this.removed=!0,this.polygon=null,this.parent.recursivelyInvalidatePolygon())}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(e){if(this.isRootNode()&&this.children.length>0){let c=[];for(let l=0;l<this.children.length;l++)this.children[l].removed||c.push(this.children[l]);this.children=c}let t=[this],i=[t],r,s,o,a;for(r=0;r<i.length;++r)for(t=i[r],s=0,o=t.length;s<o;s++)a=t[s],a.polygon?e.push(a.polygon):a.children.length>0&&i.push(a.children)}splitByPlane(e,t,i,r,s){if(this.children.length){let o=[this.children],a,c,l,h,u;for(a=0;a<o.length;a++)for(u=o[a],c=0,l=u.length;c<l;c++)h=u[c],h.children.length>0?o.push(h.children):h._splitByPlane(e,t,i,r,s)}else this._splitByPlane(e,t,i,r,s)}_splitByPlane(e,t,i,r,s){let o=this.polygon;if(o){let a=hT.measureBoundingSphere(o),c=a[3]+UH,l=a,h=FH.dot(e,l)-e[3];if(h>c)r.push(this);else if(h<-c)s.push(this);else{let u=OH(e,o);switch(u.type){case 0:t.push(this);break;case 1:i.push(this);break;case 2:r.push(this);break;case 3:s.push(this);break;case 4:if(u.front){let f=this.addChild(u.front);r.push(f)}if(u.back){let f=this.addChild(u.back);s.push(f)}break}}}}addChild(e){let t=new n(this,e);return this.children.push(t),t}invertSub(){let e=[this],t=[e],i,r,s,o;for(i=0;i<t.length;i++)for(e=t[i],r=0,s=e.length;r<s;r++)o=e[r],o.polygon&&(o.polygon=hT.invert(o.polygon)),o.children.length>0&&t.push(o.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let e=[this],t=[e];for(let i=0;i<t.length;++i){e=t[i];let r=e.length;for(let s=0;s<r;s++){let o=e[s];o.polygon&&(o.polygon=null),o.parent&&(o.parent=null),o.children.length>0&&t.push(o.children),o.children=[]}}}toString(){let e="",t=[this],i=[t],r,s,o,a;for(r=0;r<i.length;++r){t=i[r];let c=" ".repeat(r);for(s=0,o=t.length;s<o;s++)a=t[s],e+=`${c}PolygonTreeNode (${a.isRootNode()}): ${a.children.length}`,a.polygon?e+=`
 ${c}polygon: ${a.polygon.vertices}
`:e+=`
`,a.children.length>0&&i.push(a.children)}return e}};uT.exports=vp});var pT=E((Xie,dT)=>{var BH=rT(),zH=fT(),yp=class{constructor(e){this.polygonTree=new zH,this.rootnode=new BH(null),e&&this.addPolygons(e)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(e,t=!1){this.rootnode.clipTo(e,t)}allPolygons(){let e=[];return this.polygonTree.getPolygons(e),e}addPolygons(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=this.polygonTree.addChild(e[i]);this.rootnode.addPolygonTreeNodes(t)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}};dT.exports=yp});var bh=E((Yie,mT)=>{mT.exports={Tree:pT()}});var _T=E((Zie,xT)=>{var wh=Ke(),qH=Sh(),{Tree:gT}=bh(),kH=(n,e)=>{if(!qH(n,e))return wh.create();let t=new gT(wh.toPolygons(n)),i=new gT(wh.toPolygons(e));t.invert(),i.clipTo(t),i.invert(),t.clipTo(i),i.clipTo(t),t.addPolygons(i.allPolygons()),t.invert();let r=t.allPolygons();return wh.create(r)};xT.exports=kH});var Sp=E(($ie,vT)=>{var VH=$e(),GH=Zs(),HH=_T(),WH=(...n)=>{n=VH(n);let e=n.shift();return n.forEach(t=>{e=HH(e,t)}),e=GH(e),e};vT.exports=WH});var ST=E((Jie,yT)=>{var XH=$e(),YH=Ke(),ZH=Li(),$H=vh(),JH=yh(),KH=Sp(),jH=(...n)=>{n=XH(n);let e=n.map(r=>JH({z0:-1,z1:1},r)),t=KH(e),i=ZH(t);return $H(i,YH.toPolygons(t))};yT.exports=jH});var bT=E((Kie,MT)=>{var QH=$e(),eW=Xs(),tW=et(),nW=Ke(),iW=ST(),rW=Sp(),sW=(...n)=>{if(n=QH(n),n.length===0)throw new Error("wrong number of arguments");if(!eW(n))throw new Error("only intersect of the types are supported");let e=n[0];return tW.isA(e)?iW(n):nW.isA(e)?rW(n):e};MT.exports=sW});var Eh=E((jie,wT)=>{var oW=st(),aW=Zf(),cW=n=>aW(n,{skipTriangulation:!0}).map(i=>{let r=i.map(s=>n[s]);return oW.create(r)});wT.exports=cW});var Mp=E((Qie,AT)=>{var Ks=Ke(),lW=Sh(),{Tree:ET}=bh(),hW=(n,e)=>{if(!lW(n,e))return uW(n,e);let t=new ET(Ks.toPolygons(n)),i=new ET(Ks.toPolygons(e));t.clipTo(i,!1),i.clipTo(t),i.invert(),i.clipTo(t),i.invert();let r=t.allPolygons().concat(i.allPolygons());return Ks.create(r)},uW=(n,e)=>{let t=Ks.toPolygons(n);return t=t.concat(Ks.toPolygons(e)),Ks.create(t)};AT.exports=hW});var Ah=E((ere,TT)=>{var fW=$e(),dW=Zs(),pW=Mp(),mW=(...n)=>{n=fW(n);let e;for(e=1;e<n.length;e+=2)n.push(pW(n[e-1],n[e]));let t=n[e-1];return t=dW(t),t};TT.exports=mW});var bp=E((tre,IT)=>{var gW=$e(),li=Ke(),xa=st(),xW=Eh(),_W=Ah(),vW=(...n)=>{if(n=gW(n),n.length!==2)throw new Error("minkowskiSum requires exactly two geometries");let[e,t]=n;if(!li.isA(e)||!li.isA(t))throw new Error("minkowskiSum requires geom3 geometries");let i=li.isConvex(e),r=li.isConvex(t);if(i&&r)return PT(e,t);if(!i&&r)return CT(e,t);if(i&&!r)return CT(t,e);throw new Error("minkowskiSum of two non-convex geometries is not yet supported")},CT=(n,e)=>{let t=yW(n);if(t.length===0)return li.create();let i=t.map(r=>PT(r,e));return i.length===1?i[0]:_W(i)},yW=n=>{let e=li.toPolygons(n);if(e.length===0)return[];let t=[];for(let i=0;i<e.length;i++){let r=e[i],s=r.vertices,o=0,a=0,c=0;for(let _=0;_<s.length;_++)o+=s[_][0],a+=s[_][1],c+=s[_][2];o/=s.length,a/=s.length,c/=s.length;let l=xa.plane(r),h=l[0],u=l[1],f=l[2],d=.1,g=[o-h*d,a-u*d,c-f*d];for(let _=1;_<s.length-1;_++){let p=s[0],m=s[_],v=s[_+1],A=SW(g,p,m,v);t.push(li.create(A))}}return t},SW=(n,e,t,i)=>[xa.create([n,t,e]),xa.create([n,e,i]),xa.create([e,t,i]),xa.create([t,n,i])],PT=(n,e)=>{let t=RT(n),i=RT(e);if(t.length===0||i.length===0)return li.create();let r=[];for(let o=0;o<t.length;o++){let a=t[o];for(let c=0;c<i.length;c++){let l=i[c];r.push([a[0]+l[0],a[1]+l[1],a[2]+l[2]])}}let s=xW(r);return li.create(s)},RT=n=>{let e=new Set,t=[],i=li.toPolygons(n);for(let r=0;r<i.length;r++){let s=i[r].vertices;for(let o=0;o<s.length;o++){let a=s[o],c=`${a[0]},${a[1]},${a[2]}`;e.has(c)||(e.add(c),t.push(a))}}return t};IT.exports=vW});var NT=E((nre,DT)=>{var wp=Ue(),MW=Li(),LT=Ke(),bW=n=>n.sort((e,t)=>e-t).filter((e,t,i)=>!t||e!==i[t-1]),wW=(n,e,t)=>{let i=`${e}`,r=n.get(i);r===void 0?n.set(i,[t]):r.push(t)},EW=(n,e)=>{let t=`${e}`;return n.get(t)},AW=n=>{let e=MW(n),t=LT.toPolygons(n),i=t.length,r=new Map,s=wp.create();t.forEach((h,u)=>{h.vertices.forEach(f=>{wW(r,wp.snap(s,f,e),u)})});let o=t.map(h=>{let u=[];return h.vertices.forEach(f=>{u=u.concat(EW(r,wp.snap(s,f,e)))}),{e:1,d:bW(u)}});r.clear();let a=0,c=o.length;for(let h=0;h<c;h++){let u=o[h];if(u.e>0){let f=new Array(i);f[h]=!0;do a=0,f.forEach((d,g)=>{let _=o[g];if(_.e>0){_.e=-1;for(let p=0;p<_.d.length;p++)f[_.d[p]]=!0;a++}});while(a>0);u.indexes=f}}let l=[];for(let h=0;h<c;h++)if(o[h].indexes){let u=[];o[h].indexes.forEach((f,d)=>u.push(t[d])),l.push(LT.create(u))}return l};DT.exports=AW});var FT=E((ire,UT)=>{var TW=$e(),CW=Ke(),RW=NT(),PW=(...n)=>{if(n=TW(n),n.length===0)throw new Error("wrong number of arguments");let e=n.map(t=>CW.isA(t)?RW(t):t);return e.length===1?e[0]:e};UT.exports=PW});var zT=E((rre,BT)=>{var Th=Ke(),IW=Sh(),{Tree:OT}=bh(),LW=(n,e)=>{if(!IW(n,e))return Th.clone(n);let t=new OT(Th.toPolygons(n)),i=new OT(Th.toPolygons(e));t.invert(),t.clipTo(i),i.clipTo(t,!0),t.addPolygons(i.allPolygons()),t.invert();let r=t.allPolygons();return Th.create(r)};BT.exports=LW});var Ep=E((sre,qT)=>{var DW=$e(),NW=Zs(),UW=zT(),FW=(...n)=>{n=DW(n);let e=n.shift();return n.forEach(t=>{e=UW(e,t)}),e=NW(e),e};qT.exports=FW});var VT=E((ore,kT)=>{var OW=$e(),BW=Ke(),zW=Li(),qW=vh(),kW=yh(),VW=Ep(),GW=(...n)=>{n=OW(n);let e=n.map(r=>kW({z0:-1,z1:1},r)),t=VW(e),i=zW(t);return qW(i,BW.toPolygons(t))};kT.exports=GW});var HT=E((are,GT)=>{var HW=$e(),WW=Xs(),XW=et(),YW=Ke(),ZW=VT(),$W=Ep(),JW=(...n)=>{if(n=HW(n),n.length===0)throw new Error("wrong number of arguments");if(!WW(n))throw new Error("only subtract of the types are supported");let e=n[0];return XW.isA(e)?ZW(n):YW.isA(e)?$W(n):e};GT.exports=JW});var Ap=E((cre,WT)=>{var KW=$e(),jW=Ke(),QW=Li(),e9=vh(),t9=yh(),n9=Ah(),i9=(...n)=>{n=KW(n);let e=n.map(r=>t9({z0:-1,z1:1},r)),t=n9(e),i=QW(t);return e9(i,jW.toPolygons(t))};WT.exports=i9});var Ch=E((lre,XT)=>{var r9=$e(),s9=Xs(),o9=et(),a9=Ke(),c9=Ap(),l9=Ah(),h9=(...n)=>{if(n=r9(n),n.length===0)throw new Error("wrong number of arguments");if(!s9(n))throw new Error("only unions of the same type are supported");let e=n[0];return o9.isA(e)?c9(n):a9.isA(e)?l9(n):e};XT.exports=h9});var ZT=E((hre,YT)=>{YT.exports={intersect:bT(),minkowski:bp(),scission:FT(),subtract:HT(),union:Ch()}});var va=E((ure,JT)=>{var{EPS:u9,TAU:f9}=ct(),$T=Rd(),_a=Yl(),Dt=rt(),d9=sa(),p9=(n,e)=>{let t={delta:1,corners:"edge",closed:!1,segments:16},{delta:i,corners:r,closed:s,segments:o}=Object.assign({},t,n);if(Math.abs(i)<u9)return e;let a=n.closed?d9(e):1;a===0&&(a=1);let c=a>0&&i>=0||a<0&&i<0;i=Math.abs(i);let l=null,h=[],u=[],f=Dt.create(),d=e.length;for(let g=0;g<d;g++){let _=(g+1)%d,p=e[g],m=e[_];c?Dt.subtract(f,p,m):Dt.subtract(f,m,p),Dt.normal(f,f),Dt.normalize(f,f),Dt.scale(f,f,i);let v=Dt.add(Dt.create(),p,f),A=Dt.add(Dt.create(),m,f),M=[v,A];if(l!=null&&(s||!s&&_!==0)){let y=$T(l[0],l[1],M[0],M[1]);y?(h.pop(),M[0]=y):u.push({c:p,s0:l,s1:M})}l=[v,A],!(_===0&&!s)&&(h.push(M[0]),h.push(M[1]))}if(s&&l!=null){let g=h[0],_=h[1],p=$T(l[0],l[1],g,_);if(p)h[0]=p,h.pop();else{let m=e[0],v=[g,_];u.push({c:m,s0:l,s1:v})}}if(r==="edge"){let g=new Map;h.forEach((m,v)=>g.set(m,v));let _=_a.create(),p=_a.create();u.forEach(m=>{_a.fromPoints(_,m.s0[0],m.s0[1]),_a.fromPoints(p,m.s1[0],m.s1[1]);let v=_a.intersectPointOfLines(_,p);if(Number.isFinite(v[0])&&Number.isFinite(v[1])){let A=m.s0[1],M=g.get(A);h[M]=v,h[(M+1)%h.length]=void 0}else{let A=m.s1[0],M=g.get(A);h[M]=void 0}}),h=h.filter(m=>m!==void 0)}if(r==="round"){let g=Math.floor(o/4),_=Dt.create();u.forEach(p=>{let m=Dt.angle(Dt.subtract(_,p.s1[0],p.c));if(m-=Dt.angle(Dt.subtract(_,p.s0[1],p.c)),c&&m<0&&(m=m+Math.PI,m<0&&(m=m+Math.PI)),!c&&m>0&&(m=m-Math.PI,m>0&&(m=m-Math.PI)),m!==0){g=Math.floor(o*(Math.abs(m)/f9));let v=m/g,A=Dt.angle(Dt.subtract(_,p.s0[1],p.c)),M=[];for(let y=1;y<g;y++){let b=A+v*y,x=Dt.fromAngleRadians(Dt.create(),b);Dt.scale(x,x,i),Dt.add(x,x,p.c),M.push(x)}if(M.length>0){let y=p.s0[1],b=h.findIndex(x=>Dt.equals(y,x));b=(b+1)%h.length,h.splice(b,0,...M)}}else{let v=p.s1[0],A=h.findIndex(M=>Dt.equals(v,M));h.splice(A,1)}})}return h};JT.exports=p9});var jT=E((fre,KT)=>{var Rh=et(),m9=va(),g9=(n,e)=>{let t={delta:1,corners:"edge",segments:16},{delta:i,corners:r,segments:s}=Object.assign({},t,n);if(!(r==="edge"||r==="chamfer"||r==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');let c=Rh.toOutlines(e).map(l=>(n={delta:i,corners:r,closed:!0,segments:s},m9(n,l))).reduce((l,h)=>l.concat(Rh.toSides(Rh.fromPoints(h))),[]);return Rh.create(c)};KT.exports=g9});var t3=E((dre,e3)=>{var QT=bt(),x9=Ue(),_9=Ke(),ya=st(),v9=(n,e)=>{x9.dot(ya.plane(e),n)>0&&(e=ya.invert(e));let i=[e],r=ya.transform(QT.fromTranslation(QT.create(),n),e),s=e.vertices.length;for(let o=0;o<s;o++){let a=o<s-1?o+1:0,c=ya.create([e.vertices[o],r.vertices[o],r.vertices[a],e.vertices[a]]);i.push(c)}return i.push(ya.invert(r)),_9.create(i)};e3.exports=v9});var r3=E((pre,i3)=>{var{EPS:y9,TAU:Tp}=ct(),n3=bt(),Tt=Ue(),S9=pp(),Cp=Ke(),zr=st(),M9=jd(),b9=Zs(),Rp=Mp(),w9=t3(),E9=(n,e,t)=>{let i=e.toString();if(n.has(i))n.get(i)[1].push(t);else{let r=[e,[t]];n.set(i,r)}},A9=(n,e,t)=>{let i=e[0].toString(),r=e[1].toString(),s=i<r?`${i},${r}`:`${r},${i}`;if(n.has(s))n.get(s)[1].push(t);else{let o=[e,[t]];n.set(s,o)}},Pp=(n,e)=>{n.findIndex(i=>i===e)<0&&n.push(e)},T9=(n,e)=>{let t={delta:1,segments:12},{delta:i,segments:r}=Object.assign({},t,n),s=Cp.create(),o=new Map,a=new Map,c=Tt.create(),l=Tt.create();return Cp.toPolygons(e).forEach((u,f)=>{let d=Tt.scale(Tt.create(),zr.plane(u),2*i),g=zr.transform(n3.fromTranslation(n3.create(),Tt.scale(Tt.create(),d,-.5)),u),_=w9(d,g);s=Rp(s,_);let p=u.vertices;for(let m=0;m<p.length;m++){E9(o,p[m],zr.plane(u));let v=(m+1)%p.length,A=[p[m],p[v]];A9(a,A,zr.plane(u))}}),a.forEach(u=>{let f=u[0],d=u[1],g=f[0],_=f[1],p=Tt.subtract(Tt.create(),_,g);Tt.normalize(p,p);let m=d[0],v=Tt.cross(Tt.create(),m,p),A=[];for(let L=0;L<r;L++)Pp(A,L*Tp/r);for(let L=0,D=d.length;L<D;L++){let z=d[L],I=Tt.dot(v,z),q=Tt.dot(m,z),F=Math.atan2(I,q);F<0&&(F+=Tp),Pp(A,F),F=Math.atan2(-I,-q),F<0&&(F+=Tp),Pp(A,F)}A=A.sort(S9);let M=A.length,y,b,x=[],w=[],P=[];for(let L=-1;L<M;L++){let D=A[L<0?L+M:L],z=Math.sin(D),I=Math.cos(D);Tt.scale(c,m,I*i),Tt.scale(l,v,z*i),Tt.add(c,c,l);let q=Tt.add(Tt.create(),g,c),F=Tt.add(Tt.create(),_,c),k=!1;if(L>=0&&Tt.distance(q,y)<y9&&(k=!0),!k){if(L>=0){x.push(q),w.push(F);let te=[b,F,q,y],H=zr.create(te);P.push(H)}y=q,b=F}}w.reverse(),P.push(zr.create(x)),P.push(zr.create(w));let R=Cp.create(P);s=Rp(s,R)}),o.forEach(u=>{let f=u[0],d=u[1],g=d[0],_=null,p=0;for(let M=1;M<d.length;M++){let y=d[M],b=Tt.cross(c,g,y),x=Tt.length(b);x>.05&&x>p&&(p=x,_=y)}_||(_=Tt.orthogonal(c,g));let m=Tt.cross(c,g,_);Tt.normalize(m,m);let v=Tt.cross(l,m,g),A=M9({center:[f[0],f[1],f[2]],radius:i,segments:r,axes:[g,m,v]});s=Rp(s,A)}),b9(s)};i3.exports=T9});var o3=E((mre,s3)=>{var C9=Ke(),R9=Ch(),P9=r3(),I9=(n,e)=>{let t={delta:1,corners:"round",segments:12},{delta:i,corners:r,segments:s}=Object.assign({},t,n);if(r!=="round")throw new Error('corners must be "round" for 3D geometries');if(C9.toPolygons(e).length===0)throw new Error("the given geometry cannot be empty");n={delta:i,corners:r,segments:s};let a=P9(n,e);return R9(e,a)};s3.exports=I9});var l3=E((gre,c3)=>{var L9=sa(),Mn=rt(),js=et(),Sa=Mt(),a3=va(),D9=n=>{let{external:e,internal:t}=n;L9(e)<0?e=e.reverse():t=t.reverse();let i=Sa.fromPoints({closed:!0},e),r=Sa.fromPoints({closed:!0},t),s=js.toSides(js.fromPoints(Sa.toPoints(i))),o=js.toSides(js.fromPoints(Sa.toPoints(r)));return s.push(...o),js.create(s)},N9=(n,e,t,i)=>{let{points:r,external:s,internal:o}=n,a=Math.floor(e/2),c=[],l=[];if(t==="round"&&a>0){let u=Math.PI/a,f=r[r.length-1],d=Mn.angle(Mn.subtract(Mn.create(),s[s.length-1],f)),g=r[0],_=Mn.angle(Mn.subtract(Mn.create(),o[0],g));for(let p=1;p<a;p++){let m=d+u*p,v=Mn.fromAngleRadians(Mn.create(),m);Mn.scale(v,v,i),Mn.add(v,v,f),c.push(v),m=_+u*p,v=Mn.fromAngleRadians(Mn.create(),m),Mn.scale(v,v,i),Mn.add(v,v,g),l.push(v)}}let h=[];return h.push(...s,...c,...o.reverse(),...l),js.fromPoints(h)},U9=(n,e)=>{n=Object.assign({},{delta:1,corners:"edge",segments:16},n);let{delta:i,corners:r,segments:s}=n;if(i<=0)throw new Error("the given delta must be positive for paths");if(!(r==="edge"||r==="chamfer"||r==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');let o=e.isClosed,a=Sa.toPoints(e);if(a.length===0)throw new Error("the given geometry cannot be empty");let c={points:a,external:a3({delta:i,corners:r,segments:s,closed:o},a),internal:a3({delta:-i,corners:r,segments:s,closed:o},a)};return e.isClosed?D9(c):N9(c,s,r,i)};c3.exports=U9});var Ph=E((xre,h3)=>{var F9=$e(),O9=et(),B9=Ke(),z9=Mt(),q9=jT(),k9=o3(),V9=l3(),G9=(n,...e)=>{if(e=F9(e),e.length===0)throw new Error("wrong number of arguments");let t=e.map(i=>z9.isA(i)?V9(n,i):O9.isA(i)?q9(n,i):B9.isA(i)?k9(n,i):i);return t.length===1?t[0]:t};h3.exports=G9});var d3=E((_re,f3)=>{var Ih=et(),u3=Vl(),H9=va(),W9=(n,e)=>{let t={delta:1,corners:"edge",segments:0},{delta:i,corners:r,segments:s}=Object.assign({},t,n);if(!(r==="edge"||r==="chamfer"||r==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');let o=Ih.toOutlines(e),c=o.map(l=>(n={delta:o.reduce((f,d)=>f+u3.arePointsInside(l,u3.create(d)),0)%2===0?i:-i,corners:r,closed:!0,segments:s},H9(n,l))).reduce((l,h)=>l.concat(Ih.toSides(Ih.fromPoints(h))),[]);return Ih.create(c)};f3.exports=W9});var g3=E((vre,m3)=>{var p3=Mt(),X9=va(),Y9=(n,e)=>{let t={delta:1,corners:"edge",closed:e.isClosed,segments:16},{delta:i,corners:r,closed:s,segments:o}=Object.assign({},t,n);if(!(r==="edge"||r==="chamfer"||r==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');n={delta:i,corners:r,closed:s,segments:o};let a=X9(n,p3.toPoints(e));return p3.fromPoints({closed:s},a)};m3.exports=Y9});var _3=E((yre,x3)=>{var Z9=$e(),$9=et(),J9=Mt(),K9=d3(),j9=g3(),Q9=(n,...e)=>{if(e=Z9(e),e.length===0)throw new Error("wrong number of arguments");let t=e.map(i=>J9.isA(i)?j9(n,i):$9.isA(i)?K9(n,i):i);return t.length===1?t[0]:t};x3.exports=Q9});var y3=E((Sre,v3)=>{v3.exports={expand:Ph(),offset:_3()}});var ba=E((Mre,S3)=>{var Ma=bt(),Ip=Ue(),e7=et(),Lp=Br(),t7=ma(),n7=(n,e)=>{let t={offset:[0,0,1],twistAngle:0,twistSteps:12,repair:!0},{offset:i,twistAngle:r,twistSteps:s,repair:o}=Object.assign({},t,n);if(s<1)throw new Error("twistSteps must be 1 or more");r===0&&(s=1);let a=Ip.clone(i),c=e7.toSides(e);if(c.length===0)throw new Error("the given geometry cannot be empty");let l=Lp.fromSides(c);a[2]<0&&Lp.reverse(l,l);let h=Ma.create(),u=(f,d,g)=>{let _=d/s*r,p=Ip.scale(Ip.create(),a,d/s);return Ma.multiply(h,Ma.fromZRotation(h,_),Ma.fromTranslation(Ma.create(),p)),Lp.transform(h,g)};return n={numberOfSlices:s+1,capStart:!0,capEnd:!0,repair:o,callback:u},t7(n,l)};S3.exports=n7});var b3=E((bre,M3)=>{var i7=et(),r7=Mt(),s7=ba(),o7=(n,e)=>{if(!e.isClosed)throw new Error("extruded path must be closed");let t=r7.toPoints(e),i=i7.fromPoints(t);return s7(n,i)};M3.exports=o7});var E3=E((wre,w3)=>{var a7=$e(),c7=et(),l7=Mt(),h7=ba(),u7=b3(),f7=(n,...e)=>{let t={height:1,twistAngle:0,twistSteps:1,repair:!0},{height:i,twistAngle:r,twistSteps:s,repair:o}=Object.assign({},t,n);if(e=a7(e),e.length===0)throw new Error("wrong number of arguments");n={offset:[0,0,i],twistAngle:r,twistSteps:s,repair:o};let a=e.map(c=>l7.isA(c)?u7(n,c):c7.isA(c)?h7(n,c):c);return a.length===1?a[0]:a};w3.exports=f7});var T3=E((Ere,A3)=>{var d7=Mt(),p7=Ph(),m7=ba(),g7=(n,e)=>{let t={size:1,height:1},{size:i,height:r}=Object.assign({},t,n);if(n.delta=i,n.offset=[0,0,r],d7.toPoints(e).length===0)throw new Error("the given geometry cannot be empty");let o=p7(n,e);return m7(n,o)};A3.exports=g7});var R3=E((Are,C3)=>{var{area:x7}=Ls(),Dp=et(),_7=Mt(),v7=Ph(),y7=ba(),S7=(n,e)=>{let t={size:1,height:1},{size:i,height:r}=Object.assign({},t,n);n.delta=i,n.offset=[0,0,r];let s=Dp.toOutlines(e);if(s.length===0)throw new Error("the given geometry cannot be empty");let a=s.map(l=>(x7(l)<0&&l.reverse(),v7(n,_7.fromPoints({closed:!0},l)))).reduce((l,h)=>l.concat(Dp.toSides(h)),[]),c=Dp.create(a);return y7(n,c)};C3.exports=S7});var I3=E((Tre,P3)=>{var M7=$e(),b7=et(),w7=Mt(),E7=T3(),A7=R3(),T7=(n,...e)=>{let t={size:1,height:1},{size:i,height:r}=Object.assign({},t,n);if(e=M7(e),e.length===0)throw new Error("wrong number of arguments");if(i<=0)throw new Error("size must be positive");if(r<=0)throw new Error("height must be positive");let s=e.map(o=>w7.isA(o)?E7(n,o):b7.isA(o)?A7(n,o):o);return s.length===1?s[0]:s};P3.exports=T7});var D3=E((Cre,L3)=>{var{TAU:wa}=ct(),hi=bt(),C7=et(),R7=ma(),Np=Br(),P7=(n,e)=>{let t={angle:wa,startAngle:0,pitch:10,height:0,endOffset:0,segmentsPerRotation:32},{angle:i,startAngle:r,pitch:s,height:o,endOffset:a,segmentsPerRotation:c}=Object.assign({},t,n);if(o!=0&&(s=o/(i/wa)),c<3)throw new Error("The number of segments per rotation needs to be at least 3.");let h=C7.toSides(e);if(h.length===0)throw new Error("The given geometry cannot be empty");let u=h.filter(v=>v[0][0]>=0),f=Np.fromSides(h);u.length===0&&(f=Np.reverse(f));let d=Math.round(c/wa*Math.abs(i)),g=d>=2?d:2,_=hi.create(),p=hi.create(),m=(v,A,M)=>{let y=r+i/g*A,b=a/g*A,x=(y-r)/wa*s;return hi.multiply(_,hi.fromTranslation(hi.create(),[b,0,x*Math.sign(i)]),hi.fromXRotation(hi.create(),-wa/4*Math.sign(i))),hi.multiply(p,hi.fromZRotation(hi.create(),y),_),Np.transform(p,M)};return R7({numberOfSlices:g+1,callback:m},f)};L3.exports=P7});var z3=E((Rre,B3)=>{var I7=$e(),N3=Xl(),Up=Zn(),U3=bt(),F3=et(),O3=Ke(),Qs=st(),L7=Li(),D7=Ap(),N7=(n,e)=>{let t=Up.fromNormalAndPoint(Up.create(),n.axis,n.origin);if(Number.isNaN(t[0])||Number.isNaN(t[1])||Number.isNaN(t[2])||Number.isNaN(t[3]))throw new Error("project: invalid axis or origin");let i=L7(e),r=i*i*Math.sqrt(3)/4;if(i===0)return F3.create();let s=O3.toPolygons(e),o=[];for(let c=0;c<s.length;c++){let l=s[c].vertices.map(f=>Up.projectionOfPoint(t,f)),h=Qs.create(l),u=Qs.plane(h);N3(t,u)&&(Qs.measureArea(h)<r||o.push(h))}if(!N3(t,[0,0,1])){let c=U3.fromVectorRotation(U3.create(),t,[0,0,1]);o=o.map(l=>Qs.transform(c,l))}o=o.sort((c,l)=>Qs.measureArea(l)-Qs.measureArea(c));let a=o.map(c=>F3.fromPoints(c.vertices));return D7(a)},U7=(n,...e)=>{let t={axis:[0,0,1],origin:[0,0,0]},{axis:i,origin:r}=Object.assign({},t,n);if(e=I7(e),e.length===0)throw new Error("wrong number of arguments");n={axis:i,origin:r};let s=e.map(o=>O3.isA(o)?N7(n,o):o);return s.length===1?s[0]:s};B3.exports=U7});var k3=E((Pre,q3)=>{q3.exports={extrudeFromSlices:ma(),extrudeLinear:E3(),extrudeRectangular:I3(),extrudeRotate:cp(),extrudeHelical:D3(),project:z3(),slice:Br()}});var Lh=E((Ire,G3)=>{var V3=rt(),F7=n=>{let e=V3.fromValues(1/0,1/0);n.forEach(r=>{(r[1]<e[1]||r[1]===e[1]&&r[0]<e[0])&&(e=r)});let t=[];n.forEach(r=>{let s=B7(r[1]-e[1],r[0]-e[0]),o=V3.squaredDistance(r,e);t.push({point:r,angle:s,distSq:o})}),t.sort((r,s)=>r.angle!==s.angle?r.angle-s.angle:r.distSq-s.distSq);let i=[];return t.forEach(r=>{let s=i.length;for(;s>1&&O7(i[s-2],i[s-1],r.point)<=Number.EPSILON;)i.pop(),s=i.length;i.push(r.point)}),i},O7=(n,e,t)=>(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0]),B7=(n,e)=>n===0&&e===0?-1/0:-e/n;G3.exports=F7});var Dh=E((Lre,Y3)=>{var H3=et(),W3=Ke(),X3=Mt(),z7=n=>{let e=new Set,t=[],i=r=>{let s=r.toString();e.has(s)||(t.push(r),e.add(s))};return n.forEach(r=>{H3.isA(r)?H3.toPoints(r).forEach(i):W3.isA(r)?W3.toPoints(r).forEach(s=>s.forEach(i)):X3.isA(r)&&X3.toPoints(r).forEach(i)}),t};Y3.exports=z7});var $3=E((Dre,Z3)=>{var q7=$e(),k7=Mt(),V7=Lh(),G7=Dh(),H7=(...n)=>{n=q7(n);let e=G7(n),t=V7(e);return k7.fromPoints({closed:!0},t)};Z3.exports=H7});var j3=E((Nre,K3)=>{var W7=$e(),J3=et(),X7=Lh(),Y7=Dh(),Z7=(...n)=>{n=W7(n);let e=Y7(n),t=X7(e);return t.length<3?J3.create():J3.fromPoints(t)};K3.exports=Z7});var tC=E((Ure,eC)=>{var $7=$e(),Q3=Ke(),J7=Dh(),K7=Eh(),j7=(...n)=>{n=$7(n);let e=J7(n);return e.length===0?Q3.create():Q3.create(K7(e))};eC.exports=j7});var Fp=E((Fre,nC)=>{var Q7=$e(),eX=Xs(),tX=et(),nX=Ke(),iX=Mt(),rX=$3(),sX=j3(),oX=tC(),aX=(...n)=>{if(n=Q7(n),n.length===0)throw new Error("wrong number of arguments");if(!eX(n))throw new Error("only hulls of the same type are supported");let e=n[0];return iX.isA(e)?rX(n):tX.isA(e)?sX(n):nX.isA(e)?oX(n):e};nC.exports=aX});var rC=E((Ore,iC)=>{var cX=$e(),lX=Ch(),hX=Fp(),uX=(...n)=>{if(n=cX(n),n.length<2)throw new Error("wrong number of arguments");let e=[];for(let t=1;t<n.length;t++)e.push(hX(n[t-1],n[t]));return lX(e)};iC.exports=uX});var oC=E((Bre,sC)=>{sC.exports={hull:Fp(),hullChain:rC(),hullPoints2:Lh(),hullPoints3:Eh()}});var cC=E((zre,aC)=>{aC.exports={minkowskiSum:bp()}});var Bp=E((qre,hC)=>{var Op=Ue(),lC=st(),fX=(n,e)=>{let t=Math.abs(lC.measureArea(e));return Number.isFinite(t)&&t>n},dX=(n,e)=>{let t=e.map(r=>{let s=r.vertices.map(c=>Op.snap(Op.create(),c,n)),o=[];for(let c=0;c<s.length;c++){let l=(c+1)%s.length;Op.equals(s[c],s[l])||o.push(s[c])}let a=lC.create(o);return r.color&&(a.color=r.color),a}),i=n*n*Math.sqrt(3)/4;return t=t.filter(r=>fX(i,r)),t};hC.exports=dX});var dC=E((kre,fC)=>{var pX=Xl(),eo=Ue(),Nh=st(),mX=n=>{let e=Nh.toPoints(n),t=[];for(let i=0;i<e.length;i++){let r=(i+1)%e.length,s={v1:e[i],v2:e[r]};t.push(s)}for(let i=0;i<t.length;i++){let r=(i+1)%e.length;t[i].next=t[r],t[r].prev=t[i]}return t},gX=(n,e)=>{let t=`${e.v1}:${e.v2}`;n.set(t,e)},zp=(n,e)=>{let t=`${e.v1}:${e.v2}`;n.delete(t)},xX=(n,e)=>{let t=`${e.v2}:${e.v1}`;return n.get(t)},_X=(n,e,t)=>{let i=n.prev.v1,r=n.prev.v2,s=e.next.v2,o=uC(i,r,s,t);i=e.prev.v1,r=e.prev.v2,s=n.next.v2;let a=uC(i,r,s,t);return[o,a]},vX=eo.create(),yX=eo.create(),uC=(n,e,t,i)=>{let r=eo.subtract(vX,e,n),s=eo.subtract(yX,t,e);return eo.cross(r,r,s),eo.dot(r,i)},SX=n=>{let e,t=[];for(;n.next;){let i=n.next;t.push(n.v1),n.v1=null,n.v2=null,n.next=null,n.prev=null,n=i}return t.length>0&&(e=Nh.create(t)),e},MX=n=>{if(n.length<2)return n;let e=n[0].plane,t=n.slice(),i=new Map;for(;t.length>0;){let s=t.shift(),o=mX(s);for(let a=0;a<o.length;a++){let c=o[a],l=xX(i,c);if(l){let h=_X(c,l,e);if(h[0]>=0&&h[1]>=0){let u=l.next,f=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,zp(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;let d=(g,_,p)=>{let m={v1:p.v1,v2:_.v2,next:_.next,prev:p.prev};p.prev.next=m,_.next.prev=m,zp(g,_),_.v1=null,_.v2=null,_.next=null,_.prev=null,zp(g,p),p.v1=null,p.v2=null,p.next=null,p.prev=null};h[0]===0&&d(i,u,u.prev),h[1]===0&&d(i,f,f.prev)}}else c.next&&gX(i,c)}}let r=[];return i.forEach(s=>{let o=SX(s);o&&r.push(o)}),i.clear(),r},bX=(n,e)=>Math.abs(n[3]-e[3])<15e-8?pX(n,e):!1,wX=(n,e)=>{let t=[];e.forEach(r=>{let s=t.find(o=>bX(o[0],Nh.plane(r)));s?s[1].push(r):t.push([Nh.plane(r),[r]])});let i=[];return t.forEach(r=>{let s=r[1],o=MX(s);i=i.concat(o)}),i};fC.exports=wX});var xC=E((Vre,gC)=>{var pC=ct(),ui=Ue(),EX=st(),dr=!1,an=n=>`${n}`,mC=(n,e,t,i,r,s)=>{let o=an(i),a=an(r);if(dr&&o===a)throw new Error("assert failed");let c=`${o}/${a}`,l=`${a}/${o}`;if(n.has(l))return Uh(n,e,t,r,i,null),null;let h={vertex0:i,vertex1:r,polygonindex:s};return n.has(c)?n.get(c).push(h):n.set(c,[h]),e.has(o)?e.get(o).push(c):e.set(o,[c]),t.has(a)?t.get(a).push(c):t.set(a,[c]),c},Uh=(n,e,t,i,r,s)=>{let o=an(i),a=an(r),c=`${o}/${a}`;if(dr&&!n.has(c))throw new Error("assert failed");let l=-1,h=n.get(c);for(let u=0;u<h.length;u++){let f=h[u],d=an(f.vertex0);if(d===o&&(d=an(f.vertex1),d===a&&!(s!==null&&f.polygonindex!==s))){l=u;break}}if(dr&&l<0)throw new Error("assert failed");if(h.splice(l,1),h.length===0&&n.delete(c),l=e.get(o).indexOf(c),dr&&l<0)throw new Error("assert failed");if(e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=t.get(a).indexOf(c),dr&&l<0)throw new Error("assert failed");t.get(a).splice(l,1),t.get(a).length===0&&t.delete(a)},AX=n=>{let e=new Map;for(let t=0;t<n.length;t++){let i=n[t],r=i.vertices.length;if(r>=3){let s=i.vertices[0],o=an(s);for(let a=0;a<r;a++){let c=a+1;c===r&&(c=0);let l=i.vertices[c],h=an(l),u=`${o}/${h}`,f=`${h}/${o}`;if(e.has(f)){let d=e.get(f);d.splice(-1,1),d.length===0&&e.delete(f)}else{let d={vertex0:s,vertex1:l,polygonindex:t};e.has(u)?e.get(u).push(d):e.set(u,[d])}s=l,o=h}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){let t=new Map,i=new Map,r=new Map;for(let[o,a]of e)r.set(o,!0),a.forEach(c=>{let l=an(c.vertex0),h=an(c.vertex1);t.has(l)?t.get(l).push(o):t.set(l,[o]),i.has(h)?i.get(h).push(o):i.set(h,[o])});let s=n.slice(0);for(;e.size!==0;){for(let a of e.keys())r.set(a,!0);let o=!1;for(;;){let a=Array.from(r.keys());if(a.length===0)break;let c=a[0],l=!0;if(e.has(c)){let h=e.get(c);if(dr&&h.length===0)throw new Error("assert failed");let u=h[0];for(let f=0;f<2;f++){let d=f===0?u.vertex0:u.vertex1,g=f===0?u.vertex1:u.vertex0,_=an(d),p=an(g),m=[];f===0?i.has(_)&&(m=i.get(_)):t.has(_)&&(m=t.get(_));for(let v=0;v<m.length;v++){let A=m[v],M=e.get(A)[0],y=f===0?M.vertex0:M.vertex1,b=f===0?M.vertex1:M.vertex0,x=an(y),w=an(b);if(dr&&w!==_)throw new Error("assert failed");if(x===p){Uh(e,t,i,d,g,null),Uh(e,t,i,g,d,null),l=!1,f=2,o=!0;break}else{let P=d,R=g,L=y,D=ui.subtract(ui.create(),L,P),z=ui.dot(ui.subtract(ui.create(),R,P),D)/ui.dot(D,D);if(z>0&&z<1){let I=ui.scale(ui.create(),D,z);if(ui.add(I,I,P),ui.squaredDistance(I,R)<pC.EPS*pC.EPS){let F=M.polygonindex,k=s[F],te=an(M.vertex1),H=-1;for(let $=0;$<k.vertices.length;$++)if(an(k.vertices[$])===te){H=$;break}if(dr&&H<0)throw new Error("assert failed");let ne=k.vertices.slice(0);ne.splice(H,0,g);let ie=EX.create(ne);s[F]=ie,Uh(e,t,i,M.vertex0,M.vertex1,F);let be=mC(e,t,i,M.vertex0,g,F),Ce=mC(e,t,i,g,M.vertex1,F);be!==null&&r.set(be,!0),Ce!==null&&r.set(Ce,!0),l=!1,f=2,o=!0;break}}}}}}l&&r.delete(c)}if(!o)break}n=s}return e.clear(),n};gC.exports=AX});var vC=E((Gre,_C)=>{var qp=Ue(),kp=st(),TX=(n,e,t)=>{let i=e.vertices.length;if(i>3){if(i>4){let o=[0,0,0];e.vertices.forEach(a=>qp.add(o,o,a)),qp.snap(o,qp.divide(o,o,[i,i,i]),n);for(let a=0;a<i;a++){let c=kp.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),t.push(c)}return}let r=kp.create([e.vertices[0],e.vertices[1],e.vertices[2]]),s=kp.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(r.color=e.color,s.color=e.color),t.push(r,s);return}t.push(e)},CX=(n,e)=>{let t=[];return e.forEach(i=>{TX(n,i,t)}),t};_C.exports=CX});var MC=E((Hre,SC)=>{var RX=$e(),PX=Li(),IX=et(),yC=Ke(),LX=Mt(),DX=Bp(),NX=dC(),UX=xC(),FX=vC(),OX=(n,e)=>e,BX=(n,e)=>e,zX=(n,e)=>{let t={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:r,triangulate:s}=Object.assign({},t,n),o=PX(e),a=yC.toPolygons(e);i&&(a=DX(o,a)),r&&(a=NX(o,a)),s&&(a=UX(a),a=FX(o,a));let c=Object.assign({},e);return c.polygons=a,c},qX=(n,...e)=>{if(e=RX(e),e.length===0)throw new Error("wrong number of arguments");let t=e.map(i=>{if(LX.isA(i))return OX(n,i);if(IX.isA(i))return BX(n,i);if(yC.isA(i))return zX(n,i);throw new Error("invalid geometry")});return t.length===1?t[0]:t};SC.exports=qX});var wC=E((Wre,bC)=>{var kX=$e(),qr=rt(),Vp=et(),Gp=Ke(),Hp=Mt(),Wp=Li(),VX=Bp(),GX=n=>{let e=Wp(n),i=Hp.toPoints(n).map(r=>qr.snap(qr.create(),r,e));return Hp.create(i)},HX=n=>{let e=Wp(n),i=Vp.toSides(n).map(r=>[qr.snap(qr.create(),r[0],e),qr.snap(qr.create(),r[1],e)]);return i=i.filter(r=>!qr.equals(r[0],r[1])),Vp.create(i)},WX=n=>{let e=Wp(n),t=Gp.toPolygons(n),i=VX(e,t);return Gp.create(i)},XX=(...n)=>{if(n=kX(n),n.length===0)throw new Error("wrong number of arguments");let e=n.map(t=>Hp.isA(t)?GX(t):Vp.isA(t)?HX(t):Gp.isA(t)?WX(t):t);return e.length===1?e[0]:e};bC.exports=XX});var AC=E((Xre,EC)=>{EC.exports={generalize:MC(),snap:wC(),retessellate:Zs()}});var CC=E((Yre,TC)=>{var YX=(n,e,t)=>{for(n=n.slice();n.length<t;)n.push(e);return n};TC.exports=YX});var DC=E((Zre,LC)=>{var ZX=$e(),RC=CC(),IC=Jl(),{translate:$X}=hr(),JX=n=>{if(!Array.isArray(n.modes)||n.modes.length>3)throw new Error("align(): modes must be an array of length <= 3");if(n.modes=RC(n.modes,"none",3),n.modes.filter(e=>["center","max","min","none"].includes(e)).length!==3)throw new Error('align(): all modes must be one of "center", "max" or "min"');if(!Array.isArray(n.relativeTo)||n.relativeTo.length>3)throw new Error("align(): relativeTo must be an array of length <= 3");if(n.relativeTo=RC(n.relativeTo,0,3),n.relativeTo.filter(e=>Number.isFinite(e)||e==null).length!==3)throw new Error("align(): all relativeTo values must be a number, or null.");if(typeof n.grouped!="boolean")throw new Error("align(): grouped must be a boolean value.");return n},KX=(n,e,t)=>{for(let i=0;i<3;i++)n[i]==null&&(e[i]==="center"?n[i]=(t[0][i]+t[1][i])/2:e[i]==="max"?n[i]=t[1][i]:e[i]==="min"&&(n[i]=t[0][i]));return n},PC=(n,e,t)=>{let i=IC(n),r=[0,0,0];for(let s=0;s<3;s++)e[s]==="center"?r[s]=t[s]-(i[0][s]+i[1][s])/2:e[s]==="max"?r[s]=t[s]-i[1][s]:e[s]==="min"&&(r[s]=t[s]-i[0][s]);return $X(r,n)},jX=(n,...e)=>{n=Object.assign({},{modes:["center","center","min"],relativeTo:[0,0,0],grouped:!1},n),n=JX(n);let{modes:i,relativeTo:r,grouped:s}=n;if(e=ZX(e),e.length===0)throw new Error("align(): No geometries were provided to act upon");if(r.filter(o=>o==null).length){let o=IC(e);r=KX(r,i,o)}return s?e=PC(e,i,r):e=e.map(o=>PC(o,i,r)),e.length===1?e[0]:e};LC.exports=jX});var Ea=E(($re,NC)=>{var QX=$e(),eY=et(),tY=Ke(),nY=Mt(),iY=rr(),{translate:rY}=hr(),Xp=(n,e)=>{let t={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:r}=Object.assign({},t,n),s=iY(e),o=[0,0,0];return i[0]&&(o[0]=r[0]-(s[0][0]+(s[1][0]-s[0][0])/2)),i[1]&&(o[1]=r[1]-(s[0][1]+(s[1][1]-s[0][1])/2)),i[2]&&(o[2]=r[2]-(s[0][2]+(s[1][2]-s[0][2])/2)),rY(o,e)},Fh=(n,...e)=>{let t={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:r}=Object.assign({},t,n);if(e=QX(e),e.length===0)throw new Error("wrong number of arguments");if(r.length!==3)throw new Error("relativeTo must be an array of length 3");n={axes:i,relativeTo:r};let s=e.map(o=>nY.isA(o)||eY.isA(o)||tY.isA(o)?Xp(n,o):o);return s.length===1?s[0]:s},sY=(...n)=>Fh({axes:[!0,!1,!1]},n),oY=(...n)=>Fh({axes:[!1,!0,!1]},n),aY=(...n)=>Fh({axes:[!1,!1,!0]},n);NC.exports={center:Fh,centerX:sY,centerY:oY,centerZ:aY}});var Aa=E((Jre,zC)=>{var cY=$e(),UC=bt(),FC=et(),OC=Ke(),BC=Mt(),Oh=(n,...e)=>{if(!Array.isArray(n))throw new Error("factors must be an array");if(e=cY(e),e.length===0)throw new Error("wrong number of arguments");for(n=n.slice();n.length<3;)n.push(1);if(n[0]<=0||n[1]<=0||n[2]<=0)throw new Error("factors must be positive");let t=UC.fromScaling(UC.create(),n),i=e.map(r=>BC.isA(r)?BC.transform(t,r):FC.isA(r)?FC.transform(t,r):OC.isA(r)?OC.transform(t,r):r);return i.length===1?i[0]:i},lY=(n,...e)=>Oh([n,1,1],e),hY=(n,...e)=>Oh([1,n,1],e),uY=(n,...e)=>Oh([1,1,n],e);zC.exports={scale:Oh,scaleX:lY,scaleY:hY,scaleZ:uY}});var HC=E((Kre,GC)=>{var fY=$e(),qC=et(),kC=Ke(),VC=Mt(),dY=(n,...e)=>{if(e=fY(e),e.length===0)throw new Error("wrong number of arguments");let t=e.map(i=>VC.isA(i)?VC.transform(n,i):qC.isA(i)?qC.transform(n,i):kC.isA(i)?kC.transform(n,i):i);return t.length===1?t[0]:t};GC.exports=dY});var XC=E((jre,WC)=>{WC.exports={align:DC(),center:Ea().center,centerX:Ea().centerX,centerY:Ea().centerY,centerZ:Ea().centerZ,mirror:qs().mirror,mirrorX:qs().mirrorX,mirrorY:qs().mirrorY,mirrorZ:qs().mirrorZ,rotate:Gs().rotate,rotateX:Gs().rotateX,rotateY:Gs().rotateY,rotateZ:Gs().rotateZ,scale:Aa().scale,scaleX:Aa().scaleX,scaleY:Aa().scaleY,scaleZ:Aa().scaleZ,transform:HC(),translate:hr().translate,translateX:hr().translateX,translateY:hr().translateY,translateZ:hr().translateZ}});var Yp=E((Qre,YC)=>{YC.exports={colors:hM(),curves:CM(),geometries:Gl(),maths:jb(),measurements:Uw(),primitives:yA(),text:RA(),utils:mp(),booleans:ZT(),expansions:y3(),extrusions:k3(),hulls:oC(),minkowski:cC(),modifiers:AC(),transforms:XC()}});var $p=E((ese,QC)=>{var Fi=Yp(),{cuboid:Ui,cylinder:to,rectangle:pY}=Fi.primitives,{union:Ta,subtract:kr}=Fi.booleans,{translate:no,rotateX:ZC}=Fi.transforms,{extrudeLinear:mY}=Fi.extrusions;function JC(n){return n.layout==="custom"?n.cells:n.layout==="arrows"?[[1,0],[0,1],[1,1],[2,1]]:n.layout==="row4"?[[0,0],[1,0],[2,0],[3,0]]:n.layout==="grid4"?[[0,0],[1,0],[0,1],[1,1]]:n.layout==="double"?[[0,0],[1,0]]:[[0,0]]}function KC(n){if(!n.length)throw Error("\u8ACB\u81F3\u5C11\u9078\u4E00\u683C\u6309\u9375\u3002");if(n.length>16)throw Error("\u6700\u591A 16 \u9846\u6309\u9375\u3002");let e=new Set(n.map(r=>r.join(","))),t=new Set,i=[n[0]];for(;i.length;){let[r,s]=i.pop(),o=[r,s].join(",");if(!t.has(o)){t.add(o);for(let[a,c]of[[1,0],[-1,0],[0,1],[0,-1]])e.has([r+a,s+c].join(","))&&!t.has([r+a,s+c].join(","))&&i.push([r+a,s+c])}}if(t.size!==n.length)throw Error("\u683C\u5B50\u9700\u4E0A\u4E0B\u6216\u5DE6\u53F3\u76F8\u9023\uFF0C\u624D\u80FD\u5F62\u6210\u4E00\u9AD4\u5E95\u5EA7\u3002")}function gY(n){let e=JC(n);KC(e);let t=e.map(y=>y[0]),i=e.map(y=>y[1]),r=(Math.min(...t)+Math.max(...t))/2,s=(Math.min(...i)+Math.max(...i))/2,o=e.map(([y,b])=>[(y-r)*n.pitch,(s-b)*n.pitch]),a=Math.max(18+2*n.margin,n.pitch+1),c=(Math.max(...t)-Math.min(...t))*n.pitch+a,l=(Math.max(...i)-Math.min(...i))*n.pitch+a,h=(y=0)=>Ta(o.map(b=>no(b,pY({size:[a-2*y,a-2*y]})))),u=(y,b,x=0)=>no([0,0,x],mY({height:b},y)),f=kr(u(h(),n.height),u(h(2),n.height-n.plate+.02,-.01));for(let y of o)f=kr(f,no([...y,n.height/2],Ui({size:[n.hole,n.hole,n.height+2]})));if(n.ring!=="none"){let y=Math.max(...o.map(R=>R[1])),b=o.filter(R=>R[1]===y).sort((R,L)=>R[0]-L[0]),x=n.ring==="left"?b[0]:n.ring==="right"?b.at(-1):b.reduce((R,L)=>Math.abs(R[0])<=Math.abs(L[0])?R:L),w=x[0],P=y+a/2+2;f=Ta(f,to({radius:4.6,height:4,center:[w,P,n.height-2],segments:32})),f=kr(f,to({radius:2.1,height:6,center:[w,P,n.height-2],segments:32}))}let d=Ta(u(h(),1.6),u(h(2+n.gap),2,1.6)),g=(y,b,x,w=0)=>Fi.hulls.hull(Ui({size:[y,y,.02],center:[0,0,w+.01]}),Ui({size:[b,b,.02],center:[0,0,w+x-.01]})),_,p;n.capStyle==="flat"?(_=u(Fi.primitives.roundedRectangle({size:[17.5,17.5],roundRadius:2,segments:24}),2,6),p=null):n.capStyle==="flat_circle"?(_=to({radius:8.75,height:2,center:[0,0,7],segments:64}),p=null):n.capStyle==="traditional"?(_=g(18,14,8),p=g(16.4,12.4,6.22,-.02)):n.capStyle==="circle"?(_=to({radius:9,height:5,center:[0,0,5.5],segments:48}),p=to({radius:8.1,height:3.24,center:[0,0,4.59],segments:48})):(_=Ui({size:[18,18,8],center:[0,0,4]}),p=Ui({size:[16.4,16.4,6.22],center:[0,0,3.09]}));let m=Ta(p?kr(_,p):_,to({radius:3.2,height:5.3,center:[0,0,3.85],segments:32})),v=4.1+n.stem,A=1.2+n.stem;m=kr(m,no([0,0,3.25],Ta(Ui({size:[v,A,4.3]}),Ui({size:[A,v,4.3]}))));let M=kr(Ui({size:[22,22,n.plate],center:[0,0,n.plate/2]}),Ui({size:[n.hole,n.hole,n.plate+2],center:[0,0,n.plate/2]}));return{shell:f,lid:d,cap:m,test:M,positions:o,cells:e,w:c,d:l}}function jC(n){let e=n.map(i=>i.slice()),t=e.length;for(let i=0;i<t-1;i++)for(let r=0;r<t-1;r++)e[i][r]&&e[i+1][r+1]&&!e[i][r+1]&&!e[i+1][r]?e[i][r+1]=!0:e[i][r+1]&&e[i+1][r]&&!e[i][r]&&!e[i+1][r+1]&&(e[i][r]=!0);return e}function $C(n,e,t,i){let r=n.length,s=e/r,o=[],a=c=>o.push(Fi.geometries.poly3.create(c));for(let c=0;c<r;c++)for(let l=0;l<r;l++)if(n[c][l]){let h=(l-r/2)*s,u=h+s,f=(r/2-c)*s,d=f-s;a([[h,d,i],[u,d,i],[u,f,i],[h,f,i]]),a([[h,f,t],[u,f,t],[u,d,t],[h,d,t]]),n[c]?.[l-1]||a([[h,d,t],[h,d,i],[h,f,i],[h,f,t]]),n[c]?.[l+1]||a([[u,f,t],[u,f,i],[u,d,i],[u,d,t]]),n[c-1]?.[l]||a([[h,f,t],[h,f,i],[u,f,i],[u,f,t]]),n[c+1]?.[l]||a([[u,d,t],[u,d,i],[h,d,i],[h,d,t]])}return Fi.geometries.geom3.create(o)}function xY(n,e,t=10){if(!e||!e.some(s=>s.some(Boolean)))return{cap:n,ink:null};e=jC(e);let i=$C(e,t,7.4,8),r=$C(e,t,7.4,8.02);return{cap:kr(n,r),ink:i}}function _Y(n,e,t){return e==="shell"?no([0,0,t.height],ZC(Math.PI,n)):e==="cap"||e==="ink"?no([0,0,8],ZC(Math.PI,n)):n}var Zp=new WeakMap;function vY(n){if(Zp.has(n))return Zp.get(n);let e=Fi.geometries.geom3.toPolygons(n),t=new Map,i=o=>o.map(a=>Math.round(a*1e4)).join(",");for(let o of e)for(let a of o.vertices)t.set(i(a),a.map(c=>Math.round(c*1e4)/1e4));let r=[...t.values()],s=[];for(let o of e){let a=[];for(let l=0;l<o.vertices.length;l++){let h=t.get(i(o.vertices[l])),f=t.get(i(o.vertices[(l+1)%o.vertices.length])).map((_,p)=>_-h[p]),d=f.reduce((_,p)=>_+p*p,0);if(d<1e-12)continue;let g=[[0,h]];for(let _ of r){let p=_.reduce((m,v,A)=>m+(v-h[A])*f[A],0)/d;p>1e-7&&p<1-1e-7&&_.reduce((m,v,A)=>m+(v-h[A]-p*f[A])**2,0)<4e-8&&g.push([p,_])}g.sort((_,p)=>_[0]-p[0]),a.push(...g.map(_=>_[1]))}let c=[0,1,2].map(l=>a.reduce((h,u)=>h+u[l],0)/a.length);for(let l=0;l<a.length;l++){let h=a[l],u=a[(l+1)%a.length],f=h.map((g,_)=>g-c[_]),d=u.map((g,_)=>g-c[_]);Math.hypot(f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0])>1e-10&&s.push([c,h,u])}}return Zp.set(n,s),s}QC.exports={build:gY,tris:vY,printable:_Y,decorate:xY,cleanMask:jC,cellsFor:JC,validateCells:KC}});function RY(n,e){return CY(n,e||{},0,0)}function io(n,e){if(e){for(var t=new cn(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(rR)return rR.encode(n);for(var r=n.length,s=new cn(n.length+(n.length>>1)),o=0,a=function(h){s[o++]=h},i=0;i<r;++i){if(o+5>s.length){var c=new cn(o+8+(r-i<<1));c.set(s),s=c}var l=n.charCodeAt(i);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return hR(s,0,o)}function mR(n,e){e||(e={});var t={},i=[];pR(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],h=l.level==0?0:8,u=io(o),f=u.length,d=l.comment,g=d&&io(d),_=g&&g.length,p=em(l.extra);f>65535&&zh(11);var m=h?RY(c,l):c,v=m.length,A=TY();A.p(c),i.push(dR(l,{size:c.length,crc:A.d(),c:m,f:u,m:g,u:f!=o.length||g&&d.length!=_,o:r,compression:h})),r+=30+f+p+v,s+=76+2*(f+p)+(_||0)+v}for(var M=new cn(s+22),y=r,b=s-r,x=0;x<i.length;++x){var u=i[x];sR(M,u.o,u,u.f,u.u,u.c.length);var w=30+u.f.length+em(u.extra);M.set(u.c,u.o+w),sR(M,r,u,u.f,u.u,u.c.length,u.o,u.m),r+=16+w+(u.m?u.m.length:0)}return LY(M,r,i.length,b,y),M}var cn,Nn,tm,nm,im,eR,oR,aR,yY,Kp,cR,tse,tR,jp,Oi,yt,Pa,Vr,yt,yt,yt,yt,Bh,yt,SY,MY,lR,hR,bY,zh,Bi,Ca,Jp,Qp,nR,Ra,uR,iR,wY,fR,EY,AY,TY,CY,dR,en,pR,rR,PY,IY,em,sR,LY,gR=yr(()=>{cn=Uint8Array,Nn=Uint16Array,tm=Int32Array,nm=new cn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),im=new cn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),eR=new cn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oR=function(n,e){for(var t=new Nn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new tm(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},aR=oR(nm,2),yY=aR.b,Kp=aR.r;yY[28]=258,Kp[258]=28;cR=oR(im,0),tse=cR.b,tR=cR.r,jp=new Nn(32768);for(yt=0;yt<32768;++yt)Oi=(yt&43690)>>1|(yt&21845)<<1,Oi=(Oi&52428)>>2|(Oi&13107)<<2,Oi=(Oi&61680)>>4|(Oi&3855)<<4,jp[yt]=((Oi&65280)>>8|(Oi&255)<<8)>>1;Pa=(function(n,e,t){for(var i=n.length,r=0,s=new Nn(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new Nn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Nn(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],h=e-n[r],u=o[n[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[jp[u]>>c]=l}else for(a=new Nn(i),r=0;r<i;++r)n[r]&&(a[r]=jp[o[n[r]-1]++]>>15-n[r]);return a}),Vr=new cn(288);for(yt=0;yt<144;++yt)Vr[yt]=8;for(yt=144;yt<256;++yt)Vr[yt]=9;for(yt=256;yt<280;++yt)Vr[yt]=7;for(yt=280;yt<288;++yt)Vr[yt]=8;Bh=new cn(32);for(yt=0;yt<32;++yt)Bh[yt]=5;SY=Pa(Vr,9,0),MY=Pa(Bh,5,0),lR=function(n){return(n+7)/8|0},hR=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new cn(n.subarray(e,t))},bY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zh=function(n,e,t){var i=new Error(e||bY[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,zh),!t)throw i;return i},Bi=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},Ca=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Jp=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:fR,l:0};if(r==1){var o=new cn(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(y,b){return y.f-b.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};h!=r-1;)a=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new Nn(f+1),g=Qp(t[h-1],d,0);if(g>e){var i=0,_=0,p=g-e,m=1<<p;for(s.sort(function(b,x){return d[x.s]-d[b.s]||b.f-x.f});i<r;++i){var v=s[i].s;if(d[v]>e)_+=m-(1<<g-d[v]),d[v]=e;else break}for(_>>=p;_>0;){var A=s[i].s;d[A]<e?_-=1<<e-d[A]++-1:++i}for(;i>=0&&_;--i){var M=s[i].s;d[M]==e&&(--d[M],++_)}g=e}return{t:new cn(d),l:g}},Qp=function(n,e,t){return n.s==-1?Math.max(Qp(n.l,e,t+1),Qp(n.r,e,t+1)):e[n.s]=t},nR=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Nn(++e),i=0,r=n[0],s=1,o=function(c){t[i++]=c},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},Ra=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},uR=function(n,e,t){var i=t.length,r=lR(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},iR=function(n,e,t,i,r,s,o,a,c,l,h){Bi(e,h++,t),++r[256];for(var u=Jp(r,15),f=u.t,d=u.l,g=Jp(s,15),_=g.t,p=g.l,m=nR(f),v=m.c,A=m.n,M=nR(_),y=M.c,b=M.n,x=new Nn(19),w=0;w<v.length;++w)++x[v[w]&31];for(var w=0;w<y.length;++w)++x[y[w]&31];for(var P=Jp(x,7),R=P.t,L=P.l,D=19;D>4&&!R[eR[D-1]];--D);var z=l+5<<3,I=Ra(r,Vr)+Ra(s,Bh)+o,q=Ra(r,f)+Ra(s,_)+o+14+3*D+Ra(x,R)+2*x[16]+3*x[17]+7*x[18];if(c>=0&&z<=I&&z<=q)return uR(e,h,n.subarray(c,c+l));var F,k,te,H;if(Bi(e,h,1+(q<I)),h+=2,q<I){F=Pa(f,d,0),k=f,te=Pa(_,p,0),H=_;var ne=Pa(R,L,0);Bi(e,h,A-257),Bi(e,h+5,b-1),Bi(e,h+10,D-4),h+=14;for(var w=0;w<D;++w)Bi(e,h+3*w,R[eR[w]]);h+=3*D;for(var ie=[v,y],be=0;be<2;++be)for(var Ce=ie[be],w=0;w<Ce.length;++w){var $=Ce[w]&31;Bi(e,h,ne[$]),h+=R[$],$>15&&(Bi(e,h,Ce[w]>>5&127),h+=Ce[w]>>12)}}else F=SY,k=Vr,te=MY,H=Bh;for(var w=0;w<a;++w){var se=i[w];if(se>255){var $=se>>18&31;Ca(e,h,F[$+257]),h+=k[$+257],$>7&&(Bi(e,h,se>>23&31),h+=nm[$]);var xe=se&31;Ca(e,h,te[xe]),h+=H[xe],xe>3&&(Ca(e,h,se>>5&8191),h+=im[xe])}else Ca(e,h,F[se]),h+=k[se]}return Ca(e,h,F[256]),h+k[256]},wY=new tm([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),fR=new cn(0),EY=function(n,e,t,i,r,s){var o=s.z||n.length,a=new cn(i+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(i,a.length-r),l=s.l,h=(s.r||0)&7;if(e){h&&(c[0]=s.r>>3);for(var u=wY[e-1],f=u>>13,d=u&8191,g=(1<<t)-1,_=s.p||new Nn(32768),p=s.h||new Nn(g+1),m=Math.ceil(t/3),v=2*m,A=function(tt){return(n[tt]^n[tt+1]<<m^n[tt+2]<<v)&g},M=new tm(25e3),y=new Nn(288),b=new Nn(32),x=0,w=0,P=s.i||0,R=0,L=s.w||0,D=0;P+2<o;++P){var z=A(P),I=P&32767,q=p[z];if(_[I]=q,p[z]=I,L<=P){var F=o-P;if((x>7e3||R>24576)&&(F>423||!l)){h=iR(n,c,0,M,y,b,w,R,D,P-D,h),R=x=w=0,D=P;for(var k=0;k<286;++k)y[k]=0;for(var k=0;k<30;++k)b[k]=0}var te=2,H=0,ne=d,ie=I-q&32767;if(F>2&&z==A(P-ie))for(var be=Math.min(f,F)-1,Ce=Math.min(32767,P),$=Math.min(258,F);ie<=Ce&&--ne&&I!=q;){if(n[P+te]==n[P+te-ie]){for(var se=0;se<$&&n[P+se]==n[P+se-ie];++se);if(se>te){if(te=se,H=ie,se>be)break;for(var xe=Math.min(ie,se-2),Be=0,k=0;k<xe;++k){var Se=P-ie+k&32767,Xe=_[Se],Et=Se-Xe&32767;Et>Be&&(Be=Et,q=Se)}}}I=q,q=_[I],ie+=I-q&32767}if(H){M[R++]=268435456|Kp[te]<<18|tR[H];var Ve=Kp[te]&31,at=tR[H]&31;w+=nm[Ve]+im[at],++y[257+Ve],++b[at],L=P+te,++x}else M[R++]=n[P],++y[n[P]]}}for(P=Math.max(P,L);P<o;++P)M[R++]=n[P],++y[n[P]];h=iR(n,c,l,M,y,b,w,R,D,P-D,h),l||(s.r=h&7|c[h/8|0]<<3,h-=7,s.h=p,s.p=_,s.i=P,s.w=L)}else{for(var P=s.w||0;P<o+l;P+=65535){var ht=P+65535;ht>=o&&(c[h/8|0]=l,ht=o),h=uR(c,h+1,n.subarray(P,ht))}s.i=o}return hR(a,0,i+lR(h)+r)},AY=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),TY=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=AY[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}},CY=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new cn(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return EY(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},dR=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t},en=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};pR=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=dR(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new cn(0),a],pR(s,o,t,i))}},rR=typeof TextEncoder<"u"&&new TextEncoder,PY=typeof TextDecoder<"u"&&new TextDecoder,IY=0;try{PY.decode(fR,{stream:!0}),IY=1}catch{}em=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&zh(9),e+=i+4}return e},sR=function(n,e,t,i,r,s,o,a){var c=i.length,l=t.extra,h=a&&a.length,u=em(l);en(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&zh(10),en(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(en(n,e,t.crc),en(n,e+4,s<0?-s-2:s),en(n,e+8,t.size)),en(n,e+12,c),en(n,e+14,u),e+=16,o!=null&&(en(n,e,h),en(n,e+6,t.attrs),en(n,e+10,o),e+=14),n.set(i,e),e+=c,u)for(var g in l){var _=l[g],p=_.length;en(n,e,+g),en(n,e+2,p),n.set(_,e+4),e+=4+p}return h&&(n.set(a,e),e+=h),e},LY=function(n,e,t,i,r){en(n,e,101010256),en(n,e+8,t),en(n,e+10,t),en(n,e+12,i),en(n,e+16,r)}});function _R(n){let e=n.flatMap(s=>rm.default.tris(s)),t=new ArrayBuffer(84+50*e.length),i=new DataView(t);i.setUint32(80,e.length,!0);let r=84;for(let s of e){let o=s[1].map((h,u)=>h-s[0][u]),a=s[2].map((h,u)=>h-s[0][u]),c=[o[1]*a[2]-o[2]*a[1],o[2]*a[0]-o[0]*a[2],o[0]*a[1]-o[1]*a[0]],l=Math.hypot(...c)||1;for(let h of[...c.map(u=>u/l),...s.flat()])i.setFloat32(r,h,!0),r+=4;r+=2}return t}function vR(n,e){let t='<basematerials id="1">'+e.map((o,a)=>`<base name="Color_${a+1}" displaycolor="${o.toUpperCase()}FF"/>`).join("")+"</basematerials>",i="",r=2;for(let o of n){let a=[];for(let l of o.parts){if(!l.geom)continue;let h=rm.default.tris(l.geom),u=[],f=[],d=new Map;for(let _ of h)f.push(_.map(p=>{let m=p.map(v=>v.toFixed(6)).join(",");return d.has(m)||(d.set(m,u.length),u.push(p)),d.get(m)}));let g=r++;t+=`<object id="${g}" type="model" name="${xR(l.name)}" pid="1" pindex="${l.color}"><mesh><vertices>`+u.map(_=>`<vertex x="${_[0].toFixed(6)}" y="${_[1].toFixed(6)}" z="${_[2].toFixed(6)}"/>`).join("")+"</vertices><triangles>"+f.map(_=>`<triangle v1="${_[0]}" v2="${_[1]}" v3="${_[2]}"/>`).join("")+"</triangles></mesh></object>",a.push(g)}let c=r++;t+=`<object id="${c}" type="model" name="${xR(o.name)}"><components>`+a.map(l=>`<component objectid="${l}"/>`).join("")+"</components></object>",i+=`<item objectid="${c}" transform="1 0 0 0 1 0 0 0 1 ${o.x||0} ${o.y||0} 0"/>`}let s=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="zh-TW" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Title">Clicker Studio</metadata><resources>${t}</resources><build>${i}</build></model>`;return mR({"[Content_Types].xml":io('<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":io('<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":io(s)},{level:6})}var rm,xR,yR=yr(()=>{gR();rm=Yh($p());xR=n=>String(n).replace(/[<>&"]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[e])});var OY=E(()=>{Xo();m0();x0();var fi=Yh($p());yR();var TR=Yh(Yp()),ue=n=>document.querySelector(n),Hr="arrows",zi=[[1,1],[1,2],[2,2]],ro="assembled",wt,Un,qi=[],so=new Map,La=new Map,pr=new Map,om=null,di=!1,qh=new So,Wr=new un(35,1,.1,2e3);Wr.up.set(0,0,1);var mr;try{mr=new wl({antialias:!0,alpha:!0}),mr.setPixelRatio(Math.min(devicePixelRatio,2))}catch{mr=new Pl,mr.setClearColor(15330532,1)}ue("#viewer").appendChild(mr.domElement);var Xr=new Cl(Wr,mr.domElement);Xr.enableDamping=!0;Xr.minDistance=35;Xr.maxDistance=650;qh.add(new Po(16777215,6976865,1.8));var SR=new Lo(16777215,2);SR.position.set(-40,-50,100);qh.add(SR);var Gr=new Si;qh.add(Gr);function kh(){let n=wt?Math.max(1,Math.max(wt.w,wt.d)/44):1;Wr.position.set(60*n,-85*n,90*n),Xr.target.set(0,0,8),Xr.update()}kh();new ResizeObserver(()=>{let n=ue("#viewer").getBoundingClientRect();mr.setSize(n.width,n.height),Wr.aspect=n.width/n.height,Wr.updateProjectionMatrix()}).observe(ue("#viewer"));(function n(){requestAnimationFrame(n),Xr.update(),mr.render(qh,Wr)})();function sm(n,e){let t=new ei;return t.setAttribute("position",new gn(fi.default.tris(n).flat(2),3)),t.computeVertexNormals(),new Cn(t,new gs({color:e,flatShading:!0}))}function DY(){for(let n of[...Gr.children])Gr.remove(n),n.geometry?.dispose(),n.material?.dispose()}function NY(){let n={layout:Hr,cells:zi,capStyle:ue("#capStyle").value,ring:ue("#ring").value};for(let e of["margin","height","pitch","hole","plate","gap","stem"]){let t=ue("#"+e),i=Number(t.value);if(!Number.isFinite(i)||i<+t.min||i>+t.max)throw Error("\u8ACB\u8F38\u5165\u7BC4\u570D\u5167\u5C3A\u5BF8\uFF1A"+t.min+"\u2013"+t.max+" mm");n[e]=i}return n}var Yr=n=>Hr+":"+wt.cells[n].join(",");function Ia(n){return La.get(Yr(n))||{cap:ue("#capColor").value,ink:ue("#inkColor").value}}function MR(){return ue("#target").value==="all"?wt.positions.map((n,e)=>e):[+ue("#target").value]}function Vh(){if(!di)return;let n=ue("#target").value==="all"?0:+ue("#target").value,e=Ia(n);ue("#keyCapColor").value=e.cap,ue("#keyInkColor").value=e.ink,ue("#colorStatus").textContent=ue("#target").value==="all"?"\u986F\u793A\u7B2C\u4E00\u9846\u914D\u8272\uFF1B\u6309\u4E0B\u5957\u7528\u914D\u8272\u5F8C\u540C\u6B65\u5168\u90E8\u6309\u9375\u3002":La.has(Yr(n))?"\u6B64\u9375\u4F7F\u7528\u500B\u5225\u914D\u8272\u3002":"\u6B64\u9375\u4F7F\u7528\u5171\u7528\u9810\u8A2D\u8272\u3002",ue("#applyKeyColors").textContent=ue("#target").value==="all"?"\u5957\u7528\u914D\u8272\u5230\u5168\u90E8\u6309\u9375":"\u5957\u7528\u914D\u8272\u5230\u6B64\u6309\u9375"}function bR(n){let e=Yr(n);return so.has(e)||so.set(e,{type:Hr==="arrows"?"text":"none",text:["\u2191","\u2190","\u2193","\u2192"][n]||"",size:10,mode:"dark",threshold:150,image:null}),so.get(e)}function am(n){let t=document.createElement("canvas");t.width=t.height=48;let i=t.getContext("2d",{willReadFrequently:!0});if(i.clearRect(0,0,48,48),n.type==="text"&&n.text){i.fillStyle="black",i.textAlign="center",i.textBaseline="middle";let s=38;i.font=`700 ${s}px "Noto Sans TC",sans-serif`;let o=i.measureText(n.text).width;o>44&&(s*=44/o),i.font=`700 ${s}px "Noto Sans TC",sans-serif`,i.fillText(n.text,48/2,48/2)}else if(n.type==="image"&&n.image){let s=n.image.bitmap,o=44/Math.max(s.width,s.height);i.drawImage(s,(48-s.width*o)/2,(48-s.height*o)/2,s.width*o,s.height*o)}let r=i.getImageData(0,0,48,48).data;return Array.from({length:48},(s,o)=>Array.from({length:48},(a,c)=>{let l=(o*48+c)*4,h=r[l+3],u=r[l]*.2126+r[l+1]*.7152+r[l+2]*.0722;return h<128?!1:n.type==="text"||n.mode==="alpha"?!0:n.mode==="light"?u>n.threshold:u<n.threshold}))}function UY(n){let e=[Un.capStyle,Un.stem,n.type,n.text,n.size,n.mode,n.threshold,n.image?.id].join("|");if(pr.has(e))return pr.get(e);let t=fi.default.decorate(wt.cap,am(n),n.size);return pr.set(e,t),pr.size>80&&pr.delete(pr.keys().next().value),t}function Jn(){try{Un=NY();let n=wt?wt.w+wt.d:0;if(wt=fi.default.build(Un),n!==wt.w+wt.d&&kh(),qi=wt.positions.map((e,t)=>UY(bR(t))),DY(),Gr.add(sm(wt.shell,ue("#baseColor").value)),ro!=="shell"){let e=sm(wt.lid,ue("#baseColor").value);e.position.z=ro==="explode"?-13:-1.6,Gr.add(e),wt.positions.forEach((t,i)=>{let r=new Cn(new $i(13.7,13.7,6),new gs({color:"#b9c2b2"}));r.position.set(...t,Un.height+(ro==="explode"?9:0)),Gr.add(r);for(let[s,o]of[[qi[i].cap,Ia(i).cap],[qi[i].ink,Ia(i).ink]])if(s){let a=sm(s,o);a.position.set(...t,Un.height+(ro==="explode"?24:4.5)),Gr.add(a)}})}ue("#dims").textContent=`${wt.w.toFixed(1)} \xD7 ${wt.d.toFixed(1)} \xD7 ${Un.height}`,ue("#switches").textContent=`${wt.positions.length} \u9846 MX \u9375\u8EF8`;for(let e of["margin","height","pitch"])ue("#"+e+"V").textContent=Un[e].toFixed(1);ue("#stageError").hidden=!0,ue("#gridMsg").textContent=`\u5DF2\u9078 ${zi.length} / 16 \u9846`,ue("#gridMsg").className="",ue("#status").textContent="",di=!0,document.querySelectorAll(".download-buttons button").forEach(e=>e.disabled=!1),ue("#inkDl").disabled=!qi.some(e=>e.ink)}catch(n){di=!1,ue("#stageError").textContent=n.message,ue("#stageError").hidden=!1,ue("#gridMsg").textContent=n.message,ue("#gridMsg").className="error",document.querySelectorAll(".download-buttons button").forEach(e=>e.disabled=!0)}}function Gh(){let n=ue("#target").value;ue("#target").replaceChildren(new Option("\u5168\u90E8\u6309\u9375","all")),di&&wt.cells.forEach(([e,t],i)=>ue("#target").add(new Option(`\u6309\u9375 ${i+1}\uFF08\u7B2C ${t+1} \u5217\u3001\u7B2C ${e+1} \u6B04\uFF09`,String(i)))),[...ue("#target").options].some(e=>e.value===n)&&(ue("#target").value=n),ER()}function Hh(){let n=ue("#customGrid");n.replaceChildren();for(let e=0;e<5;e++)for(let t=0;t<5;t++){let i=document.createElement("button"),r=zi.some(s=>s[0]===t&&s[1]===e);i.textContent=r?"\u25CF":"\uFF0B",i.classList.toggle("on",r),i.setAttribute("aria-label",`\u7B2C ${e+1} \u5217\u7B2C ${t+1} \u6B04`),i.setAttribute("aria-pressed",r),i.onclick=()=>{let s=zi.findIndex(o=>o[0]===t&&o[1]===e);if(s>=0)zi.splice(s,1);else if(zi.length<16)zi.push([t,e]);else{ue("#gridMsg").textContent="\u6700\u591A 16 \u9846\u6309\u9375\u3002";return}Hh(),Jn(),Gh()},n.appendChild(i)}}function wR(){return{type:ue("#artType").value,text:Array.from(ue("#artText").value).slice(0,4).join(""),size:+ue("#artSize").value,mode:ue("#imageMode").value,threshold:+ue("#threshold").value,image:om}}function gr(){let n=wR();ue("#textFields").hidden=n.type!=="text",ue("#imageFields").hidden=n.type!=="image",ue("#artSizeV").textContent=n.size+" mm";let e=fi.default.cleanMask(am(n)),t=ue("#artPreview").getContext("2d");t.fillStyle=ue("#keyCapColor").value,t.fillRect(0,0,144,144),t.fillStyle=ue("#keyInkColor").value,e.forEach((i,r)=>i.forEach((s,o)=>{s&&t.fillRect(o*3,r*3,3,3)})),ue("#applyArt").textContent=ue("#target").value==="all"?"\u5957\u7528\u5230\u5168\u90E8\u6309\u9375":"\u5957\u7528\u5230\u9078\u5B9A\u6309\u9375"}function ER(){if(!di)return;Vh();let n=bR(ue("#target").value==="all"?0:+ue("#target").value);ue("#artType").value=n.type,ue("#artText").value=n.text,ue("#artSize").value=n.size,ue("#imageMode").value=n.mode,ue("#threshold").value=n.threshold,om=n.image,ue("#imageName").textContent=n.image?.name||"",ue("#artStatus").textContent=ue("#target").value==="all"?"\u76EE\u524D\u986F\u793A\u7B2C\u4E00\u9846\u5167\u5BB9\uFF1B\u6309\u4E0B\u5957\u7528\u5F8C\u624D\u6703\u540C\u6B65\u5168\u90E8\u6309\u9375\u3002":"",gr()}ue("#applyArt").onclick=()=>{if(!di)return;let n=wR();if(n.type==="image"&&!n.image){ue("#artStatus").textContent="\u8ACB\u5148\u9078\u64C7\u5716\u7247\u3002";return}if(n.type!=="none"&&!am(n).some(e=>e.some(Boolean))){ue("#artStatus").textContent="\u6C92\u6709\u53EF\u8FA8\u8B58\u7684\u5716\u6848\uFF0C\u8ACB\u8ABF\u6574\u6587\u5B57\u6216\u5716\u7247\u9580\u6ABB\u3002";return}ue("#target").value==="all"?wt.positions.forEach((e,t)=>so.set(Yr(t),{...n})):so.set(Yr(+ue("#target").value),n),Jn(),ue("#artStatus").textContent="\u5DF2\u5957\u7528\u30023D \u9810\u89BD\u8207\u4E0B\u8F09\u6A21\u578B\u5DF2\u66F4\u65B0\u3002"};ue("#artImage").onchange=async n=>{let e=n.target.files[0];if(e)try{if(e.size>5*1024*1024)throw Error("\u5716\u7247\u4E0A\u9650 5 MB\u3002");if(!["image/png","image/jpeg","image/webp"].includes(e.type))throw Error("\u8ACB\u4F7F\u7528 PNG\u3001JPG \u6216 WebP\u3002");let t=await createImageBitmap(e);if(t.width*t.height>25e6)throw t.close(),Error("\u5716\u7247\u5C3A\u5BF8\u904E\u5927\uFF0C\u8ACB\u7E2E\u5C0F\u81F3 2500 \u842C\u50CF\u7D20\u5167\u3002");om={bitmap:t,name:e.name,id:crypto.randomUUID()},ue("#imageName").textContent=e.name,ue("#artStatus").textContent="\u5716\u7247\u5DF2\u8F49\u6210\u55AE\u8272\u9810\u89BD\uFF0C\u8ACB\u6309\u300C\u5957\u7528\u300D\u3002",gr()}catch(t){ue("#artStatus").textContent=t.message}};for(let n of["artType","artText","imageMode","threshold","artSize"])ue("#"+n).oninput=gr;ue("#target").onchange=ER;for(let n of["capColor","baseColor","inkColor"])ue("#"+n).oninput=()=>{Jn(),Vh(),gr()};for(let n of["keyCapColor","keyInkColor"])ue("#"+n).oninput=gr;ue("#applyKeyColors").onclick=()=>{if(!di)return;let n={cap:ue("#keyCapColor").value,ink:ue("#keyInkColor").value};MR().forEach(e=>La.set(Yr(e),{...n})),Jn(),Vh(),gr(),ue("#colorStatus").textContent="\u5DF2\u5957\u7528\u914D\u8272\uFF0C3D \u9810\u89BD\u8207\u591A\u8272 3MF \u5DF2\u540C\u6B65\u3002"};ue("#inheritColors").onclick=()=>{di&&(MR().forEach(n=>La.delete(Yr(n))),Jn(),Vh(),gr())};for(let n of["capStyle","ring","margin","height","pitch","hole","plate","gap","stem"])ue("#"+n).oninput=Jn;document.querySelectorAll("[data-layout]").forEach(n=>n.onclick=()=>{Hr=n.dataset.layout,document.querySelectorAll("[data-layout]").forEach(e=>e.classList.toggle("active",e===n)),ue("#customPanel").hidden=Hr!=="custom",Jn(),Gh()});document.querySelectorAll("[data-view]").forEach(n=>n.onclick=()=>{ro=n.dataset.view,document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e===n)),Jn(),kh(),ro==="shell"&&(Wr.position.z*=-1,Xr.update())});ue("#home").onclick=kh;ue("#clearGrid").onclick=()=>{zi=[],Hh(),Jn(),Gh()};ue("#reset").onclick=()=>{document.querySelectorAll("input:not([type=file])").forEach(n=>n.value=n.defaultValue),ue("#artImage").value="",ue("#capStyle").selectedIndex=0,ue("#ring").selectedIndex=0,so.clear(),La.clear(),pr.clear(),zi=[[1,1],[1,2],[2,2]],Hh(),document.querySelector('[data-layout="arrows"]').click(),document.querySelector('[data-view="assembled"]').click()};function AR(n,e,t){let i=URL.createObjectURL(new Blob([n],{type:t})),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(i),5e3),ue("#status").textContent="\u5DF2\u7522\u751F "+e+"\uFF0C\u8ACB\u67E5\u770B\u700F\u89BD\u5668\u4E0B\u8F09\u3002"}function FY(n){let t=Math.min(4,qi.length),i=[];for(let r=0;r<qi.length;r++){let s=n==="cap"?qi[r].cap:qi[r].ink;s&&i.push({geom:fi.default.printable(s,n,Un),x:r%t*22,y:Math.floor(r/t)*22})}return i}for(let n of["shell","lid","cap","ink","test"])ue("#"+n+"Dl").onclick=()=>{try{if(!di)return;let e=["cap","ink"].includes(n)?FY(n).map(t=>TR.default.transforms.translate([t.x,t.y,0],t.geom)):[fi.default.printable(wt[n],n,Un)];if(!e.length)throw Error("\u5C1A\u7121\u5716\u6848\uFF0C\u8ACB\u5148\u5957\u7528\u6587\u5B57\u6216\u5716\u7247\u3002");AR(_R(e),`clicker_${Hr}_${n}.stl`,"application/octet-stream")}catch(e){ue("#status").textContent="\u532F\u51FA\u5931\u6557\uFF1A"+e.message}};ue("#mfDl").onclick=()=>{try{if(!di)return;let n=[ue("#baseColor").value.toLowerCase()],e=i=>{i=i.toLowerCase();let r=n.indexOf(i);return r<0&&(r=n.length,n.push(i)),r},t=[{name:"Base",x:wt.w/2+5,y:wt.d/2+5,parts:[{name:"Base",geom:fi.default.printable(wt.shell,"shell",Un),color:0}]},{name:"Lid",x:wt.w/2+5,y:wt.d*1.5+20,parts:[{name:"Lid",geom:wt.lid,color:0}]}];qi.forEach((i,r)=>t.push({name:"Key_"+(r+1),x:wt.w+25+r%4*22,y:15+Math.floor(r/4)*22,parts:[{name:"Keycap_"+(r+1),geom:fi.default.printable(i.cap,"cap",Un),color:e(Ia(r).cap)},{name:"Artwork_"+(r+1),geom:i.ink?fi.default.printable(i.ink,"ink",Un):null,color:i.ink?e(Ia(r).ink):0}]})),AR(vR(t,n),`clicker_${Hr}_multicolor.3mf`,"application/vnd.ms-package.3dmanufacturing-3dmodel+xml")}catch(n){ue("#status").textContent="\u532F\u51FA\u5931\u6557\uFF1A"+n.message}};Hh();Jn();Gh();document.fonts.ready.then(()=>{pr.clear(),Jn(),gr()})});OY();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
