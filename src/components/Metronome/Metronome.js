import { useEffect, useState } from 'react';
import * as Tone from 'tone';

import Card from '../Card';
import Button from '../styles/styled-components/Button';

function Metronome() {
	const [isPalying, setIsPlaying] = useState(false);
	const [bpm, setBpm] = useState(60);
	const [meterBeatsCount, setMeterBeatsCount] = useState(4);
	const [meterBeatValue, setMeterBeatValue] = useState(4);

	const synth = new Tone.Synth().toDestination();
	synth.volume.value = -10;
	Tone.Transport.bpm.value = bpm;
	const loop1 = new Tone.Loop((time) => {
		synth.triggerAttackRelease('C4', '16n', time);
	}, '4n').start(0, '4n');
  const loop2 = new Tone.Loop((time) => {
		synth.triggerAttackRelease('D4', '16n', time);
	}, '4n').start(0, '8n');

	function handleIsPlaying() {
		setIsPlaying(!isPalying);
	}

	function handleSetBpm(e) {
		const newValue = Number(e.target.value);
		Tone.Transport.bpm.value = newValue;
		setBpm(newValue);
	}

	function handleSetMeterBeatsCount(e) {
		setMeterBeatsCount(e.target.value);
	}
	function handleSetMeterBeatsValue(e) {
		setMeterBeatValue(e.target.value);
	}

	function playMetronome() {
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
