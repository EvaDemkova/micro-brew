<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EquipmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('equipment')->insert([
            [
                "user_id"=>1,
                "name"=>"ANVIL Foundry", 
                "photo"=>""
            ], [
                "user_id"=>2,
                "name"=>"Brewtools B150pro", 
                "photo"=>""
            ], [
                "user_id"=>3,
                "name"=>"Grainfather G30", 
                "photo"=>""
            ]
        ]);
    }
}
