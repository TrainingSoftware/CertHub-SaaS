<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProviderUpdateRequest extends FormRequest
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
            //
            'name' => ['required'],
            'email' => ['nullable'],
            'phone' => ['nullable'],
            'website' => ['nullable'],
            'line_1' => ['nullable'],
            'line_2' => ['nullable'],
            'line_3' => ['nullable'],
            'town' => ['nullable'],
            'city' => ['nullable'],
            'county' => ['nullable'],
            'country' => ['nullable'],
            'postcode' => ['nullable'],
            'company_reg' => ['nullable']
        ];
    }
}
