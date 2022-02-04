<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('size');
            $table->string('line_1');
            $table->string('line_2')->nullable();
            $table->string('town');
            $table->string('county');
            $table->string('postcode');
            $table->string('country')->nullable();;
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('company_reg')->nullable();
            $table->string('company_vat')->nullable();
            $table->boolean('citb_levy')->default(0);
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
        Schema::dropIfExists('companies');
    }
}
