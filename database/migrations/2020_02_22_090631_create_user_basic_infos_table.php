<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserBasicInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_basic_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->bigInteger('meeting_profile_id')->nullable();
            $table->string('profile')->nullable();
            $table->string('institution')->nullable();
            $table->string('name')->nullable();
            $table->string('family_name')->nullable();
            $table->string('profession')->nullable();
            $table->string('passport_number')->nullable();
            $table->string('passport_type')->nullable();
            $table->string('nationality')->nullable();
            $table->string('issue_place')->nullable();
            $table->date('valid_until')->nullable();
            $table->string('birth_place')->nullable();
            $table->date('birth_date')->nullable();
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
        Schema::dropIfExists('user_basic_infos');
    }
}
