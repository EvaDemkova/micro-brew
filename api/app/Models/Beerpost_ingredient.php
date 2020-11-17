<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Beerpost;

class Beerpost_ingredient extends Model
{
    use HasFactory;


    protected $fillable = ['beerpost_id', 'ingredient_id', 'ingredient_name', 'quantity'];


    public function beerpost() {
        return $this->belongsTo(Beerpost::class);
    }
}
