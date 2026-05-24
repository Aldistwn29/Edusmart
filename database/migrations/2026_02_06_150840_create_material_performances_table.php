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
        Schema::create('material_performances', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_id')
                ->constrained('users')
                ->onDelete('cascade');

            $table->foreignId('material_id')
                ->constrained('materials')
                ->onDelete('cascade');

            $table->unsignedInteger('total_questions')->default(0);
            $table->unsignedInteger('correct_answers')->default(0);

            $table->decimal('accuracy', 5, 2)->default(0);

            $table->enum('mastery_level', ['weak', 'medium', 'strong'])
                ->default('weak');

            $table->timestamp('last_evaluated_at')->nullable();

            $table->timestamps();

            $table->unique(['student_id', 'material_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_performances');
    }
};
