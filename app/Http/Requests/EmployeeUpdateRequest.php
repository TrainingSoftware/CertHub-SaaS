<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeUpdateRequest extends FormRequest
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
            'lastname'  => ['required'],
            'email' => ['nullable','email','unique:employees,email,'.$this->route('employee')->id],
            'phone' => ['nullable','numeric','digits:11'],
            'position' => ['string','nullable'],
            'dob' => ['date','nullable'],
            'gender' => ['string','nullable'],
            'line_1' => ['string','nullable'],
            'line_2' => ['string','nullable'],
            'line_3' => ['string','nullable'],
            'town' => ['string','nullable'],
            'city' => ['string','nullable'],
            'county' => ['string','nullable'],
            'postcode' => ['string','nullable'],
            'start_date' => ['date','nullable'],
            'avatar' => ['nullable','file'],
            'end_date' => ['date','nullable'],
            'salary' => ['numeric','nullable'],
            'employment' => ['string','nullable'],
            'department_id' => ['exists:departments,id','int'],
            'company_id' => ['exists:companies,id','int'],
        ];
    }
}
