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


  <title>Navbar</title>
</head>

<body>
  <nav class="site-nav">
    <div class="container">
      <div class="menu-bg-wrap">
        <div class="site-navigation">
          <a href="/" class="logo float-start fs-5">Wisata Bogor</a>

          <a href="#"
            class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
            data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>

          @php
            $segment1 = Request::segment(1);
            $isBeranda = Request::is('/') || Request::fullUrlIs(url('/') . '?*');
          @endphp

          <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
            <li class="{{ $isBeranda ? 'active' : '' }}">
              <a href="/">Beranda</a>
            </li>
            <li class="{{ Request::is('kabkot') || Request::is('kabkot2') ? 'active' : '' }}">
              <a href="/kabkot">Peta Wisata</a>
            </li>
            <li class="{{ Request::is('kecamatan') ? 'active' : '' }}">
              <a href="/kecamatan">Kecamatan</a>
            </li>
            <li class="{{ Request::is('informasi_wisata*') || Request::is('wisata*') ? 'active' : '' }}">
              <a href="/informasi_wisata">Tempat wisata</a>
            </li>
            <li class="{{ Request::is('kategori_wisata*') ? 'active' : '' }}">
              <a href="/kategori_wisata">Kategori Wisata</a>
            </li>
            <li class="{{ Request::is('tentang-kami') ? 'active' : '' }}">
              <a href="/tentang-kami">Tentang Kami</a>
            </li>
            <li class="ms-3 ps-3 border-start">
              <a href="/admin" class="d-flex align-items-center gap-2 text-white px-2 py-1 rounded border border-white"
                title="Masuk halaman admin">
                <img src="{{ asset('image/admin.png') }}" alt="Admin" style="width: 20px; height: 20px;">
                <span class="fw-semibold small">Admin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

</body>


</html>