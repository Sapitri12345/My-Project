<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Untree.co">
    <link rel="shortcut icon" href="favicon.png">
    <meta name="description" content="" />
    <meta name="keywords" content="bootstrap, leaflet, peta wisata" />

    <!-- Google Fonts & Leaflet CSS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

    <!-- Asset CSS -->
    <link rel="stylesheet" href="{{ asset('asset/fonts/icomoon/style.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/fonts/flaticon/font/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/css/tiny-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/css/style.css') }}">

    <style>

         #map {
            height: 421px;
        }

        .utama {
            padding: 15px;
        }

        .filter-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .dropdown {
            padding: 8px 12px;
            min-width: 200px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .filter-button {
            padding: 8px 20px;
            background-color: #005F5F;
            color: white;
            border: none;
            border-radius: 9999px;
            cursor: pointer;
            font-weight: bold;
        }

        .filter-button:hover {
            background-color: #004949;
        }
    </style>

    <title>Kecamatan</title>
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
                    <h1 class="heading" data-aos="fade-up">Peta Wisata Kecamatan</h1>

                    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                        <ol class="breadcrumb text-center justify-content-center">
                            <li class="breadcrumb-item active text-white-50" aria-current="page">Kecamatan
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    </div>
    <div class="utama mt-5" style="text-align:center">
        <h2 class="font-weight-bold text-primary heading">Peta Sebaran Wisata Berdasarkan Kecamatan</h2>
    </div>

    <!-- Filter Kecamatan -->
    <div class="filter-container">
        <select id="filter-kecamatan" class="dropdown">
            <option value="all">-- Pilih Kecamatan --</option>
        </select>
    </div>

    <!-- Peta -->
    <div class="utama">
        <div id="map"></div>
    </div>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
    <script>
        const baseUrl = "{{ url('/') }}";
        const map = L.map('map').setView([-6.4787624, 106.4328929], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        let kecamatanLayerGroup = L.layerGroup().addTo(map);
        let wisataLayerGroup = L.layerGroup().addTo(map);

        let allKecamatan = null;
        let allWisata = null;

        function getUniqueColor(name) {
            let hash = 0;
            for (let i = 0; i < name.length; i++) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }
            const h = Math.abs(hash % 360);
            return `hsl(${h}, 60%, 65%)`;
        }

        Promise.all([
            fetch(`${baseUrl}/get-geojson-kecamatan`).then(res => res.json()),
            fetch(`${baseUrl}/get-geojson-wisata`).then(res => res.json())
        ]).then(([kecamatanData, wisataData]) => {
            if (!kecamatanData?.features || !wisataData?.features) {
                alert("Data GeoJSON tidak valid.");
                return;
            }

            allKecamatan = kecamatanData;
            allWisata = wisataData;

            const select = document.getElementById('filter-kecamatan');
            allKecamatan.features.forEach(f => {
                const option = document.createElement('option');
                option.value = f.properties.name;
                option.textContent = f.properties.name;
                select.appendChild(option);
            });

            renderLayers("all");

            select.addEventListener('change', function () {
                renderLayers(this.value);
            });
        });

        function renderLayers(selectedName) {
            kecamatanLayerGroup.clearLayers();
            wisataLayerGroup.clearLayers();

            const filteredKecamatan = selectedName === "all"
                ? allKecamatan.features
                : allKecamatan.features.filter(f => f.properties.name === selectedName);

            L.geoJSON(filteredKecamatan, {
                style: feature => ({
                    color: "#000",
                    weight: 1,
                    fillOpacity: 0.5,
                    fillColor: getUniqueColor(feature.properties.name)
                }),
                onEachFeature: (feature, layer) => {
                    layer.bindPopup(`<strong>Kecamatan:</strong> ${feature.properties.name}`);
                }
            }).addTo(kecamatanLayerGroup);

            const filteredWisata = selectedName === "all"
                ? allWisata.features
                : allWisata.features.filter(f => {
                    const namaKecamatan = (f.properties.kecamatan || "").toLowerCase().trim();
                    return namaKecamatan === selectedName.toLowerCase().trim();
                });

            L.geoJSON(filteredWisata, {
                pointToLayer: (feature, latlng) => L.marker(latlng),
                onEachFeature: (feature, layer) => {
                    const props = feature.properties;
                    const fotoUrl = props.foto ? `${baseUrl}/${props.foto}` : `${baseUrl}/asset/images/default-icon.png`;

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
                        </div>`;
                    layer.bindPopup(popup);
                }
            }).addTo(wisataLayerGroup);

            setTimeout(() => map.invalidateSize(), 300); // untuk memastikan ukuran peta benar setelah render
        }
    </script>

    @include('component.footer')

    <!-- Loader (opsional) -->
    <div id="overlayer"></div>
    <div class="loader">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- Asset JS -->
    <script src="{{ asset('asset/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('asset/js/tiny-slider.js') }}"></script>
    <script src="{{ asset('asset/js/aos.js') }}"></script>
    <script src="{{ asset('asset/js/navbar.js') }}"></script>
    <script src="{{ asset('asset/js/counter.js') }}"></script>
    <script src="{{ asset('asset/js/custom.js') }}"></script>
</body>

</html>
