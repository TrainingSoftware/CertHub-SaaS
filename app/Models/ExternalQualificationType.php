<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExternalQualificationType extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    public $table = "learnconstruction_learnconstruction_courses";
}
