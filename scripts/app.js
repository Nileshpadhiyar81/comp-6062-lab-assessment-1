const studentFullName = "NIleshpadhiyar";
console.log(studentFullName);
const studentNumber = 1162967;
console.log(studentNumber);
const myname=`${studentFullName}-${studentNumber}`;
console.log(myname);
// console.log(${studentFullName}-${studentNumber});

const headerContent = document.querySelector("h1");
headerContent.classList.add("headingPrimary");
headerContent.innerHTML = myname;
console.log(headerContent.classList);