"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var constantRoutes_json_1 = require("./constantRoutes.json");
var LandingPage_1 = require("../pages/LandingPage");
var LoginPage_1 = require("../pages/LoginPage");
var RegisterPage_1 = require("../pages/RegisterPage");
var HospitalDetail_1 = require("../pages/HospitalDetail");
var PrivateRoute_1 = require("./PrivateRoute");
var DashboardPatient_1 = require("../pages/DashboardPatient");
var DashboardDoctor_1 = require("../pages/DashboardDoctor");
var DashboardAdmin_1 = require("../pages/DashboardAdmin");
var AddDoctorPersonal_1 = require("../pages/DashboardAdmin/components/AddDoctorPersonal");
var RegisterAdminPage_1 = require("../pages/RegisterHospitalAndAdmin/RegisterAdminPage");
var RegisterHospitalPage_1 = require("../pages/RegisterHospitalAndAdmin/RegisterHospitalPage");
var context_1 = require("../pages/RegisterHospitalAndAdmin/context/context");
var Routes = function () {
    return (React.createElement(context_1["default"], null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                React.createElement(LandingPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: constantRoutes_json_1["default"].LOGIN },
                React.createElement(LoginPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: constantRoutes_json_1["default"].REGISTER },
                React.createElement(RegisterPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: constantRoutes_json_1["default"].REGISTER_HOSPITAL, exact: true },
                React.createElement(RegisterHospitalPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: constantRoutes_json_1["default"].REGISTER_ADMIN, exact: true },
                React.createElement(RegisterAdminPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: constantRoutes_json_1["default"].HOSPITALS + "/:id" },
                React.createElement(HospitalDetail_1["default"], null)),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].PATIENT, exact: true },
                React.createElement(DashboardPatient_1["default"], { content: "CheckupsList" })),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].PATIENT_CHECKUPS + "/:id" },
                React.createElement(DashboardPatient_1["default"], { content: "CheckupDetail" })),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].DOCTOR, exact: true },
                React.createElement(DashboardDoctor_1["default"], { content: "CheckupsList" })),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].DOCTOR_NEW_CHECKUP },
                React.createElement(DashboardDoctor_1["default"], { content: "AddCheckup" })),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].DOCTOR_CHECKUPS + "/:id" },
                React.createElement(DashboardDoctor_1["default"], { content: "CheckupDetail" })),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].ADMIN },
                React.createElement(DashboardAdmin_1["default"], { content: "ManageHospital" })),
            React.createElement(PrivateRoute_1["default"], { path: constantRoutes_json_1["default"].ADD_PERSONAL_DOCTOR },
                React.createElement(AddDoctorPersonal_1["default"], null)))));
};
exports["default"] = Routes;
