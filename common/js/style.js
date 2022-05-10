$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $("header").css({"background-color":"#fff","box-shadow":"0 0 1vw 1px rgba(0, 0, 0, 0.2)"});
    }
    else{
      $("header").css({"background-color":"none","box-shadow":"none"});  
    }
  })
})

function openNav() {
    document
        .getElementById("mySidenav")
        .style
        .width = "300px";
}

function closeNav() {
    document
        .getElementById("mySidenav")
        .style
        .width = "0";
}


function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" +
          todayDate.toGMTString() + ";"
}
function closeWin() {
  if (document.notice_form.chkbox.checked) {
      setCookie("maindiv", "done", 1);
  }
  document
      .all['divpop']
      .style
      .visibility = "hidden";
}


cookiedata = document.cookie;
            if (cookiedata.indexOf("maindiv=done") < 0) {
                document
                    .all['divpop']
                    .style
                    .visibility = "visible";
            } else {
                document
                    .all['divpop']
                    .style
                    .visibility = "hidden";
            }