window.addEventListener ("load", myMain, false);

function myMain (evt) {
  setInterval(function (){
  
    const replaceOnDocument = (pattern, string, {target = document.body} = {}) => {
      [
        target,
        ...target.querySelectorAll("*:not(script):not(noscript):not(style)")
      ].forEach(({childNodes: [...nodes]}) => nodes
        .filter(({nodeType}) => nodeType === document.TEXT_NODE)
        .forEach((textNode) => textNode.textContent = textNode.textContent.replace(pattern, string)));
    };
    
    replaceOnDocument("Tettles", "Dipshit");
    replaceOnDocument("tettles", "dipshit");
              
  }, 200);
}