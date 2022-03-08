<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseMetas extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    public $table = "learnconstruction_learnconstruction_course_meta";


    public function location()
    {
        return $this->belongsTo(Location::class,'location_id');
    }
    public function duration()
    {
        return $this->belongsTo(Duration::class,'duration_id');
    }
}
