const sumbitBtn = document.querySelector("#smtBtn");
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputAge = document.querySelector("#age");

let clickData;
sumbitBtn.addEventListener("click",   ()=>{
    let buttonEl = document.createElement('button');
    buttonEl.setAttribute('id','data');
    buttonEl.innerText = 'Click me and open data';
    clickData = buttonEl;
    document.body.append(buttonEl);
    clickData.addEventListener('click',()=>{
        const nameValue = inputName.value;
        const surnameValue = inputSurname.value;
        const ageValue = inputAge.value;
        let data = document.createElement('p');
        data.innerHTML=`${nameValue} ${surnameValue} ${ageValue}`
        document.body.append(data); 

        const userData = {
        name: nameValue,
        surname: surnameValue,
        age: ageValue
    };
    localStorage.setItem('userdata', JSON.stringify(userData));

    }, { once: true })
},{ once: true });