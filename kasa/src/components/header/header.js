import React from 'react'
import { NavLink } from 'react-router-dom'
import logoRed from '../../assets/logo/logo_kasa_red.svg'
import './header.css'

/**
 * Affiche le Header à toutes les pages
 * Ajoute une classe CSS "underline" au bouton de navigation qui correspond à la page affichée
 * @component - Header
 */

export default function Header() {
    return (
        <header className='header'>
            <img className='header-logo' src={logoRed} alt="logo Kasa"></img>
               <nav className='header-nav'>
                    <NavLink className={() => window.location.pathname === "/" ?"header-nav-underline" : null} to='/'>Accueil</NavLink>
                    <NavLink className={() => window.location.pathname === "/about" ? "header-nav-underline" : null}  to='/about'>A propos</NavLink>
               </nav>
        </header>
    )
}
