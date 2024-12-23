const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.jcmainclr.lol/api/v1/christmas/countdown");
xhr.onload = function() {
  if (xhr.status === 200) {
    const shit = JSON.parse(xhr.responseText).days;
     document.getElementById('hei').innerHTML = `${shit} days before christmas 🎄 (cool) `
  }
}
xhr.send();

