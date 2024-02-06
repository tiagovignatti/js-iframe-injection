const iframe = document.getElementById('myiframe');
const iframeWin = iframe.contentWindow || iframe;
const iframeDoc = iframe.contentDocument || iframeWin.document;

const script = iframeDoc.createElement('script');
script.append(`
  window.onload = function() {
    document.getElementById("fire").addEventListener('click', function() {
        const text = document.getElementById('title').innerText;
        alert(text);
    })
  }
`);
iframeDoc.documentElement.appendChild(script);
