<!DOCTYPE html>
<html lang="zxx">
<head>
    <title>{{ $tender->name}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <!-- Bootstrap -->
    <style>
        */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title],abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:"— "}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) * -.5);margin-left:calc(var(--bs-gutter-x) * -.5)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + (.5rem + 2px));padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + (1rem + 2px));padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + (.75rem + 2px))}textarea.form-control-sm{min-height:calc(1.5em + (.5rem + 2px))}textarea.form-control-lg{min-height:calc(1.5em + (1rem + 2px))}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid{z-index:1}.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid{z-index:2}.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus{z-index:3}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-light.disabled,.btn-light:disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{color:#fff;background-color:#198754;border-color:#198754}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{color:#fff;background-color:#212529;border-color:#212529}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:.125rem}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1e2125;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{color:#fff;background-color:rgba(255,255,255,.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:0 0;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.55);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.navbar-dark .navbar-text{color:rgba(255,255,255,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;text-align:left;background-color:#fff;border:0;border-radius:0;overflow-anchor:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.125)}.accordion-button:not(.collapsed)::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");transform:rotate(-180deg)}.accordion-button::after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:"";background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:1.25rem;transition:transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,.125)}.accordion-item:first-of-type{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, "/")}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>li::before{content:counters(section, ".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;color:#212529;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .5rem 1rem rgba(0,0,0,.15);border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal{position:fixed;top:0;left:0;z-index:1060;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{position:absolute;z-index:1080;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1070;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f0f0f0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")}.carousel-control-next-icon{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.offcanvas{position:fixed;bottom:0;z-index:1050;display:flex;flex-direction:column;max-width:100%;visibility:hidden;background-color:#fff;background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1rem}.offcanvas-header .btn-close{padding:.5rem .5rem;margin-top:-.5rem;margin-right:-.5rem;margin-bottom:-.5rem}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:1rem 1rem;overflow-y:auto}.offcanvas-start{top:0;left:0;width:400px;border-right:1px solid rgba(0,0,0,.2);transform:translateX(-100%)}.offcanvas-end{top:0;right:0;width:400px;border-left:1px solid rgba(0,0,0,.2);transform:translateX(100%)}.offcanvas-top{top:0;right:0;left:0;height:30vh;max-height:100%;border-bottom:1px solid rgba(0,0,0,.2);transform:translateY(-100%)}.offcanvas-bottom{right:0;left:0;height:30vh;max-height:100%;border-top:1px solid rgba(0,0,0,.2);transform:translateY(100%)}.offcanvas.show{transform:none}.clearfix::after{display:block;clear:both;content:""}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:calc(3 / 4 * 100%)}.ratio-16x9{--bs-aspect-ratio:calc(9 / 16 * 100%)}.ratio-21x9{--bs-aspect-ratio:calc(9 / 21 * 100%)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{color:#0d6efd!important}.text-secondary{color:#6c757d!important}.text-success{color:#198754!important}.text-info{color:#0dcaf0!important}.text-warning{color:#ffc107!important}.text-danger{color:#dc3545!important}.text-light{color:#f8f9fa!important}.text-dark{color:#212529!important}.text-white{color:#fff!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-reset{color:inherit!important}.bg-primary{background-color:#0d6efd!important}.bg-secondary{background-color:#6c757d!important}.bg-success{background-color:#198754!important}.bg-info{background-color:#0dcaf0!important}.bg-warning{background-color:#ffc107!important}.bg-danger{background-color:#dc3545!important}.bg-light{background-color:#f8f9fa!important}.bg-dark{background-color:#212529!important}.bg-body{background-color:#fff!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-end{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-start{border-bottom-left-radius:.25rem!important;border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}
    </style>

    <!-- Font Awesomme -->
    <style>
        /*!
        *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
        *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
        */
        @font-face {
            font-family: 'FontAwesome';
            src: url('/assets/pdf/fonts/fontawesome-webfont%EF%B9%96v=4.7.0.eot');
            src: url('/assets/pdf/fonts/fontawesome-webfont%EF%B9%96.eot#iefix&v=4.7.0') format('embedded-opentype'), url('/assets/pdf/fonts/fontawesome-webfont%EF%B9%96v=4.7.0.woff2') format('woff2'), url('/assets/pdf/fonts/fontawesome-webfont%EF%B9%96v=4.7.0.woff') format('woff'), url('/assets/pdf/fonts/fontawesome-webfont%EF%B9%96v=4.7.0.ttf') format('truetype'), url('/assets/pdf/fonts/fontawesome-webfont%EF%B9%96v=4.7.0.svg#fontawesomeregular') format('svg');
            font-weight: normal;
            font-style: normal
        }

        .fa {
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .fa-lg {
            font-size: 1.33333333em;
            line-height: .75em;
            vertical-align: -15%
        }

        .fa-2x {
            font-size: 2em
        }

        .fa-3x {
            font-size: 3em
        }

        .fa-4x {
            font-size: 4em
        }

        .fa-5x {
            font-size: 5em
        }

        .fa-fw {
            width: 1.28571429em;
            text-align: center
        }

        .fa-ul {
            padding-left: 0;
            margin-left: 2.14285714em;
            list-style-type: none
        }

        .fa-ul > li {
            position: relative
        }

        .fa-li {
            position: absolute;
            left: -2.14285714em;
            width: 2.14285714em;
            top: .14285714em;
            text-align: center
        }

        .fa-li.fa-lg {
            left: -1.85714286em
        }

        .fa-border {
            padding: .2em .25em .15em;
            border: solid .08em #eee;
            border-radius: .1em
        }

        .fa-pull-left {
            float: left
        }

        .fa-pull-right {
            float: right
        }

        .fa.fa-pull-left {
            margin-right: .3em
        }

        .fa.fa-pull-right {
            margin-left: .3em
        }

        .pull-right {
            float: right
        }

        .pull-left {
            float: left
        }

        .fa.pull-left {
            margin-right: .3em
        }

        .fa.pull-right {
            margin-left: .3em
        }

        .fa-spin {
            -webkit-animation: fa-spin 2s infinite linear;
            animation: fa-spin 2s infinite linear
        }

        .fa-pulse {
            -webkit-animation: fa-spin 1s infinite steps(8);
            animation: fa-spin 1s infinite steps(8)
        }

        @-webkit-keyframes fa-spin {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }
            100% {
                -webkit-transform: rotate(359deg);
                transform: rotate(359deg)
            }
        }

        @keyframes fa-spin {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }
            100% {
                -webkit-transform: rotate(359deg);
                transform: rotate(359deg)
            }
        }

        .fa-rotate-90 {
            -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg)
        }

        .fa-rotate-180 {
            -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg)
        }

        .fa-rotate-270 {
            -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
            -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg)
        }

        .fa-flip-horizontal {
            -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
            -webkit-transform: scale(-1, 1);
            -ms-transform: scale(-1, 1);
            transform: scale(-1, 1)
        }

        .fa-flip-vertical {
            -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
            -webkit-transform: scale(1, -1);
            -ms-transform: scale(1, -1);
            transform: scale(1, -1)
        }

        :root .fa-rotate-90, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-flip-horizontal, :root .fa-flip-vertical {
            filter: none
        }

        .fa-stack {
            position: relative;
            display: inline-block;
            width: 2em;
            height: 2em;
            line-height: 2em;
            vertical-align: middle
        }

        .fa-stack-1x, .fa-stack-2x {
            position: absolute;
            left: 0;
            width: 100%;
            text-align: center
        }

        .fa-stack-1x {
            line-height: inherit
        }

        .fa-stack-2x {
            font-size: 2em
        }

        .fa-inverse {
            color: #fff
        }

        .fa-glass:before {
            content: "\f000"
        }

        .fa-music:before {
            content: "\f001"
        }

        .fa-search:before {
            content: "\f002"
        }

        .fa-envelope-o:before {
            content: "\f003"
        }

        .fa-heart:before {
            content: "\f004"
        }

        .fa-star:before {
            content: "\f005"
        }

        .fa-star-o:before {
            content: "\f006"
        }

        .fa-user:before {
            content: "\f007"
        }

        .fa-film:before {
            content: "\f008"
        }

        .fa-th-large:before {
            content: "\f009"
        }

        .fa-th:before {
            content: "\f00a"
        }

        .fa-th-list:before {
            content: "\f00b"
        }

        .fa-check:before {
            content: "\f00c"
        }

        .fa-remove:before, .fa-close:before, .fa-times:before {
            content: "\f00d"
        }

        .fa-search-plus:before {
            content: "\f00e"
        }

        .fa-search-minus:before {
            content: "\f010"
        }

        .fa-power-off:before {
            content: "\f011"
        }

        .fa-signal:before {
            content: "\f012"
        }

        .fa-gear:before, .fa-cog:before {
            content: "\f013"
        }

        .fa-trash-o:before {
            content: "\f014"
        }

        .fa-home:before {
            content: "\f015"
        }

        .fa-file-o:before {
            content: "\f016"
        }

        .fa-clock-o:before {
            content: "\f017"
        }

        .fa-road:before {
            content: "\f018"
        }

        .fa-download:before {
            content: "\f019"
        }

        .fa-arrow-circle-o-down:before {
            content: "\f01a"
        }

        .fa-arrow-circle-o-up:before {
            content: "\f01b"
        }

        .fa-inbox:before {
            content: "\f01c"
        }

        .fa-play-circle-o:before {
            content: "\f01d"
        }

        .fa-rotate-right:before, .fa-repeat:before {
            content: "\f01e"
        }

        .fa-refresh:before {
            content: "\f021"
        }

        .fa-list-alt:before {
            content: "\f022"
        }

        .fa-lock:before {
            content: "\f023"
        }

        .fa-flag:before {
            content: "\f024"
        }

        .fa-headphones:before {
            content: "\f025"
        }

        .fa-volume-off:before {
            content: "\f026"
        }

        .fa-volume-down:before {
            content: "\f027"
        }

        .fa-volume-up:before {
            content: "\f028"
        }

        .fa-qrcode:before {
            content: "\f029"
        }

        .fa-barcode:before {
            content: "\f02a"
        }

        .fa-tag:before {
            content: "\f02b"
        }

        .fa-tags:before {
            content: "\f02c"
        }

        .fa-book:before {
            content: "\f02d"
        }

        .fa-bookmark:before {
            content: "\f02e"
        }

        .fa-print:before {
            content: "\f02f"
        }

        .fa-camera:before {
            content: "\f030"
        }

        .fa-font:before {
            content: "\f031"
        }

        .fa-bold:before {
            content: "\f032"
        }

        .fa-italic:before {
            content: "\f033"
        }

        .fa-text-height:before {
            content: "\f034"
        }

        .fa-text-width:before {
            content: "\f035"
        }

        .fa-align-left:before {
            content: "\f036"
        }

        .fa-align-center:before {
            content: "\f037"
        }

        .fa-align-right:before {
            content: "\f038"
        }

        .fa-align-justify:before {
            content: "\f039"
        }

        .fa-list:before {
            content: "\f03a"
        }

        .fa-dedent:before, .fa-outdent:before {
            content: "\f03b"
        }

        .fa-indent:before {
            content: "\f03c"
        }

        .fa-video-camera:before {
            content: "\f03d"
        }

        .fa-photo:before, .fa-image:before, .fa-picture-o:before {
            content: "\f03e"
        }

        .fa-pencil:before {
            content: "\f040"
        }

        .fa-map-marker:before {
            content: "\f041"
        }

        .fa-adjust:before {
            content: "\f042"
        }

        .fa-tint:before {
            content: "\f043"
        }

        .fa-edit:before, .fa-pencil-square-o:before {
            content: "\f044"
        }

        .fa-share-square-o:before {
            content: "\f045"
        }

        .fa-check-square-o:before {
            content: "\f046"
        }

        .fa-arrows:before {
            content: "\f047"
        }

        .fa-step-backward:before {
            content: "\f048"
        }

        .fa-fast-backward:before {
            content: "\f049"
        }

        .fa-backward:before {
            content: "\f04a"
        }

        .fa-play:before {
            content: "\f04b"
        }

        .fa-pause:before {
            content: "\f04c"
        }

        .fa-stop:before {
            content: "\f04d"
        }

        .fa-forward:before {
            content: "\f04e"
        }

        .fa-fast-forward:before {
            content: "\f050"
        }

        .fa-step-forward:before {
            content: "\f051"
        }

        .fa-eject:before {
            content: "\f052"
        }

        .fa-chevron-left:before {
            content: "\f053"
        }

        .fa-chevron-right:before {
            content: "\f054"
        }

        .fa-plus-circle:before {
            content: "\f055"
        }

        .fa-minus-circle:before {
            content: "\f056"
        }

        .fa-times-circle:before {
            content: "\f057"
        }

        .fa-check-circle:before {
            content: "\f058"
        }

        .fa-question-circle:before {
            content: "\f059"
        }

        .fa-info-circle:before {
            content: "\f05a"
        }

        .fa-crosshairs:before {
            content: "\f05b"
        }

        .fa-times-circle-o:before {
            content: "\f05c"
        }

        .fa-check-circle-o:before {
            content: "\f05d"
        }

        .fa-ban:before {
            content: "\f05e"
        }

        .fa-arrow-left:before {
            content: "\f060"
        }

        .fa-arrow-right:before {
            content: "\f061"
        }

        .fa-arrow-up:before {
            content: "\f062"
        }

        .fa-arrow-down:before {
            content: "\f063"
        }

        .fa-mail-forward:before, .fa-share:before {
            content: "\f064"
        }

        .fa-expand:before {
            content: "\f065"
        }

        .fa-compress:before {
            content: "\f066"
        }

        .fa-plus:before {
            content: "\f067"
        }

        .fa-minus:before {
            content: "\f068"
        }

        .fa-asterisk:before {
            content: "\f069"
        }

        .fa-exclamation-circle:before {
            content: "\f06a"
        }

        .fa-gift:before {
            content: "\f06b"
        }

        .fa-leaf:before {
            content: "\f06c"
        }

        .fa-fire:before {
            content: "\f06d"
        }

        .fa-eye:before {
            content: "\f06e"
        }

        .fa-eye-slash:before {
            content: "\f070"
        }

        .fa-warning:before, .fa-exclamation-triangle:before {
            content: "\f071"
        }

        .fa-plane:before {
            content: "\f072"
        }

        .fa-calendar:before {
            content: "\f073"
        }

        .fa-random:before {
            content: "\f074"
        }

        .fa-comment:before {
            content: "\f075"
        }

        .fa-magnet:before {
            content: "\f076"
        }

        .fa-chevron-up:before {
            content: "\f077"
        }

        .fa-chevron-down:before {
            content: "\f078"
        }

        .fa-retweet:before {
            content: "\f079"
        }

        .fa-shopping-cart:before {
            content: "\f07a"
        }

        .fa-folder:before {
            content: "\f07b"
        }

        .fa-folder-open:before {
            content: "\f07c"
        }

        .fa-arrows-v:before {
            content: "\f07d"
        }

        .fa-arrows-h:before {
            content: "\f07e"
        }

        .fa-bar-chart-o:before, .fa-bar-chart:before {
            content: "\f080"
        }

        .fa-twitter-square:before {
            content: "\f081"
        }

        .fa-facebook-square:before {
            content: "\f082"
        }

        .fa-camera-retro:before {
            content: "\f083"
        }

        .fa-key:before {
            content: "\f084"
        }

        .fa-gears:before, .fa-cogs:before {
            content: "\f085"
        }

        .fa-comments:before {
            content: "\f086"
        }

        .fa-thumbs-o-up:before {
            content: "\f087"
        }

        .fa-thumbs-o-down:before {
            content: "\f088"
        }

        .fa-star-half:before {
            content: "\f089"
        }

        .fa-heart-o:before {
            content: "\f08a"
        }

        .fa-sign-out:before {
            content: "\f08b"
        }

        .fa-linkedin-square:before {
            content: "\f08c"
        }

        .fa-thumb-tack:before {
            content: "\f08d"
        }

        .fa-external-link:before {
            content: "\f08e"
        }

        .fa-sign-in:before {
            content: "\f090"
        }

        .fa-trophy:before {
            content: "\f091"
        }

        .fa-github-square:before {
            content: "\f092"
        }

        .fa-upload:before {
            content: "\f093"
        }

        .fa-lemon-o:before {
            content: "\f094"
        }

        .fa-phone:before {
            content: "\f095"
        }

        .fa-square-o:before {
            content: "\f096"
        }

        .fa-bookmark-o:before {
            content: "\f097"
        }

        .fa-phone-square:before {
            content: "\f098"
        }

        .fa-twitter:before {
            content: "\f099"
        }

        .fa-facebook-f:before, .fa-facebook:before {
            content: "\f09a"
        }

        .fa-github:before {
            content: "\f09b"
        }

        .fa-unlock:before {
            content: "\f09c"
        }

        .fa-credit-card:before {
            content: "\f09d"
        }

        .fa-feed:before, .fa-rss:before {
            content: "\f09e"
        }

        .fa-hdd-o:before {
            content: "\f0a0"
        }

        .fa-bullhorn:before {
            content: "\f0a1"
        }

        .fa-bell:before {
            content: "\f0f3"
        }

        .fa-certificate:before {
            content: "\f0a3"
        }

        .fa-hand-o-right:before {
            content: "\f0a4"
        }

        .fa-hand-o-left:before {
            content: "\f0a5"
        }

        .fa-hand-o-up:before {
            content: "\f0a6"
        }

        .fa-hand-o-down:before {
            content: "\f0a7"
        }

        .fa-arrow-circle-left:before {
            content: "\f0a8"
        }

        .fa-arrow-circle-right:before {
            content: "\f0a9"
        }

        .fa-arrow-circle-up:before {
            content: "\f0aa"
        }

        .fa-arrow-circle-down:before {
            content: "\f0ab"
        }

        .fa-globe:before {
            content: "\f0ac"
        }

        .fa-wrench:before {
            content: "\f0ad"
        }

        .fa-tasks:before {
            content: "\f0ae"
        }

        .fa-filter:before {
            content: "\f0b0"
        }

        .fa-briefcase:before {
            content: "\f0b1"
        }

        .fa-arrows-alt:before {
            content: "\f0b2"
        }

        .fa-group:before, .fa-users:before {
            content: "\f0c0"
        }

        .fa-chain:before, .fa-link:before {
            content: "\f0c1"
        }

        .fa-cloud:before {
            content: "\f0c2"
        }

        .fa-flask:before {
            content: "\f0c3"
        }

        .fa-cut:before, .fa-scissors:before {
            content: "\f0c4"
        }

        .fa-copy:before, .fa-files-o:before {
            content: "\f0c5"
        }

        .fa-paperclip:before {
            content: "\f0c6"
        }

        .fa-save:before, .fa-floppy-o:before {
            content: "\f0c7"
        }

        .fa-square:before {
            content: "\f0c8"
        }

        .fa-navicon:before, .fa-reorder:before, .fa-bars:before {
            content: "\f0c9"
        }

        .fa-list-ul:before {
            content: "\f0ca"
        }

        .fa-list-ol:before {
            content: "\f0cb"
        }

        .fa-strikethrough:before {
            content: "\f0cc"
        }

        .fa-underline:before {
            content: "\f0cd"
        }

        .fa-table:before {
            content: "\f0ce"
        }

        .fa-magic:before {
            content: "\f0d0"
        }

        .fa-truck:before {
            content: "\f0d1"
        }

        .fa-pinterest:before {
            content: "\f0d2"
        }

        .fa-pinterest-square:before {
            content: "\f0d3"
        }

        .fa-google-plus-square:before {
            content: "\f0d4"
        }

        .fa-google-plus:before {
            content: "\f0d5"
        }

        .fa-money:before {
            content: "\f0d6"
        }

        .fa-caret-down:before {
            content: "\f0d7"
        }

        .fa-caret-up:before {
            content: "\f0d8"
        }

        .fa-caret-left:before {
            content: "\f0d9"
        }

        .fa-caret-right:before {
            content: "\f0da"
        }

        .fa-columns:before {
            content: "\f0db"
        }

        .fa-unsorted:before, .fa-sort:before {
            content: "\f0dc"
        }

        .fa-sort-down:before, .fa-sort-desc:before {
            content: "\f0dd"
        }

        .fa-sort-up:before, .fa-sort-asc:before {
            content: "\f0de"
        }

        .fa-envelope:before {
            content: "\f0e0"
        }

        .fa-linkedin:before {
            content: "\f0e1"
        }

        .fa-rotate-left:before, .fa-undo:before {
            content: "\f0e2"
        }

        .fa-legal:before, .fa-gavel:before {
            content: "\f0e3"
        }

        .fa-dashboard:before, .fa-tachometer:before {
            content: "\f0e4"
        }

        .fa-comment-o:before {
            content: "\f0e5"
        }

        .fa-comments-o:before {
            content: "\f0e6"
        }

        .fa-flash:before, .fa-bolt:before {
            content: "\f0e7"
        }

        .fa-sitemap:before {
            content: "\f0e8"
        }

        .fa-umbrella:before {
            content: "\f0e9"
        }

        .fa-paste:before, .fa-clipboard:before {
            content: "\f0ea"
        }

        .fa-lightbulb-o:before {
            content: "\f0eb"
        }

        .fa-exchange:before {
            content: "\f0ec"
        }

        .fa-cloud-download:before {
            content: "\f0ed"
        }

        .fa-cloud-upload:before {
            content: "\f0ee"
        }

        .fa-user-md:before {
            content: "\f0f0"
        }

        .fa-stethoscope:before {
            content: "\f0f1"
        }

        .fa-suitcase:before {
            content: "\f0f2"
        }

        .fa-bell-o:before {
            content: "\f0a2"
        }

        .fa-coffee:before {
            content: "\f0f4"
        }

        .fa-cutlery:before {
            content: "\f0f5"
        }

        .fa-file-text-o:before {
            content: "\f0f6"
        }

        .fa-building-o:before {
            content: "\f0f7"
        }

        .fa-hospital-o:before {
            content: "\f0f8"
        }

        .fa-ambulance:before {
            content: "\f0f9"
        }

        .fa-medkit:before {
            content: "\f0fa"
        }

        .fa-fighter-jet:before {
            content: "\f0fb"
        }

        .fa-beer:before {
            content: "\f0fc"
        }

        .fa-h-square:before {
            content: "\f0fd"
        }

        .fa-plus-square:before {
            content: "\f0fe"
        }

        .fa-angle-double-left:before {
            content: "\f100"
        }

        .fa-angle-double-right:before {
            content: "\f101"
        }

        .fa-angle-double-up:before {
            content: "\f102"
        }

        .fa-angle-double-down:before {
            content: "\f103"
        }

        .fa-angle-left:before {
            content: "\f104"
        }

        .fa-angle-right:before {
            content: "\f105"
        }

        .fa-angle-up:before {
            content: "\f106"
        }

        .fa-angle-down:before {
            content: "\f107"
        }

        .fa-desktop:before {
            content: "\f108"
        }

        .fa-laptop:before {
            content: "\f109"
        }

        .fa-tablet:before {
            content: "\f10a"
        }

        .fa-mobile-phone:before, .fa-mobile:before {
            content: "\f10b"
        }

        .fa-circle-o:before {
            content: "\f10c"
        }

        .fa-quote-left:before {
            content: "\f10d"
        }

        .fa-quote-right:before {
            content: "\f10e"
        }

        .fa-spinner:before {
            content: "\f110"
        }

        .fa-circle:before {
            content: "\f111"
        }

        .fa-mail-reply:before, .fa-reply:before {
            content: "\f112"
        }

        .fa-github-alt:before {
            content: "\f113"
        }

        .fa-folder-o:before {
            content: "\f114"
        }

        .fa-folder-open-o:before {
            content: "\f115"
        }

        .fa-smile-o:before {
            content: "\f118"
        }

        .fa-frown-o:before {
            content: "\f119"
        }

        .fa-meh-o:before {
            content: "\f11a"
        }

        .fa-gamepad:before {
            content: "\f11b"
        }

        .fa-keyboard-o:before {
            content: "\f11c"
        }

        .fa-flag-o:before {
            content: "\f11d"
        }

        .fa-flag-checkered:before {
            content: "\f11e"
        }

        .fa-terminal:before {
            content: "\f120"
        }

        .fa-code:before {
            content: "\f121"
        }

        .fa-mail-reply-all:before, .fa-reply-all:before {
            content: "\f122"
        }

        .fa-star-half-empty:before, .fa-star-half-full:before, .fa-star-half-o:before {
            content: "\f123"
        }

        .fa-location-arrow:before {
            content: "\f124"
        }

        .fa-crop:before {
            content: "\f125"
        }

        .fa-code-fork:before {
            content: "\f126"
        }

        .fa-unlink:before, .fa-chain-broken:before {
            content: "\f127"
        }

        .fa-question:before {
            content: "\f128"
        }

        .fa-info:before {
            content: "\f129"
        }

        .fa-exclamation:before {
            content: "\f12a"
        }

        .fa-superscript:before {
            content: "\f12b"
        }

        .fa-subscript:before {
            content: "\f12c"
        }

        .fa-eraser:before {
            content: "\f12d"
        }

        .fa-puzzle-piece:before {
            content: "\f12e"
        }

        .fa-microphone:before {
            content: "\f130"
        }

        .fa-microphone-slash:before {
            content: "\f131"
        }

        .fa-shield:before {
            content: "\f132"
        }

        .fa-calendar-o:before {
            content: "\f133"
        }

        .fa-fire-extinguisher:before {
            content: "\f134"
        }

        .fa-rocket:before {
            content: "\f135"
        }

        .fa-maxcdn:before {
            content: "\f136"
        }

        .fa-chevron-circle-left:before {
            content: "\f137"
        }

        .fa-chevron-circle-right:before {
            content: "\f138"
        }

        .fa-chevron-circle-up:before {
            content: "\f139"
        }

        .fa-chevron-circle-down:before {
            content: "\f13a"
        }

        .fa-html5:before {
            content: "\f13b"
        }

        .fa-css3:before {
            content: "\f13c"
        }

        .fa-anchor:before {
            content: "\f13d"
        }

        .fa-unlock-alt:before {
            content: "\f13e"
        }

        .fa-bullseye:before {
            content: "\f140"
        }

        .fa-ellipsis-h:before {
            content: "\f141"
        }

        .fa-ellipsis-v:before {
            content: "\f142"
        }

        .fa-rss-square:before {
            content: "\f143"
        }

        .fa-play-circle:before {
            content: "\f144"
        }

        .fa-ticket:before {
            content: "\f145"
        }

        .fa-minus-square:before {
            content: "\f146"
        }

        .fa-minus-square-o:before {
            content: "\f147"
        }

        .fa-level-up:before {
            content: "\f148"
        }

        .fa-level-down:before {
            content: "\f149"
        }

        .fa-check-square:before {
            content: "\f14a"
        }

        .fa-pencil-square:before {
            content: "\f14b"
        }

        .fa-external-link-square:before {
            content: "\f14c"
        }

        .fa-share-square:before {
            content: "\f14d"
        }

        .fa-compass:before {
            content: "\f14e"
        }

        .fa-toggle-down:before, .fa-caret-square-o-down:before {
            content: "\f150"
        }

        .fa-toggle-up:before, .fa-caret-square-o-up:before {
            content: "\f151"
        }

        .fa-toggle-right:before, .fa-caret-square-o-right:before {
            content: "\f152"
        }

        .fa-euro:before, .fa-eur:before {
            content: "\f153"
        }

        .fa-gbp:before {
            content: "\f154"
        }

        .fa-dollar:before, .fa-usd:before {
            content: "\f155"
        }

        .fa-rupee:before, .fa-inr:before {
            content: "\f156"
        }

        .fa-cny:before, .fa-rmb:before, .fa-yen:before, .fa-jpy:before {
            content: "\f157"
        }

        .fa-ruble:before, .fa-rouble:before, .fa-rub:before {
            content: "\f158"
        }

        .fa-won:before, .fa-krw:before {
            content: "\f159"
        }

        .fa-bitcoin:before, .fa-btc:before {
            content: "\f15a"
        }

        .fa-file:before {
            content: "\f15b"
        }

        .fa-file-text:before {
            content: "\f15c"
        }

        .fa-sort-alpha-asc:before {
            content: "\f15d"
        }

        .fa-sort-alpha-desc:before {
            content: "\f15e"
        }

        .fa-sort-amount-asc:before {
            content: "\f160"
        }

        .fa-sort-amount-desc:before {
            content: "\f161"
        }

        .fa-sort-numeric-asc:before {
            content: "\f162"
        }

        .fa-sort-numeric-desc:before {
            content: "\f163"
        }

        .fa-thumbs-up:before {
            content: "\f164"
        }

        .fa-thumbs-down:before {
            content: "\f165"
        }

        .fa-youtube-square:before {
            content: "\f166"
        }

        .fa-youtube:before {
            content: "\f167"
        }

        .fa-xing:before {
            content: "\f168"
        }

        .fa-xing-square:before {
            content: "\f169"
        }

        .fa-youtube-play:before {
            content: "\f16a"
        }

        .fa-dropbox:before {
            content: "\f16b"
        }

        .fa-stack-overflow:before {
            content: "\f16c"
        }

        .fa-instagram:before {
            content: "\f16d"
        }

        .fa-flickr:before {
            content: "\f16e"
        }

        .fa-adn:before {
            content: "\f170"
        }

        .fa-bitbucket:before {
            content: "\f171"
        }

        .fa-bitbucket-square:before {
            content: "\f172"
        }

        .fa-tumblr:before {
            content: "\f173"
        }

        .fa-tumblr-square:before {
            content: "\f174"
        }

        .fa-long-arrow-down:before {
            content: "\f175"
        }

        .fa-long-arrow-up:before {
            content: "\f176"
        }

        .fa-long-arrow-left:before {
            content: "\f177"
        }

        .fa-long-arrow-right:before {
            content: "\f178"
        }

        .fa-apple:before {
            content: "\f179"
        }

        .fa-windows:before {
            content: "\f17a"
        }

        .fa-android:before {
            content: "\f17b"
        }

        .fa-linux:before {
            content: "\f17c"
        }

        .fa-dribbble:before {
            content: "\f17d"
        }

        .fa-skype:before {
            content: "\f17e"
        }

        .fa-foursquare:before {
            content: "\f180"
        }

        .fa-trello:before {
            content: "\f181"
        }

        .fa-female:before {
            content: "\f182"
        }

        .fa-male:before {
            content: "\f183"
        }

        .fa-gittip:before, .fa-gratipay:before {
            content: "\f184"
        }

        .fa-sun-o:before {
            content: "\f185"
        }

        .fa-moon-o:before {
            content: "\f186"
        }

        .fa-archive:before {
            content: "\f187"
        }

        .fa-bug:before {
            content: "\f188"
        }

        .fa-vk:before {
            content: "\f189"
        }

        .fa-weibo:before {
            content: "\f18a"
        }

        .fa-renren:before {
            content: "\f18b"
        }

        .fa-pagelines:before {
            content: "\f18c"
        }

        .fa-stack-exchange:before {
            content: "\f18d"
        }

        .fa-arrow-circle-o-right:before {
            content: "\f18e"
        }

        .fa-arrow-circle-o-left:before {
            content: "\f190"
        }

        .fa-toggle-left:before, .fa-caret-square-o-left:before {
            content: "\f191"
        }

        .fa-dot-circle-o:before {
            content: "\f192"
        }

        .fa-wheelchair:before {
            content: "\f193"
        }

        .fa-vimeo-square:before {
            content: "\f194"
        }

        .fa-turkish-lira:before, .fa-try:before {
            content: "\f195"
        }

        .fa-plus-square-o:before {
            content: "\f196"
        }

        .fa-space-shuttle:before {
            content: "\f197"
        }

        .fa-slack:before {
            content: "\f198"
        }

        .fa-envelope-square:before {
            content: "\f199"
        }

        .fa-wordpress:before {
            content: "\f19a"
        }

        .fa-openid:before {
            content: "\f19b"
        }

        .fa-institution:before, .fa-bank:before, .fa-university:before {
            content: "\f19c"
        }

        .fa-mortar-board:before, .fa-graduation-cap:before {
            content: "\f19d"
        }

        .fa-yahoo:before {
            content: "\f19e"
        }

        .fa-google:before {
            content: "\f1a0"
        }

        .fa-reddit:before {
            content: "\f1a1"
        }

        .fa-reddit-square:before {
            content: "\f1a2"
        }

        .fa-stumbleupon-circle:before {
            content: "\f1a3"
        }

        .fa-stumbleupon:before {
            content: "\f1a4"
        }

        .fa-delicious:before {
            content: "\f1a5"
        }

        .fa-digg:before {
            content: "\f1a6"
        }

        .fa-pied-piper-pp:before {
            content: "\f1a7"
        }

        .fa-pied-piper-alt:before {
            content: "\f1a8"
        }

        .fa-drupal:before {
            content: "\f1a9"
        }

        .fa-joomla:before {
            content: "\f1aa"
        }

        .fa-language:before {
            content: "\f1ab"
        }

        .fa-fax:before {
            content: "\f1ac"
        }

        .fa-building:before {
            content: "\f1ad"
        }

        .fa-child:before {
            content: "\f1ae"
        }

        .fa-paw:before {
            content: "\f1b0"
        }

        .fa-spoon:before {
            content: "\f1b1"
        }

        .fa-cube:before {
            content: "\f1b2"
        }

        .fa-cubes:before {
            content: "\f1b3"
        }

        .fa-behance:before {
            content: "\f1b4"
        }

        .fa-behance-square:before {
            content: "\f1b5"
        }

        .fa-sagent:before {
            content: "\f1b6"
        }

        .fa-sagent-square:before {
            content: "\f1b7"
        }

        .fa-recycle:before {
            content: "\f1b8"
        }

        .fa-automobile:before, .fa-car:before {
            content: "\f1b9"
        }

        .fa-cab:before, .fa-taxi:before {
            content: "\f1ba"
        }

        .fa-tree:before {
            content: "\f1bb"
        }

        .fa-spotify:before {
            content: "\f1bc"
        }

        .fa-deviantart:before {
            content: "\f1bd"
        }

        .fa-soundcloud:before {
            content: "\f1be"
        }

        .fa-database:before {
            content: "\f1c0"
        }

        .fa-file-pdf-o:before {
            content: "\f1c1"
        }

        .fa-file-word-o:before {
            content: "\f1c2"
        }

        .fa-file-excel-o:before {
            content: "\f1c3"
        }

        .fa-file-powerpoint-o:before {
            content: "\f1c4"
        }

        .fa-file-photo-o:before, .fa-file-picture-o:before, .fa-file-image-o:before {
            content: "\f1c5"
        }

        .fa-file-zip-o:before, .fa-file-archive-o:before {
            content: "\f1c6"
        }

        .fa-file-sound-o:before, .fa-file-audio-o:before {
            content: "\f1c7"
        }

        .fa-file-movie-o:before, .fa-file-video-o:before {
            content: "\f1c8"
        }

        .fa-file-code-o:before {
            content: "\f1c9"
        }

        .fa-vine:before {
            content: "\f1ca"
        }

        .fa-codepen:before {
            content: "\f1cb"
        }

        .fa-jsfiddle:before {
            content: "\f1cc"
        }

        .fa-life-bouy:before, .fa-life-buoy:before, .fa-life-saver:before, .fa-support:before, .fa-life-ring:before {
            content: "\f1cd"
        }

        .fa-circle-o-notch:before {
            content: "\f1ce"
        }

        .fa-ra:before, .fa-resistance:before, .fa-rebel:before {
            content: "\f1d0"
        }

        .fa-ge:before, .fa-empire:before {
            content: "\f1d1"
        }

        .fa-git-square:before {
            content: "\f1d2"
        }

        .fa-git:before {
            content: "\f1d3"
        }

        .fa-y-combinator-square:before, .fa-yc-square:before, .fa-hacker-news:before {
            content: "\f1d4"
        }

        .fa-tencent-weibo:before {
            content: "\f1d5"
        }

        .fa-qq:before {
            content: "\f1d6"
        }

        .fa-wechat:before, .fa-weixin:before {
            content: "\f1d7"
        }

        .fa-send:before, .fa-paper-plane:before {
            content: "\f1d8"
        }

        .fa-send-o:before, .fa-paper-plane-o:before {
            content: "\f1d9"
        }

        .fa-history:before {
            content: "\f1da"
        }

        .fa-circle-thin:before {
            content: "\f1db"
        }

        .fa-header:before {
            content: "\f1dc"
        }

        .fa-paragraph:before {
            content: "\f1dd"
        }

        .fa-sliders:before {
            content: "\f1de"
        }

        .fa-share-alt:before {
            content: "\f1e0"
        }

        .fa-share-alt-square:before {
            content: "\f1e1"
        }

        .fa-bomb:before {
            content: "\f1e2"
        }

        .fa-soccer-ball-o:before, .fa-futbol-o:before {
            content: "\f1e3"
        }

        .fa-tty:before {
            content: "\f1e4"
        }

        .fa-binoculars:before {
            content: "\f1e5"
        }

        .fa-plug:before {
            content: "\f1e6"
        }

        .fa-slideshare:before {
            content: "\f1e7"
        }

        .fa-twitch:before {
            content: "\f1e8"
        }

        .fa-yelp:before {
            content: "\f1e9"
        }

        .fa-newspaper-o:before {
            content: "\f1ea"
        }

        .fa-wifi:before {
            content: "\f1eb"
        }

        .fa-calculator:before {
            content: "\f1ec"
        }

        .fa-paypal:before {
            content: "\f1ed"
        }

        .fa-google-wallet:before {
            content: "\f1ee"
        }

        .fa-cc-visa:before {
            content: "\f1f0"
        }

        .fa-cc-mastercard:before {
            content: "\f1f1"
        }

        .fa-cc-discover:before {
            content: "\f1f2"
        }

        .fa-cc-amex:before {
            content: "\f1f3"
        }

        .fa-cc-paypal:before {
            content: "\f1f4"
        }

        .fa-cc-stripe:before {
            content: "\f1f5"
        }

        .fa-bell-slash:before {
            content: "\f1f6"
        }

        .fa-bell-slash-o:before {
            content: "\f1f7"
        }

        .fa-trash:before {
            content: "\f1f8"
        }

        .fa-copyright:before {
            content: "\f1f9"
        }

        .fa-at:before {
            content: "\f1fa"
        }

        .fa-eyedropper:before {
            content: "\f1fb"
        }

        .fa-paint-brush:before {
            content: "\f1fc"
        }

        .fa-birthday-cake:before {
            content: "\f1fd"
        }

        .fa-area-chart:before {
            content: "\f1fe"
        }

        .fa-pie-chart:before {
            content: "\f200"
        }

        .fa-line-chart:before {
            content: "\f201"
        }

        .fa-lastfm:before {
            content: "\f202"
        }

        .fa-lastfm-square:before {
            content: "\f203"
        }

        .fa-toggle-off:before {
            content: "\f204"
        }

        .fa-toggle-on:before {
            content: "\f205"
        }

        .fa-bicycle:before {
            content: "\f206"
        }

        .fa-bus:before {
            content: "\f207"
        }

        .fa-ioxhost:before {
            content: "\f208"
        }

        .fa-angellist:before {
            content: "\f209"
        }

        .fa-cc:before {
            content: "\f20a"
        }

        .fa-shekel:before, .fa-sheqel:before, .fa-ils:before {
            content: "\f20b"
        }

        .fa-meanpath:before {
            content: "\f20c"
        }

        .fa-buysellads:before {
            content: "\f20d"
        }

        .fa-connectdevelop:before {
            content: "\f20e"
        }

        .fa-dashcube:before {
            content: "\f210"
        }

        .fa-forumbee:before {
            content: "\f211"
        }

        .fa-leanpub:before {
            content: "\f212"
        }

        .fa-sellsy:before {
            content: "\f213"
        }

        .fa-shirtsinbulk:before {
            content: "\f214"
        }

        .fa-simplybuilt:before {
            content: "\f215"
        }

        .fa-skyatlas:before {
            content: "\f216"
        }

        .fa-cart-plus:before {
            content: "\f217"
        }

        .fa-cart-arrow-down:before {
            content: "\f218"
        }

        .fa-diamond:before {
            content: "\f219"
        }

        .fa-ship:before {
            content: "\f21a"
        }

        .fa-user-secret:before {
            content: "\f21b"
        }

        .fa-motorcycle:before {
            content: "\f21c"
        }

        .fa-street-view:before {
            content: "\f21d"
        }

        .fa-heartbeat:before {
            content: "\f21e"
        }

        .fa-venus:before {
            content: "\f221"
        }

        .fa-mars:before {
            content: "\f222"
        }

        .fa-mercury:before {
            content: "\f223"
        }

        .fa-intersex:before, .fa-transgender:before {
            content: "\f224"
        }

        .fa-transgender-alt:before {
            content: "\f225"
        }

        .fa-venus-double:before {
            content: "\f226"
        }

        .fa-mars-double:before {
            content: "\f227"
        }

        .fa-venus-mars:before {
            content: "\f228"
        }

        .fa-mars-stroke:before {
            content: "\f229"
        }

        .fa-mars-stroke-v:before {
            content: "\f22a"
        }

        .fa-mars-stroke-h:before {
            content: "\f22b"
        }

        .fa-neuter:before {
            content: "\f22c"
        }

        .fa-genderless:before {
            content: "\f22d"
        }

        .fa-facebook-official:before {
            content: "\f230"
        }

        .fa-pinterest-p:before {
            content: "\f231"
        }

        .fa-whatsapp:before {
            content: "\f232"
        }

        .fa-server:before {
            content: "\f233"
        }

        .fa-user-plus:before {
            content: "\f234"
        }

        .fa-user-times:before {
            content: "\f235"
        }

        .fa-hotel:before, .fa-bed:before {
            content: "\f236"
        }

        .fa-viacoin:before {
            content: "\f237"
        }

        .fa-train:before {
            content: "\f238"
        }

        .fa-subway:before {
            content: "\f239"
        }

        .fa-medium:before {
            content: "\f23a"
        }

        .fa-yc:before, .fa-y-combinator:before {
            content: "\f23b"
        }

        .fa-optin-monster:before {
            content: "\f23c"
        }

        .fa-opencart:before {
            content: "\f23d"
        }

        .fa-expeditedssl:before {
            content: "\f23e"
        }

        .fa-battery-4:before, .fa-battery:before, .fa-battery-full:before {
            content: "\f240"
        }

        .fa-battery-3:before, .fa-battery-three-quarters:before {
            content: "\f241"
        }

        .fa-battery-2:before, .fa-battery-half:before {
            content: "\f242"
        }

        .fa-battery-1:before, .fa-battery-quarter:before {
            content: "\f243"
        }

        .fa-battery-0:before, .fa-battery-empty:before {
            content: "\f244"
        }

        .fa-mouse-pointer:before {
            content: "\f245"
        }

        .fa-i-cursor:before {
            content: "\f246"
        }

        .fa-object-group:before {
            content: "\f247"
        }

        .fa-object-ungroup:before {
            content: "\f248"
        }

        .fa-sticky-note:before {
            content: "\f249"
        }

        .fa-sticky-note-o:before {
            content: "\f24a"
        }

        .fa-cc-jcb:before {
            content: "\f24b"
        }

        .fa-cc-diners-club:before {
            content: "\f24c"
        }

        .fa-clone:before {
            content: "\f24d"
        }

        .fa-balance-scale:before {
            content: "\f24e"
        }

        .fa-hourglass-o:before {
            content: "\f250"
        }

        .fa-hourglass-1:before, .fa-hourglass-start:before {
            content: "\f251"
        }

        .fa-hourglass-2:before, .fa-hourglass-half:before {
            content: "\f252"
        }

        .fa-hourglass-3:before, .fa-hourglass-end:before {
            content: "\f253"
        }

        .fa-hourglass:before {
            content: "\f254"
        }

        .fa-hand-grab-o:before, .fa-hand-rock-o:before {
            content: "\f255"
        }

        .fa-hand-stop-o:before, .fa-hand-paper-o:before {
            content: "\f256"
        }

        .fa-hand-scissors-o:before {
            content: "\f257"
        }

        .fa-hand-lizard-o:before {
            content: "\f258"
        }

        .fa-hand-spock-o:before {
            content: "\f259"
        }

        .fa-hand-pointer-o:before {
            content: "\f25a"
        }

        .fa-hand-peace-o:before {
            content: "\f25b"
        }

        .fa-trademark:before {
            content: "\f25c"
        }

        .fa-registered:before {
            content: "\f25d"
        }

        .fa-creative-commons:before {
            content: "\f25e"
        }

        .fa-gg:before {
            content: "\f260"
        }

        .fa-gg-circle:before {
            content: "\f261"
        }

        .fa-tripadvisor:before {
            content: "\f262"
        }

        .fa-odnoklassniki:before {
            content: "\f263"
        }

        .fa-odnoklassniki-square:before {
            content: "\f264"
        }

        .fa-get-pocket:before {
            content: "\f265"
        }

        .fa-wikipedia-w:before {
            content: "\f266"
        }

        .fa-safari:before {
            content: "\f267"
        }

        .fa-chrome:before {
            content: "\f268"
        }

        .fa-firefox:before {
            content: "\f269"
        }

        .fa-opera:before {
            content: "\f26a"
        }

        .fa-internet-explorer:before {
            content: "\f26b"
        }

        .fa-tv:before, .fa-television:before {
            content: "\f26c"
        }

        .fa-contao:before {
            content: "\f26d"
        }

        .fa-500px:before {
            content: "\f26e"
        }

        .fa-amazon:before {
            content: "\f270"
        }

        .fa-calendar-plus-o:before {
            content: "\f271"
        }

        .fa-calendar-minus-o:before {
            content: "\f272"
        }

        .fa-calendar-times-o:before {
            content: "\f273"
        }

        .fa-calendar-check-o:before {
            content: "\f274"
        }

        .fa-industry:before {
            content: "\f275"
        }

        .fa-map-pin:before {
            content: "\f276"
        }

        .fa-map-signs:before {
            content: "\f277"
        }

        .fa-map-o:before {
            content: "\f278"
        }

        .fa-map:before {
            content: "\f279"
        }

        .fa-commenting:before {
            content: "\f27a"
        }

        .fa-commenting-o:before {
            content: "\f27b"
        }

        .fa-houzz:before {
            content: "\f27c"
        }

        .fa-vimeo:before {
            content: "\f27d"
        }

        .fa-black-tie:before {
            content: "\f27e"
        }

        .fa-fonticons:before {
            content: "\f280"
        }

        .fa-reddit-alien:before {
            content: "\f281"
        }

        .fa-edge:before {
            content: "\f282"
        }

        .fa-credit-card-alt:before {
            content: "\f283"
        }

        .fa-codiepie:before {
            content: "\f284"
        }

        .fa-modx:before {
            content: "\f285"
        }

        .fa-fort-awesome:before {
            content: "\f286"
        }

        .fa-usb:before {
            content: "\f287"
        }

        .fa-product-hunt:before {
            content: "\f288"
        }

        .fa-mixcloud:before {
            content: "\f289"
        }

        .fa-scribd:before {
            content: "\f28a"
        }

        .fa-pause-circle:before {
            content: "\f28b"
        }

        .fa-pause-circle-o:before {
            content: "\f28c"
        }

        .fa-stop-circle:before {
            content: "\f28d"
        }

        .fa-stop-circle-o:before {
            content: "\f28e"
        }

        .fa-shopping-bag:before {
            content: "\f290"
        }

        .fa-shopping-basket:before {
            content: "\f291"
        }

        .fa-hashtag:before {
            content: "\f292"
        }

        .fa-bluetooth:before {
            content: "\f293"
        }

        .fa-bluetooth-b:before {
            content: "\f294"
        }

        .fa-percent:before {
            content: "\f295"
        }

        .fa-gitlab:before {
            content: "\f296"
        }

        .fa-wpbeginner:before {
            content: "\f297"
        }

        .fa-wpforms:before {
            content: "\f298"
        }

        .fa-envira:before {
            content: "\f299"
        }

        .fa-universal-access:before {
            content: "\f29a"
        }

        .fa-wheelchair-alt:before {
            content: "\f29b"
        }

        .fa-question-circle-o:before {
            content: "\f29c"
        }

        .fa-blind:before {
            content: "\f29d"
        }

        .fa-audio-description:before {
            content: "\f29e"
        }

        .fa-volume-control-phone:before {
            content: "\f2a0"
        }

        .fa-braille:before {
            content: "\f2a1"
        }

        .fa-assistive-listening-systems:before {
            content: "\f2a2"
        }

        .fa-asl-interpreting:before, .fa-american-sign-language-interpreting:before {
            content: "\f2a3"
        }

        .fa-deafness:before, .fa-hard-of-hearing:before, .fa-deaf:before {
            content: "\f2a4"
        }

        .fa-glide:before {
            content: "\f2a5"
        }

        .fa-glide-g:before {
            content: "\f2a6"
        }

        .fa-signing:before, .fa-sign-language:before {
            content: "\f2a7"
        }

        .fa-low-vision:before {
            content: "\f2a8"
        }

        .fa-viadeo:before {
            content: "\f2a9"
        }

        .fa-viadeo-square:before {
            content: "\f2aa"
        }

        .fa-snapchat:before {
            content: "\f2ab"
        }

        .fa-snapchat-ghost:before {
            content: "\f2ac"
        }

        .fa-snapchat-square:before {
            content: "\f2ad"
        }

        .fa-pied-piper:before {
            content: "\f2ae"
        }

        .fa-first-order:before {
            content: "\f2b0"
        }

        .fa-yoast:before {
            content: "\f2b1"
        }

        .fa-themeisle:before {
            content: "\f2b2"
        }

        .fa-google-plus-circle:before, .fa-google-plus-official:before {
            content: "\f2b3"
        }

        .fa-fa:before, .fa-font-awesome:before {
            content: "\f2b4"
        }

        .fa-handshake-o:before {
            content: "\f2b5"
        }

        .fa-envelope-open:before {
            content: "\f2b6"
        }

        .fa-envelope-open-o:before {
            content: "\f2b7"
        }

        .fa-linode:before {
            content: "\f2b8"
        }

        .fa-address-book:before {
            content: "\f2b9"
        }

        .fa-address-book-o:before {
            content: "\f2ba"
        }

        .fa-vcard:before, .fa-address-card:before {
            content: "\f2bb"
        }

        .fa-vcard-o:before, .fa-address-card-o:before {
            content: "\f2bc"
        }

        .fa-user-circle:before {
            content: "\f2bd"
        }

        .fa-user-circle-o:before {
            content: "\f2be"
        }

        .fa-user-o:before {
            content: "\f2c0"
        }

        .fa-id-badge:before {
            content: "\f2c1"
        }

        .fa-drivers-license:before, .fa-id-card:before {
            content: "\f2c2"
        }

        .fa-drivers-license-o:before, .fa-id-card-o:before {
            content: "\f2c3"
        }

        .fa-quora:before {
            content: "\f2c4"
        }

        .fa-free-code-camp:before {
            content: "\f2c5"
        }

        .fa-telegram:before {
            content: "\f2c6"
        }

        .fa-thermometer-4:before, .fa-thermometer:before, .fa-thermometer-full:before {
            content: "\f2c7"
        }

        .fa-thermometer-3:before, .fa-thermometer-three-quarters:before {
            content: "\f2c8"
        }

        .fa-thermometer-2:before, .fa-thermometer-half:before {
            content: "\f2c9"
        }

        .fa-thermometer-1:before, .fa-thermometer-quarter:before {
            content: "\f2ca"
        }

        .fa-thermometer-0:before, .fa-thermometer-empty:before {
            content: "\f2cb"
        }

        .fa-shower:before {
            content: "\f2cc"
        }

        .fa-bathtub:before, .fa-s15:before, .fa-bath:before {
            content: "\f2cd"
        }

        .fa-podcast:before {
            content: "\f2ce"
        }

        .fa-window-maximize:before {
            content: "\f2d0"
        }

        .fa-window-minimize:before {
            content: "\f2d1"
        }

        .fa-window-restore:before {
            content: "\f2d2"
        }

        .fa-times-rectangle:before, .fa-window-close:before {
            content: "\f2d3"
        }

        .fa-times-rectangle-o:before, .fa-window-close-o:before {
            content: "\f2d4"
        }

        .fa-bandcamp:before {
            content: "\f2d5"
        }

        .fa-grav:before {
            content: "\f2d6"
        }

        .fa-etsy:before {
            content: "\f2d7"
        }

        .fa-imdb:before {
            content: "\f2d8"
        }

        .fa-ravelry:before {
            content: "\f2d9"
        }

        .fa-eercast:before {
            content: "\f2da"
        }

        .fa-microchip:before {
            content: "\f2db"
        }

        .fa-snowflake-o:before {
            content: "\f2dc"
        }

        .fa-superpowers:before {
            content: "\f2dd"
        }

        .fa-wpexplorer:before {
            content: "\f2de"
        }

        .fa-meetup:before {
            content: "\f2e0"
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0
        }

        .sr-only-focusable:active, .sr-only-focusable:focus {
            position: static;
            width: auto;
            height: auto;
            margin: 0;
            overflow: visible;
            clip: auto
        }

    </style>


    <!-- Favicon icon -->
    <link rel="shortcut icon" href="/assets/pdf/assets/img/favicon.ico" type="image/x-icon" >


        <style>
            /*------------------------------------------------------------------
[Main Stylesheet]

Project:    INVO
Version:    1.1.0
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
[Table of contents]
    *. Invoice 1 / .invoice-1
    *. Invoice 2 / .invoice-2
    *. Invoice 3 / .invoice-3
    *. Invoice 4 / .invoice-4
    *. Invoice 5 / .invoice-5
    *. Invoice 6 / .invoice-6
    *. Invoice 7 / .invoice-7
    *. Invoice 8 / .invoice-8
    *. Invoice 9 / .invoice-9
-------------------------------------------------------------------*/
/** GLOBAL CLASSES **/

