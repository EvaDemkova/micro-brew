<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Beerpost_ingredient;
use App\Models\Ingredient;
use App\Models\Beerpost_like;
use App\Models\Beerpost_comment;
use App\Models\Beerpost_section;
use App\Models\User;

class Beerpost extends Model
{
    use HasFactory;

    public function ingredients() 
    {
        return $this->belongsToMany(Ingredient::class, 'beerpost_ingredients')->withPivot('ingredient_name','quantity');
    }

    public function likes()
    {
        return $this->hasMany(Beerpost_like::class);
    }

    public function comments()
    {
        return $this->hasMany(Beerpost_comment::class);
    }

    public function beerpost_sections()
    {
        return $this->hasMany(Beerpost_section::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
