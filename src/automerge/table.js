const Automerge = require('automerge')

let initTable = Automerge.change(Automerge.init(), doc => {
  doc.table = [
    ['jc', 'lj', 'lz', 'glj'],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ]
})
let serialized = Automerge.save(initTable)

let jiachen = Automerge.load(serialized)
jiachen = Automerge.change(jiachen, (doc) => {
  doc.table = [
    ['jc', '1', '1', 'lj', 'lz', 'glj'],
    ['1', 'whw', 'm', '', '', ''],
    ['1', 'w', '没有内容了', '', '', ''],
    ['', '没有内容了', '没有内容了', '', '', ''],
    ['', '没有内容了', '没有内容了', '', '', ''],
  ]
})

let liujun = Automerge.load(serialized)
liujun = Automerge.change(liujun, (doc) => {
  doc.table = [
    ['jc', 'lj', '', 'lz', 'glj'],
    ['', '1', 'q', '', ''],
    ['', '2', 'w', '', ''],
    ['', '3', 'e', '', ''],
    ['', '4', 'r', '', ''],
  ]
})

// jiachen保存
let serverDoc = Automerge.merge(initTable, jiachen)
console.log(111, serverDoc);

serverDoc = Automerge.merge(serverDoc, liujun)
// liujun保存
console.log(222, serverDoc);

// output
// 111 {
//   table: [
//     ['jc', '1', '1', 'lj', 'lz', 'glj'],
//     ['1', 'whw', 'm', '', '', ''],
//     ['1', 'w', '没有内容了', '', '', ''],
//     ['', '没有内容了', '没有内容了', '', '', ''],
//     ['', '没有内容了', '没有内容了', '', '', '']
//   ]
// }
// 222 {
//   table: [
//     ['jc', 'lj', '', 'lz', 'glj'],
//     ['', '1', 'q', '', ''],
//     ['', '2', 'w', '', ''],
//     ['', '3', 'e', '', ''],
//     ['', '4', 'r', '', '']
//   ]
// }