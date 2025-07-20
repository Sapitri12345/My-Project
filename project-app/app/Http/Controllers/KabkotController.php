<?php

namespace App\Http\Controllers;

use App\Models\Kabkota;
use Illuminate\Http\Request;

class KabkotController extends Controller
{
    public function index()
    {
        $list_kab = Kabkota::all();
        return view('kabkot.index', [
            'judul' => 'Data Kabupaten/Kota',
            'list_kabkota' => $list_kab,
        ]);
    }

    public function index2()
    {
        $list_kab = Kabkota::all();
        return view('kabkot.index2', [
            'judul' => 'Peta Kabupaten/Kota',
            'list_kabkota' => $list_kab,
        ]);
    }

    public function getGeoJsonProvinsi()
    {
        $kabkota = Kabkota::where('name', 'LIKE', '%KABUPATEN%')->get();


        $features = [];

        foreach ($kabkota as $kab) {
            if ($kab->type_polygon && $kab->polygon) {
                // Jika punya polygon
                $features[] = [
                    'type' => 'Feature',
                    'properties' => [
                        'name' => $kab->alt_name
                    ],
                    'geometry' => [
                        'type' => $kab->type_polygon,
                        'coordinates' => json_decode($kab->polygon)
                    ]
                ];
            } elseif ($kab->latitude && $kab->longitude) {
                // Fallback: marker jika tidak ada polygon
                $features[] = [
                    'type' => 'Feature',
                    'properties' => [
                        'name' => $kab->alt_name
                    ],
                    'geometry' => [
                        'type' => 'Point',
                        'coordinates' => [
                            floatval($kab->longitude),
                            floatval($kab->latitude)
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

    public function getGeojsonKabkot()
    {
        $kabkota = Kabkota::where('name', 'LIKE', '%KOTA%')->get();


        $features = [];

        foreach ($kabkota as $kab) {
            if ($kab->type_polygon && $kab->polygon) {
                // Jika punya polygon
                $features[] = [
                    'type' => 'Feature',
                    'properties' => [
                        'name' => $kab->alt_name
                    ],
                    'geometry' => [
                        'type' => $kab->type_polygon,
                        'coordinates' => json_decode($kab->polygon)
                    ]
                ];
            } elseif ($kab->latitude && $kab->longitude) {
                // Fallback: marker jika tidak ada polygon
                $features[] = [
                    'type' => 'Feature',
                    'properties' => [
                        'name' => $kab->alt_name
                    ],
                    'geometry' => [
                        'type' => 'Point',
                        'coordinates' => [
                            floatval($kab->longitude),
                            floatval($kab->latitude)
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
}
