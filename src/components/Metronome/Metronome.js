import { useEffect } from "react";
import { useState } from "react";
import * as Tone from "tone";

import Card from "../Card";
import Button from "../styles/styled-components/Button";

function Metronome() {
  const [isPalying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(60);
  const [meterBeatsCount, setMeterBeatsCount] = useState(4);
  const [meterBeatValue, setMeterBeatValue] = useState(4);
  const [currIntervalId, setCurrIntervalId] = useState(null);
  
  const synth = new Tone.Synth().toDestination();

  function bpmToMiliseconds(bpm) {
    return 60000 / bpm;
  }

  function clearIntervalById(id) {
    clearInterval(id);
  }

  function playSound() {
    synth.triggerAttackRelease("C4", "4n");
  }

  function handleIsPlaying() {
    setIsPlaying(!isPalying);
  }

  function handleSetBpm(e) {
    setBpm(e.target.value);
  }

  function handleSetMeterBeatsCount(e) {
    setMeterBeatsCount(e.target.value);
  }
  function handleSetMeterBeatsValue(e) {
    setMeterBeatValue(e.target.value);
  }
  function playMetronome() {
    const id =  setInterval(() => {playSound()}, bpmToMiliseconds(bpm));
    setCurrIntervalId(id)
    
  }
  function stopMetronome(){
    clearIntervalById(currIntervalId);
  }


  useEffect(() => {
    if (isPalying) {
      playMetronome();
    }else{
        stopMetronome();
    }
  }, [isPalying]);

  useEffect(() => {
    if (isPalying) {
      stopMetronome();
      playMetronome();
    }
  }, [bpm]);

  return (
    <Card>
      <h1>Metronome</h1>
      <h3>BPM:{bpm}</h3>
      <input
        type="range"
        min={0}
        max={300}
        onChange={(e) => handleSetBpm(e)}
      ></input>
      <h3>
        Meter:{meterBeatsCount}/{meterBeatValue}
      </h3>
      <div>
        {/* <input type="number" min={1} max={32}></input> */}

        <select size={1} onChange={(e) => handleSetMeterBeatsCount(e)}>
          <option value={4}>4</option>
        </select>
        <select onChange={(e) => handleSetMeterBeatsValue(e)}>
          <option value={4}>4</option>
        </select>
      </div>
      <Button onClick={handleIsPlaying}>{isPalying ? "Stop" : "Start"}</Button>
    </Card>
  );
}

export default Metronome;
