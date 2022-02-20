<?php

namespace App\Http\Controllers;

use App\Http\Requests\TenderContactCreateRequest;
use App\Http\Requests\TenderContactUpdateRequest;
use App\Models\Tender;
use App\Models\TenderContact;
use Illuminate\Http\Request;

class TenderContactController extends Controller
{
    //
    public function index(Tender $tender)
    {
        $start = $tender->start_date;
        $end = $tender->end_date;
        $expiredQualifications = $tender->employees()
                ->withCount('qualifications')
                ->join('qualifications', 'qualifications.employee_id', '=', 'employees.id')
                ->whereBetween('qualifications.expiry_date', [$start, $end])
                ->get();
        $expiredQualificationsTotal = $expiredQualifications->sum('qualifications_count');
        $contacts = $tender->contacts;
        return view('tenders.contacts.index',compact('contacts','tender','expiredQualifications','expiredQualificationsTotal'));
    }
    public function store(TenderContactCreateRequest $request, Tender $tender)
    {
        $data = $request->validated();
        $tender->contacts()->create($data);
        return redirect()->back()->with('success','Tender Contact Created successfully');
    }
    public function edit(Tender $tender,TenderContact $contact)
    {
        return view('tenders.contacts.edit',compact('tender','contact'));
    }
    public function update(TenderContactUpdateRequest $request,Tender $tender, TenderContact $contact)
    {
        $data = $request->validated();
        $contact->update($data);
        return redirect()->back()->with('success','Contact updated successfully');
    }
    public function destroy(Tender $tender,TenderContact $contact)
    {
        $contact->delete();
        return redirect(route('tenders.contact',$tender))->with('success','contact deleted successfully');
    }
}
