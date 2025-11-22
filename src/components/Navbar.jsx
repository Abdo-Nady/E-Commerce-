import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalCount } from '../store/slices/cartSelectors';
import { useLanguage } from '../context/LanguageContext.jsx';
import ContactUs from '../pages/ContactUs.jsx';

const Navbar = () => {
    const cartCount = useSelector(selectCartTotalCount);
    const { language, changeLanguage, isRTL } = useLanguage();

    const translations = {
        en: {
            brand: 'My Super duper Store',
            home: 'Home',
            signIn: 'Sign In',
            signUp: 'Sign Up',
            cart: 'Cart',
            contactus: 'Contact Us'
        },
        ar: {
            brand: 'متجري الجامد جداً',
            home: 'الرئيسية',
            signIn: 'تسجيل الدخول',
            signUp: 'إنشاء حساب',
            cart: 'السلة',
            contactus: 'تواصل معنا'
        }
    };

    const t = translations[language];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    {t.brand}
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ${isRTL ? 'me-auto' : 'ms-auto'}`}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-house me-1"></i>
                                {t.home}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">
                                <i className="bi bi-box-arrow-in-right me-1"></i>
                                {t.signIn}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                <i className="bi bi-person-plus me-1"></i>
                                {t.signUp}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/cart">
                                <i className="bi bi-cart3 me-1"></i>
                                {t.cart}
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/contact">
                                <i className="bi bi-cart3 me-1"></i>
                                {t.contactus}
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </li>


                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link text-decoration-none"
                                onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
                                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                            >
                                <i className="bi bi-translate me-1"></i>
                                {language === 'en' ? 'العربية' : 'English'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;