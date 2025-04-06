function generateQRCode() {
    const input = document.getElementById("input-text").value.trim();
    const qrContainer = document.getElementById("qrcode");
    const error = document.getElementById("error-message");
  
    qrContainer.innerHTML = "";
    error.textContent = "";
  
    if (!input) {
      error.textContent = "Please enter something.";
      return;
    }
  
    let formattedInput = input;
  
    // Phone number
    if (/^\+?[0-9]{7,15}$/.test(input)) {
      formattedInput = `tel:${input}`;
    }
    // Email
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
      formattedInput = `mailto:${input}`;
    }
  
    new QRCode(qrContainer, {
      text: formattedInput,
      width: 200,
      height: 200
    });
  }
  