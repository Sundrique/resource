document.addEventListener('beforeload', onBeforeLoad, true);

var config = [
    {
        source: 'source.js',
        reSource: 'reSource.js'
    }
];

function onBeforeLoad(event) {
    if (event.srcElement.tagName == 'SCRIPT') {
        console.error(event.url);
        for(var i = 0; i < config.length; i++) {
            if (event.url == config[i].source) {
                event.preventDefault();
                var script = document.createElement('script');
                script.setAttribute('src', config[i].reSource);
                event.srcElement.parentNode.replaceChild(script, event.srcElement);
                return;
            }
        }
    }
}