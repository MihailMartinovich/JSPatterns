class Employee {
  constructor(name){
    this._name = name;
  }

  calculateSalary() {
    console.log(`${this._name} salary is $${168 * this.rate}`);
  }
}

export default Employee;