.table {
    color: #535353;
}

.invoice-content {
    font-family: 'Poppins', sans-serif;
    color: #535353;
    font-size: 14px;
}

.invoice-content a {
    text-decoration: none;
}

.invoice-content .img-fluid {
    max-width: 100% !important;
    height: auto;
}

.invoice-content .form-control:focus {
    box-shadow: none;
}

.invoice-content h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Poppins', sans-serif;
    color: #535353;
}

/** BTN LG **/
.btn-lg {
    font-size: 15px;
    height: 50px;
    padding: 0 35px;
    line-height: 50px;
    border-radius: 3px;
    color: #ffffff;
    border: none;
    margin: 3px;
}

.btn-lg {
    display: inline-block;
    vertical-align: middle;
    -webkit-appearance: none;
    text-transform: capitalize;
    transition: all 0.3s linear;
    z-index: 1;
    position: relative;
    overflow: hidden;
    text-align: center;
}

.btn-lg:hover {
    color: #ffffff;
}

.btn-lg:hover:after {
    transform: perspective(200px) scaleX(1.05) rotateX(0deg) translateZ(0);
    transition: transform 0.9s linear, transform 0.4s linear;
}

.btn-lg:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    transform: perspective(200px) scaleX(0.1) rotateX(90deg) translateZ(-10px);
    transform-origin: bottom center;
    transition: transform 0.9s linear, transform 0.4s linear;
    z-index: -1;
}

