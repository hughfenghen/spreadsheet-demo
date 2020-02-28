const Y = require('yjs')
const { WebsocketProvider } = require('y-websocket')
const GC = require('./gc.spread.sheets.all.13.0.0.min.js')
const { pipe, map, split, forEach } = require('lodash/fp')

var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 1 });
var activeSheet = spread.getActiveSheet();

const userId = Math.random()
const doc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:12321', 'docId', doc)
const dataTable = doc.getMap('dataTabel')

activeSheet.bind(GC.Spread.Sheets.Events.ValueChanged, (e, { row, col, newValue }) => {
  dataTable.set(`${row},${col}`, newValue)
});

dataTable.observe((evt, tr) => {
  console.log('--- dataTable change', evt, tr);
  // curValue = activeSheet.getValue()
  pipe(
    map(split(',')),
    forEach(([r, c]) => {
      console.log(1111, activeSheet.getValue(r, c), dataTable.get(`${r},${c}`));
      activeSheet.setValue(r, c, dataTable.get(`${r},${c}`))
    })
  )([...evt.keysChanged])
})