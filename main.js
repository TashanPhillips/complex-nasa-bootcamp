//Use NASA's API to return all of their facility locations (~400).
//Display the name of the facility, its location, and the weather at the facility currently
fetch("https://data.nasa.gov/resource/gvk9-iz74.json")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let location = `${data[i].location.latitude},${data[i].location.longitude}`;
      let name = data[i].facility;
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=0766d307fc0d411ea04172552221610&q=${location}`
      )
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          let div = document.createElement("div");
          let fName = document.createElement("p");
          let fLocation = document.createElement("p");
          let fTemp = document.createElement("p");

          fName.innerText = name;
          fLocation.innerText = data.location.region;
          fTemp.innerText = `temperature: ${data.current.temp_f}`;

          div.appendChild(fName)
          div.appendChild(fLocation)
          div.appendChild(fTemp)

          document.querySelector('.facilities').appendChild(div)
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

//define function getTemp and declare variable url = https://data.nasa.gov/resource/gvk9-iz74.json
//fetch(https://data.nasa.gov/resource/gvk9-iz74.json)
//.then code syntax
//.then(res => res.json()) // parse response as JSON
//.then(data => {
//test by adding to console
//define variable called facility and create document.queryselector to target h2
//create for loop
