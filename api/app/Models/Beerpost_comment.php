<?php

namespace App\Models;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beerpost_comment extends Model
{
    use HasFactory;

    protected $fillable = ['beerpost_id','user_id','text'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
