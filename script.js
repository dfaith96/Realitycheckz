const navLinks = document.querySelector('.nav-links');
if (navLinks && !navLinks.querySelector('[href="product.html"]')) navLinks.insertAdjacentHTML('afterbegin', '<a href="product.html">Product</a><a href="features.html">Features</a>');
document.querySelectorAll('footer a[href="#"]').forEach((link, index) => { link.href = index === 0 ? 'privacy.html' : 'terms.html'; });
const tabs = document.querySelectorAll('.tab');
const input = document.getElementById('checkInput');
const helper = document.getElementById('helperText');
const button = document.getElementById('checkBtn');
const result = document.getElementById('result');
const title = document.getElementById('resultTitle');
const text = document.getElementById('resultText');
const confidence = document.getElementById('confidence');
const dropZone = document.getElementById('dropZone');
let type = 'link';
const prompts = {link:['Paste a URL, headline or claim...','We’ll check sources, context and independent reporting.'],image:['Drop an image here or click to browse...','We’ll inspect visual signals, edits and image origins.'],document:['Drop a document here or click to browse...','We’ll review its metadata, sources and internal consistency.']};
tabs.forEach(tab => tab.addEventListener('click', () => { tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active'); type=tab.dataset.type; input.placeholder=prompts[type][0]; helper.textContent=prompts[type][1]; result.classList.remove('show'); }));
function check(){const value=input.value.trim(); if(!value){input.focus(); input.placeholder='Add something for us to examine…'; return;} button.innerHTML='Checking <span>···</span>'; button.disabled=true; setTimeout(()=>{const scores={link:82,image:76,document:88}; const labels={link:'Source trail mapped',image:'Visual signals reviewed',document:'Document pattern reviewed'}; title.textContent=labels[type]; text.textContent=`We found several corroborating signals. Review the source trail before sharing this ${type === 'link' ? 'claim' : type}.`; confidence.textContent=`${scores[type]}% SIGNAL`; result.classList.add('show');button.innerHTML='Check <span>→</span>';button.disabled=false;},650)}
button.addEventListener('click',check); input.addEventListener('keydown',e=>{if(e.key==='Enter')check()});
['dragenter','dragover'].forEach(ev=>dropZone.addEventListener(ev,e=>{e.preventDefault();dropZone.style.opacity='.7'}));['dragleave','drop'].forEach(ev=>dropZone.addEventListener(ev,e=>{e.preventDefault();dropZone.style.opacity='1'}));dropZone.addEventListener('drop',e=>{const f=e.dataTransfer.files[0];if(f){input.value=f.name;type='image';check();}});
