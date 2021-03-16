import React, { Component } from 'react'
import '../style/info.css'

export default class Header extends Component {
    render() {
        return (
            <div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }
}