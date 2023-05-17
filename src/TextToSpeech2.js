import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
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

    utterance.voice = voice;
    utterance.rate = 0.6;
    synth.speak(utterance);

  };


  return (
    <div>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default TextToSpeech;