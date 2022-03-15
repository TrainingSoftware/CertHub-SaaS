<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCategory extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    protected $table = "learnconstruction_learnconstruction_categories";

    public function courses()
    {
        return $this->hasMany(Course::class,"category_id");
    }
}
