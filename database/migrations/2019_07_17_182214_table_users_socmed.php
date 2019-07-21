<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableUsersSocmed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('users_socmed', function(Blueprint $table) {
            $table->uuid      ('id')->primary();
            $table->string    ('link', 100);
            $table->string    ('label', 20);
            $table->integer   ('user_id', false, true)  ->length(10);
            $table->integer   ('clicks', false, true)   ->length(10)->default(0);
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
        //
        Schema::dropIfExists('users_socmed');

    }
}
