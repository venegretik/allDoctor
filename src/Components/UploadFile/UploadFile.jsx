import React from "react";
import "./Upload.css";
import { connect } from "react-redux";
import { axiosProfilePhotoUpload, axiosProfileUpload } from "../../base/asyncActions/Profile";
import upload from "../../img/upload.png";
import { ProfileUploadFileAction } from "../../base/Reducers/UserReducer";
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
      this.props.ProfileUploadFileAction(filesArr[0])
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
            onChange={this.onChange}
          />выбрать файл
        </label> :<label className="custom-file-upload">
          <input
            type="file"
            onChange={this.onChange}
          />
          <img alt="" src={upload}  />
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
    ProfileUploadFileAction: (photo) => {
      dispatch(ProfileUploadFileAction(photo));
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
