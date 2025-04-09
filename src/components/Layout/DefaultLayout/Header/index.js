import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FaTiktok } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const cx = classNames.bind(styles)

function Header() {
    return <header className = {cx('wrapper')}>
        <div className = {cx('inner')}>
            <div className={cx('logo')}>
                <FaTiktok />
                <span className={cx('name')}>Tiktok</span>
            </div>
            <div className={cx('search')}>
                <input placeholder='Search account and videos' spellCheck={false}/>
                <button className={cx('clear')}>
                    <IoIosCloseCircle />
                </button>
                <button className={cx('searchButton')}>
                    <IoSearch />
                </button>
                
            </div>
        </div>
    </header>
}

export default Header;