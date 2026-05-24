<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialPerformance extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'material_id',
        'total_questions',
        'total_questions',
        'accuracy',
        'mastery_level',
        'last_evaluated_at',
    ];

    // relasi
    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function aiInsight()
    {
        return $this->hasOne(AiInsight::class);
    }
}
