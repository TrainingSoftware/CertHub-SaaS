<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactUpdateRequest extends FormRequest
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
            'firstname' => ['string','nullable','required'],
            'lastname'  => ['required'],
            'email' => ['required','email'],
            'phone' => ['required','numeric','digits:11'],
            'gender' => ['string','nullable'],
            'line_1' => ['string','nullable'],
            'line_2' => ['string','nullable'],
            'line_3' => ['string','nullable'],
            'town' => ['string','nullable'],
            'city' => ['string','nullable'],
            'county' => ['string','nullable'],
            'postcode' => ['string','nullable'],
            'relation' => ['string','nullable'],
        ];
    }
}
