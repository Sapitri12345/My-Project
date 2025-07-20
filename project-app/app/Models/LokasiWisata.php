<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LokasiWisata extends Model
{
    use HasFactory;
    protected $table = 'lokasi_wisata';
    protected $fillable = ['name', 'deskripsi', 'alamat', 'latitude', 'longitude', 'kecamatan_id', 'kategori_wisata_id', 'gambar'];

    protected $casts = [
        'latitude' => 'float',
        'longitude' => 'float',
    ];

    public function kategori()
    {
        return $this->belongsTo(KategoriWisata::class, 'kategori_wisata_id');
    }

    public function Kecamatan()
    {
        return $this->belongsTo(Kecamatan::class, 'kecamatan_id');
    }

}
