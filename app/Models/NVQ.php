<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NVQ extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    protected $table = "learnconstruction_learnconstruction_nvqs";

    public function duration()
    {
        return $this->belongsTo(Duration::class,'duration_id');
    }

}
