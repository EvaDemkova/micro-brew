<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Beerpost_sectionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beerpost_sections')->insert([
            [  
                "beerpost_id"=>1,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 69°C
                    Mash Out - 10min - 78°C",
                "duration"=>null
            ], [
                "beerpost_id"=>1,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Willamette - 23 g - 75min - boil
                    Vanguard - 15.8 g - 35min - boil
                    Cascade - 11.3 g - 35min - boil
                    Cascade - 17 g - 2min - boil
                    Hallertauer Mittelfrueh - 17 g - 2min - boil
                    Saphir - 17 g - 2min - boil
                    Cascade - 25.4 g - day 7 - Dry Hop
                    Hallertauer Mittelfrueh - 25.4 g - day 7 - Dry Hop"
                    ,
                "duration"=>null
            ], [
                "beerpost_id"=>1,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    1 day - 13°C
                    3 days - 11°C",
                "duration"=>4
            ], [
                "beerpost_id"=>1,
                "section_name"=>"Bottling",
                "description"=>"
                    46x 0.5l bottles",
                "duration"=>null
            ], [
                "beerpost_id"=>1,
                "section_name"=>"Secondary Fermentation",
                "description"=>"
                    2 days - 16°C
                    7 days - 2.2°C
                    10 day - 2.2°C",
                "duration"=>19
            ], [
                "beerpost_id"=>2,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 66°C
                    Mash Out - 15min - 78°C",
                "duration"=>null
            ], [
                "beerpost_id"=>2,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Polaris - 15 g - 90min - boil
                    Saaz - 20 g - 15min - boil
                    Saaz - 20 g - 5min - boil
                    Saaz - 20 g - 1min - boil",
                "duration"=>null
            ], [
                "beerpost_id"=>2,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    4 days - 10°C
                    1 day - 13°C
                    1 day - 17°C
                    1 day - 19°C",
                "duration"=>7
            ],[
                "beerpost_id"=>2,
                "section_name"=>"Bottling",
                "description"=>"
                    1 x 20KEG
                    5 x 0.5l bottles",
                "duration"=>null
            ], [
                "beerpost_id"=>2,
                "section_name"=>"Secondary Fermentation",
                "description"=>"
                    7 days - 5° - Cold Crash",
                "duration"=>7
            ], [
                "beerpost_id"=>3,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 66°C
                    Utmesking - 0min - 78°C",
                "duration"=>null
            ], [
                "beerpost_id"=>3,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Citra - 20 g - First Wort
                    Citra - 30 g - 15min - boil
                    Citra - 40 g - 10min - boil
                    Citra - 60 g - 5min - boil
                    Citra - 40 g - 0min - boil
                    Citra - 100 g - 8 days - Dry Hop",
                "duration"=>null
            ], [
                "beerpost_id"=>3,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    14 days - 20°C",
                "duration"=>14
            ],[
                "beerpost_id"=>3,
                "section_name"=>"Bottling",
                "description"=>null,
                "duration"=>null
            ], [
                "beerpost_id"=>3,
                "section_name"=>"Secondary Fermentation",
                "description"=>null,
                "duration"=>null,
            ], [
                "beerpost_id"=>4,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 65°C
                    Mash Out - 10min - 75°C",
                "duration"=>null
            ], [
                "beerpost_id"=>4,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Magnum - 16 g - 60min - boil
                    Hellertauer Mittelfrueh - 18 g - 10min - boil",
                "duration"=>null
            ], [
                "beerpost_id"=>4,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    10 days - 25°C",
                "duration"=>10
            ],[
                "beerpost_id"=>4,
                "section_name"=>"Bottling",
                "description"=>"
                    42 x 0.5l bottles",
                "duration"=>null
            ], [
                "beerpost_id"=>4,
                "section_name"=>"Secondary Fermentation",
                "description"=>null,
                "duration"=>null
            ], [
                "beerpost_id"=>5,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 65°C",
                "duration"=>null
            ], [
                "beerpost_id"=>5,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Saaz - 60 g - 60min - boil
                    Saaz - 60 g - 30min - boil
                    Saaz - 35 g - 15min - boil
                    Saaz - 15 g - 20min - aroma",
                "duration"=>null
            ], [
                "beerpost_id"=>5,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    14 days - 11°C",
                "duration"=>14
            ],[
                "beerpost_id"=>5,
                "section_name"=>"Bottling",
                "description"=>"
                    2 x 10l KEG",
                "duration"=>null
            ], [
                "beerpost_id"=>5,
                "section_name"=>"Secondary Fermentation",
                "description"=>null,
                "duration"=>null
            ], [
                "beerpost_id"=>6,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 68°C
                    Mash out - 10min - 75°C",
                "duration"=>null
            ], [
                "beerpost_id"=>6,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Magnum - 15.8 g - 60min - boil
                    Mosaic - 53.1 g - 30min - aroma
                    Azacca - 42.5 g - 30min - aroma
                    Mosaic - 53.1 g - day 2 - Dry Hop
                    Azacca - 31.9 g - day 2 - Dry Hop
                    Azacca - 31.9 g - 4 days - Dry Hop
                    Nelson Sauvin - 31.9 g - 4 days - Dry Hop",
                "duration"=>null
            ], [
                "beerpost_id"=>6,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    5 days - 19°C
                    2 days - 21°C
                    4 days - 14°C",
                "duration"=>11
            ],[
                "beerpost_id"=>6,
                "section_name"=>"Bottling",
                "description"=>"
                    48 x 0.5l bottles",
                "duration"=>null
            ], [
                "beerpost_id"=>6,
                "section_name"=>"Secondary Fermentation",
                "description"=>"
                    3 days - 4°C - Cold Crash",
                "duration"=>3
            ], [
                "beerpost_id"=>7,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 65°C
                    Mash Out - 15min . 78°C",
                "duration"=>null
            ], [
                "beerpost_id"=>7,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Simcoe - 80 g - 10min - aroma
                    Amarillo - 50 g - 10min - aroma
                    Centennial - 50 g - 10min - aroma
                    Citra - 50 g - 10min - aroma
                    Simcoe - 100g -5 days - Dry Hop
                    Citra - 50 g - 5 days - Dry Hop",
                "duration"=>null
            ], [
                "beerpost_id"=>7,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    10 days - 18°C
                    4 days - 21°C",
                "duration"=>14
            ],[
                "beerpost_id"=>7,
                "section_name"=>"Bottling",
                "description"=>null,
                "duration"=>null
            ], [
                "beerpost_id"=>7,
                "section_name"=>"Secondary Fermentation",
                "description"=>null,
                "duration"=>null
            ], [
                "beerpost_id"=>8,
                "section_name"=>"Mash Profile",
                "description"=>"
                    Mash - 60min - 69°C
                    Mash Out - 10min - 75°C",
                "duration"=>null
            ], [
                "beerpost_id"=>8,
                "section_name"=>"Hopping Profile",
                "description"=>"
                    Hallertau Magnum - 18 g - 60min - boil
                    ",
                "duration"=>null
            ], [
                "beerpost_id"=>8,
                "section_name"=>"Primary Fermentation",
                "description"=>"
                    7 days - 30°C",
                "duration"=>7
            ],[
                "beerpost_id"=>8,
                "section_name"=>"Bottling",
                "description"=>null,
                "duration"=>null
            ], [
                "beerpost_id"=>8,
                "section_name"=>"Secondary Fermentation",
                "description"=>null,
                "duration"=>null
            ], 
        ]);
    }
}
