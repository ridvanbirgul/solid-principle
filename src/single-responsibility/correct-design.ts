namespace CorrectDesign {
  class Employee {
    employeeId: number;
    employeeName: string;
    constructor(_employeeId: number, _employeeName: string) {
      this.employeeId = _employeeId;
      this.employeeName = _employeeName;
    }

    public insertEmployee(): boolean {
      //inserts employee to db
      return true;
    }
  }

  /**
   * This class print report of employee
   */
  class PrintReport {
    public printReport(employee: Employee): boolean {
      return true;
    }
  }
}
