import React from "react"
// import Circle from "./Circle"

function App() {
  return (
    <div>
      <Circle circleColor="red" />
      <Circle circleColor="orange" />
      <Circle />
    </div>
  )
}

const Circle = (props) => {
  const styles = {
      backgroundColor: props.circleColor,
      height: 100,
      width: 100,
      borderRadius: props.borderRadius
  }

  return(
      <div style={styles}></div>
  )
}

Circle.defaultProps = {
  circleColor: "green",
  borderRadius: 100
}

export default App;
