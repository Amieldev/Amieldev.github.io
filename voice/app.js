const btn=document.querySelector(".btn");

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.onstart=()=>{
    console.log("Activated!!!")
}

function userText(txt){
    const text=document.createElement("div");
    text.innerHTML=`<button class="userText">${txt}</button><br><br><br>`;
    document.body.appendChild(text);

}

function aiText(txt){
    const text=document.createElement("div");
    text.innerHTML=`<button class="aiText">${txt}</button><br><br><br>`;
    document.body.appendChild(text);

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
    var outPut="i don't know what you said.";
    function dialog(input,output){
        if(message.includes(input)){
            outPut=output;
        }
    }
    function dothis(){
        if(message.includes("open you tube")){
            outPut="Here you go";
            window.open("https://youtube.com")
        }
    }

    dialog("what do you call a person immune to acid","what?");
    dialog("amino acid","that is not funny")
    dialog("Tom and Jerry","hi amen school of tommorow");
    dothis();
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