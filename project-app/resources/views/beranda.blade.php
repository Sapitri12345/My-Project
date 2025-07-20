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
	<title>Beranda</title>
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

	<div class="hero">


		<div class="hero-slide">
			<div class="img overlay" style="background-image: url('{{ asset('asset/images/pemandangan3.jpg') }}')">
			</div>
			<div class="img overlay" style="background-image: url('{{ asset('asset/images/pemandangan2.jpg') }}')">
			</div>
			<div class="img overlay" style="background-image: url('{{ asset('asset/images/pemandangan1.jpg') }}')">
			</div>

		</div>

		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="col-lg-9 text-center">
					<h1 class="heading" data-aos="fade-up">Jelajahi Tempat Wisata Anda Untuk Bersantai</h1>
					<form action="{{ route('beranda') }}" method="GET"
						class="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up"
						data-aos-delay="200">
						<input type="text" name="query" class="form-control px-4"
							placeholder="Tempat, Kuliner dan Keseruan Lainnya" value="{{ request('query') }}">
						<button type="submit" class="btn btn-primary">Search</button>
					</form>
				</div>
			</div>
		</div>
	</div>


	<div class="section">
		<div class="container">
			<div class="row mb-5 align-items-center">
				<div class="col-lg-6">
					<h2 class="font-weight-bold text-primary heading">Pilih Jenis Wisata Favoritmu!</h2>
				</div>
				<!-- <div class="col-lg-6 text-lg-end">
					<p><a href="#" target="_blank" class="btn btn-primary text-white py-3 px-4">Selengkapnya</a>
					</p>
				</div> -->
			</div>
			<div class="row">
				<div class="col-12">
					<div class="property-slider-wrap">
						<div class="property-slider">
							@foreach($list_kategori_wisata as $kategori)
								<div class="property-item">
									@if($kategori->gambar)
										<div class="mx-auto rounded-circle-img">
											<img src="{{ asset($kategori->gambar) }}" alt="{{ $kategori->name }}">
										</div>
									@endif

									<div class="property-content">
										<div>
											<span class="d-block mb-2 text-black-50">{{ $kategori->wisata }}</span>
											<span class="city d-block mb-3">{{ $kategori->name }}</span>
											<a href="{{ route('kategori.show', $kategori->id) }}"
												class="btn btn-primary py-2 px-3">Selengkapnya</a>
										</div>
									</div>
								</div> <!-- .item -->
							@endforeach
						</div>

						<div id="property-nav" class="controls" tabindex="0" aria-label="Carousel Navigation">
							<span class="prev" data-controls="prev" aria-controls="property" tabindex="-1">Prev</span>
							<span class="next" data-controls="next" aria-controls="property" tabindex="-1">Next</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<section class="features-1">
		<div class="container">
			<div class="row">
				<div class="col-12" data-aos="fade-up" data-aos-delay="300">
					<div class="box-feature text-center p-4">
						<span class="flaticon-house"></span>
						<h2 class="font-weight-bold text-primary heading">Jadikan Liburanmu Jadi Menarik!</h2>
						<p>Liburan bukan hanya tentang pergi ke suatu tempat — tapi tentang menciptakan momen,
							menjelajahi keindahan, dan menemukan pengalaman baru yang tak terlupakan. Di tengah
							kesibukan sehari-hari, kamu pantas mendapatkan waktu untuk menjelajah, menikmati udara
							segar, dan merasakan kebahagiaan sejati. Kota dan Kabupaten Bogor menyimpan banyak surga
							tersembunyi, mulai dari alam pegunungan yang sejuk, air terjun yang menyegarkan, hingga
							tempat wisata edukatif dan budaya yang kaya nilai sejarah.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="features-1">
		<div class="container">
			<div class="row">
				<div class="col-12" data-aos="fade-up" data-aos-delay="300">
					<div class="col-12" data-aos="fade-up" data-aos-delay="300">
						<div class="box-feature text-center p-4">
							<div class="utama" style="text-align:center">
								<h2 class="font-weight-bold text-primary heading">Telusuru Yuk Wilayah Indonesia</h1>
									<p>Data yang didapat melalui BPS dan berikut merupakan semua titik dari Provinsi
										yang
										ada di Indonesia</p>
							</div>
							<div id="map"></div>
							<script>
								var map = L.map('map').setView([-0.3155398750904368, 117.1371634207888], 5);
								L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
									maxZoom: 18,
									attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
								}).addTo(map);

								var provinces = @json($list_provinsi);
								console.log(provinces);
								provinces.forEach(function (province) {
									var marker = L.marker([province.latitude, province.longitude]).addTo(map);
									marker.bindPopup(province.name);
								});

							</script>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<div class="section">
		<div class="row justify-content-center footer-cta" data-aos="fade-up">
			<div class="col-lg-7 mx-auto text-center">
				<h2 class="mb-4 ">Tentukan Tempat Wisatamu — dan buat kenangan indahmu dimulai hari ini!</h2>
				<p><a href="/informasi_wisata" class="btn btn-primary text-white py-3 px-4">Mulai Jelajahi Sekarang</a>
				</p>
			</div> <!-- /.col-lg-7 -->
		</div> <!-- /.row -->
	</div>
	<section class="py-5 bg-light text-center">
		<div class="container">
			<h2 class="fw-bold mb-3">Apa Kata Mereka?</h2>
			<p class="text-muted mb-5">Yuk lihat apa yang mereka rasakan</p>

			<div class="row justify-content-center">
				@foreach($list_rating as $rating)
					<div class="col-md-4 mb-4">
						<div class="card h-100 shadow-sm border-0">
							<div class="card-body text-center">
								{{-- Gambar user default --}}
								<img src="{{ $rating->gambar }}" class="rounded-circle mb-3" width="130" height="150"
									alt="foto">

								<h5 class="fw-bold">{{ $rating->name }}</h5>
								<small class="text-muted">Pengunjung</small>
								<p class="mt-3 text-muted">{{ $rating->deskripsi }}</p>

								<div>
									@for ($i = 1; $i <= 5; $i++)
										@if ($i <= $rating->nilai_ulasan)
											<span style="color: gold; font-size: 20px;">★</span>
										@else
											<span style="color: lightgray; font-size: 20px;">☆</span>
										@endif
									@endfor
								</div>
							</div>
						</div>
					</div>
				@endforeach
			</div>
		</div>
	</section>

	<div class="section">
		<div class="row justify-content-center footer-cta" data-aos="fade-up">
			<div class="col-lg-7 mx-auto text-center">
				<h2 class="mb-4 ">Statistik Pengunjung</h2>
				<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
				<div class="commonninja_component pid-b55547b0-bb3f-41a4-bd94-9157e2672afc"></div>
			</div> <!-- /.col-lg-7 -->
		</div> <!-- /.row -->
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