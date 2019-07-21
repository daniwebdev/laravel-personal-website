<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableUsersPekerjaan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_pekerjaan', function(Blueprint $table) {

            $table->uuid   ('id')->primary();
            $table->string ('posisi', 100);
            $table->string ('company', 100);
            $table->string ('description', 225)  ->nullable();
            $table->string ('start_at')          ->nullable();
            $table->string ('end_at')            ->nullable();
            $table->integer('user_id', false, true)->length(11);

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
        Schema::dropIfExists('users_pekerjaan');
    }
}
