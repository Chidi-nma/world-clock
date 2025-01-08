function updateTime() {
  //London City
  let londonElement = document.querySelector("#london");
  //Why couldn't we have added ids to each element to select and target them instead?
  let londonDateElement = londonElement.querySelector(".date"); // the element with class of date inside the element with ID london.
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  //for the time element, we need to seperate the formating for AM/PM and put it in a small element. The entire innerHTML is a string. or escape using "[]"
  londonTimeElement.innerHTML = `${moment()
    .tz("Europe/London")
    .format("H:mm:ss [<small>]A[</small>]")}`;

  //Toronto city
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = `${moment()
    .tz("America/Toronto")
    .format("H:mm:ss [<small>]A[</small>]")}`;
}
updateTime();
setInterval(updateTime, 1000);

//Part 2 - Using the drop down to update the page with time and city.

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  //   console.log(cityTime.format("dddd"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div> 
        <a href ="/">All cities</a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
