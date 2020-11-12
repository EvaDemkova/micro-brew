<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Beerpost_ingredient;
use App\Models\Ingredient;

class Beerpost extends Model
{
    use HasFactory;

    public function ingredients() 
    {
        return $this->belongsToMany(Ingredient::class, 'beerpost_ingredients')->withPivot('ingredient_name','quantity');
    }
}
