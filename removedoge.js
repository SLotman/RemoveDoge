// ==UserScript==
// @name     Remove doge
// @version  1.1
// @include  https://twitter.com*
// @run-at   document-start
// @author   SLotman
// ==/UserScript==
function GM_addStyle (cssStr) {
    let D               = document;
    let newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    let targ    = D.getElementsByTagName ('head')[0]; // || D.body || D.documentElement;
    if (targ) targ.appendChild (newNode);
}

console.log('remove doge started!');
removeLoadingImage();
removeDoge();
document.addEventListener ("DOMContentLoaded", removeDoge);
document.addEventListener ("load",removeDoge);

function removeLoadingImage(){  
  console.log('trying to remove doge loading image...');
	GM_addStyle("#placeholder { display: none !important; }");
  let pd = document.getElementById("placeholder")
  if (pd!=undefined && pd!=null) { 
    console.log('loading doge found!');
    pd.remove(); 
  } else { setTimeout(removeLoadingImage, 0);  }
}

function removeDoge() {
  var images = document.getElementsByTagName('svg');
  if (images.length<1) {
  	setTimeout(removeDoge, 0);
  } else {
    if (images.length == 1) {
        setTimeout(removeDoge, 0);
    } else {
      let found = false;
      for (let f=0; f<images.length; f++) {
        // console.log(images[f].outerHTML);
        if (images[f].outerHTML.includes("iVBORw0KGgoAAAANSUh")) {
          images[f].outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><g><pattern height="1" id="0-a" patternContentUnits="objectBoundingBox" width="1"><image height="100" transform="scale(.01 .0087)" width="100" xlink:href="data:image/png;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAB3RJTUUH5wQEBAgCnKnz9QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWt7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIxpUzoAAAABdFJOUwBA5thmAAAA/UlEQVR42u3XwQ7CIBCE4T20Vu2F939akx401rjsLMMemvmPBvgCiIlmSimllFJXrb0rIL4ZotjOfT6PL4Eaxwzs6HpjmxN0FpMN6w3vGDuAtJSxtbYgSHvgpxU/MX/8SjHMn8ExzJ/EMcyfxzF+1wkjgGHudBayeiuwEG+hhYZ0HxwFSSoIkFXgXfR+PShIyU5mI2mlArlVIJBR8EryCopkFNjIKAkEVjIGzCQRs/sVTgs0sNdeeyNbya2XIICSN+LKiBFlnoNIiBk2jvYCo2Afa4HhE7F/uiMCYxszv1ahpzG8jQojxozfhtkyn/C3QxP+QWxAKaWUUkoRewGyXIpgXmKKQQAAAABJRU5ErkJggg=="></image></pattern><path d="M2.412.974h19.176v22.052H2.412z" fill="url(#0-a)"></path></g></svg>';
          console.log("DOGE FOUND!");
          found = true;
        }
      }
      if (!found) setTimeout(removeDoge, 0);
    }
  }
}

window.onresize = function() { removeDoge(); }