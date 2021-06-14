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

window.onload = function() {
  document.getElementById('namecall').innerHTML = random_namecall();
};
