<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TenderUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
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
            'start_date' => ['date'],
            'end_date' => ['date'],
            'line_1' => ['string|nullable'],
            'line_2' => ['string|nullable'],
            'town' => ['string|nullable'],
            'county' => ['string|nullable'],
            'postcode' => ['string|nullable'],
            'country' => ['string|nullable'],
        ];
    }
}
