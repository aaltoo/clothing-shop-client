import styles from './NavbarMobile.module.scss'
import NavIcon from '../../assets/icons/menu.svg'
import LogoIcon from '../../assets/icons/logo.png'
import SearchIcon from '../../assets/icons/search.svg'
import CartIcon from '../../assets/icons/shopping-cart.svg'
import CloseIcon from '../../assets/icons/close.svg'
import {NavLink} from "react-router-dom";
import React, { MouseEventHandler } from "react";

interface Props {
    toggleSearchbar: MouseEventHandler<HTMLSpanElement>;
    isSearchbarToggled: boolean;
    cartSize: number;
}

const NavbarMobile: React.FC<Props> = (props) => {

    return (
        <>
            <nav className={styles.navMobile}>
                <div className={styles.dropdown}>
                    <button className={styles.dropBtn}>
                        <img src={NavIcon} className={styles.navIcon} alt="nav-icon"/>
                    </button>
                    <div className={styles.dropdownContent}>
                        <NavLink to='/'>NEW ITEMS</NavLink>
                        <NavLink to='/search/men'>MEN</NavLink>
                        <NavLink to='/search/women'>WOMEN</NavLink>
                        <NavLink to='/'>SALE</NavLink>
                    </div>
                </div>
                <NavLink to='/' className={styles.logoWrapper}>
                    <img src={LogoIcon} className={styles.logo} alt="logo-icon"/>
                </NavLink>
                <div className={styles.functionalityGroup}>
                    <div className={styles.searchWrapper} onClick={props.toggleSearchbar}>
                        <img src={props.isSearchbarToggled ? CloseIcon : SearchIcon} alt="search-icon"/>
                    </div>
                    <NavLink to='/cart' className={styles.cartWrapper}>
                        <img src={CartIcon} alt="cart-icon"/>
                        <p>{props.cartSize}</p>
                    </NavLink>
                </div>
            </nav>

        </>
    )
}

export default NavbarMobile