.btn-check:focus+.btn, .btn:focus {
    outline: 0;
    box-shadow: none;
}

.btn-download {
    background: #25cc7e!important;
}

.btn-download:after {
    background: #1eb770;
}

.btn-print{
    background: #3a3939;
}

.btn-print:after {
    background: #1d1c1c;
}

.invoice-content .f-w-600 {
    font-weight: 600 !important;
}

.invoice-content .text-13 {
    font-size: 13px;
}

.invoice-content .invoice-table th:first-child,
.invoice-content .invoice-table td:first-child {
    text-align: left;
}

.invoice-content .color-white {
    color: #fff !important;
}

.invoice-content .inv-header-1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
}

.invoice-content .inv-header-2 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
}

.invoice-content .inv-title-1 {
    font-weight: 500;
    font-size: 16px;
}

.invoice-content .invo-addr-1 {
    font-size: 15px;
    margin-bottom: 20px;
}

.invoice-content .item-desc-1 {
    text-align: left;
}

.invoice-content .item-desc-1 span {
    display: block;
}

.invoice-content .item-desc-1 small {
    display: block;
}

.invoice-content .important-notes-list-1 {
    font-size: 13px !important;
    padding-left: 15px;
    margin-bottom: 15px;
}

.invoice-content .important-notes-list-1 li {
    margin-bottom: 5px;
}

