<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beerpost_like extends Model
{
    use HasFactory;

    protected $fillable = [
        'beerpost_id',
        'user_id'
    ];
}
