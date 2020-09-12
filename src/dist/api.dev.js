"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.validateMailFormat = exports.validateForm = exports.validateMail = void 0;

// Mail Validation - validateMail()
var validateMail = function validateMail(email) {
  var emailData, mailResponse, mailResponseBody;
  return regeneratorRuntime.async(function validateMail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Request Post Body
          emailData = {
            "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
            "data": {
              "email": email
            }
          }; // Make the POST request to the Raisely API (asynchronous)

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.raisely.com/v3/check-user", {
            method: 'post',
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(emailData)
          }));

        case 3:
          mailResponse = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(mailResponse.json());

        case 6:
          mailResponseBody = _context.sent;
          return _context.abrupt("return", mailResponseBody.data.status === 'OK');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Form Validation - validateForm()


exports.validateMail = validateMail;

var validateForm = function validateForm(firstName, lastName, email, password) {
  // Validate that no input field is empty
  if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
    // Validate email format
    return validateMailFormat(email);
  } else {
    return false;
  }
}; // Mail Format Validation - validateMailFormat()


exports.validateForm = validateForm;

var validateMailFormat = function validateMailFormat(email) {
  // RegEx for validating correct formatting of email address
  var mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return mailRegEx.test(email);
}; // Form Submit - submitForm()


exports.validateMailFormat = validateMailFormat;

var submitForm = function submitForm(firstName, lastName, email, password) {
  var formData, formResponse, formResponseBody;
  return regeneratorRuntime.async(function submitForm$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // Request Post Body
          formData = {
            "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
            "data": {
              "firstName": firstName,
              "lastName": lastName,
              "email": email,
              "password": password
            }
          }; // Make the POST request to the Raisely API (asynchronous)

          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.raisely.com/v3/signup", {
            method: 'post',
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(formData)
          }));

        case 3:
          formResponse = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(formResponse.json());

        case 6:
          formResponseBody = _context2.sent;
          return _context2.abrupt("return", formResponseBody.status === 400 ? false : formResponseBody.data.status === "ACTIVE" ? formResponseBody : false);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.submitForm = submitForm;