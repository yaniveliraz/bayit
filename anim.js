/* bayit anim.js – 4 animated scenario demos for the "הדגמות" section; markup: <div class="dm" data-d="shabbat|boiler|vac|rain"></div> */
(function(){
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var W='#3a4a75',L='rgba(255,226,120,.95)',D='rgba(255,210,110,.45)',N='rgba(255,200,90,.18)';
function q(r,s){return r.querySelector(s)}
function at(r,s,a,v){var e=q(r,s);if(e)e.setAttribute(a,v)}
var house='<path d="M30 70 150 18 270 70" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><rect x="46" y="66" width="208" height="96" rx="5" fill="#26355c" stroke="#fff" stroke-width="4"/>';
var DEMOS={
shabbat:{svg:'<rect class="sky" width="300" height="175" fill="#f0a868"/>'+house+
 '<rect class="w1" x="66" y="84" width="50" height="34" rx="3" fill="'+W+'"/><rect class="w2" x="128" y="84" width="50" height="34" rx="3" fill="'+W+'"/><rect class="w3" x="190" y="84" width="46" height="62" rx="3" fill="'+W+'"/>'+
 '<rect class="w4" x="66" y="128" width="112" height="18" rx="3" fill="'+W+'"/><g class="cn" opacity="0"><text x="96" y="146" font-size="15">🕯️</text><text x="140" y="146" font-size="15">🕯️</text></g>',
 steps:[['שישי 15:30','🏠','הבית מתכונן לשבת',{sky:'#f0a868',w1:W,w2:L,w3:W,w4:W,cn:0}],
  ['16:22','🕯️','כניסת שבת – כל האורות עברו למצב שבת',{sky:'#c9765a',w1:L,w2:L,w3:L,w4:L,cn:1}],
  ['21:30','🛏️','אור עמום בחדרי השינה',{sky:'#1a2346',w1:D,w2:L,w3:W,w4:L,cn:1}],
  ['23:00','🌙','הכל כבה – נשאר אור לילה במסדרון',{sky:'#0d1428',w1:W,w2:W,w3:W,w4:N,cn:0}],
  ['שבת 07:30','☀️','בוקר – אור עדין במטבח',{sky:'#5fa8e8',w1:W,w2:D,w3:W,w4:N,cn:0}]],
 draw:function(r,s){at(r,'.sky','fill',s.sky);['w1','w2','w3','w4'].forEach(function(k){at(r,'.'+k,'fill',s[k])});at(r,'.cn','opacity',s.cn)}},
boiler:{svg:'<rect class="sky" width="300" height="175" fill="#9fb0c4"/><circle class="sun" cx="58" cy="38" r="16" fill="#FFD54F"/><text class="cl" x="40" y="48" font-size="34">☁️</text>'+
 '<g transform="rotate(-20 140 110)"><rect x="96" y="96" width="90" height="34" rx="2" fill="#2b5aa8" stroke="#cfd8dc" stroke-width="2"/><path d="M118 96v34M141 96v34M164 96v34M96 113h90" stroke="#9fc3ff" stroke-width="1"/></g>'+
 '<rect class="tank" x="206" y="58" width="40" height="78" rx="16" fill="#90a4ae" stroke="#fff" stroke-width="3"/><text class="tmp" direction="ltr" x="226" y="104" font-size="15" font-weight="700" text-anchor="middle" fill="#1E2A4A">32°</text>'+
 '<text class="fl" x="226" y="158" font-size="18" text-anchor="middle" opacity="0">🔥</text><text class="st" x="226" y="48" font-size="18" text-anchor="middle" opacity="0">♨️</text>',
 steps:[['07:00','☁️','מעונן – השמש לא חיממה את המים',{sky:'#9fb0c4',sun:0,cl:1,tank:'#90a4ae',tmp:'32°',fl:0,st:0}],
  ['15:00','🔥','המים קרים מדי – הדוד נדלק לבד',{sky:'#9fb0c4',sun:0,cl:1,tank:'#ffb38a',tmp:'41°',fl:1,st:0}],
  ['16:10','✅','המים הגיעו ל-55 מעלות – הדוד כבה לבד',{sky:'#b8a0a8',sun:0,cl:1,tank:'#ff8a65',tmp:'55°',fl:0,st:1}],
  ['למחרת 12:00','☀️','יום שמשי – הדוד לא נדלק בכלל, חוסכים חשמל',{sky:'#5fa8e8',sun:1,cl:0,tank:'#ff8a65',tmp:'58°',fl:0,st:1}]],
 draw:function(r,s){at(r,'.sky','fill',s.sky);at(r,'.sun','opacity',s.sun);at(r,'.cl','opacity',s.cl);at(r,'.tank','fill',s.tank);q(r,'.tmp').textContent=s.tmp;at(r,'.fl','opacity',s.fl);at(r,'.st','opacity',s.st)}},
vac:{svg:'<rect width="300" height="175" fill="#1E2A4A"/><g stroke="#fff" stroke-width="3" fill="#26355c">'+
 '<rect class="r0" x="20" y="14" width="130" height="70" rx="4"/><rect class="r1" x="150" y="14" width="130" height="70" rx="4"/><rect class="r2" x="20" y="84" width="90" height="78" rx="4"/><rect class="r3" x="110" y="84" width="170" height="78" rx="4"/></g>'+
 '<g fill="#ffffffaa" font-size="11" text-anchor="middle"><text x="85" y="30">מטבח</text><text x="215" y="30">סלון</text><text x="65" y="100">חדר שינה</text><text x="195" y="100">חדר ילדים</text></g>'+
 '<rect x="255" y="140" width="18" height="16" rx="3" fill="#90a4ae"/><g class="bot" style="transition:transform 1.6s ease-in-out" transform="translate(246 148)"><circle r="9" fill="#eceff1"/><circle cx="3" cy="-3" r="2.2" fill="#4fc3f7"/></g>',
 steps:[['09:00','🚪','כולם יצאו מהבית – השואב יוצא',{p:'246 148',c:[0,0,0,0]}],
  ['09:05','🍳','מטבח – 2 מעברי שאיבה ו-3 שטיפה',{p:'85 55',c:[2,0,0,0]}],
  ['09:40','🛋️','סלון',{p:'215 55',c:[1,2,0,0]}],
  ['10:15','🛏️','חדרי השינה – מעבר אחד',{p:'110 130',c:[1,1,2,2]}],
  ['10:50','📱','הסתיים – דוח סיום נשלח לטלפון',{p:'246 148',c:[1,1,1,1]}]],
 draw:function(r,s){q(r,'.bot').setAttribute('transform','translate('+s.p+')');for(var i=0;i<4;i++)at(r,'.r'+i,'fill',['#26355c','#2e6b5a','#3d5a9e'][s.c[i]])}},
rain:{svg:'<rect class="sky" width="300" height="175" fill="#5fa8e8"/><circle class="sun" cx="250" cy="36" r="16" fill="#FFD54F"/><text class="cl" x="40" y="52" font-size="40" opacity="0">🌧️</text>'+
 '<g class="drops" stroke="#bfe3ff" stroke-width="2" opacity="0"><path d="M30 70l-5 12M70 66l-5 12M110 72l-5 12M150 64l-5 12M190 70l-5 12M230 66l-5 12M270 72l-5 12M50 96l-5 12M130 98l-5 12M250 96l-5 12"/></g>'+
 '<rect x="70" y="72" width="160" height="96" rx="5" fill="#26355c" stroke="#fff" stroke-width="4"/><rect x="92" y="90" width="116" height="62" rx="3" fill="rgba(255,226,120,.75)"/>'+
 '<rect class="sh" x="92" y="90" width="116" height="0" fill="url(#slr)"/><defs><pattern id="slr" width="8" height="7" patternUnits="userSpaceOnUse"><rect width="8" height="5" fill="#9aa4b1"/><rect y="5" width="8" height="2" fill="#7d8794"/></pattern></defs>',
 steps:[['13:30','☀️','שמש – התריס פתוח',{sky:'#5fa8e8',sun:1,cl:0,dr:0,sh:0}],
  ['14:40','📱','התראה: גשם בעוד 20 דקות – להכניס כביסה',{sky:'#8a9bb0',sun:0,cl:1,dr:0,sh:0}],
  ['15:00','🌧️','התחיל גשם – התריס בסלון נסגר לבד',{sky:'#6b7a90',sun:0,cl:1,dr:1,sh:62}],
  ['16:30','🌤️','הגשם עבר – התריס נפתח',{sky:'#5fa8e8',sun:1,cl:0,dr:0,sh:0}]],
 draw:function(r,s){at(r,'.sky','fill',s.sky);at(r,'.sun','opacity',s.sun);at(r,'.cl','opacity',s.cl);at(r,'.drops','opacity',s.dr);at(r,'.sh','height',s.sh)}}
};
var els=document.querySelectorAll('.dm');
for(var n=0;n<els.length;n++)(function(el){
 var d=DEMOS[el.getAttribute('data-d')];if(!d)return;
 el.innerHTML='<svg viewBox="0 0 300 175" role="img" aria-label="הדגמה מונפשת">'+d.svg+'</svg><div class="dm-c"><span class="dm-t"></span><span class="dm-m" aria-live="polite"></span></div>';
 var i=0;function go(){var s=d.steps[i];d.draw(el,s[3]);q(el,'.dm-t').textContent=s[0];var m=q(el,'.dm-m');m.textContent=s[1]+' '+s[2];m.style.animation='none';m.offsetWidth;m.style.animation='';i=(i+1)%d.steps.length}
 go();setInterval(go,rm?4500:3400);
})(els[n]);
})();
