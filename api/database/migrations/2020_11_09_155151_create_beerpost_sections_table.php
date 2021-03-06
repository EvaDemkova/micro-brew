<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeerpostSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beerpost_sections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('beerpost_id');
            $table->string('section_name');
            $table->text('description')->nullable();
            $table->unsignedSmallInteger('duration')->nullable();
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
        Schema::dropIfExists('beerpost_sections');
    }
}
