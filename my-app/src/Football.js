import React from 'react'

const Football = () => {
    function shoot(e){
        console.log(e);
        alert("!great Shot")
    }
  return (
    <div>
      <button onClick={()=>shoot("Marvlous shot!!!!!!!!!")}
      style={{
        backgroundColor: "green", 
        margin: "2px",
        padding: "2px",
        border: "2px solid",
        cursor: "pointer",
        fontFamily: "Times New Roman",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: "30px",
        color: "yellow",
        textAlign: "center",
        textTransform: "capitalize",
        lineHeight: "0.8",
        textShadow: "2px 2px 5px red"
    }}>Take the shot</button>
    </div>
  )
}

export default Football
