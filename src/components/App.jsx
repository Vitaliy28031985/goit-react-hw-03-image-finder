import React from "react";

import fetchImages from 'components/API/API';
import {Searchbar} from 'components/Searchbar/Searchbar';
import {ImageGallery} from 'components/ImageGallery/ImageGallery';
import {MessageError} from 'components/MessageError/MessageError';
import {Button} from 'components/Button/Button';
// import {Loader} from 'components/Loader/Loader';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


export class App extends React.Component {
  setState = {
    error: null,
    status: 'idle',
    imgValue: '',
    page: 1,
    images: [],
  }

  componentDidUpdate(_, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevValue = prevState.imgValue;
    const nextValue = this.state.imgValue;

  if(prevValue !== nextValue || prevPage !== nextPage) {
    this.renderImages();
    // console.log(this.state.imgValue);
  }
}

handleFormSubmit = newImgValue => {
    this.setState({imgValue: newImgValue, page: 1, images: [] });
  };

renderImages = () => {
const {page, imgValue} = this.state;
const fetch = fetchImages(page, imgValue);
// fetchImages(page, imgValue)
fetch
.then(data => 
  this.setState(prevState => ({
    images: [...prevState.images, ...data.hits],
    page: prevState.page + 1,
       
 })),
 )
 .catch(error => this.setState({ error, status: Status.REJECTED }))
 .finally(() => this.setState({ status: Status.RESOLVED }));

console.log(this.state.imgValue); 
}

  render() {

    const { status, error } = this.state;

  return (
    <>
<Searchbar onSubmit={this.handleFormSubmit}/>
{status === Status.IDLE && (
<p className="welcomeText">Please enter your search term</p> )}
{/* {status === Status.PENDING && <Loader />} */}
{status === Status.REJECTED && (
<MessageError message={error.message} />
)}
{status === Status.RESOLVED && (
  <>
<ImageGallery images={this.state.images}/>
<Button onClick={this.renderImages} />
</>  )}
</>
  );}
};
