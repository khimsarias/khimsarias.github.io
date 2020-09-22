const editor = document.getElementsByClassName('input-area')[0];
const output = document.getElementsByClassName('output')[0];
var converter = new showdown.Converter({tables: 'true'},{tablesHeaderId : `true`},{ghCodeBlocks: `true`},{simpleLineBreaks: 'true'});


editor.addEventListener("keyup" , evt=>
{
    const {value} = evt.target;
    const html = converter.makeHtml(value);
    output.innerHTML = html;
})