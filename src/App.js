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
    this.setState({
      originalImgSize: returnFileSize(e.total),
      imageSrc: e.target.result
    });

    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 600;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const dataurl = canvas.toDataURL("image/*");
      console.log(dataurl);

      this.setState({
        smallerImgSrc: dataurl,

        // https://stackoverflow.com/a/18557601/1050479
        reducedImgSize: returnFileSize(Math.round((dataurl.length - 'data:image/png;base64,'.length)*3/4))
      })
    };

  };

  handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = this.reduceImage;
    reader.readAsDataURL(file)
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="file" accept="image/*;capture=camera" onChange={this.handleImageUpload}/>
          <p>Original size: {this.state.originalImgSize}</p>
          <p>New reduced size: {this.state.reducedImgSize}</p>
          <div className="Image-container">
            <img src={this.state.imageSrc} />
            <img src={this.state.smallerImgSrc} />
          </div>
        </header>
      </div>
    )
  };
}

export default App;
