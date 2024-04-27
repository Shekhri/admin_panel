import React from "react";
import styles from './style.module.css'
import Contact from "../../components/contact";
import Sidebar from "../../Layout";

function ContactPage() {
   return(
      <Sidebar>
         <Contact /> 
      </Sidebar>
   )
}

export default ContactPage