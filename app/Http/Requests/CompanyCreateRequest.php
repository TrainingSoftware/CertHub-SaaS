<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'type' => ['required', 'string'],
            'line_1' => ['required', 'string'],
            'town' => ['required', 'string'],
            'county' => ['required', 'string'],
            'postcode' => ['required', 'string'],
            'country' => ['nullable', 'string'],
        ];
    }
}
