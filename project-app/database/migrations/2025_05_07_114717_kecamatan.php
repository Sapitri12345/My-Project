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
        Schema::create('kecamatan', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30)->unique()->nullable(false);
            $table->string('alt_name', 30);
            $table->double('latitude');
            $table->double('longitude');
            $table->foreignId('kabkota_id')->constrained('kabkota');
            $table->enum('type_polygon', ['Polygon', 'MultiPolygon'])->nullable(true);
            $table->longText('polygon')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kecamatan');
    }
};
