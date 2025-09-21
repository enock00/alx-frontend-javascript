interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number; 
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  },
  workTeacherTasks: function (): string {
    throw new Error("Function not implemented.");
  }
};


console.log(teacher3);

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  },
  workDirectorTasks: function (): string {
    throw new Error("Function not implemented.");
  },
  workTeacherTasks: function (): string {
    throw new Error("Function not implemented.");
  }
};

console.log(director1);

interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));


interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}


class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}


interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}


class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}


function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
