var menuHeads = document.querySelectorAll(".menuHead");

menuHeads.forEach(function (menuHead) {
    menuHead.addEventListener("click", function () {
        var subMenu = this.querySelector(".subMenu");
        subMenu.classList.toggle("active");
        var arrow = this.querySelector(".bi-chevron-down");
        if (subMenu.classList.contains("active")) {
            arrow.classList.add("bi-chevron-up");
        }else {
            arrow.classList.remove("bi-chevron-up");
        }
    });
});