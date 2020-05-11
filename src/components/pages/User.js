import React from 'react';

function User() {
    return (
        <main className="content">
            <div className="container-fluid">
                <div className="header">
                    <h1 className="header-title">
                        Settings
                    </h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="dashboard-default.html">Dashboard</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Settings</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xl-12">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="account" role="tabpanel">

                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-actions float-right">
                                            <a href="#" className="mr-1">
                                                <i className="align-middle" data-feather="refresh-cw"></i>
                                            </a>
                                            <div className="d-inline-block dropdown show">
                                                <a href="#" data-toggle="dropdown" data-display="static">
                                                    <i className="align-middle" data-feather="more-vertical"></i>
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="card-title mb-0">Private info</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label for="txt-first-name">First name</label>
                                                    <input type="text" className="form-control" id="txt-first-name" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="txt-last-name">Last name</label>
                                                    <input type="text" className="form-control" id="txt-last-name" />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label for="txt-email">Email</label>
                                                    <input type="email" className="form-control" id="txt-email" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label for="txt-occupation">Occupation</label>
                                                    <input type="text" className="form-control" id="txt-occupation" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="txt-address">Address</label>
                                                <input type="text" className="form-control" id="txt-address" />
                                            </div>
                                            <div className="form-group">
                                                <label for="txt-address2">Address 2</label>
                                                <input type="text" className="form-control" id="txt-address2" />
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label for="txt-city">City</label>
                                                    <input type="text" className="form-control" id="txt-city" />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label for="txt-country">Country</label>
                                                    <select id="txt-country" className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label for="txt-state">State</label>
                                                    <select id="txt-state" className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group col-md-4">
                                                    <label for="txt-phone">Phone</label>
                                                    <input type="text" className="form-control" id="txt-phone" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label for="txt-mobile">Mobile</label>
                                                    <input type="text" className="form-control" id="txt-mobile" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                            {/* <button type="submit" className="btn btn-light action-btn">Update</button>
                                            <button type="submit" className="btn btn-light action-btn">Print</button> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default User;