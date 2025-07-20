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


    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">

    <link rel="stylesheet" href="css/tiny-slider.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="css/style.css">

    <title>Tentang Kami</title>
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

    <div class="hero page-inner overlay" style="background-image: url('{{ asset('asset/images/pemandangan3.jpg') }}');">

        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-9 text-center mt-5">
                    <h1 class="heading" data-aos="fade-up">Tentang Kami</h1>
                    <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                        <ol class="breadcrumb text-center justify-content-center">
                            <li class="breadcrumb-item active text-white-50" aria-current="page">
                                Pengembang Indormasi website wisaka di Kota/Kabupaten Bogor terutama untuk daerah
                                Parung, Ciseeng dan Rumpin
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>


    <div class="section">
        <div class="container">
            <div class="row text-left mb-5">
                <div class="col-12">
                    <h2 class="font-weight-bold heading text-primary mb-4">Tentang Kami</h2>
                </div>
                <div class="col-lg-6">
                    <p class="text-black-50">Selamat datang di portal resmi wisata Parung, Ciseeng, dan Rumpin, kawasan
                        indah di Kabupaten Bogor yang kaya akan pesona alam, budaya, dan tradisi lokal. Kami hadir untuk
                        memperkenalkan dan mempromosikan keunikan serta potensi wisata dari tiga daerah ini kepada
                        wisatawan lokal maupun mancanegara.</p>
                    <p class="text-black-50">Parung dikenal dengan arsitektur tradisional dan area persawahan yang
                        hijau luas, cocok sebagai destinasi wisata alam dan edukasi agrikultur. Ciseeng menawarkan
                        keindahan alam pegunungan dan desa-desa yang autentik dengan keramahan penduduknya yang khas.
                        Sedangkan Rumpin menyuguhkan lanskap hutan lindung dan berbagai tempat ekowisata yang menarik
                        untuk dijelajahi para pecinta alam.</p>
                </div>
                <div class="col-lg-6">

                    <p class="text-black-50">Kami berkomitmen untuk menyajikan informasi lengkap, terpercaya, dan
                        inspiratif mengenai berbagai spot wisata, event budaya, kuliner khas, serta tips perjalanan agar
                        setiap kunjungan Anda menjadi pengalaman yang tak terlupakan. Melalui website ini, kami juga
                        mendukung pelestarian alam dan budaya adat yang menjadi identitas kuat wilayah Parung, Ciseeng,
                        dan Rumpin.</p>
                    <p class="text-black-50">Mari bersama-sama menggali keindahan alam dan kearifan lokal yang
                        ditawarkan tiga wilayah ini. Terima kasih telah mempercayakan kami sebagai panduan dalam
                        menjelajahi wisata Kabupaten Bogor bagian Parung, Ciseeng, dan Rumpin.</p>
                </div>
            </div>

        </div>
    </div>

    <div class="section pt-0">
        <div class="container">
            <div class="row justify-content-between mb-5">
                <div class="col-lg-7 mb-5 mb-lg-0 order-lg-2">
                    <div class="img-about dots">
                        <img src="{{ asset('asset/images/pemandangan2.jpg') }}" alt="Image" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex feature-h">
                        <span class="wrap-icon me-3">
                            <span class="icon-home2"></span>
                        </span>
                        <div class="feature-text">
                            <h3 class="heading">Informasi Lengkap dan Terpercaya</h3>
                            <p class="text-black-50">Menampilkan informasi yang lengkap dengan berbagai jenis tempat
                                wisata</p>
                        </div>
                    </div>

                    <div class="d-flex feature-h">
                        <span class="wrap-icon me-3">
                            <span class="icon-person"></span>
                        </span>
                        <div class="feature-text">
                            <h3 class="heading">Memiliki Titik Lokasi yang Akurat</h3>
                            <p class="text-black-50">Titik lokasi sesuai dengan tempat wisata
                                iste.</p>
                        </div>
                    </div>

                    <div class="d-flex feature-h">
                        <span class="wrap-icon me-3">
                            <span class="icon-security"></span>
                        </span>
                        <div class="feature-text">
                            <h3 class="heading">Mudah Digunakan</h3>
                            <p class="text-black-50">Mudah saat mengakses maupun mentelaah informasi</p>
                        </div>
                    </div>
                </div>
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


    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/tiny-slider.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/counter.js"></script>
    <script src="js/custom.js"></script>
</body>

</html>