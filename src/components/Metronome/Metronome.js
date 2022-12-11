import { useEffect, useState } from "react";
import * as Tone from "tone";
import click from "../../audio/click2.mp3";
import Card from "../Card";
import Button from "../styles/styled-components/Button";

function Metronome() {
  const [isPalying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(60);

  const player = new Tone.Player(click).toDestination();
  Tone.Transport.bpm.value = bpm;
  new Tone.Loop((time) => {
    Tone.loaded().then(() => {
      player.start();
    });
  }, "4n").start(0);

  function handleIsPlaying() {
    setIsPlaying(!isPalying);
  }

  function handleSetBpm(e) {
    const newValue = Number(e.target.value);
    Tone.Transport.bpm.value = newValue;
    setBpm(newValue);
  }

  function playMetronome() {
    Tone.start();
    Tone.Transport.start();
  }
  function stopMetronome() {
    Tone.Transport.stop();
  }

  useEffect(() => {
    if (isPalying) {
      playMetronome();
    } else {
      stopMetronome();
    }
  }, [isPalying]);

  useEffect(() => {
    if (isPalying) {
      stopMetronome();
      playMetronome();
    }
  }, [bpm, isPalying]);

  return (
    <Card>
      <h1>Metronome</h1>
      <h3>BPM:{bpm}</h3>
      <input
        type="range"
        value={bpm}
        min={30}
        max={200}
        onChange={(e) => handleSetBpm(e)}
      />
      <Button onClick={handleIsPlaying}>{isPalying ? "Stop" : "Start"}</Button>
    </Card>
  );
}

export default Metronome;
