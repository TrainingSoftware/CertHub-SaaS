<div class="position-relative w-100">
    <span
        class="svg-icon svg-icon-2 svg-icon-primary position-absolute top-50 translate-middle ms-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none">
            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                  transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
            <path
                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                fill="black"></path>
        </svg>
    </span>
    <input type="text"
           class="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px"
           name="search" value="" placeholder="Search our training courses..."
           wire:model="query"
           wire:keydown.escape="resetFilters"
           wire:keydown.tab="resetFilters"
           wire:keydown.arrow-up="decrementHighlight"
           wire:keydown.arrow-down="incrementHighlight"
           wire:keydown.enter="selectContact"
    >
    <div wire:loading class="position-absolute z-10 w-full bg-white rounded-t-none shadow-lg list-group">
        <div class="list-item">Searching...</div>
    </div>

    @if(!empty($query))
        <div class="position-fixed top-0 bottom-0 left-0 right-0" wire:click="resetFilters"></div>

        <div class="position-absolute z-10 w-full bg-white rounded-t-none shadow-lg list-group">
            @if(!empty($courses))
                @foreach($courses as $i => $course)
                    <a
                        href=""
                        class="list-item {{ $highlightIndex === $i ? 'highlight' : '' }}"
                    >{{ $course['name'] }}</a>
                @endforeach
            @else
                <div class="list-item">No results!</div>
            @endif
        </div>
    @endif
</div>
