import React from "react";

import fetchImages from 'Api/Api';
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
  state = {
    error: null,
    status: 'idle',
    imgValue: '',
    page: 1,
    images: [],
  }

  // componentDidMount() {}
  
  componentDidUpdate(_, prevState) {

  const prevValue = prevState.imgValue;
  const nextValue = this.state.imgValue;

  if(prevValue !== nextValue) {
    this.setState({ status: 'pending'});
    this.renderImages();
    console.log(this.state.imgValue);
  }
}

handleFormSubmit = imgValue => {
    this.setState({imgValue,  page: 1, images: [] });
  };

  renderImages = () => {
const {page, imgValue} = this.state;
const fetch = fetchImages(page, imgValue);

console.log(imgValue);

fetch
.then(response => 
  this.setState(prevState => ({
    images: [...prevState.images, ...response.hits],
    page: prevState.page + 1,
      // ...prevState.images,
 })),
 )
 .catch(error => this.setState({ error, status: Status.REJECTED }))
 .finally(() => this.setState({ status: Status.RESOLVED }));

console.log(this.state.imgValue); 
}

  render() {

  const { status, error, images, } = this.state;
  const {renderImages, handleFormSubmit} = this;

  return (
    <>
    
<Searchbar onSubmit={handleFormSubmit}/>
{status === Status.IDLE && (
<p>Please enter your search term</p> )}
{/* {status === Status.PENDING && <Loader />} */}
{status === Status.REJECTED && (
 <MessageError message={error.message}/>

)}
{status === Status.RESOLVED && (
<>
<ImageGallery images={images}/>
<Button onClick={renderImages}
 />
</>  )}
</>
  );}
};
