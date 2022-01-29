<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTendersEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenders_employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tender_id');
            $table->unsignedBigInteger('employee_id');
            $table->foreign('tender_id')
                ->references('id')
                ->on('tenders')
                ->onDelete('cascade');
            $table->foreign('employee_id')
                ->references('id')
                ->on('employees')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenders_employees');
    }
}
