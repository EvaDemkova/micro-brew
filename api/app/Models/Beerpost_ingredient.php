<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Beerpost;

class Beerpost_ingredient extends Model
{
    use HasFactory;

    public function beerpost() {
        return $this->belongsTo(Beerpost::class);
    }
}
