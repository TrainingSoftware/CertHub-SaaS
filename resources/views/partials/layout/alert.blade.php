@if ($errors->any())
    <div class="content d-flex flex-column flex-column-fluid">
        <div class="post d-flex flex-column-fluid">
            <div id="kt_content_container" class="container-xxl p-0">
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some issues...<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endif
