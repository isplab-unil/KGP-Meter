
function detectIE11() {
  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
    return true
  }
  return false
}

function detectMobile() {
  if( navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)){
    return true
  }
  return false
}

/** adds a 100ms without resize to window.onresize() before executing func (to avoid redraws every msec) */
function onWindowResize(func,timeout=100){
  let doit;
  window.onresize = function(){
    clearTimeout(doit);
    doit = setTimeout(func, timeout);
  }
}
