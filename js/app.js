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

$("#workOne")
  .mouseenter(function () {
    $("#workOneText").show();
  })
  .mouseleave(function () {
    $("#workOneText").hide();
  });

$("#workTwo")
  .mouseenter(function () {
    $("#workTwoText").show();
  })
  .mouseleave(function () {
    $("#workTwoText").hide();
  });

$("#workThree")
  .mouseenter(function () {
    $("#workThreeText").show();
  })
  .mouseleave(function () {
    $("#workFourText").hide();
  });

$("#workFour")
  .mouseenter(function () {
    $("#workFourText").show();
  })
  .mouseleave(function () {
    $("#workFourText").hide();
  });

$("#workFive")
  .mouseenter(function () {
    $("#workFiveText").show();
  })
  .mouseleave(function () {
    $("#workFiveText").hide();
  });

$("#workSix")
  .mouseenter(function () {
    $("#workSixText").show();
  })
  .mouseleave(function () {
    $("#workSixText").hide();
  });

$("#workSeven")
  .mouseenter(function () {
    $("#workSevenText").show();
  })
  .mouseleave(function () {
    $("#workSevenText").hide();
  });

$("#workEight")
  .mouseenter(function () {
    $("#workEightText").show();
  })
  .mouseleave(function () {
    $("#workEightText").hide();
  });

// $("button").click(function (event) {

// });

$("button").on("submit", function (event) {
  var user = document.getElementById("name").value;
  alert(
    "Dear " +
      user +
      ", we have received your message. Thank you for reaching out to us."
  );
  $("form").each(function () {
    this.reset();
  });
  event.preventDefault();
});
