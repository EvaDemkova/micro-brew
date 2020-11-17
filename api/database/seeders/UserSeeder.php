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
            "profile_photo"=>"/uploads/profile_photos/Aurelien.jpg" 
        ], [
            'name'=>"Eva Demková", 
            'email'=> "eva@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile_photos/Eva.jpg"
        ], [
            'name'=>"Peter Fort", 
            'email'=> "peter@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile_photos/Peter.jpg"
        ], [
            'name'=>"George Miller", 
            'email'=> "george@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile_photos/George.jpg"
        ], [
            'name'=>"Jan Tomko", 
            'email'=> "jan@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile_photos/Jan.jpg"
        ], [
            
            'name'=>"Teresa Moore", 
            'email'=> "teresa@gmail.com",
            "password"=> Hash::make('123456789'), 
            "profile_photo"=>"/uploads/profile_photos/Teresa.jpg"
        ]
        ]);
    }    
}

