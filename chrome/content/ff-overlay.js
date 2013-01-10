pbsc.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ pbsc.showFirefoxContextMenu(e); }, false);
};

pbsc.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-pbsc").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { pbsc.onFirefoxLoad(); }, false);
