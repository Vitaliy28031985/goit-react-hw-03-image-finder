import React from "react";
import {mapperImmage} from 'components/utils/mapper'
import fetchImages from 'components/Api/Api';
import {Searchbar} from 'components/Searchbar/Searchbar';
import {ImageGallery} from 'components/ImageGallery/ImageGallery';
import {MessageError} from 'components/MessageError/MessageError';
import {Button} from 'components/Button/Button';
import {LoaderComponent} from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal'


const Status = {

  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


export class App extends React.Component {
  state = {
    // showModal: false,
    isLoader: false,
    error: null,
    status: 'idle',
    imgValue: '',
    page: 1,
    images: [],
    largeImageURL: ''
  }

  // componentDidMount() {}
  
  componentDidUpdate(_, prevState) {
// const prevPage = prevState.page;
// const nextPage = this.state.page;
const prevValue = prevState.imgValue;
const nextValue = this.state.imgValue;

  if(prevValue !== nextValue) {
    
    this.setState({ status: 'pending'});
    this.renderImages();
    
  }
}

handleFormSubmit = imgValue => {
    this.setState({imgValue,  page: 1, images: [] });
  };

  renderImages = () => {
const {page, imgValue} = this.state;
const fetch = fetchImages(imgValue, page);
this.setState({ isLoader: true });

fetch
.then(response => 
  this.setState(prevState => ({
    images: [...prevState.images, ...mapperImmage(response.hits)], 
    page: prevState.page + 1,
 }), 
 ))
 .catch(error => this.setState({ error, status: Status.REJECTED }))
 .finally(() => this.setState({ status: Status.RESOLVED,  isLoader: false}));
}

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };



changePage = () => {
  this.setState((prevState) => 
      ({page: prevState.page + 1}));
};

togleStatus = (id) => {
  const {images} = this.state;
const nawImages = images.map((image) => {
  if(image.id === id) {
    return {...image, webformatURL: !image.webformatURL};
  }
  return image;
});
this.setState({ images: nawImages });
}
openModal = (largeImageURL) => {
  this.setState({largeImageURL})
}

closeModal = () => {
  this.setState({largeImageURL: ''})
}

  render() {

  const { status, error, images, isLoader, largeImageURL } = this.state;
  const { handleFormSubmit, togleStatus, openModal, changePage, closeModal} = this;

  return (
    <>    
<Searchbar onSubmit={handleFormSubmit}/>
{status === Status.IDLE && (
<p>Please enter your search term</p> )}
{isLoader && <LoaderComponent />}
{status === Status.REJECTED && (
<MessageError message={error.message}/>
)}
{status === Status.RESOLVED && (
<>
<ImageGallery images={images} handleStatus={togleStatus} handleModal={openModal}/>
<Button handleClick={changePage}
 />
</>  )}
{largeImageURL && <Modal poster={largeImageURL} closeModal={closeModal}/>}
</>
  );}
};
