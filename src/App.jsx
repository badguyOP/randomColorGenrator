import { Switch } from "antd";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

const ColorGenerator = () => {

  const [toggle, setToggle] = useState(true)
  const [color, setColor] = useState("#000000");

  const handleSwitchChange = (checked) => {
    setToggle(checked); 
  };

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (toggle === "true") handleCreateRandomHexColor();
    else handleCreateRandomRgbColor();
  }, [toggle]);

    return (
    <div className={styles.colorgenerator} style={{ width: "100vw",
    height: "100vh",background: color}}>
      <div className={styles.wrapper}>
        <div className={styles.switch}>
          <div className={styles.rgb}>RGB</div>
          <Switch  
          style={{ width: 58 }}
          checked={toggle}
          onChange={handleSwitchChange}
          checkedChildren="HEX"
          unCheckedChildren="RGB" 
          />
          <div className={styles.hex}>HEX</div>
        </div>
        <button 
        className={styles.button}>
          <div className={styles.clickMe} 
           onClick={
            toggle === true
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          >Click ME</div>
        </button>
        <div className={styles.to}>To</div>
        <div className={styles.randomGenerateColor}>Generate New Color</div>
        <div className={styles.hexColor}>{toggle ? "Hex" : "RGB"} Color</div>
        <div className={styles.ffffff}>{color}</div>
      </div>
    </div>
  );
};

export default ColorGenerator;
