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
        $qualification = Qualification::find($qualification);

        // validate the file
        $request->validate([
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $file = $request->file('file');

        $hashName = $file->hashName();

        $storagePath = Storage::disk('vultr')->putFile('uploads/' . $company->id . '/' . $request->qualification_id, $file, 'public');

        if ($storagePath) {

            $request->merge([
                'filename' => $hashName
            ]);

            $upload = new Upload();
            $upload->company_id = $company->id;
            $upload->qualification_id = $request->qualification_id;
            $upload->url = $storagePath;
            $upload->save();

            return back()->with('success', $storagePath . ' successfully upload image.');

        }
    }
}
