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

// Form Validation
$("form#form").on("submit", function (event) {
  event.preventDefault();
  let name = $("input#name").val();
  let email = $("input#email").val();
  let message = $("textarea#message").val();

  if ($("input#name").val() && $("input#email").val()) {
    alert(
      "Hey " +
        name +
        ", Thanks for reaching out, we'll get back to you shortly...good luck!"
    );
  } else {
    alert("Please provide your correct name and email!");
  }
});
