function autoHeight(elem) {
    elem.style.height = "auto";
    elem.scrollTop = 0; // 防抖动
    elem.style.height = elem.scrollHeight + "px";
}
export default {
    inserted: function (el, binding) {
        el.addEventListener("keyup", () => {
            autoHeight(el);
        })
    },
}