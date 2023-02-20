class Students{
    takeCourse(){
        console.log("Öğrenciler ders alır");
    }
}

interface ICourse{
    dropCourse();
}

class MaleStudents extends Students implements ICourse{
    dropCourse() {
        console.log("Bazı erkek öğrenciler dersi bıraktı");
    }

}

class FemaleStudents extends Students{
    dropCourse(){
        throw new Error("Kız öğrenciler dersi bırakmaz");
    }
}

let students:Students;

students=new MaleStudents();
students.takeCourse();
(students as MaleStudents).dropCourse();


students=new FemaleStudents();
students.takeCourse();
(students as FemaleStudents).dropCourse();