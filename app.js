$(document).ready(function() {
    $("#dark-mode-toggle").click(function() {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
            $(this).text("Turn off");
        } else {
            $(this).text("Turn on");
        }
    });
});

$(document).ready(function() {
    var originalColor = $("#text-to-change").css("color");
    $("#dark-mode-toggle").click(function() {
        if ($("#text-to-change").css("color") == originalColor) {
            $("#text-to-change").css("color", "red");
        } else {
            $("#text-to-change").css("color", originalColor);
        }
    });
});