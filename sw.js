const VERSION='pencil-break-v1';
const CORE=['./','README.md','icon-180.png','icon-192.png','icon-512.png','icon-maskable-512.png','index.html','manifest.json','privacy.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(VERSION).then(x=>x.put('index.html',c));return r;}).catch(()=>caches.match('index.html')));return;}
e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque')&&(u.origin===location.origin||u.hostname.endsWith('gstatic.com')||u.hostname.endsWith('googleapis.com'))){const c=r.clone();caches.open(VERSION).then(x=>x.put(e.request,c));}return r;})));});
