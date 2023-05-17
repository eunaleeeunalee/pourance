import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Img = styled.div`
 height: 20vw;
 width: 20vw;
 background-image: url(${props => props.image});
 background-size: cover;
 display: inline-block;
 background-position: center;
`

const TextToSpeech = ({ image, text }) => {
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    setUtterance(u);
    // console.log(voices)
    setVoice(voices[44])

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    console.log(text)

    utterance.voice = voice;
    utterance.rate = 0.6;
    synth.speak(utterance);

  };


  return (
        <Img 
            // style={{backgroundImage: "url(./img/${image})"}}
            onClick={handlePlay}
            image={image}/>
        // src={ require(`./img/${image}`)}
  );
};

export default TextToSpeech;