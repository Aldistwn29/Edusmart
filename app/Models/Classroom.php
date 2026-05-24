<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;
    protected $fillable =
    [
        'name',
        'teacher_id',
    ];

    // relationships
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'classroom_members', 'classroom_id', 'student_id')->withTimestamps()->withPivot('joined_at');
    }

    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
}