.invoice-content .bank-transfer-list-1 {
    font-size: 13px !important;
    padding-left: 0px;
}

.invoice-content .important-notes {
    font-size: 12px !important;
}

.invoice-content .invoice-btn-section {
    text-align: center;
    margin-top: 30px;
}

table th{
    font-weight: 500;
}

/** Invoice 1 Start **/
.invoice-1 {
    padding: 50px 0;
    background: #fff6f6;
}

.invoice-1 .invoice-info {
    background: #fff;
    margin-bottom: 30px;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-1 .invoice-inner{
    max-width: 1296px;
    margin: 0 auto;
}

.invoice-1 .item-desc-1 small {
    font-size: 13px;
}

.invoice-1 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
}

.invoice-1 .f-w-600 {
    font-weight: 500 !important;
}

.invoice-1 .invoice-headar {
    padding: 90px 150px 130px;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 20% 100%, 0% 60%);
    border-radius: 20px 20px 0 0;
    background: rgba(0, 0, 0, 0.04) url(../img/img-1.png) top left repeat;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
}

.invoice-1 .table-striped > tbody > tr:nth-of-type(odd) {
    --bs-table-accent-bg: rgb(255 255 255 / 5%);
    color: var(--bs-table-striped-color);
}

.invoice-1 .invoice-top {
    padding: 40px 150px 15px 150px;
    font-size: 15px;
}

