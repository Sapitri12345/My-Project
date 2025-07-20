<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriWisata extends Model
{
    use HasFactory;
    protected $table = 'kategori_wisata';
    protected $fillable = ['name', 'deskripsi', 'gambar'];

    public function LokasiWisata()
    {
        return $this->hasMany(LokasiWisata::class, 'kategori_wisata_id');
    }

}
