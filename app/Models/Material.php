<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
        'topic_id',
        'title',
        'content'
    ];

    // relasi
    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }

    public function quiz()
    {
        return $this->hasOne(Quiz::class);
    }

    public function performance()
    {
        return $this->hasMany(MaterialPerformance::class);
    }
}
