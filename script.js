const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});
sizes.addEventListener("change", (e) => {
  size = e.target.value;

  isEmptyInput();
});
document.addEventListener("click", (e) => {
  let img = document.querySelector(".qr-body img");
  if (img != null) {
    let imgAtr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAtr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});
function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
function isEmptyInput() {
  // if(qrText.value.length > 0){
  //     generateQRCode();
  // }
  // else{
  //     alert("Enter the text or URL to generate your QR code");
  // }
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate your QR code");
}
