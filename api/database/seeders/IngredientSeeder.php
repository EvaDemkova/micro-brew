<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredients')->insert([
            [
                "type"=>"malt",
                "icon"=>""
            ], [
                "type"=>"hop",
                "icon"=>""
            ], [
                "type"=>"yeast",
                "icon"=>""
            ], [
                "type"=>"honey",
                "icon"=>""
            ], [
                "type"=>"spices",
                "icon"=>""
            ], [
                "type"=>"others",
                "icon"=>""
            ]
        ]);
    }
}
