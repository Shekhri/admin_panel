import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import axios from "axios";
import { Button } from "@mui/material";

function Boss() {
   const [data, setData] = useState([]);
   const [postData, setPostData] = useState([]);
   const [putData, setPutData] = useState([])
   const [elemId, setElemId] = useState()
   const [Name, setName] = useState(false)
   const [ApiName, setApiName] = useState()
   const [ApiPosition, setApiPosition] = useState()
   const [ApiPnumber, setApiPnumber] = useState()
   const [ApiEmail, setApiEmail] = useState()
   const [ApiRdays, setApiRdays] = useState()
   const [ApiNtg, setApiNtg] = useState()
   const [ApiNinst, setApiNinst] = useState()
   const [ApiNfac, setApiNfac] = useState()
   const [ApiWact, setApiWact] = useState()
   const [ApiDaf, setApiDaf] = useState() 
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
  const HandleUpdate = (e) => {
   e.preventDefault();
   console.log(e.id);
   const body = {
      name : e.target.NameP.value,
      position : e.target.PositionP.value,
      phone_number : e.target.PnumberP.value,
      email : e.target.EmailP.value,
      reception_days : e.target.RdaysP.value,
      network_tg : e.target.NtgP.value,
      network_inst : e.target.NinstP.value,
      network_fac : e.target.NfacP.value,
      work_activity : e.target.WactivityP.value,
      duties_and_functions : e.target.dafP.value
   }
  axios.put(`https://apiastro1.vtormetallmm.ru/leaderships/${e.id}`, body )
  .then((data) => setPutData(data))
  axios.get(`https://apiastro1.vtormetallmm.ru/leaderships`)
  .then((data) => setData(data))

  }
   return(
      <>
      <div className={styles.Form}>
         <form onSubmit={HandlePost} >
            <input type="text" placeholder="Ism" name="Name" className={styles.Form__inp} />
            <br />
            <input type="text" placeholder="Lavozim" name="Position" className={styles.Form__inp} />
            <br />
            <input type="text" placeholder="Telefon raqam" name="Pnumber" className={styles.Form__inp} />
            <br />
            <input type="text" placeholder="Elektron pochta" name="Email" className={styles.Form__inp} />
            <br />
            <input type="text"name="Rdays" placeholder="Qabul kunlari" className={styles.Form__inp} />
            <br />
            <input type="text"name="Ntg" placeholder="Telegram sahifasi" className={styles.Form__inp} />
            <br />
            <input type="text"name="Ninst" placeholder="Instagram sahifasi" className={styles.Form__inp} />
            <br />
            <input type="text"name="Nfac" placeholder="Facebook sahifasi" className={styles.Form__inp} />
            <br />
            <input type="text"name="Wactivity" placeholder="Ish faoliyati" className={styles.Form__inp} />
            <br />
            <input type="text"name="daf" placeholder="Vazifa va funksiyalari" className={styles.Form__inp} />
            <button type="submit">Jo`natish</button>
            {
      }
         </form>
      </div>
      {
         Name && 
         <form onSubmit={HandleUpdate} >
         <input type="text" placeholder="Ismi" name="NameP"  className={styles.Form__inp} />
         <br />
         <input type="text" placeholder="Lavozimi" name="PositionP"  className={styles.Form__inp} />
         <br />
         <input type="text" name="PnumberP"  className={styles.Form__inp} />
         <br />
         <input type="text" name="EmailP"  className={styles.Form__inp} />
         <br />
         <input type="text"name="RdaysP"  className={styles.Form__inp} />
         <br />
         <input type="text"name="NtgP"  className={styles.Form__inp} />
         <br />
         <input type="text"name="NinstP"  className={styles.Form__inp} />
         <br />
         <input type="text"name="NfacP"  className={styles.Form__inp} />
         <br />
         <input type="text"name="WactivityP" className={styles.Form__inp} />
         <br />
         <input type="text"name="dafP"  className={styles.Form__inp} />
         <button type="submit">Tayyor</button>
         <button onClick={() => setName(false)}>Yopish</button>
         {
                              // const [ApiName, setApiName] = useState()
                  // const [ApiPosition, setApiPosition] = useState()
                  // const [ApiPnumber, setApiPnumber] = useState()
                  // const [ApiEmail, setApiEmail] = useState()
                  // const [ApiRdays, setApiRdays] = useState()
                  // const [ApiNtg, setApiNtg] = useState()
                  // const [ApiNinst, setApiNinst] = useState()
                  // const [ApiNfac, setApiNfac] = useState()
                  // const [ApiWact, setApiWact] = useState()
                  // const [ApiDaf, setApiDaf] = useState() 
   }
      </form>
      }
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
      <button onClick={() => {
         setElemId(elem.id)
         console.log(elemId);
         setName(true)
         setApiName(elem.name)
         setApiPosition(elem.position)
         setApiPnumber(elem.phone_number)
         setApiEmail(elem.email)
         setApiRdays(elem.reception_days)
         setApiNtg(elem.network_tg)
         setApiNinst(elem.network_inst)
         setApiNfac(elem.network_fac)
         setApiWact(elem.work_activity)
         setApiDaf(elem.duties_and_functions)
      }}>Update</button>
      </div>
      </>
      )}
      </div>
      </>
   )
}

export default Boss
{/* <form onSubmit={HandleUpdate} >
<input type="text" placeholder="Ismi" name="NameP"  className={styles.Form__inp} />
<br />
<input type="text" placeholder="Lavozimi" name="PositionP" className={styles.Form__inp} />
<br />
<input type="text" name="PnumberP" className={styles.Form__inp} />
<br />
<input type="text" name="EmailP" className={styles.Form__inp} />
<br />
<input type="text"name="RdaysP" className={styles.Form__inp} />
<br />
<input type="text"name="NtgP" className={styles.Form__inp} />
<br />
<input type="text"name="NinstP" className={styles.Form__inp} />
<br />
<input type="text"name="NfacP" className={styles.Form__inp} />
<br />
<input type="text"name="WactivityP" className={styles.Form__inp} />
<br />
<input type="text"name="dafP" className={styles.Form__inp} />
<button type="submit">Tayyor</button>
{
}
</form> */}