.invoice-top .float-end p {
    margin-bottom: 0;
}

.invoice-1 .invoice-center .table {
    margin-bottom: 0;
}

.invoice-1 .invoice-name img {
    height: 25px;
}

.invoice-1 .table-section {
    text-align: center;
}

.invoice-1 .invoice-center {
    padding: 0 150px 40px;
}

.invoice-1 .invoice-info-buttom .table
.invoice-1 .invoice-info-buttom .table tr, .table tr {
    border: 1px solid #e9ecef;
    text-align: right;
}

.invoice-1 .table > :not(caption) > * > * {
    padding: 15px 20px;
}

.table > :not(caption) > * > * {
    background-color: var(--bs-table-bg);
    border-bottom-width: 0;
}

.invoice-1 .table td, .invoice-1 .table th {
    vertical-align: middle;
    border: none !important;
}

.invoice-1 table th {
    font-size: 15px;
    color: #525252;
}

.invoice-1 .table td {
    font-size: 15px;
    font-weight: 400;
    color: #555;
}

.invoice-1 .caption-top {
    caption-side: top;
    text-align: right;
    margin-bottom: 0;
}

.invoice-1 .invoice-bottom {
    padding: 0 150px 25px;
}

.invoice-1 .bg-active {
    background: #f3f3f3;
    color: #535353 !important;
}

.invoice-1 .invoice-bottom .amount {
    text-align: right;
}

.invoice-1 .invoice-bottom h3 {
    margin-bottom: 15px;
}

.invoice-1 .invoice-contact {
    padding: 70px 150px 40px;
    clip-path: polygon(0% 0, 50% 35%, 60% 100%, 0 100%);
    background: rgba(0, 0, 0, 0.04) url(../img/img-1.png) top left repeat;
    border-radius: 0 0 0 20px;
}

.invoice-1 .social-list {
    float: left;
}

.invoice-1 .inv-header-1 {
    font-weight: 500;
}

.invoice-1 .social-list span {
    margin-right: 5px;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
}

.invoice-1 .social-list a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    font-size: 17px;
    background: #fff;
    margin: 0 2px 2px 0;
    color: #25cc7e;
    border-radius: 50%;
}

.invoice-1 .social-list a:hover{
    background: #fff6f6;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-1 .invoice-center {
        padding: 0 50px 40px;
    }

    .invoice-1 .invoice-bottom {
        padding: 0 50px 15px;
    }

    .invoice-1 .invoice-contact {
        padding: 70px 50px 40px;
        clip-path: polygon(0% 0, 70% 35%, 80% 100%, 0 100%);
        background: rgba(0, 0, 0, 0.04) url(../img/img-1.png) top left repeat;
        border-radius: 0 0 0 20px;
    }

    .invoice-1 .payment-info {
        max-width: 100%;
        text-align: left;
        margin: 0 auto 0 0;
    }

    .invoice-1 .invoice-headar {
        padding: 50px 50px 85px;
    }

    .invoice-1 .invoice-top {
        padding: 30px 50px 15px;
    }
}

@media (max-width: 768px) {
    .invoice-1 .invoice-headar {
        padding: 30px 30px 20px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0% 100%);
    }

    .invoice-1 .invoice-headar h1 {
        line-height: normal;
        font-size: 22px;
    }

    .invoice-1 .invoice-headar img {
        margin-bottom: 10px;
    }

    .invoice-1 .invoice-number {
        margin-bottom: 20px;
    }

    .invoice-1 .invoice-headar {
        clip-path: none;
    }

    .invoice-1 .invoice-contact {
        padding: 30px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0% 100%);
        border-radius: 0;
    }

    .invoice-1 .invoice-top {
        padding: 30px 30px 10px;
    }

    .invoice-1 .invoice-center {
        padding: 0 30px 30px;
    }

    .invoice-1 .invoice-bottom {
        padding: 0 30px 15px;
    }

    .invoice-1 .table > :not(caption) > * > * {
        padding: 15px 10px;
    }

    .invoice-1 .invoice-name {
        text-align: left;
        float: left;
    }

    .invoice-1 .invoice-bottom .amount {
        text-align: left;
    }

    .invoice-1 .bank-transfer {
        margin-bottom: 30px;
    }

    .invoice-1 .invoice-headar {
        border-radius: 0;
    }
}

/** Invoice 1 end **/

/** Invoice 2 start **/
.invoice-2 {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 47px 0 50px;
    background: #fff6f6;
    font-family: 'Poppins', sans-serif;
}

.invoice-2 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #353535;
}

.invoice-2 .invoice-inner {
    margin: 0 auto;
    max-width: 1296px;
}

.invoice-2 .invoice-info {
    background: #fff;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-2 .table-responsive {
    font-size: 15px;
}

.invoice-2 .table {
    width: 100%;
    max-width: 100%;
    background-color: transparent;
    margin-bottom: 0;
}

.invoice-2 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-2 .bg-active {
    color: #515151 !important;
}

.invoice-2 .fw-bold {
    font-weight: 500!important;
    color: #535353;
}

.invoice-2 .note {
    padding: 40px 120px;
}

.invoice-2 strong {
    font-weight: 600;
}

.invoice-2 .account-transfer p {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: normal;
}

.invoice-2 .account-transfer p strong {
    font-weight: 600;
}

.invoice-2 .account-transfer {
    border-bottom: solid 1px #d8d8d8;
    padding: 40px 120px;
}

.invoice-2 .total-amount {
    text-align: right;
}

.invoice-2 .total-amount h1 {
    color: #25cc7e;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 30px;
}

.invoice-2 .order-summary h4 {
    font-size: 20px;
    margin: 0 0 20px;
}

.invoice-2 .address-info .strong {
    font-weight: 600;
    margin-bottom: 5px;
}

.invoice-2 p{
    color: #535353;
}

.invoice-2 strong {
    text-transform: initial !important;
}

.invoice-2 .order-summary {
    padding: 40px 120px;
    border-bottom: solid 1px #d8d8d8;
}

.invoice-2 .address-info p {
    margin-bottom: 0;
    font-size: 15px;
}

.invoice-2 .logo img {
    height: 25px;
    margin-bottom: 10px;
}

.invoice-2 .title-logo p {
    margin-bottom: 0;
}

.invoice-2 .name {
    font-size: 22px;
    margin-bottom: 30px;
}

.invoice-2 .id {
    font-size: 22px;
    line-height: 50px;
    margin-bottom: 0;
}

.invoice-2 .invoice-name p {
    margin-bottom: 0;
}

.invoice-2 .invoice-center {
    border-bottom: solid 1px #d8d8d8;
    padding: 40px 120px;
}

.invoice-2 address {
    margin-bottom: 0;
}

.invoice-2 .invoice-top {
    border-bottom: solid 1px #d8d8d8;
    padding: 40px 120px;
}

.invoice-2 .note p {
    font-size: 13px;
    margin-bottom: 0;
}


