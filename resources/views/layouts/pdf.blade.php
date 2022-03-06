<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="">
        <title>@yield('title') | CertHub</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="" />
        <link rel="shortcut icon" href="/assets/media/logos/favicon.ico" />
        <link href="https://certhub.co/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
        <link href="https://certhub.co/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
        <link href="https://certhub.co/assets/css/custom.css" rel="stylesheet" type="text/css" />
    </head>
    <body id="kt_body">
        <div class="d-flex flex-column flex-root">
            <div class="page d-flex flex-row flex-column-fluid">
                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    @yield('content')
                </div>
            </div>
        </div>
    </body>
</html>