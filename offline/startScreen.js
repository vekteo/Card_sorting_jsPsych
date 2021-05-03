function startScreen(){
    let formDiv = document.createElement("div");
    formDiv.innerHTML = `<form id="form" class="formDiv" onsubmit="return true">
    <p id="subject" class="formItem jspsych-display-element"></p><input class="jspsych-btn" type="number" min=1 max=99999 id="subjectNumber" required><br>
    <p id="session" class="formItem jspsych-display-element"></p><input class="jspsych-btn" type="number" min=1 max=3 id="sessionNumber" required><br><br>
    <input class="jspsych-btn" type="button" onclick="inputChange()" value="OK">   
    </form>`
    document.getElementById("body").appendChild(formDiv);
    document.getElementById("subject").innerText = `${language.parameters.subject}`
    document.getElementById("session").innerText = `${language.parameters.session}`
}

function inputChange() {    
    subject = document.getElementById('subjectNumber')
    session = document.getElementById('sessionNumber')
    reallyStart()
}

function reallyStart() {
    document.getElementById("form").remove()
    let startDiv =  document.createElement("div")
    startDiv.setAttribute("id", "startDiv")
    document.getElementById("body").appendChild(startDiv);

    let start = document.createElement("p")
    start.innerHTML = '<p>' + `${language.startWarning.startSubject}` + `${subject.value}` + `${language.startWarning.startSession}` + `${session.value}` + '</strong></p>';
    start.setAttribute("class", "formDiv")
    start.setAttribute("class", "formItem jspsych-display-element")
    start.setAttribute("id", "start")
    document.getElementById("startDiv").appendChild(start);

    let goBackButton = document.createElement('input')
    goBackButton.setAttribute("id", "goBackButton")
    goBackButton.setAttribute("type", "button")
    goBackButton.setAttribute("value", language.startWarning.goBackButton)
    goBackButton.setAttribute("onclick", "goBack()")
    goBackButton.setAttribute("class", "jspsych-btn")
    document.getElementById("startDiv").appendChild(goBackButton);

    let startButton = document.createElement('input')
    startButton.setAttribute("id", "startButton")
    startButton.setAttribute("type", "button")
    startButton.setAttribute("value", language.startWarning.startButton)
    startButton.setAttribute("onclick", "start()")
    startButton.setAttribute("class", "jspsych-btn")
    document.getElementById("startDiv").appendChild(startButton);
}

function goBack() {
    document.getElementById("startDiv").remove()
    startScreen()
}

function start() {
    expStart(subject.value, session.value)
}