<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Kabkota;

class Kecamatan extends Model
{
    use HasFactory;

    // ✅ GANTI nama tabel sesuai dengan nama tabel di database
    protected $table = 'kecamatan';

    protected $fillable = ['name', 'alt_name', 'latitude', 'longitude', 'kabkota_id', 'type_polygon', 'polygon'];

    // ✅ Nama relasi harus sesuai tujuan
    public function kabkota()
    {
        return $this->belongsTo(Kabkota::class, 'kabkota_id');
    }

    public function wisata()
    {
        return $this->hasMany(LokasiWisata::class);
    }


}

