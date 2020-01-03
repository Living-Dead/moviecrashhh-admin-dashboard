class dateService {

    constructor(date) {
        this.iDate = date;
        this.monthNames = [
            'Január', 'Február', 'Március',
            'Április', 'Május', 'Június',
            'Július', 'Augusztus', 'Szeptember',
            'Október', 'November', 'December'
        ];

        this.year = date.getFullYear();
        this.monthIndex = date.getMonth();
        this.day = date.getDate();

    };
    formatDate() {
        return `${this.year} ${this.monthNames[this.monthIndex]} ${this.day}`;
    };
    getWeek() {

        console.log(this.iDate);

        this.iDate = new Date(Date.UTC(this.iDate.getFullYear(), this.iDate.getMonth(), this.iDate.getDate()));
        this.iDate.setUTCDate(this.iDate.getUTCDate() + 4 - (this.iDate.getUTCDay() || 7));
        let yearStart = new Date(Date.UTC(this.iDate.getUTCFullYear(), 0, 1));
        let weekNo = Math.ceil((((this.iDate - yearStart) / 86400000) + 1) / 7);

        return weekNo;
    };
    getMonthName() {
        return this.monthNames[this.iDate.getMonth()];
    }
}

module.exports = dateService;