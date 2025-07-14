import Link from "next/link";
import { StyledLink, StyledHeader } from "./styled"; 

function Header() {
    return (
        <StyledHeader>
            <div className="container flex">
            <nav className="nav flex">
                <Link href="./index.html" className="logo__header logo">
                <span className="accent">Прапори </span>& Символи
                </Link>
                <ul className="site-nav list">
                <li><Link href="./index.html" className="link current">Про нас</Link></li>
                <li><Link href="./portfolio.html" className="link">Портфоліо</Link></li>

                {/* <!-- dropdown --> */}
                <li>
                    <div className="dropdown">
                    <Link href="./shop.html" className="link">Магазин</Link>
                    <div className="dropdown__content">
                        <div className="dropdown-section">
                        <div className="dropdown-section__content">
                            <Link href="./products/flags/ukraine.html" className="link">України</Link>
                            <Link href="./products/flags/state.html" className="link">Державні</Link>
                            <Link href="./products/flags/corporate.html" className="link">Корпоративні</Link>
                        </div>
                        <Link href="./products/flags.html" className="link">Прапори</Link>
                        </div>
                        <div className="dropdown-section">
                        <div className="dropdown-section__content">
                            <Link href="./products/flagpoles/street.html" className="link">Вуличні</Link>
                            <Link href="./products/flagpoles/cabinet.html" className="link">Кабінетні</Link>
                            <Link href="./products/flagpoles/mobile.html" className="link">Мобільні</Link>
                            <Link href="./products/flagpoles/facade.html" className="link">Фасадні</Link>
                            <Link href="./products/flagpoles/desktop.html" className="link">Настільні</Link>
                            <Link href="./products/flagpoles/automobile.html" className="link">Автомобільні</Link>
                        </div>
                        <Link href="./products/flagpoles.html" className="link">Флагштоки</Link>
                        </div>
                        <Link href="./products/symbolics.html" className="link">Символіка</Link>
                        <div className="dropdown-section">
                        <div className="dropdown-section__content">
                            <Link href="./products/infostands/a4stands.html" className="link">Стійки А4</Link>
                            <Link href="./products/infostands/bookletcases.html" className="link">Буклетниці</Link>
                            <Link href="./products/infostands/brandwalls.html" className="link">Брендволи</Link>
                            <Link href="./products/infostands/rollups.html" className="link">Ролл-апи</Link>
                            <Link href="./products/infostands/perfostands.html" className="link">Перфостенди</Link>
                        </div>
                        <Link href="./products/infostands.html" className="link">Інфостенди</Link>
                        </div>

                        <Link href="./products/fences.html" className="link">Мобільні огорожі</Link>
                        <Link href="./products/accessories.html" className="link">Аксесуари</Link>
                        <Link href="./products/exclusive.html" className="link">Ексклюзив</Link>
                    </div>
                    </div>
                </li>
                <li>
                    <Link href="./wishList.html" className="link"><svg width="24" height="24" className="wishlist-icon">
                        <use href="./images/icons.svg#icon-heart"></use>
                    </svg></Link>
                    <Link href="./cart.html" className="link">
                    <svg width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-cart"></use>
                    </svg></Link>
                </li>
                </ul>
            </nav>

            <ul className="auth-nav list">
                <li><Link href="tel:+380667700520" className="button">+380 66 770 05 20</Link></li>
                <li><Link href="mailto:pp_danilov@ukr.net" className="button">pp_danilov@ukr.net</Link></li>
            </ul>

            {/* <!-- burger  --> */}

            <button className="burger-btn" data-menu-open>
                <svg className="burger-btn__icon">
                <use href="./images/icons.svg#icon-burger"></use>
                </svg>
            </button>
            </div>

            {/* <!-- burger modal window --> */}

            <div className="mobile-menu" data-menu>
            <div className="mobile-menu__container">
                <button className="mobile-menu__close-btn" data-menu-close>
                <svg className="mobile-menu__close-icon">
                    <use href="./images/icons.svg#icon-close"></use>
                </svg>
                </button>
                <ul className="nav-list list">
                <li className="nav-list__item">
                    <StyledLink href="./index.html" className="link">
                    <svg width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-aboutus"></use>
                    </svg>Про нас</StyledLink>
                </li>
                <li className="nav-list__item">
                    <StyledLink href="./portfolio.html" className="link">
                    <svg width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-portfolio"></use>
                    </svg>Портфоліо</StyledLink>
                </li>
                <li className="nav-list__item">
                    <StyledLink href="./shop.html" className="link">
                    <svg width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-shop"></use>
                    </svg>Магазин</StyledLink>
                </li>
                <li className="nav-list__item">
                    <StyledLink href="./wishList.html" className="link">
                    <svg width="24" height="24" className="wishlist-icon">
                        <use href="./images/icons.svg#icon-heart"></use>
                    </svg>Обрані</StyledLink>
                </li>
                <li className="nav-list__item">
                    <StyledLink href="./cart.html" className="link">
                    <svg width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-cart"></use>
                    </svg>Корзина</StyledLink>
                </li>
                <li className="nav-list__item">
                    <StyledLink className="link" href="tel:+380667700520">
                    <svg width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-telephone"></use>
                    </svg>+380 66 770 05 20</StyledLink>

                </li>
                <li className="nav-list__item">

                    <StyledLink href="mailto:pp_danilov@ukr.net" className="link"><svg
                        width="24" height="24" className="nav-icons">
                        <use href="./images/icons.svg#icon-email"></use>
                    </svg>pp_danilov@ukr.net</StyledLink>
                </li>
                </ul>
                <ul className="mobile-social-list list">
                <li className="mobile-social-list__item">
                    <Link href="" className="mobile-social-list__link link">Telegram</Link>
                </li>
                <li className="mobile-social-list__item">
                    <Link href="" className="mobile-social-list__link link">Facebook</Link>
                </li>
                <li className="mobile-social-list__item">
                    <Link href="" className="mobile-social-list__link link">Instagram</Link>
                </li>
                <li className="mobile-social-list__item">
                    <Link href="" className="mobile-social-list__link link">Pinterest</Link>
                </li>
                </ul>
            </div>
            </div>
        </StyledHeader>
    )
}
export default Header
