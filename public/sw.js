const ASSETS_CACHE_NAME = 'dad-joke-assests-v1'
const baseAssets = [
  '/',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
  'https://fonts.gstatic.com/s/roboto/v18/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans920.woff2',
]

function getAssetsFromManifest() {
  return fetch('asset-manifest.json')
            .then((response) => response.json())
            .then((assets) => [
              ...baseAssets,
              assets['main.css'],
              assets['main.js'],
            ])
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(ASSETS_CACHE_NAME).then((cache) => {
        getAssetsFromManifest().then((assetsArray) => cache.addAll(assetsArray))
      }).then(() => self.skipWaiting()) // this is temporary
    )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => response || fetch(event.request))
  )
})
