const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Светлана",
            "id_4": "Анна",
            "id_5": "Дарья",
            "id_6": "Надежда",
            "id_7": "Маргарита",
            "id_8": "Диана",
            "id_9": "Елизавета",
            "id_10": "Алиса"
        }
    }`,
    maleJobJson: `{
        "count": 5,
        "list": {
            "id_1": "пожарный",
            "id_2": "плотник",
            "id_3": "слесарь",
            "id_4": "солдат",
            "id_5": "шахтёр"
        }
    }`,
    femaleJobJson: `{
        "count": 5,
        "list": {
            "id_1": "воспитатель",
            "id_2": "стюардесса",
            "id_3": "модель",
            "id_4": "швея",
            "id_5": "горничная"
        }
    }`,
    jobJson: `{
        "count": 5,
        "list": {
            "id_1": "врач",
            "id_2": "программист",
            "id_3": "педагог",
            "id_4": "повар",
            "id_5": "юрист"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomFirstName: function () {

        if (this.person.gender === this.GENDER_MALE) {
        
            return this.randomValue(this.firstNameMaleJson);

        } else {

            return this.randomValue(this.firstNameFemaleJson);

        }
    },


     randomSurname: function () {

        if (this.person.gender === this.GENDER_MALE) {

            return this.randomValue(this.surnameJson);

        } else {

            return this.randomValue(this.surnameJson)+'a'
        
        }
    },

    randomPatronymic: function () {

        let patronymic = this.randomValue(this.firstNameMaleJson)

        if (this.person.gender === this.GENDER_MALE) {
            
            if (patronymic.includes('й', patronymic.length - 1)) {

                return patronymic.slice(0, -1)+'евич';

            } else if (patronymic.includes('а', patronymic.length - 1)) {

                return patronymic.slice(0, -1)+'ич';

            } else {
                
                return patronymic+'ович'

            }
    
        } else {

            if (patronymic.includes('й', patronymic.length - 1)) {

                return patronymic.slice(0, -1)+'евна';

            } else if (patronymic.includes('а', patronymic.length - 1)) {

                return patronymic.slice(0, -1)+'ична';

            } else {
                
                return patronymic+'овна'

            }
        }
    },

    randomGender: function () {

        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomDay: function () {
        if (month === 2) {

            return day = this.randomIntNumber(28, 1)
     
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
     
            return day = this.randomIntNumber(30, 1)
     
        } else {
     
            return day = this.randomIntNumber(31, 1)
     
        }
    },

    randomDateOfBirth: function () {
        
       
        month = this.randomIntNumber(12, 1);
        day = this.randomDay()
        
        switch (month) {
            case 1:
                month = 'января';
                break;
            case 2:
                month = 'февраля';
                break;
            case 3:
                month = 'марта';
                break;
            case 4:
                month = 'апреля';
                break;
            case 5:
                month = 'мая';
                break;
            case 6:
                month = 'июня';
                break;
            case 7:
                month = 'июля';
                break;
            case 8:
                month = 'августа';
                break;
            case 9:
                month = 'сенятбря';
                break;
            case 10:
                month = 'октября';
                break;
            case 11:
                month = 'ноября';
                break;
            case 12:
                month = 'декабря';
                break;
        }
        const year = this.randomIntNumber(1923, 2005);

        return `${day} ${month} ${year}`

    },

    randomJob: function () {
        if (this.person.gender === this.GENDER_MALE) {

            return this.randomValue(this.randomIntNumber() === 1 ? this.maleJobJson : this.jobJson);
    
        } else {
    
            return this.randomValue(this.randomIntNumber() === 1 ? this.femaleJobJson : this.jobJson);
            
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.job = this.randomJob();
        this.person.birth = this.randomDateOfBirth();
        return this.person;
    }
};

