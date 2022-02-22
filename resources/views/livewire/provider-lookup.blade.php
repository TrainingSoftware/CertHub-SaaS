<div id="searchCompany" class="accordion-collapse collapse {{count($results) > 0 ? "show" : ""}}">
    <div class="row mt-10">
        <div class="col-12">
            <div class="accordion-body">
                <form method="get">
                    <div class="input-group mb-5">
                        <input type="text" wire:model="query" class="form-control" placeholder="Search company">
                    </div>
                </form>
                <div wire:loading>Searching Company...</div>
                <div wire:loading.remove>
                    <ul>
                        @if(count($results) > 0)

                            @foreach($results as $company)
                                @php
                                    $title = $company['title'];
                                   $country = isset($company['address']['country']) ? $company['address']['country'] : null;
                                   $line1 = isset($company['address']['premises']) ? $company['address']['premises'] : null;
                                   $line2 = isset($company['address']['address_line_1']) ? $company['address']['address_line_1'] : null;
                                   $town = isset($company['address']['locality']) ? $company['address']['locality'] :null;
                                   $postcode = isset($company['address']['postal_code']) ? $company['address']['postal_code'] : null;
                                   $country = isset($company['address']['country']) ? $company['address']['country'] : null;
                                   $number = isset($company['company_number']) ? $company['company_number'] : null;
                                @endphp
                                <label class="radio">
                                    <input type="radio"
                                           wire:click="createCompany('{{$title}}','{{$line1}}','{{$line2}}','{{$town}}','{{$postcode}}','{{$country}}','{{$number}}')">
                                    <span></span>
                                    {{$company["title"]}}
                                </label>
                            @endforeach

                        @endif

                    </ul>
                </div>
                <p>Not sure on the Provider's company number? <a
                        href="https://find-and-update.company-information.service.gov.uk" target="_blank">Find it
                        here</a></p>

            </div>
        </div>
    </div>
{{-- Success is as dangerous as failure. --}}

