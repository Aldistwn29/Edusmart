<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quize extends Model
{
    use HasFactory;

    protected $fillable = [
        'topic_id',
        'quiz_title'
    ];

    // Relasi
    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function quenstions()
    {
        return $this->hasMany(Question::class);
    }

}
