<!-- /*
* Template Name: Property
* Template Author: Untree.co
* Template URI: https://untree.co/
* License: https://creativecommons.org/licenses/by/3.0/
*/ -->
<!doctype html>
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


	<link rel="stylesheet" href="{{ asset('asset/fonts/icomoon/style.css') }}">
	<link rel="stylesheet" href="{{ asset('asset/fonts/flaticon/font/flaticon.css') }}">

	<link rel="stylesheet" href="{{ asset('asset/css/tiny-slider.css') }}">
	<link rel="stylesheet" href="{{ asset('asset/css/aos.css') }}">
	<link rel="stylesheet" href="{{ asset('asset/css/style.css') }}">

    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        .map-container {
            height: 140px;
            border-radius: 12px;
            overflow: hidden;
        }
    </style>

    <title>Informasi Wisata</title>
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


    <div class="hero page-inner overlay" style="background-image: url('{{ asset('asset/images/pemandangan1.jpg') }}');">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-9 text-center mt-5">
                    <h1 class="heading" data-aos="fade-up">Pilih Tempat Wisatamu!</h1>

                    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                        <ol class="breadcrumb text-center justify-content-center">
                            <li class="breadcrumb-item active text-white-50" aria-current="page">Menyediakan berbagai
                                informasi tempat wisata yang akan anda kenjungim yuk jelajahi!
                            </li>
                        </ol>

                        <form action="{{ route('wisata.search') }}"
                            class="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up"
                            data-aos-delay="200">
                            <input type="text" name="q" class="form-control px-4" placeholder="Cari tempat wisata....."
                                value="{{ request('q') }}">
                            <button type="submit" class="btn btn-primary">Search</button>
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    </div>


    <div class="section section-properties">
        <div class="container">
            <div class="row mb-5 align-items-center">
                <div class="col-lg-6 text-center mx-auto">
                    <h2 class="font-weight-bold text-primary heading">Tempat Wisata Pilihan</h2>
                </div>
            </div>
            <div class="container mb-4">
                <div class="row">
                    <div class="col-md-12 text-end">
                        <form action="{{ route('wisata.filter') }}" method="GET"
                            class="d-inline-flex align-items-center">
                            <select name="kecamatan" id="kecamatan" class="form-select me-2" style="width: auto;">
                                <option value="">-- Pilih Kecamatan --</option>
                                @foreach ($kecamatanList as $kec)
                                    <option value="{{ $kec->id }}" {{ request('kecamatan') == $kec->id ? 'selected' : '' }}>
                                        {{ $kec->name }}
                                    </option>
                                @endforeach
                            </select>
                            <button type="submit" class="btn btn-secondary">Filter</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                @forelse($lokasiWisata as $wisata)
                    <div class="col-md-4">
                        <div class="card shadow-sm rounded-4 overflow-hidden border-0">
                            <div class="ratio ratio-4x3">
                                <img src="{{ asset($wisata->gambar) }}" class="object-fit-cover w-100 h-100"
                                    alt="{{ $wisata->name }}">
                            </div>

                            <div class="card-body">
                                <h5 class="card-title text-secondary fw-bold">{{ $wisata->name }}</h5>
                                <p class="card-text text-muted small mb-3">{{ $wisata->alamat }}</p>

                                <div class="mt-3 text-center">
                                    <a href="{{ route('wisata.show', $wisata->id) }}"
                                        class="btn btn-outline-secondary w-100">Lihat
                                        Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @empty
                    <div class="col-12 text-center">
                        <p class="text-muted">Tidak ditemukan tempat wisata.</p>
                    </div>
                @endforelse
            </div>

        </div>
    </div>


    @include('component.footer')

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>


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