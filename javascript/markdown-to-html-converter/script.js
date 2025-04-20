const input = document.getElementById('markdown-input');
const output = document.getElementById('html-output');
const preview = document.getElementById('preview');

const pRegexReplacer = 
{
  regex: /^(.*)$/,
  replacer: '<p>$1</p>'
};

const regexes = [
  {
    regex: /^(?:\s+|)#\s(.*)/g,
    replacer: `<h1>$1</h1>`
  }, 
  {
    regex: /^(?:\s+|)#{2}\s(.*)/g,
    replacer: `<h2>$1</h2>`
  },
  {
    regex: /^(?:\s+|)#{3}\s(.*)/g,
    replacer: `<h3>$1</h3>` 
  },
  {
    regex: /(.*)(?:\*{2}(.+)\*{2}|_{2}(.+)_{2})(.*)/g,
    replacer: `$1<strong>$2$3</strong>$4`
  },
  {
    regex: /(.*)(?:\*(.+)\*|_(.+)_)(.*)/g,
    replacer: `$1<em>$2$3</em>$4`
  },
  {
    regex: /(.*)!\[([-\w]+)\]\(([-\w]+)\)(.*)/g,
    replacer: `$1<img alt="$2" src="$3">$4`
  },
  {
    regex: /(.*)\[([\s\w]*)\]\(([\w\s]*)\)(.*)/g,
    replacer: `$1<a href="$3">$2</a>$4`
  },
  {
    regex:  /^(?:\s+|)>\s(.+)/g,
    replacer: `<blockquote>$1</blockquote>`
  }
]

function convertMarkdown() {
  let lines = input.value.split('\n');
  let htmlOut = lines.map( (line)=> {
    for(const {regex, replacer} of regexes) {
      if(regex.test(line)) {
        line = line.replace(regex,replacer);
      }
    }
    return line;
    });
  htmlOut = htmlOut.join('');
  displayToRawHTML(htmlOut);
  displayToHTMLPreview(htmlOut);
  console.log(lines);
  return htmlOut;
}

const displayToRawHTML = (content)=> output.innerText = content;
const displayToHTMLPreview = (content) => preview.innerHTML = content;
input.addEventListener('input', ()=> {
  console.log(convertMarkdown());
});

