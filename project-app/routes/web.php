<?php

use App\Http\Controllers\DetailLokasiWisataController;
use App\Http\Controllers\IPMController;
use App\Http\Controllers\KategoriWisataController;
use App\Http\Controllers\KecamatanController;
use App\Http\Controllers\LokasiWisataController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\KabkotController;


// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return view('beranda');
// });

Route::get('/', [KategoriWisataController::class, 'showBeranda',])->name('beranda');

Route::get('/tentang-kami', function () {
    return view('tentang-kami');
});

// Route::get('/provinsi', [BerandaController::class, 'index'])
//     ->name('provinsi');

Route::get('/kabkot', [KabkotController::class, 'index'])
    ->name('kabkot');

Route::get('/kabkot2', [KabkotController::class, 'index2'])
    ->name('kabkot');

Route::get('/kecamatan', [KecamatanController::class, 'index']);

Route::get('/kategori_wisata', [KategoriWisataController::class, 'index']);

Route::get('/kategori_wisata/{id}', [KategoriWisataController::class, 'show'])->name('kategori.show');

Route::get('/informasi_wisata', [LokasiWisataController::class, 'index'])->name('wisata.index');

Route::get('/wisata/search', [LokasiWisataController::class, 'search'])->name('wisata.search');

Route::get('/wisata/filter', [LokasiWisataController::class, 'filter'])->name('wisata.filter');

Route::get('/kategori/cari', [KategoriWisataController::class, 'cari']);

Route::get('/wisata/{id}', [LokasiWisataController::class, 'show'])->name('wisata.show');

Route::get('/get-geojson-provinsi', [KabkotController::class, 'getGeoJsonProvinsi']);

Route::get('/get-geojson-kabkot', [KabkotController::class, 'getGeoJsonKabkot']);

Route::get('/get-geojson-kecamatan', [KecamatanController::class, 'getGeoJsonKecamatan']);

Route::get('/get-geojson-wisata', [KecamatanController::class, 'getGeoJsonWisata']);

Route::get('/', [BerandaController::class, 'showBeranda'])->name('beranda');






// Route::get('/admin', [UserController::class, 'index']);




