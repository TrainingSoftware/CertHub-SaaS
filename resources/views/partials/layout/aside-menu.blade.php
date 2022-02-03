<div id="kt_aside" class="aside py-9" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
    <div class="aside-menu flex-column-fluid ps-5 pe-3 mb-7" id="kt_aside_menu">
        <div class="w-100 hover-scroll-overlay-y d-flex pe-2" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_footer, #kt_header" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset="102">
            <div class="menu menu-column menu-rounded fw-bold" id="#kt_aside_menu" data-kt-menu="true">
                <div class="menu-item {{ (request()->is('home')) ? 'hover show' : '' }}">
                    <a class="menu-link" href="/home">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Dashboard</span>
                    </a>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-accordion {{ (request()->is('employees*')) ? 'hover show' : '' }}">
                    <span class="menu-link">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Employees</span>
                        <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion {{ (request()->is('employees*')) ? 'show' : '' }}">
                        <div class="menu-item">
                            <a class="menu-link" href="/employees">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">View All</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link" href="/employees/create">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Create New</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link" href="/departments">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Departments</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-accordion {{ (request()->is('qualification*')) ? 'hover show' : '' }} ">
                    <span class="menu-link">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Qualifications</span>
                        <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion {{ (request()->is('qualifications*')) ? 'show' : '' }}">
                        <div class="menu-item">
                            <a class="menu-link" href="/qualifications">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">View All</span>
                            </a>
                        </div>
                        @if(Auth::user()->companies()->first()->qualifications()->count() != 0)
                        <div class="menu-item">
                            <a class="menu-link" href="/qualifications/create">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Create New</span>
                            </a>
                        </div>
                        @endif
                        <div class="menu-item">
                            <a class="menu-link" href="/qualificationtypes">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Qualification Types</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-accordion {{ (request()->is('tenders*')) ? 'hover show' : '' }} ">
                    <span class="menu-link">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Tenders</span>
                        <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion {{ (request()->is('tenders*')) ? 'show' : '' }}">
                        <div class="menu-item">
                            <a class="menu-link" href="/tenders">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">View All</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link" href="/tenders/create">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Create New</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-accordion {{ (request()->is('training*')) ? 'hover show' : '' }}">
                    <span class="menu-link">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Training</span>
                        <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion {{ (request()->is('training*')) ? 'show' : '' }}">
                        <div class="menu-item">
                            <a class="menu-link" href="https://certhub.co/cpd-courses" target="_blank">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">CPD</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link" href="https://certhub.co/courses" target="_blank">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Commercial</span>
                            </a>
                        </div>
                        <div class="menu-item d-none">
                            <a class="menu-link" href="/training/nvqs" target="_blank">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">NVQs</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="menu-item {{ (request()->is('providers')) ? 'hover show' : '' }}">
                    <a class="menu-link" href="/providers">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Providers</span>
                    </a>
                </div>
                <div class="menu-item {{ (request()->is('reports')) ? 'hover show' : '' }}">
                    <a class="menu-link" href="/reports">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Reports</span>
                    </a>
                </div>
                <div data-kt-menu-trigger="click" class="menu-item menu-accordion {{ (request()->is('settings*')) ? 'hover show' : '' }}">
                    <span class="menu-link">
                        <span class="menu-icon">
                            <span class="svg-icon svg-icon-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black" />
                                    <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black" />
                                </svg>
                            </span>
                        </span>
                        <span class="menu-title">Settings</span>
                        <span class="menu-arrow"></span>
                    </span>
                    <div class="menu-sub menu-sub-accordion {{ (request()->is('settings*')) ? 'show' : '' }}">
                        <div class="menu-item">
                            <a class="menu-link" href="/settings/users">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Users</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link" href="/settings/personal-access-tokens">
                            <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">API</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="aside-footer flex-column-auto px-9" id="kt_aside_menu">
        <div class="d-flex flex-stack">
            <div class="d-flex align-items-center">
                <div class="symbol symbol-circle symbol-40px">
                    <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ Auth::user()->name[0] }}</span>
                </div>
                <div class="ms-2">
                    <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bolder lh-1">{{ Auth::user()->name }}</a>
                    <span class="text-muted fw-bold d-block fs-7 lh-1">{{ Auth::user()->companies()->first()->name }}</span>
                </div>
            </div>
            <div class="ms-1">
                <div class="btn btn-sm btn-icon btn-active-color-primary position-relative me-n2" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-end">
                    <span class="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="black" />
                            <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="black" />
                        </svg>
                    </span>
                </div>
                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                    <div class="menu-item px-3">
                        <div class="menu-content d-flex align-items-center px-3">
                            <div class="symbol symbol-50px me-5">
                                <img alt="Logo" src="/assets/media/avatars/blank.png" />
                            </div>
                            <div class="d-flex flex-column">
                                <div class="fw-bolder d-flex align-items-center fs-5">{{ Auth::user()->name }}</div>
                                <a href="#" class="fw-bold text-muted text-hover-primary fs-7">{{ Auth::user()->email }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item px-5 my-1">
                        <a href="/company" class="menu-link px-5">Company Details</a>
                    </div>
                    <div class="menu-item px-5 my-1">
                        <a href="/billing-portal" class="menu-link px-5">Billing</a>
                    </div>
                    <div class="separator my-2"></div>
                    <div class="menu-item px-10">
                        <form action="/logout" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-link bg-transparent menu-link px-5">Sign Out</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>