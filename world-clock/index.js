//Los Angeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let kyleElement = document.querySelector("#kyle");
  if (kyleElement) {
    let kyleDateElement = kyleElement.querySelector(".date");
    let kyleTimeElement = kyleElement.querySelector(".time");
    let kyleTime = moment().tz("America/Ojinaga");

    kyleDateElement.innerHTML = kyleTime.format("MMMM Do YYYY");
    kyleTimeElement.innerHTML = kyleTime.format("h:mm:ss [<small>]A[</small>]");
  }
  //Maracaibo
  let maracaiboElement = document.querySelector("#maracaibo");
  let maracaiboDateElement = maracaiboElement.querySelector(".date");
  let maracaiboTimeElement = maracaiboElement.querySelector(".time");
  let maracaiboTime = moment().tz("America/Caracas");

  maracaiboDateElement.innerHTML = maracaiboTime.format("MMMM Do YYYY");
  maracaiboTimeElement.innerHTML = maracaiboTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
