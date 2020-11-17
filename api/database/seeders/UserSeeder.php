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
        ], [
            'name'=>"Eva Demková", 
            'email'=> "eva@gmail.com",
            "password"=> Hash::make('123456789')
        ], [
            'name'=>"Peter Fort", 
            'email'=> "peter@gmail.com",
            "password"=> Hash::make('123456789')
        ], [
            'name'=>"George Miller", 
            'email'=> "george@gmail.com",
            "password"=> Hash::make('123456789')
        ], [
            'name'=>"Jan Tomko", 
            'email'=> "jan@gmail.com",
            "password"=> Hash::make('123456789')
        ], [
            
            'name'=>"Teresa Moore", 
            'email'=> "teresa@gmail.com",
            "password"=> Hash::make('123456789')
        ]
        ]);
    }    
}

