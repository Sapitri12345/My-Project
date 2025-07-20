<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Untree.co">
    <link rel="shortcut icon" href="favicon.png">

    <meta name="description" content="" />
    <meta name="keywords" content="bootstrap, bootstrap5" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">

    <link rel="stylesheet" href="{{ asset('asset/css/tiny-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/css/style.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <style>
        #map {
            height: 421px;
        }

        .utama {
            padding: 15px;
        }
    </style>
    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

    <title>Kabkot</title>
</head>

<body>

    <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close">
                <span class="icofont-close js-menu-toggle"></span>
            </div>
        </div>
        <div class="site-mobile-menu-body"></div>
    </div>
    @include('component.navbar')

    <div class="hero page-inner overlay" style="background-image: url('{{ asset('asset/images/pemandangan2.jpg') }}');">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-9 text-center mt-5">
                    <h1 class="heading" data-aos="fade-up">Peta Wisata Kabupaten/Kota Bogor</h1>

                    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                        <ol class="breadcrumb text-center justify-content-center">
                            <li class="breadcrumb-item active text-white-50" aria-current="page">Kabupan/Kota Bogor
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    </div>
    <div class="utama mt-5" style="text-align:center">
        <h2 class="font-weight-bold text-primary heading">Peta Sebaran Wisata Kabupaten/Kota Bogor</h2>
    </div>
    <div id="map"></div>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <script>
        const baseUrl = "{{ url('/') }}";
        // Inisialisasi peta
        var map = L.map('map').setView([-6.4787624, 106.4328929], 10);

        // Tambahkan tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Fungsi buat warna unik berdasarkan nama kecamatan
        function getUniqueColor(name) {
            let hash = 0;
            for (let i = 0; i < name.length; i++) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }
            const h = hash % 360;
            return `hsl(${h}, 60%, 65%)`;
        }

        // Load GeoJSON kecamatan
        fetch('/get-geojson-kecamatan')
            .then(res => res.json())
            .then(data => {
                L.geoJSON(data, {
                    style: function (feature) {
                        return {
                            color: "#000",
                            weight: 1,
                            fillOpacity: 0.5,
                            fillColor: getUniqueColor(feature.properties.name)
                        };
                    },
                    onEachFeature: function (feature, layer) {
                        if (feature.properties && feature.properties.name) {
                            layer.bindPopup(`<strong>Kecamatan:</strong> ${feature.properties.name}`);
                        }
                    }
                }).addTo(map);
            });

        // Load GeoJSON wisata
        // Load GeoJSON wisata
        fetch('/get-geojson-wisata')
            .then(res => res.json())
            .then(data => {
                L.geoJSON(data, {
                    pointToLayer: function (feature, latlng) {
                        // Gunakan marker default Leaflet (tanpa icon custom)
                        return L.marker(latlng);
                    },
                    onEachFeature: function (feature, layer) {
                        const props = feature.properties;

                        const fotoUrl = props.foto
                            ? `${baseUrl}/${props.foto}`
                            : `${baseUrl}/asset/images/default-icon.png`;

                        const popup = `
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <img src="${fotoUrl}" alt="${props.name}" width="100" style="flex-shrink: 0; border-radius: 8px;">

                            <div style="text-align: left;">
                                <strong>
                                    <a href="${baseUrl}/wisata/${props.id}" style="text-decoration:none; color:#007bff;">
                                        ${props.name}
                                    </a>
                                </strong><br>
                                ${props.description ?? ''}
                            </div>
                        </div>
                    `;
                        layer.bindPopup(popup);
                    }
                }).addTo(map);
            });


    </script>
    @include('component.footer')

    <!-- Preloader -->
    <div id="overlayer"></div>
    <div class="loader">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>


    <script src="{{ asset('asset/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('asset/js/tiny-slider.js') }}"></script>
    <script src="{{ asset('asset/js/aos.js') }}"></script>
    <script src="{{ asset('asset/js/navbar.js') }}"></script>
    <script src="{{ asset('asset/js/counter.js') }}"></script>
    <script src="{{ asset('asset/js/custom.js') }}"></script>
</body>

</html>