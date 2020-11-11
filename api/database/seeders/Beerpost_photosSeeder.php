<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Beerpost_photosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beerpost_photos')->insert([
            [
                "beerpost_id"=>1, 
                "image"=>"img/beerpost_photo2.jpg"
            ], [
                "beerpost_id"=>1, 
                "image"=>"img/beerpost_photo4.jpg"
            ], [
                "beerpost_id"=>1, 
                "image"=>"img/beerpost_photo14.jpg"
            ], [
                "beerpost_id"=>2, 
                "image"=>"img/beerpost_photo3.jpg"
            ], [
                "beerpost_id"=>2, 
                "image"=>"img/beerpost_photo6.jpg"
            ], [
                "beerpost_id"=>3, 
                "image"=>"img/beerpost_photo5.jpg"
            ], [
                "beerpost_id"=>3, 
                "image"=>"img/beerpost_photo9.jpg"
            ], [
                "beerpost_id"=>3, 
                "image"=>"img/beerpost_photo13.jpg"
            ], [
                "beerpost_id"=>4, 
                "image"=>"img/beerpost_photo17.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"img/beerpost_photo10.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"img/beerpost_photo11.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"img/beerpost_photo20.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"img/beerpost_photo19.jpg"
            ], [
                "beerpost_id"=>6, 
                "image"=>"img/beerpost_photo15.jpg"
            ], [
                "beerpost_id"=>6, 
                "image"=>"img/beerpost_photo8.jpg"
            ], [
                "beerpost_id"=>7, 
                "image"=>"img/beerpost_photo7.jpg"
            ], [
                "beerpost_id"=>7, 
                "image"=>"img/beerpost_photo21.jpg"
            ], [
                "beerpost_id"=>8, 
                "image"=>"img/beerpost_photo16.jpg"
            ], [
                "beerpost_id"=>8, 
                "image"=>"img/beerpost_photo18.jpg"
            ]
        ]);
    }
}
