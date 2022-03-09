var target = document.querySelector(".two");
document.addEventListener("click", function (ev) {
    var test = ev.target;
    if (test.classList.contains("rect")) {
        var gap = target.offsetLeft - (test.offsetWidth + test.offsetLeft);
        var offsetLeft = gap + test.offsetWidth;
        var keyframe = "\n        @keyframes spaceSwapLeft {\n            from {\n                left: 0;\n            }\n            to {\n                left: " + offsetLeft + "px;\n            }\n        } ";
        var style = document.querySelector("#keyframe");
        style.innerHTML = keyframe;
        test.style.animation = "spaceSwapLeft 1s ease-in-out forwards";
        test.style.zIndex = "1";
        test.style.backgroundColor = "yellow";
    }
});
//# sourceMappingURL=script.js.map