// Settings are available before the renderer starts, including early Lively callbacks.
(()=>{
 const defaults={frameRate:360,renderScale:75,light:100,follow:true,showStats:false,paused:false};
 const prefs={...defaults};const rates=[60,120,144,165,240,360];
 function frameRateValue(value,fromLively=false){
  if(typeof value==='string'){
   const label=value.match(/\d+/)?.[0];
   if(label&&rates.includes(Number(label)))return Number(label);
  }
  const n=Number(value);
  if(fromLively&&Number.isInteger(n)&&n>=0&&n<rates.length)return rates[n];
  return rates.includes(n)?n:defaults.frameRate;
 }
 function normalize(name,value){
  if(['follow','showStats','paused'].includes(name))return value===true||value==='true';
  const n=Number(value);if(!Number.isFinite(n))return defaults[name];
  if(name==='frameRate')return frameRateValue(value);
  if(name==='renderScale')return Math.max(50,Math.min(125,n));
  if(name==='light')return Math.max(50,Math.min(140,n));
 }
 try{const saved=JSON.parse(localStorage.getItem('stillwater3d')||'{}');for(const k in defaults)if(k in saved)prefs[k]=normalize(k,saved[k])}catch{}
 window.stillwaterPreferences=prefs;
 const panel=document.getElementById('panel'),stats=document.getElementById('stats');
 function sync(){for(const key in prefs){const e=document.getElementById(key);if(!e)continue;if(e.type==='checkbox')e.checked=prefs[key];else e.value=String(prefs[key]);const out=document.getElementById(key+'Value');if(out)out.textContent=prefs[key]+'%'}const rate=document.getElementById('frameRateStatus');if(rate)rate.textContent=prefs.frameRate===360?'Theo màn hình':`${prefs.frameRate} FPS`;stats.hidden=!prefs.showStats;document.getElementById('pause').textContent=prefs.paused?'Tiếp tục':'Tạm dừng';if(prefs.paused)stats.textContent='Đã tạm dừng';}
 window.stillwaterSet=(name,value)=>{
  if(name==='feed'){window.stillwaterApply?.('feed');return}
  if(!(name in defaults))return;
  prefs[name]=normalize(name,value);sync();
  try{localStorage.setItem('stillwater3d',JSON.stringify(prefs))}catch{}
  window.stillwaterApply?.(name);
 };
 window.livelyPropertyListener=(name,val)=>{
  if(name==='frameRate')val=frameRateValue(val,true);
  window.stillwaterSet(name,val);
 };
 for(const key in defaults){const e=document.getElementById(key);if(!e)continue;const event=e.tagName==='SELECT'||e.type==='checkbox'?'change':'input';e.addEventListener(event,()=>window.stillwaterSet(key,e.type==='checkbox'?e.checked:e.value))}
 document.getElementById('settings').onclick=()=>panel.showModal();
 document.getElementById('close').onclick=()=>panel.close();
 document.getElementById('feed').onclick=()=>window.stillwaterSet('feed');
 document.getElementById('pause').onclick=()=>window.stillwaterSet('paused',!prefs.paused);
 document.getElementById('reset').onclick=()=>{for(const key in defaults)window.stillwaterSet(key,defaults[key])};
 let last=null,start=null,count=0,frames=0;const intervals=new Float64Array(720);let index=0;
 window.stillwaterMeter=(now,detail)=>{
   if(last!==null&&now-last<250){intervals[index++%intervals.length]=now-last;count++}else{count=0;index=0;start=now;frames=0}
   last=now;frames++;
   if(start===null)start=now;
   if(now-start>=1000){
    const n=Math.min(count,intervals.length),sorted=Array.from(intervals.subarray(0,n)).sort((a,b)=>a-b);
    const measured=(frames-1)*1000/(now-start),p95=sorted[Math.floor((n-1)*.95)]||0;
    window.stillwaterPerformance={fps:measured,p95Ms:p95,requested:prefs.frameRate,...detail};
    if(prefs.showStats)stats.textContent=`${measured.toFixed(0)} FPS · p95 ${p95.toFixed(1)} ms · ${detail.framebuffer.join('×')}`;
    start=now;frames=1;
   }
 };
 document.addEventListener('visibilitychange',()=>{last=null});
 sync();setTimeout(()=>document.getElementById('hint').classList.add('gone'),6500);
})();
