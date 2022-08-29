import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import message_img from "../../../../img/coolicon.png";
import newNotice from "../../../../img/notification_outline_dot.png";
import s from "../UserMenu/UserMenu.module.css";
import { getNotification } from "../../../../base/asyncActions/getMainPageInfo";

const Notification = () => {
  const dispatch = useDispatch();
  const [NewMessage, setNewMessage] = useState(true);
  const [Show, setShow] = useState(false);
  const [Notice, setNotice] = useState(false);

  const asyncNotification = async () => {
    const response = await dispatch(getNotification());
    if (response.status) {
      setNewMessage(await response);
      if (response.pagination.total_items === 0) {
        setNotice(true);
      }
    }
  };

  useEffect(() => {
    asyncNotification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={() => {
        setShow(Show ? false : true);
        asyncNotification();
      }}
      className={s.Profile_logo}
    >
      {Notice ? (
        <img  src={message_img} alt="" />
      ) : (
        <img  src={newNotice} alt="" />
      )}
      {Show && (
        <div className={s.notice_back}>
          <div className={s.notice_body}>
            {NewMessage.items.length > 0 ? (
              NewMessage.items.map((item) => {
                return (
                  <Link
                    key={item.notofication_id}
                    to={"profile/message"}
                    className={s.notice_item}
                  >
                    <svg
                      className={s.notice_item_svg}
                      width="5"
                      height="5"
                      viewBox="0 0 5 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#F40101" />
                    </svg>
                    <div className={s.notice_item_block}>
                      <div className={s.notice_item_block_title + " title_config"}>
                        {item.title}
                      </div>
                      <div className={s.notice_item_block_text + " black_config"}>
                        {item.description}
                      </div>
                      <div className={s.notice_item_block_date + " gray_config"}>
                        {new Date(item.datetime).toLocaleString("ru", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h4 className={s.text_notice + " gray_config"}>Новых уведомлений нет</h4>
            )}
            <Link to={"profile/message"} className={s.notice_readAll + " blue_config"}>
              Посмотреть все уведомления
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
