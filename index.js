

/* Tegne app */

const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const clearButton = document.getElementById('drawing-button-clear');

const ctx = canvas.getContext('2d'); /* henter en 2D rendering context for canvasen */

canvas.width = 600;
canvas.height = 600;   /* Setter bredden og høyden på canvasen, definerer altså tegneområdet */

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;  /* deklarerer og initialiserer variabler for tegning */



toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}); /* Tømmer canvasen når man trykker på clear knappen */




const draw = (e) => {
    if (!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
}; /* Tegner linjer på canvas når man beveger musen mens museknapper er trykket ned */

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
}); /* Når man trykker ned museknappen over canvasen, 
 vil denne koden sette isPainting til true for å indikere at tegning skal starte,
 og lagre startkoordinatene for tegningen i startX og startY */

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
}); /* Når man slipper opp museknappen etter å ha tegnet på canvasen,
 vil denne koden sette isPainting til false for å indikere at tegningen er avsluttet */

canvas.addEventListener('mousemove', draw);



const drawingIcon = document.getElementById('drawing-icon');
const drawingApp = document.querySelector(".container");
const drawingX = document.getElementById('drawing-button-x');

drawingIcon.addEventListener("click", () => {
    drawingApp.style.display = "flex";
    calculator.style.left = "85%";
    weatherApp.style.left = "18%";
}); /* Når man trykker på tegne ikonet, vil koden sette tegne appen til å vises */





drawingX.addEventListener("click", () => {
    drawingApp.style.display = "none";
}); /* Når man trykker på tegne x ikonet, vil koden sette tegne appen til å skjules */




/*-----------------------------------------------------------------------------------------------*/



/* Vær app */



