const btn=document.querySelector(".btn");
const chat=document.querySelector(".chat");

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.onstart=()=>{
    console.log("Activated!!!")
}

function userText(txt){
    const text=document.createElement("div");
    text.innerHTML=`<button class="userText">${txt}</button><br><br><br>`;
    chat.appendChild(text);

}

function aiText(txt){
    const text=document.createElement("div");
    text.innerHTML=`<button class="aiText">${txt}</button><br><br><br>`;
    chat.appendChild(text);

}

recognition.onresult=(event)=>{
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
    userText(transcript)
    readOutLoud(transcript);

}

btn.onclick=()=>{
    recognition.start();
}

const readOutLoud=(message)=>{
    var outPut="sorry i could not understand what you said";
    function dialog(){
        if(message.includes("hi")){
            outPut="hi!";
        }
        if(message.includes("morning")){
            outPut="morning , how was your night!";
        }
        if(message.includes("good morning")){
            outPut="good morning";
        }
        if(message.includes("open You Tube")){
            window.open("https://youtube.com");
        }
        if(message.includes("great")){
            outPut="ok that is awsome";
        }
        if(message.includes("tell me a joke")){
            outPut="what do you call a person immune to acid   ,  amino acid.";
        }
        if(message.includes("open YouTube")){
            outPut="ok opening YouTube";
            window.open("https://www.youtube.com/");
        }
        if(message.includes("when will the world end")){
            outPut="in the year 2060";
        }
        if(message.includes("don't say that")){
            outPut="ok excuse me";
        }
        if(message.includes("I will kill you")){
            outPut="you can't because am not even a real human .";
        }
        if(message.includes("what are you")){
            outPut="am just a virtual voice in your device";
        }
        if(message.includes("do you have feelings")){
            outPut="No, am just a virtual voice in your device , there for i have no human feelings.";
        }
        if(message.includes("how old are you")){
            outPut="I don't age but i can assume am as old as this app.";
        }
        if(message.includes("open Google")){
            outPut="ok opening Google";
            window.open("https://www.google.com/");
        }

        if(message.includes("open mr. Bean")){
            outPut="ok opening mr.bean";
            window.open("https://www.youtube.com/watch?v=2cfStm-PpAY");
        }
    }
    dialog();
    const speech=new SpeechSynthesisUtterance();
    speech.text=outPut;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1

    window.speechSynthesis.speak(speech);
    setTimeout(()=>{
        aiText(speech.text)
    },1000)
}