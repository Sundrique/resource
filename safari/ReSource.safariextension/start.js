document.addEventListener('beforeload', onBeforeLoad, true);

var config = [
    {
        source: 'source.js',
        reSource: 'reSource.js'
    },
    {
        source: 'source.css',
        reSource: 'reSource.css'
    }
];

function onBeforeLoad(event) {
    for (var i = 0; i < config.length; i++) {
        var regexp = new RegExp(config[i].source);
        if (regexp.test(event.url)) {
            event.preventDefault();
            if (event.srcElement.tagName == 'SCRIPT') {
                var newElement = document.createElement('script');
                newElement.setAttribute('src', config[i].reSource);
                event.srcElement.parentNode.replaceChild(newElement, event.srcElement);
            } else if (event.srcElement.tagName == 'LINK') {
                var newElement = document.createElement('link');
                newElement.setAttribute('rel', 'stylesheet');
                newElement.setAttribute('href', config[i].reSource);
                event.srcElement.parentNode.replaceChild(newElement, event.srcElement);
            }
        }
    }
}