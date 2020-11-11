<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Beerpost;

class BeerpostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beerposts')->insert([
            [
                "user_id" => "1",
                "beer_name" => "Brooklyn Lager", 
                "type"=>"lager",
                "description"=>"Brooklyn Lager is Brooklyn Brewery’s flagship beer. It is loosely based on the old Vienna lager style, derivations of which were popular in parts of the United States in the late 1800s. Its bitterness is snappy, with a firm malt core, and the beer is dry hopped.",
                "abv"=>"5.5 %",
                "og"=>"1.054",
                "carbonation"=>"2.5",
                "gravity"=>"13.5°",
                "status"=>"primary fermentation",
                "ebc"=>"20.5",
                "ibu"=>"30",
                "batch_volume"=>"23",
        ], [
                "user_id" => "3",
                "beer_name" => "Bohemian Pilsner", 
                "type"=>"lager",
                "description"=>"
                            Bohemian Pilsner is a light, easy-drinking and typical Czech pilsner. Round, soft malt character and taste from the Saaz hops that are typical of this style.

                            Food: suitable for shellfish, chicken, salad, mild light cheeses",
                "abv"=>"4.7 %",
                "og"=>"1.052",
                "carbonation"=>"2.3-2.7",
                "gravity"=>"12°",
                "status"=>"Ready to drink",
                "ebc"=>"10.8",
                "ibu"=>"36",
                "batch_volume"=>"25",
        ], [    
                "user_id" => "3",
                "beer_name" => "Singlehop Citra IPA", 
                "type"=>"ale",
                "description"=>"
                            Comfortable and well balanced.This beer is for many a reference to how a good single-store citra IPA should be: Lots of good citrus flavor, without the bitterness taking over.",
                "abv"=>"6.6 %",
                "og"=>"1.063",
                "carbonation"=>"2.4-2.9",
                "gravity"=>"14 °",
                "status"=>"Secondary fermentation",
                "ebc"=>"17.9",
                "ibu"=>"77",
                "batch_volume"=>"23",
        ], [
                "user_id" => "3",
                "beer_name" => "Vienna Lager", 
                "type"=>"lager",
                "description"=>null,
                "abv"=>"6.0 %",
                "og"=>"1.057",
                "carbonation"=>"2.4-2.9",
                "gravity"=>"14 °",
                "status"=>"Drank out",
                "ebc"=>"31.5",
                "ibu"=>"29",
                "batch_volume"=>"21",
        ], [
                "user_id" => "2",
                "beer_name" => "Pilsner Lager", 
                "type"=>"lager",
                "description"=>"
                            Nothing moore to say. Just a ordinary Pilsner.
                            Maybe s little high bitternes. But that's the way I like it.",
                "abv"=>"6.2 %",
                "og"=>"1.044",
                "carbonation"=>"2.4-2.9",
                "gravity"=>"12 °",
                "status"=>"Ready to drink",
                "ebc"=>"8.3",
                "ibu"=>"50",
                "batch_volume"=>"20",
        ], [
                "user_id" => "1",
                "beer_name" => "Mango Lassi IPA", 
                "type"=>"ale",
                "description"=>"
                            Huge mango flavour with a full body and lots of mango flavour and aroma. Prefect for those summer days..",
                "abv"=>"6.0 %",
                "og"=>"1.068",
                "carbonation"=>"2.3-2.7",
                "gravity"=>"16.5 °",
                "status"=>"Ready to drink",
                "ebc"=>"15.2",
                "ibu"=>"32",
                "batch_volume"=>"24.42",
        ], [
                "user_id" => "2",
                "beer_name" => "New England IPA", 
                "type"=>"ale",
                "description"=>"
                            Quick to brew and quick to drink! This classic NEIPA was developed by youtuber David Heath and has triumphed among home brewers worldwide. This beer set gives a distinctly fruity and intense hop aroma with a solid malt body. Ideal for summer!",
                "abv"=>"7.5 %",
                "og"=>"1.069",
                "carbonation"=>"2-2.4",
                "gravity"=>"16.5 °",
                "status"=>"Drank out",
                "ebc"=>"15.210",
                "ibu"=>"33",
                "batch_volume"=>"20",
        ], [    
                "user_id" => "3",
                "beer_name" => "Merry Christmas Ale", 
                "type"=>"ale",
                "description"=>"
                            This brew has a video on youtube https://youtu.be/hHPy_nNkN68",
                "abv"=>"6.6 %",
                "og"=>"1.056",
                "carbonation"=>null,
                "gravity"=>"14 °",
                "status"=>"Secondary fermentation",
                "ebc"=>"23",
                "ibu"=>"37",
                "batch_volume"=>"15",
        ]]);
    }
}
