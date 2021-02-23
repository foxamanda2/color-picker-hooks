import React, { useState } from 'react'

function ColorPickerStyle() {
  const randomizerHue = Math.floor(Math.random() * 360)
  const randomizerSL = Math.floor(Math.random() * 100)

  const [hue, setHue] = useState(randomizerHue)
  const [sat, setSat] = useState(randomizerSL)
  const [light, setLight] = useState(randomizerSL)

  return (
    <div>
      <h1>Color Picker</h1>

      <div
        className="ColorBox"
        style={{
          backgroundColor: `hsl(${hue},${sat}%,${light}%)`,
        }}
      ></div>
      <div>
        <input
          className="hue-slider"
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={function (event) {
            setHue(event.target.value)
          }}
        />
        <div className="hue">Hue:{hue}</div>

        <input
          className="saturation-slider"
          type="range"
          min="0"
          max="100"
          value={sat}
          onChange={function (event) {
            setSat(event.target.value)
          }}
        />
        <div className="saturation">Saturation:{sat}</div>

        <input
          className="light-slider"
          type="range"
          min="0"
          max="100"
          value={light}
          onChange={function (event) {
            setLight(event.target.value)
          }}
        />
        <div className="light">Light:{light}</div>
      </div>

      <button
        onClick={function () {
          setHue(hue)
        }}
      >
        Randomize
      </button>
    </div>
  )
}

export function App() {
  return <ColorPickerStyle />
}
