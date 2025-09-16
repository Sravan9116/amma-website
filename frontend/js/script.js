// script.js - shared across pages

/* Helper: reveal-on-scroll */
(function(){
  const onScroll = ()=> {
    document.querySelectorAll('.fade-in').forEach(el=>{
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 100) el.classList.add('visible');
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);
})();

/* Simple slider used on home page */
(function(){
  const slider = document.querySelector('.image-slider .slides');
  if(!slider) return;
  let idx = 0;
  const slides = slider.children;
  const total = slides.length;
  const go = (i)=> slider.style.transform = `translateX(-${i*100}%)`;
  setInterval(()=>{ idx = (idx+1) % total; go(idx); }, 3500);
  // prev/next if present
  document.querySelectorAll('.slider-prev, .slider-next').forEach(btn=>{
    btn.addEventListener('click', e=>{
      if (btn.classList.contains('slider-prev')) idx = (idx-1+total)%total;
      else idx = (idx+1)%total;
      go(idx);
    });
  });
})();

/* Contact form */
async function submitContactForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  const payload = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value
  };
  try{
    const r = await fetch('http://localhost:5000/api/contact', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
    });
    const data = await r.json();
    alert('Thank you! Message saved for: ' + (data.name||payload.name));
    e.target.reset();
  }catch(err){
    alert('Error sending message. Check server.');
    console.error(err);
  } finally { btn.disabled = false; }
}

/* Experience form */
async function submitExperienceForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  const payload = {
    name: e.target.name.value,
    experience: e.target.experience.value
  };
  try{
    const r = await fetch('http://localhost:5000/api/experiences', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
    });
    const data = await r.json();
    alert('Thank you for sharing your experience, ' + (data.name||payload.name));
    e.target.reset();
  }catch(err){
    alert('Error saving experience.');
    console.error(err);
  } finally { btn.disabled = false; }
}

/* Donate form (local save) */
async function submitDonateForm(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  const payload = {
    name: e.target.name.value,
    amount: e.target.amount.value
  };
  try{
    const r = await fetch('http://localhost:5000/api/donate', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
    });
    const data = await r.json();
    alert('Donation record saved. Thank you, ' + (data.name||payload.name));
    e.target.reset();
  }catch(err){
    alert('Error saving donation.');
    console.error(err);
  } finally { btn.disabled = false; }
}

/* Attach forms if present on page */
window.addEventListener('load', ()=>{
  const c = document.querySelector('#contactForm');
  if(c) c.addEventListener('submit', submitContactForm);
  const ex = document.querySelector('#experienceForm');
  if(ex) ex.addEventListener('submit', submitExperienceForm);
  const d = document.querySelector('#donateForm');
  if(d) d.addEventListener('submit', submitDonateForm);
});
