
$(".js-open-envelope").on("click", function (event) {
  event.preventDefault();
  
  const $self = $(this);
  const $envelope = $self.find(".envelope");
  const $card = $self.find(".envelope__card");

  if ($envelope.hasClass("open")) {
    // Close the envelope
    $envelope.removeClass("open").addClass("tossing");
    $card.removeClass("open");
  } else {
    // Open the envelope
    $envelope.removeClass("tossing").addClass("open");
    $card.addClass("open");
  }
});