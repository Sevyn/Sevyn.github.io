$(function () {
    'use strict';


    var $boxWrapper = $(".box-wrapper");
    var $boxes = $(".box");
    var $pills = $("#pills");
    var $pillButtons = $pills.find("button");
    var $sections = $(".box-expanded");
    var heights = [];


    $boxWrapper.height($(window).height() - 150);

    $boxes.each(function () {
        var $box = $(this);
        $box.css("line-height", $box.height() + "px");

        var $section = $("#" + $box.data("section"));

        $section.show();

        heights[$box.data("section")] = $section.height();

        $section.hide();
    });

    $boxes.click(navigateAnimation);
    $boxes.hover(boxMouseOver, boxMouseOut);
    $pillButtons.click(navigate);

    function navigateAnimation() {
        var $box = $(this);

        $box.css("position", "absolute");
        $box.css("z-index", 10);

        $boxes.each(function () {
            var $someBox = $(this);

            if ($box.data("section") !== $someBox.data("section")) {
                $someBox.hide(400);
            }
        });

        $pills.show(750);
        
        var left = 0;

        if ($box.data("right")) {
            left = -$box.width();
        }

        $box.animate({
            "margin-left": "20px",
            "margin-right": "20px",
            border: "1px solid",
            "border-radius": "4px",
            "border-top-left-radius": 0,
            padding: "5px",
            width: "200%",
            left: left,
            height: heights[$box.data("section")]
        }, 750, "swing", navigate);
    }

    function navigate() {
        var $box = $(this);
        var sectionId = $box.data("section");

        $sections.hide();
        $boxWrapper.hide();

        var $section = $("#" + sectionId);

        $section.show();

        var buttonPressed = $box.is("button");

        $pillButtons.each(function () {
            var $button = $(this);

            $button.css("border-bottom-color", $section.css("border-top-color"));

            if (!buttonPressed && $button.data("section") == sectionId) {
                $button.css("border-bottom-color", $button.css("background-color"));
            }
        });

        if (buttonPressed) {
            $box.css("border-bottom-color", $box.css("background-color"));
        }
    }

    var boxlineHeight = $boxes.css("line-height");
    var boxlineHeightInt = parseInt(boxlineHeight);
    var boxlineHeightAnimated = (boxlineHeightInt - boxlineHeightInt / 10) + "px";

    function boxMouseOver() {
        var $box = $(this);

        var lineHeight = parseInt($box.css("line-height"));
        var newLineHeight = boxlineHeightAnimated;

        $box.filter(':not(:animated)').animate({
            "line-height": newLineHeight
        }, 200, "swing");
    }

    function boxMouseOut() {
        var $box = $(this);
        var lineHeight = parseInt($box.css("line-height"));
        var newLineHeight = boxlineHeight;

        $box.animate({
            "line-height": newLineHeight
        }, 200, "swing");
    }
});