"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sendMail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.tsx

function sendMail(req, res) {
    const transporter = external_nodemailer_default().createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });
    const ToHostMail = {
        from: req.body.email,
        to: "xj665488@gmail.com",
        subject: `[お問い合わせ]${req.body.name} 様より`,
        text: `${req.body.message} Send form ${req.body.email}`,
        html: `
        <p>[お名前]</p>
        <p>${req.body.name}</p>
        <p>[内容]</p>
        <p>${req.body.message}</p>
        <p>[メールアドレス]</p>
        <p>${req.body.email}</p>
    `
    };
    transporter.sendMail(ToHostMail, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    return res.send("成功");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(198));
module.exports = __webpack_exports__;

})();