{\rtf1\ansi\ansicpg949\cocoartf2511
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 $(function()\{ $("h3").html("jquery test"); \});     \
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