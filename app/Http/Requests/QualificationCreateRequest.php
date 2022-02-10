<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QualificationCreateRequest extends FormRequest
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
            'employee_id' => ['required','exists:employees,id'],
            'qualificationtype_id' => ['required','exists:qualification_types,id'],
            'provider_id' => ['required','exists:providers,id'],
            'regno' => ['nullable','string'],
            'expiry_date' => ['required','date']

        ];
    }
}
