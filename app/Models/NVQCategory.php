<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NVQCategory extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    protected $table = "learnconstruction_learnconstruction_card_type";

    public function courses()
    {
        return $this->hasMany(NVQ::class,"card_type_id");
    }
}
