// templatelitertals 

// Template literals are string literals allowing embedded expressions.
// Template literals are tagged templates.
// Template literals are also called tagged templates.

let name = 'kaviya';

function makeUppercase(word){
    return word.toUpperCase();
}

let template = `<h1>${makeUppercase('hello')}, ${name}</h1>
                <p>This is example of the template literals</p>`;

document.getElementById('demo').innerHTML = template;

console.log(template);