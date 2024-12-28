
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.jcmainclr.lol/api/v1/notif");
xhr.onload = function() {
  if (xhr.status === 200) {
    const shit = JSON.parse(xhr.responseText);
     document.getElementById('notif').innerHTML = `NOTIF: ${shit[0].content}`
  }
}
xhr.send();

