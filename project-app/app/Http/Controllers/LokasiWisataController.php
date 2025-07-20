<?php

namespace App\Http\Controllers;

use App\Models\DetailLokasiWisata;
use App\Models\Kecamatan;
use App\Models\LokasiWisata;
use App\Models\TmpWisata;
use Illuminate\Http\Request;

class LokasiWisataController extends Controller
{
    public function index()
    {
        $lokasiWisata = LokasiWisata::all();
        $kecamatanList = Kecamatan::all(); // <-- Tambahkan baris ini

        return view('informasi_wisata.index', compact('lokasiWisata', 'kecamatanList'));
    }


    public function show($id)
    {
        $wisata = LokasiWisata::findOrFail($id);
        $detail = DetailLokasiWisata::where('lokasi_wisata_id', $id)->first();

        return view('detail_lokasi_wisata.show', compact('wisata', 'detail'));
        // dd($kategori, $tempatWisata);
    }

    public function search(Request $request)
    {
        $query = LokasiWisata::query();

        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
        }

        $lokasiWisata = $query->get();
        $kecamatanList = Kecamatan::all();

        return view('informasi_wisata.index', compact('lokasiWisata', 'kecamatanList'));
    }

    // Filter berdasarkan kecamatan
    public function filter(Request $request)
    {
        $query = LokasiWisata::query();

        if ($request->filled('kecamatan')) {
            $query->where('kecamatan_id', $request->kecamatan);
        }

        $lokasiWisata = $query->get();
        $kecamatanList = Kecamatan::all();

        return view('informasi_wisata.index', compact('lokasiWisata', 'kecamatanList'));
    }



}
