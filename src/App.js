import './App.scss';
import React, {Suspense, lazy} from "react";
import {Route} from 'react-router-dom'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import SearchbarContainer from "./components/Navbar/Searchbar/SearchbarContainer";
const SearchPageContainer = lazy(() => import("./components/SearchPage/SearchPageContainer"));
const HomePageContainer = lazy(() => import("./components/HomePage/HomePageContainer"));
const ItemPageContainer = lazy(() => import("./components/ItemPage/ItemPageContainer"));
const LoginPageContainer = lazy(() => import("./components/LoginPage/LoginPageContainer"));
const AdminPageContainer = lazy(() => import("./components/AdminPage/AdminPageContainer"));
const CartPageContainer = lazy(() => import("./components/CartPage/CartPageContainer"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<Preloader />}>
            <Route path="/"
                   render={ () => <NavbarContainer /> }/>
            <Route path="/"
                   render={ () => <SearchbarContainer />}/>
        </Suspense>
        <Suspense fallback={<Preloader />}>
            <Route exact path="/"
                   render={ () => <HomePageContainer /> }/>
            <Route path="/search/:string?"
                   render={ () => <SearchPageContainer /> }/>
            <Route path="/items/:itemId?"
                   render={ () => <ItemPageContainer /> }/>
            <Route path="/cart"
                   render={ () => <CartPageContainer /> }/>
            <Route path="/login"
                   render={ () => <LoginPageContainer /> }/>
            <Route path="/admin"
                   render={ () => <AdminPageContainer/> }/>
        </Suspense>
        <Suspense fallback={<Preloader />}>
            <Route path="/"
                   render={ () => <Footer/> }/>
        </Suspense>
    </div>
  );
}

export default App;
