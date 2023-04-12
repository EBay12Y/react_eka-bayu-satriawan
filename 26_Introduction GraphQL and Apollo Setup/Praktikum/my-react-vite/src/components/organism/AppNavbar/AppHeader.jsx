import React from 'react'

const AppHeader = () => {
  return (
    <div className='mb-5'>
      <nav className='navbar navbar-expand-lg shadow fixed-top bg-dark'>
          <div className='container-fluid mx-3'>
            <a className='navbar-brand text-white' href='#tes'>
              EBayProject
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a
                    className='nav-link active bg-primary text-white px-3 mx-2'
                    aria-current='page'
                    href='#tes'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white px-3 mx-2' href='#tes'>
                    Features
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white px-3 mx-2' href='#tes'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white px-3 mx-2' href='#tes'>
                    FAQs
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white px-3 mx-2' href='#tes'>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default AppHeader