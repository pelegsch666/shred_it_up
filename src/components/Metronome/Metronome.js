import Card from "../Card";

import Button from "../styles/styled-components/Button";

function Metronome() {
  return (
    <Card>
      <h1>Metronome</h1>
      <h3>Tempo:</h3>
      <input type="range" min={0} max={300}></input>
      <h3>Meter:</h3>
      <div>
        {/* <input type="number" min={1} max={32}></input> */}
        
        <select size={4}>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
        </select>
      </div>
      <Button>Start</Button>
    </Card>
  );
}

export default Metronome;
