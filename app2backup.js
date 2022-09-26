let UserName = document.getElementById("UserName")
let EmailId = document.getElementById("EmailId")
let Date = document.getElementById("Date")
let clear = document.getElementById("clear")
let Submit = document.getElementById("Submit")
let Genders = document.getElementById("Genders")
let Qualification = document.getElementById("Qualification")
let Profile = document.getElementById("Profile")
let child = document.getElementById("child")
let UserListDisplay = document.getElementById("UserListDisplay")
let operation = document.getElementById('operation');

clear.addEventListener("click", function (e) {
    e.preventDefault();
    UserName.value = "";
    EmailId.value = "";
    Date.value = "";
    Genders.value = "";
    Qualification.value = "";
    Profile.value = ""
});

let data = [];
Submit.addEventListener("click", function (e) {
    e.preventDefault();
    let user = UserName.value;
    let email = EmailId.value;
    let date = Date;
    let gender = Genders.value;
    let qualification = Qualification.value;
    let profile = Profile.value;
    let jsonObject = {}
    let regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexUser = /^[A-Za-z]+$/;

    if (user === '' || email === '' || date === '' || gender === '' || qualification === '' || profile === '') {
        alert('fill all the details ')
        return;
    }
    if (!regxEmail.test(email) || !regexUser.test(user)) {
        alert('incorectly Written')
        return;
    }
    if (user != '' && email != '' && date != '' && gender != '' && qualification != '' && profile != '') {
        jsonObject.user = user;
        jsonObject.email = email;
        jsonObject.gender = gender;
        jsonObject.qualification = qualification;
        jsonObject.profile = profile;
        let userData = [];
        const localStorageData = localStorage.getItem('DataInfo') && JSON.parse(localStorage.getItem('DataInfo'));
        if (!localStorageData) {
            userData.push(jsonObject);
            alert('Data submitted successfully')
            localStorage.setItem('DataInfo', JSON.stringify(userData));
        } else {
            let isUniqueEmail = true;
            userData = [...localStorageData];
            for (let i = 0, l = localStorageData.length; i < l; i = i + 1) {
                if (localStorageData?.[i]?.email === email) {//optional chaining
                    isUniqueEmail = false;
                    alert('email is  in use')
                    break;
                }
            }
            if (isUniqueEmail) {
                alert('Data submitted successfully')

                userData.push(jsonObject);
                console.log(userData)
                localStorage.setItem('DataInfo', JSON.stringify(userData));

            }
        }
    }
    userList()

});

function userList() {
    const dataDisplay = localStorage.getItem('DataInfo') && JSON.parse(localStorage.getItem('DataInfo'));
    console.log(dataDisplay)
    child.innerHTML = "";
    if (dataDisplay && Array.isArray(dataDisplay)) {
        dataDisplay.forEach((value, index) => {
            var tr = document.createElement('tr');
            console.log(index)
            // console.log(value)
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${value.user}</td> 
                <td>${value.email}</td> 
                  <td><button class="view" key=${index} >view</button>
                    <button class="edit" key=${index}   >edit</button>
                    <button  class="delete"key=${index}  >delete</button></td> `
            child.appendChild(tr)
        })
    }

    //view

    const viewList = document.getElementsByClassName('view');

    for (let i = 0; i < viewList.length; i++) {
        viewList[i].addEventListener('click', function (e) {
            console.log('view clicked')
            let dataDisplay = JSON.parse(localStorage.getItem('DataInfo'));
            document.getElementById('view').innerHTML = ""
            dataDisplay.map((value, Index) => {
                if (Index == e.target.getAttribute('key')) {
                    var tr = document.createElement('tr');
                    tr.innerHTML = `<td>${Index + 1}</td>
                <td>${value.user}</td>\
                <td>${value.email}</td>
                <td>${value.Date}</td>
                <td>${value.gender}</td>
                <td>${value.qualification}</td>
                <td>${value.profile}</td>
                `
                    document.getElementById('view').appendChild(tr);
                }



            })

            // console.log(e.target.getAttribute('key'))

        })
    }
    //edit

    const viewEdit = document.getElementsByClassName('edit');
    for (let i = 0; i < viewEdit.length; i++) {
        viewEdit[i].addEventListener('click', function (e) {

            let dataDisplay = JSON.parse(localStorage.getItem('DataInfo'));
            document.getElementById('view').innerHTML = ""
            dataDisplay.map((value, Index) => {
                if (Index == e.target.getAttribute('key')) {
                    let user = UserName;
                    let email = EmailId;
                    let date = Date.toString();
                    let gender = Genders;
                    let qualification = Qualification;
                    let profile = Profile;
                    user.value = value.user;
                    email.value = value.email;
                    date.value = value.date;
                    gender.value = value.gender;
                    qualification.value = value.qualification;
                    profile.value = value.profile;


                }
                
            })
            
        })
  
    }
   const viewDelete = document.getElementsByClassName('delete');
    for (let i = 0; i <viewDelete.length; i++) {
        viewDelete[i].addEventListener('click', function (e) {
            alert('sure u want to delete that Data')
            console.log("delete is clicked")
            console.log(dataDisplay);
            localStorage.setItem('DataInfo', JSON.stringify(
                dataDisplay.filter((value, Index) => {
                    if (Index != e.target.getAttribute('key')) {
                        return true;
                    }
                })
            ));
        })
    }
        return;
}
// function deletefunc()
// {
//     const dataDisplay = localStorage.getItem('DataInfo') && JSON.parse(localStorage.getItem('DataInfo'));
//     console.log(dataDisplay)
//     child.innerHTML = "";
//             if (dataDisplay && Array.isArray(dataDisplay)) {
//                 dataDisplay.forEach((value, index) => {
//                     var tr = document.createElement('tr');
//                     console.log(index)
//                     // console.log(value)
//                     tr.innerHTML = `
//                         <td></td>
//                         <td></td> 
//                         <td></td> 
//                           <td><button class="view" key=${index} >""</button>
//                             <button class="edit" key=${index}   >""</button>
//                             <button  class="delete"key=${index}  >""</button></td> `
//                     child.appendChild(tr)
//                 })
//             }
//  }
    









