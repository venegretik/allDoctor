import React, { useEffect, useState } from "react";
import s from "./UserMenu.module.css";
import arrow from "../../../../img/arrow.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShortInfo } from "../../../../base/asyncActions/getMainPageInfo";
import Loader from "../../../../Components/Loading/Loader";
import Notification from "../Notification/Notification";

const UserMenu = () => {
  const logout = () => {
    localStorage.clear();
  };

  const dispatch = useDispatch();
  let [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const info = useSelector((state) => state.main.shortName);

  useEffect(() => {
    const response = dispatch(getShortInfo());
    response.then((response) => setLoad(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!load ? (
        <Loader />
      ) : (
        <div className={s.jare}>
          <div className={s.Header_profile}>
            <Notification />
            <div onClick={() => setShow(true)} className={s.Profile_text + " black_config"}>
              <div className={s.Profile_avatar}>
                <img src={info.data.photo} alt="" />
              </div>
              <div className={s.Profile_menu}>
                <p>{info.data.short_name}</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          {show && (
            <div className={s.notice_back} onClick={() => 
              setShow(show ? false : true)
            }>
              <div onClick={() => setShow(false)} className={s.MenuBack}>
                <div className={s.MenuWrap}>
                  <ul className={s.MenuList}>
                    <li>
                      <Link
                        className={`${s.MenuLink} ${s.LinkBorder} black_config`}
                        to={"profile/local-data"}
                      >
                        Личные данные
                      </Link>
                    </li>
                    <li>
                      <Link className={s.MenuLink + " black_config"} to={"profile/balance"}>
                        Баланс
                      </Link>
                    </li>
                    <li>
                      <Link className={s.MenuLink + " black_config"} to={"profile/utility"}>
                        Проверка оборудования
                      </Link>
                    </li>
                    <li>
                      <Link className={s.MenuLink + " black_config"} to={"profile/med-cart"}>
                        Медицинская карта
                      </Link>
                    </li>
                    <li>
                      <Link className={s.MenuLink + " black_config"} to={"profile/result"}>
                        Результаты исследований
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={s.MenuLink + " black_config"}
                        onClick={() => logout()}
                        to={"/"}
                      >
                        Выйти
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { UserMenu };
