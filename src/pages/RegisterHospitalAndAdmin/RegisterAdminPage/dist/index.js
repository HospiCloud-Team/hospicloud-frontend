"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var LandingLayout_1 = require("../../../layout/LandingLayout");
var RegisterAndLoginLayout_1 = require("../../../layout/RegisterAndLoginLayout");
var HospiCloudLogo_svg_1 = require("../../../resources/HospiCloudLogo.svg");
var index_1 = require("../../../api/users/index");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var document_type_json_1 = require("./document-type.json");
var context_1 = require("../context/context");
var utilities_1 = require("../../../api/utilities");
var react_bootstrap_1 = require("react-bootstrap");
var index_2 = require("../components/confirmationModal/index");
var react_router_1 = require("react-router");
var constantRoutes_json_1 = require("../../../router/constantRoutes.json");
var RegisterAdmin = function () {
    var hospitalData = react_1.useContext(context_1.HospitalContext).hospitalData;
    var _a = react_1.useState(false), isShowModal = _a[0], setIsShowModal = _a[1];
    var history = react_router_1.useHistory();
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            document_type: "",
            name: "",
            last_name: "",
            email: "",
            document_number: "",
            date_of_birth: new Date(),
            admin: {
                hospital_id: 0
            }
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, reset = _b.reset;
    var showModal = function () {
        setIsShowModal(true);
    };
    var updateModal = function (state) {
        setIsShowModal(state);
    };
    react_1.useEffect(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // This would be a GET call to an endpoint
                reset({
                    document_type: "Tipo de Documento"
                });
                return [2 /*return*/];
            });
        }); };
        fetchData();
    }, [reset]);
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var newHospitalData_1;
        return __generator(this, function (_a) {
            try {
                if (hospitalData) {
                    utilities_1.registerHospital(hospitalData)
                        .then(function (res) {
                        newHospitalData_1 = res.data;
                    })["catch"](function (error) {
                        if (error.response) {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        }
                    })
                        .then(function () {
                        var adminData = __assign(__assign({ user_role: "admin" }, data), { admin: {
                                hospital_id: newHospitalData_1.id
                            } });
                        index_1.registerAdmin(adminData).then(function () {
                            setIsShowModal(false);
                            history.push(constantRoutes_json_1["default"].LOGIN);
                        });
                    });
                }
            }
            catch (err) {
                console.log(err);
            }
            return [2 /*return*/];
        });
    }); };
    return (React.createElement(LandingLayout_1["default"], null,
        React.createElement(RegisterAndLoginLayout_1.MultiBg, null,
            React.createElement(RegisterAndLoginLayout_1.FixedBox, { width: "55", height: "35" },
                React.createElement("form", { id: "hook-form", className: "d-flex flex-row my-auto w-100 justify-content-between", onSubmit: handleSubmit(onSubmit) },
                    React.createElement("div", { className: "d-flex flex-column justify-content-center w-75" },
                        React.createElement(RegisterAndLoginLayout_1.Icon, { className: "mx-auto", src: HospiCloudLogo_svg_1["default"], alt: "Logo" })),
                    React.createElement("div", { className: "d-flex flex-column w-100" },
                        React.createElement("div", { className: "d-flex flex-row h-100 align-items-center m-2 pt-5" },
                            React.createElement("form", { className: "d-flex flex-column w-100 pe-3" },
                                React.createElement(RegisterAndLoginLayout_1.LoginTitle, null, "Register Admin"),
                                React.createElement("div", { className: "d-flex flex-row w-100" },
                                    React.createElement("div", { className: "form-group d-flex justify-content-start mb-2 me-1 w-50" },
                                        React.createElement("input", __assign({ type: "text", className: "form-control", placeholder: "Nombre" }, register("name", { required: true })))),
                                    React.createElement("div", { className: "form-group d-flex justify-content-start mb-2 w-50" },
                                        React.createElement("input", __assign({ type: "text", className: "form-control", placeholder: "Apellido" }, register("last_name", { required: true }))))),
                                React.createElement("div", { className: "form-group d-flex justify-content-start mb-2" },
                                    React.createElement("input", __assign({ type: "email", className: "form-control", placeholder: "Correo Electr\u00F3nico" }, register("email", { required: true })))),
                                React.createElement("div", { className: "d-flex flex-row w-100" },
                                    React.createElement("select", __assign({ className: "form-select d-flex justify-content-start mb-2 me-1 w-50" }, register("document_type", { required: true })), document_type_json_1["default"].map(function (option) { return (React.createElement("option", { key: option.id, value: option.id, disabled: option.isDisabled }, option.value)); })),
                                    React.createElement("div", { className: "form-group d-flex justify-content-start mb-2 w-50" },
                                        React.createElement("input", __assign({ type: "text", className: "form-control", placeholder: "N\u00FAmero de documento" }, register("document_number", { required: true }))))),
                                React.createElement("div", { className: "form-group d-flex justify-content-start mb-2" },
                                    React.createElement("input", __assign({ type: "date", className: "form-control" }, register("date_of_birth", { required: true })))),
                                React.createElement("div", { className: "form-group d-flex justify-content-end mb-3" },
                                    React.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: showModal }, "Registrar"))))),
                    isShowModal && (React.createElement(index_2.ConfirmationModal, { state: isShowModal, title: "Confirmaci\u00F3n", content: "Estas seguro de registrar su Hospital y el respectivo administrador?", button1Text: "Cancelar", button2Text: "Confirmar", handleShow: updateModal })))))));
};
exports["default"] = RegisterAdmin;
