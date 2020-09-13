"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.validateMail = void 0;

// ---------------------------------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------------------------------
var validateMail = function validateMail(email) {
  var emailData, mailResponse, mailResponseBody;
  return regeneratorRuntime.async(function validateMail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          emailData = {
            "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
            "data": {
              "email": email
            }
          };
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
}; // ---------------------------------------------------------------------------------------------------


exports.validateMail = validateMail;

var submitForm = function submitForm(firstName, lastName, email, password) {
  var formData, formResponse, formResponseBody;
  return regeneratorRuntime.async(function submitForm$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          formData = {
            "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
            "data": {
              "firstName": firstName,
              "lastName": lastName,
              "email": email,
              "password": password
            }
          };
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
          return _context2.abrupt("return", formResponseBody.data.status === "ACTIVE" ? formResponseBody : false);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // ---------------------------------------------------------------------------------------------------


exports.submitForm = submitForm;