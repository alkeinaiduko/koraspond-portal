(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/Card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isBackground: {
      type: Boolean,
      "default": false
    },
    isAvatar: {
      type: Boolean,
      "default": false
    },
    image: String,
    person: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/common/Card */ "./resources/js/common/Card.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlide"],
    Card: _common_Card__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      collaborators: [{
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }, {
        name: 'Viakmaic Metrovik',
        job: 'Investor at Techos'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/common/Modal */ "./resources/js/common/Modal.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _common_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    show: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      labelPosition: "top",
      isLoggingIn: false,
      form: {
        username: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    formSubmit: function formSubmit() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // document.getElementById("login-form").submit();
                _this.isLoggingIn = true;
                params = {
                  'email': _this.form.username,
                  'password': _this.form.password
                };
                _context.prev = 2;
                _context.next = 5;
                return axios.post('/login', params);

              case 5:
                res = _context.sent;
                _this.isLoggingIn = false;
                location.replace('/home');
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                _this.error = _context.t0.response.data.error;
                _this.isLoggingIn = false;
                console.log(_this.error);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/NavBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/NavBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpModal */ "./resources/js/modules/homepage/components/SignUpModal.vue");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginModal */ "./resources/js/modules/homepage/components/LoginModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    signUp: _SignUpModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    LoginModal: _LoginModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      signUpModal: false,
      loginModal: false
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/common/Modal */ "./resources/js/common/Modal.vue");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var RequestErrors =
/*#__PURE__*/
function () {
  function RequestErrors() {
    _classCallCheck(this, RequestErrors);

    this.errors = {};
  }

  _createClass(RequestErrors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }]);

  return RequestErrors;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _common_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    show: {
      type: Boolean,
      required: false
    }
  },
  data: function data() {
    return {
      errors: new RequestErrors(),
      labelPosition: 'top',
      checked: true,
      isLoggingIn: false,
      error: null,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      form: {
        accountType: '1',
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        email: '',
        phone: '',
        termsAndConditions: false,
        newsLetter: false
      },
      flags: [{
        value: 'AE'
      }, {
        value: 'SA'
      }, {
        value: 'PH'
      }],
      selectCountry: 'AE',
      rules: {
        firstName: [{
          required: true,
          message: 'Please input First Name',
          trigger: 'blur'
        }],
        lastName: [{
          required: true,
          message: 'Please input Last Name',
          trigger: 'blur'
        }],
        country: [{
          required: true,
          message: 'Please input Country',
          trigger: 'blur'
        }],
        city: [{
          required: true,
          message: 'Please input City',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: 'Please input Address',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Please input Email Address',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Please input correct Email Address',
          trigger: ['blur', 'change']
        }]
      }
    };
  },
  computed: {
    showModal: {
      get: function get() {
        return this.show;
      },
      set: function set(value) {
        this.$emit('closeModal', value);
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    formSubmit: function formSubmit(name) {
      var _this = this;

      this.isLoggingIn = true;
      var signupData = {
        first_name: this.form.firstName,
        last_name: this.form.lastName,
        user_type_id: this.form.accountType,
        email: this.form.email,
        password: this.form.password,
        country: this.form.country,
        city: this.form.city,
        address: this.form.address,
        phone: this.form.phone,
        country_code: this.selectCountry
      };
      this.$refs[name].validate(function (valid) {
        if (valid) {
          axios.post('/signup', signupData).then(function (_ref) {
            var data = _ref.data;
            _this.isLoggingIn = false;
            location.href = '/home';
          })["catch"](function (_ref2) {
            var response = _ref2.response;

            _this.errors.record(response.data.errors);

            _this.$message.error(_this.errors.get("email"));

            _this.isLoggingIn = false;
          });
        } else {
          console.log('error submit!!');
          _this.isLoggingIn = false;
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/UserTypes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/UserTypes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userTypeBlock: 'Applicant',
      activeIndex: '1',
      userInfo: {
        name: 'Applicant',
        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
      },
      userTypes: [{
        name: 'Applicant',
        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
      }, {
        name: 'Investor',
        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
      }, {
        name: 'ISDB Secretariat',
        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
      }, {
        name: 'Govt Officials',
        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
      }]
    };
  },
  methods: {
    handleSelect: function handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.userTypeBlock = 'Applicant';
          this.userInfo = this.userTypes[0];
          break;

        case '2':
          this.userTypeBlock = 'Investor';
          this.userInfo = this.userTypes[1];
          break;

        case '3':
          this.userTypeBlock = 'ISDB Secretariat';
          this.userInfo = this.userTypes[2];
          break;

        case '4':
          this.userTypeBlock = 'Govt Officials';
          this.userInfo = this.userTypes[3];
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ "./resources/js/modules/homepage/components/NavBar.vue");
/* harmony import */ var _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ImageCarousel */ "./resources/js/modules/homepage/components/ImageCarousel.vue");
/* harmony import */ var _components_UserTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UserTypes */ "./resources/js/modules/homepage/components/UserTypes.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomePage',
  components: {
    NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    ImageCarousel: _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserTypes: _components_UserTypes__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".b-hero__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 574px) {\n.b-hero__container {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n}\n}\n.b-hero--left {\n  flex: 1;\n}\n.b-hero--left h1 {\n  font-family: Graphik-Bold;\n  font-size: 54px;\n}\n@media (max-width: 991px) {\n.b-hero--left h1 {\n    font-size: 32px;\n}\n}\n@media (max-width: 320px) {\n.b-hero--left h1 {\n    font-size: 25px;\n}\n}\n.b-hero--left p {\n  font-family: Graphik-Regular;\n  font-size: 20px;\n  margin: 2em 0;\n}\n@media (min-width: 320px) {\n.b-hero--left p {\n    margin: 0;\n    font-size: 15px;\n}\n}\n.b-hero--left button {\n  margin-top: 2em;\n}\n.b-hero--right img {\n  width: 100%;\n}\n@media (max-width: 574px) {\n.b-hero--right img {\n    width: 75%;\n}\n}\n.partners__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: initial;\n  padding: 7rem 0;\n}\n.partners__container img {\n  width: 100%;\n}\n@media (max-width: 425px) {\n.partners__container {\n    display: none;\n}\n}\n.lead-collaborators__header {\n  width: 60%;\n  margin: 0 auto;\n}\n@media (max-width: 320px) {\n.lead-collaborators__header {\n    font-size: 98%;\n}\n}\n@media (max-width: 425px) {\n.lead-collaborators__header {\n    width: 92%;\n    margin-top: 2rem;\n}\n}\n.lead-collaborators__header h1 {\n  font-family: Graphik-Bold;\n}\n@media (max-width: 991px) {\n.lead-collaborators__header h1 {\n    font-size: 32px;\n}\n}\n@media (max-width: 320px) {\n.lead-collaborators__header h1 {\n    font-size: 25px;\n}\n}\n.lead-collaborators__header p {\n  font-size: 17px;\n  margin: 1.5em 0;\n}\n@media (max-width: 320px) {\n.lead-collaborators__header p {\n    font-size: 15px;\n}\n}\n@media (max-width: 425px) {\n.lead-collaborators__container .kora-carousel {\n    height: 200px;\n    margin: 2rem;\n}\n.lead-collaborators__container .kora-carousel .vueperslides {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__bullets {\n    display: none;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper .person--name {\n    font-size: 14px;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper .person--job {\n    font-size: 12px;\n}\n}\n@media (max-width: 768px) {\n.lead-collaborators__container .kora-carousel .person__avatar img {\n    width: 35%;\n}\n}\n@media (max-width: 1024px) {\n.lead-collaborators__container .kora-carousel .person__avatar h3 {\n    font-size: 17px;\n}\n.lead-collaborators__container .kora-carousel .person__avatar p {\n    font-size: 14px;\n}\n}\n.user-types__header h1 {\n  font-family: Graphik-Bold;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types__header h1 {\n    font-size: 25px;\n}\n}\n.user-types__container .user-types__block {\n  display: flex;\n  width: 100%;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types__block {\n    flex-direction: column;\n    margin-bottom: 2rem;\n}\n}\n.user-types__container .user-types--left {\n  padding: 0 4rem;\n}\n.user-types__container .user-types--left img {\n  width: 100%;\n}\n.user-types__container .user-types--right {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: intial;\n  justify-content: center;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types--right {\n    width: unset;\n    text-align: center;\n}\n}\n.user-types__container .user-types--right img {\n  width: 70px;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types--right img {\n    margin: 0 auto;\n}\n}\n.user-types__container .user-types--right h2 {\n  margin: 1em 0;\n  font-family: Graphik-Semibold;\n}\n.user-types__container .user-types--right p {\n  font-size: 17px;\n}\n.user-types__container .user-types--right a {\n  margin-right: 10px;\n  color: #000;\n  font-weight: bold;\n}\n.user-types__container .el-menu-demo {\n  width: 50%;\n  margin: 0 auto;\n}\n.banner-ad__container {\n  background: url(\"/images/banner.png\");\n  margin-bottom: 10px;\n  background-size: contain;\n  height: 400px;\n  text-align: center;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n}\n.banner-ad__container h1 {\n  font-family: Graphik-Semibold;\n  color: #fff;\n  margin-bottom: 1rem;\n  font-size: 30px;\n}\n@media (max-width: 375px) {\n.banner-ad__container h1 {\n    font-size: 25px;\n}\n}\n.banner-ad__container button {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.banner-ad__content {\n  width: 80%;\n}\n.project-steps__container {\n  margin-top: 5em;\n}\n.project-steps__container h1 {\n  font-family: Graphik-Semibold;\n}\n@media (max-width: 425px) {\n.project-steps__container h1 {\n    font-size: 25px;\n}\n}\n.project-steps__container p {\n  font-size: 17px;\n}\n.project-steps__container {\n  height: 50vh;\n}\n@media (max-width: 425px) {\n.project-steps__container {\n    height: unset;\n}\n}\n.project-steps__container h3 {\n  font-family: Graphik-Semibold;\n  font-size: 20px;\n}\n.project-steps__container p {\n  font-size: 16px;\n  width: 70%;\n  margin: 0 auto;\n}\n.project-steps__container .row {\n  margin-top: 2rem;\n}\n.project-steps__container .row > div:first-child {\n  margin-top: 5px;\n}\n.project-steps__container .row > div:first-child h3 {\n  margin-top: 1.9rem;\n}\n.statistics__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 425px) {\n.statistics__container {\n    display: block;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n.statistics__container img {\n    display: none;\n}\n}\n.statistics__container h1 {\n  font-family: Graphik-Semibold;\n  margin-top: 5rem;\n}\n.statistics__container p {\n  font-size: 17px;\n  color: #A0A3A7;\n}\n.statistics__people {\n  padding-right: 7rem;\n}\n.site-footer__container {\n  padding: 3rem 7rem;\n  background-color: #F6F6F6;\n}\n@media (max-width: 425px) {\n.site-footer__container {\n    padding: 3rem 1rem;\n}\n}\n.site-footer__container img {\n  margin-bottom: 2rem;\n}\n.site-footer__container h4 {\n  font-family: Graphik-Semibold;\n  margin-bottom: 2rem;\n}\n@media (max-width: 425px) {\n.site-footer__container h4 {\n    margin-top: 2rem;\n}\n}\n.site-footer__container ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.site-footer__container ul:first-child {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-count: unset;\n     -moz-column-count: unset;\n          column-count: unset;\n}\n.site-footer__container ul li {\n  margin-bottom: 2rem;\n}\n.site-footer__container ul li svg {\n  color: #BCBCBC;\n  margin-right: 10px;\n}\n.el-form-item.is-required .el-form-item__label::after {\n  content: \" *\";\n  color: #F56C6C;\n}\n.signup-label .el-radio__input.is-checked .el-radio__inner {\n  border-color: #F4BA58;\n  background: #F3B142;\n}\n.el-dialog {\n  border-radius: 12px;\n}\n.login-modal .modal-container {\n  max-width: 30%;\n}\n@media (max-width: 425px) {\n.login-modal .modal-container {\n    max-width: 100%;\n}\n}\n@media (min-width: 768px) {\n.login-modal .modal-container {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.login-modal .modal-container {\n    max-width: 30%;\n}\n}\n.login-modal .login-btn__container {\n  margin-top: 1.5em;\n}\n.login-modal .login-btn__container button {\n  margin-bottom: 1.5em;\n}\n.login-modal .login-btn__container .modal-header__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 0px;\n}\n.login-modal .login-btn__container .modal-header__right p {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.login-modal .login-btn__container .modal-body {\n  margin: 20px 0;\n}\n.login-modal .login-btn__container .modal-default-button {\n  float: right;\n}\n.login-modal .login-btn__container .modal-footer {\n  border-top: 0px;\n}\n.login-modal .login-btn__container .modal-footer__right {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.login-modal .login-btn__container .modal-footer__center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-modal .login-btn__container .modal-footer__center button {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n  float: none;\n  max-width: 100%;\n}\n@media (min-width: 768px) {\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n    max-width: 30%;\n}\n}\n.login-modal .login-btn__container .remove-float .login-btn__container {\n  margin-top: 1.5em;\n}\n.login-modal .login-btn__container .remove-float .login-btn__container button {\n  margin-bottom: 1.5em;\n}\n.signup-modal .modal-wrapper {\n  vertical-align: unset;\n  top: 5rem;\n  position: relative;\n}\n.signup-modal .modal-wrapper .modal-container {\n  max-height: 80vh;\n  max-width: 40%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n@media (max-width: 425px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 100%;\n}\n}\n@media (min-width: 768px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 40%;\n}\n}\n.custom-modal-header {\n  position: relative;\n}\n.custom-modal-header i {\n  position: absolute;\n  right: 0;\n  font-size: 1.3rem;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".b-hero__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 574px) {\n.b-hero__container {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n}\n}\n.b-hero--left {\n  flex: 1;\n}\n.b-hero--left h1 {\n  font-family: Graphik-Bold;\n  font-size: 54px;\n}\n@media (max-width: 991px) {\n.b-hero--left h1 {\n    font-size: 32px;\n}\n}\n@media (max-width: 320px) {\n.b-hero--left h1 {\n    font-size: 25px;\n}\n}\n.b-hero--left p {\n  font-family: Graphik-Regular;\n  font-size: 20px;\n  margin: 2em 0;\n}\n@media (min-width: 320px) {\n.b-hero--left p {\n    margin: 0;\n    font-size: 15px;\n}\n}\n.b-hero--left button {\n  margin-top: 2em;\n}\n.b-hero--right img {\n  width: 100%;\n}\n@media (max-width: 574px) {\n.b-hero--right img {\n    width: 75%;\n}\n}\n.partners__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: initial;\n  padding: 7rem 0;\n}\n.partners__container img {\n  width: 100%;\n}\n@media (max-width: 425px) {\n.partners__container {\n    display: none;\n}\n}\n.lead-collaborators__header {\n  width: 60%;\n  margin: 0 auto;\n}\n@media (max-width: 320px) {\n.lead-collaborators__header {\n    font-size: 98%;\n}\n}\n@media (max-width: 425px) {\n.lead-collaborators__header {\n    width: 92%;\n    margin-top: 2rem;\n}\n}\n.lead-collaborators__header h1 {\n  font-family: Graphik-Bold;\n}\n@media (max-width: 991px) {\n.lead-collaborators__header h1 {\n    font-size: 32px;\n}\n}\n@media (max-width: 320px) {\n.lead-collaborators__header h1 {\n    font-size: 25px;\n}\n}\n.lead-collaborators__header p {\n  font-size: 17px;\n  margin: 1.5em 0;\n}\n@media (max-width: 320px) {\n.lead-collaborators__header p {\n    font-size: 15px;\n}\n}\n@media (max-width: 425px) {\n.lead-collaborators__container .kora-carousel {\n    height: 200px;\n    margin: 2rem;\n}\n.lead-collaborators__container .kora-carousel .vueperslides {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__bullets {\n    display: none;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper .person--name {\n    font-size: 14px;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper .person--job {\n    font-size: 12px;\n}\n}\n@media (max-width: 768px) {\n.lead-collaborators__container .kora-carousel .person__avatar img {\n    width: 35%;\n}\n}\n@media (max-width: 1024px) {\n.lead-collaborators__container .kora-carousel .person__avatar h3 {\n    font-size: 17px;\n}\n.lead-collaborators__container .kora-carousel .person__avatar p {\n    font-size: 14px;\n}\n}\n.user-types__header h1 {\n  font-family: Graphik-Bold;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types__header h1 {\n    font-size: 25px;\n}\n}\n.user-types__container .user-types__block {\n  display: flex;\n  width: 100%;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types__block {\n    flex-direction: column;\n    margin-bottom: 2rem;\n}\n}\n.user-types__container .user-types--left {\n  padding: 0 4rem;\n}\n.user-types__container .user-types--left img {\n  width: 100%;\n}\n.user-types__container .user-types--right {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: intial;\n  justify-content: center;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types--right {\n    width: unset;\n    text-align: center;\n}\n}\n.user-types__container .user-types--right img {\n  width: 70px;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types--right img {\n    margin: 0 auto;\n}\n}\n.user-types__container .user-types--right h2 {\n  margin: 1em 0;\n  font-family: Graphik-Semibold;\n}\n.user-types__container .user-types--right p {\n  font-size: 17px;\n}\n.user-types__container .user-types--right a {\n  margin-right: 10px;\n  color: #000;\n  font-weight: bold;\n}\n.user-types__container .el-menu-demo {\n  width: 50%;\n  margin: 0 auto;\n}\n.banner-ad__container {\n  background: url(\"/images/banner.png\");\n  margin-bottom: 10px;\n  background-size: contain;\n  height: 400px;\n  text-align: center;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n}\n.banner-ad__container h1 {\n  font-family: Graphik-Semibold;\n  color: #fff;\n  margin-bottom: 1rem;\n  font-size: 30px;\n}\n@media (max-width: 375px) {\n.banner-ad__container h1 {\n    font-size: 25px;\n}\n}\n.banner-ad__container button {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.banner-ad__content {\n  width: 80%;\n}\n.project-steps__container {\n  margin-top: 5em;\n}\n.project-steps__container h1 {\n  font-family: Graphik-Semibold;\n}\n@media (max-width: 425px) {\n.project-steps__container h1 {\n    font-size: 25px;\n}\n}\n.project-steps__container p {\n  font-size: 17px;\n}\n.project-steps__container {\n  height: 50vh;\n}\n@media (max-width: 425px) {\n.project-steps__container {\n    height: unset;\n}\n}\n.project-steps__container h3 {\n  font-family: Graphik-Semibold;\n  font-size: 20px;\n}\n.project-steps__container p {\n  font-size: 16px;\n  width: 70%;\n  margin: 0 auto;\n}\n.project-steps__container .row {\n  margin-top: 2rem;\n}\n.project-steps__container .row > div:first-child {\n  margin-top: 5px;\n}\n.project-steps__container .row > div:first-child h3 {\n  margin-top: 1.9rem;\n}\n.statistics__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 425px) {\n.statistics__container {\n    display: block;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n.statistics__container img {\n    display: none;\n}\n}\n.statistics__container h1 {\n  font-family: Graphik-Semibold;\n  margin-top: 5rem;\n}\n.statistics__container p {\n  font-size: 17px;\n  color: #A0A3A7;\n}\n.statistics__people {\n  padding-right: 7rem;\n}\n.site-footer__container {\n  padding: 3rem 7rem;\n  background-color: #F6F6F6;\n}\n@media (max-width: 425px) {\n.site-footer__container {\n    padding: 3rem 1rem;\n}\n}\n.site-footer__container img {\n  margin-bottom: 2rem;\n}\n.site-footer__container h4 {\n  font-family: Graphik-Semibold;\n  margin-bottom: 2rem;\n}\n@media (max-width: 425px) {\n.site-footer__container h4 {\n    margin-top: 2rem;\n}\n}\n.site-footer__container ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.site-footer__container ul:first-child {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-count: unset;\n     -moz-column-count: unset;\n          column-count: unset;\n}\n.site-footer__container ul li {\n  margin-bottom: 2rem;\n}\n.site-footer__container ul li svg {\n  color: #BCBCBC;\n  margin-right: 10px;\n}\n.el-form-item.is-required .el-form-item__label::after {\n  content: \" *\";\n  color: #F56C6C;\n}\n.signup-label .el-radio__input.is-checked .el-radio__inner {\n  border-color: #F4BA58;\n  background: #F3B142;\n}\n.el-dialog {\n  border-radius: 12px;\n}\n.login-modal .modal-container {\n  max-width: 30%;\n}\n@media (max-width: 425px) {\n.login-modal .modal-container {\n    max-width: 100%;\n}\n}\n@media (min-width: 768px) {\n.login-modal .modal-container {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.login-modal .modal-container {\n    max-width: 30%;\n}\n}\n.login-modal .login-btn__container {\n  margin-top: 1.5em;\n}\n.login-modal .login-btn__container button {\n  margin-bottom: 1.5em;\n}\n.login-modal .login-btn__container .modal-header__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 0px;\n}\n.login-modal .login-btn__container .modal-header__right p {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.login-modal .login-btn__container .modal-body {\n  margin: 20px 0;\n}\n.login-modal .login-btn__container .modal-default-button {\n  float: right;\n}\n.login-modal .login-btn__container .modal-footer {\n  border-top: 0px;\n}\n.login-modal .login-btn__container .modal-footer__right {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.login-modal .login-btn__container .modal-footer__center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-modal .login-btn__container .modal-footer__center button {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n  float: none;\n  max-width: 100%;\n}\n@media (min-width: 768px) {\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n    max-width: 30%;\n}\n}\n.login-modal .login-btn__container .remove-float .login-btn__container {\n  margin-top: 1.5em;\n}\n.login-modal .login-btn__container .remove-float .login-btn__container button {\n  margin-bottom: 1.5em;\n}\n.signup-modal .modal-wrapper {\n  vertical-align: unset;\n  top: 5rem;\n  position: relative;\n}\n.signup-modal .modal-wrapper .modal-container {\n  max-height: 80vh;\n  max-width: 40%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n@media (max-width: 425px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 100%;\n}\n}\n@media (min-width: 768px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 40%;\n}\n}\n.custom-modal-header {\n  position: relative;\n}\n.custom-modal-header i {\n  position: absolute;\n  right: 0;\n  font-size: 1.3rem;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".b-hero__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 574px) {\n.b-hero__container {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n}\n}\n.b-hero--left {\n  flex: 1;\n}\n.b-hero--left h1 {\n  font-family: Graphik-Bold;\n  font-size: 54px;\n}\n@media (max-width: 991px) {\n.b-hero--left h1 {\n    font-size: 32px;\n}\n}\n@media (max-width: 320px) {\n.b-hero--left h1 {\n    font-size: 25px;\n}\n}\n.b-hero--left p {\n  font-family: Graphik-Regular;\n  font-size: 20px;\n  margin: 2em 0;\n}\n@media (min-width: 320px) {\n.b-hero--left p {\n    margin: 0;\n    font-size: 15px;\n}\n}\n.b-hero--left button {\n  margin-top: 2em;\n}\n.b-hero--right img {\n  width: 100%;\n}\n@media (max-width: 574px) {\n.b-hero--right img {\n    width: 75%;\n}\n}\n.partners__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: initial;\n  padding: 7rem 0;\n}\n.partners__container img {\n  width: 100%;\n}\n@media (max-width: 425px) {\n.partners__container {\n    display: none;\n}\n}\n.lead-collaborators__header {\n  width: 60%;\n  margin: 0 auto;\n}\n@media (max-width: 320px) {\n.lead-collaborators__header {\n    font-size: 98%;\n}\n}\n@media (max-width: 425px) {\n.lead-collaborators__header {\n    width: 92%;\n    margin-top: 2rem;\n}\n}\n.lead-collaborators__header h1 {\n  font-family: Graphik-Bold;\n}\n@media (max-width: 991px) {\n.lead-collaborators__header h1 {\n    font-size: 32px;\n}\n}\n@media (max-width: 320px) {\n.lead-collaborators__header h1 {\n    font-size: 25px;\n}\n}\n.lead-collaborators__header p {\n  font-size: 17px;\n  margin: 1.5em 0;\n}\n@media (max-width: 320px) {\n.lead-collaborators__header p {\n    font-size: 15px;\n}\n}\n@media (max-width: 425px) {\n.lead-collaborators__container .kora-carousel {\n    height: 200px;\n    margin: 2rem;\n}\n.lead-collaborators__container .kora-carousel .vueperslides {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__bullets {\n    display: none;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper {\n    height: 100%;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper .person--name {\n    font-size: 14px;\n}\n.lead-collaborators__container .kora-carousel .vueperslides .vueperslides__inner .vueperslides__parallax-wrapper .person--job {\n    font-size: 12px;\n}\n}\n@media (max-width: 768px) {\n.lead-collaborators__container .kora-carousel .person__avatar img {\n    width: 35%;\n}\n}\n@media (max-width: 1024px) {\n.lead-collaborators__container .kora-carousel .person__avatar h3 {\n    font-size: 17px;\n}\n.lead-collaborators__container .kora-carousel .person__avatar p {\n    font-size: 14px;\n}\n}\n.user-types__header h1 {\n  font-family: Graphik-Bold;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types__header h1 {\n    font-size: 25px;\n}\n}\n.user-types__container .user-types__block {\n  display: flex;\n  width: 100%;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types__block {\n    flex-direction: column;\n    margin-bottom: 2rem;\n}\n}\n.user-types__container .user-types--left {\n  padding: 0 4rem;\n}\n.user-types__container .user-types--left img {\n  width: 100%;\n}\n.user-types__container .user-types--right {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: intial;\n  justify-content: center;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types--right {\n    width: unset;\n    text-align: center;\n}\n}\n.user-types__container .user-types--right img {\n  width: 70px;\n}\n@media (max-width: 425px) {\n.user-types__container .user-types--right img {\n    margin: 0 auto;\n}\n}\n.user-types__container .user-types--right h2 {\n  margin: 1em 0;\n  font-family: Graphik-Semibold;\n}\n.user-types__container .user-types--right p {\n  font-size: 17px;\n}\n.user-types__container .user-types--right a {\n  margin-right: 10px;\n  color: #000;\n  font-weight: bold;\n}\n.user-types__container .el-menu-demo {\n  width: 50%;\n  margin: 0 auto;\n}\n.banner-ad__container {\n  background: url(\"/images/banner.png\");\n  margin-bottom: 10px;\n  background-size: contain;\n  height: 400px;\n  text-align: center;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  align-self: center;\n  justify-self: center;\n  align-items: center;\n}\n.banner-ad__container h1 {\n  font-family: Graphik-Semibold;\n  color: #fff;\n  margin-bottom: 1rem;\n  font-size: 30px;\n}\n@media (max-width: 375px) {\n.banner-ad__container h1 {\n    font-size: 25px;\n}\n}\n.banner-ad__container button {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.banner-ad__content {\n  width: 80%;\n}\n.project-steps__container {\n  margin-top: 5em;\n}\n.project-steps__container h1 {\n  font-family: Graphik-Semibold;\n}\n@media (max-width: 425px) {\n.project-steps__container h1 {\n    font-size: 25px;\n}\n}\n.project-steps__container p {\n  font-size: 17px;\n}\n.project-steps__container {\n  height: 50vh;\n}\n@media (max-width: 425px) {\n.project-steps__container {\n    height: unset;\n}\n}\n.project-steps__container h3 {\n  font-family: Graphik-Semibold;\n  font-size: 20px;\n}\n.project-steps__container p {\n  font-size: 16px;\n  width: 70%;\n  margin: 0 auto;\n}\n.project-steps__container .row {\n  margin-top: 2rem;\n}\n.project-steps__container .row > div:first-child {\n  margin-top: 5px;\n}\n.project-steps__container .row > div:first-child h3 {\n  margin-top: 1.9rem;\n}\n.statistics__container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 425px) {\n.statistics__container {\n    display: block;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n.statistics__container img {\n    display: none;\n}\n}\n.statistics__container h1 {\n  font-family: Graphik-Semibold;\n  margin-top: 5rem;\n}\n.statistics__container p {\n  font-size: 17px;\n  color: #A0A3A7;\n}\n.statistics__people {\n  padding-right: 7rem;\n}\n.site-footer__container {\n  padding: 3rem 7rem;\n  background-color: #F6F6F6;\n}\n@media (max-width: 425px) {\n.site-footer__container {\n    padding: 3rem 1rem;\n}\n}\n.site-footer__container img {\n  margin-bottom: 2rem;\n}\n.site-footer__container h4 {\n  font-family: Graphik-Semibold;\n  margin-bottom: 2rem;\n}\n@media (max-width: 425px) {\n.site-footer__container h4 {\n    margin-top: 2rem;\n}\n}\n.site-footer__container ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.site-footer__container ul:first-child {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-count: unset;\n     -moz-column-count: unset;\n          column-count: unset;\n}\n.site-footer__container ul li {\n  margin-bottom: 2rem;\n}\n.site-footer__container ul li svg {\n  color: #BCBCBC;\n  margin-right: 10px;\n}\n.el-form-item.is-required .el-form-item__label::after {\n  content: \" *\";\n  color: #F56C6C;\n}\n.signup-label .el-radio__input.is-checked .el-radio__inner {\n  border-color: #F4BA58;\n  background: #F3B142;\n}\n.el-dialog {\n  border-radius: 12px;\n}\n.login-modal .modal-container {\n  max-width: 30%;\n}\n@media (max-width: 425px) {\n.login-modal .modal-container {\n    max-width: 100%;\n}\n}\n@media (min-width: 768px) {\n.login-modal .modal-container {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.login-modal .modal-container {\n    max-width: 30%;\n}\n}\n.login-modal .login-btn__container {\n  margin-top: 1.5em;\n}\n.login-modal .login-btn__container button {\n  margin-bottom: 1.5em;\n}\n.login-modal .login-btn__container .modal-header__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 0px;\n}\n.login-modal .login-btn__container .modal-header__right p {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.login-modal .login-btn__container .modal-body {\n  margin: 20px 0;\n}\n.login-modal .login-btn__container .modal-default-button {\n  float: right;\n}\n.login-modal .login-btn__container .modal-footer {\n  border-top: 0px;\n}\n.login-modal .login-btn__container .modal-footer__right {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.login-modal .login-btn__container .modal-footer__center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-modal .login-btn__container .modal-footer__center button {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n  float: none;\n  max-width: 100%;\n}\n@media (min-width: 768px) {\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.login-modal .login-btn__container .remove-float .el-form-item__label {\n    max-width: 30%;\n}\n}\n.login-modal .login-btn__container .remove-float .login-btn__container {\n  margin-top: 1.5em;\n}\n.login-modal .login-btn__container .remove-float .login-btn__container button {\n  margin-bottom: 1.5em;\n}\n.signup-modal .modal-wrapper {\n  vertical-align: unset;\n  top: 5rem;\n  position: relative;\n}\n.signup-modal .modal-wrapper .modal-container {\n  max-height: 80vh;\n  max-width: 40%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n@media (max-width: 425px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 100%;\n}\n}\n@media (min-width: 768px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 70%;\n}\n}\n@media (min-width: 1024px) {\n.signup-modal .modal-wrapper .modal-container {\n    max-width: 40%;\n}\n}\n.custom-modal-header {\n  position: relative;\n}\n.custom-modal-header i {\n  position: absolute;\n  right: 0;\n  font-size: 1.3rem;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginModal.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpModal.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Card.vue?vue&type=template&id=61084074&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/Card.vue?vue&type=template&id=61084074& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card__container" }, [
    _vm.isAvatar
      ? _c("div", { staticClass: "card__content" }, [
          _c("div", { staticClass: "person__avatar" }, [
            _c("img", { attrs: { src: _vm.image } }),
            _vm._v(" "),
            _c("h3", { staticClass: "person--name" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.person.name) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "person--job" }, [
              _vm._v(
                "\n                " + _vm._s(_vm.person.job) + "\n            "
              )
            ])
          ])
        ])
      : _vm.isBackground
      ? _c("div", { staticClass: "card__img-bg" })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=template&id=ed1f6e26&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=template&id=ed1f6e26& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "kora-carousel" },
    [
      _c(
        "vueper-slides",
        {
          staticClass: "no-shadow",
          attrs: {
            "visible-slides": 4,
            "slide-multiple": "",
            gap: 4,
            "slide-ratio": 1 / 4,
            "dragging-distance": 200,
            breakpoints: { 800: { visibleSlides: 2, slideMultiple: 2 } }
          }
        },
        _vm._l(_vm.collaborators, function(person, key) {
          return _c("vueper-slide", {
            key: key,
            scopedSlots: _vm._u(
              [
                {
                  key: "content",
                  fn: function() {
                    return [
                      _c("card", {
                        attrs: {
                          "is-avatar": "",
                          person: person,
                          image:
                            "https://source.unsplash.com/user/erondu/100x100"
                        }
                      })
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              true
            )
          })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=template&id=aaaf00bc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=template&id=aaaf00bc& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("modal", { attrs: { "custom-class": "login-modal" } }, [
        _c(
          "div",
          {
            staticClass: "custom-modal-header",
            attrs: { slot: "header" },
            slot: "header"
          },
          [
            _c("i", {
              staticClass: "el-icon-close",
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            }),
            _vm._v(" "),
            _c("h3", [_vm._v("Login")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal-body", attrs: { slot: "body" }, slot: "body" },
          [
            _c(
              "el-form",
              {
                attrs: {
                  id: "login-form",
                  "label-position": _vm.labelPosition,
                  "label-width": "100px",
                  model: _vm.form,
                  method: "POST",
                  action: "/login"
                }
              },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "User Name" } },
                  [
                    _c("el-input", {
                      attrs: { name: "email" },
                      nativeOn: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.formSubmit($event)
                        }
                      },
                      model: {
                        value: _vm.form.username,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "username", $$v)
                        },
                        expression: "form.username"
                      }
                    }),
                    _vm._v(" "),
                    _vm.error
                      ? _c("div", { staticClass: "el-form-item__error" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.error) +
                              "\n                    "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Password" } },
                  [
                    _c("el-input", {
                      attrs: { "show-password": "", name: "password" },
                      nativeOn: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.formSubmit($event)
                        }
                      },
                      model: {
                        value: _vm.form.password,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "password", $$v)
                        },
                        expression: "form.password"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
          _c(
            "div",
            { staticClass: "text-right" },
            [
              _c("el-link", { attrs: { type: "primary" } }, [
                _vm._v(
                  "\n                    Forgot Password?\n                "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "login-btn__container text-center" }, [
            _c(
              "button",
              {
                directives: [
                  {
                    name: "loading",
                    rawName: "v-loading",
                    value: _vm.isLoggingIn,
                    expression: "isLoggingIn"
                  }
                ],
                staticClass: "btn koraspond__primary-btn--round",
                on: { click: _vm.formSubmit }
              },
              [_vm._v("\n                    LOGIN\n                ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _vm._v(
                  "\n                    Do you have an account?\n                    "
                ),
                _c("el-link", { attrs: { type: "primary" } }, [
                  _vm._v(
                    "\n                        Signup\n                    "
                  )
                ])
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/NavBar.vue?vue&type=template&id=63766bce&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/NavBar.vue?vue&type=template&id=63766bce& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "collapse navbar-collapse", attrs: { id: "navbarText" } },
      [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "site-btns" },
          [
            _c(
              "el-button",
              {
                attrs: { type: "info", plain: "" },
                on: {
                  click: function($event) {
                    _vm.signUpModal = true
                  }
                }
              },
              [_vm._v("\n                Signup\n            ")]
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                attrs: { type: "warning" },
                on: {
                  click: function($event) {
                    _vm.loginModal = true
                  }
                }
              },
              [_vm._v("\n                Login\n            ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.signUpModal
          ? _c("sign-up", {
              on: {
                close: function($event) {
                  _vm.signUpModal = !_vm.signUpModal
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.loginModal
          ? _c("login-modal", {
              on: {
                close: function($event) {
                  _vm.loginModal = !_vm.loginModal
                }
              }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
      _c("img", { attrs: { src: "/images/site-logo.png", alt: "site-logo" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarText",
          "aria-controls": "navbarText",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav mr-auto" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("\n                    Advertiser\n                ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("\n                    Publisher\n                ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("\n                    Monetize\n                ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("\n                    About\n                ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("\n                    Blog\n                ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=template&id=2b2e6ee7&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=template&id=2b2e6ee7& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("modal", { attrs: { "custom-class": "signup-modal" } }, [
        _c(
          "div",
          {
            staticClass: "modal-header__container custom-modal-header",
            attrs: { slot: "header" },
            slot: "header"
          },
          [
            _c("i", {
              staticClass: "el-icon-close",
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Sign Up")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modal-body", attrs: { slot: "body" }, slot: "body" },
          [
            _c(
              "el-form",
              {
                ref: "signup",
                attrs: {
                  "label-position": "top",
                  "hide-required-asterisk": "",
                  model: _vm.form,
                  rules: _vm.rules
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c(
                      "el-form-item",
                      {
                        staticClass: "signup-label",
                        attrs: { label: "Account Type", required: "" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-lg-4 d-inline" },
                          [
                            _c(
                              "el-radio",
                              {
                                attrs: { label: "1" },
                                model: {
                                  value: _vm.form.accountType,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "accountType", $$v)
                                  },
                                  expression: "form.accountType"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Applicant\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-4 d-inline" },
                          [
                            _c(
                              "el-radio",
                              {
                                attrs: { label: "2" },
                                model: {
                                  value: _vm.form.accountType,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "accountType", $$v)
                                  },
                                  expression: "form.accountType"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Investor\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-4 d-inline" },
                          [
                            _c(
                              "el-radio",
                              {
                                attrs: { label: "3" },
                                model: {
                                  value: _vm.form.accountType,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "accountType", $$v)
                                  },
                                  expression: "form.accountType"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                ISDB Secretariat\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-4 d-inline" },
                          [
                            _c(
                              "el-radio",
                              {
                                attrs: { label: "4" },
                                model: {
                                  value: _vm.form.accountType,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "accountType", $$v)
                                  },
                                  expression: "form.accountType"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Govt Official\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "First Name", prop: "firstName" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.firstName,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "firstName", $$v)
                              },
                              expression: "form.firstName"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Last Name", prop: "lastName" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.lastName,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "lastName", $$v)
                              },
                              expression: "form.lastName"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Country", prop: "country" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.country,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "country", $$v)
                              },
                              expression: "form.country"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "City", prop: "city" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.city,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "city", $$v)
                              },
                              expression: "form.city"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Address", prop: "address" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.address,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "address", $$v)
                              },
                              expression: "form.address"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("h3", [_vm._v("Contact Information")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Email", prop: "email" } },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.form.email,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.error
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.error) +
                                "\n                        "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-6" },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Phone", required: "" } },
                        [
                          _c(
                            "el-input",
                            {
                              model: {
                                value: _vm.form.phone,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "phone", $$v)
                                },
                                expression: "form.phone"
                              }
                            },
                            [
                              _c(
                                "el-select",
                                {
                                  attrs: {
                                    slot: "prepend",
                                    "value-key": "selectCountry"
                                  },
                                  slot: "prepend",
                                  model: {
                                    value: _vm.selectCountry,
                                    callback: function($$v) {
                                      _vm.selectCountry = $$v
                                    },
                                    expression: "selectCountry"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "p-2 mt-1",
                                      attrs: { slot: "prefix" },
                                      slot: "prefix"
                                    },
                                    [
                                      _c("flag", {
                                        attrs: { iso: _vm.selectCountry }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.flags, function(flag, index) {
                                    return _c(
                                      "el-option",
                                      {
                                        key: index,
                                        attrs: { value: flag.value }
                                      },
                                      [
                                        _c("flag", {
                                          attrs: { iso: flag.value }
                                        })
                                      ],
                                      1
                                    )
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Password", prop: "password" } },
                  [
                    _c("el-input", {
                      attrs: { "show-password": "" },
                      model: {
                        value: _vm.form.password,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "password", $$v)
                        },
                        expression: "form.password"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c(
                  "el-checkbox",
                  {
                    model: {
                      value: _vm.form.termsAndConditions,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "termsAndConditions", $$v)
                      },
                      expression: "form.termsAndConditions"
                    }
                  },
                  [_c("span", [_vm._v("I accept the terms & conditions")])]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c(
                  "el-checkbox",
                  {
                    model: {
                      value: _vm.form.newsLetter,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "newsLetter", $$v)
                      },
                      expression: "form.newsLetter"
                    }
                  },
                  [
                    _c("span", [
                      _vm._v("I would like to subscribe to newsletter")
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-lg-4" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.isLoggingIn,
                      expression: "isLoggingIn"
                    }
                  ],
                  staticClass: "btn koraspond__primary-btn--round",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.formSubmit("signup")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                        SIGNUP\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-5 offset-lg-3 align-self-center" },
              [
                _vm._v(
                  "\n                    Already have an account?\n                    "
                ),
                _c("el-link", { attrs: { type: "primary" } }, [
                  _vm._v(
                    "\n                        Signin\n                    "
                  )
                ])
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/UserTypes.vue?vue&type=template&id=62479400&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/components/UserTypes.vue?vue&type=template&id=62479400& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-menu",
        {
          staticClass: "el-menu-demo",
          attrs: { "default-active": _vm.activeIndex, mode: "horizontal" },
          on: { select: _vm.handleSelect }
        },
        _vm._l(_vm.userTypes, function(type, key) {
          return _c(
            "el-menu-item",
            { key: key, attrs: { index: (key + 1).toString() } },
            [_vm._v("\n            I'm " + _vm._s(type.name) + "\n        ")]
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "user-types__block" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "user-types--right" }, [
          _c("img", { attrs: { src: "/images/bulb.svg" } }),
          _vm._v(" "),
          _c("h2", [_vm._v("I'm " + _vm._s(_vm.userInfo.name))]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.userInfo.description))]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "actions" },
            [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Start Now ")]),
              _c("vue-fontawesome", { attrs: { icon: "arrow-right" } })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-types--left" }, [
      _c("img", { attrs: { src: "/images/user-types.png" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=template&id=248bda77&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/homepage/index.vue?vue&type=template&id=248bda77& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "site__header container" }, [_c("nav-bar")], 1),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "lead-collaborators__container container" },
      [_vm._m(2), _vm._v(" "), _c("image-carousel")],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "user-types__container container" },
      [_vm._m(3), _vm._v(" "), _c("user-types")],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "banner-ad__container" }, [
      _c(
        "div",
        { staticClass: "banner-ad__content" },
        [
          _c("h1", [
            _vm._v(
              "Accelerate teamwork and create more meaningful and futuristic products"
            )
          ]),
          _vm._v(" "),
          _c("el-button", { attrs: { type: "warning" } }, [
            _vm._v("\n                Create your meeting room\n            ")
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c("footer", { staticClass: "site-footer__container" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(6),
        _vm._v(" "),
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("h4", [_vm._v("Follow Us")]),
          _vm._v(" "),
          _c("ul", [
            _c(
              "li",
              [
                _c("vue-fontawesome", { attrs: { icon: ["fab", "facebook"] } }),
                _vm._v(" Facebook\n                    ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("vue-fontawesome", { attrs: { icon: ["fab", "twitter"] } }),
                _vm._v(" Twitter\n                    ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("vue-fontawesome", {
                  attrs: { icon: ["fab", "instagram"] }
                }),
                _vm._v(" Instagram\n                    ")
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "b-hero__container container" }, [
      _c("div", { staticClass: "b-hero--left" }, [
        _c("h1", [_vm._v("Let's collaborate and succeed")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Accelerate teamwork and create more meaningfull and futuristing products"
          )
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn koraspond__primary-btn" }, [
          _vm._v("\n                Create your meeting room\n            ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "b-hero--right" }, [
        _c("img", {
          attrs: {
            width: "100%",
            src: "/images/b-hero.png",
            alt: "b-hero-image"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "partners__container container" }, [
      _c("img", { attrs: { src: "/images/partners.png", alt: "partners" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "lead-collaborators__header text-center" },
      [
        _c("h1", [_vm._v("Our Lead Collaborators")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Advanced in-house optimization technology and over 11 years' ad tech experience provide your business with digital advertising tools that deliver results."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-types__header text-center" }, [
      _c("h1", [_vm._v("One room for great Ideas to take place")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "project-steps__container text-center container" },
      [
        _c("h1", [_vm._v("Your next project is just few steps ahead")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "A fine spot to meet the right people and engage in right project"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("img", { attrs: { src: "/images/complete.svg", alt: "" } }),
            _vm._v(" "),
            _c("h3", [_vm._v("Complete your Profile")]),
            _vm._v(" "),
            _c("p", [_vm._v("Fill in your details and domain interest")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("img", { attrs: { src: "/images/organize.svg", alt: "" } }),
            _vm._v(" "),
            _c("h3", [_vm._v("Organize meetings")]),
            _vm._v(" "),
            _c("p", [
              _vm._v("Meet people of same area of interests to collaborate")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("img", { attrs: { src: "/images/build.svg", alt: "" } }),
            _vm._v(" "),
            _c("h3", [_vm._v("Build a project")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "With the right team and right effort success Is not far away "
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "statistics__container" }, [
      _c("img", { attrs: { src: "/images/grid.png", alt: "" } }),
      _vm._v(" "),
      _c("div", { staticClass: "statistics__info" }, [
        _c("h1", [_vm._v("100+")]),
        _vm._v(" "),
        _c("p", [_vm._v("Successful Projects")]),
        _vm._v(" "),
        _c("h1", [_vm._v("1000+")]),
        _vm._v(" "),
        _c("p", [_vm._v("Investors")]),
        _vm._v(" "),
        _c("h1", [_vm._v("3000+")]),
        _vm._v(" "),
        _c("p", [_vm._v("Applicants")])
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "statistics__people",
        attrs: { src: "/images/statistics.png", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("img", { attrs: { src: "/images/site-logo.png", alt: "" } }),
      _vm._v(" "),
      _c("p", [_vm._v("© Copyright 2020 portal.")]),
      _vm._v(" "),
      _c("p", [_vm._v("All rights reserved")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("h4", [_vm._v("Quick Links")]),
      _vm._v(" "),
      _c("div", [
        _c("ul", [
          _c("li", [_vm._v("FAQ")]),
          _vm._v(" "),
          _c("li", [_vm._v("Terms and Condition")]),
          _vm._v(" "),
          _c("li", [_vm._v("Privacy Policy")]),
          _vm._v(" "),
          _c("li", [_vm._v("Support")]),
          _vm._v(" "),
          _c("li", [_vm._v("Imprint")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/common/Card.vue":
/*!**************************************!*\
  !*** ./resources/js/common/Card.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_61084074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=61084074& */ "./resources/js/common/Card.vue?vue&type=template&id=61084074&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/common/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_61084074___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_61084074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/Card.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/common/Card.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/Card.vue?vue&type=template&id=61084074&":
/*!*********************************************************************!*\
  !*** ./resources/js/common/Card.vue?vue&type=template&id=61084074& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_61084074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=template&id=61084074& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/Card.vue?vue&type=template&id=61084074&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_61084074___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_61084074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/homepage/components/ImageCarousel.vue":
/*!********************************************************************!*\
  !*** ./resources/js/modules/homepage/components/ImageCarousel.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCarousel_vue_vue_type_template_id_ed1f6e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCarousel.vue?vue&type=template&id=ed1f6e26& */ "./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=template&id=ed1f6e26&");
/* harmony import */ var _ImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCarousel.vue?vue&type=script&lang=js& */ "./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCarousel_vue_vue_type_template_id_ed1f6e26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCarousel_vue_vue_type_template_id_ed1f6e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/homepage/components/ImageCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCarousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=template&id=ed1f6e26&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=template&id=ed1f6e26& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCarousel_vue_vue_type_template_id_ed1f6e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCarousel.vue?vue&type=template&id=ed1f6e26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/ImageCarousel.vue?vue&type=template&id=ed1f6e26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCarousel_vue_vue_type_template_id_ed1f6e26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCarousel_vue_vue_type_template_id_ed1f6e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/homepage/components/LoginModal.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/homepage/components/LoginModal.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginModal_vue_vue_type_template_id_aaaf00bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginModal.vue?vue&type=template&id=aaaf00bc& */ "./resources/js/modules/homepage/components/LoginModal.vue?vue&type=template&id=aaaf00bc&");
/* harmony import */ var _LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginModal.vue?vue&type=script&lang=js& */ "./resources/js/modules/homepage/components/LoginModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginModal.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginModal_vue_vue_type_template_id_aaaf00bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginModal_vue_vue_type_template_id_aaaf00bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/homepage/components/LoginModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/homepage/components/LoginModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/LoginModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginModal.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/LoginModal.vue?vue&type=template&id=aaaf00bc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/LoginModal.vue?vue&type=template&id=aaaf00bc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_template_id_aaaf00bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginModal.vue?vue&type=template&id=aaaf00bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/LoginModal.vue?vue&type=template&id=aaaf00bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_template_id_aaaf00bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_template_id_aaaf00bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/homepage/components/NavBar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/modules/homepage/components/NavBar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar_vue_vue_type_template_id_63766bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=63766bce& */ "./resources/js/modules/homepage/components/NavBar.vue?vue&type=template&id=63766bce&");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js& */ "./resources/js/modules/homepage/components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBar_vue_vue_type_template_id_63766bce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBar_vue_vue_type_template_id_63766bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/homepage/components/NavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/homepage/components/NavBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/NavBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/NavBar.vue?vue&type=template&id=63766bce&":
/*!********************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/NavBar.vue?vue&type=template&id=63766bce& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_63766bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=template&id=63766bce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/NavBar.vue?vue&type=template&id=63766bce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_63766bce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_63766bce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/homepage/components/SignUpModal.vue":
/*!******************************************************************!*\
  !*** ./resources/js/modules/homepage/components/SignUpModal.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpModal_vue_vue_type_template_id_2b2e6ee7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpModal.vue?vue&type=template&id=2b2e6ee7& */ "./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=template&id=2b2e6ee7&");
/* harmony import */ var _SignUpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpModal.vue?vue&type=script&lang=js& */ "./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpModal.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SignUpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUpModal_vue_vue_type_template_id_2b2e6ee7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUpModal_vue_vue_type_template_id_2b2e6ee7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/homepage/components/SignUpModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpModal.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=template&id=2b2e6ee7&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=template&id=2b2e6ee7& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_template_id_2b2e6ee7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpModal.vue?vue&type=template&id=2b2e6ee7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/SignUpModal.vue?vue&type=template&id=2b2e6ee7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_template_id_2b2e6ee7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpModal_vue_vue_type_template_id_2b2e6ee7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/homepage/components/UserTypes.vue":
/*!****************************************************************!*\
  !*** ./resources/js/modules/homepage/components/UserTypes.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserTypes_vue_vue_type_template_id_62479400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTypes.vue?vue&type=template&id=62479400& */ "./resources/js/modules/homepage/components/UserTypes.vue?vue&type=template&id=62479400&");
/* harmony import */ var _UserTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTypes.vue?vue&type=script&lang=js& */ "./resources/js/modules/homepage/components/UserTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTypes_vue_vue_type_template_id_62479400___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserTypes_vue_vue_type_template_id_62479400___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/homepage/components/UserTypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/homepage/components/UserTypes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/UserTypes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/UserTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/homepage/components/UserTypes.vue?vue&type=template&id=62479400&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/homepage/components/UserTypes.vue?vue&type=template&id=62479400& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypes_vue_vue_type_template_id_62479400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserTypes.vue?vue&type=template&id=62479400& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/components/UserTypes.vue?vue&type=template&id=62479400&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypes_vue_vue_type_template_id_62479400___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTypes_vue_vue_type_template_id_62479400___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/homepage/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/modules/homepage/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_248bda77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=248bda77& */ "./resources/js/modules/homepage/index.vue?vue&type=template&id=248bda77&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/homepage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_248bda77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_248bda77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/homepage/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/homepage/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/homepage/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/homepage/index.vue?vue&type=template&id=248bda77&":
/*!********************************************************************************!*\
  !*** ./resources/js/modules/homepage/index.vue?vue&type=template&id=248bda77& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_248bda77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=248bda77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/homepage/index.vue?vue&type=template&id=248bda77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_248bda77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_248bda77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);