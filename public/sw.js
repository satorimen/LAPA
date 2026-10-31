/* Public assets only. The worker is scoped to this app, never the whole github.io origin. */
const ROOT=new URL('./',self.registration.scope);
const path=name=>new URL(name,ROOT).href;
const CACHE=`lapa-shell-${ROOT.pathname}-v3`;
const CORE=['','manifest.webmanifest','assets/lynx.webp','icons/icon-192.png','icons/icon-512.png'].map(path);
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);await cache.addAll(CORE);
 const shell=await cache.match(ROOT.href);const html=await shell.text();
 const urls=[...new Set([...html.matchAll(/(?:src|href)="([^" ]*\/_next\/static\/[^" ]+)"/g)].map(m=>new URL(m[1],ROOT).href))];
 await Promise.all(urls.map(async url=>{
  const response=await fetch(url);if(!response.ok)throw new Error('Shell asset unavailable');await cache.put(url,response.clone());
  if(new URL(url).pathname.endsWith('.css')){
   const css=await response.text();const fonts=[...css.matchAll(/url\(([^)]+)\)/g)].map(m=>new URL(m[1].replace(/["']/g,''),url));
   await Promise.all(fonts.filter(u=>u.origin===ROOT.origin&&u.pathname.startsWith(ROOT.pathname+'_next/static/')).map(u=>cache.add(u.href)));
  }
 }));
})()));
self.addEventListener('activate',event=>event.waitUntil(
 caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(`lapa-shell-${ROOT.pathname}-`)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const req=event.request;const url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname)||url.searchParams.has('_rsc'))return;
 const relative=url.pathname.slice(ROOT.pathname.length);
 if(relative.startsWith('api/'))return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match(ROOT.href)));return}
 if(relative.startsWith('_next/static/')||relative.startsWith('icons/')||relative==='assets/lynx.webp'||relative==='manifest.webmanifest'){
  event.respondWith(caches.open(CACHE).then(async cache=>{const hit=await cache.match(req);if(hit)return hit;const res=await fetch(req);if(res.ok)await cache.put(req,res.clone());return res}));
 }
});
