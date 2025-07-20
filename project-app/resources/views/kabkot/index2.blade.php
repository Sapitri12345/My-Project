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

    <title>Kabupaten/Kota</title>

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
                    <h1 class="heading" data-aos="fade-up">Kota Bogor</h1>

                    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                        <ol class="breadcrumb text-center justify-content-center">
                            <li class="breadcrumb-item active text-white-50" aria-current="page">Provinsi di indonesia
                                dipecah lagi menjadi kabupaten atau kota yang mana setiap kabupaten atau kota memiliki
                                ciri khas tersendiri. Kabupaten/Kota terdiri dari beberapa kecamatan dan yang pasti
                                bakan banyak banget apalahi di indonesia ini.
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    </div>
    <div class="utama mt-5" style="text-align:center">
        <h2 class="font-weight-bold text-primary heading">Peta Sebaran Kota Bogor</h2>
    </div>
    <div id="map"></div>


    <script>
        // Inisialisasi peta
        var map = L.map('map').setView([-6.4787624, 106.4328929], 10);

        // Tambahkan tile layer OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Data kabupaten/kota dari server
        fetch('/get-geojson-kabkot') // ganti sesuai route kamu
            .then(res => res.json())
            .then(data => {
                L.geoJSON(data, {
                    onEachFeature: function (feature, layer) {
                        if (feature.properties && feature.properties.name) {
                            layer.bindPopup(feature.properties.name);
                        }
                    },
                    pointToLayer: function (feature, latlng) {
                        // Supaya point (marker) tetap muncul
                        return L.marker(latlng);
                    },
                    style: function (feature) {
                        if (feature.geometry.type === "Polygon" || feature.geometry.type === "MultiPolygon") {
                            return {
                                color: "#521C0D",
                                weight: 2,
                                fillOpacity: 0.5
                            };
                        }
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