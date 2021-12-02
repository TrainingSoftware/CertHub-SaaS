<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQualificationTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qualification_types', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('company_id')->unsigned()->index();
            $table->string('name');
            $table->string('slug');
            $table->text('overview')->nullable();
            $table->text('agenda')->nullable();
            $table->text('attend')->nullable();
            $table->text('certification')->nullable();
            $table->text('entry_requirements')->nullable();
            $table->integer('max_delegates')->nullable();
            $table->string('valid_for')->nullable();
            $table->string('funding')->nullable();
            $table->string('duration')->nullable();
            $table->integer('accreditation')->nullable();
            $table->string('delivery')->nullable();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qualification_types');
    }
}
