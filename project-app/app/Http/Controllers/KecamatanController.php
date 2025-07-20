<?php

namespace App\Http\Controllers;

use App\Models\Kabkota;
use App\Models\Kecamatan;
use App\Models\LokasiWisata;
use Illuminate\Http\Request;

class KecamatanController extends Controller
{
    public function index()
    {
        $list_kec = Kecamatan::all();
        return view('kecamatan.index', [
            'judul' => 'Data Kabupaten/Kota',
            'list_kecamatan' => $list_kec,
        ]);
    }

    public function getGeoJsonKecamatan()
    {
        $kecamatan = Kecamatan::all();


        $features = [];

        foreach ($kecamatan as $kec) {
            if ($kec->type_polygon && $kec->polygon) {
                // Jika punya polygon
                $features[] = [
                    'type' => 'Feature',
                    'properties' => [
                        'name' => $kec->name
                    ],
                    'geometry' => [
                        'type' => $kec->type_polygon,
                        'coordinates' => json_decode($kec->polygon)
                    ]
                ];
            } elseif ($kec->latitude && $kec->longitude) {
                // Fallback: marker jika tidak ada polygon
                $features[] = [
                    'type' => 'Feature',
                    'properties' => [
                        'name' => $kec->alt_name
                    ],
                    'geometry' => [
                        'type' => 'Point',
                        'coordinates' => [
                            floatval($kec->longitude),
                            floatval($kec->latitude)
                        ]
                    ]
                ];
            }
        }

        return response()->json([
            'type' => 'FeatureCollection',
            'features' => $features
        ]);
    }

    public function getGeoJsonWisata()
    {
        $wisata = LokasiWisata::with('kecamatan')->get(); // pastikan relasi sudah dibuat

        $features = [];

        foreach ($wisata as $w) {
            $features[] = [
                'type' => 'Feature',
                'properties' => [
                    'id' => $w->id,
                    'name' => $w->name,
                    'description' => $w->alamat,
                    'foto' => $w->gambar,
                    'kecamatan' => $w->kecamatan->name ?? '' // tambahkan ini
                ],
                'geometry' => [
                    'type' => 'Point',
                    'coordinates' => [(float) $w->longitude, (float) $w->latitude]
                ]
            ];
        }

        return response()->json([
            'type' => 'FeatureCollection',
            'features' => $features
        ]);
    }


}
