const paymentStatusSpans = document.querySelectorAll(
  ".fees-info .payment-status"
);

paymentStatusSpans.forEach((span) => {
  const textContent = span.textContent.trim().toLowerCase();
  if (textContent === "paid") {
    span.classList.add("paid");
  } else if (textContent === "unpaid") {
    span.classList.add("unpaid");
  }
});
