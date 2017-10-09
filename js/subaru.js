function smtel(telno) {
    if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('Android') > 0) {
        document.write('<a href="tel:'+telno+'">'+telno+'</a>');
    } else {
        document.write(telno);
    }
}