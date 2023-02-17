interface IShowID{
    show(id:number);
}


class EmployeeRepository implements IShowID{
    show(id: number) {
        console.log(`Employee ID:${id}`);
    }

}

class EmployeeRepositoryWithDiff implements IShowID{
    show(id: number) {
        console.log(`Different Employee Id:${id}`);
    }

}

class EmployeeService{
    _employeeRepository:IShowID;
    constructor(employeeRepository:IShowID){
        this._employeeRepository=employeeRepository;
    }

    showMe(id:number){
        this._employeeRepository.show(id);
    }
}


let employeeID=new EmployeeService(new EmployeeRepositoryWithDiff());
employeeID.showMe(1);