<?php

namespace App\Http\Livewire;

use App\Models\Course;
use App\Models\CPD;
use App\Models\NVQ;
use Livewire\Component;
use ProtoneMedia\LaravelCrossEloquentSearch\Search;


class CourseSearchBar extends Component
{
    public $query;
    public $courses;
    public $highlightIndex;

    public function mount()
    {
        $this->resetFilters();
    }

    public function resetFilters()
    {
        $this->query = '';
        $this->courses = [];
        $this->highlightIndex = 0;
    }

    public function incrementHighlight()
    {
        if ($this->highlightIndex === count($this->courses) - 1) {
            $this->highlightIndex = 0;
            return;
        }
        $this->highlightIndex++;
    }

    public function decrementHighlight()
    {
        if ($this->highlightIndex === 0) {
            $this->highlightIndex = count($this->courses) - 1;
            return;
        }
        $this->highlightIndex--;
    }

    public function selectCourse()
    {
        $courses = $this->courses[$this->highlightIndex] ?? null;
        if ($courses) {
            // Redirect to page when selected

        }

    }

    public function updatedQuery()
    {
        $fish = Search::add(Course::class, 'name')
            ->add(NVQ::class, 'name')
            ->add(CPD::class, 'name')
            ->search($this->query);

        $this->courses = $fish->toArray();
    }
    public function render()
    {
        return view('livewire.course-search-bar');
    }
}
