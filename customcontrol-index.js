const displayTextAreaValue = (value) => 
    document.getElementById('textarea-display-value').innerText = `Text Area Value -> ${value ?? ''}`;

(()=>{
    const textAreaComponent = document.querySelector('rtg-wc-textarea[id="summary-id"]');
    if(textAreaComponent) {
        textAreaComponent.addEventListener('input', function (e) {
            //console.log(e.target.value);
            displayTextAreaValue(e.target.value);
        });
        displayTextAreaValue(textAreaComponent.value);
    }
})();


