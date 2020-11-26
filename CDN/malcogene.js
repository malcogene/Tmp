$(function()\{ $("h3").html("jquery test"); \});     \
$(document).ready(function() \{\
/* show lightbox when clicking a thumbnail */\
     $("a.thumb").click(function(event)\{\
     event.preventDefault();\
     var content = $(".modal-body");\
     content.empty();\
     var title = $(this).attr("title");\
     $(".modal-title").html(title);\
     content.html($(this).html());\
     $(".modal-profile").modal(\{show:true\});\
     \}); \});\
$(document).on("shown.bs.modal", function(e) \{\
  $("input:visible:enabled:first", e.target).focus();\
\});\
$(document).ready( function() \{\
  $("#txtEditor").Editor(); \
\});\
}

/* 처음 접속시, 입력 필드에 포커스 주기  */
$(document).ready(function() {
     $("a.thumb").click(function(event){
     event.preventDefault();
     var content = $(".modal-body");
     content.empty();
     var title = $(this).attr("title");
     $(".modal-title").html(title);
     content.html($(this).html());
     $(".modal-profile").modal({show:true});
     });
     });
$(document).on("shown.bs.modal", function(e) {
  $("input:visible:enabled:first", e.target).focus();
});
$(document).ready( function() {
  $("#txtEditor").Editor(); 
});




