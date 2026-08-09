/* Leaf · Service Worker（离线缓存）
   由 index.html 中的 registerSW() 以 ./sw.js 注册。
   注意：必须作为独立文件部署在站点同目录下，
   浏览器不允许用 blob: URL 注册 Service Worker。 */
var CACHE = "leaf-v1";

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.add("./");
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request).then(function (r) {
        return r || caches.match("./");
      });
    })
  );
});
