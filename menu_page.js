function like(link) {
    if (link.classList.contains("like-clicked")) {
        link.classList.remove("like-clicked");
        localStorage.removeItem(link.id);
    } else {
        link.classList.add("like-clicked");
        localStorage.setItem(link.id, "clicked");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".like");

    buttons.forEach(function (button) {
        var buttonState = localStorage.getItem(button.id);
        if (buttonState === "clicked") {
            button.classList.add("like-clicked");
        }
    });
});
