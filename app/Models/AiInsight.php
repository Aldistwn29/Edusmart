<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AiInsight extends Model
{
    use HasFactory;

    protected $fillable = [
        'material_performance_id',
        'analysis_text',
        'recommendation_text',
        'generated_at'
    ];

    // relasi
    public function performance()
    {
        return $this->belongsTo(MaterialPerformance::class, 'material_performance_id');
    }
}
