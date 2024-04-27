import React from "react";
import styles from './style.module.css'
import News from "../../components/news";
import Sidebar from "../../Layout";

function NewsPage() {
   return(
      <Sidebar>
         <News /> 
      </Sidebar>
   )
}

export default NewsPage