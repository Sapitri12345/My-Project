<?php

namespace App\Http\Controllers;

use App\Models\KategoriWisata;
use App\Models\LokasiWisata;
use App\Models\Rating;
use Illuminate\Http\Request;
use App\Models\Provinsi;

class BerandaController extends Controller
{
    public function index()
    {
        $list_prov = Provinsi::all();
        return view('beranda.index', [
            'judul' => 'Data Provinsi',
            'list_provinsi' => $list_prov,
        ]);
    }

    public function beranda()
    {
        $list_prov = Provinsi::all();
        return view('beranda', [
            'judul' => 'Tampilan Lade',
            'list_provinsi' => $list_prov
        ]);
    }

    public function showBeranda(Request $request)
    {
        $list_kategori_wisata = KategoriWisata::all();
        $list_rating = Rating::all();
        $list_provinsi = Provinsi::all();

        // Ambil query pencarian jika ada
        $query = $request->input('query');

        $hasil_pencarian = null;

        if ($query) {
            $hasil_pencarian = LokasiWisata::where('name', 'like', '%' . $query . '%')
                ->orWhere('alamat', 'like', '%' . $query . '%')
                ->orWhere('deskripsi', 'like', '%' . $query . '%')
                ->get();
        }

        return view('beranda', compact('list_kategori_wisata', 'list_rating', 'list_provinsi', 'hasil_pencarian', 'query'));
    }

    private function getGeoJsonProvinsi()
    {
        $list_prov = Provinsi::all();
        return response()->json($list_prov);
    }
}
