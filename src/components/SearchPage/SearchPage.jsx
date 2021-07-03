import styles from './SearchPage.module.css';
import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";

const SearchPage = (props) => {

    return (
        <>
            <div className={styles.searchPage}>
                <p>There are {props.items.length} matches</p>
                {
                    !props.isSearching
                    ? <Products {...props}/>
                    : <Preloader />
                }
            </div>
        </>
    )

}

export default SearchPage