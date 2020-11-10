<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FollowerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('followers')->insert([
            [
                "user_id_follower" => "2", 
                "user_id_followed"=>"1"
            ], [
                "user_id_follower" => "2", 
                "user_id_followed"=>"3"
            ], [
                "user_id_follower" => "1", 
                "user_id_followed"=>"3"
            ], [
                "user_id_follower" => "3", 
                "user_id_followed"=>"1"
            ]
        ]);
    }
}
