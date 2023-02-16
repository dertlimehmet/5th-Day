class Student{
    id:number;
    name:string;
    surname:string;
    classroom:string;
    constructor(id:number,name:string,surname:string,classroom:string){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.classroom=classroom;
    }
}


interface IStudentRepository{
    showStudent():Student[];
}

class StudentRepository implements IStudentRepository{
    showStudent(): Student[] {
        let students:Student[]=[];
        students.push(new Student(1,"mehmet","dertli","B"));
        students.push(new Student(2,"metin","dertli","A"));
        students.push(new Student(3,"hatice","dertli","C"));
        students.push(new Student(4,"melek","dertli","B"));
        return students;
    }

}


class StudentService{
    private _studentRepository:IStudentRepository;
    readonly _newId=55;
    constructor(studentRepository:IStudentRepository){
        this._studentRepository=studentRepository;
    }
    showStudent():Student[]{
        let newStudents:Student[]=[];
        this._studentRepository.showStudent().forEach(x=>{
            newStudents.push(new Student(x.id+this._newId,x.name,x.surname,x.classroom))
        })
        return newStudents;
    }
}

class StudentFactory{
    public CreateRep():IStudentRepository{
        return new StudentRepository();
    }
}

var studentService=new StudentService(new StudentFactory().CreateRep());
studentService.showStudent().forEach(x=>{
    console.log(`${x.id} ${x.name} ${x.surname} ${x.classroom}`)
})