<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Beerpost_commentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beerpost_comments')->insert([
            [
                "beerpost_id" => 1,
                "user_id"=> 2,
                "text" => "Looks great, I would like to try one",
            ], [
                "beerpost_id" => 1,
                "user_id"=> 3,
                "text" => "Nice, why did you do only primary fermentation? ",
            ], [
                "beerpost_id" => 4,
                "user_id"=> 1,
                "text" => "Wow, nice job",
            ], [
                "beerpost_id" => 5,
                "user_id"=> 2,
                "text" => "I will try this recipe",
            ], [
                "beerpost_id" => 3,
                "user_id"=> 2,
                "text" => "Great, when did you brew it? ",
            ], [
                "beerpost_id" => 3,
                "user_id"=> 3,
                "text" => "Nice, please save me some beer, next week I will stop at your place",
            ],[
                "beerpost_id" => 3,
                "user_id"=> 2,
                "text" => "Great!",
            ]
        ]);
    }
}
