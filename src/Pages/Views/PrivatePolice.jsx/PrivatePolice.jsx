import React from "react";
import s from "./PrivatePolice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PDF from "../../../img/filePdf.png";
import {
  axiosPrivacy,
  axiosServices,
  axiosPersonal,
  axiosAgreemet,
} from "../../../base/asyncActions/getConfig";
import { useParams } from "react-router-dom";
const PrivatePolice = (props) => {
  let dispatch = useDispatch(),
    params = useParams();
  let HTML = useSelector((state) => state.config.text_police);
  let file = useSelector((state) => state.config.file);
  let title = useSelector((state) => state.config.title);
  useEffect(() => {
    if (params.type == "privacy") dispatch(axiosPrivacy());
    if (params.type == "services") dispatch(axiosServices());
    if (params.type == "user") dispatch(axiosPersonal());
    if (params.type == "personal") dispatch(axiosAgreemet());
  }, []);
  return (
    <div className={s.PrivatePoliceFull + " " + s.Container}>
      <div>
        <h1 className={s.Font_size24}>{title}</h1>
      </div>
      <Link to={file ? file : "/"} target="_blank" download>
        <div className={s.FileBlock}>
          <img src={PDF} alt="" />
          <div className={s.FileText}>
            <p className={s.Font_size14}>{title}</p>
            <p className={s.Font_size14}>640кб</p>
          </div>
        </div>
      </Link>
      <div>
        <div
          className={s.Font_size14}
          dangerouslySetInnerHTML={{ __html: HTML }}
        ></div>
      </div>
    </div>
  );
};
export default PrivatePolice;
