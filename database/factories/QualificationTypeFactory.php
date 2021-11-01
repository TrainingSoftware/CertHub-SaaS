<?php

namespace Database\Factories;

use App\Models\QualificationType;
use Illuminate\Database\Eloquent\Factories\Factory;

class QualificationTypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = QualificationType::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company(),
            'user_id' => 1
        ];
    }
}
