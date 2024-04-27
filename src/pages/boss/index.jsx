import React from "react";
import styles from './style.module.css'
import Sidebar from "../../Layout";
import Boss from "../../components/boss";

function BossPage() {
   return(
      <Sidebar>
         <Boss/> 
      </Sidebar>
   )
}

export default BossPage