class City{
    plaka:number;
    cityName:string;
}

class CityRepository{
    cityList:City[]=[];

    addCity(city:City){
        this.cityList.push(city);
    }

    removeCity(plaka:number){
        this.cityList.slice();
    }

    updateCity(city:City){

    }
}

class CityPresenter{
    showOnConsole(cityList:City[]){
        cityList.forEach(x=>{
            console.log(x);
        })
    }
}