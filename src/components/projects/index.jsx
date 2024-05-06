import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import axios from "axios";

function Products() {
   const [data, setData] = useState([]);
   const [postData, setPostData] = useState([]);
   const [putData, setPutData] = useState([])
   const [elemId, setElemId] = useState()
   const [Name, setName] = useState(false)
   useEffect(()=> {
      axios.get(`https://apiastro1.vtormetallmm.ru/projects`)
      .then((data) => setData(data))
    }, [])
   const HandlePost = (e) => {
      e.preventDefault()
      const body = {
         name : e.target.Name.value,
         position : e.target.Position.value,
         phone_number : e.target.Pnumber.value,
      }
      axios.post(`https://apiastro1.vtormetallmm.ru/projects`, body)
      .then((data) => setPostData(data))
      axios.get(`https://apiastro1.vtormetallmm.ru/projects`)
      .then((data) => setData(data))
      console.log(
         e.target.Name.value,
         e.target.Position.value,
         e.target.Pnumber.value,
      );
      e.target.Name.value = null
      e.target.Position.value = null
      e.target.Pnumber.value = null

      setTimeout(() => {
         window.location.reload()
      }, 2000);
    }
    const HandleDelete = (e) => {
      e.preventDefault();
      axios.delete(`https://apiastro1.vtormetallmm.ru/projects/${e.target.value}`)
      axios.get(`https://apiastro1.vtormetallmm.ru/projects`)
      .then((data) => setData(data))
      setTimeout(() => {
         window.location.reload()
      }, 2000);
  }
   return(
      <><div className={styles.conatiner}>
          <div className={styles.forma}>
         <h1 className={styles.h1t}>Ma'lumot o'shish</h1>
         <form className={styles.formaa} onSubmit={HandlePost}>
            <input className={styles.inputf} required type="text" placeholder="Title ni kriting" />
            <input className={styles.inputf} required type="text" placeholder="Descriptionni kriting" />
            <input className={styles.inputf} required type="number" placeholder="Date ni kriting" />
            <button className={styles.inputb} type="submit">Jo'natish</button>
         </form>
      </div>
      <div className={styles.cards}>
      {data?.data?.map((elem, index) =>
      <>
      <div>
      <h1>{elem.title}</h1>
      <p>{elem.description}</p>
      <p>{elem.date}</p>
      <button className={styles.buttond} value={elem.id} onClick={HandleDelete}>O`chirish</button>
     
      </div>
      </>
      )}
      </div>
      </div>
     
      </>
   )
}

export default Products