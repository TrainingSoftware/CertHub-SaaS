/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/file-manager/list.js ***!
  \************************************************************************************/


// Class definition
var KTFileManagerList = function () {
    // Define shared variables
    var datatable;
    var table

    // Private functions
    var initDatatable = function () {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const dateCol = dateRow[3]; // select date from 4th column in table
            const realDate = moment(dateCol.innerHTML, "DD MMM YYYY, LT").format();
            dateCol.setAttribute('data-order', realDate);
        });

        const foldersListOptions = {
            "info": false,
            'order': [],
            "scrollY": "700px",
            "scrollCollapse": true,
            "paging": false,
            'ordering': false,
            'columns': [
                { data: 'checkbox' },
                { data: 'name' },
                { data: 'size' },
                { data: 'date' },
                { data: 'action' },
            ],
            'language': {
                emptyTable: `<div class="d-flex flex-column flex-center">
                    <img src="assets/media/illustrations/sketchy-1/5.png" class="mw-400px" />
                    <div class="fs-1 fw-bolder text-dark">No items found.</div>
                    <div class="fs-6">Start creating new folders or uploading a new file!</div>
                </div>`
            }
        };

        const filesListOptions = {
            "info": false,
            'order': [],
            'pageLength': 10,
            "lengthChange": false,
            'ordering': false,
            'columns': [
                { data: 'checkbox' },
                { data: 'name' },
                { data: 'size' },
                { data: 'date' },
                { data: 'action' },
            ],
            'language': {
                emptyTable: `<div class="d-flex flex-column flex-center">
                    <img src="assets/media/illustrations/sketchy-1/5.png" class="mw-400px" />
                    <div class="fs-1 fw-bolder text-dark mb-4">No items found.</div>
                    <div class="fs-6">Start creating new folders or uploading a new file!</div>
                </div>`
            },
            conditionalPaging: true
        };

        // Define datatable options to load
        var loadOptions;
        if(table.getAttribute('data-kt-filemanager-table') === 'folders'){
            loadOptions = foldersListOptions;
        } else {
            loadOptions = filesListOptions;
        }        

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable(loadOptions);

        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
        datatable.on('draw', function () {
            initToggleToolbar();
            handleDeleteRows();
            toggleToolbars();
            resetNewFolder();
            KTMenu.createInstances();
            initCopyLink();
            countTotalItems();
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-filemanager-table-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }

    // Delete customer
    var handleDeleteRows = () => {
        // Select all delete buttons
        const deleteButtons = table.querySelectorAll('[data-kt-filemanager-table-filter="delete_row"]');

        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function (e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get customer name
                const fileName = parent.querySelectorAll('td')[1].innerText;

                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "Are you sure you want to delete " + fileName + "?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, delete!",
                    cancelButtonText: "No, cancel",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton: "btn fw-bold btn-active-light-primary"
                    }
                }).then(function (result) {
                    if (result.value) {
                        Swal.fire({
                            text: "You have deleted " + fileName + "!.",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        }).then(function () {
                            // Remove current row
                            datatable.row($(parent)).remove().draw();
                        });
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: customerName + " was not deleted.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        });
                    }
                });
            })
        });
    }

    // Init toggle toolbar
    var initToggleToolbar = () => {
        // Toggle selected action toolbar
        // Select all checkboxes
        var checkboxes = table.querySelectorAll('[type="checkbox"]');
        if(table.getAttribute('data-kt-filemanager-table') === 'folders'){
            checkboxes =  document.querySelectorAll('#kt_file_manager_list_wrapper [type="checkbox"]');
        }

        // Select elements
        const deleteSelected = document.querySelector('[data-kt-filemanager-table-select="delete_selected"]');

        // Toggle delete selected toolbar
        checkboxes.forEach(c => {
            // Checkbox on click event
            c.addEventListener('click', function () {
                console.log(c);
                setTimeout(function () {
                    toggleToolbars();
                }, 50);
            });
        });

        // Deleted selected rows
        deleteSelected.addEventListener('click', function () {
            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "Are you sure you want to delete selected files or folders?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, delete!",
                cancelButtonText: "No, cancel",
                customClass: {
                    confirmButton: "btn fw-bold btn-danger",
                    cancelButton: "btn fw-bold btn-active-light-primary"
                }
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                        text: "You have deleted all selected  files or folders!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    }).then(function () {
                        // Remove all selected customers
                        checkboxes.forEach(c => {
                            if (c.checked) {
                                datatable.row($(c.closest('tbody tr'))).remove().draw();
                            }
                        });

                        // Remove header checked box
                        const headerCheckbox = table.querySelectorAll('[type="checkbox"]')[0];
                        headerCheckbox.checked = false;
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Selected  files or folders was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Toggle toolbars
    const toggleToolbars = () => {
        // Define variables
        const toolbarBase = document.querySelector('[data-kt-filemanager-table-toolbar="base"]');
        const toolbarSelected = document.querySelector('[data-kt-filemanager-table-toolbar="selected"]');
        const selectedCount = document.querySelector('[data-kt-filemanager-table-select="selected_count"]');

        // Select refreshed checkbox DOM elements 
        const allCheckboxes = table.querySelectorAll('tbody [type="checkbox"]');

        // Detect checkboxes state & count
        let checkedState = false;
        let count = 0;

        // Count checked boxes
        allCheckboxes.forEach(c => {
            if (c.checked) {
                checkedState = true;
                count++;
            }
        });

        // Toggle toolbars
        if (checkedState) {
            selectedCount.innerHTML = count;
            toolbarBase.classList.add('d-none');
            toolbarSelected.classList.remove('d-none');
        } else {
            toolbarBase.classList.remove('d-none');
            toolbarSelected.classList.add('d-none');
        }
    }

    // Handle new folder
    const handleNewFolder = () => {
        // Select button
        const newFolder = document.getElementById('kt_file_manager_new_folder');

        // Handle click action
        newFolder.addEventListener('click', e => {
            e.preventDefault();

            // Ignore if input already exist
            if (table.querySelector('#kt_file_manager_new_folder_row')) {
                return;
            }

            // Create new row elements
            const rowElement = document.createElement('tr');
            const rowWrapper = document.createElement('div');
            const rowCol1 = document.createElement('td'); // Checkbox column
            const rowCol2 = document.createElement('td'); // Name column
            const rowCol3 = document.createElement('td'); // Size column
            const rowCol4 = document.createElement('td'); // Date column
            const rowCol5 = document.createElement('td'); // Action column
            const rowInput = document.createElement('input');
            const rowButton = document.createElement('button');
            const cancelButton = document.createElement('button');
            const folderIcon = document.createElement('span');

            // Set folder icon
            const folderIconClasses = ['svg-icon', 'svg-icon-2x', 'svg-icon-primary', 'me-4'];
            const folderUploadIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path opacity="0.3" d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z" fill="black"></path> <path d="M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z" fill="black"></path> </svg>`;
            folderIcon.classList.add(...folderIconClasses);
            folderIcon.innerHTML = folderUploadIcon;

            // Set general row attributes
            rowElement.setAttribute('id', 'kt_file_manager_new_folder_row');
            rowCol2.classList.add('fv-row');
            const rowWrapperClasses = ['d-flex', 'align-items-center'];
            rowWrapper.classList.add(...rowWrapperClasses);

            // Set input element attributes
            const inputClasses = ['form-control', 'mw-250px', 'me-3'];
            rowInput.setAttribute('type', 'text');
            rowInput.setAttribute('name', 'new_folder_name')
            rowInput.setAttribute('placeholder', 'Enter the folder name');
            rowInput.classList.add(...inputClasses);

            // Set button element attributes
            const rowButtonClasses = ['btn', 'btn-icon', 'btn-light-primary', 'me-3'];
            const buttonIcon = `<span class="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z" fill="black"></path>
                </svg>
            </span>`;
            const buttonIndicatorLabel = document.createElement('span');
            buttonIndicatorLabel.classList.add('indicator-label');
            buttonIndicatorLabel.innerHTML = buttonIcon;
            const buttonIndicatorProgress = document.createElement('span');
            const spinnerIcon = document.createElement('span');
            const spinnerClasses = ['spinner-border', 'spinner-border-sm', 'align-middle'];
            spinnerIcon.classList.add(...spinnerClasses);
            buttonIndicatorProgress.classList.add('indicator-progress');
            buttonIndicatorProgress.appendChild(spinnerIcon);
            rowButton.appendChild(buttonIndicatorLabel);
            rowButton.appendChild(buttonIndicatorProgress);
            rowButton.classList.add(...rowButtonClasses);
            rowButton.setAttribute('id', 'kt_file_manager_add_folder');

            // Set cancel button element attributes
            const cancelButtonClasses = ['btn', 'btn-icon', 'btn-light-danger'];
            const cancelIcon = `<span class="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="7.05025" y="15.5356" width="12" height="2" rx="1" transform="rotate(-45 7.05025 15.5356)" fill="black"/>
                    <rect x="8.46447" y="7.05029" width="12" height="2" rx="1" transform="rotate(45 8.46447 7.05029)" fill="black"/>
                </svg>
            </span>`;
            const cancelIndicator = buttonIndicatorLabel.cloneNode(true);
            cancelIndicator.innerHTML = cancelIcon;
            const cancelSpinner = buttonIndicatorProgress.cloneNode(true);
            cancelButton.append(cancelIndicator);
            cancelButton.append(cancelSpinner);
            cancelButton.classList.add(...cancelButtonClasses);
            cancelButton.setAttribute('id', 'kt_file_manager_cancel_folder');

            // Append elements into row
            rowWrapper.append(folderIcon);
            rowWrapper.append(rowInput);
            rowWrapper.append(rowButton);
            rowWrapper.append(cancelButton);
            rowCol2.append(rowWrapper);
            rowElement.append(rowCol1);
            rowElement.append(rowCol2);
            rowElement.append(rowCol3);
            rowElement.append(rowCol4);
            rowElement.append(rowCol5);

            // Add new blank row to datatable
            const tableBody = table.querySelector('tbody');
            tableBody.prepend(rowElement);

            // Define validator
            // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
            var validator = FormValidation.formValidation(
                rowCol2,
                {
                    fields: {
                        'new_folder_name': {
                            validators: {
                                notEmpty: {
                                    message: 'Folder name is required'
                                }
                            }
                        },
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: '.fv-row',
                            eleInvalidClass: '',
                            eleValidClass: ''
                        })
                    }
                }
            );

            // Handle add new folder button
            rowButton.addEventListener('click', e => {
                e.preventDefault();

                // Activate indicator
                rowButton.setAttribute("data-kt-indicator", "on");

                // Validate form before submit
                if (validator) {
                    validator.validate().then(function (status) {
                        console.log('validated!');

                        if (status == 'Valid') {
                            // Simulate process for demo only
                            setTimeout(function () {
                                // Duplicate checkbox and action dropdown
                                const action = `<div class="d-flex justify-content-end">                            
                                    <!--begin::Share link-->
                                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                                        <button type="button" class="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <span class="svg-icon svg-icon-5 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z" fill="black"></path>
                                                    <path d="M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <!--begin::Menu-->
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px" data-kt-menu="true">
                                            <!--begin::Card-->
                                            <div class="card card-flush">
                                                <div class="card-body p-5">
                                                    <!--begin::Loader-->
                                                    <div class="d-flex" data-kt-filemanger-table="copy_link_generator">
                                                        <!--begin::Spinner-->
                                                        <div class="me-5" data-kt-indicator="on">
                                                            <span class="indicator-progress">
                                                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                            </span>
                                                        </div>
                                                        <!--end::Spinner-->

                                                        <!--begin::Label-->
                                                        <div class="fs-6 text-dark">Generating Share Link...</div>
                                                        <!--end::Label-->
                                                    </div>
                                                    <!--end::Loader-->

                                                    <!--begin::Link-->
                                                    <div class="d-flex flex-column text-start d-none" data-kt-filemanger-table="copy_link_result">
                                                        <div class="d-flex mb-5">
                                                            <?php echo Theme::getSvgIcon('icons/duotune/arrows/arr084.svg', "svg-icon-1 svg-icon-success me-3") ?>
                                                            <div class="fs-6 text-dark">Share Link Generated</div>
                                                        </div>
                                                        <input type="text" class="form-control form-control-sm" value="https://path/to/file/or/folder/" />
                                                        <div class="text-muted fw-normal fs-8 px-3">Read only. <a href="<?php echo Theme::getPageUrl('apps/file-manager/settings/') ?>">Change permissions</a></div>
                                                    </div>
                                                    <!--end::Link-->
                                                </div>
                                            </div>
                                            <!--end::Card-->
                                        </div>
                                        <!--end::Menu-->
                                        <!--end::Share link-->
                                    </div>
                            
                                    <!--begin::More-->
                                    <div class="ms-2">
                                        <button type="button" class="btn btn-sm btn-icon btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <span class="svg-icon svg-icon-5 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="10" y="10" width="4" height="4" rx="2" fill="black"></rect>
                                                    <rect x="17" y="10" width="4" height="4" rx="2" fill="black"></rect>
                                                    <rect x="3" y="10" width="4" height="4" rx="2" fill="black"></rect>
                                                </svg>
                                            </span>
                                        </button>
                                        <!--begin::Menu-->
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4" data-kt-menu="true">
                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="<?php echo Theme::getPageUrl('apps/file-manager/files') ?>" class="menu-link px-3">
                                                    View
                                                </a>
                                            </div>
                                            <!--end::Menu item-->

                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3" data-kt-filemanager-table="rename">
                                                    Rename
                                                </a>
                                            </div>
                                            <!--end::Menu item-->

                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3">
                                                    Download Folder
                                                </a>
                                            </div>
                                            <!--end::Menu item-->

                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3" data-kt-filemanager-table-filter="move_row" data-bs-toggle="modal" data-bs-target="#kt_modal_move_to_folder">
                                                    Move to folder
                                                </a>
                                            </div>
                                            <!--end::Menu item-->

                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link text-danger px-3" data-kt-filemanager-table-filter="delete_row">
                                                    Delete
                                                </a>
                                            </div>
                                            <!--end::Menu item-->
                                        </div>
                                        <!--end::Menu-->
                                        <!--end::More-->
                                    </div>
                                </div>`;
                                const checkbox = `<div class="form-check form-check-sm form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" /></div>`;

                                // Create folder link
                                const folderLink = document.createElement('a');
                                const folderLinkClasses = ['text-gray-800', 'text-hover-primary'];
                                folderLink.setAttribute('href', '?page=apps/file-manager/blank');
                                folderLink.classList.add(...folderLinkClasses);
                                folderLink.innerText = rowInput.value;

                                const newRow = datatable.row.add({
                                    'checkbox': checkbox,
                                    'name': folderIcon.outerHTML + folderLink.outerHTML,
                                    "size": '-',
                                    "date": '-',
                                    'action': action
                                }).node();
                                $(newRow).find('td').eq(4).attr('data-kt-filemanager-table', 'action_dropdown');
                                $(newRow).find('td').eq(4).addClass('text-end'); // Add custom class to last 'td' element --- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class

                                // Re-sort datatable to allow new folder added at the top
                                var index = datatable.row(0).index(),
                                    rowCount = datatable.data().length - 1,
                                    insertedRow = datatable.row(rowCount).data(),
                                    tempRow;

                                for (var i = rowCount; i > index; i--) {
                                    tempRow = datatable.row(i - 1).data();
                                    datatable.row(i).data(tempRow);
                                    datatable.row(i - 1).data(insertedRow);
                                }

                                toastr.options = {
                                    "closeButton": true,
                                    "debug": false,
                                    "newestOnTop": false,
                                    "progressBar": false,
                                    "positionClass": "toast-top-right",
                                    "preventDuplicates": false,
                                    "showDuration": "300",
                                    "hideDuration": "1000",
                                    "timeOut": "5000",
                                    "extendedTimeOut": "1000",
                                    "showEasing": "swing",
                                    "hideEasing": "linear",
                                    "showMethod": "fadeIn",
                                    "hideMethod": "fadeOut"
                                };

                                toastr.success(rowInput.value + ' was created!');

                                // Disable indicator
                                rowButton.removeAttribute("data-kt-indicator");

                                datatable.draw(false);

                            }, 2000);
                        } else {
                            // Disable indicator
                            rowButton.removeAttribute("data-kt-indicator");
                        }
                    });
                }
            });

            // Handle cancel new folder button
            cancelButton.addEventListener('click', e => {
                e.preventDefault();

                // Activate indicator
                cancelButton.setAttribute("data-kt-indicator", "on");

                setTimeout(function(){
                    // Disable indicator
                    cancelButton.removeAttribute("data-kt-indicator");

                    // Toggle toastr
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-top-right",
                        "preventDuplicates": false,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };

                    toastr.error('Cancelled new folder creation');
                    resetNewFolder();
                },1000);
            });
        });
    }

    // Reset add new folder input
    const resetNewFolder = () => {
        const newFolderRow = table.querySelector('#kt_file_manager_new_folder_row');

        if (newFolderRow) {
            newFolderRow.parentNode.removeChild(newFolderRow);
        }
    }

    // Handle rename file or folder
    const handleRename = () => {
        const renameButton = table.querySelectorAll('[data-kt-filemanager-table="rename"]');
        let nameValue;

        renameButton.forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get name column
                const nameCol = parent.querySelectorAll('td')[1];
                const colIcon = nameCol.querySelector('.svg-icon');
                nameValue = nameCol.innerText;

                // Set rename input template
                const renameInput = `<div class="fv-row"><div class="d-flex align-items-center">
                    ${colIcon.outerHTML}
                    <input type="text" id="kt_file_manager_rename_input" name="rename_folder_name" placeholder="Enter the new folder name" class="form-control mw-250px me-3" value="${nameValue}" />
                    <button class="btn btn-icon btn-light-primary me-3" id="kt_file_manager_rename_folder">
                        <span class="svg-icon svg-icon-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z" fill="black"/>
                            </svg>
                        </span>
                    </button>
                    <button class="btn btn-icon btn-light-danger" id="kt_file_manager_rename_folder_cancel">
                        <span class="indicator-label">
                            <span class="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="7.05025" y="15.5356" width="12" height="2" rx="1" transform="rotate(-45 7.05025 15.5356)" fill="black"/>
                                    <rect x="8.46447" y="7.05029" width="12" height="2" rx="1" transform="rotate(45 8.46447 7.05029)" fill="black"/>
                                </svg>
                            </span>
                        </span>
                        <span class="indicator-progress"><span class="spinner-border spinner-border-sm align-middle"></span></span>
                    </button>
                </div></div>`;

                // Swap current column content with input template
                nameCol.innerHTML = renameInput;

                // Rename file / folder validator
                var renameValidator = FormValidation.formValidation(
                    nameCol,
                    {
                        fields: {
                            'rename_folder_name': {
                                validators: {
                                    notEmpty: {
                                        message: 'Name is required'
                                    }
                                }
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: '.fv-row',
                                eleInvalidClass: '',
                                eleValidClass: ''
                            })
                        }
                    }
                );

                // Rename input button action
                const renameInputButton = document.querySelector('#kt_file_manager_rename_folder');
                renameInputButton.addEventListener('click', e => {
                    e.preventDefault();

                    // Detect if valid
                    if (renameValidator) {
                        renameValidator.validate().then(function (status) {
                            console.log('validated!');

                            if (status == 'Valid') {
                                // Pop up confirmation
                                Swal.fire({
                                    text: "Are you sure you want to rename " + nameValue + "?",
                                    icon: "warning",
                                    showCancelButton: true,
                                    buttonsStyling: false,
                                    confirmButtonText: "Yes, rename it!",
                                    cancelButtonText: "No, cancel",
                                    customClass: {
                                        confirmButton: "btn fw-bold btn-danger",
                                        cancelButton: "btn fw-bold btn-active-light-primary"
                                    }
                                }).then(function (result) {
                                    if (result.value) {
                                        Swal.fire({
                                            text: "You have renamed " + nameValue + "!.",
                                            icon: "success",
                                            buttonsStyling: false,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn fw-bold btn-primary",
                                            }
                                        }).then(function () {
                                            // Get new file / folder name value
                                            const newValue = document.querySelector('#kt_file_manager_rename_input').value;

                                            // New column data template
                                            const newData = `<div class="d-flex align-items-center">
                                                ${colIcon.outerHTML}
                                                <a href="?page=apps/file-manager/files/" class="text-gray-800 text-hover-primary">${newValue}</a>
                                            </div>`;

                                            // Draw datatable with new content -- Add more events here for any server-side events
                                            datatable.cell($(nameCol)).data(newData).draw();
                                        });
                                    } else if (result.dismiss === 'cancel') {
                                        Swal.fire({
                                            text: nameValue + " was not renamed.",
                                            icon: "error",
                                            buttonsStyling: false,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn fw-bold btn-primary",
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });

                // Cancel rename input
                const cancelInputButton = document.querySelector('#kt_file_manager_rename_folder_cancel');
                cancelInputButton.addEventListener('click', e => {
                    e.preventDefault();

                    // Simulate process for demo only
                    cancelInputButton.setAttribute("data-kt-indicator", "on");

                    setTimeout(function () {
                        const revertTemplate = `<div class="d-flex align-items-center">
                            ${colIcon.outerHTML}
                            <a href="?page=apps/file-manager/files/" class="text-gray-800 text-hover-primary">${nameValue}</a>
                        </div>`;

                        // Remove spinner
                        cancelInputButton.removeAttribute("data-kt-indicator");

                        // Draw datatable with new content -- Add more events here for any server-side events
                        datatable.cell($(nameCol)).data(revertTemplate).draw();
                    }, 1000);
                });
            });
        });
    }

    // Init dropzone
    const initDropzone = () => {
        // set the dropzone container id
        const id = "#kt_modal_upload_dropzone";
        const dropzone = document.querySelector(id);

        // set the preview element template
        var previewNode = dropzone.querySelector(".dropzone-item");
        previewNode.id = "";
        var previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);

        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: "path/to/your/server", // Set the url for your upload script location
            parallelUploads: 10,
            previewTemplate: previewTemplate,
            maxFilesize: 1, // Max filesize in MB
            autoProcessQueue: false, // Stop auto upload
            autoQueue: false, // Make sure the files aren't queued until manually added
            previewsContainer: id + " .dropzone-items", // Define the container to display the previews
            clickable: id + " .dropzone-select" // Define the element that should be used as click trigger to select files.
        });

        myDropzone.on("addedfile", function (file) {
            // Hook each start button
            file.previewElement.querySelector(id + " .dropzone-start").onclick = function () {
                // myDropzone.enqueueFile(file); -- default dropzone function

                // Process simulation for demo only
                const progressBar = file.previewElement.querySelector('.progress-bar');
                progressBar.style.opacity = "1";
                var width = 1;
                var timer = setInterval(function () {
                    if (width >= 100) {
                        myDropzone.emit("success", file);
                        myDropzone.emit("complete", file);
                        clearInterval(timer);
                    } else {
                        width++;
                        progressBar.style.width = width + '%';
                    }
                }, 20);
            };

            const dropzoneItems = dropzone.querySelectorAll('.dropzone-item');
            dropzoneItems.forEach(dropzoneItem => {
                dropzoneItem.style.display = '';
            });
            dropzone.querySelector('.dropzone-upload').style.display = "inline-block";
            dropzone.querySelector('.dropzone-remove-all').style.display = "inline-block";
        });

        // Hide the total progress bar when nothing's uploading anymore
        myDropzone.on("complete", function (file) {
            const progressBars = dropzone.querySelectorAll('.dz-complete');
            setTimeout(function () {
                progressBars.forEach(progressBar => {
                    progressBar.querySelector('.progress-bar').style.opacity = "0";
                    progressBar.querySelector('.progress').style.opacity = "0";
                    progressBar.querySelector('.dropzone-start').style.opacity = "0";
                });
            }, 300);
        });

        // Setup the buttons for all transfers
        dropzone.querySelector(".dropzone-upload").addEventListener('click', function () {
            // myDropzone.processQueue(); --- default dropzone process

            // Process simulation for demo only
            myDropzone.files.forEach(file => {
                const progressBar = file.previewElement.querySelector('.progress-bar');
                progressBar.style.opacity = "1";
                var width = 1;
                var timer = setInterval(function () {
                    if (width >= 100) {
                        myDropzone.emit("success", file);
                        myDropzone.emit("complete", file);
                        clearInterval(timer);
                    } else {
                        width++;
                        progressBar.style.width = width + '%';
                    }
                }, 20);
            });
        });

        // Setup the button for remove all files
        dropzone.querySelector(".dropzone-remove-all").addEventListener('click', function () {
            Swal.fire({
                text: "Are you sure you would like to remove all files?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, remove it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    dropzone.querySelector('.dropzone-upload').style.display = "none";
                    dropzone.querySelector('.dropzone-remove-all').style.display = "none";
                    myDropzone.removeAllFiles(true);
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your files was not removed!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });

        // On all files completed upload
        myDropzone.on("queuecomplete", function (progress) {
            const uploadIcons = dropzone.querySelectorAll('.dropzone-upload');
            uploadIcons.forEach(uploadIcon => {
                uploadIcon.style.display = "none";
            });
        });

        // On all files removed
        myDropzone.on("removedfile", function (file) {
            if (myDropzone.files.length < 1) {
                dropzone.querySelector('.dropzone-upload').style.display = "none";
                dropzone.querySelector('.dropzone-remove-all').style.display = "none";
            }
        });
    }

    // Init copy link
    const initCopyLink = () => {
        // Select all copy link elements
        const elements = table.querySelectorAll('[data-kt-filemanger-table="copy_link"]');

        elements.forEach(el => {
            // Define elements
            const button = el.querySelector('button');
            const generator = el.querySelector('[data-kt-filemanger-table="copy_link_generator"]');
            const result = el.querySelector('[data-kt-filemanger-table="copy_link_result"]');
            const input = el.querySelector('input');

            // Click action
            button.addEventListener('click', e => {
                e.preventDefault();

                // Reset toggle
                generator.classList.remove('d-none');
                result.classList.add('d-none');

                var linkTimeout;
                clearTimeout(linkTimeout);
                linkTimeout = setTimeout(() => {
                    generator.classList.add('d-none');
                    result.classList.remove('d-none');
                    input.select();
                }, 2000);
            });
        });
    }

    // Handle move to folder
    const handleMoveToFolder = () => {
        const element = document.querySelector('#kt_modal_move_to_folder');
        const form = element.querySelector('#kt_modal_move_to_folder_form');
        const saveButton = form.querySelector('#kt_modal_move_to_folder_submit');
        const moveModal = new bootstrap.Modal(element);

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'move_to_folder': {
                        validators: {
                            notEmpty: {
                                message: 'Please select a folder.'
                            }
                        }
                    },
                },

                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );

        saveButton.addEventListener('click', e => {
            e.preventDefault();

            saveButton.setAttribute("data-kt-indicator", "on");

            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        // Simulate process for demo only
                        setTimeout(function () {

                            Swal.fire({
                                text: "Are you sure you would like to move to this folder",
                                icon: "warning",
                                showCancelButton: true,
                                buttonsStyling: false,
                                confirmButtonText: "Yes, move it!",
                                cancelButtonText: "No, return",
                                customClass: {
                                    confirmButton: "btn btn-primary",
                                    cancelButton: "btn btn-active-light"
                                }
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    form.reset(); // Reset form	
                                    moveModal.hide(); // Hide modal			

                                    toastr.options = {
                                        "closeButton": true,
                                        "debug": false,
                                        "newestOnTop": false,
                                        "progressBar": false,
                                        "positionClass": "toast-top-right",
                                        "preventDuplicates": false,
                                        "showDuration": "300",
                                        "hideDuration": "1000",
                                        "timeOut": "5000",
                                        "extendedTimeOut": "1000",
                                        "showEasing": "swing",
                                        "hideEasing": "linear",
                                        "showMethod": "fadeIn",
                                        "hideMethod": "fadeOut"
                                    };

                                    toastr.success('1 item has been moved.');

                                    saveButton.removeAttribute("data-kt-indicator");
                                } else {
                                    Swal.fire({
                                        text: "Your action has been cancelled!.",
                                        icon: "error",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn btn-primary",
                                        }
                                    });

                                    saveButton.removeAttribute("data-kt-indicator");
                                }
                            });
                        }, 500);
                    } else {
                        saveButton.removeAttribute("data-kt-indicator");
                    }
                });
            }
        });
    }

    // Count total number of items
    const countTotalItems = () => {
        const counter = document.getElementById('kt_file_manager_items_counter');

        // Count total number of elements in datatable --- more info: https://datatables.net/reference/api/count()
        counter.innerText = datatable.rows().count() + ' items'; 
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_file_manager_list');

            if (!table) {
                return;
            }

            initDatatable();
            initToggleToolbar();
            handleSearchDatatable();
            handleDeleteRows();
            handleNewFolder();
            initDropzone();
            initCopyLink();
            handleRename();
            handleMoveToFolder();
            countTotalItems();
            KTMenu.createInstances();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFileManagerList.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/file-manager/list.js":
/*!***********************************************************!*\
  !*** ./resources/src/js/custom/apps/file-manager/list.js ***!
  \***********************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFileManagerList = function () {\n  // Define shared variables\n  var datatable;\n  var table; // Private functions\n\n  var initDatatable = function initDatatable() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var dateCol = dateRow[3]; // select date from 4th column in table\n\n      var realDate = moment(dateCol.innerHTML, \"DD MMM YYYY, LT\").format();\n      dateCol.setAttribute('data-order', realDate);\n    });\n    var foldersListOptions = {\n      \"info\": false,\n      'order': [],\n      \"scrollY\": \"700px\",\n      \"scrollCollapse\": true,\n      \"paging\": false,\n      'ordering': false,\n      'columns': [{\n        data: 'checkbox'\n      }, {\n        data: 'name'\n      }, {\n        data: 'size'\n      }, {\n        data: 'date'\n      }, {\n        data: 'action'\n      }],\n      'language': {\n        emptyTable: \"<div class=\\\"d-flex flex-column flex-center\\\">\\n                    <img src=\\\"assets/media/illustrations/sketchy-1/5.png\\\" class=\\\"mw-400px\\\" />\\n                    <div class=\\\"fs-1 fw-bolder text-dark\\\">No items found.</div>\\n                    <div class=\\\"fs-6\\\">Start creating new folders or uploading a new file!</div>\\n                </div>\"\n      }\n    };\n    var filesListOptions = {\n      \"info\": false,\n      'order': [],\n      'pageLength': 10,\n      \"lengthChange\": false,\n      'ordering': false,\n      'columns': [{\n        data: 'checkbox'\n      }, {\n        data: 'name'\n      }, {\n        data: 'size'\n      }, {\n        data: 'date'\n      }, {\n        data: 'action'\n      }],\n      'language': {\n        emptyTable: \"<div class=\\\"d-flex flex-column flex-center\\\">\\n                    <img src=\\\"assets/media/illustrations/sketchy-1/5.png\\\" class=\\\"mw-400px\\\" />\\n                    <div class=\\\"fs-1 fw-bolder text-dark mb-4\\\">No items found.</div>\\n                    <div class=\\\"fs-6\\\">Start creating new folders or uploading a new file!</div>\\n                </div>\"\n      },\n      conditionalPaging: true\n    }; // Define datatable options to load\n\n    var loadOptions;\n\n    if (table.getAttribute('data-kt-filemanager-table') === 'folders') {\n      loadOptions = foldersListOptions;\n    } else {\n      loadOptions = filesListOptions;\n    } // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n\n    datatable = $(table).DataTable(loadOptions); // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw\n\n    datatable.on('draw', function () {\n      initToggleToolbar();\n      handleDeleteRows();\n      toggleToolbars();\n      resetNewFolder();\n      KTMenu.createInstances();\n      initCopyLink();\n      countTotalItems();\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-filemanager-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Delete customer\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-filemanager-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get customer name\n\n        var fileName = parent.querySelectorAll('td')[1].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + fileName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + fileName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  }; // Init toggle toolbar\n\n\n  var initToggleToolbar = function initToggleToolbar() {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    var checkboxes = table.querySelectorAll('[type=\"checkbox\"]');\n\n    if (table.getAttribute('data-kt-filemanager-table') === 'folders') {\n      checkboxes = document.querySelectorAll('#kt_file_manager_list_wrapper [type=\"checkbox\"]');\n    } // Select elements\n\n\n    var deleteSelected = document.querySelector('[data-kt-filemanager-table-select=\"delete_selected\"]'); // Toggle delete selected toolbar\n\n    checkboxes.forEach(function (c) {\n      // Checkbox on click event\n      c.addEventListener('click', function () {\n        console.log(c);\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    }); // Deleted selected rows\n\n    deleteSelected.addEventListener('click', function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected files or folders?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected  files or folders!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove all selected customers\n            checkboxes.forEach(function (c) {\n              if (c.checked) {\n                datatable.row($(c.closest('tbody tr'))).remove().draw();\n              }\n            }); // Remove header checked box\n\n            var headerCheckbox = table.querySelectorAll('[type=\"checkbox\"]')[0];\n            headerCheckbox.checked = false;\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Selected  files or folders was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Toggle toolbars\n\n\n  var toggleToolbars = function toggleToolbars() {\n    // Define variables\n    var toolbarBase = document.querySelector('[data-kt-filemanager-table-toolbar=\"base\"]');\n    var toolbarSelected = document.querySelector('[data-kt-filemanager-table-toolbar=\"selected\"]');\n    var selectedCount = document.querySelector('[data-kt-filemanager-table-select=\"selected_count\"]'); // Select refreshed checkbox DOM elements \n\n    var allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]'); // Detect checkboxes state & count\n\n    var checkedState = false;\n    var count = 0; // Count checked boxes\n\n    allCheckboxes.forEach(function (c) {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    }); // Toggle toolbars\n\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add('d-none');\n      toolbarSelected.classList.remove('d-none');\n    } else {\n      toolbarBase.classList.remove('d-none');\n      toolbarSelected.classList.add('d-none');\n    }\n  }; // Handle new folder\n\n\n  var handleNewFolder = function handleNewFolder() {\n    // Select button\n    var newFolder = document.getElementById('kt_file_manager_new_folder'); // Handle click action\n\n    newFolder.addEventListener('click', function (e) {\n      var _folderIcon$classList, _rowWrapper$classList, _rowInput$classList, _spinnerIcon$classLis, _rowButton$classList, _cancelButton$classLi;\n\n      e.preventDefault(); // Ignore if input already exist\n\n      if (table.querySelector('#kt_file_manager_new_folder_row')) {\n        return;\n      } // Create new row elements\n\n\n      var rowElement = document.createElement('tr');\n      var rowWrapper = document.createElement('div');\n      var rowCol1 = document.createElement('td'); // Checkbox column\n\n      var rowCol2 = document.createElement('td'); // Name column\n\n      var rowCol3 = document.createElement('td'); // Size column\n\n      var rowCol4 = document.createElement('td'); // Date column\n\n      var rowCol5 = document.createElement('td'); // Action column\n\n      var rowInput = document.createElement('input');\n      var rowButton = document.createElement('button');\n      var cancelButton = document.createElement('button');\n      var folderIcon = document.createElement('span'); // Set folder icon\n\n      var folderIconClasses = ['svg-icon', 'svg-icon-2x', 'svg-icon-primary', 'me-4'];\n      var folderUploadIcon = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\"> <path opacity=\\\"0.3\\\" d=\\\"M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z\\\" fill=\\\"black\\\"></path> <path d=\\\"M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z\\\" fill=\\\"black\\\"></path> </svg>\";\n\n      (_folderIcon$classList = folderIcon.classList).add.apply(_folderIcon$classList, folderIconClasses);\n\n      folderIcon.innerHTML = folderUploadIcon; // Set general row attributes\n\n      rowElement.setAttribute('id', 'kt_file_manager_new_folder_row');\n      rowCol2.classList.add('fv-row');\n      var rowWrapperClasses = ['d-flex', 'align-items-center'];\n\n      (_rowWrapper$classList = rowWrapper.classList).add.apply(_rowWrapper$classList, rowWrapperClasses); // Set input element attributes\n\n\n      var inputClasses = ['form-control', 'mw-250px', 'me-3'];\n      rowInput.setAttribute('type', 'text');\n      rowInput.setAttribute('name', 'new_folder_name');\n      rowInput.setAttribute('placeholder', 'Enter the folder name');\n\n      (_rowInput$classList = rowInput.classList).add.apply(_rowInput$classList, inputClasses); // Set button element attributes\n\n\n      var rowButtonClasses = ['btn', 'btn-icon', 'btn-light-primary', 'me-3'];\n      var buttonIcon = \"<span class=\\\"svg-icon svg-icon-1\\\">\\n                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\">\\n                    <path d=\\\"M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z\\\" fill=\\\"black\\\"></path>\\n                </svg>\\n            </span>\";\n      var buttonIndicatorLabel = document.createElement('span');\n      buttonIndicatorLabel.classList.add('indicator-label');\n      buttonIndicatorLabel.innerHTML = buttonIcon;\n      var buttonIndicatorProgress = document.createElement('span');\n      var spinnerIcon = document.createElement('span');\n      var spinnerClasses = ['spinner-border', 'spinner-border-sm', 'align-middle'];\n\n      (_spinnerIcon$classLis = spinnerIcon.classList).add.apply(_spinnerIcon$classLis, spinnerClasses);\n\n      buttonIndicatorProgress.classList.add('indicator-progress');\n      buttonIndicatorProgress.appendChild(spinnerIcon);\n      rowButton.appendChild(buttonIndicatorLabel);\n      rowButton.appendChild(buttonIndicatorProgress);\n\n      (_rowButton$classList = rowButton.classList).add.apply(_rowButton$classList, rowButtonClasses);\n\n      rowButton.setAttribute('id', 'kt_file_manager_add_folder'); // Set cancel button element attributes\n\n      var cancelButtonClasses = ['btn', 'btn-icon', 'btn-light-danger'];\n      var cancelIcon = \"<span class=\\\"svg-icon svg-icon-1\\\">\\n                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\">\\n                    <rect opacity=\\\"0.5\\\" x=\\\"7.05025\\\" y=\\\"15.5356\\\" width=\\\"12\\\" height=\\\"2\\\" rx=\\\"1\\\" transform=\\\"rotate(-45 7.05025 15.5356)\\\" fill=\\\"black\\\"/>\\n                    <rect x=\\\"8.46447\\\" y=\\\"7.05029\\\" width=\\\"12\\\" height=\\\"2\\\" rx=\\\"1\\\" transform=\\\"rotate(45 8.46447 7.05029)\\\" fill=\\\"black\\\"/>\\n                </svg>\\n            </span>\";\n      var cancelIndicator = buttonIndicatorLabel.cloneNode(true);\n      cancelIndicator.innerHTML = cancelIcon;\n      var cancelSpinner = buttonIndicatorProgress.cloneNode(true);\n      cancelButton.append(cancelIndicator);\n      cancelButton.append(cancelSpinner);\n\n      (_cancelButton$classLi = cancelButton.classList).add.apply(_cancelButton$classLi, cancelButtonClasses);\n\n      cancelButton.setAttribute('id', 'kt_file_manager_cancel_folder'); // Append elements into row\n\n      rowWrapper.append(folderIcon);\n      rowWrapper.append(rowInput);\n      rowWrapper.append(rowButton);\n      rowWrapper.append(cancelButton);\n      rowCol2.append(rowWrapper);\n      rowElement.append(rowCol1);\n      rowElement.append(rowCol2);\n      rowElement.append(rowCol3);\n      rowElement.append(rowCol4);\n      rowElement.append(rowCol5); // Add new blank row to datatable\n\n      var tableBody = table.querySelector('tbody');\n      tableBody.prepend(rowElement); // Define validator\n      // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n      var validator = FormValidation.formValidation(rowCol2, {\n        fields: {\n          'new_folder_name': {\n            validators: {\n              notEmpty: {\n                message: 'Folder name is required'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap: new FormValidation.plugins.Bootstrap5({\n            rowSelector: '.fv-row',\n            eleInvalidClass: '',\n            eleValidClass: ''\n          })\n        }\n      }); // Handle add new folder button\n\n      rowButton.addEventListener('click', function (e) {\n        e.preventDefault(); // Activate indicator\n\n        rowButton.setAttribute(\"data-kt-indicator\", \"on\"); // Validate form before submit\n\n        if (validator) {\n          validator.validate().then(function (status) {\n            console.log('validated!');\n\n            if (status == 'Valid') {\n              // Simulate process for demo only\n              setTimeout(function () {\n                var _folderLink$classList;\n\n                // Duplicate checkbox and action dropdown\n                var action = \"<div class=\\\"d-flex justify-content-end\\\">                            \\n                                    <!--begin::Share link-->\\n                                    <div class=\\\"ms-2\\\" data-kt-filemanger-table=\\\"copy_link\\\">\\n                                        <button type=\\\"button\\\" class=\\\"btn btn-sm btn-icon btn-light btn-active-light-primary\\\" data-kt-menu-trigger=\\\"click\\\" data-kt-menu-placement=\\\"bottom-end\\\">\\n                                            <span class=\\\"svg-icon svg-icon-5 m-0\\\">\\n                                                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\">\\n                                                    <path opacity=\\\"0.3\\\" d=\\\"M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z\\\" fill=\\\"black\\\"></path>\\n                                                    <path d=\\\"M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z\\\" fill=\\\"black\\\"></path>\\n                                                </svg>\\n                                            </span>\\n                                        </button>\\n                                        <!--begin::Menu-->\\n                                        <div class=\\\"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-300px\\\" data-kt-menu=\\\"true\\\">\\n                                            <!--begin::Card-->\\n                                            <div class=\\\"card card-flush\\\">\\n                                                <div class=\\\"card-body p-5\\\">\\n                                                    <!--begin::Loader-->\\n                                                    <div class=\\\"d-flex\\\" data-kt-filemanger-table=\\\"copy_link_generator\\\">\\n                                                        <!--begin::Spinner-->\\n                                                        <div class=\\\"me-5\\\" data-kt-indicator=\\\"on\\\">\\n                                                            <span class=\\\"indicator-progress\\\">\\n                                                                <span class=\\\"spinner-border spinner-border-sm align-middle ms-2\\\"></span>\\n                                                            </span>\\n                                                        </div>\\n                                                        <!--end::Spinner-->\\n\\n                                                        <!--begin::Label-->\\n                                                        <div class=\\\"fs-6 text-dark\\\">Generating Share Link...</div>\\n                                                        <!--end::Label-->\\n                                                    </div>\\n                                                    <!--end::Loader-->\\n\\n                                                    <!--begin::Link-->\\n                                                    <div class=\\\"d-flex flex-column text-start d-none\\\" data-kt-filemanger-table=\\\"copy_link_result\\\">\\n                                                        <div class=\\\"d-flex mb-5\\\">\\n                                                            <?php echo Theme::getSvgIcon('icons/duotune/arrows/arr084.svg', \\\"svg-icon-1 svg-icon-success me-3\\\") ?>\\n                                                            <div class=\\\"fs-6 text-dark\\\">Share Link Generated</div>\\n                                                        </div>\\n                                                        <input type=\\\"text\\\" class=\\\"form-control form-control-sm\\\" value=\\\"https://path/to/file/or/folder/\\\" />\\n                                                        <div class=\\\"text-muted fw-normal fs-8 px-3\\\">Read only. <a href=\\\"<?php echo Theme::getPageUrl('apps/file-manager/settings/') ?>\\\">Change permissions</a></div>\\n                                                    </div>\\n                                                    <!--end::Link-->\\n                                                </div>\\n                                            </div>\\n                                            <!--end::Card-->\\n                                        </div>\\n                                        <!--end::Menu-->\\n                                        <!--end::Share link-->\\n                                    </div>\\n                            \\n                                    <!--begin::More-->\\n                                    <div class=\\\"ms-2\\\">\\n                                        <button type=\\\"button\\\" class=\\\"btn btn-sm btn-icon btn-light btn-active-light-primary\\\" data-kt-menu-trigger=\\\"click\\\" data-kt-menu-placement=\\\"bottom-end\\\">\\n                                            <span class=\\\"svg-icon svg-icon-5 m-0\\\">\\n                                                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\">\\n                                                    <rect x=\\\"10\\\" y=\\\"10\\\" width=\\\"4\\\" height=\\\"4\\\" rx=\\\"2\\\" fill=\\\"black\\\"></rect>\\n                                                    <rect x=\\\"17\\\" y=\\\"10\\\" width=\\\"4\\\" height=\\\"4\\\" rx=\\\"2\\\" fill=\\\"black\\\"></rect>\\n                                                    <rect x=\\\"3\\\" y=\\\"10\\\" width=\\\"4\\\" height=\\\"4\\\" rx=\\\"2\\\" fill=\\\"black\\\"></rect>\\n                                                </svg>\\n                                            </span>\\n                                        </button>\\n                                        <!--begin::Menu-->\\n                                        <div class=\\\"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4\\\" data-kt-menu=\\\"true\\\">\\n                                            <!--begin::Menu item-->\\n                                            <div class=\\\"menu-item px-3\\\">\\n                                                <a href=\\\"<?php echo Theme::getPageUrl('apps/file-manager/files') ?>\\\" class=\\\"menu-link px-3\\\">\\n                                                    View\\n                                                </a>\\n                                            </div>\\n                                            <!--end::Menu item-->\\n\\n                                            <!--begin::Menu item-->\\n                                            <div class=\\\"menu-item px-3\\\">\\n                                                <a href=\\\"#\\\" class=\\\"menu-link px-3\\\" data-kt-filemanager-table=\\\"rename\\\">\\n                                                    Rename\\n                                                </a>\\n                                            </div>\\n                                            <!--end::Menu item-->\\n\\n                                            <!--begin::Menu item-->\\n                                            <div class=\\\"menu-item px-3\\\">\\n                                                <a href=\\\"#\\\" class=\\\"menu-link px-3\\\">\\n                                                    Download Folder\\n                                                </a>\\n                                            </div>\\n                                            <!--end::Menu item-->\\n\\n                                            <!--begin::Menu item-->\\n                                            <div class=\\\"menu-item px-3\\\">\\n                                                <a href=\\\"#\\\" class=\\\"menu-link px-3\\\" data-kt-filemanager-table-filter=\\\"move_row\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#kt_modal_move_to_folder\\\">\\n                                                    Move to folder\\n                                                </a>\\n                                            </div>\\n                                            <!--end::Menu item-->\\n\\n                                            <!--begin::Menu item-->\\n                                            <div class=\\\"menu-item px-3\\\">\\n                                                <a href=\\\"#\\\" class=\\\"menu-link text-danger px-3\\\" data-kt-filemanager-table-filter=\\\"delete_row\\\">\\n                                                    Delete\\n                                                </a>\\n                                            </div>\\n                                            <!--end::Menu item-->\\n                                        </div>\\n                                        <!--end::Menu-->\\n                                        <!--end::More-->\\n                                    </div>\\n                                </div>\";\n                var checkbox = \"<div class=\\\"form-check form-check-sm form-check-custom form-check-solid\\\"><input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" value=\\\"1\\\" /></div>\"; // Create folder link\n\n                var folderLink = document.createElement('a');\n                var folderLinkClasses = ['text-gray-800', 'text-hover-primary'];\n                folderLink.setAttribute('href', '?page=apps/file-manager/blank');\n\n                (_folderLink$classList = folderLink.classList).add.apply(_folderLink$classList, folderLinkClasses);\n\n                folderLink.innerText = rowInput.value;\n                var newRow = datatable.row.add({\n                  'checkbox': checkbox,\n                  'name': folderIcon.outerHTML + folderLink.outerHTML,\n                  \"size\": '-',\n                  \"date\": '-',\n                  'action': action\n                }).node();\n                $(newRow).find('td').eq(4).attr('data-kt-filemanager-table', 'action_dropdown');\n                $(newRow).find('td').eq(4).addClass('text-end'); // Add custom class to last 'td' element --- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class\n                // Re-sort datatable to allow new folder added at the top\n\n                var index = datatable.row(0).index(),\n                    rowCount = datatable.data().length - 1,\n                    insertedRow = datatable.row(rowCount).data(),\n                    tempRow;\n\n                for (var i = rowCount; i > index; i--) {\n                  tempRow = datatable.row(i - 1).data();\n                  datatable.row(i).data(tempRow);\n                  datatable.row(i - 1).data(insertedRow);\n                }\n\n                toastr.options = {\n                  \"closeButton\": true,\n                  \"debug\": false,\n                  \"newestOnTop\": false,\n                  \"progressBar\": false,\n                  \"positionClass\": \"toast-top-right\",\n                  \"preventDuplicates\": false,\n                  \"showDuration\": \"300\",\n                  \"hideDuration\": \"1000\",\n                  \"timeOut\": \"5000\",\n                  \"extendedTimeOut\": \"1000\",\n                  \"showEasing\": \"swing\",\n                  \"hideEasing\": \"linear\",\n                  \"showMethod\": \"fadeIn\",\n                  \"hideMethod\": \"fadeOut\"\n                };\n                toastr.success(rowInput.value + ' was created!'); // Disable indicator\n\n                rowButton.removeAttribute(\"data-kt-indicator\");\n                datatable.draw(false);\n              }, 2000);\n            } else {\n              // Disable indicator\n              rowButton.removeAttribute(\"data-kt-indicator\");\n            }\n          });\n        }\n      }); // Handle cancel new folder button\n\n      cancelButton.addEventListener('click', function (e) {\n        e.preventDefault(); // Activate indicator\n\n        cancelButton.setAttribute(\"data-kt-indicator\", \"on\");\n        setTimeout(function () {\n          // Disable indicator\n          cancelButton.removeAttribute(\"data-kt-indicator\"); // Toggle toastr\n\n          toastr.options = {\n            \"closeButton\": true,\n            \"debug\": false,\n            \"newestOnTop\": false,\n            \"progressBar\": false,\n            \"positionClass\": \"toast-top-right\",\n            \"preventDuplicates\": false,\n            \"showDuration\": \"300\",\n            \"hideDuration\": \"1000\",\n            \"timeOut\": \"5000\",\n            \"extendedTimeOut\": \"1000\",\n            \"showEasing\": \"swing\",\n            \"hideEasing\": \"linear\",\n            \"showMethod\": \"fadeIn\",\n            \"hideMethod\": \"fadeOut\"\n          };\n          toastr.error('Cancelled new folder creation');\n          resetNewFolder();\n        }, 1000);\n      });\n    });\n  }; // Reset add new folder input\n\n\n  var resetNewFolder = function resetNewFolder() {\n    var newFolderRow = table.querySelector('#kt_file_manager_new_folder_row');\n\n    if (newFolderRow) {\n      newFolderRow.parentNode.removeChild(newFolderRow);\n    }\n  }; // Handle rename file or folder\n\n\n  var handleRename = function handleRename() {\n    var renameButton = table.querySelectorAll('[data-kt-filemanager-table=\"rename\"]');\n    var nameValue;\n    renameButton.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get name column\n\n        var nameCol = parent.querySelectorAll('td')[1];\n        var colIcon = nameCol.querySelector('.svg-icon');\n        nameValue = nameCol.innerText; // Set rename input template\n\n        var renameInput = \"<div class=\\\"fv-row\\\"><div class=\\\"d-flex align-items-center\\\">\\n                    \".concat(colIcon.outerHTML, \"\\n                    <input type=\\\"text\\\" id=\\\"kt_file_manager_rename_input\\\" name=\\\"rename_folder_name\\\" placeholder=\\\"Enter the new folder name\\\" class=\\\"form-control mw-250px me-3\\\" value=\\\"\").concat(nameValue, \"\\\" />\\n                    <button class=\\\"btn btn-icon btn-light-primary me-3\\\" id=\\\"kt_file_manager_rename_folder\\\">\\n                        <span class=\\\"svg-icon svg-icon-1\\\">\\n                            <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\">\\n                                <path d=\\\"M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z\\\" fill=\\\"black\\\"/>\\n                            </svg>\\n                        </span>\\n                    </button>\\n                    <button class=\\\"btn btn-icon btn-light-danger\\\" id=\\\"kt_file_manager_rename_folder_cancel\\\">\\n                        <span class=\\\"indicator-label\\\">\\n                            <span class=\\\"svg-icon svg-icon-1\\\">\\n                                <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\">\\n                                    <rect opacity=\\\"0.5\\\" x=\\\"7.05025\\\" y=\\\"15.5356\\\" width=\\\"12\\\" height=\\\"2\\\" rx=\\\"1\\\" transform=\\\"rotate(-45 7.05025 15.5356)\\\" fill=\\\"black\\\"/>\\n                                    <rect x=\\\"8.46447\\\" y=\\\"7.05029\\\" width=\\\"12\\\" height=\\\"2\\\" rx=\\\"1\\\" transform=\\\"rotate(45 8.46447 7.05029)\\\" fill=\\\"black\\\"/>\\n                                </svg>\\n                            </span>\\n                        </span>\\n                        <span class=\\\"indicator-progress\\\"><span class=\\\"spinner-border spinner-border-sm align-middle\\\"></span></span>\\n                    </button>\\n                </div></div>\"); // Swap current column content with input template\n\n        nameCol.innerHTML = renameInput; // Rename file / folder validator\n\n        var renameValidator = FormValidation.formValidation(nameCol, {\n          fields: {\n            'rename_folder_name': {\n              validators: {\n                notEmpty: {\n                  message: 'Name is required'\n                }\n              }\n            }\n          },\n          plugins: {\n            trigger: new FormValidation.plugins.Trigger(),\n            bootstrap: new FormValidation.plugins.Bootstrap5({\n              rowSelector: '.fv-row',\n              eleInvalidClass: '',\n              eleValidClass: ''\n            })\n          }\n        }); // Rename input button action\n\n        var renameInputButton = document.querySelector('#kt_file_manager_rename_folder');\n        renameInputButton.addEventListener('click', function (e) {\n          e.preventDefault(); // Detect if valid\n\n          if (renameValidator) {\n            renameValidator.validate().then(function (status) {\n              console.log('validated!');\n\n              if (status == 'Valid') {\n                // Pop up confirmation\n                Swal.fire({\n                  text: \"Are you sure you want to rename \" + nameValue + \"?\",\n                  icon: \"warning\",\n                  showCancelButton: true,\n                  buttonsStyling: false,\n                  confirmButtonText: \"Yes, rename it!\",\n                  cancelButtonText: \"No, cancel\",\n                  customClass: {\n                    confirmButton: \"btn fw-bold btn-danger\",\n                    cancelButton: \"btn fw-bold btn-active-light-primary\"\n                  }\n                }).then(function (result) {\n                  if (result.value) {\n                    Swal.fire({\n                      text: \"You have renamed \" + nameValue + \"!.\",\n                      icon: \"success\",\n                      buttonsStyling: false,\n                      confirmButtonText: \"Ok, got it!\",\n                      customClass: {\n                        confirmButton: \"btn fw-bold btn-primary\"\n                      }\n                    }).then(function () {\n                      // Get new file / folder name value\n                      var newValue = document.querySelector('#kt_file_manager_rename_input').value; // New column data template\n\n                      var newData = \"<div class=\\\"d-flex align-items-center\\\">\\n                                                \".concat(colIcon.outerHTML, \"\\n                                                <a href=\\\"?page=apps/file-manager/files/\\\" class=\\\"text-gray-800 text-hover-primary\\\">\").concat(newValue, \"</a>\\n                                            </div>\"); // Draw datatable with new content -- Add more events here for any server-side events\n\n                      datatable.cell($(nameCol)).data(newData).draw();\n                    });\n                  } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                      text: nameValue + \" was not renamed.\",\n                      icon: \"error\",\n                      buttonsStyling: false,\n                      confirmButtonText: \"Ok, got it!\",\n                      customClass: {\n                        confirmButton: \"btn fw-bold btn-primary\"\n                      }\n                    });\n                  }\n                });\n              }\n            });\n          }\n        }); // Cancel rename input\n\n        var cancelInputButton = document.querySelector('#kt_file_manager_rename_folder_cancel');\n        cancelInputButton.addEventListener('click', function (e) {\n          e.preventDefault(); // Simulate process for demo only\n\n          cancelInputButton.setAttribute(\"data-kt-indicator\", \"on\");\n          setTimeout(function () {\n            var revertTemplate = \"<div class=\\\"d-flex align-items-center\\\">\\n                            \".concat(colIcon.outerHTML, \"\\n                            <a href=\\\"?page=apps/file-manager/files/\\\" class=\\\"text-gray-800 text-hover-primary\\\">\").concat(nameValue, \"</a>\\n                        </div>\"); // Remove spinner\n\n            cancelInputButton.removeAttribute(\"data-kt-indicator\"); // Draw datatable with new content -- Add more events here for any server-side events\n\n            datatable.cell($(nameCol)).data(revertTemplate).draw();\n          }, 1000);\n        });\n      });\n    });\n  }; // Init dropzone\n\n\n  var initDropzone = function initDropzone() {\n    // set the dropzone container id\n    var id = \"#kt_modal_upload_dropzone\";\n    var dropzone = document.querySelector(id); // set the preview element template\n\n    var previewNode = dropzone.querySelector(\".dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parentNode.innerHTML;\n    previewNode.parentNode.removeChild(previewNode);\n    var myDropzone = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"path/to/your/server\",\n      // Set the url for your upload script location\n      parallelUploads: 10,\n      previewTemplate: previewTemplate,\n      maxFilesize: 1,\n      // Max filesize in MB\n      autoProcessQueue: false,\n      // Stop auto upload\n      autoQueue: false,\n      // Make sure the files aren't queued until manually added\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone.on(\"addedfile\", function (file) {\n      // Hook each start button\n      file.previewElement.querySelector(id + \" .dropzone-start\").onclick = function () {\n        // myDropzone.enqueueFile(file); -- default dropzone function\n        // Process simulation for demo only\n        var progressBar = file.previewElement.querySelector('.progress-bar');\n        progressBar.style.opacity = \"1\";\n        var width = 1;\n        var timer = setInterval(function () {\n          if (width >= 100) {\n            myDropzone.emit(\"success\", file);\n            myDropzone.emit(\"complete\", file);\n            clearInterval(timer);\n          } else {\n            width++;\n            progressBar.style.width = width + '%';\n          }\n        }, 20);\n      };\n\n      var dropzoneItems = dropzone.querySelectorAll('.dropzone-item');\n      dropzoneItems.forEach(function (dropzoneItem) {\n        dropzoneItem.style.display = '';\n      });\n      dropzone.querySelector('.dropzone-upload').style.display = \"inline-block\";\n      dropzone.querySelector('.dropzone-remove-all').style.display = \"inline-block\";\n    }); // Hide the total progress bar when nothing's uploading anymore\n\n    myDropzone.on(\"complete\", function (file) {\n      var progressBars = dropzone.querySelectorAll('.dz-complete');\n      setTimeout(function () {\n        progressBars.forEach(function (progressBar) {\n          progressBar.querySelector('.progress-bar').style.opacity = \"0\";\n          progressBar.querySelector('.progress').style.opacity = \"0\";\n          progressBar.querySelector('.dropzone-start').style.opacity = \"0\";\n        });\n      }, 300);\n    }); // Setup the buttons for all transfers\n\n    dropzone.querySelector(\".dropzone-upload\").addEventListener('click', function () {\n      // myDropzone.processQueue(); --- default dropzone process\n      // Process simulation for demo only\n      myDropzone.files.forEach(function (file) {\n        var progressBar = file.previewElement.querySelector('.progress-bar');\n        progressBar.style.opacity = \"1\";\n        var width = 1;\n        var timer = setInterval(function () {\n          if (width >= 100) {\n            myDropzone.emit(\"success\", file);\n            myDropzone.emit(\"complete\", file);\n            clearInterval(timer);\n          } else {\n            width++;\n            progressBar.style.width = width + '%';\n          }\n        }, 20);\n      });\n    }); // Setup the button for remove all files\n\n    dropzone.querySelector(\".dropzone-remove-all\").addEventListener('click', function () {\n      Swal.fire({\n        text: \"Are you sure you would like to remove all files?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, remove it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          dropzone.querySelector('.dropzone-upload').style.display = \"none\";\n          dropzone.querySelector('.dropzone-remove-all').style.display = \"none\";\n          myDropzone.removeAllFiles(true);\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your files was not removed!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // On all files completed upload\n\n    myDropzone.on(\"queuecomplete\", function (progress) {\n      var uploadIcons = dropzone.querySelectorAll('.dropzone-upload');\n      uploadIcons.forEach(function (uploadIcon) {\n        uploadIcon.style.display = \"none\";\n      });\n    }); // On all files removed\n\n    myDropzone.on(\"removedfile\", function (file) {\n      if (myDropzone.files.length < 1) {\n        dropzone.querySelector('.dropzone-upload').style.display = \"none\";\n        dropzone.querySelector('.dropzone-remove-all').style.display = \"none\";\n      }\n    });\n  }; // Init copy link\n\n\n  var initCopyLink = function initCopyLink() {\n    // Select all copy link elements\n    var elements = table.querySelectorAll('[data-kt-filemanger-table=\"copy_link\"]');\n    elements.forEach(function (el) {\n      // Define elements\n      var button = el.querySelector('button');\n      var generator = el.querySelector('[data-kt-filemanger-table=\"copy_link_generator\"]');\n      var result = el.querySelector('[data-kt-filemanger-table=\"copy_link_result\"]');\n      var input = el.querySelector('input'); // Click action\n\n      button.addEventListener('click', function (e) {\n        e.preventDefault(); // Reset toggle\n\n        generator.classList.remove('d-none');\n        result.classList.add('d-none');\n        var linkTimeout;\n        clearTimeout(linkTimeout);\n        linkTimeout = setTimeout(function () {\n          generator.classList.add('d-none');\n          result.classList.remove('d-none');\n          input.select();\n        }, 2000);\n      });\n    });\n  }; // Handle move to folder\n\n\n  var handleMoveToFolder = function handleMoveToFolder() {\n    var element = document.querySelector('#kt_modal_move_to_folder');\n    var form = element.querySelector('#kt_modal_move_to_folder_form');\n    var saveButton = form.querySelector('#kt_modal_move_to_folder_submit');\n    var moveModal = new bootstrap.Modal(element); // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'move_to_folder': {\n          validators: {\n            notEmpty: {\n              message: 'Please select a folder.'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n    saveButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      saveButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Simulate process for demo only\n            setTimeout(function () {\n              Swal.fire({\n                text: \"Are you sure you would like to move to this folder\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, move it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\",\n                  cancelButton: \"btn btn-active-light\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  form.reset(); // Reset form\t\n\n                  moveModal.hide(); // Hide modal\t\t\t\n\n                  toastr.options = {\n                    \"closeButton\": true,\n                    \"debug\": false,\n                    \"newestOnTop\": false,\n                    \"progressBar\": false,\n                    \"positionClass\": \"toast-top-right\",\n                    \"preventDuplicates\": false,\n                    \"showDuration\": \"300\",\n                    \"hideDuration\": \"1000\",\n                    \"timeOut\": \"5000\",\n                    \"extendedTimeOut\": \"1000\",\n                    \"showEasing\": \"swing\",\n                    \"hideEasing\": \"linear\",\n                    \"showMethod\": \"fadeIn\",\n                    \"hideMethod\": \"fadeOut\"\n                  };\n                  toastr.success('1 item has been moved.');\n                  saveButton.removeAttribute(\"data-kt-indicator\");\n                } else {\n                  Swal.fire({\n                    text: \"Your action has been cancelled!.\",\n                    icon: \"error\",\n                    buttonsStyling: false,\n                    confirmButtonText: \"Ok, got it!\",\n                    customClass: {\n                      confirmButton: \"btn btn-primary\"\n                    }\n                  });\n                  saveButton.removeAttribute(\"data-kt-indicator\");\n                }\n              });\n            }, 500);\n          } else {\n            saveButton.removeAttribute(\"data-kt-indicator\");\n          }\n        });\n      }\n    });\n  }; // Count total number of items\n\n\n  var countTotalItems = function countTotalItems() {\n    var counter = document.getElementById('kt_file_manager_items_counter'); // Count total number of elements in datatable --- more info: https://datatables.net/reference/api/count()\n\n    counter.innerText = datatable.rows().count() + ' items';\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      table = document.querySelector('#kt_file_manager_list');\n\n      if (!table) {\n        return;\n      }\n\n      initDatatable();\n      initToggleToolbar();\n      handleSearchDatatable();\n      handleDeleteRows();\n      handleNewFolder();\n      initDropzone();\n      initCopyLink();\n      handleRename();\n      handleMoveToFolder();\n      countTotalItems();\n      KTMenu.createInstances();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFileManagerList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2ZpbGUtbWFuYWdlci9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVk7QUFDaEM7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsS0FBSixDQUhnQyxDQUtoQzs7QUFDQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFDNUI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUIsVUFBdkIsQ0FBbEI7QUFFQUQsSUFBQUEsU0FBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQixVQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0YsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxVQUFNSSxPQUFPLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQXZCLENBRnFCLENBRU87O0FBQzVCLFVBQU1FLFFBQVEsR0FBR0MsTUFBTSxDQUFDRixPQUFPLENBQUNHLFNBQVQsRUFBb0IsaUJBQXBCLENBQU4sQ0FBNkNDLE1BQTdDLEVBQWpCO0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQixZQUFyQixFQUFtQ0osUUFBbkM7QUFDSCxLQUxEO0FBT0EsUUFBTUssa0JBQWtCLEdBQUc7QUFDdkIsY0FBUSxLQURlO0FBRXZCLGVBQVMsRUFGYztBQUd2QixpQkFBVyxPQUhZO0FBSXZCLHdCQUFrQixJQUpLO0FBS3ZCLGdCQUFVLEtBTGE7QUFNdkIsa0JBQVksS0FOVztBQU92QixpQkFBVyxDQUNQO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BRE8sRUFFUDtBQUFFQSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUZPLEVBR1A7QUFBRUEsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FITyxFQUlQO0FBQUVBLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BSk8sRUFLUDtBQUFFQSxRQUFBQSxJQUFJLEVBQUU7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QUEscUJBQXFCO0FBQ3JCUCxNQUFBQSxnQkFBZ0I7QUFDaEJ3RCxNQUFBQSxlQUFlO0FBQ2Z5RixNQUFBQSxZQUFZO0FBQ1o1SSxNQUFBQSxZQUFZO0FBQ1o4SCxNQUFBQSxZQUFZO0FBQ1p1RCxNQUFBQSxrQkFBa0I7QUFDbEJwTCxNQUFBQSxlQUFlO0FBQ2ZILE1BQUFBLE1BQU0sQ0FBQ0MsZUFBUDtBQUNIO0FBbkJFLEdBQVA7QUFxQkgsQ0EvaUN1QixFQUF4QixDLENBaWpDQTs7O0FBQ0FrTSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENqTyxFQUFBQSxpQkFBaUIsQ0FBQytOLElBQWxCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FwcHMvZmlsZS1tYW5hZ2VyL2xpc3QuanM/YmQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURmlsZU1hbmFnZXJMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIERlZmluZSBzaGFyZWQgdmFyaWFibGVzXG4gICAgdmFyIGRhdGF0YWJsZTtcbiAgICB2YXIgdGFibGVcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGluaXREYXRhdGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFNldCBkYXRlIGRhdGEgb3JkZXJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcblxuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZUNvbCA9IGRhdGVSb3dbM107IC8vIHNlbGVjdCBkYXRlIGZyb20gNHRoIGNvbHVtbiBpbiB0YWJsZVxuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZUNvbC5pbm5lckhUTUwsIFwiREQgTU1NIFlZWVksIExUXCIpLmZvcm1hdCgpO1xuICAgICAgICAgICAgZGF0ZUNvbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZvbGRlcnNMaXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgXCJzY3JvbGxZXCI6IFwiNzAwcHhcIixcbiAgICAgICAgICAgIFwic2Nyb2xsQ29sbGFwc2VcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwicGFnaW5nXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ29yZGVyaW5nJzogZmFsc2UsXG4gICAgICAgICAgICAnY29sdW1ucyc6IFtcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICduYW1lJyB9LFxuICAgICAgICAgICAgICAgIHsgZGF0YTogJ3NpemUnIH0sXG4gICAgICAgICAgICAgICAgeyBkYXRhOiAnZGF0ZScgfSxcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdhY3Rpb24nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ2xhbmd1YWdlJzoge1xuICAgICAgICAgICAgICAgIGVtcHR5VGFibGU6IGA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL21lZGlhL2lsbHVzdHJhdGlvbnMvc2tldGNoeS0xLzUucG5nXCIgY2xhc3M9XCJtdy00MDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcy0xIGZ3LWJvbGRlciB0ZXh0LWRhcmtcIj5ObyBpdGVtcyBmb3VuZC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZzLTZcIj5TdGFydCBjcmVhdGluZyBuZXcgZm9sZGVycyBvciB1cGxvYWRpbmcgYSBuZXcgZmlsZSE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmlsZXNMaXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgJ3BhZ2VMZW5ndGgnOiAxMCxcbiAgICAgICAgICAgIFwibGVuZ3RoQ2hhbmdlXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ29yZGVyaW5nJzogZmFsc2UsXG4gICAgICAgICAgICAnY29sdW1ucyc6IFtcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICduYW1lJyB9LFxuICAgICAgICAgICAgICAgIHsgZGF0YTogJ3NpemUnIH0sXG4gICAgICAgICAgICAgICAgeyBkYXRhOiAnZGF0ZScgfSxcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdhY3Rpb24nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ2xhbmd1YWdlJzoge1xuICAgICAgICAgICAgICAgIGVtcHR5VGFibGU6IGA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL21lZGlhL2lsbHVzdHJhdGlvbnMvc2tldGNoeS0xLzUucG5nXCIgY2xhc3M9XCJtdy00MDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcy0xIGZ3LWJvbGRlciB0ZXh0LWRhcmsgbWItNFwiPk5vIGl0ZW1zIGZvdW5kLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnMtNlwiPlN0YXJ0IGNyZWF0aW5nIG5ldyBmb2xkZXJzIG9yIHVwbG9hZGluZyBhIG5ldyBmaWxlITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25kaXRpb25hbFBhZ2luZzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIERlZmluZSBkYXRhdGFibGUgb3B0aW9ucyB0byBsb2FkXG4gICAgICAgIHZhciBsb2FkT3B0aW9ucztcbiAgICAgICAgaWYodGFibGUuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWZpbGVtYW5hZ2VyLXRhYmxlJykgPT09ICdmb2xkZXJzJyl7XG4gICAgICAgICAgICBsb2FkT3B0aW9ucyA9IGZvbGRlcnNMaXN0T3B0aW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRPcHRpb25zID0gZmlsZXNMaXN0T3B0aW9ucztcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cbiAgICAgICAgZGF0YXRhYmxlID0gJCh0YWJsZSkuRGF0YVRhYmxlKGxvYWRPcHRpb25zKTtcblxuICAgICAgICAvLyBSZS1pbml0IGZ1bmN0aW9ucyBvbiBldmVyeSB0YWJsZSByZS1kcmF3IC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvZXZlbnQvZHJhd1xuICAgICAgICBkYXRhdGFibGUub24oJ2RyYXcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0VG9nZ2xlVG9vbGJhcigpO1xuICAgICAgICAgICAgaGFuZGxlRGVsZXRlUm93cygpO1xuICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTtcbiAgICAgICAgICAgIHJlc2V0TmV3Rm9sZGVyKCk7XG4gICAgICAgICAgICBLVE1lbnUuY3JlYXRlSW5zdGFuY2VzKCk7XG4gICAgICAgICAgICBpbml0Q29weUxpbmsoKTtcbiAgICAgICAgICAgIGNvdW50VG90YWxJdGVtcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggRGF0YXRhYmxlIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvYXBpL3NlYXJjaCgpXG4gICAgdmFyIGhhbmRsZVNlYXJjaERhdGF0YWJsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZmlsZW1hbmFnZXItdGFibGUtZmlsdGVyPVwic2VhcmNoXCJdJyk7XG4gICAgICAgIGZpbHRlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBkYXRhdGFibGUuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKS5kcmF3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBjdXN0b21lclxuICAgIHZhciBoYW5kbGVEZWxldGVSb3dzID0gKCkgPT4ge1xuICAgICAgICAvLyBTZWxlY3QgYWxsIGRlbGV0ZSBidXR0b25zXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1rdC1maWxlbWFuYWdlci10YWJsZS1maWx0ZXI9XCJkZWxldGVfcm93XCJdJyk7XG5cbiAgICAgICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgLy8gRGVsZXRlIGJ1dHRvbiBvbiBjbGlja1xuICAgICAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0IHBhcmVudCByb3dcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1c3RvbWVyIG5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpWzFdLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgIC8vIFN3ZWV0QWxlcnQyIHBvcCB1cCAtLS0gb2ZmaWNpYWwgZG9jcyByZWZlcmVuY2U6IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiArIGZpbGVOYW1lICsgXCI/XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCBjYW5jZWxcIixcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1hY3RpdmUtbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIGRlbGV0ZWQgXCIgKyBmaWxlTmFtZSArIFwiIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLnJvdygkKHBhcmVudCkpLnJlbW92ZSgpLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjdXN0b21lck5hbWUgKyBcIiB3YXMgbm90IGRlbGV0ZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSW5pdCB0b2dnbGUgdG9vbGJhclxuICAgIHZhciBpbml0VG9nZ2xlVG9vbGJhciA9ICgpID0+IHtcbiAgICAgICAgLy8gVG9nZ2xlIHNlbGVjdGVkIGFjdGlvbiB0b29sYmFyXG4gICAgICAgIC8vIFNlbGVjdCBhbGwgY2hlY2tib3hlc1xuICAgICAgICB2YXIgY2hlY2tib3hlcyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgaWYodGFibGUuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWZpbGVtYW5hZ2VyLXRhYmxlJykgPT09ICdmb2xkZXJzJyl7XG4gICAgICAgICAgICBjaGVja2JveGVzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNrdF9maWxlX21hbmFnZXJfbGlzdF93cmFwcGVyIFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50c1xuICAgICAgICBjb25zdCBkZWxldGVTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWZpbGVtYW5hZ2VyLXRhYmxlLXNlbGVjdD1cImRlbGV0ZV9zZWxlY3RlZFwiXScpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZWxldGUgc2VsZWN0ZWQgdG9vbGJhclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAvLyBDaGVja2JveCBvbiBjbGljayBldmVudFxuICAgICAgICAgICAgYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVsZXRlZCBzZWxlY3RlZCByb3dzXG4gICAgICAgIGRlbGV0ZVNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3dlZXRBbGVydDIgcG9wIHVwIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBzZWxlY3RlZCBmaWxlcyBvciBmb2xkZXJzP1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIGRlbGV0ZWQgYWxsIHNlbGVjdGVkICBmaWxlcyBvciBmb2xkZXJzIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0ZWQgY3VzdG9tZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQoYy5jbG9zZXN0KCd0Ym9keSB0cicpKSkucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaGVhZGVyIGNoZWNrZWQgYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJDaGVja2JveCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU2VsZWN0ZWQgIGZpbGVzIG9yIGZvbGRlcnMgd2FzIG5vdCBkZWxldGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHRvb2xiYXJzXG4gICAgY29uc3QgdG9nZ2xlVG9vbGJhcnMgPSAoKSA9PiB7XG4gICAgICAgIC8vIERlZmluZSB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgdG9vbGJhckJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1maWxlbWFuYWdlci10YWJsZS10b29sYmFyPVwiYmFzZVwiXScpO1xuICAgICAgICBjb25zdCB0b29sYmFyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1maWxlbWFuYWdlci10YWJsZS10b29sYmFyPVwic2VsZWN0ZWRcIl0nKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWZpbGVtYW5hZ2VyLXRhYmxlLXNlbGVjdD1cInNlbGVjdGVkX2NvdW50XCJdJyk7XG5cbiAgICAgICAgLy8gU2VsZWN0IHJlZnJlc2hlZCBjaGVja2JveCBET00gZWxlbWVudHMgXG4gICAgICAgIGNvbnN0IGFsbENoZWNrYm94ZXMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSBbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbiAgICAgICAgLy8gRGV0ZWN0IGNoZWNrYm94ZXMgc3RhdGUgJiBjb3VudFxuICAgICAgICBsZXQgY2hlY2tlZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gQ291bnQgY2hlY2tlZCBib3hlc1xuICAgICAgICBhbGxDaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBpZiAoYy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUb2dnbGUgdG9vbGJhcnNcbiAgICAgICAgaWYgKGNoZWNrZWRTdGF0ZSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRDb3VudC5pbm5lckhUTUwgPSBjb3VudDtcbiAgICAgICAgICAgIHRvb2xiYXJCYXNlLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgdG9vbGJhclNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9vbGJhckJhc2UuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB0b29sYmFyU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgbmV3IGZvbGRlclxuICAgIGNvbnN0IGhhbmRsZU5ld0ZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VsZWN0IGJ1dHRvblxuICAgICAgICBjb25zdCBuZXdGb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZmlsZV9tYW5hZ2VyX25ld19mb2xkZXInKTtcblxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgYWN0aW9uXG4gICAgICAgIG5ld0ZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBJZ25vcmUgaWYgaW5wdXQgYWxyZWFkeSBleGlzdFxuICAgICAgICAgICAgaWYgKHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNrdF9maWxlX21hbmFnZXJfbmV3X2ZvbGRlcl9yb3cnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyByb3cgZWxlbWVudHNcbiAgICAgICAgICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgY29uc3Qgcm93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3Qgcm93Q29sMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7IC8vIENoZWNrYm94IGNvbHVtblxuICAgICAgICAgICAgY29uc3Qgcm93Q29sMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7IC8vIE5hbWUgY29sdW1uXG4gICAgICAgICAgICBjb25zdCByb3dDb2wzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgLy8gU2l6ZSBjb2x1bW5cbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAvLyBEYXRlIGNvbHVtblxuICAgICAgICAgICAgY29uc3Qgcm93Q29sNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7IC8vIEFjdGlvbiBjb2x1bW5cbiAgICAgICAgICAgIGNvbnN0IHJvd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJvd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICAvLyBTZXQgZm9sZGVyIGljb25cbiAgICAgICAgICAgIGNvbnN0IGZvbGRlckljb25DbGFzc2VzID0gWydzdmctaWNvbicsICdzdmctaWNvbi0yeCcsICdzdmctaWNvbi1wcmltYXJ5JywgJ21lLTQnXTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlclVwbG9hZEljb24gPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+IDxwYXRoIG9wYWNpdHk9XCIwLjNcIiBkPVwiTTEwIDRIMjFDMjEuNiA0IDIyIDQuNCAyMiA1VjdIMTBWNFpcIiBmaWxsPVwiYmxhY2tcIj48L3BhdGg+IDxwYXRoIGQ9XCJNOS4yIDNIM0MyLjQgMyAyIDMuNCAyIDRWMTlDMiAxOS42IDIuNCAyMCAzIDIwSDIxQzIxLjYgMjAgMjIgMTkuNiAyMiAxOVY3QzIyIDYuNCAyMS42IDYgMjEgNkgxMkwxMC40IDMuNjAwMDFDMTAuMiAzLjIwMDAxIDkuNyAzIDkuMiAzWlwiIGZpbGw9XCJibGFja1wiPjwvcGF0aD4gPC9zdmc+YDtcbiAgICAgICAgICAgIGZvbGRlckljb24uY2xhc3NMaXN0LmFkZCguLi5mb2xkZXJJY29uQ2xhc3Nlcyk7XG4gICAgICAgICAgICBmb2xkZXJJY29uLmlubmVySFRNTCA9IGZvbGRlclVwbG9hZEljb247XG5cbiAgICAgICAgICAgIC8vIFNldCBnZW5lcmFsIHJvdyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICByb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAna3RfZmlsZV9tYW5hZ2VyX25ld19mb2xkZXJfcm93Jyk7XG4gICAgICAgICAgICByb3dDb2wyLmNsYXNzTGlzdC5hZGQoJ2Z2LXJvdycpO1xuICAgICAgICAgICAgY29uc3Qgcm93V3JhcHBlckNsYXNzZXMgPSBbJ2QtZmxleCcsICdhbGlnbi1pdGVtcy1jZW50ZXInXTtcbiAgICAgICAgICAgIHJvd1dyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5yb3dXcmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICAgICAgICAgIC8vIFNldCBpbnB1dCBlbGVtZW50IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IFsnZm9ybS1jb250cm9sJywgJ213LTI1MHB4JywgJ21lLTMnXTtcbiAgICAgICAgICAgIHJvd0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICByb3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3X2ZvbGRlcl9uYW1lJylcbiAgICAgICAgICAgIHJvd0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgdGhlIGZvbGRlciBuYW1lJyk7XG4gICAgICAgICAgICByb3dJbnB1dC5jbGFzc0xpc3QuYWRkKC4uLmlucHV0Q2xhc3Nlcyk7XG5cbiAgICAgICAgICAgIC8vIFNldCBidXR0b24gZWxlbWVudCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBjb25zdCByb3dCdXR0b25DbGFzc2VzID0gWydidG4nLCAnYnRuLWljb24nLCAnYnRuLWxpZ2h0LXByaW1hcnknLCAnbWUtMyddO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uSWNvbiA9IGA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLTFcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05Ljg5NTU3IDEzLjQ5ODJMNy43OTQ4NyAxMS4yNjUxQzcuMjY5NjcgMTAuNzA2OCA2LjM4MjUxIDEwLjcwNjggNS44NTczMSAxMS4yNjUxQzUuMzc1NTkgMTEuNzc3MiA1LjM3NTU5IDEyLjU3NTcgNS44NTczMSAxMy4wODc4TDkuNzQ5ODkgMTcuMjI1N0MxMC4xNDQ4IDE3LjY0NTUgMTAuODExOCAxNy42NDU1IDExLjIwNjYgMTcuMjI1N0wxOC4xNDI3IDkuODUyNTJDMTguNjI0NCA5LjM0MDQ0IDE4LjYyNDQgOC41NDE5MSAxOC4xNDI3IDguMDI5ODRDMTcuNjE3NSA3LjQ3MTU0IDE2LjczMDMgNy40NzE1NCAxNi4yMDUxIDguMDI5ODRMMTEuMDYxIDEzLjQ5ODJDMTAuNzQ1MSAxMy44MzQgMTAuMjExNSAxMy44MzQgOS44OTU1NyAxMy40OTgyWlwiIGZpbGw9XCJibGFja1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5gO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uSW5kaWNhdG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBidXR0b25JbmRpY2F0b3JMYWJlbC5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3ItbGFiZWwnKTtcbiAgICAgICAgICAgIGJ1dHRvbkluZGljYXRvckxhYmVsLmlubmVySFRNTCA9IGJ1dHRvbkljb247XG4gICAgICAgICAgICBjb25zdCBidXR0b25JbmRpY2F0b3JQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5uZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgY29uc3Qgc3Bpbm5lckNsYXNzZXMgPSBbJ3NwaW5uZXItYm9yZGVyJywgJ3NwaW5uZXItYm9yZGVyLXNtJywgJ2FsaWduLW1pZGRsZSddO1xuICAgICAgICAgICAgc3Bpbm5lckljb24uY2xhc3NMaXN0LmFkZCguLi5zcGlubmVyQ2xhc3Nlcyk7XG4gICAgICAgICAgICBidXR0b25JbmRpY2F0b3JQcm9ncmVzcy5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3ItcHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgIGJ1dHRvbkluZGljYXRvclByb2dyZXNzLmFwcGVuZENoaWxkKHNwaW5uZXJJY29uKTtcbiAgICAgICAgICAgIHJvd0J1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JbmRpY2F0b3JMYWJlbCk7XG4gICAgICAgICAgICByb3dCdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSW5kaWNhdG9yUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgcm93QnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4ucm93QnV0dG9uQ2xhc3Nlcyk7XG4gICAgICAgICAgICByb3dCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdrdF9maWxlX21hbmFnZXJfYWRkX2ZvbGRlcicpO1xuXG4gICAgICAgICAgICAvLyBTZXQgY2FuY2VsIGJ1dHRvbiBlbGVtZW50IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbkNsYXNzZXMgPSBbJ2J0bicsICdidG4taWNvbicsICdidG4tbGlnaHQtZGFuZ2VyJ107XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxJY29uID0gYDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tMVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBvcGFjaXR5PVwiMC41XCIgeD1cIjcuMDUwMjVcIiB5PVwiMTUuNTM1NlwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKC00NSA3LjA1MDI1IDE1LjUzNTYpXCIgZmlsbD1cImJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiOC40NjQ0N1wiIHk9XCI3LjA1MDI5XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgOC40NjQ0NyA3LjA1MDI5KVwiIGZpbGw9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5gO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsSW5kaWNhdG9yID0gYnV0dG9uSW5kaWNhdG9yTGFiZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY2FuY2VsSW5kaWNhdG9yLmlubmVySFRNTCA9IGNhbmNlbEljb247XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxTcGlubmVyID0gYnV0dG9uSW5kaWNhdG9yUHJvZ3Jlc3MuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFwcGVuZChjYW5jZWxJbmRpY2F0b3IpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFwcGVuZChjYW5jZWxTcGlubmVyKTtcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLmNhbmNlbEJ1dHRvbkNsYXNzZXMpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAna3RfZmlsZV9tYW5hZ2VyX2NhbmNlbF9mb2xkZXInKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzIGludG8gcm93XG4gICAgICAgICAgICByb3dXcmFwcGVyLmFwcGVuZChmb2xkZXJJY29uKTtcbiAgICAgICAgICAgIHJvd1dyYXBwZXIuYXBwZW5kKHJvd0lucHV0KTtcbiAgICAgICAgICAgIHJvd1dyYXBwZXIuYXBwZW5kKHJvd0J1dHRvbik7XG4gICAgICAgICAgICByb3dXcmFwcGVyLmFwcGVuZChjYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgcm93Q29sMi5hcHBlbmQocm93V3JhcHBlcik7XG4gICAgICAgICAgICByb3dFbGVtZW50LmFwcGVuZChyb3dDb2wxKTtcbiAgICAgICAgICAgIHJvd0VsZW1lbnQuYXBwZW5kKHJvd0NvbDIpO1xuICAgICAgICAgICAgcm93RWxlbWVudC5hcHBlbmQocm93Q29sMyk7XG4gICAgICAgICAgICByb3dFbGVtZW50LmFwcGVuZChyb3dDb2w0KTtcbiAgICAgICAgICAgIHJvd0VsZW1lbnQuYXBwZW5kKHJvd0NvbDUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbmV3IGJsYW5rIHJvdyB0byBkYXRhdGFibGVcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlQm9keSA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG4gICAgICAgICAgICB0YWJsZUJvZHkucHJlcGVuZChyb3dFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIHZhbGlkYXRvclxuICAgICAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICByb3dDb2wyLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbmV3X2ZvbGRlcl9uYW1lJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdGb2xkZXIgbmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIGFkZCBuZXcgZm9sZGVyIGJ1dHRvblxuICAgICAgICAgICAgcm93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWN0aXZhdGUgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgcm93QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XG5cbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgcHJvY2VzcyBmb3IgZGVtbyBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSBjaGVja2JveCBhbmQgYWN0aW9uIGRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tYmVnaW46OlNoYXJlIGxpbmstLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcy0yXCIgZGF0YS1rdC1maWxlbWFuZ2VyLXRhYmxlPVwiY29weV9saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1pY29uIGJ0bi1saWdodCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIiBkYXRhLWt0LW1lbnUtdHJpZ2dlcj1cImNsaWNrXCIgZGF0YS1rdC1tZW51LXBsYWNlbWVudD1cImJvdHRvbS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi01IG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggb3BhY2l0eT1cIjAuM1wiIGQ9XCJNMTguNCA1LjU5OTk4QzE4Ljc3NjYgNS45NzcyIDE4Ljk4ODEgNi40ODg0NiAxOC45ODgxIDcuMDIxNDhDMTguOTg4MSA3LjU1NDUxIDE4Ljc3NjYgOC4wNjU3NyAxOC40IDguNDQyOTlMMTQuODQzIDEyQzE0LjQ2NiAxMi4zNzcgMTMuOTU0NyAxMi41ODg3IDEzLjQyMTUgMTIuNTg4N0MxMi44ODgzIDEyLjU4ODcgMTIuMzc3IDEyLjM3NyAxMiAxMkMxMS42MjMgMTEuNjIzIDExLjQxMTIgMTEuMTExNyAxMS40MTEyIDEwLjU3ODVDMTEuNDExMiAxMC4wNDUzIDExLjYyMyA5LjUzMzk5IDEyIDkuMTU2OThMMTUuNTUzIDUuNjA0QzE1LjkzMDIgNS4yMjc0MSAxNi40NDE1IDUuMDE1ODcgMTYuOTc0NSA1LjAxNTg3QzE3LjUwNzUgNS4wMTU4NyAxOC4wMTg4IDUuMjI3NDEgMTguMzk2IDUuNjA0TDE4LjQgNS41OTk5OFpNMjAuNTI4IDMuNDcyMDVDMjAuMDYxNCAzLjAwNTM1IDE5LjUwNzQgMi42MzUwMyAxOC44OTc3IDIuMzgyNDVDMTguMjg4IDIuMTI5ODcgMTcuNjM0NCAxLjk5OTg4IDE2Ljk3NDUgMS45OTk4OEMxNi4zMTQ1IDEuOTk5ODggMTUuNjYxIDIuMTI5ODcgMTUuMDUxMyAyLjM4MjQ1QzE0LjQ0MTYgMi42MzUwMyAxMy44ODc2IDMuMDA1MzUgMTMuNDIxIDMuNDcyMDVMOS44NjgwMSA3LjAyNTAyQzkuNDAxMzYgNy40OTE2OCA5LjAzMTE4IDguMDQ1NjggOC43Nzg2MyA4LjY1NTRDOC41MjYwOCA5LjI2NTExIDguMzk2MDkgOS45MTg1NSA4LjM5NjA5IDEwLjU3ODVDOC4zOTYwOSAxMS4yMzg0IDguNTI2MDggMTEuODkxOSA4Ljc3ODYzIDEyLjUwMTZDOS4wMzExOCAxMy4xMTEzIDkuNDAxMzYgMTMuNjY1MyA5Ljg2ODAxIDE0LjEzMkMxMC4zMzQ3IDE0LjU5ODYgMTAuODg4NiAxNC45Njg4IDExLjQ5ODQgMTUuMjIxM0MxMi4xMDgxIDE1LjQ3MzkgMTIuNzYxNiAxNS42MDM5IDEzLjQyMTUgMTUuNjAzOUMxNC4wODE1IDE1LjYwMzkgMTQuNzM0OSAxNS40NzM5IDE1LjM0NDYgMTUuMjIxM0MxNS45NTQzIDE0Ljk2ODggMTYuNTA4NCAxNC41OTg2IDE2Ljk3NSAxNC4xMzJMMjAuNTI4IDEwLjU3OUMyMC45OTQ3IDEwLjExMjQgMjEuMzY0OSA5LjU1ODQ0IDIxLjYxNzUgOC45NDg3M0MyMS44NzAxIDguMzM5MDIgMjIuMDAwMSA3LjY4NTQ3IDIyLjAwMDEgNy4wMjU1MUMyMi4wMDAxIDYuMzY1NTUgMjEuODcwMSA1LjcxMjAxIDIxLjYxNzUgNS4xMDIyOUMyMS4zNjQ5IDQuNDkyNTggMjAuOTk0NyAzLjkzODY3IDIwLjUyOCAzLjQ3MjA1WlwiIGZpbGw9XCJibGFja1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjEzMiA5Ljg2ODA0QzEzLjY0MjEgOS4zNzkzMSAxMy4wNTYxIDguOTk3NDkgMTIuNDExIDguNzQ2OTVMMTIgOS4xNTY5OEMxMS42MjM0IDkuNTM0MjEgMTEuNDExOSAxMC4wNDU1IDExLjQxMTkgMTAuNTc4NUMxMS40MTE5IDExLjExMTUgMTEuNjIzNCAxMS42MjI4IDEyIDEyQzEyLjM3NjYgMTIuMzc3MiAxMi41ODgxIDEyLjg4ODUgMTIuNTg4MSAxMy40MjE1QzEyLjU4ODEgMTMuOTU0NSAxMi4zNzY2IDE0LjQ2NTggMTIgMTQuODQzTDguNDQ2OTkgMTguMzk2QzguMDY5OTkgMTguNzczIDcuNTU4NjggMTguOTg0OSA3LjAyNTUxIDE4Ljk4NDlDNi40OTIzNSAxOC45ODQ5IDUuOTgxMDEgMTguNzczIDUuNjA0IDE4LjM5NkM1LjIyNyAxOC4wMTkgNS4wMTUyIDE3LjUwNzcgNS4wMTUyIDE2Ljk3NDVDNS4wMTUyIDE2LjQ0MTMgNS4yMjcgMTUuOTMgNS42MDQgMTUuNTUzTDguNzQ3MDEgMTIuNDExQzguMjg3MDUgMTEuMjMzIDguMjg3MDUgOS45MjQ5OCA4Ljc0NzAxIDguNzQ2OTVDOC4xMDE1OSA4Ljk5NzM3IDcuNTE1MiA5LjM3OTE5IDcuMDI0OTkgOS44NjgwNEwzLjQ3MTk4IDEzLjQyMUMyLjUyOTU0IDE0LjM2MzUgMi4wMDAwOSAxNS42NDE3IDIuMDAwMDkgMTYuOTc0NUMyLjAwMDA5IDE4LjMwNzMgMi41Mjk1NyAxOS41ODU1IDMuNDcyMDIgMjAuNTI4QzQuNDE0NDYgMjEuNDcwNCA1LjY5MjY5IDIxLjk5OTkgNy4wMjU1MSAyMS45OTk5QzguMzU4MzMgMjEuOTk5OSA5LjYzNjU2IDIxLjQ3MDQgMTAuNTc5IDIwLjUyOEwxNC4xMzIgMTYuOTc1QzE0LjU5ODcgMTYuNTA4NCAxNC45Njg5IDE1Ljk1NDQgMTUuMjIxNSAxNS4zNDQ3QzE1LjQ3NDEgMTQuNzM1IDE1LjYwNDEgMTQuMDgxNSAxNS42MDQxIDEzLjQyMTVDMTUuNjA0MSAxMi43NjE1IDE1LjQ3NDEgMTIuMTA4IDE1LjIyMTUgMTEuNDk4M0MxNC45Njg5IDEwLjg4ODYgMTQuNTk4NyAxMC4zMzQ3IDE0LjEzMiA5Ljg2ODA0WlwiIGZpbGw9XCJibGFja1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWJlZ2luOjpNZW51LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUgbWVudS1zdWIgbWVudS1zdWItZHJvcGRvd24gbWVudS1jb2x1bW4gbWVudS1yb3VuZGVkIG1lbnUtZ3JheS02MDAgbWVudS1zdGF0ZS1iZy1saWdodC1wcmltYXJ5IGZ3LWJvbGQgZnMtNyB3LTMwMHB4XCIgZGF0YS1rdC1tZW51PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tYmVnaW46OkNhcmQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1mbHVzaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tYmVnaW46OkxvYWRlci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIiBkYXRhLWt0LWZpbGVtYW5nZXItdGFibGU9XCJjb3B5X2xpbmtfZ2VuZXJhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1iZWdpbjo6U3Bpbm5lci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWUtNVwiIGRhdGEta3QtaW5kaWNhdG9yPVwib25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5kaWNhdG9yLXByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSBhbGlnbi1taWRkbGUgbXMtMlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1lbmQ6OlNwaW5uZXItLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tYmVnaW46OkxhYmVsLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcy02IHRleHQtZGFya1wiPkdlbmVyYXRpbmcgU2hhcmUgTGluay4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kOjpMYWJlbC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1lbmQ6OkxvYWRlci0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWJlZ2luOjpMaW5rLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB0ZXh0LXN0YXJ0IGQtbm9uZVwiIGRhdGEta3QtZmlsZW1hbmdlci10YWJsZT1cImNvcHlfbGlua19yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3BocCBlY2hvIFRoZW1lOjpnZXRTdmdJY29uKCdpY29ucy9kdW90dW5lL2Fycm93cy9hcnIwODQuc3ZnJywgXCJzdmctaWNvbi0xIHN2Zy1pY29uLXN1Y2Nlc3MgbWUtM1wiKSA/PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZzLTYgdGV4dC1kYXJrXCI+U2hhcmUgTGluayBHZW5lcmF0ZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiIHZhbHVlPVwiaHR0cHM6Ly9wYXRoL3RvL2ZpbGUvb3IvZm9sZGVyL1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkIGZ3LW5vcm1hbCBmcy04IHB4LTNcIj5SZWFkIG9ubHkuIDxhIGhyZWY9XCI8P3BocCBlY2hvIFRoZW1lOjpnZXRQYWdlVXJsKCdhcHBzL2ZpbGUtbWFuYWdlci9zZXR0aW5ncy8nKSA/PlwiPkNoYW5nZSBwZXJtaXNzaW9uczwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kOjpMaW5rLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1lbmQ6OkNhcmQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kOjpNZW51LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWVuZDo6U2hhcmUgbGluay0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tYmVnaW46Ok1vcmUtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1pY29uIGJ0bi1saWdodCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIiBkYXRhLWt0LW1lbnUtdHJpZ2dlcj1cImNsaWNrXCIgZGF0YS1rdC1tZW51LXBsYWNlbWVudD1cImJvdHRvbS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdmctaWNvbiBzdmctaWNvbi01IG0tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjEwXCIgeT1cIjEwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCJibGFja1wiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTdcIiB5PVwiMTBcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cImJsYWNrXCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjEwXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCJibGFja1wiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWJlZ2luOjpNZW51LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUgbWVudS1zdWIgbWVudS1zdWItZHJvcGRvd24gbWVudS1jb2x1bW4gbWVudS1yb3VuZGVkIG1lbnUtZ3JheS02MDAgbWVudS1zdGF0ZS1iZy1saWdodC1wcmltYXJ5IGZ3LWJvbGQgZnMtNyB3LTE1MHB4IHB5LTRcIiBkYXRhLWt0LW1lbnU9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1iZWdpbjo6TWVudSBpdGVtLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIjw/cGhwIGVjaG8gVGhlbWU6OmdldFBhZ2VVcmwoJ2FwcHMvZmlsZS1tYW5hZ2VyL2ZpbGVzJykgPz5cIiBjbGFzcz1cIm1lbnUtbGluayBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWVuZDo6TWVudSBpdGVtLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWJlZ2luOjpNZW51IGl0ZW0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1saW5rIHB4LTNcIiBkYXRhLWt0LWZpbGVtYW5hZ2VyLXRhYmxlPVwicmVuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kOjpNZW51IGl0ZW0tLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tYmVnaW46Ok1lbnUgaXRlbS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtIHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtZW51LWxpbmsgcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIEZvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWVuZDo6TWVudSBpdGVtLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWJlZ2luOjpNZW51IGl0ZW0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbSBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1saW5rIHB4LTNcIiBkYXRhLWt0LWZpbGVtYW5hZ2VyLXRhYmxlLWZpbHRlcj1cIm1vdmVfcm93XCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI2t0X21vZGFsX21vdmVfdG9fZm9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW92ZSB0byBmb2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1lbmQ6Ok1lbnUgaXRlbS0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1iZWdpbjo6TWVudSBpdGVtLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1lbnUtbGluayB0ZXh0LWRhbmdlciBweC0zXCIgZGF0YS1rdC1maWxlbWFuYWdlci10YWJsZS1maWx0ZXI9XCJkZWxldGVfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kOjpNZW51IGl0ZW0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZW5kOjpNZW51LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWVuZDo6TW9yZS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2stc20gZm9ybS1jaGVjay1jdXN0b20gZm9ybS1jaGVjay1zb2xpZFwiPjxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIjFcIiAvPjwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGZvbGRlciBsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlckxpbmtDbGFzc2VzID0gWyd0ZXh0LWdyYXktODAwJywgJ3RleHQtaG92ZXItcHJpbWFyeSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICc/cGFnZT1hcHBzL2ZpbGUtbWFuYWdlci9ibGFuaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJMaW5rLmNsYXNzTGlzdC5hZGQoLi4uZm9sZGVyTGlua0NsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJMaW5rLmlubmVyVGV4dCA9IHJvd0lucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IGRhdGF0YWJsZS5yb3cuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGVja2JveCc6IGNoZWNrYm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBmb2xkZXJJY29uLm91dGVySFRNTCArIGZvbGRlckxpbmsub3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6ICctJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiAnLScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uJzogYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChuZXdSb3cpLmZpbmQoJ3RkJykuZXEoNCkuYXR0cignZGF0YS1rdC1maWxlbWFuYWdlci10YWJsZScsICdhY3Rpb25fZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChuZXdSb3cpLmZpbmQoJ3RkJykuZXEoNCkuYWRkQ2xhc3MoJ3RleHQtZW5kJyk7IC8vIEFkZCBjdXN0b20gY2xhc3MgdG8gbGFzdCAndGQnIGVsZW1lbnQgLS0tIG1vcmUgaW5mbzogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9mb3J1bXMvZGlzY3Vzc2lvbi8yMjM0MS9yb3ctYWRkLWNlbGwtY2xhc3NcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZS1zb3J0IGRhdGF0YWJsZSB0byBhbGxvdyBuZXcgZm9sZGVyIGFkZGVkIGF0IHRoZSB0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZGF0YXRhYmxlLnJvdygwKS5pbmRleCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQgPSBkYXRhdGFibGUuZGF0YSgpLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZFJvdyA9IGRhdGF0YWJsZS5yb3cocm93Q291bnQpLmRhdGEoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBSb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHJvd0NvdW50OyBpID4gaW5kZXg7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFJvdyA9IGRhdGF0YWJsZS5yb3coaSAtIDEpLmRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5yb3coaSkuZGF0YSh0ZW1wUm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5yb3coaSAtIDEpLmRhdGEoaW5zZXJ0ZWRSb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlQnV0dG9uXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYnVnXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdlc3RPblRvcFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3NCYXJcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldmVudER1cGxpY2F0ZXNcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlRHVyYXRpb25cIjogXCIxMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVPdXRcIjogXCI1MDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0Vhc2luZ1wiOiBcInN3aW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGVFYXNpbmdcIjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlTWV0aG9kXCI6IFwiZmFkZU91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3Mocm93SW5wdXQudmFsdWUgKyAnIHdhcyBjcmVhdGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUuZHJhdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgY2FuY2VsIG5ldyBmb2xkZXIgYnV0dG9uXG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBY3RpdmF0ZSBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0b2FzdHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlQnV0dG9uXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlYnVnXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdlc3RPblRvcFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3NCYXJcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldmVudER1cGxpY2F0ZXNcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3dEdXJhdGlvblwiOiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlRHVyYXRpb25cIjogXCIxMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVPdXRcIjogXCI1MDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4dGVuZGVkVGltZU91dFwiOiBcIjEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0Vhc2luZ1wiOiBcInN3aW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhpZGVFYXNpbmdcIjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd01ldGhvZFwiOiBcImZhZGVJblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlTWV0aG9kXCI6IFwiZmFkZU91dFwiXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdDYW5jZWxsZWQgbmV3IGZvbGRlciBjcmVhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICByZXNldE5ld0ZvbGRlcigpO1xuICAgICAgICAgICAgICAgIH0sMTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgYWRkIG5ldyBmb2xkZXIgaW5wdXRcbiAgICBjb25zdCByZXNldE5ld0ZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Rm9sZGVyUm93ID0gdGFibGUucXVlcnlTZWxlY3RvcignI2t0X2ZpbGVfbWFuYWdlcl9uZXdfZm9sZGVyX3JvdycpO1xuXG4gICAgICAgIGlmIChuZXdGb2xkZXJSb3cpIHtcbiAgICAgICAgICAgIG5ld0ZvbGRlclJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0ZvbGRlclJvdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcmVuYW1lIGZpbGUgb3IgZm9sZGVyXG4gICAgY29uc3QgaGFuZGxlUmVuYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZW5hbWVCdXR0b24gPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1rdC1maWxlbWFuYWdlci10YWJsZT1cInJlbmFtZVwiXScpO1xuICAgICAgICBsZXQgbmFtZVZhbHVlO1xuXG4gICAgICAgIHJlbmFtZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgcGFyZW50IHJvd1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgbmFtZSBjb2x1bW5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lQ29sID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgY29sSWNvbiA9IG5hbWVDb2wucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJyk7XG4gICAgICAgICAgICAgICAgbmFtZVZhbHVlID0gbmFtZUNvbC5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgcmVuYW1lIGlucHV0IHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgcmVuYW1lSW5wdXQgPSBgPGRpdiBjbGFzcz1cImZ2LXJvd1wiPjxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICR7Y29sSWNvbi5vdXRlckhUTUx9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwia3RfZmlsZV9tYW5hZ2VyX3JlbmFtZV9pbnB1dFwiIG5hbWU9XCJyZW5hbWVfZm9sZGVyX25hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBuZXcgZm9sZGVyIG5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdy0yNTBweCBtZS0zXCIgdmFsdWU9XCIke25hbWVWYWx1ZX1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pY29uIGJ0bi1saWdodC1wcmltYXJ5IG1lLTNcIiBpZD1cImt0X2ZpbGVfbWFuYWdlcl9yZW5hbWVfZm9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN2Zy1pY29uIHN2Zy1pY29uLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05Ljg5NTU3IDEzLjQ5ODJMNy43OTQ4NyAxMS4yNjUxQzcuMjY5NjcgMTAuNzA2OCA2LjM4MjUxIDEwLjcwNjggNS44NTczMSAxMS4yNjUxQzUuMzc1NTkgMTEuNzc3MiA1LjM3NTU5IDEyLjU3NTcgNS44NTczMSAxMy4wODc4TDkuNzQ5ODkgMTcuMjI1N0MxMC4xNDQ4IDE3LjY0NTUgMTAuODExOCAxNy42NDU1IDExLjIwNjYgMTcuMjI1N0wxOC4xNDI3IDkuODUyNTJDMTguNjI0NCA5LjM0MDQ0IDE4LjYyNDQgOC41NDE5MSAxOC4xNDI3IDguMDI5ODRDMTcuNjE3NSA3LjQ3MTU0IDE2LjczMDMgNy40NzE1NCAxNi4yMDUxIDguMDI5ODRMMTEuMDYxIDEzLjQ5ODJDMTAuNzQ1MSAxMy44MzQgMTAuMjExNSAxMy44MzQgOS44OTU1NyAxMy40OTgyWlwiIGZpbGw9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLWxpZ2h0LWRhbmdlclwiIGlkPVwia3RfZmlsZV9tYW5hZ2VyX3JlbmFtZV9mb2xkZXJfY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvci1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ZnLWljb24gc3ZnLWljb24tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IG9wYWNpdHk9XCIwLjVcIiB4PVwiNy4wNTAyNVwiIHk9XCIxNS41MzU2XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTQ1IDcuMDUwMjUgMTUuNTM1NilcIiBmaWxsPVwiYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiOC40NjQ0N1wiIHk9XCI3LjA1MDI5XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUgOC40NjQ0NyA3LjA1MDI5KVwiIGZpbGw9XCJibGFja1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3ItcHJvZ3Jlc3NcIj48c3BhbiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIGFsaWduLW1pZGRsZVwiPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICAvLyBTd2FwIGN1cnJlbnQgY29sdW1uIGNvbnRlbnQgd2l0aCBpbnB1dCB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIG5hbWVDb2wuaW5uZXJIVE1MID0gcmVuYW1lSW5wdXQ7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW5hbWUgZmlsZSAvIGZvbGRlciB2YWxpZGF0b3JcbiAgICAgICAgICAgICAgICB2YXIgcmVuYW1lVmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIG5hbWVDb2wsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZW5hbWVfZm9sZGVyX25hbWUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ05hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbmFtZSBpbnB1dCBidXR0b24gYWN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgcmVuYW1lSW5wdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZmlsZV9tYW5hZ2VyX3JlbmFtZV9mb2xkZXInKTtcbiAgICAgICAgICAgICAgICByZW5hbWVJbnB1dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW5hbWVWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmFtZVZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0ZWQhJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUG9wIHVwIGNvbmZpcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVuYW1lIFwiICsgbmFtZVZhbHVlICsgXCI/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIHJlbmFtZSBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSByZW5hbWVkIFwiICsgbmFtZVZhbHVlICsgXCIhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBuZXcgZmlsZSAvIGZvbGRlciBuYW1lIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2ZpbGVfbWFuYWdlcl9yZW5hbWVfaW5wdXQnKS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXcgY29sdW1uIGRhdGEgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IGA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb2xJY29uLm91dGVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCI/cGFnZT1hcHBzL2ZpbGUtbWFuYWdlci9maWxlcy9cIiBjbGFzcz1cInRleHQtZ3JheS04MDAgdGV4dC1ob3Zlci1wcmltYXJ5XCI+JHtuZXdWYWx1ZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhdyBkYXRhdGFibGUgd2l0aCBuZXcgY29udGVudCAtLSBBZGQgbW9yZSBldmVudHMgaGVyZSBmb3IgYW55IHNlcnZlci1zaWRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUuY2VsbCgkKG5hbWVDb2wpKS5kYXRhKG5ld0RhdGEpLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmFtZVZhbHVlICsgXCIgd2FzIG5vdCByZW5hbWVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FuY2VsIHJlbmFtZSBpbnB1dFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbElucHV0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2ZpbGVfbWFuYWdlcl9yZW5hbWVfZm9sZGVyX2NhbmNlbCcpO1xuICAgICAgICAgICAgICAgIGNhbmNlbElucHV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBwcm9jZXNzIGZvciBkZW1vIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsSW5wdXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmVydFRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb2xJY29uLm91dGVySFRNTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiP3BhZ2U9YXBwcy9maWxlLW1hbmFnZXIvZmlsZXMvXCIgY2xhc3M9XCJ0ZXh0LWdyYXktODAwIHRleHQtaG92ZXItcHJpbWFyeVwiPiR7bmFtZVZhbHVlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBzcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxJbnB1dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhdyBkYXRhdGFibGUgd2l0aCBuZXcgY29udGVudCAtLSBBZGQgbW9yZSBldmVudHMgaGVyZSBmb3IgYW55IHNlcnZlci1zaWRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLmNlbGwoJChuYW1lQ29sKSkuZGF0YShyZXZlcnRUZW1wbGF0ZSkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbml0IGRyb3B6b25lXG4gICAgY29uc3QgaW5pdERyb3B6b25lID0gKCkgPT4ge1xuICAgICAgICAvLyBzZXQgdGhlIGRyb3B6b25lIGNvbnRhaW5lciBpZFxuICAgICAgICBjb25zdCBpZCA9IFwiI2t0X21vZGFsX3VwbG9hZF9kcm9wem9uZVwiO1xuICAgICAgICBjb25zdCBkcm9wem9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgcHJldmlldyBlbGVtZW50IHRlbXBsYXRlXG4gICAgICAgIHZhciBwcmV2aWV3Tm9kZSA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcHpvbmUtaXRlbVwiKTtcbiAgICAgICAgcHJldmlld05vZGUuaWQgPSBcIlwiO1xuICAgICAgICB2YXIgcHJldmlld1RlbXBsYXRlID0gcHJldmlld05vZGUucGFyZW50Tm9kZS5pbm5lckhUTUw7XG4gICAgICAgIHByZXZpZXdOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJldmlld05vZGUpO1xuXG4gICAgICAgIHZhciBteURyb3B6b25lID0gbmV3IERyb3B6b25lKGlkLCB7IC8vIE1ha2UgdGhlIHdob2xlIGJvZHkgYSBkcm9wem9uZVxuICAgICAgICAgICAgdXJsOiBcInBhdGgvdG8veW91ci9zZXJ2ZXJcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxuICAgICAgICAgICAgcGFyYWxsZWxVcGxvYWRzOiAxMCxcbiAgICAgICAgICAgIHByZXZpZXdUZW1wbGF0ZTogcHJldmlld1RlbXBsYXRlLFxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEsIC8vIE1heCBmaWxlc2l6ZSBpbiBNQlxuICAgICAgICAgICAgYXV0b1Byb2Nlc3NRdWV1ZTogZmFsc2UsIC8vIFN0b3AgYXV0byB1cGxvYWRcbiAgICAgICAgICAgIGF1dG9RdWV1ZTogZmFsc2UsIC8vIE1ha2Ugc3VyZSB0aGUgZmlsZXMgYXJlbid0IHF1ZXVlZCB1bnRpbCBtYW51YWxseSBhZGRlZFxuICAgICAgICAgICAgcHJldmlld3NDb250YWluZXI6IGlkICsgXCIgLmRyb3B6b25lLWl0ZW1zXCIsIC8vIERlZmluZSB0aGUgY29udGFpbmVyIHRvIGRpc3BsYXkgdGhlIHByZXZpZXdzXG4gICAgICAgICAgICBjbGlja2FibGU6IGlkICsgXCIgLmRyb3B6b25lLXNlbGVjdFwiIC8vIERlZmluZSB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGNsaWNrIHRyaWdnZXIgdG8gc2VsZWN0IGZpbGVzLlxuICAgICAgICB9KTtcblxuICAgICAgICBteURyb3B6b25lLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAvLyBIb29rIGVhY2ggc3RhcnQgYnV0dG9uXG4gICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaWQgKyBcIiAuZHJvcHpvbmUtc3RhcnRcIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBteURyb3B6b25lLmVucXVldWVGaWxlKGZpbGUpOyAtLSBkZWZhdWx0IGRyb3B6b25lIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHNpbXVsYXRpb24gZm9yIGRlbW8gb25seVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyJyk7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGggPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteURyb3B6b25lLmVtaXQoXCJzdWNjZXNzXCIsIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlEcm9wem9uZS5lbWl0KFwiY29tcGxldGVcIiwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcHpvbmVJdGVtcyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wem9uZS1pdGVtJyk7XG4gICAgICAgICAgICBkcm9wem9uZUl0ZW1zLmZvckVhY2goZHJvcHpvbmVJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtdXBsb2FkJykuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtcmVtb3ZlLWFsbCcpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIaWRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXIgd2hlbiBub3RoaW5nJ3MgdXBsb2FkaW5nIGFueW1vcmVcbiAgICAgICAgbXlEcm9wem9uZS5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0JhcnMgPSBkcm9wem9uZS5xdWVyeVNlbGVjdG9yQWxsKCcuZHotY29tcGxldGUnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFycy5mb3JFYWNoKHByb2dyZXNzQmFyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhcicpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIucXVlcnlTZWxlY3RvcignLnByb2dyZXNzJykuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtc3RhcnQnKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXR1cCB0aGUgYnV0dG9ucyBmb3IgYWxsIHRyYW5zZmVyc1xuICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKFwiLmRyb3B6b25lLXVwbG9hZFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIG15RHJvcHpvbmUucHJvY2Vzc1F1ZXVlKCk7IC0tLSBkZWZhdWx0IGRyb3B6b25lIHByb2Nlc3NcblxuICAgICAgICAgICAgLy8gUHJvY2VzcyBzaW11bGF0aW9uIGZvciBkZW1vIG9ubHlcbiAgICAgICAgICAgIG15RHJvcHpvbmUuZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhcicpO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAxO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoID49IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlEcm9wem9uZS5lbWl0KFwic3VjY2Vzc1wiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15RHJvcHpvbmUuZW1pdChcImNvbXBsZXRlXCIsIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSB3aWR0aCArICclJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXR1cCB0aGUgYnV0dG9uIGZvciByZW1vdmUgYWxsIGZpbGVzXG4gICAgICAgIGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcHpvbmUtcmVtb3ZlLWFsbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gcmVtb3ZlIGFsbCBmaWxlcz9cIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIHJlbW92ZSBpdCFcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmUucXVlcnlTZWxlY3RvcignLmRyb3B6b25lLXVwbG9hZCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgZHJvcHpvbmUucXVlcnlTZWxlY3RvcignLmRyb3B6b25lLXJlbW92ZS1hbGwnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIG15RHJvcHpvbmUucmVtb3ZlQWxsRmlsZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91ciBmaWxlcyB3YXMgbm90IHJlbW92ZWQhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9uIGFsbCBmaWxlcyBjb21wbGV0ZWQgdXBsb2FkXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJxdWV1ZWNvbXBsZXRlXCIsIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgY29uc3QgdXBsb2FkSWNvbnMgPSBkcm9wem9uZS5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcHpvbmUtdXBsb2FkJyk7XG4gICAgICAgICAgICB1cGxvYWRJY29ucy5mb3JFYWNoKHVwbG9hZEljb24gPT4ge1xuICAgICAgICAgICAgICAgIHVwbG9hZEljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9uIGFsbCBmaWxlcyByZW1vdmVkXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJyZW1vdmVkZmlsZVwiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgaWYgKG15RHJvcHpvbmUuZmlsZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wem9uZS11cGxvYWQnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmUucXVlcnlTZWxlY3RvcignLmRyb3B6b25lLXJlbW92ZS1hbGwnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEluaXQgY29weSBsaW5rXG4gICAgY29uc3QgaW5pdENvcHlMaW5rID0gKCkgPT4ge1xuICAgICAgICAvLyBTZWxlY3QgYWxsIGNvcHkgbGluayBlbGVtZW50c1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LWZpbGVtYW5nZXItdGFibGU9XCJjb3B5X2xpbmtcIl0nKTtcblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIC8vIERlZmluZSBlbGVtZW50c1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZWwucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1maWxlbWFuZ2VyLXRhYmxlPVwiY29weV9saW5rX2dlbmVyYXRvclwiXScpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWwucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZmlsZW1hbmdlci10YWJsZT1cImNvcHlfbGlua19yZXN1bHRcIl0nKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgICAgICAgICAgLy8gQ2xpY2sgYWN0aW9uXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0b2dnbGVcbiAgICAgICAgICAgICAgICBnZW5lcmF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxpbmtUaW1lb3V0O1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsaW5rVGltZW91dCk7XG4gICAgICAgICAgICAgICAgbGlua1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdG9yLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBtb3ZlIHRvIGZvbGRlclxuICAgIGNvbnN0IGhhbmRsZU1vdmVUb0ZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9tb3ZlX3RvX2ZvbGRlcicpO1xuICAgICAgICBjb25zdCBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfbW92ZV90b19mb2xkZXJfZm9ybScpO1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfbW92ZV90b19mb2xkZXJfc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IG1vdmVNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ21vdmVfdG9fZm9sZGVyJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgZm9sZGVyLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgcHJvY2VzcyBmb3IgZGVtbyBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIG1vdmUgdG8gdGhpcyBmb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBtb3ZlIGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTsgLy8gUmVzZXQgZm9ybVx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTW9kYWwuaGlkZSgpOyAvLyBIaWRlIG1vZGFsXHRcdFx0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYnVnXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmV3ZXN0T25Ub3BcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0JhclwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXZlbnREdXBsaWNhdGVzXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0R1cmF0aW9uXCI6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlRHVyYXRpb25cIjogXCIxMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lT3V0XCI6IFwiNTAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0ZW5kZWRUaW1lT3V0XCI6IFwiMTAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0Vhc2luZ1wiOiBcInN3aW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlRWFzaW5nXCI6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TWV0aG9kXCI6IFwiZmFkZUluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlTWV0aG9kXCI6IFwiZmFkZU91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcygnMSBpdGVtIGhhcyBiZWVuIG1vdmVkLicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdXIgYWN0aW9uIGhhcyBiZWVuIGNhbmNlbGxlZCEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvdW50IHRvdGFsIG51bWJlciBvZiBpdGVtc1xuICAgIGNvbnN0IGNvdW50VG90YWxJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9maWxlX21hbmFnZXJfaXRlbXNfY291bnRlcicpO1xuXG4gICAgICAgIC8vIENvdW50IHRvdGFsIG51bWJlciBvZiBlbGVtZW50cyBpbiBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbzogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvYXBpL2NvdW50KClcbiAgICAgICAgY291bnRlci5pbm5lclRleHQgPSBkYXRhdGFibGUucm93cygpLmNvdW50KCkgKyAnIGl0ZW1zJzsgXG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9maWxlX21hbmFnZXJfbGlzdCcpO1xuXG4gICAgICAgICAgICBpZiAoIXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbml0RGF0YXRhYmxlKCk7XG4gICAgICAgICAgICBpbml0VG9nZ2xlVG9vbGJhcigpO1xuICAgICAgICAgICAgaGFuZGxlU2VhcmNoRGF0YXRhYmxlKCk7XG4gICAgICAgICAgICBoYW5kbGVEZWxldGVSb3dzKCk7XG4gICAgICAgICAgICBoYW5kbGVOZXdGb2xkZXIoKTtcbiAgICAgICAgICAgIGluaXREcm9wem9uZSgpO1xuICAgICAgICAgICAgaW5pdENvcHlMaW5rKCk7XG4gICAgICAgICAgICBoYW5kbGVSZW5hbWUoKTtcbiAgICAgICAgICAgIGhhbmRsZU1vdmVUb0ZvbGRlcigpO1xuICAgICAgICAgICAgY291bnRUb3RhbEl0ZW1zKCk7XG4gICAgICAgICAgICBLVE1lbnUuY3JlYXRlSW5zdGFuY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEZpbGVNYW5hZ2VyTGlzdC5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RGaWxlTWFuYWdlckxpc3QiLCJkYXRhdGFibGUiLCJ0YWJsZSIsImluaXREYXRhdGFibGUiLCJ0YWJsZVJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJvdyIsImRhdGVSb3ciLCJkYXRlQ29sIiwicmVhbERhdGUiLCJtb21lbnQiLCJpbm5lckhUTUwiLCJmb3JtYXQiLCJzZXRBdHRyaWJ1dGUiLCJmb2xkZXJzTGlzdE9wdGlvbnMiLCJkYXRhIiwiZW1wdHlUYWJsZSIsImZpbGVzTGlzdE9wdGlvbnMiLCJjb25kaXRpb25hbFBhZ2luZyIsImxvYWRPcHRpb25zIiwiZ2V0QXR0cmlidXRlIiwiJCIsIkRhdGFUYWJsZSIsIm9uIiwiaW5pdFRvZ2dsZVRvb2xiYXIiLCJoYW5kbGVEZWxldGVSb3dzIiwidG9nZ2xlVG9vbGJhcnMiLCJyZXNldE5ld0ZvbGRlciIsIktUTWVudSIsImNyZWF0ZUluc3RhbmNlcyIsImluaXRDb3B5TGluayIsImNvdW50VG90YWxJdGVtcyIsImhhbmRsZVNlYXJjaERhdGF0YWJsZSIsImZpbHRlclNlYXJjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkcmF3IiwiZGVsZXRlQnV0dG9ucyIsImQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJmaWxlTmFtZSIsImlubmVyVGV4dCIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ0aGVuIiwicmVzdWx0IiwicmVtb3ZlIiwiZGlzbWlzcyIsImN1c3RvbWVyTmFtZSIsImNoZWNrYm94ZXMiLCJkZWxldGVTZWxlY3RlZCIsImMiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNoZWNrZWQiLCJoZWFkZXJDaGVja2JveCIsInRvb2xiYXJCYXNlIiwidG9vbGJhclNlbGVjdGVkIiwic2VsZWN0ZWRDb3VudCIsImFsbENoZWNrYm94ZXMiLCJjaGVja2VkU3RhdGUiLCJjb3VudCIsImNsYXNzTGlzdCIsImFkZCIsImhhbmRsZU5ld0ZvbGRlciIsIm5ld0ZvbGRlciIsImdldEVsZW1lbnRCeUlkIiwicm93RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyb3dXcmFwcGVyIiwicm93Q29sMSIsInJvd0NvbDIiLCJyb3dDb2wzIiwicm93Q29sNCIsInJvd0NvbDUiLCJyb3dJbnB1dCIsInJvd0J1dHRvbiIsImZvbGRlckljb24iLCJmb2xkZXJJY29uQ2xhc3NlcyIsImZvbGRlclVwbG9hZEljb24iLCJyb3dXcmFwcGVyQ2xhc3NlcyIsImlucHV0Q2xhc3NlcyIsInJvd0J1dHRvbkNsYXNzZXMiLCJidXR0b25JY29uIiwiYnV0dG9uSW5kaWNhdG9yTGFiZWwiLCJidXR0b25JbmRpY2F0b3JQcm9ncmVzcyIsInNwaW5uZXJJY29uIiwic3Bpbm5lckNsYXNzZXMiLCJhcHBlbmRDaGlsZCIsImNhbmNlbEJ1dHRvbkNsYXNzZXMiLCJjYW5jZWxJY29uIiwiY2FuY2VsSW5kaWNhdG9yIiwiY2xvbmVOb2RlIiwiY2FuY2VsU3Bpbm5lciIsImFwcGVuZCIsInRhYmxlQm9keSIsInByZXBlbmQiLCJ2YWxpZGF0b3IiLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsImVsZUludmFsaWRDbGFzcyIsImVsZVZhbGlkQ2xhc3MiLCJ2YWxpZGF0ZSIsInN0YXR1cyIsImFjdGlvbiIsImNoZWNrYm94IiwiZm9sZGVyTGluayIsImZvbGRlckxpbmtDbGFzc2VzIiwibmV3Um93Iiwib3V0ZXJIVE1MIiwibm9kZSIsImZpbmQiLCJlcSIsImF0dHIiLCJhZGRDbGFzcyIsImluZGV4Iiwicm93Q291bnQiLCJsZW5ndGgiLCJpbnNlcnRlZFJvdyIsInRlbXBSb3ciLCJpIiwidG9hc3RyIiwib3B0aW9ucyIsInN1Y2Nlc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJlcnJvciIsIm5ld0ZvbGRlclJvdyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhhbmRsZVJlbmFtZSIsInJlbmFtZUJ1dHRvbiIsIm5hbWVWYWx1ZSIsImJ1dHRvbiIsIm5hbWVDb2wiLCJjb2xJY29uIiwicmVuYW1lSW5wdXQiLCJyZW5hbWVWYWxpZGF0b3IiLCJyZW5hbWVJbnB1dEJ1dHRvbiIsIm5ld1ZhbHVlIiwibmV3RGF0YSIsImNlbGwiLCJjYW5jZWxJbnB1dEJ1dHRvbiIsInJldmVydFRlbXBsYXRlIiwiaW5pdERyb3B6b25lIiwiaWQiLCJkcm9wem9uZSIsInByZXZpZXdOb2RlIiwicHJldmlld1RlbXBsYXRlIiwibXlEcm9wem9uZSIsIkRyb3B6b25lIiwidXJsIiwicGFyYWxsZWxVcGxvYWRzIiwibWF4RmlsZXNpemUiLCJhdXRvUHJvY2Vzc1F1ZXVlIiwiYXV0b1F1ZXVlIiwicHJldmlld3NDb250YWluZXIiLCJjbGlja2FibGUiLCJmaWxlIiwicHJldmlld0VsZW1lbnQiLCJvbmNsaWNrIiwicHJvZ3Jlc3NCYXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJ3aWR0aCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJlbWl0IiwiY2xlYXJJbnRlcnZhbCIsImRyb3B6b25lSXRlbXMiLCJkcm9wem9uZUl0ZW0iLCJkaXNwbGF5IiwicHJvZ3Jlc3NCYXJzIiwiZmlsZXMiLCJyZW1vdmVBbGxGaWxlcyIsInByb2dyZXNzIiwidXBsb2FkSWNvbnMiLCJ1cGxvYWRJY29uIiwiZWxlbWVudHMiLCJlbCIsImdlbmVyYXRvciIsImlucHV0IiwibGlua1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZWxlY3QiLCJoYW5kbGVNb3ZlVG9Gb2xkZXIiLCJlbGVtZW50IiwiZm9ybSIsInNhdmVCdXR0b24iLCJtb3ZlTW9kYWwiLCJNb2RhbCIsImlzQ29uZmlybWVkIiwicmVzZXQiLCJoaWRlIiwiY291bnRlciIsInJvd3MiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/file-manager/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/file-manager/list.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=list.js.map