const concat = require('concat');

(async function build() {
    const files = [
        './dist/sakai-ng/runtime.js',
        './dist/sakai-ng/polyfills.js',
        './dist/sakai-ng/main.js'
    ];
    await concat(files, './dist/sakai-ng/rtg-micro-fe.js');
})();