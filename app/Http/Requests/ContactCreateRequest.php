<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactCreateRequest extends FormRequest
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
            'firstname' => ['required'],
            'lastname' => ['required'],
            'email' => ['required','email'],
            'phone' => ['required','numeric','digits:11'],
            'company_id' => ['required','exists:companies,id'],
            'employee_id' => ['required','exists:employees,id']
        ];
    }
}
