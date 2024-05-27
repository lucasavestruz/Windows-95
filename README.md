
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body id="body-screen">

    <div id="black-text"> Click anywhere to start Windows 95</div>

    <div id="progress">
        <div id="progress-bar"></div>
        <div id="progress-loading"> Loading... </div>
        <div id="loading-icon">
            <img src="bilder/windows_95_loading_icon.gif" alt="windows 95 loading icon">
        </div>
    </div>


    <div id="login">

        <div id="login-bar"> Welcome to Windows 95
        </div>

        <div id="login-text"> Type a user name and a password to log on to Windows 95
        </div>

        <div id="login-username"> User name:
        </div>

        <div id="login-username-input-div">
            <input id="login-username-input" type="text">
        </div>

        <div id="login-password"> Password:
        </div>

        <div id="login-password-input-div">
            <input id="login-password-input" type="password">
        </div>

        <div id="login-ok-button-div">
            <button onclick="login_ok_button()" id="login-ok-button"> Ok</button>
        </div>

        <div id="login-icon-div">
            <img id="login-icon" src="bilder/windows_95_login_icon.jpg" alt="windows 95 login icon">
        </div>
    </div>



    <div id="everything">



        <img id="calculator-icon" src="bilder/windows_95_calculator_icon.jpg" alt="windows 95 calculator icon">

        <img id="drawing-icon" src="bilder/windows_95_drawing_icon.jpg" alt="windows 95 drawing icon">

        <img id="weather-icon-" src="bilder/windows_95_weather_icon2.png" alt="windows 95 weather icon">



        <div id="bar">
            <button onclick="myFunctionBar()" id="button-start"> 
                <img id="windows_95_start_logo" src="bilder/windows_95_start_logo.jpg" alt="windows 95 start logo"> Start
            </button>
            <div class="time" id="time"> klokke </div>
        </div>

        <div class="start-menu-none" id="start-menu-none">
            <div id="start-menu" class="start-menu">
                <div id="start-menu-side-bar"></div>

                <div id="start-menu-programs">
                    <img id="start-menu-programs-img" src="bilder/windows_95_programs_icon.jpg" alt="start menu programs">
                    <div id="start-menu-programs-text"> Programs </div>
                    <div id="start-menu-programs-arrow"> ▸</div>
                </div>

                <div id="start-menu-folder">
                    <img id="start-menu-folder-img" src="bilder/windows_95_folder_icon.jpg" alt="start menu folder">
                    <div id="start-menu-folder-text"> Documents </div>
                    <div id="start-menu-folder-arrow"> ▸</div>
                </div>

                <div id="start-menu-cd">
                    <img id="start-menu-cd-img" src="bilder/windows_95_cd_icon.jpg" alt="start menu cd">
                    <div id="start-menu-cd-text"> CD </div>
                    <div id="start-menu-cd-arrow"> ▸</div>
                </div>

                <div id="start-menu-find">
                    <img id="start-menu-find-img" src="bilder/windows_95_find_icon.jpg" alt="start menu find">
                    <div id="start-menu-find-text"> Find </div>
                    <div id="start-menu-find-arrow"> ▸</div>
                </div>

                <div id="start-menu-shutDown">
                    <img id="start-menu-shutDown-img" src="bilder/windows_95_shutDown_icon.jpg" alt="start menu shut down">
                    <div id="start-menu-shutDown-text"> Shut Down</div>
                </div>
            </div>
        </div>



        <div id="calculator" class="calculator">
            <div id="calculator-bar">
                <img id="calculator-bar-image" src="bilder/windows_95_calculator-bar.jpg" alt="calculator bar">
                <button onclick="calculatorButtonX()" id="calculator-button-x"> x </button>
            </div>

            <input id="display-calculator" readonly>

            <div id="keys-calculator">
                <button class="calculator-red" onclick="appendToDisplay('+')">+</button>
                <button class="calculator-blue" onclick="appendToDisplay('7')">7</button>
                <button class="calculator-blue" onclick="appendToDisplay('8')">8</button>
                <button class="calculator-blue" onclick="appendToDisplay('9')">9</button>
                <button class="calculator-red" onclick="appendToDisplay('-')">-</button>
                <button class="calculator-blue" onclick="appendToDisplay('4')">4</button>
                <button class="calculator-blue" onclick="appendToDisplay('5')">5</button>
                <button class="calculator-blue" onclick="appendToDisplay('6')">6</button>
                <button class="calculator-red" onclick="appendToDisplay('*')">*</button>
                <button class="calculator-blue" onclick="appendToDisplay('1')">1</button>
                <button class="calculator-blue" onclick="appendToDisplay('2')">2</button>
                <button class="calculator-blue" onclick="appendToDisplay('3')">3</button>
                <button class="calculator-red" onclick="appendToDisplay('/')">/</button>
                <button class="calculator-blue" onclick="appendToDisplay('0')">0</button>
                <button class="calculator-blue" onclick="appendToDisplay('.')">.</button>
                <button class="calculator-blue" onclick="calculate()">=</button>
                <button class="calculator-darkRed" onclick="clearDisplay()">C</button>
            </div>
        </div>


        <div id="shut-down">
            <div id="shut-down-bar"> Shut down Windows 95</div>
            <div id="shut-down-text"> Are you sure you want to shut down the computer?</div>
            <div id="shut-down-buttons-div">
                <button class="shut-down-buttons" id="shut-down-button-yes"> Yes</button>
                <button class="shut-down-buttons" id="shut-down-button-no"> No</button>
            </div>
        </div>



        <div id="weather">
            <div id="weather-bar"> Weather
                <div id="weather-button-x-div">
                    <button id="weather-button-x"> x</button>
                </div>
            </div>
            <div id="weather-text"> Current weather </div>
            <div id="weather-api">
                <div id="weather-icon-div">
                    <img id="weather-icon" src="#" alt="weather icon">
                </div>
                <div id="temp-div"></div>
                <div id="weather-container">
                    <div id="weather-input-button">
                        <input type="text" id="city" placeholder="Enter city">
                        <button onclick="getWeather()">Search</button>
                    </div>
                    <div class="hidden" id="weather-info"></div>
                    <div class="hidden" id="hourly-forecast"></div>
                </div>
            </div>
        </div>


        <div class="wrapper">
            <div class="container">
                <div id="toolbar">
                    <input id="stroke" name='stroke' type="color">
                    <input id="lineWidth" name='lineWidth' type="number" value="5">
                    <button id="drawing-button-clear">Clear</button>
                    <button id="drawing-button-x"> x</button>
                </div>
                <div class="drawing-board">
                    <canvas id="drawing-board"></canvas>
                </div>
            </div>
        </div>
    </div>
   

    <script src="index.js"></script>
</body>

</html>
