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


	<link rel="stylesheet" href="{{ asset('asset/fonts/icomoon/style.css') }}">
	<link rel="stylesheet" href="{{ asset('asset/fonts/flaticon/font/flaticon.css') }}">

	<link rel="stylesheet" href="{{ asset('asset/css/tiny-slider.css') }}">
	<link rel="stylesheet" href="{{ asset('asset/css/aos.css') }}">
	<link rel="stylesheet" href="{{ asset('asset/css/style.css') }}">
</head>
<style>
    .hover-shadow:hover {
        box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        transition: all 0.3s ease;
    }
</style>

<title>Kategori</title>
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
                    <h1 class="heading" data-aos="fade-up">Pilih Jenis Wisatamu!</h1>

                    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                        <ol class="breadcrumb text-center justify-content-center">
                            <li class="breadcrumb-item active text-white-50" aria-current="page">Memudahkan anda dalam
                                memilih jenis wisata sesuai dengan keinginan dan kebutuhan
                            </li>
                        </ol>
                    </nav>
                    <form action="{{ url('/kategori/cari') }}"
                        class="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up"
                        data-aos-delay="200">
                        <input type="text" name="q" class="form-control px-4" placeholder="Cari tempat wisata....."
                            value="{{ request('q') }}">
                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div class="section section-properties py-5 bg-light">
        <div class="container">
            <div class="row mb-5 text-center">
                <div class="col">
                    <h2 class="text-primary fw-bold">Kategori Wisata</h2>
                    <p class="text-muted">Temukan jenis wisata yang sesuai dengan keinginanmu</p>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                @forelse($list_kategori_wisata as $kategori)
                    <div class="col">
                        <div class="card h-100 shadow-sm border-0 rounded-4 text-center p-3 hover-shadow">
                            @if($kategori->gambar)
                                <div class="mx-auto mb-3"
                                    style="width: 150px; height: 150px; overflow: hidden; border-radius: 50%;">
                                    <img src="{{ asset($kategori->gambar) }}" class="img-fluid w-100 h-100"
                                        style="object-fit: cover;" alt="{{ $kategori->name }}">
                                </div>
                            @endif
                            <div class="card-body">
                                <h5 class="card-title text-secondary fw-bold">{{ $kategori->name }}</h5>
                                <p class="card-text text-muted small" style="text-align: justify;">{{ $kategori->deskripsi }}</p>
                            </div>
                            <div class="card-footer bg-transparent border-0">
                                <a href="{{ route('kategori.show', $kategori->id) }}"
                                    class="btn btn-outline-secondary btn-sm rounded-pill px-4 border-2">Lihat Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                @empty
                    <div class="col text-center">
                        <p class="text-muted">Belum ada kategori wisata tersedia. '{{ request('q') }}'</p>
                    </div>
                @endforelse
            </div>
        </div>
    </div>



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