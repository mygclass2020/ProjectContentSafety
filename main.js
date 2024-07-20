function textmod() {
  const myHeaders = new Headers();
  myHeaders.append("Ocp-Apim-Subscription-Key", "277be4a5835e448da0cbc961a541a79f");
  myHeaders.append("Content-Type", "application/json");

  var text = document.getElementById("leftInput1").value;

  const raw = JSON.stringify({
    "text": text,
    "categories": [
      "Hate",
      "Sexual",
      "SelfHarm",
      "Violence"
    ],
    "outputType": "FourSeverityLevels"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

fetch("https://hdv-contentsafety.cognitiveservices.azure.com/contentsafety/text:analyze?api-version=2023-10-01", requestOptions)
  .then((response) => response.text())
  .then((result) => document.getElementById("resultDisplay1").innerHTML = result)
  .catch((error) => document.getElementById("resultDisplay1").innerHTML = error);
}

  function loadImage(event) {
    var image = document.getElementById('imageDisplay');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
  
    // Automatically apply blur after loading the image
    image.onload = function() {
        image.classList.add('blurred');
    }
  }