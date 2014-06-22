document.addEventListener('beforeload', onBeforeLoad, true);

var config = [
    {
        source: 'source.js',
        reSource: 'reSource.js'
    }
];

function onBeforeLoad(event) {
    if (event.srcElement.tagName == 'SCRIPT') {
        for(var i = 0; i < config.length; i++) {
            var regexp = new RegExp(config[i].source);
            if (regexp.test(event.url)) {
                event.preventDefault();
                var script = document.createElement('script');
                script.setAttribute('src', config[i].reSource);
                event.srcElement.parentNode.replaceChild(script, event.srcElement);
                return;
            }
        }
    }
}