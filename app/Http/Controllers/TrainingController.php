<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseCategory;
use App\Models\CPD;
use App\Models\CPDCategory;
use App\Models\NVQ;
use App\Models\NVQCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TrainingController extends Controller
{

    public function index()
    {
        $courseCategory = CourseCategory::all();
        $nvqCategory = NVQCategory::all();
        $cpdCategory = CPDCategory::all();
        return view('training.index',compact('courseCategory','nvqCategory','cpdCategory'));
    }

    public function filter()
    {

//        dd(request()->all());
        $course = null;

        if(request('type') == "commercial"){
           $remote = request('is_home_based')  ==  "on" ? 1 : 0;
           $course =  Course::find(request('course_id'))->courseMetas()
               ->where('location_id',request('location_id'))
               ->where('is_remote',$remote)
               ->whereBetween('date',[request('start_date'),request('end_date')])
               ->first();
        }
        if(request('type') == "nvq"){
           $course =  NVQ::find(request('course_id'));
        }
        if(request('type') == "cpd"){
           $course =  CPD::find(request('course_id'));
        }
        if($course){
           return redirect()->to(route('training.search'))->with(['course' => $course]);
        }
        else{
            return redirect()->back()->with('error','No result found');
        }


    }
    public function search()
    {
        dd(session()->get('course'));
    }
}
