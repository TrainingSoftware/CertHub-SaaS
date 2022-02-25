<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdditionalFieldsToEmployees extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employees', function (Blueprint $table) {
            //
            $table->string("middlenames")->after("firstname")->nullable();
            $table->string("national_insurance")->after("employment")->nullable();
            $table->string("driving_license_number")->after("employment")->nullable();
            $table->string("nationality")->after("employment")->nullable();
            $table->string("citb_number")->after("employment")->nullable();
            $table->string("nocn_number")->after("employment")->nullable();
            $table->string("npors_number")->after("employment")->nullable();
            $table->string("eusr_number")->after("employment")->nullable();
            $table->string("marital_status")->after("employment")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employees', function (Blueprint $table) {
            //
            $table->dropColumn("middlenames");
            $table->dropColumn("national_insurance");
            $table->dropColumn("driving_license_number");
            $table->dropColumn("nationality");
            $table->dropColumn("citb_number");
            $table->dropColumn("nocn_number");
            $table->dropColumn("npors_number");
            $table->dropColumn("eusr_number");
            $table->dropColumn("marital_status");
        });
    }
}
