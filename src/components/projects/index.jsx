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
      axios.get(`http://localhost:8000/Books`)
      .then((data) => setData(data))
    }, [])
   const HandlePost = (e) => {
      e.preventDefault()
      const body = {
         img : e.target.img.value,
         price : e.target.price.value,
         name : e.target.name.value,
         author : e.target.author.value
      }
      axios.post(`http://localhost:8000/Books`, body)
      .then((data) => setPostData(data))
      axios.get(`http://localhost:8000/Books`)
      .then((data) => setData(data))
      e.target.img.value = null
      e.target.price.value = null
      e.target.name.value = null
      e.target.author.value = null

      setTimeout(() => {
         window.location.reload()
      }, 2000);
    }
    const HandleDelete = (e) => {
      e.preventDefault();
      axios.delete(`http://localhost:8000/Books/${e.target.value}`)
      axios.get(`http://localhost:8000/Books`)
      .then((data) => setData(data))
      setTimeout(() => {
         window.location.reload()
      }, 2000);
  }
   return(
      <><div className={styles.conatiner}>
          <div className={styles.forma}>
         <h1 className={styles.h1t}>Sotuvdagi kitoblar</h1>
         <form className={styles.formaa} onSubmit={HandlePost}>
            <input className={styles.inputf} required type="text" name="img" placeholder="Rasm linkini kiriting" />
            <input className={styles.inputf} required type="text" name="price" placeholder="Kitob narxini kiriting" />
            <input className={styles.inputf} required type="text" name="name" placeholder="Kitob nomini kiriting" />
            <input className={styles.inputf} required type="text" name="author" placeholder="Kitob muallifini kiriting" />
            <button className={styles.inputb} type="submit">Jo'natish</button>
         </form>
      </div>
      <div className={styles.cards} style={{flexWrap: `wrap`, display : `flex`, justifyContent : `space-between`}}>
      {data?.data?.map((elem, index) =>
      <>
      <div>
         <img style={{width : `100px`, height:`200px`}} src={elem.img} alt="" />
      <h1>{elem.price}</h1>
      <p>{elem.name}</p>
      <p>{elem.author}</p>
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