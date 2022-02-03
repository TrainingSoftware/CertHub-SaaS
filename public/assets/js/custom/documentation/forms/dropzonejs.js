/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************!*\
  !*** ../src/js/custom/documentation/forms/dropzonejs.js ***!
  \**********************************************************/


// Class definition
var KTFormsDropzoneJSDemos = function () {
    // Private functions
    var exampleBasic = function () {
        // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage
        var myDropzone = new Dropzone("#kt_dropzonejs_example_1", {
            url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
            paramName: "file", // The name that will be used to transfer the file
            maxFiles: 10,
            maxFilesize: 10, // MB
            addRemoveLinks: true,
            accept: function (file, done) {
                if (file.name == "wow.jpg") {
                    done("Naha, you don't.");
                } else {
                    done();
                }
            }
        });
    }

    var exampleQueue = function () {
        // set the dropzone container id
        const id = "#kt_dropzonejs_example_2";
        const dropzone = document.querySelector(id);

        // set the preview element template
        var previewNode = dropzone.querySelector(".dropzone-item");
        previewNode.id = "";
        var previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);

        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: "https://preview.keenthemes.com/api/dropzone/void.php", // Set the url for your upload script location
            parallelUploads: 20,
            previewTemplate: previewTemplate,
            maxFilesize: 1, // Max filesize in MB
            autoQueue: false, // Make sure the files aren't queued until manually added
            previewsContainer: id + " .dropzone-items", // Define the container to display the previews
            clickable: id + " .dropzone-select" // Define the element that should be used as click trigger to select files.
        });

        myDropzone.on("addedfile", function (file) {
            // Hookup the start button
            file.previewElement.querySelector(id + " .dropzone-start").onclick = function () { myDropzone.enqueueFile(file); };
            const dropzoneItems = dropzone.querySelectorAll('.dropzone-item');
            dropzoneItems.forEach(dropzoneItem => {
                dropzoneItem.style.display = '';
            });
            dropzone.querySelector('.dropzone-upload').style.display = "inline-block";
            dropzone.querySelector('.dropzone-remove-all').style.display = "inline-block";
        });

        // Update the total progress bar
        myDropzone.on("totaluploadprogress", function (progress) {
            const progressBars = dropzone.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                progressBar.style.width = progress + "%";
            });
        });

        myDropzone.on("sending", function (file) {
            // Show the total progress bar when upload starts
            const progressBars = dropzone.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                progressBar.style.opacity = "1";
            });
            // And disable the start button
            file.previewElement.querySelector(id + " .dropzone-start").setAttribute("disabled", "disabled");
        });

        // Hide the total progress bar when nothing's uploading anymore
        myDropzone.on("complete", function (progress) {
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
            myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
        });

        // Setup the button for remove all files
        dropzone.querySelector(".dropzone-remove-all").addEventListener('click', function () {
            dropzone.querySelector('.dropzone-upload').style.display = "none";
            dropzone.querySelector('.dropzone-remove-all').style.display = "none";
            myDropzone.removeAllFiles(true);
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

    var exampleQueueAutoUpload = function () {
        // set the dropzone container id
        const id = "#kt_dropzonejs_example_3";
        const dropzone = document.querySelector(id);

        // set the preview element template
        var previewNode = dropzone.querySelector(".dropzone-item");
        previewNode.id = "";
        var previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);

        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: "https://preview.keenthemes.com/api/dropzone/void.php", // Set the url for your upload script location
            parallelUploads: 20,
            maxFilesize: 1, // Max filesize in MB
            previewTemplate: previewTemplate,
            previewsContainer: id + " .dropzone-items", // Define the container to display the previews
            clickable: id + " .dropzone-select" // Define the element that should be used as click trigger to select files.
        });


        myDropzone.on("addedfile", function (file) {
            // Hookup the start button
            const dropzoneItems = dropzone.querySelectorAll('.dropzone-item');
            dropzoneItems.forEach(dropzoneItem => {
                dropzoneItem.style.display = '';
            });
        });

        // Update the total progress bar
        myDropzone.on("totaluploadprogress", function (progress) {
            const progressBars = dropzone.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                progressBar.style.width = progress + "%";
            });
        });

        myDropzone.on("sending", function (file) {
            // Show the total progress bar when upload starts
            const progressBars = dropzone.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                progressBar.style.opacity = "1";
            });
        });

        // Hide the total progress bar when nothing"s uploading anymore
        myDropzone.on("complete", function (progress) {
            const progressBars = dropzone.querySelectorAll('.dz-complete');

            setTimeout(function () {
                progressBars.forEach(progressBar => {
                    progressBar.querySelector('.progress-bar').style.opacity = "0";
                    progressBar.querySelector('.progress').style.opacity = "0";
                });
            }, 300);
        });
    }

    return {
        // Public Functions
        init: function (element) {
            exampleBasic();
            exampleQueue();
            exampleQueueAutoUpload();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsDropzoneJSDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/dropzonejs.js":
/*!*******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/dropzonejs.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsDropzoneJSDemos = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_dropzonejs_example_1\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"wow.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var exampleQueue = function exampleQueue() {\n    // set the dropzone container id\n    var id = \"#kt_dropzonejs_example_2\";\n    var dropzone = document.querySelector(id); // set the preview element template\n\n    var previewNode = dropzone.querySelector(\".dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parentNode.innerHTML;\n    previewNode.parentNode.removeChild(previewNode);\n    var myDropzone = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"https://preview.keenthemes.com/api/dropzone/void.php\",\n      // Set the url for your upload script location\n      parallelUploads: 20,\n      previewTemplate: previewTemplate,\n      maxFilesize: 1,\n      // Max filesize in MB\n      autoQueue: false,\n      // Make sure the files aren't queued until manually added\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone.on(\"addedfile\", function (file) {\n      // Hookup the start button\n      file.previewElement.querySelector(id + \" .dropzone-start\").onclick = function () {\n        myDropzone.enqueueFile(file);\n      };\n\n      var dropzoneItems = dropzone.querySelectorAll('.dropzone-item');\n      dropzoneItems.forEach(function (dropzoneItem) {\n        dropzoneItem.style.display = '';\n      });\n      dropzone.querySelector('.dropzone-upload').style.display = \"inline-block\";\n      dropzone.querySelector('.dropzone-remove-all').style.display = \"inline-block\";\n    }); // Update the total progress bar\n\n    myDropzone.on(\"totaluploadprogress\", function (progress) {\n      var progressBars = dropzone.querySelectorAll('.progress-bar');\n      progressBars.forEach(function (progressBar) {\n        progressBar.style.width = progress + \"%\";\n      });\n    });\n    myDropzone.on(\"sending\", function (file) {\n      // Show the total progress bar when upload starts\n      var progressBars = dropzone.querySelectorAll('.progress-bar');\n      progressBars.forEach(function (progressBar) {\n        progressBar.style.opacity = \"1\";\n      }); // And disable the start button\n\n      file.previewElement.querySelector(id + \" .dropzone-start\").setAttribute(\"disabled\", \"disabled\");\n    }); // Hide the total progress bar when nothing's uploading anymore\n\n    myDropzone.on(\"complete\", function (progress) {\n      var progressBars = dropzone.querySelectorAll('.dz-complete');\n      setTimeout(function () {\n        progressBars.forEach(function (progressBar) {\n          progressBar.querySelector('.progress-bar').style.opacity = \"0\";\n          progressBar.querySelector('.progress').style.opacity = \"0\";\n          progressBar.querySelector('.dropzone-start').style.opacity = \"0\";\n        });\n      }, 300);\n    }); // Setup the buttons for all transfers\n\n    dropzone.querySelector(\".dropzone-upload\").addEventListener('click', function () {\n      myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));\n    }); // Setup the button for remove all files\n\n    dropzone.querySelector(\".dropzone-remove-all\").addEventListener('click', function () {\n      dropzone.querySelector('.dropzone-upload').style.display = \"none\";\n      dropzone.querySelector('.dropzone-remove-all').style.display = \"none\";\n      myDropzone.removeAllFiles(true);\n    }); // On all files completed upload\n\n    myDropzone.on(\"queuecomplete\", function (progress) {\n      var uploadIcons = dropzone.querySelectorAll('.dropzone-upload');\n      uploadIcons.forEach(function (uploadIcon) {\n        uploadIcon.style.display = \"none\";\n      });\n    }); // On all files removed\n\n    myDropzone.on(\"removedfile\", function (file) {\n      if (myDropzone.files.length < 1) {\n        dropzone.querySelector('.dropzone-upload').style.display = \"none\";\n        dropzone.querySelector('.dropzone-remove-all').style.display = \"none\";\n      }\n    });\n  };\n\n  var exampleQueueAutoUpload = function exampleQueueAutoUpload() {\n    // set the dropzone container id\n    var id = \"#kt_dropzonejs_example_3\";\n    var dropzone = document.querySelector(id); // set the preview element template\n\n    var previewNode = dropzone.querySelector(\".dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parentNode.innerHTML;\n    previewNode.parentNode.removeChild(previewNode);\n    var myDropzone = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"https://preview.keenthemes.com/api/dropzone/void.php\",\n      // Set the url for your upload script location\n      parallelUploads: 20,\n      maxFilesize: 1,\n      // Max filesize in MB\n      previewTemplate: previewTemplate,\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone.on(\"addedfile\", function (file) {\n      // Hookup the start button\n      var dropzoneItems = dropzone.querySelectorAll('.dropzone-item');\n      dropzoneItems.forEach(function (dropzoneItem) {\n        dropzoneItem.style.display = '';\n      });\n    }); // Update the total progress bar\n\n    myDropzone.on(\"totaluploadprogress\", function (progress) {\n      var progressBars = dropzone.querySelectorAll('.progress-bar');\n      progressBars.forEach(function (progressBar) {\n        progressBar.style.width = progress + \"%\";\n      });\n    });\n    myDropzone.on(\"sending\", function (file) {\n      // Show the total progress bar when upload starts\n      var progressBars = dropzone.querySelectorAll('.progress-bar');\n      progressBars.forEach(function (progressBar) {\n        progressBar.style.opacity = \"1\";\n      });\n    }); // Hide the total progress bar when nothing\"s uploading anymore\n\n    myDropzone.on(\"complete\", function (progress) {\n      var progressBars = dropzone.querySelectorAll('.dz-complete');\n      setTimeout(function () {\n        progressBars.forEach(function (progressBar) {\n          progressBar.querySelector('.progress-bar').style.opacity = \"0\";\n          progressBar.querySelector('.progress').style.opacity = \"0\";\n        });\n      }, 300);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      exampleBasic();\n      exampleQueue();\n      exampleQueueAutoUpload();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsDropzoneJSDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Ryb3B6b25lanMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsc0JBQXNCLEdBQUcsWUFBWTtBQUNyQztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVk7QUFDM0I7QUFDQSxRQUFJQyxVQUFVLEdBQUcsSUFBSUMsUUFBSixDQUFhLDBCQUFiLEVBQXlDO0FBQ3REQyxNQUFBQSxHQUFHLEVBQUUseUNBRGlEO0FBQ047QUFDaERDLE1BQUFBLFNBQVMsRUFBRSxNQUYyQztBQUVuQztBQUNuQkMsTUFBQUEsUUFBUSxFQUFFLEVBSDRDO0FBSXREQyxNQUFBQSxXQUFXLEVBQUUsRUFKeUM7QUFJckM7QUFDakJDLE1BQUFBLGNBQWMsRUFBRSxJQUxzQztBQU10REMsTUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjtBQUMxQixZQUFJRCxJQUFJLENBQUNFLElBQUwsSUFBYSxTQUFqQixFQUE0QjtBQUN4QkQsVUFBQUEsSUFBSSxDQUFDLGtCQUFELENBQUo7QUFDSCxTQUZELE1BRU87QUFDSEEsVUFBQUEsSUFBSTtBQUNQO0FBQ0o7QUFacUQsS0FBekMsQ0FBakI7QUFjSCxHQWhCRDs7QUFrQkEsTUFBSUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMzQjtBQUNBLFFBQU1DLEVBQUUsR0FBRywwQkFBWDtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxFQUF2QixDQUFqQixDQUgyQixDQUszQjs7QUFDQSxRQUFJSSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbEI7QUFDQUMsSUFBQUEsV0FBVyxDQUFDSixFQUFaLEdBQWlCLEVBQWpCO0FBQ0EsUUFBSUssZUFBZSxHQUFHRCxXQUFXLENBQUNFLFVBQVosQ0FBdUJDLFNBQTdDO0FBQ0FILElBQUFBLFdB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QUNMLE9BQWIsQ0FBcUIsVUFBQU0sV0FBVyxFQUFJO0FBQ2hDQSxRQUFBQSxXQUFXLENBQUNKLEtBQVosQ0FBa0JNLE9BQWxCLEdBQTRCLEdBQTVCO0FBQ0gsT0FGRDtBQUdILEtBTkQsRUFyQ3FDLENBNkNyQzs7QUFDQXZDLElBQUFBLFVBQVUsQ0FBQ3lCLEVBQVgsQ0FBYyxVQUFkLEVBQTBCLFVBQVVVLFFBQVYsRUFBb0I7QUFDMUMsVUFBTUMsWUFBWSxHQUFHdkIsUUFBUSxDQUFDaUIsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBckI7QUFFQVcsTUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkJMLFFBQUFBLFlBQVksQ0FBQ0wsT0FBYixDQUFxQixVQUFBTSxXQUFXLEVBQUk7QUFDaENBLFVBQUFBLFdBQVcsQ0FBQ3RCLGFBQVosQ0FBMEIsZUFBMUIsRUFBMkNrQixLQUEzQyxDQUFpRE0sT0FBakQsR0FBMkQsR0FBM0Q7QUFDQUYsVUFBQUEsV0FBVyxDQUFDdEIsYUFBWixDQUEwQixXQUExQixFQUF1Q2tCLEtBQXZDLENBQTZDTSxPQUE3QyxHQUF1RCxHQUF2RDtBQUNILFNBSEQ7QUFJSCxPQUxTLEVBS1AsR0FMTyxDQUFWO0FBTUgsS0FURDtBQVVILEdBeEREOztBQTBEQSxTQUFPO0FBQ0g7QUFDQWEsSUFBQUEsSUFBSSxFQUFFLGNBQVVDLE9BQVYsRUFBbUI7QUFDckJ0RCxNQUFBQSxZQUFZO0FBQ1pZLE1BQUFBLFlBQVk7QUFDWndDLE1BQUFBLHNCQUFzQjtBQUN6QjtBQU5FLEdBQVA7QUFRSCxDQWxMNEIsRUFBN0IsQyxDQW9MQTs7O0FBQ0FHLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3pELEVBQUFBLHNCQUFzQixDQUFDc0QsSUFBdkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9kcm9wem9uZWpzLmpzP2ZkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zRHJvcHpvbmVKU0RlbW9zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRm9yIG1vcmUgaW5mbyBhYm91dCBEcm9wem9uZSBwbHVnaW4gdmlzaXQ6ICBodHRwczovL3d3dy5kcm9wem9uZWpzLmNvbS8jdXNhZ2VcbiAgICAgICAgdmFyIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoXCIja3RfZHJvcHpvbmVqc19leGFtcGxlXzFcIiwge1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXG4gICAgICAgICAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxuICAgICAgICAgICAgbWF4RmlsZXM6IDEwLFxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLCAvLyBNQlxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXG4gICAgICAgICAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmaWxlLCBkb25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PSBcIndvdy5qcGdcIikge1xuICAgICAgICAgICAgICAgICAgICBkb25lKFwiTmFoYSwgeW91IGRvbid0LlwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZVF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBzZXQgdGhlIGRyb3B6b25lIGNvbnRhaW5lciBpZFxuICAgICAgICBjb25zdCBpZCA9IFwiI2t0X2Ryb3B6b25lanNfZXhhbXBsZV8yXCI7XG4gICAgICAgIGNvbnN0IGRyb3B6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBwcmV2aWV3IGVsZW1lbnQgdGVtcGxhdGVcbiAgICAgICAgdmFyIHByZXZpZXdOb2RlID0gZHJvcHpvbmUucXVlcnlTZWxlY3RvcihcIi5kcm9wem9uZS1pdGVtXCIpO1xuICAgICAgICBwcmV2aWV3Tm9kZS5pZCA9IFwiXCI7XG4gICAgICAgIHZhciBwcmV2aWV3VGVtcGxhdGUgPSBwcmV2aWV3Tm9kZS5wYXJlbnROb2RlLmlubmVySFRNTDtcbiAgICAgICAgcHJldmlld05vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcmV2aWV3Tm9kZSk7XG5cbiAgICAgICAgdmFyIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoaWQsIHsgLy8gTWFrZSB0aGUgd2hvbGUgYm9keSBhIGRyb3B6b25lXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wcmV2aWV3LmtlZW50aGVtZXMuY29tL2FwaS9kcm9wem9uZS92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXG4gICAgICAgICAgICBwYXJhbGxlbFVwbG9hZHM6IDIwLFxuICAgICAgICAgICAgcHJldmlld1RlbXBsYXRlOiBwcmV2aWV3VGVtcGxhdGUsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMSwgLy8gTWF4IGZpbGVzaXplIGluIE1CXG4gICAgICAgICAgICBhdXRvUXVldWU6IGZhbHNlLCAvLyBNYWtlIHN1cmUgdGhlIGZpbGVzIGFyZW4ndCBxdWV1ZWQgdW50aWwgbWFudWFsbHkgYWRkZWRcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBpZCArIFwiIC5kcm9wem9uZS1pdGVtc1wiLCAvLyBEZWZpbmUgdGhlIGNvbnRhaW5lciB0byBkaXNwbGF5IHRoZSBwcmV2aWV3c1xuICAgICAgICAgICAgY2xpY2thYmxlOiBpZCArIFwiIC5kcm9wem9uZS1zZWxlY3RcIiAvLyBEZWZpbmUgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyBjbGljayB0cmlnZ2VyIHRvIHNlbGVjdCBmaWxlcy5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbXlEcm9wem9uZS5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgLy8gSG9va3VwIHRoZSBzdGFydCBidXR0b25cbiAgICAgICAgICAgIGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcihpZCArIFwiIC5kcm9wem9uZS1zdGFydFwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyBteURyb3B6b25lLmVucXVldWVGaWxlKGZpbGUpOyB9O1xuICAgICAgICAgICAgY29uc3QgZHJvcHpvbmVJdGVtcyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wem9uZS1pdGVtJyk7XG4gICAgICAgICAgICBkcm9wem9uZUl0ZW1zLmZvckVhY2goZHJvcHpvbmVJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtdXBsb2FkJykuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtcmVtb3ZlLWFsbCcpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIHByb2dyZXNzIGJhclxuICAgICAgICBteURyb3B6b25lLm9uKFwidG90YWx1cGxvYWRwcm9ncmVzc1wiLCBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1iYXInKTtcbiAgICAgICAgICAgIHByb2dyZXNzQmFycy5mb3JFYWNoKHByb2dyZXNzQmFyID0+IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzICsgXCIlXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbXlEcm9wem9uZS5vbihcInNlbmRpbmdcIiwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIHVwbG9hZCBzdGFydHNcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1iYXInKTtcbiAgICAgICAgICAgIHByb2dyZXNzQmFycy5mb3JFYWNoKHByb2dyZXNzQmFyID0+IHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEFuZCBkaXNhYmxlIHRoZSBzdGFydCBidXR0b25cbiAgICAgICAgICAgIGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcihpZCArIFwiIC5kcm9wem9uZS1zdGFydFwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIaWRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXIgd2hlbiBub3RoaW5nJ3MgdXBsb2FkaW5nIGFueW1vcmVcbiAgICAgICAgbXlEcm9wem9uZS5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJzID0gZHJvcHpvbmUucXVlcnlTZWxlY3RvckFsbCgnLmR6LWNvbXBsZXRlJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFycy5mb3JFYWNoKHByb2dyZXNzQmFyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhcicpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIucXVlcnlTZWxlY3RvcignLnByb2dyZXNzJykuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtc3RhcnQnKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXR1cCB0aGUgYnV0dG9ucyBmb3IgYWxsIHRyYW5zZmVyc1xuICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKFwiLmRyb3B6b25lLXVwbG9hZFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG15RHJvcHpvbmUuZW5xdWV1ZUZpbGVzKG15RHJvcHpvbmUuZ2V0RmlsZXNXaXRoU3RhdHVzKERyb3B6b25lLkFEREVEKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldHVwIHRoZSBidXR0b24gZm9yIHJlbW92ZSBhbGwgZmlsZXNcbiAgICAgICAgZHJvcHpvbmUucXVlcnlTZWxlY3RvcihcIi5kcm9wem9uZS1yZW1vdmUtYWxsXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZHJvcHpvbmUucXVlcnlTZWxlY3RvcignLmRyb3B6b25lLXVwbG9hZCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wem9uZS1yZW1vdmUtYWxsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbXlEcm9wem9uZS5yZW1vdmVBbGxGaWxlcyh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT24gYWxsIGZpbGVzIGNvbXBsZXRlZCB1cGxvYWRcbiAgICAgICAgbXlEcm9wem9uZS5vbihcInF1ZXVlY29tcGxldGVcIiwgZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCB1cGxvYWRJY29ucyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wem9uZS11cGxvYWQnKTtcbiAgICAgICAgICAgIHVwbG9hZEljb25zLmZvckVhY2godXBsb2FkSWNvbiA9PiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT24gYWxsIGZpbGVzIHJlbW92ZWRcbiAgICAgICAgbXlEcm9wem9uZS5vbihcInJlbW92ZWRmaWxlXCIsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBpZiAobXlEcm9wem9uZS5maWxlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgZHJvcHpvbmUucXVlcnlTZWxlY3RvcignLmRyb3B6b25lLXVwbG9hZCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKCcuZHJvcHpvbmUtcmVtb3ZlLWFsbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGVRdWV1ZUF1dG9VcGxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHNldCB0aGUgZHJvcHpvbmUgY29udGFpbmVyIGlkXG4gICAgICAgIGNvbnN0IGlkID0gXCIja3RfZHJvcHpvbmVqc19leGFtcGxlXzNcIjtcbiAgICAgICAgY29uc3QgZHJvcHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHByZXZpZXcgZWxlbWVudCB0ZW1wbGF0ZVxuICAgICAgICB2YXIgcHJldmlld05vZGUgPSBkcm9wem9uZS5xdWVyeVNlbGVjdG9yKFwiLmRyb3B6b25lLWl0ZW1cIik7XG4gICAgICAgIHByZXZpZXdOb2RlLmlkID0gXCJcIjtcbiAgICAgICAgdmFyIHByZXZpZXdUZW1wbGF0ZSA9IHByZXZpZXdOb2RlLnBhcmVudE5vZGUuaW5uZXJIVE1MO1xuICAgICAgICBwcmV2aWV3Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByZXZpZXdOb2RlKTtcblxuICAgICAgICB2YXIgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShpZCwgeyAvLyBNYWtlIHRoZSB3aG9sZSBib2R5IGEgZHJvcHpvbmVcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3ByZXZpZXcua2VlbnRoZW1lcy5jb20vYXBpL2Ryb3B6b25lL3ZvaWQucGhwXCIsIC8vIFNldCB0aGUgdXJsIGZvciB5b3VyIHVwbG9hZCBzY3JpcHQgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogMjAsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMSwgLy8gTWF4IGZpbGVzaXplIGluIE1CXG4gICAgICAgICAgICBwcmV2aWV3VGVtcGxhdGU6IHByZXZpZXdUZW1wbGF0ZSxcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBpZCArIFwiIC5kcm9wem9uZS1pdGVtc1wiLCAvLyBEZWZpbmUgdGhlIGNvbnRhaW5lciB0byBkaXNwbGF5IHRoZSBwcmV2aWV3c1xuICAgICAgICAgICAgY2xpY2thYmxlOiBpZCArIFwiIC5kcm9wem9uZS1zZWxlY3RcIiAvLyBEZWZpbmUgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCBhcyBjbGljayB0cmlnZ2VyIHRvIHNlbGVjdCBmaWxlcy5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBteURyb3B6b25lLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAvLyBIb29rdXAgdGhlIHN0YXJ0IGJ1dHRvblxuICAgICAgICAgICAgY29uc3QgZHJvcHpvbmVJdGVtcyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wem9uZS1pdGVtJyk7XG4gICAgICAgICAgICBkcm9wem9uZUl0ZW1zLmZvckVhY2goZHJvcHpvbmVJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBkcm9wem9uZUl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJzID0gZHJvcHpvbmUucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzLWJhcicpO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXJzLmZvckVhY2gocHJvZ3Jlc3NCYXIgPT4ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MgKyBcIiVcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBteURyb3B6b25lLm9uKFwic2VuZGluZ1wiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyIHdoZW4gdXBsb2FkIHN0YXJ0c1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJzID0gZHJvcHpvbmUucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzLWJhcicpO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXJzLmZvckVhY2gocHJvZ3Jlc3NCYXIgPT4ge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIaWRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXIgd2hlbiBub3RoaW5nXCJzIHVwbG9hZGluZyBhbnltb3JlXG4gICAgICAgIG15RHJvcHpvbmUub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGRyb3B6b25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kei1jb21wbGV0ZScpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0JhcnMuZm9yRWFjaChwcm9ncmVzc0JhciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXInKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xuICAgICAgICAgICAgZXhhbXBsZVF1ZXVlKCk7XG4gICAgICAgICAgICBleGFtcGxlUXVldWVBdXRvVXBsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3Jtc0Ryb3B6b25lSlNEZW1vcy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1zRHJvcHpvbmVKU0RlbW9zIiwiZXhhbXBsZUJhc2ljIiwibXlEcm9wem9uZSIsIkRyb3B6b25lIiwidXJsIiwicGFyYW1OYW1lIiwibWF4RmlsZXMiLCJtYXhGaWxlc2l6ZSIsImFkZFJlbW92ZUxpbmtzIiwiYWNjZXB0IiwiZmlsZSIsImRvbmUiLCJuYW1lIiwiZXhhbXBsZVF1ZXVlIiwiaWQiLCJkcm9wem9uZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByZXZpZXdOb2RlIiwicHJldmlld1RlbXBsYXRlIiwicGFyZW50Tm9kZSIsImlubmVySFRNTCIsInJlbW92ZUNoaWxkIiwicGFyYWxsZWxVcGxvYWRzIiwiYXV0b1F1ZXVlIiwicHJldmlld3NDb250YWluZXIiLCJjbGlja2FibGUiLCJvbiIsInByZXZpZXdFbGVtZW50Iiwib25jbGljayIsImVucXVldWVGaWxlIiwiZHJvcHpvbmVJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcHpvbmVJdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvZ3Jlc3MiLCJwcm9ncmVzc0JhcnMiLCJwcm9ncmVzc0JhciIsIndpZHRoIiwib3BhY2l0eSIsInNldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5xdWV1ZUZpbGVzIiwiZ2V0RmlsZXNXaXRoU3RhdHVzIiwiQURERUQiLCJyZW1vdmVBbGxGaWxlcyIsInVwbG9hZEljb25zIiwidXBsb2FkSWNvbiIsImZpbGVzIiwibGVuZ3RoIiwiZXhhbXBsZVF1ZXVlQXV0b1VwbG9hZCIsImluaXQiLCJlbGVtZW50IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/dropzonejs.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/dropzonejs.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=dropzonejs.js.map