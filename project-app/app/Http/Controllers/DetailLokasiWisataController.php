<?php

namespace App\Http\Controllers;

use App\Models\DetailLokasiWisata;
use Illuminate\Http\Request;

class DetailLokasiWisataController extends Controller
{
    /**
     * Tampilkan detail lokasi wisata berdasarkan ID
     */
    public function show($id)
    {
        // Ambil data detail lokasi wisata beserta data lokasi wisata (relasi)
        $detail = DetailLokasiWisata::with('lokasiWisata')->findOrFail($id);

        // Kirim data ke view
        return view('detail_lokasi_wisata.show', compact('detail'));
    }
}
