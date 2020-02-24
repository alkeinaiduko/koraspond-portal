<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMeetingRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meeting_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('request_from');
            $table->integer('request_to');
            $table->string('title')->nullable();
            $table->string('content')->nullable();
            $table->smallInteger('status')->default(0); //0 pending from admin, 1 approved from admin, pending from user receiver, 2 approved from user receiver
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
        Schema::dropIfExists('meeting_requests');
    }
}
