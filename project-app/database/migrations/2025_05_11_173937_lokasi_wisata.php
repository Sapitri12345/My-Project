<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lokasi_wisata', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30)->unique()->nullable(false);
            $table->text('deskripsi');
            $table->string('alamat', 255);
            $table->double('latitude');
            $table->double('longitude');
            $table->foreignId('kecamatan_id')->constrained('kecamatan');
            $table->foreignId('kategori_wisata_id')->constrained('kategori_wisata');
            $table->string('gambar')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lokasi_wisata');
    }
};
