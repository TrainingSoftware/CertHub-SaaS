<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CPD extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    protected $table = "learnconstruction_learnconstruction_cpd";

    public function duration()
    {
        return $this->belongsTo(Duration::class,'duration_id');
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
}

