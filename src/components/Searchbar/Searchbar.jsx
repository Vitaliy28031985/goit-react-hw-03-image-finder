import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export class Searchbar extends React.Component {

   state = {
   imgValue: '',
   }

   handleChange = e => {
   this.setState({imgValue: e.currentTarget.value.toLowerCase()});
   }
  
   handleSubmit = e => {
   e.preventDefault();
   
  if(this.state.imgValue.trim() === '') {
   toast("Enter text");
   return
  }
   this.props.onSubmit(this.state.imgValue);
   this.setState({imgValue: ''});
   }
   render() {
   return (
      <header className={s.Searchbar}>
      <form onSubmit={this.handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.buttonLabel}>Search</span>
        </button>
    
        <input
          className={s.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </form>
      <ToastContainer 
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
    </header>
   );}
 };