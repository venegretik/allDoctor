import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Layout } from "./Pages/Layout/Layout";
import { MyProfile } from "./Pages/Views/My_Profile/MyProfile";
import { DoctorList } from "./Pages/Views/Doctor_list/DoctorList";
import Consultation from "./Pages/Views/Consultation/Consultation";
import { MyDoctor } from "./Pages/Views/My_Doctor/MyDoctor";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Preloader } from "./Components/Preloader/Preloader";
import { LandingLoader } from "./Pages/Views/Landing/LandingLoader";
import { Landing } from "./Pages/Views/Landing/landing";
import Main from "./Pages/Views/Main/Main";
import { axiosConfig } from "./base/asyncActions/getConfig";
import { Login } from "./Pages/Views/Login/Login";
import Recording from "./Pages/Views/Recording/Recording";
import Razdeli from "./Pages/Views/Razdeli/Razdeli";
import { getShortInfo } from "./base/asyncActions/getMainPageInfo";
import { Register } from "./Pages/Views/Register/Register";
import Payment from "./Pages/Views/Payment/Payment";
import PostRewiew from "./Pages/Views/Post_review/Post_review";
import NotFound from "./Pages/Views/NotFound/NotFound";
import Balance from "./Pages/Views/My_Profile/Balance/Balance";
import Result from "./Pages/Views/My_Profile/Result/Result";
import MedCart from "./Pages/Views/My_Profile/Med_Cart/Med_Cart";
import LocalData from "./Pages/Views/My_Profile/Local_Data/Local_Data";
import ReplaceData from "./Pages/Views/My_Profile/Replace_Data/ReplaceData";
import Utility from "./Pages/Views/My_Profile/Utility/Utility";
import Messages from "./Pages/Views/My_Profile/Messages/Messages";
import PrivatePolice from "./Pages/Views/PrivatePolice.jsx/PrivatePolice";
import Video from "./Pages/Views/Video/Video";
import SliderApp from "./Components/Sliders/SliderApp/SliderApp";
import './config.css';
import RazdeliOffline from "./Pages/Views/OfflineBranch/OfflineBranch";
function App() {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);
  const loading = useSelector((state) => state.config.loading);
  useEffect(() => {
    dispatch(axiosConfig());
    dispatch(getShortInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty('--black', config?.config.colors.color10);
    document.documentElement.style.setProperty('--blueOpacity', config?.config.colors.color5);
    document.documentElement.style.setProperty('--title', config?.config.colors.color7);
    document.documentElement.style.setProperty('--white', config?.config.colors.color7);
    document.documentElement.style.setProperty('--blue', config?.config.colors.color9);
    document.documentElement.style.setProperty('--green', config?.config.colors.color1);
    document.documentElement.style.setProperty('--gray', config?.config.colors.color2);
    document.documentElement.style.setProperty('--orange', config?.config.colors.color3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <Routes>
          {config.module.landing.is_active ? <Route
            index
            element={
              <LandingLoader>
                <Landing html={config.module.landing.html} />
              </LandingLoader>
            }
          /> : config.module.welcome_screen.is_active ? <Route index element={<SliderApp />}/> : ""}
          

          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          <Route path={"/"} element={<Layout />}>
            <Route path={"main"} element={<Main />} />
            <Route path={"profile"} element={<MyProfile />}>
              <Route path={"balance"} element={<Balance />} />
              <Route path={"result"} element={<Result />} />
              <Route path={"med-cart"} element={<MedCart />} />
              <Route path={"local-data"} element={<LocalData />} />
              <Route path={"replace-data"} element={<ReplaceData />} />
              <Route path={"utility"} element={<Utility />} />
              <Route path={"message"} element={<Messages />} />
            </Route>
            <Route path={"doctor-list/:id/:spec_id"} element={<DoctorList />} />
            <Route path={"consultation"} element={<Consultation />} />
            <Route path={"my-doctor"} element={<MyDoctor />} />
            <Route path={"private/:type"} element={<PrivatePolice />} />
            <Route path={"recording/:id/:type"} element={<Recording />} />
            <Route path={"razdeli"} element={<Razdeli />} />
            <Route path={"video"} element={<Video />} />
            <Route path="payment/:id/:slot" element={<Payment />} />
            <Route path={"post-rewiew/:id"} element={<PostRewiew />} />
            <Route path={"*"} element={<NotFound />} />
            <Route path={"razdeli-offline"} element={<RazdeliOffline />} />
            
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
