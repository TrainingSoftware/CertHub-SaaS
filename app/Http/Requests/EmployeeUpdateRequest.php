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
            'middlenames' => ['string','nullable'],
            'national_insurance' => ['string','nullable'],
            'driving_license_number' => ['string','nullable'],
            'nationality' => ['string','nullable'],
            'citb_number' => ['string','nullable'],
            'nocn_number' => ['string','nullable'],
            'npors_number' => ['string','nullable'],
            'eusr_number' => ['string','nullable'],
            'marital_status' => ['string','nullable'],
            'department_id' => ['exists:departments,id','int'],
            'company_id' => ['exists:companies,id','int'],
        ];
    }
}
