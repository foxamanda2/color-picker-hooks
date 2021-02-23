import React, { useState } from 'react'

function ColorPickerStyle() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))

  const [sat, setSat] = useState(Math.floor(Math.random() * 100))

  const [light, setLight] = useState(Math.floor(Math.random() * 100))

  const [alpha, setAlpha] = useState(Math.round(Math.random() * 1 * 100) / 100)

  document.body.style.backgroundColor = `hsla(${hue},${sat}%,${light}%,${alpha})`
  return (
    <div>
      <h1>Color Picker</h1>
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

        <input
          className="alpha-slider"
          type="range"
          min="0"
          max="1"
          value={alpha}
          step="0.01"
          onChange={function (event) {
            setAlpha(event.target.value)
          }}
        />
        <div className="alpha">Alpha:{alpha}</div>
        <div className="colorFooter">
          hsla({hue}, {sat}%, {light}%, {alpha})
        </div>
      </div>
      <footer>
        <button
          onClick={function () {
            setHue(Math.floor(Math.random() * 360))
            setSat(Math.floor(Math.random() * 100))
            setLight(Math.floor(Math.random() * 100))
            setAlpha(Math.round(Math.random() * 1 * 100) / 100)
          }}
        >
          Randomize
        </button>
      </footer>
    </div>
  )
}

export function App() {
  return <ColorPickerStyle />
}
