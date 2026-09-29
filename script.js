const particles=document.getElementById('particles'),toast=document.getElementById('toast');
for(let i=0;i<34;i++){const p=document.createElement('span');p.className='particle';p.style.left=Math.random()*100+'vw';p.style.animationDuration=5+Math.random()*8+'s';p.style.animationDelay=-Math.random()*10+'s';particles.appendChild(p)}
function shareInvitation(){
 const data={title:'Invitation VIP — Lina Siline',text:'دعوة VIP خاصة — Lina Siline',url:location.href};
 if(navigator.share){navigator.share(data).catch(()=>{});}
 else{navigator.clipboard.writeText(location.href).then(()=>{toast.textContent='تم نسخ رابط الدعوة ✦';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)})}
}
const card=document.querySelector('.card');
if(matchMedia('(pointer:fine)').matches){
 card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1200px) rotateY(${x*2}deg) rotateX(${-y*2}deg)`});
 card.addEventListener('mouseleave',()=>card.style.transform='');
}
