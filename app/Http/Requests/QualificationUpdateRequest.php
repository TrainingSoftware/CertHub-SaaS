<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QualificationUpdateRequest extends FormRequest
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
            'employee_id' => ['required'],
            'qualificationtype_id' => ['required'],
            'provider_id' => ['required'],
            'expiry_date' => ['required'],
            'grade' => ['nullable'],
            'slug' => ['string'],
            'price' => ['numeric'],
        ];
    }
}
