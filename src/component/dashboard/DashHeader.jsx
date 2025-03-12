import React from 'react';

const DashHeader = () => {
    return (
        <div className='dashboard-header-nav'>
            <nav className="navbar navbar-expand-lg dash-header p-1">

                <a className='navbar-brand ps-4 py-0 text-white' href="#">
                    <div style={{ fontSize: "27px" }} className='fs-3 fs-md-2 fs-sm-5'>DVDMS CENTRAL DASHBOARD</div>
                    <div style={{ fontSize: "15px" }} className="fs-6 fs-md-5 fs-sm-6">Ministry of Health and Family Welfare (Govt. of India)</div>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link text-white fs-15" href="#" id="menuDropdown" role="button" data-bs-toggle="dropdown">
                                <i className="fa fa-bars"></i> MENU
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                <li><a className="dropdown-item" href="#">Reports</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link text-white fs-15" href="#" id="stateLinksDropdown" role="button" data-bs-toggle="dropdown">
                                <i className="fa fa-external-link-alt"></i> STATE DVDMS LINKS
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">State 1</a></li>
                                <li><a className="dropdown-item" href="#">State 2</a></li>
                                <li><a className="dropdown-item" href="#">State 3</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link text-white" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown">
                                <i className="fa fa-user-circle"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default DashHeader;
