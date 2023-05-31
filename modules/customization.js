
let loged = false;
const formLog = document.querySelector(".profile-welcome__form");
// localStorage.clear();

function loginUser() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  let currentUser = [];
  const emailInputValue = document.getElementById('loginEmail').value;
  const passwordInputValue = document.getElementById('loginPassword').value;
  let userFound = false; // добавляем переменную

  for (let i = 0; i < userData.length; i++) {
    // console.log(`emailInputValue: ${emailInputValue} userData[i].email:${userData[i].email}`);
    // console.log(`passwordInputValue: ${passwordInputValue} userData[i].password:${userData[i].password}`);
    if (emailInputValue === userData[i].email && passwordInputValue === userData[i].password) {
      console.log("Данные совпадают");
      loged = true;
      window.localStorage.setItem(`loged`, `${loged}`);
      userFound = true; // если пользователь найден, меняем значение переменной

      document.getElementById("customization__text_name").value =  userData[i].name[0].toUpperCase() + userData[i].name.slice(1);
      document.getElementById("customization__text_surname").value =
        userData[i].surname[0].toUpperCase() + userData[i].surname.slice(1);
      document.getElementById("customization__text_bday").value =
        userData[i].bday;
      document.getElementById("customization__text_email").value =
        userData[i].email;
      document.getElementById("customization__text_password").value =
        userData[i].password;

      var now = new Date(); //Текущая дата 
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени 
      var dob = new Date(userData[i].bday); //Дата рождения 
      var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году 
      var age; //Возраст 

      //Возраст = текущий год - год рождения 
      age = today.getFullYear() - dob.getFullYear();
      //Если ДР в этом году ещё предстоит, то вычитаем из age один год 
      if (today < dobnow) {
        age = age - 1;
      }

      let userName = `${userData[i].name[0].toUpperCase() + userData[i].name.slice(1)} ${(userData[i].surname[0].toUpperCase() + userData[i].surname.slice(1))}`;
      currentUser[0]=userName;
      currentUser[1] = age;

      window.localStorage.setItem(`currentUser`, JSON.stringify(currentUser));
      let user = JSON.parse(localStorage.getItem('currentUser'));

      document.getElementById("profile-user__data-name").textContent = `${user[0]}`||``;
      document.getElementById('profile-user__data-age').textContent = `Возраст: ${user[1]}`||``;;

      document.getElementById("profile-welcome__wripper").style.display = "none";
      document.getElementById("profile-paternity").style.display = "none";
      document.getElementById("profile-user").style.display = "flex";
      document.querySelector(".profile-RSK__checkbox").style.display = "flex";
      currentUser = [];

      return; // выходим из цикла, так как дальше перебирать нет смысла
    }
  }

  if (!userFound) {
    // проверяем, был ли найден пользователь
    console.log("Данные не совпадают");
    alert(`Пользователя с таким Email не существует или ошибка в вводе данных, зарегистрируйтесь!`);
  }
}

function customizationSave() {
  
  const userData = JSON.parse(localStorage.getItem('userData'));
  let InputName = document.getElementById("customization__text_name").value;
  let InputSurname = document.getElementById("customization__text_surname").value;
  let InputBday = document.getElementById("customization__text_bday").value;
  let InputPassword = document.getElementById("customization__text_password").value;
  let InputEmail = document.getElementById("customization__text_email").value

  let foundUser = null;
  // перебираем каждый объект в массиве userData
  for (let i = 0; i < userData.length; i++) { 
    console.log  (InputEmail)
    if (userData[i].email === InputEmail) { 
      // найден email, проверяем остальные данные 
      if (userData[i].name !== document.getElementById("registration__text_name").value) { 
        userData[i].name = InputName; // присваиваем новое значение
        document.getElementById("profile-user__data-name").textContent = `${userData[i].name[0].toUpperCase() + userData[i].name.slice(1)} ${(userData[i].surname[0].toUpperCase() + userData[i].surname.slice(1))}`;
      }
      if (userData[i].surname !== document.getElementById("registration__text_surname").value) { 
        userData[i].surname = InputSurname; // присваиваем новое значение
        document.getElementById("profile-user__data-name").textContent = `${userData[i].name[0].toUpperCase() + userData[i].name.slice(1)} ${(userData[i].surname[0].toUpperCase() + userData[i].surname.slice(1))}`;
      }
      if (userData[i].bday !== document.getElementById("registration__text_bday").value) { 
        userData[i].bday = InputBday; // присваиваем новое значение

        var now = new Date(); //Текущая дата 
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени 
        var dob = new Date(InputBday); //Дата рождения 
        var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году 
        var age; //Возраст 
  
        //Возраст = текущий год - год рождения 
        age = today.getFullYear() - dob.getFullYear();
        //Если ДР в этом году ещё предстоит, то вычитаем из age один год 
        if (today < dobnow) {
          age = age - 1;
        }

        document.getElementById("profile-user__data-age").textContent = "Возраст:" + " " + age;

      }


      if (userData[i].password !== document.getElementById("registration__text_password").value) { 
        userData[i].password = InputPassword; // присваиваем новое значение
      }
     
      foundUser = userData[i]; // сохраняем найденного пользователя
      break; // выходим из цикла, если найденный пользователь уже обработан
    } 
  }
  
  // сохраняем измененные данные в localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  document.getElementById("customization__pop-up").style.display = "none";
}


function exit() {
  loged = false;
  document.getElementById("profile-welcome__wripper").style.display = "flex";
  document.getElementById("profile-paternity").style.display = "flex";
  document.getElementById("profile-user").style.display = "none";
  document.getElementById("myDropdown").style.display = "none";
  localStorage.setItem(`loged`, `${loged}`);
  localStorage.setItem(`currentUser`, ``);
  document.querySelector(".profile-RSK__checkbox").style.display = "none" ;
}

// buttonLog.addEventListener('click', loginUser);
formLog.addEventListener('submit', function (event) {
  event.preventDefault()
})


