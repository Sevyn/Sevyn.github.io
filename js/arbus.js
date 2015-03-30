$(function () {

    var $boxWrapper = $(".box-wrapper");
    var $boxes = $(".box");
    var $pills = $("#pills");
    var $pillButtons = $pills.find("button");
    var $sections = $(".box-expanded");

    $boxWrapper.height($(window).height() - 150);

    $boxes.each(function () {
        $box = $(this);
        $box.css("line-height", $box.height() + "px")
    });

    $boxes.click(navigate);
    $pillButtons.click(navigate);

    function navigate() {
        $box = $(this);
        var sectionId = $box.data("section");

        $sections.hide();
        $boxWrapper.hide();

        var $section = $("#" + sectionId);

        $section.show();
        $pills.show();

        var buttonPressed = $box.is("button");

        $pillButtons.each(function () {
            $button = $(this);

            $button.css("border-bottom-color", $section.css("border-top-color"));

            if (!buttonPressed && $button.data("section") == sectionId) {
                $button.css("border-bottom-color", $button.css("background-color"));
            }
        });

        if (buttonPressed) {
            $box.css("border-bottom-color", $box.css("background-color"));
        }
    }
});