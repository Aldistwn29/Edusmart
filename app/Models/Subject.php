<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'classroom_id',
        'name',
        'code'
    ];

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function topics()
    {
        return $this->hasMany(Topic::class);
    }
}
