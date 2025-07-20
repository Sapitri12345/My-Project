<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailLokasiWisata extends Model
{
    protected $table = 'detail_lokasi_wisata';

    protected $fillable = [
        'deskripsi',
        'jam_buka',
        'jam_tutup',
        'lokasi_wisata_id',
        'harga_tiket',
    ];

    public function lokasiWisata()
    {
        return $this->belongsTo(LokasiWisata::class, 'lokasi_wisata_id');
    }
}
