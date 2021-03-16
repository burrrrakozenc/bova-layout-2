import { Link } from "gatsby";
import { slide as Menu } from 'react-burger-menu'
import '../style/menuContent.css'
import React, { useEffect, useState, Component } from "react"
// import CheeseburgerMenu from 'cheeseburger-menu'
// import HamburgerMenu from 'react-hamburger-menu'
// import MenuContent from './menuContent'





//CLASS I KALDIR - FONKSIYONA CEVIR - FOOTER'A GELEN DATAYI GUNCELLE?





// const [small, setSmall] = useState(false);

// useEffect(() => {
//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () =>
//       setSmall(window.pageYOffset > 200)
//     );
//   }
// }, []);

// {small ? "small" : ""}


export default class Header extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;

    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                <img src={data.logo.file.url} alt="logo" />
              </Link>
            </div>
            <a
              className="responsive-language"
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px'
              }}
            >TR</a>
            <a
              className="responsive-language"
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px'
              }}
            >EN</a>
            <a
              className="responsive-logo header-fab-icon fab fa-facebook"
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="responsive-logo header-fab-icon fab fa-instagram"
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="responsive-logo header-fab-icon fa-inverse fab fa-youtube"
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <Menu right={true}>
              <ul>
                <li>
                  <Link to="/#home">Anasayfa</Link>
                </li>
                <li key="Blogs">
                  <Link to={`/#Blogs`}>Etkinlikler</Link>
                </li>
                <li key="Photos">
                  <Link to={`/#Photos`}>Galeri</Link>
                </li>
                <li key="Services">
                  <Link to={`/#Services`}>Guncel</Link>
                </li>
                <li key="Contact">
                  <Link to={`/#Contact`}>Iletisim</Link>
                </li>
                <li key="Work">
                  <Link to={`/info`}>Hakkimizda</Link>
                </li>
                <li key="Contact">
                  <Link to={`/#Contact`}>English</Link>
                </li>
              </ul>
            </Menu>
            {/* <div className="responsive-menu">
              <CheeseburgerMenu
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}>
                <MenuContent closeCallback={this.closeMenu.bind(this)} />
              </CheeseburgerMenu>

              <HamburgerMenu
                isOpen={this.state.menuOpen}
                menuClicked={this.openMenu.bind(this)}
                width={32}
                height={24}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
              />
            </div> */}
            {/* <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            <div className="menu">
              <ul
                onClick={() => {
                  this.setState({
                    menu: false
                  });
                }}
              >
                <li>
                  <Link to="/#home">Anasayfa</Link>
                </li>
                <li key="Blogs">
                  <Link to={`/#Blogs`}>Etkinlikler</Link>
                </li>
                <li key="Photos">
                  <Link to={`/#Photos`}>Galeri</Link>
                </li>
                <li key="Contact">
                  <Link to={`/#Contact`}>Iletisim</Link>
                </li>
                <li key="Work">
                  <Link to={`/#About`}>Hakkimizda</Link>
                </li>
                <li key="Contact">
                  <Link to={`/#Contact`}>English</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}
