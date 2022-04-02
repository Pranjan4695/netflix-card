import React from "react";
import Card from "./Card";
import List from "./List";



 function App(){
   return(
     <>
        <h1 className="heading">LIST OF TOP 7 KOREAN SERIES ON NETFLIX IN 2021</h1>
        {List.map(function n_card(val){
          return (
                <Card
                  key={val.id} 
                  image1={val.image1}
                  title1={val.title1}
                  series1={val.series1}
                  link1={val.link1}
                />
              )
        })}
      </>
    )
}
export default App
