import Link from "next/link";
import { Footer as StyledFooter } from "./styled";

function Footer() {
    return (
        <StyledFooter className="footer">
            <div className="container flex footer-wrapper">
                <div>
                    <Link href="./index.html" className="logo__footer logo">
                        <span className="accent">Прапори</span>
                        <span className="second-part"> & Символи</span>
                    </Link>
                    <address className="address">
                        <p className="address-margin">м. Київ, вул. Галаганівська, 3</p>
                        <ul className="list">
                            <li className="address-margin">
                            <Link href="mailto:pp_danilov@ukr.net" className="button">pp_danilov@ukr.net</Link>
                            </li>
                            <li><Link href="tel:+380667700520" className="button">+380 66 770 05 20</Link></li>
                        </ul>
                    </address>
                </div>
            
                <div className="invite">
                    <p className="invite__text">Долучайтесь до наших <span className="accent">каналів</span></p>
                    <ul className="social__list list">
                    <li className="social__item">
                        <Link href="" className="social__footer-link">
                        <svg className="social__footer-icon" width="20" height="20">
                            <use href="./images/icons.svg#icon-send"></use>
                        </svg>
            
                        </Link>
                    </li>
                    <li className="social__item">
                        <Link href="" className="social__footer-link">
                        <svg className="social__footer-icon" width="20" height="20">
                            <use href="./images/icons.svg#icon-facebook"></use>
                        </svg>
                        </Link>
                    </li>
                    <li className="social__item">
                        <Link href="" className="social__footer-link">
                        <svg className="social__footer-icon" width="20" height="20">
                            <use href="./images/icons.svg#icon-instagram"></use>
                        </svg>
                        </Link>
                    </li>
                    <li className="social__item">
                        <Link href="" className="social__footer-link">
                        <svg className="social__footer-icon" width="20" height="20">
                            <use href="./images/icons.svg#icon-pinterest"></use>
                        </svg>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    )
}
    
    export default Footer
