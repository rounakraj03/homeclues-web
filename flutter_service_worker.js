'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "1776878880aed6b7c5880a1de5af8c7f",
"assets/assets/gallery/B6.png": "44077d11711af137988d41065c08870e",
"assets/assets/gallery/B3.png": "0e97b3f737871af4a5e0a53c3e255bbe",
"assets/assets/gallery/B2.png": "740e981ef2752f35550b905b79dfc43a",
"assets/assets/gallery/01_07.jpg": "a25d9c796dc259b6fbd72be05b187d67",
"assets/assets/gallery/R1.png": "ddafa0cda102d9070b6a2c15a6251da0",
"assets/assets/gallery/01.png": "12e824b9a29c96d5db4b3c5960f2ece3",
"assets/assets/gallery/01_02_cropped.png": "a56d787f9e16c5515b2b6f24048c89dc",
"assets/assets/gallery/W1.png": "fcf42c4c23f9ee51055befecd0cab7c3",
"assets/assets/gallery/01_04.png": "2f7031b43c21cedd1ea002c93c8bfc8a",
"assets/assets/gallery/01_08.jpg": "01a1e77ac0daaa856eff70364651b74e",
"assets/assets/gallery/01_05.png": "37e3278153839b39454ff4cc85668225",
"assets/assets/gallery/K1.png": "4d0ebe55cdb968defb61964b6cd3aacc",
"assets/assets/gallery/01_01.png": "27f525a8f1396aeae8641bf4a15d46b6",
"assets/assets/gallery/B4.png": "4790ca26e5794dc1d7029e0a42da403b",
"assets/assets/gallery/B7.png": "4c67193e8a155c14025a327dc80aa2d1",
"assets/assets/gallery/01_02.png": "0534e07d30bbd2c5ebb6951f15f8c50b",
"assets/assets/gallery/01_09.jpg": "bb070cfc611f4c564df69823c23bbe00",
"assets/assets/gallery/W2.png": "628b2814fe03bb22f7da94a58503d1da",
"assets/assets/gallery/01_06.jpg": "262393bf87bc4efb08696bcd098d695b",
"assets/assets/gallery/R2.png": "1ff11921d7151bad00d7d38d9657c513",
"assets/assets/gallery/01_03.png": "246c8533218286c2ba8bb4f6a67b8c9e",
"assets/assets/images/about_us_image.png": "dadbba9443f00c597ac5ca9c86e2a70c",
"assets/assets/images/living_unedit.png": "f9116055e6d491aaa042a07d87b5afb8",
"assets/assets/images/img3.jpeg": "077b78d52082657a7507d792a6dcef2c",
"assets/assets/images/execution.png": "ee8880ac166987b5570e7a91133e31da",
"assets/assets/images/img1.jpeg": "87ac767bbe389e55e63be33b7a227023",
"assets/assets/images/img14.jpeg": "321344119835452ce33ab3be8f161095",
"assets/assets/images/img2.jpeg": "302096fffd4ca1173fcc67b4eee8b28d",
"assets/assets/images/photo_gallery.png": "453d10c5f3614e41bef9ac123fb2f700",
"assets/assets/images/img28.jpg": "a9536b58c2833783353e18a9c272cd55",
"assets/assets/images/img19.jpg": "70c2df26a6ea0e7cbc11bf68e0a54afe",
"assets/assets/images/design_consultation.png": "f5a38e12fd94cbfb618bfb6f0af28f26",
"assets/assets/images/logo_two.png": "72fc7924b180d1667a06fb7ede5e08b9",
"assets/assets/images/meetAndAgree.png": "24a9eee5bced27bd497253fec68d50c0",
"assets/assets/images/img17.jpeg": "253fb6b23e4dfe68fd2592c1651ddf37",
"assets/assets/images/img24.jpg": "07a16cf0c570f2f624dcee112413d959",
"assets/assets/images/bedroom_unedit.png": "c11a4dac625c619497b2f20d06d76f73",
"assets/assets/images/bedroom_edit.png": "1e6040686f05fa35758c022e63aa1858",
"assets/assets/images/living_edit.png": "48a5bad7c54869dc410533ed4016ea0f",
"assets/assets/images/planning.png": "a52e1b72489e94b63eb09535aea3619e",
"assets/assets/images/img25.jpg": "6a8d69724ce193fc6f46bff0176ee280",
"assets/assets/images/kitchen_edit.png": "1e9308024cabad57cf5269d726537f06",
"assets/assets/images/logo.png": "23b49901013bc0e4663a767a43883c2e",
"assets/assets/images/estimation.png": "2a784c7c93ca2210bfea358b9ee0cd4a",
"assets/assets/images/kitchen_unedit.png": "c0220088df16cf9b8214046ac666846a",
"assets/assets/images/vectorImage4.jpg": "bc9a60ef28d451033ae6ad31485524fb",
"assets/assets/images/img29.jpg": "8fed8d509d1e566542197dba3788aa73",
"assets/assets/images/img26.jpg": "95040bd8b7ddaf5cefdefe607133a768",
"assets/assets/images/img5.jpeg": "01e79777a13772e97106cc3b32d40e30",
"assets/assets/icons/2.png": "fc5cb7f7b61dcee1cdcca202480c3dc9",
"assets/assets/icons/left_arrow_outlined.png": "0744b76baecc23f85305f8027e196dca",
"assets/assets/icons/5.png": "a06c3914d0cd6cd160aa9dc328b5e03d",
"assets/assets/icons/3.png": "08ddcf1711cd2d938c730a1d4ca78213",
"assets/assets/icons/instagram.png": "35136b3e43f0ca87e0682a4f9bdfc537",
"assets/assets/icons/location.png": "87d03afc4edb7c328995afb8964502ac",
"assets/assets/icons/youtube.png": "f036ee57048b7c73438c4ac5b96c04b5",
"assets/assets/icons/rightArrow.png": "be755f8872c0ac61b482c1e672d65e28",
"assets/assets/icons/leftArrow.png": "8a61b752cddaa652591f053f6320aae0",
"assets/assets/icons/whatsapp.png": "e37d93ff9c9efe76d2dfc75fae12e8a1",
"assets/assets/icons/left_arrow_on_hover.png": "84725c3da47471f36f80ec8e4a795f86",
"assets/assets/icons/1.png": "b8e8737cde6c0e70e3f217a2b83e7413",
"assets/assets/icons/4.png": "e81e39c32fcc955e534cf02107c2f90e",
"assets/assets/icons/long_arrow.png": "dbbb7e1787e8b5a2faeb41771c327e43",
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
"assets/fonts/MaterialIcons-Regular.otf": "be1748b9c6a3c9645495b60c99cbf815",
"assets/AssetManifest.bin": "23f9af965537cf24f0ec9c01e59e3db9",
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
"main.dart.js": "879ae291821d753f390f1e714a6c82a6",
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
