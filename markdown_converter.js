const _ = require('lodash');

function convertMarkdownToHTML(markdown) {
    let html = markdown;

    // Convertir encabezados
    html = html.replace(/(#+)(.*)/g, (match, hashes, content) => {
        let level = hashes.length;
        return `<h${level}>${content.trim()}</h${level}>`;
    });

    // Convertir negritas
    html = html.replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>');

    // Convertir itálicas
    html = html.replace(/\*(.*)\*/g, '<em>$1</em>');

    // Convertir enlaces
    html = html.replace(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>');

    // Convertir imágenes
    html = html.replace(/!\[(.*)\]\((.*)\)/g, '<img src="$2" alt="$1">');

    // Convertir bloques de código
    html = html.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');

    // Convertir saltos de línea
    html = html.replace(/\n/g, '<br>');

    return html;
}

let markdown = `# Hola Mundo
**Esto es en negritas**
*Esto es en itálicas*
[Esto es un enlace](https://example.com)
![Esto es una imagen](https://example.com/image.jpg)
\`\`\`
Esto es un bloque de código
\`\`\`
`;

console.log(convertMarkdownToHTML(markdown));

function convertMarkdownToHTML2(markdown) {
    return markdown.split('\n')
        .map(convertHeaders)
        .map(convertBold)
        .map(convertItalic)
        .map(convertLinks)
        .map(convertImages)
        .map(convertCodeBlocks)
        .join('<br>');
}

function convertHeaders(line) {
    return line.replace(/(#+)(.*)/g, (match, hashes, content) => {
        let level = hashes.length;
        return `<h${level}>${content.trim()}</h${level}>`;
    });
}

function convertBold(line) {
    return line.replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>');
}

function convertItalic(line) {
    return line.replace(/\*(.*)\*/g, '<em>$1</em>');
}

function convertLinks(line) {
    return line.replace(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>');
}

function convertImages(line) {
    return line.replace(/!\[(.*)\]\((.*)\)/g, '<img src="$2" alt="$1">');
}

function convertCodeBlocks(line) {
    return line.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');
}

let markdown2 = `# Hello World
**This is bold**
*This is italic*
[This is a link](https://example.com)
![This is an image](https://example.com/image.jpg)
\`\`\`
This is a code block
\`\`\`
`;

console.log(convertMarkdownToHTML2(markdown2));

function convertMarkdownToHTML3(markdown) {
    return _.chain(markdown)
        .split('\n')
        .map(convertHeaders)
        .map(convertBold)
        .map(convertItalic)
        .map(convertLinks)
        .map(convertImages)
        .map(convertCodeBlocks)
        .join('<br>')
        .value();
}

function convertQuotes(line) {
    return line.replace(/\"(.*?)\"/g, '&quot;$1&quot;');
}
let markdown3 = `# Hello World
**This is "bold"**
*This is "italic"**
[This is a "link"](https://example.com)
![This is an "image"](https://example.com/image.jpg)
\`\`\`
This is a "code block"
\`\`\`
"This is a quote"
`;

console.log(convertMarkdownToHTML3(markdown3));