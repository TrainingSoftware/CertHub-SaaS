<div class="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered mw-650px">
        <div class="modal-content">
            <div class="modal-body scroll-y mx-5 mx-xl-18 pt-15 pb-15">
                <div class="text-center mb-13">
                    <h1 class="mb-3">Add employees</h1>
                    <div class="text-muted fw-bold fs-5">Start typing below to search </div>
                </div>
                <div id="kt_modal_users_search_handler">
                    @livewire('search-employee', ['tender' => $tender])
                </div>
            </div>
        </div>
    </div>
</div>