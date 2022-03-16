<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    protected $table = "learnconstruction_learnconstruction_courses";

    protected $casts = [
        'agenda' => 'array'
    ];
    protected $with = [
        'courseMetas'
    ];

    public function duration()
    {
        return $this->belongsTo(Duration::class,'duration_id');
    }
    public function courseMetas()
    {
        return $this->hasMany(CourseMetas::class,'course_id');
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }

}
