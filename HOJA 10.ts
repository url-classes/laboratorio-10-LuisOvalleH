<!DOCTYPE html>
<!-- saved from url=(0044)https://onecompiler.com/typescript/42xhk3wuu -->
<html lang="en" style="" class=" "><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style id="ace_searchbox">.ace_search {background-color: #ddd;color: #666;border: 1px solid #cbcbcb;border-top: 0 none;overflow: hidden;margin: 0;padding: 4px 6px 0 4px;position: absolute;top: 0;z-index: 99;white-space: normal;}.ace_search.left {border-left: 0 none;border-radius: 0px 0px 5px 0px;left: 0;}.ace_search.right {border-radius: 0px 0px 0px 5px;border-right: 0 none;right: 0;}.ace_search_form, .ace_replace_form {margin: 0 20px 4px 0;overflow: hidden;line-height: 1.9;}.ace_replace_form {margin-right: 0;}.ace_search_form.ace_nomatch {outline: 1px solid red;}.ace_search_field {border-radius: 3px 0 0 3px;background-color: white;color: black;border: 1px solid #cbcbcb;border-right: 0 none;outline: 0;padding: 0;font-size: inherit;margin: 0;line-height: inherit;padding: 0 6px;min-width: 17em;vertical-align: top;min-height: 1.8em;box-sizing: content-box;}.ace_searchbtn {border: 1px solid #cbcbcb;line-height: inherit;display: inline-block;padding: 0 6px;background: #fff;border-right: 0 none;border-left: 1px solid #dcdcdc;cursor: pointer;margin: 0;position: relative;color: #666;}.ace_searchbtn:last-child {border-radius: 0 3px 3px 0;border-right: 1px solid #cbcbcb;}.ace_searchbtn:disabled {background: none;cursor: default;}.ace_searchbtn:hover {background-color: #eef1f6;}.ace_searchbtn.prev, .ace_searchbtn.next {padding: 0px 0.7em}.ace_searchbtn.prev:after, .ace_searchbtn.next:after {content: "";border: solid 2px #888;width: 0.5em;height: 0.5em;border-width:  2px 0 0 2px;display:inline-block;transform: rotate(-45deg);}.ace_searchbtn.next:after {border-width: 0 2px 2px 0 ;}.ace_searchbtn_close {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;border-radius: 50%;border: 0 none;color: #656565;cursor: pointer;font: 16px/16px Arial;padding: 0;height: 14px;width: 14px;top: 9px;right: 7px;position: absolute;}.ace_searchbtn_close:hover {background-color: #656565;background-position: 50% 100%;color: white;}.ace_button {margin-left: 2px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;overflow: hidden;opacity: 0.7;border: 1px solid rgba(100,100,100,0.23);padding: 1px;box-sizing:    border-box!important;color: black;}.ace_button:hover {background-color: #eee;opacity:1;}.ace_button:active {background-color: #ddd;}.ace_button.checked {border-color: #3399ff;opacity:1;}.ace_search_options{margin-bottom: 3px;text-align: right;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;clear: both;}.ace_search_counter {float: left;font-family: arial;padding: 0 8px;}
/*# sourceURL=ace/css/ace_searchbox */</style><style id="autocompletion.css">.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}
/*# sourceURL=ace/css/autocompletion.css */</style><style>.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}</style><style id="ace-xcode">.ace-xcode .ace_gutter {background: #e8e8e8;color: #333}.ace-xcode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-xcode {background-color: #FFFFFF;color: #000000}.ace-xcode .ace_cursor {color: #000000}.ace-xcode .ace_marker-layer .ace_selection {background: #B5D5FF}.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-xcode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #B5D5FF}.ace-xcode .ace_constant.ace_language,.ace-xcode .ace_keyword,.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C800A4}.ace-xcode .ace_invisible {color: #BFBFBF}.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}.ace-xcode .ace_constant.ace_numeric {color: #3A00DC}.ace-xcode .ace_entity.ace_other.ace_attribute-name,.ace-xcode .ace_support.ace_constant,.ace-xcode .ace_support.ace_function {color: #450084}.ace-xcode .ace_fold {background-color: #C800A4;border-color: #000000}.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #790EAD}.ace-xcode .ace_storage {color: #C900A4}.ace-xcode .ace_string {color: #DF0002}.ace-xcode .ace_comment {color: #008E00}.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}
/*# sourceURL=ace/css/ace-xcode */</style><style id="ace-dracula">.ace-dracula .ace_gutter {background: #282a36;color: rgb(144,145,148)}.ace-dracula .ace_print-margin {width: 1px;background: #44475a}.ace-dracula {background-color: #282a36;color: #f8f8f2}.ace-dracula .ace_cursor {color: #f8f8f0}.ace-dracula .ace_marker-layer .ace_selection {background: #44475a}.ace-dracula.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #282a36;border-radius: 2px}.ace-dracula .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-dracula .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #a29709}.ace-dracula .ace_marker-layer .ace_active-line {background: #44475a}.ace-dracula .ace_gutter-active-line {background-color: #44475a}.ace-dracula .ace_marker-layer .ace_selected-word {box-shadow: 0px 0px 0px 1px #a29709;border-radius: 3px;}.ace-dracula .ace_fold {background-color: #50fa7b;border-color: #f8f8f2}.ace-dracula .ace_keyword {color: #ff79c6}.ace-dracula .ace_constant.ace_language {color: #bd93f9}.ace-dracula .ace_constant.ace_numeric {color: #bd93f9}.ace-dracula .ace_constant.ace_character {color: #bd93f9}.ace-dracula .ace_constant.ace_character.ace_escape {color: #ff79c6}.ace-dracula .ace_constant.ace_other {color: #bd93f9}.ace-dracula .ace_support.ace_function {color: #8be9fd}.ace-dracula .ace_support.ace_constant {color: #6be5fd}.ace-dracula .ace_support.ace_class {font-style: italic;color: #66d9ef}.ace-dracula .ace_support.ace_type {font-style: italic;color: #66d9ef}.ace-dracula .ace_storage {color: #ff79c6}.ace-dracula .ace_storage.ace_type {font-style: italic;color: #8be9fd}.ace-dracula .ace_invalid {color: #F8F8F0;background-color: #ff79c6}.ace-dracula .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #bd93f9}.ace-dracula .ace_string {color: #f1fa8c}.ace-dracula .ace_comment {color: #6272a4}.ace-dracula .ace_variable {color: #50fa7b}.ace-dracula .ace_variable.ace_parameter {font-style: italic;color: #ffb86c}.ace-dracula .ace_entity.ace_other.ace_attribute-name {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_function {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_tag {color: #ff79c6}.ace-dracula .ace_invisible {color: #626680;}.ace-dracula .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-dracula */</style><style id="ace-github">.ace-github .ace_gutter {background: #e8e8e8;color: #AAA;}.ace-github  {background: #fff;color: #000;}.ace-github .ace_keyword {font-weight: bold;}.ace-github .ace_string {color: #D14;}.ace-github .ace_variable.ace_class {color: teal;}.ace-github .ace_constant.ace_numeric {color: #099;}.ace-github .ace_constant.ace_buildin {color: #0086B3;}.ace-github .ace_support.ace_function {color: #0086B3;}.ace-github .ace_comment {color: #998;font-style: italic;}.ace-github .ace_variable.ace_language  {color: #0086B3;}.ace-github .ace_paren {font-weight: bold;}.ace-github .ace_boolean {font-weight: bold;}.ace-github .ace_string.ace_regexp {color: #009926;font-weight: normal;}.ace-github .ace_variable.ace_instance {color: teal;}.ace-github .ace_constant.ace_language {font-weight: bold;}.ace-github .ace_cursor {color: black;}.ace-github.ace_focus .ace_marker-layer .ace_active-line {background: rgb(255, 255, 204);}.ace-github .ace_marker-layer .ace_active-line {background: rgb(245, 245, 245);}.ace-github .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-github.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-github.ace_nobold .ace_line > span {font-weight: normal !important;}.ace-github .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-github .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-github .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-github .ace_gutter-active-line {background-color : rgba(0, 0, 0, 0.07);}.ace-github .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-github .ace_invisible {color: #BFBFBF}.ace-github .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-github .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-github */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style id="ace_editor.css">.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}
/*# sourceURL=ace/css/ace_editor.css */</style><link rel="shortcut icon" href="https://onecompiler.com/favicon.ico"><link rel="stylesheet" href="./HOJA 10_files/css"><link rel="stylesheet" crossorigin="anonymous" href="./HOJA 10_files/main.css"><script src="./HOJA 10_files/cb=gapi.loaded_0" async=""></script><script type="text/javascript" async="" src="./HOJA 10_files/js"></script><script async="" src="./HOJA 10_files/analytics.js.descarga"></script><script async="" custom-element="amp-timeago" src="./HOJA 10_files/highlight.min.js.descarga"></script><meta name="viewport" content="width=device-width"><title>HOJA 10 - TypeScript - OneCompiler</title><meta name="next-head-count" content="3"><link rel="preload" href="./HOJA 10_files/16ee27f16143b3b38957.css" as="style"><link rel="stylesheet" href="./HOJA 10_files/16ee27f16143b3b38957.css" data-n-g=""><noscript data-n-css=""></noscript><link rel="preload" href="./HOJA 10_files/main-5a4a1bdd168a51fef177.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/webpack-d06520f13a9132816ebd.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/framework.f0acb69465e7e5a293e0.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/29e7b7b4c3109eec42ae8eb73acd47964b3201ee.f50d31b9276407c94922.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/f5211ce943e8780dbbe4a22d465a89c6119161d5.2ba9e442da711f9b76ef.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/7aaca05354eccb9d65d0b059baa84e81a0369f54.590865f14a58c31b68dc.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/1123f66760d7c5979dd9c16418e6f7be4bad588e.41c2afd42674e7aeb47c.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/_app-7cf92e60f3ed96dc283c.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/b9e98ab74f3a4dffb23645eef1b669952c0cb3bd.75f54defc4cda229b4e7.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/fad014b31d248e926e996692389e6e9b7a4e67da.fd18c6457f76070bc13e.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/41ca98c927b2a63343dd39148f3e7d6c447bb48b.83093ed3ec0f817a298d.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/f91dc7b80a3c5e4c42889edc105fc24e133fde85.2c37e531f2205f953a53.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/add4db1c34f1620501c138148240ffaa23ca2f6d.9507ac1a3e2ad2ca6a18.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/b7b484404d3f80c44a1011180acc8199ee534f10.cadfcbc86733371ae8ac.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/cc0c421546b65ded95016130fd2aa616aaecbf20.8ba2ded67bb7c1a8e3f0.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/52872f33f938452d4276395bdc008a54dfbb94bd.7b5630cc828f4a2a5507.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/d1e226fd0deed97f1ee3dd7aa41b133ec8083cfa.06daacc6301aa9560930.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/5dac00a4b3ffe99b701e30f8d992d27334aabe9b.1d7c465c2393da966cc7.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/3bc8fa85569f9622c0476ef6034704512ddf0169.6c9a7da9469d3a7cc8ff.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/f8998793187aed2f81ad58fe55136aa9737f0db6.9e38b058f5f1886aa75c.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/43.9922619ebd634e7f95fd.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/3bf205b55510456cfdb12ab1dcb04649827d3e86.5679a14cfd14e7c0193d.js.descarga" as="script"><link rel="preload" href="./HOJA 10_files/editor-84f208c1cb6b543f2425.js.descarga" as="script"><style type="text/css" class="abn_style" nonce="undefined">#AC_ad,#AD_160,#AD_300,#AD_468x60,#AD_G,#AD_L,#AD_ROW,#AD_Top,#AD_text,#ADbox,#Ad-3-Slider,#Ad-4-Slider,#Ad-Container,#Ad-Content,#Ad-Top,#AdBanner,#AdBar,#AdBigBox,#AdBillboard,#AdBlock,#AdBlockDialog,#AdBottomLeader,#AdBottomRight,#AdBox2,#AdColumn,#AdContainerTop,#AdContent,#AdDisclaimer,#AdHeader,#AdMiddle,#AdPopUp,#AdRectangleBanner,#AdSense1,#AdSense2,#AdSense3,#AdServer,#AdSkyscraper,#AdSlot_megabanner,#AdSpaceLeaderboard,#AdTop,#AdTopLeader,#AdWidgetContainer,#AdWrapperSuperCA,#AdZone1,#AdZone2,#Ad_BelowContent,#Ad_Block,#Ad_TopLeaderboard,#Adbanner,#Adlabel,#AdsBannerTop,#AdsBillboard,#AdsBottomContainer,#AdsContent,#AdsDiv,#AdsFrame,#AdsPubperform,#AdsRight,#AdsSky,#AdsTopContainer,#AdsWrap,#Ads_BA_BS,#Ads_BA_BUT,#Ads_BA_BUT2,#Ads_BA_BUT_box,#Ads_BA_CAD,#Ads_BA_CAD2,#Ads_BA_FLB,#Ads_BA_SKY,#Ads_BA_VID,#Ads_TFM_BS,#Ads_google_bottom_wide,#Adsense300x250,#AdsenseBottom,#AdsenseTop,#Adsterra,#Adv10,#Adv11,#Adv8,#Adv9,#AdvContainer,#AdvFooter,#AdvHeader,#Adv_Footer,#AdvertMid1,#AdvertMid2,#AdvertPanel,#AdvertText,#AdvertiseFrame,#Advertisement1,#Advertisement2,#AdvertisementDiv,#AdvertisementLeaderboard,#Advertisements,#AdvertisingDiv_0,#Advertorial,#Advertorials,#AnchorAd,#ArticleContentAd,#Banner728x90,#BannerAd,#BannerAds,#BannerAdvert,#BannerAdvertisement,#BigBoxAd,#BigboxAdUnit,#BodyAd,#BodyTopAds,#Body_Ad8_divAdd,#BotAd,#BottomAdContainer,#BottomRightAdWrapper,#ButtonAd,#ContentAd,#Content_CA_AD_0_BC,#Content_CA_AD_1_BC,#DFP_top_leaderboard,#FooterAd,#FooterAdBlock,#FooterAdContainer,#GoogleAd,#GoogleAd1,#GoogleAd2,#GoogleAd3,#GoogleAdRight,#GoogleAdTop,#GoogleAdsense,#HP1-ad,#HP2-ad,#HeadAd,#HeaderAD,#HeaderAd,#HeaderAdBlock,#HeaderAdsBlock,#HeaderTopBanner,#HeaderTopBannerADV,#HeroAd,#HomeAd1,#IFrameAd,#IFrameAd1,#IK-ad-area,#IK-ad-block,#IM_AD,#LargeRectangleAd,#LayoutBottomAdBox,#LayoutHomeAdBoxBottom,#LeaderboardAdvertising,#LeftAd,#LeftAd1,#MPUAdSpace,#MPUadvertising,#MPUadvertisingDetail,#MainAd,#MediumRectangleAD,#MidPageAds,#MiddleRightRadvertisement,#Mpu_Bottom,#Mpu_Top,#MyAdsId3,#NR-Ads,#PaneAdvertisingContainer,#Player_Playoncontent,#Player_Playoncontent_footer,#PromotionAdBox,#PubMiddle1,#PubMiddle2,#PubRight,#PubTop1,#PubTop2,#Publi300600x,#PubliFixedLeft,#PublicidadCentro,#PublicidadSuperior,#Publicidade,#RadAdSkyscraper,#RightAd,#RightAdBlock,#RightAdSpace,#RightAdvertisement,#RobaPagina,#SidebarAd,#SidebarAdContainer,#SitenavAdslot,#SkyAd,#SkyscraperAD,#SponsoredAd,#SponsoredAds,#SponsoredLinks,#SponsorsAds,#StickyBannerAd,#Top-ad,#Top1AdWrapper,#TopADs,#TopAd,#TopAd0,#TopAdBox,#TopAdContainer,#TopAdPlacement,#TopAdPos,#TopAdTable,#TopAdvert,#TopBannerAd,#TopRightRadvertisement,#VPNAdvert,#WelcomeAd,#aad-header-1,#aad-header-2,#aad-header-3,#ab_adblock,#above-comments-ad,#above-fold-ad,#above-footer-ads,#aboveAd,#aboveNodeAds,#above_button_ad,#aboveplayerad,#abovepostads,#abp-killer,#acm-ad-tag-lawrence_dfp_mobile_arkadium,#ad--article--home-mobile-paramount-wrapper,#ad--article-bottom-wrapper,#ad--article-top,#ad--sidebar,#ad-0,#ad-1,#ad-125x125,#ad-160,#ad-160x600,#ad-2,#ad-2-160x600,#ad-230x100-1,#ad-250,#ad-250x300,#ad-3,#ad-3-300x250,#ad-300,#ad-300-250,#ad-300-additional,#ad-300-detail,#ad-300-sidebar,#ad-300X250-2,#ad-300a,#ad-300b,#ad-300x250,#ad-300x250-0,#ad-300x250-2,#ad-300x250-b,#ad-300x250-sidebar,#ad-300x250-wrapper,#ad-300x250_mid,#ad-300x250_mobile,#ad-300x250_top,#ad-300x40-5,#ad-300x600_top,#ad-4,#ad-5,#ad-6,#ad-635x40-1,#ad-7,#ad-728,#ad-728-90,#ad-728x90,#ad-8,#ad-9,#ad-Content_1,#ad-Content_2,#ad-Rectangle_1,#ad-Rectangle_2,#ad-Superbanner,#ad-a,#ad-ads,#ad-advertorial,#ad-affiliate,#ad-after,#ad-anchor,#ad-around-the-web,#ad-article,#ad-article-in,#ad-aside-1,#ad-background,#ad-ban,#ad-banner-1,#ad-banner-atf,#ad-banner-bottom,#ad-banner-btf,#ad-banner-desktop,#ad-banner-image,#ad-banner-placement,#ad-banner-top,#ad-banner-wrap,#ad-banner_atf-label,#ad-bar,#ad-base,#ad-bb-content,#ad-below-content,#ad-bg,#ad-big,#ad-bigbox,#ad-bigsize,#ad-billboard,#ad-billboard-atf,#ad-billboard-bottom,#ad-billboard01,#ad-blade,#ad-block,#ad-block-125,#ad-block-2,#ad-block-aa,#ad-block-bottom,#ad-block-container,#ad-block__overlay,#ad-block_overlay,#ad-border,#ad-bottom,#ad-bottom-banner,#ad-bottom-bnr,#ad-bottom-fixed,#ad-bottom-right-container,#ad-bottom-wrapper,#ad-box,#ad-box-1,#ad-box-2,#ad-box-bottom,#ad-box-halfpage,#ad-box-leaderboard,#ad-box-left,#ad-box-rectangle,#ad-box-rectangle-2,#ad-box-right,#ad-box1,#ad-box2,#ad-boxes,#ad-break,#ad-bs,#ad-btm,#ad-buttons,#ad-campaign,#ad-case,#ad-center,#ad-chips,#ad-circfooter,#ad-code,#ad-col,#ad-container-banner,#ad-container-fullpage,#ad-container-inner,#ad-container-leaderboard,#ad-container-mpu,#ad-container-outer,#ad-container-overlay,#ad-container-top-placeholder,#ad-container1,#ad-contentad,#ad-desktop-bottom,#ad-desktop-takeover-home,#ad-desktop-takeover-int,#ad-desktop-top,#ad-desktop-wrap,#ad-discover,#ad-display-ad,#ad-display-ad-placeholder,#ad-div-leaderboard,#ad-drawer,#ad-ear,#ad-extra-flat,#ad-featured-right,#ad-fixed-bottom,#ad-flex-top,#ad-flyout,#ad-footer-728x90,#ad-framework-top,#ad-front-btf,#ad-front-footer,#ad-full-width,#ad-fullbanner-btf,#ad-fullbanner-outer,#ad-fullbanner2,#ad-fullwidth,#ad-googleAdSense,#ad-gutter-left,#ad-gutter-right,#ad-halfpage,#ad-halfpage1,#ad-halfpage2,#ad-head,#ad-header-1,#ad-header-2,#ad-header-3,#ad-header-banner,#ad-header-left,#ad-header-mad,#ad-header-mobile,#ad-header-right,#ad-holder,#ad-horizontal,#ad-horizontal-header,#ad-horizontal-top,#ad-incontent,#ad-index,#ad-inline-block,#ad-label2,#ad-large-banner-top,#ad-large-header,#ad-lb-secondary,#ad-lead,#ad-leadboard1,#ad-leadboard2,#ad-leader,#ad-leader-atf,#ad-leader-container,#ad-leader-wrapper,#ad-leaderboard,#ad-leaderboard-atf,#ad-leaderboard-bottom,#ad-leaderboard-container,#ad-leaderboard-footer,#ad-leaderboard-header,#ad-leaderboard-spot,#ad-leaderboard-top,#ad-leaderboard970x90home,#ad-leaderboard970x90int,#ad-leaderboard_bottom,#ad-leadertop,#ad-lrec,#ad-m-rec-content,#ad-main,#ad-main-bottom,#ad-main-top,#ad-manager,#ad-masthead,#ad-medium,#ad-medium-lower,#ad-medium-rectangle,#ad-medrec,#ad-medrec__first,#ad-mid,#ad-mid-rect,#ad-middle,#ad-midpage,#ad-minibar,#ad-module,#ad-mpu,#ad-mrec,#ad-mrec2,#ad-new,#ad-north,#ad-one,#ad-other,#ad-output,#ad-overlay,#ad-page-1,#ad-pan3l,#ad-panel,#ad-pencil,#ad-performance,#ad-performanceFullbanner1,#ad-performanceRectangle1,#ad-placeholder,#ad-placeholder-horizontal,#ad-placeholder-vertical,#ad-placement,#ad-plate,#ad-player,#ad-popup,#ad-popup-home,#ad-popup-int,#ad-post,#ad-promo,#ad-push,#ad-pushdown,#ad-r,#ad-rec-atf,#ad-rec-btf,#ad-rec-btf-top,#ad-rect,#ad-rectangle,#ad-rectangle1,#ad-rectangle1-outer,#ad-rectangle2,#ad-rectangle3,#ad-results,#ad-right,#ad-right-bar-tall,#ad-right-container,#ad-right-sidebar,#ad-right-top,#ad-right2,#ad-right3,#ad-row,#ad-section,#ad-separator,#ad-shop,#ad-side,#ad-side-text,#ad-sidebar,#ad-sidebar-btf,#ad-sidebar-container,#ad-sidebar-mad,#ad-sidebar-mad-wrapper,#ad-sidebar1,#ad-sidebar2,#ad-site-header,#ad-skin,#ad-skm-below-content,#ad-sky,#ad-skyscraper,#ad-slideshow,#ad-slideshow2,#ad-slot,#ad-slot-1,#ad-slot-2,#ad-slot-3,#ad-slot-4,#ad-slot-5,#ad-slot-502,#ad-slot-lb,#ad-slot-right,#ad-slot-top,#ad-slot1,#ad-slot2,#ad-slot4,#ad-slug-wrapper,#ad-small-banner,#ad-space,#ad-space-big,#ad-splash,#ad-sponsors,#ad-spot,#ad-spot-bottom,#ad-spot-one,#ad-standard,#ad-standard-wrap,#ad-stickers,#ad-sticky-footer-container,#ad-story-right,#ad-story-top,#ad-stripe,#ad-target,#ad-teaser,#ad-text,#ad-three,#ad-top-250,#ad-top-300x250,#ad-top-728,#ad-top-banner,#ad-top-leaderboard,#ad-top-left,#ad-top-lock,#ad-top-low,#ad-top-right,#ad-top-right-container,#ad-top-text-low,#ad-top-wrap,#ad-top-wrapper,#ad-tower,#ad-two,#ad-undefined,#ad-unit-right-bottom-160-600,#ad-unit-right-middle-300-250,#ad-unit-top-banner,#ad-vip-article,#ad-west,#ad-wide-leaderboard,#ad-wrap,#ad-wrap2,#ad-wrapper-728x90,#ad-wrapper-footer-1,#ad-wrapper-main-1,#ad-wrapper-sidebar-1,#ad-wrapper-top-1,#ad1-placeholder,#ad125x125,#ad160,#ad160600,#ad160x600,#ad250,#ad300,#ad300-250,#ad300_250,#ad336,#ad336x280,#ad4,#ad468,#ad468x60,#ad480x60,#ad6,#ad600,#ad728,#ad72890,#ad728Box,#ad728Header,#ad728Mid,#ad728Top,#ad728Wrapper,#ad728X90,#ad728foot,#ad728h,#ad728top,#ad728x90,#ad728x90_1,#ad90,#ad900,#ad970,#ad970x90_exp,#adATF300x250,#adATF728x90,#adATFLeaderboard,#adAside,#adBTF300x250,#adBadges,#adBanner1,#adBanner336x280,#adBannerBottom,#adBannerHeader,#adBannerSpacer,#adBannerTable,#adBannerTop,#adBar,#adBelt,#adBillboard,#adBlock01,#adBlockAlert,#adBlockAlertWrap,#adBlockBanner,#adBlockContainer,#adBlockContent,#adBlockDetect,#adBlockOverlay,#adBlockerModal,#adBlocks,#adBottom,#adBox,#adBrandDev,#adBrandingStation,#adBreak,#adCarousel,#adChannel,#adChoiceFooter,#adChoices,#adChoicesIcon,#adChoicesLogo,#adCol,#adColumn,#adColumn3,#adComponentWrapper,#adContainer_1,#adContainer_2,#adContainer_3,#adContent,#adContentHolder,#adContext,#adDiv,#adDiv0,#adDiv1,#adDiv300,#adDiv4,#adDiv728,#adDivContainer,#adFiller,#adFlashDiv,#adFooter,#adFot,#adFrame,#adGallery,#adGgV160,#adGoogleText,#adHeader,#adHeaderTop,#adHeaderWrapper,#adHeading,#adHeightstory,#adHolder,#adHolder1,#adHolder2,#adHolder3,#adHolder4,#adHolder5,#adHolder6,#adHome,#adHomeTop,#adIframe,#adInPlayer,#adInhouse,#adIsland,#adLB,#adLabel,#adLarge,#adLayer,#adLayerTop,#adLayout,#adLeader,#adLeaderTop,#adLeaderboard,#adLeaderboard-middle,#adLeft,#adLink,#adLink1,#adLounge,#adLrec,#adMOBILETOP,#adMPU,#adMPUHolder,#adMain,#adMarketplace,#adMed,#adMedRect,#adMediumRectangle,#adMeld,#adMessage,#adMid2,#adMpu,#adMpuBottom,#adOuter,#adPartnerLinks,#adPlaceHolder1,#adPlaceHolder2,#adPlacement_1,#adPlacement_2,#adPlacement_3,#adPlacement_4,#adPlacement_7,#adPlacement_8,#adPlacement_9,#adPlacer,#adPopover,#adPopup,#adPosition0,#adPosition14,#adPosition5,#adPosition6,#adPosition7,#adPosition9,#adPush,#adPushdown1,#adReady,#adRight,#adRight1,#adRight2,#adRight3,#adRight4,#adRight5,#adScraper,#adSection,#adSenseBox,#adSenseModule,#adSenseWrapper,#adSet,#adSide,#adSide1-container,#adSideButton,#adSidebar,#adSite,#adSkin,#adSkinBackdrop,#adSkinLeft,#adSkinRight,#adSky,#adSkyPosition,#adSkyscraper,#adSlider,#adSlot-dmpu,#adSlot-dontMissLarge,#adSlot-leader,#adSlot-leaderBottom,#adSlot1,#adSlot2,#adSlot3,#adSlot4,#adSlug,#adSpace,#adSpaceBottom,#adSpaceHeight,#adSpacer,#adSpecial,#adSqb,#adSquare,#adStrip,#adSuperbanner,#adTag,#adText,#adTextLink,#adTile,#adTop,#adTopContent,#adTopLREC,#adTopLarge,#adTopModule,#adTower,#adUnderArticle,#adUnit,#adWideSkyscraper,#adWrap,#adWrapperSky,#ad_160,#ad_160_600,#ad_160_600_2,#ad_160x160,#ad_160x600,#ad_250,#ad_250x250,#ad_250x300,#ad_300,#ad_300_250,#ad_300_250_1,#ad_300x250,#ad_336,#ad_468_60,#ad_468x60,#ad_5,#ad_728,#ad_728_90,#ad_728x90,#ad_8,#ad_9,#ad_B1,#ad_Banner,#ad_Bottom,#ad_LargeRec01,#ad_Middle,#ad_Middle1,#ad_Pushdown,#ad_R1,#ad_Right,#ad_Top,#ad_Wrap,#ad__billboard,#ad_ad,#ad_adsense,#ad_after_header_1,#ad_anchor,#ad_area,#ad_article1_1,#ad_article1_2,#ad_article2_1,#ad_article2_2,#ad_article3_1,#ad_article3_2,#ad_banner,#ad_banner_1,#ad_banner_468x60,#ad_banner_728x90,#ad_banner_bot,#ad_banner_top,#ad_banners,#ad_bar,#ad_bar_rect,#ad_before_header,#ad_bg,#ad_bg_image,#ad_big,#ad_bigbox,#ad_bigbox_companion,#ad_bigrectangle,#ad_billboard,#ad_block,#ad_block_0,#ad_block_1,#ad_block_2,#ad_block_mpu,#ad_bnr_atf_01,#ad_bnr_atf_02,#ad_bnr_atf_03,#ad_bnr_btf_07,#ad_bnr_btf_08,#ad_body,#ad_bottom,#ad_box,#ad_box_top,#ad_branding,#ad_bsb,#ad_bsb_cont,#ad_btmslot,#ad_button,#ad_buttons,#ad_cell,#ad_center,#ad_choices,#ad_close,#ad_closebtn,#ad_comments,#ad_cont,#ad_cont_superbanner,#ad_container,#ad_container_0,#ad_container_300x250,#ad_container_side,#ad_container_sidebar,#ad_container_top,#ad_content,#ad_content_1,#ad_content_2,#ad_content_3,#ad_content_fullsize,#ad_content_primary,#ad_content_right,#ad_content_top,#ad_content_wrap,#ad_contentslot_1,#ad_contentslot_2,#ad_creative_2,#ad_creative_3,#ad_creative_5,#ad_dfp_rec1,#ad_display_300_250,#ad_display_728_90,#ad_div,#ad_div_bottom,#ad_div_top,#ad_feedback,#ad_foot,#ad_footer,#ad_footer1,#ad_footerAd,#ad_frame,#ad_frame1,#ad_from_bottom,#ad_fullbanner,#ad_gallery,#ad_gallery_bot,#ad_global_300x250,#ad_global_above_footer,#ad_global_below_navbar,#ad_global_header,#ad_global_header1,#ad_global_header2,#ad_h3,#ad_halfpage,#ad_head,#ad_header,#ad_header_1,#ad_header_container,#ad_holder,#ad_home,#ad_home_middle,#ad_horizontal,#ad_houseslot_a,#ad_houseslot_b,#ad_hp,#ad_img,#ad_interthread,#ad_island,#ad_island2,#ad_label,#ad_large,#ad_large_rectangular,#ad_lateral,#ad_layer,#ad_ldb,#ad_lead1,#ad_leader,#ad_leaderBoard,#ad_leaderboard,#ad_leaderboard_top,#ad_left,#ad_left_1,#ad_left_2,#ad_left_3,#ad_left_skyscraper,#ad_left_top,#ad_leftslot,#ad_links,#ad_links_footer,#ad_lnk,#ad_lrec,#ad_lwr_square,#ad_main,#ad_main_leader,#ad_main_top,#ad_marginal,#ad_marker,#ad_mast,#ad_med_rect,#ad_medium,#ad_medium_rectangle,#ad_medium_rectangular,#ad_mediumrectangle,#ad_message,#ad_middle,#ad_middle_bottom,#ad_midstrip,#ad_mobile,#ad_module,#ad_mpu,#ad_mpu2,#ad_mpu300x250,#ad_mrec,#ad_mrec1,#ad_mrec2,#ad_mrec_intext,#ad_mrec_intext2,#ad_new,#ad_news_article,#ad_newsletter,#ad_one,#ad_overlay,#ad_overlayer,#ad_panel,#ad_panorama_top,#ad_pencil,#ad_place {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}#ad_placeholder,#ad_player,#ad_plugs,#ad_popup_background,#ad_popup_wrapper,#ad_post,#ad_poster,#ad_primary,#ad_publicidad,#ad_rail,#ad_rec_01,#ad_rect,#ad_rect1,#ad_rect2,#ad_rect3,#ad_rect_body,#ad_rect_bottom,#ad_rect_btf_01,#ad_rect_btf_02,#ad_rect_btf_03,#ad_rect_btf_04,#ad_rect_btf_05,#ad_rectangle,#ad_region1,#ad_region2,#ad_region3,#ad_region5,#ad_results,#ad_right,#ad_right_box,#ad_right_top,#ad_rightslot,#ad_rotator-2,#ad_rotator-3,#ad_row,#ad_row_home,#ad_rr_1,#ad_sec,#ad_sec_div,#ad_secondary,#ad_short,#ad_sidebar,#ad_sidebar1,#ad_sidebar2,#ad_sidebar3,#ad_sidebar_1,#ad_sidebar_left_container,#ad_sidebar_news,#ad_sidebar_top,#ad_sidebody,#ad_site_header,#ad_sitebar,#ad_skin,#ad_slot,#ad_slot_bottom,#ad_slot_leaderboard,#ad_small,#ad_space_top,#ad_sponsored,#ad_spot_a,#ad_spot_b,#ad_spotlight,#ad_square,#ad_squares,#ad_ss,#ad_stck,#ad_sticky_wrap,#ad_strip,#ad_superbanner,#ad_table,#ad_takeover,#ad_tall,#ad_tbl,#ad_topBanner,#ad_topScroller,#ad_top_728x90,#ad_top_banner,#ad_top_bar,#ad_top_holder,#ad_topbanner,#ad_topmob,#ad_topnav,#ad_topslot,#ad_two,#ad_txt,#ad_under_game,#ad_unit,#ad_unit1,#ad_unit2,#ad_vertical,#ad_video_abovePlayer,#ad_video_belowPlayer,#ad_video_large,#ad_video_root,#ad_wallpaper,#ad_wide,#ad_wide_box,#ad_wideboard,#ad_widget,#ad_widget_1,#ad_window,#ad_wp,#ad_wp_base,#ad_wrap,#ad_wrapper,#ad_wrapper1,#ad_wrapper2,#ad_xrail_top,#ad_zone,#adaptvcompanion,#adb-actived,#adb-enabled,#adb-enabled3,#adb-warning,#adb_bottom,#adbackground,#adbanner-container,#adbanner1,#adbannerbox,#adbannerdiv,#adbannerleft,#adbannerright,#adbannerwidget,#adbig,#adblade,#adblade_ad,#adblock-alert,#adblock-big,#adblock-box,#adblock-leaderboard,#adblock-modal,#adblock-msg,#adblock-overlay,#adblock-small,#adblock1,#adblock2,#adblock4,#adblockDetect,#adblockOverlay,#adblock_detected,#adblock_message,#adblock_screen,#adblock_tooltip,#adblockbottom,#adblocker_announce,#adblocker_message,#adblocker_modal_overlay,#adblocks-detected,#adbn,#adbnr,#adboard,#adbody,#adbottom,#adbottomleft,#adbottomright,#adbox--hot_news_ad,#adbox--page_bottom_ad,#adbox--page_top_ad,#adbox-inarticle,#adbox-topbanner,#adbox1,#adbox2,#adbox_content,#adbox_right,#adbutton,#adbuttons,#adcell,#adcenter,#adcenter2,#adcenter4,#adchoices-icon,#adchoicesBtn,#adclear,#adclose,#adcode,#adcolContent,#adcolumn,#adcontainer2,#adcontainer3,#adcontainer5,#adcontainerRight,#adcontainer_ad_content_top,#adcontent1,#adcontent2,#adcontextlinks,#addbottomleft,#addvert,#adfactor-label,#adfloat,#adfooter,#adfooter_728x90,#adframe:not(frameset),#adframetop,#adfreeDeskSpace,#adhalfpage,#adhead,#adheader,#adhesion,#adhesionAdSlot,#adhesionUnit,#adhide,#adholder,#adholderContainerHeader,#adhome,#adhomepage,#adjacency,#adlabel,#adlabelFooter,#adlabelfooter,#adlabelheader,#adlanding,#adlayer,#adlayerContainer,#adlayerad,#adleaderboard,#adleft,#adlinks,#adlrec,#adm-inline-article-ad-1,#adm-inline-article-ad-2,#admain,#admasthead,#admid,#admobilefoot,#admobilefootinside,#admobilemiddle,#admobiletop,#admobiletopinside,#admod2,#admpubottom,#admpubottom2,#admpufoot,#admpumiddle,#admpumiddle2,#admputop2,#admsg,#adnet,#adnorth,#ados1,#ados2,#ados3,#ados4,#adplace,#adplacement,#adpos-top,#adpos2,#adposition,#adposition1,#adposition10,#adposition1_container,#adposition2,#adposition3,#adposition4,#adpositionbottom,#adrect,#adright,#adright2,#adrightbottom,#adrightrail,#adriver_middle,#adriver_top,#adrotator,#adrow,#adrow1,#adrow3,#ads-1,#ads-125,#ads-200,#ads-250,#ads-300,#ads-300-250,#ads-336x280,#ads-468,#ads-5,#ads-728x90,#ads-728x90-I3,#ads-728x90-I4,#ads-area,#ads-article-left,#ads-banner,#ads-banner-top,#ads-bar,#ads-before-content,#ads-bg,#ads-bg-mobile,#ads-billboard,#ads-block,#ads-blog,#ads-bot,#ads-bottom,#ads-col,#ads-container,#ads-container-2,#ads-container-anchor,#ads-container-single,#ads-container-top,#ads-content,#ads-content-double,#ads-footer,#ads-footer-inner,#ads-footer-wrap,#ads-google,#ads-header-728,#ads-home-468,#ads-horizontal,#ads-inread,#ads-inside-content,#ads-leader,#ads-leaderboard,#ads-leaderboard1,#ads-left-top,#ads-lrec,#ads-main,#ads-middle,#ads-mpu,#ads-outer,#ads-pagetop,#ads-panel,#ads-pop,#ads-position-header-desktop,#ads-right,#ads-right-bottom,#ads-right-skyscraper,#ads-right-top,#ads-slot,#ads-space,#ads-superBanner,#ads-text,#ads-top,#ads-top-728,#ads-top-wrap,#ads-under-rotator,#ads-vertical,#ads-vertical-wrapper,#ads-wrap,#ads1,#ads120,#ads125,#ads1_box,#ads2,#ads2_block,#ads2_box,#ads2_container,#ads3,#ads300,#ads300-250,#ads300x200,#ads300x250,#ads300x250_2,#ads336x280,#ads4,#ads468x60,#ads50,#ads7,#ads728,#ads728bottom,#ads728top,#ads728x90,#ads728x90_2,#ads728x90top,#adsBar,#adsBottom,#adsContent,#adsDisplay,#adsHeader,#adsHeading,#adsLREC,#adsLeft,#adsLinkFooter,#adsMobileFixed,#adsMpu,#adsPanel,#adsRight,#adsRightDiv,#adsSectionLeft,#adsSectionRight,#adsSquare,#adsTG,#adsTN,#adsTop,#adsTopLeft,#adsTopMobileFixed,#adsZone,#adsZone1,#adsZone2,#ads[style^="position: absolute; z-index: 30; width: 100%; height"],#ads_0_container,#ads_160,#ads_3,#ads_300,#ads_300x250,#ads_4,#ads_728,#ads_728x90,#ads_728x90_top,#ads_banner,#ads_banner1,#ads_banner_header,#ads_belownav,#ads_big,#ads_block,#ads_body_1,#ads_body_2,#ads_body_3,#ads_body_4,#ads_body_5,#ads_body_6,#ads_bottom,#ads_box,#ads_box1,#ads_box2,#ads_box_bottom,#ads_box_right,#ads_box_top,#ads_button,#ads_campaign,#ads_catDiv,#ads_center,#ads_center_banner,#ads_central,#ads_combo2,#ads_container,#ads_content,#ads_desktop_r1,#ads_desktop_r2,#ads_expand,#ads_footer,#ads_fullsize,#ads_h,#ads_h1,#ads_h2,#ads_halfsize,#ads_header,#ads_horiz,#ads_horizontal,#ads_horz,#ads_in_modal,#ads_in_video,#ads_inline_z,#ads_inner,#ads_insert_container,#ads_layout_bottom,#ads_lb,#ads_lb_frame,#ads_leaderbottom,#ads_left,#ads_left_top,#ads_line,#ads_medrect,#ads_notice,#ads_overlay,#ads_page_top,#ads_place,#ads_placeholder,#ads_player,#ads_popup,#ads_right,#ads_right_sidebar,#ads_right_top,#ads_singles_bottom,#ads_slide_div,#ads_space,#ads_space_header,#ads_superbanner1,#ads_superbanner2,#ads_superior,#ads_td,#ads_text,#ads_textlinks,#ads_title,#ads_top,#ads_top2,#ads_top_banner,#ads_top_container,#ads_top_content,#ads_top_right,#ads_top_sec,#ads_topbanner,#ads_tower1,#ads_tower_top,#ads_vert,#ads_video,#ads_wide,#ads_wrapper,#adsbot,#adsbottom,#adsbox,#adsbox-left,#adsbox-right,#adscenter,#adscolumn,#adscontainer,#adscontent,#adsdiv,#adsection,#adsense-2,#adsense-468x60,#adsense-area,#adsense-bottom,#adsense-container-bottom,#adsense-header,#adsense-link,#adsense-links,#adsense-middle,#adsense-post,#adsense-right,#adsense-sidebar,#adsense-tag,#adsense-text,#adsense-top,#adsense-wrap,#adsense1,#adsense2,#adsense2pos,#adsense468,#adsense6,#adsense728,#adsenseArea,#adsenseContainer,#adsenseHeader,#adsenseLeft,#adsensePreCuerpo,#adsenseWrap,#adsense_banner_top,#adsense_block,#adsense_bottom_ad,#adsense_box,#adsense_box2,#adsense_center,#adsense_image,#adsense_inline,#adsense_leaderboard,#adsense_overlay,#adsense_r_side_sticky_container,#adsense_sidebar,#adsense_top,#adsenseheader,#adsensehorizontal,#adsensempu,#adsensepo,#adsenseskyscraper,#adsensetext,#adsensetop,#adserv,#adsforsearchGrid,#adsforsearch_content,#adsframe_2,#adside,#adsimage,#adsitem,#adskeeper,#adskinleft,#adskinlink,#adskinright,#adskintop,#adsky,#adskyscraper,#adskyscraper_flex,#adsleft1,#adslider,#adslist,#adslot-below-updated,#adslot-download-abovefiles,#adslot-half-page,#adslot-homepage-middle,#adslot-infobox,#adslot-left-skyscraper,#adslot-side-mrec,#adslot-site-footer,#adslot-site-header,#adslot-sticky-headerbar,#adslot-top-rectangle,#adslot1,#adslot2,#adslot3,#adslot300x250ATF,#adslot300x250BTF,#adslot4,#adslot5,#adslot6,#adslot7,#adslot_1,#adslot_2,#adslot_left,#adslot_rect,#adslot_top,#adsmgid,#adsmiddle,#adsonar,#adspace-1,#adspace-2,#adspace-300x250,#adspace-728,#adspace-728x90,#adspace-bottom,#adspace-leaderboard-top,#adspace-one,#adspace-top,#adspace300x250,#adspaceBox,#adspaceRow,#adspace_header,#adspace_leaderboard,#adspace_top,#adspacer,#adspan,#adsplace1,#adsplace2,#adsplace4,#adsplash,#adspot,#adspot-bottom,#adspot-top,#adsquare,#adsquare2,#adsright,#adsside,#adsspace,#adstext2,#adstrip,#adtab,#adtext,#adtxt,#adunit,#adunit-article-bottom,#adunit_video,#adunitl,#adv-01,#adv-300,#adv-Bottom,#adv-BoxP,#adv-Middle,#adv-Middle1,#adv-Middle2,#adv-Scrollable,#adv-Top,#adv-TopLeft,#adv-banner,#adv-banner-r,#adv-box,#adv-companion-iframe,#adv-container,#adv-gpt-box-container1,#adv-gpt-masthead-skin-container1,#adv-halfpage,#adv-header,#adv-leaderblock,#adv-leaderboard,#adv-left,#adv-masthead,#adv-middle,#adv-middle1,#adv-midroll,#adv-native,#adv-preroll,#adv-right,#adv-right1,#adv-scrollable,#adv-sticky-1,#adv-sticky-2,#adv-title,#adv-top,#adv-top-skin,#adv300x250,#adv300x250container,#adv468x90,#adv728,#adv728x90,#adv768x90,#advBoxBottom,#advCarrousel,#advHome,#advHook-Middle1,#advRectangle,#advRectangle1,#advSkin,#advTop,#advWrapper,#adv_300,#adv_728,#adv_728x90,#adv_BoxBottom,#adv_Inread,#adv_IntropageOvl,#adv_LdbMastheadPush,#adv_Reload,#adv_Skin,#adv_bootom,#adv_border,#adv_bottom_1,#adv_center,#adv_config,#adv_contents,#adv_footer,#adv_holder,#adv_leaderboard,#adv_left_1,#adv_middle,#adv_middle_2,#adv_mob,#adv_mpu1,#adv_mpu2,#adv_network,#adv_overlay,#adv_overlay_content,#adv_position_1,#adv_position_4,#adv_r,#adv_right,#adv_skin,#adv_sky,#adv_textlink,#adv_top,#adv_top_1,#adv_top_right,#adv_wallpaper,#adv_wallpaper2,#advads_ad_widget-18,#advads_ad_widget-19,#advads_ad_widget-8,#adver,#adver-top,#adverFrame,#advert-1,#advert-120,#advert-2,#advert-ahead,#advert-article,#advert-article-1,#advert-article-2,#advert-article-3,#advert-banner,#advert-banner-container,#advert-banner-wrap,#advert-banner2,#advert-block,#advert-boomer,#advert-box,#advert-column,#advert-container-top,#advert-display,#advert-fireplace,#advert-footer,#advert-footer-hidden,#advert-header,#advert-island,#advert-leaderboard,#advert-left,#advert-mpu,#advert-posterad,#advert-rectangle,#advert-right,#advert-sky,#advert-skyscaper,#advert-skyscraper,#advert-slider-top,#advert-text,#advert-top,#advert-top-banner,#advert-wrapper,#advert1,#advert2,#advertBanner,#advertBox,#advertBoxRight,#advertBoxSquare,#advertColumn,#advertContainer,#advertDB,#advertOverlay,#advertRight,#advertSection,#advertTop,#advertTopLarge,#advertTopSmall,#advertTower,#advertWrapper,#advert_1,#advert_banner,#advert_belowmenu,#advert_box,#advert_container,#advert_header,#advert_leaderboard,#advert_mid,#advert_mpu,#advert_right1,#advert_sky,#advert_top,#advertblock,#advertborder,#adverticum_r_above,#adverticum_r_above_container,#adverticum_r_side_container,#advertise-block,#advertise-here,#advertise-sidebar,#advertise1,#advertise2,#advertiseBanner,#advertiseLink,#advertise_top,#advertisediv,#advertisement-300x250,#advertisement-bottom,#advertisement-content,#advertisement-large,#advertisement-placement,#advertisement-text,#advertisement1,#advertisement2,#advertisement3,#advertisement728x90,#advertisementArea,#advertisementBox,#advertisementHorizontal,#advertisementRight,#advertisementTop,#advertisement_banner,#advertisement_belowscreenshots,#advertisement_block,#advertisement_box,#advertisement_container,#advertisement_label,#advertisement_notice,#advertisement_title,#advertisementjsalert,#advertisements_bottom,#advertisements_sidebar,#advertisements_top,#advertisementsarticle,#advertiser-container,#advertiserLinks,#advertisetop,#advertising-160x600,#advertising-300x250,#advertising-728x90,#advertising-banner,#advertising-caption,#advertising-container,#advertising-right,#advertising-skyscraper,#advertising-top,#advertisingHrefTop,#advertisingLeftLeft,#advertisingLink,#advertisingRightColumn,#advertisingRightRight,#advertisingTop,#advertisingTopWrapper,#advertising_300,#advertising_320,#advertising_728,#advertising__banner__content,#advertising_column,#advertising_container,#advertising_contentad,#advertising_div,#advertising_header,#advertising_holder,#advertising_leaderboard,#advertising_top_container,#advertising_wrapper,#advertisment-horizontal,#advertisment-text,#advertisment1,#advertisment_content,#advertisment_panel,#advertleft,#advertorial,#advertorial-box,#advertorial-wrap,#advertorial1,#advertorial_links,#adverts,#adverts--footer,#adverts-top-container,#adverts-top-left,#adverts-top-middle,#adverts-top-right,#adverts_base,#adverts_post_content,#adverts_right,#advertscroll,#advertsingle,#advertspace,#advertssection,#adverttop,#advframe,#advr_mobile,#advsingle,#advt,#advt_bottom,#advtbar,#advtcell,#advtext,#advtop,#advtopright,#adwallpaper,#adwidget,#adwidget-5,#adwidget-6,#adwidget1,#adwidget2,#adwrapper,#adxBigAd,#adxBigAd2,#adxLeaderboard,#adxMiddle,#adxMiddleRight,#adxToolSponsor,#adx_ad,#adxtop2,#adzbanner,#adzone,#adzone-middle1,#adzone-middle2,#adzone-right,#adzone-top,#adzone_content,#adzone_wall,#adzonebanner,#adzoneheader,#afc-container,#affiliate_2,#affiliate_ad,#afsposicion1,#afsposicion2,#after-dfp-ad-mid1,#after-dfp-ad-mid2,#after-dfp-ad-mid3,#after-dfp-ad-mid4,#after-dfp-ad-top,#after-header-ads,#after-top-menu-ads,#after_ad,#after_bottom_ad,#after_heading_ad,#after_title_ad,#amazon-ads,#amazon_ad,#analytics_ad,#anchor-ad,#anchorAd,#aniview--player,#aniview-ads,#anti_adblock,#anunciosGoogle,#aom-ad-right_side_1,#aom-ad-right_side_2,#aom-ad-top,#apiBackgroundAd,#around-the-web,#article-ad,#article-ad-container,#article-ad-content,#article-ads,#article-advert,#article-aside-top-ad,#article-billboard-ad-1,#article-bottom-ad,#article-box-ad,#article-content-ad,#article-footer-ad,#article-footer-sponsors,#article-island-ad,#article-sidebar-ad,#articleAd,#articleAdReplacement,#articleBoard-ad,#articleBottom-ads,#articleLeftAdColumn,#articleSideAd,#articleTop-ads,#article_ad_1,#article_ad_3,#article_ad_bottom,#article_ad_container,#article_ad_top,#article_ad_w,#article_adholder,#article_ads,#article_advert,#article_banner_ad,#article_body_ad1,#article_box_ad,#articlead1,#articlead2,#articlead300x250r,#articleadblock,#articlefootad,#articletop_ad,#aside-ad-container,#asideAd,#aside_ad,#asideads,#asinglead,#audimaAdDesktop,#avazu_ads_slide,#ax-billboard {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}#ax-billboard-bottom,#ax-billboard-sub,#ax-billboard-top,#backad,#background-ad-cover,#background-adv,#background_ad_left,#background_ad_right,#background_ads,#background_banner_wrapper,#backgroundadvert,#banADbanner,#banner-300x250,#banner-468x60,#banner-728,#banner-728x90,#banner-ad-container,#banner-ad-large,#banner-ads,#banner-advert,#banner-lg-ad,#banner-native-ad,#banner-skyscraper,#banner300x250,#banner468,#banner468x60,#banner728,#banner728x90,#bannerAd,#bannerAdFrame,#bannerAdTop,#bannerAdWrap,#bannerAdWrapper,#bannerAds,#bannerAdsense,#bannerAdvert,#bannerGoogle,#banner_ad_bottom,#banner_ad_footer,#banner_ad_module,#banner_ad_placeholder,#banner_ad_top,#banner_ads,#banner_adsense,#banner_adv,#banner_advertisement,#banner_adverts,#banner_content_ad,#banner_pos1_ddb_0,#banner_pos2_ddb_0,#banner_pos3_ddb_0,#banner_pos4_ddb_0,#banner_publi,#banner_sedo,#banner_slot,#banner_spacer,#banner_topad,#banner_videoad,#banner_wrapper_top,#bannerad-bottom,#bannerad-top,#bannerad2,#banneradrow,#bannerads,#banneradspace,#banneradvert3,#banneradvertise,#bannerplayer-wrap,#bannerpop,#barraPublicidade,#baseboard-ad,#baseboard-ad-wrapper,#bbContentAds,#bb_ad_container,#bb_top_ad,#bbadwrap,#before-footer-ad,#below-listings-ad,#below-menu-ad-header,#below-post-ad,#below-title-ad,#belowAd,#belowContactBoxAd,#belowNodeAds,#below_content_ad_container,#belowad,#belowheaderad,#bg-custom-ad,#bgad,#big-box-ad,#bigAd,#bigAd1,#bigAd2,#bigAdDiv,#bigBoxAd,#bigBoxAdCont,#big_ad,#big_ad_label,#big_ads,#bigad,#bigadbox,#bigads,#bigadspace,#bigadspot,#bigboard_ad,#bigsidead,#billboard-ad,#billboard-atf,#billboard_ad,#bingadcontainer2,#blkAds1,#blkAds2,#blkAds3,#blkAds4,#blkAds5,#block-ad-articles,#block-adsense-0,#block-adsense-2,#block-adsense-banner-article-bottom,#block-adsense-banner-channel-bottom,#block-adsenseleaderboard,#block-advertisement,#block-advertorial,#block-articlebelowtextad,#block-articlefrontpagead,#block-articletopadvert,#block-boxes-taboola,#block-dfp-top,#block-frontpageabovepartnersad,#block-frontpagead,#block-frontpagesideadvert1,#block-google-ads,#block-googleads3,#block-googleads3-2,#block-openads-0,#block-openads-1,#block-openads-13,#block-openads-14,#block-openads-2,#block-openads-3,#block-openads-4,#block-openads-5,#block-sponsors,#block-taboolablock,#blockAd,#blockAds,#block_ad,#block_ad2,#block_ad_container,#block_advert,#block_advert1,#block_advert2,#block_advertisement,#blog-ad,#blog-advert,#blogad,#blogad-wrapper,#blogads,#bloque-publicidad-1,#bloque-publicidad-2,#bloque-publicidad-9,#bloque-publicidad-campania,#bm-HeaderAd,#bn_ad,#bnr-300x250,#bnr-468x60,#bnr-728x90,#bnrAd,#body-ads,#bodyAd1,#bodyAd2,#bodyAd3,#bodyAd4,#body_ad,#body_centered_ad,#bottom-ad,#bottom-ad-1,#bottom-ad-area,#bottom-ad-banner,#bottom-ad-container,#bottom-ad-leaderboard,#bottom-ad-slot,#bottom-ad-tray,#bottom-ad-wrapper,#bottom-add,#bottom-adhesion,#bottom-adhesion-container,#bottom-ads,#bottom-ads-bar,#bottom-ads-container,#bottom-adspot,#bottom-advertising,#bottom-bnr,#bottom-boxad,#bottom-not-ads,#bottom-side-ad,#bottom-sponsor-add,#bottomAd,#bottomAd300,#bottomAdBlcok,#bottomAdContainer,#bottomAdSection,#bottomAdSense,#bottomAdSenseDiv,#bottomAdWrapper,#bottomAds,#bottomAdvBox,#bottomBannerAd,#bottomContentAd,#bottomDDAd,#bottomLeftAd,#bottomMPU,#bottomRightAd,#bottom_ad,#bottom_ad_728,#bottom_ad_area,#bottom_ad_box,#bottom_ad_region,#bottom_ad_unit,#bottom_ad_wrapper,#bottom_adbox,#bottom_ads,#bottom_adwrapper,#bottom_banner,#bottom_banner_ad,#bottom_fixed_ad_overlay,#bottom_leader_ad,#bottom_player_adv,#bottom_sponsor_ads,#bottom_sponsored_links,#bottom_text_ad,#bottomad,#bottomad300,#bottomad_table,#bottomadbanner,#bottomadbar,#bottomadholder,#bottomads,#bottomadsdiv,#bottomadsense,#bottomadvert,#bottomadwrapper,#bottomcontentads,#bottomleaderboardad,#bottommpuAdvert,#bottommpuSlot,#bottomsponad,#bottomsponsoredresults,#box-ad,#box-ad-section,#box-ad-sidebar,#box-content-ad,#box1ad,#box2ad,#boxAD,#boxAd,#boxAd300,#boxAdContainer,#boxAdvert,#boxLREC,#box_ad,#box_ad_container,#box_ad_middle,#box_ads,#box_advertisement,#box_advertisment,#box_articlead,#box_text_ads,#boxad,#boxads,#bpAd,#br-ad-header,#breadcrumb_ad,#breakbarad,#bsa_add_holder_g,#bt-ad,#bt-ad-header,#btfAdNew,#btm_ad,#btm_ads,#btmad,#btnAdDP,#btnAds,#btnads,#btopads,#button-ads,#button_ad_container,#button_ads,#buy-sell-ads,#buySellAds,#buysellads,#carbon-ads-container-bg,#carbonadcontainer,#carbonads,#carbonads-container,#card-ads-top,#category-ad,#category-sponsor,#cellAd,#center-ad,#center-ad-group,#ch-ad-outer-right,#ch-ads,#channel_ad,#channel_ads,#circ_ad,#circ_ad_holder,#circad_wrapper,#classifiedsads,#clickforad,#clientAds,#closeAdsDiv,#closeable-ad,#cloudAdTag,#cmg-video-player-placeholder,#col-right-ad,#colAd,#colombiaAdBox,#columnAd,#commentAdWrapper,#commentTopAd,#comment_ad_zone,#comments-ad-container,#comments-ads,#comments-standalone-mpu,#compAdvertisement,#companion-ad,#companionAd,#companionAdDiv,#companion_Ad,#companionad,#component-taboola-below-article-feed,#component-taboola-below-article-feed-2,#component-taboola-below-homepage-feed,#connatix,#connatix-moveable,#connatix_placeholder_desktop,#container-ad,#container_ad,#contenedor_pub_superior,#content-ad,#content-ad-side,#content-ads,#content-ads-top,#content-adver,#content-contentad,#content-header-ad,#content-left-ad,#content-right-ad,#contentAd,#contentAdSense,#contentAdTwo,#contentAds,#contentBoxad,#content_Ad,#content_ad,#content_ad_1,#content_ad_2,#content_ad_block,#content_ad_container,#content_ad_placeholder,#content_ads,#content_ads_top,#content_adv,#content_bottom_ad,#content_bottom_ads,#content_mpu,#contentad,#contentad-adsense-homepage-1,#contentad-commercial-1,#contentad-content-box-1,#contentad-footer-tfm-1,#contentad-lower-medium-rectangle-1,#contentad-story-middle-1,#contentad-superbanner-1,#contentad-top-adsense-1,#contentad-topbanner-1,#contentadcontainer,#contentads,#contextad,#contextual-ads,#contextual-ads-block,#contextualad,#cornerad,#coverads,#criteoAd,#crt-adblock-a,#crt-adblock-b,#ctl00_ContentPlaceHolder1_ucAdHomeRightFO_divAdvertisement,#ctl00_ContentPlaceHolder1_ucAdHomeRight_divAdvertisement,#ctl00_PublicidadSuperior,#ctl00_adFooter,#ctl00_leaderboardAdvertContainer,#ctl00_skyscraperAdvertContainer,#ctl00_topAd,#ctl00_ucFooter_ucFooterBanner_divAdvertisement,#cubeAd,#cube_ad,#cube_ads,#customAd,#customAds,#customad,#darazAd,#ddAdZone2,#ddb_fluid_native_ddb_0,#deadblocker_dialog,#derpub,#desktop-ad-top,#desktop-sidebar-ad,#desktop_middle_ad_fixed,#desktop_top_ad_fixed,#detectadblock,#dfp-ad-bottom-wrapper,#dfp-ad-container,#dfp-ad-floating,#dfp-ad-leaderboard,#dfp-ad-leaderboard-wrapper,#dfp-ad-medium_rectangle,#dfp-ad-mediumrect-wrapper,#dfp-ad-mpu1,#dfp-ad-mpu2,#dfp-ad-right1,#dfp-ad-right1-wrapper,#dfp-ad-right2,#dfp-ad-right2-wrapper,#dfp-ad-right3,#dfp-ad-right4-wrapper,#dfp-ad-slot2,#dfp-ad-slot3,#dfp-ad-slot3-wrapper,#dfp-ad-slot4-wrapper,#dfp-ad-slot5,#dfp-ad-slot5-wrapper,#dfp-ad-slot6,#dfp-ad-slot6-wrapper,#dfp-ad-slot7,#dfp-ad-slot7-wrapper,#dfp-ad-top-wrapper,#dfp-ap-2016-interstitial,#dfp-article-mpu,#dfp-atf,#dfp-atf-desktop,#dfp-banner,#dfp-banner-popup,#dfp-billboard1,#dfp-billboard2,#dfp-btf,#dfp-btf-desktop,#dfp-footer-desktop,#dfp-header,#dfp-header-container,#dfp-ia01,#dfp-ia02,#dfp-interstitial,#dfp-leaderboard,#dfp-leaderboard-desktop,#dfp-masthead,#dfp-middle,#dfp-middle1,#dfp-mtf,#dfp-mtf-desktop,#dfp-rectangle,#dfp-rectangle1,#dfp-ros-res-header_container,#dfp-tlb,#dfp-top-banner,#dfpAd,#dfp_ad_mpu,#dfp_ads_4,#dfp_ads_5,#dfp_bigbox_2,#dfp_bigbox_recipe_top,#dfp_container,#dfp_leaderboard,#dfpad-0,#dfpslot_tow_2-0,#dfpslot_tow_2-1,#dfrads-widget-3,#dfrads-widget-6,#dfrads-widget-7,#dianomiNewsBlock,#dict-adv,#direct-ad,#disable-ads-container,#display-ads,#displayAd,#displayAdSet,#display_ad,#displayad_carousel,#displayad_rectangle,#div-ad-1x1,#div-ad-bottom,#div-ad-flex,#div-ad-inread,#div-ad-leaderboard,#div-ad-r,#div-ad-r1,#div-ad-top,#div-ad-top_banner,#div-adcenter1,#div-adcenter2,#div-advert,#div-contentad_1,#div-footer-ad,#div-gpt-LDB1,#div-gpt-MPU1,#div-gpt-MPU2,#div-gpt-MPU3,#div-gpt-Skin,#div-gpt-inline-main,#div-gpt-mini-leaderboard1,#div-gpt-mrec,#div-insticator-ad-1,#div-insticator-ad-2,#div-insticator-ad-3,#div-insticator-ad-4,#div-insticator-ad-5,#div-insticator-ad-6,#div-insticator-ad-9,#div-leader-ad,#div-social-ads,#divAd,#divAdDetail,#divAdHere,#divAdHorizontal,#divAdLeft,#divAdMain,#divAdRight,#divAdWrapper,#divAds,#divAdsTop,#divAdv300x250,#divAdvertisement,#divBannerSlider,#divDoubleAd,#divFoldersAd,#divFooterAd,#divFooterAds,#divSponAds,#divSponAds + *,#divSponsoredLinks,#divStoryBigAd1,#divThreadAdBox,#divTopAd,#divTopAds,#divWrapper_Ad,#div_ad_TopRight,#div_ad_float,#div_ad_holder,#div_ad_leaderboard,#div_advt_right,#div_belowAd,#div_bottomad,#div_bottomad_container,#div_googlead,#divadfloat,#dnn_adSky,#dnn_adTop,#dnn_ad_banner,#dnn_ad_island1,#dnn_ad_skyscraper,#dnn_sponsoredLinks,#downloadAd,#download_ad,#download_ads,#dragads,#ds-mpu,#dsStoryAd,#dsk-banner-ad-a,#dsk-banner-ad-b,#dsk-banner-ad-c,#dsk-banner-ad-d,#dsk-box-ad-c,#dsk-box-ad-d,#dsk-box-ad-f,#dsk-box-ad-g,#dv-gpt-ad-bigbox-wrap,#dynamicAdDiv,#em_ad_superbanner,#embedAD,#embedADS,#embed__pre[style^="width: 612px; height: 300px;"],#eplAdDivlateralder,#eplAdDivlateralizq,#eplAdDivtopbanner,#ero_fade_banner,#event_ads,#events-adv-side1,#events-adv-side2,#events-adv-side3,#events-adv-side4,#events-adv-side5,#events-adv-side6,#exoAd,#external-floater-ad-wrap,#externalAd,#ezmob_footer,#ezmobfooter,#featureAd,#featureAdSpace,#featureAds,#feature_ad,#featuread,#featured-ads,#featuredAds,#first-ads,#first_ad,#firstad,#fix_publicidad_inferior,#fixed-ad,#fixedAd,#fixedban,#floatAd,#floatads,#floating-ad-wrapper,#floating-ads,#floating-advert,#floatingAd,#floatingAdContainer,#floatingAds,#floating_ad,#floating_ad_container,#floating_ads_bottom_textcss_container,#floorAdWrapper,#fnAdblockingOverlay,#foot-ad-wrap,#foot-ad2-wrap,#footAd,#footAdArea,#footAds,#footad,#footer-ad,#footer-ad-728,#footer-ad-block,#footer-ad-box,#footer-ad-col,#footer-ad-google,#footer-ad-large,#footer-ad-slot,#footer-ad-unit,#footer-ad-wrapper,#footer-adspace,#footer-adv,#footer-advert,#footer-advert-area,#footer-advertisement,#footer-adverts,#footer-adwrapper,#footer-affl,#footer-banner-ad,#footer-leaderboard-ad,#footer-sponsored,#footer-sponsors,#footerAd,#footerAdBottom,#footerAdBox,#footerAdDiv,#footerAdWrap,#footerAdd,#footerAds,#footerAdsPlacement,#footerAdvert,#footerAdvertisement,#footerAdverts,#footerGoogleAd,#footer_AdArea,#footer_ad,#footer_ad_block,#footer_ad_container,#footer_ad_frame,#footer_ad_holder,#footer_ad_modules,#footer_adcode,#footer_add,#footer_addvertise,#footer_ads,#footer_ads_holder,#footer_adspace,#footer_adv,#footer_advertising,#footer_leaderboard_ad,#footer_text_ad,#footerad,#footerad728,#footerads,#footeradsbox,#footeradvert,#forum-top-ad-bar,#frameAd,#frmSponsAds,#front-ad-cont,#front-page-ad,#front-page-advert,#frontPageAd,#front_advert,#front_mpu,#ft-ad,#ft-ads,#full_banner_ad,#fwAdBox,#g-outbrain,#gAddTop,#gAds,#gStickyAd,#g_ad,#g_adsense,#gad300x250,#gad728x90,#gads300x250,#gadsOverlayUnit,#gads_middle,#gallery-ad,#gallery-ad-container,#gallery-advert,#gallery-below-line-advert,#gallery-sidebar-advert,#gallery_ad,#gallery_ads,#gallery_header_ad,#galleryad1,#gam-ad-ban1,#game-ad,#gamead,#gameads,#gasense,#geoAd,#gg_ad,#ggl-ad,#glamads,#global-banner-ad,#globalLeftNavAd,#globalTopNavAd,#global_header_ad,#global_header_ad_area,#gnt_atomsnc,#goad1,#goads,#gooadtop,#google-ad,#google-ad2,#google-ads-bottom,#google-ads-bottom-container,#google-ads-container,#google-ads-detailsRight,#google-ads-directoryViewRight,#google-ads-header,#google-adsense,#google-adwords,#google-afc,#google-dfp-bottom,#google-dfp-top,#google-post-ad,#google-post-adbottom,#google-top-ads,#googleAd,#googleAdArea,#googleAdBottom,#googleAdBox,#googleAdTop,#googleAds,#googleAdsense,#googleAdsenseAdverts,#googleSearchAds,#google_ad_1,#google_ad_2,#google_ad_3,#google_ad_container,#google_ad_slot,#google_ads,#google_ads_1,#google_ads_box,#google_ads_frame,#google_ads_frame1_anchor,#google_ads_frame2_anchor,#google_ads_frame3_anchor,#google_ads_frame4_anchor,#google_ads_frame5_anchor,#google_ads_frame6_anchor,#google_adsense,#google_adsense_ad,#googlead,#googlead2,#googleadleft,#googleads,#googleads1,#googleads_dr,#googleadsense,#googleadstop,#googlebanner,#googlesponsor,#googletextads,#gpt-ad-1,#gpt-ad-banner,#gpt-ad-halfpage,#gpt-ad-outofpage-wp,#gpt-ad-rectangle1,#gpt-ad-rectangle2,#gpt-ad-side-bottom,#gpt-ad-skyscraper,#gpt-dynamic_native_article_4,#gpt-high_impact,#gpt-instory-ad,#gpt-leaderboard-ad,#gpt-mpu,#gpt-poster,#gpt-sticky,#grdAds,#gridAdSidebar,#grid_ad,#half-page-ad,#halfPageAd,#half_page_ad_300x600,#halfpagead,#head-ad,#head-ad-text-wrap,#head-ad-timer,#head-ads,#head-advertisement,#headAd,#headAds,#headAdv,#head_ad,#head_ads,#head_advert,#headad,#headadvert,#header-ad,#header-ad-background,#header-ad-block,#header-ad-bottom,#header-ad-container,#header-ad-holder,#header-ad-label,#header-ad-left,#header-ad-placeholder,#header-ad-right,#header-ad-slot,#header-ad-wrap,#header-ad-wrapper,#header-ad2,#header-ads,#header-ads-container,#header-ads-holder,#header-ads-wrapper,#header-adsense,#header-adserve,#header-adspace,#header-adv,#header-advert,#header-advert-panel,#header-advertisement,#header-advertising,#header-adverts,#header-advrt,#header-banner-728-90,#header-banner-ad,#header-banner-ad-wrapper,#header-block-ads,#header-box-ads,#headerAdBackground,#headerAdContainer,#headerAdSpace,#headerAdUnit,#headerAdWrap,#headerAds,#headerAdsWrapper,#headerAdv,#headerAdvert,#headerTopAd,#header_ad_728,#header_ad_728_90,#header_ad_banner,#header_ad_block,#header_ad_container,#header_ad_leaderboard,#header_ad_units,#header_ad_widget,#header_ad_wrap,#header_adbox,#header_adcode,#header_ads,#header_ads2,#header_adsense,#header_adv,#header_advert,#header_advertisement,#header_advertisement_top,#header_advertising,#header_adverts,#header_bottom_ad,#header_publicidad,#header_right_ad,#header_sponsors,#header_top_ad,#headerad,#headerad_large,#headeradbox,#headeradcontainer,#headerads,#headeradsbox,#headeradsense,#headeradspace,#headeradvertholder,#headeradwrap,#headergooglead,#headersponsors,#headingAd,#headline_ad,#hearst-autos-ad-wrapper,#hgiks-middle,#hgiks-top,#home-ad,#home-ad-block,#home-ad-slot,#home-advert-module,#home-advertise,#home-banner-ad,#home-left-ad,#home-rectangle-ad,#home-side-ad,#home-top-ads,#homeAd,#homeAdLeft,#homeAds,#homeSideAd,#home_ad,#home_ads_vert,#home_advertising_block,#home_bottom_ad,#home_contentad,#home_mpu,#home_sidebar_ad,#home_top_right_ad,#homead,#homeheaderad,#homepage-ad,#homepage-adbar,#homepage-footer-ad,#homepage-header-ad,#homepage-sidebar-ad,#homepage-sidebar-ads,#homepage-sponsored,#homepageAd,#homepageAdsTop,#homepageFooterAd,#homepageGoogleAds,#homepage_ad,#homepage_ad_listing,#homepage_rectangle_ad,#homepage_right_ad,#homepage_right_ad_container,#homepage_top_ad,#homepage_top_ads,#homepageadvert,#hometopads,#horAd,#hor_ad,#horadslot,#horizad,#horizads728,#horizontal-ad,#horizontal-adspace,#horizontal-banner-ad,#horizontalAd,#horizontalAdvertisement,#horizontal_ad,#horizontal_ad2,#horizontal_ad_top,#horizontalad,#horizontalads,#hottopics-advert,#hours_ad,#houseAd,#hovered_sponsored,#hp-desk-after-header-ad,#hp-header-ad,#hp-right-ad,#hp-store-ad,#hpAdVideo,#humix-vid-ezAutoMatch,#idDivAd,#id_SearchAds,#iframe-ad,#iframeAd_2,#iframe_ad_2,#imPopup,#im_papupFixed,#im_popupDiv,#ima_ads-2,#ima_ads-3,#ima_ads-4,#imgAddDirectLink,#imgad1,#imu_ad_module,#in-article-ad,#in-article-mpu,#in-content-ad,#inArticleAdv,#inarticlead,#inc-ads-bigbox {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}#incontent-ad-2,#incontent-ad-3,#incontentAd1,#incontentAd2,#incontentAd3,#index-ad,#index-bottom-advert,#indexSquareAd,#index_ad,#indexad,#indexad300x250l,#indexsmallads,#indiv_adsense,#infoBottomAd,#infoboxadwrapper,#inhousead,#initializeAd,#inline-ad,#inline-ad-label,#inline-advert,#inline-story-ad,#inline-story-ad2,#inlineAd,#inlineAdCont,#inlineAdtop,#inlineAdvertisement,#inlineBottomAd,#inline_ad,#inline_ad_section,#inlinead,#inlineads,#inner-ad,#inner-ad-container,#inner-advert-row,#inner-top-ads,#innerad,#innerpage-ad,#inside-page-ad,#insideCubeAd,#instant_ad,#insticator-container,#instoryad,#int-ad,#int_ad,#interads,#intermediate-ad,#internalAdvert,#internalads,#interstitial-shade,#interstitialAd,#interstitialAdContainer,#interstitialAdUnit,#interstitial_ad,#interstitial_ad_container,#interstitial_ads,#intext_ad,#introAds,#intro_ad_1,#invid_ad,#ipadv,#iq-AdSkin,#iqadcontainer,#iqadoverlay,#iqadtile1,#iqadtile11,#iqadtile14,#iqadtile15,#iqadtile16,#iqadtile2,#iqadtile3,#iqadtile4,#iqadtile41,#iqadtile6,#iqadtile8,#iqadtile9,#iqadtile99,#islandAd,#islandAdPan,#islandAdPane,#islandAdPane2,#island_ad_top,#islandad,#jobs-ad,#js-Taboola-Container-0,#js-ad-billboard,#js-ad-leaderboard,#js-image-ad-mpu,#js-outbrain-ads-module,#js-outbrain-module,#js-outbrain-relateds,#js-page-ad-top,#js-wide-ad,#js_commerceInsetModule,#jsid-ad-container-post_above_comment,#jsid-ad-container-post_below_comment,#jwplayer-container-div,#jwplayer_contextual_player_div,#kargo-player,#kt_player > a[target="_blank"],#kt_player > div[style$="display: block;"][style*="inset: 0px;"],#large-ads,#large-bottom-leaderboard-ad,#large-leaderboard-ad,#large-middle-leaderboard-ad,#large-rectange-ad,#large-rectange-ad-2,#large-skyscraper-ad,#largeAd,#largeAds,#large_rec_ad1,#largead,#layer_ad,#layer_ad_content,#layerad,#layeradsense,#layout-header-ad-wrapper,#layout_topad,#lb-ad,#lb-sponsor-left,#lb-sponsor-right,#lbAdBar,#lbAdBarBtm,#lblAds,#lead-ads,#lead_ad,#leadad_1,#leadad_2,#leader-ad,#leader-board-ad,#leader-companion > a[href],#leaderAd,#leaderAdContainer,#leaderAdContainerOuter,#leaderBoardAd,#leader_ad,#leader_board_ad,#leaderad,#leaderad_section,#leaderadvert,#leaderboard-ad,#leaderboard-advert,#leaderboard-advertisement,#leaderboard-atf,#leaderboard-bottom-ad,#leaderboard.ad,#leaderboardAd,#leaderboardAdTop,#leaderboardAds,#leaderboardAdvert,#leaderboard_728x90,#leaderboard_Ad,#leaderboard_ad,#leaderboard_ads,#leaderboard_bottom_ad,#leaderboard_top_ad,#leaderboardad,#leatherboardad,#left-ad,#left-ad-1,#left-ad-2,#left-ad-col,#left-ad-iframe,#left-ad-skin,#left-bottom-ad,#left-col-ads-1,#left-content-ad,#leftAD,#leftAdAboveSideBar,#leftAdCol,#leftAdContainer,#leftAdMessage,#leftAdSpace,#leftAd_fmt,#leftAd_rdr,#leftAds,#leftAdsSmall,#leftAdvert,#leftBanner-ad,#leftColumnAdContainer,#leftGoogleAds,#leftTopAdWrapper,#left_ad,#left_ads,#left_adsense,#left_adspace,#left_adv,#left_advertisement,#left_bg_ad,#left_block_ads,#left_float_ad,#left_global_adspace,#left_side_ads,#left_sidebar_ads,#left_top_ad,#leftadg,#leftads,#leftcolAd,#leftcolumnad,#leftforumad,#leftrail_dynamic_ad_wrapper,#lg-banner-ad,#liBannerDireita,#liPublicidadeAdsense,#ligatus,#ligatus_adv,#ligatusdiv,#lightboxAd,#linkAdSingle,#linkAds,#link_ads,#linkads,#listadholder,#liste_top_ads_wrapper,#listing-ad,#live-ad,#localAds,#localpp,#locked-footer-ad-wrapper,#logoAd,#logoAd2,#logo_ad,#long-ad,#long-ad-space,#long-bottom-ad-wrapper,#longAdSpace,#longAdWrap,#long_advert_header,#long_advertisement,#lower-ad-banner,#lower-ads,#lower-advertising,#lower-home-ads,#lowerAdvertisement,#lowerAdvertisementImg,#lower_ad,#lower_content_ad_box,#lowerads,#lowerthirdad,#lrec_ad,#lrecad,#m-banner-bannerAd,#main-ad,#main-advert,#mainAd,#mainAd1,#mainAdUnit,#mainAdvert,#mainPageAds,#mainPlaceHolder_coreContentPlaceHolder_rightColumnAdvert_divControl,#main_AD,#main_ad,#main_ads,#main_content_ad,#main_rec_ad,#main_top_ad,#mainui-ads,#mapAdsSwiper,#mapAdvert,#marketgid,#marketplaceAds,#marquee-ad,#marquee_ad,#mastAd,#mastAdvert,#mastad,#masterad,#masthead_ad,#masthead_ads_container,#masthead_topad,#med-rect-ad,#med-rectangle-ad,#medRecAd,#medReqAd,#media-ad,#medium-ad,#mediumAd1,#mediumAdContainer,#mediumAdvertisement,#mediumRectangleAd,#medrec_bottom_ad,#medrec_middle_ad,#medrec_top_ad,#medrectad,#medrectangle_banner,#menuad,#menubarad,#message_adblock,#mgb-container > #mgb,#mgid-container,#mgid_iframe,#mid-ad-slot-1,#mid-ad-slot-3,#mid-ad-slot-5,#mid-ads,#mid-table-ad,#midAD,#midRightAds,#midRightTextAds,#mid_ad,#mid_ad_div,#mid_ad_title,#mid_left_ads,#mid_mpu,#mid_roll_ad_holder,#midadspace,#midadvert,#midbarad,#midbnrad,#midcolumn_ad,#middle-ad,#middle-ad-destin,#middleAd,#middle_ad,#middle_ads,#middle_mpu,#middlead,#middleads,#middleads2,#midpost_ad,#midrect_ad,#midstrip_ad,#mini-ad,#mm-player-placeholder-large-screen,#mobile-adhesion,#mobile-ads-ad,#mobile-footer-ad-wrapper,#mobile-swipe-banner,#mobileAdContainer,#mobile_ads_100_pc,#mobile_ads_block,#mod_ad,#mod_ad_top,#modal-ad,#module-ads-01,#module-ads-02,#moduleTaboolaRightRail,#module_ad,#module_box_ad,#monsterAd,#mpu-ad,#mpu-advert,#mpu-cont,#mpu-content,#mpu-sidebar,#mpu1_parent,#mpu2,#mpu2_container,#mpu2_parent,#mpuAd,#mpuAdvert,#mpuContainer,#mpuDiv,#mpuInContent,#mpuSecondary,#mpuSlot,#mpuWrapper,#mpuWrapperAd,#mpuWrapperAd2,#mpu_ad,#mpu_ad2,#mpu_adv,#mpu_banner,#mpu_box,#mpu_container,#mpu_div,#mpu_holder,#mpu_text_ad,#mpu_top,#mpuad,#mpubox,#mpuholder,#mvp-foot-ad-wrap,#mvp-post-bot-ad,#my-ads,#narrow-ad,#narrow_ad_unit,#native-ads-placeholder,#native_ad2,#native_ads,#nav-ad-container,#navAdBanner,#nav_ad,#nav_ad_728_mid,#navads-container,#navbar_ads,#navigation-ad,#navlinkad,#newAd,#ng-ad,#ng-ad-lbl,#ni-ad-row,#nk_ad_top,#noticias-publicidad-1,#noticias-publicidad-2,#noticias-publicidad-3,#noticias-publicidad-4,#noticias-publicidad-5,#noticias-publicidad-6,#notify_ad,#ntvads,#oasTOP,#ob-ad-choices,#openx-text-ad,#openx-widget,#original_taboola,#outbrain,#outbrain-id,#outbrain-section,#outbrain-wrapper,#outbrain1,#outbrainAdWrapper,#outbrainWidget,#ovadsense,#overlay-ad-bg,#overlay_ad,#overlayad,#overlayadd,#p-Ad,#p-advert,#p-googlead,#p-googleadsense,#p2HeaderAd,#p2squaread,#page-ad-top,#page-advertising,#page-header-ad,#page-top-ad,#pageAdDiv,#pageAdds,#pageAds,#pageAdsDiv,#pageAdvert,#pageBannerAd,#pageLeftAd,#pageMiddleAdWrapper,#pageRightAd,#page__outside-advertsing,#page_ad_top,#page_top_ad,#pageads_top,#pagebottomAd,#pagination-advert,#panel-ad,#panelAd,#panel_ad1,#panoAdBlock,#partner-ad,#partnerAd,#partnerMedRec,#partner_ads,#pause-ad,#pause-ads,#pauseAd,#pc-div-gpt-ad_728-3,#pencil-ad,#pencil-ad-container,#perm_ad,#permads,#persistentAd,#personalization_ads,#pgAdWrapper,#ph_ad,#player-ads,#player-advert,#player-advertising,#player-banner,#player-below-advert,#player-midrollAd,#playerAd,#playerAdsRight,#player_ad,#player_ads,#player_middle_ad,#player_top_ad,#playerad,#playerads,#pmocntr2,#pop.div_pop,#pop_ad,#popadwrap,#popback-ad,#popoverAd,#popupAd,#popupBottomAd,#popup_ad_wrapper,#popupadunit,#posicion-publicidad-superior,#possible_taboola,#post-ad,#post-ads,#post-bottom-ads,#post-content-ad,#post-page-ad,#post-promo-ad,#postAd,#postNavigationAd,#post_ad,#post_addsense,#post_adsense,#post_adspace,#post_advert,#postads0,#ppcAdverts,#ppvideoadvertisement,#pr_ad,#pr_advertising,#pre-adv,#pre-footer-ad,#preAds_ad_mrec_intext,#preAds_ad_mrec_intext2,#preminumAD,#premiumAdTop,#premium_ad,#premium_ddb_0,#premiumad,#premiumads,#preroll_ads,#primis-container,#primis-holder,#primis_intext,#primis_player,#print_ads,#printads,#privateads,#promo-ad,#promoAds,#promoFloatAd,#promo_ads,#pub468x60,#pub728x90,#pub_superior_left,#pubexchange_below_content,#pubinf,#publiEspecial,#publiLink,#publicidad,#publicidad-02,#publicidad-contextual,#publicidad-top,#publicidadMovil,#publicidadTablet,#publicidadTop,#publicidad_button_home,#publicidad_header,#publicidad_inferior,#publicidad_lateral_inferior,#publicidad_lateral_medio,#publicidad_lateral_superior,#publicidad_subir,#publicidad_superior,#publicidade-topo,#publicidadeIsland,#publicidadeLREC,#publicidade_not,#publicidades_top,#publicidadhead,#publicidadheadernota,#publicidadsky,#publicidadtop_content,#publicolumna,#publiheader,#publitop,#pushAd,#pushDownAd,#pushdownAd,#pushdownAdWrapper,#pushdown_ad,#pusher-ad,#pvadscontainer,#quads-ad1_widget,#quads-ad2_widget,#quads-admin-ads-js,#queTooltip,#r89-desktop-top-ad,#radio-ad-container,#rail-ad-wrap,#rail-bottom-ad,#railAd,#rail_ad,#rail_ad1,#rail_ad2,#rec_spot_ad_1,#recommendAdBox,#rect-ad,#rectAd,#rect_ad,#rectad,#rectangle-ad,#rectangleAd,#rectangleAdTeaser1,#rectangle_ad,#redirect-ad,#redirect-ad-modal,#reference-ad,#region-node-advert,#reklam_buton,#reklam_center,#reklama,#reklama_big,#reklama_left_body,#reklama_left_up,#reklama_right_up,#related-ads,#related-news-1-bottom-ad,#related-news-1-top-ad,#related_ad,#related_ads_box,#removeAdsSidebar,#removeadlink,#responsive-ad,#responsive-ad-sidebar-container,#responsive_ad,#responsivead,#result-list-aside-topadsense,#resultSponLinks,#resultsAdsBottom,#resultsAdsSB,#resultsAdsTop,#rh-ad,#rh-ad-container,#rh_tower_ad,#rhc_ads,#rhs_ads,#rhs_adverts,#rhsads,#rhsadvert,#richad,#right-ad,#right-ad-block,#right-ad-col,#right-ad-iframe,#right-ad-skin,#right-ad1,#right-ads,#right-ads-rail,#right-advert,#right-bar-ad,#right-box-ad,#right-content-ad,#right-featured-ad,#right-rail-ad-slot-content-top,#right-widget-b-ads_widget-9,#right-widget-c-ads_widget-7,#right-widget-d-ads_widget-36,#right-widget-top-ads_widget-23,#right1-ad,#right1ad,#rightAD,#rightAd,#rightAd1,#rightAdBar,#rightAdBlock,#rightAdColumn,#rightAdContainer,#rightAdHolder,#rightAdUnit,#rightAd_rdr,#rightAds,#rightAdsDiv,#rightBlockAd,#rightBottomAd,#rightColAd,#rightColumnAds,#rightRailAds,#rightSideAd,#rightSideAdvert,#right_Ads2,#right_ad,#right_ad_1,#right_ad_2,#right_ad_box,#right_ad_container,#right_ad_top,#right_ad_wrapper,#right_ads_box,#right_adsense,#right_advert,#right_advertisement,#right_advertising,#right_adverts,#right_bg_ad,#right_block_ads,#right_bottom_ad,#right_column_ad,#right_column_ad_container,#right_column_ads,#right_column_adverts,#right_player_ad,#right_side_ad,#right_sidebar_ads,#right_top_ad,#right_top_gad,#rightad1,#rightad2,#rightadBorder,#rightadBorder1,#rightadBorder2,#rightadContainer,#rightadcell,#rightadg,#rightadhome,#rightads,#rightads300x250,#rightadsarea,#rightbar-ad,#rightbar_ad,#rightcol_sponsorad,#rightgoogleads,#rightrail-ad,#rightrail_bottom_ddb_0,#rightrail_pos1_ddb_0,#rightrail_pos2_ddb_0,#rightrail_pos3_ddb_0,#rightrail_top_ddb_0,#rightside-ads,#rightside_ad,#rightskyad,#rm-adslot-bigsizebanner_1,#rm-adslot-contentad_1,#rotating_ad,#rotatingads,#row-ad,#rowAdv,#rtAdvertisement,#scroll-ad,#scroll_ad,#search-ad,#search-ads1,#search-google-ads,#search-sponsor,#search-sponsored-links,#searchAd,#searchAds,#search_ad,#search_ads,#second_ad_div,#secondad,#section-ad,#section-ad-bottom,#section_ad,#section_advertisements,#self-ad,#sellwild-loader,#sev1mposterad,#show-ad,#show-sticky-ad,#showAd,#show_ads,#showads,#showcaseAd,#side-ad-container,#side-ads,#side-ads-box,#side-banner-ad,#side-boxad,#sideABlock,#sideAD,#sideAd,#sideAd1,#sideAd2,#sideAd3,#sideAd4,#sideAdArea,#sideAdLarge,#sideAdSmall,#sideAdSub,#sideAds,#sideBannerAd,#sideBar-ads,#sideBarAd,#sideSponsors,#side_ad,#side_ad_module,#side_ad_wrapper,#side_ads,#side_adverts,#side_longads,#side_skyscraper_ad,#side_sponsors,#sidead,#sidead1,#sideads,#sideads_container,#sideadscol,#sideadvert,#sideadzone,#sidebar-ad-1,#sidebar-ad-2,#sidebar-ad-block,#sidebar-ad-boxes,#sidebar-ad-middle,#sidebar-ad-wrap,#sidebar-ad1,#sidebar-ad2,#sidebar-ad3,#sidebar-ads,#sidebar-ads-content,#sidebar-ads-narrow,#sidebar-ads-wide,#sidebar-ads-wrapper,#sidebar-adspace,#sidebar-adv,#sidebar-advertise-text,#sidebar-advertisement,#sidebar-left-ad,#sidebar-main-ad,#sidebar-sponsors,#sidebar-top-ad,#sidebar-top-ads,#sidebarAd,#sidebarAd1,#sidebarAd2,#sidebarAdSense,#sidebarAdSpace,#sidebarAdUnitWidget,#sidebarAds,#sidebarAdvTop,#sidebarAdvert,#sidebarSponsors,#sidebarTextAds,#sidebarTowerAds,#sidebar_ad,#sidebar_ad_1,#sidebar_ad_2,#sidebar_ad_3,#sidebar_ad_big,#sidebar_ad_container,#sidebar_ad_top,#sidebar_ad_widget,#sidebar_ad_wrapper,#sidebar_adblock,#sidebar_ads,#sidebar_box_add,#sidebar_topad,#sidebarad,#sidebarad0,#sidebaradpane,#sidebarads,#sidebaradsense,#sidebaradverts,#sidebard-ads-wrapper,#sidebargooglead,#sidebargoogleads,#sidebarrectad,#sideline-ad,#sidepad-ad,#single-ad,#single-ad-2,#single-adblade,#single-mpu,#singleAd,#singleAdsContainer,#singlead,#singleads,#site-ad-container,#site-ads,#site-header__ads,#site-leaderboard-ads,#site-sponsor-ad,#site-sponsors,#siteAdHeader,#site_bottom_ad_div,#site_content_ad_div,#site_top_ad,#site_wrap_ad,#sitead,#skcolAdSky,#skin-ad,#skin-ad-left-rail-container,#skin-ad-right-rail-container,#skinTopAd,#skin_adv,#skinad-left,#skinad-right,#skinningads,#sky-ad,#sky-ads,#sky-left,#sky-right,#skyAd,#skyAdContainer,#skyScraperAd,#skyScrapperAd,#skyWrapperAds,#sky_ad,#sky_advert,#skyads,#skyadwrap,#skybox-ad,#skyline_ad,#skyscrapeAd,#skyscraper-ad,#skyscraperAd,#skyscraperAdContainer,#skyscraperAdWrap,#skyscraperAds,#skyscraperWrapperAd,#skyscraper_ad,#skyscraper_advert,#skyscraperadblock,#skyscrapper-ad,#slashboxes > .deals-rail,#slideAd,#slide_ad,#slidead,#slideboxad,#slider-ad,#slider-oferplan,#sliderAdHolder,#slider_ad,#sm-banner-ad,#smallAd,#small_ad,#small_ads,#smallad,#smallads,#smallerAd,#sp-adv-banner-top,#sp-top-ads,#spdFloatAds,#specialAd,#special_ads,#specialadfeatures,#specials_ads,#speed_ads,#speeds_ads,#splashy-ad-container-top,#sponBox,#spon_links,#sponlink,#sponlinks,#sponsAds,#sponsLinks,#spons_links,#sponseredlinks,#sponsor-box-widget,#sponsor-flyout,#sponsor-flyout-wrap,#sponsor-links,#sponsor-partners,#sponsor-sidebar-container,#sponsorAd,#sponsorAd1,#sponsorAd2,#sponsorAdDiv,#sponsorBar,#sponsorBorder,#sponsorContainer0,#sponsorFooter,#sponsorLinkDiv,#sponsorLinks,#sponsorResults,#sponsorSpot,#sponsorTab,#sponsorText,#sponsorTextLink,#sponsor_300x250,#sponsor_ad,#sponsor_ads,#sponsor_bar,#sponsor_bottom,#sponsor_box,#sponsor_deals,#sponsor_div,#sponsor_footer,#sponsor_header,#sponsor_link,#sponsor_no,#sponsor_posts,#sponsor_right,#sponsored-ads,#sponsored-carousel-nucleus,#sponsored-container,#sponsored-footer,#sponsored-inline,#sponsored-links,#sponsored-links-alt,#sponsored-links-container,#sponsored-listings,#sponsored-message,#sponsored-products,#sponsored-recommendations,#sponsored-resources,#sponsored-search,#sponsored-text-links,#sponsored-widget,#sponsored1,#sponsoredAd,#sponsoredAdvertisement,#sponsoredBottom,#sponsoredBox1,#sponsoredBox2,#sponsoredFeaturedHoz,#sponsoredHoz,#sponsoredLinks,#sponsoredLinksBox,#sponsoredList,#sponsoredResults,#sponsoredResultsWide,#sponsoredTop {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}</style><style type="text/css" class="abn_style" nonce="undefined">#sponsored_ads,#sponsored_container,#sponsored_content,#sponsored_head,#sponsored_label,#sponsored_link_bottom,#sponsored_links,#sponsored_native_ad,#sponsoredad,#sponsoredads,#sponsoredlinks,#sponsorfeature,#sponsorlink,#sponsors-article,#sponsors-block,#sponsors-home,#sponsorsBox,#sponsorsContainer,#sponsorship-area-wrapper,#sponsorship-box,#sporsored-results,#spotlight-ads,#spotlightAds,#spotlight_ad,#spotlightad,#sprint_ad,#sqAd,#sq_ads,#square-ad,#square-ad-box,#square-ad-space,#square-ads,#square-sponsors,#squareAd,#squareAdBottom,#squareAdSpace,#squareAdTop,#squareAdWrap,#squareAds,#squareGoogleAd,#square_ad,#squaread,#squareadevertise,#squareadvert,#squared_ad,#staticad,#stationad,#sticky-ad,#sticky-ad-bottom,#sticky-ad-container,#sticky-ad-header,#sticky-add-side-block,#sticky-ads,#sticky-ads-top,#sticky-custom-ads,#sticky-footer-ad,#sticky-footer-ads,#sticky-left-ad,#sticky-rail-ad,#stickyAd,#stickyAdBlock,#stickyBottomAd,#stickySidebarAd,#stickySkyAd,#sticky_sidebar_ads,#stickyad,#stickyleftad,#stickyrightad,#stopAdv,#stop_ad3,#story-ad,#story-bottom-ad,#storyAd,#story_ad,#story_ads,#story_bottom_ddb_0,#story_top_ddb_0,#storyad2,#stripadv,#subheaderAd,#taboola,#taboola-above-homepage-thumbnails,#taboola-ad,#taboola-adverts,#taboola-below,#taboola-below-article-thumbnails,#taboola-below-article-thumbnails-2,#taboola-below-article-thumbnails-express,#taboola-below-article-thumbnails-mg,#taboola-below-article-thumbnails-photo,#taboola-below-article-thumbnails-v2,#taboola-below-disco-board,#taboola-below-forum-thumbnails,#taboola-below-homepage-thumbnails-2,#taboola-below-homepage-thumbnails-3,#taboola-below-main-column,#taboola-belowarticle,#taboola-bottom,#taboola-bottom-main-column,#taboola-div,#taboola-homepage-thumbnails,#taboola-homepage-thumbnails-desktop,#taboola-horizontal-toolbar,#taboola-in-feed-thumbnails,#taboola-mid-article-thumbnails,#taboola-mid-article-thumbnails-ii,#taboola-mid-main-column-thumbnails,#taboola-mobile-article-thumbnails,#taboola-native-right-rail-thumbnails,#taboola-placeholder,#taboola-right-rail,#taboola-right-rail-express,#taboola-right-rail-text-right,#taboola-right-rail-thumbnails,#taboola-right-rail-thumbnails-2nd,#taboola-text-2-columns-mix,#taboola-vid-container,#taboola-widget-wrapper,#taboola_bottom,#taboola_responsive_wrapper,#taboola_side,#taboola_wrapper,#takeover-ad,#takeover_ad,#takeoverad,#td-ad-placeholder,#tdAds,#td_adunit2,#td_sponsorAd,#team_ad,#teaser1[style^="width:autopx;"],#teaser2[style^="width:autopx;"],#teaser3[style="width: 100%;text-align: center;display: scroll;position:fixed;bottom: 0;margin: 0 auto;z-index: 103;"],#teaser3[style^="width:autopx;"],#text-ad,#text-ads,#text-intext-ads,#text-link-ads,#textAd,#textAd1,#textAds,#textAdsTop,#text_ad,#text_ads,#text_advert,#textad,#textad3,#textlink-advertisement,#texto_publicidad,#textsponsor,#tfm_admanagerTeaser,#tile-ad,#tileAds,#titulo-publicidad,#tmInfiniteAd,#toaster_ad,#top-ad,#top-ad-area,#top-ad-banner,#top-ad-container,#top-ad-content,#top-ad-desktop,#top-ad-div,#top-ad-google,#top-ad-iframe,#top-ad-rect,#top-ad-slot,#top-ad-slot-0,#top-ad-slot-1,#top-ad-unit,#top-ad-wrapper,#top-adblock,#top-adds,#top-ads,#top-ads-1,#top-ads-contain,#top-ads-container,#top-adspot,#top-advert,#top-advertisement,#top-advertisements,#top-advertising-content,#top-banner-ad,#top-banner-ad-browser,#top-buy-sell-ads,#top-dfp,#top-head-ad,#top-leaderboard-ad,#top-left-ad,#top-middle-add,#top-not-ads,#top-right-ad,#top-right-ad-slot,#top-skin-ad,#top-skin-ad-bg,#top-sponsor-ad,#top-story-ad,#topAD,#topAd728x90,#topAdArea,#topAdBanner,#topAdBar,#topAdBox,#topAdContainer,#topAdDiv,#topAdDropdown,#topAdHolder,#topAdShow,#topAdSpace,#topAdSpace_div,#topAdWrapper,#topAdcontainer,#topAds,#topAds1,#topAds2,#topAdsContainer,#topAdsDiv,#topAdsG,#topAdv,#topAdvBox,#topAdvert,#topBanner-ad,#topBannerAd,#topBannerAdContainer,#topBannerAdv,#topImgAd,#topLeaderboardAd,#topMPU,#topMpuContainer,#topSponsorBanner,#topSponsoredLinks,#top_AD,#top_ad,#top_ad-360,#top_ad_area,#top_ad_banner,#top_ad_block,#top_ad_box,#top_ad_container,#top_ad_td,#top_ad_unit,#top_ad_wrapper,#top_ad_zone,#top_add,#top_ads,#top_ads_box,#top_ads_container,#top_ads_region,#top_ads_wrap,#top_adsense_cont,#top_adspace,#top_adv,#top_advert,#top_advert_box,#top_advertise,#top_advertising,#top_banner,#top_banner_ads,#top_container_ad,#top_google_ads,#top_mpu,#top_mpu_ad,#top_rectangle_ad,#top_right_ad,#top_row_ad,#top_span_ad,#top_sponsor_ads,#top_sponsor_text,#top_wide_ad,#topad,#topad-728x90,#topad-block,#topad-wrap,#topad1,#topad2,#topad728,#topad_holder,#topad_left,#topad_right,#topad_table,#topadbanner,#topadbanner2,#topadbar,#topadblock,#topadcell,#topadcontainer,#topaddwide,#topadleft,#topadone,#topadplaceholder,#topadright,#topads-spacer,#topads-wrapper,#topadsblock,#topadsdiv,#topadsense,#topadspace,#topadvert,#topadwrap,#topadz,#topadzone,#topbanner_ad,#topbanner_sponsor,#topbanneradtitle,#topbar-ad,#topbarAd,#topbarad,#topbarads,#topcustomad,#topheader_ads,#topleaderAd,#topleaderboardad,#topnavad,#topopublicidade,#toppannonse,#topright-ad,#toprightAdvert,#toprightad,#toprow-ad,#topsidebar-ad,#topsponad,#topsponsorads,#topsponsored,#toptextad,#tor-footer-ad,#tower1ad,#towerAdContainer,#towerad,#tpd-post-header-ad,#tpl_advertising,#transparentad,#trc_google_ad,#txtAdHeader,#ulBannerSlider,#ultimedia_wrapper,#upper-ads,#upperMpu,#upperRightAds,#upper_adbox,#upper_advertising,#upper_small_ad,#upperad,#velsof_wheel_container,#vert-ads,#vertAd2,#vert_ad,#vert_ad_placeholder,#vertad1,#vertical.ad,#verticalAds,#vertical_ad,#vertical_ads,#verticalads,#vidazoo-player,#video-ad,#video-ad-companion-rectangle,#video-adv,#video-adv-wrapper,#video-advert,#video-embed-ads,#video-in-player-ad,#video-side-adv,#video-sponsor-links,#video-under-player-ad,#videoAd,#videoAdvert,#videoCompanionAd,#videoOverAd,#videoOverAd300,#videoPauseAd,#video_ads_bot_overlay,#video_adv,#video_advert,#video_advert_top,#video_embed_ads,#video_hor_bot_ads,#video_overlay_ad,#videoad,#videoad-script-cnt,#videoads,#viewAd1,#viewabilityAdContainer,#visual-ad,#vuukle-quiz-and-ad,#vuukle_ads_square2,#wTopAd,#wallAd,#wall_advert,#wd-sponsored,#weather-ad,#weather_sponsor,#weatherad,#welcome_ad,#wg_ads,#wgtAd,#whitepaper-ad,#wide-ad,#wideAdd,#wide_ad_unit,#wide_ad_unit2,#wide_ad_unit3,#wide_adv,#wide_right_ad,#widget-ads-3,#widget-ads-4,#widget-adv-12,#widget-box-ad-1,#widget-box-ad-2,#widget_Adverts,#widget_ad,#widget_advertisement,#widget_thrive_ad_default-2,#widget_thrive_ad_default-4,#widgetwidget_adserve,#widgetwidget_adserve2,#wl-pencil-ad,#wow-ads,#wp-insert-ad-widget-1,#wp-topAds,#wp_ad_marker,#wp_adbn_root,#wp_ads_gpt_widget-16,#wp_ads_gpt_widget-17,#wp_ads_gpt_widget-18,#wp_ads_gpt_widget-19,#wp_ads_gpt_widget-21,#wp_ads_gpt_widget-4,#wp_ads_gpt_widget-5,#wpladbox1,#wpladbox2,#wrapAd,#wrapAdRight,#wrapCommentAd,#wrapper-AD_G,#wrapper-AD_L,#wrapper-AD_L2,#wrapper-AD_L3,#wrapper-AD_PUSH,#wrapper-AD_R,#wrapper-ad,#wrapper-ad970,#wrapperAdsTopLeft,#wrapperAdsTopRight,#wrapperRightAds,#wrapper_ad_Top,#wrapper_sponsoredlinks,#wrapper_topad,#wtopad,#yahoo-sponsors,#yahooAdsBottom,#yahooSponsored,#yahoo_ads,#yahoo_text_ad,#yahooads,#yandex_ad,#yatadsky,#yrail_ads,#yreSponsoredLinks,#ysm_ad_iframe,#zMSplacement1,#zMSplacement2,#zMSplacement3,#zMSplacement4,#zMSplacement5,#zMSplacement6,#zdcFloatingBtn,#zeus_top-banner,#zone-adsense,#zsAdvertisingBanner,.-advertsSidebar,.ADBAR,.ADBox,.ADFooter,.ADInfo,.ADLeader,.ADMiddle1,.ADPod,.ADServer,.ADStyle,.ADTop,.ADVBig,.ADVFLEX_250,.ADVParallax,.ADV_Mobile,.AD_2,.AD_area,.ADbox,.ADmid,.ADwidget,.ATF_wrapper,.Ad--Align,.Ad--empty,.Ad--header,.Ad--loading,.Ad--presenter,.Ad--sidebar,.Ad-Advert_Container,.Ad-Container,.Ad-Header,.Ad-Inner,.Ad-adhesive,.Ad-hor-height,.Ad-label,.Ad-leaderboard,.Ad.Leaderboard,.Ad300,.Ad3Tile,.Ad728x90,.AdBar,.AdBody:not(body),.AdBorder,.AdBottomPage,.AdBox,.AdBox160,.AdBox7,.AdBox728,.AdCenter,.AdCommercial,.AdCompactheader,.AdContainer,.AdContainer-Sidebar,.AdHeader,.AdHere,.AdHolder,.AdInline,.AdInsLink,.AdLeft1,.AdLeft2,.AdMedium,.AdMessage,.AdMod,.AdModule,.AdOneColumnContainer,.AdOuterMostContainer,.AdPanel,.AdPlaceHolder,.AdPlaceholder,.AdPlacementContainer,.AdProduct,.AdRight1,.AdRight2,.AdSense,.AdSenseLeft,.AdSlot,.AdSpace,.AdSpeedWP,.AdTagModule,.AdTitle,.AdTop,.AdUnit,.Ad_C,.Ad_D,.Ad_Label,.Ad_Right,.Ad_container,.AdblockMessage,.AdblockMessage_msg,.Adboost300x250,.Adboost300x600,.Ads--center,.Ads-768x90,.Ads-background,.Ads-leaderboard,.Ads-slot,.Ads-sticky,.AdsBottom,.AdsBox,.AdsBoxBottom,.AdsBoxSection,.AdsBoxTop,.AdsLayout__top-container,.AdsPot,.AdsRectangleWrapper,.AdsSlot,.Ads__wrapper,.Ads_header,.AdsenseBox,.Adsterra,.Adtext,.Adv468,.Advert-label,.Advert300x250,.AdvertContainer,.AdvertWrapper,.AdvertisementAfterHeader,.AdvertisementAfterPost,.AdvertisementAsidePost,.AdvertisementText,.AdvertisementTextTag,.AdvertisementTop,.Advertisment,.AdvertorialTeaser,.AdvtSample,.AdzerkBanner,.AffiliateAds,.AppFooter__BannerAd,.Arpian-ads,.Article-advert,.ArticleAd,.ArticleAdSide,.ArticleAdWrapper,.ArticleFooter-outbrain,.ArticleInlineAd,.ArticleInnerAD,.ArticleOutbrainLocal,.Article__Ad,.BOX_Ad,.BOX_LeadAd,.Banner300x250,.Banner468X60,.BeOpWidget,.BigBoxAd,.BigBoxAdLabel,.Billboard-ad,.Billboard-ad-holder,.Billboard_2-ad-holder,.Billboard_3-ad-holder,.Billboard_4-ad-holder,.Billboard_5-ad-holder,.BlockAd,.BottomAd-container,.BottomAdContainer,.BottomAdsPartial,.BottomAffiliate,.BoxAd,.BoxAdWrap,.BoxRail-ad,.ButtonAd,.CitrusBannerWrapper--enollj,.CommentAd,.ConnatixAd,.ContentAd,.ContentAds,.ContentBottomAd,.ContentTextAd,.ContentTopAd,.DFPad,.DisplayAd,.FirstAd,.FooterAd,.FooterAdContainer,.FooterAds,.Footer_1-ad-holder,.GRVAd,.GRVMpuWrapper,.GRVMultiVideo,.GRVPrimisVideo,.GRVVideo,.Gallery-Content-BottomAd,.GeminiAdItem,.GeminiNativeAd,.GoogleAdv,.GoogleDfpAd,.GoogleDfpAd-Content,.GoogleDfpAd-Float,.GoogleDfpAd-container,.GoogleDfpAd-wrap,.GoogleDfpAd-wrapper,.GoogleDfpAdModule,.GoogleDoubleClick-SponsorText,.GroupAdSense,.HeaderAd,.HeaderAds,.HeaderBannerAd,.HeadingAdSpace,.Hero-Ad,.HomeAds,.InArticleAd,.IndexRightAd,.InsertedAd,.LastAd,.LayoutBottomAds,.LayoutHomeAds,.LayoutHomeAdsAd,.LayoutPromotionAdsNew,.LazyLoadAd,.LeaderAd,.LeaderAdvertisement,.LeaderBoardAd,.LearderAd_Border,.ListicleAdRow,.MIXADVERT_NET,.MPUHolder,.MPUad,.MapLayout_BottomAd,.MapLayout_BottomMobiAd,.MarketGid_container,.MbanAd,.MiddleAd,.MiddleAdContainer,.MiddleAdvert,.MiddleRightRadvertisement,.NA_ad,.NR-Ads,.NativeAdContainerRegion,.NavBarAd,.Normal-add,.OAS_wrap,.OUTBRAIN,.OUTBRAIN[data-widget-id^="FMS_REELD_"],.OcelotAdModule,.OcelotAdModule-ad,.Outbrain,.PPD_ADS_JS,.Page-ad,.PageTopAd,.PcSideBarAd,.PencilAd,.PostAdvertisementBeforePost,.PostSidebarAd,.Post__ad,.PrimisResponsiveStyle,.PrintAd-Slider,.PubliDereFlo,.PubliIzquiFlo,.PublicidadArriba,.PublicidadCabecera,.Publicidade,.PublicidadeSidebarSuperior,.PushdownAd,.RC-AD,.RC-AD-BOX-BOTTOM,.RC-AD-BOX-MIDDLE,.RC-AD-BOX-TOP,.RC-AD-TOP-BANNER,.RectangleAd,.Rectangle_1-ad-holder,.Rectangle_2-ad-holder,.Rectangle_3-ad-holder,.RelatedAds,.ResponsiveAd,.RightAd,.RightAd1,.RightAd2,.RightAdvertisement,.RightGoogleAd,.RightRailAd,.RightRailAds,.RightTowerAd,.RobaPagina,.STR_AdBlock,.SecondaryAd,.SecondaryAdLink,.Section-ad,.SectionSponsor,.SideAd,.SideAdCol,.SideAds,.SideWidget__ad,.Sidebar-ad,.Sidebar-ad--300x600,.SidebarAd,.SidebarAdvert,.SidebarRightAdvertisement,.SimpleAd,.SkyAdContainer,.SkyAdContent,.SkyScraperAd,.SovrnAd,.Sponsor-container,.SponsorHeader,.SponsorIsland,.SponsorLink,.SponsoredAdTitle,.SponsoredArticleAd,.SponsoredContent,.SponsoredContentWidget,.SponsoredLinks,.SponsoredLinksModule,.SponsoredLinksPadding,.SponsoredLinksPanel,.SponsoredResults,.Sponsored_link,.SponsorshipText,.SquareAd,.Squareadspot,.StandardAdLeft,.StandardAdRight,.Sticky-AdContainer,.StickyAdRail__Inner,.SummaryPage-HeaderAd,.TextAd,.TextAdds,.Textads,.ThreeAds,.TmnAdsense,.TopAd,.TopAdBox,.TopAdContainer,.TopAdL,.TopAdR,.TopAds,.TopAdsPartial,.TopBannerAd,.TopRightRadvertisement,.Top_Ad,.TrackedBannerPromo,.TrackedSidebarPromo,.TrafficAd,.U210-adv-column,.UnderAd,.VPCarbonAds,.VerticalAd,.Video-Ad,.VideoAd,.WIDGET-Publicidad,.WPBannerizeWidget,.WP_Widget_Ad_manager,.WideAdTile,.WideAdsLeft,.WidgetAdvertiser,.WidthAd,.WikiaTopAds,.ZERGNET,.\[\&_\.gdprAdTransparencyCogWheelButton\]\:\!pjra-z-\[5\],._SummaryPageHeaderAdView,._SummaryPageSidebarStickyAdView,.__isboostOverContent,._ads,._ads-full,._ap_adrecover_ad,._ap_apex_ad,._articleAdvert,._bannerAds,._bottom_ad_wrapper,._ciw-betterAds,._fullsquaread,._has-ads,._mo_recs,._mo_recs_cti,._mo_recs_vi,._popIn_recommend_article_ad,._popIn_recommend_article_ad_reserved,._table_ad_div_wide,.a-ad,.a-ad--aside,.a-ad--leaderboard,.a-ad--skyscraper,.a-ad--wide,.a-d-250,.a-d-90,.a-d-container,.a-d-holder-container,.a-dserver,.a-dserver_text,.a-sponsor,.a160x600,.a300x250,.a468x60,.a728x90,.a_pub,.aadsection_b1,.aadsection_b2,.aarpe-ad-wrapper,.ab-ad_placement-article,.abBoxAd,.abMessage,.abPopup,.ablock300,.ablock468,.ablock728,.above-header-advert,.aboveCommentAds,.abovead,.ac-banner-ad,.ac-lre-desktop,.ac-lre-player-ph,.ac-lre-wrapper,.ac_adbox,.acm-ad-container,.acm-ad-tag-unit,.acm_ad_zones,.ad--300,.ad--300x250,.ad--468,.ad--468-60,.ad--728x90,.ad--970-750-336-300,.ad--970-90,.ad--article,.ad--article-top,.ad--articlemodule,.ad--b,.ad--banner,.ad--banner2,.ad--banniere_basse,.ad--banniere_haute,.ad--billboard,.ad--bottom,.ad--bottom-label,.ad--bottommpu,.ad--boundries,.ad--button,.ad--c,.ad--center,.ad--centered,.ad--container,.ad--content,.ad--content-ad,.ad--dart,.ad--desktop,.ad--displayed,.ad--droite_basse,.ad--droite_haute,.ad--droite_middle,.ad--e,.ad--fallback,.ad--footer,.ad--fullsize,.ad--google,.ad--halfpage,.ad--header,.ad--homepage-top,.ad--in-article,.ad--in-content,.ad--inArticleBanner,.ad--inline,.ad--inner,.ad--large,.ad--leaderboard,.ad--loading,.ad--medium-rectangle,.ad--medium_rectangle,.ad--medium_rectangle_outstream,.ad--mediumrectangle,.ad--mid,.ad--mid-content,.ad--mobile,.ad--mpu,.ad--native,.ad--nativeFlex,.ad--no-bg,.ad--noscroll,.ad--object,.ad--outstream,.ad--overlayer,.ad--p1,.ad--p2,.ad--p3,.ad--p4,.ad--p6,.ad--p7,.ad--placeholder,.ad--pubperform,.ad--pushdown,.ad--rail,.ad--rectangle,.ad--rectangle1,.ad--rectangle2,.ad--right,.ad--rightRail,.ad--scroll,.ad--section,.ad--sidebar,.ad--sky,.ad--skyscraper,.ad--slider,.ad--slot,.ad--sponsor-content,.ad--square-rectangle,.ad--sticky,.ad--stripe,.ad--stroeer,.ad--subcontainer,.ad--top,.ad--top-desktop,.ad--top-leaderboard,.ad--top-slot,.ad--topmobile,.ad--topmobile2,.ad--topmobile3,.ad--wallpaper,.ad--widget,.ad--wrapper,.ad-1,.ad-120-60,.ad-120x60,.ad-120x600,.ad-120x90,.ad-125x125,.ad-13,.ad-137,.ad-14,.ad-160,.ad-160-160,.ad-160x600,.ad-2,.ad-200,.ad-200x200,.ad-250,.ad-250x300,.ad-3,.ad-300,.ad-300-2,.ad-300-250-600,.ad-300-600,.ad-300-b,.ad-300-block,.ad-300-dummy,.ad-300-flex {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.ad-300-x-250,.ad-300X250,.ad-300X250-body,.ad-300x,.ad-300x100,.ad-300x200,.ad-300x250,.ad-300x250-solo,.ad-300x600,.ad-336,.ad-336x280,.ad-336x280B,.ad-350,.ad-4,.ad-468,.ad-468x120,.ad-468x60,.ad-5,.ad-544x250,.ad-55,.ad-560,.ad-6,.ad-600,.ad-600-h,.ad-635x40,.ad-7,.ad-728,.ad-728-90,.ad-728-banner,.ad-728-x-90,.ad-728x90,.ad-728x90-1,.ad-728x90-top,.ad-728x90-top0,.ad-728x90-wrapper,.ad-728x90_forum,.ad-768,.ad-8,.ad-88-60,.ad-88x31,.ad-9,.ad-90,.ad-90x600,.ad-970,.ad-970-250,.ad-970-90,.ad-970x250,.ad-970x90,.ad-Advert_Placeholder,.ad-E,.ad-LREC,.ad-LREC2,.ad-Leaderboard,.ad-MPU,.ad-MediumRectangle,.ad-PENCIL,.ad-S,.ad-Square,.ad-SuperBanner,.ad-TOPPER,.ad-W,.ad-a,.ad-ab,.ad-abc,.ad-above-header,.ad-accordion,.ad-active,.ad-adSense,.ad-adcode,.ad-adhesion,.ad-adlink-bottom,.ad-adlink-side,.ad-adsense,.ad-adsense-block-250,.ad-advertisement-horizontal,.ad-affiliate,.ad-after-content,.ad-after-header,.ad-align-none,.ad-aligncenter,.ad-alignment,.ad-alsorectangle,.ad-anchor,.ad-aps-wide,.ad-area--pd,.ad-area-small,.ad-article-breaker,.ad-article-inline,.ad-article-teaser,.ad-article-wrapper,.ad-aside-pc-billboard,.ad-atf,.ad-atf-top,.ad-background,.ad-background-center,.ad-background-container,.ad-ban,.ad-banner-2,.ad-banner-250x600,.ad-banner-300,.ad-banner-300x250,.ad-banner-5,.ad-banner-6,.ad-banner-728x90,.ad-banner-bottom-container,.ad-banner-box,.ad-banner-btf,.ad-banner-container,.ad-banner-content,.ad-banner-full-wrapper,.ad-banner-header,.ad-banner-image,.ad-banner-inlisting,.ad-banner-leaderboard,.ad-banner-placeholder,.ad-banner-single,.ad-banner-smaller,.ad-banner-static,.ad-banner-top,.ad-banner-top-wrapper,.ad-banner-wrapper,.ad-banners,.ad-bar,.ad-bar-header,.ad-bb,.ad-before-header,.ad-below,.ad-below-images,.ad-below-player,.ad-belowarticle,.ad-bg,.ad-big,.ad-big-box,.ad-bigbanner,.ad-bigbillboard,.ad-bigbox,.ad-bigbox-double-inread,.ad-bigbox-fixed,.ad-bigsize,.ad-billboard,.ad-bline,.ad-block--300,.ad-block--leader,.ad-block-300,.ad-block-banner-container,.ad-block-big,.ad-block-bottom,.ad-block-btf,.ad-block-container,.ad-block-enabled,.ad-block-header,.ad-block-holder,.ad-block-inside,.ad-block-message,.ad-block-mod,.ad-block-section,.ad-block-square,.ad-block-sticky-ad,.ad-block-wide,.ad-block-wk,.ad-block-wrapper,.ad-block-wrapper-dev,.ad-block__overlay,.ad-block_overlay,.ad-blocked,.ad-blocker-warning,.ad-blocking-advisor-wrapper,.ad-blogads,.ad-bnr,.ad-body,.ad-boombox,.ad-border,.ad-bordered,.ad-borderless,.ad-bot,.ad-bottom-container,.ad-bottom-right-container,.ad-bottom728x90,.ad-bottomLeft,.ad-bottomleader,.ad-bottomline,.ad-box-2,.ad-box-300x250,.ad-box-auto,.ad-box-caption,.ad-box-container,.ad-box-title,.ad-box-up,.ad-box-video,.ad-box-wrapper,.ad-box1,.ad-box2,.ad-box3,.ad-box_h,.ad-boxamp-wrapper,.ad-boxbottom,.ad-boxes,.ad-boxsticky,.ad-boxtop,.ad-brdr-btm,.ad-break,.ad-break-item,.ad-breaker,.ad-breakout,.ad-browse-rectangle,.ad-bt,.ad-btn,.ad-btn-heading,.ad-bug-300w,.ad-burnside,.ad-buttons,.ad-c-label,.ad-cabecera,.ad-cad,.ad-calendar,.ad-call-300x250,.ad-callout,.ad-callout-wrapper,.ad-caption,.ad-card,.ad-card-container,.ad-carousel,.ad-cat,.ad-catfish,.ad-cell,.ad-cen,.ad-cen2,.ad-cen3,.ad-centered,.ad-centering,.ad-chartbeatwidget,.ad-choices,.ad-circ,.ad-close-button,.ad-cls,.ad-cls-fix,.ad-cnt,.ad-code,.ad-codes,.ad-col-02,.ad-colour,.ad-column,.ad-comment,.ad-companion,.ad-complete,.ad-component,.ad-component-fullbanner2,.ad-component-wrapper,.ad-contain,.ad-contain-300x250,.ad-contain-top,.ad-container--hot-video,.ad-container--inline,.ad-container--leaderboard,.ad-container--masthead,.ad-container--mrec,.ad-container--stripe,.ad-container--top,.ad-container-160x600,.ad-container-300x250,.ad-container-728,.ad-container-728x90,.ad-container-adsense,.ad-container-banner-top,.ad-container-bot,.ad-container-bottom,.ad-container-box,.ad-container-embedded,.ad-container-header,.ad-container-inner,.ad-container-inthread,.ad-container-leaderboard,.ad-container-left,.ad-container-m,.ad-container-medium-rectangle,.ad-container-middle,.ad-container-multiple,.ad-container-pave,.ad-container-property,.ad-container-responsive,.ad-container-right,.ad-container-side,.ad-container-single,.ad-container-tool,.ad-container-top,.ad-container-topad,.ad-container-wrapper,.ad-container1,.ad-container3x,.ad-container__ad-slot,.ad-container__leaderboard,.ad-container__sticky-wrapper,.ad-container_row,.ad-content-area,.ad-content-rectangle,.ad-content-slot,.ad-content-wrapper,.ad-context,.ad-critical,.ad-cta,.ad-curtain,.ad-custom-size,.ad-d,.ad-decoration,.ad-defer,.ad-desktop,.ad-desktop-in-content,.ad-desktop-legacy,.ad-desktop-native-1,.ad-desktop-native-2,.ad-desktop-only,.ad-desktop-right,.ad-detail,.ad-dfp-column,.ad-dfp-row,.ad-disclaimer,.ad-disclaimer-container,.ad-disclaimer-text,.ad-display,.ad-displayed,.ad-diver,.ad-divider,.ad-dog,.ad-dog__cnx-container,.ad-dog__ratio-16x9,.ad-dt,.ad-dx_wrp,.ad-e,.ad-element,.ad-engage,.ad-entity-container,.ad-entry-wrapper,.ad-ex,.ad-exchange,.ad-expand,.ad-external,.ad-fadein,.ad-fadeup,.ad-fallback,.ad-feature-content,.ad-feature-sponsor,.ad-feature-text,.ad-featured-video-caption,.ad-feedback,.ad-fi,.ad-field,.ad-filler,.ad-filmstrip,.ad-first,.ad-fix,.ad-fixed,.ad-flag,.ad-flex,.ad-flex-center,.ad-float,.ad-floating,.ad-floor,.ad-footer,.ad-footer-empty,.ad-footer-leaderboard,.ad-format-300x250,.ad-format-300x600,.ad-forum,.ad-frame,.ad-frame-container,.ad-full-width,.ad-fullbanner,.ad-fullbanner-btf-container,.ad-fullbannernohieght,.ad-fullwidth,.ad-gap-sm,.ad-giga,.ad-google,.ad-google-contextual,.ad-gpt,.ad-gpt-breaker,.ad-gpt-container,.ad-gpt-main,.ad-gpt-vertical,.ad-graphic-large,.ad-gray,.ad-grey,.ad-grid,.ad-grid-125,.ad-grid-container,.ad-group,.ad-halfpage,.ad-halfpage-placeholder,.ad-hdr,.ad-head,.ad-header,.ad-header-below,.ad-header-container,.ad-header-creative,.ad-header-inner-wrap,.ad-header-pencil,.ad-header-placeholder,.ad-header-sidebar,.ad-header-small-square,.ad-heading,.ad-height-250,.ad-height-280,.ad-height-600,.ad-here,.ad-hide-mobile,.ad-hideable,.ad-hint,.ad-hldr-tmc,.ad-ho,.ad-hold,.ad-holder-center,.ad-holder-mob-300,.ad-home-bottom,.ad-home-leaderboard-placeholder,.ad-home-right,.ad-homeleaderboard,.ad-homepage,.ad-homepage-1,.ad-homepage-2,.ad-homepage-one,.ad-hor,.ad-horizontal,.ad-horizontal-large,.ad-horizontal-top,.ad-horizontal-top-wrapper,.ad-house-btac,.ad-housepromo-d-wrapper,.ad-hoverable,.ad-hpto,.ad-href1,.ad-href2,.ad-iab-txt,.ad-identifier,.ad-iframe,.ad-iframe-container,.ad-in-content,.ad-in-content-300,.ad-in-post,.ad-in-read,.ad-in-results,.ad-inStory,.ad-incontent,.ad-incontent-wrap,.ad-index-main,.ad-indicator-horiz,.ad-info-wrap,.ad-inline,.ad-inline-article,.ad-inline-block,.ad-inner,.ad-inner-container,.ad-inner-container-background,.ad-innr,.ad-insert,.ad-inserter-widget,.ad-inside,.ad-integrated-display,.ad-internal,.ad-interruptor,.ad-interstitial,.ad-island,.ad-item,.ad-item-related,.ad-lable,.ad-landscape,.ad-large-1,.ad-large-game,.ad-last,.ad-lat,.ad-lat2,.ad-layer,.ad-lazy,.ad-lb,.ad-ldrbrd,.ad-lead,.ad-lead-bottom,.ad-leader,.ad-leader-board,.ad-leader-bottom,.ad-leader-plus-top,.ad-leader-top,.ad-leader-wrap,.ad-leader-wrapper,.ad-leaderboard,.ad-leaderboard-base,.ad-leaderboard-companion,.ad-leaderboard-container,.ad-leaderboard-flex,.ad-leaderboard-footer,.ad-leaderboard-header,.ad-leaderboard-middle,.ad-leaderboard-placeholder,.ad-leaderboard-slot,.ad-leaderboard-splitter,.ad-leaderboard-top,.ad-leaderboard-wrapper,.ad-leaderbody,.ad-leaderheader,.ad-leadtop,.ad-left-1,.ad-left-top,.ad-leftrail,.ad-lib-div,.ad-line,.ad-link,.ad-link-block,.ad-link-label,.ad-link-left,.ad-link-right,.ad-links-text,.ad-list-desktop,.ad-list-item,.ad-loaded,.ad-loader,.ad-location,.ad-location-container,.ad-lock,.ad-lock-content,.ad-lowerboard,.ad-lrec,.ad-m-banner,.ad-m-mrec,.ad-m-rec,.ad-mad,.ad-main,.ad-manager-ad,.ad-manager-placeholder,.ad-manager-wrapper,.ad-margin,.ad-marketplace,.ad-marketswidget,.ad-marquee,.ad-masthead,.ad-masthead-1,.ad-masthead-left,.ad-mb,.ad-med,.ad-med-rec,.ad-med-rect,.ad-med-rect-tmp,.ad-medium,.ad-medium-container,.ad-medium-content,.ad-medium-rectangle,.ad-medium-rectangle-base,.ad-medium-two,.ad-medium-widget,.ad-medrect,.ad-megaboard,.ad-message,.ad-messaging,.ad-microsites,.ad-midleader,.ad-mobile,.ad-mobile--sticky,.ad-mobile-300x150,.ad-mobile-300x250,.ad-mobile-300x50,.ad-mobile-banner,.ad-mobile-flex-inc,.ad-mobile-flex-pos2,.ad-mobile-incontent-ad-plus,.ad-mobile-mpu-plus-outstream-inc,.ad-mobile-nav-ad-plus,.ad-mod,.ad-mod-section,.ad-mod-section-728-90,.ad-module,.ad-mount,.ad-mpl,.ad-mpu,.ad-mpu-bottom,.ad-mpu-container,.ad-mpu-middle,.ad-mpu-middle2,.ad-mpu-placeholder,.ad-mpu-plus-top,.ad-mpu-top,.ad-mpu__aside,.ad-mpufixed,.ad-mr-article,.ad-mrec,.ad-mrect,.ad-msg,.ad-msn,.ad-native,.ad-native-top-sidebar,.ad-nav-ad,.ad-nav-ad-plus,.ad-new,.ad-new-box,.ad-no-css,.ad-no-mobile,.ad-no-notice,.ad-no-style,.ad-noBorderAndMargin,.ad-noline,.ad-note,.ad-notice-small,.ad-observer,.ad-oms,.ad-on,.ad-on-top,.ad-one,.ad-other,.ad-outer,.ad-outlet,.ad-outline,.ad-output-middle,.ad-output-wrapper,.ad-overlay,.ad-packs,.ad-page-leader,.ad-page-medium,.ad-page-setting,.ad-pagehead,.ad-panel,.ad-panel-wrap,.ad-panel__container,.ad-panel__container--styled,.ad-panel__googlead,.ad-panorama,.ad-parallax,.ad-parent-billboard,.ad-parent-class,.ad-parent-halfpage,.ad-pb,.ad-peg,.ad-pencil-margin,.ad-permalink,.ad-personalise,.ad-place,.ad-place-active,.ad-place-holder,.ad-placeholder,.ad-placeholder--mpu,.ad-placeholder-leaderboard,.ad-placeholder-wrapper,.ad-placeholder-wrapper-dynamic,.ad-placeholder__inner,.ad-placement-left,.ad-placement-right,.ad-places,.ad-plea,.ad-poc,.ad-poc-admin,.ad-popup-content,.ad-pos,.ad-pos-0,.ad-pos-1,.ad-pos-2,.ad-pos-3,.ad-pos-4,.ad-pos-5,.ad-pos-6,.ad-pos-7,.ad-pos-8,.ad-pos-middle,.ad-pos-top,.ad-position,.ad-position-1,.ad-position-2,.ad-poss,.ad-post,.ad-post-footer,.ad-post-top,.ad-postText,.ad-poster,.ad-posterad-inlisting,.ad-preloader-container,.ad-preparing,.ad-prevent-jump,.ad-primary,.ad-primary-desktop,.ad-primary-sidebar,.ad-priority,.ad-program-list,.ad-program-top,.ad-promo,.ad-pub,.ad-push,.ad-pushdown,.ad-r,.ad-rac-box,.ad-rail,.ad-rail-wrapper,.ad-ratio,.ad-rb-hover,.ad-reader-con-item,.ad-rect,.ad-rect-atf-01,.ad-rect-top-right,.ad-rectangle,.ad-rectangle-1,.ad-rectangle-banner,.ad-rectangle-container,.ad-rectangle-long,.ad-rectangle-long-sky,.ad-rectangle-text,.ad-rectangle-wide,.ad-rectangle-xs,.ad-rectangle2,.ad-rectanglemed,.ad-region,.ad-region-delay-load,.ad-related,.ad-relatedbottom,.ad-render-space,.ad-responsive,.ad-responsive-slot,.ad-responsive-wide,.ad-result,.ad-rev-content,.ad-rh,.ad-right,.ad-right-header,.ad-right1,.ad-right2,.ad-right3,.ad-risingstar-container,.ad-roadblock,.ad-rotation,.ad-rotator,.ad-row,.ad-row-box,.ad-row-horizontal,.ad-row-horizontal-top,.ad-row-viewport,.ad-s,.ad-s-rendered,.ad-sample,.ad-script-processed,.ad-scroll,.ad-scrollpane,.ad-search-grid,.ad-secondary-desktop,.ad-section-body,.ad-section-one,.ad-section-three,.ad-section__skyscraper,.ad-sense,.ad-sense-ad,.ad-sep,.ad-separator,.ad-shifted,.ad-show-label,.ad-showcase,.ad-side,.ad-side-one,.ad-side-top,.ad-side-wrapper,.ad-sidebar-mrec,.ad-sidebar-skyscraper,.ad-siderail,.ad-signup,.ad-single-bottom,.ad-sitewide,.ad-size-300x600,.ad-size-728x90,.ad-size-landscape,.ad-size-leaderboard,.ad-size-medium-rectangle,.ad-size-medium-rectangle-flex,.ad-size-mpu,.ad-skeleton,.ad-skin-link,.ad-sky,.ad-sky-left,.ad-sky-right,.ad-sky-wrap,.ad-skyscr,.ad-skyscraper,.ad-skyscraper1,.ad-skyscraper2,.ad-skyscraper3,.ad-slider,.ad-slot,.ad-slot--container,.ad-slot--inline,.ad-slot--mostpop,.ad-slot--mpu-banner-ad,.ad-slot--rendered,.ad-slot--right,.ad-slot--top,.ad-slot--top-above-nav,.ad-slot--top-banner-ad,.ad-slot--wrapper,.ad-slot-1,.ad-slot-2,.ad-slot-234-60,.ad-slot-300-250,.ad-slot-728-90,.ad-slot-a,.ad-slot-article,.ad-slot-banner,.ad-slot-bigbox,.ad-slot-billboard,.ad-slot-box,.ad-slot-container,.ad-slot-container-1,.ad-slot-desktop,.ad-slot-full-width,.ad-slot-header,.ad-slot-horizontal,.ad-slot-inview,.ad-slot-placeholder,.ad-slot-rail,.ad-slot-replies,.ad-slot-replies-header,.ad-slot-responsive,.ad-slot-sidebar,.ad-slot-sidebar-b,.ad-slot-tall,.ad-slot-top,.ad-slot-top-728,.ad-slot-widget,.ad-slot-wrapper,.ad-slotRg,.ad-slotRgc,.ad-slot__ad--top,.ad-slot__content,.ad-slot__label,.ad-slot__oas,.ad-slots-wrapper,.ad-slug,.ad-small,.ad-small-1,.ad-small-2,.ad-smallBP,.ad-sp,.ad-space,.ad-space-mpu-box,.ad-space-topbanner,.ad-spacing,.ad-span,.ad-speedbump,.ad-splash,.ad-sponsor,.ad-sponsor-large-container,.ad-sponsor-text,.ad-sponsored-feed-top,.ad-sponsored-links,.ad-sponsored-post,.ad-sponsors,.ad-spot,.ad-spotlight,.ad-spteaser,.ad-sq-super,.ad-square,.ad-square-placeholder,.ad-square2-container,.ad-square300,.ad-squares,.ad-stack,.ad-standard,.ad-statement,.ad-static,.ad-sticky,.ad-sticky-banner,.ad-sticky-bottom,.ad-sticky-container,.ad-sticky-slot,.ad-sticky-wrapper,.ad-stickyhero,.ad-stickyhero--standard,.ad-stickyhero-enable-mobile,.ad-story-inject,.ad-story-top,.ad-strategic,.ad-strip,.ad-style2,.ad-subnav-container,.ad-subtitle,.ad-summary,.ad-superbanner,.ad-superbanner-node,.ad-t,.ad-t-text,.ad-table,.ad-tabs,.ad-tag,.ad-tag-square,.ad-tag__inner,.ad-tag__wrapper,.ad-takeover,.ad-takeover-homepage,.ad-tall,.ad-tech-widget,.ad-temp,.ad-text-centered,.ad-text-label,.ad-text-link,.ad-text-links,.ad-textads,.ad-textlink,.ad-thanks,.ad-ticker,.ad-tile,.ad-tl1,.ad-tl2b,.ad-top,.ad-top-300x250,.ad-top-728,.ad-top-728x90,.ad-top-banner,.ad-top-billboard,.ad-top-billboard-init,.ad-top-box-right,.ad-top-container,.ad-top-desktop,.ad-top-featured,.ad-top-in,.ad-top-lboard,.ad-top-left,.ad-top-mobile,.ad-top-mpu,.ad-top-padding,.ad-top-rectangle,.ad-top-right-container,.ad-top-side,.ad-top-slot,.ad-top-spacing,.ad-top-wrap-inner,.ad-top-wrapper,.ad-topbanner,.ad-topper,.ad-topright,.ad-tower,.ad-tower-container,.ad-towers,.ad-transition,.ad-trck,.ad-two,.ad-twos,.ad-txt,.ad-txt-red,.ad-type,.ad-type-branding,.ad-type-cube,.ad-type-flex-leaderboard,.ad-unit,.ad-unit--leaderboard,.ad-unit-2,.ad-unit-300,.ad-unit-300-wrapper,.ad-unit-container,.ad-unit-horisontal,.ad-unit-inline-center,.ad-unit-label,.ad-unit-mpu,.ad-unit-panel,.ad-unit-secondary,.ad-unit-sponsored-bar,.ad-unit-t,.ad-unit-text,.ad-unit-top,.ad-unit-wrapper,.ad-unit__inner,.ad-units-single-header-wrapper,.ad-update,.ad-vert,.ad-vertical,.ad-vertical-container,.ad-vertical-stack-ad,.ad-view-zone,.ad-w-300,.ad-w-728,.ad-w-970,.ad-warning,.ad-warp,.ad-watermark,.ad-wgt,.ad-wide,.ad-wide-bottom,.ad-wide-wrap,.ad-widget-area,.ad-widget-box,.ad-widget-list,.ad-widget-sizes,.ad-widget-wrapper,.ad-widgets,.ad-width-300,.ad-width-728,.ad-wireframe,.ad-wireframe-wrapper,.ad-with-background,.ad-with-header-wrapper,.ad-with-notice,.ad-wp,.ad-wp-720,.ad-wppr,.ad-wppr-container,.ad-wrap-leaderboard,.ad-wrap-transparent,.ad-wrap_wallpaper,.ad-wrapp,.ad-wrapper--ad-unit-wrap,.ad-wrapper--articletop,.ad-wrapper--lg,.ad-wrapper--sidebar {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.ad-wrapper-250,.ad-wrapper-bg,.ad-wrapper-left,.ad-wrapper-mobile-atf,.ad-wrapper-outer,.ad-wrapper-solid,.ad-wrapper-sticky,.ad-wrapper-top,.ad-wrapper-with-text,.ad-wrapper__ad-slug,.ad-xs-title,.ad-zocalo__container,.ad-zone-ajax,.ad.addon,.ad.bottomrect,.ad.box,.ad.brandboard,.ad.card,.ad.center,.ad.contentboard,.ad.desktop-970x250,.ad.element,.ad.floater-link,.ad.gallery,.ad.halfpage,.ad.inner,.ad.item,.ad.leaderboard,.ad.maxiboard,.ad.maxisky,.ad.middlerect,.ad.module,.ad.monsterboard,.ad.netboard,.ad.post-area,.ad.promotion,.ad.rectangle,.ad.rectangle_2,.ad.rectangle_3,.ad.rectangle_home_1,.ad.reform-top,.ad.section,.ad.sidebar-module,.ad.size-300x250,.ad.skybridgeleft,.ad.small-mpu,.ad.small-teaser,.ad.super,.ad.wideboard_tablet,.ad02,.ad03,.ad04,.ad08sky,.ad1-float,.ad1-left,.ad1-right,.ad10,.ad100,.ad1000,.ad1001,.ad100x100,.ad120,.ad120_600,.ad120x120,.ad120x240GrayBorder,.ad120x60,.ad120x600,.ad125,.ad125x125,.ad125x125a,.ad125x125b,.ad140,.ad160,.ad160600,.ad160_blk,.ad160_l,.ad160_r,.ad160b,.ad160x160,.ad160x600,.ad160x600GrayBorder,.ad160x600_1,.ad160x600box,.ad170x30,.ad18,.ad180,.ad180x80,.ad185x100,.ad19,.ad1Image,.ad1_bottom,.ad1_latest,.ad1_top,.ad1b,.ad1left,.ad1x1,.ad2-float,.ad200,.ad200x60,.ad220x50,.ad230,.ad233x224,.ad234,.ad234x60,.ad236x62,.ad240,.ad250,.ad250wrap,.ad250x250,.ad250x300,.ad260,.ad260x60,.ad284x134,.ad290,.ad2content_box,.ad300,.ad300-hp-top,.ad3001,.ad300250,.ad300Block,.ad300Wrapper,.ad300X250,.ad300_2,.ad300_250,.ad300_bg,.ad300_ver2,.ad300b,.ad300banner,.ad300px,.ad300shows,.ad300top,.ad300w,.ad300x100,.ad300x120,.ad300x150,.ad300x250,.ad300x250-1,.ad300x250-2,.ad300x250-inline,.ad300x250Module,.ad300x250Right,.ad300x250Top,.ad300x250_box,.ad300x250_container,.ad300x250a,.ad300x250b,.ad300x250box,.ad300x250box2,.ad300x250flex,.ad300x250s,.ad300x250x2,.ad300x40,.ad300x50-right,.ad300x600,.ad300x600cat,.ad300x600post,.ad300x77,.ad300x90,.ad310,.ad315,.ad320x250,.ad320x50,.ad336_b,.ad336x250,.ad336x280,.ad336x362,.ad343x290,.ad350,.ad350r,.ad360,.ad366,.ad3rdParty,.ad400,.ad400right,.ad400x40,.ad450,.ad468,.ad468_60,.ad468box,.ad468innerboxadpic,.ad468x60,.ad468x60Wrap,.ad468x60_main,.ad470x60,.ad530,.ad540x90,.ad590,.ad590x90,.ad5_container,.ad600,.ad612x80,.ad620x70,.ad626X35,.ad640x480,.ad644,.ad650x140,.ad652,.ad70,.ad728,.ad72890,.ad728By90,.ad728_90,.ad728_blk,.ad728_cont,.ad728_wrap,.ad728b,.ad728cont,.ad728h,.ad728top,.ad728x90-1,.ad728x90-2,.ad728x90box,.ad728x90btf,.ad970,.ad970_250,.adAlert,.adArea,.adAreaLC,.adAreaNative,.adAreaTopTitle,.adArticleBanner,.adArticleBody,.adArticleSideTop300x250,.adBan,.adBanner300x250,.adBanner728x90,.adBillboard,.adBkgd,.adBlock,.adBlock728,.adBlockBottom,.adBlockDetectedSign,.adBlockNotification,.adBlockNotificationOverlay,.adBlockSpacer,.adBlockSpot,.adBlockWarning,.adBorder,.adBorders,.adBox,.adBox-small,.adBox1,.adBox2,.adBox5,.adBox6,.adBox728,.adBox728X90,.adBox728X90_header,.adBoxBody,.adBoxBorder,.adBoxContainer,.adBoxContent,.adBoxFooter,.adBoxHeader,.adBoxSidebar,.adBoxSingle,.adBoxTitle,.adBox_1,.adBox_3,.adBtm,.adCall,.adCaptionText,.adCell,.adCenter,.adCenterAd,.adCentertile,.adChoice,.adChoiceLogo,.adChrome,.adClose,.adCode,.adColumn,.adColumnLeft,.adColumnRight,.adComponent,.adCont,.adContTop,.adContainer1,.adContainerSide,.adContent,.adContentAd,.adContour,.adCopy,.adCreative,.adCreator,.adCube,.adDefRect,.adDetails_ad336,.adDiv,.adDrawer,.adDyn,.adElement,.adExpanded,.adFooterLinks,.adFrame,.adFrameCnt,.adFrameContainer,.adFrames,.adFuel-label,.adFull,.adFullbanner,.adGlobalHeader,.adGoogle,.adGroup,.adHalfPage,.adHead,.adHeader,.adHeaderAdbanner,.adHeaderText,.adHeaderblack,.adHeading,.adHeadline,.adHeadlineSummary,.adHed,.adHeight200,.adHeight270,.adHeight280,.adHeight313,.adHeight600,.adHolder2,.adHolderStory,.adHoldert,.adHome300x250,.adHomeSideTop300x250,.adHorisontal,.adHorisontalNoBorder,.adHorizontalTextAlt,.adHplaceholder,.adHz,.adIDiv,.adIframe,.adIframeCount,.adImgIM,.adInArticle,.adInContent,.adInfo,.adInitRemove,.adInner,.adInnerLeftBottom,.adInsider,.adInteractive,.adIsland,.adItem,.adLabel,.adLabelLine,.adLabels,.adLargeRec,.adLargeRect,.adLat,.adLeader,.adLeaderBoard_container,.adLeaderForum,.adLeaderboard,.adLeaderboardAdContainer,.adLeft,.adLine,.adLinkCnt,.adListB,.adLoader,.adLocal,.adLocation,.adMPU,.adMPUHome,.adMRECHolder,.adMarker,.adMarkerBlock,.adMastheadLeft,.adMastheadRight,.adMed,.adMedRectBox,.adMedRectBoxLeft,.adMediaMiddle,.adMediumRectangle,.adMessage,.adMinHeight280,.adMinHeight313,.adMiniTower,.adMod,.adModule,.adModule--inner,.adModule--outer,.adModule-outer,.adModule300,.adModuleAd,.adMpu,.adMpuHolder,.adMrginBottom,.adNarrow,.adNoBorder,.adNoOutline,.adNone,.adNote,.adNotice,.adNotice90,.adNoticeOut,.adNotification,.adObj,.adOne,.adOuterContainer,.adOverlay,.adPanel,.adPanelContent,.adPanorama,.adPlaceholder,.adPlacement,.adPod,.adPosition,.adPremium,.adRecommend,.adRecommendRight,.adRect,.adRectangle,.adRectangle-pos-large,.adRectangle-pos-medium,.adRectangle-pos-small,.adRectangleBanner,.adRectangleUnit,.adRemove,.adRenderer,.adRendererInfinite,.adResponsive,.adResults,.adRight,.adRightSide,.adRightSky,.adRoller,.adRotator,.adRow,.adRowTopWrapper,.adSKY,.adSection,.adSenceImagePush,.adSense,.adSense-header,.adSepDiv,.adServer,.adSeven,.adSide,.adSideBarMPU,.adSideBarMPUTop,.adSidebarButtons,.adSizer,.adSkin,.adSky,.adSkyscaper,.adSkyscraper,.adSlice,.adSlide,.adSlot,.adSlot-container,.adSlotAdition,.adSlotCnt,.adSlotContainer,.adSlotHeaderContainer,.adSlug,.adSpBelow,.adSpace,.adSpace300x250,.adSpace950x90,.adSpacer,.adSpec,.adSplash,.adSponsor,.adSponsorText,.adSponsorhipInfo,.adSpot,.adSpot-mrec,.adSpot-textBox,.adSpotBlock,.adSpotFullWidth,.adSpotIsland,.adSquare,.adStatementText,.adStyle,.adStyle1,.adSub,.adSubColPod,.adSummary,.adSuperboard,.adSupertower,.adTD,.adTXTnew,.adTab,.adTag,.adTag-top,.adTag-wrap,.adTagThree,.adTagTwo,.adTextDownload,.adTextPmpt,.adTextStreaming,.adTextWrap,.adTicker,.adTile,.adTileWrap,.adTiler,.adTip,.adTitle,.adTitleR,.adTop,.adTopBk,.adTopFloat,.adTopHome,.adTopLB,.adTopLeft,.adTopRight,.adTopWrapper,.adTopboxright,.adTwo,.adTxt,.adType2,.adUnderArticle,.adUnit,.adUnitHorz,.adUnitVert,.adVar,.adVertical,.adVideo,.adVideo2,.adVl,.adVplaceholder,.adWarning,.adWebBoard,.adWideSkyscraper,.adWideSkyscraperRight,.adWidget,.adWidgetBlock,.adWithTab,.adWizard-ad,.adWord,.adWords-bg,.adWrap,.adWrapLg,.adWrapper,.adWrapper1,.adZone,.adZoneRight,.ad_0,.ad_1,.ad_1000_125,.ad_120x60,.ad_120x600,.ad_120x90,.ad_125,.ad_130x90,.ad_150x150,.ad_160,.ad_160_600,.ad_160x600,.ad_188_inner,.ad_1tdq7q5,.ad_2,.ad_200,.ad_240,.ad_250250,.ad_250x200,.ad_250x250,.ad_290_290,.ad_3,.ad_300,.ad_300250,.ad_300_250,.ad_300_250_1,.ad_300_250_2,.ad_300_250_wrapper,.ad_300_600,.ad_300by250,.ad_300x100,.ad_300x250,.ad_300x250_container,.ad_300x600,.ad_320x250_async,.ad_336,.ad_336x280,.ad_350x250,.ad_4,.ad_468,.ad_468x60,.ad_5,.ad_600,.ad_640,.ad_640x480,.ad_728,.ad_72890,.ad_728Home,.ad_728_90,.ad_728_90_1,.ad_728_90_page,.ad_728_90b,.ad_728_top,.ad_728x90,.ad_728x90-1,.ad_728x90-2,.ad_728x90_container,.ad_728x90b,.ad_90,.ad_970x250,.ad_970x250_300x250,.ad_970x250_container,.ad_Bumper,.ad_Flex,.ad_Left,.ad__300x250,.ad__300x600,.ad__970x250,.ad__align,.ad__centered,.ad__container,.ad__content,.ad__full--width,.ad__header,.ad__holder,.ad__image,.ad__in_article,.ad__inline,.ad__item,.ad__label,.ad__leaderboard,.ad__mobi,.ad__mobile-footer,.ad__mpu,.ad__placeholder,.ad__rectangle,.ad__section-border,.ad__sidebar,.ad__space,.ad__sticky,.ad__template,.ad__window,.ad__wrapper,.ad_adv,.ad_after_section,.ad_amazon,.ad_area,.ad_area_two,.ad_back,.ad_background,.ad_background_1,.ad_background_true,.ad_banner2,.ad_banner_2,.ad_banner_250x250,.ad_banner_468,.ad_banner_728,.ad_banner_728x90_inner,.ad_banner_border,.ad_banner_div,.ad_bar,.ad_below_content,.ad_belowfirstpost_frame,.ad_bgskin,.ad_big_banner,.ad_bigbox,.ad_billboard,.ad_blk,.ad_block_1,.ad_block_2,.ad_block_widget,.ad_border,.ad_botbanner,.ad_bottom_728,.ad_bottom_leaderboard,.ad_bottom_left,.ad_bottom_mpu,.ad_bottom_space,.ad_box1,.ad_box2,.ad_box_2,.ad_box_6,.ad_box_9,.ad_box_ad,.ad_box_div,.ad_box_header,.ad_box_spacer,.ad_box_top,.ad_break,.ad_break2_container,.ad_break_container,.ad_btf,.ad_btn-white,.ad_btn1,.ad_btn2,.ad_by,.ad_callout,.ad_center,.ad_center_bottom,.ad_centered,.ad_choice,.ad_choices,.ad_cl,.ad_claim,.ad_click,.ad_cls_fix,.ad_code,.ad_col,.ad_column,.ad_column_box,.ad_common,.ad_con,.ad_cont,.ad_cont_footer,.ad_contain,.ad_container_body,.ad_container_bottom,.ad_content,.ad_content_below,.ad_content_bottom,.ad_content_wide,.ad_content_wrapper,.ad_contents,.ad_crown,.ad_custombanner,.ad_d_big,.ad_db,.ad_default,.ad_description,.ad_desktop,.ad_dfp_estandar,.ad_disclaimer,.ad_div_banner,.ad_div_box,.ad_div_box2,.ad_element,.ad_embed,.ad_feature,.ad_float,.ad_floating_box,.ad_fluid,.ad_footer,.ad_footer_super_banner,.ad_frame_around,.ad_fullwidth,.ad_gam,.ad_google,.ad_gpt,.ad_grein_botn,.ad_grid,.ad_group,.ad_half_page,.ad_halfpage,.ad_hd,.ad_head,.ad_head_rectangle,.ad_header,.ad_header_top,.ad_heading,.ad_headline,.ad_holder,.ad_horizontal,.ad_hover_href,.ad_iframe2,.ad_image,.ad_img,.ad_imgae_150,.ad_in_article,.ad_in_text,.ad_incontent,.ad_index02,.ad_indicator,.ad_inline,.ad_inline_wrapper,.ad_inner,.ad_inset,.ad_island,.ad_label,.ad_large,.ad_lb,.ad_leader,.ad_leader_bottom,.ad_leader_plus_top,.ad_leaderboard,.ad_leaderboard_atf,.ad_leaderboard_master,.ad_leaderboard_top,.ad_leaderboard_wrap,.ad_left_cell,.ad_left_column,.ad_lft,.ad_line2,.ad_link,.ad_links,.ad_lnks,.ad_loc,.ad_long,.ad_lrec,.ad_lrgsky,.ad_lt,.ad_maintopad,.ad_margin,.ad_marker,.ad_masthead,.ad_med,.ad_medium_rectangle,.ad_medrec,.ad_medrect,.ad_megabanner,.ad_message,.ad_mid_post_body,.ad_middle_banner,.ad_mobile,.ad_mod,.ad_module,.ad_mp,.ad_mpu,.ad_mpu_top,.ad_mr,.ad_mrec,.ad_native,.ad_native_xrail,.ad_news,.ad_no_border,.ad_note,.ad_notice,.ad_oms,.ad_on_article,.ad_one,.ad_one_one,.ad_one_third,.ad_outer,.ad_overlays,.ad_p360,.ad_pagebody,.ad_panel,.ad_paragraphs_desktop_container,.ad_partner,.ad_partners,.ad_pause,.ad_pic,.ad_place,.ad_placeholder,.ad_placeholder_d_b,.ad_placeholder_d_s,.ad_placeholder_d_sticky,.ad_placement,.ad_player_container,.ad_plus,.ad_position,.ad_post,.ad_primary,.ad_promo,.ad_promo1,.ad_promo_spacer,.ad_push,.ad_r,.ad_rec,.ad_rect,.ad_rectangle,.ad_rectangle_300_250,.ad_rectangle_medium,.ad_rectangular,.ad_regular1,.ad_regular2,.ad_regular3,.ad_reminder,.ad_response,.ad_rhs,.ad_right,.ad_rightSky,.ad_right_300_250,.ad_right_cell,.ad_right_col,.ad_rightside,.ad_row,.ad_scroll,.ad_secondary,.ad_segment,.ad_sense_01,.ad_sense_footer_container,.ad_share_box,.ad_side,.ad_side_box,.ad_side_rectangle_banner,.ad_sidebar,.ad_sidebar_bigbox,.ad_sidebar_inner,.ad_sidebar_left,.ad_sidebar_right,.ad_size_160x600,.ad_skin,.ad_sky,.ad_sky2,.ad_sky2_2,.ad_skyscpr,.ad_skyscraper,.ad_skyscrapper,.ad_slider_out,.ad_slot,.ad_slot_inread,.ad_slot_right,.ad_slug,.ad_small,.ad_space,.ad_space_300_250,.ad_spacer,.ad_sponsor,.ad_sponsor_fp,.ad_sponsoredsection,.ad_spot_b,.ad_spot_c,.ad_spotlight,.ad_square,.ad_square_r,.ad_square_r_top,.ad_square_top,.ad_start,.ad_static,.ad_station,.ad_story_island,.ad_stream,.ad_stream_hd,.ad_sub,.ad_supersize,.ad_table,.ad_tag,.ad_tag_middle,.ad_text,.ad_text_link,.ad_text_links,.ad_text_vertical,.ad_text_w,.ad_textlink1,.ad_textlink_box,.ad_thumbnail_header,.ad_title_small,.ad_tlb,.ad_to_list,.ad_top1,.ad_top_1,.ad_top_2,.ad_top_3,.ad_top_banner,.ad_top_leaderboard,.ad_top_left,.ad_top_mpu,.ad_top_right,.ad_topic_content,.ad_topmain,.ad_topright,.ad_topshop,.ad_tower,.ad_trailer_header,.ad_trick_header,.ad_trick_left,.ad_ttl,.ad_two,.ad_two_third,.ad_txt2,.ad_type_1,.ad_type_adsense,.ad_type_dfp,.ad_under,.ad_under_royal_slider,.ad_unit,.ad_unit_300,.ad_unit_300_x_250,.ad_unit_600,.ad_unit_rail,.ad_unit_wrapper,.ad_unit_wrapper_main,.ad_url,.ad_v2,.ad_v3,.ad_vertisement,.ad_w,.ad_w300h450,.ad_w300i,.ad_w_us_a300,.ad_warn,.ad_warning,.ad_watch_now,.ad_watermark,.ad_wid300,.ad_wide,.ad_wide_vertical,.ad_widget,.ad_widget_200_100,.ad_widget_200_200,.ad_widget_image,.ad_widget_title,.ad_word,.ad_wrap,.ad_wrapper,.ad_wrapper_300,.ad_wrapper_970x90,.ad_wrapper_box,.ad_wrapper_false,.ad_wrapper_fixed,.ad_wrapper_top,.ad_wrp,.ad_xrail,.ad_xrail_top,.ad_zone,.adace-adi-popup-wrapper,.adace-slideup-slot-wrap,.adace-slot,.adace-slot-wrapper,.adace-sponsors-box,.adace-vignette,.adalert-overlayer,.adalert-toplayer {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.adamazon,.adarea,.adarea-long,.adarticle,.adb-enabled,.adb-top,.adback,.adband,.adbanner-300-250,.adbanner-bottom,.adbanner1,.adbannerbox,.adbannerright,.adbannertop,.adbase,.adbbox,.adbckgrnd,.adbd-background,.adbd-message,.adbd-wrapper,.adbetween,.adbetweenarticles,.adbkgnd,.adblade,.adblade-container,.adbladeimg,.adblk,.adblock-bottom,.adblock-header,.adblock-header1,.adblock-main,.adblock-modal,.adblock-modal-content,.adblock-notification-wrapper,.adblock-popup,.adblock-top,.adblock-top-left,.adblock-warning-teaser,.adblock-wide,.adblock300,.adblock300250,.adblock728x90,.adblockInfo,.adblockOverlay,.adblock__banner,.adblock_detector,.adblock_enabled,.adblock_floating_message,.adblock_msg,.adblock_noborder,.adblock_primary,.adblockdiv,.adblocker-message,.adblocker-wrap,.adblocks-topright,.adboard,.adborder,.adborderbottom,.adbordertop,.adbot,.adbot_postbit,.adbot_showthread,.adbottom,.adbottomright,.adbox-300x250,.adbox-468x60,.adbox-border-desk,.adbox-box,.adbox-header,.adbox-outer,.adbox-rectangle,.adbox-sidebar,.adbox-slider,.adbox-style,.adbox-title,.adbox-topbanner,.adbox-wrapper,.adbox1,.adbox160,.adbox2,.adbox300,.adbox300x250,.adbox336,.adbox600,.adbox728,.adboxRightSide,.adboxTopBanner,.adboxVert,.adbox_300x600,.adbox_310x400,.adbox_366x280,.adbox_468X60,.adbox_border,.adbox_bottom,.adbox_br,.adbox_cont,.adbox_largerect,.adbox_left,.adbox_top,.adboxbg,.adboxbot,.adboxclass,.adboxcm,.adboxcontent,.adboxcontentsum,.adboxes,.adboxesrow,.adboxid,.adboxlarge,.adboxlong,.adboxo,.adboxtop,.adbreak,.adbrite2,.adbtn,.adbtns,.adbttm_right_300,.adbttm_right_label,.adbucks,.adbug,.adbutler-inline-ad,.adbutler-top-banner,.adbutler_top_banner,.adbutton-block,.adbuttons,.adcasing,.adchange,.adchoices,.adchoices-link,.adclass,.adcode,.adcode-widget,.adcode2,.adcode300x250,.adcode728x90,.adcode_container,.adcodetextwrap300x250,.adcodetop,.adcol1,.adcol2,.adcolumn,.adcolumn_wrapper,.adcomment,.adcon,.adcont,.adcontainer-Leaderboard,.adcontainer-Rectangle,.adcontainer-portlet,.adcontainer2,.adcontainer300x250l,.adcontainer300x250r,.adcontainer_big,.adcontainer_footer,.adcopy,.add-box-side,.add-box-top,.add-sidebar,.add300,.add300top,.add300x250,.addAdvertContainer,.add_topbanner,.addarea,.addarearight,.addbanner,.addboxRight,.addisclaimer,.addiv,.adds2,.adds300x250,.adds620x90,.addtitle,.addvert,.addwide,.adengageadzone,.adenquire,.adex-ad-text,.adfbox,.adfeedback,.adfeeds,.adfix,.adflag,.adflexi,.adfliction,.adfoot,.adfootbox,.adfooter,.adform__topbanner,.adfoxly-overlay,.adfoxly-place-delay,.adfoxly-wrapper,.adframe,.adframe2,.adframe_banner,.adframe_rectangle,.adfree,.adfront,.adfront-head,.adfrp,.adfull,.adgear,.adgmleaderboard,.adguru-content-html,.adguru-modal-popup,.adhalfhome,.adhalfpage,.adhalfpageright,.adhead,.adheader,.adheightpromo,.adheighttall,.adherebox,.adhesion-block,.adhesion-header,.adhesion:not(body),.adhesiveAdWrapper,.adhesiveWrapper,.adhesive_holder,.adhi,.adhide,.adhint,.adholder,.adholder-300,.adholderban,.adhoriz,.adiframe,.adindex,.adindicator,.adinfo,.adinjwidget,.adinner,.adinpost,.adinsert,.adinsert160,.adinside,.adintext,.adintro,.adisclaimer,.adisland,.adits,.adjlink,.adk-slot,.adkicker,.adkit,.adlabel-horz,.adlabel-vert,.adlabel1,.adlabel2,.adlabel3,.adlabelleft,.adlarge,.adlarger,.adlateral,.adlayer,.adleader,.adleft1,.adleftph,.adlgbox,.adline,.adlinkdiv,.adlinks,.adlinks-class,.adlist,.adlist1,.adlist2,.adloaded,.adlsot,.admain,.adman,.admarker,.admaster,.admediumred,.admedrec,.admeldBoxAd,.admessage,.admiddle,.admiddlesidebar,.admngr,.admngrfr,.admngrft,.admods,.admodule,.admoduleB,.admpu,.admpu-small,.admputop,.admz,.adnSpot,.adname,.adnet_area,.adnotecenter,.adnotice,.adnotification,.adnz-ad-placeholder,.adocean,.adocean728x90,.adocean_desktop_section,.adops,.adpacks,.adpacks_content,.adpadding,.adpane,.adparent,.adpic,.adplace,.adplace_center,.adplaceholder,.adplaceholder-top,.adplacement,.adplate-background,.adplugg-tag,.adpod,.adpopup,.adpos-300-mobile,.adpost,.adposter_pos,.adproxy,.adrec,.adrechts,.adrectangle,.adrectwrapper,.adrevtising-buttom,.adright,.adright300,.adrightlg,.adrightsm,.adrighttop,.adriverBanner,.adroot,.adrotate-sponsor,.adrotate-widget,.adrotate_ads_row,.adrotate_top_banner,.adrotate_widget,.adrotate_widgets,.adrotatediv,.adrule,.ads--bottom-spacing,.ads--desktop,.ads--full,.ads--no-preload,.ads--sidebar,.ads--single,.ads--square,.ads--super,.ads--top,.ads-1,.ads-120x600,.ads-125,.ads-160x600,.ads-160x600-outer,.ads-2,.ads-3,.ads-300,.ads-300-250,.ads-300-box,.ads-300x250,.ads-300x250-sidebar,.ads-300x300,.ads-300x600,.ads-300x600-wrapper-en,.ads-320-50,.ads-320x250,.ads-336x280,.ads-468,.ads-728,.ads-728-90,.ads-728by90,.ads-728x90,.ads-980x90,.ads-above-comments,.ads-ad,.ads-advertorial,.ads-article-right,.ads-articlebottom,.ads-aside,.ads-banner-bottom,.ads-banner-js,.ads-banner-middle,.ads-banner-spacing,.ads-banner-top,.ads-banner-top-right,.ads-base,.ads-beforecontent,.ads-below-content,.ads-below-home,.ads-below-view-content,.ads-between-comments,.ads-bg,.ads-bigbox,.ads-bilboards,.ads-bing-bottom,.ads-bing-top,.ads-block,.ads-block-bottom-wrap,.ads-block-link-text,.ads-block-panel-tipo-1,.ads-block-rightside,.ads-block-top,.ads-block-top-right,.ads-border,.ads-bottom,.ads-bottom-block,.ads-bottom-center,.ads-bottom-content,.ads-bottom-left,.ads-bottom-right,.ads-box,.ads-box-border,.ads-box-cont,.ads-bt,.ads-btm,.ads-by,.ads-by-google,.ads-callback,.ads-card,.ads-carousel,.ads-center,.ads-centered,.ads-cnt,.ads-code,.ads-col,.ads-cols,.ads-cont,.ads-content,.ads-custom,.ads-decorator,.ads-desktop,.ads-div,.ads-el,.ads-end-content,.ads-favicon,.ads-feed,.ads-fieldset,.ads-footer,.ads-fr,.ads-global-header,.ads-global-top,.ads-google,.ads-google-bottom,.ads-google-top,.ads-grp,.ads-half,.ads-header-desktop,.ads-header-left,.ads-header-right,.ads-here,.ads-hints,.ads-holder,.ads-home,.ads-homepage-2,.ads-horizontal,.ads-horizontal-banner,.ads-inarticle,.ads-inner,.ads-instance,.ads-internal,.ads-item,.ads-label,.ads-label-inverse,.ads-large,.ads-leaderboard,.ads-leaderboard-border,.ads-leaderboard-panel,.ads-leaderbord,.ads-line,.ads-list,.ads-long,.ads-main,.ads-margin,.ads-marker,.ads-medium-rect,.ads-middle,.ads-middle-top,.ads-minheight,.ads-mini,.ads-mini-3rows,.ads-module,.ads-module-alignment,.ads-movie,.ads-mpu,.ads-narrow,.ads-native-wrapper,.ads-note,.ads-one,.ads-outer,.ads-panel,.ads-parent,.ads-pholder,.ads-placeholder,.ads-placeholder-inside,.ads-placeholder-wrapper,.ads-placment,.ads-post,.ads-post-closing,.ads-post-footer,.ads-post-full,.ads-posting,.ads-profile,.ads-rail,.ads-rect,.ads-rectangle,.ads-relatedbottom,.ads-rendering-fix,.ads-right,.ads-right-min,.ads-rotate,.ads-scroller-box,.ads-section,.ads-side,.ads-sidebar,.ads-sidebar-boxad,.ads-sidebar-widget,.ads-sidebarx,.ads-sign,.ads-single,.ads-site,.ads-size-small,.ads-skin,.ads-skin-mobile,.ads-sky,.ads-skyscraper,.ads-skyscraper-container-left,.ads-skyscraper-container-right,.ads-skyscraper-left,.ads-skyscraper-right,.ads-small,.ads-small-horizontal,.ads-small-squares,.ads-smartphone,.ads-social-box,.ads-sponsored-title,.ads-sponsors,.ads-square,.ads-square-large,.ads-square-small,.ads-squares,.ads-star,.ads-stick-footer,.ads-sticky,.ads-story,.ads-story-leaderboard-atf,.ads-stripe,.ads-styled,.ads-superbanner,.ads-system,.ads-text,.ads-to-hide,.ads-top,.ads-top-728,.ads-top-center,.ads-top-content,.ads-top-fixed,.ads-top-home,.ads-top-left,.ads-top-main,.ads-top-right,.ads-top-spacer,.ads-topbar,.ads-two,.ads-txt,.ads-ul,.ads-verticle,.ads-wall-container,.ads-wide,.ads-widget,.ads-widget-content,.ads-widget-content-wrap,.ads-widget-link,.ads-wrap,.ads-wrapper,.ads-wrapper-top,.ads-x1,.ads-zone,.ads.bottom,.ads.box,.ads.cell,.ads.cta,.ads.grid-layout,.ads.square,.ads.top,.ads.video-block,.ads01,.ads10,.ads11,.ads120,.ads120_600,.ads120_600-widget,.ads120_80,.ads120x,.ads123,.ads125,.ads125-widget,.ads160,.ads160-600,.ads2,.ads250,.ads250-250,.ads2Block,.ads3,.ads300,.ads300-200,.ads300-250,.ads300250,.ads300_250,.ads300_600-widget,.ads300box,.ads300x600,.ads336_280,.ads336x280,.ads4,.ads468,.ads468x60,.ads600,.ads720x90,.ads728,.ads728_90,.ads728b,.ads728x90,.ads728x90-1,.ads970,.adsAdvert,.adsArea,.adsBanner,.adsBannerLink,.adsBlockContainerHorizontal,.adsBot,.adsBottom,.adsBoxTop,.adsCap,.adsCell,.adsColumn,.adsCon,.adsConfig,.adsCont,.adsDef,.adsDesktop,.adsDetailsPage,.adsDisclaimer,.adsDiv,.adsEpi,.adsEpiItem,.adsFirst,.adsFixed,.adsFull,.adsHeader,.adsHeading,.adsHeight300x250,.adsHeight720x90,.adsHome-full,.adsImages,.adsIndex,.adsInner,.adsLabel,.adsLibrary,.adsLine,.adsMPU,.adsMag,.adsMarker,.adsMiddle,.adsMvCarousel,.adsNetwork,.adsOuter,.adsOverPrimary,.adsPlaceHolder,.adsPostquare,.adsPushdown,.adsRectangleMedium,.adsRight,.adsRow,.adsSecond,.adsSectionRL,.adsSide,.adsSpacing,.adsSticky,.adsTag,.adsText,.adsTop,.adsTopBanner,.adsTopCont,.adsTower2,.adsTowerWrap,.adsTxt,.adsWidget,.adsWrap,.ads_160,.ads_160x600,.ads_180,.ads_2,.ads_3,.ads_300,.ads_300_250,.ads_300x250,.ads_300x600,.ads_4,.ads_468,.ads_468x60,.ads_720x90,.ads_728,.ads_728x90,.ads_960x90,.ads_Header,.ads__article__header,.ads__aside,.ads__container,.ads__header,.ads__horizontal,.ads__hyperleaderboard--hyperleaderboard,.ads__inline,.ads__interstitial,.ads__link,.ads__listing,.ads__mid,.ads__middle,.ads__midpage-fullwidth,.ads__native,.ads__right-rail-ad,.ads__sidebar,.ads__top,.ads_ad_box,.ads_after,.ads_after_more,.ads_amazon,.ads_area,.ads_article,.ads_ba_cad,.ads_banner,.ads_bar,.ads_before,.ads_between_content,.ads_bg,.ads_big,.ads_bigrec,.ads_block,.ads_border,.ads_box,.ads_box_headline,.ads_box_type1,.ads_center,.ads_code,.ads_column,.ads_container,.ads_container_top,.ads_content,.ads_css,.ads_div,.ads_div1,.ads_foot,.ads_footer,.ads_footerad,.ads_full_1,.ads_google,.ads_h,.ads_h1,.ads_h2,.ads_header,.ads_header_bottom,.ads_holder,.ads_home,.ads_horizontal,.ads_inview,.ads_item,.ads_label,.ads_lb,.ads_leader,.ads_leaderboard,.ads_left,.ads_main,.ads_main_hp,.ads_media,.ads_medium,.ads_medium_rectangle,.ads_medrect,.ads_middle,.ads_middle-container,.ads_middle_container,.ads_mobile_vert,.ads_mpu,.ads_outer,.ads_outline,.ads_place,.ads_place_160,.ads_place_top,.ads_placeholder,.ads_player,.ads_post,.ads_prtext,.ads_rectangle,.ads_remove,.ads_rightbar_top,.ads_side,.ads_sideba,.ads_sidebar,.ads_single_center,.ads_single_side,.ads_single_top,.ads_singlepost,.ads_slice,.ads_slot,.ads_small,.ads_small_rectangle,.ads_space_long,.ads_spacer,.ads_square,.ads_takeover,.ads_text,.ads_tit,.ads_title,.ads_top,.ads_top_1,.ads_top_banner,.ads_top_both,.ads_top_middle,.ads_top_nav,.ads_topbanner,.ads_topleft,.ads_topright,.ads_tower,.ads_tr,.ads_under_data,.ads_unit,.ads_up,.ads_video,.ads_wide,.ads_widesky,.ads_widget,.ads_wrap,.ads_wrap-para,.adsafp,.adsanity-alignnone,.adsanity-group,.adsanity-single,.adsarea,.adsartical,.adsbanner1,.adsbanner2,.adsbantop,.adsbar,.adsbg300,.adsbillboard,.adsblock,.adsblockvert,.adsbnr,.adsbody,.adsborder,.adsboth,.adsbottom,.adsbox--masthead,.adsbox-square,.adsbox970x90,.adsbox990x90,.adsboxBtn,.adsbox_300x250,.adsboxitem,.adsbx728x90,.adsbyadop,.adsbyexoclick,.adsbyexoclick-wrapper,.adsbygalaksion,.adsbygoogle-box,.adsbygoogle-noablate,.adsbygoogle-wrapper,.adsbygoogle2,.adsbypublift,.adsbypubmax,.adsbytrafficjunky,.adsbyvli,.adsbyxa,.adscaleTop,.adscenter,.adscentertext,.adsclick,.adscontent250,.adscontentcenter,.adscontntad,.adscreen,.adsdelivery,.adsderecha,.adsdesktop,.adsdiv,.adsection_a2,.adsection_c2,.adsection_c3,.adsenbox,.adsens,.adsense-250,.adsense-300-600,.adsense-336,.adsense-336-280,.adsense-468,.adsense-728-90,.adsense-ad-results,.adsense-ads,.adsense-afterpost,.adsense-area,.adsense-article,.adsense-block,.adsense-box,.adsense-center,.adsense-code,.adsense-container,.adsense-content,.adsense-div,.adsense-float,.adsense-googleAds,.adsense-header,.adsense-heading,.adsense-iframe-container,.adsense-inline,.adsense-left,.adsense-links,.adsense-loading,.adsense-module,.adsense-overlay,.adsense-post,.adsense-resposivo-meio,.adsense-right,.adsense-slot,.adsense-square,.adsense-sticky-slide,.adsense-title,.adsense-top,.adsense-unit,.adsense-widget,.adsense-wrapper,.adsense1,.adsense160x600,.adsense250,.adsense3,.adsense300,.adsense300x250,.adsense728,.adsense728x90,.adsenseAds,.adsenseBannerArea,.adsenseBlock,.adsenseContainer,.adsenseList,.adsenseRow,.adsenseSky,.adsenseWrapper,.adsense_200,.adsense_336_280,.adsense_728x90_container,.adsense_ad,.adsense_block,.adsense_bottom,.adsense_container,.adsense_content_300x250,.adsense_div_wrapper,.adsense_inner,.adsense_label,.adsense_leader,.adsense_media,.adsense_menu,.adsense_mpu,.adsense_rectangle,.adsense_results,.adsense_right,.adsense_sidebar,.adsense_sidebar_top,.adsense_single,.adsense_top,.adsense_top_ad,.adsense_unit,.adsensebig,.adsensefloat,.adsenseformat,.adsenseframe,.adsenseleaderboard,.adsensemobile,.adsenvelope,.adsep,.adserve_728,.adserverBox,.adserver_zone,.adserverad,.adserving,.adset,.adsfloat,.adsfloatpanel,.adsforsearchGrid,.adsforsearch_roba,.adsforums,.adsghori,.adsgrd,.adsgvert,.adsheight-250,.adshowbig,.adshowcase,.adshp,.adside,.adside-box-index,.adside-box-single,.adside_box,.adsidebar,.adsidebox,.adsider,.adsincs2,.adsinfo {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}</style><style type="text/css" class="abn_style" nonce="undefined">.adsingle,.adsingle-r,.adsingleph,.adsitem,.adsize728,.adsizer,.adsizewrapper,.adskeeperWrap,.adsky,.adsleaderboard,.adsleaderboardbox,.adsleff,.adsleftblock,.adslibraryArticle,.adslider,.adslink,.adslist,.adslisting,.adslisting2,.adslistingz,.adsload,.adsloading,.adslogan,.adslot--leaderboard,.adslot-area,.adslot-banner,.adslot-billboard,.adslot-feature,.adslot-inline-wide,.adslot-mpu,.adslot-rectangle,.adslot-widget,.adslot970,.adslotMid,.adslot_1,.adslot_1m,.adslot_2,.adslot_2m,.adslot_3,.adslot_300,.adslot_3d,.adslot_3m,.adslot_4,.adslot_728,.adslot__ad-container,.adslot__ad-wrapper,.adslot_blurred,.adslot_bot_300x250,.adslot_collapse,.adslot_popup,.adslot_side1,.adslothead,.adslotleft,.adslotright,.adslotright_1,.adslotright_2,.adslug,.adsmaintop,.adsmall,.adsmaller,.adsmalltext,.adsmanag,.adsmbody,.adsmedrect,.adsmedrectright,.adsmessage,.adsmobile,.adsmovie,.adsninja-ad-zone-container-with-set-height,.adsninja-rail-zone,.adsnippet_widget,.adsns,.adsntl,.adsonar-after,.adsonofftrigger,.adsoptimal-slot,.adsother,.adspace,.adspace-300x600,.adspace-336x280,.adspace-728x90,.adspace-MR,.adspace-lb,.adspace-leaderboard,.adspace-lr,.adspace-mpu,.adspace-mtb,.adspace-top,.adspace-widget,.adspace1,.adspace180,.adspace2,.adspace728x90,.adspace_2,.adspace_bottom,.adspace_buysell,.adspace_right,.adspace_rotate,.adspace_skyscraper,.adspace_top,.adspacer,.adspacer2,.adspan,.adspanel,.adspecial390,.adspeed,.adsplash-160x600,.adsplat,.adsponsor,.adspop,.adspost,.adspot,.adspot-desk,.adspot-title,.adspot1,.adspot200x90,.adspot468x60,.adspot728x90,.adspotGrey,.adspot_468x60,.adspot_728x90,.adsprefooter,.adspreview,.adsrecnode,.adsresponsive,.adsright,.adss,.adss-rel,.adssidebar2,.adsskyscraper,.adsslotcustom2,.adsslotcustom4,.adssmall,.adssquare,.adssquare2,.adsterra,.adstext,.adstextpad,.adstipt,.adstitle,.adstop,.adstory,.adstrip,.adstyle,.adsverting,.adsvideo,.adswallpapr,.adswidget,.adswiper,.adswitch,.adswordatas,.adsystem_ad,.adszone,.adt-300x250,.adt-300x600,.adt-728x90,.adtab,.adtc,.adtech,.adtech-ad-widget,.adtech-banner,.adtech-boxad,.adtech-copy,.adtech-video-2,.adtech-wrapper,.adtechMobile,.adtech_wrapper,.adtester-container,.adtext-bg,.adtext_gray,.adtext_horizontal,.adtext_onwhite,.adtext_vertical,.adtext_white,.adtextleft,.adtextright,.adthrive-ad,.adthrive-header,.adthrive-header-container,.adthrive-placeholder-content,.adthrive-placeholder-header,.adthrive-placeholder-static-sidebar,.adthrive-placeholder-video,.adthrive-sidebar,.adthrive_custom_ad,.adtile,.adtips,.adtips1,.adtoggle,.adtop,.adtop-border,.adtops,.adtower,.adtravel,.adttl,.adtxt,.adtxtlinks,.adult-adv,.adun,.adunit,.adunit-300-250,.adunit-active,.adunit-adbridg,.adunit-container,.adunit-container_sitebar_1,.adunit-googleadmanager,.adunit-lazy,.adunit-middle,.adunit-parent,.adunit-purch,.adunit-side,.adunit-title,.adunit-top,.adunit-wrap,.adunit-wrapper,.adunit125,.adunit160,.adunit300x250,.adunit468,.adunitContainer,.adunit_300x250,.adunit_728x90,.adunit_content,.adunit_footer,.adunit_leaderboard,.adunit_rectangle,.adv--h600,.adv--square,.adv-120x600,.adv-160,.adv-160x600,.adv-200-200,.adv-250-250,.adv-300,.adv-300-1,.adv-300-250,.adv-300-600,.adv-300x250,.adv-300x250-generic,.adv-336-280,.adv-4,.adv-468-60,.adv-468x60,.adv-700,.adv-728,.adv-728-90,.adv-970,.adv-970-250,.adv-970-250-2,.adv-980x60,.adv-ad,.adv-ads-selfstyle,.adv-aside,.adv-background,.adv-bar,.adv-block,.adv-block-container,.adv-border,.adv-bottom,.adv-box-holder,.adv-box-wrapper,.adv-carousel,.adv-center,.adv-click,.adv-cont,.adv-cont1,.adv-conteiner,.adv-dvb,.adv-format-1,.adv-full-width,.adv-google,.adv-gpt-desktop-wrapper,.adv-gpt-wrapper-desktop,.adv-halfpage,.adv-header,.adv-holder,.adv-in-body,.adv-inset,.adv-intext,.adv-intext-label,.adv-key,.adv-label,.adv-leaderboard,.adv-leaderboard-banner,.adv-link--left,.adv-link--right,.adv-margin-bottom,.adv-margin-top,.adv-mobile-wrapper,.adv-mpu,.adv-outer,.adv-p,.adv-right,.adv-right-300,.adv-rotator,.adv-script-container,.adv-sidebar,.adv-skin-spacer,.adv-slot-container,.adv-text,.adv-top,.adv-top-banner,.adv-top-container,.adv-top-page,.adv-top-skin,.adv-under-video,.adv-unit,.adv-videoad,.adv-x61,.adv1,.adv120,.adv200,.adv250,.adv300,.adv300-250,.adv300-250-2,.adv300-70,.adv300left,.adv300x100,.adv300x250,.adv300x60,.adv300x70,.adv336,.adv350,.adv460x60,.adv468,.adv468x90,.adv728,.adv728x90,.advBottom,.advBottomHome,.advInt,.advLeaderboard,.advRightBig,.advSquare,.advText,.advTop,.adv_120,.adv_120_600,.adv_120x240,.adv_120x600,.adv_160_600,.adv_160x600,.adv_250,.adv_250_250,.adv_300,.adv_300_300,.adv_300_top,.adv_300x250,.adv_336_280,.adv_468_60,.adv_728_90,.adv_728x90,.adv__box,.adv__leaderboard,.adv__wrapper,.adv_aff,.adv_banner,.adv_banner_hor,.adv_bg,.adv_box_narrow,.adv_here,.adv_img,.adv_leaderboard,.adv_left,.adv_link,.adv_main_middle,.adv_main_middle_wrapper,.adv_main_right_down,.adv_main_right_down_wrapper,.adv_medium_rectangle,.adv_message,.adv_msg,.adv_outbrain,.adv_panel,.adv_right,.adv_side1,.adv_side2,.adv_sidebar,.adv_title,.adv_top,.adv_top_table,.adv_txt,.adv_under_menu,.advads-background,.advads-close-button,.advads-parallax-container,.advads-sticky,.advads-target,.advads_ad_widget-11,.advads_ad_widget-18,.advads_ad_widget-2,.advads_ad_widget-21,.advads_ad_widget-3,.advads_ad_widget-4,.advads_ad_widget-5,.advads_ad_widget-8,.advads_ad_widget-9,.advads_widget,.advance-ads,.advart,.advbig,.adver-block,.adver-header,.adver-left,.adver-text,.adverTag,.adverTxt,.adver_bot,.adver_cont_below,.adver_home,.advert--background,.advert--banner-wrap,.advert--fallback,.advert--header,.advert--in-sidebar,.advert--inline,.advert--leaderboard,.advert--loading,.advert--outer,.advert--placeholder,.advert--right-rail,.advert--square,.advert-100,.advert-120x90,.advert-160x600,.advert-300,.advert-300-side,.advert-728,.advert-728-90,.advert-728x90,.advert-article-bottom,.advert-autosize,.advert-background,.advert-banner,.advert-banner-container,.advert-banner-holder,.advert-bannerad,.advert-bar,.advert-bg-250,.advert-block,.advert-border,.advert-bot-box,.advert-bottom,.advert-box,.advert-bronze,.advert-bronze-btm,.advert-btm,.advert-card,.advert-center,.advert-col,.advert-col-center,.advert-competitions,.advert-content,.advert-content-item,.advert-dfp,.advert-featured,.advert-footer,.advert-gold,.advert-group,.advert-head,.advert-header-728,.advert-horizontal,.advert-image,.advert-info,.advert-inner,.advert-label,.advert-leaderboard,.advert-leaderboard2,.advert-loader,.advert-mini,.advert-mpu,.advert-mrec,.advert-note,.advert-out-left,.advert-out-top,.advert-overlay,.advert-pane,.advert-panel,.advert-placeholder,.advert-placeholder-wrapper,.advert-preview-wrapper,.advert-right,.advert-row,.advert-section,.advert-sidebar,.advert-silver,.advert-sky,.advert-skyright,.advert-skyscraper,.advert-slider,.advert-spot-container,.advert-sticky-wrapper,.advert-stub,.advert-text,.advert-three,.advert-title,.advert-top,.advert-top-footer,.advert-txt,.advert-unit,.advert-wide,.advert-wingbanner-left,.advert-wingbanner-right,.advert-wrap,.advert-wrap1,.advert-wrap2,.advert-wrapper,.advert-wrapper-exco,.advert.box,.advert.desktop,.advert.mobile,.advert.mpu,.advert.skyscraper,.advert1,.advert120,.advert1Banner,.advert300,.advert4,.advert5,.advert728_90,.advert728x90,.advert8,.advertBanner,.advertBar,.advertBlock,.advertBottom,.advertBox,.advertCaption,.advertColumn,.advertCont,.advertContainer,.advertDownload,.advertFullBanner,.advertHeader,.advertHeadline,.advertLink,.advertLink1,.advertMPU,.advertMiddle,.advertMpu,.advertRight,.advertSideBar,.advertSign,.advertSlot,.advertSuperBanner,.advertText,.advertTitleSky,.advertWrapper,.advert_300x250,.advert_336,.advert_468x60,.advert__container,.advert__fullbanner,.advert__leaderboard,.advert__mpu,.advert__sidebar,.advert__tagline,.advert_banner,.advert_banners,.advert_block,.advert_box,.advert_caption,.advert_cont,.advert_container,.advert_div,.advert_foot,.advert_header,.advert_home_300,.advert_img,.advert_label,.advert_leaderboard,.advert_line,.advert_main,.advert_main_bottom,.advert_mpu,.advert_nav,.advert_note,.advert_pos,.advert_small,.advert_span,.advert_text,.advert_title,.advert_top,.advert_txt,.advert_wrapper,.advertbar,.advertbox,.adverteaser,.advertembed,.adverthome,.adverticum_container,.adverticum_content,.advertis,.advertis-left,.advertis-right,.advertise-1,.advertise-2,.advertise-box,.advertise-here,.advertise-horz,.advertise-info,.advertise-leaderboard,.advertise-link,.advertise-list,.advertise-pic,.advertise-small,.advertise-square,.advertise-top,.advertise-vert,.advertiseContainer,.advertiseHere,.advertiseText,.advertise_ads,.advertise_box,.advertise_brand,.advertise_carousel,.advertise_here,.advertise_link,.advertise_link_sidebar,.advertise_links,.advertise_sec,.advertise_text,.advertise_txt,.advertise_verRight,.advertisebtn,.advertisedBy,.advertisement-1,.advertisement-2,.advertisement-250,.advertisement-300,.advertisement-300x250,.advertisement-amazon-banner,.advertisement-background,.advertisement-banner,.advertisement-bottom,.advertisement-box,.advertisement-card,.advertisement-cell,.advertisement-container,.advertisement-content,.advertisement-copy,.advertisement-footer,.advertisement-google,.advertisement-header,.advertisement-holder,.advertisement-image,.advertisement-label,.advertisement-layout,.advertisement-leaderboard,.advertisement-leaderboard-lg,.advertisement-left,.advertisement-link,.advertisement-nav,.advertisement-placeholder,.advertisement-position1,.advertisement-right,.advertisement-sidebar,.advertisement-space,.advertisement-sponsor,.advertisement-tag,.advertisement-text,.advertisement-title,.advertisement-top,.advertisement-txt,.advertisement-wrapper,.advertisement.leaderboard,.advertisement.rectangle,.advertisement.under-article,.advertisement1,.advertisement300x250,.advertisement468,.advertisementBackground,.advertisementBanner,.advertisementBar,.advertisementBlock,.advertisementBox,.advertisementBoxBan,.advertisementContainer,.advertisementFull,.advertisementHeader,.advertisementImg,.advertisementLabel,.advertisementPanel,.advertisementRotate,.advertisementSection,.advertisementSmall,.advertisementText,.advertisementTop,.advertisement_160x600,.advertisement_300x250,.advertisement_728x90,.advertisement__header,.advertisement__label,.advertisement__leaderboard,.advertisement__wrapper,.advertisement_box,.advertisement_container,.advertisement_footer,.advertisement_header,.advertisement_horizontal,.advertisement_mobile,.advertisement_part,.advertisement_post,.advertisement_section_top,.advertisement_text,.advertisement_top,.advertisement_wrapper,.advertisements-link,.advertisements-right,.advertisements-sidebar,.advertisements_heading,.advertisementwrap,.advertiser-links,.advertising--row,.advertising--top,.advertising-banner,.advertising-block,.advertising-container,.advertising-container-top,.advertising-content,.advertising-disclaimer,.advertising-fixed,.advertising-header,.advertising-iframe,.advertising-inner,.advertising-leaderboard,.advertising-lrec,.advertising-mediumrectangle,.advertising-mention,.advertising-middle,.advertising-middle-i,.advertising-notice,.advertising-right,.advertising-right-d,.advertising-right-i,.advertising-section,.advertising-side,.advertising-side-hp,.advertising-srec,.advertising-top,.advertising-top-banner,.advertising-top-box,.advertising-top-category,.advertising-top-desktop,.advertising-vert,.advertising-wrapper,.advertising1,.advertising160,.advertising2,.advertising300_home,.advertising300x250,.advertising728,.advertising728_3,.advertisingBanner,.advertisingBlock,.advertisingLabel,.advertisingLeft,.advertisingLegend,.advertisingLrec,.advertisingMob,.advertisingRight,.advertisingSlide,.advertisingTable,.advertisingTop,.advertising_300x250,.advertising_banner,.advertising_block,.advertising_bottom_box,.advertising_box_bg,.advertising_header_1,.advertising_hibu_lef,.advertising_hibu_mid,.advertising_hibu_rig,.advertising_horizontal_title,.advertising_images,.advertising_square,.advertising_top,.advertising_vertical_title,.advertising_widget,.advertising_wrapper,.advertisingarea,.advertisingarea-homepage,.advertisingimage,.advertisingimage-extended,.advertisingimageextended,.advertisment-banner,.advertisment-label,.advertisment-left-panal,.advertisment-module,.advertisment-rth,.advertisment-top,.advertismentBox,.advertismentContainer,.advertismentContent,.advertismentText,.advertisment_bar,.advertisment_caption,.advertisment_full,.advertisment_notice,.advertisment_two,.advertize,.advertize_here,.advertizing-banner,.advertlabel,.advertleft,.advertlink,.advertnotice,.advertop,.advertorial-2,.advertorial-block,.advertorial-image,.advertorial-promo-box,.advertorial-teaser,.advertorial-wrapper,.advertorial2,.advertorial_728x90,.advertorial_red,.advertorialitem,.advertorialtitle,.advertorialview,.advertorialwidget,.advertouter,.advertplay,.adverts--banner,.adverts-125,.adverts-inline,.adverts2,.advertsLeaderboard,.adverts_RHS,.adverts_footer_advert,.adverts_footer_scrolling_advert,.adverts_header_advert,.adverts_side_advert,.advertspace,.adverttop,.advfrm,.advg468,.advhere,.adviewDFPBanner,.advimg160600,.advimg300250,.advn_zone,.advoice,.advr,.advr-wrapper,.advr_top,.advrectangle,.advrst,.advslideshow,.advspot,.advt,.advt-banner-3,.advt-block,.advt-right,.advt-sec,.advt300,.advt720,.advtBlock,.advtMsg,.advt_160x600,.advt_468by60px,.advt_indieclick,.advt_single,.advt_widget,.advtbox,.advtcell,.advtext,.advtimg,.advtitle,.advtop,.advtop-leaderbord,.advttopleft,.advv_box,.adwblue,.adwert,.adwhitespace,.adwide,.adwideskyright,.adwithspace,.adwobs,.adwolf-holder,.adword-box,.adword-structure,.adword-text,.adword-title,.adword1,.adwordListings,.adwords-container,.adwordsHeader,.adwords_in_content,.adworks,.adwrap,.adwrap-mrec,.adwrap-widget,.adwrap_MPU,.adwrapper--desktop,.adwrapper-lrec,.adwrapper1,.adwrapper948,.adwrappercls,.adwrappercls1,.adx-300x250-container,.adx-300x600-container,.adx-ads,.adx-wrapper,.adx-wrapper-middle,.adx_center,.adxli,.adz-horiz,.adz-horiz-ext,.adz2,.adz728x90,.adzbanner,.adzone,.adzone-footer,.adzone-preview,.adzone-sidebar,.adzone_skyscraper,.ae-player__itv,.af-block-ad-wrapper,.af-label-ads,.afc-box,.aff-big-unit,.aff-iframe,.afffix-custom-ad,.affiliate-ad,.affiliate-footer,.affiliate-link,.affiliate-sidebar,.affiliate-strip,.affiliateAdvertText,.affiliate_ad,.affiliate_header_ads,.after-content-ad,.after-intro-ad,.after-post-ads,.after-story-ad-wrapper,.after_ad,.after_comments_ads,.after_content_banner_advert,.after_post_ad,.afw_ad,.aggads-ad,.ahe-ad,.ai-top-ad-outer,.aisle-ad,.ajax_ad,.ajaxads,.ajdg_bnnrwidgets,.ajdg_grpwidgets,.alice-adslot,.alice-root-header-ads__ad--top,.align.Ad,.alignads,.alt_ad,.alt_ad_block,.altad,.am-adContainer,.am-adslot,.am-bazaar-ad,.amAdvert,.am_ads,.amazon-auto-links,.amazon_ad,.amazonads,.ami-video-wrapper,.amp-ad,.amp-ad-container,.amp-ad__wrapper,.amp-ads,.amp-ads-container,.amp-adv-container,.amp-adv-wrapper,.amp-article-ad-element,.amp-flying-carpet-text-border,.amp-sticky-ad-custom,.amp-sticky-ads,.amp-unresolved,.ampFlyAdd,.amp_ad_1,.amp_ad_header,.amp_ad_wrapper,.ampad,.ampexcoVideoPlayer,.ampforwp-sticky-custom-ad,.anchor-ad,.anchor-ad-wrapper,.anchorAd,.anchored-ad-widget,.aniview-inline-player,.annonstext,.anyad,.anzeige_banner,.aoa_overlay,.ap-ad-block,.ape-ads-container,.apexAd,.apiAds,.aplvideo {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.app-ad,.app-container > .questions-container-banner,.app_ad_unit,.app_advertising_skyscraper,.app_nexus_banners_common,.ar-header-m-ad,.arc-ad-wrapper,.arcAdsBox,.arcAdsContainer,.arcad-block-container,.archive-ad,.archive-ads,.archive-radio-ad-container,.areaAd,.area_ad,.area_ad03,.area_ad07,.area_ad09,.area_ad2,.arena-ad-col,.arriba-publicidad,.art-text-ad,.artAd,.artAdInner,.art_ads,.artcl_ad_dsk,.article--ad,.article--content-ad,.article-ad,.article-ad-align-left,.article-ad-blk,.article-ad-bottom,.article-ad-box,.article-ad-cont,.article-ad-container,.article-ad-holder,.article-ad-horizontal,.article-ad-left,.article-ad-legend,.article-ad-main,.article-ad-placeholder,.article-ad-placement,.article-ad-primary,.article-ad-row,.article-ad-row-inner,.article-ad-section,.article-ads,.article-advert--text,.article-advert-container,.article-advert-dfp,.article-aside-ad,.article-aside-top-ad,.article-connatix-wrap,.article-content-ad,.article-content-adwrap,.article-detail-ad,.article-first-ad,.article-footer-ad,.article-footer-ad-container,.article-footer__ad,.article-footer__ads,.article-header-ad,.article-header__railAd,.article-inline-ad,.article-mid-ad,.article-small-ads,.article-sponsor,.article-sponsorship-header,.article-taboola,.article-top-ad,.articleADbox,.articleAd,.articleAdHeader,.articleAdTopRight,.articleAds,.articleAdsL,.articleAdvert,.articleBottom-ads,.articleEmbeddedAdBox,.articleFooterAd,.articleHeaderAd,.articleTop-ads,.articleTopAd,.article_OutbrainContent,.article__ad-holder,.article__adblock,.article__adhesion,.article__adv,.article_ad_1,.article_ad_2,.article_ad_text,.article_ad_top,.article_adbox,.article_ads_banner,.article_bottom-ads,.article_bottom_ad,.article_google-ad,.article_google_ads,.article_inline_ad,.article_inner_ad,.article_mpu,.article_tower_ad,.articlead,.articleads,.articles-ad-block,.artnet-ads-ad,.asg-vast-overlay,.aside-ad,.aside-ad-space,.aside-ad-wrapper,.aside-ads,.aside-ads-top,.asideAd,.aside_ad,.aside_ad_large,.aspace-300x169,.aspace-300x250,.async-ad-container,.at-header-ad,.at-sidebar-ad,.atf-ad,.atfAds,.atf_adWrapper,.atomsAdsCellModel,.attachment-advert_home,.attachment-dm-advert-bronze,.attachment-dm-advert-gold,.attachment-dm-advert-silver,.attachment-sidebar-ad,.attachment-squareAd,.avadvslot,.avap-ads-container,.avert--leaderboard,.avert--sidebar,.avert-text,.avp-p-wrapper,.azk-adsense,.b-ad,.b-ad-main,.b-adhesion,.b-adv,.b-advert,.b-advertising__down-menu,.b-aside-ads,.b-blockadblock,.b-header-ad,.b-right-rail--ads,.bAdvertisement,.b_adLastChild,.b_ads,.b_ads_cont,.b_ads_r,.b_ads_top,.background-ad,.background-ads,.background-adv,.backgroundAd,.bam-ad-slot,.bank-rate-ad,.banmanad,.banner--ad,.banner-125,.banner-300,.banner-300-100,.banner-300-250,.banner-300x250,.banner-300x600,.banner-320-100,.banner-336x280,.banner-468,.banner-468-60,.banner-468x60,.banner-728,.banner-728x90,.banner-ad,.banner-ad-b,.banner-ad-below,.banner-ad-block,.banner-ad-bottom-fixed,.banner-ad-contianer,.banner-ad-footer,.banner-ad-image,.banner-ad-inner,.banner-ad-label,.banner-ad-large,.banner-ad-pos,.banner-ad-row,.banner-ad-skeleton-box,.banner-ad-space,.banner-ad-wrap,.banner-ad-wrapper,.banner-ad2,.banner-ads-right,.banner-ads-sidebar,.banner-adsense,.banner-adv,.banner-advert,.banner-advert-wrapper,.banner-advertisement,.banner-advertising,.banner-adverts,.banner-asd__title,.banner-billboard,.banner-bottom,.banner-buysellads,.banner-footer,.banner-on-player,.banner-publicidad,.banner-sponsorship,.banner-top-ads,.banner120x600,.banner160,.banner160x600,.banner200x200,.banner300,.banner300x250,.banner336,.banner336x280,.banner350,.banner468,.banner728,.banner728-ad,.banner728-container,.banner728x90,.bannerADS,.bannerADV,.bannerAd,.bannerAd-module,.bannerAd3,.bannerAdContainer,.bannerAdLeaderboard,.bannerAdRectangle,.bannerAdSearch,.bannerAdSidebar,.bannerAdTower,.bannerAdWrap,.bannerAds,.bannerAdvert,.bannerAside,.bannerGoogle,.bannerRightAd,.banner_160x600,.banner_240x400,.banner_250x250,.banner_300_250,.banner_300x250,.banner_300x600,.banner_468_60,.banner_468x60,.banner_728_90,.banner_ad-728x90,.banner_ad_300x250,.banner_ad_728x90,.banner_ad_container,.banner_ad_footer,.banner_ad_full,.banner_ad_leaderboard,.banner_ad_link,.banner_ad_wrapper,.banner_ads1,.banner_inner,.banner_reklam,.banner_reklam2,.banner_slot,.banner_top_index,.bannerad,.bannerad3,.banneradd,.bannerads,.banneradv,.bannerandads,.bannergroup-ads,.bannermpu,.banners-container,.banners_ad,.banners_wrap,.bannervcms,.bar_ad,.base-ad-mpu,.base-ad-slot,.base-ad-top,.base-page_center > .banerBottom,.base-page_center > .banerTop,.base-page_container > .banerRight,.base_ad,.baseboard-ad,.bb-ad,.bb-ad-mrec,.bb-lt-adv,.bb-pub-120_600,.bb-pub-300_250,.bbccom-advert,.bbccom_advert,.bcom_ad,.before-header-ad,.before-injected-ad,.below-ad-border,.below-article-ad-sidebar,.below-nav-ad,.belowMastheadWrapper,.belowNavAds,.below_game_ad,.below_nav_ad_wrap,.below_player_ad,.bg-ad-gray,.bg-ad-left,.bg-ad-right,.bg-ads,.bg-ads-space,.bg-grey-ad,.bgAdBlue,.bg_ad,.bg_ads,.bgcolor_ad,.bgr-ad-leaderboard,.bh-ads,.bh_ad_container,.bidbarrel-ad,.big-ad,.big-ads,.big-advertisement,.big-banner-block,.big-box-ad,.big-right-ad,.bigAd,.bigAdContainer,.bigAds,.bigAdvBanner,.bigBoxAdArea,.bigCubeAd,.big_ad,.big_ad2,.big_ads,.bigad,.bigad1,.bigad2,.bigadleft,.bigadright,.bigads,.bigadtxt1,.bigbox-ad,.bigbox.ad,.bigbox_ad,.bigboxad,.bigsponsor,.billboard-ad,.billboard-ad-one,.billboard-ad-space,.billboard-ads,.billboard.ad,.billboardAd,.billboard__advert,.billboard_ad,.billboard_ad_wrap,.billboard_adwrap,.bing-ads-wrapper,.bing-native-ad,.bl300_ad,.bl_publi_top,.block--ad,.block--ads,.block--dfp,.block--doubleclick,.block--simpleads,.block-ad-entity,.block-ad-header,.block-ad-leaderboard,.block-ad-wrapper,.block-admanager,.block-ads,.block-ads-bottom,.block-ads-home,.block-ads-system,.block-ads-top,.block-ads-yahoo,.block-ads1,.block-ads2,.block-ads3,.block-ads_top,.block-adsense,.block-adtech,.block-adv,.block-advert,.block-advertisement,.block-advertisement-banner-block,.block-advertising,.block-adzerk,.block-bg-advertisement,.block-boxes-ad,.block-cdw-google-ads,.block-dfp,.block-dfp-ad,.block-dfp-blocks,.block-dfp-midcentral_home,.block-dfp-roba_pagina_top_home,.block-doubleclick_ads,.block-fusion-ads,.block-google-admanager,.block-openads,.block-openx,.block-quartz-ads,.block-reklama,.block-simpleads,.block-skyscraper-ad,.block-sponsored-links,.block-the-dfp,.block-wrap-ad,.block-yt-ads,.blockAd,.blockAds,.blockAdvertise,.block__ads__ad,.block_ad,.block_ad1,.block_ad303x1000_left,.block_ad303x1000_right,.block_ad_middle,.block_ad_top,.block_ads,.block_adslot,.block_adv,.block_advert,.block_article_ad,.blockad,.blocked-ads,.bloco-anuncios,.bloco-anuncios__banner,.bloco-anuncios__publicidade,.blog-ad,.blog-ad-image,.blog-ads,.blog-advertisement,.blog-publi,.blogAd,.blogAdvertisement,.blog_ad,.blogads,.bloquepubli,.bmd_advert,.bn_ads,.bnr-bottom,.bnr_ad,.body-ad,.body-ads,.bodyAd,.body_ad,.bodyads,.bodyads2,.borde_publi,.bordered-ad,.botAd,.bot_ad,.bot_ads,.bottom-ad,.bottom-ad--bigbox,.bottom-ad-banner,.bottom-ad-box,.bottom-ad-container,.bottom-ad-desktop,.bottom-ad-large,.bottom-ad-placeholder,.bottom-ad-wrapper,.bottom-ad-zone,.bottom-ad2,.bottom-ads,.bottom-ads-container,.bottom-ads-sticky,.bottom-ads-wrapper,.bottom-adv,.bottom-adv-container,.bottom-banner-ad,.bottom-bnr,.bottom-fixed-ad,.bottom-left-ad,.bottom-main-adsense,.bottom-mobile-ad,.bottom-mpu-ad,.bottom-post-ad-space,.bottom-post-ads,.bottom-right-advert,.bottom-side-advertisement,.bottomAd,.bottomAdBlock,.bottomAdContainer,.bottomAds,.bottomAdvert,.bottomAdvertisement,.bottom_ad_placeholder,.bottom_ad_responsive,.bottom_ads,.bottom_adsense,.bottom_adspace,.bottom_banner_ad,.bottom_banner_advert_text,.bottom_bar_ads,.bottom_left_advert,.bottom_right_ad,.bottom_rightad,.bottom_side_ad,.bottom_sponsor,.bottom_sticky_ad,.bottomad,.bottomads,.bottomadvert,.botton_advertisement,.box-ad,.box-ad-middle,.box-ads,.box-adsense,.box-adsense-top,.box-advert,.box-advertisement,.box-advertising,.box-adverts,.box-bannerads,.box-bannerads-leaderboard-fallback,.box-entry-ad,.box-fixed-ads,.box-footer-ad,.box-outbrain,.boxAd,.boxAdContainer,.boxAds2,.boxAdvertisement,.boxOverContent__banner,.boxSponsor,.box_ad,.box_ad_container,.box_ad_content,.box_ad_horizontal,.box_ad_spacer,.box_ad_wrap,.box_adv,.box_adv_728,.box_advert,.box_advertising,.box_content_ad,.box_content_ads,.box_layout_ad,.box_publicidad,.box_sidebar-ads,.boxad,.boxad1,.boxad2,.boxadcont,.boxads,.boxadv,.bps-ad-wrapper,.bps-advertisement,.bq_adleaderboard,.bq_rightAd,.br-ad,.br-ad-wrapper,.brandpost_inarticle,.breadads,.break-ads,.breaker-ad,.breakerAd,.briefNewsAd,.brn-ads-box,.brn-ads-mobile-container,.brn-ads-sticky-wrapper,.broker-ad,.browse-ad-container,.browsi-ad,.btm_ad,.btn_ad,.bump-ad,.bunyad-ad,.buttom_ad,.buttom_ad_size,.button-ad,.button-ads,.buttonAd,.buttonAdSpot,.buttonAds,.button_ad,.button_ads,.button_advert,.button_left_ad,.button_right_ad,.buttonad,.buttonadbox,.buttonads,.buySellAdsContainer,.buysellAds,.buzzAd,.c-Ad,.c-Adhesion,.c-ArticleAds,.c-ad--adStickyContainer,.c-ad--bigbox,.c-ad--header,.c-ad-flex,.c-ad-fluid,.c-ad-placeholder,.c-ad-size2,.c-ad-size3,.c-adDisplay,.c-adDisplay_container,.c-adOmnibar,.c-adSense,.c-adSkyBox,.c-adbutler-ad,.c-adbutler-ad__wrapper,.c-adcontainer,.c-adunit,.c-adunit--billboard,.c-adunit--first,.c-adunit__container,.c-adv3__inner,.c-advert,.c-advert-app,.c-advert-superbanner,.c-advertisement,.c-advertisement--billboard,.c-advertisement--rectangle,.c-advertising,.c-advertising__banner-area,.c-adverts,.c-advscrollingzone,.c-box--advert,.c-gallery-vertical__advert,.c-googleadslot,.c-gpt-ad,.c-header__ad,.c-header__advert-container,.c-pageArticleSingle_bottomAd,.c-prebid,.c-sidebar-ad-stream__ad,.c-sitenav-adslot,.c-sitenavPlaceholder__ad,.c2_outbrain,.c_anun_pub,.c_nt_ad,.cableads,.cactus-ads,.cactus-header-ads,.caja_ad,.caja_cuponisimo_slider200,.california-ad,.california-sidebar-ad,.calloutAd,.carbon-ad,.carbon_ads,.carbonad,.carbonad-tag,.carbonads-widget,.card--ad,.card--article-ad,.card-ad,.card-ads,.card-article-ads,.cardAd,.catalog_ads,.category-ad:not(html):not(body):not(.post),.category-ads:not(html):not(body):not(.post),.categoryMosaic-advertising,.categoryMosaic-advertisingText,.cazAd,.cb-ad-banner,.cb-ad-container,.cbd_ad_manager,.cbs-ad,.cc-advert,.center-ad,.center-ad-long,.center-tag-rightad,.centerAD,.centerAd,.centerAds,.center_ad,.center_add,.center_ads,.center_inline_ad,.centerad,.centerads,.centeradv,.centered-ad,.ch-ad-item,.channel--ad,.channel-ad,.channel-adv,.channel-icon--ad,.channel-icon__ad-buffer,.channel-sidebar-big-box-ad,.channelBoxAds,.channel_ad_2016,.chapter-bottom-ads,.chapter-top-ads,.chart_ads,.chitika-ad,.cjpopup,.ck-anyclips,.ck-anyclips-article,.cl-ad-billboard,.clAdPlacementAnchorWrapper,.clever-core-ads,.click-track.partner,.clickforceads,.clickio-side-ad,.client-ad,.clsy-c-advsection,.cms-ad,.cn-advertising,.cnbcHeaderAd,.cnc-ads,.cnt-pub,.cnt-publi,.cnt-publicidad,.cnx-player,.coinzilla-ad,.coinzilla-ad--mobile,.col-ad,.col-ad-hidden,.col-has-ad,.col-line-ad,.col2-ads,.colAd,.colBoxAdframe,.colBoxDisplayAd,.col_ad,.colads,.collapsed-ad,.colombiaAd,.columnAd,.columnAdvert,.columnBoxAd,.columnRightAdvert,.combinationAd,.comment-ad,.comment-ad-wrap,.comment-advertisement,.comment_ad,.comment_ad_box,.commercialAd,.companion-ad,.companion-ads,.companionAd,.companion_ad,.complex-ad,.component-ar-horizontal-bar-ad,.component-header-sticky-ad,.component-outbrain,.components-Ad-___Ad__ad,.con_ads,.connatix,.connatix-container,.connatix-hodler,.connatix-holder,.connatix-main-container,.connatix-wysiwyg-container,.consoleAd,.cont-ad,.cont_mer_publicidades,.cont_publicidad,.container--ad,.container--ads,.container--ads-leaderboard-atf,.container--advert,.container--bannerAd,.container-ad-600,.container-ad-left,.container-adds,.container-adrotate,.container-adwords,.container-banner-ads,.container-bottom-ad,.container-content__container-relatedlinks,.container-first-ads,.container-lower-ad,.container-rectangle-ad,.container-top-adv,.containerAdsense,.containerOas,.containerSqAd,.container__ad,.container__box--ads,.container_ad,.container_ad_v,.container_publicidad,.containerads,.contains-ad,.contains-advertisment,.contenedorAdcentrado,.contenedor_publicidad,.contenedor_superior_publi,.content--right-ads,.content-ad,.content-ad-article,.content-ad-box,.content-ad-container,.content-ad-left,.content-ad-right,.content-ad-side,.content-ad-widget,.content-ad-wrapper,.content-ads,.content-ads-bottom,.content-advert,.content-advertising,.content-advertisment,.content-bottom-ad,.content-bottom-mpu,.content-cliff__ad,.content-cliff__ad-container,.content-contentad,.content-footer-ad,.content-footer-ad-block,.content-header-ad,.content-item-ad-top,.content-kuss-ads,.content-leaderboard-ad,.content-leaderboard-ads,.content-page-ad_wrap,.content-result-ads,.content-top-ad-item,.content1-ad,.content2-ad,.contentAd,.contentAd--sb1,.contentAdBox,.contentAdContainer,.contentAdFoot,.contentAdIndex,.contentAdsCommon,.contentAdsWrapper,.contentAdvertisement,.contentTopAd,.contentTopAdSmall,.contentTopAds,.content__ad,.content__ad__content,.content_ad,.content_ad_728,.content_ad_head,.content_ad_side,.content_adsense,.content_adsq,.content_advert,.content_advertising,.content_advt,.content_bottom_adsense,.content_gpt_caja1_ads,.content_gpt_caja2_ads,.content_gpt_top_ads,.content_inner_ad,.content_left_advert,.contentad,.contentad-end,.contentad-home,.contentad-storyad-1,.contentad-superbanner-2,.contentad-top,.contentad2,.contentad300x250,.contentad_right_col,.contentadarticle,.contentadfloatl,.contentadleft,.contentads1,.contentads2,.contentbox_ad,.contentleftad,.contents-ads-bottom-left,.contest_ad,.context-ads,.contextualAds,.contextual_ad_unit,.contpubliSuper,.coreAdsPlacer,.cornerad,.counterAdblocks,.cpmstarHeadline,.cpmstarText,.crain-advertisement,.criteo-ad,.crm-adcontain,.crumb-ad,.cspAd,.css--ad,.ct-ads,.ct-advert,.ct-advertising-footer,.ct-bottom-ads,.ct_ad,.ct_ampad,.cta-ad,.ctn-advertising,.cube-ad,.cubeAd,.cube_ad,.cube_ads,.custom-ad-area,.custom-ad-container,.custom-ads,.custom-advert-banner,.custom-sticky-ad-container,.customAd,.custom_ad,.custom_ad_responsive,.custom_ads,.custom_ads_positions,.custom_banner_ad,.custom_footer_ad,.customadvert,.customized_ad_module,.cwAdvert,.cxAdvertisement,.d1-top-ad,.d3-c-adblock,.d3-o-adv-block,.da-custom-ad-box,.dac__banner__wrapper,.dac__mpu-card,.daily-adlabel,.dart-ad,.dart-ad-content,.dart-ad-grid,.dart-ad-title,.dart-advertisement,.dart-leaderboard,.dart-leaderboard-top,.dartAdImage,.dart_ad,.dart_tag,.dartad,.dartadbanner,.dartadvert,.dartiframe,.dc-ad,.dc-banner,.dc-half-banner,.dc-widget-adv-125,.dcmads,.dd-ad,.dd-ad-container,.deadblocker-header-bar,.deadblocker-header-bar-inner,.deckAd,.deckads,.default_rc_theme,.demand-supply,.des-adv,.desktop-ad,.desktop-ad-banner,.desktop-ad-container,.desktop-ad-inpage,.desktop-ad-slider,.desktop-ads,.desktop-adunit,.desktop-advert,.desktop-article-top-ad,.desktop-aside-ad-hide,.desktop-lazy-ads,.desktop-sidebar-ad-wrapper,.desktop-top-ad-wrapper,.desktop.ad,.desktopAd,.desktop_ad,.desktop_mpu,.desktop_only_ad,.desktopads,.detail-ad,.detail-ads,.detail__ad--small,.detail_ad,.detail_article_ad,.detail_top_advert,.details-advert,.dfm-featured-bottom-flex-container,.dfp-ad,.dfp-ad-bigbox2-wrap,.dfp-ad-container,.dfp-ad-container-box,.dfp-ad-container-wide,.dfp-ad-full,.dfp-ad-hideempty,.dfp-ad-lazy,.dfp-ad-lead2-wrap,.dfp-ad-lead3-wrap,.dfp-ad-midbreaker-wrap,.dfp-ad-midbreaker2-wrap,.dfp-ad-placeholder,.dfp-ad-rect,.dfp-ad-region-1,.dfp-ad-region-2,.dfp-ad-tags,.dfp-ad-top-wrapper,.dfp-ad-widget,.dfp-ads-ad-article-middle,.dfp-ads-embedded,.dfp-adspot,.dfp-article-ad,.dfp-banner,.dfp-banner-slot,.dfp-billboard-wrapper,.dfp-block,.dfp-bottom,.dfp-button {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.dfp-close-ad,.dfp-double-mpu,.dfp-dynamic-tag,.dfp-fixedbar,.dfp-here-bottom,.dfp-here-top,.dfp-interstitial,.dfp-leaderboard,.dfp-leaderboard-container,.dfp-mrec,.dfp-panel,.dfp-plugin-advert,.dfp-position,.dfp-queue,.dfp-slot,.dfp-slot-wallpaper,.dfp-space,.dfp-super-leaderboard,.dfp-top,.dfp-top1,.dfp-top1-container,.dfp-top_leaderboard,.dfp-wrap,.dfp-wrapper,.dfpAd,.dfpAdUnitContainer,.dfpAds,.dfpAdspot,.dfpAdvert,.dfp_ATF_wrapper,.dfp_ad--outbrain,.dfp_ad_block,.dfp_ad_caption,.dfp_ad_content_bottom,.dfp_ad_content_top,.dfp_ad_footer,.dfp_ad_header,.dfp_ad_pos,.dfp_ad_unit,.dfp_ads_block,.dfp_frame,.dfp_slot,.dfp_strip,.dfp_top-ad,.dfp_txt,.dfp_unit,.dfp_unit--interscroller,.dfp_unit-ad_container,.dfpad,.dfpbanners,.dfrads,.dfx-ad,.dfx-adBlock1Wrapper,.dg-gpt-ad-container,.dianomi-ad,.dianomi-container,.dianomi-embed,.dianomiScriptContainer,.dianomi_context,.digo_ads,.dikr-responsive-ads-slot,.directadvert-block,.discourse-adplugin,.discourse-google-dfp,.display-ad-block,.display-adhorizontal,.display-ads-block,.display-advertisement,.displayAd,.displayAdCode,.displayAdSlot,.displayAdUnit,.displayAds,.display_ads_right,.dispositifAdblock,.dispositifAdblockContent,.dispositifAdblockMessageBox,.div-gpt-ad-adhesion-leaderboard-wrap,.div-insticator-ad,.divAd,.divAdright,.divAds,.divAdsBanner,.divAdsLeft,.divAdsRight,.divReklama,.divRepAd,.divSponsoredBox,.divSponsoredLinks,.divTopADBanner,.divTopADBannerWapper,.divTopArticleAd,.div_advertisement,.div_publicidad,.div_publicidades,.divad1,.divad2,.divad3,.divads,.divider-ad,.divider-advert,.divider-full-width-ad,.divider-taboola,.divider_ad,.dlSponsoredLinks,.dm-adSlotBillboard,.dm-adSlotNative1,.dm-adSlotNative2,.dm-adSlotNative3,.dm-adSlotRectangle1,.dm-adSlotRectangle2,.dm-adSlotSkyscraper,.dm-adSlot__sticky,.dm_ad-billboard,.dm_ad-container,.dm_ad-halfpage,.dm_ad-leaderboard,.dm_ad-link,.dm_ad-skyscraper,.dmpu-ad,.dn-ad-wide,.dotcom-ad,.double-ad,.double-ads,.doubleClickAd,.doubleclickAds,.download-ad,.downloadAds,.download_ad,.dsk-box-ad-d,.dsq_ad,.dt-sponsor,.dtads-desktop,.dtads-slot,.dual-ads,.dualAds,.dyn-sidebar-ad,.dynamic-ads,.dynamicAdvertContainer,.dynamicLeadAd,.dynamic_adslot,.dynamicad1,.dynamicad2,.e-ad,.e-advertise,.e3lan,.e3lan-top,.e3lan-widget-content,.e3lan300-100,.e3lan300-250,.e3lan300_250-widget,.eaa-ad,.eads,.easy-ads,.easyAdsBox,.easyAdsSinglePosition,.ebayads,.ebm-ad-target__outer,.ecommerce-ad,.ecosia-ads,.eddy-adunit,.edi-advertising,.editor_ad,.eg-ad,.eg-custom-ad,.element--ad,.element-ad,.element-adplace,.element_contentad1,.element_contentad2,.element_contentad3,.element_contentad4,.element_contentad5,.elementor-widget-wp-widget-advads_ad_widget,.embAD,.embed-ad,.embedded-article-ad,.embeddedAd,.embeddedAds,.embedded_ad_wrapper,.empire-unit-prefill-container,.empty-ad,.endAHolder,.endti-adlabel,.entry-ad,.entry-ads,.entry-bottom-ad,.entry-bottom-ads,.entry-top-ad,.entryAd,.entry_ad,.entryad,.envoltorio_publi,.ep-pub,.esp_publicidad,.espacioPublicitario,.etn-ad-text,.eu-advertisment1,.evo-ads-widget,.evolve-ad,.ex_pu_iframe,.exco-container,.exo_wrapper,.external-ad,.external-add,.ez-sidebar-wall-ad,.ezAdsWidget,.ezmob-footer,.ezmob-footer-desktop,.ezo_ad,.ezoic-ad,.ezoic-ad-adaptive,.ezoic-adpicker-ad,.ezoic-floating-bottom,.f-ad,.f-item-ad,.f-item-ad-inhouse,.fbs-ad--ntv-home-wrapper,.fbs-ad--top-wrapper,.fbs-ad--topx-wrapper,.fc_clmb_ad,.fce_ads,.featureAd,.feature_ad,.featured-ad,.featured-ads,.featured-sponsors,.featured-story-ad,.featuredAdBox,.featuredAds,.featuredBoxAD,.featured_ad,.featuredadvertising,.feed-ad,.feed-ad-wrapper,.fh_ad_microbuttons,.field-59-companion-ad,.fig-ad-content,.find_bar_publicidades,.first-article-ad-block,.first-banner-ad,.first-leaderbord-adv,.first-leaderbord-adv-mobile,.firstAd-container,.first_ad,.first_party_ad_wrapper,.first_post_ad,.firstad,.firstpost_advert,.firstpost_advert_container,.fix_ad,.fixadheight,.fixadheightbottom,.fixed-ad-aside,.fixed-ad-bottom,.fixed-ads,.fixed-bottom-ad,.fixed-sidebar-ad,.fixedAds,.fixedLeftAd,.fixedRightAd,.fixed_adslot,.fixed_advert_banner,.fjs-ad-hide-empty,.fla-ad,.flashAd,.flash_ad,.flash_advert,.flashad,.flashadd,.flex-ad,.flex-posts-ads,.flexAd,.flexAds,.flexContentAd,.flex__publi,.flexad,.flexadvert,.flexiad,.flm-ad,.floatad,.floatads,.floated-ad,.floated_right_ad,.floating-ads,.floating-advert,.floatingAds,.fly-ad,.fm-badge-ad,.fnadvert,.fns_td_wrap,.fold-ads,.follower-ad-bottom,.following-ad,.foot-ad,.foot-ads,.foot-advertisement,.foot_adsense,.footad,.footer-300-ad,.footer-ad-full-wrapper,.footer-ad-labeling,.footer-ad-row,.footer-ad-section,.footer-ad-squares,.footer-ad-unit,.footer-ad-wrap,.footer-adrow,.footer-ads,.footer-ads-slide,.footer-ads-wrapper,.footer-ads_unlocked,.footer-adsbar,.footer-adsense,.footer-advert,.footer-advert-large,.footer-advertisement,.footer-advertisements,.footer-advertising,.footer-advertising-area,.footer-banner-ad,.footer-banner-ads,.footer-floating-ad,.footer-im-ad,.footer-leaderboard-ad,.footer-post-ad-blk,.footer-prebid,.footer-text-ads,.footerAd,.footerAdModule,.footerAdUnit,.footerAdWrapper,.footerAds,.footerAdsWrap,.footerAdslot,.footerAdverts,.footerBottomAdSec,.footerFullAd,.footerPageAds,.footerTextAd,.footer__ads--content,.footer__advert,.footer_ad,.footer_ad336,.footer_ad_container,.footer_adv,.footer_advertisement,.footer_block_ad,.footer_bottom_ad,.footer_bottomad,.footer_line_ad,.footer_text_ad,.footer_text_adblog,.footerad,.footeradspace,.footertextadbox,.forbes-ad-container,.forex_ad_links,.fortune-ad-unit,.forum-ad,.forum-ad-2,.forum-teaser-ad,.forum-topic--adsense,.forumAd,.forum_ad_beneath,.four-ads,.fp-ad-nativendo-one-third,.fp-ad-rectangle,.fp-ad300,.fp-ads,.fp-right-ad,.fp-right-ad-list,.fp-right-ad-zone,.fp_ad_text,.fp_adv-box,.frame_adv,.framead,.freestar-ad-container,.freestar-ad-sidebar-container,.freestar-ad-wide-container,.freestar-incontent-ad,.frn_adbox,.front-ad,.front_ad,.frontads,.frontendAd,.frontone_ad,.frontpage__article--ad,.frontpage_ads,.fsAdContainer,.fs_ad,.fs_ads,.fsrads,.ft-ad,.full-ad,.full-ad-wrapper,.full-ads,.full-adv,.full-bleed-ad,.full-bleed-ad-container,.full-page-ad,.full-top-ad-area,.full-width-ad,.full-width-ad-container,.full-width-ads,.fullAdBar,.fullBleedAd,.fullSizeAd,.fullWidthAd,.full_AD,.full_ad_box,.full_ad_row,.full_width_ad,.fulladblock,.fullbanner_ad,.fullbannerad,.fullpage-ad,.fullsize-ad-square,.fullwidth-advertisement,.fusion-ads,.fuv_sidebar_ad_widget,.fwAdTags,.fw_ad,.g-ad,.g-ad-fix,.g-ad-leaderboard,.g-ad-slot,.g-adver,.g-advertisement-block,.g1-ads,.g1-advertisement,.g2-adsense,.g3-adsense,.gAdMTable,.gAdMainParent,.gAdMobileTable,.gAdOne,.gAdOneMobile,.gAdRows,.gAdSky,.gAdThreeDesktop,.gAdThreeMobile,.gAdTwo,.gAds,.gAds1,.gAdsBlock,.gAdsContainer,.gAdvertising,.g_ad,.g_adv,.ga-ads,.gaTeaserAds,.gaTeaserAdsBox,.gabfire_ad,.gabfire_simplead_widget,.gad-container,.gad-right1,.gad-right2,.gad300x600,.gad336x280,.gadContainer,.gad_container,.gads_container,.gadsense,.gadsense-ad,.gallery-ad-container,.gallery-ad-counter,.gallery-ad-holder,.gallery-ad-lazyload-placeholder,.gallery-ad-overlay,.gallery-adslot-top,.gallery-injectedAd,.gallery-sidebar-ad,.gallery-slide-ad,.galleryAds,.galleryLeftAd,.galleryRightAd,.gallery_ad,.gallery_ad_wrapper,.gallery_ads_box,.galleryad,.galleryads,.gam-ad,.gam-ad-hz-bg,.gam_ad_slot,.game-ads,.game-category-ads,.gameAd,.gameBottomAd,.gamepage_boxad,.games-ad-wrapper,.gb-ad-top,.gb_area_ads,.general-ad,.genericAds,.ggl_ads_row,.ggl_txt_ads,.giant_pushbar_ads_l,.glacier-ad,.globalAd,.gnm-ad-unit,.gnm-ad-unit-container,.gnm-ad-zones,.gnm-adhesion-ad,.gnm-banner-ad,.gnm-bg-ad,.gnt_em_vp_c[data-g-s="vp_dk"],.gnt_flp,.gnt_rr_xpst,.gnt_rr_xst,.gnt_tb.gnt_tbb,.gnt_tbr.gnt_tb,.gnt_x,.gnt_x__lbl,.gnt_xmst,.go-ad,.goAdMan,.goads,.googads,.google-2ad-m,.google-ad,.google-ad-160-600,.google-ad-468-60,.google-ad-728-90,.google-ad-block,.google-ad-container,.google-ad-content,.google-ad-header2,.google-ad-image,.google-ad-manager,.google-ad-placeholder,.google-ad-sidebar,.google-ad-space,.google-ad-widget,.google-ads,.google-ads-billboard,.google-ads-bottom,.google-ads-container,.google-ads-footer-01,.google-ads-footer-02,.google-ads-in_article,.google-ads-leaderboard,.google-ads-long,.google-ads-obj,.google-ads-responsive,.google-ads-right,.google-ads-rodape,.google-ads-sidebar,.google-ads-widget,.google-ads-wrapper,.google-adsense,.google-advert-sidebar,.google-afc-wrapper,.google-bottom-ads,.google-dfp-ad-caption,.google-dfp-ad-wrapper,.google-right-ad,.google-sponsored,.google-sponsored-ads,.google-sponsored-link,.google-sponsored-links,.google468,.googleAd,.googleAdBox,.googleAdContainer,.googleAdFoot,.googleAdSearch,.googleAdSense,.googleAdWrapper,.googleAdd,.googleAds,.googleAdsContainer,.googleAdsense,.googleAdv,.google_ad,.google_ad_container,.google_ad_label,.google_ad_wide,.google_add,.google_admanager,.google_ads,.google_ads_content,.google_ads_sidebar,.google_adsense,.google_adsense1,.google_adsense_footer,.google_afc,.google_afc_ad,.googlead,.googleadArea,.googleadbottom,.googleadcontainer,.googleaddiv,.googleads,.googleads-container,.googleads-height,.googleadsense,.googleadsrectangle,.googleadv,.googleadvertisement,.googleadwrap,.googleafc,.gpAds,.gpt-ad,.gpt-ad-container,.gpt-ad-sidebar-wrap,.gpt-ad-wrapper,.gpt-ads,.gpt-billboard,.gpt-breaker-container,.gpt-container,.gpt-leaderboard-banner,.gpt-mpu-banner,.gpt-sticky-sidebar,.gpt.top-slot,.gptSlot,.gptSlot-outerContainer,.gptSlot__sticky-footer,.gptslot,.gradientAd,.graphic_ad,.grev-ad,.grey-ad,.grey-ad-line,.grey-ad-notice,.greyad,.grid > .container > #aside-promotion,.grid-ad,.grid-ad-col__big,.grid-advertisement,.grid-block-ad,.grid-item-ad,.gridAd,.gridAdRow,.gridSideAd,.grid__module-sizer_name_taboola,.grid_ad_container,.gridad,.gridlove-ad,.gridstream_ad,.ground-ads-shared,.group-ad-leaderboard,.group-google-ads,.group-item-ad,.group_ad,.gsAd,.gtm-ad-slot,.guide__row--fixed-ad,.guj-ad--placeholder,.gujAd,.gutterads,.h-adholder,.h-ads,.h-adver,.h-large-ad-box,.h-top-ad,.h11-ad-top,.h_Ads,.h_ad,.half-ad,.half-page-ad,.half-page-ad-1,.half-page-ad-2,.halfPageAd,.half_ad_box,.halfpage_ad,.halfpage_ad_1,.halfpage_ad_container,.happy-inline-ad,.happy-under-player,.has-adslot,.hasAD,.hdr-ad,.hdr-ads,.hdrAd,.hdr_ad,.head-ad,.head-ads,.head-banner468,.head-top-ads,.headAd,.head_ad_wrapper,.head_ads,.head_adv,.head_advert,.headad,.headadcontainer,.header-ad,.header-ad-area,.header-ad-banner,.header-ad-box,.header-ad-container,.header-ad-desktop,.header-ad-frame,.header-ad-holder,.header-ad-region,.header-ad-space,.header-ad-top,.header-ad-widget,.header-ad-wrap,.header-ad-wrapper,.header-ad-zone,.header-adbanner,.header-adbox,.header-adcode,.header-adds,.header-adplace,.header-ads,.header-ads-area,.header-ads-container,.header-ads-holder,.header-ads-wrap,.header-ads-wrapper,.header-adsense,.header-adslot-container,.header-adspace,.header-adv,.header-advert,.header-advert-wrapper,.header-advertise,.header-advertisement,.header-advertising,.header-and-footer--banner-ad,.header-article-ads,.header-banner-ad,.header-banner-ads,.header-banner-advertising,.header-bannerad,.header-bottom-adboard-area,.header-pencil-ad,.header-sponsor,.header-top-ad,.header-top_ads,.headerAd,.headerAd1,.headerAdBanner,.headerAdContainer,.headerAdPosition,.headerAdSpacing,.headerAdWrapper,.headerAds,.headerAds250,.headerAdspace,.headerAdvert,.headerAdvertisement,.headerTextAd,.headerTopAd,.headerTopAds,.header__ad,.header__ads,.header__ads-wrapper,.header__advertisement,.header_ad1,.header_ad_center,.header_ad_div,.header_ad_space,.header_ads,.header_ads-container,.header_ads_box,.header_adspace,.header_advert,.header_advertisement,.header_advertisment,.header_leaderboard_ad,.header_top_ad,.headerad,.headeradarea,.headeradblock,.headeradright,.headerads,.heading-ad-space,.headline-adblock,.headline-ads,.headline_advert,.hederAd,.herald-ad,.hero-ad,.hero-ad-slot,.hero-advert,.heroAd,.hidden-ad,.hide-ad,.hide_ad,.hidead,.highlightsAd,.hm-ad,.hmad,.hn-ads,.holder-ad,.holder-ads,.home-ad-bigbox,.home-ad-container,.home-ad-inline,.home-ad-links,.home-ad-region-1,.home-ad-section,.home-ads,.home-ads-container,.home-ads1,.home-adv-box,.home-advert,.home-body-ads,.home-page-ad,.home-sidebar-ad,.home-sponsored-links,.home-sticky-ad,.home-top-ad,.homeAd,.homeAd1,.homeAd2,.homeAdBox,.homeAdBoxA,.homeAdSection,.homeBoxMediumAd,.homeCentreAd,.homeMainAd,.homeMediumAdGroup,.homePageAdSquare,.homePageAds,.homeTopAdContainer,.home_ad,.home_ad_bottom,.home_ad_large,.home_ad_title,.home_adblock,.home_advert,.home_advertisement,.home_mrec_ad,.homeadwrapper,.homepage--sponsor-content,.homepage-ad,.homepage-ad-block,.homepage-ad-module,.homepage-advertisement,.homepage-banner-ad,.homepage-footer-ad,.homepage-footer-ads,.homepage-page__ff-ad-container,.homepage-page__tag-ad-container,.homepage-page__video-ad-container,.homepageAd,.homepage__native-ad,.homepage_ads,.homepage_block_ad,.hor-ad,.hor_ad,.hor_banner,.horiAd,.horiz_adspace,.horizontal-ad,.horizontal-ad-container,.horizontal-ad-holder,.horizontal-ad-wrapper,.horizontal-ad2,.horizontal-ads,.horizontal-advert-container,.horizontal-full-ad,.horizontal.ad,.horizontalAd,.horizontalAdText,.horizontalAdvert,.horizontal_Fullad,.horizontal_ad,.horizontal_adblock,.horizontal_ads,.horizontaltextadbox,.horizsponsoredlinks,.hortad,.hotad_bottom,.hotel-ad,.house-ad,.house-ad-small,.house-ad-unit,.house-ads,.houseAd,.houseAd1,.houseAdsStyle,.housead,.hover_ads,.hoverad,.hp-ad-container,.hp-ad-grp,.hp-adsection,.hp-sectionad,.hpPublicidadTop,.hpRightAdvt,.hp_320-250-ad,.hp_ad_300,.hp_ad_box,.hp_ad_cont,.hp_ad_text,.hp_adv300x250,.hp_advP1,.hp_horizontal_ad,.hp_textlink_ad,.htl-ad,.htl-ad-placeholder,.htl-inarticle-container,.html-advertisement,.html5-ad-progress-list,.hw-ad--frTop,.hyad,.i-amphtml-element.live-updates.render-embed,.i-amphtml-unresolved,.iAdserver,.iab300x250,.iab728x90,.ib-adv,.ico-adv,.icon-advertise,.iconAdChoices,.icon_ad_choices,.iconads,.idgGoogleAdTag,.ie-adtext,.iframe-ad,.iframe-ads,.iframeAd,.iframeAds,.ima-ad-container,.image-advertisement,.image-viewer-ad,.image-viewer-mpu,.imageAd,.imageAds,.imagead,.imageads,.img-advert,.img_ads,.imgad,.in-article-ad,.in-article-ad-placeholder,.in-article-ad-wrapper,.in-article-adx,.in-between-ad,.in-content-ad,.in-content-ad-wrapper,.in-page-ad,.in-slider-ad,.in-story-ads,.in-text-ad,.in-text__advertising,.in-thumb-ad,.in-thumb-video-ad,.inPageAd,.in_ad,.in_article_ad,.in_article_ad_wrapper,.in_content_ad_container,.in_content_advert,.inarticlead,.inc-ad,.incontent-ad1,.incontentAd,.incontent_ads,.index-adv,.index-module_adBeforeContent__AMXn,.index-module_adBeforeContent__UYZT,.index-module_rightrailBottom__IJEl,.index-module_rightrailTop__mag4,.index-module_sd_background__Um4w,.index_728_ad,.index_ad,.index_ad_a2,.index_ad_a4,.index_ad_a5,.index_ad_a6,.index_right_ad,.inf-onclickvideo-adbox,.inf-onclickvideo-container,.infinity-ad,.inhousead,.injected-ad,.injectedAd,.inline-ad-card,.inline-ad-container,.inline-ad-desktop,.inline-ad-placeholder,.inline-ad-text,.inline-ad-wrap,.inline-ad-wrapper,.inline-adblock,.inline-advert,.inline-banner-ad,.inline-display-ad,.inline-google-ad-slot,.inline-mpu,.inline-story-add,.inlineAd,.inlineAdContainer,.inlineAdImage,.inlineAdInner,.inlineAdNotice,.inlineAdText,.inlineAdvert,.inlineAdvertisement,.inlinePageAds,.inlineSideAd,.inline_ad,.inline_ad_container {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.inline_ad_title,.inline_ads,.inlinead,.inlinead_lazyload,.inlineadsense,.inlineadtitle,.inlist-ad,.inlistAd,.inner-ad,.inner-ad-disclaimer,.inner-ad-section,.inner-adv,.inner-advert,.inner-post-ad,.innerAdWrapper,.innerAds,.innerContentAd,.innerWidecontentAd,.inner_ad,.inner_ad_advertise,.inner_big_ad,.innerad,.inpostad,.inr_top_ads,.ins_adwrap,.insert-post-ads,.insert_ad,.insert_ad_column,.insert_advertisement,.insertad,.inside_ad,.insideads,.inslide-ad,.insticator-ads,.instream_ad,.intAdRow,.intad,.interAd,.internal-ad,.internalAd,.internal_ad,.interstitial-ad,.interstory_first_mobile,.interstory_second_mobile,.intext-ads,.intra-article-ad,.intro-ad,.ion-ad,.ione-widget-dart-ad,.ipc-advert,.ipc-advert-class,.ipsAd,.ipsAdvertisement,.iqadlinebottom,.iqadmarker,.iqadtile_wrapper,.is-ad,.is-carbon-ad,.is-desktop-ads,.is-mpu,.is-preload-ad,.is-script-ad,.is-sticky-ad,.isAd,.isAdPage,.isad_box,.ise-ad,.island-ad,.islandAd,.islandAdvert,.island_ad,.islandad,.item--ad,.item-ad,.item-ad-leaderboard,.item-advertising,.item-container-ad,.itemAdvertise,.item_ads,.itsanad,.j-ad,.jLinkSponsored,.jannah_ad,.jg-ad-5,.jg-ad-970,.jobbioapp,.jobs-ad-box,.jobs-ad-marker,.jquery-adi,.jquery-script-ads,.js-ad,.js-ad-banner-container,.js-ad-buttons,.js-ad-container,.js-ad-dynamic,.js-ad-frame,.js-ad-home,.js-ad-loader-bottom,.js-ad-slot,.js-ad-static,.js-ad-unit,.js-ad-unit-bottom,.js-ad-wrapper,.js-ad_iframe,.js-adfliction-iframe,.js-adfliction-standard,.js-ads,.js-ads-carousel,.js-advert,.js-advert-container,.js-adzone,.js-anchor-ad,.js-article-advert-injected,.js-billboard-advert,.js-checkad-warning,.js-dfp-ad,.js-dfp-ad-bottom,.js-dfp-ad-top,.js-gpt-ad,.js-gptAd,.js-header-ad,.js-header-ad-wrapper,.js-lazy-ad,.js-mapped-ad,.js-mpu,.js-native-ad,.js-no-sticky-ad,.js-outbrain-container,.js-overlay_ad,.js-react-simple-ad,.js-results-ads,.js-right-ad-block,.js-sidebar-ads,.js-skyscraper-ad,.js-slide-right-ad,.js-slide-top-ad,.js-sticky-ad,.js-stream-ad,.js-taboola,.js-toggle-ad,.js-widget-distroscale,.js-widget-send-to-news,.jsAdSlot,.jsMPUSponsor,.js_adContainer,.js_ad_wrapper,.js_deferred-ad,.js_desktop-horizontal-ad,.js_midbanner_ad_slot,.js_preheader-ad-container,.js_related-stories-inset,.js_slideshow-full-width-ad,.js_slideshow-sidebar-ad,.js_sticky-top-ad,.jsx-adcontainer,.jw-ad,.jw-ad-block,.jw-ad-label,.jw-ad-media-container,.jw-ad-visible,.jwPlayer--floatingContainer,.kakao_ad_area,.keen_ad,.kill-adblock-container,.ktz-bannersingletop,.kumpulads-post,.kumpulads-side,.kwizly-psb-ad,.l-ad-top,.l-ads,.l-adsense,.l-article__ad,.l-bottom-ads,.l-grid--ad-card,.l-header-advertising,.l-section--ad,.l1-ads-wrapper,.label-ad,.label_advertising_text,.labelads,.largeAd,.largeRectangleAd,.largeUnitAd,.large_ad,.lastAdHolder,.lastads,.latest-ad,.layout-ad,.layout__right-ads,.layout_h-ad,.lazy-ad,.lazy-ad-unit,.lazy-adv,.lazyad,.lazyadsense,.lazyadslot,.lazyload-ad,.lazyload_ad,.lazyload_ad_article,.lb-ad,.lb-adhesion-unit,.lb-advert-container,.lb-item-ad,.ld-ad,.ld-ad-inner,.ldm_ad,.lead-ad,.lead-ads,.leader-ad,.leader-ad-728,.leaderAd,.leaderAdTop,.leaderAdvert,.leaderBoardAdWrapper,.leaderBoardAdvert,.leader_ad,.leader_aol,.leaderad,.leaderboard-ad,.leaderboard-ad-belt,.leaderboard-ad-component,.leaderboard-ad-container,.leaderboard-ad-dummy,.leaderboard-ad-fixed,.leaderboard-ad-grid,.leaderboard-ad-main,.leaderboard-ad-module,.leaderboard-ad-pane,.leaderboard-ad-placeholder,.leaderboard-ad-section,.leaderboard-ad-unit,.leaderboard-ad-wrapper,.leaderboard-adblock,.leaderboard-ads,.leaderboard-ads-text,.leaderboard-advert,.leaderboard-advertisement,.leaderboard-main-ad,.leaderboard-top-ad,.leaderboard-top-ad-wrapper,.leaderboard.advert,.leaderboard1AdWrapper,.leaderboardAd,.leaderboardAdWrapper,.leaderboardFooter_ad,.leaderboardRectAdWrapper,.leaderboard_ad_container,.leaderboard_ad_unit,.leaderboard_ads,.leaderboard_adsense,.leaderboard_adv,.leaderboard_banner_ad,.leaderboardad,.leaderboardadmiddle,.leaderboardadtop,.leaderboardadwrap,.lee-track-ilad,.left-ad,.left-ads,.left-advert,.left-rail-ad,.left-sponser-ad,.leftAd,.leftAdColumn,.leftAdContainer,.leftAds,.leftAdsEnabled,.leftAdsFix,.leftAdvDiv,.leftAdvert,.leftCol_advert,.leftColumnAd,.left_300_ad,.left_ad,.left_ad_160,.left_ad_areas,.left_ad_box,.left_ad_container,.left_add_block,.left_adlink,.left_ads,.left_adsense,.left_advertisement_block,.left_col_ad,.left_google_add,.leftad,.leftadd,.leftadtag,.leftbar_ad2,.leftbarads,.leftbottomads,.leftnavad,.leftrighttopad,.leftsidebar_ad,.lefttopad1,.legacy-ads,.legion_primiswrapper,.lft_advt_container,.lg-ads-160x90,.lg-ads-311x500,.lg-ads-635x100,.lg-ads-skin-container,.liBannerImage,.ligatus,.lightad,.lijit-ad,.linead,.linkAD,.linkAds,.link_ad,.linkads,.list-ad,.list-adbox,.list-ads,.list-feature-ad,.list-footer-ad,.listad,.listicle-instream-ad-holder,.listing-item-ad,.listingAd,.listings_ad,.lite-page-ad,.live-ad,.lng-ad,.local-ads,.localad,.location-ad,.log_ads,.logged_out_ad,.logoAds,.logo_AdChoices,.logoad,.logoutAd,.logoutAdContainer,.lomadee-wp-related-offers,.long-ads,.longAd,.longAdBox,.longAds,.long_ad,.longform-ad,.loop-ad,.lower-ad,.lower-ads,.lowerAd,.lowerAds,.lower_ad,.lr-ad,.lr-pack-ad,.lr_skyad,.lrec-container,.lst_ads,.lv24hpublicidad,.lyrics-inner-ad-wrap,.m-ContentAd,.m-ad,.m-ad-brick,.m-ad-region,.m-ad-unit,.m-ad__wrapper,.m-adaptive-ad-component,.m-advert,.m-advertisement,.m-advertisement--container,.m-article-taboola,.m-balloon-header--ad,.m-block-ad,.m-content-advert,.m-content-advert-wrap,.m-dfp-ad-text,.m-header-ad,.m-in-content-ad,.m-in-content-ad-row,.m-jac-ad,.m-sponsored,.m1-header-ad,.m2n-ads-slot,.m_ad,.m_ad1,.m_ad300,.m_banner_ads,.macAd,.macad,.mad_adcontainer,.magAd,.magad,.main-ad,.main-ad-container,.main-ad-gallery,.main-add-sec,.main-ads,.main-advert,.main-advertising,.main-column-ad,.main-footer-ad,.main-header-ad,.main-header__ad-wrapper,.main-right-ads,.mainAdContainer,.mainAds,.mainLeftAd,.mainLinkAd,.mainRightAd,.main_ad,.main_adbox,.main_ads,.main_adv,.mantis-ad,.mantisadd,.manual-ad,.map-ad,.mapped-ad,.mar-block-ad,.mar-leaderboard--bottom,.margin-advertisement,.margin0-ads,.marginalContentAdvertAddition,.marketing-ad,.marketplace-ad,.marketplaceAd,.marquee-ad,.masonry-tile-ad,.masonry__ad,.master_post_advert,.masthead-ad,.masthead-ads,.mastheadAds,.masthead__ad,.match-ad,.mb-advert,.mb-advert__incontent,.mb-advert__leaderboard--large,.mb-advert__mpu,.mb-advert__tweeny,.mb-block--advert-side,.mb-list-ad,.mc-column-Taboola,.mc_floating_ad,.mc_text_ads_box,.mclics,.md-advertisement,.medRect,.media-viewer__ads-container,.mediaAd,.mediaAdContainer,.medium-rectangle-ad,.medium-top-ad,.mediumRectAdWrapper,.mediumRectagleAd,.mediumRectangleAd,.mediumRectangleAdvert,.medium_ad,.mediumad,.medrec-ad,.medrect-ad,.medrect-ad2,.medrectAd,.medrect_ad,.mega-ad,.member-ads,.menu-ad,.menuAd,.message_ads,.meta-ad,.meta_ad,.metabet-adtile,.meteored-ads,.mf-adsense-leaderboard,.mf-adsense-rightrail,.mg_box_ads,.mgid-wrapper,.mgid_3x2,.mid-ad-wrapper,.mid-ads,.mid-advert,.mid-article-banner-ad,.mid-outbrain,.mid-post-ad,.mid-section-ad,.midAd,.midAdv-cont,.midAdv-cont2,.midAdvert,.mid_ad,.mid_banner_ad,.midad,.midarticlead,.middle-ad,.middle-ads,.middle-ads728,.middle-footer-ad,.middleAd,.middleAdLeft,.middleAdMid,.middleAdRight,.middleAdWrapper,.middleAds,.middleBannerAd,.middle_AD,.middle_ad,.middle_ad_responsive,.middle_ads,.middleadouter,.midpost-ad,.min-height-ad,.min_navi_ad,.mini-ad,.mini-ads,.mini_ads,.miniad,.miniads,.misc-ad,.misc-ad-label,.miscAd,.mj-floating-ad-wrapper,.mks_ads_widget,.mm-ad-sponsored,.mm-ads-adhesive-ad,.mm-ads-gpt-adunit,.mm-ads-leaderboard-header,.mm-banner970-ad,.mm-embed--sendtonews,.mm-widget--sendtonews,.mmads,.mntl-gpt-adunit,.mntl-leaderboard-header,.mntl-sc-block-adslot,.moads-top-banner,.moads-widget,.mob-ad-break-text,.mob-adspace,.mob-hero-banner-ad-wrap,.mob_ads,.mobads,.mobile-ad,.mobile-ad-container,.mobile-ad-negative-space,.mobile-ad-placeholder,.mobile-ad-slider,.mobile-ads,.mobile-fixed-ad,.mobile-instream-ad-holder,.mobile-instream-ad-holder-single,.mobileAd,.mobileAdWrap,.mobileAppAd,.mobile_ad_banner,.mobile_ad_container,.mobile_featuredad,.mobile_leaderboard_ad,.mobileadbig,.mobileadunit,.mobilesideadverts,.mod-ad,.mod-adblock,.mod-ads,.mod-google-ads,.mod-horizontal-ad,.mod-roba,.mod-sponsored-links,.mod-vertical-ad,.modPublicidad,.mod_ad,.mod_ad_container,.mod_ad_text,.mod_ad_top,.mod_admodule,.mod_ads,.mod_advert,.mod_index_ad,.mod_js_ad,.mod_openads,.mod_r_ad,.mod_r_ad1,.modal-ad,.module--ad,.module-ad,.module-ad-small,.module-ads,.module-advert,.module-advertisement,.module-box-ads,.module-image-ad,.module-rectangleads,.module-sponsored-ads,.module-zerg,.module1colAds,.moduleAd,.moduleAdSpot,.moduleAdvert,.moduleAdvertContent,.moduleBannerAd,.module__ad-wide,.module_ad_disclaimer,.module_box_ad,.module_header_sponsored,.module_home_ads,.module_single_ads,.modulegad,.moduletable-adsponsor,.moduletable-advert,.moduletable-bannerAd6,.moduletable-centerad,.moduletable-googleads,.moduletable-rectangleads,.moduletable_ad-right,.moduletable_ad300x250,.moduletable_adtop,.moduletable_advertisement,.moduletable_top_ad,.moduletableadvert,.moduletableexclusive-ads,.moduletablesquaread,.moduletabletowerad,.mom-ad,.moneyball-ad,.monsterad,.mos-ad,.mosaicAd,.motherboard-ad,.movable-ad,.movv-ad,.mp-ad,.mpsponsor,.mpu-ad,.mpu-ad-con,.mpu-ad-river,.mpu-ad-top,.mpu-advert,.mpu-c,.mpu-footer,.mpu-fp,.mpu-holder,.mpu-leaderboard,.mpu-left,.mpu-left-bk,.mpu-mediatv,.mpu-right,.mpu-title,.mpu-top-left,.mpu-top-left-banner,.mpu-top-right,.mpu-unit,.mpu-wrap,.mpu-wrapper,.mpuAd,.mpuAdArea,.mpuAdSlot,.mpuAdvert,.mpuArea,.mpuBlock,.mpuBox,.mpuContainer,.mpu_Ad,.mpu_ad,.mpu_advert,.mpu_container,.mpu_holder,.mpu_placeholder,.mpu_side,.mpu_wrapper,.mpuad,.mpuads,.mr1_adwrap,.mr2_adwrap,.mr3_adwrap,.mr4_adwrap,.mrec-ads,.mrec-banners,.mrecAds,.mrec_advert,.mrf-adv,.mrf-adv__wrapper,.msg-ad,.msgad,.mt-ad-container,.mt_ad,.mt_ads,.mtop_adfit,.mu-ad-container,.mv_atf_ad_holder,.mvp-ad-label,.mvp-feat1-list-ad,.mvp-flex-ad,.mvp-post-ad-wrap,.mvp-widget-ad,.mvp-widget-feat2-side-ad,.mvp_ad_widget,.mw-ad,.my-ads,.myAds,.myAdsGroup,.my__container__ad,.my_responsive_ads,.myml-menu-navigation > .container-banner,.myml-menu-navigation > .purchases-banner,.n1ad-center-300,.narrow_ad_unit,.narrow_ads,.national_ad,.nationalad,.native-ad,.native-ad-article,.native-ad-container,.native-ad-item,.native-ad-mode,.native-ad-slot,.native-adv,.native-advts,.native-leaderboard-ad,.native-sidebar-ad,.native.ad,.nativeAd,.native_ad,.native_ad_inline,.native_ad_wrap,.native_ads,.nav-ad,.nav-ad-gpt-container,.nav-ad-plus-leader,.nav-adWrapper,.navbar-ad-section,.navbar-ads,.navbar-header-ad,.naviad,.ndmadkit,.netPost_ad1,.netPost_ad3,.netads,.netshelter-ad,.newHeaderAd,.new_ad1,.new_ad_left,.new_ad_normal,.new_ad_wrapper_all,.new_ads_unit,.newad,.newad1,.news-ad,.news-ad-square-a,.news-ad-square-box,.news-ads-top,.news-item--ad,.news_ad_box,.news_vibrant_ads_banner,.newsad,.newsblock-ads,.newsfeed_adunit,.newspack_global_ad,.nfy-ad,.nfy-ad-teaser,.nfy-ad-tile,.nfy-ad-wrapper,.nfy-cobo-ad,.nfy-col-ad,.ng-ad-banner,.ng-ad-insert,.nm-ad,.nn_mobile_mpu_wrapper,.noadblock,.node_ad_wrapper,.normalAds,.normal_ads,.normalad,.northad,.not-an-ad-header,.note-advertisement,.np-ad,.np-ad-background,.np-ad-border,.np-ads-wrapper,.np-adv-container,.np-advert_apu,.np-advert_apu-double,.np-advert_info,.np-header-ad,.np-header-ads-area,.np-right-ad,.nrAds,.nsAdRow,.nts-ad,.nts-video-wrapper,.ntv-ad,.nuffnangad,.nuk-ad-placeholder,.nv-ads-wrapper,.nw-ad,.nw-ad-label,.nw-c-leaderboard-ad,.nw-top-ad,.nw_adv_square,.nx-billboard-ad,.nx-placeholder-ad,.nya-slot[style],.o-ad,.o-ad-banner-top,.o-advert,.o-listing__ad,.o-site-header__advert,.oad-ad,.oas-ad,.oas-container,.oas-leaderboard-ads,.oas_ad,.oas_add,.oas_advertisement,.oasad,.oasads,.ob-hover.ob_what,.ob-p,.ob-p.ob-dynamic-rec-container,.ob-smartfeed-wrapper,.ob-widget-header,.ob_ads_header,.ob_container .item-container-obpd,.ob_dual_right > .ob_ads_header ~ .odb_div,.ob_what_resp,.offads,.offer-add,.oi-add-block,.oi-header-ad,.oio-banner-zone,.oio-link-sidebar,.oio-openslots,.oio-zone-position,.oko-adhesion,.on_player_ads,.oneColumnAd,.onet-ad,.online-ad-container,.oovvuu-embed-player,.opd_adsticky,.otd-ad-top,.outBrainWrapper,.outbrain,.outbrain-ad-slot,.outbrain-ad-units,.outbrain-ads,.outbrain-bg,.outbrain-bloc,.outbrain-content,.outbrain-group,.outbrain-module,.outbrain-placeholder,.outbrain-recommended,.outbrain-reserved-space,.outbrain-single-bottom,.outbrain-widget,.outbrain-wrap,.outbrain-wrapper,.outbrain-wrapper-container,.outbrain-wrapper-outer,.outbrainAdHeight,.outbrainWidget,.outbrain__main,.outbrain_container,.outbrain_skybox,.outbrainad,.outbrainbox,.outer-ad-container,.outer-ad-unit-wrapper,.outerAdWrapper,.outerAds,.outer_ad_container,.outside_ad,.outsider-ad,.ov-ad-slot,.overflow-ad,.overlay-ad,.overlay-ad-container,.overlay-ads,.overlay-box-ad,.overlay_ad,.ox-holder,.p-ad,.p-ad-block,.p-ad-dfp-banner,.p-ad-dfp-middle-rec,.p-ad-feature-pr,.p-ad-outbreak,.p-ad-rectangle,.p-ad-thumbnail-txt,.p-ads-billboard,.p-ads-rec,.p-post-ad:not(html):not(body),.p75_sidebar_ads,.p_adv,.p_topad,.package_adBox,.padAdvx,.padded-ad,.paddingBotAd,.pads2,.pads_bulk_widget,.padvertlabel,.page-ad,.page-ads,.page-advert,.page-advertisement,.page-bottom-fixed-ads,.page-box-ad,.page-break-ad,.page-content__advert,.page-footer-ad,.page-header-ad,.page-header_ad,.page-top-ads,.pageAd,.pageAdSkin,.pageAdSkinUrl,.pageAds,.pageFooterAd,.pageGoogleAd,.pageGoogleAds,.pageHeaderAd,.pageHeaderAds,.pageTopAd,.page__top-ad-wrapper,.pagead,.pagepusheradATF,.pages__ad,.pane-ad-pane,.pane-ads,.pane-publicidad,.pane-publicidades,.pane-sasia-ad,.pane-site-ads,.pane-sponsored-links,.pane_ad_wide,.panel-ad,.panel-adsense,.panel-advert,.panel.ad,.panel_ad,.paneladvert,.par-ad,.par-adv-slot,.parade-ad-container,.parent-ad-desktop,.partial-ad,.partner-ad,.partner-ad-module-wrapper,.partner-ads-list,.partner-loading-shown.partner-label,.partnerAd,.partner_ads,.partnerad_container,.partnersTextLinks,.patrocinio,.pauseAdPlacement,.pb-slot-container,.pc-ad,.pcads_widget,.pd-ads-mpu,.pdpads_desktop,.penci-ad-box,.penci-ad-image,.penci-ad_box,.penci-adsense-below-slider,.penci-google-adsense,.penci-google-adsense-1,.penci-promo-link,.penci_list_bannner_widget,.pencil-ad,.pencil-ad-container,.pencil-ad-section,.pencil_ad,.perm_ad,.pf_content_ad,.pf_sky_ad,.pf_top_ad,.pg-ad-block,.pg-adnotice,.pg-adtarget,.pgevoke-fp-bodyad2,.pgevoke-story-rightrail-ad1,.pgevoke-story-topads,.pgevoke-topads,.ph-ad,.photo-ad,.photo-ad-pad,.photoAd,.photoad,.phpads_container,.phpbb-ads-center,.pix_adzone,.placeholder-ad,.placeholder-dfp,.placeholderAd,.plain-ad,.plainAd,.player-ad,.player-ad-overlay,.player-ads,.player-ads2,.player-section__ads-banners,.player-under-ad,.playerAd,.playerAdv,.player_ad {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}</style><style type="text/css" class="abn_style" nonce="undefined">.player_ad2,.player_ad_box,.playerad,.playerdads,.playwire-article-leaderboard-ad,.plugin-ad,.plugin-ad-container,.pm-ad,.pm-ad-unit,.pm-ad-zone,.pm-ads-banner,.pm-ads-inplayer,.pm-banner-ad,.pmc-adm-boomerang-pub-div,.pmc-contextual-player,.polar-ad,.polaris-ad--wrapper-desktop,.polarisMarketing,.polaris__ad,.polaris__below-header-ad-wrapper,.pop-out-eplayer-container,.popup-box-ads,.position-ads,.post-ad,.post-ad-title,.post-ad-top,.post-ad-type,.post-ads,.post-ads-top,.post-adsense-bottom,.post-advert,.post-advert-row,.post-advertisement,.post-banners.anuncios,.post-load-ad,.post-news-ad,.post-sidebar-ad,.post-sponsored,.postAd,.postWideAd,.post_ad,.post_ads,.post_advert,.post_detail_right_advert,.post_sponsored,.postads,.postbit-ad,.poster_ad,.posts-ad,.pp-ad-container,.pp_ad_code_adtxt,.ppb_ads,.ppr_priv_footer_banner_ad_billboard,.ppr_priv_header_banner_ad,.ppr_priv_horizon_ad,.pr_adslot_0,.pr_adslot_1,.preheader_advert,.premium-ad,.premium-ads,.premium-adv,.premium-mpu-container,.premium_PremiumPlacement__2dEp0,.priad,.priad-1,.primary-ad,.primary-ad-widget,.primary-advertisment,.primis-ad,.primis-ad-wrap,.primis-custom,.primis-player,.primis-player-container,.primis-player__container,.primis-video,.primis-video-player,.primis-wrapper,.primis_1,.print-ad-wrapper,.print-adslot,.printAds,.product-inlist-ad,.producto-doble-publi,.profile-ad-container,.profile-ads-container,.profile__ad-wrapper,.profile_ad_bottom,.profile_ad_top,.programtic-ads,.promo-ad,.promo-mpu,.promoAds,.promoAdvertising,.promo_ad,.promo_ads,.promo_border,.promoad,.promoboxAd,.promocion_libre,.promoted-outbrain,.promoted_content_ad,.promotionAdContainer,.promotionTextAd,.proper-ad-insert,.proper-ad-unit,.ps-ad,.pt-ad--container,.pt-ad--scroll,.pt_ad03,.pt_col_ad02,.pu300,.pub-300x250,.pub-300x600,.pub-950x100,.pub-h,.pub160x600,.pub300x250,.pub468x80,.pub728x90,.pub950,.pub_ads,.pubexchange_module,.publi-texto,.publi-vertical,.publi300x250-sidebar,.publi300x300,.publi300x600-sidebard,.publiTop,.publi_710x176,.publi_MPU,.publi_flotante_push,.publi_horizontal,.publi_lateral,.publi_mar_top,.publi_opinion,.publi_pie_2,.publi_skin_wrap,.publi_sky,.publi_space,.publi_widget_1,.publi_widget_2,.publicLateral,.publicLateralTop,.publicVert,.publication-ad,.publicidad-1110x90,.publicidad-160-600,.publicidad-300-250,.publicidad-300-250a,.publicidad-300x250,.publicidad-728x90,.publicidad-728x90-Nota,.publicidad-bg,.publicidad-bloque-centro,.publicidad-cabecera,.publicidad-content,.publicidad-ct,.publicidad-horizontal,.publicidad-izq,.publicidad-label,.publicidad-pie,.publicidad-top,.publicidad-vertical,.publicidad1,.publicidad2,.publicidad3,.publicidad4,.publicidad5,.publicidad6,.publicidadMiddle,.publicidadPaga,.publicidadSuperior,.publicidad_01,.publicidad_big,.publicidad_cabecera,.publicidad_dfp,.publicidad_especial,.publicidad_footer_sticky,.publicidad_horizontal,.publicidad_modulo1,.publicidad_modulo2,.publicidad_movil,.publicidad_p,.publicidad_pc,.publicidad_titulo,.publicidad_top,.publicidad_tras_bajada,.publicidadbflotante,.publicidade-abre_padrao,.publicidade-dotted,.publicidade_superbanner,.publicidades,.publicidadright,.publicidadtxt,.publicity-content,.publicity-content-google,.publicolumna,.publisher_ad,.publitop,.pubslider,.pubtech-adv-slot,.puff-ad,.puff-advertorials,.pull-ad,.pull_top_ad,.pullad,.purchad,.push--ad,.push-ad,.push-adv,.pushDownAd,.pushdown-ad,.pushdownAd,.pwa-ad,.pz-ad-box,.quads-ad-label,.quads-bg-ad,.quads-location,.queue_ad,.queued-ad,.quigo,.quigo-ad,.quigoads,.r-ad,.r-pause-ad-container,.r89-outstream-video,.r_ad,.r_ads,.rail-ad,.rail-ads-1,.rail-article-sponsored,.rail__ad,.rail_ad,.railad,.railadspace,.ray-floating-ads-container,.rc-sponsored,.rcom-freestar-ads-widget,.re-AdTop1Container,.ready-ad,.rec-sponsored,.rec_ad,.rec_article_footer,.rec_article_right,.rec_container__right,.rec_container_footer,.rec_container_right,.rec_title_footer,.recent-ad,.recentAds,.recent_ad_holder,.recipeFeatureAd,.rect-ad,.rect-ad-1,.rectAd300,.rect_ad,.rect_ad_module,.rect_advert,.rectad,.rectadv,.rectangle-ad,.rectangle-ad-container,.rectangle-embed-ad,.rectangleAd,.rectangleAdContainer,.rectangle_ad,.rectanglead,.rectangleads,.reform-top-container,.refreshAds,.region-ad-bottom-leaderboard,.region-ad-pan,.region-ad-right,.region-ads,.region-ads-content-top,.region-banner-ad,.region-banner-header,.region-dfp-ad-footer,.region-dfp-ad-header,.region-header-ad,.region-header-ads,.region-top-ad,.region-top-ad-block,.regular-ads,.regular.closable,.regularad,.rekl-left,.rekl-right,.rekl-top,.rekl_left,.rekl_right,.rekl_top,.rekl_top_wrapper,.reklam,.reklam-block,.reklam-kare,.reklam-masthead,.reklam2,.reklam728,.reklama-vert,.reklama1,.reklame-wrapper,.reklamka,.related-ad,.related-ads,.relatedAds,.related_ad,.remnant_ad,.remove-ads,.remove-ads-link,.res_ad,.resads-adspot,.responsive-ad,.responsive-ad-header-container,.responsive-ad-outbrain,.responsive-ad-wrapper,.responsive-ads,.responsiveAdsense,.responsive_ad_top,.responsive_ads_468x60,.result-ad,.result-sponsored,.resultAd,.result_ad,.resultad,.results-ads,.revcontent-wrap,.review-ad,.reviews-display-ad,.revive-ad,.rh-ad,.rhads,.rhs-ad,.rhs-ads-panel,.rhs-advert-container,.rhs-mrec-wrapper,.rhs_ad,.rhs_ad_title,.rhs_ads,.rhsad,.rhsadvert,.right-ad,.right-ad-1,.right-ad-2,.right-ad-3,.right-ad-4,.right-ad-5,.right-ad-block,.right-ad-container,.right-ad-holder,.right-ad-wrapper,.right-ad2,.right-ad350px250px,.right-ads2,.right-adsense,.right-adv,.right-advert,.right-advertisement,.right-col-ad,.right-column-ad,.right-column-ads,.right-rail-ad,.right-rail-ad-container,.right-rail-box-ad-container,.right-side-ad,.right-side-ads,.right-sidebar-box-ad,.right-sidebar-box-ads,.right-sponser-ad,.right-top-ad,.right-video-dvertisement,.rightAD,.rightAd,.rightAd1,.rightAd2,.rightAdBlock,.rightAdBox,.rightAdColumn,.rightAdContainer,.rightAds,.rightAdsFix,.rightAdvert,.rightAdverts,.rightBoxAd,.rightBoxMidAds,.rightColAd,.rightColAdBox,.rightColumnAd,.rightColumnAdd,.rightColumnAdsTop,.rightColumnRectAd,.rightHeaderAd,.rightRailAd,.rightRailMiddleAd,.rightSecAds,.rightSideBarAd,.rightSideSponsor,.rightTopAdWrapper,.right_ad,.right_ad_1,.right_ad_2,.right_ad_box,.right_ad_box1,.right_ad_text,.right_ad_top,.right_ad_unit,.right_ad_wrap,.right_ads,.right_ads_column,.right_adsense_box_2,.right_adskin,.right_adv,.right_advert,.right_advertise_cnt,.right_advertisement,.right_block_advert,.right_box_ad,.right_col_ad,.right_column_ads,.right_content_ad,.right_image_ad,.right_long_ad,.right_outside_ads,.right_side_ads,.right_side_box_ad,.right_sponsor_main,.rightad,.rightadHeightBottom,.rightadblock,.rightadd,.rightads,.rightadunit,.rightadv,.rightboxads,.rightcolads,.rightcoladvert,.rightrail-ad-placed,.rightsideAd,.river-item-sponsored,.rj-ads-wrapper,.rm-adslot,.rmsads,.roba-container,.robapagina,.robapaginas,.rolloverad,.roof-ad,.root-ad-anchor,.rotating-ad,.rotating-ads,.row-ad,.row-ad-leaderboard,.rowAd,.rowAds,.row_header_ads,.rpd_ads,.rr-ad,.rr_ads,.rs-ad,.rs-advert,.rs-advert__container,.rs_ad_block,.rs_ad_top,.rt_ad,.rwSideAd,.rwdArticleInnerAdBlock,.s-ad,.s-ads,.s2nContainer,.s_ads,.sadvert,.sagreklam,.sal-adv-gpt,.sam_ad,.sb-ad,.sb-ads,.sbAd,.sbAdUnitContainer,.sbTopadWrapper,.sb_ad,.sb_ad_holder,.sc-ad,.scad,.script-ad,.scroll-ad-item-container,.scroll-ads,.scroll-fixable.rail-right > .deals-rail,.scroll-track-ad,.scrolling-ads,.sda_adbox,.sdc-advert__top-1,.se-ligatus,.search-ad,.search-advertisement,.search-result-list-item--sidebar-ad,.search-result-list-item--topad,.search-results-ad,.search-sponsor,.search-sponsored,.searchAd,.searchAdTop,.searchAds,.searchad,.searchads,.secondary-ad-widget,.secondary-advertisment,.secondary_ad,.section-ad,.section-ad-unit,.section-ad-wrapper,.section-ad2,.section-ads,.section-adtag,.section-adv,.section-advertisement,.section-sponsor,.section-subheader > .section-hotel-prices-header,.section-widget-ad,.section_ad,.section_ad_left,.section_ads,.send-to-news,.seoAdWrapper,.servedAdlabel,.serviceAd,.sexunder_ads,.sf_ad_box,.sg-adblock,.sgAd,.sh-section-ad,.shadvertisment,.sheknows-infuse-ad,.shift-ad,.shopee-search-user-brief,.shortadvertisement,.show-desk-ad,.show-sticky-ad,.showAd,.showAdContainer,.showads,.showcaseAd,.showcasead,.shr-ads-container,.sics-component__outbrain,.sidbaread,.side-ad-300,.side-ad-blocks,.side-ad-container,.side-ad-inner,.side-ad-top,.side-ads,.side-ads-block,.side-ads-wide,.side-adv-block,.side-adv-text,.side-advert,.side-advertising,.side-adverts,.side-bar-ad,.sideAd,.sideAdLeft,.sideAdWide,.sideBarAd,.sideBlockAd,.sideBoxAd,.side__ad,.side__ad-box,.side_ad,.side_ad2,.side_ad_top,.side_add_wrap,.side_ads,.side_adsense,.side_adv,.side_col_ad_wrap,.sidead,.sideadmid,.sideads,.sideads_l,.sideadsbox,.sideadtable,.sideadvert,.sideadverts,.sidebar-ad-area,.sidebar-ad-b,.sidebar-ad-box,.sidebar-ad-c,.sidebar-ad-component,.sidebar-ad-cont,.sidebar-ad-container,.sidebar-ad-div,.sidebar-ad-label,.sidebar-ad-rect,.sidebar-ad-slot,.sidebar-ad-top,.sidebar-ad-wrapper,.sidebar-adbox,.sidebar-ads-block,.sidebar-ads-wrap,.sidebar-adsdiv,.sidebar-adv-container,.sidebar-advert,.sidebar-advertisement,.sidebar-advertisment,.sidebar-adverts,.sidebar-adverts-header,.sidebar-banner-ad,.sidebar-below-ad-unit,.sidebar-big-ad,.sidebar-big-box-ad,.sidebar-bottom-ad,.sidebar-box-ad,.sidebar-box-ads,.sidebar-content-ad,.sidebar-header-ads,.sidebar-outbrain,.sidebar-skyscraper-ad,.sidebar-sponsored,.sidebar-sponsors,.sidebar-square-ad,.sidebar-sticky--ad,.sidebar-text-ad,.sidebar-top-ad,.sidebar-top-banner,.sidebar-tower-ad,.sidebar-zergnet,.sidebarAD,.sidebarAd,.sidebarAdvert,.sidebar__ad,.sidebar_ad,.sidebar_ad_300,.sidebar_ad_300_250,.sidebar_ad_container,.sidebar_ad_holder,.sidebar_ad_leaderboard,.sidebar_ad_module,.sidebar_ads,.sidebar_ads_left,.sidebar_ads_right,.sidebar_ads_title,.sidebar_adsense,.sidebar_advertising,.sidebar_box_ad,.sidebar_right_ad,.sidebar_skyscraper_ad,.sidebar_sponsors,.sidebarad,.sidebarad_bottom,.sidebaradbox,.sidebaradcontent,.sidebarads,.sidebaradsense,.sidebarbox__advertising,.sidebarboxad,.sidebox-ad,.sidebox_ad,.sideright_ads,.sideskyad,.signad,.simple-ad-placeholder,.simple_ads_manager_widget,.simple_adsense_widget,.simplead-container,.simpleads-item,.single-ad,.single-ad-anchor,.single-ad-wrap,.single-ads,.single-ads-section,.single-bottom-ads,.single-mpu,.single-post-ad,.single-post-ads,.single-post-bottom-ads,.single-top-ad,.singleAd,.singleAdBox,.singleAdsContainer,.singlePostAd,.single__outbrain,.single_ad,.single_ad_300x250,.single_advert,.single_bottom_ad,.single_top_ad,.singlead,.singleads,.singleadstopcstm2,.singlebanner,.singlepageleftad,.singlepostad,.singlepostadsense,.singpagead,.sister-ads,.site-ad-block,.site-ads,.site-bottom-ad-slot,.site-head-ads,.site-header-ad,.site-header__ads,.site-top-ad,.siteWideAd,.site_ad,.site_ad--gray,.site_ad--label,.site_ads,.site_sponsers,.sitesponsor,.skinAd,.sky-ad,.sky-ad1,.skyAd,.skyAdd,.skyAdvert,.skyAdvert2,.sky_ad,.sky_ad_top,.skyad,.skyscraper-ad,.skyscraper-ad-1,.skyscraper-ad-container,.skyscraper.ad,.skyscraperAd,.skyscraper_ad,.skyscrapper-ads-container,.slate-ad,.slide-ad,.slideAd,.slide_ad,.slidead,.slider-ads,.slider-item-ad,.slider-right-advertisement-banner,.sliderad,.slideshow-ad,.slideshow-ad-container,.slideshow-ad-wrapper,.slideshow-ads,.slideshowAd,.slideshowadvert,.slottaboola,.sm-ad,.sm-admgnr-unit,.sm-ads,.sm-advertisement,.sm-widget-ad-holder,.sm_ad,.small-ad,.small-ad-header,.small-ad-long,.smallAd,.smallAdContainer,.smallAds,.smallAdvertisments,.small_ad_bg,.small_ads,.smallad,.smalladblock,.smalladscontainer,.smallsponsorad,.smart-ad,.smartAd,.smartad,.smn-new-gpt-ad,.snhb-ads-en,.snippet-ad,.snoadrotatewidgetwrap,.speakol-widget,.spinAdvert,.splashy-ad-container,.spon_link,.sponadbox,.sponlinkbox,.spons-link,.spons-wrap,.sponsBox,.sponsLinks,.sponsWrap,.sponsbox,.sponser-link,.sponserLink,.sponslink,.sponsor-ads,.sponsor-area,.sponsor-block,.sponsor-bottom,.sponsor-box,.sponsor-btns,.sponsor-inner,.sponsor-left,.sponsor-link,.sponsor-links,.sponsor-popup,.sponsor-post,.sponsor-right,.sponsor-spot,.sponsor-text,.sponsor-text-container,.sponsor-wrap,.sponsorAd,.sponsorArea,.sponsorBottom,.sponsorBox,.sponsorFooter,.sponsorFooter-container,.sponsorLabel,.sponsorLink,.sponsorLinks,.sponsorPanel,.sponsorPost,.sponsorPostWrap,.sponsorStrip,.sponsorText,.sponsorTxt,.sponsor_ad,.sponsor_ad1,.sponsor_ad2,.sponsor_ad_area,.sponsor_ad_section,.sponsor_area,.sponsor_bar,.sponsor_block,.sponsor_columns,.sponsor_div,.sponsor_footer,.sponsor_image,.sponsor_label,.sponsor_line,.sponsor_links,.sponsor_logo,.sponsor_placement,.sponsor_popup,.sponsor_units,.sponsorad,.sponsoradlabel,.sponsorads,.sponsoradtitle,.sponsored-ad,.sponsored-ad-container,.sponsored-ad-label,.sponsored-add,.sponsored-ads,.sponsored-article-item,.sponsored-article-widget,.sponsored-block,.sponsored-buttons,.sponsored-container,.sponsored-container-bottom,.sponsored-default,.sponsored-display-ad,.sponsored-header,.sponsored-link,.sponsored-links,.sponsored-post,.sponsored-post-container,.sponsored-result,.sponsored-results,.sponsored-right,.sponsored-slot,.sponsored-tag,.sponsored-text,.sponsored-top,.sponsored-widget,.sponsoredAd,.sponsoredAds,.sponsoredBanners,.sponsoredBar,.sponsoredBottom,.sponsoredBox,.sponsoredContent,.sponsoredEntry,.sponsoredFeature,.sponsoredInfo,.sponsoredInner,.sponsoredLabel,.sponsoredLeft,.sponsoredLink,.sponsoredLinks,.sponsoredLinks2,.sponsoredLinksBox,.sponsoredListing,.sponsoredProduct,.sponsoredResults,.sponsoredSearch,.sponsoredTop,.sponsored_ad,.sponsored_ads,.sponsored_bar_text,.sponsored_box,.sponsored_by,.sponsored_link,.sponsored_links,.sponsored_links2,.sponsored_links_box,.sponsored_links_container,.sponsored_links_section,.sponsored_post,.sponsored_result,.sponsored_results,.sponsored_sidepanel,.sponsored_ss,.sponsored_text,.sponsored_title,.sponsored_well,.sponsoredby,.sponsoredlink,.sponsoredlinks,.sponsoredresults,.sponsorheader,.sponsoringbanner,.sponsorlink,.sponsorlink2,.sponsormsg,.sponsors-advertisment,.sponsors-box,.sponsors-footer,.sponsors-module,.sponsors-widget,.sponsorsBanners,.sponsors_box_container,.sponsors_links,.sponsors_spacer,.sponsorsbanner,.sponsorsbig,.sponsorship-banner-bottom,.sponsorship-box,.sponsorship-chrome,.sponsorship-container,.sponsorship-leaderboard,.sponsorshipContainer,.sponsorship_ad,.sponsorshipbox,.sponsorwrapper,.sponstitle,.sponstop,.spot-ad,.spot_wrapper,.spotim-amp-list-ad,.spotlight-ad,.spotlightAd,.spots-title,.spt-footer-ad,.spub,.sq_ad,.sqrd-ad-manager,.square-ad,.square-ad-1,.square-ad-container,.square-ad-pane,.square-ads,.square-advt,.square-adwrap,.square-sidebar-ad,.square-sponsorship,.squareAd,.squareAdWrap,.squareAdd,.squareAddtwo,.squareAds,.square_ad,.squaread,.squaread-container,.squareadMain,.squareads,.squared_ad,.squirrel_widget,.sr-adsense,.sr-advert,.sraAdvert,.srp-sidebar-ads,.ssp-advert,.standalonead,.standard-ad,.standard-ad-container,.standard_ad_slot,.static-ad,.staticAd,.static_mpu_wrap,.staticad,.sterra-ad,.stick-ad-container,.stickad,.sticky-ad,.sticky-ad-bottom,.sticky-ad-container,.sticky-ad-footer,.sticky-ad-header,.sticky-ad-wrapper,.sticky-ads,.sticky-ads-container,.sticky-ads-content,.sticky-adsense,.sticky-advert-widget,.sticky-bottom-ad,.sticky-footer-ad,.sticky-footer-ad-container,.sticky-navbar-ad-container,.sticky-rail-ad-container,.sticky-side-ad {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}.sticky-sidebar-ad,.sticky-top-ad-wrap,.stickyAd,.stickyAdWrapper,.stickyAdsGroup,.stickyContainerMpu,.stickyRailAd,.sticky_ad_sidebar,.sticky_ad_wrapper,.sticky_ads,.stickyad,.stickyads,.stickyadv,.stky-ad-footer,.stm-ad-player,.stmAdHeightWidget,.stock_ad,.stocks-ad-tag,.store-ads,.story-ad,.story-ad-container,.story-ad-right,.story-inline-advert,.story-patrocinio,.storyAd,.storyAdvert,.story__top__ad,.story_ad_div,.story_body_advert,.storyad,.storyad300,.storyadHolderAfterLoad,.stpro_ads,.str-top-ad,.strack_bnr,.strawberry-ads,.strawberry-ads__pretty-container,.stream-ad,.streamAd,.strip-ad,.strip-banner,.stripad,.style_k8mr7b-o_O-style_uhlm2,.sub-ad,.subAdBannerArea,.subAdBannerHeader,.subNavAd,.subad,.subheader_adsense,.submenu_ad,.subnav-ad-layout,.subnav-ad-wrapper,.subscribeAd,.subscriber-ad,.subscribox-ad,.sudoku-ad,.sugarad,.suggAd,.super-ad,.superbanner-adcontent,.support_ad,.swipedAd,.tabAd,.tabAds,.tab_ad,.tab_ad_area,.table-ad,.tableAd1,.tablet-ad,.taboola,.taboola-above-article,.taboola-above-article-thumbnails,.taboola-ad,.taboola-banner,.taboola-block,.taboola-bottom-adunit,.taboola-container,.taboola-frame,.taboola-general,.taboola-in-plug-wrap,.taboola-inbetweener,.taboola-item,.taboola-like-block,.taboola-module,.taboola-recommends,.taboola-sidebar,.taboola-sidebar-container,.taboola-skip-wrapper,.taboola-thumbnails-container,.taboola-vertical,.taboola-widget,.taboola-wrapper,.taboolaArticle,.taboolaDiv,.taboolaHeight,.taboola__container,.taboola_blk,.taboola_body_ad,.taboola_container,.taboola_lhs,.taboola_module,.taboolaloader,.tadm_ad_unit,.takeover-ad,.tallAdvert,.tallad,.tbboxad,.tc-adbanner,.tc_ad,.tc_ad_unit,.tcf-ad,.td-a-ad,.td-a-rec-id-custom_ad_1,.td-a-rec-id-custom_ad_2,.td-a-rec-id-custom_ad_3,.td-a-rec-id-custom_ad_4,.td-a-rec-id-custom_ad_5,.td-ad,.td-ad-m,.td-ad-p,.td-ad-tp,.td-adspot-title,.td-g-rec-id-custom_ad_3,.td-sponsor-title,.tdAdHeader,.td_ad,.td_footer_ads,.td_left_widget_ad,.td_leftads,.td_reklama_bottom,.td_reklama_top,.td_spotlight_ads,.teaser--advertorial,.teaser-ad,.teaser-advertisement,.teaser-sponsor,.teaserAd,.teaserAdContainer,.teaserAdHeadline,.teaser_ad,.templates_ad_placement,.test-adsense,.testAd-holder,.text-ad-sitewide,.text-ad-top,.text-advertisement,.text-panel-ad,.text-sponsor,.textAd3,.textAdBlock,.textAdBox,.textAds,.textLinkAd,.textSponsor,.text_ad_title,.text_ad_website,.text_ads_2,.text_ads_wrapper,.text_adv,.textadContainer,.textadbox,.textadlink,.textadscontainer,.textadsds,.textadsfoot,.textadtext,.textlinkads,.th-ad,.thb_ad_before_header,.thb_ad_header,.theAdvert,.theads,.theleftad,.themonic-ad1,.themonic-ad2,.themonic-ad3,.themonic-ad6,.third-party-ad,.thumb--adv,.thumb-ads,.thumb_ad,.thumbnailad,.thumbs-adv,.thumbs-adv-holder,.tile--ad,.tile-ad,.tile-ad-container,.tile-advert,.tileAdContainer,.tileAdWrap,.tileAds,.tile_AdBanner,.tile_ad,.tile_ad_container,.tips_advertisement,.title-ad,.tl-ad-container,.tmiads,.tmo-ad,.tmo-ad-ezoic,.tncls_ad,.tncls_ad_250,.tncls_ad_300,.tnt-ads,.tnt-ads-container,.tnt-dmp-reactive,.tnw-ad,.toaster-ad,.toolkit-ad-shell,.top-300-ad,.top-ad-728,.top-ad-970x90,.top-ad-anchor,.top-ad-area,.top-ad-banner-wrapper,.top-ad-bloc,.top-ad-block,.top-ad-center,.top-ad-container,.top-ad-content,.top-ad-deck,.top-ad-desktop,.top-ad-div,.top-ad-horizontal,.top-ad-inside,.top-ad-module,.top-ad-recirc,.top-ad-right,.top-ad-sidebar,.top-ad-slot,.top-ad-space,.top-ad-sticky,.top-ad-unit,.top-ad-wrap,.top-ad-wrapper,.top-ad-zone,.top-ad1,.top-ad__sticky-wrapper,.top-adbox,.top-add,.top-ads,.top-ads-amp,.top-ads-block,.top-ads-bottom-bar,.top-ads-container,.top-ads-mobile,.top-ads-wrapper,.top-adsense,.top-adsense-banner,.top-adspace,.top-adv,.top-adv-container,.top-adverbox,.top-advert,.top-advertisement,.top-banner-468,.top-banner-ad,.top-banner-ad-container,.top-banner-ad-wrapper,.top-banner-add,.top-banner-ads,.top-banner-advert,.top-bar-ad-related,.top-bar-adblock,.top-box-right-ad,.top-content-adplace,.top-dfp-wrapper,.top-fixed-ad,.top-half-page-ad,.top-header-ad,.top-header-ad1,.top-horiz-ad,.top-horizontal-ad,.top-item-ad,.top-leaderboard-ad,.top-left-ad,.top-menu-ads,.top-post-ad,.top-post-ads,.top-right-ad,.top-side-advertisement,.top-sidebar-ad,.top-sidebar-adbox,.top-site-ad,.top-sponsored-header,.top-story-ad,.top-topics__ad,.top-wide-ad-container,.top.ad,.top250Ad,.top300ad,.topAD,.topAd728x90,.topAdBanner,.topAdBar,.topAdBlock,.topAdCenter,.topAdContainer,.topAdIn,.topAdLeft,.topAdRight,.topAdSpacer,.topAdWrap,.topAdWrapper,.topAdd,.topAds,.topAdsWrappper,.topAdvBox,.topAdvert,.topAdvertisement,.topAdvertistemt,.topAdverts,.topAlertAds,.topArtAd,.topArticleAds,.topBannerAd,.topBarAd,.topBoxAdvertisement,.topLeaderboardAd,.topRightAd,.top_Ad,.top__ad,.top_ad1,.top_ad_728,.top_ad_728_90,.top_ad_banner,.top_ad_big,.top_ad_disclaimer,.top_ad_div,.top_ad_holder,.top_ad_inner,.top_ad_label,.top_ad_list,.top_ad_long,.top_ad_post,.top_ad_responsive,.top_ad_seperate,.top_ad_short,.top_ad_wrap,.top_ad_wrapper,.top_adbox1,.top_adbox2,.top_adh,.top_ads,.top_ads_container,.top_adsense,.top_adspace,.top_adv,.top_adv_content,.top_advert,.top_advertisement,.top_advertising_lb,.top_advertizing_cnt,.top_bar_ad,.top_big_ads,.top_container_ad,.top_corner_ad,.top_head_ads,.top_header_ad,.top_header_ad_inner,.top_right_ad,.top_rightad,.top_side_adv,.top_sponsor,.topad-area,.topad-bar,.topad-bg,.topad1,.topad2,.topadbar,.topadblock,.topadbox,.topadcont,.topadrow,.topads-spacer,.topads728,.topadsbx,.topadsection,.topadspace,.topadspot,.topadtara,.topadtxt,.topadvert,.topbannerAd,.topbar-ad-parent,.topbar-ad-unit,.topboardads,.topright_ad,.topside_ad,.topsidebarad,.tout-ad,.tout-ad-embed,.tower-ad,.tower-ad-abs,.tower-ad-b,.tower-ad-wrapper,.tower-ads-container,.towerAd,.towerAdLeft,.towerAds,.tower_ad,.tower_ad_desktop,.tower_ad_disclaimer,.towerad,.tp-ad-label,.tp_ads,.tpd-banner-ad-container,.tpd-banner-desktop,.tpd-box-ad-d,.trb_taboola,.trc-content-sponsored,.trc-content-sponsoredUB,.trc-first-recommendation,.trc-spotlight-first-recommendation,.trc_excludable,.trc_rbox,.trc_rbox_border_elm,.trc_rbox_div,.trc_related_container,.trc_spotlight_item,.trend-card-advert,.trend-card-advert__title,.tsm-ad,.tt_ads,.ttb_adv_bg,.tw-adv-gpt,.txtPubli,.txt_ads,.txtad_area,.txtadbox,.txtadvertise,.type-ad,.u-ads,.u-lazy-ad-wrapper,.u-margin-auto.banner,.udn-ads,.ue-c-ad,.ult_vp_videoPlayerAD,.under-header-ad,.under-player-ad,.under-player-ads,.under_ads,.underplayer__ad,.underplayer_banner,.uniAdBox,.uniAds,.unionAd,.unit-ad,.unspoken-adplace,.upper-ad-box,.upper-ad-space,.upper_ad,.upx-ad-placeholder,.us_ad,.uvs-ad-full-width,.v-adv,.vadvert,.van_taboola,.van_vid_carousel,.variable-ad,.variableHeightAd,.vce-ad-below-header,.vce-ad-container,.vce-header-ads,.vce_adsense_expand,.vce_adsense_widget,.vce_adsense_wrapper,.vdvwad,.vert-ad,.vert-ads,.vertad,.vertical-ad,.vertical-adsense,.vertical-trending-ads,.verticalAd,.verticalAdText,.vertical_ad,.vertical_ads,.verticalad,.vf-ad-comments,.vf-conversation-starter__ad,.vf-promo-gtag,.vf3-conversations-list__promo,.vi-sticky-ad,.video--container--aniview,.video-ad-bottom,.video-ad-container,.video-ad-content,.video-ads-container,.video-ads-grid,.video-ads-wrapper,.video-adv,.video-advert,.video-archive-ad,.video-boxad,.video-inline-ads,.video-page__adv,.video-right-ad,.video-right-ads,.video-side__adv_title,.videoAd-wrapper,.videoAd300,.videoBoxAd,.videoOverAd300,.videoOverAdSmall,.videoPauseAd,.videoSideAds,.video__banner,.video_ad,.video_ads,.video_ads_overdiv,.videoad,.videoad-base,.videoad2,.videos-ad-wrap,.vidible-wrapper,.view-Advertisment,.view-ad,.view-ads,.view-advertisement,.view-advertisements,.view-advertorials,.view-adverts,.view-article-inner-ads,.view-homepage-center-ads,.view-id-Advertisment,.view-id-ads,.view-id-advertisement,.view-image-ads,.view-site-ads,.view_ad,.views-field-field-ad,.views-row-ads,.vip-section-advertising,.visibleAd,.vjs-ad-iframe,.vjs-ad-overlay,.vjs-ima3-ad-container,.vjs-marker-ad,.vjs-overlay.size-300x250,.vl-ad-item,.vl-advertisment,.vl-header-ads,.vlog-ad,.vm-ad-horizontal,.vmag_medium_ad,.voc-advertising,.voc-article--sponsored,.voc-ob-wrapper,.voc-sponsored,.voc-sponsored-and-adv,.vodl-ad__bigsizebanner,.vpnad,.vs-advert-300x250,.vsw-ads,.vswAdContainer,.vuukle-ad-block,.vuukle-ads,.vw-header__ads,.w-ad-box,.w-content--ad,.wAdvert,.w_AdExternal,.w_ad,.waf-ad,.wahAd,.wahAdRight,.waldo-display-unit,.waldo-placeholder,.waldo-placeholder-bottom,.wall-ads-control,.wall-ads-left,.wall-ads-right,.wallAd,.wall_ad,.wallad,.wcAd,.wcfAdLocation,.wd-adunit,.wdca_ad_item,.wdca_custom_ad,.wdt_ads,.weatherad,.web_ads,.webadvert-container,.webpart-wrap-advert,.website-ad-space,.well-ad,.werbungAd,.wfb-ad,.wg-ad-square,.wh-advert,.wh_ad,.wh_ad_inner,.when-show-ads,.wide-ad,.wide-ad-container,.wide-ad-new-layout,.wide-ad-outer,.wide-ads-container,.wide-advert,.wide-footer-ad,.wide-header-ad,.wide-skyscraper-ad,.wideAd,.wideAdTable,.widePageAd,.wide_ad,.wide_adBox_footer,.wide_ad_unit,.wide_ad_unit_top,.wide_ads,.wide_google_ads,.wide_grey_ad_box,.wide_sponsors,.widead,.wideadbox,.widget--ad,.widget--ajdg_bnnrwidgets,.widget--local-ads,.widget-300x250ad,.widget-ad,.widget-ad-codes,.widget-ad-image,.widget-ad-script,.widget-ad-sky,.widget-ad-zone,.widget-ad300x250,.widget-adcode,.widget-ads,.widget-adsense,.widget-adv,.widget-advads-ad-widget,.widget-advert-970,.widget-advertisement,.widget-dfp,.widget-group-Ads,.widget-highlight-ads,.widget-publi,.widget-sponsor,.widget-sponsor--container,.widget-text-ad,.widget1-ad,.widget10-ad,.widget4-ad,.widget6-ad,.widget7-ad,.widgetAD,.widgetAds,.widgetContentIfrWrapperAd,.widgetSponsors,.widget_300x250_advertisement,.widget_abn_admanager_sidestealer,.widget_ad,.widget_ad-widget,.widget_ad125,.widget_ad300,.widget_ad_300,.widget_ad_boxes_widget,.widget_ad_layers_ad_widget,.widget_ad_rotator,.widget_ad_widget,.widget_adace_ads_widget,.widget_admanagerwidget,.widget_adrotate_widgets,.widget_ads,.widget_ads_entries,.widget_ads_widget,.widget_adsblock,.widget_adsensem,.widget_adsensewidget,.widget_adsingle,.widget_adswidget1-quick-adsense,.widget_adswidget2-quick-adsense,.widget_adswidget3-quick-adsense,.widget_adv_location,.widget_adv_text,.widget_advads_ad_widget,.widget_advert,.widget_advert_content,.widget_advert_widget,.widget_advertisement,.widget_advertisements,.widget_advertisment,.widget_advwidget,.widget_alaya_ad,.widget_arvins_ad_randomizer,.widget_awaken_pro_medium_rectangle_ad,.widget_better-ads,.widget_categorias_publi,.widget_com_ad_widget,.widget_core_ads_desk,.widget_cpxadvert_widgets,.widget_customad_widget,.widget_customadvertising,.widget_dfp,.widget_doubleclick_widget,.widget_ep_rotating_ad_widget,.widget_epcl_ads_fluid,.widget_evolve_ad_gpt_widget,.widget_html_snippet_ad_widget,.widget_ima_ads,.widget_ione-dart-ad,.widget_ipm_sidebar_ad,.widget_island_ad,.widget_joblo_complex_ad,.widget_long_ads_widget,.widget_newspack-ads-widget,.widget_njads_single_widget,.widget_openxwpwidget,.widget_outbrain,.widget_outbrain_widget,.widget_plugrush_widget,.widget_pmc-ads-widget,.widget_quads_ads_widget,.widget_rdc_ad_widget,.widget_sej_sidebar_ad,.widget_sidebar_adrotate_tedo_single_widget,.widget_sidebaradwidget,.widget_singlead,.widget_sponsored_content,.widget_supermag_ad,.widget_supernews_ad,.widget_taboola,.widget_text_adsense,.widget_text_publicidad,.widget_themoneytizer_widget,.widget_thesun_dfp_ad_widget,.widget_tt_ads_widget,.widget_viral_advertisement,.widget_wp-bannerize-widget,.widget_wp_ads_gpt_widget,.widget_wp_insert_ad_widget,.widget_wpex_advertisement,.widget_wpstealthads_widget,.widgetads,.width-ad-slug,.wikia-ad,.wio-xbanner,.wl_WidgetRel_Record_Div.wl_WidgetRel_Sponsor,.worldplus-ad,.wp-ads-target,.wp-block-ad-slot,.wp-block-gamurs-ad,.wp-block-tpd-block-tpd-ads,.wp125ad,.wp125ad_2,.wp_bannerize,.wp_bannerize_banner_box,.wp_bannerize_container,.wpadcenter-ad-container,.wpadvert,.wpd-advertisement,.wpex-ads-widget,.wppaszone,.wpvqgr-a-d-s,.wpx-bannerize,.wpx_bannerize,.wpx_bannerize_banner_box,.wrap-ad,.wrap-ads,.wrap-bnr,.wrap_boxad,.wrapad,.wrapper-ad,.wrapper-banner-box-wallpaper,.wrapper-banner-wallpaper,.wrapper-header-ad-slot,.wrapper_ad,.wrapper_advertisement,.wrapperad,.ww_ads_banner_wrapper,.xeiro-ads,.xmlad,.xplayer-banner,.xplayer-banner-bottom,.xpot-horizontal,.y-ads,.y-ads-wide,.yaAds,.yad-sponsored,.yahooAd,.yahooAds,.yahoo_ad,.yahoo_ads,.yahooad,.yahooads,.yan-sponsored,.zerg-widget,.zerg-widgets,.zergnet,.zergnet-holder,.zergnet-row,.zergnet-unit,.zergnet-widget,.zergnet-widget-container,.zergnet-widget__header,.zergnet-widget__subtitle,.zergnet__container,.zeus-ad,.zeusAdWrapper,.zeusAd__container,.zmgad-full-width,.zmgad-right-rail,.zone-advertisement,.zoneAds,.zox-post-ad-wrap,.zox-post-bot-ad,.zox-widget-side-ad,.zox_ad_widget,.zox_adv_widget,AD-SLOT,AD-TRIPLE-BOX,AMP-AD,A[href*="delivery.bb2021.info"],DFP-AD,IFRAME[src*="alosafada.com/barra-disksexo/"],[alt="banner-300-x-250"],[class][data-sitename][data-header-version] > div[id^="detection-block"],[class^="adDisplay-module"],[class^="adFrameDiv"],[class^="adv_bottom_table"],[class^="amp-ad-"],[class^="div-gpt-ad"],[class^="s2nPlayer"],[class^="tile-picker__CitrusBannerContainer-sc-"],[data-ad-cls],[data-ad-manager-id],[data-ad-module],[data-ad-width],[data-adbridg-ad-class],[data-adshim],[data-advadstrackid],[data-block-type="ad"],[data-css-class="dfp-inarticle"],[data-d-ad-id],[data-desktop-ad-id],[data-dynamic-ads],[data-ez-name],[data-freestar-ad][id],[data-id^="div-gpt-ad"],[data-identity="adhesive-ad"],[data-m-ad-id],[data-mobile-ad-id],[data-name="adaptiveConstructorAd"],[data-rc-widget="data-rc-widget"],[data-rc-widget],[data-revive-zoneid] > iframe,[data-role="tile-ads-module"],[data-taboola-options],[data-template-type="nativead"],[data-testid="adBanner-wrapper"],[data-testid="ad_testID"],[data-testid="prism-ad-wrapper"],[data-type="ad-vertical"],[data-wpas-zoneid],[href*=".afquptvqzw.biz"],[href*=".djuzsbnnm.biz"],[href*=".igkxr.biz"],[href*="/exoads/b/"],[href*="asyaaffiliate.com"] > *,[href*="edintorni.net/related/service/sponsor/redirect/"] > *,[href*="go2cloud.org/aff_"],[href*="mtwbedsl.biz"],[href*="nepeoripa.biz"],[href*="play4k.tv/download/"],[href*="territoryparcel.bid"],[href*="tmstrack.com"][target="_blank"],[href*="xxxpostpic.org/adslink.php"],[href="//sexcams.plus/"],[href="https://goo.gl/WRmu17"] > IMG,[href="https://jdrucker.com/gold"] > img,[href="https://masstortfinancing.com"] img,[href="https://ourgoldguy.com/contact/"] img,[href="https://www.masstortfinancing.com/"] > img,[href^="http://ads.glispa.com/"],[href^="http://bannerstrckr.com/click.php"],[href^="http://clicks.totemcash.com/"],[href^="http://friwap.ru/go/"],[href^="http://m.hsrve.com/click.php"],[href^="http://pixelmarkway.com/"],[href^="http://track.brucelead.com/"][target="_blank"],[href^="http://track.double6-track"][target="_blank"],[href^="http://www.outbrain.com/what-is/default/"] IMG,[href^="http://xifg6h.ru/click/"],[href^="https://ad.admitad.com/"],[href^="https://ad1.adfarm1.adition.com/"],[href^="https://adsrv.me/"],[href^="https://affiliate.fastcomet.com/"] > img,[href^="https://antiagingbed.com/discount/"] > img,[href^="https://ap.octopuspop.com/click/"] > img,[href^="https://app.monetizze.com.br"][target="_blank"],[href^="https://awbbjmp.com/"],[href^="https://charmingdatings.life/"],[href^="https://clicks.affstrack.com/"] > img,[href^="https://cpa.10kfreesilver.com/"],[href^="https://glersakr.com/"],[href^="https://go.xlrdr.com"],[href^="https://goldcometals.com/clk.trk"],[href^="https://ilovemyfreedoms.com/landing-"],[href^="https://istlnkcl.com/"],[href^="https://join.girlsoutwest.com/"],[href^="https://join.playboyplus.com/track/"],[href^="https://join3.bannedsextapes.com"],[href^="https://mylead.global/stl/"] > img,[href^="https://optimizedelite.com/"] > img,[href^="https://questolovoglio.com/"][target="_blank"],[href^="https://rapidgator.net/article/premium/ref/"],[href^="https://routewebtk.com/"],[href^="https://shiftnetwork.infusionsoft.com/go/"] > img,[href^="https://t.bawafx.com/"],[href^="https://t.frty"],[href^="https://t.grty"],[href^="https://t.irty"],[href^="https://toroadvertisingmedia.com/ads"][target="_blank"],[href^="https://track.aftrk1.com/"],[href^="https://track.fiverr.com/visit/"] > img,[href^="https://turtlebids.irauctions.com/"] img,[href^="https://v.investologic.co.uk/"],[href^="https://wct.link/click?"],[href^="https://www.avantlink.com/click.php"] img,[href^="https://www.brighteonstore.com/products/"] img,[href^="https://www.cloudways.com/en/?id"],[href^="https://www.grand-ads.com/ads/click"],[href^="https://www.hostg.xyz/"] > img,[href^="https://www.profitablegatecpm.com/"],[href^="https://www.targetingpartner.com/"],[href^="https://zone.gotrackier.com/"],[id^="ad-wrap-"],[id^="ad_sky"],[id^="ad_slider"],[id^="bannerId"],[id^="section-ad-banner"],[id^="smi2adblock"],[name^="google_ads_iframe"],[onclick*="content.ad/"],[onclick^="location.href='https://1337x.vpnonly.site/"],[src^="https://a.adtng.com/"],[target="_blank"] > .banner-img,a > #bg-ad,a-ad,a[data-href^="http://ads.trafficjunky.net/"],a[data-oburl^="https://paid.outbrain.com/network/redir?"],a[data-redirect^="https://paid.outbrain.com/network/redir?"],a[data-url^="https://vulpix.bet/?ref="],a[href*="&maxads="],a[href*=".adsrv.eacdn.com/"],a[href*=".cfm?domain="][href*="&fp="],a[href*=".engine.adglare.net/"],a[href*=".foxqck.com/"],a[href*=".g2afse.com/"],a[href*=".kfiopkln.com/"],a[href*="//daichoho.com/"],a[href*="//jjgirls.com/sex/Chaturbate"],a[href*="/jump/next.php?r="],a[href*="://adpv.com/?idpartner="],a[href*="://mobidea.com/?r="],a[href*="://yllix.com/publishers/"],a[href*="aclaritics.info/"],a[href*="adtracks.biz"],a[href*="bubblesmedia.ru/sb/clk/"],a[href*="ex.24smi.info"],a[href*="https://relap.io/r?"],a[href^=" https://www.friendlyduck.com/AF_"],a[href^="//ejitsirdosha.net/"],a[href^="//go.eabids.com/"],a[href^="//native.publy.com/related/service/sponsor/"],a[href^="//s.st1net.com/splash.php"],a[href^="//s.zlinkd.com/"],a[href^="//stighoazon.com/"],a[href^="//w.linkwelove.com/urls/"],a[href^="/bitrix/rk.php"][target="_blank"],a[href^="://popads.net/users/refer/"],a[href^="://seedingup.es/afiliados.html?id="],a[href^="http://adultfriendfinder.com/go/"],a[href^="http://annulmentequitycereals.com/"],a[href^="http://avthelkp.net/"],a[href^="http://bongacams.com/track?"],a[href^="http://cam4com.go2cloud.org/aff_c?"],a[href^="http://click.revsharecash.com"],a[href^="http://coefficienttolerategravel.com/"],a[href^="http://com-1.pro/"],a[href^="http://deskfrontfreely.com/"],a[href^="http://dragfault.com/"],a[href^="http://dragnag.com/"],a[href^="http://eighteenderived.com/"],a[href^="http://eslp34af.click/"],a[href^="http://guestblackmail.com/"],a[href^="http://handgripvegetationhols.com/"],a[href^="http://li.blogtrottr.com/click?"],a[href^="http://muzzlematrix.com/"],a[href^="http://naggingirresponsible.com/"],a[href^="http://partners.etoro.com/"],a[href^="http://premonitioninventdisagree.com/"],a[href^="http://revolvemockerycopper.com/"],a[href^="http://sarcasmadvisor.com/"],a[href^="http://secure.spoiledvirgins.com"],a[href^="http://stickingrepute.com/"],a[href^="http://tc.tradetracker.net/"] > img,a[href^="http://trk.globwo.online/"] {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}a[href^="http://troopsassistedstupidity.com/"],a[href^="http://tubecorporate.com/home/advertising"],a[href^="http://vnte9urn.click/"],a[href^="http://wlx-secure.com/"],a[href^="http://www.adultempire.com/unlimited/promo?"][href*="&partner_id="],a[href^="http://www.amigos.com/go/"],a[href^="http://www.friendlyduck.com/AF_"],a[href^="http://www.fucking-cash.com"],a[href^="http://www.h4trck.com/"],a[href^="http://www.iyalc.com/"],a[href^="https://123-stream.org/"],a[href^="https://1betandgonow.com/"],a[href^="https://6-partner.com/"],a[href^="https://81ac.xyz/"],a[href^="https://a-ads.com/"],a[href^="https://a.adtng.com/"],a[href^="https://a.bestcontentfood.top/"],a[href^="https://a.bestcontentoperation.top/"],a[href^="https://a.bestcontentweb.top/"],a[href^="https://a.candyai.love/"],a[href^="https://a.medfoodhome.com/"],a[href^="https://a.medfoodsafety.com/"],a[href^="https://a2.adform.net/"],a[href^="https://ab.advertiserurl.com/aff/"],a[href^="https://activate-game.com/"],a[href^="https://ad.soicos.com/"],a[href^="https://ad.zanox.com/ppc/"] > img,a[href^="https://adclick.g.doubleclick.net/"],a[href^="https://ads.betfair.com/redirect.aspx?"],a[href^="https://ads.leovegas.com/"],a[href^="https://ads.planetwin365affiliate.com/"],a[href^="https://adultfriendfinder.com/go/"],a[href^="https://ak.hauchiwu.com/"],a[href^="https://ak.oalsauwy.net/"],a[href^="https://ak.psaltauw.net/"],a[href^="https://allhost.shop/aff.php?"],a[href^="https://auesk.cfd/"],a[href^="https://ausoafab.net/"],a[href^="https://aweptjmp.com/"],a[href^="https://awptjmp.com/"],a[href^="https://baipahanoop.net/"],a[href^="https://banners.livepartners.com/"],a[href^="https://bc.game/"],a[href^="https://billing.purevpn.com/aff.php"] > img,a[href^="https://black77854.com/"],a[href^="https://bngprm.com/"],a[href^="https://bngpt.com/"],a[href^="https://bodelen.com/"],a[href^="https://bongacams10.com/track?"],a[href^="https://bongacams2.com/track?"],a[href^="https://bs.serving-sys.com"],a[href^="https://cam4com.go2cloud.org/"],a[href^="https://camfapr.com/landing/click/"],a[href^="https://cams.imagetwist.com/in/?track="],a[href^="https://chaturbate.com/in/?"],a[href^="https://chaturbate.jjgirls.com/?track="],a[href^="https://claring-loccelkin.com/"],a[href^="https://click.candyoffers.com/"],a[href^="https://click.dtiserv2.com/"],a[href^="https://click.hoolig.app/"],a[href^="https://click.linksynergy.com/fs-bin/"] > img,a[href^="https://clickadilla.com/"],a[href^="https://clickins.slixa.com/"],a[href^="https://clicks.pipaffiliates.com/"],a[href^="https://clixtrac.com/"],a[href^="https://combodef.com/"],a[href^="https://ctjdwm.com/"],a[href^="https://ctosrd.com/"],a[href^="https://ctrdwm.com/"],a[href^="https://datewhisper.life/"],a[href^="https://disobediencecalculatormaiden.com/"],a[href^="https://dl-protect.net/"],a[href^="https://drumskilxoa.click/"],a[href^="https://eergortu.net/"],a[href^="https://engine.blueistheneworanges.com/"],a[href^="https://engine.flixtrial.com/"],a[href^="https://engine.phn.doublepimp.com/"],a[href^="https://explore-site.com/"],a[href^="https://fastestvpn.com/lifetime-special-deal?a_aid="],a[href^="https://fc.lc/ref/"],a[href^="https://financeads.net/tc.php?"],a[href^="https://gamingadlt.com/?offer="],a[href^="https://get-link.xyz/"],a[href^="https://get.surfshark.net/aff_c?"][href*="&aff_id="] > img,a[href^="https://getmatchedlocally.com/"],a[href^="https://getvideoz.click/"],a[href^="https://gml-grp.com/"],a[href^="https://go.admjmp.com"],a[href^="https://go.betobet.online/"],a[href^="https://go.bushheel.com/"],a[href^="https://go.cmtaffiliates.com/"],a[href^="https://go.dmzjmp.com"],a[href^="https://go.etoro.com/"] > img,a[href^="https://go.goaserv.com/"],a[href^="https://go.grinsbest.com/"],a[href^="https://go.hpyjmp.com"],a[href^="https://go.hpyrdr.com/"],a[href^="https://go.kingtrx.com/click"],a[href^="https://go.markets.com/visit/?bta="],a[href^="https://go.mnaspm.com/"],a[href^="https://go.nordvpn.net/aff"] > img,a[href^="https://go.rmhfrtnd.com/"],a[href^="https://go.skinstrip.net"][href*="?campaignId="],a[href^="https://go.strpjmp.com/"],a[href^="https://go.tmrjmp.com"],a[href^="https://go.trackitalltheway.com/"],a[href^="https://go.xlirdr.com"],a[href^="https://go.xlivrdr.com"],a[href^="https://go.xlviiirdr.com"],a[href^="https://go.xlviirdr.com"],a[href^="https://go.xlvirdr.com"],a[href^="https://go.xtbaffiliates.com/"],a[href^="https://go.xxxiijmp.com"],a[href^="https://go.xxxijmp.com"],a[href^="https://go.xxxjmp.com"],a[href^="https://go.xxxvjmp.com/"],a[href^="https://golinks.work/"],a[href^="https://hot-growngames.life/"],a[href^="https://hotplaystime.life/"],a[href^="https://in.rabbtrk.com/"],a[href^="https://intenseaffiliates.com/redirect/"],a[href^="https://iqbroker.com/"][href*="?aff="],a[href^="https://ismlks.com/"],a[href^="https://italarizege.xyz/"],a[href^="https://itubego.com/video-downloader/?affid="],a[href^="https://jaxofuna.com/"],a[href^="https://join.dreamsexworld.com/"],a[href^="https://join.sexworld3d.com/track/"],a[href^="https://join.virtuallust3d.com/"],a[href^="https://join.virtualtaboo.com/track/"],a[href^="https://juicyads.in/"],a[href^="https://kiksajex.com/"],a[href^="https://l.hyenadata.com/"],a[href^="https://land.brazzersnetwork.com/landing/"],a[href^="https://landing.brazzersnetwork.com/"],a[href^="https://lead1.pl/"],a[href^="https://lijavaxa.com/"],a[href^="https://lnkxt.bannerator.com/"],a[href^="https://lobimax.com/"],a[href^="https://loboclick.com/"],a[href^="https://lone-pack.com/"],a[href^="https://losingoldfry.com/"],a[href^="https://m.do.co/c/"] > img,a[href^="https://maymooth-stopic.com/"],a[href^="https://mediaserver.entainpartners.com/renderBanner.do?"],a[href^="https://mediaserver.gvcaffiliates.com/renderBanner.do?"],a[href^="https://mmwebhandler.aff-online.com/"],a[href^="https://myclick-2.com/"],a[href^="https://ngineet.cfd/"],a[href^="https://offhandpump.com/"],a[href^="https://osfultrbriolenai.info/"],a[href^="https://paid.outbrain.com/network/redir?"],a[href^="https://pb-front.com/"],a[href^="https://pb-imc.com/"],a[href^="https://pb-track.com/"],a[href^="https://play1ad.shop/"],a[href^="https://playnano.online/offerwalls/?ref="],a[href^="https://porntubemate.com/"],a[href^="https://postback1win.com/"],a[href^="https://prf.hn/click/"][href*="/adref:"] > img,a[href^="https://prf.hn/click/"][href*="/camref:"] > img,a[href^="https://prf.hn/click/"][href*="/creativeref:"] > img,a[href^="https://pubads.g.doubleclick.net/"],a[href^="https://quotationfirearmrevision.com/"],a[href^="https://random-affiliate.atimaze.com/"],a[href^="https://rixofa.com/"],a[href^="https://s.cant3am.com/"],a[href^="https://s.deltraff.com/"],a[href^="https://s.ma3ion.com/"],a[href^="https://s.optzsrv.com/"],a[href^="https://s.zlink3.com/"],a[href^="https://s.zlinkd.com/"],a[href^="https://safesurfingtoday.com/"][href*="?skip="],a[href^="https://serve.awmdelivery.com/"],a[href^="https://service.bv-aff-trx.com/"],a[href^="https://sexynearme.com/"],a[href^="https://slkmis.com/"],a[href^="https://snowdayonline.xyz/"],a[href^="https://softwa.cfd/"],a[href^="https://startgaming.net/tienda/"][href*="?offer_id="],a[href^="https://static.fleshlight.com/images/banners/"],a[href^="https://streamate.com/landing/click/"],a[href^="https://svb-analytics.trackerrr.com/"],a[href^="https://syndicate.contentsserved.com/"],a[href^="https://syndication.dynsrvtbg.com/"],a[href^="https://syndication.exoclick.com/"],a[href^="https://syndication.optimizesrv.com/"],a[href^="https://t.acam.link/"],a[href^="https://t.adating.link/"],a[href^="https://t.ajrkm1.com/"],a[href^="https://t.ajrkm3.com/"],a[href^="https://t.ajump1.com/"],a[href^="https://t.aslnk.link/"],a[href^="https://t.hrtye.com/"],a[href^="https://tatrck.com/"],a[href^="https://tc.tradetracker.net/"] > img,a[href^="https://tm-offers.gamingadult.com/"],a[href^="https://torguard.net/aff.php"] > img,a[href^="https://tour.mrskin.com/"],a[href^="https://track.1234sd123.com/"],a[href^="https://track.adform.net/"],a[href^="https://track.afcpatrk.com/"],a[href^="https://track.aftrk3.com/"],a[href^="https://track.totalav.com/"],a[href^="https://track.ultravpn.com/"],a[href^="https://track.wg-aff.com"],a[href^="https://tracker.loropartners.com/"],a[href^="https://tracking.avapartner.com/"],a[href^="https://traffdaq.com/"],a[href^="https://trk.nfl-online-streams.club/"],a[href^="https://trk.softonixs.xyz/"],a[href^="https://trk.sportsflix4k.club/"],a[href^="https://turnstileunavailablesite.com/"],a[href^="https://twinrdsrv.com/"],a[href^="https://upsups.click/"],a[href^="https://vario.tv/?offer_id="],a[href^="https://vario.tv/?raf="],a[href^="https://vo2.qrlsx.com/"],a[href^="https://voluum.prom-xcams.com/"],a[href^="https://witnessjacket.com/"],a[href^="https://www.adskeeper.com"],a[href^="https://www.adultempire.com/"][href*="?partner_id="],a[href^="https://www.adxsrve.com/"],a[href^="https://www.bang.com/?aff="],a[href^="https://www.bet365.com/"][href*="affiliate="],a[href^="https://www.brazzersnetwork.com/landing/"],a[href^="https://www.dating-finder.com/?ai_d="],a[href^="https://www.dating-finder.com/signup/?ai_d="],a[href^="https://www.dql2clk.com/"],a[href^="https://www.endorico.com/Smartlink/"],a[href^="https://www.financeads.net/tc.php?"],a[href^="https://www.friendlyduck.com/AF_"],a[href^="https://www.geekbuying.com/dynamic-ads/"],a[href^="https://www.get-express-vpn.com/offer/"],a[href^="https://www.goldenfrog.com/vyprvpn?offer_id="][href*="&aff_id="],a[href^="https://www.googleadservices.com/pagead/aclk?"] > img,a[href^="https://www.gotrks.com/"][target="_blank"],a[href^="https://www.highcpmrevenuenetwork.com/"],a[href^="https://www.highperformancecpmgate.com/"],a[href^="https://www.infowarsstore.com/"] > img,a[href^="https://www.liquidfire.mobi/"],a[href^="https://www.mrskin.com/account/"],a[href^="https://www.mrskin.com/tour"],a[href^="https://www.nutaku.net/signup/landing/"],a[href^="https://www.onlineusershielder.com/"],a[href^="https://www.privateinternetaccess.com/"] > img,a[href^="https://www.purevpn.com/"][href*="&utm_source=aff-"],a[href^="https://www.sugarinstant.com/?partner_id="],a[href^="https://www.toprevenuegate.com/"],a[href^="https://www8.smartadserver.com/"],a[href^="https://xbet-4.com/"],a[href^="https://zirdough.net/"],a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source,a[style="width:100%;height:100%;z-index:10000000000000000;position:absolute;top:0;left:0;"],ad-shield-ads,ad-slot,adsenseintermedioleft,adsenseintermedioright,amp-ad,amp-ad-custom,amp-connatix-player,amp-embed[type="taboola"],amp-fx-flying-carpet,app-ad,app-advertisement,app-large-ad,ark-top-ad,aside[id^="adrotate_widgets-"],atf-ad-slot,bottomadblock,citrus-ad-wrapper,display-ad-component,display-ads,div[class^="Adstyled__AdWrapper-"],div[class^="Display_displayAd"],div[class^="kiwi-ad-wrapper"],div[class^="leftBarBanner"],div[class^="native-ad-"],div[class^="nativeAd-DS-"],div[class^="publicHoriz"],div[class^="rightBarBanner"],div[data-ad-placeholder],div[data-ad-wrapper],div[data-adname],div[data-adunit-path],div[data-adunit],div[data-adzone],div[data-alias="300x250 Ad 1"],div[data-alias="300x250 Ad 2"],div[data-contentexchange-widget],div[data-dfp-id],div[data-id-advertdfpconf],div[id*="MarketGid"],div[id*="ScriptRoot"],div[id^="M"][id*="Composite"],div[id^="ad-div-"],div[id^="ad-in-article"],div[id^="ad-position-"],div[id^="adngin-"],div[id^="adrotate_widgets-"],div[id^="adspot-"],div[id^="banner_orta"],div[id^="banner_sag"],div[id^="crt-"][style],div[id^="div-ads-"],div[id^="google_dfp_"],div[id^="gpt_ad_"],div[id^="lazyad-"],div[id^="optidigital-adslot"],div[id^="pa_sticky_ad_box_middle_"],div[id^="rc-widget-"],div[id^="st"][style^="z-index: 999999999;"],div[id^="sticky_ad_"],div[id^="taboola-stream-"],div[id^="vuukle-ad-"],div[id^="zergnet-widget"],gpt-ad,guj-ad,hl-adsense,iframe[src^="//adspaces.ero-advertising.com"],iframe[src^="https://loboclick.com/publicidade/"],iframe[src^="https://www.xlovecam.com/"],img[src^="https://images.purevpnaffiliates.com"],ned-ad,ps-connatix-module,span[data-ez-ph-id],span[id^="ezoic-pub-ad-placeholder-"],topadblock,zeus-ad {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}#ad-carousel,#ad-p3,#ad-rotator,#ad-top,#ad-wrapper,#adContainer,#adWrapper,#ad_1,#ad_2,#ad_3,#ad_4,#ad_link,#ad_top,#adbar,#adbox,#adcontainer,#adcontainer1,#ads-header,#ads-left,#ads-menu,#ads-wrapper,#adsContainer,#adsensewide,#adspace,#adtop,#adv-text,#advertise,#article_ad,#banner-ad,#centerads,#footer-ads,#google-ads,#headerAd,#header_ad,#leftad,#mplayer-embed,#outbrain_widget_0,#page_ad,#prerollAd,#related_ads,#right_ads,#rightad,#side-ad,#sidebar-ad,#stickyads,#taboola-below-article-1,#topAd,#topbannerad,#videoAdContainer,.Adsense,.ProductAd,.ac-widget-placeholder,.ad-160-600,.ad-area,.ad-block,.ad-bottom,.ad-box:not(#ad-banner):not(:empty),.ad-button,.ad-center,.ad-click,.ad-col,.ad-container,.ad-content,.ad-cover,.ad-current,.ad-enabled,.ad-full,.ad-hero,.ad-holder,.ad-icon,.ad-label,.ad-links,.ad-notice,.ad-outside,.ad-padding,.ad-point,.ad-popup,.ad-root,.ad-section,.ad-sidebar,.ad-source,.ad-text,.ad-title,.ad-widget,.ad-wrap:not(#google_ads_iframe_checktag),.ad-wrapper,.ad-zone,.ad-zone-container,.ad336,.ad728x90,.adActive,.adChoicesLogo,.adHolder,.adImg,.adLink,.adMiddle,.adResult,.adText,.ad_Right,.ad_banner,.ad_bg,.ad_block,.ad_body,.ad_bottom,.ad_box,.ad_btn,.ad_caption,.ad_container,.ad_div,.ad_frame,.ad_global_header,.ad_item,.ad_left,.ad_main,.ad_middle,.ad_spot,.ad_title,.ad_top,.adban,.adbutton,.adcard,.adcenter,.adholder2,.adlink,.adrect,.adrow,.ads-banner,.ads-core-placer,.ads-header,.ads-image,.ads-inline,.ads-left,.ads-loaded,.ads-mobile,.ads-row,.ads-title,.ads.widget,.ads1,.adsBlock,.adsList,.ads_right,.ads_wrapper,.adsbottombox,.adsbox,.adscontainer,.adsense_wrapper,.adshome,.adsleft,.adslot,.adsninja-ad-zone,.adtable,.adtag,.adthrive,.adthrive-content,.adthrive-video-player,.adtitle,.adv-banner,.adv-box,.advBox,.advads-widget,.adver,.advert-container,.advert-detail,.advert2,.advertSlider,.advert_area,.advert_list,.advertisement-block,.advertiser,.advertisment,.advertorial,.adverts,.adverttext,.adwidget,.adwords,.after-post-ad,.anyClipWrapper,.article-advert,.article_ad,.b-banner,.banner-ad-container,.block-ad,.block-sponsor,.body-top-ads,.bottom_ad,.bottom_ad_block,.boxAds,.box_ads,.c-ad,.c-ads,.cnx-player-wrapper,.column-ad,.connatix-wrapper,.container-ads,.container-banner,.content-banner,.contentAds,.content_ads,.custom-ad,.dfp-ad-unit,.dfp-tag-wrapper,.display-ad,.display_ad,.ez-video-wrap,.fixed_ad,.following-ad-container,.footer-ad,.footer_ads,.gallery-ad,.greyAd,.has-ad,.has-fixed-bottom-ad,.head_ad,.header-ad-row,.header_ad,.home-ad,.img_ad,.inline-ad,.is-sponsored,.l-ad,.large-advert,.logo-ad,.mainAd,.middlead,.mntl-leaderboard-spacer,.module_ad,.nativead,.nav_ad,.node-ad,.o-ad-container,.page_ad,.pbs__player,.postad,.product-ad,.product-ads,.promoAd,.publi,.publicidade,.region-ad-top,.reklama,.right-ads,.side-ad,.sidebar-ad,.sidebar-ads,.sidebar_advert,.small-ads,.small_ad,.smallads,.sponsorBlock,.sponsorTitle,.sponsor_post,.sponsored-article,.sponsoredItem,.textad,.top-ad,.topAd,.top_ad,.topads,.vertical-ads,.video-ads,.videos-ad,.w-adsninja-video-player,.wps-player-wrap,[data-ad-name],[data-adblockkey],[href*="xlovecam.com/promo/tracking/"],[href^="http://in.mydirtyhobby.com/track/"],[href^="http://join.allofgfs.com/track/"],[href^="http://join.freshgfs.com/track/"],[href^="http://join.innocenthigh.com/track/"],[href^="http://join.muffx.com/track/"],[href^="http://join.seemygf.com/track/"],[href^="http://join.self-shot.com/track/"],[href^="http://join.teengfsex.com/track/"],[href^="http://myalternativegflink.com/track/"],[href^="http://mypillow.com/"] > img,[href^="http://secure.18exgfs.com/track/"],[href^="http://secure.badassgirlfriends.com/track/"],[href^="http://secure.bustygfsexposed.com/track/"],[href^="http://secure.chatrevenge.com/track/"],[href^="http://secure.dagfs.com/track/"],[href^="http://secure.fubilov.com/track/"],[href^="http://secure.hotgfvideos.com/track/"],[href^="http://secure.mynngf.com/track/"],[href^="http://secure.obsessedwithmyself.com/track/"],[href^="http://secure.publicgfvideos.com/track/"],[href^="http://secure.realgfsexposed.com/track/"],[href^="http://secure.slutswithphones.com/track/"],[href^="http://secure.watchmygf.com/track/"],[href^="http://www.mypillow.com/"] > img,[href^="https://mypatriotsupply.com/"] > img,[href^="https://mypillow.com/"] > img,[href^="https://mystore.com/"] > img,[href^="https://noqreport.com/"] > img,[href^="https://www.datawars.io"],[href^="https://www.herbanomic.com/"] > img,[href^="https://www.mypatriotsupply.com/"] > img,[href^="https://www.mypillow.com/"] > img,[href^="https://www.restoro.com/"],[href^="https://zstacklife.com/"] img,[id^="div-gpt-ad"],a[href*="/relap.io/adv/"],a[href*="marketgid.com/"],a[href*="medicinetizer.ru"],a[href*="runetki.com"],a[href*="universallnk.com"],a[href^="https://ad.doubleclick.net/"],a[href^="https://natour.naughtyamerica.com/track/"],a[href^="https://ndt5.net/"],a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="],a[onmousedown^="this.href='https://paid.outbrain.com/network/redir?"][target="_blank"],div[aria-label="Ads"],div[data-ad-targeting],div[id^="MarketGid"],div[id^="ad_position_"],div[id^="dfp-ad-"],div[id^="div-gpt-"],div[id^="ezoic-pub-ad-"],div[id^="yandex_ad"],iframe[src*=".cameraprive.com"],ins.adsbygoogle[data-ad-client],ins.adsbygoogle[data-ad-slot] {display: none !important; color: #93e41c !important; background-color: #6e2091 !important;}</style><style data-jss="" data-meta="MuiCssBaseline">
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*, *::before, *::after {
  box-sizing: inherit;
}
strong, b {
  font-weight: 700;
}
body {
  color: #fff;
  margin: 0;
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.43;
  background-color: #121212;
}
@media print {
  body {
    background-color: #fff;
  }
}
body::backdrop {
  background-color: #121212;
}
</style><style data-jss="" data-meta="PrivateHiddenCss">
@media (min-width:0px) and (max-width:599.95px) {
  .jss330 {
    display: none;
  }
}
@media (min-width:0px) {
  .jss331 {
    display: none;
  }
}
@media (max-width:599.95px) {
  .jss332 {
    display: none;
  }
}
@media (min-width:600px) and (max-width:959.95px) {
  .jss333 {
    display: none;
  }
}
@media (min-width:600px) {
  .jss334 {
    display: none;
  }
}
@media (max-width:959.95px) {
  .jss335 {
    display: none;
  }
}
@media (min-width:960px) and (max-width:1279.95px) {
  .jss336 {
    display: none;
  }
}
@media (min-width:960px) {
  .jss337 {
    display: none;
  }
}
@media (max-width:1279.95px) {
  .jss338 {
    display: none;
  }
}
@media (min-width:1280px) and (max-width:1919.95px) {
  .jss339 {
    display: none;
  }
}
@media (min-width:1280px) {
  .jss340 {
    display: none;
  }
}
@media (max-width:1919.95px) {
  .jss341 {
    display: none;
  }
}
@media (min-width:1920px) {
  .jss342 {
    display: none;
  }
}
@media (min-width:1920px) {
  .jss343 {
    display: none;
  }
}
@media (min-width:0px) {
  .jss344 {
    display: none;
  }
}
</style><style data-jss="" data-meta="MuiGrid">
.MuiGrid-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.MuiGrid-item {
  margin: 0;
  box-sizing: border-box;
}
.MuiGrid-zeroMinWidth {
  min-width: 0;
}
.MuiGrid-direction-xs-column {
  flex-direction: column;
}
.MuiGrid-direction-xs-column-reverse {
  flex-direction: column-reverse;
}
.MuiGrid-direction-xs-row-reverse {
  flex-direction: row-reverse;
}
.MuiGrid-wrap-xs-nowrap {
  flex-wrap: nowrap;
}
.MuiGrid-wrap-xs-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.MuiGrid-align-items-xs-center {
  align-items: center;
}
.MuiGrid-align-items-xs-flex-start {
  align-items: flex-start;
}
.MuiGrid-align-items-xs-flex-end {
  align-items: flex-end;
}
.MuiGrid-align-items-xs-baseline {
  align-items: baseline;
}
.MuiGrid-align-content-xs-center {
  align-content: center;
}
.MuiGrid-align-content-xs-flex-start {
  align-content: flex-start;
}
.MuiGrid-align-content-xs-flex-end {
  align-content: flex-end;
}
.MuiGrid-align-content-xs-space-between {
  align-content: space-between;
}
.MuiGrid-align-content-xs-space-around {
  align-content: space-around;
}
.MuiGrid-justify-xs-center {
  justify-content: center;
}
.MuiGrid-justify-xs-flex-end {
  justify-content: flex-end;
}
.MuiGrid-justify-xs-space-between {
  justify-content: space-between;
}
.MuiGrid-justify-xs-space-around {
  justify-content: space-around;
}
.MuiGrid-justify-xs-space-evenly {
  justify-content: space-evenly;
}
.MuiGrid-spacing-xs-1 {
  width: calc(100% + 8px);
  margin: -4px;
}
.MuiGrid-spacing-xs-1 > .MuiGrid-item {
  padding: 4px;
}
.MuiGrid-spacing-xs-2 {
  width: calc(100% + 16px);
  margin: -8px;
}
.MuiGrid-spacing-xs-2 > .MuiGrid-item {
  padding: 8px;
}
.MuiGrid-spacing-xs-3 {
  width: calc(100% + 24px);
  margin: -12px;
}
.MuiGrid-spacing-xs-3 > .MuiGrid-item {
  padding: 12px;
}
.MuiGrid-spacing-xs-4 {
  width: calc(100% + 32px);
  margin: -16px;
}
.MuiGrid-spacing-xs-4 > .MuiGrid-item {
  padding: 16px;
}
.MuiGrid-spacing-xs-5 {
  width: calc(100% + 40px);
  margin: -20px;
}
.MuiGrid-spacing-xs-5 > .MuiGrid-item {
  padding: 20px;
}
.MuiGrid-spacing-xs-6 {
  width: calc(100% + 48px);
  margin: -24px;
}
.MuiGrid-spacing-xs-6 > .MuiGrid-item {
  padding: 24px;
}
.MuiGrid-spacing-xs-7 {
  width: calc(100% + 56px);
  margin: -28px;
}
.MuiGrid-spacing-xs-7 > .MuiGrid-item {
  padding: 28px;
}
.MuiGrid-spacing-xs-8 {
  width: calc(100% + 64px);
  margin: -32px;
}
.MuiGrid-spacing-xs-8 > .MuiGrid-item {
  padding: 32px;
}
.MuiGrid-spacing-xs-9 {
  width: calc(100% + 72px);
  margin: -36px;
}
.MuiGrid-spacing-xs-9 > .MuiGrid-item {
  padding: 36px;
}
.MuiGrid-spacing-xs-10 {
  width: calc(100% + 80px);
  margin: -40px;
}
.MuiGrid-spacing-xs-10 > .MuiGrid-item {
  padding: 40px;
}
.MuiGrid-grid-xs-auto {
  flex-grow: 0;
  max-width: none;
  flex-basis: auto;
}
.MuiGrid-grid-xs-true {
  flex-grow: 1;
  max-width: 100%;
  flex-basis: 0;
}
.MuiGrid-grid-xs-1 {
  flex-grow: 0;
  max-width: 8.333333%;
  flex-basis: 8.333333%;
}
.MuiGrid-grid-xs-2 {
  flex-grow: 0;
  max-width: 16.666667%;
  flex-basis: 16.666667%;
}
.MuiGrid-grid-xs-3 {
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
}
.MuiGrid-grid-xs-4 {
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.333333%;
}
.MuiGrid-grid-xs-5 {
  flex-grow: 0;
  max-width: 41.666667%;
  flex-basis: 41.666667%;
}
.MuiGrid-grid-xs-6 {
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
}
.MuiGrid-grid-xs-7 {
  flex-grow: 0;
  max-width: 58.333333%;
  flex-basis: 58.333333%;
}
.MuiGrid-grid-xs-8 {
  flex-grow: 0;
  max-width: 66.666667%;
  flex-basis: 66.666667%;
}
.MuiGrid-grid-xs-9 {
  flex-grow: 0;
  max-width: 75%;
  flex-basis: 75%;
}
.MuiGrid-grid-xs-10 {
  flex-grow: 0;
  max-width: 83.333333%;
  flex-basis: 83.333333%;
}
.MuiGrid-grid-xs-11 {
  flex-grow: 0;
  max-width: 91.666667%;
  flex-basis: 91.666667%;
}
.MuiGrid-grid-xs-12 {
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
}
@media (min-width:600px) {
  .MuiGrid-grid-sm-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-sm-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-sm-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-sm-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-sm-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-sm-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-sm-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-sm-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-sm-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-sm-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-sm-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-sm-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-sm-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-sm-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
@media (min-width:960px) {
  .MuiGrid-grid-md-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-md-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-md-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-md-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-md-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-md-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-md-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-md-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-md-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-md-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-md-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-md-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-md-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-md-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
@media (min-width:1280px) {
  .MuiGrid-grid-lg-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-lg-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-lg-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-lg-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-lg-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-lg-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-lg-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-lg-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-lg-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-lg-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-lg-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-lg-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-lg-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-lg-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
@media (min-width:1920px) {
  .MuiGrid-grid-xl-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-xl-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-xl-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-xl-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-xl-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-xl-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-xl-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-xl-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-xl-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-xl-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-xl-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-xl-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-xl-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-xl-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
</style><style data-jss="" data-meta="MuiTouchRipple">
.MuiTouchRipple-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
}
.MuiTouchRipple-ripple {
  opacity: 0;
  position: absolute;
}
.MuiTouchRipple-rippleVisible {
  opacity: 0.3;
  animation: MuiTouchRipple-keyframes-enter 550ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}
.MuiTouchRipple-ripplePulsate {
  animation-duration: 200ms;
}
.MuiTouchRipple-child {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 1;
  border-radius: 50%;
  background-color: currentColor;
}
.MuiTouchRipple-childLeaving {
  opacity: 0;
  animation: MuiTouchRipple-keyframes-exit 550ms cubic-bezier(0.4, 0, 0.2, 1);
}
.MuiTouchRipple-childPulsate {
  top: 0;
  left: 0;
  position: absolute;
  animation: MuiTouchRipple-keyframes-pulsate 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite;
}
@-webkit-keyframes MuiTouchRipple-keyframes-enter {
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
@-webkit-keyframes MuiTouchRipple-keyframes-exit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes MuiTouchRipple-keyframes-pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
}
</style><style data-jss="" data-meta="MuiButtonBase">
.MuiButtonBase-root {
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.MuiButtonBase-root::-moz-focus-inner {
  border-style: none;
}
.MuiButtonBase-root.Mui-disabled {
  cursor: default;
  pointer-events: none;
}
@media print {
  .MuiButtonBase-root {
    -webkit-print-color-adjust: exact;
  }
}
</style><style data-jss="" data-meta="MuiTypography">
.MuiTypography-root {
  margin: 0;
}
.MuiTypography-body2 {
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.43;
}
.MuiTypography-body1 {
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.5;
}
.MuiTypography-caption {
  font-size: 0.75rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.66;
}
.MuiTypography-button {
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
}
.MuiTypography-h1 {
  font-size: 3.5rem;
  font-family: Lato;
  font-weight: 300;
  line-height: 1.167;
}
@media (min-width:600px) {
  .MuiTypography-h1 {
    font-size: 4.7129rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h1 {
    font-size: 5.3556rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h1 {
    font-size: 5.9983rem;
  }
}
.MuiTypography-h2 {
  font-size: 2.375rem;
  font-family: Lato;
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width:600px) {
  .MuiTypography-h2 {
    font-size: 2.9167rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h2 {
    font-size: 3.3333rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h2 {
    font-size: 3.75rem;
  }
}
.MuiTypography-h3 {
  font-size: 2rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.167;
}
@media (min-width:600px) {
  .MuiTypography-h3 {
    font-size: 2.5707rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h3 {
    font-size: 2.7849rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h3 {
    font-size: 2.9991rem;
  }
}
.MuiTypography-h4 {
  font-size: 1.5625rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.235;
}
@media (min-width:600px) {
  .MuiTypography-h4 {
    font-size: 1.8219rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h4 {
    font-size: 2.0243rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h4 {
    font-size: 2.0243rem;
  }
}
.MuiTypography-h5 {
  font-size: 1.25rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.334;
}
@media (min-width:600px) {
  .MuiTypography-h5 {
    font-size: 1.3118rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h5 {
    font-size: 1.4993rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h5 {
    font-size: 1.4993rem;
  }
}
.MuiTypography-h6 {
  font-size: 1.125rem;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.6;
}
@media (min-width:600px) {
  .MuiTypography-h6 {
    font-size: 1.25rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h6 {
    font-size: 1.25rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h6 {
    font-size: 1.25rem;
  }
}
.MuiTypography-subtitle1 {
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.75;
}
.MuiTypography-subtitle2 {
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.57;
}
.MuiTypography-overline {
  font-size: 0.75rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 2.66;
  text-transform: uppercase;
}
.MuiTypography-srOnly {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
}
.MuiTypography-alignLeft {
  text-align: left;
}
.MuiTypography-alignCenter {
  text-align: center;
}
.MuiTypography-alignRight {
  text-align: right;
}
.MuiTypography-alignJustify {
  text-align: justify;
}
.MuiTypography-noWrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.MuiTypography-gutterBottom {
  margin-bottom: 0.35em;
}
.MuiTypography-paragraph {
  margin-bottom: 16px;
}
.MuiTypography-colorInherit {
  color: inherit;
}
.MuiTypography-colorPrimary {
  color: #fff;
}
.MuiTypography-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiTypography-colorTextPrimary {
  color: #fff;
}
.MuiTypography-colorTextSecondary {
  color: rgba(255, 255, 255, 0.7);
}
.MuiTypography-colorError {
  color: #f44336;
}
.MuiTypography-displayInline {
  display: inline;
}
.MuiTypography-displayBlock {
  display: block;
}
</style><style data-jss="" data-meta="MuiDivider">
.MuiDivider-root {
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.12);
}
.MuiDivider-absolute {
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
}
.MuiDivider-inset {
  margin-left: 72px;
}
.MuiDivider-light {
  background-color: rgba(255, 255, 255, 0.08);
}
.MuiDivider-middle {
  margin-left: 16px;
  margin-right: 16px;
}
.MuiDivider-vertical {
  width: 1px;
  height: 100%;
}
.MuiDivider-flexItem {
  height: auto;
  align-self: stretch;
}
</style><style data-jss="" data-meta="MuiPaper">
.MuiPaper-root {
  color: #fff;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #121212;
}
.MuiPaper-rounded {
  border-radius: 4px;
}
.MuiPaper-outlined {
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiPaper-elevation0 {
  box-shadow: none;
}
.MuiPaper-elevation1 {
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation2 {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation3 {
  box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation4 {
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation5 {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation6 {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation7 {
  box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
}
.MuiPaper-elevation8 {
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}
.MuiPaper-elevation9 {
  box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
}
.MuiPaper-elevation10 {
  box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
}
.MuiPaper-elevation11 {
  box-shadow: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
}
.MuiPaper-elevation12 {
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation13 {
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation14 {
  box-shadow: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation15 {
  box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation16 {
  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation17 {
  box-shadow: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation18 {
  box-shadow: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
}
.MuiPaper-elevation19 {
  box-shadow: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
}
.MuiPaper-elevation20 {
  box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation21 {
  box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation22 {
  box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation23 {
  box-shadow: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
}
.MuiPaper-elevation24 {
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
}
</style><style data-jss="" data-meta="MuiAppBar">
.MuiAppBar-root {
  width: 100%;
  display: flex;
  z-index: 1200;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
}
.MuiAppBar-positionFixed {
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
}
@media print {
  .MuiAppBar-positionFixed {
    position: absolute;
  }
}
.MuiAppBar-positionAbsolute {
  top: 0;
  left: auto;
  right: 0;
  position: absolute;
}
.MuiAppBar-positionSticky {
  top: 0;
  left: auto;
  right: 0;
  position: sticky;
}
.MuiAppBar-positionStatic {
  position: static;
}
.MuiAppBar-positionRelative {
  position: relative;
}
.MuiAppBar-colorDefault {
  color: #fff;
  background-color: #212121;
}
.MuiAppBar-colorPrimary {
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}
.MuiAppBar-colorSecondary {
  color: rgba(0, 0, 0, 0.87);
  background-color: rgba(233, 30, 99, 1);
}
.MuiAppBar-colorInherit {
  color: inherit;
}
.MuiAppBar-colorTransparent {
  color: inherit;
  background-color: transparent;
}
</style><style data-jss="" data-meta="MuiToolbar">
.MuiToolbar-root {
  display: flex;
  position: relative;
  align-items: center;
}
.MuiToolbar-gutters {
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width:600px) {
  .MuiToolbar-gutters {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.MuiToolbar-regular {
  min-height: 56px;
}
@media (min-width:0px) and (orientation: landscape) {
  .MuiToolbar-regular {
    min-height: 48px;
  }
}
@media (min-width:600px) {
  .MuiToolbar-regular {
    min-height: 64px;
  }
}
.MuiToolbar-dense {
  min-height: 48px;
}
</style><style data-jss="" data-meta="MuiIconButton">
.MuiIconButton-root {
  flex: 0 0 auto;
  color: #fff;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}
.MuiIconButton-root:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
.MuiIconButton-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.3);
  background-color: transparent;
}
@media (hover: none) {
  .MuiIconButton-root:hover {
    background-color: transparent;
  }
}
.MuiIconButton-edgeStart {
  margin-left: -12px;
}
.MuiIconButton-sizeSmall.MuiIconButton-edgeStart {
  margin-left: -3px;
}
.MuiIconButton-edgeEnd {
  margin-right: -12px;
}
.MuiIconButton-sizeSmall.MuiIconButton-edgeEnd {
  margin-right: -3px;
}
.MuiIconButton-colorInherit {
  color: inherit;
}
.MuiIconButton-colorPrimary {
  color: #fff;
}
.MuiIconButton-colorPrimary:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
@media (hover: none) {
  .MuiIconButton-colorPrimary:hover {
    background-color: transparent;
  }
}
.MuiIconButton-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiIconButton-colorSecondary:hover {
  background-color: rgba(233, 30, 99, 0.08);
}
@media (hover: none) {
  .MuiIconButton-colorSecondary:hover {
    background-color: transparent;
  }
}
.MuiIconButton-sizeSmall {
  padding: 3px;
  font-size: 1.125rem;
}
.MuiIconButton-label {
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
</style><style data-jss="" data-meta="MuiBackdrop">
.MuiBackdrop-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
}
.MuiBackdrop-invisible {
  background-color: transparent;
}
</style><style data-jss="" data-meta="MuiDrawer">
.MuiDrawer-docked {
  flex: 0 0 auto;
}
.MuiDrawer-paper {
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1100;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
}
.MuiDrawer-paperAnchorLeft {
  left: 0;
  right: auto;
}
.MuiDrawer-paperAnchorRight {
  left: auto;
  right: 0;
}
.MuiDrawer-paperAnchorTop {
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  height: auto;
  max-height: 100%;
}
.MuiDrawer-paperAnchorBottom {
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  max-height: 100%;
}
.MuiDrawer-paperAnchorDockedLeft {
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiDrawer-paperAnchorDockedTop {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiDrawer-paperAnchorDockedRight {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiDrawer-paperAnchorDockedBottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
</style><style data-jss="" data-meta="MuiBox">

</style><style data-jss="" data-meta="MuiBox">
</style><style data-jss="" data-meta="MuiBox">
</style><style data-jss="" data-meta="MuiTooltip">
.MuiTooltip-popper {
  z-index: 1500;
  pointer-events: none;
}
.MuiTooltip-popperInteractive {
  pointer-events: auto;
}
.MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow {
  top: 0;
  left: 0;
  margin-top: -0.71em;
  margin-left: 4px;
  margin-right: 4px;
}
.MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow {
  left: 0;
  bottom: 0;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: -0.71em;
}
.MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow {
  left: 0;
  width: 0.71em;
  height: 1em;
  margin-top: 4px;
  margin-left: -0.71em;
  margin-bottom: 4px;
}
.MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow {
  right: 0;
  width: 0.71em;
  height: 1em;
  margin-top: 4px;
  margin-right: -0.71em;
  margin-bottom: 4px;
}
.MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow::before {
  transform-origin: 0 0;
}
.MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow::before {
  transform-origin: 100% 100%;
}
.MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow::before {
  transform-origin: 100% 0;
}
.MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow::before {
  transform-origin: 0 100%;
}
.MuiTooltip-tooltip {
  color: #fff;
  padding: 4px 8px;
  font-size: 0.625rem;
  max-width: 300px;
  word-wrap: break-word;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.4em;
  border-radius: 4px;
  background-color: rgba(97, 97, 97, 0.9);
}
.MuiTooltip-tooltipArrow {
  margin: 0;
  position: relative;
}
.MuiTooltip-arrow {
  color: rgba(97, 97, 97, 0.9);
  width: 1em;
  height: 0.71em;
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
}
.MuiTooltip-arrow::before {
  width: 100%;
  height: 100%;
  margin: auto;
  content: "";
  display: block;
  transform: rotate(45deg);
  background-color: currentColor;
}
.MuiTooltip-touch {
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.14286em;
}
.MuiTooltip-tooltipPlacementLeft {
  margin: 0 24px ;
  transform-origin: right center;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementLeft {
    margin: 0 14px;
  }
}
.MuiTooltip-tooltipPlacementRight {
  margin: 0 24px;
  transform-origin: left center;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementRight {
    margin: 0 14px;
  }
}
.MuiTooltip-tooltipPlacementTop {
  margin: 24px 0;
  transform-origin: center bottom;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementTop {
    margin: 14px 0;
  }
}
.MuiTooltip-tooltipPlacementBottom {
  margin: 24px 0;
  transform-origin: center top;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementBottom {
    margin: 14px 0;
  }
}
</style><style data-jss="" data-meta="MuiButton">
.MuiButton-root {
  color: #fff;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: uppercase;
}
.MuiButton-root:hover {
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.08);
}
.MuiButton-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.3);
}
@media (hover: none) {
  .MuiButton-root:hover {
    background-color: transparent;
  }
}
.MuiButton-root:hover.Mui-disabled {
  background-color: transparent;
}
.MuiButton-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}
.MuiButton-text {
  padding: 6px 8px;
}
.MuiButton-textPrimary {
  color: #fff;
}
.MuiButton-textPrimary:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
@media (hover: none) {
  .MuiButton-textPrimary:hover {
    background-color: transparent;
  }
}
.MuiButton-textSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiButton-textSecondary:hover {
  background-color: rgba(233, 30, 99, 0.08);
}
@media (hover: none) {
  .MuiButton-textSecondary:hover {
    background-color: transparent;
  }
}
.MuiButton-outlined {
  border: 1px solid rgba(255, 255, 255, 0.23);
  padding: 5px 15px;
}
.MuiButton-outlined.Mui-disabled {
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiButton-outlinedPrimary {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.MuiButton-outlinedPrimary:hover {
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.08);
}
@media (hover: none) {
  .MuiButton-outlinedPrimary:hover {
    background-color: transparent;
  }
}
.MuiButton-outlinedSecondary {
  color: rgba(233, 30, 99, 1);
  border: 1px solid rgba(233, 30, 99, 0.5);
}
.MuiButton-outlinedSecondary:hover {
  border: 1px solid rgba(233, 30, 99, 1);
  background-color: rgba(233, 30, 99, 0.08);
}
.MuiButton-outlinedSecondary.Mui-disabled {
  border: 1px solid rgba(255, 255, 255, 0.3);
}
@media (hover: none) {
  .MuiButton-outlinedSecondary:hover {
    background-color: transparent;
  }
}
.MuiButton-contained {
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  background-color: #e0e0e0;
}
.MuiButton-contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
  background-color: #d5d5d5;
}
.MuiButton-contained.Mui-focusVisible {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
}
.MuiButton-contained:active {
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}
.MuiButton-contained.Mui-disabled {
  color: rgba(255, 255, 255, 0.3);
  box-shadow: none;
  background-color: rgba(255, 255, 255, 0.12);
}
@media (hover: none) {
  .MuiButton-contained:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: #e0e0e0;
  }
}
.MuiButton-contained:hover.Mui-disabled {
  background-color: rgba(255, 255, 255, 0.12);
}
.MuiButton-containedPrimary {
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}
.MuiButton-containedPrimary:hover {
  background-color: #3845a8;
}
@media (hover: none) {
  .MuiButton-containedPrimary:hover {
    background-color: #fff;
  }
}
.MuiButton-containedSecondary {
  color: white;
  background-color: rgba(233, 30, 99, 1);
}
.MuiButton-containedSecondary:hover {
  background-color: rgba(163, 21, 69, 1);
}
@media (hover: none) {
  .MuiButton-containedSecondary:hover {
    background-color: rgba(233, 30, 99, 1);
  }
}
.MuiButton-disableElevation {
  box-shadow: none;
}
.MuiButton-disableElevation:hover {
  box-shadow: none;
}
.MuiButton-disableElevation.Mui-focusVisible {
  box-shadow: none;
}
.MuiButton-disableElevation:active {
  box-shadow: none;
}
.MuiButton-disableElevation.Mui-disabled {
  box-shadow: none;
}
.MuiButton-colorInherit {
  color: inherit;
  border-color: currentColor;
}
.MuiButton-textSizeSmall {
  padding: 4px 5px;
  font-size: 0.8125rem;
}
.MuiButton-textSizeLarge {
  padding: 8px 11px;
  font-size: 0.9375rem;
}
.MuiButton-outlinedSizeSmall {
  padding: 3px 9px;
  font-size: 0.8125rem;
}
.MuiButton-outlinedSizeLarge {
  padding: 7px 21px;
  font-size: 0.9375rem;
}
.MuiButton-containedSizeSmall {
  padding: 4px 10px;
  font-size: 0.8125rem;
}
.MuiButton-containedSizeLarge {
  padding: 8px 22px;
  font-size: 0.9375rem;
}
.MuiButton-fullWidth {
  width: 100%;
}
.MuiButton-startIcon {
  display: inherit;
  margin-left: -4px;
  margin-right: 8px;
}
.MuiButton-startIcon.MuiButton-iconSizeSmall {
  margin-left: -2px;
}
.MuiButton-endIcon {
  display: inherit;
  margin-left: 8px;
  margin-right: -4px;
}
.MuiButton-endIcon.MuiButton-iconSizeSmall {
  margin-right: -2px;
}
.MuiButton-iconSizeSmall > *:first-child {
  font-size: 18px;
}
.MuiButton-iconSizeMedium > *:first-child {
  font-size: 20px;
}
.MuiButton-iconSizeLarge > *:first-child {
  font-size: 22px;
}
</style><style data-jss="" data-meta="MuiPopover">
.MuiPopover-paper {
  outline: 0;
  position: absolute;
  max-width: calc(100% - 32px);
  min-width: 16px;
  max-height: calc(100% - 32px);
  min-height: 16px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style><style data-jss="" data-meta="MuiMenu">
.MuiMenu-paper {
  max-height: calc(100% - 96px);
  -webkit-overflow-scrolling: touch;
}
.MuiMenu-list {
  outline: 0;
}
</style><style data-jss="" data-meta="MuiSvgIcon">
.MuiSvgIcon-root {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}
.MuiSvgIcon-colorPrimary {
  color: #fff;
}
.MuiSvgIcon-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiSvgIcon-colorAction {
  color: #fff;
}
.MuiSvgIcon-colorError {
  color: #f44336;
}
.MuiSvgIcon-colorDisabled {
  color: rgba(255, 255, 255, 0.3);
}
.MuiSvgIcon-fontSizeInherit {
  font-size: inherit;
}
.MuiSvgIcon-fontSizeSmall {
  font-size: 1.25rem;
}
.MuiSvgIcon-fontSizeLarge {
  font-size: 2.1875rem;
}
</style><style data-jss="" data-meta="MuiDialog">
@media print {
  .MuiDialog-root {
    position: absolute !important;
  }
}
.MuiDialog-scrollPaper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.MuiDialog-scrollBody {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
}
.MuiDialog-scrollBody:after {
  width: 0;
  height: 100%;
  content: "";
  display: inline-block;
  vertical-align: middle;
}
.MuiDialog-container {
  height: 100%;
  outline: 0;
}
@media print {
  .MuiDialog-container {
    height: auto;
  }
}
.MuiDialog-paper {
  margin: 32px;
  position: relative;
  overflow-y: auto;
}
@media print {
  .MuiDialog-paper {
    box-shadow: none;
    overflow-y: visible;
  }
}
.MuiDialog-paperScrollPaper {
  display: flex;
  max-height: calc(100% - 64px);
  flex-direction: column;
}
.MuiDialog-paperScrollBody {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
.MuiDialog-paperWidthFalse {
  max-width: calc(100% - 64px);
}
.MuiDialog-paperWidthXs {
  max-width: 444px;
}
@media (max-width:507.95px) {
  .MuiDialog-paperWidthXs.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthSm {
  max-width: 600px;
}
@media (max-width:663.95px) {
  .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthMd {
  max-width: 960px;
}
@media (max-width:1023.95px) {
  .MuiDialog-paperWidthMd.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthLg {
  max-width: 1280px;
}
@media (max-width:1343.95px) {
  .MuiDialog-paperWidthLg.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthXl {
  max-width: 1920px;
}
@media (max-width:1983.95px) {
  .MuiDialog-paperWidthXl.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperFullWidth {
  width: calc(100% - 64px);
}
.MuiDialog-paperFullScreen {
  width: 100%;
  height: 100%;
  margin: 0;
  max-width: 100%;
  max-height: none;
  border-radius: 0;
}
.MuiDialog-paperFullScreen.MuiDialog-paperScrollBody {
  margin: 0;
  max-width: 100%;
}
</style><style data-jss="" data-meta="MuiInputBase">
@-webkit-keyframes mui-auto-fill {}
@-webkit-keyframes mui-auto-fill-cancel {}
.MuiInputBase-root {
  color: #fff;
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.1876em;
}
.MuiInputBase-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
  cursor: default;
}
.MuiInputBase-multiline {
  padding: 6px 0 7px;
}
.MuiInputBase-multiline.MuiInputBase-marginDense {
  padding-top: 3px;
}
.MuiInputBase-fullWidth {
  width: 100%;
}
.MuiInputBase-input {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
}
.MuiInputBase-input::-webkit-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input::-moz-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input:-ms-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input::-ms-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input:focus {
  outline: 0;
}
.MuiInputBase-input:invalid {
  box-shadow: none;
}
.MuiInputBase-input::-webkit-search-decoration {
  -webkit-appearance: none;
}
.MuiInputBase-input.Mui-disabled {
  opacity: 1;
}
.MuiInputBase-input:-webkit-autofill {
  animation-name: mui-auto-fill;
  animation-duration: 5000s;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
  opacity: 0.5;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
  opacity: 0.5;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
  opacity: 0.5;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
  opacity: 0.5;
}
.MuiInputBase-inputMarginDense {
  padding-top: 3px;
}
.MuiInputBase-inputMultiline {
  height: auto;
  resize: none;
  padding: 0;
}
.MuiInputBase-inputTypeSearch {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
}
</style><style data-jss="" data-meta="PrivateNotchedOutline">
.jss362 {
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-radius: inherit;
  pointer-events: none;
}
.jss363 {
  padding: 0;
  text-align: left;
  transition: width 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  line-height: 11px;
}
.jss364 {
  width: auto;
  height: 11px;
  display: block;
  padding: 0;
  font-size: 0.75em;
  max-width: 0.01px;
  text-align: left;
  transition: max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  visibility: hidden;
}
.jss364 > span {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
.jss365 {
  max-width: 1000px;
  transition: max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms;
}
</style><style data-jss="" data-meta="MuiOutlinedInput">
.MuiOutlinedInput-root {
  position: relative;
  border-radius: 4px;
}
.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
  border-color: #fff;
}
@media (hover: none) {
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(255, 255, 255, 0.23);
  }
}
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #fff;
  border-width: 2px;
}
.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
  border-color: #f44336;
}
.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
  border-color: rgba(255, 255, 255, 0.3);
}
.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: rgba(233, 30, 99, 1);
}
.MuiOutlinedInput-adornedStart {
  padding-left: 14px;
}
.MuiOutlinedInput-adornedEnd {
  padding-right: 14px;
}
.MuiOutlinedInput-multiline {
  padding: 18.5px 14px;
}
.MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense {
  padding-top: 10.5px;
  padding-bottom: 10.5px;
}
.MuiOutlinedInput-notchedOutline {
  border-color: rgba(255, 255, 255, 0.23);
}
.MuiOutlinedInput-input {
  padding: 18.5px 14px;
}
.MuiOutlinedInput-input:-webkit-autofill {
  caret-color: #fff;
  border-radius: inherit;
  -webkit-box-shadow: 0 0 0 100px #266798 inset;
  -webkit-text-fill-color: #fff;
}
.MuiOutlinedInput-inputMarginDense {
  padding-top: 10.5px;
  padding-bottom: 10.5px;
}
.MuiOutlinedInput-inputMultiline {
  padding: 0;
}
.MuiOutlinedInput-inputAdornedStart {
  padding-left: 0;
}
.MuiOutlinedInput-inputAdornedEnd {
  padding-right: 0;
}
</style><style data-jss="" data-meta="MuiFormLabel">
.MuiFormLabel-root {
  color: rgba(255, 255, 255, 0.7);
  padding: 0;
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1;
}
.MuiFormLabel-root.Mui-focused {
  color: #fff;
}
.MuiFormLabel-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
}
.MuiFormLabel-root.Mui-error {
  color: #f44336;
}
.MuiFormLabel-colorSecondary.Mui-focused {
  color: rgba(233, 30, 99, 1);
}
.MuiFormLabel-asterisk.Mui-error {
  color: #f44336;
}
</style><style data-jss="" data-meta="MuiInputLabel">
.MuiInputLabel-root {
  display: block;
  transform-origin: top left;
}
.MuiInputLabel-formControl {
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(0, 24px) scale(1);
}
.MuiInputLabel-marginDense {
  transform: translate(0, 21px) scale(1);
}
.MuiInputLabel-shrink {
  transform: translate(0, 1.5px) scale(0.75);
  transform-origin: top left;
}
.MuiInputLabel-animated {
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}
.MuiInputLabel-filled {
  z-index: 1;
  transform: translate(12px, 20px) scale(1);
  pointer-events: none;
}
.MuiInputLabel-filled.MuiInputLabel-marginDense {
  transform: translate(12px, 17px) scale(1);
}
.MuiInputLabel-filled.MuiInputLabel-shrink {
  transform: translate(12px, 10px) scale(0.75);
}
.MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense {
  transform: translate(12px, 7px) scale(0.75);
}
.MuiInputLabel-outlined {
  z-index: 1;
  transform: translate(14px, 20px) scale(1);
  pointer-events: none;
}
.MuiInputLabel-outlined.MuiInputLabel-marginDense {
  transform: translate(14px, 12px) scale(1);
}
.MuiInputLabel-outlined.MuiInputLabel-shrink {
  transform: translate(14px, -6px) scale(0.75);
}
</style><style data-jss="" data-meta="MuiFormControl">
.MuiFormControl-root {
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
}
.MuiFormControl-marginNormal {
  margin-top: 16px;
  margin-bottom: 8px;
}
.MuiFormControl-marginDense {
  margin-top: 8px;
  margin-bottom: 4px;
}
.MuiFormControl-fullWidth {
  width: 100%;
}
</style><style data-jss="" data-meta="MuiTextField">

</style><style data-jss="" data-meta="makeStyles">
.jss294 {
  z-index: 1101;
  border-bottom: 1px solid #d3d7da;
}
.jss295 {
  background: #ffffff;
}
.jss296 {
  border: 1px solid #c1c1c1;
  cursor: pointer;
}
.jss297 {
  flex-grow: 1;
}
.jss298 {
  padding-top: 1px;
  padding-left: 5px;
  padding-right: 10px;
}
.jss299 {
  width: 180px;
  cursor: pointer;
  height: 27px;
  background-size: auto;
  background-image: url(https://static.onecompiler.com/images/logo/oc_logo_v4_dark.svg);
  background-repeat: no-repeat;
  background-position: center;
}
.jss300 {
  width: 48px;
  height: 48px;
}
.jss301 {
  height: 40px;
  font-size: 30px;;
  margin-left: 18px;;
  border-right: 1px solid #464748;
  margin-right: 18px;;
  padding-bottom: 10px;;
}
.jss302 {
  margin-bottom: 30px;
}
@media (max-width:959.95px) {
  .jss302 {
    margin-bottom: 10px;
  }
}
.jss303 {
  color: #ffffff;
  margin-left: -8px;
  margin-right: 8px;
}
.jss305 {
  width: 250px;
}
.jss306 {
  cursor: pointer;
  padding-top: 4px;
}
.jss306:hover {
  border-radius: 50%;
  background-color: #ebecf1;
}
.jss307 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style><style data-jss="" data-meta="PrivateTabIndicator">
.jss348 {
  width: 100%;
  bottom: 0;
  height: 2px;
  position: absolute;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.jss349 {
  background-color: #fff;
}
.jss350 {
  background-color: rgba(233, 30, 99, 1);
}
.jss351 {
  right: 0;
  width: 2px;
  height: 100%;
}
</style><style data-jss="" data-meta="MuiTabs">
.MuiTabs-root {
  display: flex;
  overflow: hidden;
  min-height: 48px;
  -webkit-overflow-scrolling: touch;
}
.MuiTabs-vertical {
  flex-direction: column;
}
.MuiTabs-flexContainer {
  display: flex;
}
.MuiTabs-flexContainerVertical {
  flex-direction: column;
}
.MuiTabs-centered {
  justify-content: center;
}
.MuiTabs-scroller {
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
}
.MuiTabs-fixed {
  width: 100%;
  overflow-x: hidden;
}
.MuiTabs-scrollable {
  overflow-x: scroll;
  scrollbar-width: none;
}
.MuiTabs-scrollable::-webkit-scrollbar {
  display: none;
}
@media (max-width:599.95px) {
  .MuiTabs-scrollButtonsDesktop {
    display: none;
  }
}
</style><style data-jss="" data-meta="MuiTab">
.MuiTab-root {
  padding: 6px 12px;
  overflow: hidden;
  position: relative;
  font-size: 0.875rem;
  max-width: 264px;
  min-width: 72px;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.75;
  white-space: normal;
  text-transform: uppercase;
}
@media (min-width:600px) {
  .MuiTab-root {
    min-width: 160px;
  }
}
.MuiTab-labelIcon {
  min-height: 72px;
  padding-top: 9px;
}
.MuiTab-labelIcon .MuiTab-wrapper > *:first-child {
  margin-bottom: 6px;
}
.MuiTab-textColorInherit {
  color: inherit;
  opacity: 0.7;
}
.MuiTab-textColorInherit.Mui-selected {
  opacity: 1;
}
.MuiTab-textColorInherit.Mui-disabled {
  opacity: 0.5;
}
.MuiTab-textColorPrimary {
  color: rgba(255, 255, 255, 0.7);
}
.MuiTab-textColorPrimary.Mui-selected {
  color: #fff;
}
.MuiTab-textColorPrimary.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
}
.MuiTab-textColorSecondary {
  color: rgba(255, 255, 255, 0.7);
}
.MuiTab-textColorSecondary.Mui-selected {
  color: rgba(233, 30, 99, 1);
}
.MuiTab-textColorSecondary.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
}
.MuiTab-fullWidth {
  flex-grow: 1;
  max-width: none;
  flex-basis: 0;
  flex-shrink: 1;
}
.MuiTab-wrapped {
  font-size: 0.75rem;
  line-height: 1.5;
}
.MuiTab-wrapper {
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style><style data-jss="" data-meta="makeStyles">
.jss346 {
  text-transform: none;
}
.jss346:hover {
  color: #fff;
  opacity: 1;
}
.jss346:hover .jss347 {
  visibility: visible;
}
.jss347 {
  visibility: hidden;
}
</style><style data-jss="" data-meta="makeStyles">
.jss366 {
  flex-grow: 1;
}
.jss367 {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
}
.jss367:hover {
  background-color: #424242;
}
.jss368 {
  display: flex;
  margin-top: 16px;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 0;
}
.jss369 {
  flex: 1;
  margin-left: 24px;
}
.jss370 {
  padding: 10px;
}
.jss371 {
  display: flex;
  align-items: center;
}
</style><style data-jss="" data-meta="makeStyles">
.jss374 {
  padding: 10px;
}
</style><style data-jss="" data-meta="makeStyles">
.jss352 {
  height: 100%;
}
.jss353 {
  height: calc(100vh - 105px);
}
.jss354 {
  height: 100%;
  display: flex;
  overflow: auto;
  flex-direction: column;
}
.jss355 {
  border-color: transparent !important;
  border-width: 0px;
}
.jss356 {
  overflow: auto;
  max-height: 100%;
  padding-left: 8px;
}
.jss357 {
  border-top: 1.5px solid #81c784 !important;
}
.jss358 {
  border-top: 1px solid #e57373 !important;
}
.jss359 {
  height: 5px;
  background: #24242b;
}
.jss359:hover {
  background: #616161;
  transition: background 0.1.5s;
}
.jss360 {
  height: 1px;
}
.jss361 {
  height: 100%;
}
.jss361 .MuiInputBase-root {
  height: 100%;
  align-items: flex-start;
}
.jss361 .MuiInputBase-input {
  height: 100%;
  padding: 8px;
  overflow: auto;
  box-sizing: border-box;
}
</style><style data-jss="" data-meta="MuiCircularProgress">
.MuiCircularProgress-root {
  display: inline-block;
}
.MuiCircularProgress-static {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiCircularProgress-indeterminate {
  animation: MuiCircularProgress-keyframes-circular-rotate 1.4s linear infinite;
}
.MuiCircularProgress-determinate {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiCircularProgress-colorPrimary {
  color: #fff;
}
.MuiCircularProgress-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiCircularProgress-svg {
  display: block;
}
.MuiCircularProgress-circle {
  stroke: currentColor;
}
.MuiCircularProgress-circleStatic {
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiCircularProgress-circleIndeterminate {
  animation: MuiCircularProgress-keyframes-circular-dash 1.4s ease-in-out infinite;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
}
.MuiCircularProgress-circleDeterminate {
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
@-webkit-keyframes MuiCircularProgress-keyframes-circular-rotate {
  0% {
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes MuiCircularProgress-keyframes-circular-dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
}
.MuiCircularProgress-circleDisableShrink {
  animation: none;
}
</style><style data-jss="" data-meta="makeStyles">
.jss372 {
  color: #fff;
  z-index: 1101;
}
.jss373 {
  border: 1px solid #dadce0;
}
</style><style data-jss="" data-meta="makeStyles">
.jss312 {
  line-height: 1.5;
  padding-top: 3px;
  padding-bottom: 3px;
}
.jss313 {
  width: 100%;
}
.jss314 {
  text-align: right;
}
.jss315 {
  float: right;
  padding-top: 2px;
  padding-right: 2px;
}
.jss316 {
  color: #fff;
  text-decoration: none;
}
.jss317 {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.jss318 {
  padding: 6px;
}
.jss319 {
  margin: 0;
  padding: 0px 0px 0px 42px;
  background: white;
}
.jss320 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.jss321 {
  background: #24242b;
}
.jss322 {
  padding-top: 4px;
}
@media (min-width:600px) {
  .jss323 {
    border-left: 5px solid #24242b;
  }
}
.jss324 {
  padding-bottom: 8px;
}
.jss325 {
  width: 5px;
  background: #24242b;
}
.jss325:hover {
  background: #616161;
  transition: background 0.1.5s;
}
.jss326 {
  padding: 8px;
  overflow: auto;
  max-height: calc(100vh - 110px);
}
.jss327 {
  border: 1px solid #ccc;
  display: inline;
  padding: 3.9px 5px;
  background: linear-gradient(to right, #616161 50%, transparent 50%);
  margin-right: 10px;
  border-radius: 4px;
  padding-bottom: 8px;
}
.jss328 {
  background: linear-gradient(to left, #616161 50%, transparent 50%);
}
.jss329 {
  color: rgba(255, 255, 255, 0.7);
  border-radius: 0;
}
</style><style data-jss="" data-meta="makeStyles">
.jss310 {
  color: #fff;
  z-index: 1101;
}
</style><style data-jss="" data-meta="MuiContainer">
.MuiContainer-root {
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width:600px) {
  .MuiContainer-root {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.MuiContainer-disableGutters {
  padding-left: 0;
  padding-right: 0;
}
@media (min-width:600px) {
  .MuiContainer-fixed {
    max-width: 600px;
  }
}
@media (min-width:960px) {
  .MuiContainer-fixed {
    max-width: 960px;
  }
}
@media (min-width:1280px) {
  .MuiContainer-fixed {
    max-width: 1280px;
  }
}
@media (min-width:1920px) {
  .MuiContainer-fixed {
    max-width: 1920px;
  }
}
@media (min-width:0px) {
  .MuiContainer-maxWidthXs {
    max-width: 444px;
  }
}
@media (min-width:600px) {
  .MuiContainer-maxWidthSm {
    max-width: 600px;
  }
}
@media (min-width:960px) {
  .MuiContainer-maxWidthMd {
    max-width: 960px;
  }
}
@media (min-width:1280px) {
  .MuiContainer-maxWidthLg {
    max-width: 1280px;
  }
}
@media (min-width:1920px) {
  .MuiContainer-maxWidthXl {
    max-width: 1920px;
  }
}
</style><style data-jss="" data-meta="makeStyles">

</style><style data-jss="" data-meta="makeStyles">
.jss378 {
  color: white;
  background: #000000;
  margin-top: 60px;
  padding-top: 60px;
  padding-bottom: 20px;
}
.jss379 {
  text-decoration: none;
}
.jss380 {
  color: #adb5bd;
  text-align: center;
}
.jss381 {
  color: #FFF;
}
</style><style data-jss="" data-meta="makeStyles">
.jss288 {
  flex-grow: 1;
}
@media (max-width:959.95px) {
  .jss289 {
    padding-left: 4px;
    padding-right: 4px;
  }
}
.jss290 {
  margin-left: 8px;
  margin-right: 8px;
}
.jss291 {
  box-shadow: 0 2px 10px 0 rgba(23,70,161,.11);
}
.jss292 {
  top: 300px;
  left: 100%;
  height: 25px;
  padding: 1%;
  position: fixed;
  transform: rotate(90deg) translateX(-50%);
  background: #24242b;
  transform-origin: 0% 0%;
}
.jss292:hover {
  background: #000;
}
</style><style data-jss="" data-meta="makeStyles">
.jss376 {
  position: relative;
  flex-grow: 1;
}
.jss376:hover .jss377 {
  visibility: visible;
}
.jss377 {
  top: 6px;
  color: #bdbdbd;
  right: 4px;
  cursor: pointer;
  position: absolute;
  visibility: hidden;
}
.jss377:hover {
  color: #9e9e9e;
}
</style><script charset="utf-8" src="./HOJA 10_files/8a28b14e.61b46c54c5f570d86c65.js.descarga"></script><script charset="utf-8" src="./HOJA 10_files/73668763bff2d5c66346874fcddb8a684d338f3e.ebf2048ce0bd911d9535.js.descarga"></script><script charset="utf-8" src="./HOJA 10_files/1c377de9871869784a9a644e97cd16155818224d.1abe40fee5eab5e37a91.js.descarga"></script><script charset="utf-8" src="./HOJA 10_files/f54b42984bfe4d114461fcea2710af414ac1fe74.4e3c29db7954afbbf7a3.js.descarga"></script><script charset="utf-8" src="./HOJA 10_files/135.6a995be9a9811145c3e8.js.descarga"></script><link as="script" rel="prefetch" href="./HOJA 10_files/0b7b90cd.aa72732e0783bba5c6be.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/b9e98ab74f3a4dffb23645eef1b669952c0cb3bd.75f54defc4cda229b4e7.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/fad014b31d248e926e996692389e6e9b7a4e67da.fd18c6457f76070bc13e.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/41ca98c927b2a63343dd39148f3e7d6c447bb48b.83093ed3ec0f817a298d.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/f91dc7b80a3c5e4c42889edc105fc24e133fde85.2c37e531f2205f953a53.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/add4db1c34f1620501c138148240ffaa23ca2f6d.9507ac1a3e2ad2ca6a18.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/b7b484404d3f80c44a1011180acc8199ee534f10.cadfcbc86733371ae8ac.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/cc0c421546b65ded95016130fd2aa616aaecbf20.8ba2ded67bb7c1a8e3f0.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/4bfab6e2fc0e2d648ccb3cb9a1b4469c548758ab.a6266fdee247a62a13be.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/d1e226fd0deed97f1ee3dd7aa41b133ec8083cfa.06daacc6301aa9560930.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/4ec4906b1d39bcb99f21e10681bff6b72922eff4.528ca1bc1fcda47a65ff.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/00e41bf0e1ede16cf125c4e4ad3d61b42c7cc932.68a1f7134eac0b31b710.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/dc86262585d9463181c45ff720e32e75fc1a5d83.f9b13d94b95203351390.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/39df9c46cd8753827408a59ba83f8655c8f07b16.8e042adc7c9d4bc2d8ad.js.descarga"><link as="script" rel="prefetch" href="./HOJA 10_files/index-cf3518310cb7b4d24836.js.descarga"><script async="" src="./HOJA 10_files/client"></script><style id="googleidentityservice_button_styles">.qJTHM{-webkit-user-select:none;color:#202124;direction:ltr;-webkit-touch-callout:none;font-family:"Roboto-Regular",arial,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400;margin:0;overflow:hidden;-webkit-text-size-adjust:100%}.ynRLnc{left:-9999px;position:absolute;top:-9999px}.L6cTce{display:none}.bltWBb{word-break:break-all}.hSRGPd{color:#1a73e8;cursor:pointer;font-weight:500;text-decoration:none}.Bz112c-W3lGp{height:16px;width:16px}.Bz112c-E3DyYd{height:20px;width:20px}.Bz112c-r9oPif{height:24px;width:24px}.Bz112c-uaxL4e{-webkit-border-radius:10px;border-radius:10px}.LgbsSe-Bz112c{display:block}.S9gUrf-YoZ4jf,.S9gUrf-YoZ4jf *{border:none;margin:0;padding:0}.fFW7wc-ibnC6b>.aZ2wEe>div{border-color:#4285f4}.P1ekSe-ZMv3u>div:nth-child(1){background-color:#1a73e8!important}.P1ekSe-ZMv3u>div:nth-child(2),.P1ekSe-ZMv3u>div:nth-child(3){background-image:linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#1a73e8,#1a73e8)!important}.haAclf{display:inline-block}.nsm7Bb-HzV7m-LgbsSe{-webkit-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .218s,border-color .218s;transition:background-color .218s,border-color .218s;-webkit-user-select:none;-webkit-appearance:none;background-color:#fff;background-image:none;border:1px solid #dadce0;color:#3c4043;cursor:pointer;font-family:"Google Sans",arial,sans-serif;font-size:14px;height:40px;letter-spacing:0.25px;outline:none;overflow:hidden;padding:0 12px;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;width:auto}@media screen and (-ms-high-contrast:active){.nsm7Bb-HzV7m-LgbsSe{border:2px solid windowText;color:windowText}}.nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe{font-size:14px;height:32px;letter-spacing:0.25px;padding:0 10px}.nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe{font-size:11px;height:20px;letter-spacing:0.3px;padding:0 8px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe{padding:0;width:40px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.pSzOP-SxQuSe{width:32px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.purZT-SxQuSe{width:20px}.nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK{-webkit-border-radius:20px;border-radius:20px}.nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK.pSzOP-SxQuSe{-webkit-border-radius:16px;border-radius:16px}.nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK.purZT-SxQuSe{-webkit-border-radius:10px;border-radius:10px}.nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc{border:none;color:#fff}.nsm7Bb-HzV7m-LgbsSe.MFS4be-v3pZbf-Ia7Qfc{background-color:#1a73e8}.nsm7Bb-HzV7m-LgbsSe.MFS4be-JaPV2b-Ia7Qfc{background-color:#202124;color:#e8eaed}.nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c{height:18px;margin-right:8px;min-width:18px;width:18px}.nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c{height:14px;min-width:14px;width:14px}.nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c{height:10px;min-width:10px;width:10px}.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-Bz112c{margin-left:8px;margin-right:-4px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c{margin:0;padding:10px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.pSzOP-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c{padding:8px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c{padding:4px}.nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-top-left-radius:3px;border-top-left-radius:3px;-webkit-border-bottom-left-radius:3px;border-bottom-left-radius:3px;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:center;-webkit-align-items:center;align-items:center;background-color:#fff;height:36px;margin-left:-10px;margin-right:12px;min-width:36px;width:36px}.nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf .nsm7Bb-HzV7m-LgbsSe-Bz112c,.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf .nsm7Bb-HzV7m-LgbsSe-Bz112c{margin:0;padding:0}.nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{height:28px;margin-left:-8px;margin-right:10px;min-width:28px;width:28px}.nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{height:16px;margin-left:-6px;margin-right:8px;min-width:16px;width:16px}.nsm7Bb-HzV7m-LgbsSe.Bz112c-LgbsSe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-radius:3px;border-radius:3px;margin-left:2px;margin-right:0;padding:0}.nsm7Bb-HzV7m-LgbsSe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-radius:18px;border-radius:18px}.nsm7Bb-HzV7m-LgbsSe.pSzOP-SxQuSe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-radius:14px;border-radius:14px}.nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-radius:8px;border-radius:8px}.nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-direction:row;flex-direction:row;justify-content:space-between;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;height:100%;position:relative;width:100%}.nsm7Bb-HzV7m-LgbsSe .oXtfBe-l4eHX{justify-content:center}.nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-BPrWId{-webkit-flex-grow:1;flex-grow:1;font-family:"Google Sans",arial,sans-serif;font-weight:500;overflow:hidden;text-overflow:ellipsis;vertical-align:top}.nsm7Bb-HzV7m-LgbsSe.purZT-SxQuSe .nsm7Bb-HzV7m-LgbsSe-BPrWId{font-weight:300}.nsm7Bb-HzV7m-LgbsSe .oXtfBe-l4eHX .nsm7Bb-HzV7m-LgbsSe-BPrWId{-webkit-flex-grow:0;flex-grow:0}.nsm7Bb-HzV7m-LgbsSe .nsm7Bb-HzV7m-LgbsSe-MJoBVe{-webkit-transition:background-color .218s;transition:background-color .218s;bottom:0;left:0;position:absolute;right:0;top:0}.nsm7Bb-HzV7m-LgbsSe:hover,.nsm7Bb-HzV7m-LgbsSe:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d2e3fc;outline:none}.nsm7Bb-HzV7m-LgbsSe:hover .nsm7Bb-HzV7m-LgbsSe-MJoBVe,.nsm7Bb-HzV7m-LgbsSe:focus .nsm7Bb-HzV7m-LgbsSe-MJoBVe{background:rgba(66,133,244,.04)}.nsm7Bb-HzV7m-LgbsSe:active .nsm7Bb-HzV7m-LgbsSe-MJoBVe{background:rgba(66,133,244,.1)}.nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc:hover .nsm7Bb-HzV7m-LgbsSe-MJoBVe,.nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc:focus .nsm7Bb-HzV7m-LgbsSe-MJoBVe{background:rgba(255,255,255,.24)}.nsm7Bb-HzV7m-LgbsSe.MFS4be-Ia7Qfc:active .nsm7Bb-HzV7m-LgbsSe-MJoBVe{background:rgba(255,255,255,.32)}.nsm7Bb-HzV7m-LgbsSe .n1UuX-DkfjY{-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;height:20px;margin-left:-4px;margin-right:8px;min-width:20px;width:20px}.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId{font-family:"Roboto";font-size:12px;text-align:left}.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .ssJRIf,.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff .fmcmS{overflow:hidden;text-overflow:ellipsis}.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;color:#5f6368;fill:#5f6368;font-size:11px;font-weight:400}.nsm7Bb-HzV7m-LgbsSe.jVeSEe.MFS4be-Ia7Qfc .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff{color:#e8eaed;fill:#e8eaed}.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-BPrWId .K4efff .Bz112c{height:18px;margin:-3px -3px -3px 2px;min-width:18px;width:18px}.nsm7Bb-HzV7m-LgbsSe.jVeSEe .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-top-left-radius:0;border-top-left-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-webkit-border-top-right-radius:3px;border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;border-bottom-right-radius:3px;margin-left:12px;margin-right:-10px}.nsm7Bb-HzV7m-LgbsSe.jVeSEe.JGcpL-RbRzK .nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf{-webkit-border-radius:18px;border-radius:18px}.L5Fo6c-sM5MNb{border:0;display:block;left:0;position:relative;top:0}.L5Fo6c-bF1uUb{-webkit-border-radius:4px;border-radius:4px;bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.L5Fo6c-bF1uUb:focus{border:none;outline:none}sentinel{}</style><link id="googleidentityservice" type="text/css" media="all" href="./HOJA 10_files/style" rel="stylesheet"><script src="./HOJA 10_files/api.js.descarga" id="gapi-client" gapi_processed="true"></script></head><body style=""><div id="__next"><header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorInherit jss293 MuiPaper-elevation0"><div class="MuiToolbar-root MuiToolbar-dense jss304 MuiToolbar-gutters"><button class="MuiButtonBase-root MuiIconButton-root jss303 MuiIconButton-colorInherit MuiIconButton-edgeStart" tabindex="0" type="button" aria-label="Menu"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><a class="jss298" href="https://onecompiler.com/"><div class="MuiBox-root jss308 jss299"></div></a><span class="jss297"></span><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="search" title="Search"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="dark mode"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><a class="textDecorationNone" href="https://onecompiler.com/html"><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">Editor</span><span class="MuiTouchRipple-root"></span></button></a><a class="textDecorationNone" href="https://onecompiler.com/challenges"><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">Challenges</span><span class="MuiTouchRipple-root"></span></button></a><a class="textDecorationNone" href="https://onecompiler.com/orgs"><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">Orgs</span><span class="MuiTouchRipple-root"></span></button></a><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button" aria-haspopup="true"><span class="MuiButton-label">Company &amp; More</span><span class="MuiTouchRipple-root"></span></button><span class="jss301"></span><button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button"><span class="MuiButton-label">Login</span><span class="MuiTouchRipple-root"></span></button></div></header><hr class="MuiDivider-root"><div class="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-center"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12"><div><div class="MuiBackdrop-root jss310" aria-hidden="true" style="opacity: 0; visibility: hidden;"><div class="MuiCircularProgress-root MuiCircularProgress-indeterminate" role="progressbar" style="width: 40px; height: 40px;"><svg class="MuiCircularProgress-svg" viewBox="22 22 44 44"><circle class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg></div></div></div><div class="jss291"><div class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded"><div class="jss332"><div class="MuiGrid-root jss321 MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between"><div class="MuiGrid-root MuiGrid-item"> <div class="MuiBox-root jss345" style="display:flex;flex-direction:row"><div class="MuiTabs-root"><div style="width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll" class="MuiTabs-scrollable"></div><div class="MuiTabs-scroller MuiTabs-scrollable" style="margin-bottom: 0px;"><div class="MuiTabs-flexContainer" role="tablist"><div class="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary jss346 Mui-selected" tabindex="0" role="tab" aria-disabled="false" aria-selected="true"><span class="MuiTab-wrapper"><span>HelloWorld.ts<span class="jss347"></span></span></span><span class="MuiTouchRipple-root"></span></div></div><span class="jss348 jss349 MuiTabs-indicator" style="left: 0px; width: 160px;"></span></div></div></div> </div><div class="MuiGrid-root MuiGrid-item"> <div class="jss317"><h1 class="MuiTypography-root jss311 MuiTypography-body1 MuiTypography-colorPrimary" itemprop="headline">HOJA 10&nbsp;<button class="MuiButtonBase-root MuiIconButton-root jss318 MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Edit"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></h1></div> </div><div class="MuiGrid-root MuiGrid-item"> <!-- --><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="Create a new TYPESCRIPT program"><span class="MuiButton-label">New</span><span class="MuiTouchRipple-root"></span></button>&nbsp;&nbsp;&nbsp;<button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="Click to change the language"><span class="MuiButton-label">typescript <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedSecondary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span class="MuiButton-label">Run <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="more-options" aria-haspopup="true"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="delete"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg></span><span class="MuiTouchRipple-root"></span></button> </div></div></div><div class="jss334"><div class="MuiGrid-root jss321 jss322  MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="Create a new TYPESCRIPT program"><span class="MuiButton-label">New</span><span class="MuiTouchRipple-root"></span></button>&nbsp;&nbsp;&nbsp;<button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="Click to change the language"><span class="MuiButton-label">typescript <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedSecondary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="ctrl + enter"><span class="MuiButton-label">Run <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="more-options" aria-haspopup="true"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="delete" title="Full Screen"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div></div> <div class="" data-panel-group="" data-panel-group-direction="horizontal" data-panel-group-id="0" style="display: flex; flex-direction: row; height: 100%; overflow: hidden; width: 100%;"><div class="" data-panel="" data-panel-group-id="0" data-panel-id="1" data-panel-size="60.0" style="flex: 60 1 0px; overflow: hidden;"><div id="oc_ace" class=" ace_editor ace-dracula ace_dark" style="width: 100%; height: calc(-100px + 100vh); font-size: 14px;" draggable="false"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; height: 1px; width: 1px; top: 578px; left: 322px;"></textarea><div class="ace_gutter" aria-hidden="true" style="left: 0px; width: 57px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: -3182px; left: 0px; width: 57px;"><div class="ace_gutter-cell " style="height: 16px; top: 3168px;">199<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3184px;">200<span style="display: inline-block; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3200px;">201<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3216px;">202<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3232px;">203<span style="display: inline-block; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3248px;">204<span style="display: inline-block; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3264px;">205<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3280px;">206<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3296px;">207<span style="display: inline-block; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3312px;">208<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3328px;">209<span style="display: inline-block; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3344px;">210<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3360px;">211<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3376px;">212<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3392px;">213<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3408px;">214<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3424px;">215<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3440px;">216<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3456px;">217<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3472px;">218<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3488px;">219<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3504px;">220<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3520px;">221<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3536px;">222<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3552px;">223<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3568px;">224<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3584px;">225<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3600px;">226<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3616px;">227<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3632px;">228<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3648px;">229<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3664px;">230<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3680px;">231<span class="ace_fold-widget ace_start ace_open" style="height: 16px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3696px;">232<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3712px;">233<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 16px; top: 3728px;">234<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell ace_gutter-active-line " style="height: 16px; top: 3744px;">235<span style="display: none; height: 16px;" class="ace_fold-widget ace_start ace_open"></span></div></div></div><div class="ace_scroller" style="line-height: 16px; left: 56.0977px; right: 17px; bottom: 0px;"><div class="ace_content" style="top: -14px; left: 0px; width: 840px; height: 610px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 620px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 16px; top: 576px; left: 0px; right: 0px;"></div><div class="ace_bracket ace_start ace_br15" style="height: 16px; width: 7.69922px; top: 576px; left: 258.074px;"></div><div class="ace_bracket ace_start ace_br15" style="height: 16px; width: 7.69922px; top: 576px; left: 88.6914px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: -3168px; left: 0px;"><div class="ace_line" style="height: 16px; top: 3168px;"><span class="ace_indent-guide">  </span>  </div><div class="ace_line" style="height: 16px; top: 3184px;"><span class="ace_indent-guide">  </span>  <span class="ace_keyword">public</span> <span class="ace_identifier">search</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">dataToSearch</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">number</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">number</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 16px; top: 3200px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_storage ace_type">let</span> <span class="ace_identifier">data</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">number</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_keyword ace_operator">-</span><span class="ace_constant ace_numeric">1</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3216px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_storage ace_type">let</span> <span class="ace_identifier">current</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">NodeRBT</span> | <span class="ace_constant ace_language">null</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_variable ace_language">this</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">root</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3232px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_keyword">while</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">current</span> <span class="ace_keyword ace_operator">!=</span> <span class="ace_constant ace_language">null</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 16px; top: 3248px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_keyword">if</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">current</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">getData</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span> <span class="ace_keyword ace_operator">==</span> <span class="ace_identifier">dataToSearch</span><span class="ace_paren ace_rparen">)</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 16px; top: 3264px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_identifier">data</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">current</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">getData</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3280px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_keyword">break</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3296px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_paren ace_rparen">}</span> <span class="ace_keyword">else</span> <span class="ace_keyword">if</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">dataToSearch</span> <span class="ace_keyword ace_operator">&lt;</span> <span class="ace_identifier">current</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">getData</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">))</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 16px; top: 3312px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_identifier">current</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">current</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">getLeftChild</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3328px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_paren ace_rparen">}</span> <span class="ace_keyword">else</span> <span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 16px; top: 3344px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_identifier">current</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_identifier">current</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">getRightChild</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3360px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height: 16px; top: 3376px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height: 16px; top: 3392px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_keyword">return</span> <span class="ace_identifier">data</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3408px;"><span class="ace_indent-guide">  </span>  <span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height: 16px; top: 3424px;"></div><div class="ace_line" style="height: 16px; top: 3440px;"></div><div class="ace_line" style="height: 16px; top: 3456px;"><span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height: 16px; top: 3472px;"></div><div class="ace_line" style="height: 16px; top: 3488px;"></div><div class="ace_line" style="height: 16px; top: 3504px;"></div><div class="ace_line" style="height: 16px; top: 3520px;"></div><div class="ace_line" style="height: 16px; top: 3536px;"><span class="ace_storage ace_type">const</span> <span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">RBTree</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_keyword">new</span> <span class="ace_identifier">RBTree</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3552px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">7</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3568px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">15</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3584px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">11</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3600px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">20</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3616px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">30</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3632px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">50</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3648px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">insert</span><span class="ace_paren ace_lparen">(</span><span class="ace_constant ace_numeric">45</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3664px;"><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">printInnorder</span><span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 16px; top: 3680px;"></div><div class="ace_line" style="height: 16px; top: 3696px;"><span class="ace_storage ace_type">let</span> <span class="ace_identifier">data</span> <span class="ace_punctuation ace_operator">:</span> <span class="ace_identifier">number</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_constant ace_numeric">15</span></div><div class="ace_line" style="height: 16px; top: 3712px;"></div><div class="ace_line" style="height: 16px; top: 3728px;"><span class="ace_storage ace_type">console</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function ace_firebug">log</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"DATO A BUSCAR : "</span> <span class="ace_keyword ace_operator">+</span> <span class="ace_identifier">data</span><span class="ace_paren ace_rparen">)</span></div><div class="ace_line" style="height: 16px; top: 3744px;"><span class="ace_storage ace_type">console</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function ace_firebug">log</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">myRBTree</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">search</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">data</span><span class="ace_paren ace_rparen">))</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors"><div class="ace_cursor" style="display: block; top: 576px; left: 266px; width: 8px; height: 16px; animation-duration: 1000ms;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 17px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 3760px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="height: 22px; left: 56.0977px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 840px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></div><div class="jss325" role="separator" tabindex="0" data-panel-group-direction="horizontal" data-panel-group-id="0" data-resize-handle="" data-resize-handle-state="inactive" data-panel-resize-handle-enabled="true" data-panel-resize-handle-id="2" style="touch-action: none; user-select: none;" aria-controls="1" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60"></div><div class="" data-panel="" data-panel-group-id="0" data-panel-id="3" data-panel-size="40.0" style="flex: 40 1 0px; overflow: hidden;"><div class="jss352"><div class="" data-panel-group="" data-panel-group-direction="vertical" data-panel-group-id="16" style="display: flex; flex-direction: column; height: 100%; overflow: hidden; width: 100%;"><div class="" data-panel="" data-panel-group-id="16" data-panel-id="17" data-panel-size="11.0" style="flex: 11 1 0px; overflow: hidden;"><div class="jss354"><div class="MuiFormControl-root MuiTextField-root jss361 MuiFormControl-marginNormal MuiFormControl-fullWidth"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">STDIN</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline"><textarea rows="1" aria-invalid="false" placeholder="Input for the program ( Optional )" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline" style="height: 35px; overflow: hidden;"></textarea><textarea aria-hidden="true" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline" readonly="" tabindex="-1" style="visibility: hidden; position: absolute; overflow: hidden; height: 0px; top: 0px; left: 0px; transform: translateZ(0px); width: 560.237px;"></textarea><fieldset aria-hidden="true" class="jss362 MuiOutlinedInput-notchedOutline jss355"><legend class="jss364 jss365"><span>STDIN</span></legend></fieldset></div></div></div></div><div class="jss359 jss360 " role="separator" tabindex="0" data-panel-group-direction="vertical" data-panel-group-id="16" data-resize-handle="" data-resize-handle-state="inactive" data-panel-resize-handle-enabled="true" data-panel-resize-handle-id="18" style="touch-action: none; user-select: none;" aria-controls="17" aria-valuemax="100" aria-valuemin="0" aria-valuenow="11"></div><div class="" data-panel="" data-panel-group-id="16" data-panel-id="19" data-panel-size="89.0" style="flex: 89 1 0px; overflow: hidden;"><div class="jss356
                                    jss357  
                                      "><p>Output:</p><div><pre>7(BLACK)
11(BLACK)
15(BLACK)
20(RED)
30(RED)
45(BLACK)
50(RED)
DATO A BUSCAR : 15
15
</pre></div></div></div></div></div></div></div><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8"></div><div class="MuiGrid-root jss323 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4"></div></div><div></div></div></div></div></div><div class="MuiContainer-root jss375 MuiContainer-maxWidthXl"><br><div class="md-view oc-theme-dark "><h1>Typescript Online Compiler</h1><p>Write, Run &amp; Share Typescript code online using OneCompiler's Typescript online compiler for free. It's one of the robust, feature-rich online compilers for Typescript language. Getting started with the OneCompiler's Typescript editor is easy and fast. The editor shows sample boilerplate code when you choose language as Typescript and start coding.</p><h1>About Typescript</h1><p>Typescript(JS) is a strongly typed programming language that builds on JavaScript, developed and maintained by Microsoft.</p><h1>Key Features</h1><ul><li>Superset of Javascript</li><li>portable</li><li>Strong static typing</li><li>supports OOPS</li><li>Language extension to ECMAScript 6 with other features like Type annotations and compile-time type checking, Type inference and Type erasure, Interfaces, Enumerated types, Generics, Namespaces, Tuples</li><li>.ts extension</li></ul><h1>Syntax help</h1><h2>variable declaration</h2><table><thead><tr><th>Keyword</th><th>Description</th><th>Scope</th></tr></thead><tbody><tr><td>var</td><td>Var is used to declare variables(old way of declaring variables)</td><td>Function or global scope</td></tr><tr><td>let</td><td>let is also used to declare variables(new way)</td><td>Global or block Scope</td></tr><tr><td>const</td><td>const is used to declare const values. Once the value is assigned it can not be modified</td><td>Global or block Scope</td></tr></tbody></table><h2>Operators</h2><table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td><code>??</code></td><td>nullish coalescing</td></tr><tr><td><code>?.</code></td><td>optional chaining</td></tr><tr><td><code>!</code></td><td>null assertion</td></tr><tr><td><code>&amp;&amp;=</code></td><td>used to assign value only if current value is truthy</td></tr><tr><td><code>||=</code></td><td>used to assign value only if current value is falsy</td></tr><tr><td><code>??=</code></td><td>used to assign value if current value is null or undefined</td></tr></tbody></table><h2>Loops</h2><h3>1. If:</h3><p>IF is used to execute a block of code based on a condition.</p><h3>Syntax</h3><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">if</span>(condition){
    <span class="hljs-comment">// code</span>
}</code></pre><h3>2. If-Else:</h3><p>Else part is used to execute the block of code when the condition fails.</p><h3>Syntax</h3><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">if</span>(condition){
    <span class="hljs-comment">// code</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-comment">// code</span>
}</code></pre><h3>3. Switch:</h3><p>Switch is used to replace nested If-Else statements.</p><h3>Syntax</h3><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">switch</span>(condition){
    <span class="hljs-keyword">case</span> <span class="hljs-string">'value1'</span> :
        <span class="hljs-comment">//code</span>
        <span class="hljs-keyword">break</span>;
    <span class="hljs-keyword">case</span> <span class="hljs-string">'value2'</span> :
        <span class="hljs-comment">//code</span>
        <span class="hljs-keyword">break</span>;
    .......
    <span class="hljs-attr">default</span> :
        <span class="hljs-comment">//code</span>
        <span class="hljs-keyword">break</span>;
}</code></pre><h3>4. For</h3><p>For loop is used to iterate a set of statements based on a condition.</p><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">for</span>(Initialization; Condition; Increment/decrement){  
<span class="hljs-comment">//code  </span>
} 

<span class="hljs-keyword">let</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> ele <span class="hljs-keyword">of</span> arr) {
 <span class="hljs-comment">// code</span>
}

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> index <span class="hljs-keyword">in</span> arr) {
<span class="hljs-comment">//code</span>
}</code></pre><h3>5. While</h3><p>While is also used to iterate a set of statements based on a condition. Usually while is preferred when number of iterations are not known in advance.</p><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">while</span> (condition) {  
  <span class="hljs-comment">// code </span>
}  </code></pre><h3>6. Do-While</h3><p>Do-while is also used to iterate a set of statements based on a condition. It is mostly used when you need to execute the statements atleast once.</p><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">do</span> {  
  <span class="hljs-comment">// code </span>
} <span class="hljs-keyword">while</span> (condition); </code></pre><h2>Arrow functions</h2><p>Arrow Functions helps developers to write code in concise way, it’s introduced in ES6.<br>Arrow functions can be written in multiple ways. Below are couple of ways to use arrow function but it can be written in many other ways as well.</p><h3>Syntax:</h3><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript">() =&gt; expression</code></pre><h3>Example:</h3><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>]
<span class="hljs-keyword">const</span> squaresOfEvenNumbers = numbers.filter(<span class="hljs-function"><span class="hljs-params">ele</span> =&gt;</span> ele % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>)
                                    .map(<span class="hljs-function"><span class="hljs-params">ele</span> =&gt;</span> ele ** <span class="hljs-number">2</span>);
<span class="hljs-built_in">console</span>.log(squaresOfEvenNumbers);</code></pre><h2>Function Overloading</h2><p>Typescript provides function overloading where multiple functions with the same name but different parameter types and return type is possible. But, the number of parameters should be the same.</p><pre class="jss376"><svg class="MuiSvgIcon-root jss377 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg><code class="language-js hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Addition</span>(<span class="hljs-params">a:string, b:string</span>):<span class="hljs-title">string</span></span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Addition</span>(<span class="hljs-params">a:number, b:number</span>): <span class="hljs-title">number</span></span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Addition</span>(<span class="hljs-params">a: any, b:any</span>): <span class="hljs-title">any</span> </span>{
    <span class="hljs-keyword">return</span> a + b;
}
Addition(<span class="hljs-string">"Hello "</span>,<span class="hljs-string">"foo"</span>); <span class="hljs-comment">// outputs Hello foo</span>
Addition(<span class="hljs-number">2</span>,<span class="hljs-number">3</span>); <span class="hljs-comment">//outpus 5</span></code></pre></div></div><div class="MuiGrid-root jss378 MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1"> </div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-11"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-3"><h6 class="MuiTypography-root footerText MuiTypography-h6 MuiTypography-gutterBottom">OneCompiler.com</h6><br><a class="jss379" href="https://onecompiler.com/about"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> About</p></a><a class="jss379" href="https://onecompiler.com/contact"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Contact</p></a><br><a class="jss379" href="https://onecompiler.com/users"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Users</p></a><a class="jss379" href="https://status.onecompiler.com/" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Status</p></a><a class="jss379" href="https://onecompiler.com/apis/pricing"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Pricing</p></a><br><a class="jss379" href="https://github.com/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> GitHub </p></a><a class="jss379" href="https://www.linkedin.com/company/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> LinkedIn </p></a><a class="jss379" href="https://www.facebook.com/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Facebook </p></a><a class="jss379" href="https://www.instagram.com/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Instagram </p></a><a class="jss379" href="https://twitter.com/OneCompilerHQ" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Twitter </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-6"><h6 class="MuiTypography-root footerText MuiTypography-h6 MuiTypography-gutterBottom">Languages</h6><br><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/java"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Java </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/python"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Python </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/c"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> C </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/cpp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> C++ </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/nodejs"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> NodeJS </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/javascript"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> JavaScript </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/groovy"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Groovy </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/jshell"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> JShell </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/haskell"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Haskell </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/tcl"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Tcl </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/lua"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Lua </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/ada"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Ada </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/commonlisp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> CommonLisp </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/d"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> D </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/elixir"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Elixir </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/erlang"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Erlang </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/fsharp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> F# </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/fortran"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Fortran </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/assembly"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Assembly </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/scala"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Scala </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/php"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> PHP </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/python2"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Python2 </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/csharp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> C# </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/perl"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Perl </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/ruby"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Ruby </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/go"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Go </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/r"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> R </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/racket"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Racket </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/ocaml"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> OCaml </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/vb"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Visual Basic (VB.NET) </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/basic"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Basic </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/html"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> HTML </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/materialize"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Materialize </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/bootstrap"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Bootstrap </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/jquery"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> JQuery </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/foundation"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Foundation </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/bulma"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Bulma </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/uikit"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Uikit </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/semanticUI"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Semantic UI </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/skeleton"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Skeleton </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/milligram"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Milligram </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/paperCss"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> PaperCSS </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/backbonejs"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> BackboneJS </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/react"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> React (Beta) </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/angular"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Angular (Beta) </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/vue"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Vue (Beta) </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/vue3"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Vue3 (Beta) </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/bash"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Bash </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/clojure"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Clojure </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/typescript"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> TypeScript </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/cobol"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Cobol </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/kotlin"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Kotlin </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/pascal"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Pascal </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/prolog"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Prolog </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/rust"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Rust </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/swift"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Swift </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/objectivec"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Objective-C </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/octave"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Octave </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/text"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Text </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/brainfk"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> BrainFK </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/coffeescript"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> CoffeeScript </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/ejs"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> EJS </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/mysql"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> MySQL </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/oracle"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Oracle Database </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/postgresql"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> PostgreSQL </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/mongodb"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> MongoDB </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/sqlite"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> SQLite </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/redis"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Redis </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/mariadb"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> MariaDB </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/cassandra"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Cassandra </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/plsql"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Oracle PL/SQL </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-md-4 MuiGrid-grid-lg-3"><a class="jss379" href="https://onecompiler.com/sqlserver"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Microsoft SQL Server </p></a></div></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-3"><h6 class="MuiTypography-root footerText MuiTypography-h6 MuiTypography-gutterBottom">More</h6><br><a class="jss379" href="https://onecompiler.com/orgs"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">Orgs</p></a><a class="jss379" href="https://onecompiler.com/apis"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">API</p></a><a class="jss379" href="https://onecompiler.com/apis/pricing"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">Pricing</p></a><br><a class="jss379" href="https://onecompiler.com/cheatsheets"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">Cheatsheets</p></a><a class="jss379" href="https://onecompiler.com/tutorials"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">Tutorials</p></a><a class="jss379" href="https://onecompiler.com/tools"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">Tools</p></a><a class="jss379" href="https://onecompiler.com/stats"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom">Stats</p></a></div></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1"></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><br><br><p class="MuiTypography-root jss380 MuiTypography-body1 MuiTypography-noWrap MuiTypography-gutterBottom">© Copyright 2024 One Compiler Pvt. Ltd. |<a class="jss379" href="https://onecompiler.com/privacy-policy"><span class="footerLink"> Privacy Policy </span></a>|<a href="https://onecompiler.com/terms-and-conditions" class="jss379"><span class="footerLink"> Terms &amp; Conditions </span></a></p></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1"> </div></div></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"pathname":"/editor","query":{"language":"typescript"},"codeObj":{"name":"TypeScript","title":"TypeScript Hello World!","mode":"javascript","description":null,"extension":"ts","languageType":"programming","active":true,"worker":"j","workerId":74,"properties":{"language":"typescript","docs":false,"tutorials":false,"cheatsheets":false,"files":[{"name":"HelloWorld.ts","content":"console.log(\"Hello, World!\")"}]}},"language":"typescript","timestamp":"1731077351521_498","doc":"# Typescript Online Compiler\n\nWrite, Run \u0026 Share Typescript code online using OneCompiler's Typescript online compiler for free. It's one of the robust, feature-rich online compilers for Typescript language. Getting started with the OneCompiler's Typescript editor is easy and fast. The editor shows sample boilerplate code when you choose language as Typescript and start coding. \n\n# About Typescript\n\nTypescript(JS) is a strongly typed programming language that builds on JavaScript, developed and maintained by Microsoft.\n\n# Key Features\n\n* Superset of Javascript\n* portable\n* Strong static typing\n* supports OOPS\n* Language extension to ECMAScript 6 with other features like Type annotations and compile-time type checking, Type inference and Type erasure, Interfaces, Enumerated types, Generics, Namespaces, Tuples\n* .ts extension\n\n# Syntax help\n\n## variable declaration\n\n|Keyword|Description|Scope|\n|----|----|----|\n|var| Var is used to declare variables(old way of declaring variables)| Function or global scope|\n|let| let is also used to declare variables(new way)|Global or block Scope|\n|const|const is used to declare const values. Once the value is assigned it can not be modified|Global or block Scope|\n\n## Operators\n\n|Operator|Description|\n|----|----|\n|`??`|nullish coalescing|\n|`?.`|optional chaining|\n|`!`|null assertion|\n|`\u0026\u0026=`| used to assign value only if current value is truthy|\n|`\\|\\|=`| used to assign value only if current value is falsy|\n|`??=`|used to assign value if current value is null or undefined|\n \n## Loops\n### 1. If:\n\nIF is used to execute a block of code based on a condition. \n\n### Syntax\n\n```js\nif(condition){\n    // code\n}\n```\n### 2. If-Else:\n\nElse part is used to execute the block of code when the condition fails.\n\n### Syntax\n```js\nif(condition){\n    // code\n} else {\n    // code\n}\n```\n\n### 3. Switch:\n\nSwitch is used to replace nested If-Else statements.\n\n### Syntax\n```js\nswitch(condition){\n    case 'value1' :\n        //code\n        break;\n    case 'value2' :\n        //code\n        break;\n    .......\n    default :\n        //code\n        break;\n}\n```\n\n### 4. For\n\nFor loop is used to iterate a set of statements based on a condition.\n\n```js\nfor(Initialization; Condition; Increment/decrement){  \n//code  \n} \n\nlet arr = [1, 2, 3, 4, 5];\nfor (let ele of arr) {\n // code\n}\n\nfor (let index in arr) {\n//code\n}\n```\n\n### 5. While\n\nWhile is also used to iterate a set of statements based on a condition. Usually while is preferred when number of iterations are not known in advance.\n\n```js\nwhile (condition) {  \n  // code \n}  \n```\n\n### 6. Do-While\nDo-while is also used to iterate a set of statements based on a condition. It is mostly used when you need to execute the statements atleast once.\n\n```js\ndo {  \n  // code \n} while (condition); \n```\n## Arrow functions\nArrow Functions helps developers to write code in concise way, it’s introduced in ES6.\nArrow functions can be written in multiple ways. Below are couple of ways to use arrow function but it can be written in many other ways as well. \n\n### Syntax:\n\n```js\n() =\u003e expression\n```\n\n### Example:\n\n```js\nconst numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nconst squaresOfEvenNumbers = numbers.filter(ele =\u003e ele % 2 == 0)\n                                    .map(ele =\u003e ele ** 2);\nconsole.log(squaresOfEvenNumbers);\n```\n## Function Overloading\n\nTypescript provides function overloading where multiple functions with the same name but different parameter types and return type is possible. But, the number of parameters should be the same.\n\n```js\nfunction Addition(a:string, b:string):string;\n\nfunction Addition(a:number, b:number): number;\n\nfunction Addition(a: any, b:any): any {\n    return a + b;\n}\nAddition(\"Hello \",\"foo\"); // outputs Hello foo\nAddition(2,3); //outpus 5\n```"}},"page":"/editor","query":{"language":"typescript"},"buildId":"fab3436066481f7327f2f6458e6629f6480a8ecd","isFallback":false,"customServer":true,"gip":true}</script><script nomodule="" src="./HOJA 10_files/polyfills-0ca3a1f8d6e37198f600.js.descarga"></script><script src="./HOJA 10_files/main-5a4a1bdd168a51fef177.js.descarga" async=""></script><script src="./HOJA 10_files/webpack-d06520f13a9132816ebd.js.descarga" async=""></script><script src="./HOJA 10_files/framework.f0acb69465e7e5a293e0.js.descarga" async=""></script><script src="./HOJA 10_files/29e7b7b4c3109eec42ae8eb73acd47964b3201ee.f50d31b9276407c94922.js.descarga" async=""></script><script src="./HOJA 10_files/f5211ce943e8780dbbe4a22d465a89c6119161d5.2ba9e442da711f9b76ef.js.descarga" async=""></script><script src="./HOJA 10_files/7aaca05354eccb9d65d0b059baa84e81a0369f54.590865f14a58c31b68dc.js.descarga" async=""></script><script src="./HOJA 10_files/1123f66760d7c5979dd9c16418e6f7be4bad588e.41c2afd42674e7aeb47c.js.descarga" async=""></script><script src="./HOJA 10_files/_app-7cf92e60f3ed96dc283c.js.descarga" async=""></script><script src="./HOJA 10_files/b9e98ab74f3a4dffb23645eef1b669952c0cb3bd.75f54defc4cda229b4e7.js.descarga" async=""></script><script src="./HOJA 10_files/fad014b31d248e926e996692389e6e9b7a4e67da.fd18c6457f76070bc13e.js.descarga" async=""></script><script src="./HOJA 10_files/41ca98c927b2a63343dd39148f3e7d6c447bb48b.83093ed3ec0f817a298d.js.descarga" async=""></script><script src="./HOJA 10_files/f91dc7b80a3c5e4c42889edc105fc24e133fde85.2c37e531f2205f953a53.js.descarga" async=""></script><script src="./HOJA 10_files/add4db1c34f1620501c138148240ffaa23ca2f6d.9507ac1a3e2ad2ca6a18.js.descarga" async=""></script><script src="./HOJA 10_files/b7b484404d3f80c44a1011180acc8199ee534f10.cadfcbc86733371ae8ac.js.descarga" async=""></script><script src="./HOJA 10_files/cc0c421546b65ded95016130fd2aa616aaecbf20.8ba2ded67bb7c1a8e3f0.js.descarga" async=""></script><script src="./HOJA 10_files/52872f33f938452d4276395bdc008a54dfbb94bd.7b5630cc828f4a2a5507.js.descarga" async=""></script><script src="./HOJA 10_files/d1e226fd0deed97f1ee3dd7aa41b133ec8083cfa.06daacc6301aa9560930.js.descarga" async=""></script><script src="./HOJA 10_files/5dac00a4b3ffe99b701e30f8d992d27334aabe9b.1d7c465c2393da966cc7.js.descarga" async=""></script><script src="./HOJA 10_files/3bc8fa85569f9622c0476ef6034704512ddf0169.6c9a7da9469d3a7cc8ff.js.descarga" async=""></script><script src="./HOJA 10_files/f8998793187aed2f81ad58fe55136aa9737f0db6.9e38b058f5f1886aa75c.js.descarga" async=""></script><script src="./HOJA 10_files/43.9922619ebd634e7f95fd.js.descarga" async=""></script><script src="./HOJA 10_files/3bf205b55510456cfdb12ab1dcb04649827d3e86.5679a14cfd14e7c0193d.js.descarga" async=""></script><script src="./HOJA 10_files/editor-84f208c1cb6b543f2425.js.descarga" async=""></script><script src="./HOJA 10_files/_buildManifest.js.descarga" async=""></script><script src="./HOJA 10_files/_ssgManifest.js.descarga" async=""></script><script src="./HOJA 10_files/0b7b90cd.aa72732e0783bba5c6be.js.descarga"></script><script src="./HOJA 10_files/4bfab6e2fc0e2d648ccb3cb9a1b4469c548758ab.a6266fdee247a62a13be.js.descarga"></script><script src="./HOJA 10_files/4ec4906b1d39bcb99f21e10681bff6b72922eff4.528ca1bc1fcda47a65ff.js.descarga"></script><script src="./HOJA 10_files/00e41bf0e1ede16cf125c4e4ad3d61b42c7cc932.68a1f7134eac0b31b710.js.descarga"></script><script src="./HOJA 10_files/dc86262585d9463181c45ff720e32e75fc1a5d83.f9b13d94b95203351390.js.descarga"></script><script src="./HOJA 10_files/39df9c46cd8753827408a59ba83f8655c8f07b16.8e042adc7c9d4bc2d8ad.js.descarga"></script><script src="./HOJA 10_files/index-cf3518310cb7b4d24836.js.descarga"></script><div class=" ace_editor ace_autocomplete ace-github" style="font-size: 14px; left: 48.1984px; height: 160px; top: 432.4px; display: none;"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; top: 0px; left: -100px;"></textarea><div class="ace_gutter" aria-hidden="true" style="display: none; left: 0px; width: 41px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: 0px; left: 0px; width: 41px;"><div class="ace_gutter-cell " style="height: 20px; top: 0px;">1<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 20px;">2<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 40px;">3<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 60px;">4<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 80px;">5<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 100px;">6<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 120px;">7<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 140px;">8<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 20px; top: 160px;">9<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 20px; left: 0px; right: 17px; bottom: 0px;"><div class="ace_content" style="cursor: default; top: 0px; left: 0px; width: 281px; height: 200px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 620px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 20px; top: 0px; left: 0px; right: 0px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: 0px; left: 0px;"><div class="ace_line ace_selected" style="height: 20px; top: 0px;"><span class="ace_completion-highlight">a</span><span class="ace_">tributo</span><span class="ace_completion-meta">local</span></div><div class="ace_line" style="height: 20px; top: 20px;"><span class="ace_completion-highlight">a</span><span class="ace_">puntador</span><span class="ace_completion-meta">local</span></div><div class="ace_line" style="height: 20px; top: 40px;"><span class="ace_completion-highlight">a</span><span class="ace_">buelo</span><span class="ace_completion-meta">local</span></div><div class="ace_line" style="height: 20px; top: 60px;"><span class="ace_completion-highlight">a</span><span class="ace_">lert</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 20px; top: 80px;"><span class="ace_completion-highlight">a</span><span class="ace_">rguments</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 20px; top: 100px;"><span class="ace_completion-highlight">A</span><span class="ace_">rray</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 20px; top: 120px;"><span class="ace_completion-highlight">A</span><span class="ace_">rrayBuffer</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 20px; top: 140px;"><span class="ace_completion-highlight">a</span><span class="ace_">sync</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 20px; top: 160px;"><span class="ace_completion-highlight">a</span><span class="ace_">wait</span><span class="ace_completion-meta">keyword</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors" style="opacity: 0;"><div class="ace_cursor" style="display: block; top: 0px; left: 4px; width: 8px; height: 20px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 1780px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 0px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 281px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div><script src="./HOJA 10_files/orgs-4feeab4004b3a6d4e50f.js.descarga"></script><iframe id="ssIFrame_google" sandbox="allow-scripts allow-same-origin allow-storage-access-by-user-activation" allow="identity-credentials-get" frame-border="0" src="./HOJA 10_files/iframe.html" style="position: absolute; width: 1px; height: 1px; inset: -9999px; display: none;"></iframe><script src="./HOJA 10_files/071290cb.67c24c16c1aca338ab59.js.descarga"></script><script src="./HOJA 10_files/42e09af21b8b52962329338a9102dc608610ea4b.13a006764af08a7fdedb.js.descarga"></script><script src="./HOJA 10_files/43d42cfe6143df3d780a0293707c973ec646b7c2_CSS.b49a158ac8e0abf8851b.js.descarga"></script><script src="./HOJA 10_files/042c29c32b1a79b124777e757fee5dc67859310a.883a7788d3cdfd23b5c4.js.descarga"></script><script src="./HOJA 10_files/3e9a78e86e2a647deddf9a1931fbcbfe11b06ce0.07313580c2fe66fc56a8.js.descarga"></script><script src="./HOJA 10_files/fd7a9050403a93f1a7368f9639657ceece9a7fdc.c1475fee4abe6728e730.js.descarga"></script><script src="./HOJA 10_files/challenges-8c6d21da6730a2e010d5.js.descarga"></script></body></html>