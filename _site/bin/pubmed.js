const fs = require('fs')
const YAML = require('yaml')
const { JSDOM } = require('jsdom')

const input = fs.readFileSync('_data/pubmed.yml', 'utf8')
console.log(input)
const data = YAML.parse(input)
console.log(data)

const url = data[0]
const options = {}

for (const i in data) {
  JSDOM.fromURL(data[i], options).then(dom => {
    const title  = dom.window.document.querySelector('div.rprt_all h1')
    const auths  = dom.window.document.querySelector('div.rprt_all .auths')
    const abstr  = dom.window.document.querySelector('div.rprt_all .abstr')
  
    let html = '<div class="pubmed">' 
    html += `<h1><a href="${data[i]}">${title.innerHTML}</a></h1>`
    html += auths.innerHTML.replace(/"\/pubmed/g, 'https://www.ncbi.nlm.nih.gov/pubmed')
    html += abstr.innerHTML
    html += '</div>'
    const output = `_includes/research/pubmed/${i}.html`
    fs.writeFile(output, html, (err) => { if (err) throw err; console.log(output); })
  });
}

