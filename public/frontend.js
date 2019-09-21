let roboReport;
const placeCommand = () => {
  const x = document.getElementById("x").value;
  const y = document.getElementById("y").value;
  const direction = document.getElementById("direction").value.toUpperCase();
  const request = {
    position: {
      x,
      y
    },
    direction
  };
  postData("/place", request)
    .then(data => placeRobo(data)) // JSON-string from `response.json()` call
    .catch(error => showError(error));
};

const moveCommand = () => {
  roboReport = getRoboReport();
  if (roboReport) {
    postData("/move", roboReport)
      .then(data => placeRobo(data))
      .catch(error => showError(error));
  } else {
    const err = "Please execute the place command first before executing Move";
    showError(err);
  }
};

const leftCommand = () => {
  roboReport = getRoboReport();
  if (roboReport) {
    postData("/left", roboReport)
      .then(data => placeRobo(data))
      .catch(error => showError(error));
  } else {
    const err = "Please execute the place command first before executing Left";
    showError(err);
  }
};

const rightCommand = () => {
  roboReport = getRoboReport();
  if (roboReport) {
    postData("/right", roboReport)
      .then(data => placeRobo(data))
      .catch(error => console.log(error));
  } else {
    const err = "Please execute the place command first before executing Right";
    showError(err);
  }
};

const showReport = () => {
  roboReport = getRoboReport();
  if (roboReport) {
    document.getElementById("error").innerHTML = "";
    document.getElementById(
      "message"
    ).innerHTML = `x: ${roboReport.position.x} <br/> y: ${roboReport.position.y}<br/> direction: ${roboReport.direction}`;
  } else {
    const err =
      "Please execute the place command first before executing Report";
    showError(err);
  }
};

const postData = (url, data) => {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => {
    if (response.status === 400) {
      response.json().then(error => {
        showError(error);
      });
    } else {
      return response.json(); // parses JSON response into native JavaScript objects
    }
  });
};

//initiates first
const createTable = () => {
  let rows = "";
  for (let y = 5; y >= 0; y--) {
    for (let x = 0; x <= 5; x++) {
      rows += `<div class="grid-item" id="${x}${y}"></div>`;
    }
  }
  document.getElementById("gridContainer").innerHTML = rows;
};

const placeRobo = req => {
  if (req) {
    document.getElementById("error").innerHTML = "";
    roboReport = getRoboReport() ? getRoboReport() : {};
    roboReport.position = req.position;
    roboReport.direction = req.direction;
    window.localStorage.setItem("roboReport", JSON.stringify(roboReport));
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        document.getElementById(`${x}${y}`).innerHTML = "";
      }
    }
    const roboIcon = alignRobo(req.direction);
    document.getElementById(
      `${req.position.x}${req.position.y}`
    ).innerHTML = roboIcon;
  }
};

const alignRobo = direction => {
  let rotation = 0;
  switch (direction) {
    case "NORTH":
      rotation = 0;
      break;
    case "EAST":
      rotation = 90;
      break;
    case "SOUTH":
      rotation = 180;
      break;
    case "WEST":
      rotation = 270;
      break;
  }
  return `<h3 class="logo"><i class="fas fa-robot fa-1x fa-rotate-${rotation}"></i></h3>`;
};

const showError = error => {
  console.log(error);
  // const parsedErrors = JSON.parse(error);
  document.getElementById("error").innerHTML = "Error:";
  if (Array.isArray(error)) {
    for (let err of error) {
      document.getElementById("error").innerHTML += err + "<br/>";
    }
  } else {
    document.getElementById("error").innerHTML += error;
  }
};

const getRoboReport = () => {
  const localStorageVal = window.localStorage.getItem("roboReport");
  if (localStorageVal) {
    return JSON.parse(localStorageVal);
  }
};
