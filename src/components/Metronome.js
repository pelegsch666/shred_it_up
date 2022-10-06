import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DivForMetronome, DivNoForm } from './styles/StyledComponents'
import Timer from '../dataObjects/timer'



const DivForSettings = styled.div`
display: flex;

justify-content: space-between;
align-items: center;
`
const SpanDisplay = styled.div`
display: flex;
justify-items: center;
text-align: center;
`
const DivForInfo = styled.div`
display: flex;
justify-items: center;
text-align: center;
`

const click1 = new Audio('./audio/click1.mp3')
const click2 = new Audio('./audio/click2.mp3')
let isRuning = false
function handleSubmit() {

    click1.play()

    if (!isRuning) {

        isRuning = true;

    } else {
        //metronome.stop();
        isRuning = false;

    }
}

    



function Metronome() {
    const [bpm, setBpm] = useState(50)
    const [count, setCount] = useState(4)
    const [audioUrlFirst, setAudioUrlFirst] = useState('./audio/click1.mp3')
    const [audioUrlSecond, setAudioUrlSecond] = useState('./audio/click2.mp3')

    const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require(audioUrlFirst)
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);



    function setLimitToCount(e) {
        console.log(e.target.childNodes[0].data)
        if (e.target.childNodes[0].data === '+') {
            if (count >= 2 && count <= 11) {
                setCount(count + 1)
            } else {
                return
            }

        }
        if (e.target.childNodes[0].data === '-') {
            if (count >= 3 && count <= 12) {
                setCount(count - 1)
            } else {
                return
            }
        }
    }
    //const metronome = new Timer(playClick, 60000 / bpm, {immediate: true})







    return (
        <DivNoForm>
            Metronome
            <DivForMetronome>
                <DivForSettings>
                    <SpanDisplay>{bpm} Bpm</SpanDisplay>
                </DivForSettings>
                <DivForSettings >
                    <div>-</div>
                    <input type="range" min="20" max="280" step="1" onChange={(e) => setBpm(e.target.valueAsNumber)} />
                    <div>+</div>
                </DivForSettings>
                <div onClick={() => { playSound() }}>Start</div>
                <DivForSettings>
                    <div onClick={(e) => setLimitToCount(e)}>-</div>
                    <div>Count:{count}</div>
                    <div onClick={(e) => setLimitToCount(e)}>+</div>
                </DivForSettings>
            </DivForMetronome>
        </DivNoForm>
    )
}

export default Metronome