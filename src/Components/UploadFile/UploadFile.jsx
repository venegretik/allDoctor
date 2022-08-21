import React from "react";
import "./Upload.css";
import { connect } from "react-redux";
import { axiosProfilePhotoUpload, axiosProfileUpload } from "../../base/asyncActions/Profile";
import upload from "../../img/upload.png";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
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
    if(this.props.type !== "button")
    this.props.axiosProfilePhotoUpload(filesArr);
    else{
      this.props.axiosProfileUpload(this.props.data);
    }
    this.setState({ files: [...this.state.files, ...filesArr] });
  }
  removeFile(f) {
    this.setState({ files: this.state.files.filter((x) => x !== f) });
  }
  render() {
    return (
      <div style={styles}>
        {this.props.type === "button" ? <label className="custom-file-upload upload_file">
          <input
            type="file"
            accept=".png, .jpeg, .webp"
            onChange={this.onChange}
          />выбрать файл
        </label> :<label className="custom-file-upload">
          <input
            type="file"
            onChange={this.onChange}
          />
          <img src={upload} alt="" />
        </label>}
      </div>
      
    );
  }
}
let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (dispatch) => {
  return {
    axiosProfilePhotoUpload: (photo) => {
      dispatch(axiosProfilePhotoUpload(photo));
    },
    axiosProfileUpload: (obj) => {
    dispatch(axiosProfileUpload(obj))
    }
  };
};
const Message_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFile);
export default Message_Container;
