import React, { useState } from "react";

import { Select, SelectOption } from "./Select";

import styles from "./main.module.css";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const App = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <React.Fragment>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
      <div className={styles.info}>
        <section>
          <p>
            This is demo of an app that uses React and TypeScript for multiple
            select and single select of predefined items. There are also
            keyboard functions.
          </p>
          <p>Things used:</p>
          <ul>
            <li>TypeScript</li>
            <li>CSS Modules</li>
            <li>useState, useEffect, useRef</li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