.invoice-2 .table > :not(caption) > * > * {
    padding: 15px 30px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.invoice-2 .bank-transfer-list-1 {
    margin-bottom: 0;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-2 .invoice-top {
        padding: 40px 50px;
    }

    .invoice-2 .id {
        font-size: 18px;
        line-height: 40px;
        margin-bottom: 0;
    }

    .invoice-2 .invoice-center {
        padding: 40px 50px;
    }

    .invoice-2 .order-summary {
        padding: 40px 50px;
    }

    .invoice-2 .account-transfer {
        padding: 40px 50px;
    }

    .invoice-2 .note {
        padding: 40px 50px;
    }
}

@media (max-width: 768px) {
    .invoice-2 .address-info {
        margin-bottom: 20px;
    }

    .invoice-2 .invoice-top{
        padding: 30px;
    }

    .invoice-2 .address-info {
        margin-bottom: 20px;
    }

    .invoice-2 .title-logo {
        margin-top: 10px;
    }

    .invoice-2 .address-info.ai2 {
        margin-bottom: 0;
    }

    .invoice-2 .bank-transfer {
        margin-bottom: 20px;
    }

    .invoice-2 .invoice-center {
        padding: 30px;
    }

    .invoice-2 .order-summary {
        padding: 30px;
    }

    .invoice-2 .account-transfer {
        padding: 30px;
    }

    .invoice-2 .note {
        padding: 30px;
    }

    .invoice-2 .table > :not(caption) > * > * {
        padding: 15px 15px;
        background-color: var(--bs-table-bg);
        box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
        text-align: right;
    }

    .invoice-2 .invoice-info {
        margin: 0 auto;
        padding: 0;
        box-shadow: none;
    }

    .invoice-2 .total-amount {
        text-align: left;
    }

    .invoice-2 .invoice-name {
        text-align: left;
        float: left;
    }

    .invoice-2 .name {
        margin-bottom: 15px;
    }
}

/** Invoice 2 end **/

/** Invoice 3 Start **/
.invoice-3 {
    padding: 50px 0;
    background: #fff6f6;
}

.invoice-3 .invoice-info {
    background: #fff;
    margin-bottom: 30px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-3 .invoice-inner{
    margin: 0 auto;
    max-width: 1296px;
}

.invoice-3 .invoice-top {
    background: rgba(0, 0, 0, 0.04) url(../img/bg-img.jpg.png) top left repeat;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    padding: 70px 150px 50px 150px;
    border-radius: 10px 10px 0 0;
}

.invoice-3 .invoice-top h1 {
    color: #fff;
    font-weight: 600;
}

.invoice-3 .item-desc-1 small {
    font-size: 13px;
}

.invoice-3 a {
    text-decoration: none;
}

.invoice-3 .invoice-name {
    margin-bottom: 30px;
}

.invoice-3 .informeshon {
    color: #fff;
    opacity: 0.9;
}

.invoice-3 .informeshon p {
    margin-bottom: 0;
}

.invoice-3 .informeshon .inv-title-1 {
    margin-bottom: 10px;
    color: #fff;
}

.invoice-3 .inv-header-1 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
}

.invoice-3 hr:not([size]) {
    height: 1px;
    background: #fbfbfb;
    margin: 0 0 30px;
}

.invoice-3 .informeshon .bold {
    opacity: 1;
    font-weight: 600;
    font-size: 15px;
}

.invoice-3 .invoice-name p {
    margin-bottom: 5px;
    opacity: 0.9;
    font-size: 14px;
    color: #fff;
}

.invoice-3 .invoice-name img {
    height: 30px;
    margin-bottom: 15px;
}

.table-section {
    text-align: center;
}

.invoice-3 .invoice-center {
    padding: 70px 150px;
}

.invoice-3 .invoice-info-buttom .table tr, .table tr {
    border-bottom: 1px solid #e9ecef;
    text-align: right;
}

.invoice-3 .table > :not(caption) > * > * {
    padding: 20px;
}

.table > :not(caption) > * > * {
    background-color: var(--bs-table-bg);
    border-bottom-width: 0;
}

.invoice-3 .table td {
    vertical-align: middle;
    border: none !important;
    font-size: 15px;
    color: #535353;
}

.invoice-3 .table th {
    vertical-align: middle;
    border: none !important;
    font-weight: 500;
}

.invoice-3 .table th {
    color: #535353;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 15px;
}

.invoice-3 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-3 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-3 .fw-bold {
    font-weight: 500!important;
}

.invoice-3 .copy-right {
    margin-bottom: 0;
    font-size: 15px;
}

.invoice-3 .caption-top {
    caption-side: top;
    text-align: right;
    margin-bottom: 0;
}

.invoice-3 .table tr {
    border-top: 1px solid #e9ecef;
}

.invoice-3 .invoice-bottom {
    padding: 70px 150px;
    background: #fdfdfd;
}

.invoice-3 .invoice-bottom p {
    font-size: 15px;
    margin-bottom: 0;
}

.invoice-3 .invoice-bottom strong {
    font-weight: 600;
}

.invoice-3 .invoice-bottom .amount {
    text-align: right;
}

.invoice-3 .invoice-bottom h3 {
    margin-bottom: 15px;
}

.invoice-3 .invoice-bottom strong {
    font-weight: 500;
}

.invoice-3 .invoice-bottom h1 {
    font-weight: 700;
    font-size: 30px;
    color: #8547e8;
}

.invoice-3 .bank-transfer-list-1 {
    font-size: 14px !important;
}

.invoice-3 .inv-title-1 {
    font-weight: 500;
    font-size: 18px;
}


/** MEDIA **/
@media (max-width: 992px) {
    .invoice-3 .invoice-center {
        padding: 50px;
    }

    .invoice-3 .invoice-bottom {
        padding: 50px;
    }

    .invoice-3 .invoice-name {
        margin-bottom: 40px;
    }

    .invoice-3 .invoice-top {
        padding: 50px;
    }
}

@media (max-width: 768px) {
    .invoice-3 .invoice-top {
        padding: 30px 30px 0;
    }


    .invoice-3 .informeshon {
        margin-bottom: 30px;
    }

    .invoice-3 .invoice-center {
        padding: 30px;
    }

    .invoice-3 .invoice-bottom {
        padding: 30px;
    }

    .invoice-3 .table > :not(caption) > * > * {
        padding: 15px 10px;
    }

    .invoice-3 .invoice-bottom .amount {
        text-align: left;
    }

    .invoice-3 .bank-transfer {
        margin-bottom: 30px;
    }

    .invoice-3 .invoice-name img {
        height: 30px;
    }
}

/** Invoice 3 end **/

/** Invoice 4 start **/
.invoice-4 {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    background: #fff6f6;
    font-family: 'Poppins', sans-serif;
}

.invoice-4 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
    font-weight: 600;
}

.invoice-4 a {
    text-decoration: none;
}

.invoice-4 .item-desc-1 small {
    font-size: 13px;
    color: #535353;
}

.invoice-4 .invoice-info {
    background: #fff;
    margin-bottom: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-4 .invoice-inner{
    max-width: 1296px;
    margin: 0 auto;
}

.invoice-4 .copy-right {
    font-size: 15px;
    margin-bottom: 0;
}

.invoice-4 .table-responsive {
    font-size: 15px;
}

.invoice-4 .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0;
    background-color: transparent;
}

.invoice-4 .bg-active {
    background: #efefef;
    color: #535353;
}

.invoice-4 .fw-bold {
    font-weight: 500!important;
    color: #535353;
}

.invoice-4 strong {
    font-weight: 600;
}

.invoice-4 .account-transfer {
    margin-bottom: 30px;
    border-bottom: solid 1px #d8d8d8;
}

.invoice-4 .name {
    font-weight: 600;
    font-size: 22px;
    color: #fff;
}

.invoice-4 .invoice-top {
    position: relative;
}

.invoice-4 .invoice-name {
    text-align: right;
    float: right;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 100% 100%, 20% 100%);
    position: relative;
    background: #25cc7e;
    padding: 70px 70px 75px 120px;
}

.invoice-4 .invoice-name p {
    margin-bottom: 0;
    font-size: 15px;
    color: #fff;
}

.invoice-4 .logo-name h5 {
    margin-bottom: 10px;
    font-size: 20px;
}

.invoice-4 .logo-name {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 50px 70px;
}

.invoice-4 .logo-name img {
    width: 70px;
}

.invoice-4 .logo-name .logo {
    margin-bottom: 15px;
}


.invoice-4 .logo-name p {
    font-size: 15px;
    margin-bottom: 5px;
}

.invoice-4 .logo-name p a {
    color: #535353;
    text-decoration: none;
}

.invoice-4 .item-desc-1 span {
    font-size: 14px;
    color: #535353;
    font-weight: 500;
}

.invoice-4 .inv-title-1 {
    font-weight: 500;
    font-size: 16px!important;
}

.invoice-4 .invoice-center {
    border-bottom: solid 1px #d8d8d8;
    padding: 70px 70px 40px;
}

.invoice-4 .invoice-center p {
    font-size: 13px;
    line-height: 25px;
}

.invoice-4 .invoice-center img {
    border-radius: 100px;
}

.invoice-4 .invoice-center .client-name .user {
    position: absolute;
}

.invoice-4 .invoice-center .client-name .user img {
    width: 80px;
}

.invoice-4 .invoice-center .client-name {
    position: relative;
    display: inline-block;
}

.invoice-4 .invoice-center .client-name .info p {
    font-size: 15px;
    margin-bottom: 5px;
}

.invoice-4 .invoice-center .client-name .info p a {
    color: #2b2b2b;
    text-decoration: none;
}

.invoice-4 .table > :not(caption) > * > * {
    padding: 15px 20px;
    background-color: var(--bs-table-bg);
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}


.invoice-4 .invoice-top {
    border-bottom: solid 1px #d8d8d8;
}


.invoice-4 .table-section {
    padding: 70px 70px;
    border-bottom: solid 1px #d8d8d8;
}

.invoice-4 .mb-30 {
    margin-bottom: 30px;
}


.invoice-4 .table-striped tbody tr:nth-of-type(odd) {
    background: none;
}

.invoice-4 .invoice-center.ic2 {
    border-bottom: none;
}


/** MEDIA **/
@media (max-width: 992px) {
    .invoice-4 .invoice-name {
        text-align: right;
        float: right;
        clip-path: polygon(0 0, 100% 0, 100% 0%, 100% 100%, 7% 100%);
        position: relative;
        padding: 64px 50px 64px 90px;
    }

    .invoice-4 .logo-name {
        padding: 50px 20px 30px 50px;
    }

    .invoice-4 .invoice-center {
        padding: 50px 50px 20px;
    }

    .invoice-4 .table-section {
        padding: 50px;
    }
}

@media (max-width: 768px) {
    .invoice-4 .logo-name {
        padding: 30px;
    }

    .invoice-4 .lorem-hiden {
        margin-bottom: 30px;
    }

    .invoice-4 .invoice-name {
        clip-path: polygon(0 0, 100% 0, 100% 0%, 100% 100%, 0% 100%);
        padding: 30px;
        width: 100%;
    }

    .invoice-4 .invoice-center .client-name {
        margin-bottom: 30px;
    }

    .invoice-4 .invoice-name {
        text-align: left;
        float: left;
    }

    .invoice-4 .invoice-top {
        padding: 0;
    }

    .invoice-4 .invoice-center {
        padding: 30px 30px 0;
    }

    .invoice-4 .table-section {
        padding: 30px;
    }
}

/** Invoice 4 end **/

/** Invoice 5 start **/
.invoice-5 {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 47px 0 50px;
    background: #fff6f6;
    font-family: 'Poppins', sans-serif;
}

.invoice-5 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-5 .border-bottom {
    border-bottom: solid 1px #dee2e6 !important;
}

.invoice-5 .invoice-info {
    background: #fff;
    margin-bottom: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-5 .item-desc-1 small {
    font-size: 13px;
    color: #535353;
}

.invoice-5 .invoice-inner{
    max-width: 1296px;
    margin: 0 auto;
}

.invoice-5 .invoice-header {
    background: rgba(0, 0, 0, 0.04) url(../img/bg-img.jpg.png) top left repeat;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    padding: 70px;
    border-radius: 10px 10px 0 0;
}

.invoice-5 .invoice-header h4 {
    color: #fff;
    margin-bottom: 20px;
}

.invoice-5 .table-section {
    padding: 70px 70px 40px;
}

.invoice-5 .table-section .table > :not(caption) > * > * {
    padding: 15px 20px;
}

.invoice-5 .invoice-header-inner {
    margin: 0;
    border: solid 1px #fbfbfb45;
    border-radius: 5px;
}

.invoice-5 .invoice-header h4{
    font-weight: 500;
}

.invoice-5 .table {
    margin-bottom: 0;
}

.invoice-5 .sub-banner {
    margin: 0;
    font-size: 15px;
}

.invoice-5 .bg-active {
    background: #efefef;
    color: #535353;
}

.invoice-5 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-5 .fw-bold {
    font-weight: 500!important;
    color: #535353;
}

.invoice-5 strong {
    font-weight: 600;
}

.invoice-5 .address-info .strong {
    font-weight: 500;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: solid 1px #fbfbfb45;
    color: #fff;
    opacity: 1;
}

.invoice-5 .border-r {
    border-right: solid 1px #fbfbfb45;
}

.invoice-5 .address-info .col-pad {
    padding: 0;
}

.invoice-5 .address-info {
    padding: 20px 30px 30px;
}

.invoice-5 .address-info p {
    margin-bottom: 0;
    font-size: 15px;
    color: #fff;
    opacity: 0.9;
}

.invoice-5 p {
    font-size: 16px;
    line-height: 27px;
}

.item-desc-1 small {
    font-size: 12px;
}

.item-desc-1 span {
    font-size: 14px;
    font-weight: 600;
}

.invoice-5 .payment-info p {
    font-size: 13px;
    line-height: normal;
}

.invoice-5 .order {
    text-align: right;
    font-size: 22px;
}

.invoice-5 .logo {
    text-align: center;
}

.invoice-5 .logo img {
    height: 40px;
    margin-bottom: 30px;
}

.invoice-5 .mb-30 {
    margin-bottom: 30px;
}

.invoice-5 .name {
    font-size: 22px;
}

.invoice-5 .strong {
    font-weight: 600;
}

.invoice-5 .btn-active {
    background: #ff214f;
    color: #fff;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-5 .invoice-header {
        padding: 50px;
    }

    .invoice-5 .address-info {
        padding: 20px 15px 20px;
    }

    .invoice-5 .table-section {
        padding: 50px 50px 20px;
    }

    .invoice-5 .border-r {
        border-right: solid 1px #fbfbfb45;
        border-bottom: solid 1px #fbfbfb45;
    }

    .invoice-5 .br2 {
        border-bottom: none;
    }

    .invoice-5 .br3 {
        border-right: none;
    }
}

