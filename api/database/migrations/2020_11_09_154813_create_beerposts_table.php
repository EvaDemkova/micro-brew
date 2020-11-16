<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeerpostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beerposts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('beer_name')->nullable();
            $table->string('type')->nullable();
            $table->text('description')->nullable();
            $table->string('abv')->nullable();
            $table->float('og')->nullable();
            $table->string('carbonation')->nullable();
            $table->string('gravity')->nullable();
            $table->string('status')->nullable();
            $table->float('ebc')->nullable();
            $table->unsignedTinyInteger('ibu')->nullable();
            $table->float('batch_volume')->nullable();
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
        Schema::dropIfExists('beerposts');
    }
}
