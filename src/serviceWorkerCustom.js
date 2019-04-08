if ('function' === typeof importScripts) {

    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
        'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js'
    );

    self.videos = localforage.createInstance({
        name: 'hh-video', storeName: 'data',
        description: 'this is a store'
    });

    console.log('LocalForage:', self.videos)

    if (workbox) {

        console.log(`Yay! Workbox is loaded 🎉`);

        // console.log('Instantly Loading New Service Worker if Available')
        // workbox.core.skipWaiting();
        // workbox.core.clientsClaim();

        console.log('Registered Routes for Video Subscription')
        workbox.routing.registerRoute(
            '/test',
            async ({ url, event }) => {
                return new Response(`Hello from SW!`);
            }
        )

        console.log('Precache and Route')
        workbox.precaching.precacheAndRoute([]);

    } else {
        console.log(`Boo! Workbox didn't load 😬`);
    }

}
