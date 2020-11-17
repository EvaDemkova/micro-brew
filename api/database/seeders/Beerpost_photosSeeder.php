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
                "image"=>"/uploads/beerpost-images/beerpost_photo2.jpg"
            ], [
                "beerpost_id"=>1, 
                "image"=>"/uploads/beerpost-images/beerpost_photo4.jpg"
            ], [
                "beerpost_id"=>1, 
                "image"=>"/uploads/beerpost-images/beerpost_photo14.jpg"
            ], [
                "beerpost_id"=>2, 
                "image"=>"/uploads/beerpost-images/beerpost_photo3.jpg"
            ], [
                "beerpost_id"=>2, 
                "image"=>"/uploads/beerpost-images/beerpost_photo6.jpg"
            ], [
                "beerpost_id"=>3, 
                "image"=>"/uploads/beerpost-images/beerpost_photo5.jpg"
            ], [
                "beerpost_id"=>3, 
                "image"=>"/uploads/beerpost-images/beerpost_photo9.jpg"
            ], [
                "beerpost_id"=>3, 
                "image"=>"/uploads/beerpost-images/beerpost_photo13.jpg"
            ], [
                "beerpost_id"=>4, 
                "image"=>"/uploads/beerpost-images/beerpost_photo17.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"/uploads/beerpost-images/beerpost_photo10.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"/uploads/beerpost-images/beerpost_photo11.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"/uploads/beerpost-images/beerpost_photo20.jpg"
            ], [
                "beerpost_id"=>5, 
                "image"=>"/uploads/beerpost-images/beerpost_photo19.jpg"
            ], [
                "beerpost_id"=>6, 
                "image"=>"/uploads/beerpost-images/beerpost_photo15.jpg"
            ], [
                "beerpost_id"=>6, 
                "image"=>"/uploads/beerpost-images/beerpost_photo8.jpg"
            ], [
                "beerpost_id"=>7, 
                "image"=>"/uploads/beerpost-images/beerpost_photo7.jpg"
            ], [
                "beerpost_id"=>7, 
                "image"=>"/uploads/beerpost-images/beerpost_photo21.jpg"
            ], [
                "beerpost_id"=>8, 
                "image"=>"/uploads/beerpost-images/beerpost_photo16.jpg"
            ], [
                "beerpost_id"=>8, 
                "image"=>"/uploads/beerpost-images/beerpost_photo18.jpg"
            ]
        ]);
    }
}
