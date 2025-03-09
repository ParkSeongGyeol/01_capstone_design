self.addEventListener('install', (event) => {
  console.log('서비스 워커 설치 완료')
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  console.log('서비스 워커 활성화')
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  console.log('요청 캐싱 중:', event.request.url)
})
