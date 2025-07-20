<?php

namespace App\Http\Controllers;

use App\Models\KategoriWisata;
use App\Models\LokasiWisata;
use App\Models\Provinsi;
use App\Models\Rating;
use App\Models\TmpWisata;
use Illuminate\Http\Request;

class KategoriWisataController extends Controller
{
    public function index()
    {
        $list_kategori_wisata = KategoriWisata::all();
        return view('kategori_wisata.index', compact('list_kategori_wisata'));
    }

    // Fungsi untuk menampilkan halaman beranda
    public function showBeranda()
{
    $list_kategori_wisata = KategoriWisata::all();
    $list_provinsi = Provinsi::all();
    $list_rating = Rating::all(); // ← ambil data rating

    return view('beranda', compact('list_kategori_wisata', 'list_provinsi', 'list_rating'));
}
    public function show($id)
    {
        $kategori = KategoriWisata::findOrFail($id);
        $lokasiWisata = LokasiWisata::where('kategori_wisata_id', $id)->get();

        return view('kategori_wisata.detail', compact('kategori', 'lokasiWisata'));
        // dd($kategori, $tempatWisata);
    }

     public function cari(Request $request)
    {
        $keyword = $request->q;
        $list_kategori_wisata = KategoriWisata::where('name', 'like', "%{$keyword}%")->get();

        return view('kategori_wisata.index', compact('list_kategori_wisata'));
    }

}
