'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "1e3f0e7fd60ac0827233ca216e90da6a",
"assets/assets/gallery/B6.png": "8774a909baa4a198f9fbfda5cc70d3bd",
"assets/assets/gallery/B3.png": "17365a82958d07f5bf97f99e3045c83e",
"assets/assets/gallery/B2.png": "8c387ee6c020cfb34c0bca898b94e912",
"assets/assets/gallery/R1.png": "d1fef42c29c4a805f699c5cb27c955e7",
"assets/assets/gallery/01.png": "9178e82643c98e24412ad1721aeb4a33",
"assets/assets/gallery/W1.png": "29654a07b6cc740edbde2ee05538a372",
"assets/assets/gallery/01_04.png": "42e7a6a9488f663aaf383309008b8053",
"assets/assets/gallery/01_05.png": "9fb135fb67b1f7c9572a451b60a1f45d",
"assets/assets/gallery/K1.png": "4807e72da3f145f601caa770dbefe697",
"assets/assets/gallery/01_01.png": "cbeee8f1eac0d751ed4af83ede501d81",
"assets/assets/gallery/B4.png": "1efd6a64bf95b74f27365c3f60bf3f67",
"assets/assets/gallery/B7.png": "25ec553e393931536fb07fe3f69a1ee3",
"assets/assets/gallery/01_02.png": "54f22f6421ab650bd8f9d03286da22c8",
"assets/assets/gallery/W2.png": "9fc8df3a2e8d50a542a3d3e99ec7cd78",
"assets/assets/gallery/R2.png": "9c3e4bfc309f43cb6c5e1c59edbabde2",
"assets/assets/gallery/01_03.png": "2255b6c87b59d7ea94f3125a98c817a4",
"assets/assets/images/logoWithBackground.png": "6a36799d7a136e94ba418dd908ebf637",
"assets/assets/images/about_us_image.png": "398d7585b80b587da44ef32cac4effe7",
"assets/assets/images/living_unedit.png": "638b786d6b6da4c470401d949d46e2c2",
"assets/assets/images/img27.jpg": "5ccb2fa9183b99b5421253a1016b9ba0",
"assets/assets/images/container6.png": "783fd8d06446c3234be510dca7d14cfa",
"assets/assets/images/img3.jpeg": "e4e6ccf50c9eab335c009597e0f95e46",
"assets/assets/images/img13.png": "c21b2327be6eac58a49890b9aefdd3ca",
"assets/assets/images/img4.jpeg": "d495df6c8a14820226fc73f75d3c25b2",
"assets/assets/images/execution.png": "e1d8b1ad3319b818918f6466e5c541e6",
"assets/assets/images/img1.jpeg": "bbd4dc0fb9ac35a9cdf525e36ab53d69",
"assets/assets/images/img10.jpeg": "2a272a7c1d5b4b67983682161161ab33",
"assets/assets/images/img16.jpeg": "945195d5a0e72ddb06e6eca66cd9a63b",
"assets/assets/images/img20.jpg": "d5c72c31583086ef5761e0f809a69dbc",
"assets/assets/images/img21.jpg": "930a29acb554cc1fa3abf6491c200412",
"assets/assets/images/img22.jpg": "dbe028d38cf227532cc93cbdc5741dfd",
"assets/assets/images/vectorImage3.png": "9181bee90c9f2508aacdfcc60f56d1ec",
"assets/assets/images/img14.jpeg": "e140ace40e065ed125cc80e107299cf7",
"assets/assets/images/img2.jpeg": "a701729bef112974ad5bdbbc257ede53",
"assets/assets/images/photo_gallery.png": "5f4b13a5d45f2f2e5ff224b802bb9e59",
"assets/assets/images/img8.png": "bc2e05f4b3cb8e8697e189c5fc593d8b",
"assets/assets/images/container4.png": "ec0a8d6338e231a0c76de3bf5475a3ce",
"assets/assets/images/img28.jpg": "d0032108b1a2b18797d146a43020a330",
"assets/assets/images/container2.png": "0ea390f1fd4a526953ba76a0c2be6a5a",
"assets/assets/images/img19.jpg": "3e7a2599ea766d40c23162737917623d",
"assets/assets/images/design_consultation.png": "cd4fcd49c950a09238f512fc2df6cd1f",
"assets/assets/images/img15.jpeg": "289b21c868187578c9cedafe01294ee6",
"assets/assets/images/logo_two.png": "33f0e4c51061248f58eb538c3b373a1f",
"assets/assets/images/meetAndAgree.png": "2578c192ca61935aba3741f93cab9292",
"assets/assets/images/vectorImage2.png": "45cb7530c4cf431110964d30d0f13e94",
"assets/assets/images/img17.jpeg": "367a52f4aa2f6077e412279b412609b6",
"assets/assets/images/img6.jpeg": "a9a8e66c1d9e8f297672a55077ea90a5",
"assets/assets/images/img24.jpg": "e04bd3703bf30f582501639a4f8af918",
"assets/assets/images/bedroom_unedit.png": "6811197023da57a2b99f979927a4906a",
"assets/assets/images/logo_white.jpg": "fe2b9e5e568c4c1436865643e135e3fd",
"assets/assets/images/img18.jpeg": "fc01f7ff83e9049b97bc69deb922b6bd",
"assets/assets/images/bedroom_edit.png": "271132cec1fb817bbad045dd5e23e12a",
"assets/assets/images/img7.jpeg": "264a7af54900a16d238049831faf332b",
"assets/assets/images/living_edit.png": "786b26986ea8bffa80370fd6c3e85483",
"assets/assets/images/logo_one.png": "a55c94fa3d1635ed2ca67f4bea1c6956",
"assets/assets/images/img12.jpeg": "88188cfd0ba446adabb5b7270bd42be3",
"assets/assets/images/planning.png": "71358ae4eb802ff1f0112a570ef77891",
"assets/assets/images/img23.jpg": "f6b0036a687dc9768efad20c7f9082e3",
"assets/assets/images/img11.jpeg": "f9a54600d6e38bd10f17ed91bea7ed20",
"assets/assets/images/img25.jpg": "c68d53d68e06e01ececd5637f816025a",
"assets/assets/images/container5.png": "c7671ccb0e16e6687da5cde36509491c",
"assets/assets/images/kitchen_edit.png": "9184197dd1b51375748eaf4b8c1fe0ea",
"assets/assets/images/logo.png": "a55c94fa3d1635ed2ca67f4bea1c6956",
"assets/assets/images/estimation.png": "43f8e8721280d9b56282d74cfc3a8b15",
"assets/assets/images/container7.png": "66679b37b6bad9af7a58ec7e8e1829ae",
"assets/assets/images/kitchen_unedit.png": "8d2deff5afd8ee2d37a256b6bf81abe2",
"assets/assets/images/vectorImage4.jpg": "b413e56fc871186fd6246ec4fee46f0d",
"assets/assets/images/img29.jpg": "06d83f5828181c27166043b4b84177f2",
"assets/assets/images/container1.png": "549fa7cbaf530fcc7e722edb779977c8",
"assets/assets/images/img26.jpg": "6195d3942a815ea0a751d0e0114cc971",
"assets/assets/images/img9.jpeg": "f4c93d158006a385a8c997c695b5460c",
"assets/assets/images/vectorImage1.jpg": "ae68f6bd5e42ce2cb7700b6b95fbcbb9",
"assets/assets/images/container3.png": "e60093f7f8ed3f94d87250274402e164",
"assets/assets/images/img5.jpeg": "5947b0c0eb2a7439df84bd9d584a9130",
"assets/assets/icons/2.png": "fc5cb7f7b61dcee1cdcca202480c3dc9",
"assets/assets/icons/left_arrow_outlined.png": "0744b76baecc23f85305f8027e196dca",
"assets/assets/icons/5.png": "a06c3914d0cd6cd160aa9dc328b5e03d",
"assets/assets/icons/3.png": "08ddcf1711cd2d938c730a1d4ca78213",
"assets/assets/icons/instagram.png": "35136b3e43f0ca87e0682a4f9bdfc537",
"assets/assets/icons/location.png": "87d03afc4edb7c328995afb8964502ac",
"assets/assets/icons/youtube.png": "f036ee57048b7c73438c4ac5b96c04b5",
"assets/assets/icons/rightArrow.png": "be755f8872c0ac61b482c1e672d65e28",
"assets/assets/icons/right_arrow_outlined.png": "6570bd2972cb484c1ccc2ffc33d45756",
"assets/assets/icons/leftArrow.png": "8a61b752cddaa652591f053f6320aae0",
"assets/assets/icons/whatsapp.png": "e37d93ff9c9efe76d2dfc75fae12e8a1",
"assets/assets/icons/left_arrow_on_hover.png": "84725c3da47471f36f80ec8e4a795f86",
"assets/assets/icons/1.png": "b8e8737cde6c0e70e3f217a2b83e7413",
"assets/assets/icons/4.png": "e81e39c32fcc955e534cf02107c2f90e",
"assets/assets/icons/facebook.png": "f273787c4e507a0f7ba024f1895d5299",
"assets/assets/teams/thirdperson.jpeg": "8f1a58157ee1de045df344a837ddc7d7",
"assets/assets/teams/fourperson.jpeg": "61111d172b7e1f4cb5167295ea3b74e2",
"assets/assets/teams/twoperson.jpeg": "b93e75c6cd6997ba9e0f5666b2998b8e",
"assets/assets/teams/oneperson.jpeg": "db530ea8fee69e02c3ec1c180067768e",
"assets/assets/teams/fiveperson.jpeg": "4d9ba07c85a6e7ead37a66b18769321d",
"assets/assets/teams/sixperson.jpeg": "a168f9a2fda2126455b1030c2d86f858",
"assets/packages/image_compare_slider/assets/images/render.png": "b47d1f4162c30bffa255e21a56237afa",
"assets/packages/image_compare_slider/assets/images/render_oc.png": "06d33c62dda3e60df0a60540ccd3634c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "bced2e6898dda215b2396aac2fa377ca",
"assets/fonts/MaterialIcons-Regular.otf": "a6634db51b9ec36618a89e70b2525a8f",
"assets/AssetManifest.bin": "a0400d9c30acf353cc93bad5907ca508",
"index.html": "074ec387ea69fdd66c0c007082f94cf9",
"/": "074ec387ea69fdd66c0c007082f94cf9",
"favicon.png": "981b705ff9c9bc14a3cf6deb48d01485",
"version.json": "5ed80ee81778796df5adf090dc742e38",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"manifest.json": "c93f6a28e6ed19bf221c3f28a3aca307",
"main.dart.js": "0e03c6bed8897587dabfb24bb146dc71",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-512.png": "981b705ff9c9bc14a3cf6deb48d01485",
"icons/Icon-192.png": "981b705ff9c9bc14a3cf6deb48d01485",
"icons/Icon-maskable-192.png": "981b705ff9c9bc14a3cf6deb48d01485",
"icons/Icon-maskable-512.png": "981b705ff9c9bc14a3cf6deb48d01485"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
