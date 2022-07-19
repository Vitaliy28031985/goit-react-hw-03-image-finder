import React from "react";
import {mapperImmage} from 'components/utils/mapper'
import fetchImages from 'components/Api/Api';
import {Searchbar} from 'components/Searchbar/Searchbar';
import {ImageGallery} from 'components/ImageGallery/ImageGallery';
import {MessageError} from 'components/MessageError/MessageError';
import {Button} from 'components/Button/Button';
import {LoaderComponent} from 'components/Loader/Loader';


const Status = {

  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


export class App extends React.Component {
  state = {
    showModal: false,
    isLoader: false,
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
    images: mapperImmage([...prevState.images, ...response.hits]), 
    page: prevState.page + 1,
 }), 
 ))
 .catch(error => this.setState({ error, status: Status.REJECTED }))
 .finally(() => this.setState({ status: Status.RESOLVED,  isLoader: false}));
}

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};

// changePage = () =>{
//   this.setState(prevState => {
//     return {
//       page: prevState.page + 1,
//     };
//   });
//   this.renderImages();
// };


  render() {

  const { status, error, images, isLoader, showModal, } = this.state;
  const {renderImages, handleFormSubmit, toggleModal} = this;

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
<ImageGallery images={images} onToggle={toggleModal} onTogglState={showModal}/>
<Button onClick={renderImages}
 />
</>  )}

</>
  );}
};