function getWeather() {
    const apiKey = 'b4771178c3abd01d07b4e622f79251b1';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        })
}; /* Henter værdata fra openweathermap api */

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');


    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
            <p>${temperature}°C</p>
        `;

        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    };
}; /* Viser værdata på siden */



function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}; /* viser weather-icon på siden */


const weatherIcon_ = document.getElementById('weather-icon-');
const weatherApp = document.getElementById("weather");
const weatherX = document.getElementById("weather-button-x");

weatherIcon_.addEventListener("click", () => {
    if (drawingApp.style.display === "flex") {
        weatherApp.style.display = "grid";
        weatherApp.style.left = "18%";
    }

    else if (calculator.style.display === "block" && calculator.style.left === "50%") {
        weatherApp.style.display = "grid";
        weatherApp.style.left = "18%";
    }

    else {
        weatherApp.style.display = "grid";
        weatherApp.style.left = "50%";
    }
}); /* Når man trykker på vær ikonet, vil koden sette vær appen til å vises */




weatherX.addEventListener("click", () => {
    weatherApp.style.display = "none";
}); /* Når man trykker på vær x ikonet, vil koden sette vær appen til å skjules */


/*-----------------------------------------------------------------------------------------------*/




/* Klokke */



const timeElement = document.getElementById("time");

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeElement.innerText = clockStr;
}; /* Viser tiden på siden */

updateTime();
setInterval(updateTime, 1000);


/*-----------------------------------------------------------------------------------------------*/



/* Start meny */

const startMenyKnapp = document.getElementById("button-start");
const startMeny = document.getElementById("start-menu-none");

function myFunctionBar() {
    startMeny.classList.toggle("buttonShow");
};

const programs = document.getElementById('start-menu-programs');
const folder = document.getElementById('start-menu-folder');
const cd = document.getElementById('start-menu-cd');
const find = document.getElementById('start-menu-find');
const shutDown = document.getElementById('start-menu-shutDown');
const programsHover = document.getElementById('programs-hover-none');
const programsAccessories = document.getElementById('programs-hover-accessories');
const programsExplorer = document.getElementById('programs-hover-explorer');
const programsStartUp = document.getElementById('programs-hover-startUp');
const programsExplorerWindow = document.getElementById('programs-hover-explorer-window-none');
const programsNone = document.getElementById('programs-hover-none');
const ExplorerWindowButtons = document.getElementById('programs-hover-explorer-window-buttons');



programs.addEventListener('mouseenter', () => {
    programs.style.backgroundColor = "#577783"
    programs.style.color = "white";
});

programs.addEventListener('mouseleave', () => {
    programs.style.backgroundColor = "#cac6cb";
    programs.style.color = "black";
});

folder.addEventListener('mouseenter', () => {
    folder.style.backgroundColor = "#577783";
    folder.style.color = "white";
});

folder.addEventListener('mouseleave', () => {
    folder.style.backgroundColor = "#cac6cb";
    folder.style.color = "black";
});

cd.addEventListener('mouseenter', () => {
    cd.style.backgroundColor = "#577783";
    cd.style.color = "white";
});

cd.addEventListener('mouseleave', () => {
    cd.style.backgroundColor = "#cac6cb";
    cd.style.color = "black";
});

find.addEventListener('mouseenter', () => {
    find.style.backgroundColor = "#577783";
    find.style.color = "white";
});

find.addEventListener('mouseleave', () => {
    find.style.backgroundColor = "#cac6cb";
    find.style.color = "black";
});

shutDown.addEventListener('mouseenter', () => {
    shutDown.style.backgroundColor = "#577783";
});

shutDown.addEventListener('mouseleave', () => {
    shutDown.style.backgroundColor = "#cac6cb";
}); /* Farge detajler på menyen */



/*-----------------------------------------------------------------------------------------------*/




/* Kalkulator app */


const display = document.getElementById("display-calculator");

function appendToDisplay(input) {
    display.value += input;
    /* Tar inputt parameteren og appender det inn til display verdien,
    for å legge til tallet på displayet */
};

function clearDisplay() {
    display.value = "";
    /* Fjerner display veriden,og setter den tom */
};

function calculate() {
    display.value = eval(display.value);
    /* Kalkulerer display veriden, og opptaterer displayet med resultatet */
};




const calculatorIcon = document.getElementById('calculator-icon');
const calculator = document.querySelector(".calculator");



calculatorIcon.addEventListener("click", () => {
    if (drawingApp.style.display === "flex") {
        calculator.style.display = "block";
        calculator.style.left = "85%";
    }

    else if (weatherApp.style.display === "grid" && weatherApp.style.left === "50%") {
        calculator.style.display = "block";
        calculator.style.left = "85%";
    }

    else {
        calculator.style.display = "block";
        calculator.style.left = "50%";
    }
}); /* Når man trykker på kalkulator ikonet, vil kodenn sette kalkulator appen til å vises */






function calculatorButtonX() {
    calculator.style.display = "none";
}; /* Når man trykker på vær x ikonet, vil denne koden sette vær appen til å skjules */



/* ------------------------------------------------------------------------------------------*/



/* Logg in */


const login = document.getElementById('login');
const progress = document.getElementById("progress");
const everything = document.getElementById("everything");


function login_ok_button() {
    login.style.display = "none";
    progress.style.display = "grid";

    setTimeout(() => {
        progress.style.display = "none";
        everything.style.display = "block";

    }, 2500);
}; /* Når man trykker på ok knappen, vil koden sette innloggingen til å skjules samt alt annet, og progress til å vises */

/* ------------------------------------------------------------------------------------------*/


/* Shut down */


const shutDown2 = document.getElementById("shut-down");
const shutDownYes = document.getElementById("shut-down-button-yes");
const shutDownNo = document.getElementById("shut-down-button-no");
const body = document.querySelector("body");
const body_screen = document.getElementById("body-screen");
const total = document.getElementById("total");
const blackText = document.getElementById("black-text");


shutDownNo.addEventListener("click", () => {
    shutDown2.style.display = "none";
});


shutDown.addEventListener("click", () => {
    shutDown2.style.display = "grid";
});


shutDownYes.addEventListener("click", () => {
    progress.style.display = "grid";
    shutDown2.style.display = "none";
    calculator.style.display = "none";
    weatherApp.style.display = "none";
    drawingApp.style.display = "none";


    setTimeout(() => {
        progress.style.display = "none";
        everything.style.display = "none";
        body_screen.style.backgroundColor = "black"
    }, 2500);

    setTimeout(() => {
        blackText.style.display = "block";
    }, 5000);
});


document.addEventListener('click', handleDocumentClick);

function handleDocumentClick() {
    if (blackText.style.display === "block") {
        blackText.style.display = "none";
        body.style.backgroundColor = "#008080";
        login.style.display = "grid";
    }
}; /* Når man trykker på skjermen når den hvite teksen synes så går alt til innloggins siden */


/* ------------------------------------------------------------------------------------------*/




