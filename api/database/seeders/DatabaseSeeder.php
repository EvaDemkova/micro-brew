<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\BeerpostSeeder;
use Database\Seeders\Beerpost_likesSeeder;
use Database\Seeders\Beerpost_commnetsSeeder;
use Database\Seeders\EquipmentSeeder;
use Database\Seeders\FollowerSeeder;
use Database\Seeders\IngredientSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\Beerpost_ingredientsSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $this->call(UserSeeder::class);
        $this->call(BeerpostSeeder::class);
        $this->call(Beerpost_likesSeeder::class);
        $this->call(Beerpost_commentsSeeder::class);
        $this->call(EquipmentSeeder::class);
        $this->call(FollowerSeeder::class);
        $this->call(IngredientSeeder::class);
        $this->call(Beerpost_ingredientsSeeder::class);
    }
}
