function random_namecall() {
  const names = [
    "pudding head",
    "stupid",
    "lazy",
    "little fool",
    "baka",
    "ur little baby",
    "hoodwink picker",
  ]

  return names[Math.floor(Math.random()*names.length)]
}

function get_counts_async() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        const resp = JSON.parse(xmlHttp.responseText);
        document.getElementById('today').innerHTML = resp.last_24h;
        document.getElementById('ever').innerHTML = resp.forever;
      }
  }

  xmlHttp.open("GET", "https://us-central1-hitcount-321920.cloudfunctions.net/hitcount-plus-one-1", true); // true for asynchronous 
  xmlHttp.send(null);
}

window.onload = function() {
  document.getElementById('namecall').innerHTML = random_namecall();
  get_counts_async();
};
