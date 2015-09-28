function copyText(curr) {
    if (document.createRange) {
        var r = document.createRange();
        r.setStartBefore(curr);
        r.setEndAfter(curr);
        r.selectNode(curr);
        var sel = window.getSelection();
        sel.addRange(r);
        document.execCommand('Copy');
    }
}

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
  var curr = document.getElementById(target.id);
  copyText(curr);
}, false);
