import React from "react";
import s from './Change_data.module.css';
import { useState } from "react";
import Button from "../../../../../Components/Button/Button";
import { useDispatch,useSelector } from "react-redux";
import { BottomSheet } from 'react-spring-bottom-sheet';
import { ProfileUtilityAction } from "../../../../../base/Reducers/UserReducer";
const ChangeData = (props) => {
    let [isShow, setShow] = useState(true);
    const config = useSelector((state) => state.config.config);
    const dispatch = useDispatch();
    const availableScreenWidth = window.screen.availWidth;
    return (
        <>
            {isShow ?
                availableScreenWidth <= 480 ? <BottomSheet open={isShow}
                    onDismiss={() => {
                        setShow(false)
                        dispatch(ProfileUtilityAction(false));
                    }}>
                    <div>
                        <div className={s.Cancel_Record_block}>
                            <div>
                                <img alt="" src={config.config.images.confuse}  />
                            </div>
                            <div className={s.Cancel_Record}>
                                <div onClick={() => {
                                    setShow(false)
                                    dispatch(ProfileUtilityAction(false));
                                }} className={s.Cart_close}>
                                    &times;
                                </div>
                                <h1 className={s.Font_size24}>При редактирование личных данных они не будут изменены в медицинской карте. Для обновления данных в медицинской карте свяжитесь с поддержкой.</h1>
                                <div className={s.Cancel_Record_button}>
                                    <div onClick={e => {
                                        setShow(false)
                                        dispatch(ProfileUtilityAction(false));
                                    }}>
                                        <Button
                                            className={s.buttonActive}
                                            type={'submit'}
                                            class={'btn orange'}
                                            text={'продолжить'}
                                        />
                                    </div>
                                    <div onClick={e => {
                                        setShow(false)
                                        dispatch(ProfileUtilityAction(false));
                                    }}>
                                        <Button
                                            className={s.buttonNo}
                                            type={'submit'}
                                            class={'btn white'}
                                            text={'отмена'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> </BottomSheet> : <div className={s.Cancel_Record_full}>
                    {isShow ? <div className="background" onClick={e => {
                                setShow(false)
                                dispatch(ProfileUtilityAction(false))
                            }}></div> : ""}
                    <div className={s.Cancel_Record_block}>
                        <div>
                            <img alt="" src={config.config.images.confuse}  />
                        </div>
                        <div className={s.Cancel_Record}>
                            <div onClick={() => {
                                setShow(false)
                                dispatch(ProfileUtilityAction(false))
                            }} className={s.Cart_close}>
                                &times;
                            </div>
                            <h1 className={s.Font_size24}>При редактирование личных данных они не будут изменены в медицинской карте. Для обновления данных в медицинской карте свяжитесь с поддержкой.</h1>
                            <div className={s.Cancel_Record_button}>
                                <div onClick={e => {
                                    setShow(false)
                                    dispatch(ProfileUtilityAction(false));
                                }}>
                                    <Button
                                        className={s.buttonActive}
                                        type={'submit'}
                                        class={'btn orange'}
                                        text={'продолжить'}
                                    />
                                </div>
                                <div onClick={e => {
                                    setShow(false)
                                    dispatch(ProfileUtilityAction(false));
                                }}>
                                    <Button
                                        className={s.buttonNo}
                                        type={'submit'}
                                        class={'btn white'}
                                        text={'отмена'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
        </>
    )
}
export default ChangeData;