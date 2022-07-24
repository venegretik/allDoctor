import React from 'react';
import './Upload.css';
import { useEffect } from 'react';
import { render } from 'react-dom';
import { useDispatch } from 'react-redux/es/exports';
import { axiosProfilePhotoUpload } from '../../base/asyncActions/Profile';
import upload from '../../img/upload.png'
const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    display: 'flex',
};

class UploadFile extends React.Component {
     
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            files: [],
        };
    }
    
    onChange(e) {
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        console.log(filesArr);
        this.setState({ files: [...this.state.files, ...filesArr] });
    }

    removeFile(f) {
        this.setState({ files: this.state.files.filter(x => x !== f) });
    }
    render() {
        return (
            <div style={styles}>
                <label className="custom-file-upload">
                    <input type="file" multiple onChange={this.onChange} />
                    <img src={upload} alt="" />
                </label>
            </div>
        )
    }
}

export default UploadFile;