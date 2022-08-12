/*
Open/Close principle says that class should be open for extension but close for change.
In this design if there would be newreport type you have to change this class.
*/

namespace WrongDesign {
  enum ReportType {
    PdfReport = 0,
    ExcelReport = 1,
    JsonReport = 2,
  }

  class GenerateReport {
    public generateReport(reportType: ReportType): boolean {
      switch (reportType) {
        case ReportType.PdfReport: {
          break;
        }
        case ReportType.ExcelReport: {
          break;
        }
        case ReportType.JsonReport: {
          break;
        }
        default: {
          break;
        }
      }
      return true;
    }
  }
}
