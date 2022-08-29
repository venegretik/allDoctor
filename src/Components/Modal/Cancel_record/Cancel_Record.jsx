import React from "react";
import s from "./Cancel_Record.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import history from "../../../history";
import Button from "../../Button/Button";
import { getConfigModalStatus } from "../../../base/Reducers/configReducer";
import { axiosConsultation } from "../../../base/asyncActions/getConsultation";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
const Cancel_Record = (props) => {
  let dispatch = useDispatch();
  let DoctorDelete = (consultation_id) => {
    dispatch(props.func(consultation_id));
    if (props.type_modal === "cons")
      dispatch(axiosConsultation());
  };
  const config = useSelector((state) => state.config.config);
  useEffect(() => {
    const unblock = history.block((location, action) => {
      console.log('action')
      debugger
      if (action === "POP") {
        return false;
      }
      if (window.confirm(`Are you sure you want to go to?`)) {
        // Unblock the navigation.
        unblock();
      }
    });
    return () => {
    };
  }, []);
  return (
    <div>
      <div className={s.Cancel_Record_full}>
        <div className={s.ImgNone}>
          <img alt=""
            src={config.config.images.confuse}

          />
        </div>
        <div className={s.Cancel_Record}>
          <div onClick={() => dispatch(getConfigModalStatus(false))} className={s.Cancel_close}>
            &times;
          </div>
          <h1
            className={s.Font_size40 + " black_config"}
          >
            {props.text}
          </h1>
          {props.typeModal === "record" ? (
            <p
              className={s.Font_size16 + " black_config"}
            >
              После удаления врача он не будет иметь доступ к вашей
              медицинской карте
            </p>
          ) : (
            ""
          )}
          <div className={s.Cancel_Record_button}>
            <div onClick={() => DoctorDelete(props.consultation_id)}>
              <Button
                className={s.Font_size16}
                type={"submit"}
                class={"btn orange"}
                text={"Да"}
              />
            </div>
            <div onClick={(e) => dispatch(getConfigModalStatus(false))}>
              <Button
                className={s.Font_size16}
                type={"submit"}
                class={"btn white"}
                text={"Нет"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cancel_Record;
