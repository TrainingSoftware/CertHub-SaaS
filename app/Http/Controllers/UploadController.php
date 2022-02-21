<?php

namespace App\Http\Controllers;

use App\Models\Qualification;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class UploadController extends Controller
{
    public function uploadQualificationFile(Request $request, Qualification $qualification)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // find the qualification

        // validate the file
        $request->validate([
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $qualification = Qualification::find($request->input('qualification_id'));

        if($request->hasFile('file') && $request->file('file')->isValid()){
            $qualification->clearMediaCollection('qualification');
            $qualification->addMediaFromRequest('file')
                ->addCustomHeaders([
                    'ACL' => 'public-read'
                ])
                ->toMediaCollection('qualification');
        }
        return back()->with('success', $qualification->getMedia('qualification')->first()->getUrl() . ' successfully upload image.');
    }
}
