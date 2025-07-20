<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_lokasi_wisata', function (Blueprint $table) {
            $table->id();
            $table->mediumText('deskripsi');
            $table->time('jam_buka')->nullable();
            $table->time('jam_tutup')->nullable();
            $table->foreignId('lokasi_wisata_id')->constrained('lokasi_wisata');
            $table->integer('harga_tiket')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_lokasi_wisata');
    }
};
