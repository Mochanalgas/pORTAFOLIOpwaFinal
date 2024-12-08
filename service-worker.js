const CACHE_NAME = 'site-cache-v2'; // Nombre de la caché
const CACHE_ASSETS = [
    './index.html',
    './AbtMe.html',
    './ANIM.html',
    './CV.html',
    './CSS/styles.css',
    './SCRIPT/script.js',
    './IMG/LOGO.png',
    './IMG/yo_1.jpg',
    './IMG/yo_2.jpg',
    './IMG/yo_3.jpg',
    './IMG/IMG.jpg',
    './IMG/IMG2.jpg',
    './IMG/imagesa.jpg',
    './IMG/UTNA2',
    './IMG/utna.png',
    './IMG/ultra.jpg',
    './IMG/DIBUJO_4.jpg',
    './IMG/DIBUJO_3.jpg',
    './IMG/DIBUJO_2.jpg',
    './IMG/DIBUJO.jpg',
    './IMG/DIBUJO_finale.jpg',
    './IMG/concept.jpg',
    './IMG/concept_2.jpg',
    './IMG/concept_3.jpg',
    './IMG/concept_4.jpg',
    './IMG/concept_5.jpg',
    './IMG/frenzy.jpg',
    './IMG/MONSTRUOS.jpg',
    './IMG/R1.png',
    './IMG/payaso.png',
    './IMG/payaso-IDLE.png',
    './IMG/payaso_impulce.gif',
    './IMG/payaso_impulce.png',
    './IMG/IDLE.png',
    './IMG/Punch.png',
    './IMG/Elbow.png',
    './IMG/Punch_II.png',
    './IMG/MERCER_2.0_ATK.gif',
    './IMG/MERCER_2.0_JUMP.gif',
    './IMG/MERCER_2.0_WALK.gif',
    './IMG/MERCER_2.0_DASH.png',
    './IMG/Dash.png',
    './IMG/NEONCIDE.gif',
    './IMG/DOG.gif',
    './IMG/GATO.gif',
    './IMG/HUAHUA.gif',
    './IMG/PUG.gif',
    './IMG/ARDILLA.gif',
    './IMG/SALCHI.gif',
    './IMG/collage.jpeg',
    './IMG/collage 5.jpeg',
    './IMG/collage 3.jpeg',
    './IMG/collage4.jpeg',
    './IMG/collage2.jpeg',
    './IMG/collage 6.jpeg',
    './MEDIA/IC3PEAK - СКАЗКА FAIRYTALE.mp3',
    // Agrega aquí otros archivos que desees almacenar en caché
];

// Instalar el Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Archivos en caché: ', CACHE_ASSETS);
                return cache.addAll(CACHE_ASSETS);
            })
    );
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Borrando caché antigua: ', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Interceptar las solicitudes y servir desde la caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Si hay una respuesta en caché, devuélvela
                if (response) {
                    return response;
                }
                // Si no, realiza la solicitud de red
                return fetch(event.request);
            })
    );
});
