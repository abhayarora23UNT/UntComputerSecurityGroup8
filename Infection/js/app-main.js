/*
function downloadFile() {
  // url="https://file.io/UYNziVaxKJgv"
  url="/home/sec-lab/Desktop/Group8_Website/sw/test"
  filename="defender"
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', "defender");
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });
};
*/


function downloadFile(){
      // url="https://file.io/UYNziVaxKJgv"
      url="/home/sec-lab/Desktop/Group8_Website/sw/test"
      const aElement = document.createElement('a');
      aElement.setAttribute('href', url);
      aElement.setAttribute('download', 'defender');
      document.body.appendChild(aElement)
      aElement.click();
      anchor.parentNode.removeChild(aElement)


}
