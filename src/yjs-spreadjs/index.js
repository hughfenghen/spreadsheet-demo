var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 1 });

var activeSheet = spread.getActiveSheet();

activeSheet.bind(GC.Spread.Sheets.Events.ValueChanged, function (e, info) {
  console.log("Value (" + info.newValue + ")", info);
});
