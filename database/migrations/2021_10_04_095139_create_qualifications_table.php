<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQualificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qualifications', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->bigInteger('qualificationtype_id')->unsigned()->index();
            $table->foreign('qualificationtype_id')->references('id')->on('qualification_types');
            $table->bigInteger('employee_id')->unsigned()->index();
            $table->foreign('employee_id')->references('id')->on('employees');
            $table->bigInteger('provider_id')->unsigned()->index();
            $table->foreign('provider_id')->references('id')->on('providers');
            $table->integer('regno')->default(12345678);
            $table->integer('price')->nullable()->default(0);
            $table->string('slug')->nullable();
            $table->date('expiry_date');
            $table->boolean('status')->default(0);
            $table->boolean('has_refresher')->default(0);
            $table->date('refresher_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qualifications');
    }
}
