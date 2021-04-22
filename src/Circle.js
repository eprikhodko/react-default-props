import React from "react"

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

export default Circle