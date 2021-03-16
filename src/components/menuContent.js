import React, { Component } from 'react'
import {Link} from 'gatsby'

import '../style/menuContent.css'

class MenuContent extends Component {


    render() {
        return (
            <div className="menu">
                {/* <div className="menu-item">
                    <a
                        href="https://github.com/Middlerun/cheeseburger-menu"
                        onClick={this.props.closeCallback}
                        target="_blank">
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
                    </a>
                </div> */}

                <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
            </div>
        )
    }
}

MenuContent.PropTypes = {
    closeCallback: React.PropTypes.func.isRequired
}

export default MenuContent
