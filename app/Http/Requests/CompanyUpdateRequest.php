<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyUpdateRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'type' => ['required', 'string'],
            'size' => ['required', 'string'],
            'phone' => ['digits:11', 'nullable'],
            'email' => ['nullable', 'email'],
            'line_1' => ['required', 'string'],
            'line_2' => ['required', 'string'],
            'town' => ['required', 'string'],
            'county' => ['required', 'string'],
            'postcode' => ['required', 'string'],
            'country' => ['required', 'string'],
            'company_reg' => ['nullable'],
            'company_vat' => ['nullable'],
            'citb_levy' => ['required']
        ];
    }
}
