import React from "react";
import * as Tone from "tone";

const Key = () => {
  const focusMethod = (key) => {
    console.log("focus");
    document.getElementById(key).focus();
  };
  const keyMappings = {
    a: "C4",
    s: "D4",
    d: "E4",
    f: "F4",
    g: "G4",
    h: "A4",
    j: "B4",
    k: "C5",
    w: "C#4",
    e: "D#4",
    t: "F#4",
    y: "G#4",
    u: "A#4",
  };
  const playSound = (e, key) => {
    const synth = new Tone.Synth().toDestination();
    if (e.key === key) {
      synth.triggerAttackRelease(keyMappings[e.key], "8n");
    }
  };

  return (
    <div
      onKeyDown={(e) => {
        focusMethod(e.key);
        playSound(e, e.key);
      }}
    >
      <h1>Piano</h1>

      {Object.keys(keyMappings).map((key) => {
        return (
          <button autoFocus={true} id={key}>
            {keyMappings[key]}
          </button>
        );
      })}
    </div>
  );
};
export default Key;
