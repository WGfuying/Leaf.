/* Leaf. Service Worker — 离线缓存（PWA）
 * 独立文件，避免 blob: URL 注册被 Firefox / Chrome 拒绝。
 */
var CACHE = 'leaf-v1';
var PRECACHE = ['./', './index.html', './leaf-icon.png', './manifest.webmanifest'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // 用 allSettled 容错：单个资源 404 不再拖垮整个 SW 安装
      return Promise.allSettled(PRECACHE.map(function(u){ return c.add(u); }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).catch(function(){
      return caches.match(e.request).then(function(r){ return r || caches.match('./'); });
    })
  );
});
