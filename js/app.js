let showToggle = ["#show-design", "#show-development", "#show-product"];
let hideToggle = ["#hide-design", "#hide-development", "#hide-product"];

for (let i = 0; i < hideToggle.length; i++) {
  $(hideToggle[i]).click(function () {
    $(hideToggle[i]).hide();
    $(showToggle[i]).show();
  });
}
for (let i = 0; i < showToggle.length; i++) {
  $(showToggle[i]).click(function () {
    $(hideToggle[i]).show();
    $(showToggle[i]).hide();
  });
}
