/*
With this design you can add new report type without change other classes
*/
namespace CorrectDesign {
  class ReportGenerator {
    generateReport(generateReport: GenerateReport): boolean {
      return generateReport.generateReport();
    }
  }

  abstract class GenerateReport {
    abstract generateReport(): boolean;
  }

  class PdfGenerateReport extends GenerateReport {
    generateReport(): boolean {
      console.log("PDF report generated...");
      return true;
    }
  }

  class ExcelGenerateReport extends GenerateReport {
    generateReport(): boolean {
      console.log("Excel report generated...");
      return true;
    }
  }

  class JsonGenerateReport extends GenerateReport {
    generateReport(): boolean {
      console.log("Json report generated...");
      return true;
    }
  }

  //usage
  var reportGenerater = new ReportGenerator();
  reportGenerater.generateReport(new ExcelGenerateReport());
  reportGenerater.generateReport(new JsonGenerateReport());
  reportGenerater.generateReport(new PdfGenerateReport());
}
