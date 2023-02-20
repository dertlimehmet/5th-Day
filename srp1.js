class City {
}
class CityRepository {
    constructor() {
        this.cityList = [];
    }
    addCity(city) {
        this.cityList.push(city);
    }
    removeCity(plaka) {
        this.cityList.slice();
    }
    updateCity(city) {
    }
}
class CityPresenter {
    showOnConsole(cityList) {
        cityList.forEach(x => {
            console.log(x);
        });
    }
}
