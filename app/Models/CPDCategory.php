<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CPDCategory extends Model
{
    use HasFactory;
    public $connection = "mysql2";
    protected $table = "learnconstruction_learnconstruction_cpdcategories";

    public function courses()
    {
        return $this->hasMany(CPD::class,"cpd_category_id");
    }
}
