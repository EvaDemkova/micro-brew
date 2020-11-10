<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Beerpost_ingredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beerpost_ingredients')->insert([
            [   
                "beerpost_id"=>1,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pale Malt Weyermann", 
                "quantity"=>"4.61 kg"
            ],[
                "beerpost_id"=>1,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Munich || Weyermann", 
                "quantity"=>"430 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Caramunich ||| Weyermann", 
                "quantity"=>"340 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Carapils Weyermann", 
                "quantity"=>"140 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Willamette 4,6%", 
                "quantity"=>"23 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Vanguard 5.6%", 
                "quantity"=>"15.8 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Cascade 7.5%", 
                "quantity"=>"11.3 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Cascade 7.0%", 
                "quantity"=>"17 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Saphir 3.5%", 
                "quantity"=>"17 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Hellertauer Mittelfrueh 4.0%", 
                "quantity"=>"17 g"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>3, 
                "ingredient_name"=>"White Labs WLP833 76%", 
                "quantity"=>"1 pkg"
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>6, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>1,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Bohemian Pilsner Weyermann", 
                "quantity"=>"5.2 kg"
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Munich Fuglsang", 
                "quantity"=>"500 g"
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Chateau Melano Castle Malting", 
                "quantity"=>"200 g"
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Polaris 19.1%", 
                "quantity"=>"15 g"
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Saaz 3.6%", 
                "quantity"=>"70 g"
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>3, 
                "ingredient_name"=>"Mangrove Jack's M84 69%", 
                "quantity"=>"3 pkg"
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>2,
                "ingredient_id"=>6, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pale ALe Malt", 
                "quantity"=>"5.62 kg"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Munich Malt", 
                "quantity"=>"370 g"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Caraamber Weyermann", 
                "quantity"=>"190 g"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Carared Weyermann", 
                "quantity"=>"190 g"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Melanoidin BestMalz", 
                "quantity"=>"190 g"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Citra 12.0%", 
                "quantity"=>"20 g"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Citra 12.0%", 
                "quantity"=>"290 g"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>3, 
                "ingredient_name"=>"Mangrove Jack's M44 73%", 
                "quantity"=>"1 pkg"
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>3,
                "ingredient_id"=>6, 
                "ingredient_name"=>"Yeast Nutrients", 
                "quantity"=>"1 tsp"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Vienna BestMalz", 
                "quantity"=>"4 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Caramel Munich BestMalz", 
                "quantity"=>"625 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pilsen Malt BestMalz", 
                "quantity"=>"250 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Melanoidin BestMalz", 
                "quantity"=>"120 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Carafa Weyermann", 
                "quantity"=>"100 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Magnun 14%", 
                "quantity"=>"16 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Hallertauer Mittelfrueh 4.0%", 
                "quantity"=>"18 g"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>3, 
                "ingredient_name"=>"Norwegian Kveik 80%", 
                "quantity"=>"5.5 ml"
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>4,
                "ingredient_id"=>6, 
                "ingredient_name"=>null, 
                "quantity"=> null
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pilsner Malt", 
                "quantity"=>"4.18 kg"
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Vienna Malt", 
                "quantity"=>"520 g"
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Carapils Hoepfner", 
                "quantity"=>"260 g"
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Munich BestMalz", 
                "quantity"=>"260 g"
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Saaz 3.2%", 
                "quantity"=>"170 g"
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>3, 
                "ingredient_name"=>"White Labs WLP800", 
                "quantity"=>"3 pkg"
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>5,
                "ingredient_id"=>6, 
                "ingredient_name"=>"Yeast nutrients", 
                "quantity"=>"2.2 g"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pale Ale Golden Promise", 
                "quantity"=>"6 kg"
            ],  [
                "beerpost_id"=>6,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Melanoidin", 
                "quantity"=>"572 g"
            ],  [
                "beerpost_id"=>6,
                "ingredient_id"=>6, 
                "ingredient_name"=>"Mango", 
                "quantity"=>"1 kg"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>6, 
                "ingredient_name"=>"Maltodextrin", 
                "quantity"=>"500 g"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Magnum 12.0%", 
                "quantity"=>"15.8 g"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Mosaic 12.3%", 
                "quantity"=>"106 g"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Azacca 15.0%", 
                "quantity"=>"106 g"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Nelson sauvin 12.0%", 
                "quantity"=>"32 g"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>3,
                "ingredient_name"=>"Wyeast Labs 1056", 
                "quantity"=>"1 pkg"
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>6,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pilsner Fuglsang", 
                "quantity"=>"4.9 kg"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Munich Fuglsang", 
                "quantity"=>"550 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Chateau Chit", 
                "quantity"=>"500 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Oats, Flaked Stageland", 
                "quantity"=>"500 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Simcoe 12.7%", 
                "quantity"=>"180 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Amarillo 9.1%", 
                "quantity"=>"50 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Centennial 8.0%", 
                "quantity"=>"50 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Citra 13.8%", 
                "quantity"=>"100 g"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>3, 
                "ingredient_name"=>"Lallemand 78%", 
                "quantity"=>"1 pkg"
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>5, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>7,
                "ingredient_id"=>6, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Pale Ale Malz Ireks", 
                "quantity"=>"3.3 kg"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Crystal Rosewood Ireks", 
                "quantity"=>"195 g"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>1, 
                "ingredient_name"=>"Carafa Weyermann", 
                "quantity"=>"53 g"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>2, 
                "ingredient_name"=>"Hallertau Magnum 12.7%", 
                "quantity"=>"18 g"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>3, 
                "ingredient_name"=>"Norwegian Kveik", 
                "quantity"=>"3 ml"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>5, 
                "ingredient_name"=>"Cinnamom Powder", 
                "quantity"=>"0.33 tsp"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>4, 
                "ingredient_name"=>null, 
                "quantity"=>null
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>6, 
                "ingredient_name"=>"Orange peel, Bitter", 
                "quantity"=>"20 g"
            ], [
                "beerpost_id"=>8,
                "ingredient_id"=>5, 
                "ingredient_name"=>"Orange peel, Sweet ", 
                "quantity"=>"20 g"
            ]
        ]);
    }
}
