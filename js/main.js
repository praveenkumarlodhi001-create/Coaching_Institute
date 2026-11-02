const navToggle=document.querySelector('.nav-toggle'),mobileNav=document.querySelector('.mobile-nav');
navToggle.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}));
const revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.program-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}));

const counters=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count),start=performance.now(),duration=1400;function tick(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.round(target*(1-Math.pow(1-p,4))).toLocaleString('en-IN')+(target===92?'%':'+');if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);observer.unobserve(el)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>counters.observe(el));

let testimonialIndex=0;const track=document.getElementById('testimonialTrack'),slides=[...track.children];
function showTestimonial(index){testimonialIndex=(index+slides.length)%slides.length;track.style.transform=`translateX(-${testimonialIndex*100}%)`}
document.getElementById('prevTestimonial').addEventListener('click',()=>showTestimonial(testimonialIndex-1));
document.getElementById('nextTestimonial').addEventListener('click',()=>showTestimonial(testimonialIndex+1));

const ENQUIRY_EMAIL='hello@example.com'; // Replace with the institute's real enquiry email.
document.getElementById('leadForm').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const subject=encodeURIComponent('Free counselling request — '+data.get('name'));const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nProgram: ${data.get('program')}\nGoal: ${data.get('goal')}`);document.getElementById('formFeedback').textContent='Opening your email app to send the request…';window.location.href=`mailto:${ENQUIRY_EMAIL}?subject=${subject}&body=${body}`});
document.getElementById('year').textContent=new Date().getFullYear();