<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableBlog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string      ('title');
            $table->string      ('permalink', 255)  ->unique();
            $table->text        ('article');
            $table->bigInteger  ('read')            ->default(0);
            $table->string      ('label')           ->nullable();
            $table->string      ('description', 200)->nullable();
            $table->integer     ('user_id')         ->nullable();
            $table->softDeletesTz();
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
        Schema::dropIfExists('blog');
    }
}
