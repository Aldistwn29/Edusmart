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
        Schema::create('ai_insights', function (Blueprint $table) {
            $table->id();
            $table->foreignId('material_performance_id')
                ->constrained('material_performances')
                ->onDelete('cascade');
            $table->text('analysis_text');
            $table->text('recommendation_text');

            $table->timestamp('generated_at')->useCurrent();
            $table->timestamps();
            $table->unique('material_performance_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_insights');
    }
};