@media (max-width: 768px) {
    .invoice-5 .address-info.text-right {
        text-align: left !important;
    }

    .invoice-5 .invoice-header {
        padding: 30px 30px 0;
    }

    .invoice-5 .table-section {
        padding: 30px 30px 0;
    }

    .invoice-5 .address-info {
        padding: 0;
    }

    .invoice-5 .border-r {
        border-right: none;
        border-bottom: none;
    }

    .invoice-5 .invoice-header-inner {
        border: none;
    }

    .invoice-5 .invoice-header h4 {
        margin-bottom: 30px;
    }

    .invoice-5 .invoice-header .name{
        margin-bottom: 10px;
    }

    .invoice-5 .address-info {
        margin-bottom: 30px;
    }

    .invoice-5 .invoice-info {
        margin: 0 auto 30px;
        padding: 0;
        box-shadow: none;
    }

    .invoice-5 .order {
        text-align: left;
    }

    .invoice-5 .invoice-name {
        margin-bottom: 0 !important;
    }
}
/** Invoice 5 end **/

/** Invoice 6 start **/
.invoice-6 {
    background: #fff;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 47px 0 50px;
    font-family: 'Poppins', sans-serif;
}

.invoice-6 .invoice-inner-6 {
    background: #fff;
    max-width: 1296px;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-6 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-6 .invoice-titel{
    background: #25cc7e;
}

.invoice-6 .bank-transfer-list-1 li strong{
    font-weight: 500;
}

.invoice-6 .fw-bold {
    font-weight: 500!important;
}

.invoice-6 .item-desc-1 small {
    font-size: 13px;
    color: #535353;
}

.invoice-6 .border-bottom {
    border-bottom: solid 1px #dee2e6 !important;
}

.invoice-6 .invo-addr-1 {
    margin-bottom: 0;
}

.invoice-6 .mb-30 {
    margin-bottom: 30px;
}

.invoice-6 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-6 .invoice-top .logo img {
    height: 25px;
}

.invoice-6 .invoice-top {
    padding: 50px 150px;
}

.invoice-6 .invoice-top .invoice {
    float: right;
}

.invoice-6 .invoice-top .invoice h1 {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 28px;
}

.invoice-6 .invoice-info {
    padding: 50px 150px 20px;
}

.invoice-6 .invoice-info p {
    margin-bottom: 0;
}

.invoice-6 .invoice-titel h3 {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 18px;
}

.invoice-6 .invoice2 {
    background: #fbf8f8;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
    padding: 20px 20px 20px 150px;
}

.invoice-6 .date {
    clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
    background: #fbf8f8;
    padding: 20px 150px 20px 20px;
}

.invoice-6 .invoice-titel .row {
    margin: 0;
}

.invoice-6 .order-summary {
    padding: 50px 150px;
}

.invoice-6 .order-summary .table {
    margin-bottom: 0;
}

.invoice-6 .table td, .invoice-6 .table th {
    padding: 13px 20px;
    vertical-align: top;
    border-top: 1px solid #e9ecef;
    border-right: 1px solid #e9ecef;
    text-align: center;
}

.invoice-6 .table > :not(caption) > * > * {
    box-shadow: none;
}

.invoice-6 .table tr, .invoice-6 .table tr strong {
    font-size: 15px;
    text-transform: initial !important;
}


.invoice-6 .invoice-informeshon {
    padding: 50px 150px;
    background: #fbf8f8;
}


.invoice-6 .text-muted {
    color: #535353 !important;
}

.invoice-6 .invoice-informeshon p {
    font-size: 13px;
    margin-bottom: 7px;
}

.invoice-6 .invoice-informeshon p strong {
    font-weight: 600;
}

.invoice-6 .invoice-footer {
    padding: 50px 150px;
}

.invoice-6 .social-list {
    float: left;
}

.invoice-6 .social-list span {
    margin-right: 5px;
    font-weight: 500;
    font-size: 16px;
    color: #171717;
}

.invoice-6 .social-list a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    font-size: 17px;
    margin: 0 2px 2px 0;
    color: #3dd5f3;
    background: #f1f1f1;
    border-radius: 50%;
}

.invoice-6 .social-list a:hover {
    background: #3dd5f3;
    color: #fff;
}

@media (max-width: 992px) {
    .invoice-6 .invoice-top {
        padding: 50px;
    }


    .invoice-6 .invoice-info {
        padding: 50px 50px 20px;
    }

    .invoice-6 .order-summary {
        padding: 50px;
    }

    .invoice-6 .invoice-informeshon {
        padding: 50px;
    }

    .invoice-6 .invoice-footer {
        padding: 50px;
    }

    .invoice-6 .invoice2 {
        padding: 20px 20px 20px 50px;
    }

    .invoice-6 .date {
        padding: 20px 50px 20px 20px;
    }
}

@media (max-width: 768px) {
    .invoice-6 .invoice-top {
        padding: 30px;
    }

    .invoice-6 .invoice-top .logo img {
        height: 20px;
    }

    .invoice-6 .invoice-top .invoice h1 {
        font-size: 24px;
    }

    .invoice-6 .invoice-titel {
        background: #fbf8f8;
    }

    .invoice-6 .invoice-info {
        padding: 30px 30px 0;
    }

    .invoice-informeshon .payment-info {
        margin-bottom: 30px;
    }


    .invoice-6 .social-list {
        margin-bottom: 20px;
    }

    .invoice-titel {
        padding: 30px;
    }

    .invoice-6 .order-summary {
        padding: 30px;
    }

    .invoice-6 .date {
        clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%);
        padding: 0;
    }

    .invoice-6 .invoice2 {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        padding: 0;
    }

    .invoice-6 .invoice2 h3 {
        margin-bottom: 5px;
    }

    .invoice-titel {
        background: #fbf8f8;
    }

    .invoice-6 .invoice-informeshon {
        padding: 30px;
    }

    .invoice-6 .invoice-footer {
        padding: 30px;
    }
}

@media (max-width: 768px) {
    .btn-lg {
        height: 45px;
        padding: 0 25px;
        line-height: 45px;
    }
}

@media (max-width: 600px) {
    .invoice-6 .invoice-top .invoice{
        float: left;
    }

    .invoice-6 .invoice-top .logo img {
        margin-bottom: 10px;
    }

    .invoice-content .important-notes-list-1 {
        margin-bottom: 25px;
    }

    .text-end {
        text-align: left !important;
    }

    .invoice-3 .invoice-name {
        margin-top: 20px;
        margin-bottom: 30px;
    }
}

/** Invoice 7 Start **/
.invoice-7 {
    padding: 50px 0;
    background: #fff6f6;
}

.invoice-7 .invoice-inner{
    max-width: 1296px;
    margin: 0 auto;
}

.invoice-7 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
}

.invoice-7 .item-desc-1 small{
    font-size: 13px;
}

.invoice-7 .invoice-info {
    background: #fff;
    margin-bottom: 30px;
    padding: 0;
    background: rgba(0, 0, 0, 0.04) url(../img/img-6.jpg) top left repeat;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-7 .invoice-headar {
    padding: 45px 70px 35px;
    border-bottom: solid 1px #e9e9e9;
}

.invoice-7 .table-striped > tbody > tr:nth-of-type(odd) {
    --bs-table-accent-bg: rgb(255 255 255 / 5%);
    color: var(--bs-table-striped-color);
}

.invoice-7 .invoice-top {
    padding: 35px 70px 20px;
    font-size: 15px;
}

.invoice-7 .invoice-top .float-end p {
    margin-bottom: 0;
}

.invoice-7 .invoice-center .table {
    margin-bottom: 0;
}

.invoice-7 .invoice-name img {
    height: 23px;
}

.invoice-7 .table-section {
    text-align: center;
}

.invoice-7 .inv-title-1 {
    font-weight: 600;
    font-size: 16px;
    color: #535353;
    opacity: 1;
}

.invoice-7 .invoice-center {
    padding: 0 70px 35px;
    border-bottom: solid 1px #e9e9e9;
}

.invoice-7 .invoice-info-buttom .table
.invoice-7 .invoice-info-buttom .table tr, .table tr {
    border: 1px solid #e9ecef;
    text-align: right;
}

.invoice-7 .table > :not(caption) > * > * {
    padding: 15px 20px;
}

.invoice-7 .table > :not(caption) > * > * {
    background-color: var(--bs-table-bg);
    border-bottom-width: 0;
}

.invoice-7 .table td, .invoice-1 .table th {
    vertical-align: middle;
    border: none !important;
}

.invoice-7 table th {
    font-size: 15px;
    color: #525252;
}

.invoice-7 .table td {
    font-size: 15px;
    font-weight: 400;
    color: #555;
}

.invoice-7 .caption-top {
    caption-side: top;
    text-align: right;
    margin-bottom: 0;
}

.invoice-7 .invoice-bottom {
    padding: 35px 70px 20px;
    border-bottom: solid 1px #e9e9e9;
}

.invoice-7 .bg-active {
    background: #f3f3f3;
    color: #535353 !important;
}

.invoice-7 .invoice-bottom .amount {
    text-align: right;
}

.invoice-7 .invoice-bottom h3 {
    margin-bottom: 15px;
}

.invoice-7 .invoice-contact {
    padding: 35px 70px;
}

.invoice-7 .social-list {
    float: left;
}

.invoice-7 .social-list span {
    margin-right: 5px;
    font-weight: 500;
    font-size: 16px;
}

.invoice-7 .invoice h1{
    color: #535353;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 0;
}

.invoice-7 .social-list a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    font-size: 17px;
    background: #fff6f6;
    margin: 0 2px 2px 0;
    color: #25cc7e;
    border-radius: 50%;
}

.invoice-7 .social-list a:hover{
    background: #25cc7e;
    color: #fff;
}
/** MEDIA **/
@media (max-width: 992px) {
    .invoice-7 .invoice-center {
        padding: 0 50px 30px;
    }

    .invoice-7 .invoice-bottom {
        padding: 30px 50px 15px;
    }

    .invoice-7 .payment-info {
        max-width: 100%;
        text-align: left;
        margin: 0 auto 0 0;
    }

    .invoice-7 .invoice-contact {
        padding: 30px 50px;
    }

    .invoice-7 .invoice-headar {
        padding: 30px 50px;
    }

    .invoice-7 .invoice-top {
        padding: 30px 50px 15px;
    }
}

@media (max-width: 768px) {
    .invoice-7 .invoice-headar {
        padding: 30px 30px 20px;
    }

    .invoice-7 .invoice-headar h1 {
        margin-bottom: 10px;
        font-size: 18px;
    }

    .invoice-7 .invoice-headar img {
        margin-bottom: 10px;
    }

    .invoice-7 .invoice-number {
        margin-bottom: 20px;
    }

    .invoice-7 .invoice-contact {
        padding: 30px;
    }

    .invoice-7 .invoice-top {
        padding: 30px 30px 15px;
    }

    .invoice-7 .invoice-center {
        padding: 0 30px 30px;
    }

    .invoice-7 .invoice-bottom {
        padding: 30px 30px 15px;
    }

    .invoice-7 .table > :not(caption) > * > * {
        padding: 15px 10px;
    }

    .invoice-7 .invoice-name {
        text-align: left;
        float: left;
    }

    .invoice-7 .invoice-bottom .amount {
        text-align: left;
    }

    .invoice-7 .bank-transfer {
        margin-bottom: 30px;
    }
}
/** Invoice 7 end **/

/** Invoice 8 start **/
.invoice-8 {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 47px 0 50px;
    background: #fff6f6;
    font-family: 'Poppins', sans-serif;
}

.invoice-8 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-8 .border-bottom {
    border-bottom: solid 1px #dee2e6 !important;
}

.invoice-8 .invoice-info {
    background: #fff;
    margin-bottom: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-8 .invoice-inner{
    max-width: 1296px;
    margin: 0 auto;
}

.invoice-8 .fw-bold {
    font-weight: 500!important;
}

.invoice-8 .invoice-header {
    padding: 70px 70px 0;
}

.invoice-8 .invoice-header h4 {
    margin-bottom: 20px;
    font-weight: 500;
}

.invoice-8 .table-section {
    padding: 70px 70px 40px;
}

.invoice-8 .table-section .table > :not(caption) > * > * {
    padding: 15px 20px;
}

.invoice-8 .invoice-header-inner {
    margin: 0;
    border: solid 1px #e9ecef;
}

.invoice-8 .table {
    margin-bottom: 0;
}

.invoice-8 .sub-banner {
    margin: 0;
    font-size: 15px;
}

.invoice-8 .bg-active {
    color: #535353;
}

.invoice-8 strong {
    font-weight: 600;
}

.invoice-8 .address-info .strong {
    font-weight: 500;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: #535353;
    border-bottom: solid 1px #e9ecef;
}

.invoice-8 .border-r {
    border-right: solid 1px #e9ecef;
}

.invoice-8 .address-info .col-pad {
    padding: 0;
}

.invoice-8 .address-info {
    padding: 20px 30px 30px;
}

.invoice-8 .address-info p {
    margin-bottom: 0;
    font-size: 15px;
}

.invoice-8 p {
    font-size: 16px;
    line-height: 27px;
}

.invoice-8 .item-desc-1 small {
    font-size: 13px;
    color: #535353;
}

.invoice-8 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-8 .payment-info p {
    font-size: 13px;
    line-height: normal;
}

.invoice-8 .order {
    text-align: right;
    font-size: 22px;
}

.invoice-8 .logo {
    text-align: center;
}

.invoice-8 .logo img {
    height: 40px;
    margin-bottom: 30px;
}

.invoice-8 .mb-30 {
    margin-bottom: 30px;
}

.invoice-8 .name {
    font-size: 22px;
}

.invoice-8 .strong {
    font-weight: 600;
}

.invoice-8 .btn-active {
    background: #ff214f;
    color: #fff;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-8 .invoice-header {
        padding: 50px 50px 0;
    }

    .invoice-8 .address-info {
        padding: 20px 15px 20px;
    }

    .invoice-8 .table-section {
        padding: 50px 50px 20px;
    }

    .invoice-8 .border-r {
        border-right: solid 1px #fbfbfb45;
        border-bottom: solid 1px #fbfbfb45;
    }

    .invoice-8 .br2 {
        border-bottom: none;
    }

    .invoice-8 .br3 {
        border-right: none;
    }
}

