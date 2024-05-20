'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a9978318276f04781ea31cb7e40a817e",
"assets/AssetManifest.bin.json": "4f21a8fd2e11d45a706b24b5d4a562b7",
"assets/AssetManifest.json": "779e35e33bf63e1663ac2dd4528c72f6",
"assets/assets/animations/w.json": "178807a21c80226810205b5d27458351",
"assets/assets/images/ammachi.jpg": "8c9e7abe3b20b2bcea3ab727638457f5",
"assets/assets/images/australia.jpg": "1628c60bca9b68372911329228d95943",
"assets/assets/images/c.png": "1e6083b9e0c79f04e5c47ff04a1a9d3a",
"assets/assets/images/cam.png": "401245be5c4d3aaa752af883e7217002",
"assets/assets/images/canada.jpg": "e06a5704c42b361c3d9ab1e84f2793b7",
"assets/assets/images/details.png": "1ab06918f7066823806c16418bb90150",
"assets/assets/images/germany.jpg": "0a53af957a5868a35acd6b4248854349",
"assets/assets/images/h-girl.jpg": "4b8ba2d1637c87f3d5f744fe1a48742f",
"assets/assets/images/h-main.jpeg": "d08a1afb97625f5482a972d963dc4ede",
"assets/assets/images/Job.jpg": "44cbc4b2298ac08b7ffbda1a394bfe2b",
"assets/assets/images/jobs.jpg": "d78cd46ff354d331e35ff86bd63dee12",
"assets/assets/images/logo.png": "0d66e67698174ce734636ab8a15440d9",
"assets/assets/images/logonobg.png": "4caa4e4b8fee1a5f05febbb9e1d343b1",
"assets/assets/images/migration.png": "3be5168fce5203721d8e21f90313fe41",
"assets/assets/images/new-zealand.jpeg": "b255e3d3f9c3c883b384670b5fbee59c",
"assets/assets/images/p.png": "c82ed188152f82d54e56b6a4ff08f23c",
"assets/assets/images/r.png": "b53c79882da722eb8311852f167fd758",
"assets/assets/images/rocket.png": "7203732395f8c61655ebbb703d9b2a82",
"assets/assets/images/sicon2.jpg": "118f6a793ba17e52188bafc7a05ab386",
"assets/assets/images/sicon5.jpg": "3fed1f7d413bf6c9afe0eca0c76b281b",
"assets/assets/images/sicon6.jpg": "7974eaf6e4804a6ede603a121af11611",
"assets/assets/images/s_icon4.jpg": "1a737d21bba192dd88ea5ddbf75e363f",
"assets/assets/images/testi1.png": "c6b61df238937801beed741ba8bcd157",
"assets/assets/images/testi2.png": "99345234e8e080bb0b7cd7de52b7df37",
"assets/assets/images/testi3.png": "7a869769665b278301c358847dcf8b5f",
"assets/assets/images/uk.jpg": "8b377ff244a980b75f2cb548c597b275",
"assets/assets/images/usa.jpeg": "5e9a0dca3f91bd831b12deb58a137828",
"assets/assets/images/vfs.jpeg": "f5d2184858684b6704b54b0009ccf716",
"assets/assets/images/wm.png": "0795d1cbaebcc59db8173e2506dbd54c",
"assets/assets/images/wv.jpg": "02c96c3f7ab8357ed6e5855c26f57b03",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c1c30728dc1fc0ff96e125d05f6c2415",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "5af3a843a0af27edb9823085cad07edd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "676cba76ffc90d3c35fe0ca803593bb9",
"icons/Icon-512.png": "285883330a95753f023d41b207c88243",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc656d8dcfba074ceca867d61f57be4d",
"/": "fc656d8dcfba074ceca867d61f57be4d",
"main.dart.js": "7f8d71b801bca95c63886ad159379c79",
"manifest.json": "8a785fc8d85eb5cd406cb71c842e21ba",
"version.json": "32beffd2af4d71fbfa4712084d64b064"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
