// ***  accordion.js *** //


/// *** initialize the accordian
function initializeAccordion(accordionElement) {

  // *** change panel from open or close *** //
  function handlePanelClick(event) {
    showPanel(event.CurrentTarget);
  }

  // *** open new panel and close last one *** //
  funtion showPanel(panel) {
    var openPanel = accordionElement.querySelctor(".active");
    if (openPanel) {
      openPanel.classList.remove("active");
    }

    // *** open new panel *** //
    panel.classList.add("active");
  }

  var allPanelElements = accordionElement.querySelctorAll(".panel");
  for (var i = 0, len = allPanelElements.length; i < len; i++) {
    allPanelElements[i].addEventListener("click", handlePanelClick);
  }

  // *** open panel one by default *** //
  showPanel(allPanelElements[0])
}

initializeAccordion(document.getElementById("accordion"));
