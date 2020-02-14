import React from 'react';
import './App.css';

function returnFileSize(number) {
  if (number < 1024) {
    return number + 'bytes';
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB';
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + 'MB';
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originalImgSize: '',
      reducedImgSize: '',
      imageSrc: '',
      smallerImgSrc: ''
    };
  }

  reduceImage = (e) => {

    console.log(e.target.result);
    const arrayBuffer = e.target.result;
    console.log(arrayBuffer);
    console.log(new Uint8Array(arrayBuffer));

    const base64String = btoa(new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));

    console.log('base64String');
    console.log(base64String);
  };

  handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = this.reduceImage;
    reader.readAsArrayBuffer(file)
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>IE11 test</p>
          <input type="file" accept="image/*;capture=camera" onChange={this.handleImageUpload}/>
        </header>
      </div>
    )
  };
}

export default App;
