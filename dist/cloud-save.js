(()=>{
const API='https://print-design-vault.meako.chatgpt.site';
let activeCode='';
const $=s=>document.querySelector(s), wait=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
const configIds=['capStyle','ring','margin','height','pitch','hole','plate','gap','stem','baseColor','capColor','inkColor'];
function settings(){const o={};for(const id of configIds){const e=$('#'+id);if(e)o[id]=e.value}return o}
function setSettings(o){for(const [id,value] of Object.entries(o||{})){const e=$('#'+id);if(e){e.value=value;e.dispatchEvent(new Event(e.type==='select-one'?'change':'input',{bubbles:true}))}}}
function parseHex(h){return[1,3,5].map(i=>parseInt(h.slice(i,i+2),16))}
function captureMask(){
 const src=$('#artPreview'),cv=document.createElement('canvas');cv.width=cv.height=48;const c=cv.getContext('2d',{willReadFrequently:true});c.drawImage(src,0,0,48,48);
 const source=src.getContext('2d',{willReadFrequently:true}).getImageData(0,0,144,144).data,px=c.createImageData(48,48),cap=parseHex($('#keyCapColor').value.toLowerCase());
 for(let y=0;y<48;y++)for(let x=0;x<48;x++){const a=((y*3+1)*144+x*3+1)*4,b=(y*48+x)*4,same=Math.abs(source[a]-cap[0])<2&&Math.abs(source[a+1]-cap[1])<2&&Math.abs(source[a+2]-cap[2])<2;px.data[b]=px.data[b+1]=px.data[b+2]=0;px.data[b+3]=same?0:255}
 c.putImageData(px,0,0);return cv.toDataURL('image/png')
}
async function snapshot(){
 const layout=document.querySelector('[data-layout].active')?.dataset.layout||'arrows';
 const view=document.querySelector('[data-view].active')?.dataset.view||'assembled';
 const target=$('#target'),old=target.value,keys=[];
 const cells=[...target.options].filter(o=>o.value!=='all').map(o=>{const m=o.textContent.match(/第 (\d+) 列、第 (\d+) 欄/);return m?[+m[2]-1,+m[1]-1]:null}).filter(Boolean);
 for(const option of [...target.options]){if(option.value==='all')continue;target.value=option.value;target.dispatchEvent(new Event('change',{bubbles:true}));await wait();
 const type=$('#artType').value,art={type,text:$('#artText').value,size:+$('#artSize').value,mode:$('#imageMode').value,threshold:+$('#threshold').value};
 if(type==='image')art.mask=captureMask();
 keys.push({cap:$('#keyCapColor').value,ink:$('#keyInkColor').value,art});
 }
 target.value=old;target.dispatchEvent(new Event('change',{bubbles:true}));
 return {app:'clicker',name:'Clicker '+layout+' 設計',data:{layout,cells,view,settings:settings(),keys}};
}
async function setImage(data,index){
 const file=new File([await (await fetch(data)).blob()],`cloud-key-${index}.png`,{type:'image/png'}),dt=new DataTransfer();dt.items.add(file);const input=$('#artImage');input.files=dt.files;input.dispatchEvent(new Event('change',{bubbles:true}));
 const started=Date.now();while($('#imageName').textContent!==file.name&&Date.now()-started<4000)await new Promise(r=>setTimeout(r,25));
 if($('#imageName').textContent!==file.name)throw Error('圖案載入逾時，請再試一次。');
}
async function restore(payload){
 if(payload?.app!=='clicker'||!payload?.data)throw Error('這不是 Clicker Studio 的設計檔。');
 const d=payload.data;document.querySelector(`[data-layout="${d.layout}"]`)?.click();setSettings(d.settings);
 if(d.layout==='custom'){
   for(const b of [...document.querySelectorAll('#customGrid button')])if(b.getAttribute('aria-pressed')==='true')b.click();
   for(const [x,y] of d.cells||[]){const b=document.querySelector(`#customGrid button[aria-label="第 ${y+1} 列第 ${x+1} 欄"]`);if(b&&b.getAttribute('aria-pressed')!=='true')b.click()}
 }
 document.querySelector(`[data-view="${d.view}"]`)?.click();await wait();
 const target=$('#target');
 for(let i=0;i<(d.keys||[]).length;i++){
   const k=d.keys[i];target.value=String(i);target.dispatchEvent(new Event('change',{bubbles:true}));await wait();
   $('#keyCapColor').value=k.cap;$('#keyInkColor').value=k.ink;$('#applyKeyColors').click();
   const a=k.art||{};$('#artType').value=a.type||'none';$('#artText').value=a.text||'';$('#artSize').value=String(a.size||10);$('#imageMode').value=a.mode||'dark';$('#threshold').value=String(a.threshold||150);
   if(a.type==='image'&&a.mask){$('#artType').value='image';$('#imageMode').value='alpha';await setImage(a.mask,i)}
   $('#applyArt').click();
 }
 target.value='all';target.dispatchEvent(new Event('change',{bubbles:true}));
}
async function save(){
 if(!document.querySelector('#dims')?.textContent||document.querySelector('#stageError')?.hidden===false)throw Error('請先完成可用的按鍵配置。');
 const b=$('#cloudSave');b.disabled=true;$('#cloudMsg').textContent='正在儲存設計…';
 try{const response=await fetch(API+'/api/designs'+(activeCode?'/'+activeCode:''),{method:activeCode?'PUT':'POST',headers:{'content-type':'application/json'},body:JSON.stringify(await snapshot())}),result=await response.json();if(!response.ok)throw Error(result.error||'儲存失敗。');activeCode=result.code;$('#cloudCode').value=result.code;$('#cloudSavedCode').textContent='存取碼：'+result.code;$('#cloudMsg').textContent='已儲存；請記下存取碼。'}finally{b.disabled=false}
}
async function loadCode(){
 const code=$('#cloudCode').value.trim();if(!/^[0-9]{8}$/.test(code))throw Error('請輸入 8 位數字存取碼。');
 $('#cloudMsg').textContent='正在開啟設計…';const response=await fetch(API+'/api/designs/'+code),payload=await response.json();if(!response.ok)throw Error(payload.error||'開啟失敗。');await restore(payload);activeCode=code;$('#cloudSavedCode').textContent='存取碼：'+code;$('#cloudMsg').textContent='設計已開啟，可修改後再次儲存。'
}
function report(e){$('#cloudMsg').textContent=e?.message||'雲端操作失敗。'}
$('#cloudSave').onclick=()=>save().catch(report);$('#cloudLoad').onclick=()=>loadCode().catch(report);$('#cloudCode').oninput=e=>e.target.value=e.target.value.replace(/[^0-9]/g,'').slice(0,8);
})();