<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $table = 'rating';

    protected $fillable = ['deskripsi', 'name', 'nilai_ulasan', 'gambar'];
}
