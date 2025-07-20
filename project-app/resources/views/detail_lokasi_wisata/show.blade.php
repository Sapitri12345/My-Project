<!DOCTYPE html>
<html lang="id">

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
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        .map-container {
            height: 300px;
            border-radius: 12px;
            overflow: hidden;
            /* width: 500px; */
            /* align-items: center; */
        }
    </style>

    <title>Detail Wisata</title>
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
                    <h1 class="heading" data-aos="fade-up">Lokasi Wisata {{ $detail->lokasiWisata->name}}</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-7">
                    <div>
                        <div>
                            <img src="{{ asset($detail->lokasiWisata->gambar) }}" alt="Image" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <h2 class="heading text-primary mb-2">{{ $detail->lokasiWisata->name ?? 'Nama tidak tersedia' }}
                    </h2>
                    <p class="meta">{{ $detail->lokasiWisata->alamat ?? 'Tidak diketahui' }}</p>
                    <div class="mt-2">
                        <div class="text pr-2">
                            <p class="fw-semibold">Jam Operasional</>
                            <p>
                                @if($detail->jam_buka && $detail->jam_tutup)
                                    {{ \Carbon\Carbon::parse($detail->jam_buka)->format('H:i') }} -
                                    {{ \Carbon\Carbon::parse($detail->jam_tutup)->format('H:i') }}
                                @else
                                    Belum tersedia
                                @endif
                            </p>
                            <p class="fw-semibold">Harga Tiket</p>
                            <p>
                                @if($detail->harga_tiket)
                                    Rp {{ number_format($detail->harga_tiket, 0, ',', '.') }}
                                @else
                                    Gratis
                                @endif
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="mt-4" style="text-align: justify; font-size: 16px; color: #212529; line-height: 1.6;">
                {{ $detail->deskripsi }}
            </p>
        </div>
    </div>

    <div class="section">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-7">
                    <div>
                        <div>
                            <div id="map-{{ $wisata->id }}" class="rounded-3 overflow-hidden map-container border"
                                data-lat="{{ $wisata->latitude }}" data-lng="{{ $wisata->longitude }}"
                                data-name="{{ $wisata->name }}" data-alamat="{{ $wisata->alamat }}"
                                data-gambar="{{ asset($wisata->gambar) }}">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <h2 class="heading text-primary mb-2">
                        Fasilitas
                    </h2>
                    <div class="mt-2">
                        <div class="text pr-2">
                            <p>Toilet, kamar mandi, dan tempat ganti baju tersedia untuk kenyamanan pengunjung.


                            </p>
                            <p>
                                Area parkir disediakan dengan tarif sekitar Rp5.000 per kendaraan.

                            </p>
                            <p>
                                Warung makan dan kedai di sekitar area pemandian menyediakan makanan dan minuman bagi
                                pengunjung.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>

    @include('component.footer')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

    <!-- Script inisialisasi semua peta -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const mapDivs = document.querySelectorAll('.map-container');

            mapDivs.forEach(function (div) {
                const lat = parseFloat(div.dataset.lat);
                const lng = parseFloat(div.dataset.lng);
                const name = div.dataset.name;
                const alamat = div.dataset.alamat;
                const gambar = div.dataset.gambar;

                const map = L.map(div.id).setView([lat, lng], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(map);

                L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup(`
                        <div style="display: flex; align-items: flex-start; gap: 10px; max-width: 250px;">
                        <img src="${gambar}" alt="${name}" 
                            style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
                        <div style="font-size: 14px; color: #333;">
                            <strong style="color: #007bff;">${name}</strong><br>
                            ${alamat}
                        </div>
                        </div>
                    `);
            });
        });
    </script>

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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>