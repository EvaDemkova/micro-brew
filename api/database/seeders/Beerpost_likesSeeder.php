<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Beerpost_likesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beerpost_likes')->insert([
            [
                "beerpost_id" => 1, 
                "user_id" => 2
            ], [
                "beerpost_id" => 1, 
                "user_id" => 3
            ], [
                "beerpost_id" => 1, 
                "user_id" => 1
            ], [
                "beerpost_id" => 2, 
                "user_id" => 2
            ], [
                "beerpost_id" => 3, 
                "user_id" => 2
            ], [
                "beerpost_id" => 5, 
                "user_id" => 1
            ], [
                "beerpost_id" => 4, 
                "user_id" => 3
            ], [
                "beerpost_id" => 4, 
                "user_id" => 1
            ], [
                "beerpost_id" => 3, 
                "user_id" => 3
            ], [
                "beerpost_id" => 5, 
                "user_id" => 3
            ]
        ]);  
    }
}
