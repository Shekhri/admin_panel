import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import axios from "axios";

function Boss() {
   const [data, setData] = useState([]);
   const [postData, setPostData] = useState([]);
   const [Name, setName] = useState([])
     useEffect(()=> {
      axios.get(`https://apiastro1.vtormetallmm.ru/leaderships`)
      .then((data) => setData(data))
    }, [])
    const HandlePost = (e) => {
      e.preventDefault()
      const body = {
         name : e.target.Name.value,
         position : e.target.Position.value,
         phone_number : e.target.Pnumber.value,
         email : e.target.Email.value,
         reception_days : e.target.Rdays.value,
         network_tg : e.target.Ntg.value,
         network_inst : e.target.Ninst.value,
         network_fac : e.target.Nfac.value,
         work_activity : e.target.Wactivity.value,
         duties_and_functions : e.target.daf.value
      }
      axios.post(`https://apiastro1.vtormetallmm.ru/leaderships`, body)
      .then((data) => setPostData(data))
      axios.get(`https://apiastro1.vtormetallmm.ru/leaderships`)
      .then((data) => setData(data))
      console.log(
         e.target.Name.value,
         e.target.Position.value,
         e.target.Pnumber.value,
         e.target.Email.value,
         e.target.Rdays.value,
         e.target.Ntg.value,
         e.target.Ninst.value,
         e.target.Nfac.value,
         e.target.Wactivity.value,
         e.target.daf.value
      );
      e.target.Name.value = null
      e.target.Position.value = null
      e.target.Pnumber.value = null
      e.target.Email.value = null
      e.target.Rdays.value = null
      e.target.Ntg.value = null
      e.target.Ninst.value = null
      e.target.Nfac.value = null
      e.target.Wactivity.value = null
      e.target.daf.value = null
      setTimeout(() => {
         window.location.reload()
      }, 2000);
    }
    const HandleDelete = (e) => {
      e.preventDefault();
      axios.delete(`https://apiastro1.vtormetallmm.ru/leaderships/${e.target.value}`)
      axios.get(`https://apiastro1.vtormetallmm.ru/leaderships`)
      .then((data) => setData(data))
      setTimeout(() => {
         window.location.reload()
      }, 2000);
      
  }
   return(
      <>
      <div className={styles.Form}>
         <form onSubmit={HandlePost} >
            <input type="text" placeholder="Ismi" name="Name" className={styles.Form__inp} />
            <br />
            <input type="text" placeholder="Lavozimi" name="Position" className={styles.Form__inp} />
            <br />
            <input type="text" name="Pnumber" className={styles.Form__inp} />
            <br />
            <input type="text" name="Email" className={styles.Form__inp} />
            <br />
            <input type="text"name="Rdays" className={styles.Form__inp} />
            <br />
            <input type="text"name="Ntg" className={styles.Form__inp} />
            <br />
            <input type="text"name="Ninst" className={styles.Form__inp} />
            <br />
            <input type="text"name="Nfac" className={styles.Form__inp} />
            <br />
            <input type="text"name="Wactivity" className={styles.Form__inp} />
            <br />
            <input type="text"name="daf" className={styles.Form__inp} />
            <button type="submit">Jo`natish</button>
            {
      }
         </form>
      </div>
      <div className={styles.cards}>
      {data?.data?.map((elem, index) =>
      <>
      <div>
      <h1>{elem.name}</h1>
      <p>{elem.position}</p>
      <p>{elem.phone_number}</p>
      <p>{elem.email}</p>
      <p>{elem.reception_days}</p>
      <p>{elem.network_tg }</p>
      <p>{elem.network_inst}</p>
      <p>{elem.network_fac}</p>
      <p>{elem.work_activity}</p>
      <p>{elem.duties_and_functions}</p>
      <button value={elem.id} onClick={HandleDelete}>O`chirish</button>
      </div>
      </>
      )}
      </div>
      </>
   )
}

export default Boss
