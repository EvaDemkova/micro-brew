<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
        [
            'name'=>"Aurelien Gaillard", 
            'email'=> "aurelien@gmail.com",
            "password"=> Hash::make('123456789'),
            "profile_photo"=>"/uploads/profile-photos/Aurelien.jpg", 
            "street"=>null,
            'city'=>null, 
            'country'=>null
        ], [
            'name'=>"Eva Demková", 
            'email'=> "eva@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile-photos/Eva.jpg", 
            "street"=>"Dolní 8",
            'city'=>'Praha', 
            'country'=>'Czech Republic'
        ], [
            'name'=>"Peter Fort", 
            'email'=> "peter@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile-photos/Peter.jpg",
            "street"=>"V Olšinách 54",
            'city'=>'Praha', 
            'country'=>'Czech Republic'
        ], [
            'name'=>"George Miller", 
            'email'=> "george@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile-photos/George.jpg", 
            "street"=>"Máchova 4",
            'city'=>'Beroun', 
            'country'=>'Czech Republic'
        ], [
            'name'=>"Jan Tomko", 
            'email'=> "jan@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile-photos/Jan.jpg", 
            "street"=>"U Dubu 520",
            'city'=>'Všenory', 
            'country'=>'Czech Republic'
        ], [
            
            'name'=>"Teresa Moore", 
            'email'=> "teresa@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile-photos/Teresa.jpg", 
            "street"=>"Janáčkova 993",
            'city'=>'Úvaly', 
            'country'=>'Czech Republic'
        ]
        ]);
    }    
}

