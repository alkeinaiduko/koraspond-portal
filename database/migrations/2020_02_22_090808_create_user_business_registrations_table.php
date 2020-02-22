<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserBusinessRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_business_registrations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('option')->nullable();
            $table->string('place')->nullable();
            $table->string('group_interest')->nullable();
            $table->string('funding_institution')->nullable();
            $table->string('area_interest')->nullable();
            $table->text('summary')->nullable();
            $table->text('resume')->nullable();
            $table->text('passport')->nullable();
            $table->text('photo')->nullable();
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
        Schema::dropIfExists('user_business_registrations');
    }
}
