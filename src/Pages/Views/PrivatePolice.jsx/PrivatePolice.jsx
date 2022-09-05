import React from "react";
import s from "./PrivatePolice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loading/Loader";
import PDF from "../../../img/filePdf.png";
import { getConfigHeaderAction } from "../../../base/Reducers/configReducer";
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
  const config = useSelector((state) => state.config.config);
  useEffect(() => {
    if (params.type === "privacy") dispatch(axiosPrivacy());
    if (params.type === "services") dispatch(axiosServices());
    if (params.type === "user") dispatch(axiosPersonal());
    if (params.type === "personal") dispatch(axiosAgreemet());
    dispatch(getConfigHeaderAction("Политика конфидециальности"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={s.PrivatePoliceFull + " " + s.Container}>
      {title ? <div>
        <div style={{ color: config?.config.colors.color2 }}>
          <h1 className={s.Font_size24}>{title}</h1>
        </div>
        <Link to={file ? file : "/"} target="_blank" download style={{ color: config?.config.colors.color2 }}>
          <div className={s.FileBlock}>
            <img alt="" src={PDF} />
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
      </div> : <Loader />}

    </div>
  );
};
export default PrivatePolice;
