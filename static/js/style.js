/**
 * Created by LXJ on 2016/5/30.
 */
var ohead = document.getElementsByTagName('head')[0];
var styleStr = document.createElement('style');
ohead.appendChild(styleStr);
var ostyle = document.getElementsByTagName('style')[0];
window.onresize = resetStyle;
resetStyle();
function resetStyle() {
    var k = getBodyWidth() / 750;
    var string = 'html{font-size:' + (40 * k) + 'px!important;}';
    ostyle.innerHTML = string;
}
function getBodyWidth() {
    var winWidth;
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientWidth) {
        winWidth = document.documentElement.clientWidth;
    }
    return winWidth;
}
