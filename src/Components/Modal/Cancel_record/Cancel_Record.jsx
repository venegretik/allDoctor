import React from "react";
import s from "./Cancel_Record.module.css";
import { useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import Button from "../../Button/Button";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
const Cancel_Record = (props) => {
  let dispatch = useDispatch();
  let [showWindow, setWindow] = useState(false);
  let DoctorDelete = (consultation_id) => {
    dispatch(props.func(consultation_id));
    setWindow(false);
  };
  useEffect(() => {
    if (!showWindow) {
      document.body.style.overflow = "auto"
    }
    if (showWindow) {
      document.body.style.overflow = "hidden"
    }
  }, [showWindow])
  const availableScreenWidth = window.screen.availWidth;
  return (
    <div>
      <div
        className={s.Cart_close + " " + s.black}
        onClick={(e) => setWindow(true)}
      >
        &times;
      </div>
      {showWindow ? (
        <>
        
       {availableScreenWidth <= 480 ? <BottomSheet open={showWindow}
        onDismiss={() => setWindow(false)}><div>
              <div className={s.ImgNone}>
                <img
                  src="https://api.telemed.dev-h.ru/images/ui/doc3.png"
                  alt=""
                />
              </div>
              <div className={s.Cancel_Record}>
                <div onClick={() => setWindow(false)} className={s.Cancel_close}>
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
                  <div onClick={(e) => setWindow(false)}>
                    <Button
                      className={s.Font_size16}
                      type={"submit"}
                      class={"btn white"}
                      text={"Нет"}
                    />
                  </div>
                </div>
              </div>
            </div></BottomSheet>:""}
          <div className={s.Cancel_Record_full}>
            <div className={s.background} onClick={() => setWindow(false)}></div>
            
            <div className={s.Cancel_Record_block}>
              <div className={s.ImgNone}>
                <img
                  src="https://api.telemed.dev-h.ru/images/ui/doc3.png"
                  alt=""
                />
              </div>
              <div className={s.Cancel_Record}>
                <div onClick={() => setWindow(false)} className={s.Cancel_close}>
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
                  <div onClick={(e) => setWindow(false)}>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Cancel_Record;
