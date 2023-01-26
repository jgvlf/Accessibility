import React from "react";
import SoundSpeak from "./assets/img/speaker.svg";
import Artyom from "artyom.js";


export function Speaker({children, speakerValue}){
    
    function initializerSpeaker(){
        const artyom = new Artyom();
        // console.log(speakerValue);
        setTimeout(()=>{
            artyom.initialize({
                lang: speakerValue,
                continuous: false,
                soundex: true,
                debug: true,
            }).then((result) => {
                console.log("Artyom has been succesfully initialized");
            }).catch((err) => {
                console.error("Artyom couldn't be initialized: ", err);
            });
            setTimeout(()=>{
                const selection = window.getSelection().toString().trim();
                speak(artyom, selection);
            }, 250);
        }, 250);
    }
    
    function speak(speaker, value){
        console.log(speaker);
        console.log(value);
        speaker.say(value);
    }
    return(
        <>
            <div id="text">
                {children}
            </div>
            <div>
                <img src={SoundSpeak} alt="Clique para escutar" width={100} height={100}
                onClick={initializerSpeaker}>

                </img>
            </div>
        </>
    );
}