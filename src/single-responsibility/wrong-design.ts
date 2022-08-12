/*
Single responsibility means is that class should has only one reason to change.
employee class has multiple responsibilities in this design.
It inserts employee to DB and create report for employee.
Due to these responsibilities Employee class needs to change when there is a change at report printer.
*/
namespace WrongDesign {
  class Employee {
    employeeId: number;
    employeeName: string;
    constructor(_employeeId: number, _employeeName: string) {
      this.employeeId = _employeeId;
      this.employeeName = _employeeName;
    }

    public insertNewEmployee(): boolean {
      //inserts employee information to DB
      return true;
    }

    public printReport(): boolean {
      //prints employee report
      return true;
    }
  }
}