@media (max-width: 768px) {
    .invoice-8 .address-info.text-right {
        text-align: left !important;
    }

    .invoice-8 .invoice-header {
        padding: 30px 30px 0;
    }

    .invoice-8 .table-section {
        padding: 30px 30px 0;
    }

    .invoice-8 .ts-2{
        padding-top: 0;
    }

    .invoice-8 .address-info {
        padding: 0;
    }

    .invoice-8 .border-r {
        border-right: none;
        border-bottom: none;
    }

    .invoice-8 .invoice-header-inner {
        border: none;
    }

    .invoice-8 .invoice-header .name {
        margin-bottom: 10px;
    }

    .invoice-8 .address-info {
        margin-bottom: 30px;
    }

    .invoice-8 .invoice-info {
        margin: 0 auto 30px;
        padding: 0;
        box-shadow: none;
    }

    .invoice-8 .order {
        text-align: left;
    }

    .invoice-8 .invoice-name {
        margin-bottom: 0 !important;
    }
}
/** Invoice 8 end **/

/** Invoice 9 start **/
.invoice-9 {
    background: #fff;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 47px 0 50px;
    font-family: 'Poppins', sans-serif;
}

.invoice-9 .invoice-inner-9 {
    background: #fff;
    max-width: 1296px;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.invoice-9 .invoice-info p {
    margin-bottom: 5px;
}

.invoice-9 .fw-bold {
    font-weight: 500!important;
}

.invoice-9 .invo-addr-1 {
    margin-bottom: 0;
}

.invoice-9 .default-table {
    position: relative;
    background: #ffffff;
    border: 0;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    min-width: 550px;
}

.invoice-9 .default-table thead {
    background: #F5F7FC;
    border-radius: 8px;
    color: #ffffff;
}

.invoice-9 .mb-50{
    margin-bottom: 50px;
}

.invoice-9 .table-outer {
    overflow-y: hidden;
    overflow-x: auto;
}

.invoice-9 .default-table thead th {
    position: relative;
    padding: 20px 30px;
    font-size: 16px;
    color: #25cc7e;
    font-weight: 500;
    line-height: 30px;
    white-space: nowrap;
}

.invoice-9 .default-table tbody tr {
    position: relative;
    border-bottom: 1px solid #ECEDF2;
}

.invoice-9 .default-table tr td {
    position: relative;
    padding: 21px 30px;
    font-size: 14px;
    color: #535353;
    font-weight: 400;
}

.invoice-9 .mb-30 {
    margin-bottom: 30px;
}

.invoice-9 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-9 .invoice-top .logo img {
    height: 25px;
}

.invoice-9 .invoice-top {
    padding: 100px 150px 50px;
}

.invoice-9 .invoice-top .invoice {
    float: right;
}

.invoice-9 .invoice-top .invoice h1 {
    font-weight: 600;
    margin-bottom: 0;
    color: #25cc7e;
    font-size: 22px;
}

.invoice-9 .invoice-info {
    padding: 0 150px 50px;
}

.invoice-9 .invoice-info .inv-from-2 {
    margin-bottom: 0;
    font-weight: 400;
}

.invoice-9 .order-summary{
    padding: 0 150px 100px;
}

.invoice-9 .invoice-informeshon-footer{
    position: relative;
    padding: 50px 180px 40px;
    border-top: 1px solid #ECEDF2;
}

.invoice-9 .invoice-informeshon-footer ul {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    marker: none;
    padding: 0;
    margin: 0;
    list-style: none;
}

.invoice-9 .invoice-informeshon-footer ul li {
    position: relative;
    margin: 0 30px 10px;
    font-size: 15px;
    marker: none;
    line-height: 20px;
}

.invoice-9 .invoice-informeshon-footer li a{
    color: #535353;
}

.invoice-9 .text-muted {
    color: #535353 !important;
}

.invoice-9 .invoice-footer {
    padding: 50px 150px;
}

.invoice-9 .social-list {
    float: left;
}

.invoice-9 .social-list span {
    margin-right: 5px;
    font-weight: 500;
    font-size: 16px;
    color: #171717;
}

.invoice-9 .social-list a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    font-size: 17px;
    margin: 0 2px 2px 0;
    color: #3dd5f3;
    background: #f1f1f1;
    border-radius: 50%;
}

.invoice-9 .social-list a:hover {
    background: #3dd5f3;
    color: #fff;
}

@media (max-width: 992px) {
    .invoice-9 .invoice-top {
        padding: 50px;
    }

    .invoice-9 .invoice-info {
        padding: 0px 50px;
    }

    .invoice-9 .order-summary {
        padding: 0 50px 50px;
    }

    .invoice-9 .invoice-footer {
        padding: 50px;
    }

    .invoice-9 .invoice-informeshon-footer {
        padding: 50px 50px 40px;
    }

    .invoice-9 .invoice-informeshon-footer ul li {
        margin: 0 10px 10px;
    }
}

@media (max-width: 768px) {
    .invoice-9 .invoice-top {
        padding: 30px;
    }

    .invoice-9 .invoice-top .logo img {
        height: 20px;
    }

    .invoice-9 .invoice-top .invoice h1 {
        font-size: 24px;
    }

    .invoice-9 .invoice-info {
        padding: 0px 30px 0;
    }

    .invoice-9 .mb-50 {
        margin-bottom: 30px;
    }

    .invoice-9 .social-list {
        margin-bottom: 20px;
    }

    .invoice-titel {
        padding: 30px;
    }

    .invoice-9 .order-summary {
        padding: 0 30px 30px;
    }

    .invoice-9 .invoice-informeshon-footer {
        padding: 30px 20px 20px;
    }

    .invoice-9 .invoice-titel {
        background: #fbf8f8;
    }

    .invoice-9 .invoice-footer {
        padding: 30px;
    }

    .btn-lg {
        height: 45px;
        padding: 0 25px;
        line-height: 45px;
    }
}

@media (max-width: 600px) {
    .invoice-9 .invoice-top .invoice{
        float: left;
    }

    .invoice-9 .invoice-informeshon-footer ul{
        display: initial;
    }

    .invoice-9 .invoice-top .logo img {
        margin-bottom: 10px;
    }

    .invoice-content .important-notes-list-1 {
        margin-bottom: 25px;
    }

    .text-end {
        text-align: left !important;
    }

    .invoice-3 .invoice-name {
        margin-top: 20px;
        margin-bottom: 30px;
    }
}

/** Print **/
@media print {
    .col-sm-12 {
        width: 100%;
    }

    .col-sm-11 {
        width: 91.66666667%;
    }

    .col-sm-10 {
        width: 83.33333333%;
    }

    .col-sm-9 {
        width: 75%;
    }

    .col-sm-8 {
        width: 66.66666667%;
    }

    .col-sm-7 {
        width: 58.33333333%;
    }

    .col-sm-6 {
        width: 50%;
    }

    .col-sm-5 {
        width: 41.66666667%;
    }

    .col-sm-4 {
        width: 33.33333333%;
    }

    .col-sm-3 {
        width: 25%;
    }

    .col-sm-2 {
        width: 16.66666667%;
    }

    .col-sm-1 {
        width: 8.33333333%;
    }

    .text-end {
        text-align: right !important;
    }

    .invoice-1 {
        padding: 0;
        background: #fff;
    }

    .invoice-1 .invoice-inner {
        background: #f8f8f8;
    }

    .invoice-1 .container {
        padding: 0px;
    }

    .invoice-1 .invoice-info {
        box-shadow: none;
        margin: 0px;
    }

    .invoice-2 {
        padding: 0px;
        background: transparent;
    }

    .invoice-2 .container {
        padding: 0px;
    }

    .invoice-3 {
        padding: 0px;
        background: transparent;
    }

    .invoice-3 .container {
        padding: 0px;
    }

    .invoice-4 {
        padding: 0px;
        background: transparent;
    }

    .invoice-4 .container {
        padding: 0px;
    }

    .invoice-5 {
        padding: 0px;
        background: transparent;
    }

    .invoice-5 .container {
        padding: 0px;
    }

    .invoice-6 {
        padding: 0px;
        background: transparent;
    }

    .invoice-6 .container {
        padding: 0px;
    }
}









        </style>

</head>
<body>

<!-- Invoice 3 start -->
<div class="invoice-3 invoice-content">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="invoice-inner">
                    <div class="invoice-info" id="invoice_wrapper">
                        <div class="invoice-top">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="invoice">
                                        <h4 class="inv-header-1 color-white">Invoice: #943249</h4>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="invoice-name text-end">
                                        <div class="logo">
                                            <img class="logo" src="assets/img/logo.png" alt="logo">
                                        </div>
                                        <p>Cecilia Chapman, 711-2880 Nulla St, Mankato</p>
                                        <p class="mb-0">Mississippi 96522</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="informeshon">
                                        <p class="inv-title-1">Date</p>
                                        <p>Invoice Data: Aug 27, 2020</p>
                                        <p>Due Data: Aug 27, 2020</p>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="informeshon">
                                        <p class="inv-title-1">Invoice To.</p>
                                        <p class="invo-addr-1">
                                            Theme Vessel <br/>
                                            info@themevessel.com <br/>
                                            21-12 Green Street, Meherpur, Bangladesh <br/>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="informeshon text-end">
                                        <p class="inv-title-1">Bill To.</p>
                                        <p class="invo-addr-1">
                                            Apexo Inc  <br/>
                                            billing@apexo.com <br/>
                                            169 Teroghoria, Bangladesh <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-center">
                            <div class="table-section table-responsive clearfix">
                                <table class="table caption-top invoice-table">
                                    <thead class="bg-active">
                                    <tr>
                                        <th>Item Item</th>
                                        <th class="text-center">Price</th>
                                        <th class="text-center">Quantity</th>
                                        <th class="text-right">Totals</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div class="item-desc-1">
                                                <span>BS-200</span>
                                                <small>Customize web application</small>
                                            </div>
                                        </td>
                                        <td class="text-center">$10.99</td>
                                        <td class="text-center">1</td>
                                        <td class="text-right">$10.99</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="item-desc-1">
                                                <span>BS-201</span>
                                                <small>Website development and customization for themevessel</small>
                                            </div>
                                        </td>
                                        <td class="text-center">$20.00</td>
                                        <td class="text-center">3</td>
                                        <td class="text-right">$60.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="item-desc-1">
                                                <span>BS-233</span>
                                                <small>Website SEO improvement of themevessel.com</small>
                                            </div>
                                        </td>
                                        <td class="text-center">$640.00</td>
                                        <td class="text-center">1</td>
                                        <td class="text-right">$640.00</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-end">SubTotal</td>
                                        <td class="text-right">$710.99</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-end">Tax</td>
                                        <td class="text-right">$85.99</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-end fw-bold">Grand Total</td>
                                        <td class="text-right fw-bold">$795.99</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="invoice-bottom">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="bank-transfer">
                                        <h3 class="inv-title-1">Bank Transfer</h3>
                                        <ul class="bank-transfer-list-1">
                                            <li><strong>Account Name:</strong>Syamsuddin</li>
                                            <li><strong>Account Number:</strong>1234567890934</li>
                                            <li><strong>Code:</strong>BARC0032UK</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="amount text-end">
                                        <h3 class="inv-title-1">Total Amount</h3>
                                        <h1>$795.99</h1>
                                        <p class="mb-0">Taxes Included</p>
                                    </div>
                                </div>
                            </div>
                            <div class="note mt-3">
                                <p class="text-muted">We really appreciate your business and if there's anything else we can do, please let us know! Also, should you need us to add VAT or anything else to this order!</p>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-btn-section clearfix d-print-none">
                        <a href="javascript:window.print()" class="btn btn-lg btn-print">
                            <i class="fa fa-print"></i> Print Invoice
                        </a>
                        <a id="invoice_download_btn" class="btn btn-lg btn-download">
                            <i class="fa fa-download"></i> Download Invoice
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Invoice 3 end -->

<script src="/assets/pdf/assets/js/jquery.min.js"></script>
<script src="/assets/pdf/assets/js/jspdf.min.js"></script>
<script src="/assets/pdf/assets/js/html2canvas.js"></script>
<script src="/assets/pdf/assets/js/app.js"></script>
</body>
</html>
