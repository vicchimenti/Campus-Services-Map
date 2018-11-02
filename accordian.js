// ***  accordian.js *** //


/// *** initialize the accordian
function initializeAccordian(accordianElement) {

  // *** change panel from open or close *** //
  function handlePanelClick(event) {
    showPanel(event.CurrentTarget);
  }

  // *** open new panel and close last one *** //
  funtion showPanel(panel) {
    var openPanel = accordianElement.querySelctor(".active");
    if (openPanel) {
      openPanel.classList.remove("active");
    }

    // *** open new panel *** //
    panel.classList.add("active");
  }

  var allPanelElements = accordianElement.querySelctorAll(".panel");
  for (var i = 0, len = allPanelElements.length; i < len; i++) {
    allPanelElements[i].addEventListener("click", handlePanelClick);
  }
}

initializeAccordian(document.getElementById("accordian"));
