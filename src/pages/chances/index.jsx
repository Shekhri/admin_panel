import React from "react";
import styles from './style.module.css'
import Chances from "../../components/chances";
import Sidebar from "../../Layout";

function ChancesPage() {
   return(
      <Sidebar>
         <Chances /> 
      </Sidebar>
   )
}

export default ChancesPage