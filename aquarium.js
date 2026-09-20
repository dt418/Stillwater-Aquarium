(()=>{var Yk=Object.defineProperty;var wk=(S,t,e)=>()=>{if(e)throw e[0];try{return S&&(t=S(S=0)),t}catch(a){throw e=[a],a}};var Xk=(S,t)=>{for(var e in t)Yk(S,e,{get:t[e],enumerable:!0})};var Fk={};Xk(Fk,{installDiagnostics:()=>od});function od({renderer:S,loop:t,renderFrame:e,stats:a}){let l=!1;window.habitatBenchmark=async({frames:r=120,warmup:p=30,simulationFps:n=60}={})=>{if(l)throw new Error("A benchmark is already running.");if(![r,p,n].every(Number.isFinite)||r<1||r>3600||p<0||p>600||n<10||n>360)throw new Error("Invalid benchmark budget.");if(document.hidden)throw new Error("Keep the benchmark tab visible.");l=!0;let i=t.state.paused;t.setPaused(!0);let s=S.getContext(),o=s.getExtension("WEBGL_debug_renderer_info"),c=o?s.getParameter(o.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER),k=[],b=new Uint8Array(4),J=()=>{if(s.readPixels(0,0,1,1,s.RGBA,s.UNSIGNED_BYTE,b),s.isContextLost()||s.getError()!==s.NO_ERROR)throw new Error("GPU readback failed; benchmark results discarded.")},q=0,U=0;try{await new Promise(N=>setTimeout(N,50));for(let N=0;N<Math.ceil(p)+Math.ceil(r);N++){if(document.hidden||s.isContextLost())throw new Error("Benchmark interrupted; results discarded.");await new Promise(G=>setTimeout(G,0)),J();let h=performance.now();e(1/n,h),J();let I=performance.now()-h;N>=Math.ceil(p)&&(k.push(I),q+=S.info.render.calls,U+=S.info.render.triangles)}let u=[...k].sort((N,h)=>N-h),x=N=>{let h=(u.length-1)*N,I=Math.floor(h),G=Math.ceil(h);return u[I]+(u[G]-u[I])*(h-I)},K=k.reduce((N,h)=>N+h,0)/k.length,W={method:"Synchronous 1-pixel readback: CPU + GPU render service time, not presentation FPS or battery use",gpu:c,userAgent:navigator.userAgent,simulationFps:n,frames:k.length,warmup:Math.ceil(p),meanMs:K,medianMs:x(.5),p95Ms:x(.95),meanDrawCalls:q/k.length,meanTriangles:U/k.length,settings:a(),durations:k};return console.info("Riverscape benchmark",W),W}finally{l=!1,t.setPaused(i)}}}var Ck=wk(()=>{});var Ro=0,Yi=1,Lo=2;var Cr=1,Ao=2,ga=3,_a=0,aa=1,fe=2,lS=0,BS=1,wi=2,Xi=3,Hi=4,Io=5,mS=100,Oo=101,Go=102,fo=103,Mo=104,Eo=200,Fo=201,Co=202,go=203,xp=204,Np=205,Zo=206,vo=207,Yo=208,wo=209,Xo=210,Ho=211,Po=212,Qo=213,zo=214,zp=0,Bp=1,Dp=2,DS=3,_p=4,$p=5,tn=6,en=7,Pi=0,Bo=1,Do=2,rS=0,_o=1,$o=2,tc=3,an=4,ec=5,ac=6,Sc=7;var Qi=300,rl=301,pl=302,Sn=303,ln=304,gr=306,Tr=1e3,TS=1001,jp=1002,pa=1003,lc=1004;var Zr=1005;var ja=1006,rn=1007;var RS=1008;var Ia=1009,zi=1010,Bi=1011,zl=1012,pn=1013,Za=1014,Oa=1015,LS=1016,nn=1017,sn=1018,Bl=1020,Di=35902,_i=35899,$i=1021,ts=1022,Ka=1023,Fl=1026,Dl=1027,on=1028,cn=1029,es=1030,kn=1031;var bn=1033,vr=33776,Yr=33777,wr=33778,Xr=33779,un=35840,Un=35841,Jn=35842,qn=35843,Vn=36196,dn=37492,Kn=37496,Wn=37808,Tn=37809,mn=37810,yn=37811,hn=37812,xn=37813,Nn=37814,jn=37815,Rn=37816,Ln=37817,An=37818,In=37819,On=37820,Gn=37821,fn=36492,Mn=36494,En=36495,Fn=36283,Cn=36284,gn=36285,Zn=36286;var mr=2300,Rp=2301,hp=2302,Oi=2400,Gi=2401,fi=2402;var rc=3200,_l=3201;var as=0,pc=1,pS="",He="srgb",_S="srgb-linear",yr="linear",ke="srgb";var QS=7680;var Mi=519,nc=512,ic=513,sc=514,Ss=515,oc=516,cc=517,kc=518,bc=519,Ei=35044,AS=35048;var ls="300 es",Na=2e3,hr=2001;var $a=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){let a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){let a=this._listeners;if(a===void 0)return;let l=a[t];if(l!==void 0){let r=l.indexOf(e);r!==-1&&l.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let a=e[t.type];if(a!==void 0){t.target=this;let l=a.slice(0);for(let r=0,p=l.length;r<p;r++)l[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=1234567,Kr=Math.PI/180,Cl=180/Math.PI;function $l(){let S=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(we[S&255]+we[S>>8&255]+we[S>>16&255]+we[S>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[a&255]+we[a>>8&255]+we[a>>16&255]+we[a>>24&255]).toLowerCase()}function ee(S,t,e){return Math.max(t,Math.min(e,S))}function rs(S,t){return(S%t+t)%t}function Hk(S,t,e,a,l){return a+(S-t)*(l-a)/(e-t)}function Pk(S,t,e){return S!==t?(e-S)/(t-S):0}function Wr(S,t,e){return(1-e)*S+e*t}function Qk(S,t,e,a){return Wr(S,t,1-Math.exp(-e*a))}function zk(S,t=1){return t-Math.abs(rs(S,t*2)-t)}function Bk(S,t,e){return S<=t?0:S>=e?1:(S=(S-t)/(e-t),S*S*(3-2*S))}function Dk(S,t,e){return S<=t?0:S>=e?1:(S=(S-t)/(e-t),S*S*S*(S*(S*6-15)+10))}function _k(S,t){return S+Math.floor(Math.random()*(t-S+1))}function $k(S,t){return S+Math.random()*(t-S)}function tb(S){return S*(.5-Math.random())}function eb(S){S!==void 0&&(ao=S);let t=ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ab(S){return S*Kr}function Sb(S){return S*Cl}function lb(S){return(S&S-1)===0&&S!==0}function rb(S){return Math.pow(2,Math.ceil(Math.log(S)/Math.LN2))}function pb(S){return Math.pow(2,Math.floor(Math.log(S)/Math.LN2))}function nb(S,t,e,a,l){let r=Math.cos,p=Math.sin,n=r(e/2),i=p(e/2),s=r((t+a)/2),o=p((t+a)/2),c=r((t-a)/2),k=p((t-a)/2),b=r((a-t)/2),J=p((a-t)/2);switch(l){case"XYX":S.set(n*o,i*c,i*k,n*s);break;case"YZY":S.set(i*k,n*o,i*c,n*s);break;case"ZXZ":S.set(i*c,i*k,n*o,n*s);break;case"XZX":S.set(n*o,i*J,i*b,n*s);break;case"YXY":S.set(i*b,n*o,i*J,n*s);break;case"ZYZ":S.set(i*J,i*b,n*o,n*s);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ml(S,t){switch(t.constructor){case Float32Array:return S;case Uint32Array:return S/4294967295;case Uint16Array:return S/65535;case Uint8Array:return S/255;case Int32Array:return Math.max(S/2147483647,-1);case Int16Array:return Math.max(S/32767,-1);case Int8Array:return Math.max(S/127,-1);default:throw new Error("Invalid component type.")}}function _e(S,t){switch(t.constructor){case Float32Array:return S;case Uint32Array:return Math.round(S*4294967295);case Uint16Array:return Math.round(S*65535);case Uint8Array:return Math.round(S*255);case Int32Array:return Math.round(S*2147483647);case Int16Array:return Math.round(S*32767);case Int8Array:return Math.round(S*127);default:throw new Error("Invalid component type.")}}var Ht={DEG2RAD:Kr,RAD2DEG:Cl,generateUUID:$l,clamp:ee,euclideanModulo:rs,mapLinear:Hk,inverseLerp:Pk,lerp:Wr,damp:Qk,pingpong:zk,smoothstep:Bk,smootherstep:Dk,randInt:_k,randFloat:$k,randFloatSpread:tb,seededRandom:eb,degToRad:ab,radToDeg:Sb,isPowerOfTwo:lb,ceilPowerOfTwo:rb,floorPowerOfTwo:pb,setQuaternionFromProperEuler:nb,normalize:_e,denormalize:Ml},Dt=class S{constructor(t=0,e=0){S.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,a=this.y,l=t.elements;return this.x=l[0]*e+l[3]*a+l[6],this.y=l[1]*e+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let a=this.length();return this.divideScalar(a||1).multiplyScalar(ee(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let a=this.dot(t)/e;return Math.acos(ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let a=Math.cos(e),l=Math.sin(e),r=this.x-t.x,p=this.y-t.y;return this.x=r*a-p*l+t.x,this.y=r*l+p*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class{constructor(t=0,e=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=l}static slerpFlat(t,e,a,l,r,p,n){let i=a[l+0],s=a[l+1],o=a[l+2],c=a[l+3],k=r[p+0],b=r[p+1],J=r[p+2],q=r[p+3];if(n===0){t[e+0]=i,t[e+1]=s,t[e+2]=o,t[e+3]=c;return}if(n===1){t[e+0]=k,t[e+1]=b,t[e+2]=J,t[e+3]=q;return}if(c!==q||i!==k||s!==b||o!==J){let U=1-n,u=i*k+s*b+o*J+c*q,x=u>=0?1:-1,K=1-u*u;if(K>Number.EPSILON){let N=Math.sqrt(K),h=Math.atan2(N,u*x);U=Math.sin(U*h)/N,n=Math.sin(n*h)/N}let W=n*x;if(i=i*U+k*W,s=s*U+b*W,o=o*U+J*W,c=c*U+q*W,U===1-n){let N=1/Math.sqrt(i*i+s*s+o*o+c*c);i*=N,s*=N,o*=N,c*=N}}t[e]=i,t[e+1]=s,t[e+2]=o,t[e+3]=c}static multiplyQuaternionsFlat(t,e,a,l,r,p){let n=a[l],i=a[l+1],s=a[l+2],o=a[l+3],c=r[p],k=r[p+1],b=r[p+2],J=r[p+3];return t[e]=n*J+o*c+i*b-s*k,t[e+1]=i*J+o*k+s*c-n*b,t[e+2]=s*J+o*b+n*k-i*c,t[e+3]=o*J-n*c-i*k-s*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,l){return this._x=t,this._y=e,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let a=t._x,l=t._y,r=t._z,p=t._order,n=Math.cos,i=Math.sin,s=n(a/2),o=n(l/2),c=n(r/2),k=i(a/2),b=i(l/2),J=i(r/2);switch(p){case"XYZ":this._x=k*o*c+s*b*J,this._y=s*b*c-k*o*J,this._z=s*o*J+k*b*c,this._w=s*o*c-k*b*J;break;case"YXZ":this._x=k*o*c+s*b*J,this._y=s*b*c-k*o*J,this._z=s*o*J-k*b*c,this._w=s*o*c+k*b*J;break;case"ZXY":this._x=k*o*c-s*b*J,this._y=s*b*c+k*o*J,this._z=s*o*J+k*b*c,this._w=s*o*c-k*b*J;break;case"ZYX":this._x=k*o*c-s*b*J,this._y=s*b*c+k*o*J,this._z=s*o*J-k*b*c,this._w=s*o*c+k*b*J;break;case"YZX":this._x=k*o*c+s*b*J,this._y=s*b*c+k*o*J,this._z=s*o*J-k*b*c,this._w=s*o*c-k*b*J;break;case"XZY":this._x=k*o*c-s*b*J,this._y=s*b*c-k*o*J,this._z=s*o*J+k*b*c,this._w=s*o*c+k*b*J;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let a=e/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,a=e[0],l=e[4],r=e[8],p=e[1],n=e[5],i=e[9],s=e[2],o=e[6],c=e[10],k=a+n+c;if(k>0){let b=.5/Math.sqrt(k+1);this._w=.25/b,this._x=(o-i)*b,this._y=(r-s)*b,this._z=(p-l)*b}else if(a>n&&a>c){let b=2*Math.sqrt(1+a-n-c);this._w=(o-i)/b,this._x=.25*b,this._y=(l+p)/b,this._z=(r+s)/b}else if(n>c){let b=2*Math.sqrt(1+n-a-c);this._w=(r-s)/b,this._x=(l+p)/b,this._y=.25*b,this._z=(i+o)/b}else{let b=2*Math.sqrt(1+c-a-n);this._w=(p-l)/b,this._x=(r+s)/b,this._y=(i+o)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let a=this.angleTo(t);if(a===0)return this;let l=Math.min(1,e/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let a=t._x,l=t._y,r=t._z,p=t._w,n=e._x,i=e._y,s=e._z,o=e._w;return this._x=a*o+p*n+l*s-r*i,this._y=l*o+p*i+r*n-a*s,this._z=r*o+p*s+a*i-l*n,this._w=p*o-a*n-l*i-r*s,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let a=this._x,l=this._y,r=this._z,p=this._w,n=p*t._w+a*t._x+l*t._y+r*t._z;if(n<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,n=-n):this.copy(t),n>=1)return this._w=p,this._x=a,this._y=l,this._z=r,this;let i=1-n*n;if(i<=Number.EPSILON){let b=1-e;return this._w=b*p+e*this._w,this._x=b*a+e*this._x,this._y=b*l+e*this._y,this._z=b*r+e*this._z,this.normalize(),this}let s=Math.sqrt(i),o=Math.atan2(s,n),c=Math.sin((1-e)*o)/s,k=Math.sin(e*o)/s;return this._w=p*c+this._w*k,this._x=a*c+this._x*k,this._y=l*c+this._y*k,this._z=r*c+this._z*k,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),r=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class S{constructor(t=0,e=0,a=0){S.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,a=this.y,l=this.z,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6]*l,this.y=r[1]*e+r[4]*a+r[7]*l,this.z=r[2]*e+r[5]*a+r[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,a=this.y,l=this.z,r=t.elements,p=1/(r[3]*e+r[7]*a+r[11]*l+r[15]);return this.x=(r[0]*e+r[4]*a+r[8]*l+r[12])*p,this.y=(r[1]*e+r[5]*a+r[9]*l+r[13])*p,this.z=(r[2]*e+r[6]*a+r[10]*l+r[14])*p,this}applyQuaternion(t){let e=this.x,a=this.y,l=this.z,r=t.x,p=t.y,n=t.z,i=t.w,s=2*(p*l-n*a),o=2*(n*e-r*l),c=2*(r*a-p*e);return this.x=e+i*s+p*c-n*o,this.y=a+i*o+n*s-r*c,this.z=l+i*c+r*o-p*s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,a=this.y,l=this.z,r=t.elements;return this.x=r[0]*e+r[4]*a+r[8]*l,this.y=r[1]*e+r[5]*a+r[9]*l,this.z=r[2]*e+r[6]*a+r[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let a=this.length();return this.divideScalar(a||1).multiplyScalar(ee(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let a=t.x,l=t.y,r=t.z,p=e.x,n=e.y,i=e.z;return this.x=l*i-r*n,this.y=r*p-a*i,this.z=a*n-l*p,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return pi.copy(this).projectOnVector(t),this.sub(pi)}reflect(t){return this.sub(pi.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let a=this.dot(t)/e;return Math.acos(ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return e*e+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){let l=Math.sin(e)*t;return this.x=l*Math.sin(a),this.y=Math.cos(e)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=l,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pi=new O,So=new $e,_t=class S{constructor(t,e,a,l,r,p,n,i,s){S.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,l,r,p,n,i,s)}set(t,e,a,l,r,p,n,i,s){let o=this.elements;return o[0]=t,o[1]=l,o[2]=n,o[3]=e,o[4]=r,o[5]=i,o[6]=a,o[7]=p,o[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let a=t.elements,l=e.elements,r=this.elements,p=a[0],n=a[3],i=a[6],s=a[1],o=a[4],c=a[7],k=a[2],b=a[5],J=a[8],q=l[0],U=l[3],u=l[6],x=l[1],K=l[4],W=l[7],N=l[2],h=l[5],I=l[8];return r[0]=p*q+n*x+i*N,r[3]=p*U+n*K+i*h,r[6]=p*u+n*W+i*I,r[1]=s*q+o*x+c*N,r[4]=s*U+o*K+c*h,r[7]=s*u+o*W+c*I,r[2]=k*q+b*x+J*N,r[5]=k*U+b*K+J*h,r[8]=k*u+b*W+J*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],a=t[1],l=t[2],r=t[3],p=t[4],n=t[5],i=t[6],s=t[7],o=t[8];return e*p*o-e*n*s-a*r*o+a*n*i+l*r*s-l*p*i}invert(){let t=this.elements,e=t[0],a=t[1],l=t[2],r=t[3],p=t[4],n=t[5],i=t[6],s=t[7],o=t[8],c=o*p-n*s,k=n*i-o*r,b=s*r-p*i,J=e*c+a*k+l*b;if(J===0)return this.set(0,0,0,0,0,0,0,0,0);let q=1/J;return t[0]=c*q,t[1]=(l*s-o*a)*q,t[2]=(n*a-l*p)*q,t[3]=k*q,t[4]=(o*e-l*i)*q,t[5]=(l*r-n*e)*q,t[6]=b*q,t[7]=(a*i-s*e)*q,t[8]=(p*e-a*r)*q,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,l,r,p,n){let i=Math.cos(r),s=Math.sin(r);return this.set(a*i,a*s,-a*(i*p+s*n)+p+t,-l*s,l*i,-l*(-s*p+i*n)+n+e,0,0,1),this}scale(t,e){return this.premultiply(ni.makeScale(t,e)),this}rotate(t){return this.premultiply(ni.makeRotation(-t)),this}translate(t,e){return this.premultiply(ni.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,a=t.elements;for(let l=0;l<9;l++)if(e[l]!==a[l])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){let a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ni=new _t;function ps(S){for(let t=S.length-1;t>=0;--t)if(S[t]>=65535)return!0;return!1}function xr(S){return document.createElementNS("http://www.w3.org/1999/xhtml",S)}function uc(){let S=xr("canvas");return S.style.display="block",S}var lo={};function gl(S){S in lo||(lo[S]=!0,console.warn(S))}function Uc(S,t,e){return new Promise(function(a,l){function r(){switch(S.clientWaitSync(t,S.SYNC_FLUSH_COMMANDS_BIT,0)){case S.WAIT_FAILED:l();break;case S.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:a()}}setTimeout(r,e)})}var ro=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),po=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ib(){let S={enabled:!0,workingColorSpace:_S,spaces:{},convert:function(l,r,p){return this.enabled===!1||r===p||!r||!p||(this.spaces[r].transfer===ke&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[r].primaries!==this.spaces[p].primaries&&(l.applyMatrix3(this.spaces[r].toXYZ),l.applyMatrix3(this.spaces[p].fromXYZ)),this.spaces[p].transfer===ke&&(l.r=El(l.r),l.g=El(l.g),l.b=El(l.b))),l},workingToColorSpace:function(l,r){return this.convert(l,this.workingColorSpace,r)},colorSpaceToWorking:function(l,r){return this.convert(l,r,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===pS?yr:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,r=this.workingColorSpace){return l.fromArray(this.spaces[r].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,r,p){return l.copy(this.spaces[r].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,r){return gl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),S.workingToColorSpace(l,r)},toWorkingColorSpace:function(l,r){return gl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),S.colorSpaceToWorking(l,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],a=[.3127,.329];return S.define({[_S]:{primaries:t,whitePoint:a,transfer:yr,toXYZ:ro,fromXYZ:po,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:ro,fromXYZ:po,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),S}var Se=ib();function Da(S){return S<.04045?S*.0773993808:Math.pow(S*.9478672986+.0521327014,2.4)}function El(S){return S<.0031308?S*12.92:1.055*Math.pow(S,.41666)-.055}var ml,Lp=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ml===void 0&&(ml=xr("canvas")),ml.width=t.width,ml.height=t.height;let l=ml.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=ml}return a.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);let l=a.getImageData(0,0,t.width,t.height),r=l.data;for(let p=0;p<r.length;p++)r[p]=Da(r[p]/255)*255;return a.putImageData(l,0,0),e}else if(t.data){let e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(Da(e[a]/255)*255):e[a]=Da(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sb=0,Zl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=$l(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let r;if(Array.isArray(l)){r=[];for(let p=0,n=l.length;p<n;p++)l[p].isDataTexture?r.push(ii(l[p].image)):r.push(ii(l[p]))}else r=ii(l);a.url=r}return e||(t.images[this.uuid]=a),a}};function ii(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap?Lp.getDataURL(S):S.data?{data:Array.from(S.data),width:S.width,height:S.height,type:S.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ob=0,si=new O,na=class S extends $a{constructor(t=S.DEFAULT_IMAGE,e=S.DEFAULT_MAPPING,a=TS,l=TS,r=ja,p=RS,n=Ka,i=Ia,s=S.DEFAULT_ANISOTROPY,o=pS){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=$l(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=r,this.minFilter=p,this.anisotropy=s,this.format=n,this.internalFormat=null,this.type=i,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(si).x}get height(){return this.source.getSize(si).y}get depth(){return this.source.getSize(si).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let a=t[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let l=this[e];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[e]=a}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qi)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case TS:t.x=t.x<0?0:1;break;case jp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case TS:t.y=t.y<0?0:1;break;case jp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};na.DEFAULT_IMAGE=null;na.DEFAULT_MAPPING=Qi;na.DEFAULT_ANISOTROPY=1;var xe=class S{constructor(t=0,e=0,a=0,l=1){S.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,l){return this.x=t,this.y=e,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,a=this.y,l=this.z,r=this.w,p=t.elements;return this.x=p[0]*e+p[4]*a+p[8]*l+p[12]*r,this.y=p[1]*e+p[5]*a+p[9]*l+p[13]*r,this.z=p[2]*e+p[6]*a+p[10]*l+p[14]*r,this.w=p[3]*e+p[7]*a+p[11]*l+p[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,l,r,i=t.elements,s=i[0],o=i[4],c=i[8],k=i[1],b=i[5],J=i[9],q=i[2],U=i[6],u=i[10];if(Math.abs(o-k)<.01&&Math.abs(c-q)<.01&&Math.abs(J-U)<.01){if(Math.abs(o+k)<.1&&Math.abs(c+q)<.1&&Math.abs(J+U)<.1&&Math.abs(s+b+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let K=(s+1)/2,W=(b+1)/2,N=(u+1)/2,h=(o+k)/4,I=(c+q)/4,G=(J+U)/4;return K>W&&K>N?K<.01?(a=0,l=.707106781,r=.707106781):(a=Math.sqrt(K),l=h/a,r=I/a):W>N?W<.01?(a=.707106781,l=0,r=.707106781):(l=Math.sqrt(W),a=h/l,r=G/l):N<.01?(a=.707106781,l=.707106781,r=0):(r=Math.sqrt(N),a=I/r,l=G/r),this.set(a,l,r,e),this}let x=Math.sqrt((U-J)*(U-J)+(c-q)*(c-q)+(k-o)*(k-o));return Math.abs(x)<.001&&(x=1),this.x=(U-J)/x,this.y=(c-q)/x,this.z=(k-o)/x,this.w=Math.acos((s+b+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let a=this.length();return this.divideScalar(a||1).multiplyScalar(ee(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ap=class extends $a{constructor(t=1,e=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ja,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=a.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let l={width:t,height:e,depth:a.depth},r=new na(l);this.textures=[];let p=a.count;for(let n=0;n<p;n++)this.textures[n]=r.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){let e={minFilter:ja,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let l=0,r=this.textures.length;l<r;l++)this.textures[l].image.width=t,this.textures[l].image.height=e,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,a=t.textures.length;e<a;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let l=Object.assign({},t.textures[e].image);this.textures[e].source=new Zl(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},da=class extends Ap{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}},Nr=class extends na{constructor(t=null,e=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:l},this.magFilter=pa,this.minFilter=pa,this.wrapR=TS,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ip=class extends na{constructor(t=null,e=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:l},this.magFilter=pa,this.minFilter=pa,this.wrapR=TS,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(ya.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(ya.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let a=ya.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let a=t.geometry;if(a!==void 0){let r=a.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let p=0,n=r.count;p<n;p++)t.isMesh===!0?t.getVertexPosition(p,ya):ya.fromBufferAttribute(r,p),ya.applyMatrix4(t.matrixWorld),this.expandByPoint(ya);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sp.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Sp.copy(a.boundingBox)),Sp.applyMatrix4(t.matrixWorld),this.union(Sp)}let l=t.children;for(let r=0,p=l.length;r<p;r++)this.expandByObject(l[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ya),ya.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),lp.subVectors(this.max,ur),yl.subVectors(t.a,ur),hl.subVectors(t.b,ur),xl.subVectors(t.c,ur),US.subVectors(hl,yl),JS.subVectors(xl,hl),wS.subVectors(yl,xl);let e=[0,-US.z,US.y,0,-JS.z,JS.y,0,-wS.z,wS.y,US.z,0,-US.x,JS.z,0,-JS.x,wS.z,0,-wS.x,-US.y,US.x,0,-JS.y,JS.x,0,-wS.y,wS.x,0];return!oi(e,yl,hl,xl,lp)||(e=[1,0,0,0,1,0,0,0,1],!oi(e,yl,hl,xl,lp))?!1:(rp.crossVectors(US,JS),e=[rp.x,rp.y,rp.z],oi(e,yl,hl,xl,lp))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ya).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ya).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ha=[new O,new O,new O,new O,new O,new O,new O,new O],ya=new O,Sp=new Fa,yl=new O,hl=new O,xl=new O,US=new O,JS=new O,wS=new O,ur=new O,lp=new O,rp=new O,XS=new O;function oi(S,t,e,a,l){for(let r=0,p=S.length-3;r<=p;r+=3){XS.fromArray(S,r);let n=l.x*Math.abs(XS.x)+l.y*Math.abs(XS.y)+l.z*Math.abs(XS.z),i=t.dot(XS),s=e.dot(XS),o=a.dot(XS);if(Math.max(-Math.max(i,s,o),Math.min(i,s,o))>n)return!1}return!0}var cb=new Fa,Ur=new O,ci=new O,tS=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let a=this.center;e!==void 0?a.copy(e):cb.setFromPoints(t).getCenter(a);let l=0;for(let r=0,p=t.length;r<p;r++)l=Math.max(l,a.distanceToSquared(t[r]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let a=Math.sqrt(e),l=(a-this.radius)*.5;this.center.addScaledVector(Ur,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ci.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(ci)),this.expandByPoint(Ur.copy(t.center).sub(ci))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pa=new O,ki=new O,pp=new O,qS=new O,bi=new O,np=new O,ui=new O,vl=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pa)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pa.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pa.copy(this.origin).addScaledVector(this.direction,e),Pa.distanceToSquared(t))}distanceSqToSegment(t,e,a,l){ki.copy(t).add(e).multiplyScalar(.5),pp.copy(e).sub(t).normalize(),qS.copy(this.origin).sub(ki);let r=t.distanceTo(e)*.5,p=-this.direction.dot(pp),n=qS.dot(this.direction),i=-qS.dot(pp),s=qS.lengthSq(),o=Math.abs(1-p*p),c,k,b,J;if(o>0)if(c=p*i-n,k=p*n-i,J=r*o,c>=0)if(k>=-J)if(k<=J){let q=1/o;c*=q,k*=q,b=c*(c+p*k+2*n)+k*(p*c+k+2*i)+s}else k=r,c=Math.max(0,-(p*k+n)),b=-c*c+k*(k+2*i)+s;else k=-r,c=Math.max(0,-(p*k+n)),b=-c*c+k*(k+2*i)+s;else k<=-J?(c=Math.max(0,-(-p*r+n)),k=c>0?-r:Math.min(Math.max(-r,-i),r),b=-c*c+k*(k+2*i)+s):k<=J?(c=0,k=Math.min(Math.max(-r,-i),r),b=k*(k+2*i)+s):(c=Math.max(0,-(p*r+n)),k=c>0?r:Math.min(Math.max(-r,-i),r),b=-c*c+k*(k+2*i)+s);else k=p>0?-r:r,c=Math.max(0,-(p*k+n)),b=-c*c+k*(k+2*i)+s;return a&&a.copy(this.origin).addScaledVector(this.direction,c),l&&l.copy(ki).addScaledVector(pp,k),b}intersectSphere(t,e){Pa.subVectors(t.center,this.origin);let a=Pa.dot(this.direction),l=Pa.dot(Pa)-a*a,r=t.radius*t.radius;if(l>r)return null;let p=Math.sqrt(r-l),n=a-p,i=a+p;return i<0?null:n<0?this.at(i,e):this.at(n,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){let a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,l,r,p,n,i,s=1/this.direction.x,o=1/this.direction.y,c=1/this.direction.z,k=this.origin;return s>=0?(a=(t.min.x-k.x)*s,l=(t.max.x-k.x)*s):(a=(t.max.x-k.x)*s,l=(t.min.x-k.x)*s),o>=0?(r=(t.min.y-k.y)*o,p=(t.max.y-k.y)*o):(r=(t.max.y-k.y)*o,p=(t.min.y-k.y)*o),a>p||r>l||((r>a||isNaN(a))&&(a=r),(p<l||isNaN(l))&&(l=p),c>=0?(n=(t.min.z-k.z)*c,i=(t.max.z-k.z)*c):(n=(t.max.z-k.z)*c,i=(t.min.z-k.z)*c),a>i||n>l)||((n>a||a!==a)&&(a=n),(i<l||l!==l)&&(l=i),l<0)?null:this.at(a>=0?a:l,e)}intersectsBox(t){return this.intersectBox(t,Pa)!==null}intersectTriangle(t,e,a,l,r){bi.subVectors(e,t),np.subVectors(a,t),ui.crossVectors(bi,np);let p=this.direction.dot(ui),n;if(p>0){if(l)return null;n=1}else if(p<0)n=-1,p=-p;else return null;qS.subVectors(this.origin,t);let i=n*this.direction.dot(np.crossVectors(qS,np));if(i<0)return null;let s=n*this.direction.dot(bi.cross(qS));if(s<0||i+s>p)return null;let o=-n*qS.dot(ui);return o<0?null:this.at(o/p,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class S{constructor(t,e,a,l,r,p,n,i,s,o,c,k,b,J,q,U){S.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,l,r,p,n,i,s,o,c,k,b,J,q,U)}set(t,e,a,l,r,p,n,i,s,o,c,k,b,J,q,U){let u=this.elements;return u[0]=t,u[4]=e,u[8]=a,u[12]=l,u[1]=r,u[5]=p,u[9]=n,u[13]=i,u[2]=s,u[6]=o,u[10]=c,u[14]=k,u[3]=b,u[7]=J,u[11]=q,u[15]=U,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new S().fromArray(this.elements)}copy(t){let e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){let e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,a=t.elements,l=1/Nl.setFromMatrixColumn(t,0).length(),r=1/Nl.setFromMatrixColumn(t,1).length(),p=1/Nl.setFromMatrixColumn(t,2).length();return e[0]=a[0]*l,e[1]=a[1]*l,e[2]=a[2]*l,e[3]=0,e[4]=a[4]*r,e[5]=a[5]*r,e[6]=a[6]*r,e[7]=0,e[8]=a[8]*p,e[9]=a[9]*p,e[10]=a[10]*p,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,a=t.x,l=t.y,r=t.z,p=Math.cos(a),n=Math.sin(a),i=Math.cos(l),s=Math.sin(l),o=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let k=p*o,b=p*c,J=n*o,q=n*c;e[0]=i*o,e[4]=-i*c,e[8]=s,e[1]=b+J*s,e[5]=k-q*s,e[9]=-n*i,e[2]=q-k*s,e[6]=J+b*s,e[10]=p*i}else if(t.order==="YXZ"){let k=i*o,b=i*c,J=s*o,q=s*c;e[0]=k+q*n,e[4]=J*n-b,e[8]=p*s,e[1]=p*c,e[5]=p*o,e[9]=-n,e[2]=b*n-J,e[6]=q+k*n,e[10]=p*i}else if(t.order==="ZXY"){let k=i*o,b=i*c,J=s*o,q=s*c;e[0]=k-q*n,e[4]=-p*c,e[8]=J+b*n,e[1]=b+J*n,e[5]=p*o,e[9]=q-k*n,e[2]=-p*s,e[6]=n,e[10]=p*i}else if(t.order==="ZYX"){let k=p*o,b=p*c,J=n*o,q=n*c;e[0]=i*o,e[4]=J*s-b,e[8]=k*s+q,e[1]=i*c,e[5]=q*s+k,e[9]=b*s-J,e[2]=-s,e[6]=n*i,e[10]=p*i}else if(t.order==="YZX"){let k=p*i,b=p*s,J=n*i,q=n*s;e[0]=i*o,e[4]=q-k*c,e[8]=J*c+b,e[1]=c,e[5]=p*o,e[9]=-n*o,e[2]=-s*o,e[6]=b*c+J,e[10]=k-q*c}else if(t.order==="XZY"){let k=p*i,b=p*s,J=n*i,q=n*s;e[0]=i*o,e[4]=-c,e[8]=s*o,e[1]=k*c+q,e[5]=p*o,e[9]=b*c-J,e[2]=J*c-b,e[6]=n*o,e[10]=q*c+k}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kb,t,bb)}lookAt(t,e,a){let l=this.elements;return ka.subVectors(t,e),ka.lengthSq()===0&&(ka.z=1),ka.normalize(),VS.crossVectors(a,ka),VS.lengthSq()===0&&(Math.abs(a.z)===1?ka.x+=1e-4:ka.z+=1e-4,ka.normalize(),VS.crossVectors(a,ka)),VS.normalize(),ip.crossVectors(ka,VS),l[0]=VS.x,l[4]=ip.x,l[8]=ka.x,l[1]=VS.y,l[5]=ip.y,l[9]=ka.y,l[2]=VS.z,l[6]=ip.z,l[10]=ka.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let a=t.elements,l=e.elements,r=this.elements,p=a[0],n=a[4],i=a[8],s=a[12],o=a[1],c=a[5],k=a[9],b=a[13],J=a[2],q=a[6],U=a[10],u=a[14],x=a[3],K=a[7],W=a[11],N=a[15],h=l[0],I=l[4],G=l[8],V=l[12],d=l[1],L=l[5],f=l[9],C=l[13],Z=l[2],w=l[6],v=l[10],D=l[14],Y=l[3],at=l[7],lt=l[11],ut=l[15];return r[0]=p*h+n*d+i*Z+s*Y,r[4]=p*I+n*L+i*w+s*at,r[8]=p*G+n*f+i*v+s*lt,r[12]=p*V+n*C+i*D+s*ut,r[1]=o*h+c*d+k*Z+b*Y,r[5]=o*I+c*L+k*w+b*at,r[9]=o*G+c*f+k*v+b*lt,r[13]=o*V+c*C+k*D+b*ut,r[2]=J*h+q*d+U*Z+u*Y,r[6]=J*I+q*L+U*w+u*at,r[10]=J*G+q*f+U*v+u*lt,r[14]=J*V+q*C+U*D+u*ut,r[3]=x*h+K*d+W*Z+N*Y,r[7]=x*I+K*L+W*w+N*at,r[11]=x*G+K*f+W*v+N*lt,r[15]=x*V+K*C+W*D+N*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],a=t[4],l=t[8],r=t[12],p=t[1],n=t[5],i=t[9],s=t[13],o=t[2],c=t[6],k=t[10],b=t[14],J=t[3],q=t[7],U=t[11],u=t[15];return J*(+r*i*c-l*s*c-r*n*k+a*s*k+l*n*b-a*i*b)+q*(+e*i*b-e*s*k+r*p*k-l*p*b+l*s*o-r*i*o)+U*(+e*s*c-e*n*b-r*p*c+a*p*b+r*n*o-a*s*o)+u*(-l*n*o-e*i*c+e*n*k+l*p*c-a*p*k+a*i*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){let l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=e,l[14]=a),this}invert(){let t=this.elements,e=t[0],a=t[1],l=t[2],r=t[3],p=t[4],n=t[5],i=t[6],s=t[7],o=t[8],c=t[9],k=t[10],b=t[11],J=t[12],q=t[13],U=t[14],u=t[15],x=c*U*s-q*k*s+q*i*b-n*U*b-c*i*u+n*k*u,K=J*k*s-o*U*s-J*i*b+p*U*b+o*i*u-p*k*u,W=o*q*s-J*c*s+J*n*b-p*q*b-o*n*u+p*c*u,N=J*c*i-o*q*i-J*n*k+p*q*k+o*n*U-p*c*U,h=e*x+a*K+l*W+r*N;if(h===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/h;return t[0]=x*I,t[1]=(q*k*r-c*U*r-q*l*b+a*U*b+c*l*u-a*k*u)*I,t[2]=(n*U*r-q*i*r+q*l*s-a*U*s-n*l*u+a*i*u)*I,t[3]=(c*i*r-n*k*r-c*l*s+a*k*s+n*l*b-a*i*b)*I,t[4]=K*I,t[5]=(o*U*r-J*k*r+J*l*b-e*U*b-o*l*u+e*k*u)*I,t[6]=(J*i*r-p*U*r-J*l*s+e*U*s+p*l*u-e*i*u)*I,t[7]=(p*k*r-o*i*r+o*l*s-e*k*s-p*l*b+e*i*b)*I,t[8]=W*I,t[9]=(J*c*r-o*q*r-J*a*b+e*q*b+o*a*u-e*c*u)*I,t[10]=(p*q*r-J*n*r+J*a*s-e*q*s-p*a*u+e*n*u)*I,t[11]=(o*n*r-p*c*r-o*a*s+e*c*s+p*a*b-e*n*b)*I,t[12]=N*I,t[13]=(o*q*l-J*c*l+J*a*k-e*q*k-o*a*U+e*c*U)*I,t[14]=(J*n*l-p*q*l-J*a*i+e*q*i+p*a*U-e*n*U)*I,t[15]=(p*c*l-o*n*l+o*a*i-e*c*i-p*a*k+e*n*k)*I,this}scale(t){let e=this.elements,a=t.x,l=t.y,r=t.z;return e[0]*=a,e[4]*=l,e[8]*=r,e[1]*=a,e[5]*=l,e[9]*=r,e[2]*=a,e[6]*=l,e[10]*=r,e[3]*=a,e[7]*=l,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,l))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let a=Math.cos(e),l=Math.sin(e),r=1-a,p=t.x,n=t.y,i=t.z,s=r*p,o=r*n;return this.set(s*p+a,s*n-l*i,s*i+l*n,0,s*n+l*i,o*n+a,o*i-l*p,0,s*i-l*n,o*i+l*p,r*i*i+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,l,r,p){return this.set(1,a,r,0,t,1,p,0,e,l,1,0,0,0,0,1),this}compose(t,e,a){let l=this.elements,r=e._x,p=e._y,n=e._z,i=e._w,s=r+r,o=p+p,c=n+n,k=r*s,b=r*o,J=r*c,q=p*o,U=p*c,u=n*c,x=i*s,K=i*o,W=i*c,N=a.x,h=a.y,I=a.z;return l[0]=(1-(q+u))*N,l[1]=(b+W)*N,l[2]=(J-K)*N,l[3]=0,l[4]=(b-W)*h,l[5]=(1-(k+u))*h,l[6]=(U+x)*h,l[7]=0,l[8]=(J+K)*I,l[9]=(U-x)*I,l[10]=(1-(k+q))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,e,a){let l=this.elements,r=Nl.set(l[0],l[1],l[2]).length(),p=Nl.set(l[4],l[5],l[6]).length(),n=Nl.set(l[8],l[9],l[10]).length();this.determinant()<0&&(r=-r),t.x=l[12],t.y=l[13],t.z=l[14],ha.copy(this);let s=1/r,o=1/p,c=1/n;return ha.elements[0]*=s,ha.elements[1]*=s,ha.elements[2]*=s,ha.elements[4]*=o,ha.elements[5]*=o,ha.elements[6]*=o,ha.elements[8]*=c,ha.elements[9]*=c,ha.elements[10]*=c,e.setFromRotationMatrix(ha),a.x=r,a.y=p,a.z=n,this}makePerspective(t,e,a,l,r,p,n=Na,i=!1){let s=this.elements,o=2*r/(e-t),c=2*r/(a-l),k=(e+t)/(e-t),b=(a+l)/(a-l),J,q;if(i)J=r/(p-r),q=p*r/(p-r);else if(n===Na)J=-(p+r)/(p-r),q=-2*p*r/(p-r);else if(n===hr)J=-p/(p-r),q=-p*r/(p-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return s[0]=o,s[4]=0,s[8]=k,s[12]=0,s[1]=0,s[5]=c,s[9]=b,s[13]=0,s[2]=0,s[6]=0,s[10]=J,s[14]=q,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,a,l,r,p,n=Na,i=!1){let s=this.elements,o=2/(e-t),c=2/(a-l),k=-(e+t)/(e-t),b=-(a+l)/(a-l),J,q;if(i)J=1/(p-r),q=p/(p-r);else if(n===Na)J=-2/(p-r),q=-(p+r)/(p-r);else if(n===hr)J=-1/(p-r),q=-r/(p-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return s[0]=o,s[4]=0,s[8]=0,s[12]=k,s[1]=0,s[5]=c,s[9]=0,s[13]=b,s[2]=0,s[6]=0,s[10]=J,s[14]=q,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){let e=this.elements,a=t.elements;for(let l=0;l<16;l++)if(e[l]!==a[l])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){let a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}},Nl=new O,ha=new pe,kb=new O(0,0,0),bb=new O(1,1,1),VS=new O,ip=new O,ka=new O,no=new pe,io=new $e,Ra=class S{constructor(t=0,e=0,a=0,l=S.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,l=this._order){return this._x=t,this._y=e,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){let l=t.elements,r=l[0],p=l[4],n=l[8],i=l[1],s=l[5],o=l[9],c=l[2],k=l[6],b=l[10];switch(e){case"XYZ":this._y=Math.asin(ee(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-o,b),this._z=Math.atan2(-p,r)):(this._x=Math.atan2(k,s),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(n,b),this._z=Math.atan2(i,s)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(k,-1,1)),Math.abs(k)<.9999999?(this._y=Math.atan2(-c,b),this._z=Math.atan2(-p,s)):(this._y=0,this._z=Math.atan2(i,r));break;case"ZYX":this._y=Math.asin(-ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(k,b),this._z=Math.atan2(i,r)):(this._x=0,this._z=Math.atan2(-p,s));break;case"YZX":this._z=Math.asin(ee(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-o,s),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(n,b));break;case"XZY":this._z=Math.asin(-ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(k,s),this._y=Math.atan2(n,r)):(this._x=Math.atan2(-o,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return no.makeRotationFromQuaternion(t),this.setFromRotationMatrix(no,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return io.setFromEuler(this),this.setFromQuaternion(io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ra.DEFAULT_ORDER="XYZ";var Yl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ub=0,so=new O,jl=new $e,Qa=new pe,sp=new O,Jr=new O,Ub=new O,Jb=new $e,oo=new O(1,0,0),co=new O(0,1,0),ko=new O(0,0,1),bo={type:"added"},qb={type:"removed"},Rl={type:"childadded",child:null},Ui={type:"childremoved",child:null},ge=class S extends $a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=$l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=S.DEFAULT_UP.clone();let t=new O,e=new Ra,a=new $e,l=new O(1,1,1);function r(){a.setFromEuler(e,!1)}function p(){e.setFromQuaternion(a,void 0,!1)}e._onChange(r),a._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pe},normalMatrix:{value:new _t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=S.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=S.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jl.setFromAxisAngle(t,e),this.quaternion.multiply(jl),this}rotateOnWorldAxis(t,e){return jl.setFromAxisAngle(t,e),this.quaternion.premultiply(jl),this}rotateX(t){return this.rotateOnAxis(oo,t)}rotateY(t){return this.rotateOnAxis(co,t)}rotateZ(t){return this.rotateOnAxis(ko,t)}translateOnAxis(t,e){return so.copy(t).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oo,t)}translateY(t){return this.translateOnAxis(co,t)}translateZ(t){return this.translateOnAxis(ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qa.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?sp.copy(t):sp.set(t,e,a);let l=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qa.lookAt(Jr,sp,this.up):Qa.lookAt(sp,Jr,this.up),this.quaternion.setFromRotationMatrix(Qa),l&&(Qa.extractRotation(l.matrixWorld),jl.setFromRotationMatrix(Qa),this.quaternion.premultiply(jl.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bo),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qb),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bo),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,l=this.children.length;a<l;a++){let p=this.children[a].getObjectByProperty(t,e);if(p!==void 0)return p}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);let l=this.children;for(let r=0,p=l.length;r<p;r++)l[r].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,Ub),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Jb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let a=0,l=e.length;a<l;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let a=0,l=e.length;a<l;a++)e[a].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let a=0,l=e.length;a<l;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let l=this.children;for(let r=0,p=l.length;r<p;r++)l[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(n=>({...n,boundingBox:n.boundingBox?n.boundingBox.toJSON():void 0,boundingSphere:n.boundingSphere?n.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(n=>({...n})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function r(n,i){return n[i.uuid]===void 0&&(n[i.uuid]=i.toJSON(t)),i.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=r(t.geometries,this.geometry);let n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){let i=n.shapes;if(Array.isArray(i))for(let s=0,o=i.length;s<o;s++){let c=i[s];r(t.shapes,c)}else r(t.shapes,i)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let n=[];for(let i=0,s=this.material.length;i<s;i++)n.push(r(t.materials,this.material[i]));l.material=n}else l.material=r(t.materials,this.material);if(this.children.length>0){l.children=[];for(let n=0;n<this.children.length;n++)l.children.push(this.children[n].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let n=0;n<this.animations.length;n++){let i=this.animations[n];l.animations.push(r(t.animations,i))}}if(e){let n=p(t.geometries),i=p(t.materials),s=p(t.textures),o=p(t.images),c=p(t.shapes),k=p(t.skeletons),b=p(t.animations),J=p(t.nodes);n.length>0&&(a.geometries=n),i.length>0&&(a.materials=i),s.length>0&&(a.textures=s),o.length>0&&(a.images=o),c.length>0&&(a.shapes=c),k.length>0&&(a.skeletons=k),b.length>0&&(a.animations=b),J.length>0&&(a.nodes=J)}return a.object=l,a;function p(n){let i=[];for(let s in n){let o=n[s];delete o.metadata,i.push(o)}return i}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){let l=t.children[a];this.add(l.clone())}return this}};ge.DEFAULT_UP=new O(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xa=new O,za=new O,Ji=new O,Ba=new O,Ll=new O,Al=new O,uo=new O,qi=new O,Vi=new O,di=new O,Ki=new xe,Wi=new xe,Ti=new xe,WS=class S{constructor(t=new O,e=new O,a=new O){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,l){l.subVectors(a,e),xa.subVectors(t,e),l.cross(xa);let r=l.lengthSq();return r>0?l.multiplyScalar(1/Math.sqrt(r)):l.set(0,0,0)}static getBarycoord(t,e,a,l,r){xa.subVectors(l,e),za.subVectors(a,e),Ji.subVectors(t,e);let p=xa.dot(xa),n=xa.dot(za),i=xa.dot(Ji),s=za.dot(za),o=za.dot(Ji),c=p*s-n*n;if(c===0)return r.set(0,0,0),null;let k=1/c,b=(s*i-n*o)*k,J=(p*o-n*i)*k;return r.set(1-b-J,J,b)}static containsPoint(t,e,a,l){return this.getBarycoord(t,e,a,l,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(t,e,a,l,r,p,n,i){return this.getBarycoord(t,e,a,l,Ba)===null?(i.x=0,i.y=0,"z"in i&&(i.z=0),"w"in i&&(i.w=0),null):(i.setScalar(0),i.addScaledVector(r,Ba.x),i.addScaledVector(p,Ba.y),i.addScaledVector(n,Ba.z),i)}static getInterpolatedAttribute(t,e,a,l,r,p){return Ki.setScalar(0),Wi.setScalar(0),Ti.setScalar(0),Ki.fromBufferAttribute(t,e),Wi.fromBufferAttribute(t,a),Ti.fromBufferAttribute(t,l),p.setScalar(0),p.addScaledVector(Ki,r.x),p.addScaledVector(Wi,r.y),p.addScaledVector(Ti,r.z),p}static isFrontFacing(t,e,a,l){return xa.subVectors(a,e),za.subVectors(t,e),xa.cross(za).dot(l)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,l){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,e,a,l){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xa.subVectors(this.c,this.b),za.subVectors(this.a,this.b),xa.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return S.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return S.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,l,r){return S.getInterpolation(t,this.a,this.b,this.c,e,a,l,r)}containsPoint(t){return S.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return S.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let a=this.a,l=this.b,r=this.c,p,n;Ll.subVectors(l,a),Al.subVectors(r,a),qi.subVectors(t,a);let i=Ll.dot(qi),s=Al.dot(qi);if(i<=0&&s<=0)return e.copy(a);Vi.subVectors(t,l);let o=Ll.dot(Vi),c=Al.dot(Vi);if(o>=0&&c<=o)return e.copy(l);let k=i*c-o*s;if(k<=0&&i>=0&&o<=0)return p=i/(i-o),e.copy(a).addScaledVector(Ll,p);di.subVectors(t,r);let b=Ll.dot(di),J=Al.dot(di);if(J>=0&&b<=J)return e.copy(r);let q=b*s-i*J;if(q<=0&&s>=0&&J<=0)return n=s/(s-J),e.copy(a).addScaledVector(Al,n);let U=o*J-b*c;if(U<=0&&c-o>=0&&b-J>=0)return uo.subVectors(r,l),n=(c-o)/(c-o+(b-J)),e.copy(l).addScaledVector(uo,n);let u=1/(U+q+k);return p=q*u,n=k*u,e.copy(a).addScaledVector(Ll,p).addScaledVector(Al,n)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dS={h:0,s:0,l:0},op={h:0,s:0,l:0};function mi(S,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?S+(t-S)*6*e:e<1/2?t:e<2/3?S+(t-S)*6*(2/3-e):S}var ct=class{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){let l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,a,l=Se.workingColorSpace){return this.r=t,this.g=e,this.b=a,Se.colorSpaceToWorking(this,l),this}setHSL(t,e,a,l=Se.workingColorSpace){if(t=rs(t,1),e=ee(e,0,1),a=ee(a,0,1),e===0)this.r=this.g=this.b=a;else{let r=a<=.5?a*(1+e):a+e-a*e,p=2*a-r;this.r=mi(p,r,t+1/3),this.g=mi(p,r,t),this.b=mi(p,r,t-1/3)}return Se.colorSpaceToWorking(this,l),this}setStyle(t,e=He){function a(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,p=l[1],n=l[2];switch(p){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return a(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return a(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return a(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=l[1],p=r.length;if(p===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(p===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let a=Jc[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=El(t.r),this.g=El(t.g),this.b=El(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Se.workingToColorSpace(Xe.copy(this),t),Math.round(ee(Xe.r*255,0,255))*65536+Math.round(ee(Xe.g*255,0,255))*256+Math.round(ee(Xe.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(Xe.copy(this),e);let a=Xe.r,l=Xe.g,r=Xe.b,p=Math.max(a,l,r),n=Math.min(a,l,r),i,s,o=(n+p)/2;if(n===p)i=0,s=0;else{let c=p-n;switch(s=o<=.5?c/(p+n):c/(2-p-n),p){case a:i=(l-r)/c+(l<r?6:0);break;case l:i=(r-a)/c+2;break;case r:i=(a-l)/c+4;break}i/=6}return t.h=i,t.s=s,t.l=o,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=He){Se.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,a=Xe.g,l=Xe.b;return t!==He?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,e,a){return this.getHSL(dS),this.setHSL(dS.h+t,dS.s+e,dS.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(dS),t.getHSL(op);let a=Wr(dS.h,op.h,e),l=Wr(dS.s,op.s,e),r=Wr(dS.l,op.l,e);return this.setHSL(a,l,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,a=this.g,l=this.b,r=t.elements;return this.r=r[0]*e+r[3]*a+r[6]*l,this.g=r[1]*e+r[4]*a+r[7]*l,this.b=r[2]*e+r[5]*a+r[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new ct;ct.NAMES=Jc;var Vb=0,eS=class extends $a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=$l(),this.name="",this.type="Material",this.blending=BS,this.side=_a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=Np,this.blendEquation=mS,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=DS,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mi,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=QS,this.stencilZFail=QS,this.stencilZPass=QS,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let l=this[e];if(l===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[e]=a}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==BS&&(a.blending=this.blending),this.side!==_a&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==xp&&(a.blendSrc=this.blendSrc),this.blendDst!==Np&&(a.blendDst=this.blendDst),this.blendEquation!==mS&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==DS&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mi&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==QS&&(a.stencilFail=this.stencilFail),this.stencilZFail!==QS&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==QS&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(r){let p=[];for(let n in r){let i=r[n];delete i.metadata,p.push(i)}return p}if(e){let r=l(t.textures),p=l(t.images);r.length>0&&(a.textures=r),p.length>0&&(a.images=p)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,a=null;if(e!==null){let l=e.length;a=new Array(l);for(let r=0;r!==l;++r)a[r]=e[r].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},aS=class extends eS{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Pi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new O,cp=new Dt,db=0,Ge=class{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=Ei,this.updateRanges=[],this.gpuType=Oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let l=0,r=this.itemSize;l<r;l++)this.array[t+l]=e.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)cp.fromBufferAttribute(this,e),cp.applyMatrix3(t),this.setXY(e,cp.x,cp.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=_e(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ml(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ml(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ml(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ml(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),a=_e(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,l){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),a=_e(a,this.array),l=_e(l,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,e,a,l,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),a=_e(a,this.array),l=_e(l,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ei&&(t.usage=this.usage),t}};var jr=class extends Ge{constructor(t,e,a){super(new Uint16Array(t),e,a)}};var Rr=class extends Ge{constructor(t,e,a){super(new Uint32Array(t),e,a)}};var le=class extends Ge{constructor(t,e,a){super(new Float32Array(t),e,a)}},Kb=0,qa=new pe,yi=new ge,Il=new O,ba=new Fa,qr=new Fa,Ce=new O,Ze=class S extends $a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=$l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ps(t)?Rr:jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let r=new _t().getNormalMatrix(t);a.applyNormalMatrix(r),a.needsUpdate=!0}let l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qa.makeRotationFromQuaternion(t),this.applyMatrix4(qa),this}rotateX(t){return qa.makeRotationX(t),this.applyMatrix4(qa),this}rotateY(t){return qa.makeRotationY(t),this.applyMatrix4(qa),this}rotateZ(t){return qa.makeRotationZ(t),this.applyMatrix4(qa),this}translate(t,e,a){return qa.makeTranslation(t,e,a),this.applyMatrix4(qa),this}scale(t,e,a){return qa.makeScale(t,e,a),this.applyMatrix4(qa),this}lookAt(t){return yi.lookAt(t),yi.updateMatrix(),this.applyMatrix4(yi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Il).negate(),this.translate(Il.x,Il.y,Il.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let a=[];for(let l=0,r=t.length;l<r;l++){let p=t[l];a.push(p.x,p.y,p.z||0)}this.setAttribute("position",new le(a,3))}else{let a=Math.min(t.length,e.count);for(let l=0;l<a;l++){let r=t[l];e.setXYZ(l,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){let r=e[a];ba.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,ba.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,ba.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(ba.min),this.boundingBox.expandByPoint(ba.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tS);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let a=this.boundingSphere.center;if(ba.setFromBufferAttribute(t),e)for(let r=0,p=e.length;r<p;r++){let n=e[r];qr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ce.addVectors(ba.min,qr.min),ba.expandByPoint(Ce),Ce.addVectors(ba.max,qr.max),ba.expandByPoint(Ce)):(ba.expandByPoint(qr.min),ba.expandByPoint(qr.max))}ba.getCenter(a);let l=0;for(let r=0,p=t.count;r<p;r++)Ce.fromBufferAttribute(t,r),l=Math.max(l,a.distanceToSquared(Ce));if(e)for(let r=0,p=e.length;r<p;r++){let n=e[r],i=this.morphTargetsRelative;for(let s=0,o=n.count;s<o;s++)Ce.fromBufferAttribute(n,s),i&&(Il.fromBufferAttribute(t,s),Ce.add(Il)),l=Math.max(l,a.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=e.position,l=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*a.count),4));let p=this.getAttribute("tangent"),n=[],i=[];for(let G=0;G<a.count;G++)n[G]=new O,i[G]=new O;let s=new O,o=new O,c=new O,k=new Dt,b=new Dt,J=new Dt,q=new O,U=new O;function u(G,V,d){s.fromBufferAttribute(a,G),o.fromBufferAttribute(a,V),c.fromBufferAttribute(a,d),k.fromBufferAttribute(r,G),b.fromBufferAttribute(r,V),J.fromBufferAttribute(r,d),o.sub(s),c.sub(s),b.sub(k),J.sub(k);let L=1/(b.x*J.y-J.x*b.y);isFinite(L)&&(q.copy(o).multiplyScalar(J.y).addScaledVector(c,-b.y).multiplyScalar(L),U.copy(c).multiplyScalar(b.x).addScaledVector(o,-J.x).multiplyScalar(L),n[G].add(q),n[V].add(q),n[d].add(q),i[G].add(U),i[V].add(U),i[d].add(U))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let G=0,V=x.length;G<V;++G){let d=x[G],L=d.start,f=d.count;for(let C=L,Z=L+f;C<Z;C+=3)u(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let K=new O,W=new O,N=new O,h=new O;function I(G){N.fromBufferAttribute(l,G),h.copy(N);let V=n[G];K.copy(V),K.sub(N.multiplyScalar(N.dot(V))).normalize(),W.crossVectors(h,V);let L=W.dot(i[G])<0?-1:1;p.setXYZW(G,K.x,K.y,K.z,L)}for(let G=0,V=x.length;G<V;++G){let d=x[G],L=d.start,f=d.count;for(let C=L,Z=L+f;C<Z;C+=3)I(t.getX(C+0)),I(t.getX(C+1)),I(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let k=0,b=a.count;k<b;k++)a.setXYZ(k,0,0,0);let l=new O,r=new O,p=new O,n=new O,i=new O,s=new O,o=new O,c=new O;if(t)for(let k=0,b=t.count;k<b;k+=3){let J=t.getX(k+0),q=t.getX(k+1),U=t.getX(k+2);l.fromBufferAttribute(e,J),r.fromBufferAttribute(e,q),p.fromBufferAttribute(e,U),o.subVectors(p,r),c.subVectors(l,r),o.cross(c),n.fromBufferAttribute(a,J),i.fromBufferAttribute(a,q),s.fromBufferAttribute(a,U),n.add(o),i.add(o),s.add(o),a.setXYZ(J,n.x,n.y,n.z),a.setXYZ(q,i.x,i.y,i.z),a.setXYZ(U,s.x,s.y,s.z)}else for(let k=0,b=e.count;k<b;k+=3)l.fromBufferAttribute(e,k+0),r.fromBufferAttribute(e,k+1),p.fromBufferAttribute(e,k+2),o.subVectors(p,r),c.subVectors(l,r),o.cross(c),a.setXYZ(k+0,o.x,o.y,o.z),a.setXYZ(k+1,o.x,o.y,o.z),a.setXYZ(k+2,o.x,o.y,o.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(n,i){let s=n.array,o=n.itemSize,c=n.normalized,k=new s.constructor(i.length*o),b=0,J=0;for(let q=0,U=i.length;q<U;q++){n.isInterleavedBufferAttribute?b=i[q]*n.data.stride+n.offset:b=i[q]*o;for(let u=0;u<o;u++)k[J++]=s[b++]}return new Ge(k,o,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new S,a=this.index.array,l=this.attributes;for(let n in l){let i=l[n],s=t(i,a);e.setAttribute(n,s)}let r=this.morphAttributes;for(let n in r){let i=[],s=r[n];for(let o=0,c=s.length;o<c;o++){let k=s[o],b=t(k,a);i.push(b)}e.morphAttributes[n]=i}e.morphTargetsRelative=this.morphTargetsRelative;let p=this.groups;for(let n=0,i=p.length;n<i;n++){let s=p[n];e.addGroup(s.start,s.count,s.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let i=this.parameters;for(let s in i)i[s]!==void 0&&(t[s]=i[s]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let a=this.attributes;for(let i in a){let s=a[i];t.data.attributes[i]=s.toJSON(t.data)}let l={},r=!1;for(let i in this.morphAttributes){let s=this.morphAttributes[i],o=[];for(let c=0,k=s.length;c<k;c++){let b=s[c];o.push(b.toJSON(t.data))}o.length>0&&(l[i]=o,r=!0)}r&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);let p=this.groups;p.length>0&&(t.data.groups=JSON.parse(JSON.stringify(p)));let n=this.boundingSphere;return n!==null&&(t.data.boundingSphere=n.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let a=t.index;a!==null&&this.setIndex(a.clone());let l=t.attributes;for(let s in l){let o=l[s];this.setAttribute(s,o.clone(e))}let r=t.morphAttributes;for(let s in r){let o=[],c=r[s];for(let k=0,b=c.length;k<b;k++)o.push(c[k].clone(e));this.morphAttributes[s]=o}this.morphTargetsRelative=t.morphTargetsRelative;let p=t.groups;for(let s=0,o=p.length;s<o;s++){let c=p[s];this.addGroup(c.start,c.count,c.materialIndex)}let n=t.boundingBox;n!==null&&(this.boundingBox=n.clone());let i=t.boundingSphere;return i!==null&&(this.boundingSphere=i.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uo=new pe,HS=new vl,kp=new tS,Jo=new O,bp=new O,up=new O,Up=new O,hi=new O,Jp=new O,qo=new O,qp=new O,je=class extends ge{constructor(t=new Ze,e=new aS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){let l=e[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,p=l.length;r<p;r++){let n=l[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(t,e){let a=this.geometry,l=a.attributes.position,r=a.morphAttributes.position,p=a.morphTargetsRelative;e.fromBufferAttribute(l,t);let n=this.morphTargetInfluences;if(r&&n){Jp.set(0,0,0);for(let i=0,s=r.length;i<s;i++){let o=n[i],c=r[i];o!==0&&(hi.fromBufferAttribute(c,t),p?Jp.addScaledVector(hi,o):Jp.addScaledVector(hi.sub(e),o))}e.add(Jp)}return e}raycast(t,e){let a=this.geometry,l=this.material,r=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),kp.copy(a.boundingSphere),kp.applyMatrix4(r),HS.copy(t.ray).recast(t.near),!(kp.containsPoint(HS.origin)===!1&&(HS.intersectSphere(kp,Jo)===null||HS.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Uo.copy(r).invert(),HS.copy(t.ray).applyMatrix4(Uo),!(a.boundingBox!==null&&HS.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,HS)))}_computeIntersections(t,e,a){let l,r=this.geometry,p=this.material,n=r.index,i=r.attributes.position,s=r.attributes.uv,o=r.attributes.uv1,c=r.attributes.normal,k=r.groups,b=r.drawRange;if(n!==null)if(Array.isArray(p))for(let J=0,q=k.length;J<q;J++){let U=k[J],u=p[U.materialIndex],x=Math.max(U.start,b.start),K=Math.min(n.count,Math.min(U.start+U.count,b.start+b.count));for(let W=x,N=K;W<N;W+=3){let h=n.getX(W),I=n.getX(W+1),G=n.getX(W+2);l=Vp(this,u,t,a,s,o,c,h,I,G),l&&(l.faceIndex=Math.floor(W/3),l.face.materialIndex=U.materialIndex,e.push(l))}}else{let J=Math.max(0,b.start),q=Math.min(n.count,b.start+b.count);for(let U=J,u=q;U<u;U+=3){let x=n.getX(U),K=n.getX(U+1),W=n.getX(U+2);l=Vp(this,p,t,a,s,o,c,x,K,W),l&&(l.faceIndex=Math.floor(U/3),e.push(l))}}else if(i!==void 0)if(Array.isArray(p))for(let J=0,q=k.length;J<q;J++){let U=k[J],u=p[U.materialIndex],x=Math.max(U.start,b.start),K=Math.min(i.count,Math.min(U.start+U.count,b.start+b.count));for(let W=x,N=K;W<N;W+=3){let h=W,I=W+1,G=W+2;l=Vp(this,u,t,a,s,o,c,h,I,G),l&&(l.faceIndex=Math.floor(W/3),l.face.materialIndex=U.materialIndex,e.push(l))}}else{let J=Math.max(0,b.start),q=Math.min(i.count,b.start+b.count);for(let U=J,u=q;U<u;U+=3){let x=U,K=U+1,W=U+2;l=Vp(this,p,t,a,s,o,c,x,K,W),l&&(l.faceIndex=Math.floor(U/3),e.push(l))}}}};function Wb(S,t,e,a,l,r,p,n){let i;if(t.side===aa?i=a.intersectTriangle(p,r,l,!0,n):i=a.intersectTriangle(l,r,p,t.side===_a,n),i===null)return null;qp.copy(n),qp.applyMatrix4(S.matrixWorld);let s=e.ray.origin.distanceTo(qp);return s<e.near||s>e.far?null:{distance:s,point:qp.clone(),object:S}}function Vp(S,t,e,a,l,r,p,n,i,s){S.getVertexPosition(n,bp),S.getVertexPosition(i,up),S.getVertexPosition(s,Up);let o=Wb(S,t,e,a,bp,up,Up,qo);if(o){let c=new O;WS.getBarycoord(qo,bp,up,Up,c),l&&(o.uv=WS.getInterpolatedAttribute(l,n,i,s,c,new Dt)),r&&(o.uv1=WS.getInterpolatedAttribute(r,n,i,s,c,new Dt)),p&&(o.normal=WS.getInterpolatedAttribute(p,n,i,s,c,new O),o.normal.dot(a.direction)>0&&o.normal.multiplyScalar(-1));let k={a:n,b:i,c:s,normal:new O,materialIndex:0};WS.getNormal(bp,up,Up,k.normal),o.face=k,o.barycoord=c}return o}var wl=class S extends Ze{constructor(t=1,e=1,a=1,l=1,r=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:l,heightSegments:r,depthSegments:p};let n=this;l=Math.floor(l),r=Math.floor(r),p=Math.floor(p);let i=[],s=[],o=[],c=[],k=0,b=0;J("z","y","x",-1,-1,a,e,t,p,r,0),J("z","y","x",1,-1,a,e,-t,p,r,1),J("x","z","y",1,1,t,a,e,l,p,2),J("x","z","y",1,-1,t,a,-e,l,p,3),J("x","y","z",1,-1,t,e,a,l,r,4),J("x","y","z",-1,-1,t,e,-a,l,r,5),this.setIndex(i),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(c,2));function J(q,U,u,x,K,W,N,h,I,G,V){let d=W/I,L=N/G,f=W/2,C=N/2,Z=h/2,w=I+1,v=G+1,D=0,Y=0,at=new O;for(let lt=0;lt<v;lt++){let ut=lt*L-C;for(let It=0;It<w;It++){let gt=It*d-f;at[q]=gt*x,at[U]=ut*K,at[u]=Z,s.push(at.x,at.y,at.z),at[q]=0,at[U]=0,at[u]=h>0?1:-1,o.push(at.x,at.y,at.z),c.push(It/I),c.push(1-lt/G),D+=1}}for(let lt=0;lt<G;lt++)for(let ut=0;ut<I;ut++){let It=k+ut+w*lt,gt=k+ut+w*(lt+1),Pt=k+(ut+1)+w*(lt+1),Qt=k+(ut+1)+w*lt;i.push(It,gt,Qt),i.push(gt,Pt,Qt),Y+=6}n.addGroup(b,Y,V),b+=Y,k+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new S(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function nl(S){let t={};for(let e in S){t[e]={};for(let a in S[e]){let l=S[e][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=l.clone():Array.isArray(l)?t[e][a]=l.slice():t[e][a]=l}}return t}function Qe(S){let t={};for(let e=0;e<S.length;e++){let a=nl(S[e]);for(let l in a)t[l]=a[l]}return t}function Tb(S){let t=[];for(let e=0;e<S.length;e++)t.push(S[e].clone());return t}function ns(S){let t=S.getRenderTarget();return t===null?S.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var vn={clone:nl,merge:Qe},mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ta=class extends eS{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mb,this.fragmentShader=yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nl(t.uniforms),this.uniformsGroups=Tb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let l in this.uniforms){let p=this.uniforms[l].value;p&&p.isTexture?e.uniforms[l]={type:"t",value:p.toJSON(t).uuid}:p&&p.isColor?e.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?e.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?e.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?e.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?e.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?e.uniforms[l]={type:"m4",value:p.toArray()}:e.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let a={};for(let l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}},Lr=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},KS=new O,Vo=new Dt,Ko=new Dt,Pe=class extends Lr{constructor(t=50,e=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){KS.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(KS.x,KS.y).multiplyScalar(-t/KS.z),KS.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(KS.x,KS.y).multiplyScalar(-t/KS.z)}getViewSize(t,e){return this.getViewBounds(t,Vo,Ko),e.subVectors(Ko,Vo)}setViewOffset(t,e,a,l,r,p){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=l,this.view.width=r,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kr*.5*this.fov)/this.zoom,a=2*e,l=this.aspect*a,r=-.5*l,p=this.view;if(this.view!==null&&this.view.enabled){let i=p.fullWidth,s=p.fullHeight;r+=p.offsetX*l/i,e-=p.offsetY*a/s,l*=p.width/i,a*=p.height/s}let n=this.filmOffset;n!==0&&(r+=t*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+l,e,e-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ol=-90,Gl=1,Op=class extends ge{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let l=new Pe(Ol,Gl,t,e);l.layers=this.layers,this.add(l);let r=new Pe(Ol,Gl,t,e);r.layers=this.layers,this.add(r);let p=new Pe(Ol,Gl,t,e);p.layers=this.layers,this.add(p);let n=new Pe(Ol,Gl,t,e);n.layers=this.layers,this.add(n);let i=new Pe(Ol,Gl,t,e);i.layers=this.layers,this.add(i);let s=new Pe(Ol,Gl,t,e);s.layers=this.layers,this.add(s)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[a,l,r,p,n,i]=e;for(let s of e)this.remove(s);if(t===Na)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else if(t===hr)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let s of e)this.add(s),s.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,p,n,i,s,o]=this.children,c=t.getRenderTarget(),k=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),J=t.xr.enabled;t.xr.enabled=!1;let q=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(e,r),t.setRenderTarget(a,1,l),t.render(e,p),t.setRenderTarget(a,2,l),t.render(e,n),t.setRenderTarget(a,3,l),t.render(e,i),t.setRenderTarget(a,4,l),t.render(e,s),a.texture.generateMipmaps=q,t.setRenderTarget(a,5,l),t.render(e,o),t.setRenderTarget(c,k,b),t.xr.enabled=J,a.texture.needsPMREMUpdate=!0}},Ar=class extends na{constructor(t=[],e=rl,a,l,r,p,n,i,s,o){super(t,e,a,l,r,p,n,i,s,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gp=class extends da{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Ar(l),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new wl(5,5,5),r=new ta({name:"CubemapFromEquirect",uniforms:nl(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:aa,blending:lS});r.uniforms.tEquirect.value=e;let p=new je(l,r),n=e.minFilter;return e.minFilter===RS&&(e.minFilter=ja),new Op(1,10,this).update(t,p),e.minFilter=n,p.geometry.dispose(),p.material.dispose(),this}clear(t,e=!0,a=!0,l=!0){let r=t.getRenderTarget();for(let p=0;p<6;p++)t.setRenderTarget(this,p),t.clear(e,a,l);t.setRenderTarget(r)}},zS=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},hb={type:"move"},Xl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zS,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zS,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zS,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let l=null,r=null,p=null,n=this._targetRay,i=this._grip,s=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(s&&t.hand){p=!0;for(let q of t.hand.values()){let U=e.getJointPose(q,a),u=this._getHandJoint(s,q);U!==null&&(u.matrix.fromArray(U.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=U.radius),u.visible=U!==null}let o=s.joints["index-finger-tip"],c=s.joints["thumb-tip"],k=o.position.distanceTo(c.position),b=.02,J=.005;s.inputState.pinching&&k>b+J?(s.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!s.inputState.pinching&&k<=b-J&&(s.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else i!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,a),r!==null&&(i.matrix.fromArray(r.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,r.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(r.linearVelocity)):i.hasLinearVelocity=!1,r.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(r.angularVelocity)):i.hasAngularVelocity=!1));n!==null&&(l=e.getPose(t.targetRaySpace,a),l===null&&r!==null&&(l=r),l!==null&&(n.matrix.fromArray(l.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,l.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(l.linearVelocity)):n.hasLinearVelocity=!1,l.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(l.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return n!==null&&(n.visible=l!==null),i!==null&&(i.visible=r!==null),s!==null&&(s.visible=p!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let a=new zS;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}},Ir=class S{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new S(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $S=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fp=class extends na{constructor(t=null,e=1,a=1,l,r,p,n,i,s=pa,o=pa,c,k){super(null,p,n,i,s,o,l,r,c,k),this.isDataTexture=!0,this.image={data:t,width:e,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yS=class extends Ge{constructor(t,e,a,l=1){super(t,e,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fl=new pe,Wo=new pe,dp=[],To=new Fa,xb=new pe,Vr=new je,dr=new tS,SS=class extends je{constructor(t,e,a){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yS(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<a;l++)this.setMatrixAt(l,xb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fa),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<e;a++)this.getMatrixAt(a,fl),To.copy(t.boundingBox).applyMatrix4(fl),this.boundingBox.union(To)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tS),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<e;a++)this.getMatrixAt(a,fl),dr.copy(t.boundingSphere).applyMatrix4(fl),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let a=e.morphTargetInfluences,l=this.morphTexture.source.data.data,r=a.length+1,p=t*r+1;for(let n=0;n<a.length;n++)a[n]=l[p+n]}raycast(t,e){let a=this.matrixWorld,l=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(a),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<l;r++){this.getMatrixAt(r,fl),Wo.multiplyMatrices(a,fl),Vr.matrixWorld=Wo,Vr.raycast(t,dp);for(let p=0,n=dp.length;p<n;p++){let i=dp[p];i.instanceId=r,i.object=this,e.push(i)}dp.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yS(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let a=e.morphTargetInfluences,l=a.length+1;this.morphTexture===null&&(this.morphTexture=new fp(new Float32Array(l*this.count),l,this.count,on,Oa));let r=this.morphTexture.source.data.data,p=0;for(let s=0;s<a.length;s++)p+=a[s];let n=this.geometry.morphTargetsRelative?1:1-p,i=l*t;r[i]=n,r.set(a,i+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new O,Nb=new O,jb=new _t,Va=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,l){return this.normal.set(t,e,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){let l=xi.subVectors(a,e).cross(Nb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let a=t.delta(xi),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/l;return r<0||r>1?null:e.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let a=e||jb.getNormalMatrix(t),l=this.coplanarPoint(xi).applyMatrix4(t),r=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},PS=new tS,Rb=new Dt(.5,.5),Kp=new O,Hl=class{constructor(t=new Va,e=new Va,a=new Va,l=new Va,r=new Va,p=new Va){this.planes=[t,e,a,l,r,p]}set(t,e,a,l,r,p){let n=this.planes;return n[0].copy(t),n[1].copy(e),n[2].copy(a),n[3].copy(l),n[4].copy(r),n[5].copy(p),this}copy(t){let e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=Na,a=!1){let l=this.planes,r=t.elements,p=r[0],n=r[1],i=r[2],s=r[3],o=r[4],c=r[5],k=r[6],b=r[7],J=r[8],q=r[9],U=r[10],u=r[11],x=r[12],K=r[13],W=r[14],N=r[15];if(l[0].setComponents(s-p,b-o,u-J,N-x).normalize(),l[1].setComponents(s+p,b+o,u+J,N+x).normalize(),l[2].setComponents(s+n,b+c,u+q,N+K).normalize(),l[3].setComponents(s-n,b-c,u-q,N-K).normalize(),a)l[4].setComponents(i,k,U,W).normalize(),l[5].setComponents(s-i,b-k,u-U,N-W).normalize();else if(l[4].setComponents(s-i,b-k,u-U,N-W).normalize(),e===Na)l[5].setComponents(s+i,b+k,u+U,N+W).normalize();else if(e===hr)l[5].setComponents(i,k,U,W).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),PS.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),PS.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(PS)}intersectsSprite(t){PS.center.set(0,0,0);let e=Rb.distanceTo(t.center);return PS.radius=.7071067811865476+e,PS.applyMatrix4(t.matrixWorld),this.intersectsSphere(PS)}intersectsSphere(t){let e=this.planes,a=t.center,l=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){let e=this.planes;for(let a=0;a<6;a++){let l=e[a];if(Kp.x=l.normal.x>0?t.max.x:t.min.x,Kp.y=l.normal.y>0?t.max.y:t.min.y,Kp.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Kp)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mp=class extends eS{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mo=new pe,Fi=new vl,Wp=new tS,Tp=new O,Or=class extends ge{constructor(t=new Ze,e=new Mp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let a=this.geometry,l=this.matrixWorld,r=t.params.Points.threshold,p=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Wp.copy(a.boundingSphere),Wp.applyMatrix4(l),Wp.radius+=r,t.ray.intersectsSphere(Wp)===!1)return;mo.copy(l).invert(),Fi.copy(t.ray).applyMatrix4(mo);let n=r/((this.scale.x+this.scale.y+this.scale.z)/3),i=n*n,s=a.index,c=a.attributes.position;if(s!==null){let k=Math.max(0,p.start),b=Math.min(s.count,p.start+p.count);for(let J=k,q=b;J<q;J++){let U=s.getX(J);Tp.fromBufferAttribute(c,U),yo(Tp,U,i,l,t,e,this)}}else{let k=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let J=k,q=b;J<q;J++)Tp.fromBufferAttribute(c,J),yo(Tp,J,i,l,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){let l=e[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,p=l.length;r<p;r++){let n=l[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function yo(S,t,e,a,l,r,p){let n=Fi.distanceSqToPoint(S);if(n<e){let i=new O;Fi.closestPointToPoint(S,i),i.applyMatrix4(a);let s=l.ray.origin.distanceTo(i);if(s<l.near||s>l.far)return;r.push({distance:s,distanceToRay:Math.sqrt(n),point:i,index:t,face:null,faceIndex:null,barycoord:null,object:p})}}var tl=class extends na{constructor(t,e,a=Za,l,r,p,n=pa,i=pa,s,o=Fl,c=1){if(o!==Fl&&o!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let k={width:t,height:e,depth:c};super(k,l,r,p,n,i,o,a,s),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Gr=class extends na{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ep=class S extends Ze{constructor(t=[],e=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:a,detail:l};let r=[],p=[];n(l),s(a),o(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(p,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function n(x){let K=new O,W=new O,N=new O;for(let h=0;h<e.length;h+=3)b(e[h+0],K),b(e[h+1],W),b(e[h+2],N),i(K,W,N,x)}function i(x,K,W,N){let h=N+1,I=[];for(let G=0;G<=h;G++){I[G]=[];let V=x.clone().lerp(W,G/h),d=K.clone().lerp(W,G/h),L=h-G;for(let f=0;f<=L;f++)f===0&&G===h?I[G][f]=V:I[G][f]=V.clone().lerp(d,f/L)}for(let G=0;G<h;G++)for(let V=0;V<2*(h-G)-1;V++){let d=Math.floor(V/2);V%2===0?(k(I[G][d+1]),k(I[G+1][d]),k(I[G][d])):(k(I[G][d+1]),k(I[G+1][d+1]),k(I[G+1][d]))}}function s(x){let K=new O;for(let W=0;W<r.length;W+=3)K.x=r[W+0],K.y=r[W+1],K.z=r[W+2],K.normalize().multiplyScalar(x),r[W+0]=K.x,r[W+1]=K.y,r[W+2]=K.z}function o(){let x=new O;for(let K=0;K<r.length;K+=3){x.x=r[K+0],x.y=r[K+1],x.z=r[K+2];let W=U(x)/2/Math.PI+.5,N=u(x)/Math.PI+.5;p.push(W,1-N)}J(),c()}function c(){for(let x=0;x<p.length;x+=6){let K=p[x+0],W=p[x+2],N=p[x+4],h=Math.max(K,W,N),I=Math.min(K,W,N);h>.9&&I<.1&&(K<.2&&(p[x+0]+=1),W<.2&&(p[x+2]+=1),N<.2&&(p[x+4]+=1))}}function k(x){r.push(x.x,x.y,x.z)}function b(x,K){let W=x*3;K.x=t[W+0],K.y=t[W+1],K.z=t[W+2]}function J(){let x=new O,K=new O,W=new O,N=new O,h=new Dt,I=new Dt,G=new Dt;for(let V=0,d=0;V<r.length;V+=9,d+=6){x.set(r[V+0],r[V+1],r[V+2]),K.set(r[V+3],r[V+4],r[V+5]),W.set(r[V+6],r[V+7],r[V+8]),h.set(p[d+0],p[d+1]),I.set(p[d+2],p[d+3]),G.set(p[d+4],p[d+5]),N.copy(x).add(K).add(W).divideScalar(3);let L=U(N);q(h,d+0,x,L),q(I,d+2,K,L),q(G,d+4,W,L)}}function q(x,K,W,N){N<0&&x.x===1&&(p[K]=x.x-1),W.x===0&&W.z===0&&(p[K]=N/2/Math.PI+.5)}function U(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new S(t.vertices,t.indices,t.radius,t.details)}};var Pl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let a=this.getUtoTmapping(t);return this.getPoint(a,e)}getPoints(t=5){let e=[];for(let a=0;a<=t;a++)e.push(this.getPoint(a/t));return e}getSpacedPoints(t=5){let e=[];for(let a=0;a<=t;a++)e.push(this.getPointAt(a/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],a,l=this.getPoint(0),r=0;e.push(0);for(let p=1;p<=t;p++)a=this.getPoint(p/t),r+=a.distanceTo(l),e.push(r),l=a;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let a=this.getLengths(),l=0,r=a.length,p;e?p=e:p=t*a[r-1];let n=0,i=r-1,s;for(;n<=i;)if(l=Math.floor(n+(i-n)/2),s=a[l]-p,s<0)n=l+1;else if(s>0)i=l-1;else{i=l;break}if(l=i,a[l]===p)return l/(r-1);let o=a[l],k=a[l+1]-o,b=(p-o)/k;return(l+b)/(r-1)}getTangent(t,e){let l=t-1e-4,r=t+1e-4;l<0&&(l=0),r>1&&(r=1);let p=this.getPoint(l),n=this.getPoint(r),i=e||(p.isVector2?new Dt:new O);return i.copy(n).sub(p).normalize(),i}getTangentAt(t,e){let a=this.getUtoTmapping(t);return this.getTangent(a,e)}computeFrenetFrames(t,e=!1){let a=new O,l=[],r=[],p=[],n=new O,i=new pe;for(let b=0;b<=t;b++){let J=b/t;l[b]=this.getTangentAt(J,new O)}r[0]=new O,p[0]=new O;let s=Number.MAX_VALUE,o=Math.abs(l[0].x),c=Math.abs(l[0].y),k=Math.abs(l[0].z);o<=s&&(s=o,a.set(1,0,0)),c<=s&&(s=c,a.set(0,1,0)),k<=s&&a.set(0,0,1),n.crossVectors(l[0],a).normalize(),r[0].crossVectors(l[0],n),p[0].crossVectors(l[0],r[0]);for(let b=1;b<=t;b++){if(r[b]=r[b-1].clone(),p[b]=p[b-1].clone(),n.crossVectors(l[b-1],l[b]),n.length()>Number.EPSILON){n.normalize();let J=Math.acos(ee(l[b-1].dot(l[b]),-1,1));r[b].applyMatrix4(i.makeRotationAxis(n,J))}p[b].crossVectors(l[b],r[b])}if(e===!0){let b=Math.acos(ee(r[0].dot(r[t]),-1,1));b/=t,l[0].dot(n.crossVectors(r[0],r[t]))>0&&(b=-b);for(let J=1;J<=t;J++)r[J].applyMatrix4(i.makeRotationAxis(l[J],b*J)),p[J].crossVectors(l[J],r[J])}return{tangents:l,normals:r,binormals:p}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function is(){let S=0,t=0,e=0,a=0;function l(r,p,n,i){S=r,t=n,e=-3*r+3*p-2*n-i,a=2*r-2*p+n+i}return{initCatmullRom:function(r,p,n,i,s){l(p,n,s*(n-r),s*(i-p))},initNonuniformCatmullRom:function(r,p,n,i,s,o,c){let k=(p-r)/s-(n-r)/(s+o)+(n-p)/o,b=(n-p)/o-(i-p)/(o+c)+(i-n)/c;k*=o,b*=o,l(p,n,k,b)},calc:function(r){let p=r*r,n=p*r;return S+t*r+e*p+a*n}}}var mp=new O,Ni=new is,ji=new is,Ri=new is,ea=class extends Pl{constructor(t=[],e=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=a,this.tension=l}getPoint(t,e=new O){let a=e,l=this.points,r=l.length,p=(r-(this.closed?0:1))*t,n=Math.floor(p),i=p-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/r)+1)*r:i===0&&n===r-1&&(n=r-2,i=1);let s,o;this.closed||n>0?s=l[(n-1)%r]:(mp.subVectors(l[0],l[1]).add(l[0]),s=mp);let c=l[n%r],k=l[(n+1)%r];if(this.closed||n+2<r?o=l[(n+2)%r]:(mp.subVectors(l[r-1],l[r-2]).add(l[r-1]),o=mp),this.curveType==="centripetal"||this.curveType==="chordal"){let b=this.curveType==="chordal"?.5:.25,J=Math.pow(s.distanceToSquared(c),b),q=Math.pow(c.distanceToSquared(k),b),U=Math.pow(k.distanceToSquared(o),b);q<1e-4&&(q=1),J<1e-4&&(J=q),U<1e-4&&(U=q),Ni.initNonuniformCatmullRom(s.x,c.x,k.x,o.x,J,q,U),ji.initNonuniformCatmullRom(s.y,c.y,k.y,o.y,J,q,U),Ri.initNonuniformCatmullRom(s.z,c.z,k.z,o.z,J,q,U)}else this.curveType==="catmullrom"&&(Ni.initCatmullRom(s.x,c.x,k.x,o.x,this.tension),ji.initCatmullRom(s.y,c.y,k.y,o.y,this.tension),Ri.initCatmullRom(s.z,c.z,k.z,o.z,this.tension));return a.set(Ni.calc(i),ji.calc(i),Ri.calc(i)),a}copy(t){super.copy(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){let l=t.points[e];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,a=this.points.length;e<a;e++){let l=this.points[e];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,a=t.points.length;e<a;e++){let l=t.points[e];this.points.push(new O().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lb(S,t){let e=1-S;return e*e*t}function Ab(S,t){return 2*(1-S)*S*t}function Ib(S,t){return S*S*t}function Li(S,t,e,a){return Lb(S,t)+Ab(S,e)+Ib(S,a)}function Ob(S,t){let e=1-S;return e*e*e*t}function Gb(S,t){let e=1-S;return 3*e*e*S*t}function fb(S,t){return 3*(1-S)*S*S*t}function Mb(S,t){return S*S*S*t}function Ai(S,t,e,a,l){return Ob(S,t)+Gb(S,e)+fb(S,a)+Mb(S,l)}var Ca=class extends Pl{constructor(t=new O,e=new O,a=new O,l=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=a,this.v3=l}getPoint(t,e=new O){let a=e,l=this.v0,r=this.v1,p=this.v2,n=this.v3;return a.set(Ai(t,l.x,r.x,p.x,n.x),Ai(t,l.y,r.y,p.y,n.y),Ai(t,l.z,r.z,p.z,n.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var hS=class extends Pl{constructor(t=new O,e=new O,a=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=a}getPoint(t,e=new O){let a=e,l=this.v0,r=this.v1,p=this.v2;return a.set(Li(t,l.x,r.x,p.x),Li(t,l.y,r.y,p.y),Li(t,l.z,r.z,p.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};var Ql=class S extends Ep{constructor(t=1,e=0){let a=(1+Math.sqrt(5))/2,l=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new S(t.radius,t.detail)}};var La=class S extends Ze{constructor(t=1,e=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:l};let r=t/2,p=e/2,n=Math.floor(a),i=Math.floor(l),s=n+1,o=i+1,c=t/n,k=e/i,b=[],J=[],q=[],U=[];for(let u=0;u<o;u++){let x=u*k-p;for(let K=0;K<s;K++){let W=K*c-r;J.push(W,-x,0),q.push(0,0,1),U.push(K/n),U.push(1-u/i)}}for(let u=0;u<i;u++)for(let x=0;x<n;x++){let K=x+s*u,W=x+s*(u+1),N=x+1+s*(u+1),h=x+1+s*u;b.push(K,W,h),b.push(W,N,h)}this.setIndex(b),this.setAttribute("position",new le(J,3)),this.setAttribute("normal",new le(q,3)),this.setAttribute("uv",new le(U,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new S(t.width,t.height,t.widthSegments,t.heightSegments)}};var Aa=class extends eS{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},el=class extends Aa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var xS=class extends eS{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fp=class extends eS{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yp(S,t){return!S||S.constructor===t?S:typeof t.BYTES_PER_ELEMENT=="number"?new t(S):Array.prototype.slice.call(S)}function Eb(S){return ArrayBuffer.isView(S)&&!(S instanceof DataView)}var al=class{constructor(t,e,a,l){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=l!==void 0?l:new e.constructor(a),this.sampleValues=e,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,a=this._cachedIndex,l=e[a],r=e[a-1];a:{t:{let p;e:{S:if(!(t<l)){for(let n=a+2;;){if(l===void 0){if(t<r)break S;return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===n)break;if(r=l,l=e[++a],t<l)break t}p=e.length;break e}if(!(t>=r)){let n=e[1];t<n&&(a=2,r=n);for(let i=a-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===i)break;if(l=r,r=e[--a-1],t>=r)break t}p=a,a=0;break e}break a}for(;a<p;){let n=a+p>>>1;t<e[n]?p=n:a=n+1}if(l=e[a],r=e[a-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(l===void 0)return a=e.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,r,l)}return this.interpolate_(a,r,t,l)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,a=this.sampleValues,l=this.valueSize,r=t*l;for(let p=0;p!==l;++p)e[p]=a[r+p];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cp=class extends al{constructor(t,e,a,l){super(t,e,a,l),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oi,endingEnd:Oi}}intervalChanged_(t,e,a){let l=this.parameterPositions,r=t-2,p=t+1,n=l[r],i=l[p];if(n===void 0)switch(this.getSettings_().endingStart){case Gi:r=t,n=2*e-a;break;case fi:r=l.length-2,n=e+l[r]-l[r+1];break;default:r=t,n=a}if(i===void 0)switch(this.getSettings_().endingEnd){case Gi:p=t,i=2*a-e;break;case fi:p=1,i=a+l[1]-l[0];break;default:p=t-1,i=e}let s=(a-e)*.5,o=this.valueSize;this._weightPrev=s/(e-n),this._weightNext=s/(i-a),this._offsetPrev=r*o,this._offsetNext=p*o}interpolate_(t,e,a,l){let r=this.resultBuffer,p=this.sampleValues,n=this.valueSize,i=t*n,s=i-n,o=this._offsetPrev,c=this._offsetNext,k=this._weightPrev,b=this._weightNext,J=(a-e)/(l-e),q=J*J,U=q*J,u=-k*U+2*k*q-k*J,x=(1+k)*U+(-1.5-2*k)*q+(-.5+k)*J+1,K=(-1-b)*U+(1.5+b)*q+.5*J,W=b*U-b*q;for(let N=0;N!==n;++N)r[N]=u*p[o+N]+x*p[s+N]+K*p[i+N]+W*p[c+N];return r}},gp=class extends al{constructor(t,e,a,l){super(t,e,a,l)}interpolate_(t,e,a,l){let r=this.resultBuffer,p=this.sampleValues,n=this.valueSize,i=t*n,s=i-n,o=(a-e)/(l-e),c=1-o;for(let k=0;k!==n;++k)r[k]=p[s+k]*c+p[i+k]*o;return r}},Zp=class extends al{constructor(t,e,a,l){super(t,e,a,l)}interpolate_(t){return this.copySampleValue_(t-1)}},ua=class{constructor(t,e,a,l){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yp(e,this.TimeBufferType),this.values=yp(a,this.ValueBufferType),this.setInterpolation(l||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,a;if(e.toJSON!==this.toJSON)a=e.toJSON(t);else{a={name:t.name,times:yp(t.times,Array),values:yp(t.values,Array)};let l=t.getInterpolation();l!==t.DefaultInterpolation&&(a.interpolation=l)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new Zp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case Rp:e=this.InterpolantFactoryMethodLinear;break;case hp:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Rp;case this.InterpolantFactoryMethodSmooth:return hp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let a=0,l=e.length;a!==l;++a)e[a]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let a=0,l=e.length;a!==l;++a)e[a]*=t}return this}trim(t,e){let a=this.times,l=a.length,r=0,p=l-1;for(;r!==l&&a[r]<t;)++r;for(;p!==-1&&a[p]>e;)--p;if(++p,r!==0||p!==l){r>=p&&(p=Math.max(p,1),r=p-1);let n=this.getValueSize();this.times=a.slice(r,p),this.values=this.values.slice(r*n,p*n)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let a=this.times,l=this.values,r=a.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let p=null;for(let n=0;n!==r;n++){let i=a[n];if(typeof i=="number"&&isNaN(i)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,n,i),t=!1;break}if(p!==null&&p>i){console.error("THREE.KeyframeTrack: Out of order keys.",this,n,i,p),t=!1;break}p=i}if(l!==void 0&&Eb(l))for(let n=0,i=l.length;n!==i;++n){let s=l[n];if(isNaN(s)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,s),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),a=this.getValueSize(),l=this.getInterpolation()===hp,r=t.length-1,p=1;for(let n=1;n<r;++n){let i=!1,s=t[n],o=t[n+1];if(s!==o&&(n!==1||s!==t[0]))if(l)i=!0;else{let c=n*a,k=c-a,b=c+a;for(let J=0;J!==a;++J){let q=e[c+J];if(q!==e[k+J]||q!==e[b+J]){i=!0;break}}}if(i){if(n!==p){t[p]=t[n];let c=n*a,k=p*a;for(let b=0;b!==a;++b)e[k+b]=e[c+b]}++p}}if(r>0){t[p]=t[r];for(let n=r*a,i=p*a,s=0;s!==a;++s)e[i+s]=e[n+s];++p}return p!==t.length?(this.times=t.slice(0,p),this.values=e.slice(0,p*a)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),a=this.constructor,l=new a(this.name,t,e);return l.createInterpolant=this.createInterpolant,l}};ua.prototype.ValueTypeName="";ua.prototype.TimeBufferType=Float32Array;ua.prototype.ValueBufferType=Float32Array;ua.prototype.DefaultInterpolation=Rp;var NS=class extends ua{constructor(t,e,a){super(t,e,a)}};NS.prototype.ValueTypeName="bool";NS.prototype.ValueBufferType=Array;NS.prototype.DefaultInterpolation=mr;NS.prototype.InterpolantFactoryMethodLinear=void 0;NS.prototype.InterpolantFactoryMethodSmooth=void 0;var vp=class extends ua{constructor(t,e,a,l){super(t,e,a,l)}};vp.prototype.ValueTypeName="color";var Yp=class extends ua{constructor(t,e,a,l){super(t,e,a,l)}};Yp.prototype.ValueTypeName="number";var wp=class extends al{constructor(t,e,a,l){super(t,e,a,l)}interpolate_(t,e,a,l){let r=this.resultBuffer,p=this.sampleValues,n=this.valueSize,i=(a-e)/(l-e),s=t*n;for(let o=s+n;s!==o;s+=4)$e.slerpFlat(r,0,p,s-n,p,s,i);return r}},fr=class extends ua{constructor(t,e,a,l){super(t,e,a,l)}InterpolantFactoryMethodLinear(t){return new wp(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;var jS=class extends ua{constructor(t,e,a){super(t,e,a)}};jS.prototype.ValueTypeName="string";jS.prototype.ValueBufferType=Array;jS.prototype.DefaultInterpolation=mr;jS.prototype.InterpolantFactoryMethodLinear=void 0;jS.prototype.InterpolantFactoryMethodSmooth=void 0;var Xp=class extends ua{constructor(t,e,a,l){super(t,e,a,l)}};Xp.prototype.ValueTypeName="vector";var Hp=class{constructor(t,e,a){let l=this,r=!1,p=0,n=0,i,s=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=a,this.abortController=new AbortController,this.itemStart=function(o){n++,r===!1&&l.onStart!==void 0&&l.onStart(o,p,n),r=!0},this.itemEnd=function(o){p++,l.onProgress!==void 0&&l.onProgress(o,p,n),p===n&&(r=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(o){l.onError!==void 0&&l.onError(o)},this.resolveURL=function(o){return i?i(o):o},this.setURLModifier=function(o){return i=o,this},this.addHandler=function(o,c){return s.push(o,c),this},this.removeHandler=function(o){let c=s.indexOf(o);return c!==-1&&s.splice(c,2),this},this.getHandler=function(o){for(let c=0,k=s.length;c<k;c+=2){let b=s[c],J=s[c+1];if(b.global&&(b.lastIndex=0),b.test(o))return J}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qc=new Hp,Pp=class{constructor(t){this.manager=t!==void 0?t:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let a=this;return new Promise(function(l,r){a.load(t,l,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pp.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Er=class extends Mr{constructor(t,e,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ii=new pe,ho=new O,xo=new O,Ci=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ia,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,a=this.matrix;ho.setFromMatrixPosition(t.matrixWorld),e.position.copy(ho),xo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xo),e.updateMatrixWorld(),Ii.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ii,e.coordinateSystem,e.reversedDepth),e.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ii)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sl=class extends Lr{constructor(t=-1,e=1,a=1,l=-1,r=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=l,this.near=r,this.far=p,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,l,r,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=l,this.view.width=r,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2,r=a-t,p=a+t,n=l+e,i=l-e;if(this.view!==null&&this.view.enabled){let s=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=s*this.view.offsetX,p=r+s*this.view.width,n-=o*this.view.offsetY,i=n-o*this.view.height}this.projectionMatrix.makeOrthographic(r,p,n,i,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gi=class extends Ci{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ll=class extends Mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new gi}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Qp=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ss="\\[\\]\\.:\\/",Fb=new RegExp("["+ss+"]","g"),os="[^"+ss+"]",Cb="[^"+ss.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",os),Zb=/(WCOD+)?/.source.replace("WCOD",Cb),vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",os),Yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",os),wb=new RegExp("^"+gb+Zb+vb+Yb+"$"),Xb=["material","materials","bones","map"],Zi=class{constructor(t,e,a){let l=a||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,l)}getValue(t,e){this.bind();let a=this._targetGroup.nCachedObjects_,l=this._bindings[a];l!==void 0&&l.getValue(t,e)}setValue(t,e){let a=this._bindings;for(let l=this._targetGroup.nCachedObjects_,r=a.length;l!==r;++l)a[l].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,a=t.length;e!==a;++e)t[e].unbind()}},Ke=class S{constructor(t,e,a){this.path=e,this.parsedPath=a||S.parseTrackName(e),this.node=S.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,a){return t&&t.isAnimationObjectGroup?new S.Composite(t,e,a):new S(t,e,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fb,"")}static parseTrackName(t){let e=wb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let a={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},l=a.nodeName&&a.nodeName.lastIndexOf(".");if(l!==void 0&&l!==-1){let r=a.nodeName.substring(l+1);Xb.indexOf(r)!==-1&&(a.nodeName=a.nodeName.substring(0,l),a.objectName=r)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let a=t.skeleton.getBoneByName(e);if(a!==void 0)return a}if(t.children){let a=function(r){for(let p=0;p<r.length;p++){let n=r[p];if(n.name===e||n.uuid===e)return n;let i=a(n.children);if(i)return i}return null},l=a(t.children);if(l)return l}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let a=this.resolvedProperty;for(let l=0,r=a.length;l!==r;++l)t[e++]=a[l]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let a=this.resolvedProperty;for(let l=0,r=a.length;l!==r;++l)a[l]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let a=this.resolvedProperty;for(let l=0,r=a.length;l!==r;++l)a[l]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let a=this.resolvedProperty;for(let l=0,r=a.length;l!==r;++l)a[l]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,a=e.objectName,l=e.propertyName,r=e.propertyIndex;if(t||(t=S.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let s=e.objectIndex;switch(a){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let o=0;o<t.length;o++)if(t[o].name===s){s=o;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(s!==void 0){if(t[s]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[s]}}let p=t[l];if(p===void 0){let s=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+s+"."+l+" but it wasn't found.",t);return}let n=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?n=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(n=this.Versioning.MatrixWorldNeedsUpdate);let i=this.BindingType.Direct;if(r!==void 0){if(l==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}i=this.BindingType.ArrayElement,this.resolvedProperty=p,this.propertyIndex=r}else p.fromArray!==void 0&&p.toArray!==void 0?(i=this.BindingType.HasFromToArray,this.resolvedProperty=p):Array.isArray(p)?(i=this.BindingType.EntireArray,this.resolvedProperty=p):this.propertyName=l;this.getValue=this.GetterByBindingType[i],this.setValue=this.SetterByBindingTypeAndVersioning[i][n]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=Zi;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ud=new Float32Array(1);var No=new pe,Fr=class{constructor(t,e,a=0,l=1/0){this.ray=new vl(t,e),this.near=a,this.far=l,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return No.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(No),this}intersectObject(t,e=!0,a=[]){return vi(t,this,a,e),a.sort(jo),a}intersectObjects(t,e=!0,a=[]){for(let l=0,r=t.length;l<r;l++)vi(t[l],this,a,e);return a.sort(jo),a}};function jo(S,t){return S.distance-t.distance}function vi(S,t,e,a){let l=!0;if(S.layers.test(t.layers)&&S.raycast(t,e)===!1&&(l=!1),l===!0&&a===!0){let r=S.children;for(let p=0,n=r.length;p<n;p++)vi(r[p],t,e,!0)}}function cs(S,t,e,a){let l=Hb(a);switch(e){case $i:return S*t;case on:return S*t/l.components*l.byteLength;case cn:return S*t/l.components*l.byteLength;case es:return S*t*2/l.components*l.byteLength;case kn:return S*t*2/l.components*l.byteLength;case ts:return S*t*3/l.components*l.byteLength;case Ka:return S*t*4/l.components*l.byteLength;case bn:return S*t*4/l.components*l.byteLength;case vr:case Yr:return Math.floor((S+3)/4)*Math.floor((t+3)/4)*8;case wr:case Xr:return Math.floor((S+3)/4)*Math.floor((t+3)/4)*16;case Un:case qn:return Math.max(S,16)*Math.max(t,8)/4;case un:case Jn:return Math.max(S,8)*Math.max(t,8)/2;case Vn:case dn:return Math.floor((S+3)/4)*Math.floor((t+3)/4)*8;case Kn:return Math.floor((S+3)/4)*Math.floor((t+3)/4)*16;case Wn:return Math.floor((S+3)/4)*Math.floor((t+3)/4)*16;case Tn:return Math.floor((S+4)/5)*Math.floor((t+3)/4)*16;case mn:return Math.floor((S+4)/5)*Math.floor((t+4)/5)*16;case yn:return Math.floor((S+5)/6)*Math.floor((t+4)/5)*16;case hn:return Math.floor((S+5)/6)*Math.floor((t+5)/6)*16;case xn:return Math.floor((S+7)/8)*Math.floor((t+4)/5)*16;case Nn:return Math.floor((S+7)/8)*Math.floor((t+5)/6)*16;case jn:return Math.floor((S+7)/8)*Math.floor((t+7)/8)*16;case Rn:return Math.floor((S+9)/10)*Math.floor((t+4)/5)*16;case Ln:return Math.floor((S+9)/10)*Math.floor((t+5)/6)*16;case An:return Math.floor((S+9)/10)*Math.floor((t+7)/8)*16;case In:return Math.floor((S+9)/10)*Math.floor((t+9)/10)*16;case On:return Math.floor((S+11)/12)*Math.floor((t+9)/10)*16;case Gn:return Math.floor((S+11)/12)*Math.floor((t+11)/12)*16;case fn:case Mn:case En:return Math.ceil(S/4)*Math.ceil(t/4)*16;case Fn:case Cn:return Math.ceil(S/4)*Math.ceil(t/4)*8;case gn:case Zn:return Math.ceil(S/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hb(S){switch(S){case Ia:case zi:return{byteLength:1,components:1};case zl:case Bi:case LS:return{byteLength:2,components:1};case nn:case sn:return{byteLength:2,components:4};case Za:case pn:case Oa:return{byteLength:4,components:1};case Di:case _i:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${S}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Zc(){let S=null,t=!1,e=null,a=null;function l(r,p){e(r,p),a=S.requestAnimationFrame(l)}return{start:function(){t!==!0&&e!==null&&(a=S.requestAnimationFrame(l),t=!0)},stop:function(){S.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){S=r}}}function Db(S){let t=new WeakMap;function e(n,i){let s=n.array,o=n.usage,c=s.byteLength,k=S.createBuffer();S.bindBuffer(i,k),S.bufferData(i,s,o),n.onUploadCallback();let b;if(s instanceof Float32Array)b=S.FLOAT;else if(typeof Float16Array<"u"&&s instanceof Float16Array)b=S.HALF_FLOAT;else if(s instanceof Uint16Array)n.isFloat16BufferAttribute?b=S.HALF_FLOAT:b=S.UNSIGNED_SHORT;else if(s instanceof Int16Array)b=S.SHORT;else if(s instanceof Uint32Array)b=S.UNSIGNED_INT;else if(s instanceof Int32Array)b=S.INT;else if(s instanceof Int8Array)b=S.BYTE;else if(s instanceof Uint8Array)b=S.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)b=S.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:k,type:b,bytesPerElement:s.BYTES_PER_ELEMENT,version:n.version,size:c}}function a(n,i,s){let o=i.array,c=i.updateRanges;if(S.bindBuffer(s,n),c.length===0)S.bufferSubData(s,0,o);else{c.sort((b,J)=>b.start-J.start);let k=0;for(let b=1;b<c.length;b++){let J=c[k],q=c[b];q.start<=J.start+J.count+1?J.count=Math.max(J.count,q.start+q.count-J.start):(++k,c[k]=q)}c.length=k+1;for(let b=0,J=c.length;b<J;b++){let q=c[b];S.bufferSubData(s,q.start*o.BYTES_PER_ELEMENT,o,q.start,q.count)}i.clearUpdateRanges()}i.onUploadCallback()}function l(n){return n.isInterleavedBufferAttribute&&(n=n.data),t.get(n)}function r(n){n.isInterleavedBufferAttribute&&(n=n.data);let i=t.get(n);i&&(S.deleteBuffer(i.buffer),t.delete(n))}function p(n,i){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let o=t.get(n);(!o||o.version<n.version)&&t.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let s=t.get(n);if(s===void 0)t.set(n,e(n,i));else if(s.version<n.version){if(s.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(s.buffer,n,i),s.version=n.version}}return{get:l,remove:r,update:p}}var _b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
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
#endif`,ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
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
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Bu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Du=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nU=`#if defined( USE_POINTS_UV )
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
#endif`,iU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bU=`#ifdef USE_MORPHTARGETS
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
#endif`,uU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KU=`#ifdef USE_NORMALMAP
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
#endif`,WU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,GU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,fU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,MU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,EU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FU=`#ifdef USE_SKINNING
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
#endif`,CU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gU=`#ifdef USE_SKINNING
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
#endif`,ZU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XU=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HU=`#ifdef USE_TRANSMISSION
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
#endif`,PU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,DU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_U=`uniform sampler2D t2D;
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
}`,$U=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tJ=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eJ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aJ=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SJ=`#include <common>
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
}`,lJ=`#if DEPTH_PACKING == 3200
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
}`,rJ=`#define DISTANCE
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
}`,pJ=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nJ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iJ=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sJ=`uniform float scale;
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
}`,oJ=`uniform vec3 diffuse;
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
}`,cJ=`#include <common>
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
}`,kJ=`uniform vec3 diffuse;
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
}`,bJ=`#define LAMBERT
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
}`,uJ=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,UJ=`#define MATCAP
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
}`,JJ=`#define MATCAP
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
}`,qJ=`#define NORMAL
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
}`,VJ=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dJ=`#define PHONG
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
}`,KJ=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,WJ=`#define STANDARD
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
}`,TJ=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,mJ=`#define TOON
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
}`,yJ=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hJ=`uniform float size;
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
}`,xJ=`uniform vec3 diffuse;
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
}`,NJ=`#include <common>
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
}`,jJ=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,RJ=`uniform float rotation;
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
}`,LJ=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:_b,alphahash_pars_fragment:$b,alphamap_fragment:tu,alphamap_pars_fragment:eu,alphatest_fragment:au,alphatest_pars_fragment:Su,aomap_fragment:lu,aomap_pars_fragment:ru,batching_pars_vertex:pu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ou,iridescence_fragment:cu,bumpmap_pars_fragment:ku,clipping_planes_fragment:bu,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Ju,color_fragment:qu,color_pars_fragment:Vu,color_pars_vertex:du,color_vertex:Ku,common:Wu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:mu,displacementmap_pars_vertex:yu,displacementmap_vertex:hu,emissivemap_fragment:xu,emissivemap_pars_fragment:Nu,colorspace_fragment:ju,colorspace_pars_fragment:Ru,envmap_fragment:Lu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Iu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:wu,envmap_vertex:Gu,fog_vertex:fu,fog_pars_vertex:Mu,fog_fragment:Eu,fog_pars_fragment:Fu,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:gu,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:vu,lights_pars_begin:Yu,lights_toon_fragment:Xu,lights_toon_pars_fragment:Hu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Qu,lights_physical_fragment:zu,lights_physical_pars_fragment:Bu,lights_fragment_begin:Du,lights_fragment_maps:_u,lights_fragment_end:$u,logdepthbuf_fragment:tU,logdepthbuf_pars_fragment:eU,logdepthbuf_pars_vertex:aU,logdepthbuf_vertex:SU,map_fragment:lU,map_pars_fragment:rU,map_particle_fragment:pU,map_particle_pars_fragment:nU,metalnessmap_fragment:iU,metalnessmap_pars_fragment:sU,morphinstance_vertex:oU,morphcolor_vertex:cU,morphnormal_vertex:kU,morphtarget_pars_vertex:bU,morphtarget_vertex:uU,normal_fragment_begin:UU,normal_fragment_maps:JU,normal_pars_fragment:qU,normal_pars_vertex:VU,normal_vertex:dU,normalmap_pars_fragment:KU,clearcoat_normal_fragment_begin:WU,clearcoat_normal_fragment_maps:TU,clearcoat_pars_fragment:mU,iridescence_pars_fragment:yU,opaque_fragment:hU,packing:xU,premultiplied_alpha_fragment:NU,project_vertex:jU,dithering_fragment:RU,dithering_pars_fragment:LU,roughnessmap_fragment:AU,roughnessmap_pars_fragment:IU,shadowmap_pars_fragment:OU,shadowmap_pars_vertex:GU,shadowmap_vertex:fU,shadowmask_pars_fragment:MU,skinbase_vertex:EU,skinning_pars_vertex:FU,skinning_vertex:CU,skinnormal_vertex:gU,specularmap_fragment:ZU,specularmap_pars_fragment:vU,tonemapping_fragment:YU,tonemapping_pars_fragment:wU,transmission_fragment:XU,transmission_pars_fragment:HU,uv_pars_fragment:PU,uv_pars_vertex:QU,uv_vertex:zU,worldpos_vertex:BU,background_vert:DU,background_frag:_U,backgroundCube_vert:$U,backgroundCube_frag:tJ,cube_vert:eJ,cube_frag:aJ,depth_vert:SJ,depth_frag:lJ,distanceRGBA_vert:rJ,distanceRGBA_frag:pJ,equirect_vert:nJ,equirect_frag:iJ,linedashed_vert:sJ,linedashed_frag:oJ,meshbasic_vert:cJ,meshbasic_frag:kJ,meshlambert_vert:bJ,meshlambert_frag:uJ,meshmatcap_vert:UJ,meshmatcap_frag:JJ,meshnormal_vert:qJ,meshnormal_frag:VJ,meshphong_vert:dJ,meshphong_frag:KJ,meshphysical_vert:WJ,meshphysical_frag:TJ,meshtoon_vert:mJ,meshtoon_frag:yJ,points_vert:hJ,points_frag:xJ,shadow_vert:NJ,shadow_frag:jJ,sprite_vert:RJ,sprite_frag:LJ},Wt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},va={basic:{uniforms:Qe([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Qe([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ct(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Qe([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Qe([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Qe([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ct(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Qe([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Qe([Wt.points,Wt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Qe([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Qe([Wt.common,Wt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Qe([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Qe([Wt.sprite,Wt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Qe([Wt.common,Wt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Qe([Wt.lights,Wt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};va.physical={uniforms:Qe([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Yn={r:0,b:0,g:0},il=new Ra,AJ=new pe;function IJ(S,t,e,a,l,r,p){let n=new ct(0),i=r===!0?0:1,s,o,c=null,k=0,b=null;function J(K){let W=K.isScene===!0?K.background:null;return W&&W.isTexture&&(W=(K.backgroundBlurriness>0?e:t).get(W)),W}function q(K){let W=!1,N=J(K);N===null?u(n,i):N&&N.isColor&&(u(N,1),W=!0);let h=S.xr.getEnvironmentBlendMode();h==="additive"?a.buffers.color.setClear(0,0,0,1,p):h==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,p),(S.autoClear||W)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),S.clear(S.autoClearColor,S.autoClearDepth,S.autoClearStencil))}function U(K,W){let N=J(W);N&&(N.isCubeTexture||N.mapping===gr)?(o===void 0&&(o=new je(new wl(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:nl(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(h,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(o)),il.copy(W.backgroundRotation),il.x*=-1,il.y*=-1,il.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(il.y*=-1,il.z*=-1),o.material.uniforms.envMap.value=N,o.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=W.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(AJ.makeRotationFromEuler(il)),o.material.toneMapped=Se.getTransfer(N.colorSpace)!==ke,(c!==N||k!==N.version||b!==S.toneMapping)&&(o.material.needsUpdate=!0,c=N,k=N.version,b=S.toneMapping),o.layers.enableAll(),K.unshift(o,o.geometry,o.material,0,0,null)):N&&N.isTexture&&(s===void 0&&(s=new je(new La(2,2),new ta({name:"BackgroundMaterial",uniforms:nl(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:_a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(s)),s.material.uniforms.t2D.value=N,s.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,s.material.toneMapped=Se.getTransfer(N.colorSpace)!==ke,N.matrixAutoUpdate===!0&&N.updateMatrix(),s.material.uniforms.uvTransform.value.copy(N.matrix),(c!==N||k!==N.version||b!==S.toneMapping)&&(s.material.needsUpdate=!0,c=N,k=N.version,b=S.toneMapping),s.layers.enableAll(),K.unshift(s,s.geometry,s.material,0,0,null))}function u(K,W){K.getRGB(Yn,ns(S)),a.buffers.color.setClear(Yn.r,Yn.g,Yn.b,W,p)}function x(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),s!==void 0&&(s.geometry.dispose(),s.material.dispose(),s=void 0)}return{getClearColor:function(){return n},setClearColor:function(K,W=1){n.set(K),i=W,u(n,i)},getClearAlpha:function(){return i},setClearAlpha:function(K){i=K,u(n,i)},render:q,addToRenderList:U,dispose:x}}function OJ(S,t){let e=S.getParameter(S.MAX_VERTEX_ATTRIBS),a={},l=k(null),r=l,p=!1;function n(d,L,f,C,Z){let w=!1,v=c(C,f,L);r!==v&&(r=v,s(r.object)),w=b(d,C,f,Z),w&&J(d,C,f,Z),Z!==null&&t.update(Z,S.ELEMENT_ARRAY_BUFFER),(w||p)&&(p=!1,W(d,L,f,C),Z!==null&&S.bindBuffer(S.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function i(){return S.createVertexArray()}function s(d){return S.bindVertexArray(d)}function o(d){return S.deleteVertexArray(d)}function c(d,L,f){let C=f.wireframe===!0,Z=a[d.id];Z===void 0&&(Z={},a[d.id]=Z);let w=Z[L.id];w===void 0&&(w={},Z[L.id]=w);let v=w[C];return v===void 0&&(v=k(i()),w[C]=v),v}function k(d){let L=[],f=[],C=[];for(let Z=0;Z<e;Z++)L[Z]=0,f[Z]=0,C[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:f,attributeDivisors:C,object:d,attributes:{},index:null}}function b(d,L,f,C){let Z=r.attributes,w=L.attributes,v=0,D=f.getAttributes();for(let Y in D)if(D[Y].location>=0){let lt=Z[Y],ut=w[Y];if(ut===void 0&&(Y==="instanceMatrix"&&d.instanceMatrix&&(ut=d.instanceMatrix),Y==="instanceColor"&&d.instanceColor&&(ut=d.instanceColor)),lt===void 0||lt.attribute!==ut||ut&&lt.data!==ut.data)return!0;v++}return r.attributesNum!==v||r.index!==C}function J(d,L,f,C){let Z={},w=L.attributes,v=0,D=f.getAttributes();for(let Y in D)if(D[Y].location>=0){let lt=w[Y];lt===void 0&&(Y==="instanceMatrix"&&d.instanceMatrix&&(lt=d.instanceMatrix),Y==="instanceColor"&&d.instanceColor&&(lt=d.instanceColor));let ut={};ut.attribute=lt,lt&&lt.data&&(ut.data=lt.data),Z[Y]=ut,v++}r.attributes=Z,r.attributesNum=v,r.index=C}function q(){let d=r.newAttributes;for(let L=0,f=d.length;L<f;L++)d[L]=0}function U(d){u(d,0)}function u(d,L){let f=r.newAttributes,C=r.enabledAttributes,Z=r.attributeDivisors;f[d]=1,C[d]===0&&(S.enableVertexAttribArray(d),C[d]=1),Z[d]!==L&&(S.vertexAttribDivisor(d,L),Z[d]=L)}function x(){let d=r.newAttributes,L=r.enabledAttributes;for(let f=0,C=L.length;f<C;f++)L[f]!==d[f]&&(S.disableVertexAttribArray(f),L[f]=0)}function K(d,L,f,C,Z,w,v){v===!0?S.vertexAttribIPointer(d,L,f,Z,w):S.vertexAttribPointer(d,L,f,C,Z,w)}function W(d,L,f,C){q();let Z=C.attributes,w=f.getAttributes(),v=L.defaultAttributeValues;for(let D in w){let Y=w[D];if(Y.location>=0){let at=Z[D];if(at===void 0&&(D==="instanceMatrix"&&d.instanceMatrix&&(at=d.instanceMatrix),D==="instanceColor"&&d.instanceColor&&(at=d.instanceColor)),at!==void 0){let lt=at.normalized,ut=at.itemSize,It=t.get(at);if(It===void 0)continue;let gt=It.buffer,Pt=It.type,Qt=It.bytesPerElement,H=Pt===S.INT||Pt===S.UNSIGNED_INT||at.gpuType===pn;if(at.isInterleavedBufferAttribute){let Q=at.data,Kt=Q.stride,At=at.offset;if(Q.isInstancedInterleavedBuffer){for(let xt=0;xt<Y.locationSize;xt++)u(Y.location+xt,Q.meshPerAttribute);d.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<Y.locationSize;xt++)U(Y.location+xt);S.bindBuffer(S.ARRAY_BUFFER,gt);for(let xt=0;xt<Y.locationSize;xt++)K(Y.location+xt,ut/Y.locationSize,Pt,lt,Kt*Qt,(At+ut/Y.locationSize*xt)*Qt,H)}else{if(at.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)u(Y.location+Q,at.meshPerAttribute);d.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Q=0;Q<Y.locationSize;Q++)U(Y.location+Q);S.bindBuffer(S.ARRAY_BUFFER,gt);for(let Q=0;Q<Y.locationSize;Q++)K(Y.location+Q,ut/Y.locationSize,Pt,lt,ut*Qt,ut/Y.locationSize*Q*Qt,H)}}else if(v!==void 0){let lt=v[D];if(lt!==void 0)switch(lt.length){case 2:S.vertexAttrib2fv(Y.location,lt);break;case 3:S.vertexAttrib3fv(Y.location,lt);break;case 4:S.vertexAttrib4fv(Y.location,lt);break;default:S.vertexAttrib1fv(Y.location,lt)}}}}x()}function N(){G();for(let d in a){let L=a[d];for(let f in L){let C=L[f];for(let Z in C)o(C[Z].object),delete C[Z];delete L[f]}delete a[d]}}function h(d){if(a[d.id]===void 0)return;let L=a[d.id];for(let f in L){let C=L[f];for(let Z in C)o(C[Z].object),delete C[Z];delete L[f]}delete a[d.id]}function I(d){for(let L in a){let f=a[L];if(f[d.id]===void 0)continue;let C=f[d.id];for(let Z in C)o(C[Z].object),delete C[Z];delete f[d.id]}}function G(){V(),p=!0,r!==l&&(r=l,s(r.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:n,reset:G,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:h,releaseStatesOfProgram:I,initAttributes:q,enableAttribute:U,disableUnusedAttributes:x}}function GJ(S,t,e){let a;function l(s){a=s}function r(s,o){S.drawArrays(a,s,o),e.update(o,a,1)}function p(s,o,c){c!==0&&(S.drawArraysInstanced(a,s,o,c),e.update(o,a,c))}function n(s,o,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,s,0,o,0,c);let b=0;for(let J=0;J<c;J++)b+=o[J];e.update(b,a,1)}function i(s,o,c,k){if(c===0)return;let b=t.get("WEBGL_multi_draw");if(b===null)for(let J=0;J<s.length;J++)p(s[J],o[J],k[J]);else{b.multiDrawArraysInstancedWEBGL(a,s,0,o,0,k,0,c);let J=0;for(let q=0;q<c;q++)J+=o[q]*k[q];e.update(J,a,1)}}this.setMode=l,this.render=r,this.renderInstances=p,this.renderMultiDraw=n,this.renderMultiDrawInstances=i}function fJ(S,t,e,a){let l;function r(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");l=S.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(I){return!(I!==Ka&&a.convert(I)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT))}function n(I){let G=I===LS&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ia&&a.convert(I)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Oa&&!G)}function i(I){if(I==="highp"){if(S.getShaderPrecisionFormat(S.VERTEX_SHADER,S.HIGH_FLOAT).precision>0&&S.getShaderPrecisionFormat(S.FRAGMENT_SHADER,S.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&S.getShaderPrecisionFormat(S.VERTEX_SHADER,S.MEDIUM_FLOAT).precision>0&&S.getShaderPrecisionFormat(S.FRAGMENT_SHADER,S.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=e.precision!==void 0?e.precision:"highp",o=i(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let c=e.logarithmicDepthBuffer===!0,k=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS),J=S.getParameter(S.MAX_VERTEX_TEXTURE_IMAGE_UNITS),q=S.getParameter(S.MAX_TEXTURE_SIZE),U=S.getParameter(S.MAX_CUBE_MAP_TEXTURE_SIZE),u=S.getParameter(S.MAX_VERTEX_ATTRIBS),x=S.getParameter(S.MAX_VERTEX_UNIFORM_VECTORS),K=S.getParameter(S.MAX_VARYING_VECTORS),W=S.getParameter(S.MAX_FRAGMENT_UNIFORM_VECTORS),N=J>0,h=S.getParameter(S.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:i,textureFormatReadable:p,textureTypeReadable:n,precision:s,logarithmicDepthBuffer:c,reversedDepthBuffer:k,maxTextures:b,maxVertexTextures:J,maxTextureSize:q,maxCubemapSize:U,maxAttributes:u,maxVertexUniforms:x,maxVaryings:K,maxFragmentUniforms:W,vertexTextures:N,maxSamples:h}}function MJ(S){let t=this,e=null,a=0,l=!1,r=!1,p=new Va,n=new _t,i={value:null,needsUpdate:!1};this.uniform=i,this.numPlanes=0,this.numIntersection=0,this.init=function(c,k){let b=c.length!==0||k||a!==0||l;return l=k,a=c.length,b},this.beginShadows=function(){r=!0,o(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,k){e=o(c,k,0)},this.setState=function(c,k,b){let J=c.clippingPlanes,q=c.clipIntersection,U=c.clipShadows,u=S.get(c);if(!l||J===null||J.length===0||r&&!U)r?o(null):s();else{let x=r?0:a,K=x*4,W=u.clippingState||null;i.value=W,W=o(J,k,K,b);for(let N=0;N!==K;++N)W[N]=e[N];u.clippingState=W,this.numIntersection=q?this.numPlanes:0,this.numPlanes+=x}};function s(){i.value!==e&&(i.value=e,i.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function o(c,k,b,J){let q=c!==null?c.length:0,U=null;if(q!==0){if(U=i.value,J!==!0||U===null){let u=b+q*4,x=k.matrixWorldInverse;n.getNormalMatrix(x),(U===null||U.length<u)&&(U=new Float32Array(u));for(let K=0,W=b;K!==q;++K,W+=4)p.copy(c[K]).applyMatrix4(x,n),p.normal.toArray(U,W),U[W+3]=p.constant}i.value=U,i.needsUpdate=!0}return t.numPlanes=q,t.numIntersection=0,U}}function EJ(S){let t=new WeakMap;function e(p,n){return n===Sn?p.mapping=rl:n===ln&&(p.mapping=pl),p}function a(p){if(p&&p.isTexture){let n=p.mapping;if(n===Sn||n===ln)if(t.has(p)){let i=t.get(p).texture;return e(i,p.mapping)}else{let i=p.image;if(i&&i.height>0){let s=new Gp(i.height);return s.fromEquirectangularTexture(S,p),t.set(p,s),p.addEventListener("dispose",l),e(s.texture,p.mapping)}else return null}}return p}function l(p){let n=p.target;n.removeEventListener("dispose",l);let i=t.get(n);i!==void 0&&(t.delete(n),i.dispose())}function r(){t=new WeakMap}return{get:a,dispose:r}}var er=4,Vc=[.125,.215,.35,.446,.526,.582],cl=20,ks=new Sl,dc=new ct,bs=null,us=0,Us=0,Js=!1,ol=(1+Math.sqrt(5))/2,tr=1/ol,Kc=[new O(-ol,tr,0),new O(ol,tr,0),new O(-tr,0,ol),new O(tr,0,ol),new O(0,ol,-tr),new O(0,ol,tr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],FJ=new O,Sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,l=100,r={}){let{size:p=256,position:n=FJ}=r;bs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(p);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,a,l,i,n),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bs,us,Us),this._renderer.xr.enabled=Js,t.scissorTest=!1,wn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rl||t.mapping===pl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:ja,minFilter:ja,generateMipmaps:!1,type:LS,format:Ka,colorSpace:_S,depthBuffer:!1},l=Wc(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,a);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CJ(r)),this._blurMaterial=gJ(r,t,e)}return l}_compileMaterial(t){let e=new je(this._lodPlanes[0],t);this._renderer.compile(e,ks)}_sceneToCubeUV(t,e,a,l,r){let i=new Pe(90,1,e,a),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,k=c.autoClear,b=c.toneMapping;c.getClearColor(dc),c.toneMapping=rS,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(l),c.clearDepth(),c.setRenderTarget(null));let q=new aS({name:"PMREM.Background",side:aa,depthWrite:!1,depthTest:!1}),U=new je(new wl,q),u=!1,x=t.background;x?x.isColor&&(q.color.copy(x),t.background=null,u=!0):(q.color.copy(dc),u=!0);for(let K=0;K<6;K++){let W=K%3;W===0?(i.up.set(0,s[K],0),i.position.set(r.x,r.y,r.z),i.lookAt(r.x+o[K],r.y,r.z)):W===1?(i.up.set(0,0,s[K]),i.position.set(r.x,r.y,r.z),i.lookAt(r.x,r.y+o[K],r.z)):(i.up.set(0,s[K],0),i.position.set(r.x,r.y,r.z),i.lookAt(r.x,r.y,r.z+o[K]));let N=this._cubeSize;wn(l,W*N,K>2?N:0,N,N),c.setRenderTarget(l),u&&c.render(U,i),c.render(t,i)}U.geometry.dispose(),U.material.dispose(),c.toneMapping=b,c.autoClear=k,t.background=x}_textureToCubeUV(t,e){let a=this._renderer,l=t.mapping===rl||t.mapping===pl;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());let r=l?this._cubemapMaterial:this._equirectMaterial,p=new je(this._lodPlanes[0],r),n=r.uniforms;n.envMap.value=t;let i=this._cubeSize;wn(e,0,0,3*i,2*i),a.setRenderTarget(e),a.render(p,ks)}_applyPMREM(t){let e=this._renderer,a=e.autoClear;e.autoClear=!1;let l=this._lodPlanes.length;for(let r=1;r<l;r++){let p=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),n=Kc[(l-r-1)%Kc.length];this._blur(t,r-1,r,p,n)}e.autoClear=a}_blur(t,e,a,l,r){let p=this._pingPongRenderTarget;this._halfBlur(t,p,e,a,l,"latitudinal",r),this._halfBlur(p,t,a,a,l,"longitudinal",r)}_halfBlur(t,e,a,l,r,p,n){let i=this._renderer,s=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let o=3,c=new je(this._lodPlanes[l],s),k=s.uniforms,b=this._sizeLods[a]-1,J=isFinite(r)?Math.PI/(2*b):2*Math.PI/(2*cl-1),q=r/J,U=isFinite(r)?1+Math.floor(o*q):cl;U>cl&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${U} samples when the maximum is set to ${cl}`);let u=[],x=0;for(let I=0;I<cl;++I){let G=I/q,V=Math.exp(-G*G/2);u.push(V),I===0?x+=V:I<U&&(x+=2*V)}for(let I=0;I<u.length;I++)u[I]=u[I]/x;k.envMap.value=t.texture,k.samples.value=U,k.weights.value=u,k.latitudinal.value=p==="latitudinal",n&&(k.poleAxis.value=n);let{_lodMax:K}=this;k.dTheta.value=J,k.mipInt.value=K-a;let W=this._sizeLods[l],N=3*W*(l>K-er?l-K+er:0),h=4*(this._cubeSize-W);wn(e,N,h,3*W,2*W),i.setRenderTarget(e),i.render(c,ks)}};function CJ(S){let t=[],e=[],a=[],l=S,r=S-er+1+Vc.length;for(let p=0;p<r;p++){let n=Math.pow(2,l);e.push(n);let i=1/n;p>S-er?i=Vc[p-S+er-1]:p===0&&(i=0),a.push(i);let s=1/(n-2),o=-s,c=1+s,k=[o,o,c,o,c,c,o,o,c,c,o,c],b=6,J=6,q=3,U=2,u=1,x=new Float32Array(q*J*b),K=new Float32Array(U*J*b),W=new Float32Array(u*J*b);for(let h=0;h<b;h++){let I=h%3*2/3-1,G=h>2?0:-1,V=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];x.set(V,q*J*h),K.set(k,U*J*h);let d=[h,h,h,h,h,h];W.set(d,u*J*h)}let N=new Ze;N.setAttribute("position",new Ge(x,q)),N.setAttribute("uv",new Ge(K,U)),N.setAttribute("faceIndex",new Ge(W,u)),t.push(N),l>er&&l--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function Wc(S,t,e){let a=new da(S,t,e);return a.texture.mapping=gr,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function wn(S,t,e,a,l){S.viewport.set(t,e,a,l),S.scissor.set(t,e,a,l)}function gJ(S,t,e){let a=new Float32Array(cl),l=new O(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:cl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${S}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lS,depthTest:!1,depthWrite:!1})}function Tc(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lS,depthTest:!1,depthWrite:!1})}function mc(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lS,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZJ(S){let t=new WeakMap,e=null;function a(n){if(n&&n.isTexture){let i=n.mapping,s=i===Sn||i===ln,o=i===rl||i===pl;if(s||o){let c=t.get(n),k=c!==void 0?c.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==k)return e===null&&(e=new Sr(S)),c=s?e.fromEquirectangular(n,c):e.fromCubemap(n,c),c.texture.pmremVersion=n.pmremVersion,t.set(n,c),c.texture;if(c!==void 0)return c.texture;{let b=n.image;return s&&b&&b.height>0||o&&b&&l(b)?(e===null&&(e=new Sr(S)),c=s?e.fromEquirectangular(n):e.fromCubemap(n),c.texture.pmremVersion=n.pmremVersion,t.set(n,c),n.addEventListener("dispose",r),c.texture):null}}}return n}function l(n){let i=0,s=6;for(let o=0;o<s;o++)n[o]!==void 0&&i++;return i===s}function r(n){let i=n.target;i.removeEventListener("dispose",r);let s=t.get(i);s!==void 0&&(t.delete(i),s.dispose())}function p(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:p}}function vJ(S){let t={};function e(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=S.getExtension("WEBGL_depth_texture")||S.getExtension("MOZ_WEBGL_depth_texture")||S.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=S.getExtension("EXT_texture_filter_anisotropic")||S.getExtension("MOZ_EXT_texture_filter_anisotropic")||S.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=S.getExtension("WEBGL_compressed_texture_s3tc")||S.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||S.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=S.getExtension("WEBGL_compressed_texture_pvrtc")||S.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=S.getExtension(a)}return t[a]=l,l}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){let l=e(a);return l===null&&gl("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function YJ(S,t,e,a){let l={},r=new WeakMap;function p(c){let k=c.target;k.index!==null&&t.remove(k.index);for(let J in k.attributes)t.remove(k.attributes[J]);k.removeEventListener("dispose",p),delete l[k.id];let b=r.get(k);b&&(t.remove(b),r.delete(k)),a.releaseStatesOfGeometry(k),k.isInstancedBufferGeometry===!0&&delete k._maxInstanceCount,e.memory.geometries--}function n(c,k){return l[k.id]===!0||(k.addEventListener("dispose",p),l[k.id]=!0,e.memory.geometries++),k}function i(c){let k=c.attributes;for(let b in k)t.update(k[b],S.ARRAY_BUFFER)}function s(c){let k=[],b=c.index,J=c.attributes.position,q=0;if(b!==null){let x=b.array;q=b.version;for(let K=0,W=x.length;K<W;K+=3){let N=x[K+0],h=x[K+1],I=x[K+2];k.push(N,h,h,I,I,N)}}else if(J!==void 0){let x=J.array;q=J.version;for(let K=0,W=x.length/3-1;K<W;K+=3){let N=K+0,h=K+1,I=K+2;k.push(N,h,h,I,I,N)}}else return;let U=new(ps(k)?Rr:jr)(k,1);U.version=q;let u=r.get(c);u&&t.remove(u),r.set(c,U)}function o(c){let k=r.get(c);if(k){let b=c.index;b!==null&&k.version<b.version&&s(c)}else s(c);return r.get(c)}return{get:n,update:i,getWireframeAttribute:o}}function wJ(S,t,e){let a;function l(k){a=k}let r,p;function n(k){r=k.type,p=k.bytesPerElement}function i(k,b){S.drawElements(a,b,r,k*p),e.update(b,a,1)}function s(k,b,J){J!==0&&(S.drawElementsInstanced(a,b,r,k*p,J),e.update(b,a,J))}function o(k,b,J){if(J===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,r,k,0,J);let U=0;for(let u=0;u<J;u++)U+=b[u];e.update(U,a,1)}function c(k,b,J,q){if(J===0)return;let U=t.get("WEBGL_multi_draw");if(U===null)for(let u=0;u<k.length;u++)s(k[u]/p,b[u],q[u]);else{U.multiDrawElementsInstancedWEBGL(a,b,0,r,k,0,q,0,J);let u=0;for(let x=0;x<J;x++)u+=b[x]*q[x];e.update(u,a,1)}}this.setMode=l,this.setIndex=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function XJ(S){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(r,p,n){switch(e.calls++,p){case S.TRIANGLES:e.triangles+=n*(r/3);break;case S.LINES:e.lines+=n*(r/2);break;case S.LINE_STRIP:e.lines+=n*(r-1);break;case S.LINE_LOOP:e.lines+=n*r;break;case S.POINTS:e.points+=n*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function l(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:l,update:a}}function HJ(S,t,e){let a=new WeakMap,l=new xe;function r(p,n,i){let s=p.morphTargetInfluences,o=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,c=o!==void 0?o.length:0,k=a.get(n);if(k===void 0||k.count!==c){let V=function(){I.dispose(),a.delete(n),n.removeEventListener("dispose",V)};k!==void 0&&k.texture.dispose();let b=n.morphAttributes.position!==void 0,J=n.morphAttributes.normal!==void 0,q=n.morphAttributes.color!==void 0,U=n.morphAttributes.position||[],u=n.morphAttributes.normal||[],x=n.morphAttributes.color||[],K=0;b===!0&&(K=1),J===!0&&(K=2),q===!0&&(K=3);let W=n.attributes.position.count*K,N=1;W>t.maxTextureSize&&(N=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);let h=new Float32Array(W*N*4*c),I=new Nr(h,W,N,c);I.type=Oa,I.needsUpdate=!0;let G=K*4;for(let d=0;d<c;d++){let L=U[d],f=u[d],C=x[d],Z=W*N*4*d;for(let w=0;w<L.count;w++){let v=w*G;b===!0&&(l.fromBufferAttribute(L,w),h[Z+v+0]=l.x,h[Z+v+1]=l.y,h[Z+v+2]=l.z,h[Z+v+3]=0),J===!0&&(l.fromBufferAttribute(f,w),h[Z+v+4]=l.x,h[Z+v+5]=l.y,h[Z+v+6]=l.z,h[Z+v+7]=0),q===!0&&(l.fromBufferAttribute(C,w),h[Z+v+8]=l.x,h[Z+v+9]=l.y,h[Z+v+10]=l.z,h[Z+v+11]=C.itemSize===4?l.w:1)}}k={count:c,texture:I,size:new Dt(W,N)},a.set(n,k),n.addEventListener("dispose",V)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)i.getUniforms().setValue(S,"morphTexture",p.morphTexture,e);else{let b=0;for(let q=0;q<s.length;q++)b+=s[q];let J=n.morphTargetsRelative?1:1-b;i.getUniforms().setValue(S,"morphTargetBaseInfluence",J),i.getUniforms().setValue(S,"morphTargetInfluences",s)}i.getUniforms().setValue(S,"morphTargetsTexture",k.texture,e),i.getUniforms().setValue(S,"morphTargetsTextureSize",k.size)}return{update:r}}function PJ(S,t,e,a){let l=new WeakMap;function r(i){let s=a.render.frame,o=i.geometry,c=t.get(i,o);if(l.get(c)!==s&&(t.update(c),l.set(c,s)),i.isInstancedMesh&&(i.hasEventListener("dispose",n)===!1&&i.addEventListener("dispose",n),l.get(i)!==s&&(e.update(i.instanceMatrix,S.ARRAY_BUFFER),i.instanceColor!==null&&e.update(i.instanceColor,S.ARRAY_BUFFER),l.set(i,s))),i.isSkinnedMesh){let k=i.skeleton;l.get(k)!==s&&(k.update(),l.set(k,s))}return c}function p(){l=new WeakMap}function n(i){let s=i.target;s.removeEventListener("dispose",n),e.remove(s.instanceMatrix),s.instanceColor!==null&&e.remove(s.instanceColor)}return{update:r,dispose:p}}var vc=new na,yc=new tl(1,1),Yc=new Nr,wc=new Ip,Xc=new Ar,hc=[],xc=[],Nc=new Float32Array(16),jc=new Float32Array(9),Rc=new Float32Array(4);function lr(S,t,e){let a=S[0];if(a<=0||a>0)return S;let l=t*e,r=hc[l];if(r===void 0&&(r=new Float32Array(l),hc[l]=r),t!==0){a.toArray(r,0);for(let p=1,n=0;p!==t;++p)n+=e,S[p].toArray(r,n)}return r}function Me(S,t){if(S.length!==t.length)return!1;for(let e=0,a=S.length;e<a;e++)if(S[e]!==t[e])return!1;return!0}function Ee(S,t){for(let e=0,a=t.length;e<a;e++)S[e]=t[e]}function Pn(S,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let a=0;a!==t;++a)e[a]=S.allocateTextureUnit();return e}function QJ(S,t){let e=this.cache;e[0]!==t&&(S.uniform1f(this.addr,t),e[0]=t)}function zJ(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(S.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;S.uniform2fv(this.addr,t),Ee(e,t)}}function BJ(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(S.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(S.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;S.uniform3fv(this.addr,t),Ee(e,t)}}function DJ(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(S.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;S.uniform4fv(this.addr,t),Ee(e,t)}}function _J(S,t){let e=this.cache,a=t.elements;if(a===void 0){if(Me(e,t))return;S.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,a))return;Rc.set(a),S.uniformMatrix2fv(this.addr,!1,Rc),Ee(e,a)}}function $J(S,t){let e=this.cache,a=t.elements;if(a===void 0){if(Me(e,t))return;S.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,a))return;jc.set(a),S.uniformMatrix3fv(this.addr,!1,jc),Ee(e,a)}}function tq(S,t){let e=this.cache,a=t.elements;if(a===void 0){if(Me(e,t))return;S.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,a))return;Nc.set(a),S.uniformMatrix4fv(this.addr,!1,Nc),Ee(e,a)}}function eq(S,t){let e=this.cache;e[0]!==t&&(S.uniform1i(this.addr,t),e[0]=t)}function aq(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(S.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;S.uniform2iv(this.addr,t),Ee(e,t)}}function Sq(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(S.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;S.uniform3iv(this.addr,t),Ee(e,t)}}function lq(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(S.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;S.uniform4iv(this.addr,t),Ee(e,t)}}function rq(S,t){let e=this.cache;e[0]!==t&&(S.uniform1ui(this.addr,t),e[0]=t)}function pq(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(S.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;S.uniform2uiv(this.addr,t),Ee(e,t)}}function nq(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(S.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;S.uniform3uiv(this.addr,t),Ee(e,t)}}function iq(S,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(S.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;S.uniform4uiv(this.addr,t),Ee(e,t)}}function sq(S,t,e){let a=this.cache,l=e.allocateTextureUnit();a[0]!==l&&(S.uniform1i(this.addr,l),a[0]=l);let r;this.type===S.SAMPLER_2D_SHADOW?(yc.compareFunction=Ss,r=yc):r=vc,e.setTexture2D(t||r,l)}function oq(S,t,e){let a=this.cache,l=e.allocateTextureUnit();a[0]!==l&&(S.uniform1i(this.addr,l),a[0]=l),e.setTexture3D(t||wc,l)}function cq(S,t,e){let a=this.cache,l=e.allocateTextureUnit();a[0]!==l&&(S.uniform1i(this.addr,l),a[0]=l),e.setTextureCube(t||Xc,l)}function kq(S,t,e){let a=this.cache,l=e.allocateTextureUnit();a[0]!==l&&(S.uniform1i(this.addr,l),a[0]=l),e.setTexture2DArray(t||Yc,l)}function bq(S){switch(S){case 5126:return QJ;case 35664:return zJ;case 35665:return BJ;case 35666:return DJ;case 35674:return _J;case 35675:return $J;case 35676:return tq;case 5124:case 35670:return eq;case 35667:case 35671:return aq;case 35668:case 35672:return Sq;case 35669:case 35673:return lq;case 5125:return rq;case 36294:return pq;case 36295:return nq;case 36296:return iq;case 35678:case 36198:case 36298:case 36306:case 35682:return sq;case 35679:case 36299:case 36307:return oq;case 35680:case 36300:case 36308:case 36293:return cq;case 36289:case 36303:case 36311:case 36292:return kq}}function uq(S,t){S.uniform1fv(this.addr,t)}function Uq(S,t){let e=lr(t,this.size,2);S.uniform2fv(this.addr,e)}function Jq(S,t){let e=lr(t,this.size,3);S.uniform3fv(this.addr,e)}function qq(S,t){let e=lr(t,this.size,4);S.uniform4fv(this.addr,e)}function Vq(S,t){let e=lr(t,this.size,4);S.uniformMatrix2fv(this.addr,!1,e)}function dq(S,t){let e=lr(t,this.size,9);S.uniformMatrix3fv(this.addr,!1,e)}function Kq(S,t){let e=lr(t,this.size,16);S.uniformMatrix4fv(this.addr,!1,e)}function Wq(S,t){S.uniform1iv(this.addr,t)}function Tq(S,t){S.uniform2iv(this.addr,t)}function mq(S,t){S.uniform3iv(this.addr,t)}function yq(S,t){S.uniform4iv(this.addr,t)}function hq(S,t){S.uniform1uiv(this.addr,t)}function xq(S,t){S.uniform2uiv(this.addr,t)}function Nq(S,t){S.uniform3uiv(this.addr,t)}function jq(S,t){S.uniform4uiv(this.addr,t)}function Rq(S,t,e){let a=this.cache,l=t.length,r=Pn(e,l);Me(a,r)||(S.uniform1iv(this.addr,r),Ee(a,r));for(let p=0;p!==l;++p)e.setTexture2D(t[p]||vc,r[p])}function Lq(S,t,e){let a=this.cache,l=t.length,r=Pn(e,l);Me(a,r)||(S.uniform1iv(this.addr,r),Ee(a,r));for(let p=0;p!==l;++p)e.setTexture3D(t[p]||wc,r[p])}function Aq(S,t,e){let a=this.cache,l=t.length,r=Pn(e,l);Me(a,r)||(S.uniform1iv(this.addr,r),Ee(a,r));for(let p=0;p!==l;++p)e.setTextureCube(t[p]||Xc,r[p])}function Iq(S,t,e){let a=this.cache,l=t.length,r=Pn(e,l);Me(a,r)||(S.uniform1iv(this.addr,r),Ee(a,r));for(let p=0;p!==l;++p)e.setTexture2DArray(t[p]||Yc,r[p])}function Oq(S){switch(S){case 5126:return uq;case 35664:return Uq;case 35665:return Jq;case 35666:return qq;case 35674:return Vq;case 35675:return dq;case 35676:return Kq;case 5124:case 35670:return Wq;case 35667:case 35671:return Tq;case 35668:case 35672:return mq;case 35669:case 35673:return yq;case 5125:return hq;case 36294:return xq;case 36295:return Nq;case 36296:return jq;case 35678:case 36198:case 36298:case 36306:case 35682:return Rq;case 35679:case 36299:case 36307:return Lq;case 35680:case 36300:case 36308:case 36293:return Aq;case 36289:case 36303:case 36311:case 36292:return Iq}}var Vs=class{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=bq(e.type)}},ds=class{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Oq(e.type)}},Ks=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){let l=this.seq;for(let r=0,p=l.length;r!==p;++r){let n=l[r];n.setValue(t,e[n.id],a)}}},qs=/(\w+)(\])?(\[|\.)?/g;function Lc(S,t){S.seq.push(t),S.map[t.id]=t}function Gq(S,t,e){let a=S.name,l=a.length;for(qs.lastIndex=0;;){let r=qs.exec(a),p=qs.lastIndex,n=r[1],i=r[2]==="]",s=r[3];if(i&&(n=n|0),s===void 0||s==="["&&p+2===l){Lc(e,s===void 0?new Vs(n,S,t):new ds(n,S,t));break}else{let c=e.map[n];c===void 0&&(c=new Ks(n),Lc(e,c)),e=c}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){let r=t.getActiveUniform(e,l),p=t.getUniformLocation(e,r.name);Gq(r,p,this)}}setValue(t,e,a,l){let r=this.map[e];r!==void 0&&r.setValue(t,a,l)}setOptional(t,e,a){let l=e[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,e,a,l){for(let r=0,p=e.length;r!==p;++r){let n=e[r],i=a[n.id];i.needsUpdate!==!1&&n.setValue(t,i.value,l)}}static seqWithValue(t,e){let a=[];for(let l=0,r=t.length;l!==r;++l){let p=t[l];p.id in e&&a.push(p)}return a}};function Ac(S,t,e){let a=S.createShader(t);return S.shaderSource(a,e),S.compileShader(a),a}var fq=37297,Mq=0;function Eq(S,t){let e=S.split(`
`),a=[],l=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let p=l;p<r;p++){let n=p+1;a.push(`${n===t?">":" "} ${n}: ${e[p]}`)}return a.join(`
`)}var Ic=new _t;function Fq(S){Se._getMatrix(Ic,Se.workingColorSpace,S);let t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(S)){case yr:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",S),[t,"LinearTransferOETF"]}}function Oc(S,t,e){let a=S.getShaderParameter(t,S.COMPILE_STATUS),r=(S.getShaderInfoLog(t)||"").trim();if(a&&r==="")return"";let p=/ERROR: 0:(\d+)/.exec(r);if(p){let n=parseInt(p[1]);return e.toUpperCase()+`

`+r+`

`+Eq(S.getShaderSource(t),n)}else return r}function Cq(S,t){let e=Fq(t);return[`vec4 ${S}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gq(S,t){let e;switch(t){case _o:e="Linear";break;case $o:e="Reinhard";break;case tc:e="Cineon";break;case an:e="ACESFilmic";break;case ac:e="AgX";break;case Sc:e="Neutral";break;case ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+S+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xn=new O;function Zq(){Se.getLuminanceCoefficients(Xn);let S=Xn.x.toFixed(4),t=Xn.y.toFixed(4),e=Xn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${S}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vq(S){return[S.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",S.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Yq(S){let t=[];for(let e in S){let a=S[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function wq(S,t){let e={},a=S.getProgramParameter(t,S.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){let r=S.getActiveAttrib(t,l),p=r.name,n=1;r.type===S.FLOAT_MAT2&&(n=2),r.type===S.FLOAT_MAT3&&(n=3),r.type===S.FLOAT_MAT4&&(n=4),e[p]={type:r.type,location:S.getAttribLocation(t,p),locationSize:n}}return e}function Hr(S){return S!==""}function Gc(S,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return S.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(S,t){return S.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xq=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(S){return S.replace(Xq,Pq)}var Hq=new Map;function Pq(S,t){let e=$t[t];if(e===void 0){let a=Hq.get(t);if(a!==void 0)e=$t[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Ws(e)}var Qq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(S){return S.replace(Qq,zq)}function zq(S,t,e,a){let l="";for(let r=parseInt(t);r<parseInt(e);r++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return l}function Ec(S){let t=`precision ${S.precision} float;
	precision ${S.precision} int;
	precision ${S.precision} sampler2D;
	precision ${S.precision} samplerCube;
	precision ${S.precision} sampler3D;
	precision ${S.precision} sampler2DArray;
	precision ${S.precision} sampler2DShadow;
	precision ${S.precision} samplerCubeShadow;
	precision ${S.precision} sampler2DArrayShadow;
	precision ${S.precision} isampler2D;
	precision ${S.precision} isampler3D;
	precision ${S.precision} isamplerCube;
	precision ${S.precision} isampler2DArray;
	precision ${S.precision} usampler2D;
	precision ${S.precision} usampler3D;
	precision ${S.precision} usamplerCube;
	precision ${S.precision} usampler2DArray;
	`;return S.precision==="highp"?t+=`
#define HIGH_PRECISION`:S.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:S.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bq(S){let t="SHADOWMAP_TYPE_BASIC";return S.shadowMapType===Cr?t="SHADOWMAP_TYPE_PCF":S.shadowMapType===Ao?t="SHADOWMAP_TYPE_PCF_SOFT":S.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function Dq(S){let t="ENVMAP_TYPE_CUBE";if(S.envMap)switch(S.envMapMode){case rl:case pl:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _q(S){let t="ENVMAP_MODE_REFLECTION";return S.envMap&&S.envMapMode===pl&&(t="ENVMAP_MODE_REFRACTION"),t}function $q(S){let t="ENVMAP_BLENDING_NONE";if(S.envMap)switch(S.combine){case Pi:t="ENVMAP_BLENDING_MULTIPLY";break;case Bo:t="ENVMAP_BLENDING_MIX";break;case Do:t="ENVMAP_BLENDING_ADD";break}return t}function tV(S){let t=S.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:a,maxMip:e}}function eV(S,t,e,a){let l=S.getContext(),r=e.defines,p=e.vertexShader,n=e.fragmentShader,i=Bq(e),s=Dq(e),o=_q(e),c=$q(e),k=tV(e),b=vq(e),J=Yq(r),q=l.createProgram(),U,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(U=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,J].filter(Hr).join(`
`),U.length>0&&(U+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,J].filter(Hr).join(`
`),u.length>0&&(u+=`
`)):(U=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,J,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+i:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),u=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,J,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+s:"",e.envMap?"#define "+o:"",e.envMap?"#define "+c:"",k?"#define CUBEUV_TEXEL_WIDTH "+k.texelWidth:"",k?"#define CUBEUV_TEXEL_HEIGHT "+k.texelHeight:"",k?"#define CUBEUV_MAX_MIP "+k.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+i:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rS?"#define TONE_MAPPING":"",e.toneMapping!==rS?$t.tonemapping_pars_fragment:"",e.toneMapping!==rS?gq("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Cq("linearToOutputTexel",e.outputColorSpace),Zq(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),p=Ws(p),p=Gc(p,e),p=fc(p,e),n=Ws(n),n=Gc(n,e),n=fc(n,e),p=Mc(p),n=Mc(n),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,U=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+U,u=["#define varying in",e.glslVersion===ls?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ls?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let K=x+U+p,W=x+u+n,N=Ac(l,l.VERTEX_SHADER,K),h=Ac(l,l.FRAGMENT_SHADER,W);l.attachShader(q,N),l.attachShader(q,h),e.index0AttributeName!==void 0?l.bindAttribLocation(q,0,e.index0AttributeName):e.morphTargets===!0&&l.bindAttribLocation(q,0,"position"),l.linkProgram(q);function I(L){if(S.debug.checkShaderErrors){let f=l.getProgramInfoLog(q)||"",C=l.getShaderInfoLog(N)||"",Z=l.getShaderInfoLog(h)||"",w=f.trim(),v=C.trim(),D=Z.trim(),Y=!0,at=!0;if(l.getProgramParameter(q,l.LINK_STATUS)===!1)if(Y=!1,typeof S.debug.onShaderError=="function")S.debug.onShaderError(l,q,N,h);else{let lt=Oc(l,N,"vertex"),ut=Oc(l,h,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(q,l.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+w+`
`+lt+`
`+ut)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(v===""||D==="")&&(at=!1);at&&(L.diagnostics={runnable:Y,programLog:w,vertexShader:{log:v,prefix:U},fragmentShader:{log:D,prefix:u}})}l.deleteShader(N),l.deleteShader(h),G=new ar(l,q),V=wq(l,q)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let V;this.getAttributes=function(){return V===void 0&&I(this),V};let d=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=l.getProgramParameter(q,fq)),d},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(q),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mq++,this.cacheKey=t,this.usedTimes=1,this.program=q,this.vertexShader=N,this.fragmentShader=h,this}var aV=0,Ts=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(e),r=this._getShaderStage(a),p=this._getShaderCacheForMaterial(t);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(r)===!1&&(p.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){let e=this.shaderCache,a=e.get(t);return a===void 0&&(a=new ms(t),e.set(t,a)),a}},ms=class{constructor(t){this.id=aV++,this.code=t,this.usedTimes=0}};function SV(S,t,e,a,l,r,p){let n=new Yl,i=new Ts,s=new Set,o=[],c=l.logarithmicDepthBuffer,k=l.vertexTextures,b=l.precision,J={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function q(V){return s.add(V),V===0?"uv":`uv${V}`}function U(V,d,L,f,C){let Z=f.fog,w=C.geometry,v=V.isMeshStandardMaterial?f.environment:null,D=(V.isMeshStandardMaterial?e:t).get(V.envMap||v),Y=D&&D.mapping===gr?D.image.height:null,at=J[V.type];V.precision!==null&&(b=l.getMaxPrecision(V.precision),b!==V.precision&&console.warn("THREE.WebGLProgram.getParameters:",V.precision,"not supported, using",b,"instead."));let lt=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ut=lt!==void 0?lt.length:0,It=0;w.morphAttributes.position!==void 0&&(It=1),w.morphAttributes.normal!==void 0&&(It=2),w.morphAttributes.color!==void 0&&(It=3);let gt,Pt,Qt,H;if(at){let R=va[at];gt=R.vertexShader,Pt=R.fragmentShader}else gt=V.vertexShader,Pt=V.fragmentShader,i.update(V),Qt=i.getVertexShaderID(V),H=i.getFragmentShaderID(V);let Q=S.getRenderTarget(),Kt=S.state.buffers.depth.getReversed(),At=C.isInstancedMesh===!0,xt=C.isBatchedMesh===!0,zt=!!V.map,qe=!!V.matcap,j=!!D,ft=!!V.aoMap,Vt=!!V.lightMap,bt=!!V.bumpMap,dt=!!V.normalMap,ae=!!V.displacementMap,Nt=!!V.emissiveMap,vt=!!V.metalnessMap,Je=!!V.roughnessMap,Ve=V.anisotropy>0,A=V.clearcoat>0,T=V.dispersion>0,g=V.iridescence>0,_=V.sheen>0,et=V.transmission>0,B=Ve&&!!V.anisotropyMap,Mt=A&&!!V.clearcoatMap,kt=A&&!!V.clearcoatNormalMap,Tt=A&&!!V.clearcoatRoughnessMap,Rt=g&&!!V.iridescenceMap,St=g&&!!V.iridescenceThicknessMap,qt=_&&!!V.sheenColorMap,wt=_&&!!V.sheenRoughnessMap,Et=!!V.specularMap,mt=!!V.specularColorMap,Bt=!!V.specularIntensityMap,M=et&&!!V.transmissionMap,ot=et&&!!V.thicknessMap,Ut=!!V.gradientMap,Lt=!!V.alphaMap,rt=V.alphaTest>0,$=!!V.alphaHash,m=!!V.extensions,tt=rS;V.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(tt=S.toneMapping);let yt={shaderID:at,shaderType:V.type,shaderName:V.name,vertexShader:gt,fragmentShader:Pt,defines:V.defines,customVertexShaderID:Qt,customFragmentShaderID:H,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:b,batching:xt,batchingColor:xt&&C._colorsTexture!==null,instancing:At,instancingColor:At&&C.instanceColor!==null,instancingMorph:At&&C.morphTexture!==null,supportsVertexTextures:k,outputColorSpace:Q===null?S.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:_S,alphaToCoverage:!!V.alphaToCoverage,map:zt,matcap:qe,envMap:j,envMapMode:j&&D.mapping,envMapCubeUVHeight:Y,aoMap:ft,lightMap:Vt,bumpMap:bt,normalMap:dt,displacementMap:k&&ae,emissiveMap:Nt,normalMapObjectSpace:dt&&V.normalMapType===pc,normalMapTangentSpace:dt&&V.normalMapType===as,metalnessMap:vt,roughnessMap:Je,anisotropy:Ve,anisotropyMap:B,clearcoat:A,clearcoatMap:Mt,clearcoatNormalMap:kt,clearcoatRoughnessMap:Tt,dispersion:T,iridescence:g,iridescenceMap:Rt,iridescenceThicknessMap:St,sheen:_,sheenColorMap:qt,sheenRoughnessMap:wt,specularMap:Et,specularColorMap:mt,specularIntensityMap:Bt,transmission:et,transmissionMap:M,thicknessMap:ot,gradientMap:Ut,opaque:V.transparent===!1&&V.blending===BS&&V.alphaToCoverage===!1,alphaMap:Lt,alphaTest:rt,alphaHash:$,combine:V.combine,mapUv:zt&&q(V.map.channel),aoMapUv:ft&&q(V.aoMap.channel),lightMapUv:Vt&&q(V.lightMap.channel),bumpMapUv:bt&&q(V.bumpMap.channel),normalMapUv:dt&&q(V.normalMap.channel),displacementMapUv:ae&&q(V.displacementMap.channel),emissiveMapUv:Nt&&q(V.emissiveMap.channel),metalnessMapUv:vt&&q(V.metalnessMap.channel),roughnessMapUv:Je&&q(V.roughnessMap.channel),anisotropyMapUv:B&&q(V.anisotropyMap.channel),clearcoatMapUv:Mt&&q(V.clearcoatMap.channel),clearcoatNormalMapUv:kt&&q(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&q(V.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&q(V.iridescenceMap.channel),iridescenceThicknessMapUv:St&&q(V.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&q(V.sheenColorMap.channel),sheenRoughnessMapUv:wt&&q(V.sheenRoughnessMap.channel),specularMapUv:Et&&q(V.specularMap.channel),specularColorMapUv:mt&&q(V.specularColorMap.channel),specularIntensityMapUv:Bt&&q(V.specularIntensityMap.channel),transmissionMapUv:M&&q(V.transmissionMap.channel),thicknessMapUv:ot&&q(V.thicknessMap.channel),alphaMapUv:Lt&&q(V.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(dt||Ve),vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!w.attributes.uv&&(zt||Lt),fog:!!Z,useFog:V.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:V.flatShading===!0&&V.wireframe===!1,sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:Kt,skinning:C.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:V.dithering,shadowMapEnabled:S.shadowMap.enabled&&L.length>0,shadowMapType:S.shadowMap.type,toneMapping:tt,decodeVideoTexture:zt&&V.map.isVideoTexture===!0&&Se.getTransfer(V.map.colorSpace)===ke,decodeVideoTextureEmissive:Nt&&V.emissiveMap.isVideoTexture===!0&&Se.getTransfer(V.emissiveMap.colorSpace)===ke,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===fe,flipSided:V.side===aa,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:m&&V.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(m&&V.extensions.multiDraw===!0||xt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return yt.vertexUv1s=s.has(1),yt.vertexUv2s=s.has(2),yt.vertexUv3s=s.has(3),s.clear(),yt}function u(V){let d=[];if(V.shaderID?d.push(V.shaderID):(d.push(V.customVertexShaderID),d.push(V.customFragmentShaderID)),V.defines!==void 0)for(let L in V.defines)d.push(L),d.push(V.defines[L]);return V.isRawShaderMaterial===!1&&(x(d,V),K(d,V),d.push(S.outputColorSpace)),d.push(V.customProgramCacheKey),d.join()}function x(V,d){V.push(d.precision),V.push(d.outputColorSpace),V.push(d.envMapMode),V.push(d.envMapCubeUVHeight),V.push(d.mapUv),V.push(d.alphaMapUv),V.push(d.lightMapUv),V.push(d.aoMapUv),V.push(d.bumpMapUv),V.push(d.normalMapUv),V.push(d.displacementMapUv),V.push(d.emissiveMapUv),V.push(d.metalnessMapUv),V.push(d.roughnessMapUv),V.push(d.anisotropyMapUv),V.push(d.clearcoatMapUv),V.push(d.clearcoatNormalMapUv),V.push(d.clearcoatRoughnessMapUv),V.push(d.iridescenceMapUv),V.push(d.iridescenceThicknessMapUv),V.push(d.sheenColorMapUv),V.push(d.sheenRoughnessMapUv),V.push(d.specularMapUv),V.push(d.specularColorMapUv),V.push(d.specularIntensityMapUv),V.push(d.transmissionMapUv),V.push(d.thicknessMapUv),V.push(d.combine),V.push(d.fogExp2),V.push(d.sizeAttenuation),V.push(d.morphTargetsCount),V.push(d.morphAttributeCount),V.push(d.numDirLights),V.push(d.numPointLights),V.push(d.numSpotLights),V.push(d.numSpotLightMaps),V.push(d.numHemiLights),V.push(d.numRectAreaLights),V.push(d.numDirLightShadows),V.push(d.numPointLightShadows),V.push(d.numSpotLightShadows),V.push(d.numSpotLightShadowsWithMaps),V.push(d.numLightProbes),V.push(d.shadowMapType),V.push(d.toneMapping),V.push(d.numClippingPlanes),V.push(d.numClipIntersection),V.push(d.depthPacking)}function K(V,d){n.disableAll(),d.supportsVertexTextures&&n.enable(0),d.instancing&&n.enable(1),d.instancingColor&&n.enable(2),d.instancingMorph&&n.enable(3),d.matcap&&n.enable(4),d.envMap&&n.enable(5),d.normalMapObjectSpace&&n.enable(6),d.normalMapTangentSpace&&n.enable(7),d.clearcoat&&n.enable(8),d.iridescence&&n.enable(9),d.alphaTest&&n.enable(10),d.vertexColors&&n.enable(11),d.vertexAlphas&&n.enable(12),d.vertexUv1s&&n.enable(13),d.vertexUv2s&&n.enable(14),d.vertexUv3s&&n.enable(15),d.vertexTangents&&n.enable(16),d.anisotropy&&n.enable(17),d.alphaHash&&n.enable(18),d.batching&&n.enable(19),d.dispersion&&n.enable(20),d.batchingColor&&n.enable(21),d.gradientMap&&n.enable(22),V.push(n.mask),n.disableAll(),d.fog&&n.enable(0),d.useFog&&n.enable(1),d.flatShading&&n.enable(2),d.logarithmicDepthBuffer&&n.enable(3),d.reversedDepthBuffer&&n.enable(4),d.skinning&&n.enable(5),d.morphTargets&&n.enable(6),d.morphNormals&&n.enable(7),d.morphColors&&n.enable(8),d.premultipliedAlpha&&n.enable(9),d.shadowMapEnabled&&n.enable(10),d.doubleSided&&n.enable(11),d.flipSided&&n.enable(12),d.useDepthPacking&&n.enable(13),d.dithering&&n.enable(14),d.transmission&&n.enable(15),d.sheen&&n.enable(16),d.opaque&&n.enable(17),d.pointsUvs&&n.enable(18),d.decodeVideoTexture&&n.enable(19),d.decodeVideoTextureEmissive&&n.enable(20),d.alphaToCoverage&&n.enable(21),V.push(n.mask)}function W(V){let d=J[V.type],L;if(d){let f=va[d];L=vn.clone(f.uniforms)}else L=V.uniforms;return L}function N(V,d){let L;for(let f=0,C=o.length;f<C;f++){let Z=o[f];if(Z.cacheKey===d){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new eV(S,d,V,r),o.push(L)),L}function h(V){if(--V.usedTimes===0){let d=o.indexOf(V);o[d]=o[o.length-1],o.pop(),V.destroy()}}function I(V){i.remove(V)}function G(){i.dispose()}return{getParameters:U,getProgramCacheKey:u,getUniforms:W,acquireProgram:N,releaseProgram:h,releaseShaderCache:I,programs:o,dispose:G}}function lV(){let S=new WeakMap;function t(p){return S.has(p)}function e(p){let n=S.get(p);return n===void 0&&(n={},S.set(p,n)),n}function a(p){S.delete(p)}function l(p,n,i){S.get(p)[n]=i}function r(){S=new WeakMap}return{has:t,get:e,remove:a,update:l,dispose:r}}function rV(S,t){return S.groupOrder!==t.groupOrder?S.groupOrder-t.groupOrder:S.renderOrder!==t.renderOrder?S.renderOrder-t.renderOrder:S.material.id!==t.material.id?S.material.id-t.material.id:S.z!==t.z?S.z-t.z:S.id-t.id}function Fc(S,t){return S.groupOrder!==t.groupOrder?S.groupOrder-t.groupOrder:S.renderOrder!==t.renderOrder?S.renderOrder-t.renderOrder:S.z!==t.z?t.z-S.z:S.id-t.id}function Cc(){let S=[],t=0,e=[],a=[],l=[];function r(){t=0,e.length=0,a.length=0,l.length=0}function p(c,k,b,J,q,U){let u=S[t];return u===void 0?(u={id:c.id,object:c,geometry:k,material:b,groupOrder:J,renderOrder:c.renderOrder,z:q,group:U},S[t]=u):(u.id=c.id,u.object=c,u.geometry=k,u.material=b,u.groupOrder=J,u.renderOrder=c.renderOrder,u.z=q,u.group=U),t++,u}function n(c,k,b,J,q,U){let u=p(c,k,b,J,q,U);b.transmission>0?a.push(u):b.transparent===!0?l.push(u):e.push(u)}function i(c,k,b,J,q,U){let u=p(c,k,b,J,q,U);b.transmission>0?a.unshift(u):b.transparent===!0?l.unshift(u):e.unshift(u)}function s(c,k){e.length>1&&e.sort(c||rV),a.length>1&&a.sort(k||Fc),l.length>1&&l.sort(k||Fc)}function o(){for(let c=t,k=S.length;c<k;c++){let b=S[c];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:a,transparent:l,init:r,push:n,unshift:i,finish:o,sort:s}}function pV(){let S=new WeakMap;function t(a,l){let r=S.get(a),p;return r===void 0?(p=new Cc,S.set(a,[p])):l>=r.length?(p=new Cc,r.push(p)):p=r[l],p}function e(){S=new WeakMap}return{get:t,dispose:e}}function nV(){let S={};return{get:function(t){if(S[t.id]!==void 0)return S[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ct};break;case"SpotLight":e={position:new O,direction:new O,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new O,halfWidth:new O,halfHeight:new O};break}return S[t.id]=e,e}}}function iV(){let S={};return{get:function(t){if(S[t.id]!==void 0)return S[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return S[t.id]=e,e}}}var sV=0;function oV(S,t){return(t.castShadow?2:0)-(S.castShadow?2:0)+(t.map?1:0)-(S.map?1:0)}function cV(S){let t=new nV,e=iV(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let s=0;s<9;s++)a.probe.push(new O);let l=new O,r=new pe,p=new pe;function n(s){let o=0,c=0,k=0;for(let V=0;V<9;V++)a.probe[V].set(0,0,0);let b=0,J=0,q=0,U=0,u=0,x=0,K=0,W=0,N=0,h=0,I=0;s.sort(oV);for(let V=0,d=s.length;V<d;V++){let L=s[V],f=L.color,C=L.intensity,Z=L.distance,w=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)o+=f.r*C,c+=f.g*C,k+=f.b*C;else if(L.isLightProbe){for(let v=0;v<9;v++)a.probe[v].addScaledVector(L.sh.coefficients[v],C);I++}else if(L.isDirectionalLight){let v=t.get(L);if(v.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let D=L.shadow,Y=e.get(L);Y.shadowIntensity=D.intensity,Y.shadowBias=D.bias,Y.shadowNormalBias=D.normalBias,Y.shadowRadius=D.radius,Y.shadowMapSize=D.mapSize,a.directionalShadow[b]=Y,a.directionalShadowMap[b]=w,a.directionalShadowMatrix[b]=L.shadow.matrix,x++}a.directional[b]=v,b++}else if(L.isSpotLight){let v=t.get(L);v.position.setFromMatrixPosition(L.matrixWorld),v.color.copy(f).multiplyScalar(C),v.distance=Z,v.coneCos=Math.cos(L.angle),v.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),v.decay=L.decay,a.spot[q]=v;let D=L.shadow;if(L.map&&(a.spotLightMap[N]=L.map,N++,D.updateMatrices(L),L.castShadow&&h++),a.spotLightMatrix[q]=D.matrix,L.castShadow){let Y=e.get(L);Y.shadowIntensity=D.intensity,Y.shadowBias=D.bias,Y.shadowNormalBias=D.normalBias,Y.shadowRadius=D.radius,Y.shadowMapSize=D.mapSize,a.spotShadow[q]=Y,a.spotShadowMap[q]=w,W++}q++}else if(L.isRectAreaLight){let v=t.get(L);v.color.copy(f).multiplyScalar(C),v.halfWidth.set(L.width*.5,0,0),v.halfHeight.set(0,L.height*.5,0),a.rectArea[U]=v,U++}else if(L.isPointLight){let v=t.get(L);if(v.color.copy(L.color).multiplyScalar(L.intensity),v.distance=L.distance,v.decay=L.decay,L.castShadow){let D=L.shadow,Y=e.get(L);Y.shadowIntensity=D.intensity,Y.shadowBias=D.bias,Y.shadowNormalBias=D.normalBias,Y.shadowRadius=D.radius,Y.shadowMapSize=D.mapSize,Y.shadowCameraNear=D.camera.near,Y.shadowCameraFar=D.camera.far,a.pointShadow[J]=Y,a.pointShadowMap[J]=w,a.pointShadowMatrix[J]=L.shadow.matrix,K++}a.point[J]=v,J++}else if(L.isHemisphereLight){let v=t.get(L);v.skyColor.copy(L.color).multiplyScalar(C),v.groundColor.copy(L.groundColor).multiplyScalar(C),a.hemi[u]=v,u++}}U>0&&(S.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Wt.LTC_FLOAT_1,a.rectAreaLTC2=Wt.LTC_FLOAT_2):(a.rectAreaLTC1=Wt.LTC_HALF_1,a.rectAreaLTC2=Wt.LTC_HALF_2)),a.ambient[0]=o,a.ambient[1]=c,a.ambient[2]=k;let G=a.hash;(G.directionalLength!==b||G.pointLength!==J||G.spotLength!==q||G.rectAreaLength!==U||G.hemiLength!==u||G.numDirectionalShadows!==x||G.numPointShadows!==K||G.numSpotShadows!==W||G.numSpotMaps!==N||G.numLightProbes!==I)&&(a.directional.length=b,a.spot.length=q,a.rectArea.length=U,a.point.length=J,a.hemi.length=u,a.directionalShadow.length=x,a.directionalShadowMap.length=x,a.pointShadow.length=K,a.pointShadowMap.length=K,a.spotShadow.length=W,a.spotShadowMap.length=W,a.directionalShadowMatrix.length=x,a.pointShadowMatrix.length=K,a.spotLightMatrix.length=W+N-h,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=h,a.numLightProbes=I,G.directionalLength=b,G.pointLength=J,G.spotLength=q,G.rectAreaLength=U,G.hemiLength=u,G.numDirectionalShadows=x,G.numPointShadows=K,G.numSpotShadows=W,G.numSpotMaps=N,G.numLightProbes=I,a.version=sV++)}function i(s,o){let c=0,k=0,b=0,J=0,q=0,U=o.matrixWorldInverse;for(let u=0,x=s.length;u<x;u++){let K=s[u];if(K.isDirectionalLight){let W=a.directional[c];W.direction.setFromMatrixPosition(K.matrixWorld),l.setFromMatrixPosition(K.target.matrixWorld),W.direction.sub(l),W.direction.transformDirection(U),c++}else if(K.isSpotLight){let W=a.spot[b];W.position.setFromMatrixPosition(K.matrixWorld),W.position.applyMatrix4(U),W.direction.setFromMatrixPosition(K.matrixWorld),l.setFromMatrixPosition(K.target.matrixWorld),W.direction.sub(l),W.direction.transformDirection(U),b++}else if(K.isRectAreaLight){let W=a.rectArea[J];W.position.setFromMatrixPosition(K.matrixWorld),W.position.applyMatrix4(U),p.identity(),r.copy(K.matrixWorld),r.premultiply(U),p.extractRotation(r),W.halfWidth.set(K.width*.5,0,0),W.halfHeight.set(0,K.height*.5,0),W.halfWidth.applyMatrix4(p),W.halfHeight.applyMatrix4(p),J++}else if(K.isPointLight){let W=a.point[k];W.position.setFromMatrixPosition(K.matrixWorld),W.position.applyMatrix4(U),k++}else if(K.isHemisphereLight){let W=a.hemi[q];W.direction.setFromMatrixPosition(K.matrixWorld),W.direction.transformDirection(U),q++}}}return{setup:n,setupView:i,state:a}}function gc(S){let t=new cV(S),e=[],a=[];function l(o){s.camera=o,e.length=0,a.length=0}function r(o){e.push(o)}function p(o){a.push(o)}function n(){t.setup(e)}function i(o){t.setupView(e,o)}let s={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:s,setupLights:n,setupLightsView:i,pushLight:r,pushShadow:p}}function kV(S){let t=new WeakMap;function e(l,r=0){let p=t.get(l),n;return p===void 0?(n=new gc(S),t.set(l,[n])):r>=p.length?(n=new gc(S),p.push(n)):n=p[r],n}function a(){t=new WeakMap}return{get:e,dispose:a}}var bV=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uV=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UV(S,t,e){let a=new Hl,l=new Dt,r=new Dt,p=new xe,n=new xS({depthPacking:_l}),i=new Fp,s={},o=e.maxTextureSize,c={[_a]:aa,[aa]:_a,[fe]:fe},k=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:bV,fragmentShader:uV}),b=k.clone();b.defines.HORIZONTAL_PASS=1;let J=new Ze;J.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let q=new je(J,k),U=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let u=this.type;this.render=function(h,I,G){if(U.enabled===!1||U.autoUpdate===!1&&U.needsUpdate===!1||h.length===0)return;let V=S.getRenderTarget(),d=S.getActiveCubeFace(),L=S.getActiveMipmapLevel(),f=S.state;f.setBlending(lS),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let C=u!==ga&&this.type===ga,Z=u===ga&&this.type!==ga;for(let w=0,v=h.length;w<v;w++){let D=h[w],Y=D.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);let at=Y.getFrameExtents();if(l.multiply(at),r.copy(Y.mapSize),(l.x>o||l.y>o)&&(l.x>o&&(r.x=Math.floor(o/at.x),l.x=r.x*at.x,Y.mapSize.x=r.x),l.y>o&&(r.y=Math.floor(o/at.y),l.y=r.y*at.y,Y.mapSize.y=r.y)),Y.map===null||C===!0||Z===!0){let ut=this.type!==ga?{minFilter:pa,magFilter:pa}:{};Y.map!==null&&Y.map.dispose(),Y.map=new da(l.x,l.y,ut),Y.map.texture.name=D.name+".shadowMap",Y.camera.updateProjectionMatrix()}S.setRenderTarget(Y.map),S.clear();let lt=Y.getViewportCount();for(let ut=0;ut<lt;ut++){let It=Y.getViewport(ut);p.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),f.viewport(p),Y.updateMatrices(D,ut),a=Y.getFrustum(),W(I,G,Y.camera,D,this.type)}Y.isPointLightShadow!==!0&&this.type===ga&&x(Y,G),Y.needsUpdate=!1}u=this.type,U.needsUpdate=!1,S.setRenderTarget(V,d,L)};function x(h,I){let G=t.update(q);k.defines.VSM_SAMPLES!==h.blurSamples&&(k.defines.VSM_SAMPLES=h.blurSamples,b.defines.VSM_SAMPLES=h.blurSamples,k.needsUpdate=!0,b.needsUpdate=!0),h.mapPass===null&&(h.mapPass=new da(l.x,l.y)),k.uniforms.shadow_pass.value=h.map.texture,k.uniforms.resolution.value=h.mapSize,k.uniforms.radius.value=h.radius,S.setRenderTarget(h.mapPass),S.clear(),S.renderBufferDirect(I,null,G,k,q,null),b.uniforms.shadow_pass.value=h.mapPass.texture,b.uniforms.resolution.value=h.mapSize,b.uniforms.radius.value=h.radius,S.setRenderTarget(h.map),S.clear(),S.renderBufferDirect(I,null,G,b,q,null)}function K(h,I,G,V){let d=null,L=G.isPointLight===!0?h.customDistanceMaterial:h.customDepthMaterial;if(L!==void 0)d=L;else if(d=G.isPointLight===!0?i:n,S.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let f=d.uuid,C=I.uuid,Z=s[f];Z===void 0&&(Z={},s[f]=Z);let w=Z[C];w===void 0&&(w=d.clone(),Z[C]=w,I.addEventListener("dispose",N)),d=w}if(d.visible=I.visible,d.wireframe=I.wireframe,V===ga?d.side=I.shadowSide!==null?I.shadowSide:I.side:d.side=I.shadowSide!==null?I.shadowSide:c[I.side],d.alphaMap=I.alphaMap,d.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,d.map=I.map,d.clipShadows=I.clipShadows,d.clippingPlanes=I.clippingPlanes,d.clipIntersection=I.clipIntersection,d.displacementMap=I.displacementMap,d.displacementScale=I.displacementScale,d.displacementBias=I.displacementBias,d.wireframeLinewidth=I.wireframeLinewidth,d.linewidth=I.linewidth,G.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let f=S.properties.get(d);f.light=G}return d}function W(h,I,G,V,d){if(h.visible===!1)return;if(h.layers.test(I.layers)&&(h.isMesh||h.isLine||h.isPoints)&&(h.castShadow||h.receiveShadow&&d===ga)&&(!h.frustumCulled||a.intersectsObject(h))){h.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,h.matrixWorld);let C=t.update(h),Z=h.material;if(Array.isArray(Z)){let w=C.groups;for(let v=0,D=w.length;v<D;v++){let Y=w[v],at=Z[Y.materialIndex];if(at&&at.visible){let lt=K(h,at,V,d);h.onBeforeShadow(S,h,I,G,C,lt,Y),S.renderBufferDirect(G,null,C,lt,h,Y),h.onAfterShadow(S,h,I,G,C,lt,Y)}}}else if(Z.visible){let w=K(h,Z,V,d);h.onBeforeShadow(S,h,I,G,C,w,null),S.renderBufferDirect(G,null,C,w,h,null),h.onAfterShadow(S,h,I,G,C,w,null)}}let f=h.children;for(let C=0,Z=f.length;C<Z;C++)W(f[C],I,G,V,d)}function N(h){h.target.removeEventListener("dispose",N);for(let G in s){let V=s[G],d=h.target.uuid;d in V&&(V[d].dispose(),delete V[d])}}}var JV={[zp]:Bp,[Dp]:tn,[_p]:en,[DS]:$p,[Bp]:zp,[tn]:Dp,[en]:_p,[$p]:DS};function qV(S,t){function e(){let M=!1,ot=new xe,Ut=null,Lt=new xe(0,0,0,0);return{setMask:function(rt){Ut!==rt&&!M&&(S.colorMask(rt,rt,rt,rt),Ut=rt)},setLocked:function(rt){M=rt},setClear:function(rt,$,m,tt,yt){yt===!0&&(rt*=tt,$*=tt,m*=tt),ot.set(rt,$,m,tt),Lt.equals(ot)===!1&&(S.clearColor(rt,$,m,tt),Lt.copy(ot))},reset:function(){M=!1,Ut=null,Lt.set(-1,0,0,0)}}}function a(){let M=!1,ot=!1,Ut=null,Lt=null,rt=null;return{setReversed:function($){if(ot!==$){let m=t.get("EXT_clip_control");$?m.clipControlEXT(m.LOWER_LEFT_EXT,m.ZERO_TO_ONE_EXT):m.clipControlEXT(m.LOWER_LEFT_EXT,m.NEGATIVE_ONE_TO_ONE_EXT),ot=$;let tt=rt;rt=null,this.setClear(tt)}},getReversed:function(){return ot},setTest:function($){$?Q(S.DEPTH_TEST):Kt(S.DEPTH_TEST)},setMask:function($){Ut!==$&&!M&&(S.depthMask($),Ut=$)},setFunc:function($){if(ot&&($=JV[$]),Lt!==$){switch($){case zp:S.depthFunc(S.NEVER);break;case Bp:S.depthFunc(S.ALWAYS);break;case Dp:S.depthFunc(S.LESS);break;case DS:S.depthFunc(S.LEQUAL);break;case _p:S.depthFunc(S.EQUAL);break;case $p:S.depthFunc(S.GEQUAL);break;case tn:S.depthFunc(S.GREATER);break;case en:S.depthFunc(S.NOTEQUAL);break;default:S.depthFunc(S.LEQUAL)}Lt=$}},setLocked:function($){M=$},setClear:function($){rt!==$&&(ot&&($=1-$),S.clearDepth($),rt=$)},reset:function(){M=!1,Ut=null,Lt=null,rt=null,ot=!1}}}function l(){let M=!1,ot=null,Ut=null,Lt=null,rt=null,$=null,m=null,tt=null,yt=null;return{setTest:function(R){M||(R?Q(S.STENCIL_TEST):Kt(S.STENCIL_TEST))},setMask:function(R){ot!==R&&!M&&(S.stencilMask(R),ot=R)},setFunc:function(R,Ot,Ct){(Ut!==R||Lt!==Ot||rt!==Ct)&&(S.stencilFunc(R,Ot,Ct),Ut=R,Lt=Ot,rt=Ct)},setOp:function(R,Ot,Ct){($!==R||m!==Ot||tt!==Ct)&&(S.stencilOp(R,Ot,Ct),$=R,m=Ot,tt=Ct)},setLocked:function(R){M=R},setClear:function(R){yt!==R&&(S.clearStencil(R),yt=R)},reset:function(){M=!1,ot=null,Ut=null,Lt=null,rt=null,$=null,m=null,tt=null,yt=null}}}let r=new e,p=new a,n=new l,i=new WeakMap,s=new WeakMap,o={},c={},k=new WeakMap,b=[],J=null,q=!1,U=null,u=null,x=null,K=null,W=null,N=null,h=null,I=new ct(0,0,0),G=0,V=!1,d=null,L=null,f=null,C=null,Z=null,w=S.getParameter(S.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,D=0,Y=S.getParameter(S.VERSION);Y.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Y)[1]),v=D>=1):Y.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),v=D>=2);let at=null,lt={},ut=S.getParameter(S.SCISSOR_BOX),It=S.getParameter(S.VIEWPORT),gt=new xe().fromArray(ut),Pt=new xe().fromArray(It);function Qt(M,ot,Ut,Lt){let rt=new Uint8Array(4),$=S.createTexture();S.bindTexture(M,$),S.texParameteri(M,S.TEXTURE_MIN_FILTER,S.NEAREST),S.texParameteri(M,S.TEXTURE_MAG_FILTER,S.NEAREST);for(let m=0;m<Ut;m++)M===S.TEXTURE_3D||M===S.TEXTURE_2D_ARRAY?S.texImage3D(ot,0,S.RGBA,1,1,Lt,0,S.RGBA,S.UNSIGNED_BYTE,rt):S.texImage2D(ot+m,0,S.RGBA,1,1,0,S.RGBA,S.UNSIGNED_BYTE,rt);return $}let H={};H[S.TEXTURE_2D]=Qt(S.TEXTURE_2D,S.TEXTURE_2D,1),H[S.TEXTURE_CUBE_MAP]=Qt(S.TEXTURE_CUBE_MAP,S.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[S.TEXTURE_2D_ARRAY]=Qt(S.TEXTURE_2D_ARRAY,S.TEXTURE_2D_ARRAY,1,1),H[S.TEXTURE_3D]=Qt(S.TEXTURE_3D,S.TEXTURE_3D,1,1),r.setClear(0,0,0,1),p.setClear(1),n.setClear(0),Q(S.DEPTH_TEST),p.setFunc(DS),bt(!1),dt(Yi),Q(S.CULL_FACE),ft(lS);function Q(M){o[M]!==!0&&(S.enable(M),o[M]=!0)}function Kt(M){o[M]!==!1&&(S.disable(M),o[M]=!1)}function At(M,ot){return c[M]!==ot?(S.bindFramebuffer(M,ot),c[M]=ot,M===S.DRAW_FRAMEBUFFER&&(c[S.FRAMEBUFFER]=ot),M===S.FRAMEBUFFER&&(c[S.DRAW_FRAMEBUFFER]=ot),!0):!1}function xt(M,ot){let Ut=b,Lt=!1;if(M){Ut=k.get(ot),Ut===void 0&&(Ut=[],k.set(ot,Ut));let rt=M.textures;if(Ut.length!==rt.length||Ut[0]!==S.COLOR_ATTACHMENT0){for(let $=0,m=rt.length;$<m;$++)Ut[$]=S.COLOR_ATTACHMENT0+$;Ut.length=rt.length,Lt=!0}}else Ut[0]!==S.BACK&&(Ut[0]=S.BACK,Lt=!0);Lt&&S.drawBuffers(Ut)}function zt(M){return J!==M?(S.useProgram(M),J=M,!0):!1}let qe={[mS]:S.FUNC_ADD,[Oo]:S.FUNC_SUBTRACT,[Go]:S.FUNC_REVERSE_SUBTRACT};qe[fo]=S.MIN,qe[Mo]=S.MAX;let j={[Eo]:S.ZERO,[Fo]:S.ONE,[Co]:S.SRC_COLOR,[xp]:S.SRC_ALPHA,[Xo]:S.SRC_ALPHA_SATURATE,[Yo]:S.DST_COLOR,[Zo]:S.DST_ALPHA,[go]:S.ONE_MINUS_SRC_COLOR,[Np]:S.ONE_MINUS_SRC_ALPHA,[wo]:S.ONE_MINUS_DST_COLOR,[vo]:S.ONE_MINUS_DST_ALPHA,[Ho]:S.CONSTANT_COLOR,[Po]:S.ONE_MINUS_CONSTANT_COLOR,[Qo]:S.CONSTANT_ALPHA,[zo]:S.ONE_MINUS_CONSTANT_ALPHA};function ft(M,ot,Ut,Lt,rt,$,m,tt,yt,R){if(M===lS){q===!0&&(Kt(S.BLEND),q=!1);return}if(q===!1&&(Q(S.BLEND),q=!0),M!==Io){if(M!==U||R!==V){if((u!==mS||W!==mS)&&(S.blendEquation(S.FUNC_ADD),u=mS,W=mS),R)switch(M){case BS:S.blendFuncSeparate(S.ONE,S.ONE_MINUS_SRC_ALPHA,S.ONE,S.ONE_MINUS_SRC_ALPHA);break;case wi:S.blendFunc(S.ONE,S.ONE);break;case Xi:S.blendFuncSeparate(S.ZERO,S.ONE_MINUS_SRC_COLOR,S.ZERO,S.ONE);break;case Hi:S.blendFuncSeparate(S.DST_COLOR,S.ONE_MINUS_SRC_ALPHA,S.ZERO,S.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case BS:S.blendFuncSeparate(S.SRC_ALPHA,S.ONE_MINUS_SRC_ALPHA,S.ONE,S.ONE_MINUS_SRC_ALPHA);break;case wi:S.blendFuncSeparate(S.SRC_ALPHA,S.ONE,S.ONE,S.ONE);break;case Xi:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hi:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}x=null,K=null,N=null,h=null,I.set(0,0,0),G=0,U=M,V=R}return}rt=rt||ot,$=$||Ut,m=m||Lt,(ot!==u||rt!==W)&&(S.blendEquationSeparate(qe[ot],qe[rt]),u=ot,W=rt),(Ut!==x||Lt!==K||$!==N||m!==h)&&(S.blendFuncSeparate(j[Ut],j[Lt],j[$],j[m]),x=Ut,K=Lt,N=$,h=m),(tt.equals(I)===!1||yt!==G)&&(S.blendColor(tt.r,tt.g,tt.b,yt),I.copy(tt),G=yt),U=M,V=!1}function Vt(M,ot){M.side===fe?Kt(S.CULL_FACE):Q(S.CULL_FACE);let Ut=M.side===aa;ot&&(Ut=!Ut),bt(Ut),M.blending===BS&&M.transparent===!1?ft(lS):ft(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),p.setFunc(M.depthFunc),p.setTest(M.depthTest),p.setMask(M.depthWrite),r.setMask(M.colorWrite);let Lt=M.stencilWrite;n.setTest(Lt),Lt&&(n.setMask(M.stencilWriteMask),n.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),n.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Nt(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Q(S.SAMPLE_ALPHA_TO_COVERAGE):Kt(S.SAMPLE_ALPHA_TO_COVERAGE)}function bt(M){d!==M&&(M?S.frontFace(S.CW):S.frontFace(S.CCW),d=M)}function dt(M){M!==Ro?(Q(S.CULL_FACE),M!==L&&(M===Yi?S.cullFace(S.BACK):M===Lo?S.cullFace(S.FRONT):S.cullFace(S.FRONT_AND_BACK))):Kt(S.CULL_FACE),L=M}function ae(M){M!==f&&(v&&S.lineWidth(M),f=M)}function Nt(M,ot,Ut){M?(Q(S.POLYGON_OFFSET_FILL),(C!==ot||Z!==Ut)&&(S.polygonOffset(ot,Ut),C=ot,Z=Ut)):Kt(S.POLYGON_OFFSET_FILL)}function vt(M){M?Q(S.SCISSOR_TEST):Kt(S.SCISSOR_TEST)}function Je(M){M===void 0&&(M=S.TEXTURE0+w-1),at!==M&&(S.activeTexture(M),at=M)}function Ve(M,ot,Ut){Ut===void 0&&(at===null?Ut=S.TEXTURE0+w-1:Ut=at);let Lt=lt[Ut];Lt===void 0&&(Lt={type:void 0,texture:void 0},lt[Ut]=Lt),(Lt.type!==M||Lt.texture!==ot)&&(at!==Ut&&(S.activeTexture(Ut),at=Ut),S.bindTexture(M,ot||H[M]),Lt.type=M,Lt.texture=ot)}function A(){let M=lt[at];M!==void 0&&M.type!==void 0&&(S.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function T(){try{S.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function g(){try{S.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function _(){try{S.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function et(){try{S.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function B(){try{S.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Mt(){try{S.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function kt(){try{S.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Tt(){try{S.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Rt(){try{S.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function St(){try{S.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function qt(M){gt.equals(M)===!1&&(S.scissor(M.x,M.y,M.z,M.w),gt.copy(M))}function wt(M){Pt.equals(M)===!1&&(S.viewport(M.x,M.y,M.z,M.w),Pt.copy(M))}function Et(M,ot){let Ut=s.get(ot);Ut===void 0&&(Ut=new WeakMap,s.set(ot,Ut));let Lt=Ut.get(M);Lt===void 0&&(Lt=S.getUniformBlockIndex(ot,M.name),Ut.set(M,Lt))}function mt(M,ot){let Lt=s.get(ot).get(M);i.get(ot)!==Lt&&(S.uniformBlockBinding(ot,Lt,M.__bindingPointIndex),i.set(ot,Lt))}function Bt(){S.disable(S.BLEND),S.disable(S.CULL_FACE),S.disable(S.DEPTH_TEST),S.disable(S.POLYGON_OFFSET_FILL),S.disable(S.SCISSOR_TEST),S.disable(S.STENCIL_TEST),S.disable(S.SAMPLE_ALPHA_TO_COVERAGE),S.blendEquation(S.FUNC_ADD),S.blendFunc(S.ONE,S.ZERO),S.blendFuncSeparate(S.ONE,S.ZERO,S.ONE,S.ZERO),S.blendColor(0,0,0,0),S.colorMask(!0,!0,!0,!0),S.clearColor(0,0,0,0),S.depthMask(!0),S.depthFunc(S.LESS),p.setReversed(!1),S.clearDepth(1),S.stencilMask(4294967295),S.stencilFunc(S.ALWAYS,0,4294967295),S.stencilOp(S.KEEP,S.KEEP,S.KEEP),S.clearStencil(0),S.cullFace(S.BACK),S.frontFace(S.CCW),S.polygonOffset(0,0),S.activeTexture(S.TEXTURE0),S.bindFramebuffer(S.FRAMEBUFFER,null),S.bindFramebuffer(S.DRAW_FRAMEBUFFER,null),S.bindFramebuffer(S.READ_FRAMEBUFFER,null),S.useProgram(null),S.lineWidth(1),S.scissor(0,0,S.canvas.width,S.canvas.height),S.viewport(0,0,S.canvas.width,S.canvas.height),o={},at=null,lt={},c={},k=new WeakMap,b=[],J=null,q=!1,U=null,u=null,x=null,K=null,W=null,N=null,h=null,I=new ct(0,0,0),G=0,V=!1,d=null,L=null,f=null,C=null,Z=null,gt.set(0,0,S.canvas.width,S.canvas.height),Pt.set(0,0,S.canvas.width,S.canvas.height),r.reset(),p.reset(),n.reset()}return{buffers:{color:r,depth:p,stencil:n},enable:Q,disable:Kt,bindFramebuffer:At,drawBuffers:xt,useProgram:zt,setBlending:ft,setMaterial:Vt,setFlipSided:bt,setCullFace:dt,setLineWidth:ae,setPolygonOffset:Nt,setScissorTest:vt,activeTexture:Je,bindTexture:Ve,unbindTexture:A,compressedTexImage2D:T,compressedTexImage3D:g,texImage2D:Rt,texImage3D:St,updateUBOMapping:Et,uniformBlockBinding:mt,texStorage2D:kt,texStorage3D:Tt,texSubImage2D:_,texSubImage3D:et,compressedTexSubImage2D:B,compressedTexSubImage3D:Mt,scissor:qt,viewport:wt,reset:Bt}}function VV(S,t,e,a,l,r,p){let n=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,i=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),s=new Dt,o=new WeakMap,c,k=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function J(A,T){return b?new OffscreenCanvas(A,T):xr("canvas")}function q(A,T,g){let _=1,et=Ve(A);if((et.width>g||et.height>g)&&(_=g/Math.max(et.width,et.height)),_<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let B=Math.floor(_*et.width),Mt=Math.floor(_*et.height);c===void 0&&(c=J(B,Mt));let kt=T?J(B,Mt):c;return kt.width=B,kt.height=Mt,kt.getContext("2d").drawImage(A,0,0,B,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+B+"x"+Mt+")."),kt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function U(A){return A.generateMipmaps}function u(A){S.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?S.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?S.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?S.TEXTURE_2D_ARRAY:S.TEXTURE_2D}function K(A,T,g,_,et=!1){if(A!==null){if(S[A]!==void 0)return S[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let B=T;if(T===S.RED&&(g===S.FLOAT&&(B=S.R32F),g===S.HALF_FLOAT&&(B=S.R16F),g===S.UNSIGNED_BYTE&&(B=S.R8)),T===S.RED_INTEGER&&(g===S.UNSIGNED_BYTE&&(B=S.R8UI),g===S.UNSIGNED_SHORT&&(B=S.R16UI),g===S.UNSIGNED_INT&&(B=S.R32UI),g===S.BYTE&&(B=S.R8I),g===S.SHORT&&(B=S.R16I),g===S.INT&&(B=S.R32I)),T===S.RG&&(g===S.FLOAT&&(B=S.RG32F),g===S.HALF_FLOAT&&(B=S.RG16F),g===S.UNSIGNED_BYTE&&(B=S.RG8)),T===S.RG_INTEGER&&(g===S.UNSIGNED_BYTE&&(B=S.RG8UI),g===S.UNSIGNED_SHORT&&(B=S.RG16UI),g===S.UNSIGNED_INT&&(B=S.RG32UI),g===S.BYTE&&(B=S.RG8I),g===S.SHORT&&(B=S.RG16I),g===S.INT&&(B=S.RG32I)),T===S.RGB_INTEGER&&(g===S.UNSIGNED_BYTE&&(B=S.RGB8UI),g===S.UNSIGNED_SHORT&&(B=S.RGB16UI),g===S.UNSIGNED_INT&&(B=S.RGB32UI),g===S.BYTE&&(B=S.RGB8I),g===S.SHORT&&(B=S.RGB16I),g===S.INT&&(B=S.RGB32I)),T===S.RGBA_INTEGER&&(g===S.UNSIGNED_BYTE&&(B=S.RGBA8UI),g===S.UNSIGNED_SHORT&&(B=S.RGBA16UI),g===S.UNSIGNED_INT&&(B=S.RGBA32UI),g===S.BYTE&&(B=S.RGBA8I),g===S.SHORT&&(B=S.RGBA16I),g===S.INT&&(B=S.RGBA32I)),T===S.RGB&&(g===S.UNSIGNED_INT_5_9_9_9_REV&&(B=S.RGB9_E5),g===S.UNSIGNED_INT_10F_11F_11F_REV&&(B=S.R11F_G11F_B10F)),T===S.RGBA){let Mt=et?yr:Se.getTransfer(_);g===S.FLOAT&&(B=S.RGBA32F),g===S.HALF_FLOAT&&(B=S.RGBA16F),g===S.UNSIGNED_BYTE&&(B=Mt===ke?S.SRGB8_ALPHA8:S.RGBA8),g===S.UNSIGNED_SHORT_4_4_4_4&&(B=S.RGBA4),g===S.UNSIGNED_SHORT_5_5_5_1&&(B=S.RGB5_A1)}return(B===S.R16F||B===S.R32F||B===S.RG16F||B===S.RG32F||B===S.RGBA16F||B===S.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function W(A,T){let g;return A?T===null||T===Za||T===Bl?g=S.DEPTH24_STENCIL8:T===Oa?g=S.DEPTH32F_STENCIL8:T===zl&&(g=S.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Za||T===Bl?g=S.DEPTH_COMPONENT24:T===Oa?g=S.DEPTH_COMPONENT32F:T===zl&&(g=S.DEPTH_COMPONENT16),g}function N(A,T){return U(A)===!0||A.isFramebufferTexture&&A.minFilter!==pa&&A.minFilter!==ja?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function h(A){let T=A.target;T.removeEventListener("dispose",h),G(T),T.isVideoTexture&&o.delete(T)}function I(A){let T=A.target;T.removeEventListener("dispose",I),d(T)}function G(A){let T=a.get(A);if(T.__webglInit===void 0)return;let g=A.source,_=k.get(g);if(_){let et=_[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&V(A),Object.keys(_).length===0&&k.delete(g)}a.remove(A)}function V(A){let T=a.get(A);S.deleteTexture(T.__webglTexture);let g=A.source,_=k.get(g);delete _[T.__cacheKey],p.memory.textures--}function d(A){let T=a.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),a.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let _=0;_<6;_++){if(Array.isArray(T.__webglFramebuffer[_]))for(let et=0;et<T.__webglFramebuffer[_].length;et++)S.deleteFramebuffer(T.__webglFramebuffer[_][et]);else S.deleteFramebuffer(T.__webglFramebuffer[_]);T.__webglDepthbuffer&&S.deleteRenderbuffer(T.__webglDepthbuffer[_])}else{if(Array.isArray(T.__webglFramebuffer))for(let _=0;_<T.__webglFramebuffer.length;_++)S.deleteFramebuffer(T.__webglFramebuffer[_]);else S.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&S.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&S.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _=0;_<T.__webglColorRenderbuffer.length;_++)T.__webglColorRenderbuffer[_]&&S.deleteRenderbuffer(T.__webglColorRenderbuffer[_]);T.__webglDepthRenderbuffer&&S.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let g=A.textures;for(let _=0,et=g.length;_<et;_++){let B=a.get(g[_]);B.__webglTexture&&(S.deleteTexture(B.__webglTexture),p.memory.textures--),a.remove(g[_])}a.remove(A)}let L=0;function f(){L=0}function C(){let A=L;return A>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l.maxTextures),L+=1,A}function Z(A){let T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function w(A,T){let g=a.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&g.__version!==A.version){let _=A.image;if(_===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(g,A,T);return}}else A.isExternalTexture&&(g.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(S.TEXTURE_2D,g.__webglTexture,S.TEXTURE0+T)}function v(A,T){let g=a.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&g.__version!==A.version){H(g,A,T);return}e.bindTexture(S.TEXTURE_2D_ARRAY,g.__webglTexture,S.TEXTURE0+T)}function D(A,T){let g=a.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&g.__version!==A.version){H(g,A,T);return}e.bindTexture(S.TEXTURE_3D,g.__webglTexture,S.TEXTURE0+T)}function Y(A,T){let g=a.get(A);if(A.version>0&&g.__version!==A.version){Q(g,A,T);return}e.bindTexture(S.TEXTURE_CUBE_MAP,g.__webglTexture,S.TEXTURE0+T)}let at={[Tr]:S.REPEAT,[TS]:S.CLAMP_TO_EDGE,[jp]:S.MIRRORED_REPEAT},lt={[pa]:S.NEAREST,[lc]:S.NEAREST_MIPMAP_NEAREST,[Zr]:S.NEAREST_MIPMAP_LINEAR,[ja]:S.LINEAR,[rn]:S.LINEAR_MIPMAP_NEAREST,[RS]:S.LINEAR_MIPMAP_LINEAR},ut={[nc]:S.NEVER,[bc]:S.ALWAYS,[ic]:S.LESS,[Ss]:S.LEQUAL,[sc]:S.EQUAL,[kc]:S.GEQUAL,[oc]:S.GREATER,[cc]:S.NOTEQUAL};function It(A,T){if(T.type===Oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ja||T.magFilter===rn||T.magFilter===Zr||T.magFilter===RS||T.minFilter===ja||T.minFilter===rn||T.minFilter===Zr||T.minFilter===RS)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),S.texParameteri(A,S.TEXTURE_WRAP_S,at[T.wrapS]),S.texParameteri(A,S.TEXTURE_WRAP_T,at[T.wrapT]),(A===S.TEXTURE_3D||A===S.TEXTURE_2D_ARRAY)&&S.texParameteri(A,S.TEXTURE_WRAP_R,at[T.wrapR]),S.texParameteri(A,S.TEXTURE_MAG_FILTER,lt[T.magFilter]),S.texParameteri(A,S.TEXTURE_MIN_FILTER,lt[T.minFilter]),T.compareFunction&&(S.texParameteri(A,S.TEXTURE_COMPARE_MODE,S.COMPARE_REF_TO_TEXTURE),S.texParameteri(A,S.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pa||T.minFilter!==Zr&&T.minFilter!==RS||T.type===Oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){let g=t.get("EXT_texture_filter_anisotropic");S.texParameterf(A,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function gt(A,T){let g=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",h));let _=T.source,et=k.get(_);et===void 0&&(et={},k.set(_,et));let B=Z(T);if(B!==A.__cacheKey){et[B]===void 0&&(et[B]={texture:S.createTexture(),usedTimes:0},p.memory.textures++,g=!0),et[B].usedTimes++;let Mt=et[A.__cacheKey];Mt!==void 0&&(et[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&V(T)),A.__cacheKey=B,A.__webglTexture=et[B].texture}return g}function Pt(A,T,g){return Math.floor(Math.floor(A/g)/T)}function Qt(A,T,g,_){let B=A.updateRanges;if(B.length===0)e.texSubImage2D(S.TEXTURE_2D,0,0,0,T.width,T.height,g,_,T.data);else{B.sort((St,qt)=>St.start-qt.start);let Mt=0;for(let St=1;St<B.length;St++){let qt=B[Mt],wt=B[St],Et=qt.start+qt.count,mt=Pt(wt.start,T.width,4),Bt=Pt(qt.start,T.width,4);wt.start<=Et+1&&mt===Bt&&Pt(wt.start+wt.count-1,T.width,4)===mt?qt.count=Math.max(qt.count,wt.start+wt.count-qt.start):(++Mt,B[Mt]=wt)}B.length=Mt+1;let kt=S.getParameter(S.UNPACK_ROW_LENGTH),Tt=S.getParameter(S.UNPACK_SKIP_PIXELS),Rt=S.getParameter(S.UNPACK_SKIP_ROWS);S.pixelStorei(S.UNPACK_ROW_LENGTH,T.width);for(let St=0,qt=B.length;St<qt;St++){let wt=B[St],Et=Math.floor(wt.start/4),mt=Math.ceil(wt.count/4),Bt=Et%T.width,M=Math.floor(Et/T.width),ot=mt,Ut=1;S.pixelStorei(S.UNPACK_SKIP_PIXELS,Bt),S.pixelStorei(S.UNPACK_SKIP_ROWS,M),e.texSubImage2D(S.TEXTURE_2D,0,Bt,M,ot,Ut,g,_,T.data)}A.clearUpdateRanges(),S.pixelStorei(S.UNPACK_ROW_LENGTH,kt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Tt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Rt)}}function H(A,T,g){let _=S.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_=S.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_=S.TEXTURE_3D);let et=gt(A,T),B=T.source;e.bindTexture(_,A.__webglTexture,S.TEXTURE0+g);let Mt=a.get(B);if(B.version!==Mt.__version||et===!0){e.activeTexture(S.TEXTURE0+g);let kt=Se.getPrimaries(Se.workingColorSpace),Tt=T.colorSpace===pS?null:Se.getPrimaries(T.colorSpace),Rt=T.colorSpace===pS||kt===Tt?S.NONE:S.BROWSER_DEFAULT_WEBGL;S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,T.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,T.unpackAlignment),S.pixelStorei(S.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let St=q(T.image,!1,l.maxTextureSize);St=Je(T,St);let qt=r.convert(T.format,T.colorSpace),wt=r.convert(T.type),Et=K(T.internalFormat,qt,wt,T.colorSpace,T.isVideoTexture);It(_,T);let mt,Bt=T.mipmaps,M=T.isVideoTexture!==!0,ot=Mt.__version===void 0||et===!0,Ut=B.dataReady,Lt=N(T,St);if(T.isDepthTexture)Et=W(T.format===Dl,T.type),ot&&(M?e.texStorage2D(S.TEXTURE_2D,1,Et,St.width,St.height):e.texImage2D(S.TEXTURE_2D,0,Et,St.width,St.height,0,qt,wt,null));else if(T.isDataTexture)if(Bt.length>0){M&&ot&&e.texStorage2D(S.TEXTURE_2D,Lt,Et,Bt[0].width,Bt[0].height);for(let rt=0,$=Bt.length;rt<$;rt++)mt=Bt[rt],M?Ut&&e.texSubImage2D(S.TEXTURE_2D,rt,0,0,mt.width,mt.height,qt,wt,mt.data):e.texImage2D(S.TEXTURE_2D,rt,Et,mt.width,mt.height,0,qt,wt,mt.data);T.generateMipmaps=!1}else M?(ot&&e.texStorage2D(S.TEXTURE_2D,Lt,Et,St.width,St.height),Ut&&Qt(T,St,qt,wt)):e.texImage2D(S.TEXTURE_2D,0,Et,St.width,St.height,0,qt,wt,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){M&&ot&&e.texStorage3D(S.TEXTURE_2D_ARRAY,Lt,Et,Bt[0].width,Bt[0].height,St.depth);for(let rt=0,$=Bt.length;rt<$;rt++)if(mt=Bt[rt],T.format!==Ka)if(qt!==null)if(M){if(Ut)if(T.layerUpdates.size>0){let m=cs(mt.width,mt.height,T.format,T.type);for(let tt of T.layerUpdates){let yt=mt.data.subarray(tt*m/mt.data.BYTES_PER_ELEMENT,(tt+1)*m/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(S.TEXTURE_2D_ARRAY,rt,0,0,tt,mt.width,mt.height,1,qt,yt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(S.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,St.depth,qt,mt.data)}else e.compressedTexImage3D(S.TEXTURE_2D_ARRAY,rt,Et,mt.width,mt.height,St.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else M?Ut&&e.texSubImage3D(S.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,St.depth,qt,wt,mt.data):e.texImage3D(S.TEXTURE_2D_ARRAY,rt,Et,mt.width,mt.height,St.depth,0,qt,wt,mt.data)}else{M&&ot&&e.texStorage2D(S.TEXTURE_2D,Lt,Et,Bt[0].width,Bt[0].height);for(let rt=0,$=Bt.length;rt<$;rt++)mt=Bt[rt],T.format!==Ka?qt!==null?M?Ut&&e.compressedTexSubImage2D(S.TEXTURE_2D,rt,0,0,mt.width,mt.height,qt,mt.data):e.compressedTexImage2D(S.TEXTURE_2D,rt,Et,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):M?Ut&&e.texSubImage2D(S.TEXTURE_2D,rt,0,0,mt.width,mt.height,qt,wt,mt.data):e.texImage2D(S.TEXTURE_2D,rt,Et,mt.width,mt.height,0,qt,wt,mt.data)}else if(T.isDataArrayTexture)if(M){if(ot&&e.texStorage3D(S.TEXTURE_2D_ARRAY,Lt,Et,St.width,St.height,St.depth),Ut)if(T.layerUpdates.size>0){let rt=cs(St.width,St.height,T.format,T.type);for(let $ of T.layerUpdates){let m=St.data.subarray($*rt/St.data.BYTES_PER_ELEMENT,($+1)*rt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(S.TEXTURE_2D_ARRAY,0,0,0,$,St.width,St.height,1,qt,wt,m)}T.clearLayerUpdates()}else e.texSubImage3D(S.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,qt,wt,St.data)}else e.texImage3D(S.TEXTURE_2D_ARRAY,0,Et,St.width,St.height,St.depth,0,qt,wt,St.data);else if(T.isData3DTexture)M?(ot&&e.texStorage3D(S.TEXTURE_3D,Lt,Et,St.width,St.height,St.depth),Ut&&e.texSubImage3D(S.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,qt,wt,St.data)):e.texImage3D(S.TEXTURE_3D,0,Et,St.width,St.height,St.depth,0,qt,wt,St.data);else if(T.isFramebufferTexture){if(ot)if(M)e.texStorage2D(S.TEXTURE_2D,Lt,Et,St.width,St.height);else{let rt=St.width,$=St.height;for(let m=0;m<Lt;m++)e.texImage2D(S.TEXTURE_2D,m,Et,rt,$,0,qt,wt,null),rt>>=1,$>>=1}}else if(Bt.length>0){if(M&&ot){let rt=Ve(Bt[0]);e.texStorage2D(S.TEXTURE_2D,Lt,Et,rt.width,rt.height)}for(let rt=0,$=Bt.length;rt<$;rt++)mt=Bt[rt],M?Ut&&e.texSubImage2D(S.TEXTURE_2D,rt,0,0,qt,wt,mt):e.texImage2D(S.TEXTURE_2D,rt,Et,qt,wt,mt);T.generateMipmaps=!1}else if(M){if(ot){let rt=Ve(St);e.texStorage2D(S.TEXTURE_2D,Lt,Et,rt.width,rt.height)}Ut&&e.texSubImage2D(S.TEXTURE_2D,0,0,0,qt,wt,St)}else e.texImage2D(S.TEXTURE_2D,0,Et,qt,wt,St);U(T)&&u(_),Mt.__version=B.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Q(A,T,g){if(T.image.length!==6)return;let _=gt(A,T),et=T.source;e.bindTexture(S.TEXTURE_CUBE_MAP,A.__webglTexture,S.TEXTURE0+g);let B=a.get(et);if(et.version!==B.__version||_===!0){e.activeTexture(S.TEXTURE0+g);let Mt=Se.getPrimaries(Se.workingColorSpace),kt=T.colorSpace===pS?null:Se.getPrimaries(T.colorSpace),Tt=T.colorSpace===pS||Mt===kt?S.NONE:S.BROWSER_DEFAULT_WEBGL;S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,T.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,T.unpackAlignment),S.pixelStorei(S.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,qt=[];for(let $=0;$<6;$++)!Rt&&!St?qt[$]=q(T.image[$],!0,l.maxCubemapSize):qt[$]=St?T.image[$].image:T.image[$],qt[$]=Je(T,qt[$]);let wt=qt[0],Et=r.convert(T.format,T.colorSpace),mt=r.convert(T.type),Bt=K(T.internalFormat,Et,mt,T.colorSpace),M=T.isVideoTexture!==!0,ot=B.__version===void 0||_===!0,Ut=et.dataReady,Lt=N(T,wt);It(S.TEXTURE_CUBE_MAP,T);let rt;if(Rt){M&&ot&&e.texStorage2D(S.TEXTURE_CUBE_MAP,Lt,Bt,wt.width,wt.height);for(let $=0;$<6;$++){rt=qt[$].mipmaps;for(let m=0;m<rt.length;m++){let tt=rt[m];T.format!==Ka?Et!==null?M?Ut&&e.compressedTexSubImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m,0,0,tt.width,tt.height,Et,tt.data):e.compressedTexImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m,Bt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?Ut&&e.texSubImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m,0,0,tt.width,tt.height,Et,mt,tt.data):e.texImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m,Bt,tt.width,tt.height,0,Et,mt,tt.data)}}}else{if(rt=T.mipmaps,M&&ot){rt.length>0&&Lt++;let $=Ve(qt[0]);e.texStorage2D(S.TEXTURE_CUBE_MAP,Lt,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(St){M?Ut&&e.texSubImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,qt[$].width,qt[$].height,Et,mt,qt[$].data):e.texImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,qt[$].width,qt[$].height,0,Et,mt,qt[$].data);for(let m=0;m<rt.length;m++){let yt=rt[m].image[$].image;M?Ut&&e.texSubImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m+1,0,0,yt.width,yt.height,Et,mt,yt.data):e.texImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m+1,Bt,yt.width,yt.height,0,Et,mt,yt.data)}}else{M?Ut&&e.texSubImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,mt,qt[$]):e.texImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,Et,mt,qt[$]);for(let m=0;m<rt.length;m++){let tt=rt[m];M?Ut&&e.texSubImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m+1,0,0,Et,mt,tt.image[$]):e.texImage2D(S.TEXTURE_CUBE_MAP_POSITIVE_X+$,m+1,Bt,Et,mt,tt.image[$])}}}U(T)&&u(S.TEXTURE_CUBE_MAP),B.__version=et.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Kt(A,T,g,_,et,B){let Mt=r.convert(g.format,g.colorSpace),kt=r.convert(g.type),Tt=K(g.internalFormat,Mt,kt,g.colorSpace),Rt=a.get(T),St=a.get(g);if(St.__renderTarget=T,!Rt.__hasExternalTextures){let qt=Math.max(1,T.width>>B),wt=Math.max(1,T.height>>B);et===S.TEXTURE_3D||et===S.TEXTURE_2D_ARRAY?e.texImage3D(et,B,Tt,qt,wt,T.depth,0,Mt,kt,null):e.texImage2D(et,B,Tt,qt,wt,0,Mt,kt,null)}e.bindFramebuffer(S.FRAMEBUFFER,A),Nt(T)?n.framebufferTexture2DMultisampleEXT(S.FRAMEBUFFER,_,et,St.__webglTexture,0,ae(T)):(et===S.TEXTURE_2D||et>=S.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=S.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&S.framebufferTexture2D(S.FRAMEBUFFER,_,et,St.__webglTexture,B),e.bindFramebuffer(S.FRAMEBUFFER,null)}function At(A,T,g){if(S.bindRenderbuffer(S.RENDERBUFFER,A),T.depthBuffer){let _=T.depthTexture,et=_&&_.isDepthTexture?_.type:null,B=W(T.stencilBuffer,et),Mt=T.stencilBuffer?S.DEPTH_STENCIL_ATTACHMENT:S.DEPTH_ATTACHMENT,kt=ae(T);Nt(T)?n.renderbufferStorageMultisampleEXT(S.RENDERBUFFER,kt,B,T.width,T.height):g?S.renderbufferStorageMultisample(S.RENDERBUFFER,kt,B,T.width,T.height):S.renderbufferStorage(S.RENDERBUFFER,B,T.width,T.height),S.framebufferRenderbuffer(S.FRAMEBUFFER,Mt,S.RENDERBUFFER,A)}else{let _=T.textures;for(let et=0;et<_.length;et++){let B=_[et],Mt=r.convert(B.format,B.colorSpace),kt=r.convert(B.type),Tt=K(B.internalFormat,Mt,kt,B.colorSpace),Rt=ae(T);g&&Nt(T)===!1?S.renderbufferStorageMultisample(S.RENDERBUFFER,Rt,Tt,T.width,T.height):Nt(T)?n.renderbufferStorageMultisampleEXT(S.RENDERBUFFER,Rt,Tt,T.width,T.height):S.renderbufferStorage(S.RENDERBUFFER,Tt,T.width,T.height)}}S.bindRenderbuffer(S.RENDERBUFFER,null)}function xt(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(S.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _=a.get(T.depthTexture);_.__renderTarget=T,(!_.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),w(T.depthTexture,0);let et=_.__webglTexture,B=ae(T);if(T.depthTexture.format===Fl)Nt(T)?n.framebufferTexture2DMultisampleEXT(S.FRAMEBUFFER,S.DEPTH_ATTACHMENT,S.TEXTURE_2D,et,0,B):S.framebufferTexture2D(S.FRAMEBUFFER,S.DEPTH_ATTACHMENT,S.TEXTURE_2D,et,0);else if(T.depthTexture.format===Dl)Nt(T)?n.framebufferTexture2DMultisampleEXT(S.FRAMEBUFFER,S.DEPTH_STENCIL_ATTACHMENT,S.TEXTURE_2D,et,0,B):S.framebufferTexture2D(S.FRAMEBUFFER,S.DEPTH_STENCIL_ATTACHMENT,S.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function zt(A){let T=a.get(A),g=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){let _=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_){let et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_.removeEventListener("dispose",et)};_.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=_}if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(g)throw new Error("target.depthTexture not supported in Cube render targets");let _=A.texture.mipmaps;_&&_.length>0?xt(T.__webglFramebuffer[0],A):xt(T.__webglFramebuffer,A)}else if(g){T.__webglDepthbuffer=[];for(let _=0;_<6;_++)if(e.bindFramebuffer(S.FRAMEBUFFER,T.__webglFramebuffer[_]),T.__webglDepthbuffer[_]===void 0)T.__webglDepthbuffer[_]=S.createRenderbuffer(),At(T.__webglDepthbuffer[_],A,!1);else{let et=A.stencilBuffer?S.DEPTH_STENCIL_ATTACHMENT:S.DEPTH_ATTACHMENT,B=T.__webglDepthbuffer[_];S.bindRenderbuffer(S.RENDERBUFFER,B),S.framebufferRenderbuffer(S.FRAMEBUFFER,et,S.RENDERBUFFER,B)}}else{let _=A.texture.mipmaps;if(_&&_.length>0?e.bindFramebuffer(S.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(S.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=S.createRenderbuffer(),At(T.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?S.DEPTH_STENCIL_ATTACHMENT:S.DEPTH_ATTACHMENT,B=T.__webglDepthbuffer;S.bindRenderbuffer(S.RENDERBUFFER,B),S.framebufferRenderbuffer(S.FRAMEBUFFER,et,S.RENDERBUFFER,B)}}e.bindFramebuffer(S.FRAMEBUFFER,null)}function qe(A,T,g){let _=a.get(A);T!==void 0&&Kt(_.__webglFramebuffer,A,A.texture,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,0),g!==void 0&&zt(A)}function j(A){let T=A.texture,g=a.get(A),_=a.get(T);A.addEventListener("dispose",I);let et=A.textures,B=A.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(_.__webglTexture===void 0&&(_.__webglTexture=S.createTexture()),_.__version=T.version,p.memory.textures++),B){g.__webglFramebuffer=[];for(let kt=0;kt<6;kt++)if(T.mipmaps&&T.mipmaps.length>0){g.__webglFramebuffer[kt]=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)g.__webglFramebuffer[kt][Tt]=S.createFramebuffer()}else g.__webglFramebuffer[kt]=S.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){g.__webglFramebuffer=[];for(let kt=0;kt<T.mipmaps.length;kt++)g.__webglFramebuffer[kt]=S.createFramebuffer()}else g.__webglFramebuffer=S.createFramebuffer();if(Mt)for(let kt=0,Tt=et.length;kt<Tt;kt++){let Rt=a.get(et[kt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=S.createTexture(),p.memory.textures++)}if(A.samples>0&&Nt(A)===!1){g.__webglMultisampledFramebuffer=S.createFramebuffer(),g.__webglColorRenderbuffer=[],e.bindFramebuffer(S.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let kt=0;kt<et.length;kt++){let Tt=et[kt];g.__webglColorRenderbuffer[kt]=S.createRenderbuffer(),S.bindRenderbuffer(S.RENDERBUFFER,g.__webglColorRenderbuffer[kt]);let Rt=r.convert(Tt.format,Tt.colorSpace),St=r.convert(Tt.type),qt=K(Tt.internalFormat,Rt,St,Tt.colorSpace,A.isXRRenderTarget===!0),wt=ae(A);S.renderbufferStorageMultisample(S.RENDERBUFFER,wt,qt,A.width,A.height),S.framebufferRenderbuffer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+kt,S.RENDERBUFFER,g.__webglColorRenderbuffer[kt])}S.bindRenderbuffer(S.RENDERBUFFER,null),A.depthBuffer&&(g.__webglDepthRenderbuffer=S.createRenderbuffer(),At(g.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(S.FRAMEBUFFER,null)}}if(B){e.bindTexture(S.TEXTURE_CUBE_MAP,_.__webglTexture),It(S.TEXTURE_CUBE_MAP,T);for(let kt=0;kt<6;kt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)Kt(g.__webglFramebuffer[kt][Tt],A,T,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Tt);else Kt(g.__webglFramebuffer[kt],A,T,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0);U(T)&&u(S.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let kt=0,Tt=et.length;kt<Tt;kt++){let Rt=et[kt],St=a.get(Rt),qt=S.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(qt=A.isWebGL3DRenderTarget?S.TEXTURE_3D:S.TEXTURE_2D_ARRAY),e.bindTexture(qt,St.__webglTexture),It(qt,Rt),Kt(g.__webglFramebuffer,A,Rt,S.COLOR_ATTACHMENT0+kt,qt,0),U(Rt)&&u(qt)}e.unbindTexture()}else{let kt=S.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(kt=A.isWebGL3DRenderTarget?S.TEXTURE_3D:S.TEXTURE_2D_ARRAY),e.bindTexture(kt,_.__webglTexture),It(kt,T),T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)Kt(g.__webglFramebuffer[Tt],A,T,S.COLOR_ATTACHMENT0,kt,Tt);else Kt(g.__webglFramebuffer,A,T,S.COLOR_ATTACHMENT0,kt,0);U(T)&&u(kt),e.unbindTexture()}A.depthBuffer&&zt(A)}function ft(A){let T=A.textures;for(let g=0,_=T.length;g<_;g++){let et=T[g];if(U(et)){let B=x(A),Mt=a.get(et).__webglTexture;e.bindTexture(B,Mt),u(B),e.unbindTexture()}}}let Vt=[],bt=[];function dt(A){if(A.samples>0){if(Nt(A)===!1){let T=A.textures,g=A.width,_=A.height,et=S.COLOR_BUFFER_BIT,B=A.stencilBuffer?S.DEPTH_STENCIL_ATTACHMENT:S.DEPTH_ATTACHMENT,Mt=a.get(A),kt=T.length>1;if(kt)for(let Rt=0;Rt<T.length;Rt++)e.bindFramebuffer(S.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),S.framebufferRenderbuffer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Rt,S.RENDERBUFFER,null),e.bindFramebuffer(S.FRAMEBUFFER,Mt.__webglFramebuffer),S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0+Rt,S.TEXTURE_2D,null,0);e.bindFramebuffer(S.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let Tt=A.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(S.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(S.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=S.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=S.STENCIL_BUFFER_BIT)),kt){S.framebufferRenderbuffer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);let St=a.get(T[Rt]).__webglTexture;S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,St,0)}S.blitFramebuffer(0,0,g,_,0,0,g,_,et,S.NEAREST),i===!0&&(Vt.length=0,bt.length=0,Vt.push(S.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Vt.push(B),bt.push(B),S.invalidateFramebuffer(S.DRAW_FRAMEBUFFER,bt)),S.invalidateFramebuffer(S.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(S.READ_FRAMEBUFFER,null),e.bindFramebuffer(S.DRAW_FRAMEBUFFER,null),kt)for(let Rt=0;Rt<T.length;Rt++){e.bindFramebuffer(S.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),S.framebufferRenderbuffer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Rt,S.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);let St=a.get(T[Rt]).__webglTexture;e.bindFramebuffer(S.FRAMEBUFFER,Mt.__webglFramebuffer),S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0+Rt,S.TEXTURE_2D,St,0)}e.bindFramebuffer(S.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&i){let T=A.stencilBuffer?S.DEPTH_STENCIL_ATTACHMENT:S.DEPTH_ATTACHMENT;S.invalidateFramebuffer(S.DRAW_FRAMEBUFFER,[T])}}}function ae(A){return Math.min(l.maxSamples,A.samples)}function Nt(A){let T=a.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(A){let T=p.render.frame;o.get(A)!==T&&(o.set(A,T),A.update())}function Je(A,T){let g=A.colorSpace,_=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||g!==_S&&g!==pS&&(Se.getTransfer(g)===ke?(_!==Ka||et!==Ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",g)),T}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(s.width=A.naturalWidth||A.width,s.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(s.width=A.displayWidth,s.height=A.displayHeight):(s.width=A.width,s.height=A.height),s}this.allocateTextureUnit=C,this.resetTextureUnits=f,this.setTexture2D=w,this.setTexture2DArray=v,this.setTexture3D=D,this.setTextureCube=Y,this.rebindTextures=qe,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Nt}function dV(S,t){function e(a,l=pS){let r,p=Se.getTransfer(l);if(a===Ia)return S.UNSIGNED_BYTE;if(a===nn)return S.UNSIGNED_SHORT_4_4_4_4;if(a===sn)return S.UNSIGNED_SHORT_5_5_5_1;if(a===Di)return S.UNSIGNED_INT_5_9_9_9_REV;if(a===_i)return S.UNSIGNED_INT_10F_11F_11F_REV;if(a===zi)return S.BYTE;if(a===Bi)return S.SHORT;if(a===zl)return S.UNSIGNED_SHORT;if(a===pn)return S.INT;if(a===Za)return S.UNSIGNED_INT;if(a===Oa)return S.FLOAT;if(a===LS)return S.HALF_FLOAT;if(a===$i)return S.ALPHA;if(a===ts)return S.RGB;if(a===Ka)return S.RGBA;if(a===Fl)return S.DEPTH_COMPONENT;if(a===Dl)return S.DEPTH_STENCIL;if(a===on)return S.RED;if(a===cn)return S.RED_INTEGER;if(a===es)return S.RG;if(a===kn)return S.RG_INTEGER;if(a===bn)return S.RGBA_INTEGER;if(a===vr||a===Yr||a===wr||a===Xr)if(p===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===un||a===Un||a===Jn||a===qn)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===un)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Un)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Jn)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qn)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vn||a===dn||a===Kn)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Vn||a===dn)return p===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Kn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wn||a===Tn||a===mn||a===yn||a===hn||a===xn||a===Nn||a===jn||a===Rn||a===Ln||a===An||a===In||a===On||a===Gn)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===Wn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Tn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===mn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===yn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===xn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Nn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===jn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ln)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===An)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===In)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===On)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Gn)return p===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===fn||a===Mn||a===En)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===fn)return p===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mn)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===En)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Fn||a===Cn||a===gn||a===Zn)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Fn)return r.COMPRESSED_RED_RGTC1_EXT;if(a===Cn)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===gn)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zn)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Bl?S.UNSIGNED_INT_24_8:S[a]!==void 0?S[a]:null}return{convert:e}}var KV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WV=`
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

}`,ys=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let a=new Gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,a=new ta({vertexShader:KV,fragmentShader:WV,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new je(new La(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hs=class extends $a{constructor(t,e){super();let a=this,l=null,r=1,p=null,n="local-floor",i=1,s=null,o=null,c=null,k=null,b=null,J=null,q=typeof XRWebGLBinding<"u",U=new ys,u={},x=e.getContextAttributes(),K=null,W=null,N=[],h=[],I=new Dt,G=null,V=new Pe;V.viewport=new xe;let d=new Pe;d.viewport=new xe;let L=[V,d],f=new Qp,C=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=N[H];return Q===void 0&&(Q=new Xl,N[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=N[H];return Q===void 0&&(Q=new Xl,N[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=N[H];return Q===void 0&&(Q=new Xl,N[H]=Q),Q.getHandSpace()};function w(H){let Q=h.indexOf(H.inputSource);if(Q===-1)return;let Kt=N[Q];Kt!==void 0&&(Kt.update(H.inputSource,H.frame,s||p),Kt.dispatchEvent({type:H.type,data:H.inputSource}))}function v(){l.removeEventListener("select",w),l.removeEventListener("selectstart",w),l.removeEventListener("selectend",w),l.removeEventListener("squeeze",w),l.removeEventListener("squeezestart",w),l.removeEventListener("squeezeend",w),l.removeEventListener("end",v),l.removeEventListener("inputsourceschange",D);for(let H=0;H<N.length;H++){let Q=h[H];Q!==null&&(h[H]=null,N[H].disconnect(Q))}C=null,Z=null,U.reset();for(let H in u)delete u[H];t.setRenderTarget(K),b=null,k=null,c=null,l=null,W=null,Qt.stop(),a.isPresenting=!1,t.setPixelRatio(G),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){n=H,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s||p},this.setReferenceSpace=function(H){s=H},this.getBaseLayer=function(){return k!==null?k:b},this.getBinding=function(){return c===null&&q&&(c=new XRWebGLBinding(l,e)),c},this.getFrame=function(){return J},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(K=t.getRenderTarget(),l.addEventListener("select",w),l.addEventListener("selectstart",w),l.addEventListener("selectend",w),l.addEventListener("squeeze",w),l.addEventListener("squeezestart",w),l.addEventListener("squeezeend",w),l.addEventListener("end",v),l.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(I),q&&"createProjectionLayer"in XRWebGLBinding.prototype){let Kt=null,At=null,xt=null;x.depth&&(xt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Kt=x.stencil?Dl:Fl,At=x.stencil?Bl:Za);let zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};c=this.getBinding(),k=c.createProjectionLayer(zt),l.updateRenderState({layers:[k]}),t.setPixelRatio(1),t.setSize(k.textureWidth,k.textureHeight,!1),W=new da(k.textureWidth,k.textureHeight,{format:Ka,type:Ia,depthTexture:new tl(k.textureWidth,k.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Kt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:k.ignoreDepthValues===!1,resolveStencilBuffer:k.ignoreDepthValues===!1})}else{let Kt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};b=new XRWebGLLayer(l,e,Kt),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),W=new da(b.framebufferWidth,b.framebufferHeight,{format:Ka,type:Ia,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}W.isXRRenderTarget=!0,this.setFoveation(i),s=null,p=await l.requestReferenceSpace(n),Qt.setContext(l),Qt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return U.getDepthTexture()};function D(H){for(let Q=0;Q<H.removed.length;Q++){let Kt=H.removed[Q],At=h.indexOf(Kt);At>=0&&(h[At]=null,N[At].disconnect(Kt))}for(let Q=0;Q<H.added.length;Q++){let Kt=H.added[Q],At=h.indexOf(Kt);if(At===-1){for(let zt=0;zt<N.length;zt++)if(zt>=h.length){h.push(Kt),At=zt;break}else if(h[zt]===null){h[zt]=Kt,At=zt;break}if(At===-1)break}let xt=N[At];xt&&xt.connect(Kt)}}let Y=new O,at=new O;function lt(H,Q,Kt){Y.setFromMatrixPosition(Q.matrixWorld),at.setFromMatrixPosition(Kt.matrixWorld);let At=Y.distanceTo(at),xt=Q.projectionMatrix.elements,zt=Kt.projectionMatrix.elements,qe=xt[14]/(xt[10]-1),j=xt[14]/(xt[10]+1),ft=(xt[9]+1)/xt[5],Vt=(xt[9]-1)/xt[5],bt=(xt[8]-1)/xt[0],dt=(zt[8]+1)/zt[0],ae=qe*bt,Nt=qe*dt,vt=At/(-bt+dt),Je=vt*-bt;if(Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Je),H.translateZ(vt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),xt[10]===-1)H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ve=qe+vt,A=j+vt,T=ae-Je,g=Nt+(At-Je),_=ft*j/A*Ve,et=Vt*j/A*Ve;H.projectionMatrix.makePerspective(T,g,_,et,Ve,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ut(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let Q=H.near,Kt=H.far;U.texture!==null&&(U.depthNear>0&&(Q=U.depthNear),U.depthFar>0&&(Kt=U.depthFar)),f.near=d.near=V.near=Q,f.far=d.far=V.far=Kt,(C!==f.near||Z!==f.far)&&(l.updateRenderState({depthNear:f.near,depthFar:f.far}),C=f.near,Z=f.far),f.layers.mask=H.layers.mask|6,V.layers.mask=f.layers.mask&3,d.layers.mask=f.layers.mask&5;let At=H.parent,xt=f.cameras;ut(f,At);for(let zt=0;zt<xt.length;zt++)ut(xt[zt],At);xt.length===2?lt(f,V,d):f.projectionMatrix.copy(V.projectionMatrix),It(H,f,At)};function It(H,Q,Kt){Kt===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(Kt.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Cl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return f},this.getFoveation=function(){if(!(k===null&&b===null))return i},this.setFoveation=function(H){i=H,k!==null&&(k.fixedFoveation=H),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=H)},this.hasDepthSensing=function(){return U.texture!==null},this.getDepthSensingMesh=function(){return U.getMesh(f)},this.getCameraTexture=function(H){return u[H]};let gt=null;function Pt(H,Q){if(o=Q.getViewerPose(s||p),J=Q,o!==null){let Kt=o.views;b!==null&&(t.setRenderTargetFramebuffer(W,b.framebuffer),t.setRenderTarget(W));let At=!1;Kt.length!==f.cameras.length&&(f.cameras.length=0,At=!0);for(let j=0;j<Kt.length;j++){let ft=Kt[j],Vt=null;if(b!==null)Vt=b.getViewport(ft);else{let dt=c.getViewSubImage(k,ft);Vt=dt.viewport,j===0&&(t.setRenderTargetTextures(W,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(W))}let bt=L[j];bt===void 0&&(bt=new Pe,bt.layers.enable(j),bt.viewport=new xe,L[j]=bt),bt.matrix.fromArray(ft.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(ft.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),j===0&&(f.matrix.copy(bt.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale)),At===!0&&f.cameras.push(bt)}let xt=l.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&q){c=a.getBinding();let j=c.getDepthInformation(Kt[0]);j&&j.isValid&&j.texture&&U.init(j,l.renderState)}if(xt&&xt.includes("camera-access")&&q){t.state.unbindTexture(),c=a.getBinding();for(let j=0;j<Kt.length;j++){let ft=Kt[j].camera;if(ft){let Vt=u[ft];Vt||(Vt=new Gr,u[ft]=Vt);let bt=c.getCameraImage(ft);Vt.sourceTexture=bt}}}}for(let Kt=0;Kt<N.length;Kt++){let At=h[Kt],xt=N[Kt];At!==null&&xt!==void 0&&xt.update(At,Q,s||p)}gt&&gt(H,Q),Q.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Q}),J=null}let Qt=new Zc;Qt.setAnimationLoop(Pt),this.setAnimationLoop=function(H){gt=H},this.dispose=function(){}}},sl=new Ra,TV=new pe;function mV(S,t){function e(U,u){U.matrixAutoUpdate===!0&&U.updateMatrix(),u.value.copy(U.matrix)}function a(U,u){u.color.getRGB(U.fogColor.value,ns(S)),u.isFog?(U.fogNear.value=u.near,U.fogFar.value=u.far):u.isFogExp2&&(U.fogDensity.value=u.density)}function l(U,u,x,K,W){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(U,u):u.isMeshToonMaterial?(r(U,u),c(U,u)):u.isMeshPhongMaterial?(r(U,u),o(U,u)):u.isMeshStandardMaterial?(r(U,u),k(U,u),u.isMeshPhysicalMaterial&&b(U,u,W)):u.isMeshMatcapMaterial?(r(U,u),J(U,u)):u.isMeshDepthMaterial?r(U,u):u.isMeshDistanceMaterial?(r(U,u),q(U,u)):u.isMeshNormalMaterial?r(U,u):u.isLineBasicMaterial?(p(U,u),u.isLineDashedMaterial&&n(U,u)):u.isPointsMaterial?i(U,u,x,K):u.isSpriteMaterial?s(U,u):u.isShadowMaterial?(U.color.value.copy(u.color),U.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(U,u){U.opacity.value=u.opacity,u.color&&U.diffuse.value.copy(u.color),u.emissive&&U.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(U.map.value=u.map,e(u.map,U.mapTransform)),u.alphaMap&&(U.alphaMap.value=u.alphaMap,e(u.alphaMap,U.alphaMapTransform)),u.bumpMap&&(U.bumpMap.value=u.bumpMap,e(u.bumpMap,U.bumpMapTransform),U.bumpScale.value=u.bumpScale,u.side===aa&&(U.bumpScale.value*=-1)),u.normalMap&&(U.normalMap.value=u.normalMap,e(u.normalMap,U.normalMapTransform),U.normalScale.value.copy(u.normalScale),u.side===aa&&U.normalScale.value.negate()),u.displacementMap&&(U.displacementMap.value=u.displacementMap,e(u.displacementMap,U.displacementMapTransform),U.displacementScale.value=u.displacementScale,U.displacementBias.value=u.displacementBias),u.emissiveMap&&(U.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,U.emissiveMapTransform)),u.specularMap&&(U.specularMap.value=u.specularMap,e(u.specularMap,U.specularMapTransform)),u.alphaTest>0&&(U.alphaTest.value=u.alphaTest);let x=t.get(u),K=x.envMap,W=x.envMapRotation;K&&(U.envMap.value=K,sl.copy(W),sl.x*=-1,sl.y*=-1,sl.z*=-1,K.isCubeTexture&&K.isRenderTargetTexture===!1&&(sl.y*=-1,sl.z*=-1),U.envMapRotation.value.setFromMatrix4(TV.makeRotationFromEuler(sl)),U.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,U.reflectivity.value=u.reflectivity,U.ior.value=u.ior,U.refractionRatio.value=u.refractionRatio),u.lightMap&&(U.lightMap.value=u.lightMap,U.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,U.lightMapTransform)),u.aoMap&&(U.aoMap.value=u.aoMap,U.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,U.aoMapTransform))}function p(U,u){U.diffuse.value.copy(u.color),U.opacity.value=u.opacity,u.map&&(U.map.value=u.map,e(u.map,U.mapTransform))}function n(U,u){U.dashSize.value=u.dashSize,U.totalSize.value=u.dashSize+u.gapSize,U.scale.value=u.scale}function i(U,u,x,K){U.diffuse.value.copy(u.color),U.opacity.value=u.opacity,U.size.value=u.size*x,U.scale.value=K*.5,u.map&&(U.map.value=u.map,e(u.map,U.uvTransform)),u.alphaMap&&(U.alphaMap.value=u.alphaMap,e(u.alphaMap,U.alphaMapTransform)),u.alphaTest>0&&(U.alphaTest.value=u.alphaTest)}function s(U,u){U.diffuse.value.copy(u.color),U.opacity.value=u.opacity,U.rotation.value=u.rotation,u.map&&(U.map.value=u.map,e(u.map,U.mapTransform)),u.alphaMap&&(U.alphaMap.value=u.alphaMap,e(u.alphaMap,U.alphaMapTransform)),u.alphaTest>0&&(U.alphaTest.value=u.alphaTest)}function o(U,u){U.specular.value.copy(u.specular),U.shininess.value=Math.max(u.shininess,1e-4)}function c(U,u){u.gradientMap&&(U.gradientMap.value=u.gradientMap)}function k(U,u){U.metalness.value=u.metalness,u.metalnessMap&&(U.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,U.metalnessMapTransform)),U.roughness.value=u.roughness,u.roughnessMap&&(U.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,U.roughnessMapTransform)),u.envMap&&(U.envMapIntensity.value=u.envMapIntensity)}function b(U,u,x){U.ior.value=u.ior,u.sheen>0&&(U.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),U.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(U.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,U.sheenColorMapTransform)),u.sheenRoughnessMap&&(U.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,U.sheenRoughnessMapTransform))),u.clearcoat>0&&(U.clearcoat.value=u.clearcoat,U.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(U.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,U.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(U.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,U.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(U.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,U.clearcoatNormalMapTransform),U.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===aa&&U.clearcoatNormalScale.value.negate())),u.dispersion>0&&(U.dispersion.value=u.dispersion),u.iridescence>0&&(U.iridescence.value=u.iridescence,U.iridescenceIOR.value=u.iridescenceIOR,U.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],U.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(U.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,U.iridescenceMapTransform)),u.iridescenceThicknessMap&&(U.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,U.iridescenceThicknessMapTransform))),u.transmission>0&&(U.transmission.value=u.transmission,U.transmissionSamplerMap.value=x.texture,U.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(U.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,U.transmissionMapTransform)),U.thickness.value=u.thickness,u.thicknessMap&&(U.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,U.thicknessMapTransform)),U.attenuationDistance.value=u.attenuationDistance,U.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(U.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(U.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,U.anisotropyMapTransform))),U.specularIntensity.value=u.specularIntensity,U.specularColor.value.copy(u.specularColor),u.specularColorMap&&(U.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,U.specularColorMapTransform)),u.specularIntensityMap&&(U.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,U.specularIntensityMapTransform))}function J(U,u){u.matcap&&(U.matcap.value=u.matcap)}function q(U,u){let x=t.get(u).light;U.referencePosition.value.setFromMatrixPosition(x.matrixWorld),U.nearDistance.value=x.shadow.camera.near,U.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function yV(S,t,e,a){let l={},r={},p=[],n=S.getParameter(S.MAX_UNIFORM_BUFFER_BINDINGS);function i(x,K){let W=K.program;a.uniformBlockBinding(x,W)}function s(x,K){let W=l[x.id];W===void 0&&(J(x),W=o(x),l[x.id]=W,x.addEventListener("dispose",U));let N=K.program;a.updateUBOMapping(x,N);let h=t.render.frame;r[x.id]!==h&&(k(x),r[x.id]=h)}function o(x){let K=c();x.__bindingPointIndex=K;let W=S.createBuffer(),N=x.__size,h=x.usage;return S.bindBuffer(S.UNIFORM_BUFFER,W),S.bufferData(S.UNIFORM_BUFFER,N,h),S.bindBuffer(S.UNIFORM_BUFFER,null),S.bindBufferBase(S.UNIFORM_BUFFER,K,W),W}function c(){for(let x=0;x<n;x++)if(p.indexOf(x)===-1)return p.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function k(x){let K=l[x.id],W=x.uniforms,N=x.__cache;S.bindBuffer(S.UNIFORM_BUFFER,K);for(let h=0,I=W.length;h<I;h++){let G=Array.isArray(W[h])?W[h]:[W[h]];for(let V=0,d=G.length;V<d;V++){let L=G[V];if(b(L,h,V,N)===!0){let f=L.__offset,C=Array.isArray(L.value)?L.value:[L.value],Z=0;for(let w=0;w<C.length;w++){let v=C[w],D=q(v);typeof v=="number"||typeof v=="boolean"?(L.__data[0]=v,S.bufferSubData(S.UNIFORM_BUFFER,f+Z,L.__data)):v.isMatrix3?(L.__data[0]=v.elements[0],L.__data[1]=v.elements[1],L.__data[2]=v.elements[2],L.__data[3]=0,L.__data[4]=v.elements[3],L.__data[5]=v.elements[4],L.__data[6]=v.elements[5],L.__data[7]=0,L.__data[8]=v.elements[6],L.__data[9]=v.elements[7],L.__data[10]=v.elements[8],L.__data[11]=0):(v.toArray(L.__data,Z),Z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}S.bufferSubData(S.UNIFORM_BUFFER,f,L.__data)}}}S.bindBuffer(S.UNIFORM_BUFFER,null)}function b(x,K,W,N){let h=x.value,I=K+"_"+W;if(N[I]===void 0)return typeof h=="number"||typeof h=="boolean"?N[I]=h:N[I]=h.clone(),!0;{let G=N[I];if(typeof h=="number"||typeof h=="boolean"){if(G!==h)return N[I]=h,!0}else if(G.equals(h)===!1)return G.copy(h),!0}return!1}function J(x){let K=x.uniforms,W=0,N=16;for(let I=0,G=K.length;I<G;I++){let V=Array.isArray(K[I])?K[I]:[K[I]];for(let d=0,L=V.length;d<L;d++){let f=V[d],C=Array.isArray(f.value)?f.value:[f.value];for(let Z=0,w=C.length;Z<w;Z++){let v=C[Z],D=q(v),Y=W%N,at=Y%D.boundary,lt=Y+at;W+=at,lt!==0&&N-lt<D.storage&&(W+=N-lt),f.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),f.__offset=W,W+=D.storage}}}let h=W%N;return h>0&&(W+=N-h),x.__size=W,x.__cache={},this}function q(x){let K={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(K.boundary=4,K.storage=4):x.isVector2?(K.boundary=8,K.storage=8):x.isVector3||x.isColor?(K.boundary=16,K.storage=12):x.isVector4?(K.boundary=16,K.storage=16):x.isMatrix3?(K.boundary=48,K.storage=48):x.isMatrix4?(K.boundary=64,K.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),K}function U(x){let K=x.target;K.removeEventListener("dispose",U);let W=p.indexOf(K.__bindingPointIndex);p.splice(W,1),S.deleteBuffer(l[K.id]),delete l[K.id],delete r[K.id]}function u(){for(let x in l)S.deleteBuffer(l[x]);p=[],l={},r={}}return{bind:i,update:s,dispose:u}}var Hn=class{constructor(t={}){let{canvas:e=uc(),context:a=null,depth:l=!0,stencil:r=!1,alpha:p=!1,antialias:n=!1,premultipliedAlpha:i=!0,preserveDrawingBuffer:s=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:k=!1}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=p;let J=new Uint32Array(4),q=new Int32Array(4),U=null,u=null,x=[],K=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rS,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,N=!1;this._outputColorSpace=He;let h=0,I=0,G=null,V=-1,d=null,L=new xe,f=new xe,C=null,Z=new ct(0),w=0,v=e.width,D=e.height,Y=1,at=null,lt=null,ut=new xe(0,0,v,D),It=new xe(0,0,v,D),gt=!1,Pt=new Hl,Qt=!1,H=!1,Q=new pe,Kt=new O,At=new xe,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function qe(){return G===null?Y:1}let j=a;function ft(y,E){return e.getContext(y,E)}try{let y={alpha:!0,depth:l,stencil:r,antialias:n,premultipliedAlpha:i,preserveDrawingBuffer:s,powerPreference:o,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),j===null){let E="webgl2";if(j=ft(E,y),j===null)throw ft(E)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Vt,bt,dt,ae,Nt,vt,Je,Ve,A,T,g,_,et,B,Mt,kt,Tt,Rt,St,qt,wt,Et,mt,Bt;function M(){Vt=new vJ(j),Vt.init(),Et=new dV(j,Vt),bt=new fJ(j,Vt,t,Et),dt=new qV(j,Vt),bt.reversedDepthBuffer&&k&&dt.buffers.depth.setReversed(!0),ae=new XJ(j),Nt=new lV,vt=new VV(j,Vt,dt,Nt,bt,Et,ae),Je=new EJ(W),Ve=new ZJ(W),A=new Db(j),mt=new OJ(j,A),T=new YJ(j,A,ae,mt),g=new PJ(j,T,A,ae),St=new HJ(j,bt,vt),kt=new MJ(Nt),_=new SV(W,Je,Ve,Vt,bt,mt,kt),et=new mV(W,Nt),B=new pV,Mt=new kV(Vt),Rt=new IJ(W,Je,Ve,dt,g,b,i),Tt=new UV(W,g,bt),Bt=new yV(j,ae,bt,dt),qt=new GJ(j,Vt,ae),wt=new wJ(j,Vt,ae),ae.programs=_.programs,W.capabilities=bt,W.extensions=Vt,W.properties=Nt,W.renderLists=B,W.shadowMap=Tt,W.state=dt,W.info=ae}M();let ot=new hs(W,j);this.xr=ot,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let y=Vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(v,D,!1))},this.getSize=function(y){return y.set(v,D)},this.setSize=function(y,E,X=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}v=y,D=E,e.width=Math.floor(y*Y),e.height=Math.floor(E*Y),X===!0&&(e.style.width=y+"px",e.style.height=E+"px"),this.setViewport(0,0,y,E)},this.getDrawingBufferSize=function(y){return y.set(v*Y,D*Y).floor()},this.setDrawingBufferSize=function(y,E,X){v=y,D=E,Y=X,e.width=Math.floor(y*X),e.height=Math.floor(E*X),this.setViewport(0,0,y,E)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,E,X,P){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,E,X,P),dt.viewport(L.copy(ut).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,E,X,P){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,E,X,P),dt.scissor(f.copy(It).multiplyScalar(Y).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(y){dt.setScissorTest(gt=y)},this.setOpaqueSort=function(y){at=y},this.setTransparentSort=function(y){lt=y},this.getClearColor=function(y){return y.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(y=!0,E=!0,X=!0){let P=0;if(y){let F=!1;if(G!==null){let pt=G.texture.format;F=pt===bn||pt===kn||pt===cn}if(F){let pt=G.texture.type,ht=pt===Ia||pt===Za||pt===zl||pt===Bl||pt===nn||pt===sn,z=Rt.getClearColor(),nt=Rt.getClearAlpha(),it=z.r,Gt=z.g,jt=z.b;ht?(J[0]=it,J[1]=Gt,J[2]=jt,J[3]=nt,j.clearBufferuiv(j.COLOR,0,J)):(q[0]=it,q[1]=Gt,q[2]=jt,q[3]=nt,j.clearBufferiv(j.COLOR,0,q))}else P|=j.COLOR_BUFFER_BIT}E&&(P|=j.DEPTH_BUFFER_BIT),X&&(P|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Rt.dispose(),B.dispose(),Mt.dispose(),Nt.dispose(),Je.dispose(),Ve.dispose(),g.dispose(),mt.dispose(),Bt.dispose(),_.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ct),ot.removeEventListener("sessionend",Zt),Oe.stop()};function Ut(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let y=ae.autoReset,E=Tt.enabled,X=Tt.autoUpdate,P=Tt.needsUpdate,F=Tt.type;M(),ae.autoReset=y,Tt.enabled=E,Tt.autoUpdate=X,Tt.needsUpdate=P,Tt.type=F}function rt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $(y){let E=y.target;E.removeEventListener("dispose",$),m(E)}function m(y){tt(y),Nt.remove(y)}function tt(y){let E=Nt.get(y).programs;E!==void 0&&(E.forEach(function(X){_.releaseProgram(X)}),y.isShaderMaterial&&_.releaseShaderCache(y))}this.renderBufferDirect=function(y,E,X,P,F,pt){E===null&&(E=xt);let ht=F.isMesh&&F.matrixWorld.determinant()<0,z=uS(y,E,X,P,F);dt.setMaterial(P,ht);let nt=X.index,it=1;if(P.wireframe===!0){if(nt=T.getWireframeAttribute(X),nt===void 0)return;it=2}let Gt=X.drawRange,jt=X.attributes.position,te=Gt.start*it,se=(Gt.start+Gt.count)*it;pt!==null&&(te=Math.max(te,pt.start*it),se=Math.min(se,(pt.start+pt.count)*it)),nt!==null?(te=Math.max(te,0),se=Math.min(se,nt.count)):jt!=null&&(te=Math.max(te,0),se=Math.min(se,jt.count));let Ne=se-te;if(Ne<0||Ne===1/0)return;mt.setup(F,P,z,X,nt);let de,ue=qt;if(nt!==null&&(de=A.get(nt),ue=wt,ue.setIndex(de)),F.isMesh)P.wireframe===!0?(dt.setLineWidth(P.wireframeLinewidth*qe()),ue.setMode(j.LINES)):ue.setMode(j.TRIANGLES);else if(F.isLine){let Xt=P.linewidth;Xt===void 0&&(Xt=1),dt.setLineWidth(Xt*qe()),F.isLineSegments?ue.setMode(j.LINES):F.isLineLoop?ue.setMode(j.LINE_LOOP):ue.setMode(j.LINE_STRIP)}else F.isPoints?ue.setMode(j.POINTS):F.isSprite&&ue.setMode(j.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)gl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Xt=F._multiDrawStarts,ye=F._multiDrawCounts,re=F._multiDrawCount,oa=nt?A.get(nt).bytesPerElement:1,Tl=Nt.get(P).currentProgram.getUniforms();for(let ca=0;ca<re;ca++)Tl.setValue(j,"_gl_DrawID",ca),ue.render(Xt[ca]/oa,ye[ca])}else if(F.isInstancedMesh)ue.renderInstances(te,Ne,F.count);else if(X.isInstancedBufferGeometry){let Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ye=Math.min(X.instanceCount,Xt);ue.renderInstances(te,Ne,ye)}else ue.render(te,Ne)};function yt(y,E,X){y.transparent===!0&&y.side===fe&&y.forceSinglePass===!1?(y.side=aa,y.needsUpdate=!0,ZS(y,E,X),y.side=_a,y.needsUpdate=!0,ZS(y,E,X),y.side=fe):ZS(y,E,X)}this.compile=function(y,E,X=null){X===null&&(X=y),u=Mt.get(X),u.init(E),K.push(u),X.traverseVisible(function(F){F.isLight&&F.layers.test(E.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),y!==X&&y.traverseVisible(function(F){F.isLight&&F.layers.test(E.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();let P=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let pt=F.material;if(pt)if(Array.isArray(pt))for(let ht=0;ht<pt.length;ht++){let z=pt[ht];yt(z,X,F),P.add(z)}else yt(pt,X,F),P.add(pt)}),u=K.pop(),P},this.compileAsync=function(y,E,X=null){let P=this.compile(y,E,X);return new Promise(F=>{function pt(){if(P.forEach(function(ht){Nt.get(ht).currentProgram.isReady()&&P.delete(ht)}),P.size===0){F(y);return}setTimeout(pt,10)}Vt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let R=null;function Ot(y){R&&R(y)}function Ct(){Oe.stop()}function Zt(){Oe.start()}let Oe=new Zc;Oe.setAnimationLoop(Ot),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(y){R=y,ot.setAnimationLoop(y),y===null?Oe.stop():Oe.start()},ot.addEventListener("sessionstart",Ct),ot.addEventListener("sessionend",Zt),this.render=function(y,E){if(E!==void 0&&E.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(E),E=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(W,y,E,G),u=Mt.get(y,K.length),u.init(E),K.push(u),Q.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),Pt.setFromProjectionMatrix(Q,Na,E.reversedDepth),H=this.localClippingEnabled,Qt=kt.init(this.clippingPlanes,H),U=B.get(y,x.length),U.init(),x.push(U),ot.enabled===!0&&ot.isPresenting===!0){let pt=W.xr.getDepthSensingMesh();pt!==null&&Ea(pt,E,-1/0,W.sortObjects)}Ea(y,E,0,W.sortObjects),U.finish(),W.sortObjects===!0&&U.sort(at,lt),zt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,zt&&Rt.addToRenderList(U,y),this.info.render.frame++,Qt===!0&&kt.beginShadows();let X=u.state.shadowsArray;Tt.render(X,y,E),Qt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();let P=U.opaque,F=U.transmissive;if(u.setupLights(),E.isArrayCamera){let pt=E.cameras;if(F.length>0)for(let ht=0,z=pt.length;ht<z;ht++){let nt=pt[ht];la(P,F,y,nt)}zt&&Rt.render(y);for(let ht=0,z=pt.length;ht<z;ht++){let nt=pt[ht];Fe(U,y,nt,nt.viewport)}}else F.length>0&&la(P,F,y,E),zt&&Rt.render(y),Fe(U,y,E);G!==null&&I===0&&(vt.updateMultisampleRenderTarget(G),vt.updateRenderTargetMipmap(G)),y.isScene===!0&&y.onAfterRender(W,y,E),mt.resetDefaultState(),V=-1,d=null,K.pop(),K.length>0?(u=K[K.length-1],Qt===!0&&kt.setGlobalState(W.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?U=x[x.length-1]:U=null};function Ea(y,E,X,P){if(y.visible===!1)return;if(y.layers.test(E.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(E);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Pt.intersectsSprite(y)){P&&At.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);let ht=g.update(y),z=y.material;z.visible&&U.push(y,ht,z,X,At.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Pt.intersectsObject(y))){let ht=g.update(y),z=y.material;if(P&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),At.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),At.copy(ht.boundingSphere.center)),At.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(z)){let nt=ht.groups;for(let it=0,Gt=nt.length;it<Gt;it++){let jt=nt[it],te=z[jt.materialIndex];te&&te.visible&&U.push(y,ht,te,X,At.z,jt)}}else z.visible&&U.push(y,ht,z,X,At.z,null)}}let pt=y.children;for(let ht=0,z=pt.length;ht<z;ht++)Ea(pt[ht],E,X,P)}function Fe(y,E,X,P){let F=y.opaque,pt=y.transmissive,ht=y.transparent;u.setupLightsView(X),Qt===!0&&kt.setGlobalState(W.clippingPlanes,X),P&&dt.viewport(L.copy(P)),F.length>0&&ma(F,E,X),pt.length>0&&ma(pt,E,X),ht.length>0&&ma(ht,E,X),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function la(y,E,X,P){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[P.id]===void 0&&(u.state.transmissionRenderTarget[P.id]=new da(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?LS:Ia,minFilter:RS,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));let pt=u.state.transmissionRenderTarget[P.id],ht=P.viewport||L;pt.setSize(ht.z*W.transmissionResolutionScale,ht.w*W.transmissionResolutionScale);let z=W.getRenderTarget(),nt=W.getActiveCubeFace(),it=W.getActiveMipmapLevel();W.setRenderTarget(pt),W.getClearColor(Z),w=W.getClearAlpha(),w<1&&W.setClearColor(16777215,.5),W.clear(),zt&&Rt.render(X);let Gt=W.toneMapping;W.toneMapping=rS;let jt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),u.setupLightsView(P),Qt===!0&&kt.setGlobalState(W.clippingPlanes,P),ma(y,X,P),vt.updateMultisampleRenderTarget(pt),vt.updateRenderTargetMipmap(pt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let se=0,Ne=E.length;se<Ne;se++){let de=E[se],ue=de.object,Xt=de.geometry,ye=de.material,re=de.group;if(ye.side===fe&&ue.layers.test(P.layers)){let oa=ye.side;ye.side=aa,ye.needsUpdate=!0,kr(ue,X,P,Xt,ye,re),ye.side=oa,ye.needsUpdate=!0,te=!0}}te===!0&&(vt.updateMultisampleRenderTarget(pt),vt.updateRenderTargetMipmap(pt))}W.setRenderTarget(z,nt,it),W.setClearColor(Z,w),jt!==void 0&&(P.viewport=jt),W.toneMapping=Gt}function ma(y,E,X){let P=E.isScene===!0?E.overrideMaterial:null;for(let F=0,pt=y.length;F<pt;F++){let ht=y[F],z=ht.object,nt=ht.geometry,it=ht.group,Gt=ht.material;Gt.allowOverride===!0&&P!==null&&(Gt=P),z.layers.test(X.layers)&&kr(z,E,X,nt,Gt,it)}}function kr(y,E,X,P,F,pt){y.onBeforeRender(W,E,X,P,F,pt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(W,E,X,P,y,pt),F.transparent===!0&&F.side===fe&&F.forceSinglePass===!1?(F.side=aa,F.needsUpdate=!0,W.renderBufferDirect(X,E,P,F,y,pt),F.side=_a,F.needsUpdate=!0,W.renderBufferDirect(X,E,P,F,y,pt),F.side=fe):W.renderBufferDirect(X,E,P,F,y,pt),y.onAfterRender(W,E,X,P,F,pt)}function ZS(y,E,X){E.isScene!==!0&&(E=xt);let P=Nt.get(y),F=u.state.lights,pt=u.state.shadowsArray,ht=F.state.version,z=_.getParameters(y,F.state,pt,E,X),nt=_.getProgramCacheKey(z),it=P.programs;P.environment=y.isMeshStandardMaterial?E.environment:null,P.fog=E.fog,P.envMap=(y.isMeshStandardMaterial?Ve:Je).get(y.envMap||P.environment),P.envMapRotation=P.environment!==null&&y.envMap===null?E.environmentRotation:y.envMapRotation,it===void 0&&(y.addEventListener("dispose",$),it=new Map,P.programs=it);let Gt=it.get(nt);if(Gt!==void 0){if(P.currentProgram===Gt&&P.lightsStateVersion===ht)return vS(y,z),Gt}else z.uniforms=_.getUniforms(y),y.onBeforeCompile(z,W),Gt=_.acquireProgram(z,nt),it.set(nt,Gt),P.uniforms=z.uniforms;let jt=P.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(jt.clippingPlanes=kt.uniform),vS(y,z),P.needsLights=dl(y),P.lightsStateVersion=ht,P.needsLights&&(jt.ambientLightColor.value=F.state.ambient,jt.lightProbe.value=F.state.probe,jt.directionalLights.value=F.state.directional,jt.directionalLightShadows.value=F.state.directionalShadow,jt.spotLights.value=F.state.spot,jt.spotLightShadows.value=F.state.spotShadow,jt.rectAreaLights.value=F.state.rectArea,jt.ltc_1.value=F.state.rectAreaLTC1,jt.ltc_2.value=F.state.rectAreaLTC2,jt.pointLights.value=F.state.point,jt.pointLightShadows.value=F.state.pointShadow,jt.hemisphereLights.value=F.state.hemi,jt.directionalShadowMap.value=F.state.directionalShadowMap,jt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,jt.spotShadowMap.value=F.state.spotShadowMap,jt.spotLightMatrix.value=F.state.spotLightMatrix,jt.spotLightMap.value=F.state.spotLightMap,jt.pointShadowMap.value=F.state.pointShadowMap,jt.pointShadowMatrix.value=F.state.pointShadowMatrix),P.currentProgram=Gt,P.uniformsList=null,Gt}function Be(y){if(y.uniformsList===null){let E=y.currentProgram.getUniforms();y.uniformsList=ar.seqWithValue(E.seq,y.uniforms)}return y.uniformsList}function vS(y,E){let X=Nt.get(y);X.outputColorSpace=E.outputColorSpace,X.batching=E.batching,X.batchingColor=E.batchingColor,X.instancing=E.instancing,X.instancingColor=E.instancingColor,X.instancingMorph=E.instancingMorph,X.skinning=E.skinning,X.morphTargets=E.morphTargets,X.morphNormals=E.morphNormals,X.morphColors=E.morphColors,X.morphTargetsCount=E.morphTargetsCount,X.numClippingPlanes=E.numClippingPlanes,X.numIntersection=E.numClipIntersection,X.vertexAlphas=E.vertexAlphas,X.vertexTangents=E.vertexTangents,X.toneMapping=E.toneMapping}function uS(y,E,X,P,F){E.isScene!==!0&&(E=xt),vt.resetTextureUnits();let pt=E.fog,ht=P.isMeshStandardMaterial?E.environment:null,z=G===null?W.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:_S,nt=(P.isMeshStandardMaterial?Ve:Je).get(P.envMap||ht),it=P.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),jt=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,se=!!X.morphAttributes.color,Ne=rS;P.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ne=W.toneMapping);let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=de!==void 0?de.length:0,Xt=Nt.get(P),ye=u.state.lights;if(Qt===!0&&(H===!0||y!==d)){let De=y===d&&P.id===V;kt.setState(P,y,De)}let re=!1;P.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ye.state.version||Xt.outputColorSpace!==z||F.isBatchedMesh&&Xt.batching===!1||!F.isBatchedMesh&&Xt.batching===!0||F.isBatchedMesh&&Xt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Xt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Xt.instancing===!1||!F.isInstancedMesh&&Xt.instancing===!0||F.isSkinnedMesh&&Xt.skinning===!1||!F.isSkinnedMesh&&Xt.skinning===!0||F.isInstancedMesh&&Xt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Xt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Xt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Xt.instancingMorph===!1&&F.morphTexture!==null||Xt.envMap!==nt||P.fog===!0&&Xt.fog!==pt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==kt.numPlanes||Xt.numIntersection!==kt.numIntersection)||Xt.vertexAlphas!==it||Xt.vertexTangents!==Gt||Xt.morphTargets!==jt||Xt.morphNormals!==te||Xt.morphColors!==se||Xt.toneMapping!==Ne||Xt.morphTargetsCount!==ue)&&(re=!0):(re=!0,Xt.__version=P.version);let oa=Xt.currentProgram;re===!0&&(oa=ZS(P,E,F));let Tl=!1,ca=!1,br=!1,he=oa.getUniforms(),Ua=Xt.uniforms;if(dt.useProgram(oa.program)&&(Tl=!0,ca=!0,br=!0),P.id!==V&&(V=P.id,ca=!0),Tl||d!==y){dt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(j,"projectionMatrix",y.projectionMatrix),he.setValue(j,"viewMatrix",y.matrixWorldInverse);let ra=he.map.cameraPosition;ra!==void 0&&ra.setValue(j,Kt.setFromMatrixPosition(y.matrixWorld)),bt.logarithmicDepthBuffer&&he.setValue(j,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&he.setValue(j,"isOrthographic",y.isOrthographicCamera===!0),d!==y&&(d=y,ca=!0,br=!0)}if(F.isSkinnedMesh){he.setOptional(j,F,"bindMatrix"),he.setOptional(j,F,"bindMatrixInverse");let De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),he.setValue(j,"boneTexture",De.boneTexture,vt))}F.isBatchedMesh&&(he.setOptional(j,F,"batchingTexture"),he.setValue(j,"batchingTexture",F._matricesTexture,vt),he.setOptional(j,F,"batchingIdTexture"),he.setValue(j,"batchingIdTexture",F._indirectTexture,vt),he.setOptional(j,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(j,"batchingColorTexture",F._colorsTexture,vt));let Ja=X.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0)&&St.update(F,X,oa),(ca||Xt.receiveShadow!==F.receiveShadow)&&(Xt.receiveShadow=F.receiveShadow,he.setValue(j,"receiveShadow",F.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(Ua.envMap.value=nt,Ua.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&E.environment!==null&&(Ua.envMapIntensity.value=E.environmentIntensity),ca&&(he.setValue(j,"toneMappingExposure",W.toneMappingExposure),Xt.needsLights&&ap(Ua,br),pt&&P.fog===!0&&et.refreshFogUniforms(Ua,pt),et.refreshMaterialUniforms(Ua,P,Y,D,u.state.transmissionRenderTarget[y.id]),ar.upload(j,Be(Xt),Ua,vt)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(ar.upload(j,Be(Xt),Ua,vt),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&he.setValue(j,"center",F.center),he.setValue(j,"modelViewMatrix",F.modelViewMatrix),he.setValue(j,"normalMatrix",F.normalMatrix),he.setValue(j,"modelMatrix",F.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let De=P.uniformsGroups;for(let ra=0,ri=De.length;ra<ri;ra++){let YS=De[ra];Bt.update(YS,oa),Bt.bind(YS,oa)}}return oa}function ap(y,E){y.ambientLightColor.needsUpdate=E,y.lightProbe.needsUpdate=E,y.directionalLights.needsUpdate=E,y.directionalLightShadows.needsUpdate=E,y.pointLights.needsUpdate=E,y.pointLightShadows.needsUpdate=E,y.spotLights.needsUpdate=E,y.spotLightShadows.needsUpdate=E,y.rectAreaLights.needsUpdate=E,y.hemisphereLights.needsUpdate=E}function dl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return h},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(y,E,X){let P=Nt.get(y);P.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Nt.get(y.texture).__webglTexture=E,Nt.get(y.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:X,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,E){let X=Nt.get(y);X.__webglFramebuffer=E,X.__useDefaultFramebuffer=E===void 0};let ie=j.createFramebuffer();this.setRenderTarget=function(y,E=0,X=0){G=y,h=E,I=X;let P=!0,F=null,pt=!1,ht=!1;if(y){let nt=Nt.get(y);if(nt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(j.FRAMEBUFFER,null),P=!1;else if(nt.__webglFramebuffer===void 0)vt.setupRenderTarget(y);else if(nt.__hasExternalTextures)vt.rebindTextures(y,Nt.get(y.texture).__webglTexture,Nt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let jt=y.depthTexture;if(nt.__boundDepthTexture!==jt){if(jt!==null&&Nt.has(jt)&&(y.width!==jt.image.width||y.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(y)}}let it=y.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(ht=!0);let Gt=Nt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Gt[E])?F=Gt[E][X]:F=Gt[E],pt=!0):y.samples>0&&vt.useMultisampledRTT(y)===!1?F=Nt.get(y).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[X]:F=Gt,L.copy(y.viewport),f.copy(y.scissor),C=y.scissorTest}else L.copy(ut).multiplyScalar(Y).floor(),f.copy(It).multiplyScalar(Y).floor(),C=gt;if(X!==0&&(F=ie),dt.bindFramebuffer(j.FRAMEBUFFER,F)&&P&&dt.drawBuffers(y,F),dt.viewport(L),dt.scissor(f),dt.setScissorTest(C),pt){let nt=Nt.get(y.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+E,nt.__webglTexture,X)}else if(ht){let nt=E;for(let it=0;it<y.textures.length;it++){let Gt=Nt.get(y.textures[it]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+it,Gt.__webglTexture,X,nt)}}else if(y!==null&&X!==0){let nt=Nt.get(y.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,nt.__webglTexture,X)}V=-1},this.readRenderTargetPixels=function(y,E,X,P,F,pt,ht,z=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(nt=nt[ht]),nt){dt.bindFramebuffer(j.FRAMEBUFFER,nt);try{let it=y.textures[z],Gt=it.format,jt=it.type;if(!bt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=y.width-P&&X>=0&&X<=y.height-F&&(y.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+z),j.readPixels(E,X,P,F,Et.convert(Gt),Et.convert(jt),pt))}finally{let it=G!==null?Nt.get(G).__webglFramebuffer:null;dt.bindFramebuffer(j.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(y,E,X,P,F,pt,ht,z=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=Nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(nt=nt[ht]),nt)if(E>=0&&E<=y.width-P&&X>=0&&X<=y.height-F){dt.bindFramebuffer(j.FRAMEBUFFER,nt);let it=y.textures[z],Gt=it.format,jt=it.type;if(!bt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,te),j.bufferData(j.PIXEL_PACK_BUFFER,pt.byteLength,j.STREAM_READ),y.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+z),j.readPixels(E,X,P,F,Et.convert(Gt),Et.convert(jt),0);let se=G!==null?Nt.get(G).__webglFramebuffer:null;dt.bindFramebuffer(j.FRAMEBUFFER,se);let Ne=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Uc(j,Ne,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,te),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,pt),j.deleteBuffer(te),j.deleteSync(Ne),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,E=null,X=0){let P=Math.pow(2,-X),F=Math.floor(y.image.width*P),pt=Math.floor(y.image.height*P),ht=E!==null?E.x:0,z=E!==null?E.y:0;vt.setTexture2D(y,0),j.copyTexSubImage2D(j.TEXTURE_2D,X,0,0,ht,z,F,pt),dt.unbindTexture()};let Kl=j.createFramebuffer(),Wl=j.createFramebuffer();this.copyTextureToTexture=function(y,E,X=null,P=null,F=0,pt=null){pt===null&&(F!==0?(gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=F,F=0):pt=0);let ht,z,nt,it,Gt,jt,te,se,Ne,de=y.isCompressedTexture?y.mipmaps[pt]:y.image;if(X!==null)ht=X.max.x-X.min.x,z=X.max.y-X.min.y,nt=X.isBox3?X.max.z-X.min.z:1,it=X.min.x,Gt=X.min.y,jt=X.isBox3?X.min.z:0;else{let Ja=Math.pow(2,-F);ht=Math.floor(de.width*Ja),z=Math.floor(de.height*Ja),y.isDataArrayTexture?nt=de.depth:y.isData3DTexture?nt=Math.floor(de.depth*Ja):nt=1,it=0,Gt=0,jt=0}P!==null?(te=P.x,se=P.y,Ne=P.z):(te=0,se=0,Ne=0);let ue=Et.convert(E.format),Xt=Et.convert(E.type),ye;E.isData3DTexture?(vt.setTexture3D(E,0),ye=j.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(vt.setTexture2DArray(E,0),ye=j.TEXTURE_2D_ARRAY):(vt.setTexture2D(E,0),ye=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,E.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,E.unpackAlignment);let re=j.getParameter(j.UNPACK_ROW_LENGTH),oa=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Tl=j.getParameter(j.UNPACK_SKIP_PIXELS),ca=j.getParameter(j.UNPACK_SKIP_ROWS),br=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,de.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,de.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,it),j.pixelStorei(j.UNPACK_SKIP_ROWS,Gt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,jt);let he=y.isDataArrayTexture||y.isData3DTexture,Ua=E.isDataArrayTexture||E.isData3DTexture;if(y.isDepthTexture){let Ja=Nt.get(y),De=Nt.get(E),ra=Nt.get(Ja.__renderTarget),ri=Nt.get(De.__renderTarget);dt.bindFramebuffer(j.READ_FRAMEBUFFER,ra.__webglFramebuffer),dt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let YS=0;YS<nt;YS++)he&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Nt.get(y).__webglTexture,F,jt+YS),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Nt.get(E).__webglTexture,pt,Ne+YS)),j.blitFramebuffer(it,Gt,ht,z,te,se,ht,z,j.DEPTH_BUFFER_BIT,j.NEAREST);dt.bindFramebuffer(j.READ_FRAMEBUFFER,null),dt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||Nt.has(y)){let Ja=Nt.get(y),De=Nt.get(E);dt.bindFramebuffer(j.READ_FRAMEBUFFER,Kl),dt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Wl);for(let ra=0;ra<nt;ra++)he?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ja.__webglTexture,F,jt+ra):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ja.__webglTexture,F),Ua?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,De.__webglTexture,pt,Ne+ra):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,De.__webglTexture,pt),F!==0?j.blitFramebuffer(it,Gt,ht,z,te,se,ht,z,j.COLOR_BUFFER_BIT,j.NEAREST):Ua?j.copyTexSubImage3D(ye,pt,te,se,Ne+ra,it,Gt,ht,z):j.copyTexSubImage2D(ye,pt,te,se,it,Gt,ht,z);dt.bindFramebuffer(j.READ_FRAMEBUFFER,null),dt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ua?y.isDataTexture||y.isData3DTexture?j.texSubImage3D(ye,pt,te,se,Ne,ht,z,nt,ue,Xt,de.data):E.isCompressedArrayTexture?j.compressedTexSubImage3D(ye,pt,te,se,Ne,ht,z,nt,ue,de.data):j.texSubImage3D(ye,pt,te,se,Ne,ht,z,nt,ue,Xt,de):y.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,pt,te,se,ht,z,ue,Xt,de.data):y.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,pt,te,se,de.width,de.height,ue,de.data):j.texSubImage2D(j.TEXTURE_2D,pt,te,se,ht,z,ue,Xt,de);j.pixelStorei(j.UNPACK_ROW_LENGTH,re),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,oa),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Tl),j.pixelStorei(j.UNPACK_SKIP_ROWS,ca),j.pixelStorei(j.UNPACK_SKIP_IMAGES,br),pt===0&&E.generateMipmaps&&j.generateMipmap(ye),dt.unbindTexture()},this.initRenderTarget=function(y){Nt.get(y).__webglFramebuffer===void 0&&vt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?vt.setTextureCube(y,0):y.isData3DTexture?vt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?vt.setTexture2DArray(y,0):vt.setTexture2D(y,0),dt.unbindTexture()},this.resetState=function(){h=0,I=0,G=null,dt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};function Wa(S){return()=>{S|=0,S=S+1831565813|0;let t=Math.imul(S^S>>>15,1|S);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var OS=Wa(34191),Yt=(S,t)=>S+(t-S)*OS(),Ft=(S,t,e)=>new O(S,t,e);function IS(S,t,e){let a=Math.sin(S*127.1+t*311.7+e*74.7)*43758.5453123;return a-Math.floor(a)}function Ns(S,t,e){let a=Math.floor(S),l=Math.floor(t),r=Math.floor(e),p=S-a,n=t-l,i=e-r;p*=p*(3-2*p),n*=n*(3-2*n),i*=i*(3-2*i);let s=Ht.lerp;return s(s(s(IS(a,l,r),IS(a+1,l,r),p),s(IS(a,l+1,r),IS(a+1,l+1,r),p),n),s(s(IS(a,l,r+1),IS(a+1,l,r+1),p),s(IS(a,l+1,r+1),IS(a+1,l+1,r+1),p),n),i)}function Hc(S,t){let e=.3-.25*t,a=Math.max(.45,1.45+.25*t);return Math.exp(-(((S-e)/a)**2))}function Re(S,t){return .12+.055*Math.sin(S*1.8+t)+.045*Math.sin(t*2.3-S*.7)+.34*Math.max(0,-t/5)+.14*Math.exp(-((S+5)**2/5+(t+1)**2/4))-.2*Hc(S,t)}var ne=(S,t,e)=>{let a=Ht.clamp((e-S)/(t-S),0,1);return a*a*(3-2*a)},Qn=class{constructor(){this.positions=[],this.uvs=[],this.colors=[],this.indices=[],this.anchors=[],this.bend=[],this.along=[],this.thin=[]}vertex(t,e,a,l,r,p=0){let n=this.positions.length/3;this.positions.push(t.x,t.y,t.z),this.uvs.push(...e),this.colors.push(a.r,a.g,a.b),this.anchors.push(l.x,l.y,l.z);let{direction:i,tangent:s,distance:o,compliance:c}=r;return this.bend.push(i.x,i.y,i.z,c),this.along.push(s.x,s.y,s.z,o),this.thin.push(p),n}quad(t,e,a,l){this.indices.push(t,a,e,e,a,l)}geometry(){let t=new Ze;return t.setAttribute("position",new le(this.positions,3)),t.setAttribute("uv",new le(this.uvs,2)),t.setAttribute("color",new le(this.colors,3)),t.setAttribute("anchor",new le(this.anchors,3)),t.setAttribute("bend",new le(this.bend,4)),t.setAttribute("along",new le(this.along,4)),t.setAttribute("thin",new le(this.thin,1)),t.setIndex(this.indices),t.computeVertexNormals(),t}};var fS={value:0},js=10,fa=new O(1,0,.22).normalize(),nS={sweep:{amplitude:.34,rate:.031},waves:[{amplitude:.15,rate:.055,kx:-.34,kz:-.19},{amplitude:.03,rate:.235,kx:1.7,kz:1.1},{amplitude:.03,rate:.155,kx:.6,kz:-2.3}]},Rs=.85,hV=S=>`vec3(${S.x.toFixed(4)}, ${S.y.toFixed(4)}, ${S.z.toFixed(4)})`,GS=S=>Number.isInteger(S)?`${S}.0`:`${S}`,Pc=({rate:S,kx:t,kz:e})=>`t * ${GS(S)} + p.x * ${GS(t)} + p.z * ${GS(e)}`,Qc=`t * ${GS(nS.sweep.rate)}`,Bn=`
  uniform float waterTime;
  const vec3 FLOW_DIRECTION = ${hV(fa)};
  float currentStrength(vec3 p, float t) {
    return ${GS(nS.sweep.amplitude)} * sin(${Qc})
      ${nS.waves.map(S=>`+ ${GS(S.amplitude)} * sin(${Pc(S)})`).join(`
      `)};
  }
  // Time integral of the strength: how far, in strength-seconds, the water at p has
  // carried anything riding it since t = 0. With the sweep this no longer grows without
  // bound -- it swings about a fixed offset, so anything riding the current returns to
  // where it started rather than being carried away for good.
  float currentTravel(vec3 p, float t) {
    return ${GS(-nS.sweep.amplitude/nS.sweep.rate)} * cos(${Qc})
      ${nS.waves.map(S=>`- ${GS(S.amplitude/S.rate)} * cos(${Pc(S)})`).join(`
      `)};
  }
`;function zc(S,t,e){let a=nS.sweep.amplitude*Math.sin(t*nS.sweep.rate);for(let{amplitude:l,rate:r,kx:p,kz:n}of nS.waves)a+=l*Math.sin(t*r+S.x*p+S.z*n);return e.copy(fa).multiplyScalar(a*Rs)}function Ls(S,t,e){return zc(S,t,e),e.lengthSq()>1e-4?e.normalize():e.copy(fa)}var As=(S,t)=>S.find(e=>t.x>e.minX&&t.x<e.maxX&&t.z>e.minZ&&t.z<e.maxZ&&t.y<e.maxY);function Pr(S,t,e,a){zc(S,t,e);let l=S.y-Re(S.x,S.z),r=.3+.7*ne(0,1.4,l);return As(a,S)&&(r*=.35),e.multiplyScalar(r)}var zn=`
  // Broad, slow changes are smooth enough to evaluate at vertices and interpolate.
  float waterLightDrift(vec3 p, float t) {
    return 1.0
      + 0.024 * sin(t * 0.145 + p.x * 0.23 + p.z * 0.12)
      + 0.012 * sin(t * 0.073 - p.x * 0.16 + p.z * 0.21 + 1.7);
  }
  vec3 waterLight(vec3 p, float t) {
    float depth = clamp(${js.toFixed(1)} - p.y, 0.5, 10.0);
    float laplacian =
      0.0110 * sin(dot(p.xz, vec2(3.1, 1.9)) - t * 3.4) +
      0.0100 * sin(dot(p.xz, vec2(-2.4, 4.2)) - t * 4.1 + 1.3) +
      0.0075 * sin(dot(p.xz, vec2(5.3, -2.6)) - t * 5.2 + 2.9) +
      0.0060 * sin(dot(p.xz, vec2(-4.1, -6.0)) - t * 6.3 + 0.7);
    float focus = 1.0 / max(0.45, 1.0 - 0.25 * depth * laplacian * 4.0);
    vec3 absorption = exp(-vec3(0.020, 0.008, 0.012) * depth);
    return focus * absorption;
  }
`;function kl(S,{perLight:t=""}={}){return S.fragmentShader.includes("RE_Direct_Water")||(S.uniforms.waterTime=fS,S.uniforms.waterLightTime=fS,S.vertexShader=S.vertexShader.replace("#include <common>",`
      #include <common>
      uniform float waterLightTime;
      varying vec3 vWaterPosition;
      varying float vWaterDrift;
      ${zn}
    `).replace("#include <worldpos_vertex>",`
      #include <worldpos_vertex>
      vec4 waterWorld = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        waterWorld = instanceMatrix * waterWorld;
      #endif
      vWaterPosition = (modelMatrix * waterWorld).xyz;
      vWaterDrift = waterLightDrift(vWaterPosition, waterLightTime);
    `),S.fragmentShader=S.fragmentShader.replace("#include <common>",`
      #include <common>
      uniform float waterTime;
      varying vec3 vWaterPosition;
      varying float vWaterDrift;
      vec3 gWaterLight = vec3(1.0);
      ${zn}
    `).replace("#include <lights_physical_pars_fragment>",`
      #include <lights_physical_pars_fragment>
      #undef RE_Direct
      void RE_Direct_Water(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
        IncidentLight lit = directLight;
        lit.color *= gWaterLight;
        RE_Direct_Physical(lit, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
        ${t}
      }
      #define RE_Direct RE_Direct_Water
    `).replace("#include <lights_fragment_begin>",`
      gWaterLight = waterLight(vWaterPosition, waterTime) * vWaterDrift;
      #include <lights_fragment_begin>
    `)),S}var fW=Math.PI*2,MW=[{center:Ft(1.55,3.07,.05),radius:1,strength:.75},{center:Ft(2.38,2.77,.15),radius:.8,strength:.6},{center:Ft(.98,3.42,-.3),radius:.65,strength:.55},{center:Ft(-.9,6.2,-.95),radius:.5,strength:.35},{center:Ft(3.55,1.7,.3),radius:.65,strength:.4},{center:Ft(-4.25,1.95,.2),radius:.5,strength:.45},{center:Ft(-6,1.1,.7),radius:.5,strength:.4},{center:Ft(6.6,1.35,-.6),radius:.5,strength:.4}],bl=[{x:4.7,z:.35,rx:1.7,ry:1.5,rz:1.15,lean:.15},{x:-4.7,z:-.35,rx:1.35,ry:1.45,rz:1,lean:-.12},{x:6.7,z:-.85,rx:1.05,ry:.82,rz:1,lean:.1},{x:-6.05,z:.55,rx:1.05,ry:.68,rz:.85,lean:-.08},{x:3.25,z:1.45,rx:.6,ry:.48,rz:.55,lean:.25,pale:!0},{x:-3.05,z:.6,rx:.5,ry:.4,rz:.45,lean:-.2},{x:.55,z:-2.6,rx:.45,ry:.36,rz:.42,lean:.15},{x:5.35,z:1.75,rx:.42,ry:.34,rz:.4,lean:.2},{x:6,z:1.3,rx:.38,ry:.3,rz:.35,lean:.2},{x:-2.1,z:1.55,rx:.3,ry:.22,rz:.28,lean:-.1}];function Is(S){return Re(S.x,S.z)+S.ry*.57-Math.abs(S.lean)*S.rx*.55}function Bc(S,{thickets:t}){let r=new Float32Array(2700),p=new Float32Array(900),n=new Float32Array(900),i=new Float32Array(900);for(let b=0;b<900;b++){let J=b>=780;if(J){let q=t.length?t[b%t.length]:null;if(q&&b%3!==0)r.set([Yt(q.minX,q.maxX),Yt(1.5,6.5),Yt(q.minZ,q.maxZ)],b*3);else{let U=Yt(-7,7),u=Yt(-1.5,2.6);r.set([U,Re(U,u)+.1,u],b*3)}i[b]=Yt(.03,.075)}else r.set([Yt(-9,9),Yt(.4,9.6),Yt(-5.4,3.4)],b*3),i[b]=.005+.038*OS()**2.4;p[b]=OS(),n[b]=J?1:0}let s=new Ze;s.setAttribute("position",new Ge(r,3)),s.setAttribute("seed",new Ge(p,1)),s.setAttribute("kind",new Ge(n,1)),s.setAttribute("size",new Ge(i,1));let o=vn.merge([Wt.lights,Wt.fog,{pixelScale:{value:1e3}}]);o.waterTime=fS;let c=new ta({uniforms:o,lights:!0,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      #include <common>
      #include <packing>
      #include <fog_pars_vertex>
      uniform float pixelScale;
      attribute float seed;
      attribute float kind;
      attribute float size;
      varying float vKind;
      varying float vFade;
      varying float vLight;
      varying vec2 vGlint;
      ${Bn}
      ${zn}
      #if NUM_DIR_LIGHT_SHADOWS > 0
        uniform mat4 directionalShadowMatrix[NUM_DIR_LIGHT_SHADOWS];
        uniform sampler2D directionalShadowMap[NUM_DIR_LIGHT_SHADOWS];
      #endif
      void main() {
        float t = waterTime;
        vec3 p = position;
        vKind = kind;
        float tumble = 1.0;
        if (kind > 0.5) {
          // Buoyancy carries a bubble up at a speed set by its size; it wobbles as it rises
          // and is released again at its origin once it reaches the surface.
          float speed = 1.2 + size * 30.0;
          float travel = ${js.toFixed(1)} - position.y;
          float period = travel / speed + 2.0 + seed * 9.0;
          float age = mod(t + seed * period, period);
          float risen = age * speed;
          p.y += min(risen, travel);
          p.x += sin(age * 6.0 + seed * 20.0) * 0.035;
          p.z += cos(age * 5.1 + seed * 17.0) * 0.03;
          vFade = smoothstep(0.0, 0.15, age) * (1.0 - step(travel, risen));
        } else {
          // Neutrally buoyant flecks ride the current, sinking a little, tumbling as they go.
          p += FLOW_DIRECTION * currentTravel(position, t) * ${Rs.toFixed(3)} * (0.75 + seed * 0.5);
          p.x = mod(p.x + 9.5, 19.0) - 9.5;
          p.z = mod(p.z + 5.6, 9.2) - 5.6;
          p.y = mod(position.y - t * (0.012 + seed * 0.02) - 0.3, 9.4) + 0.3;
          tumble = 0.35 + 0.65 * abs(sin(t * (1.1 + seed * 2.5) + seed * 40.0));
          vFade = smoothstep(9.5, 8.6, abs(p.x)) * smoothstep(0.3, 0.9, p.y) * (0.45 + 0.55 * fract(seed * 7.31));
        }
        float lit = 1.0;
        #if NUM_DIR_LIGHT_SHADOWS > 0
          vec4 shadowCoord = directionalShadowMatrix[0] * vec4(p, 1.0);
          shadowCoord.xyz /= shadowCoord.w;
          if (all(greaterThan(shadowCoord.xy, vec2(0.0))) && all(lessThan(shadowCoord.xy, vec2(1.0)))) {
            float occluder = unpackRGBAToDepth(texture2D(directionalShadowMap[0], shadowCoord.xy));
            lit = shadowCoord.z - 0.0015 <= occluder ? 1.0 : 0.0;
          }
        #endif
        vec3 water = waterLight(p, t) * waterLightDrift(p, t);
        vLight = (0.08 + 0.92 * lit) * water.g * tumble;
        vGlint = vec2(-0.16, 0.2);
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = max(1.3, size * pixelScale / -mvPosition.z);
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      varying float vKind;
      varying float vFade;
      varying float vLight;
      varying vec2 vGlint;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float r = length(c) * 2.0;
        if (r > 1.0 || vFade <= 0.0) discard;
        vec3 color;
        float alpha;
        if (vKind > 0.5) {
          // An air sphere: light refracts around a dark rim, and a bright glint faces the lamp.
          float rim = smoothstep(0.5, 1.0, r);
          float glint = exp(-dot(c - vGlint, c - vGlint) * 55.0);
          color = mix(vec3(0.22, 0.27, 0.22), vec3(0.02, 0.03, 0.02), rim) * (0.4 + 0.6 * vLight) + glint * 3.2 * vLight;
          alpha = (0.3 + 0.6 * rim) * vFade;
        } else {
          // A matte fleck: bright in the beam, invisible in shade; some are darker plant
          // fragments, some pale mulm.
          color = vec3(0.62, 0.64, 0.5) * vLight * (1.2 + 2.4 * vFade);
          alpha = (1.0 - smoothstep(0.15, 1.0, r)) * vFade * 0.72;
        }
        gl_FragColor = vec4(color, alpha);
        #include <fog_fragment>
      }`}),k=new Or(s,c);return k.frustumCulled=!1,S.add(k),{update(b){o.pixelScale.value=b}}}var Te=Math.PI*2,Dc=`
  attribute vec3 anchor;
  attribute vec4 bend;
  attribute vec4 along;
  attribute float thin;
  varying float vThin;
  ${Bn}
  vec2 strandMotion(vec3 root, vec3 direction, float s, float compliance) {
    float strength = currentStrength(root, waterTime);
    float seed = fract(sin(root.x * 12.9898 + root.z * 78.233) * 43758.5453);
    float phase = seed * 6.2832 + root.x * 0.9;
    float drag = compliance * dot(FLOW_DIRECTION, direction) * strength;
    float saturation = 1.0 + 0.06 * s * s;
    float bendAmount = drag * 0.09 * s * s / saturation;
    float bendSlope = drag * 0.18 * s / (saturation * saturation);
    float gain = compliance * (0.012 + 0.02 * strength);
    float safeS = max(s, 1e-4);
    float sPower = pow(safeS, 0.3);
    float envelope = gain * safeS * sPower;
    float envelopeSlope = gain * 1.3 * sPower;
    float theta = waterTime * 0.95 - 1.05 * s + phase;
    float ripple = waterTime * 1.55 - 1.7 * s + phase * 2.3;
    float shape = sin(theta) + 0.3 * sin(ripple);
    float wave = envelope * shape;
    float waveSlope = envelopeSlope * shape - envelope * (1.05 * cos(theta) + 0.51 * cos(ripple));
    return vec2(bendAmount + wave, bendSlope + waveSlope);
  }
  vec2 gMotion;
`,xV=`
  gMotion = strandMotion(anchor, bend.xyz, along.w, bend.w);
  vec3 objectNormal = normalize(normal - along.xyz * (gMotion.y * dot(bend.xyz, normal)));
`,_c=`
  vec3 transformed = position + bend.xyz * gMotion.x;
  vThin = thin;
`;function $c(){let S=new el({color:16777215,roughness:.58,metalness:0,specularIntensity:.07,side:fe,vertexColors:!0,alphaToCoverage:!0});return S.onBeforeCompile=t=>{t.vertexShader=Dc+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",xV).replace("#include <begin_vertex>",`${_c}
      leafUv = uv; leafPosition = position;`),t.vertexShader=`varying vec2 leafUv; varying vec3 leafPosition;
`+t.vertexShader,t.fragmentShader=`varying vec2 leafUv; varying vec3 leafPosition; varying float vThin;
    `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      // The midrib highlight fades once a leaf is only a few pixels wide, so needle
      // leaves do not clip to white specks.
      float midrib = (1.0 - smoothstep(.008, .035, abs(leafUv.x - .5))) * (1.0 - smoothstep(.02, .06, fwidth(leafUv.x)));
      float veins = pow(.5 + .5 * cos((leafUv.y - abs(leafUv.x - .5) * .32) * 155.0), 22.0);
      float edge = pow(abs(leafUv.x - .5) * 2.0, 5.0);
      float mottling = .965 + .035 * sin(leafUv.y * 64.0 + sin(leafUv.x * 25.0));
      diffuseColor.rgb *= mottling * (1.0 - .09 * edge + .12 * veins);
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.22 + vec3(.008,.012,0.), midrib * .6);
      // Leaf undersides are paler and warmer than the upper surface.
      if (!gl_FrontFacing) diffuseColor.rgb *= vec3(.82, .76, .66);
      // Thin tissue lets part of the scene behind show through. Coverage is held to exact
      // quarters of the four multisamples so the driver never dithers it into a pattern:
      // ribbon leaves pass a quarter of the light, their thinner edges half.
      diffuseColor.a = vThin < .7 ? 1.0 : (edge > .45 ? .5 : .75);
    `),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      float rib = exp(-pow((leafUv.x-.5)*60.,2.))*.0015;
      float veinHeight = pow(.5+.5*cos((leafUv.y-abs(leafUv.x-.5)*.32)*155.),16.)*.00025;
      float detailFade = 1.-smoothstep(.003,.012,max(fwidth(leafUv.x),fwidth(leafUv.y)));
      float micro = sin(leafUv.x*230.)*sin(leafUv.y*310.)*.00003*detailFade;
      float surfaceHeight = rib + veinHeight + micro;
      vec3 dp1=dFdx(-vViewPosition),dp2=dFdy(-vViewPosition);
      vec3 r1=cross(dp2,normal),r2=cross(normal,dp1);
      float det=dot(dp1,r1);
      normal=normalize(abs(det)*normal-sign(det)*(dFdx(surfaceHeight)*r1+dFdy(surfaceHeight)*r2));
    `),kl(t,{perLight:`
        float backLight = saturate(dot(-geometryNormal, lit.direction));
        reflectedLight.directDiffuse += lit.color * backLight * RECIPROCAL_PI * material.diffuseColor * vec3(.55, .85, .30) * (vThin * .9);
      `})},S.customProgramCacheKey=()=>"aquatic-leaves-v2",S}function tk({animated:S=!0}={}){let t=new xS({depthPacking:_l,side:fe});return t.onBeforeCompile=e=>{S&&(e.uniforms.waterTime=fS),e.vertexShader=Dc+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`gMotion = strandMotion(anchor, bend.xyz, along.w, bend.w);
      ${_c}`)},t.customProgramCacheKey=()=>"aquatic-leaf-shadow-v3",t}function ul(S,t,e,a){let l=S.getTangent(t),r=fa.clone().addScaledVector(l,-fa.dot(l));return r.lengthSq()<1e-4&&r.crossVectors(l,Ft(0,1,0)),{direction:r.normalize(),tangent:l,distance:t*e,compliance:a}}function Dn(S,t,e,a,l,r,{rows:p=12,cols:n=4,twist:i=0,ribbon:s=!1,thin:o=.3,attached:c=null,browning:k=0,emit:b=!0}={}){let J=Yt(0,Te),q=s?Yt(-.7,.7):Yt(-.12,.12);if(!b)return;let U=t.length===3?new hS(...t):s&&t.length===4?new Ca(...t):new ea(t),u=U.getLength(),x=S.positions.length/3,K=new ct("#6b5a2a");for(let W=0;W<=p;W++){let N=W/p,h=U.getPoint(N),I=U.getTangent(N),G=i+q*N,V=Ft(Math.cos(G),0,Math.sin(G));V.addScaledVector(I,-V.dot(I)).normalize();let d=new O().crossVectors(V,I).normalize(),L=s?Math.pow(Math.sin(Math.PI*Math.pow(N,.58)),.34):Math.pow(Math.sin(Math.PI*Math.pow(N,.73)),.76),f=e*Math.max(.005,L),C=c||{direction:d,tangent:I,distance:N*u,compliance:r},Z=a.clone().multiplyScalar(.86+.14*Math.sin(Math.PI*N*.9));k&&Z.lerp(K,ne(1-k,1,N)*.8);for(let w=0;w<=n;w++){let v=w/n*2-1,D=1+.016*Math.sin(N*25+J)*v*v,Y=h.clone().addScaledVector(V,v*f*D);if(Y.addScaledVector(d,f*(.19*v*v+.045*Math.sin(N*15+J)*Math.abs(v))),S.vertex(Y,[w/n,N],Z,l,C,o),W<p&&w<n){let at=x+W*(n+1)+w;S.quad(at,at+1,at+n+1,at+n+2)}}}}function Os(S,t,e,a,l,r,p=null){let n=new ea(t),i=n.getLength(),s=Math.max(4,t.length*3),o=5,c=S.positions.length/3;for(let k=0;k<=s;k++){let b=k/s,J=n.getPoint(b),q=n.getTangent(b),U=new O().crossVectors(q,Ft(.2,.01,1)).normalize(),u=new O().crossVectors(q,U).normalize(),x=p||ul(n,b,i,r);for(let K=0;K<=o;K++){let W=K/o*Te,N=J.clone().addScaledVector(U,Math.cos(W)*e*(1-.65*b)).addScaledVector(u,Math.sin(W)*e*(1-.65*b));if(S.vertex(N,[K/o,b],a,l,x,0),k<s&&K<o){let h=c+k*(o+1)+K;S.quad(h,h+1,h+o+1,h+o+2)}}}return{curve:n,length:i}}var ia=Wa(52711),st=(S,t)=>S+(t-S)*ia(),oe=Ft(0,1,0),_n=S=>S<0?0:S>1?1:S,Gs=.78,NV=.95;function jV(S,t){let e=1/0;for(let a of bl){let l=NV*Math.max(a.rx,a.rz);e=Math.min(e,Math.hypot(S-a.x,t-a.z)/l)}return e}function fs(S,t=-1){for(let e=0;e<bl.length;e++){let a=bl[e],l=e===t?.84:.92,r=Is(a),p=l*Math.max(a.rx,a.rz);if(((S.x-a.x)/p)**2+((S.y-r)/(l*a.ry))**2+((S.z-a.z)/p)**2<1)return!0}return!1}function ek(S,t,e){let a=bl[S],l=Gs*a.rx,r=Gs*a.ry,p=Gs*a.rz,n=r*Math.sqrt(Math.max(.05,1-(t/l)**2-(e/p)**2));return{point:Ft(a.x+t,Is(a)+n,a.z+e),normal:Ft(t/l**2,n/r**2,e/p**2).normalize()}}var Es={anubias:[.52,.82,.95,1,1,.98,.93,.85,.7,.44,.04],echinodorus:[.11,.42,.7,.88,.97,1,.95,.85,.66,.38,.02],crypt:[.14,.46,.72,.89,.98,1,.95,.84,.63,.32,.02]};function RV(S,t){let e=S.length-1,a=_n(t)*e,l=Math.min(Math.floor(a),e-1),r=a-l,p=S[l],n=S[l+1],i=l>0?S[l-1]:2*p-n,s=l+2<=e?S[l+2]:2*n-p;return p+.5*r*(n-i+r*(2*i-5*p+4*n-s+r*(3*(p-n)+s-i)))}function Fs(S,t,e,a=0){let l=[],r=S.getPoint(.01).distanceTo(S.getPoint(0))*100,p=S.getPoint(0),n=S.getTangent(0),i=e.clone(),s=0,o=null;for(let b=0;b<=t;b++){let J=-a+(1+a)*b/t,q=J>=0?S.getPoint(J):p.clone().addScaledVector(n,J*r),U=J>=0?S.getTangent(J):n.clone();i.addScaledVector(U,-i.dot(U)),i.lengthSq()<1e-8&&i.crossVectors(U,oe),i.normalize(),o&&(s+=q.distanceTo(o)),o=q,l.push({v:J,point:q,tangent:U,normal:i.clone(),side:new O().crossVectors(i,U).normalize(),arc:s})}let c=a?a/(1+a)*t:0,k=l[Math.round(c)].arc;for(let b of l)b.arc-=k;return l}function Ms(S,t){let e=S.length-1,a=S[0].v,l=S[e].v-a,r=_n((t-a)/l)*e,p=Math.min(Math.floor(r),e-1),n=r-p,i=S[p],s=S[p+1];return{point:i.point.clone().lerp(s.point,n),tangent:i.tangent.clone().lerp(s.tangent,n).normalize(),normal:i.normal.clone().lerp(s.normal,n).normalize(),side:i.side.clone().lerp(s.side,n).normalize(),arc:i.arc+(s.arc-i.arc)*n}}function MS(S,{curve:t,root:e,radius:a,color:l,tipColor:r=null,rows:p,cols:n=7,flat:i=1.2,groove:s=0,sheath:o=0,taper:c=.2,knuckle:k=null,compliance:b,distance0:J=0,attached:q=null}){let U=t.getLength(),u=Fs(t,p,oe),x=S.positions.length/3,K=new ct;for(let N=0;N<=p;N++){let h=N/p,{point:I,normal:G,side:V}=u[N],d=o*Math.exp(-((h/.19)**2)),L=k?1+k.depth*Math.cos(h*k.count*Te):1,f=a*(1-c*h)*L,C=f*(i+1.5*d),Z=f*(1+.35*d),v={...q??ul(t,h,U,b),distance:J+h*U};K.copy(l),r&&K.lerp(r,h);for(let D=0;D<=n;D++){let Y=D/n*Te,at=Math.cos(Y),lt=Math.sin(Y),ut=Z*lt;s&&lt>0&&(ut-=s*Z*Math.max(0,1-(at/.72)**2));let It=I.clone().addScaledVector(V,C*at).addScaledVector(G,ut);if(S.vertex(It,[.5-.42*at,.0064+h*.008],K,e,v,0),N<p&&D<n){let gt=x+N*(n+1)+D;S.quad(gt,gt+1,gt+n+1,gt+n+2)}}}let W=u[p];return{length:U,tip:W.point,tangent:W.tangent,normal:W.normal,strand:{...ul(t,1,U,b),distance:J+U}}}function Cs(S){return{rows:Math.max(12,Math.min(22,Math.round(8+14*S))),cols:2*Math.max(4,Math.min(7,Math.round(2+5*S)))}}var LV=Te/155;function gs(S,t){let{base:e,tangent:a,face:l,length:r,width:p,outline:n,root:i,color:s,distance0:o,parent:c=null,compliance:k=.3,thin:b=.2,rows:J=20,cols:q=12,veinPairs:U=9,arch:u=.06,droop:x=.16,sweep:K=0,cordate:W=null,cup:N=.2,keel:h=.03,twist:I=0,undulate:G=0,undulateWaves:V=5,bullate:d=0,furl:L=0,age:f=.5,bites:C=[],holes:Z=[],spots:w=[],seed:v=0}=t,D=new O().crossVectors(l,a).normalize(),Y=new Ca(e.clone(),e.clone().addScaledVector(a,r*.34).addScaledVector(l,r*u),e.clone().addScaledVector(a,r*.72).addScaledVector(oe,-r*x*.3).addScaledVector(D,r*K*.45),e.clone().addScaledVector(a,r).addScaledVector(oe,-r*x).addScaledVector(D,r*K)),at=W?W.reach:0,lt=Fs(Y,J*3+6,l,at),ut=S.positions.length/3,It=new ct("#5f4c1c"),gt=new ct("#16180d"),Pt=new ct,Qt=(H,Q)=>{let Kt=0;for(let At of C)Q*At.side>0&&(Kt+=At.depth*Math.max(0,1-Math.abs(H-At.v)/At.span)**.55);return Math.min(.85,Kt)};for(let H=0;H<=J;H++){let Q=H/J,Kt=p*RV(n,Q),At=W?_n(1-Q/W.span)**1.45:0,xt=L*ne(.04,.42,Q),zt=ne(0,.16,Q),qe=G*(Math.sin(Q*V*Te+v*5.3)+.42*Math.sin(Q*V*1.73*Te+v*11.1))*Math.sin(Math.PI*Q)**.7,j=Math.sin(Q*U*Math.PI+1.1+v*2.1),ft=.02+Q*U*LV;for(let Vt=0;Vt<=q;Vt++){let bt=2*Vt/q-1,dt=Kt*(1-Qt(Q,bt)),ae=d*p*Math.cos(bt*7.2)*(1-bt**4),Nt=Math.abs(bt)**1.3*(1-.32*Math.abs(bt)**8),vt=Ms(lt,Q-at*At*Nt),Je=I*Q,Ve=vt.side.clone().multiplyScalar(Math.cos(Je)).addScaledVector(vt.normal,Math.sin(Je)),A=vt.normal.clone().multiplyScalar(Math.cos(Je)).addScaledVector(vt.side,-Math.sin(Je)),T=bt*dt,g=0;if(xt>.02){let Tt=xt*Math.PI/Math.max(dt,1e-4);T=Math.sin(Tt*T)/Tt,g=(1-Math.cos(Tt*bt*dt))/Tt}else g=N*dt*bt*bt+qe*dt*Math.abs(bt)**2.2+j*ae,W&&(g+=W.lift*dt*bt*bt*At);g-=h*p*Math.exp(-((bt/.11)**2));let _=vt.point.clone().addScaledVector(Ve,T).addScaledVector(A,g),et=c?c.direction.clone().lerp(A,zt):A.clone();et.lengthSq()<1e-6&&et.copy(A);let B={direction:et.normalize(),tangent:c?c.tangent.clone().lerp(vt.tangent,zt).normalize():vt.tangent,distance:o+vt.arc,compliance:c?c.compliance+(k-c.compliance)*zt:k};Pt.copy(s);let Mt=.93+.14*Ns(Q*4.3+v*7.1,bt*2.1,v*3.7),kt=.5+.5*Math.cos((ft-Math.abs(Vt/q-.5)*.32)*155);Pt.multiplyScalar(Mt*(.84+.16*ne(0,.28,Q))*(.9+.1*kt**5)),f>.78&&Pt.lerp(It,ne(.66,1,Q)*(f-.78)*1.5);for(let Tt of w){let Rt=Math.hypot((Q-Tt.v)*r,(bt-Tt.u)*p*1.3);Pt.lerp(gt,.6*Math.max(0,1-Rt/Tt.r)**.8)}if(S.vertex(_,[Vt/q,ft],Pt,i,B,b*(1+.5*Math.abs(bt)**3)),H<J&&Vt<q){let Tt=Q+.5/J,Rt=bt+1/q,St=!0;for(let qt of Z)Math.hypot((Tt-qt.v)*r,(Rt-qt.u)*p)<.9*p/q&&(St=!1);if(St){let qt=ut+H*(q+1)+Vt;S.quad(qt,qt+1,qt+q+1,qt+q+2)}}}}}function Zs(S,t){let e=[],a=[],l=[];if(S<.45)return{spots:e,holes:a,bites:l};let r=(S-.45)/.55;for(let p=0;p<Math.round(r*t*2.4);p++)e.push({v:st(.15,.97),u:(ia()<.5?-1:1)*st(.5,1.05),r:st(.02,.07)});if(ia()<r*.45){let p={v:st(.3,.85),u:st(-.7,.7)};a.push(p),e.push({...p,r:.055})}return ia()<r*.6&&l.push({v:st(.35,.78),side:ia()<.5?-1:1,depth:st(.08,.22),span:st(.06,.15)}),{spots:e,holes:a,bites:l}}function vs(S,t,e,a){let l=new O().crossVectors(S,t),r=oe.clone().multiplyScalar(.6).addScaledVector(e,.9),p=Math.atan2(r.dot(l),r.dot(t));return iS(t,S,p+a)}function iS(S,t,e){return S.clone().applyAxisAngle(t,e)}function ak(S,{anchor:t,heading:e,blade:a,leaves:l,surface:r=(o,c)=>Re(o,c),faceNormal:p=oe,host:n=-1,hue:i=.33,open:s=Ft(0,0,1)}){let o=n>=0,c=t.clone(),k=.062*a,b=.165*a,J=Ft(Math.cos(e),0,Math.sin(e)),q=st(-.5,.5),U=[];for(let W=0;W<=4;W++){let N=W/4,h=t.clone().addScaledVector(J,b*l*(N-.25)).addScaledVector(Ft(-J.z,0,J.x),q*b*l*N*N);h.y=r(h.x,h.z)+k*.8+.04*N*a,U.push(h)}let u=new ea(U),x=MS(S,{curve:u,root:c,radius:k,rows:16,cols:9,flat:1.05,taper:.2,knuckle:{count:l,depth:.14},color:new ct().setHSL(.22,.26,.11),tipColor:new ct().setHSL(.27,.4,.14),compliance:.02}),K=Fs(u,24,p);for(let W=0;W<(o?7:5);W++){let N=st(.06,.94),h=Ms(K,N),I=iS(h.normal,h.tangent,st(2,4.3)),G=o?st(.4,.85):st(.2,.4),V=[h.point.clone().addScaledVector(I,k*.6)],d=V[0].clone(),L=I.clone().addScaledVector(oe,-.8).normalize();for(let f=1;f<=3;f++){d=d.clone().addScaledVector(L,G*a/3).addScaledVector(oe,-.03*a);let C=r(d.x,d.z);o?d.y=Math.max(d.y,C+.015):d.y=Math.min(d.y,C+(f===3?-.1:.02)*a),V.push(d.clone()),L=L.addScaledVector(oe,-.45).normalize()}MS(S,{curve:new ea(V),root:c,radius:k*st(.22,.34),rows:6,cols:5,flat:o?2.1:1.1,taper:.45,color:new ct().setHSL(.1,.2,.19),tipColor:new ct().setHSL(.09,.17,.11),compliance:0,attached:{direction:oe,tangent:oe,distance:0,compliance:0}})}for(let W=0;W<l;W++){let N=_n((W+.55)/l),h=1-N,I=Ms(K,N),G=h<.22,V=a*(G?st(.45,.62):st(.82,1.06)),d=V*(G?st(.4,.75):st(.6,1.15)),L=null,f=null;for(let It=0;It<4&&!f;It++){let gt=(W%2?1:-1)*(st(.3,o?.75:1.1)+It*(o?.4:.8))+Math.sin(W*1.9)*.3;L=iS(I.normal,I.tangent,gt).normalize();let Pt=L.clone().addScaledVector(oe,-L.dot(oe)).normalize();Pt.lengthSq()<.05&&Pt.crossVectors(I.tangent,oe).multiplyScalar(Math.sign(gt));let Qt=st(.42,.85)+.45*(1-h)**1.4,H=Pt.clone().multiplyScalar(Math.cos(Qt)).addScaledVector(oe,Math.sin(Qt)).normalize(),Q=I.point.clone().addScaledVector(L,d*.3).addScaledVector(H,d*.78),Kt=Q.clone().addScaledVector(H,V*.45),At=Q.clone().addScaledVector(H,V*.9);(It===3||!fs(Q,n)&&!fs(Kt,n)&&!fs(At,n))&&(f=H)}let C=I.point.clone().addScaledVector(L,k*.7),Z=MS(S,{curve:new Ca(C,C.clone().addScaledVector(L,d*.44),C.clone().addScaledVector(L,d*.34).addScaledVector(f,d*.42),C.clone().addScaledVector(L,d*.3).addScaledVector(f,d*.78)),root:c,radius:.026*V,rows:9,cols:7,flat:1.25,groove:.45,sheath:.7,taper:.14,color:new ct().setHSL(i-.04,st(.36,.5),st(.085,.12)),compliance:.16,distance0:x.length*N}),w=new O().crossVectors(oe,Z.tangent).normalize(),v=iS(Z.tangent,w,.3+.55*Math.max(0,Z.tangent.y)),D=oe.clone().addScaledVector(v,-oe.dot(v)).normalize(),Y=ia()<.3?iS(D,v,st(-1.5,1.5)):vs(v,D,s,st(-.8,.8)),at=.66+.34*ne(.25,1.9,Z.tip.y-Re(Z.tip.x,Z.tip.z)),lt=(.84+.3*N)*at,ut=Zs(h,G?0:3);gs(S,{base:Z.tip,tangent:v,face:Y,length:V,width:V*st(.44,.5),outline:Es.anubias,root:c,color:new ct().setHSL(i+st(-.03,.035)-(G?.035:0),st(.55,.78),(G?st(.14,.19):st(.07,.15))*lt),distance0:Z.strand.distance,parent:Z.strand,compliance:.27,thin:G?.28:.1,...Cs(V),veinPairs:12,arch:st(.03,.1),droop:st(.03,.12),sweep:st(-.12,.12),cordate:{reach:st(.12,.18),span:.28,lift:.25},cup:st(.26,.46),keel:.02,twist:st(-.1,.1),undulate:st(.02,.05),undulateWaves:2,bullate:.03,furl:G&&ia()<.6?st(.5,.85):0,age:h,seed:ia(),...ut})}}function Sk(S,{x:t,z:e,root:a,blade:l,count:r}){for(let p=0;p<r;p++){let n=st(0,Te),i=st(.3,.62)*l,s=(o,c)=>{let k=t+Math.cos(n)*i*o,b=e+Math.sin(n)*i*o;return Ft(k,Re(k,b)-c*l,b)};MS(S,{curve:new ea([s(0,.02),s(.45,.035),s(.8,.06),s(1,.14)]),root:a,radius:.016*l,rows:6,cols:5,flat:1.15,taper:.45,color:new ct().setHSL(.11,.16,.2),tipColor:new ct().setHSL(.1,.14,.11),compliance:0,attached:{direction:oe,tangent:oe,distance:0,compliance:0}})}}function AV(S,{x:t,z:e,blade:a,leaves:l,hue:r=.26,open:p=Ft(0,0,1)}){let n=Re(t,e),i=Ft(t,n-.04,e),s=Ft(t,n+.1*a,e);MS(S,{curve:new ea([Ft(t,n-.16*a,e),s.clone().lerp(i,.45),s]),root:i,radius:.062*a,rows:5,cols:8,flat:1,taper:.3,color:new ct().setHSL(.1,.28,.1),tipColor:new ct().setHSL(.19,.34,.09),compliance:.03}),Sk(S,{x:t,z:e,root:i,blade:a,count:3});for(let o=0;o<l;o++){let c=(o+.5)/l,k=1-c,b=o*2.39996+st(-.35,.35),J=st(1.32,1.5)-.95*k*st(.7,1.15),q=Ft(Math.cos(b),0,Math.sin(b)),U=q.clone().multiplyScalar(Math.cos(J)).addScaledVector(oe,Math.sin(J)).normalize(),u=k<.18,x=a*(u?st(.45,.62):st(.8,1.08)),K=x*st(.4,.68),W=Ft(t+Math.cos(b)*.06*a,n+st(.02,.12)*a,e+Math.sin(b)*.06*a),N=oe.clone().multiplyScalar(2.2).addScaledVector(q,.5).normalize(),h=MS(S,{curve:new Ca(W,W.clone().addScaledVector(N,K*.5),W.clone().addScaledVector(N,K*.55).addScaledVector(U,K*.34),W.clone().addScaledVector(N,K*.42).addScaledVector(U,K*.72)),root:i,radius:.023*x,rows:9,cols:7,flat:1.4,groove:.55,sheath:.85,taper:.1,color:new ct().setHSL(r-.045,st(.38,.52),st(.075,.115)),compliance:.26}),I=new O().crossVectors(oe,h.tangent).normalize(),G=iS(h.tangent,I,.24+.5*Math.max(0,h.tangent.y)),V=oe.clone().addScaledVector(G,-oe.dot(G)).normalize(),d=ia()<.14?iS(V,G,st(-1.5,1.5)):vs(G,V,p,st(-.5,.5)),L=Zs(k*.85,2);gs(S,{base:h.tip,tangent:G,face:d,length:x,width:x*st(.15,.19),outline:Es.echinodorus,root:i,color:new ct().setHSL(r+st(-.02,.03)-(u?.02:0),st(.6,.8),(u?st(.17,.23):st(.11,.19))*(.85+.3*c)),distance0:h.strand.distance,parent:h.strand,compliance:.4,thin:.32,...Cs(x*.85),veinPairs:6,arch:st(.04,.12),droop:st(.12,.3),sweep:st(-.15,.15),cup:st(.22,.42),keel:.03,twist:st(-.25,.25),undulate:st(.05,.12),undulateWaves:2,bullate:.02,furl:u&&ia()<.5?st(.45,.8):0,age:k,seed:ia(),...L})}}function IV(S,{x:t,z:e,blade:a,leaves:l,hue:r=.16,open:p=Ft(0,0,1)}){let n=Re(t,e),i=Ft(t,n-.05,e),s=st(0,1);MS(S,{curve:new ea([Ft(t,n-.2*a,e),Ft(t,n-.02*a,e),Ft(t,n+.1*a,e)]),root:i,radius:.055*a,rows:5,cols:7,flat:1,taper:.4,color:new ct().setHSL(.09,.3,.09),tipColor:new ct().setHSL(.14,.36,.085),compliance:.03}),Sk(S,{x:t,z:e,root:i,blade:a,count:2});for(let o=0;o<l;o++){let c=(o+.5)/l,k=1-c,b=o*2.39996+st(-.4,.4),J=st(1.15,1.4)-1*k*st(.75,1.2),q=Ft(Math.cos(b),0,Math.sin(b)),U=q.clone().multiplyScalar(Math.cos(J)).addScaledVector(oe,Math.sin(J)).normalize(),u=k<.2,x=a*(u?st(.4,.58):st(.78,1.06)),K=x*st(.42,.72),W=Ft(t+Math.cos(b)*.05*a,n+st(.01,.1)*a,e+Math.sin(b)*.05*a),N=oe.clone().multiplyScalar(2).addScaledVector(q,.6).normalize(),h=MS(S,{curve:new Ca(W,W.clone().addScaledVector(N,K*.5),W.clone().addScaledVector(N,K*.52).addScaledVector(U,K*.36),W.clone().addScaledVector(N,K*.38).addScaledVector(U,K*.76)),root:i,radius:.021*x,rows:8,cols:6,flat:1.15,groove:.35,sheath:.7,taper:.12,color:new ct().setHSL(.115,st(.3,.46),st(.08,.115)),compliance:.32}),I=new O().crossVectors(oe,h.tangent).normalize(),G=iS(h.tangent,I,.26+.5*Math.max(0,h.tangent.y)),V=oe.clone().addScaledVector(G,-oe.dot(G)).normalize(),d=ia()<.18?iS(V,G,st(-1.5,1.5)):vs(G,V,p,st(-.55,.55)),L=Zs(k*.9,2);gs(S,{base:h.tip,tangent:G,face:d,length:x,width:x*st(.115,.145),outline:Es.crypt,root:i,color:new ct().setHSL(r+st(-.035,.05)*(1-s)-.03*s,st(.42,.66),(u?st(.12,.17):st(.065,.115))*(.85+.3*c)),distance0:h.strand.distance,parent:h.strand,compliance:.48,thin:.35,...Cs(x*.9),veinPairs:5,arch:st(.05,.13),droop:st(.14,.34),sweep:st(-.2,.2),cup:st(.14,.3),keel:.025,twist:st(-.35,.35),undulate:st(.14,.26),undulateWaves:st(2.5,4),bullate:.03,furl:u&&ia()<.55?st(.4,.8):0,age:k,seed:ia(),...L})}}function lk(S){for(let[a,l,r,p,n]of[[-9.15,.85,.7,9,.5],[-8.3,.6,.84,10,-.35],[-7.4,.9,.62,8,1.15],[-9.3,-.2,.8,9,.15],[-8.4,-.45,.95,10,.95],[-7.35,-.3,.74,8,-.8],[-9.1,-1.3,.84,10,.35],[-8.1,-1.5,.92,10,1.55],[-9.2,-2.3,.78,9,.1],[-8.2,-2.5,.88,9,1.9],[-7.3,-2.9,.7,8,2.5]])ak(S,{anchor:Ft(a,0,l),heading:n,blade:r,leaves:p,hue:st(.285,.325),open:Ft(-.55,0,1).normalize()});for(let[a,l,r,p,n,i]of[[3,-.55,-.2,1,7,1],[3,-.1,-.45,.9,6,2.5],[3,-.35,.35,.82,6,.3],[1,-.6,-.45,.95,6,2.2],[2,-.5,.5,.62,4,2.2]]){let s=ek(a,l,r);ak(S,{anchor:s.point,heading:i,blade:p,leaves:n,host:a,faceNormal:s.normal,surface:(o,c)=>ek(a,o-bl[a].x,c-bl[a].z).point.y,hue:st(.285,.325),open:Ft(a===2?.5:-.45,0,1).normalize()})}for(let[a,l,r,p]of[[7.35,.4,1.6,11],[8.3,-.3,1.35,9],[6.9,1,1.05,8],[8.75,.7,.95,8],[7.9,1.25,.7,6]])AV(S,{x:a,z:l,blade:r,leaves:p,hue:st(.235,.265),open:Ft(.5,0,1).normalize()});let t=.13,e=.27;for(let[a,l,r,p,n]of[[-7,1.15,.8,7,t],[-6.55,1.45,.6,6,t],[-5.15,1.3,.66,7,e],[-4.35,1.2,.6,6,e],[-3.75,1.45,.52,6,e],[3.9,2,.5,5,t],[9.35,-1.35,.72,7,e],[-2.75,-2.25,1,9,t],[-1.85,-3.05,.9,8,t],[-.35,-3.3,1.05,8,e],[-3.85,-2.75,.85,7,t],[2.9,-2.9,.8,7,e],[3.95,-2.4,1.15,9,t],[5.2,-2.85,.9,7,t]])jV(a,l)<1||IV(S,{x:a,z:l,blade:r,leaves:p,hue:n+st(-.02,.02),open:Ft(a*.06,0,1).normalize()})}var Ma=Wa(70241),Jt=(S,t)=>S+(t-S)*Ma(),rr=(S,t)=>Ft(Math.cos(S)*Math.cos(t),Math.sin(t),Math.sin(S)*Math.cos(t));function rk(S,t,e,a,l,r,p){let{rows:n=3,keel:i=.4,roll:s=0,azimuth:o=0,thin:c=.78,needle:k=!0,reach:b=.75}=p,J=new hS(...t),q=J.getLength(),U=k?2:4,u=S.positions.length/3,x=Ft(-Math.sin(o),0,Math.cos(o)),K=new O,W=new O,N=new ct;for(let h=0;h<=n;h++){let I=h/n,G=J.getPoint(I),V=J.getTangent(I);K.copy(x).applyAxisAngle(V,s),K.addScaledVector(V,-K.dot(V)).normalize(),W.crossVectors(K,V).normalize();let d=k?Math.pow(1-I,.8)*(.42+.58*ne(0,.16,I)):Math.pow(Math.sin(Math.PI*Math.pow(I,.82)),.72),L=e*d,f=i*(1-.55*I);N.copy(a[0]).lerp(a[1],I*I);let C={direction:r.direction,tangent:r.tangent,distance:r.distance+I*q*b,compliance:r.compliance};for(let Z=0;Z<=U;Z++){let w=Z/U*2-1,v=k?.62+.28*Math.abs(w):Z/U,D=G.clone().addScaledVector(K,w*L).addScaledVector(W,L*f*(1-Math.abs(w)));if(S.vertex(D,[v,I],N,l,C,c),h<n&&Z<U){let Y=u+h*(U+1)+Z;S.quad(Y,Y+1,Y+U+1,Y+U+2)}}}}function pk(S,t,{leanAngle:e,lean:a,push:l,wander:r,waves:p,phase:n,arch:i},s=7){let o=Ft(Math.cos(e),0,Math.sin(e)),c=Ft(-o.z,0,o.x),k=[];for(let b=0;b<=s;b++){let J=b/s,q=i>0?ne(1-i,1,J)**2:0,U=.3+.7*J,u=S.clone();u.y+=t*(J-.62*i*q),u.addScaledVector(o,a*t*Math.pow(J,1.7)),u.addScaledVector(fa,l*t*Math.pow(J,2.1)+.95*i*t*q),u.addScaledVector(c,r*U*(Math.sin(p*Te*J+n)-Math.sin(n)*(1-J))),u.addScaledVector(o,r*.62*U*(Math.sin(p*.57*Te*J+n*2.1)-Math.sin(n*2.1)*(1-J))),k.push(u)}return k}function nk(S,t,e){let a=r=>{let p=Math.max(0,r-.01),n=Math.min(1,r+.01);return Math.max(.05,S.getPoint(n).distanceTo(S.getPoint(p))/(n-p))},l=[];for(let r=.03;r<.995&&l.length<72;)l.push(r),r+=(e+(t-e)*r)/a(r);return l}var $n=7.4,ik=(S,t,e=$n)=>Math.min(1,t*ne(.12*e,e,S)),sk=(S,t,e,a=$n)=>Math.min(ne(.345*a,.078*a,S),ne(.44,.06,t))*(1.15-.35*e),ok=new ct("#6f5f2e");function ck(S,t,e,a,l,r){let p=Math.max(1,Math.floor(l.length*.05));for(let n=0;n<r;n++){let i=Math.min(l.length-2,1+n*p+Math.floor(Jt(0,1.6))),s=Jt(0,Te);S(t,{root:a.getPoint(l[i]),anchor:e.anchor,height:e.height*Jt(.42,.76),exposure:e.exposure*Jt(.9,1.06),canopy:e.canopy,compliance:e.compliance*Jt(1,1.12),path:{leanAngle:s,lean:Jt(.2,.44),push:e.path.push*Jt(.8,1.35),wander:Jt(.05,.14),waves:Jt(1.3,2.6),phase:Jt(0,Te),arch:0},branches:0})}}function kk(S,t){let{root:e,height:a,exposure:l,canopy:r=$n,compliance:p,path:n,branches:i=0}=t,s=t.anchor??e,o=.015+.008*Math.min(1,a/7.5),{curve:c,length:k}=Os(S,pk(e,a,n),o,new ct("#55692a"),s,p,t.attach),b=nk(c,Jt(.26,.34),Jt(.6,.88)*(1.2-.2*l)),J=new ct().setHSL(.272+Jt(-.012,.012),Jt(.9,1),Jt(.065,.1)),q=new ct().setHSL(.193+Jt(-.012,.012),Jt(.96,1),Jt(.15,.195)),U=Jt(.6,.84),u=Jt(.03,.042),x=Jt(.26,.38),K=Jt(.74,.84),W=Jt(5.6,8.4),N=Jt(0,Te),h=new ct,I=b.length-1;for(let G=0;G<=I;G++){let V=b[G],d=c.getPoint(V),L=t.attach??ul(c,V,k,p),f=I-G,C=ik(d.y,l,r),Z=.26+.74*ne(0,2.8,f),w=1-ne(0,4,f),v=sk(d.y,V,l,r);if(v>.5&&Ma()<v*.9)continue;let D=Math.max(4,Math.round(W-2.4*v)),Y=.06+.3*w+.2*C-.3*v,at=.74+.36*w-.95*(1-C),lt=Jt(.8,1.14),ut=N+G*(Math.PI/D)+Jt(-.3,.3);for(let It=0;It<D;It++){let gt=ut+(It+Jt(-.22,.22))/D*Te,Pt=v>.25&&Ma()<.12+.22*v,Qt=U*Z*lt*(.88+.12*C)*Jt(.78,1.14)*(Ma()<.2?Jt(.45,.72):1)*(Pt?.7:1),H=Y+Jt(-.22,.22),Q=at+Jt(-.22,.22)-(Pt?.5:0),Kt=d.clone().addScaledVector(rr(gt,H),o*.8),At=Kt.clone().addScaledVector(rr(gt,H),Qt*.5),xt=At.clone().addScaledVector(rr(gt,H+Q),Qt*.5);h.copy(J).lerp(q,C*Jt(.85,1.05)),Pt&&h.lerp(ok,Jt(.45,.8)),rk(S,[Kt,At,xt],u*(.78+.22*Z)*(.8+.2*C)*Jt(.86,1.12),[h.clone(),h.clone().lerp(q,Pt?0:.16)],s,L,{rows:C>.35?3:2,keel:x,roll:Jt(-.6,.6),azimuth:gt,thin:Pt?.88:K,reach:.75})}}i&&ck(kk,S,t,c,b,i)}function bk(S,t){let{root:e,height:a,exposure:l,canopy:r=$n,compliance:p,path:n,branches:i=0}=t,s=t.anchor??e,o=.014+.007*Math.min(1,a/6),{curve:c,length:k}=Os(S,pk(e,a,n),o,new ct("#5c6f2c"),s,p,t.attach),b=nk(c,Jt(.23,.29),Jt(.38,.52)*(1.2-.2*l)),J=new ct().setHSL(.288+Jt(-.012,.012),Jt(.82,.92),Jt(.06,.09)),q=new ct().setHSL(.202+Jt(-.014,.014),Jt(.92,1),Jt(.14,.185)),U=Ma()<.28,u=new ct().setHSL(Jt(.06,.1),Jt(.5,.66),Jt(.2,.27)),x=Jt(.5,.72),K=Jt(.55,.64),W=Jt(0,Te),N=new ct,h=b.length-1;for(let I=0;I<=h;I++){let G=b[I],V=c.getPoint(G),d=t.attach??ul(c,G,k,p),L=h-I,f=ik(V.y,l,r),C=.24+.76*ne(0,2.4,L),Z=1-ne(0,3.4,L),w=sk(V.y,G,l,r);if(w>.55&&Ma()<w*.8)continue;let v=.12+.5*Z+.28*f-.35*w,D=.24+.3*Z-.75*(1-f),Y=W+I*(Math.PI/2)+Jt(-.13,.13);for(let at=0;at<2;at++){let lt=Y+at*Math.PI,ut=w>.3&&Ma()<.14+.2*w,It=x*C*(.72+.28*f)*Jt(.84,1.14)*(ut?.75:1),gt=v+Jt(-.16,.16),Pt=D+Jt(-.16,.16)-(ut?.4:0),Qt=V.clone().addScaledVector(rr(lt,gt),o*.8),H=Qt.clone().addScaledVector(rr(lt,gt),It*.56),Q=H.clone().addScaledVector(rr(lt,gt+Pt),It*.44);N.copy(J).lerp(q,f*Jt(.85,1.05)),U&&N.lerp(u,Z*f*.7),ut&&N.lerp(ok,Jt(.5,.85)),rk(S,[Qt,H,Q],It*Jt(.115,.15),[N.clone(),N.clone().lerp(q,ut?0:.12)],s,d,{rows:4,needle:!1,keel:Jt(.36,.52),roll:Jt(-.4,.4),azimuth:lt,thin:ut?.7:K,reach:.6})}}i&&ck(bk,S,t,c,b,i)}var OV=[{x:[-10.6,-6.2],z:[-6,-3.1],clumps:11,shoots:[3,5],height:[5.4,10.2],exposure:[.94,1.16],feathery:.78},{x:[5.6,10.6],z:[-6,-3.1],clumps:10,shoots:[3,5],height:[5.2,10],exposure:[.9,1.12],feathery:.74},{x:[-3,3.6],z:[-5.9,-3.4],clumps:9,shoots:[2,4],height:[4.2,7.6],exposure:[.5,.8],feathery:.5},{x:[-3.5,-.9],z:[-3.4,-1.6],clumps:7,shoots:[4,6],height:[2.4,4.2],exposure:[.95,1.15],feathery:.1,canopy:2.6},{x:[4.3,5.4],z:[-2.9,-1.7],clumps:3,shoots:[3,5],height:[2.2,3.4],exposure:[.9,1.1],feathery:.1,canopy:2.4}];function uk(S){for(let t of OV)for(let e=0;e<t.clumps;e++){let a=Jt(t.x[0],t.x[1]),l=Jt(t.z[0],t.z[1]),r=Jt(t.exposure[0],t.exposure[1]),p=Jt(t.height[0],t.height[1])*(.92+.34*ne(6,10.4,Math.abs(a))),n=Ma()<t.feathery+.35*ne(6.5,9.5,p),i=n?kk:bk,s=Math.round(Jt(t.shoots[0],t.shoots[1])),o=Jt(.2,.5),c=Jt(0,Te);for(let k=0;k<s;k++){let b=k===0?1:Jt(.42,.93),J=c+k/s*Te+Jt(-.5,.5),q=o*(1.15-b)*Jt(.4,1.5),U=a+Math.cos(J)*q,u=l+Math.sin(J)*q*.7,x=p*b*Jt(.94,1.06),K=Ft(U,Re(U,u)-.03,u),W=Jt(8.8,9.4),N=x>W?Math.min(.4,(1-W/x)/.62):Ma()<.12?Jt(.04,.12):0;i(S,{root:K,height:x,exposure:r*(k===0?.92:Jt(.98,1.12)),canopy:t.canopy,compliance:n?Jt(.46,.64):Jt(.3,.44),branches:x>4.6&&Ma()<.42?Ma()<.28?2:1:0,path:{leanAngle:Math.atan2(Math.sin(J)*.45+Jt(.25,1),Math.cos(J)*.7+Jt(-.5,.5)),lean:(n?Jt(.04,.16):Jt(.12,.3))*(1.2-.4*b),push:Jt(.035,.13),wander:Jt(.05,.135),waves:Jt(1.4,2.7),phase:Jt(0,Te),arch:N}})}}}var GV=Math.atan2(fa.z,fa.x);function Qr(S,t,e,a,l,r=null){let p=Ft(t,Re(t,e)-.025,e),n=r?.detail(p.z);for(let i=0;i<l;i++){let s=OS(),o=OS()<.72?GV+Yt(-.95,.95):Yt(0,Te),c=a*(.5+.65*s)*Yt(.92,1.08),k=Yt(.7,3)*(.6+.6*s),b=Ft(Math.cos(o),0,Math.sin(o)),J=p.clone().addScaledVector(b,Yt(0,.08)),q=[J,J.clone().add(Ft(b.x*.08,c*.7,b.z*.08)),J.clone().add(Ft(b.x*k*.3,c*1.2,b.z*k*.3)),J.clone().add(Ft(b.x*k,c*Yt(.87,1),b.z*k))],U=new ct().setHSL(.235+.055*(1-s)+Yt(-.012,.012),Yt(.7,.88),.2+.17*s);Dn(S,q,Yt(.044,.115),U,p,Yt(.85,1.15),{rows:n?.rows??r?.rows??30,cols:n?.cols??r?.cols??6,emit:r?r.keep():!0,twist:o+Math.PI/2,ribbon:!0,thin:1,browning:s>.82?Yt(.08,.2):0})}}function fV(S,t,e,a,l=!1){for(let r=0;r<a;r++){let p=Yt(0,Te),n=Yt(.5,1.15)*e,i=t.clone().add(Ft(Yt(-.15,.15),Yt(l?-.2:-.04,l?.2:.04),Yt(-.1,.1))),s=i.clone().add(Ft(Math.cos(p)*n,Yt(l?-.12:.1,l?.5:.4)*e,Math.sin(p)*n*(l?.36:.7))),o=i.clone().lerp(s,.45).add(Ft(0,n*.32,0)),c=new ct().setHSL(Yt(.225,.29),.85,Yt(.14,.28));Dn(S,[i,o,s],Yt(.028,.061)*e,c,i,.3,{rows:18,cols:4,twist:p+1.57,thin:.4})}}function MV(S,t,e,a,l){let r=Ft(Math.cos(l),0,Math.sin(l)),p=Ft(t,Re(t,e)+.012,e),n=[p,p.clone().addScaledVector(r,a*.5).add(Ft(0,.035,0)),p.clone().addScaledVector(r,a).add(Ft(0,.07,0))],i=new ct().setHSL(Yt(.08,.12),Yt(.35,.5),Yt(.2,.3));Dn(S,n,.11,i,p,.04,{rows:14,cols:6,twist:l+Math.PI/2,thin:.2,browning:.7})}var EV=[{minX:-9.2,maxX:-3.2,minZ:-5.7,maxZ:-2,minY:1.2,maxY:6.5},{minX:4.4,maxX:9,minZ:-5.7,maxZ:-2,minY:1.2,maxY:6.5}],FV=[{minX:-9.6,maxX:-2.6,minZ:-5.7,maxZ:-2,clumps:9},{minX:3.9,maxX:10.4,minZ:-5.7,maxZ:-2.2,clumps:7},{minX:-2.8,maxX:3.8,minZ:-5.8,maxZ:-3.6,clumps:6,height:.85}],Ys=S=>5.4+4*ne(2,7.5,Math.abs(S));function Uk(S,{backgroundDensity:t=.7,backgroundRows:e=20,backgroundCols:a=2,animatedShadows:l=!0,castShadows:r=!0,distanceLod:p=!1}={}){let n=new Qn,i=Number.isFinite(t)?Math.max(0,Math.min(1,t)):.7,s={backgroundCandidates:0,backgroundKept:0},o={rows:Math.max(4,Math.round(e)),cols:Math.max(2,Math.round(a)),keep(){let k=s.backgroundCandidates++,b=Math.floor((k+1)*i+1e-9)>Math.floor(k*i+1e-9);return b&&s.backgroundKept++,b},detail(k){if(!p)return null;let b=ne(-1.3,-5.7,k);return{rows:Math.max(4,Math.round(this.rows*(1-.25*b))),cols:Math.max(2,Math.round(this.cols*(1-.33*b)))}}};for(let k of FV){let b=k.height??1;for(let J=0;J<k.clumps;J++){let q=Yt(k.minX,k.maxX),U=Yt(k.minZ,k.maxZ),u=Yt(.5,1.1),x=Math.floor(Yt(4,7));for(let K=0;K<x;K++){let W=Yt(0,Te),N=u*Math.sqrt(OS()),h=q+Math.cos(W)*N,I=U+Math.sin(W)*N*.7;Qr(n,h,I,Ys(h)*b*Yt(.85,1.1),Math.floor(Yt(10,16)),o)}}for(let J=0;J<4;J++){let q=Yt(k.minX,k.maxX);Qr(n,q,Yt(k.minZ,k.maxZ),Ys(q)*b*Yt(.55,.8),Math.floor(Yt(5,8)),o)}}for(let k=0;k<10;k++){let b=Yt(3.4,9.8)*(k%2?1:-1);Qr(n,b,Yt(-5.9,-4.8),Ys(b)*Yt(.6,.85),10,o)}s.backgroundVertices=n.positions.length/3,s.backgroundTriangles=n.indices.length/3,lk(n);for(let[k,b,J,q]of[[-3.5,-1,2.4,14],[-4.3,.9,1.1,12],[-2.6,-2.2,2.6,12],[-1.4,-1.9,1.4,9],[4.6,-1.5,1.9,11],[2.6,-1.6,1.5,9],[9.3,-2.6,2.4,12],[9.8,-1.9,1.8,10]])Qr(n,k,b,J,q);for(let[k,b,J,q,U,u]of[[1.55,3.07,.05,1.05,48,!0],[2.38,2.77,.15,.9,40,!0],[.98,3.42,-.3,.75,30,!0],[-3.6,.4,.75,.7,26],[-3.75,1.55,.05,.85,32],[2.35,.3,.8,.6,22],[-5.25,.3,1.15,.65,24],[3.2,.3,.75,.7,22]])fV(n,Ft(k,b,J),q,U,u);for(let[k,b,J,q]of[[-1.35,2.2,1.1,.4],[1.9,.95,.9,2.6],[-5.55,1.7,.8,1.2],[.7,-1.6,.75,-.5],[7.2,2.1,.85,2]])MV(n,k,b,J,q);uk(n);for(let[k,b,J,q]of[[-10.15,-3.15,3.2,3],[-9.55,-3.55,4.5,4],[-9.05,-2.85,5.3,4],[-8.55,-3.3,6.1,5]])Qr(n,k,b,J,q);let c=new je(n.geometry(),$c());return c.name="Aquatic planting",c.customDepthMaterial=tk({animated:l}),c.castShadow=r,c.receiveShadow=!0,S.add(c),s.vertices=c.geometry.attributes.position.count,s.triangles=c.geometry.index.count/3,{mesh:c,thickets:EV,stats:s}}var Wk=Math.PI*2,FS=.35,oS=.645,sS=FS-oS,CV=[[.35,-.002,-.009,.003,2.4,2.5],[.3425,.0085,-.0205,.009,2.4,2.5],[.332,.0225,-.03,.0165,2.4,2.5],[.315,.0375,-.042,.0255,2.35,2.5],[.295,.05,-.0525,.032,2.3,2.5],[.272,.06,-.061,.0358,2.3,2.45],[.248,.0672,-.069,.0385,2.25,2.4],[.22,.0722,-.077,.0405,2.15,2.4],[.19,.0762,-.085,.0408,2.05,2.35],[.166,.0782,-.0908,.04,2,2.3],[.13,.0808,-.0958,.0382,2.1,2.25],[.09,.0832,-.1,.036,2.05,2.2],[.045,.0848,-.1022,.0342,2,2.15],[.01,.0852,-.1028,.0324,1.95,2.1],[-.04,.0812,-.0998,.0292,1.88,1.9],[-.09,.073,-.09,.0252,1.78,1.78],[-.14,.062,-.0748,.0208,1.66,1.66],[-.19,.049,-.057,.016,1.52,1.54],[-.235,.04,-.043,.0118,1.46,1.48],[-.27,.0358,-.0358,.0088,1.42,1.42],[sS,.0336,-.033,.005,1.4,1.4]],gV=2.15,ZV=[[.35,2.4],[.315,2.1],[.288,3],[.256,3],[.228,2.1],[.19,1.7],[.16,1.5],[.06,1],[-.12,1],[-.21,1.4],[-.265,2],[sS,2.4]],vV=56,YV=40,be={x:.272,y:.012,radiusX:.0335,radiusY:.0325,bulge:.0126,inset:.0228,pupil:.6,iris:.93,rim:.985},ES={x:.196,bow:.03,y:-.004,span:.078},sa={cornerX:.322,cornerY:-.0175,tipX:.3495,tipY:-.0035},Tk={1:19,2:11,3:23,4:12,5:12,6:8,12:0},Ul=5,wV=2,Jk=[34,11],XV=[34,84,109],HV=160,PV=.012,QV=.004,zV=[.25,2,2.6],BV=.5,DV=52,zr={gain:2,wrap:.35,sharpness:2,distortion:.22,ambient:.55},ce=S=>S.toFixed(5);function mk(S){let t=S.map(r=>r[0]),e=S.map(r=>r[1]),a=t.length-1,l=e.map((r,p)=>p===0?(e[1]-e[0])/(t[1]-t[0]):p===a?(e[a]-e[a-1])/(t[a]-t[a-1]):(e[p+1]-e[p-1])/(t[p+1]-t[p-1]));return r=>{if(r<=t[0])return e[0];if(r>=t[a])return e[a];let p=0,n=a;for(;n-p>1;){let k=p+n>>1;t[k]<=r?p=k:n=k}let i=t[p+1]-t[p],s=(r-t[p])/i,o=s*s,c=o*s;return(2*c-3*o+1)*e[p]+(c-2*o+s)*i*l[p]+(-2*c+3*o)*e[p+1]+(c-o)*i*l[p+1]}}var _V=["top","bottom","width","fullUp","fullDown"],Br=_V.map((S,t)=>mk(CV.map(e=>[e[0],e[t+1]]).reverse()));function Ps(S){let t=Ht.clamp(S,sS,FS);return{top:Br[0](t),bottom:Br[1](t),width:Br[2](t),fullUp:Br[3](t),fullDown:Br[4](t)}}function $V(S){let t=Ht.clamp((S-ES.y)/ES.span,-1,1);return ES.x-ES.bow*(1-t*t)}function yk(S){let t=Ht.clamp((S-sa.cornerX)/(sa.tipX-sa.cornerX),0,1);return Ht.lerp(sa.cornerY,sa.tipY,t*t*(3-2*t))}function td(S,t){let e=(S.top+S.bottom)*.5;return t>=0?e+t*(S.top-e):e+t*(e-S.bottom)}function hk(S,t,e,a){let l=t>=0?e.fullUp:e.fullDown,r=Math.pow(Math.max(0,1-Math.pow(Math.abs(t),gV)),1/l),p=1+.09*Math.exp(-(((S-.2)/.045)**2))*Ht.smoothstep(-t,-.35,.5),n=e.width*r*p,i=$V(a);n+=.0013*Math.exp(-(((S-i-.009)/.008)**2)),n-=.0023*Math.exp(-(((S-i)/.005)**2));let s=Math.exp(-(((a-yk(S))/.0045)**2)),o=Ht.smoothstep(S,sa.cornerX-.012,sa.cornerX+.006);n-=Math.min(.0019*s*o,n*.42);let c=Math.hypot((S-be.x)/be.radiusX,(a-be.y)/be.radiusY);if(c<1.3){let k=be.inset+be.bulge*Math.sqrt(Math.max(0,1-c*c)),b=1-Ht.smoothstep(c,.92,1.62);n=Ht.lerp(n,k,b)}return Math.max(n,4e-4)}function ws(S,t,e,a=new O){let l=Ps(S),r=td(l,t);return a.set(S,r,e*hk(S,t,l,r))}function ed(S,t){let e=(S.top+S.bottom)*.5;return t>=e?(t-e)/Math.max(S.top-e,1e-6):(t-e)/Math.max(e-S.bottom,1e-6)}function Dr(S,t,e,a=new O){let l=Ps(S),r=Ht.clamp(ed(l,t),-1,1);return a.set(S,t,e*hk(S,r,l,t))}function ad(S,t,e,a=new O){let r=Dr(S,t,e),p=Dr(S+.0015,t,e).sub(r),n=Dr(S,t+.0015,e).sub(r);return a.crossVectors(p,n).multiplyScalar(e).normalize()}function Sd(S){let e=mk(ZV.map(n=>[...n]).reverse()),a=[0];for(let n=1;n<=1600;n++){let i=sS+(FS-sS)*n/1600;a.push(a[n-1]+e(i))}let l=a[1600],r=[],p=0;for(let n=0;n<=S;n++){let i=l*n/S;for(;p<1600&&a[p+1]<i;)p++;let s=a[p+1]-a[p]||1,o=(i-a[p])/s;r.push(sS+(FS-sS)*(p+o)/1600)}return r.reverse()}function ld(){let S=[],t=[],e=[],a=Sd(vV),l=YV,r=new O,p=new O,n=[],i=[];for(let o of a){let c=0;n.length=0,n.push(0),ws(o,1,1,p);for(let k=1;k<=l/2;k++){let b=Math.cos(k/(l/2)*Math.PI);ws(o,b,1,r),c+=r.distanceTo(p),p.copy(r),n.push(c)}i.push(n.map(k=>k/Math.max(c,1e-6)))}a.forEach((o,c)=>{for(let k=0;k<l;k++){let b=k/l*2,J=b<=1,q=J?b:2-b,U=Math.cos(q*Math.PI);ws(o,U,J?1:-1,r),S.push(r.x,r.y,r.z);let u=Math.round(q*(l/2));t.push((FS-o)/oS,i[c][u])}});for(let o=0;o<a.length-1;o++)for(let c=0;c<l;c++){let k=(c+1)%l,b=o*l+c,J=o*l+k,q=(o+1)*l+c,U=(o+1)*l+k;e.push(b,q,J,J,q,U)}for(let[o,c]of[[0,!1],[a.length-1,!0]]){let k=new O;for(let J=0;J<l;J++){let q=o*l+J;k.x+=S[q*3]/l,k.y+=S[q*3+1]/l,k.z+=S[q*3+2]/l}let b=S.length/3;S.push(k.x,k.y,k.z),t.push((FS-k.x)/oS,.5);for(let J=0;J<l;J++){let q=o*l+J,U=o*l+(J+1)%l;c?e.push(b,U,q):e.push(b,q,U)}}let s=new Ze;return s.setAttribute("position",new le(S,3)),s.setAttribute("uv",new le(t,2)),s.setIndex(e),s.computeVertexNormals(),s}function qk(){let S=[],t=[],e=[],a=[],l=[],r=[];return{add(p,n,i){let s=p.getAttribute("position"),o=p.getAttribute("normal"),c=p.getAttribute("uv"),k=S.length/3;for(let J=0;J<s.count;J++)S.push(s.getX(J),s.getY(J),s.getZ(J)),t.push(o.getX(J),o.getY(J),o.getZ(J)),e.push(c?c.getX(J):0,c?c.getY(J):0),a.push(n),l.push(i?i[J]:0);let b=p.getIndex();for(let J=0;J<(b?b.count:s.count);J++)r.push(k+(b?b.getX(J):J));p.dispose()},finish(){let p=new Ze;return p.setAttribute("position",new le(S,3)),p.setAttribute("normal",new le(t,3)),p.setAttribute("uv",new le(e,2)),p.setAttribute("aPart",new le(a,1)),p.setAttribute("aFinProgress",new le(l,1)),p.setIndex(r),p}}}function Qs(S,t,e,a){let l=new Ze;return l.setAttribute("position",new le(S,3)),t.length&&l.setAttribute("normal",new le(t,3)),l.setAttribute("uv",new le(e,2)),l.setIndex(a),l}function Xs(S,t,e,a,l,r,p){let n=[],i=[],s=[],o=[];for(let c=0;c<=a;c++){let k=Ht.lerp(t,e,c/a),b=Math.sqrt(Math.max(0,1-Math.min(k,1)**2)),J=r+p*k*k;for(let q=0;q<=l;q++){let U=q/l*Wk,u=Math.cos(U)*k,x=Math.sin(U)*k,K=new O(u*be.radiusX/(be.bulge*be.bulge),x*be.radiusY/(be.bulge*be.bulge),S*b/be.bulge).normalize();if(n.push(be.x+u*be.radiusX+K.x*J,be.y+x*be.radiusY+K.y*J,S*(be.inset+be.bulge*b)+K.z*J),i.push(K.x,K.y,K.z),s.push(q/l,c/a),c<a&&q<l){let W=c*(l+1)+q;S>0?o.push(W,W+l+1,W+1,W+1,W+l+1,W+l+2):o.push(W,W+1,W+l+1,W+1,W+l+2,W+l+1)}}}return Qs(n,i,s,o)}function Vk(S,t,e,a,l){let r=[],p=[],n=[],i=[],s=new O,o=new O;for(let c=0;c<=l;c++){let k=c/l,b=Ht.lerp(sa.cornerX-.004,sa.tipX,k),J=Math.sin(Math.min(1,1.25*(1-k))*Math.PI*.5);for(let q of[0,1]){let U=yk(b)+Ht.lerp(t,e,q)*J;Dr(b,U,S,s),ad(b,U,S,o),r.push(s.x+o.x*a,s.y+o.y*a,s.z+o.z*a),p.push(o.x,o.y,o.z),n.push(k,q)}if(c<l){let q=c*2;S>0?i.push(q,q+2,q+1,q+1,q+2,q+3):i.push(q,q+1,q+2,q+1,q+3,q+2)}}return Qs(r,p,n,i)}function dk(S){return new ea(S.map(t=>new O(...t)),!1,"catmullrom",.5)}function pr({part:S,base:t,tip:e,sway:a=0,roll:l=0,edge:r=.055,root:p=.006},n){let i=Tk[S]||3,s=(i-1)*wV,o=dk(t),c=dk(e),k=[],b=[],J=[],q=[],U=new O,u=new O,x=new O,K=new O,W=h=>{let I=h*(i-1),G=.5-.5*Math.cos(Wk*I),V=.013*Math.sin(I*5.3+S*2.1)+.008*Math.sin(I*11.7+S);return 1-r*Math.pow(G,1.4)+V*(1-G)};for(let h=0;h<=s;h++){let I=h/s;o.getPoint(I,U),c.getPoint(I,u),K.subVectors(u,U).normalize().multiplyScalar(-p),U.add(K);let G=W(I);for(let V=0;V<=Ul;V++){let d=V/Ul;x.lerpVectors(U,u,d*G);let L=Math.sin(d*Math.PI*.85);if(x.z+=a*L,x.z+=l*L*Math.sin((I-.5)*Math.PI),k.push(x.x,x.y,x.z),b.push(I,d),J.push(d),h<s&&V<Ul){let f=h*(Ul+1)+V;q.push(f,f+1,f+Ul+1,f+1,f+Ul+2,f+Ul+1)}}}let N=Qs(k,[],b,q);N.computeVertexNormals(),n.add(N,S,J)}function Kk(S,t=1){return S.map(([e,a])=>Dr(e,a,t).toArray())}function Hs(S,t,e,a,l){let r=[];for(let p=0;p<=e;p++){let n=Ht.lerp(S,t,p/e),i=Ps(n),s=a?i.top-l:i.bottom+l;r.push([n,s,0])}return r}function xk(){let S=qk(),t=qk();S.add(ld(),0);for(let e of[-1,1])S.add(Xs(e,0,be.pupil,4,30,9e-4,.0013),8),S.add(Xs(e,be.pupil,be.iris,5,30,6e-4,.0013),7),S.add(Xs(e,be.iris,be.rim,2,30,4e-4,.0013),10),S.add(Vk(e,-.0016,.0016,-.001,7),9),S.add(Vk(e,.0022,.005,5e-4,7),11);pr({part:1,base:[[-.271,.032,0],[-.286,.021,0],[-.292,0,0],[-.286,-.02,0],[-.271,-.031,0]],tip:[[-.302,.045,0],[-.362,.082,0],[-.414,.094,0],[-.436,.096,0],[-.43,.073,0],[-.398,.038,0],[-.347,.001,0],[-.394,-.036,0],[-.426,-.071,0],[-.434,-.093,0],[-.412,-.094,0],[-.356,-.077,0],[-.3,-.042,0]],edge:.022,root:.015},t),pr({part:2,base:Hs(.015,-.056,4,!0,.006),tip:[[.022,.113,0],[.012,.155,0],[-.007,.176,0],[-.025,.166,0],[-.04,.147,0],[-.051,.122,0],[-.058,.098,0]],edge:.02},t),pr({part:3,base:Hs(-.04,-.205,6,!1,.006),tip:[[-.036,-.132,0],[-.052,-.162,0],[-.073,-.159,0],[-.098,-.146,0],[-.128,-.128,0],[-.158,-.106,0],[-.185,-.084,0],[-.208,-.07,0]],edge:.018},t),pr({part:12,base:Hs(-.178,-.206,3,!0,.004),tip:[[-.179,.062,0],[-.194,.067,0],[-.208,.055,0]],edge:.02,root:.003},t);for(let e of[-1,1])pr({part:e>0?4:5,base:Kk([[.174,-.034],[.166,-.048],[.156,-.062]],e),tip:[[.13,-.04,e*.052],[.11,-.053,e*.068],[.086,-.068,e*.076],[.079,-.085,e*.067],[.097,-.095,e*.053],[.126,-.088,e*.042]],sway:e*.002,roll:e*.004,edge:.024,root:.005},t),pr({part:6,base:Kk([[.064,-.093],[.05,-.0975],[.038,-.0975]],e),tip:[[.04,-.128,e*.028],[.014,-.141,e*.034],[-.006,-.131,e*.026],[.002,-.111,e*.016]],sway:e*.0012,roll:e*.002,edge:.024,root:.005},t);return{body:S.finish(),fins:t.finish()}}function Nk(S){/vWaterPosition/.test(S.vertexShader)||kl(S,{perLight:`
        // Light that entered the far face and scattered out towards the eye. What enters
        // still obeys Lambert on the face it crosses, so the leak is strongest where the
        // surface turns away from the light; what survives the path is in gFishThrough,
        // and the lobe is how much of it leaves towards the viewer rather than sideways.
        float enter = max(0.0, -dot(geometryNormal, directLight.direction));
        vec3 through = normalize(directLight.direction
          + geometryNormal * ${ce(zr.distortion)});
        float lobe = ${ce(zr.wrap)}
          + pow(max(dot(geometryViewDir, -through), 0.0), ${ce(zr.sharpness)});
        reflectedLight.directDiffuse += lit.color * gFishThrough
          * enter * lobe * ${ce(zr.gain)} * RECIPROCAL_PI;
      `}),S.fragmentShader=S.fragmentShader.replace("#include <common>",`
      #include <common>
      varying vec3 vSkinPoint;
      varying vec2 vFishUV;
      varying float vFishPart;

      // What the tissue under this fragment passes: set once the anatomy is known, read
      // back by every light below.
      vec3 gFishThrough = vec3(0.0);

      const vec3 FISH_ABSORPTION = vec3(${XV.map(ce).join(", ")});
      const vec3 FISH_FIN_PIGMENT = vec3(${zV.map(ce).join(", ")});
      const vec2 FISH_SCALES = vec2(${ce(Jk[0])}, ${ce(Jk[1])});
      const vec2 FISH_EYE = vec2(${ce(be.x)}, ${ce(be.y)});
      const vec2 FISH_EYE_RADIUS = vec2(${ce(be.radiusX)}, ${ce(be.radiusY)});

      float fishHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

      // What a slab of tissue this thick sends back out diffusely: what survives the
      // absorption along the path, the tissue's own and any pigment standing in it,
      // times the share the tissue scatters instead of passing straight on.
      vec3 fishThrough(float path, vec3 pigment) {
        return exp(-FISH_ABSORPTION * path - pigment)
          * (1.0 - exp(-${ce(HV)} * path));
      }

      // Imbricate rows: every row is offset half a scale from its neighbour and the
      // rows run slightly diagonally, as a characin's do.
      vec2 fishScaleGrid() {
        vec2 grid = vFishUV * FISH_SCALES;
        grid.y += 0.11 * sin(grid.x * 0.62 + 1.3);
        grid.x += grid.y * 0.24 + mod(floor(grid.y), 2.0) * 0.5;
        return grid;
      }
      // Detail fades out rather than aliasing once a cell is smaller than a pixel.
      float fishFade(vec2 grid) {
        return 1.0 - smoothstep(0.42, 1.1, max(fwidth(grid.x), fwidth(grid.y)));
      }
      float fishOpercleX(float y) {
        float t = clamp((y - ${ce(ES.y)}) / ${ce(ES.span)}, -1.0, 1.0);
        return ${ce(ES.x)} - ${ce(ES.bow)} * (1.0 - t * t);
      }
      // Scales stop at the caudal fin base and at the bare bony gill cover.
      float fishScaleMask() {
        float rear = smoothstep(${ce(sS)}, ${ce(sS+.05)}, vSkinPoint.x);
        float front = 1.0 - smoothstep(-0.005, 0.011,
          vSkinPoint.x - fishOpercleX(vSkinPoint.y));
        float ridge = smoothstep(0.0, 0.11, vFishUV.y)
          * (1.0 - smoothstep(0.90, 1.0, vFishUV.y));
        return rear * front * ridge * fishFade(fishScaleGrid());
      }
      float fishScaleRelief() {
        vec2 cell = fract(fishScaleGrid()) - 0.5;
        float dome = 1.0 - smoothstep(0.15, 0.55, length(cell * vec2(0.9, 1.0)));
        return dome * (0.42 - cell.x * 0.85) * fishScaleMask();
      }
      float fishOrbit() {
        return length((vSkinPoint.xy - FISH_EYE) / FISH_EYE_RADIUS);
      }
      float fishCleftY(float x) {
        float k = clamp((x - ${ce(sa.cornerX)}) / ${ce(sa.tipX-sa.cornerX)}, 0.0, 1.0);
        return mix(${ce(sa.cornerY)}, ${ce(sa.tipY)}, k * k * (3.0 - 2.0 * k));
      }
      float fishRayCount(float part) {
        ${Object.entries(Tk).map(([t,e])=>`if (part < ${ce(Number(t)+.5)}) return ${ce(Math.max(e-1,2))};`).join(`
        `)}
        return 2.0;
      }
      // Guanine platelets stacked under the scales make a broadband reflector. It covers
      // the flank between the dark dorsum and the scattering belly, and it is tuned
      // blue-green, which is why the band flares cyan off normal. The layer is thickest
      // where it doubles as the lining of the body cavity and thins over the caudal
      // muscle, which passes light instead of mirroring it.
      float fishReflector(float band, float x) {
        return smoothstep(0.07, 0.24, band) * (1.0 - smoothstep(0.58, 0.92, band))
          * mix(0.70, 1.0, smoothstep(-0.195, 0.015, x));
      }
      // The peritoneum: the silvered sheet lining the body cavity, from behind the
      // pectoral girdle back to the anal fin origin and from the belly up to the swim
      // bladder under the spine. Gut and bladder fill it, so nothing gets through.
      float fishCavity(float x, float band) {
        return smoothstep(-0.080, -0.020, x) * (1.0 - smoothstep(0.140, 0.180, x))
          * smoothstep(0.34, 0.47, band);
      }
      // The vertebral column and the septa between the muscle blocks stand in the path
      // behind the cavity: a denser line along the axis with a faint chevron either side.
      float fishAxialShadow(float x, float y) {
        float column = exp(-pow(y / 0.011, 2.0));
        float phase = (x + 0.007 * cos(y * 30.0)) * ${ce(DV)};
        return 0.62 * column - 0.06 * cos(PI2 * phase) * fishFade(vec2(phase, 0.0));
      }
    `).replace("#include <color_fragment>",`
      #include <color_fragment>
      float fishX = vSkinPoint.x;
      float fishY = vSkinPoint.y;
      // Band runs 0 on the dorsal midline to 1 on the ventral, measured along the
      // section, so every colour zone follows the body outline instead of a height.
      float fishBand = clamp(vFishUV.y, 0.0, 1.0);
      float fishHead = smoothstep(-0.008, 0.034, fishX - fishOpercleX(fishY));
      if (vFishPart < 0.5) {
        // Countershading: an olive dorsum against the substrate seen from above, a
        // guanine flank that mirrors the water, a pale belly against the surface.
        vec3 skin = mix(vec3(0.0105, 0.0150, 0.0125), vec3(0.034, 0.049, 0.043),
          smoothstep(0.02, 0.135, fishBand));
        skin = mix(skin, vec3(0.470, 0.510, 0.500), smoothstep(0.185, 0.42, fishBand));
        float bellyReach = smoothstep(-0.26, -0.12, fishX);
        skin = mix(skin, vec3(0.655, 0.660, 0.630),
          smoothstep(0.52, 0.84, fishBand) * bellyReach);
        skin = mix(skin, vec3(0.720, 0.700, 0.635),
          smoothstep(0.88, 1.0, fishBand) * bellyReach);

        // The reflector band: blue-green, from behind the eye to the caudal peduncle.
        float sheen = exp(-pow((fishBand - 0.250) / 0.070, 2.0))
          * smoothstep(-0.285, -0.225, fishX)
          * (1.0 - smoothstep(0.188, 0.245, fishX));
        vec2 sheenGrid = fishScaleGrid();
        float mottle = 1.0 + (fishHash(floor(sheenGrid) + 7.0) - 0.5) * 0.14
          * fishFade(sheenGrid);
        skin = mix(skin, vec3(0.080, 0.410, 0.620) * mottle, sheen * 0.82);

        // Lateral line: one row of pored scales, gently decurved along the flank.
        float lineBand = mix(0.50, 0.43, smoothstep(-0.28, 0.16, fishX));
        float lateral = exp(-pow((fishBand - lineBand) / 0.020, 2.0));
        vec2 poreGrid = fishScaleGrid();
        float pore = smoothstep(0.60, 0.95, fishHash(vec2(floor(poreGrid.x), 3.0)));
        skin *= 1.0 - lateral * (0.09 + 0.20 * pore) * fishFade(poreGrid);

        // Scales: a faint sheen difference per scale and a darker free margin. Most
        // of the scale relief lives in roughness and normal, not in albedo.
        vec2 grid = fishScaleGrid();
        float mask = fishScaleMask();
        float rim = smoothstep(0.40, 0.50, length((fract(grid) - 0.5) * vec2(0.85, 1.0)));
        skin *= 1.0 + (fishHash(floor(grid)) - 0.5) * 0.06 * mask - rim * 0.035 * mask;

        // Red pigment bleeds out of the caudal and anal fin bases over the posterior
        // ventral flank, and the gill chamber shows warm through thin opercular skin.
        float warm = (1.0 - smoothstep(-0.27, 0.0, fishX))
          * smoothstep(0.32, 0.60, fishBand) * (1.0 - smoothstep(0.88, 1.0, fishBand));
        skin = mix(skin, vec3(0.420, 0.105, 0.030), warm * 0.45);
        float sheath = 1.0 - smoothstep(-0.292, -0.240, fishX);
        skin = mix(skin, vec3(0.255, 0.080, 0.038), sheath * 0.60);
        float gill = exp(-pow((fishX - 0.178) / 0.026, 2.0)
          - pow((fishBand - 0.66) / 0.16, 2.0));
        skin = mix(skin, vec3(0.330, 0.098, 0.078), gill * 0.20);

        // Head: silver cheek and opercle, dark olive over the skull and the snout.
        vec3 cheek = mix(vec3(0.040, 0.052, 0.046), vec3(0.420, 0.440, 0.420),
          smoothstep(0.13, 0.40, fishBand));
        skin = mix(skin, cheek, fishHead * 0.92);
        skin = mix(skin, vec3(0.050, 0.056, 0.046), smoothstep(0.250, 0.330, fishX) * 0.82);
        skin = mix(skin, vec3(0.098, 0.092, 0.078), smoothstep(0.330, 0.350, fishX) * 0.7);

        // The opercular edge: a fine dark seam with the pale bony lip in front of it.
        float margin = fishX - fishOpercleX(fishY);
        float opercleFace = 1.0 - smoothstep(0.84, 1.0, fishBand);
        skin *= 1.0 - 0.60 * exp(-pow(margin / 0.0028, 2.0)) * opercleFace;
        skin *= 1.0 + 0.28 * exp(-pow((margin - 0.008) / 0.005, 2.0)) * opercleFace;

        // Mouth cleft, and the silver-gold ring of skin around the orbit.
        float cleft = exp(-pow((fishY - fishCleftY(fishX)) / 0.0030, 2.0))
          * smoothstep(0.304, 0.322, fishX);
        skin = mix(skin, vec3(0.040, 0.028, 0.024), cleft * 0.85);
        float orbit = fishOrbit();
        float ring = (1.0 - smoothstep(1.00, 1.18, orbit)) * smoothstep(0.88, 0.99, orbit);
        skin = mix(skin, vec3(0.520, 0.455, 0.235), ring * 0.8);

        diffuseColor.rgb = skin;

        // Behind the body cavity the wall is thin swimming muscle, and a small fish's
        // muscle passes light. The path is the width of the section here, so the caudal
        // peduncle and the dorsal and ventral ridges leak most, while the silvered
        // cavity, the skull and the column leak nothing. The gill chamber is the one
        // place light crosses the head, through the thin opercular flap.
        float path = max(abs(vSkinPoint.z) * 2.0, ${ce(PV)});
        float wall = (1.0 - max(fishHead, fishCavity(fishX, fishBand)))
          * (1.0 - 0.55 * fishReflector(fishBand, fishX))
          * (1.0 - fishAxialShadow(fishX, fishY));
        gFishThrough = fishThrough(path, vec3(0.0)) * wall
          + vec3(0.24, 0.055, 0.038) * gill;
      } else if (vFishPart < 6.5 || vFishPart > 11.5) {
        float caudal = 1.0 - step(1.5, vFishPart);
        float pectoral = step(3.5, vFishPart) * (1.0 - step(5.5, vFishPart));
        float paleTip = step(2.5, vFishPart) * (1.0 - step(3.5, vFishPart))
          + step(5.5, vFishPart) * (1.0 - step(6.5, vFishPart));
        float span = clamp(vFishUV.y, 0.0, 1.0);
        float along = clamp(vFishUV.x, 0.0, 1.0);
        float rays = fishRayCount(vFishPart);

        // Membrane: nearly colourless where there is no pigment, so the plants and
        // water behind the fin show through it.
        vec3 membrane = vec3(0.135, 0.158, 0.142);
        // Blood red at the base, carried furthest out through the two caudal lobes and
        // clearing to hyaline at the margin. The pectorals stay almost clear.
        float lobe = 0.5 - 0.5 * cos(PI2 * 2.0 * along);
        float pigment = pow(1.0 - smoothstep(0.34, 1.04, span), 0.8)
          * mix(1.0, 0.42 + 0.58 * lobe, caudal) * mix(1.0, 0.26, pectoral);
        pigment = clamp(pigment, 0.0, 1.0);
        diffuseColor.rgb = mix(membrane, vec3(0.400, 0.052, 0.020), pigment);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.400, 0.410, 0.380),
          paleTip * smoothstep(0.76, 0.98, span) * 0.7);

        // Each soft ray branches twice on its way to the margin, so the ribbing
        // doubles and then doubles again over the outer half of the fin.
        float stem = pow(0.5 + 0.5 * cos(PI2 * along * rays), 20.0);
        float split = pow(0.5 + 0.5 * cos(PI2 * (along * rays + 0.5)), 24.0)
          * smoothstep(0.30, 0.55, span);
        float twig = pow(0.5 + 0.5 * cos(PI2 * (along * rays * 2.0 + 0.5)), 28.0)
          * smoothstep(0.62, 0.86, span);
        float ribs = clamp(
          stem * fishFade(vec2(along * rays, span)) +
          split * fishFade(vec2(along * rays * 2.0, span)) +
          twig * fishFade(vec2(along * rays * 4.0, span)), 0.0, 1.0);
        vec3 rayTint = diffuseColor.rgb * 0.68 + vec3(0.088, 0.082, 0.072);
        diffuseColor.rgb = mix(diffuseColor.rgb, rayTint, ribs * 0.85);

        // Hyaline membrane: thin enough that most of the light carries straight through
        // it rather than scattering back, which is what keeps a fin see-through.
        gFishThrough = fishThrough(${ce(QV)},
          FISH_FIN_PIGMENT * pigment + ${ce(BV)} * ribs);
        #ifdef FISH_MEMBRANE
          // Thickness falls away toward the free margin; pigment and rays add body.
          float thickness = mix(1.0, mix(0.34, 0.50, caudal), smoothstep(0.06, 1.0, span));
          diffuseColor.a = clamp(diffuseColor.a * mix(0.86, 1.0, caudal) * thickness
            * (1.0 + pigment * 1.2 + ribs * 0.85), 0.0, 1.0);
        #endif
      } else if (vFishPart < 7.5) {
        // Iris: a guanine ring, brightest below and behind the pupil, with fine fibres.
        float fibre = 0.5 + 0.5 * cos(vFishUV.x * PI2 * 24.0);
        vec3 iris = mix(vec3(0.620, 0.600, 0.415), vec3(0.330, 0.300, 0.150), vFishUV.y);
        diffuseColor.rgb = iris * (0.92 + 0.08 * fibre)
          * (0.48 + 0.52 * smoothstep(0.034, -0.016, fishY));
      } else if (vFishPart < 8.5) {
        diffuseColor.rgb = vec3(0.0055, 0.0075, 0.0085);
      } else if (vFishPart < 9.5) {
        diffuseColor.rgb = vec3(0.036, 0.020, 0.018);
      } else if (vFishPart < 10.5) {
        diffuseColor.rgb = vec3(0.175, 0.168, 0.132);
      } else {
        diffuseColor.rgb = vec3(0.330, 0.310, 0.265);
      }
    `).replace("#include <metalnessmap_fragment>",`
      #include <metalnessmap_fragment>
      if (vFishPart < 0.5) {
        // Only the reflector layer behaves as a metal. The dark dorsum and the
        // light-scattering belly stay dielectric, which is what keeps the flank
        // reading as a mirror set into a fish rather than as chrome plating.
        // Guanine sits under the scales and in the opercle and cheek plates. The
        // snout, jaws and skull roof carry none, so they stay dull dielectric.
        float scaled = fishReflector(fishBand, fishX)
          * (1.0 - smoothstep(0.155, 0.205, fishX));
        float plate = exp(-pow((fishX - 0.200) / 0.038, 2.0))
          * smoothstep(0.22, 0.46, fishBand) * (1.0 - smoothstep(0.80, 0.96, fishBand));
        metalnessFactor = clamp(0.06 + 0.36 * max(scaled, plate), 0.0, 0.44);
        metalnessFactor *= smoothstep(-0.292, -0.248, fishX);
        metalnessFactor *= 1.0 - 0.85 * smoothstep(0.88, 1.06, fishOrbit());
      } else if (vFishPart > 6.5 && vFishPart < 7.5) {
        metalnessFactor = 0.20;
      } else if (vFishPart < 6.5 || vFishPart > 11.5) {
        metalnessFactor = 0.05;
      } else {
        metalnessFactor = 0.0;
      }
    `).replace("#include <roughnessmap_fragment>",`
      #include <roughnessmap_fragment>
      if (vFishPart < 0.5) {
        // Each scale is a slightly different mirror, which breaks what would
        // otherwise be one broad plastic highlight into a field of glints.
        float scale = 0.17 + fishHash(floor(fishScaleGrid())) * 0.13;
        roughnessFactor = mix(roughnessFactor, scale, fishScaleMask());
        roughnessFactor = mix(roughnessFactor, 0.44, smoothstep(0.60, 0.94, fishBand));
        float grain = fishHash(floor(vSkinPoint.xy * 260.0));
        roughnessFactor *= 1.0 + (grain - 0.5) * 0.26 * fishHead;
        roughnessFactor = mix(roughnessFactor, 0.06, 1.0 - smoothstep(0.86, 1.04, fishOrbit()));
      } else if (vFishPart > 6.5 && vFishPart < 7.5) {
        roughnessFactor = 0.34;
      } else if (vFishPart < 8.5) {
        roughnessFactor = 0.05;
      } else if (vFishPart > 9.5 && vFishPart < 10.5) {
        roughnessFactor = 0.09;
      }
    `).replace("#include <normal_fragment_maps>",`
      #include <normal_fragment_maps>
      if (vFishPart < 0.5) {
        float relief = fishScaleRelief() * 0.00030;
        vec3 dx = dFdx(-vViewPosition), dy = dFdy(-vViewPosition);
        vec3 rx = cross(dy, normal), ry = cross(normal, dx);
        float determinant = dot(dx, rx);
        vec3 gradient = sign(determinant) * (dFdx(relief) * rx + dFdy(relief) * ry);
        normal = normalize(abs(determinant) * normal - gradient);
      }
    `).replace("#include <clearcoat_normal_fragment_maps>",`
      #include <clearcoat_normal_fragment_maps>
      #ifdef USE_CLEARCOAT
        clearcoatNormal = normal;
      #endif
    `).replace("#include <lights_physical_fragment>",`
      #include <lights_physical_fragment>
      #ifdef USE_CLEARCOAT
        // The cornea is a wet lens over the iris: one tight highlight, not a sheen.
        float cornea = step(6.5, vFishPart) * (1.0 - step(8.5, vFishPart))
          + step(9.5, vFishPart) * (1.0 - step(10.5, vFishPart));
        material.clearcoat = mix(material.clearcoat, 1.0, cornea);
        material.clearcoatRoughness = mix(material.clearcoatRoughness, 0.02, cornea);
      #endif
      #ifdef USE_IRIDESCENCE
        // Thin-film interference over the guanine stack, mottled scale by scale.
        float sheenBand = vFishPart < 0.5
          ? fishReflector(fishBand, fishX) * smoothstep(-0.30, -0.22, fishX)
          : 0.0;
        material.iridescence *= 0.12 + sheenBand * 0.88;
        material.iridescenceThickness = 230.0
          + fishHash(floor(fishScaleGrid())) * 160.0
          + fishHash(floor(fishScaleGrid() * 0.34)) * 110.0;
      #endif
    `).replace("#include <lights_fragment_end>",`
      #include <lights_fragment_end>
      // The same transport for the light that arrives from everywhere, so the thin
      // places read lit through even with nothing behind them. View-independent, and
      // small enough to leave the modelling alone.
      reflectedLight.indirectDiffuse += (irradiance + iblIrradiance) * gFishThrough
        * ${ce(zr.ambient)} * RECIPROCAL_PI;
    `)}function jk(){let S=new el({color:16777215,metalness:.5,roughness:.32,clearcoat:.1,clearcoatRoughness:.3,iridescence:.5,iridescenceIOR:1.38,iridescenceThicknessRange:[180,420]}),t=new Aa({color:16777215,metalness:.05,roughness:.4,transparent:!0,opacity:.95,side:fe,depthWrite:!1});return t.defines.FISH_MEMBRANE="",{skin:S,fins:t}}var Rk=24,Le={minX:-8.3,maxX:8.3,minY:.7,maxY:8.4,minZ:-4.7,maxZ:3.2},nr={minX:-7.5,maxX:7.5,minY:1.8,maxY:7.4,minZ:-1.4,maxZ:2.8},Lk=.55,rd=7,pd=new O(0,1,0),nd=new O(1,0,0),ir=Math.PI*2,Ye={linearDrag:.38,quadraticDrag:.85,lateralDrag:3.2,cruise:1.2,scull:.35,avoidanceScull:.9,brake:.8,feedBrake:2.2,response:.5,thrustLimit:{hover:1.2,settle:0,inspect:1.2,travel:6,feed:9,escape:0}},Jl={frequency:3.2,coast:[.32,.65],feedCoast:[.05,.2],restartSpeed:.86,minimumThrust:.2,strokeGain:2.6,waveAngle:.78},Ta={curvature:2.4,floorRate:.65,maximumRate:1.8,speedRate:.8,steeringGain:2.2,hoverRate:.45,floorSpeed:.65,pitch:.45,feedRate:2.6,feedPitch:1.05,response:4},CS={visual:2.6,blindCosine:-.6,lateralLine:.9},ze={spacing:1.05,crowded:.55,separation:2,alignment:.5,cohesion:.3,cohesionRange:1.8,follow:.28,recruitRange:1.4,recruitWindow:1.2,recruitRate:.15,lookAhead:1.1},Ya={trim:.6,trimSpeed:.3,drift:10,twitchInterval:7,excursionInterval:4.5,flip:.3,turn:[.17,.65],settle:1.2},ti={curvature:1.5,thrust:4,stage1:.18,stage2:.24},wa={curvature:4.2,thrust:85,stage1:.06,stage2:.1,burst:[.25,.45],burstThrust:30,refractory:1.6},ql={range:3.8,looming:1,rate:7,flightZone:2,giveWay:.8,familiarity:.04,habituation:25},sr={range:2.2,chance:.9,latency:[.04,.13],spread:.5},me={sight:2.6,near:.8,rate:4,splash:4.6,splashLatency:[.13,.24],splashError:.61,splashChance:.7,rise:[4.8,3.6],scan:[.3,.5],plumeWidth:1.6,plumeLife:50,sniff:9,splashDrive:.4,sightDrive:.6,odourDrive:.5,recruitDrive:.5,eatDrive:.3},Vl={keen:25,residual:200,searching:.25,cost:.1,floor:.15,recovery:.02},Xa={range:2.5,chance:.55,latency:[.25,1.1],spread:.6},ve={transit:2.2,stalk:.62,brakeRange:1.2,stalkRange:.55,ease:4,standoff:.75,lag:.16,bowWave:.55,bowReach:1,pursuit:6,hurry:.3},Ae={launch:[.13,.31],suction:.1,aim:.26,curvature:2.6,thrust:62,stage1:.045,stage2:.062,follow:.055,attempts:3,retry:.78,spit:.25,spitShove:.1,wash:.2,puff:.32,handling:[.4,.9]},id=`
  // Part ids come from fish-anatomy.js: 4 and 5 are the pectorals, 1-3, 6 and 12 the other fins.
  attribute vec4 aSwim; // x: wave phase, y: wave angle, z: turning curvature, w: pectoral brake
  attribute float aFinPhase;
  attribute float aPart;
  attribute float aFinProgress;
  varying vec3 vSkinPoint;
  varying vec2 vFishUV;
  varying float vFishPart;
  const float PIVOT = 0.12;
  vec3 gSwimPosition;
  float spineAngle(float s) {
    float along = clamp(s / 0.57, 0.0, 1.0);
    return aSwim.z * s * (s < 0.0 ? 0.18 : 1.0)
      - 0.025 * aSwim.y * sin(aSwim.x)
      + aSwim.y * pow(along, 1.35) * sin(aSwim.x - s * 7.5);
  }
  vec3 finMotion(vec3 p) {
    if (aPart > 3.5 && aPart < 5.5) {
      float side = aPart < 4.5 ? 1.0 : -1.0;
      float beat = sin(aFinPhase + side * 0.9);
      p.z += side * aFinProgress * (0.013 * beat + 0.018 * aSwim.w);
      p.x += aFinProgress * (0.008 * beat - 0.033 * aSwim.w);
      p.y += aFinProgress * 0.008 * cos(aFinPhase + side * 0.9);
    } else if (aPart > 0.5 && aPart < 1.5) {
      // The trailing membrane lags behind the peduncle instead of acting as a paddle.
      p.z += aSwim.y * 0.045 * aFinProgress * aFinProgress
        * sin(aSwim.x - (PIVOT - p.x) * 7.5 - 0.65);
    } else if ((aPart > 1.5 && aPart < 6.5) || aPart > 11.5) {
      p.z += sin(aFinPhase - p.x * 10.0) * aFinProgress * 0.004;
    }
    return p;
  }
  vec3 bendSpine(vec3 p, inout vec3 n) {
    float s = PIVOT - p.x;
    float theta = spineAngle(s);
    vec2 spine = vec2(PIVOT, 0.0);
    float kappa = (spineAngle(s + 0.001) - spineAngle(s - 0.001)) / 0.002;
    if (s < 0.0) {
      float mid = spineAngle(s * 0.5);
      spine += vec2(-cos(mid), sin(mid)) * s;
    } else {
      float ds = s / 8.0;
      for (int i = 0; i < 8; i++) {
        float mid = spineAngle((float(i) + 0.5) * ds);
        spine += vec2(-cos(mid), sin(mid)) * ds;
      }
    }
    float c = cos(theta), sn = sin(theta);
    vec3 local = vec3(n.x / max(0.3, 1.0 - p.z * kappa), n.y, n.z);
    n = normalize(vec3(local.x * c + local.z * sn, local.y, -local.x * sn + local.z * c));
    return vec3(spine.x + p.z * sn, p.y, spine.y + p.z * c);
  }
`;function zs(S,t=!0){S.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${id}`),t?(e.vertexShader=e.vertexShader.replace("#include <beginnormal_vertex>",`
          vec3 objectNormal = vec3(normal);
          gSwimPosition = bendSpine(finMotion(position), objectNormal);
        `).replace("#include <begin_vertex>",`
          vec3 transformed = gSwimPosition;
          vSkinPoint = position;
          vFishUV = uv;
          vFishPart = aPart;
        `),Nk(e)):e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
        vec3 swimNormal = vec3(0.0, 1.0, 0.0);
        vec3 transformed = bendSpine(finMotion(position), swimNormal);
      `)},S.customProgramCacheKey=()=>`riverscape-fish-${t?"skin":"depth"}-4`}function or(S,t,e=0){return S.x=Ht.clamp(S.x,t.minX+e,t.maxX-e),S.y=Ht.clamp(S.y,t.minY+e,t.maxY-e),S.z=Ht.clamp(S.z,t.minZ+e,t.maxZ-e),S.y=Math.max(S.y,Re(S.x,S.z)+Lk+e),S}var gS=S=>Math.atan2(Math.sin(S),Math.cos(S)),Sa=S=>Math.atan2(S.z,S.x),sd=S=>Ye.linearDrag*S+Ye.quadraticDrag*S*S;function Bs(S,t,e){S.set(Math.cos(t)*Math.cos(e),Math.sin(e),Math.sin(t)*Math.cos(e))}function Ds(S,t){let e=Math.cos(t),a=Math.sin(t),l=S.x*e-S.z*a;return S.z=S.x*a+S.z*e,S.x=l,S}function Ak(S,{count:t=Rk,obstacles:e=[],landmarks:a=[],thickets:l=[],food:r=null}={}){let p=Number.isFinite(Number(t))?Ht.clamp(Math.round(Number(t)),8,48):Rk,n=Wa(583137),i=(m,tt)=>m+n()*(tt-m),s=m=>-m*Math.log(1-n()),o=xk(),c=new yS(new Float32Array(p*4),4),k=new yS(new Float32Array(p),1);c.setUsage(AS),k.setUsage(AS),o.body.setAttribute("aSwim",c),o.fins.setAttribute("aSwim",c),o.body.setAttribute("aFinPhase",k),o.fins.setAttribute("aFinPhase",k);let{skin:b,fins:J}=jk(),q=new xS({depthPacking:_l});zs(b),zs(J),zs(q,!1);let U=new SS(o.body,b,p),u=new SS(o.fins,J,p);U.name="Silver-blue freshwater fish",u.name="Attached translucent fish fins",U.castShadow=!0,U.receiveShadow=!0,U.customDepthMaterial=q,U.frustumCulled=!1,u.frustumCulled=!1,U.instanceMatrix.setUsage(AS),u.instanceMatrix.setUsage(AS),S.add(U,u);let x=a.map(m=>({...m}));for(let m of l)for(let tt=0;tt<2;tt++)x.push({kind:"grass",point:new O(i(m.minX+.4,m.maxX-.4),i(1.6,Math.min(m.maxY,4.8)),i(Math.max(m.minZ,Le.minZ)+.4,m.maxZ-.3)),obstacle:-1});let K=0,W=0,N=0,h=0,I=[],G=Array.from({length:p},(m,tt)=>{let yt=tt%6,R=new O;do R.set(-5.7+yt*2.18+i(-.45,.45),i(2.55,5.75),i(.42,2.7));while(I.some(Ct=>Ct.distanceToSquared(R)<.55));I.push(R);let Ot=new O(n()<.72?-1:1,i(-.045,.045),i(-.16,.16)).normalize();return{id:tt,position:R,heading:Ot,swim:Ot.clone().multiplyScalar(i(.02,.08)),velocity:new O,anchor:R.clone(),goal:R.clone(),quaternion:new $e,scale:i(.83,1.08),phase:i(0,ir),character:i(.8,1.2),seed:i(0,100),mode:"hover",until:1/0,nextTwitch:i(.5,4),nextExcursion:i(.5,5),departed:-1/0,turnSign:n()<.5?-1:1,effort:0,stroke:null,nextStroke:i(0,.5),finPhase:i(0,ir),yawRate:0,bend:0,finBrake:.25,urge:0,curiosity:i(0,.7),interest:null,peck:0,flick:null,lastFlick:-1/0,pendingEscape:null,alarm:0,refractoryUntil:0,keen:0,searching:0,foraging:0,appetite:1,food:null,foodSerial:-1,strikeUntil:0,launch:0,attempts:0,handling:0,nextScan:0,nextSniff:0,splashAt:0,splashSlot:0,recruiter:null,recruitAt:0}}),V=new O,d=new O,L=new O,f=new O,C=new O,Z=new O,w=new O,v=new O,D=new O,Y=new O,at=new O,lt=new O,ut=new O,It=new O,gt=new O,Pt=new O,Qt=new O,H=new pe,Q=new pe,Kt=new $e,At=new $e,xt=new O,zt=new O,qe=new O,j=new O,ft=new O,Vt=new O,bt=new O,dt=Array.from({length:4},()=>({point:new O,at:-1/0,speed:0})),ae=0,Nt=-1,vt=0,Je=0,Ve=()=>G.filter(m=>m.interest||m.mode==="inspect").length;function A(m,tt,yt,R=Math.asin(m.heading.y)){m.stroke=null,m.yawRate=0,m.flick={start:K,yaw0:Sa(m.heading),angle:tt,pitch:R,...yt},m.lastFlick=K}let T=m=>({curvature:ti.curvature*Math.min(1,.3+Math.abs(m)/1.05),thrust:ti.thrust,stage1:ti.stage1,stage2:ti.stage2,burst:0,burstThrust:0});function g(m){m.mode="settle",m.stroke=null,m.until=K+Ya.settle*i(.8,1.3)}function _(m){m.mode="hover",m.until=1/0,m.urge=0,m.anchor.copy(m.position),m.nextTwitch=K+s(Ya.twitchInterval),m.nextExcursion=K+s(Ya.excursionInterval/(m.character*(1+m.foraging)))}function et(m){m.mode="inspect",m.until=K+i(3,8)*m.character,m.peck=K+i(.4,1.2)}function B(m,tt,yt=!1){m.mode="travel",m.goal.copy(tt),m.departed=yt?-1/0:K,m.until=K+m.position.distanceTo(tt)/(Ye.cruise*.6)+2}function Mt(m){let tt=x[Math.floor(n()*x.length)];m.interest=tt,m.curiosity=0,B(m,tt.point)}function kt(m,tt){if(m.foraging>Vl.searching&&n()<.6*m.foraging)return Ls(m.position,W,bt),tt.copy(m.position).addScaledVector(bt,-i(1.5,4)),tt.x+=i(-1.2,1.2),tt.z+=i(-1.5,1.5),tt.y=Re(tt.x,tt.z)+i(.7,2.2),tt;let yt=n();if(yt<.55||yt<.75&&!l.length)for(let R=0;R<12&&(tt.set(i(nr.minX,nr.maxX),i(nr.minY,nr.maxY),i(nr.minZ,nr.maxZ)),!(tt.distanceToSquared(m.position)>25));R++);else if(yt<.75){let R=l[Math.floor(n()*l.length)];tt.set(i(R.minX+.5,R.maxX-.5),i(1.6,Math.min(R.maxY,5.2)),i(R.minZ,R.maxZ+.4))}else tt.set(i(Le.minX,Le.maxX),i(1.4,Le.maxY),i(Le.minZ,Le.maxZ));return tt}function Tt(m,tt=null){if(x.length&&m.curiosity>.55&&n()<m.curiosity*.9&&Ve()<rd){Mt(m);return}tt?d.copy(tt.goal).add(new O(i(-.9,.9),i(-.3,.3),i(-.6,.6))):lt.lengthSq()>ze.follow*ze.follow?d.copy(m.position).addScaledVector(lt,i(2,3.5)/lt.length()):kt(m,d),or(d,Le,.45),B(m,d,!!tt)}function Rt(m,tt=null){m.nextTwitch=K+s(Ya.twitchInterval);let yt=Sa(m.heading),R;tt?R=gS(Sa(tt)-yt)*i(.5,.9):ut.lengthSq()>.0025&&m.heading.dot(ut)>-.5*ut.length()?R=gS(Sa(ut)+Math.PI-yt)*i(.6,1):m.anchor.distanceToSquared(m.position)>.36?(V.subVectors(m.anchor,m.position),R=gS(Sa(V)-yt)*i(.6,1)):(n()<Ya.flip&&(m.turnSign=-m.turnSign),R=m.turnSign*i(Ya.turn[0],Ya.turn[1])),A(m,R,T(R))}function St(m,tt){m.keen=Math.min(1,m.keen+tt*m.appetite),m.searching=Math.max(m.searching,m.keen),m.foraging=Math.max(m.keen,m.searching)}function qt(m,tt){m.mode="feed",m.food=tt,m.foodSerial=tt.serial,m.interest=null,m.attempts=0,m.strikeUntil=0,m.launch=i(Ae.launch[0],Ae.launch[1]),m.until=K+ve.pursuit}function wt(m,tt){if(m.food=null,m.strikeUntil=0,m.attempts=0,m.nextScan=K+i(.15,.35),tt&&!m.flick&&K>m.lastFlick+.6){let yt=(n()<.5?-1:1)*i(.7,1.6);A(m,yt,T(yt))}m.mode==="feed"&&g(m)}function Et(m,tt){ft.subVectors(m.food.position,m.position);let yt=Math.max(ft.length(),1e-4),R=Ae.aim*(.3+tt),Ot=gS(Sa(ft)+i(-R,R)-Sa(m.heading));A(m,Ot,{curvature:Ae.curvature,thrust:Ae.thrust,stage1:Ae.stage1,stage2:Ae.stage2,burst:0,burstThrust:0},Math.asin(Ht.clamp(ft.y/yt,-.95,.95))+i(-R,R)*.5),m.strikeUntil=K+Ae.stage1+Ae.stage2+Ae.follow,vt++}function mt(m,tt,yt){if(m.handling=K+i(Ae.handling[0],Ae.handling[1])*(1+2*(1-m.appetite)),m.strikeUntil=0,n()<Ae.spit){ft.copy(m.heading).addScaledVector(yt,.8),ft.lengthSq()<1e-6&&ft.copy(m.heading),r.nudge(tt,ft.normalize(),Ae.spitShove),m.attempts++;return}r.take(tt)&&(Je++,St(m,me.eatDrive),m.appetite=Math.max(Vl.floor,m.appetite-Vl.cost),m.food=null,m.attempts=0,g(m))}function Bt(m,tt){m.strikeUntil=0,m.attempts++;let yt=r.settled(tt);yt?ft.set(m.heading.x*.35,1,m.heading.z*.35):ft.copy(m.heading),r.nudge(tt,ft.normalize(),yt?Ae.puff:Ae.wash),m.handling=K+i(.12,.3),m.launch=i(Ae.launch[0],Ae.launch[1])*Ae.retry,m.attempts>=Ae.attempts&&wt(m,!0)}function M(m,tt,yt){if(m.food&&(m.food.gone||m.food.serial!==m.foodSerial)&&wt(m,!0),m.mode==="escape")return;if(K>=m.nextSniff&&m.mode!=="feed"&&!m.interest)for(let Fe of dt){let la=K-Fe.at;if(la>me.plumeLife)continue;Ls(Fe.point,W,bt),Vt.subVectors(m.position,Fe.point);let ma=Vt.dot(bt);if(!(ma<.6||ma>la*Fe.speed)&&!(Vt.addScaledVector(bt,-ma).length()>me.plumeWidth)){m.nextSniff=K+me.sniff,St(m,me.odourDrive),(m.mode==="hover"||m.mode==="settle")&&(Vt.copy(bt).multiplyScalar(-i(2,3.5)),Ds(Vt,i(-.7,.7)).add(m.position),B(m,or(Vt,Le,.45),!0));break}}if(m.recruiter){if(K>=m.recruitAt){let Fe=m.recruiter;m.recruiter=null,St(m,me.recruitDrive),m.mode!=="feed"&&!m.interest&&(Vt.set(i(-Xa.spread,Xa.spread),i(-Xa.spread,Xa.spread)*.5,i(-Xa.spread,Xa.spread)),B(m,or(Vt.add(Fe.position),Le,.45),!0))}}else yt&&m.mode!=="feed"&&n()<tt*Xa.chance*m.appetite&&(m.recruiter=yt,m.recruitAt=K+i(Xa.latency[0],Xa.latency[1]));if(K<m.nextScan||K<m.handling)return;let R=i(me.scan[0],me.scan[1]);m.nextScan=K+R;let Ot=m.food?m.position.distanceTo(m.food.position)*.6:me.sight,Ct=null,Zt=Ht.lerp(me.rise[0],me.rise[1],m.foraging);for(let Fe of r.pellets){if(Fe.gone)continue;Vt.subVectors(Fe.position,m.position);let la=Vt.length();la>Ot||m.heading.dot(Vt)<CS.blindCosine*la||r.floating(Fe)&&m.position.y<Zt||(Ct=Fe,Ot=la)}if(!Ct||Ct===m.food)return;let Oe=r.settled(Ct)?.1+.9*m.foraging:1,Ea=me.rate*m.appetite*Oe*ne(me.sight,me.near,Ot);n()>1-Math.exp(-Ea*R)||(St(m,me.sightDrive),qt(m,Ct))}function ot(m,tt,yt){yt.subVectors(m.position,tt),yt.y*=.3,yt.lengthSq()<1e-4&&yt.copy(m.heading).negate(),Ds(yt.normalize(),i(-.7,.7));for(let[R,Ot,Ct]of[["x",Le.minX,Le.maxX],["z",Le.minZ,Le.maxZ]]){let Zt=m.position[R]+yt[R]*2.2;(Zt<Ot+.5||Zt>Ct-.5)&&(yt[R]*=-.25)}return yt.normalize()}function Ut(m,tt){It.copy(tt);let yt=gS(Sa(It)-Sa(m.heading));m.interest=null,m.food=null,m.strikeUntil=0,m.recruiter=null,m.mode="escape",m.alarm+=1,m.refractoryUntil=K+wa.refractory;let R=i(wa.burst[0],wa.burst[1]);A(m,yt,{curvature:wa.curvature*Math.min(1,.45+Math.abs(yt)/2),thrust:wa.thrust,stage1:wa.stage1,stage2:wa.stage2,burst:R,burstThrust:wa.burstThrust},Math.asin(Ht.clamp(It.y,-.4,.4))),m.until=K+wa.stage1+wa.stage2+R,h++;for(let Ot of G){if(Ot===m||Ot.mode==="escape"||Ot.pendingEscape||K<Ot.refractoryUntil)continue;V.subVectors(m.position,Ot.position);let Ct=V.length();Ct>sr.range||Ct<.001||Ot.heading.dot(V)<CS.blindCosine*Ct&&Ct>CS.lateralLine||n()>sr.chance*(1-.6*Ct/sr.range)||(d.copy(It).addScaledVector(V,-sr.spread/Ct).normalize(),Ds(d,i(-.4,.4)),Ot.pendingEscape={at:K+i(sr.latency[0],sr.latency[1]),direction:d.clone()})}}function Lt(m,tt,yt){d.subVectors(tt.position,m.position);let R=d.length();if(R>ql.range||R<.001)return;d.multiplyScalar(1/R);let Ot=m.heading.dot(d)>CS.blindCosine,Ct=-tt.velocity.dot(d)/Math.max(R,.4),Zt=ql.looming*(1+m.alarm);if(Ot&&Ct>Zt&&m.mode!=="escape"&&!m.pendingEscape&&K>=m.refractoryUntil&&n()<1-Math.exp(-yt*ql.rate*(Ct/Zt-1))){Ut(m,ot(m,tt.position,V)),N++;return}let Oe=ql.flightZone/(1+m.alarm);R<Oe&&(m.alarm+=yt*ql.familiarity,d.y*=.4,lt.addScaledVector(d,-(Oe-R)/Oe*Ye.cruise*.9),m.mode==="hover"&&(m.anchor.addScaledVector(d,-(Oe-R)*ql.giveWay*yt),or(m.anchor,Le,.5)))}function rt(m){m.mode==="escape"?g(m):m.mode==="travel"?m.interest?et(m):n()<.72?Tt(m):g(m):m.mode==="settle"?_(m):m.mode==="inspect"?(m.interest=null,Tt(m)):m.mode==="feed"&&(m.food=null,m.strikeUntil=0,m.attempts=0,g(m))}function $(m,tt,yt){if(m=Math.min(Math.max(m,0),.05),K+=m,W=tt,r)for(let R of r.pellets){if(R.serial<=Nt)continue;Nt=R.serial;let Ot=ae,Ct=dt[Ot];ae=(ae+1)%dt.length,Ct.point.copy(R.position),Ct.at=K,Pr(Ct.point,tt,ft,l),Ct.speed=ft.length();for(let Zt of G){if(Zt.splashAt||Zt.mode==="escape"||Zt.mode==="feed")continue;let Oe=Zt.position.distanceTo(Ct.point);Oe>me.splash||(Zt.splashSlot=Ot,Zt.splashAt=K+Ht.lerp(me.splashLatency[0],me.splashLatency[1],Oe/me.splash))}}for(let R of G){let{position:Ot,swim:Ct,heading:Zt}=R;Pr(Ot,tt,ut,l);let Oe=As(l,Ot);if(R.pendingEscape&&K>=R.pendingEscape.at){let{direction:z}=R.pendingEscape;R.pendingEscape=null,Ut(R,z)}R.alarm*=Math.exp(-m/ql.habituation),R.foraging>0&&(R.keen*=Math.exp(-m/Vl.keen),R.searching*=Math.exp(-m/Vl.residual),R.foraging=Math.max(R.keen,R.searching),R.foraging<.01&&(R.keen=R.searching=R.foraging=0)),R.appetite<1&&(R.appetite=Math.min(1,R.appetite+m*Vl.recovery)),w.set(0,0,0),at.set(0,0,0),Y.set(0,0,0);let Ea=0,Fe=!1,la=null,ma=1/0,kr=null,ZS=1/0;for(let z of G){if(z===R)continue;V.subVectors(z.position,Ot);let nt=V.lengthSq();if(nt>CS.visual*CS.visual)continue;let it=Math.sqrt(nt);if(Zt.dot(V)<CS.blindCosine*it&&it>CS.lateralLine)continue;Ea++,Y.add(z.position),(z.mode==="travel"||z.mode==="escape")&&at.add(z.swim).sub(Ct),v.subVectors(z.velocity,R.velocity);let Gt=Ht.clamp(-V.dot(v)/Math.max(v.lengthSq(),.001),0,ze.lookAhead);D.copy(V).addScaledVector(v,Gt);let jt=Math.min(it,D.length());jt<ze.spacing&&(D.lengthSq()<.01&&D.copy(V),w.addScaledVector(D,-(ze.spacing-jt)/(ze.spacing*Math.max(D.length(),.05))),jt<ze.crowded&&(Fe=!0)),z.mode==="travel"&&!z.interest&&it<ze.recruitRange&&it<ma&&(la=z,ma=it),z.mode==="feed"&&it<Xa.range&&it<ZS&&(kr=z,ZS=it)}if(lt.set(0,0,0),Ea){lt.addScaledVector(at,ze.alignment*(1-.85*R.keen)/Ea),Y.multiplyScalar(1/Ea).sub(Ot);let z=Y.length();z>ze.cohesionRange&&lt.addScaledVector(Y,ze.cohesion*(1-.8*R.keen)*Math.min(1,z-ze.cohesionRange)/z)}yt&&Lt(R,yt,m);let Be=1/0;r&&(M(R,m,kr),R.mode==="feed"&&(zt.copy(Ot).addScaledVector(Zt,FS*R.scale),j.subVectors(R.food.position,zt),Be=j.length(),qe.copy(R.food.position).addScaledVector(R.food.velocity,-ve.lag))),K>=R.until&&rt(R),R.mode!=="inspect"&&R.mode!=="feed"&&(R.curiosity=Math.min(1,R.curiosity+m*.012*R.character));let vS=!R.flick&&K>R.lastFlick+.6;if(R.splashAt&&K>=R.splashAt){let z=dt[R.splashSlot];if(R.splashAt=0,St(R,me.splashDrive),vS&&R.mode!=="escape"&&R.mode!=="feed"){Vt.subVectors(z.point,Ot);let nt=Math.max(Vt.length(),1e-4),it=gS(Sa(Vt)+i(-me.splashError,me.splashError)-Sa(Zt));A(R,it,T(it),Math.asin(Ht.clamp(Vt.y/nt,-.5,.5))),!R.interest&&n()<me.splashChance*R.appetite*(1-.6*nt/me.splash)&&(Vt.copy(z.point).add(ft.set(i(-.9,.9),i(-.5,.15),i(-.7,.7))),B(R,or(Vt,Le,.45),!0))}}if(R.mode==="hover"&&!R.flick){R.urge=Ht.lerp(R.urge,lt.length(),1-Math.exp(-m/.5));let z=la&&K-la.departed<ze.recruitWindow&&n()<m*ze.recruitRate;K>=R.nextExcursion?Tt(R):R.urge>ze.follow||z?Tt(R,la):Fe&&vS?Rt(R,w):K>=R.nextTwitch&&Rt(R)}else Fe&&vS&&(R.mode==="travel"||R.mode==="inspect"||R.mode==="feed"&&Be>ve.brakeRange*oS)&&Rt(R,w);Z.set(0,0,0),e.forEach((z,nt)=>{V.subVectors(Ot,z.center);let it=V.length(),Gt=it-z.radius-R.scale*.23,jt=R.interest&&R.interest.obstacle===nt?.12:.7;Gt<jt&&it>.001&&Z.addScaledVector(V,(jt-Gt)*1.25/it)});let uS=1.2;for(let[z,nt,it]of[["x",Le.minX,Le.maxX],["y",Le.minY,Le.maxY],["z",Le.minZ,Le.maxZ]])Ot[z]<nt+uS&&(Z[z]+=(nt+uS-Ot[z])*1.2),Ot[z]>it-uS&&(Z[z]-=(Ot[z]-it+uS)*1.2);let ap=Re(Ot.x,Ot.z)+Lk;Ot.y<ap+uS&&(Z.y+=(ap+uS-Ot.y)*.6);let{mode:dl}=R;if(dl==="hover")R.anchor.lerp(Ot,1-Math.exp(-m/Ya.drift)),L.subVectors(R.anchor,Ot).multiplyScalar(Ya.trim).clampLength(0,Ya.trimSpeed);else if(dl==="inspect"){V.subVectors(R.interest.point,Ot);let z=R.interest.kind==="grass"?.1:.32;L.copy(V).setLength(Math.max(0,V.length()-z)).multiplyScalar(.5).clampLength(0,.1),L.x+=Math.sin(K*.9+R.seed)*.02,L.y+=Math.sin(K*1.3+R.seed*2)*.015,K>R.peck&&(R.peck=K+i(.6,1.8),Ct.addScaledVector(V.normalize(),i(.08,.16)))}else if(dl==="travel"){L.subVectors(R.goal,Ot);let z=L.length();if(z<(R.interest?.45:.85)&&(rt(R),L.subVectors(R.goal,Ot),z=L.length()),R.mode==="travel"){let nt=Ye.cruise*R.character*(Oe?.72:1)*(1+ve.hurry*R.keen)*(R.interest?Math.min(1,.25+z/1.2):1);L.multiplyScalar(nt/z)}else L.set(0,0,0)}else if(dl==="feed"){let z=oS*R.scale,nt=Ht.clamp((Ct.dot(Zt)-ve.stalk)/ve.transit,0,1);if(R.strikeUntil)Be<=Ae.suction*z?mt(R,R.food,w):K>=R.strikeUntil&&Bt(R,R.food);else if(R.attempts&&vS&&K>=R.handling&&Zt.dot(j)<0){let it=gS(Sa(j)-Sa(Zt));A(R,it,T(it))}else K>=R.handling&&!R.flick&&Be<=R.launch*z&&Zt.dot(j)>.55*Be&&Et(R,nt);if(R.mode==="feed"){let it=ve.stalk*(.55+.45*R.appetite),Gt=(it+(ve.transit*R.character-it)*ne(ve.stalkRange*z,ve.brakeRange*z,Be))*(R.attempts?Ae.retry:1),jt=R.launch*z*ve.standoff;L.copy(qe).sub(zt).setLength(Math.min(Gt,Math.max(0,Be-jt)*ve.ease)).add(R.food.velocity),!R.strikeUntil&&Be<ve.bowReach*z&&r.nudge(R.food,r.settled(R.food)?ft.set(Zt.x*.5,.8,Zt.z*.5).normalize():Zt,ve.bowWave*Math.max(0,Ct.dot(Zt)-Gt)*(1-Be/(ve.bowReach*z))*m)}else L.set(0,0,0)}else L.set(0,0,0);L.add(Z).sub(ut),L.addScaledVector(w,ze.separation*(1-.4*R.keen)),R.mode==="travel"?L.add(lt):R.mode==="hover"?L.addScaledVector(lt,.5):R.mode==="feed"&&L.addScaledVector(lt,.3);let{flick:ie}=R,Kl=0,Wl=null,y=1,E=!1;if(ie){let z=K-ie.start,nt=Math.sign(ie.angle||1)*ie.curvature;if(z<ie.stage1){let it=z/ie.stage1;Bs(Zt,ie.yaw0+ie.angle*it*it*(3-2*it),ie.pitch),Wl=nt*Math.sin(it*Math.PI*.5),y=0,E=!0}else if(z<ie.stage1+ie.stage2){let it=(z-ie.stage1)/ie.stage2;Bs(Zt,ie.yaw0+ie.angle,ie.pitch),Wl=nt*(1-1.5*it),Kl=ie.thrust*Math.sin(it*Math.PI),y=0,E=!0}else if(z<ie.stage1+ie.stage2+ie.burst){let it=(z-ie.stage1-ie.stage2)/ie.burst;Kl=ie.burstThrust*(1-it)}else R.flick=null}gt.copy(Zt);let X=L.length();if(!E){let z=!1;if(R.mode==="inspect"?(d.subVectors(R.interest.point,Ot).normalize(),z=!0):R.mode==="feed"&&Be<ve.brakeRange*oS*R.scale?(d.copy(qe).sub(Ot).normalize(),z=!0):R.mode==="settle"?(d.copy(Zt).setY(0).normalize(),z=!0):R.mode==="escape"?(d.copy(Zt).addScaledVector(Z,2).normalize(),z=Z.lengthSq()>1e-6):X>.08&&(d.copy(L).multiplyScalar(1/X),z=!0),z){let nt=Sa(Zt),it=R.mode==="hover"?Ta.hoverRate:R.mode==="escape"?5:Math.min(R.mode==="feed"?Ta.feedRate:Ta.maximumRate,Ta.floorRate+Ct.length()*Ta.speedRate),Gt=gS(Sa(d)-nt);R.yawRate=Ht.lerp(R.yawRate,Ht.clamp(Gt*Ta.steeringGain,-it,it),1-Math.exp(-m*Ta.response));let jt=nt+R.yawRate*m,te=R.mode==="feed"?Ta.feedPitch:Ta.pitch,se=Ht.lerp(Math.asin(Zt.y),Math.asin(Ht.clamp(d.y,-te,te)),1-Math.exp(-m*4));Bs(Zt,jt,se)}}let P=Math.min(1,Math.sqrt(Kl/Ye.thrustLimit.travel))*y,F=R.mode==="escape"?6:Jl.frequency*R.character;if(ie)f.copy(Zt).multiplyScalar(Kl);else{f.subVectors(L,Ct).multiplyScalar(1/Ye.response),X>1e-4&&f.addScaledVector(L,sd(X)/X);let z=f.dot(Zt);C.copy(f).addScaledVector(Zt,-z),C.clampLength(0,Ye.scull+Ye.avoidanceScull*Math.min(1,w.length()));let nt=R.mode==="feed"&&Be<ve.brakeRange*oS*R.scale?Ye.feedBrake:Ye.brake;if(R.stroke&&(K>=R.stroke.end||z<-nt)&&(R.stroke=null,R.nextStroke=K+i(...R.mode==="feed"?Jl.feedCoast:Jl.coast)/R.character),!R.stroke&&K>=R.nextStroke&&z>Jl.minimumThrust&&Ye.thrustLimit[R.mode]>0&&Ct.dot(Zt)<L.dot(Zt)*Jl.restartSpeed){let Gt=(R.mode==="travel"||R.mode==="feed")&&X>Ye.cruise?2:1;R.stroke={start:K,end:K+Gt/F,thrust:Math.min(Ye.thrustLimit[R.mode],z*Jl.strokeGain)}}let it=Ht.clamp(z,-nt,0);if(R.stroke){let Gt=(K-R.stroke.start)/(R.stroke.end-R.stroke.start),jt=ne(0,.2,Gt)*(1-ne(.72,1,Gt));P=jt*Math.sqrt(R.stroke.thrust/Ye.thrustLimit.travel),it=R.stroke.thrust*jt*(.65+.35*Math.pow(Math.cos(R.phase),2))}f.copy(C).addScaledVector(Zt,it)}Ct.addScaledVector(f,m),C.copy(Ct).addScaledVector(Zt,-Ct.dot(Zt)),Ct.addScaledVector(C,-(1-Math.exp(-m*Ye.lateralDrag)));let pt=Ct.length();if(Ct.multiplyScalar(1/(1+m*(Ye.linearDrag+Ye.quadraticDrag*pt))),R.velocity.copy(Ct).add(ut),Ot.addScaledVector(R.velocity,m),or(Ot,Le),Wl===null){let z=(gt.x*Zt.z-gt.z*Zt.x)/Math.max(m,.001),nt=Ht.clamp(z/Math.max(pt,Ta.floorSpeed),-Ta.curvature,Ta.curvature);R.bend=Ht.lerp(R.bend,nt,1-Math.exp(-m*6))}else R.bend=Ht.lerp(R.bend,Wl,1-Math.exp(-m*45));R.effort=Ht.lerp(R.effort,P,1-Math.exp(-m*18));let ht=R.mode==="settle"?1:R.mode==="inspect"?.5:R.mode==="feed"?Be<ve.brakeRange*oS*R.scale&&!ie?.9:0:R.mode==="hover"&&!ie?.25:0;R.finBrake=Ht.lerp(R.finBrake,ht,1-Math.exp(-m*6)),(R.stroke||ie)&&(R.phase=(R.phase+m*ir*F)%ir),R.finPhase=(R.finPhase+m*ir*(2.1+R.effort*1.5))%ir,c.setXYZW(R.id,R.phase,R.effort*Jl.waveAngle,-R.bend,R.finBrake),k.setX(R.id,R.finPhase),Qt.crossVectors(Zt,pd).normalize(),Pt.crossVectors(Qt,Zt).normalize(),H.makeBasis(Zt,Pt,Qt),Kt.setFromRotationMatrix(H),At.setFromAxisAngle(nd,-Ht.clamp(R.bend,-1.8,1.8)*.08),Kt.multiply(At),R.quaternion.copy(Kt),xt.setScalar(R.scale),Q.compose(Ot,R.quaternion,xt),U.setMatrixAt(R.id,Q),u.setMatrixAt(R.id,Q)}U.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,k.needsUpdate=!0}for(let m of G)m.id%4!==0&&Tt(m);return $(0,0,null),{update:$,fish:G,getTelemetry(){let m={hover:0,travel:0,settle:0,inspect:0,feed:0,escape:0},tt=0,yt=0,R=0,Ot=0;for(let Ct of G){m[Ct.mode]++,Ct.flick&&Ct.mode!=="escape"&&tt++,Ct.foraging>Vl.searching&&Ot++;let Zt=Ct.velocity.length();yt+=Zt,R=Math.max(R,Zt)}return{count:p,states:m,twitching:tt,averageSpeed:yt/p,maximumSpeed:R,pointerResponses:N,escapes:h,foraging:Ot,strikes:vt,bites:Je,simulationTime:K}},dispose(){S.remove(U,u),o.body.dispose(),o.fins.dispose(),b.dispose(),J.dispose(),q.dispose()}}}var We={radius:[.0105,.014],sink:[.33,.47],float:[2.2,4.5],lingerChance:.15,linger:[22,55],bob:.016,bobRate:3.8,glide:.14,spin:[.3,1.2],stagger:[.03,.12],perPinch:10,capacity:100,life:[20,40],swallow:.12,shoveLimit:.36},Ik=8.15,ei={x:.26,minZ:-.6,maxZ:2.2},cr={minX:-8.2,maxX:8.2,minZ:-4.5,maxZ:3},ai={drag:5.5,settleTime:.9,recovery:8};function Ok(S,{thickets:t=[]}={}){let e=Wa(902311),a=(V,d)=>V+e()*(d-V),l=V=>-V*Math.log(1-e()),r=new Aa({color:16777215,roughness:.82});r.onBeforeCompile=V=>kl(V),r.customProgramCacheKey=()=>"food-pellet-v1";let p=new SS(new Ql(1,0),r,We.capacity);p.name="Sinking food pellets",p.receiveShadow=!0,p.castShadow=!1,p.frustumCulled=!1,p.instanceMatrix.setUsage(AS),p.count=0,S.add(p);let n=new ct;for(let V=0;V<We.capacity;V++)p.setColorAt(V,n.setRGB(0,0,0));let i=[],s=[],o={dropped:0,eaten:0,dissolved:0},c=0,k=0,b=new O,J=new $e,q=new O,U=new pe;function u(V,d=We.perPinch){let L=c;for(let f=0;f<d&&!(i.length+s.length>=We.capacity);f++)L+=a(We.stagger[0],We.stagger[1]),s.push({at:L,x:Ht.clamp(V.x+a(-ei.x,ei.x),cr.minX+.5,cr.maxX-.5),z:a(ei.minZ,ei.maxZ)})}function x({x:V,z:d}){let L=e()<We.lingerChance,f={serial:k++,position:new O(V,Ik,d),velocity:new O,shoved:0,kick:new O,radius:a(We.radius[0],We.radius[1]),shape:new O(a(.9,1.15),a(.85,1.1),a(.9,1.15)),axis:new O(a(-1,1),a(-1,1),a(-1,1)).normalize(),angle:a(0,Math.PI*2),spin:a(We.spin[0],We.spin[1]),tint:new ct().setHSL(a(.05,.09),a(.5,.68),a(.36,.52)),glide:new O(a(-1,1),0,a(-1,1)).normalize().multiplyScalar(a(0,We.glide)),sink:a(We.sink[0],We.sink[1]),bornAt:c,life:a(We.life[0],We.life[1]),wetAt:L?c+a(We.linger[0],We.linger[1]):c+We.float[0]+l(We.float[1]),bob:a(0,Math.PI*2),settledAt:0,gone:!1,eatenAt:0};return i.push(f),o.dropped++,f}let K=V=>c<V.wetAt,W=V=>V.settledAt>0;function N(V){return V.gone||V.eatenAt?!1:(V.eatenAt=c,V.gone=!0,o.eaten++,!0)}function h(V,d,L){if(V.gone)return;let f=Math.max(0,We.shoveLimit-V.shoved),C=Math.min(L,f);C<=0||(V.shoved+=C,V.kick.addScaledVector(d,C*ai.drag),V.settledAt=0)}function I(V){let d=i.pop();V<i.length&&(i[V]=d)}function G(V,d){for(V=Math.min(Math.max(V,0),.05),c+=V;s.length&&s[0].at<=c;)x(s.shift());for(let L=i.length-1;L>=0;L--){let f=i[L],{position:C,velocity:Z}=f;if(f.eatenAt){c-f.eatenAt>We.swallow&&I(L);continue}let w=Re(C.x,C.z)+f.radius*.7,v=K(f);Pr(C,d,b,t),Z.copy(b).add(f.kick),v?Z.y=0:W(f)?Z.set(0,0,0):(Z.y-=f.sink,Z.addScaledVector(f.glide,f.sink)),f.kick.multiplyScalar(Math.exp(-V*ai.drag)),f.shoved*=Math.exp(-V/ai.recovery),C.addScaledVector(Z,V),C.x=Ht.clamp(C.x,cr.minX,cr.maxX),C.z=Ht.clamp(C.z,cr.minZ,cr.maxZ),v?(f.bob+=V*We.bobRate,C.y=Ik+Math.sin(f.bob)*We.bob):C.y<=w&&(C.y=w,W(f)||(f.settledAt=c));let D=W(f)?Math.max(0,1-(c-f.settledAt)/ai.settleTime):1;f.angle+=V*f.spin*D,c-f.bornAt>f.life&&(f.gone=!0,o.dissolved++,I(L))}for(let L=0;L<i.length;L++){let f=i[L],C=f.eatenAt?Math.max(0,1-(c-f.eatenAt)/We.swallow):1,Z=1-.5*Math.min(1,(c-f.bornAt)/f.life);J.setFromAxisAngle(f.axis,f.angle),q.copy(f.shape).multiplyScalar(f.radius*C*Z),U.compose(f.position,J,q),p.setMatrixAt(L,U),p.setColorAt(L,f.tint)}p.count=i.length,p.instanceMatrix.needsUpdate=!0,i.length&&(p.instanceColor.needsUpdate=!0)}return{drop:u,update:G,pellets:i,take:N,nudge:h,floating:K,settled:W,stats:o,dispose(){S.remove(p),p.geometry.dispose(),r.dispose()}}}function Gk(S,{fps:t=60,paused:e=!1,hidden:a=!1,clock:l=()=>performance.now(),requestFrame:r=s=>requestAnimationFrame(s),cancelFrame:p=s=>cancelAnimationFrame(s),delay:n=(s,o)=>setTimeout(s,o),cancelDelay:i=s=>clearTimeout(s)}={}){let s=null,o=null,c=!0,k=!1,b=null,J=l(),q=h=>Number.isFinite(h)&&h>0?Math.min(360,h):0;t=q(t);let U=()=>t>0&&!e&&!a&&!k,u=()=>{s!==null&&p(s),o!==null&&i(o),s=o=null};function x(){if(k||a||!c&&!U()||s!==null||o!==null)return;let h=c?0:J-l()-3;h>4?o=n(()=>{o=null,s=r(K)},h):s=r(K)}function K(h){if(s=null,k||a||!c&&!U())return;if(!c&&h+.5<J){x();return}let I=U(),G=I&&b!==null?Math.min(.1,Math.max(0,(h-b)/1e3)):0;if(b=I?h:null,c=!1,S(G,h),I){let V=1e3/t;J+=V,J<=h+.5&&(J=h+V)}x()}function W(){u(),b=null,J=l(),x()}let N={setRate(h){let I=q(h);I!==t&&(t=I,W())},setPaused(h){e!==!!h&&(e=!!h,W())},setHidden(h){a!==!!h&&(a=!!h,W())},invalidate(){c=!0,u(),x()},dispose(){k=!0,u()},get state(){return{fps:t,paused:e,hidden:a,running:U(),pending:s!==null||o!==null}}};return x(),N}var fk=Object.freeze({fluid:Object.freeze({name:"fluid",resolution:1,batteryResolution:.7,shadowSize:768,shadowHz:12,batteryShadowHz:6,aoSamples:1,backgroundDensity:.58,backgroundRows:16,backgroundCols:2,powerPreference:"high-performance",samples:2,plantShadows:!1}),balanced:Object.freeze({name:"balanced",resolution:1.25,batteryResolution:1.15,shadowSize:2048,shadowHz:30,batteryShadowHz:15,aoSamples:8,backgroundDensity:.7,backgroundRows:20,backgroundCols:2,powerPreference:"low-power",samples:4,plantShadows:!0}),reference:Object.freeze({name:"reference",shadowSize:4096,shadowHz:1/0,batteryShadowHz:1/0,aoSamples:12,backgroundDensity:1,backgroundRows:30,backgroundCols:6,powerPreference:"high-performance",samples:4,plantShadows:!0})});function Mk({minScale:S=.75,step:t=.05,slowMs:e=38,fastMs:a=24,slowFrames:l=30,fastFrames:r=300}={}){let p=1,n=0,i=0;return{get scale(){return p},reset(){p=1,n=0,i=0},update(s,o=!0){if(!o||!Number.isFinite(s))return!1;if(s>=e){if(n++,i=0,n>=l&&p>S)return p=Math.max(S,p-t),n=0,!0}else if(s<=a){if(i++,n=0,i>=r&&p<1)return p=Math.min(1,p+t),i=0,!0}else n=0,i=0;return!1}}}function Si({profile:S="balanced",wallpaper:t=!1,pixelRatio:e=1,onBattery:a=!1,intelGPU:l=!1}={}){let r=fk[S]||fk.balanced,p=Number.isFinite(e)&&e>0?e:1,n=t?Math.min(2,Math.max(1.5,p)):1.5,i=l&&r.name==="fluid";return{...r,resolution:r.name==="reference"?n:a?r.batteryResolution:r.resolution,referenceResolution:n,animatedShadows:!i&&r.name!=="reference",plantDistanceLod:i,shadowSize:i?512:r.shadowSize,shadowHz:a?r.batteryShadowHz:i?6:r.shadowHz,samples:i?0:r.samples,aoSamples:i?0:r.aoSamples}}function Ek(S,t,e,a=8192){if(!(S>0&&t>0&&e>0))return null;let l=Math.min(e,a/S,a/t);return{width:Math.max(1,Math.round(S*l)),height:Math.max(1,Math.round(t*l)),scale:l}}var cS=document.querySelector("#scene"),gk=document.querySelector("#habitat"),$r=document.querySelector("#loading"),bS=document.documentElement.dataset.motion!=="host"&&matchMedia("(prefers-reduced-motion: reduce)").matches,_s=new URLSearchParams(location.search),eo=document.documentElement.dataset.motion==="host",tp=prefs.profile||"fluid",Zk=prefs.fishCount||24;_s.get("still")==="1"&&(bS=!0);var $s=!1,_r=!1,Ue=Si({profile:tp,wallpaper:eo,pixelRatio:devicePixelRatio}),li=Mk(),ep=prefs.frameRate,kS=null,vk=null;window.habitatRate=S=>{ep=Number.isFinite(S)&&S>0?Math.min(360,S):0,kS?.setRate(ep)};window.habitatPower=S=>{!!S!==$s&&(Ue=Si({profile:tp,wallpaper:eo,pixelRatio:devicePixelRatio,onBattery:$s,intelGPU:_r}),vk?.())};var to=null;window.habitatFeed=()=>{to&&!bS&&ep>0&&!document.hidden&&to()};function cd(S){console.error(S),$r.hidden=!1,$r.textContent="Kh\xF4ng kh\u1EDFi t\u1EA1o \u0111\u01B0\u1EE3c WebGL2. B\u1EADt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng v\xE0 th\u1EED m\u1EDF l\u1EA1i. "+S.message,$r.style.cssText="padding:10vh 10vw;color:#d7e5dd;pointer-events:auto"}async function kd(){let S=new Hn({canvas:cS,antialias:!1,alpha:!1,powerPreference:Ue.powerPreference}),t=S.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),a=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);_r=/intel/i.test(String(a||"")),Ue=Si({profile:tp,wallpaper:eo,pixelRatio:devicePixelRatio,intelGPU:_r}),S.setPixelRatio(1),S.shadowMap.enabled=!0,S.shadowMap.autoUpdate=!1,S.info.autoReset=!1,S.shadowMap.type=Cr,S.toneMapping=an,S.toneMappingExposure=prefs.light/100*1.17,S.outputColorSpace=He;let l=new $S;l.background=new ct("#050f0c"),l.fog=new Ir("#16312a",.034);let r=new Pe(25.8,1420/740,.2,65);r.position.set(0,4.65,20.5),r.lookAt(0,4.15,0),l.add(new Er(12834749,3486759,.3));let p=new ll(16775406,4.5);p.position.set(-3,11.5,4.4),p.target.position.set(0,1,0),p.castShadow=!0,p.shadow.mapSize.set(Ue.shadowSize,Ue.shadowSize),Object.assign(p.shadow.camera,{left:-12,right:12,top:14,bottom:-10,near:1,far:27}),p.shadow.bias=-12e-5,p.shadow.normalBias=.018,p.shadow.radius=3*Ue.shadowSize/4096,l.add(p,p.target);let n=new ll(12769508,.44);n.position.set(1,5,10),l.add(n);let i=new ll(14416314,.8);i.position.set(2,10,-4),l.add(i);let s=new $S;s.background=new ct("#253129");let o=new je(new La(16,4),new aS({color:new ct(3.7,3.8,3.4),side:fe}));o.position.set(0,6,1),o.rotation.x=Math.PI/2,s.add(o);let c=new je(new La(18,8),new aS({color:new ct(.24,.32,.29),side:fe}));c.position.z=8,s.add(c);let k=new Sr(S),b=k.fromScene(s,.025,.1,30);l.environment=b.texture,l.environmentIntensity=.55,k.dispose(),o.geometry.dispose(),o.material.dispose(),c.geometry.dispose(),c.material.dispose();let J=new je(new La(44,24),new Aa({color:1915436,roughness:1}));J.position.set(0,7,-7.2),J.receiveShadow=!0,l.add(J);let q=Uk(l,{...Ue,distanceLod:Ue.plantDistanceLod,animatedShadows:Ue.animatedShadows,castShadows:Ue.plantShadows}),U=Ok(l,{thickets:q.thickets}),u=Ak(l,{count:Zk,obstacles,landmarks,thickets:q.thickets,food:U}),x=Bc(l,{thickets:q.thickets}),K=new da(1,1,{type:LS,samples:Ue.samples});K.depthTexture=new tl(1,1,Za);let W=new $S,N=new Sl(-1,1,1,-1,0,1),h=Ue.aoSamples>1?14.85/(Ue.aoSamples-1):0,I=Ue.aoSamples>0?.022*12/Ue.aoSamples:0,G=Ue.aoSamples>0?`
        float center=distanceAt(vUv);
        for(int i=0;i<${Ue.aoSamples};i++) {
          float a=float(i)*2.399963;float radius=2.5+float(i)*${h.toFixed(8)};
          float sampleDepth=distanceAt(vUv+vec2(cos(a),sin(a))*radius*aoRadiusScale/size);
          float difference=center-sampleDepth;
          occlusion+=smoothstep(.012,.13,difference)*(1.-smoothstep(.2,.8,difference));
        }
      `:"",V=new ta({uniforms:{beauty:{value:K.texture},depth:{value:K.depthTexture},size:{value:new Dt},nearFar:{value:new Dt(r.near,r.far)},aoRadiusScale:{value:1}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
      uniform sampler2D beauty;uniform sampler2D depth;uniform vec2 size;uniform vec2 nearFar;uniform float aoRadiusScale;varying vec2 vUv;
      float distanceAt(vec2 p){float z=texture2D(depth,p).x;return nearFar.x*nearFar.y/(nearFar.y-z*(nearFar.y-nearFar.x));}
      void main(){
        vec3 color=texture2D(beauty,vUv).rgb;float occlusion=0.;
        ${G}
        color*=1.-occlusion*${I.toFixed(8)};
        float vignette=dot((vUv-.5)*vec2(1.,.85),(vUv-.5)*vec2(1.,.85));
        color*=1.-vignette*.15;
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});W.add(new je(new La(2,2),V));let d=!1,L=!1,f=!0,C=Math.min(S.capabilities.maxTextureSize,S.getContext().getParameter(S.getContext().MAX_RENDERBUFFER_SIZE));function Z(){kS?.setHidden(document.hidden||d||L)}function w(){let j=cS.getBoundingClientRect(),ft=Ek(j.width,j.height,Math.min(Ue.resolution*prefs.renderScale/100*li.scale,Math.sqrt(42e5/(j.width*j.height))),C);if(L=!ft,Z(),!ft)return;let{width:Vt,height:bt,scale:dt}=ft;(K.width!==Vt||K.height!==bt)&&(S.setSize(Vt,bt,!1),K.setSize(Vt,bt),V.uniforms.size.value.set(Vt,bt),V.uniforms.aoRadiusScale.value=dt/Ue.referenceResolution,r.aspect=j.width/j.height,r.updateProjectionMatrix(),x.update(bt/(2*Math.tan(Ht.degToRad(r.fov)/2))),f=!0,kS?.invalidate())}new ResizeObserver(w).observe(gk),window.addEventListener("resize",w),document.addEventListener("visibilitychange",Z),cS.addEventListener("webglcontextlost",j=>{j.preventDefault(),d=!0,Z()}),cS.addEventListener("webglcontextrestored",()=>{location.reload()}),vk=()=>{f=!0,w()},w();let D=null,Y=0,at=new O,lt=new O,ut=new Fr,It=new Va(new O(0,0,1),-2.6);cS.addEventListener("pointermove",j=>{if(!prefs.follow){D=null;return}let ft=cS.getBoundingClientRect(),Vt=new Dt((j.clientX-ft.left)/ft.width*2-1,-(j.clientY-ft.top)/ft.height*2+1);if(ut.setFromCamera(Vt,r),ut.ray.intersectPlane(It,at)){let bt=performance.now();if(D){let dt=Math.max(.004,(bt-Y)/1e3);lt.subVectors(at,D.position).divideScalar(dt),D.velocity.lerp(lt,.5),D.position.copy(at)}else D={position:at.clone(),velocity:new O};Y=bt}}),cS.addEventListener("pointerleave",()=>{D=null});let gt=new O;cS.addEventListener("pointerdown",j=>{if(j.button!==0||!j.isPrimary||bS||ep===0)return;let ft=cS.getBoundingClientRect();ut.setFromCamera(new Dt((j.clientX-ft.left)/ft.width*2-1,-(j.clientY-ft.top)/ft.height*2+1),r),ut.ray.intersectPlane(It,gt)&&U.drop(gt)});let Pt=Wa(715249);to=()=>{U.drop(gt.set(-3.6+Pt()*7.2,0,0))};function Qt(){document.fullscreenElement?document.exitFullscreen():gk.requestFullscreen().catch(j=>console.warn(j.message))}if(document.addEventListener("keydown",j=>{j.repeat||/INPUT|SELECT|BUTTON/.test(j.target.tagName)||(j.code==="Space"&&(j.preventDefault(),window.stillwaterSet("paused",!bS)),j.key.toLowerCase()==="f"&&Qt())}),l.traverse(j=>{j.updateMatrix(),j.matrixAutoUpdate=!1}),l.updateMatrixWorld(!0),l.matrixWorldAutoUpdate=!1,W.updateMatrixWorld(!0),W.matrixWorldAutoUpdate=!1,S.compileAsync)try{await S.compileAsync(l,r),await S.compileAsync(W,N)}catch(j){console.warn("Shader warmup skipped:",j.message)}let H=0,Q=-1/0,Kt=0,At=0,xt=!1,zt=prefs.showStats||_s.get("diagnostics")==="1";function qe(j,ft){let Vt=Math.min(.1,j),bt=Math.max(1,Math.round(Vt*60)),dt=Vt/bt;for(let Nt=0;Vt>0&&Nt<bt;Nt++)H+=dt,fS.value=H,U.update(dt,H),u.update(dt,H,D);D&&ft-Y>60&&D.velocity.multiplyScalar(Math.exp(-j*12)),li.update(j*1e3,tp==="fluid"&&_r)&&w();let ae=f||Ue.animatedShadows&&H-Q+1e-7>=1/Ue.shadowHz;S.shadowMap.needsUpdate=ae,ae&&(Q=H,f=!1,At++),zt&&S.info.reset(),S.setRenderTarget(K),S.render(l,r),S.setRenderTarget(null),S.render(W,N),Kt++,zt&&window.stillwaterMeter?.(ft,{framebuffer:[K.width,K.height],calls:S.info.render.calls}),xt||(xt=!0,$r.style.opacity=0,setTimeout(()=>{$r.hidden=!0},850))}kS=Gk(qe,{fps:ep,paused:prefs.paused||bS,hidden:document.hidden||L||d}),bS=prefs.paused||bS,window.stillwaterApply=j=>{j==="frameRate"&&window.habitatRate(prefs.frameRate),(j==="profile"||j==="fishCount")&&location.reload(),j==="paused"&&(bS=prefs.paused,kS.setPaused(bS)),j==="follow"&&!prefs.follow&&(D=null),j==="renderScale"&&(li.reset(),w()),j==="light"&&(S.toneMappingExposure=prefs.light/100*1.17,kS.invalidate()),j==="feed"&&window.habitatFeed()};for(let j of["frameRate","paused","renderScale","light","follow"])window.stillwaterApply(j);if(window.habitatStats=()=>({ready:xt,foodCount:U.pellets?.length,profile:tp,fishCount:Zk,intelGPU:_r,onBattery:$s,resolution:Ue.resolution,adaptiveScale:li.scale,animatedShadows:Ue.animatedShadows,framebuffer:[K.width,K.height],samples:K.samples,aoSamples:Ue.aoSamples,shadowSize:Ue.shadowSize,shadowHz:Number.isFinite(Ue.shadowHz)?Ue.shadowHz:"per-frame",renderedFrames:Kt,shadowFrames:At,simulationTime:H,drawCalls:S.info.render.calls,triangles:S.info.render.triangles,plants:{...q.stats},loop:kS.state}),_s.get("diagnostics")==="1"){let{installDiagnostics:j}=await Promise.resolve().then(()=>(Ck(),Fk));j({renderer:S,loop:kS,renderFrame:qe,stats:window.habitatStats})}window.addEventListener("pagehide",()=>{kS.setHidden(!0)}),window.addEventListener("pageshow",Z)}kd().catch(cd);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
