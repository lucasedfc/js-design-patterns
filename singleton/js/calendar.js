class WeekDays {
    daysEs = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    constructor(lang) {
        this.lang = lang;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === 'es'
            ? this.daysEs
            : this.daysEn
    }

}

const weekDays = new WeekDays('es');
const weekDaysTwo = new WeekDays('en'); // ignored

console.log(weekDays.getDays());
console.log(weekDaysTwo.getDays());