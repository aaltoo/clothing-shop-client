import React, {useState} from "react";
import styles from './Searchbar.module.css'
import {Redirect} from "react-router-dom";

const Searchbar = (props) => {
    let checkKey = (e) => {
        if (e.key === 'Enter' && props.searchField) {
            props.toggleIsRedirecting(true)
        }
    }

    let onSearchFieldChange = (e) => {
        props.onSearchFieldChange(e.target.value)
    }

    return (
        <div>
            <div className={props.isSearchbarToggled ? styles.active : styles.hidden}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="SEARCH PRODUCTS"
                    onChange={onSearchFieldChange}
                    value={props.searchField}
                    onKeyUp={checkKey}
                />
                {props.isRedirecting && <Redirect to={'/search/' + props.searchField}/>}
            </div>
        </div>
    )
}

export default Searchbar