/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

// $(document).ready(function () {
//   window.MOJFrontend.initAll()
// })


// if (typeof MOJFrontend.MultiFileUpload !== "undefined") {
//   new MOJFrontend.MultiFileUpload({
//     container: $(".moj-multi-file-upload"),
//     uploadUrl: "/ajax-upload",
//     deleteUrl: "/ajax-delete",
//   });
// }

// new MOJFrontend.FilterToggleButton({
//   bigModeMediaQuery: "(min-width: 48.063em)",
//   toggleButton: {
//     container: $(".moj-action-bar__filter"),
//     showText: "Show filter",
//     hideText: "Hide filter",
//     classes: "govuk-button--secondary",
//   },
//   closeButton: {
//     container: $(".moj-filter__header-action"),
//     text: "Close",
//   },
//   filter: {
//     container: $(".moj-filter"),
//   },
// });

