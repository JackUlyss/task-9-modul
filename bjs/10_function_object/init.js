
function generate () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('jobOutput').innerText = initPerson.job;
    document.getElementById('birthOutput').innerText = initPerson.birth;
};
document.getElementById('btn-generate').addEventListener ('click', generate)
document.getElementById('btn-reset').addEventListener ('click', function () {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('jobOutput').innerText = '';
    document.getElementById('birthOutput').innerText = '';
})