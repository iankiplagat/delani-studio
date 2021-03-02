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
    $("#workThreeText").hide();
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
    let alertMessage = `Hey ${name} , Thanks for reaching out, we'll get back to you shortly...good luck!`;
    Swal.fire({
      icon: "success",
      title: "Cheers...",
      text: alertMessage,
    });
  }
});
