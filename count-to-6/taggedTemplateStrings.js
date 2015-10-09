console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html (array, ...vals) {
  return vals.map(htmlEscape)
    .reduce((mem, val, index) => {
      mem.push(val)
      mem.push(array[index + 1])
      return mem
    }, [array[0]]).join('');
}

function htmlEscape (str) {
  return str.replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/'/g, '&apos;')
    .replace(/>/g, '&gt;')
}
