(function(){
var K='a11y',s={};try{s=JSON.parse(localStorage.getItem(K))||{}}catch(e){}
var st=document.createElement('style');st.textContent=
'.top{padding-left:64px!important}#a11y-b{position:fixed;top:12px;left:12px;z-index:99;width:46px;height:46px;border-radius:50%;border:2px solid #fff;background:#1E2A4A;color:#fff;font-size:24px;cursor:pointer;box-shadow:0 2px 10px #0004}'+
'#a11y-p{position:fixed;top:66px;left:12px;z-index:99;background:#fff;color:#1a1a1a;border-radius:14px;padding:12px;width:230px;box-shadow:0 6px 24px #0004;display:none;font-family:Heebo,sans-serif;direction:rtl}'+
'#a11y-p.open{display:block}#a11y-p b{display:block;margin-bottom:8px;color:#1E2A4A}'+
'#a11y-p button{display:block;width:100%;text-align:right;margin:4px 0;padding:9px 12px;border:1px solid #ccd;border-radius:10px;background:#f4f6fb;font:500 .95rem Heebo,sans-serif;color:#1a1a1a;cursor:pointer}'+
'#a11y-p button[aria-pressed=true]{background:#1E2A4A;color:#fff}#a11y-p a{display:block;margin-top:8px;color:#1E2A4A;font-size:.9rem}'+
'html.a-hc body,html.a-hc main,html.a-hc .c,html.a-hc .card,html.a-hc .box,html.a-hc .bar,html.a-hc header,html.a-hc .top{background:#000!important;color:#ff0!important}'+
'html.a-hc a,html.a-hc button:not(#a11y-b):not(#a11y-p button){color:#0ff!important}html.a-hc *{border-color:#ff0!important}'+
'html.a-ln a{text-decoration:underline!important;outline:2px dashed currentColor;outline-offset:2px}'+
'html.a-na *,html.a-na *::before,html.a-na *::after{animation:none!important;transition:none!important}html.a-na{scroll-behavior:auto!important}html.a-hc .more,html.a-hc footer,html.a-hc .cta,html.a-hc .note,html.a-hc .steps li,html.a-hc details,html.a-hc .tz-r,html.a-hc .dm-m,html.a-hc .dm-t,html.a-hc .dm-n,html.a-hc .badge,html.a-hc .clock,html.a-hc .ev,html.a-hc .wf input,html.a-hc .wf select,html.a-hc .wf textarea,html.a-hc .ch span{background:#000!important;color:#ff0!important}html.a-hc .more{box-shadow:0 0 0 100vmax #000!important}html.a-hc .btn,html.a-hc .btn2{background:#000!important;color:#ff0!important;border:3px solid #ff0!important;box-shadow:none!important}html.a-hc .ch input:checked+span{background:#ff0!important;color:#000!important}html.a-hc h1,html.a-hc h2,html.a-hc h3,html.a-hc .more-l,html.a-hc .wf label,html.a-hc legend{color:#ff0!important;text-shadow:none!important}'+
'html.a-rf body,html.a-rf body *:not(#a11y-b){font-family:Arial,sans-serif!important;letter-spacing:.03em}';
document.head.appendChild(st);
var h=document.documentElement;
function apply(){h.style.fontSize=(s.z?100+s.z*12.5:100)+'%';['hc','ln','na','rf'].forEach(function(k){h.classList.toggle('a-'+k,!!s[k])});
 try{localStorage.setItem(K,JSON.stringify(s))}catch(e){}
 var p=document.getElementById('a11y-p');if(p)p.querySelectorAll('[data-k]').forEach(function(b){b.setAttribute('aria-pressed',!!s[b.dataset.k])})}
function ui(){var b=document.createElement('button');b.id='a11y-b';b.textContent='♿';b.setAttribute('aria-label','תפריט נגישות');b.setAttribute('aria-expanded','false');b.setAttribute('aria-controls','a11y-p');
 var p=document.createElement('div');p.id='a11y-p';p.setAttribute('role','dialog');p.setAttribute('aria-label','תפריט נגישות');
 p.innerHTML='<b>נגישות</b><button data-a="+">🔍 הגדלת טקסט</button><button data-a="-">🔎 הקטנת טקסט</button>'+
 '<button data-k="hc">◐ ניגודיות גבוהה</button><button data-k="ln">🔗 הדגשת קישורים</button><button data-k="na">⏸ עצירת אנימציות</button>'+
 '<button data-k="rf">🔤 גופן קריא</button><button data-a="0">↺ איפוס</button><a href="nagishut.html">הצהרת נגישות</a>';
 document.body.appendChild(b);document.body.appendChild(p);
 b.onclick=function(){var o=p.classList.toggle('open');b.setAttribute('aria-expanded',o);if(o)p.querySelector('button').focus()};
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&p.classList.contains('open')){p.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus()}});
 p.onclick=function(e){var t=e.target.closest('button');if(!t)return;var a=t.dataset.a,k=t.dataset.k;
  if(a==='+')s.z=Math.min((s.z||0)+1,4);else if(a==='-')s.z=Math.max((s.z||0)-1,-1);else if(a==='0')s={};else if(k)s[k]=!s[k];apply()};
 apply()}
apply();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ui);else ui();
})();
/* floating WhatsApp button */
(function(){if(document.getElementById('wa-b'))return;
var s=document.createElement('style');s.textContent='.top{padding-left:120px!important}#wa-b{position:fixed;top:12px;left:66px;z-index:98;width:46px;height:46px;border-radius:50%;border:2px solid #fff;background:#25D366;display:grid;place-items:center;box-shadow:0 2px 10px #0004}#wa-b svg{width:26px;height:26px;fill:#fff}';document.head.appendChild(s);
var a=document.createElement('a');a.id='wa-b';a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','שליחת הודעה בוואטסאפ');
a.href='https://wa.me/972547429424?text='+encodeURIComponent('שלום יניב, הגעתי מהאתר של הבית הנבון 🙂');
a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"/></svg>';
document.body.appendChild(a)})();
