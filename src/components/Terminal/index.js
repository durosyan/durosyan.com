import React, { useEffect, useRef, useState } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

import Terminal from "./Terminal.js" // this should be part of this component
import "./Terminal.css" // this needs to be updated into jss to fit with rest of content

const useStyles = makeStyles(theme => ({
  terminal: {
    overflow: "hidden",
    height: "250px",
    minWidth: "300px"
  }
}))

const Termynal = () => {
  const [init, setInit] = useState(false)
  const terminalRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    try {
      new Terminal(terminalRef.current, {
        lineDelay: 200,
        lineData: [
          { type: 'input', value: 'git config user.email' },
          { value: 'durosyan@outlook.com' },
          { type: 'input', value: 'git config user.name' },
          { value: 'Ryan' },
          { type: 'input', value: '' },
        ]
      });
      setInit(true);
    } catch (error) { console.log(error); }
  }, [setInit])

  return (
    <div className={classes.terminal} ref={terminalRef} ></div>
    // put some stuff here to replace if init fails
  )
}

export default Termynal
