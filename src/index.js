function updateTime() {
  //London City
  let londonElement = document.querySelector("#london");
  //Why couldn't we have added ids to each element to select and target them instead?
  let londonDateElement = londonElement.querySelector(".date"); // the element with class of date inside the element with ID london.
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  //for the time element, we need to seperate the formating for AM/PM and put it in a small element. The entire innerHTML is a string.
  londonTimeElement.innerHTML = `${moment()
    .tz("Europe/London")
    .format("H:mm:ss:SSS")} <small>${moment().format("A")}</small>`;
  //another way to do this is [<small>]A[</smal>]

  //Toronto city
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = `${moment()
    .tz("America/Toronto")
    .format("H:mm:ss:SSS")} <small>${moment().format("A")}</small>`;
}
// updateTime();
setInterval(updateTime, 100);
