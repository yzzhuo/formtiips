/*============================================================*/
/*==========================公共方法和类======================*/
/*============================================================*/

/*添加each方法*/
Array.prototype.each = function(fn) {
    return this.length ? [fn(this.slice(0, 1))].concat(this.slice(1).each(fn)) : [];
};

window.onload = function() {
    $(".tip-tool").after("<div><span></span><b></b><em></em></div>");
    $(".tip-tool").siblings("div").addClass("tip");
    $("input").change(function() {
        var tipText = $(this).attr("tipText");
        $(this).siblings(".tip").css("display", "inline");
        $(this).siblings(".tip").find("em").append(tipText);
    });
}