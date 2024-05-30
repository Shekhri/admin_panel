import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './style.module.css';
import ClearIcon from '@mui/icons-material/Clear';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Img from "../../../src/assets/images/chances/Avatar (14).png"
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ModalCommon from '../../components/common/modal/index';

const Products = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    axios.get('https://apiastro1.vtormetallmm.ru/projects')
      .then(res => setTasks(res.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://apiastro1.vtormetallmm.ru/projects/2/${id}`)
      .then(() => {
        const updatedTasks = tasks.filter(item => item.id !== id);
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const handleOpenEditModal = (task) => {
    setTaskToEdit(task);
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setTaskToEdit(null);
    setOpenEditModal(false);
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const body = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      date: priceRef.current.value,
    };
    axios.post('https://apiastro1.vtormetallmm.ru/projects', body)
      .then(res => {
        setTasks([...tasks, res.data]);
        handleCloseAddModal();
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const handleSubmitEdit = () => {
    if (taskToEdit && taskToEdit.id && titleRef.current.value && descRef.current.value && priceRef.current.value) {
      const body = {
        title: titleRef.current.value,
        desc: descRef.current.value,
        date: priceRef.current.value,
      };
      axios.put(`https://apiastro1.vtormetallmm.ru/projects/2/${taskToEdit.id}`, body)
        .then(res => {
          const updatedTasks = tasks.map(item => (item.id === taskToEdit.id ? res.data : item));
          setTasks(updatedTasks);
          handleCloseEditModal();
        })
        .catch(error => console.error('Error updating task:', error));
    } else {
      alert(`Please fill in all fields and select a task to edit`);
    }
  };

  return (
    <div className={Styles.section}>
      <hr className={Styles.hr} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1180 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h2 className={Styles.cardd__h2}>Title</h2></TableCell>
              <TableCell align="right"><h2 className={Styles.cardd__h2}>Description</h2></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"><h2 className={Styles.cardd__h2}>Date</h2></TableCell>
              <TableCell></TableCell>
              <TableCell><AddBoxIcon className={Styles.AddBoxIcon} onClick={handleOpenAddModal} /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(task => (
              <TableRow className={Styles.table} key={task.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <img src={Img} alt="" />
                </TableCell>
                <TableCell align="right">{task.title}</TableCell>
                <TableCell align="right">{task.desc}</TableCell>
                <TableCell align="right">{task.date}</TableCell>
                <TableCell align="right">
                  <div className={Styles.button__card}>
                    <BorderColorIcon className={Styles.button} onClick={() => handleOpenEditModal(task)} />
                    <DeleteIcon className={Styles.button} onClick={() => handleDelete(task.id)} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalCommon open={openAddModal} handleClose={handleCloseAddModal}>
        <div className={Styles.card__modal}>
          <div className={Styles.modal__item}>
            <ClearIcon className={Styles.icon} onClick={handleCloseAddModal} />
          </div>
          <h2>Add New Task</h2>
          <form className={Styles.form} onSubmit={handleSubmitAdd}>
            <input className={Styles.input__top} ref={titleRef} type='text' placeholder='Title' />
            <input className={Styles.input__top} ref={descRef} type='text' placeholder='Description' />
            <input className={Styles.input__top} ref={priceRef} type='text' placeholder='Date' />
            <button className={Styles.card__modal__button} type='submit'>Add</button>
          </form>
        </div>
      </ModalCommon>
      <ModalCommon open={openEditModal} handleClose={handleCloseEditModal}>
        <div className={Styles.card__modal}>
          <div className={Styles.modal__item}>
            <ClearIcon className={Styles.icon} onClick={handleCloseEditModal} />
          </div>
          <h2>Edit Task</h2>
          <form className={Styles.form}>
            <input className={Styles.input__top} ref={titleRef} type='text' placeholder='Title' defaultValue={taskToEdit?.title} />
            <input className={Styles.input__top} ref={descRef} type='text' placeholder='Description' defaultValue={taskToEdit?.desc} />
            <input className={Styles.input__top} ref={priceRef} type='text' placeholder='Date' defaultValue={taskToEdit?.date} />
            <button className={Styles.modal__button} onClick={handleSubmitEdit}>Save</button>
          </form>
        </div>
      </ModalCommon>
    </div>
  );
};

export default Products;
