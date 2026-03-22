const CACHE='mausam-bp-v6';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(c=>c!==CACHE).map(c=>caches.delete(c)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.url.includes('firebase')||e.request.url.includes('gstatic')||e.request.url.includes('googleapis')||e.request.url.includes('cdnjs'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});