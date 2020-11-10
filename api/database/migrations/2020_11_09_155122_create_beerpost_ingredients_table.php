<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeerpostIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beerpost_ingredients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('beerpost_id');
            $table->unsignedBigInteger('ingredient_id');
            $table->string('ingredient_name')->nullable();
            $table->string('quantity')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('beerpost_ingredients');
    }
}
