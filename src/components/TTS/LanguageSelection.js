import React, { useState } from "react";
import { Speaker } from "./Speaker";
import { i18n } from "../Translate/i18n";
import { useEffect } from "react";

export function LanguageSelection(){
    const I18N_STORAGE_KEY = 'i18nextLng';
    // const [setup, setSetup] = useState("")

    function onMouseOutHandler(){
        document.addEventListener("mouseout", getValues);
    }

    const getValues = (event) =>{
        localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
        getSpeakSelectionTagValue();
        //refresh the page
        window.location.reload();
    }

    function getSpeakSelectionTagValue(){
        var element = document.getElementById("language");
        var result = element.value;
        localStorage.setItem("speakValue", result);
        console.log(result);
}

    return(
        <>
            <Speaker speakerValue={localStorage.getItem("speakValue")}>
                <h1>{i18n.t('titulos.titulo')}</h1>
      
                <p>{i18n.t('textos.abacaxi')}</p>
                
                <img src="https://s2.glbimg.com/rl2qA0jqm8CYvBh7ZTnAu8NG6ds=/0x0:1999x3000/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2021/N/1/8FdLsPS2G4uiUV4a8MOg/abacaxi.jpg" width="300px" alt="Abacaxi, fruta amarela e verde em fundo amarelo"/>
                
                <br/><button>{i18n.t('botoes.comprarAbacaxi')}</button>
                
                <div>
                    <h2>{i18n.t('titulos.tituloSobre')}</h2>
                    <p>{i18n.t('textos.abacaxiSobre')}</p>
                </div>
            </Speaker>
            <select name="language" id="language" onClick={onMouseOutHandler}>
                <option value="pt-PT">{i18n.t('seletores.idioma1')}</option>
                <option value="en-US">{i18n.t('seletores.idioma2')}</option>
                <option value="es-ES">{i18n.t('seletores.idioma3')}</option>
                {/* <option value="de-DE">Alemão (Alemanha)</option> */}
            </select>
        </>
        )
}