import './App.scss'
import "./assets/styles/reset.scss";
import "./assets/icons/style.css";
import {
  logo,
  polygon,
  yellowPolygon,
  circumference,
  square,
  polygonThin,
  strongGirl,
  strongGirlMobile,
  fitGirl,
  fitGirlMobile,
  weight,
  pulse,
  gloves,
  relaxingBoy,
  relaxingBoyMobile,
  standingGirl,
  standingGirlMobile,
  gymGirl,
  gymGirlMobile,
  gymBoy,
  gymBoyMobile,
  call,
  email,
  location,
} from "./assets/images/images";




import { useState } from 'react';
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  }


  return (
    <>
      <div className='wrapper'>
        <header className='header'>
          <div className='header-container'>
            <a href="#" className='header-logo-link'><img src={logo} alt="logo" className='logo' /></a>
            <nav className='header-navigation'>
              <ul className='nav-list'>
                <li className="nav-list-item"><a href="#home" className={`nav-list-link ${activeLink === "home" ? "active-header" : ""}`} onClick={() => setActiveLink("home")}>Home</a></li>
                <li className="nav-list-item"><a href="#about" className={`nav-list-link ${activeLink === "about" ? "active-header" : ""}`} onClick={() => setActiveLink("about")}>About</a></li>
                <li className="nav-list-item"><a href="#services" className={`nav-list-link ${activeLink === "services" ? "active-header" : ""}`} onClick={() => setActiveLink("services")}>Services</a></li>
                <li className="nav-list-item"><a href="#contacts" className={`nav-list-link ${activeLink === "contacts" ? "active-header" : ""}`} onClick={() => setActiveLink("services")}>Contacts</a></li>
              </ul>
            </nav>
            <button type='button' className='burger-btn' onClick={() => setMenuOpen(true)}>
              <i class="icon-Burger_Button burger-icon"></i>
            </button>
          </div>
        </header>
        <main className='content'>
          <section className='hero' id="home">
            <div className='hero-container'>
              <div className='hero-content'>
                <h1 className='hero-title'>push <span className='highlight'>yourself</span></h1>
                <p className='hero-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
              <img src={polygon} alt="shape polygon" className='shape shape-polygon-top' />
              <img src={polygon} alt="shape polygon" className='shape shape-polygon-middle' />
              <img src={polygonThin} alt="shape polygon" className='shape shape-polygon-bottom' />
              <img src={circumference} alt="shape circumference" className='shape shape-circumference' />
              <img src={square} alt="shape square" className='shape shape-square' />
              <span className='shape-circle shape-circle-one'></span>
              <span className='shape-circle shape-circle-two'></span>
              <span className='shape-circle shape-circle-three'></span>
              <span className='shape-circle shape-circle-four'></span>
            </div>
          </section>
          <section className='welcome-to-fitpulse' id="about">
            <div className='welcome-to-fitpulse-container'>
              <h2 className='fitpulse-section-title welcome-to-fitpulse-title'>Welcome To<span className='highlight'>fitpulse</span></h2>
              <div className='welcome-to-fitpulse-info'>
                <div className='welcome-to-fitpulse-images'>
                  {/* <picture className='pushing-girl-picture'> */}
                    {/* <source media="(max-width:480px)" srcset={strongGirlMobile} type='image/jpeg' /> */}
                    <img src={strongGirl} alt="pushing girl" className='pushing-girl-img' />
                  {/* </picture> */}
                  {/* <picture className='fit-girl-picture'> */}
                    {/* <source media="(max-width:480px)" srcset={fitGirlMobile} type='image/jpeg' /> */}
                    <img src={fitGirl} alt="fit girl" className='fit-girl-img' />
                  {/* </picture> */}
                </div>
                <div className='welcome-to-fitpulse-content'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

              </div>
              <img src={yellowPolygon} alt="shape yellow triangle" className='shape welcome-section-yellow-triangle' />
              <img src={polygon} alt="shape red triangle" className='shape welcome-section-red-triangle' />
              <span className='shape-circle welcome-shape-circle-one'></span>
              <span className='shape-circle welcome-shape-circle-two'></span>
            </div>
          </section>
          <section className='our-programs' id="services">
            <div className='our-programs-container'>
              <h2 className='fitpulse-section-title our-programs-title'>our<span className='highlight'>programs</span></h2>
              <ul className='our-programs-list'>
                <li className="our-programs-item">
                  <img src={weight} alt="weight" className='our-programs-item-img' />
                  <h3 className='subtitle our-programs-item-title'>group workouts</h3>
                  <p className='our-programs-item-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </li>
                <li className="our-programs-item">
                  <img src={pulse} alt="pulse" className="our-programs-item-img" />
                  <h3 className='subtitle our-programs-item-title'>personal trainer</h3>
                  <p className='our-programs-item-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </li>
                <li className="our-programs-item">
                  <img src={gloves} alt="gloves" className='our-programs-item-img' />
                  <h3 className='subtitle our-programs-item-title'>free workout</h3>
                  <p className='our-programs-item-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </li>
              </ul>
              <img src={polygon} alt="shape red triangle" className='shape our-programs-red-triangle' />
              <img src={square} alt="shape yellow square" className='shape our-programs-yellow-square' />
              <span className='shape-circle our-programs-circle-one'></span>
            </div>
          </section>
          <section className='our-trainers'>
            <div className='our-trainers-container'>
              <h2 className='fitpulse-section-title our-trainers-title'>our<span className='highlight'>trainers</span></h2>
              <ul className='our-trainers-list'>
                <li className="our-trainers-item">
                  <picture className='trainer-picture'>
                    <source media="(max-width:1024px)" srcset={relaxingBoy} type='image/jpeg' />
                    <img src={relaxingBoyMobile} alt="trainer photo" className='trainer-photo' />
                  </picture>
                  <div className='our-trainers-item-content'>
                    <h3 className='subtitle our-trainer-name'>Michelle Piters</h3>
                    <p className='specialization'>weightlifting</p>
                    <p className='about-trainer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='social-link-group'>
                      <a href="#" className="social-link">
                        <i class="icon-Component-53 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-x social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-Component-55 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-linkedin social-link-icon"></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="our-trainers-item">
                  <picture className='trainer-picture'>
                    <source media="(max-width:1024px)" srcset={standingGirl} type='image/jpeg' />
                    <img src={standingGirlMobile} alt="trainer photo" className='trainer-photo' />
                  </picture>
                  <div className='our-trainers-item-content'>
                    <h3 className='subtitle our-trainer-name'>Samanta Piters</h3>
                    <p className='specialization'>weightlifting</p>
                    <p className='about-trainer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='social-link-group'>
                      <a href="#" className="social-link">
                        <i class="icon-Component-53 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-x social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-Component-55 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-linkedin social-link-icon"></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="our-trainers-item">
                  <picture className='trainer-picture'>
                    <source media="(max-width:1024px)" srcset={gymGirl} type='image/jpeg' />
                    <img src={gymGirlMobile} alt="trainer photo" className='trainer-photo' />
                  </picture>
                  <div className='our-trainers-item-content'>
                    <h3 className='subtitle our-trainer-name'>Samanta Piters</h3>
                    <p className='specialization'>weightlifting</p>
                    <p className='about-trainer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='social-link-group'>
                      <a href="#" className="social-link">
                        <i class="icon-Component-53 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-x social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-Component-55 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-linkedin social-link-icon"></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="our-trainers-item">
                  <picture className='trainer-picture'>
                    <source media="(max-width:1024px)" srcset={gymBoy} type='image/jpeg' />
                    <img src={gymBoyMobile} alt="trainer photo" className='trainer-photo' />
                  </picture>
                  <div className='our-trainers-item-content'>
                    <h3 className='subtitle our-trainer-name'>Michelle Piters</h3>
                    <p className='specialization'>weightlifting</p>
                    <p className='about-trainer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='social-link-group'>
                      <a href="#" className="social-link">
                        <i class="icon-Component-53 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-x social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-Component-55 social-link-icon"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i class="icon-linkedin social-link-icon"></i>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <img src={polygon} alt="shape red triangle" className='shape our-trainers-red-triangle' />
              <img src={circumference} alt="shape yellow circumference" className='shape our-trainers-circumference' />
              <span className='shape-circle our-trainers-circle-one'></span>
            </div>
          </section>
          <section className='contact-us' id="contacts">
            <div className='contact-us-container'>
              <h2 className='fitpulse-section-title contact-us-title'>contact <span className='highlight'>us</span></h2>
              <div className='contact-us-content'>
                <ul className='contact-list'>
                  <li className="contact-list-item">
                    <div className='contact-list-item-purpose'>
                      <img src={call} alt='phone number' className='purpose-img' />
                      <p className='purpose'>need help?</p>
                    </div>
                    <div className='contact-info-group'>
                      <p className='contact-info'>+374 123 456 66</p>
                      <p className='contact-info'>+374 123 456 66</p>
                    </div>
                  </li>
                  <li className="contact-list-item">
                    <div className='contact-list-item-purpose'>
                      <img src={email} alt='email' className='purpose-img' />
                      <p className='purpose'>email</p>
                    </div>
                    <div className='contact-info-group'>
                      <p className='contact-info'>Fitness@gmail.com</p>
                      <p className='contact-info'>Team@gmail.com</p>
                    </div>
                  </li>
                  <li className="contact-list-item">
                    <div className='contact-list-item-purpose'>
                      <img src={location} alt='email' className='purpose-img' />
                      <p className='purpose'>address</p>
                    </div>
                    <div className='contact-info-group'>
                      <p className='contact-info'>Street Lorem Ipsum</p>
                      <p className='contact-info'>Yerevan, Armenia</p>
                    </div>
                  </li>
                </ul>
                <form className='contact-form' action="#" method='post'>
                  <label for="firstName" class="form-label">
                    <input type='text' id="firstName" className="contact-form-input" name="firstName" placeholder='First Name *' required />
                    <span id="requiredMessage" class="error-message">
                      Required Field
                    </span>
                  </label>
                  <label for="lastName" class="form-label">
                    <input type='text' id="lastName" className="contact-form-input" name="lastName" placeholder='Last Name *' required />
                    <span id="requiredMessage" class="error-message">
                      Required Field
                    </span>
                  </label>
                  <label for="email" class="form-label">
                    <input type='text' id="email" className="contact-form-input" name="email" placeholder='Email *' required />
                    <span id="requiredMessage" class="error-message">
                      Required Field
                    </span>
                  </label>
                  <label for="message" class="form-label-txt">
                    <textarea name="message" id="message" className="contact-form-textarea" placeholder='Message *' required></textarea>
                    <span id="requiredMessage" class="error-message">
                      Required Field
                    </span>
                  </label>
                  <button type='submit' className='submit-btn'>send message</button>
                </form>
              </div>
              <img src={polygon} alt="shape red triangle" className='shape contact-us-red-triangle' />
              <img src={square} alt="shape yellow circumference" className='shape contact-us-square' />
              <span className='shape-circle contact-us-circle-one'></span>
            </div>
          </section>
        </main>
        <footer className='footer'>
          <div className='footer-container'>
            <div className='footer-top'>
              <a href="#" className='footer-logo-link'><img src={logo} alt="logo" className='logo' /></a>
              <div className='footer-top-content'>
                <div className='footer-general-info'>
                  <p className='footer-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className='social-link-group'>
                    <a href="#" className="social-link">
                      <i class="icon-Component-53 social-link-icon"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i class="icon-x social-link-icon"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i class="icon-Component-55 social-link-icon"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i class="icon-linkedin social-link-icon"></i>
                    </a>
                  </div>
                </div>
                <div className='footer-information'>
                  <div className='footer-information-cell'>
                    <p className='footer-information-cell-title'>Company</p>
                    <ul className='footer-nav-list'>
                      <li className="footer-nav-item"><a href="#" className="footer-nav-link">Home</a></li>
                      <li className="footer-nav-item"><a href="#" className="footer-nav-link">About us</a></li>
                      <li className="footer-nav-item"><a href="#" className="footer-nav-link">Services</a></li>
                      <li className="footer-nav-item"><a href="#" className="footer-nav-link">Contacts</a></li>
                    </ul>
                  </div>
                  <div className="footer-information-cell">
                    <p className='footer-information-cell-title'>Contacts</p>
                    <ul className='footer-contact-list'>
                      <li className='footer-contact-item'>
                        <p className='footer-contact-item-title'>Phone:</p><a href='tel:+374 123 456 66' className='footer-contact-type'> +374 123 456 66</a>
                      </li>
                      <li className='footer-contact-item'>
                        <p className='footer-contact-item-title'>Email:</p><a href='mailto:Fitness@gmail.com' className='footer-contact-type'> Fitness@gmail.com</a>
                      </li>
                      <li className='footer-contact-item'>
                        <p className='footer-contact-item-title'>Location:</p><a href='http://www.StreetLoremIpsum.com/maps/search' className='footer-contact-type'> Street Lorem Ipsum</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-information-cell">
                    <p className='footer-information-cell-title'>Location</p>
                    <ul className='footer-contact-list'>
                      <li className='footer-contact-item'>
                        <p className='footer-contact-item-title'>Street:</p><a href='http://www.StreetLoremIpsum.com/maps/search' className='footer-contact-type'>Lorem Ipsum</a>
                      </li>
                      <li className='footer-contact-item'>
                        <p className='footer-contact-item-title'>Location:</p><a href='http://www.StreetLoremIpsum.com/maps/search' className='footer-contact-type'>Yerevan, Armenia</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className='footer-bottom'>
              <p className='copyrights'>&copy; Copyrights 2025. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
        <div className={`mobile-header-navigation ${menuOpen ? "open" : ""}`}>
          <div className='mobile-header-top'>
            <a href="#" className='header-logo-link'><img src={logo} alt="logo" className='logo' /></a>
            <button type='button' className='nav-close-btn' onClick={() => setMenuOpen(false)}><i class="icon-Vector nav-close-icon"></i></button>
          </div>
          <nav className='mobile-navigation'>
            <ul className='mobile-nav-list'>
              <li className="mobile-nav-list-item"><a href="#home" className={`mobile-nav-list-link ${activeLink === "home" ? "active-mobile" : ""}`} onClick={() => handleClick("home")}>Home</a></li>
              <li className="mobile-nav-list-item"><a href="#about" className={`mobile-nav-list-link ${activeLink === "about" ? "active-mobile" : ""}`} onClick={() => handleClick("about")}>About</a></li>
              <li className="mobile-nav-list-item"><a href="#services" className={`mobile-nav-list-link ${activeLink === "services" ? "active-mobile" : ""}`} onClick={() => handleClick("services")}>Services</a></li>
              <li className="mobile-nav-list-item"><a href="#contacts" className={`mobile-nav-list-link ${activeLink === "contacts" ? "active-mobile" : ""}`} onClick={() => handleClick("contacts")}>Contacts</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default App
