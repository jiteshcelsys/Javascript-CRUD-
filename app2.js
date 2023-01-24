const Btn = document.getElementById("button");

const UserName = document.getElementById("UserName");
const EmailId = document.getElementById("EmailId");
const Date = document.getElementById("Date");
const clear = document.getElementById("clear");
const Submit = document.getElementById("Submit");
const Genders = document.getElementById("Genders");
const Qualification = document.getElementById("Qualification");
const Profile = document.getElementById("Profile");
const child = document.getElementById("child");
const UserListDisplay = document.getElementById("UserListDisplay");
const operation = document.getElementById("operation");
document.addEventListener("DOMContentLoaded", retrieveFunction);
clear.addEventListener("click", clearData);
function clearData() {
  UserName.value = "";
  EmailId.value = "";
  Date.value = "";
  Genders.value = "";
  Qualification.value = "";
  Profile.value = "";
}

const somefunction = () => {
 
  Btn.innerHTML = ` <button id="clear" class="clear">Clear</button>
    <button id="Submit" class="clear">Submit</button>`;
  let Submit = document.getElementById("Submit");

  Submit.addEventListener("click", function (e) {
    e.preventDefault();

    let user = UserName.value;
    let email = EmailId.value;
    let date = Date.value;
    let gender = Genders.value;
    let qualification = Qualification.value;
    let profile = Profile.value;
    let jsonObject = {};
    let regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexUser = /^[A-Za-z]+$/;

    if (
      user === "" ||
      email === "" ||
      date === "" ||
      gender === "" ||
      qualification === "" ||
      profile === ""
    ) {
      alert("fill all the details ");
      return;
    }
    if (!regxEmail.test(email) || !regexUser.test(user)) {
      alert("incorectly Written");
      return;
    }
    if (
      user != "" &&
      email != "" &&
      date != "" &&
      gender != "" &&
      qualification != "" &&
      profile != ""
    ) {
      jsonObject.user = user;
      jsonObject.email = email;
      jsonObject.gender = gender;
      jsonObject.qualification = qualification;
      jsonObject.profile = profile;
      jsonObject.date = date;
      let userData = [];
      const removeItemm = localStorage.getItem("DataInfo");
      console.log(removeItemm);
      const localStorageData =
        localStorage.getItem("DataInfo") &&
        JSON.parse(localStorage.getItem("DataInfo"));
      console.log(localStorageData);
      if (!localStorageData) {
        userData.push(jsonObject);
        alert("Data submitted successfully");

        localStorage.setItem("DataInfo", JSON.stringify(userData));
      } else {
        let isUniqueEmail = true;
        userData = [...localStorageData];
        for (let i = 0, l = localStorageData.length; i < l; i = i + 1) {
          if (localStorageData?.[i]?.email === email) {
            isUniqueEmail = false;
            alert("email is  in use");
            return;
          }
        }

        if (isUniqueEmail) {
          alert("Data submitted successfully");
          userData.push(jsonObject);
          console.log(userData);
          localStorage.setItem("DataInfo", JSON.stringify(userData));
        }
      }
    }
    retrieveFunction();
    clearData();
  });
}

addEventListener("DOMContentLoaded", somefunction()
);

function retrieveFunction() {
  const localData = JSON.parse(localStorage.getItem("DataInfo"));
  console.log(localData);
  const tbody = document.querySelector(".tbody");
  tbody.innerHTML = "";
  console.log(localData);
  if (localData) {
    localData.map((item, index) => {
      const buttonDel = document.createElement("button");
      const buttonView = document.createElement("button");
      const buttonEdit = document.createElement("button");
      buttonDel.innerHTML = "delete";
      buttonView.innerHTML = "View";
      buttonEdit.innerHTML = "Change";
      buttonDel.setAttribute("key", index);
      buttonView.setAttribute("key", index);
      buttonEdit.setAttribute("key", index);

      buttonDel.addEventListener("click", delFunc);
      buttonView.addEventListener("click", viewFunc);
      buttonEdit.addEventListener("click", editFunc);
      const tr = document.createElement("tr");
      const td = document.createElement("td");

      tr.innerHTML = `<td>${index + 1}</td><td>${item.user}</td>
            <td>${item.email}</td>
            `;
      td.append(buttonDel);
      td.append(buttonView);
      td.append(buttonEdit);
      tr.append(td);
      tbody.append(tr); //innner
      child.append(tbody); //outer
    });
  }
}

function editFunc(e) {
  e.preventDefault();
  Btn.innerHTML = ` <button id="clear" class="clear">Clear</button>
    <button id="Edit" class="clear">Edit</button>`;
  document.getElementById("Edit").addEventListener("click", (e) => {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem("DataInfo"));
    let user = UserName.value;
    let email = EmailId.value;
    let date = Date.value;
    let gender = Genders.value;
    let qualification = Qualification.value;
    let profile = Profile.value;
    const jsonObject = {
      user,
      email,
      date,
      gender,
      qualification,
      profile,
    };
    console.log(localData);
    const ingg = localData.findIndex((x) => {
      console.log(x.email == jsonObject.email);
      return x.email === jsonObject.email;
    });
    console.log(ingg);
    localData[ingg] = jsonObject;
    localStorage.setItem("DataInfo", JSON.stringify(localData));
    Btn.innerHTML = ` <button id="clear" class="clear">Clear</button>
  <button id="Submit" class="clear">Submit</button>`;
    retrieveFunction();
    clearData();
    somefunction();
  });
  let matchingKey = e.target.getAttribute("key");
  console.log(matchingKey);
  const localData = JSON.parse(localStorage.getItem("DataInfo"));
  console.log(localData);
  localData.map((item, index) => {
    if (matchingKey == index) {
      let user = UserName;
      let email = EmailId;
      let date = Date;
      let gender = Genders;
      let qualification = Qualification;
      let profile = Profile;
      user.value = item.user;
      email.value = item.email;
      date.value = item.date;
      gender.value = item.gender;
      qualification.value = item.qualification;
      localStorage.removeItem("key", index);
    }
  });
}

function viewFunc(e) {
  const tbodyView = document.getElementById("view");
  tbodyView.innerHTML = ``;
  console.log(e.target.getAttribute("key"));
  const localData = JSON.parse(localStorage.getItem("DataInfo"));
  localData.map((item, index) => {
    if (index == e.target.getAttribute("key")) {
      console.log(item.date);
      var tr = document.createElement("tr");
      tr.innerHTML = `<td>${index + 1}</td>
            <td>${item.user}</td><td>${item.email}</td><td>${item.date}</td>
            <td>${item.gender}</td> <td>${item.qualification}</td><td>${
        item.profile
      }</td>`;

      tbodyView.appendChild(tr);
    }
  });
}

function delFunc(e) {
  alert("sure u want to del");
  const localData = JSON.parse(localStorage.getItem("DataInfo"));
  localData.map((item, index) => {
    localStorage.setItem(
      "DataInfo",
      JSON.stringify(
        localData.filter((value, Index) => {
          if (Index != e.target.getAttribute("key")) {
            return true;
          }
        })
      )
    );
  });
  retrieveFunction();
  let x = document.getElementById("view");
  x.innerHTML = "";
  clearData();
}
