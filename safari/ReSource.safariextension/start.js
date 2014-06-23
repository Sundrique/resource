function onBeforeLoad(event) {
    var source = event.url;
    var reSource = safari.self.tab.canLoad(event, source);

    if (reSource != source) {
        event.preventDefault();
        var oldNode = event.srcElement;
        var newNode = document.createElement(oldNode.tagName);
        if (oldNode.tagName == 'LINK') {
            newNode.setAttribute('rel', 'stylesheet');
            newNode.setAttribute('href', reSource);
        } else {
            newNode.setAttribute('type', 'text/javascript');
            newNode.setAttribute('src', reSource);
        }
        oldNode.parentNode.replaceChild(newNode, oldNode);
    }
}

document.addEventListener('beforeload', onBeforeLoad, true);