<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Employee;
class Department extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'body'
    ];


    public function employee()
    {
        return $this->hasMany(Employee::class);
    }
}
