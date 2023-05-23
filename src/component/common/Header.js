import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react'

const Header = () => {
  const [userArr, setUserArr] = useState(null)
  useEffect(()=>{
    getUserData();
  }, []);

  const getUserData=async()=> {
    let userToken = await localStorage.getItem("token");
   
    if (userToken!=null) {
      setUserArr(userToken)
    }
  }
  
  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('useriid');
    localStorage.removeItem("email");
       localStorage.removeItem("phone");
      //  localStorage.removeItem("otp",res.data.data.otp);
       localStorage.removeItem("password");
       localStorage.removeItem("fname");
       localStorage.removeItem("lname");
    setUserArr(null);
};

  return (
    <>
    
      <header className="header-2" style={{background: '#000c6a'}}>
        <div className="top-nav top-header sticky-header sticky-header-3" style={{background: '#000c6a'}}>
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <button className="navbar-toggler d-xl-none d-block p-0 me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                    <span className="navbar-toggler-icon">
                      <i className="iconly-Category icli theme-color" />
                    </span>
                  </button>
                  <Link to='/' className="web-logo nav-logo">
                    <img src="../assets/images/logo/logoblue.png" className="img-fluid blur-up lazyloaded" alt="" />
                  </Link>
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search font-light"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                      </span>
                      <input type="text" className="form-control search-type" placeholder="Search here.." />
                      <span className="input-group-text close-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x font-light"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                      </span>
                    </div>
                  </div>
                  {userArr != null ?
                    <div className="rightside-menu">
                      <div className="dropdown-dollar">
                        <div className="dropdown">
                         <p style={{color:'white'}}>{localStorage.getItem("fname")}</p>
                          <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>My Account</span> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down" style={{ color: 'white' }}><polyline points="6 9 12 15 18 9" /></svg>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                              <Link id="eng" className="dropdown-item" to="/user">My Profile</Link>
                            </li>
                            <li>
                              <Link id="hin" className="dropdown-item" to="/user">Orders</Link>
                            </li>
                            <li>
                            <Link id="guj" className="dropdown-item" to="/user">Coupons</Link>
                            </li>
                            <li>
                            <Link id="guj" className="dropdown-item" onClick={removeToken} to="/login">Logout</Link>
                            </li>
                          </ul>
                        </div>
                    
                      </div>
                      <div className="option-list">
                        <ul>
                     
                       
                          <li>
                            <Link to="/compare" className="header-icon">
                              <small className="badge-number">2</small>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                            </Link>
                          </li>
                          <li className="onhover-dropdown">
                            <Link to="/wishlist" className="header-icon bag-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            </Link>
                          </li>
                          <li className="onhover-dropdown">
                            <Link to="/cart" className="header-icon bag-icon">
                              <small className="badge-number">2</small>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </Link>
                            {/* <div className="onhover-div">
                              <ul className="cart-list">
                                <li>
                                  <div className="drop-cart">
                                    <a href="/product-left-thumbnail" className="drop-image">
                                      <img src="../assets/images/vegetable/product/1.png" className="blur-up lazyloaded" alt="" />
                                    </a>
                                    <div className="drop-contain">
                                      <a href="/product-left-thumbnail">
                                        <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                      </a>
                                      <h6><span>1 x</span> $80.58</h6>
                                      <button className="close-button">
                                        <i className="fa fa-xmark" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="drop-cart">
                                    <a href="/product-left-thumbnail" className="drop-image">
                                      <img src="../assets/images/vegetable/product/2.png" className="blur-up lazyloaded" alt="" />
                                    </a>
                                    <div className="drop-contain">
                                      <a href="/product-left-thumbnail">
                                        <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                        </h5>
                                      </a>
                                      <h6><span>1 x</span> $25.68</h6>
                                      <button className="close-button">
                                        <i className="fa fa-xmark" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="price-box">
                                <h5>Price :</h5>
                                <h4 className="theme-color fw-bold">$106.58</h4>
                              </div>
                              <div className="button-group">
                                <a href="/cart" className="btn btn-sm cart-button">View Cart</a>
                                <a href="/check-out" className="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                              </div>
                            </div> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    :
                    <div className="rightside-menu">
                    <div className="dropdown-dollar">
                      <div className="dropdown">
                        
                      <div className="option-list">
                        <ul>
                     
                       
                          <li>
                            <Link to="/compare" className="header-icon">
                              <small className="badge-number">2</small>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                            </Link>
                          </li>
                          <li className="onhover-dropdown">
                            <Link to="/wishlist" className="header-icon bag-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            </Link>
                          </li>
                          <li className="onhover-dropdown">
                            <Link to="/cart" className="header-icon bag-icon">
                              <small className="badge-number">2</small>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </Link>
                            {/* <div className="onhover-div">
                              <ul className="cart-list">
                                <li>
                                  <div className="drop-cart">
                                    <a href="/product-left-thumbnail" className="drop-image">
                                      <img src="../assets/images/vegetable/product/1.png" className="blur-up lazyloaded" alt="" />
                                    </a>
                                    <div className="drop-contain">
                                      <a href="/product-left-thumbnail">
                                        <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                      </a>
                                      <h6><span>1 x</span> $80.58</h6>
                                      <button className="close-button">
                                        <i className="fa fa-xmark" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="drop-cart">
                                    <a href="/product-left-thumbnail" className="drop-image">
                                      <img src="../assets/images/vegetable/product/2.png" className="blur-up lazyloaded" alt="" />
                                    </a>
                                    <div className="drop-contain">
                                      <a href="/product-left-thumbnail">
                                        <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                        </h5>
                                      </a>
                                      <h6><span>1 x</span> $25.68</h6>
                                      <button className="close-button">
                                        <i className="fa fa-xmark" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div className="price-box">
                                <h5>Price :</h5>
                                <h4 className="theme-color fw-bold">$106.58</h4>
                              </div>
                              <div className="button-group">
                                <a href="/cart" className="btn btn-sm cart-button">View Cart</a>
                                <a href="/check-out" className="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                              </div>
                            </div> */}
                          </li>
                          <li>
                            <Link to="/login" className="header-login">
                              <button className='btn btn-denger'>Login</button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      </div>
                  
                    </div>
                    
                  </div>
              }
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
