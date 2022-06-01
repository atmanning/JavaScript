window.onload = () => {
  validateButtons();
};
const validateButtons = () => {
  const inputs = document.querySelectorAll("form");
  for (const input of inputs) {
    //console.log("input");
    input.addEventListener("submit", function (e) {
      console.log("create error list", this.previousElementSibling);
      const errors = createErrorList(e);
      updateFormErrors(errors, this.previousElementSibling);
      e.preventDefault();
    });
  }
  console.log(inputs);
};
const updateFormErrors = (errorList, node) => {
  let ul = document.createElement("ul");
  errorList.forEach((error) => {
    let li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
  node.appendChild(ul);
};
// const unList = (event) => {
//   //creates unordered list inside errors div
//   const newList = document.createElement("ul");
//   const forms = event.target.form;
//   document.body.appendChild(unList);
// };

// const validateBtns = document.getElementsByName("submitBtn");

// //links validate button on form to consts
// const form = (element) => {
//   element.preventDefault();
// };

// let classOfType = "numeric required required_size";
// //test data
// const minLength = 1;

// let finalListOfErrors = [];
// for (const element of listOfFormErrors) {
//   if (element != "") {
//     finalListOfErrors.push(element);
//   }
// }

//   err(finalListOfErrors);
//   console.log(finalListOfErrors);

//   if (finalListOfErrors.length == 0) {
//     //submit the form here
//   }
// };

// for (button of validateBtns) {
//   button.addEventListener("click", form);
// }

const createErrorList = function (event) {
  console.log("parent", this);
  let listOfFormErrors = [];
  const nodes = event.target;
  console.log("target", event.target);
  for (let node of nodes) {
    const classList = node.className;
    const classNames = classList.split(" ");
    const value = node.value;
    if (node.getAttribute("type") === "text") {
      if (classNames.indexOf("required") > -1) {
        if (value.trim() === "") {
          listOfFormErrors.push(
            "Required fields must have a value that is not empty or whitespace."
          );
        }
      }
    }
  }
  //   let listOfFormErrors = [];
  //   if (classOfType.includes("numeric")) {
  //     listOfFormErrors.push(returnsErrorsFromNumeric(""));
  //   }
  //   if (classOfType.includes("phone")) {
  //     listOfFormErrors.push(returnsErrorsFromPhone());
  //   }
  //   if (classOfType.includes("password")) {
  //     listOfFormErrors.push(returnsErrorsFromPassword());
  //   }
  //   if (classOfType.includes("username")) {
  //     listOfFormErrors.push(returnsErrorsFromUsername());
  //   }
  //   if (classOfType.includes("date")) {
  //     listOfFormErrors.push(returnsErrorsFromDate());
  //   }
  //   if (classOfType.includes()) {
  //     listOfFormErrors.push(returnsErrorsFromAlphabetic());
  //   }

  //   if (classOfType.includes()) {
  //     listOfFormErrors.push(returnsErrorsFromRequiredSize());
  //     classOfType = classOfType.replace();
  //   }
  //   if (classOfType.includes()) {
  //     listOfFormErrors.push(returnsErrorsFromBlank());
  //   }
  return listOfFormErrors;
};

// const returnsErrorsFromBlank = (incomingText) => {
//   let errorMessage = "";
//   const text = String(incomingText);
//   let index = 0;

//   for (index = 0; index < text.length; index++) {
//     code = text.charCodeAt(index);
//     if (code == 32 || code == 9) {
//       errorMessage =
//         "Required fields must have a value that is not empty or whitespace.";
//     }
//   }
//   if (text == "") {
//     errorMessage =
//       "Required fields must have a value that is not empty or whitespace.";
//   }
//   return errorMessage; //
// };

// const returnsErrorsFromAlphabetic = (incomingAlphabetic) => {
//   let errorMessage = "";
//   const alphabetic = String(incomingAlphabetic);
//   let index = 0;

//   for (index = 0; index < alphabetic.length; index++) {
//     code = alphabetic.charCodeAt(index);
//     if (
//       !(code > 64 && code < 91) && // upper alpha (A-Z)
//       !(code > 96 && code < 123) // lower alpha (a-z)
//     ) {
//       errorMessage =
//         "Alphabetic fields must be a series of alphabetic characters.";
//     }
//   }

//   return errorMessage; //
// };

// const returnsErrorsFromPassword = (incomingPassword) => {
//   let errorMessage = "";
//   const password = String(incomingPassword);
//   const upperCase = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   const specialCharacters = [
//     " ",
//     "~",
//     "`",
//     "!",
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//     "&",
//     "*",
//     "(",
//     ")",
//     "_",
//     "-",
//     "+",
//     "=",
//     "{",
//     "}",
//     "[",
//     "]",
//     "|",
//     "\\",
//     ":",
//     ";",
//     "<",
//     ",",
//     ">",
//     ".",
//     "?",
//     "/",
//   ];
//   const lowerCase = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let hasUpperCase = false;
//   let hasLowerCase = false;
//   let hasNumber = false;
//   let hasSpecialCharacter = false;
//   for (const character of password) {
//     if (!isNaN(character)) {
//       hasNumber = true;
//     }
//   }
//   for (const character of upperCase) {
//     if (password.includes(character)) {
//       hasUpperCase = true;
//     }
//   }
//   for (const character of specialCharacters) {
//     if (password.includes(character)) {
//       hasSpecialCharacter = true;
//     }
//   }
//   for (const character of lowerCase) {
//     if (password.includes(character)) {
//       hasLowerCase = true;
//     }
//   }
//   if (!(hasLowerCase && hasNumber && hasSpecialCharacter && hasUpperCase)) {
//     errorMessage =
//       "Password fields must contain one or more of each of the following types: uppercase letters, lowercaseletters, numbers, special characters.";
//   }

//   return errorMessage;
// };

// const returnsErrorsFromPhone = (incomingPhone) => {
//   let errorMessage = "";
//   const phone = String(incomingPhone);
//   let index = 0;

//   if (phone.length != 12) {
//     errorMessage = "Phone fields must match the format of XXX-XXX-XXXX.";
//   }

//   for (index = 0; index < phone.length; index++) {
//     if (isNaN(phone[index]) && index != 3 && index != 7) {
//       //01/34/6789
//       errorMessage = "Phone fields must match the format of XXX-XXX-XXXX.";
//     }
//     if ((index == 3 || index == 7) && phone[index] != "-") {
//       errorMessage = "Phone fields must match the format of XXX-XXX-XXXX.";
//     }
//   }
//   return errorMessage; //
// };

// const returnsErrorsFromDate = (incomingDate) => {
//   let errorMessage = "";
//   const date = String(incomingDate);
//   let index = 0;

//   if (date.length != 10) {
//     errorMessage = "Date fields must match the format of XX/XX/XXXX.";
//   }

//   for (index = 0; index < date.length; index++) {
//     if (isNaN(date[index]) && index != 2 && index != 5) {
//       //01/34/6789
//       errorMessage = "Date fields must match the format of XX/XX/XXXX.";
//     }
//     if ((index == 2 || index == 5) && date[index] != "/") {
//       errorMessage = "Date fields must match the format of XX/XX/XXXX.";
//     }
//   }
//   return errorMessage; //
// };

// const returnsErrorsFromUsername = (incomingName) => {
//   let errorMessage = "";
//   const userName = String(incomingName);
//   let index = 0;

//   for (index = 0; index < userName.length; index++) {
//     code = userName.charCodeAt(index);
//     if (
//       !(code > 47 && code < 58) && // numeric (0-9)
//       !(code > 64 && code < 91) && // upper alpha (A-Z)
//       !(code > 96 && code < 123) // lower alpha (a-z)
//     ) {
//       errorMessage =
//         "Username fields must contain only alphanumeric characters.";
//     }
//   }

//   return errorMessage; //
// };

// const returnsErrorsFromRequiredSize = (incomingText, incomingMinimumLength) => {
//   let errorMessage = "";

//   if (String(incomingText).length < incomingMinimumLength) {
//     errorMessage =
//       "Required_size field lengths must exactly match the minlength attribute of that field.";
//   }

//   return errorMessage; //
// };

// const returnsErrorsFromNumeric = (incomingNumber) => {
//   let hasNoErrors = Number.isInteger(incomingNumber);
//   let errorMessage = "";

//   if (hasNoErrors == false) {
//     errorMessage = "Numeric fields must be a series of numbers.";
//   }

//   return errorMessage; //
// };

// const err = (finalListOfErrors) => {
//   const errors = document.getElementsByClassName("errors");
//   errors.value = finalListOfErrors;
// };
// //valitade button gets clicked
// //validate button needs to check errors
// //validate button needs to make list of errors
// //validate button needs to display errors
// //valite button needs to not submit if errors/submit if no errors

// //if only whitespaces then return error
// //error message must read "Required fields must have a value that is not empty or whitespace."
//
