import React, {useState, useEffect, useRef, useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/////// PAGES COMPONENTS 
// PAGES
import Home from "./client/pages/Home";
import Contact from './client/pages/Contact';
import Intro from './client/pages/Intro';
// PAGES ADMIN
import HomeAdmin from "./admin/pages/HomeAdmin";
import ListAdmin from "./admin/pages/ListAdmin";
import SingleAdmin from "./admin/pages/SingleAdmin";
import NewUser from "./admin/pages/Add_New/NewUser"
import NewProduct from "./admin/pages/Add_New/NewProduct";
import MyAccountAdmin from './admin/pages/auth/MyAccountAdmin';
// AUTH
import Login from './client/pages/auth/Login';
import MyAccount from './client/pages/auth/MyAccount';
// AUTH ADMIN
import LoginAdmin from "./admin/pages/auth/LoginAdmin";
// CART
import CartPage from './client/pages/cart/Index';
import ConfirmCart from './client/pages/cart/ConfirmCart';
import SummaryCheckout from './client/pages/cart/SummaryCheckout';
import Stripe from './client/components/cart/payment/stripe/Stripe';
// FOOTER
import GeneralTermsForSaleAndUse from './client/pages/footer/GeneralTermsForSaleAndUse';
import PrivacyPolicy from './client/pages/footer/PrivacyPolicy';
import CookiePolicy from './client/pages/footer/CookiePolicy';
import Delivery from './client/pages/footer/Delivery';
import SecurePayment from './client/pages/footer/SecurePayment';
// DATA ADMIN
import { productColumns, userColumns } from "./admin/data/dataTitleColumns";
import { userInputs } from "./admin/data/dataFormsInputs";
// CONTEXT ADMIN
import { DarkModeContext } from "./admin/utils/context/darkModeContext";
import { AuthContext } from "./admin/utils/context/AuthContext";






function App(props) {
  const { darkMode } = useContext(DarkModeContext);

    const {items, saveLocalStorage} = props
  
  // TITLE WEBSITE
  useEffect(() => {
    document.title = "Epicerie en ligne";
  }, []);

  useEffect(()=> {
    saveLocalStorage(items)
  }, [items])


  {/***************************************************************/}
  {/***************************************************************/}
  {/********************* LOGIC ADMIN SECTION *********************/}
  {/***************************************************************/}
  {/***************************************************************/}  


  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    console.log(user)
    if (!user) {
      return <Navigate to="/loginAdmin" />;
    }

    return children;
  };


  {/***************************************************************/}
  {/***************************************************************/}
  {/*********************** RETURN FILE APP ***********************/}
  {/***************************************************************/}
  {/***************************************************************/}
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes
          forceResfresh={true}
        >

            {/* <Route path="/"> */}
                    {/***************************************************************/}
                    {/***************************************************************/}
                    {/*********************** CLIENT SECTION *************************/}
                    {/***************************************************************/}
                    {/***************************************************************/}
                      <Route path="/" element={<Intro />}/>
                      <Route path="/home" element={<Home />}/>

                      {/* SECTION CART */}
                      <Route path="/cart" element={<CartPage />}/>
                      <Route path="confirmCart" element={<ConfirmCart />}/>
                      <Route path="summaryCheckout" element={<SummaryCheckout />}/>
                      <Route path="checkoutStripe" element={<Stripe />}/>
                      {/* <Route path="checkoutStripe" element={<StripeContainer />}/>

                      {/* SECTION AUTH */}
                      <Route path="/login" element={<Login />}/>
                      <Route path="myAccount" element={<MyAccount />}/>

                      {/* SECTION FOOTER */}
                        {/* LegalInformation */}
                        <Route path="generalTermsForSaleAndUse" element={<GeneralTermsForSaleAndUse />}/>
                        <Route path="privacyPolicy" element={<PrivacyPolicy />}/>
                        <Route path="cookiePolicy" element={<CookiePolicy />}/>
                
                        {/* CustomerService */}
                        <Route path="contact" element={<Contact />}/>
                        <Route path="delivery" element={<Delivery />}/>
                        <Route path="securePayment" element={<SecurePayment />}/>

                        
                    {/***************************************************************/}
                    {/***************************************************************/}
                    {/*********************** ADMIN SECTION *************************/}
                    {/***************************************************************/}
                    {/***************************************************************/}          
                      <Route path="/loginAdmin" element={<LoginAdmin />} />

                      <Route
                        path="/homeAdmin" 
                        element={
                          <ProtectedRoute>
                            <HomeAdmin />
                          </ProtectedRoute>
                        }
                      />
                      
                      <Route
                        path="myAccountAdmin"
                        element={
                          <ProtectedRoute>
                            <MyAccountAdmin />
                          </ProtectedRoute>
                        }
                      />

                      <Route path="users">
                        <Route
                          index
                          element={
                            <ProtectedRoute>
                              <ListAdmin columns={userColumns} />
                           </ProtectedRoute>
                          }
                        />
                        <Route
                          path=":userId"
                          element={
                            <ProtectedRoute>
                              <SingleAdmin />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="new"
                          element={
                            <ProtectedRoute>
                              <NewUser inputs={userInputs}  />
                            </ProtectedRoute>
                          }
                        />
                      </Route>

                      <Route path="products">
                        <Route index element={
                          <ProtectedRoute>
                            <ListAdmin columns={productColumns} />
                          </ProtectedRoute>
                        } />
                        <Route path=":productId" element={
                          <ProtectedRoute>
                            <SingleAdmin />
                          </ProtectedRoute>
                        } />
                        <Route
                          path="new"
                          element={
                            <ProtectedRoute>
                              <NewProduct />
                            </ProtectedRoute>
                          }
                        />
                      </Route>

                    {/***************************************************************/}
                    {/***************************************************************/}
                    {/************************ OTHERS ROUTE *************************/}
                    {/***************************************************************/}
                    {/***************************************************************/}

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
