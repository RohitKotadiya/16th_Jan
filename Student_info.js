class Student {
    constructor(name, marksMaths, marksEnglish, passingYear, date) {
        this.name = name;
        this.marksMaths = marksMaths;
        this.marksEnglish = marksEnglish;
        this.passingYear = passingYear;
        this.date = date;
        console.log(this.marksMaths + " " + this.marksEnglish);
    }
    calculateAvg() {
        return this.avgMarks = (this.marksMaths + this.marksEnglish) / 2;
    }
}
var arr = [];
const matchEx = /[a-zA-Z]/, regEx = /[0-9]/;
if (localStorage.getItem("student")) {
    arr = JSON.parse(localStorage.getItem("student"));
}
function addData() {
    var formData = document.getElementById('my-form');
    const studName = formData.studentName.value;
    const marksMaths = parseInt(formData.marksMaths.value);
    const marksEnglish = parseInt(formData.marksEnglish.value);
    const passingYear = formData.passingYear.value;
    const date = new Date();
    if (!matchEx.test(studName)) {
        alert("Invalid Student Name");
        formData.studentName.focus();
        formData.studentName.value = "";
        return false;
    }
    else if (!regEx.test(marksMaths) || marksMaths < 0 || marksMaths > 100) {
        alert("Invalid marks of Maths");
        formData.marksMaths.focus();
        formData.marksMaths.value = "";
        return false;
    }
    else if (!regEx.test(marksEnglish) || marksEnglish < 0 || marksEnglish > 100) {
        alert("Invalid marks of English");
        formData.studentName.focus();
        formData.marksEnglish.value = "";
        return false;
    }
    else if (!regEx.test(passingYear) || passingYear < 2000 || passingYear > 2019) {
        alert("Passing year must between 2000 to 2019");
        formData.passingYear.focus();
        formData.passingYear.value = "";
        return false;
    }
    else {
        var student1 = new Student(studName, marksMaths, marksEnglish, passingYear, date.toUTCString);
        student1.calculateAvg();
        arr.push(student1);
        localStorage.setItem("student", JSON.stringify(arr));
    }
}
showData();
function showData() {
    var studData = JSON.parse(localStorage.getItem("student"));
    var myTable = document.getElementById("my-table");
    for (var i = 0; i < studData.length; i++) {
        var row = myTable.insertRow();
        row.insertCell(0).textContent = i + 1;
        row.insertCell(1).textContent = studData[i].name;
        row.insertCell(2).textContent = studData[i].marksMaths;
        row.insertCell(3).textContent = studData[i].marksEnglish;
        row.insertCell(4).textContent = studData[i].avgMarks;
        row.insertCell(5).textContent = studData[i].passingYear;
        row.insertCell(6).textContent = studData[i].date;
    }
}
function clearData() {
    localStorage.clear();
    window.location.href = "Student_info.html";
}
