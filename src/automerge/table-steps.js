const Automerge = require('automerge')

let initTable = Automerge.change(Automerge.init(), doc => {
  doc.table = [
    ['嘉辰', '刘俊', '吕喆', '高丽君'],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ]
})
let serialized = Automerge.save(initTable)

let jiachen = Automerge.load(serialized)
jiachen = Automerge.change(jiachen, (doc) => {
  // doc.table = [
  //   ['嘉辰', '1', '1', '刘俊', '吕喆', '高丽君'],
  //   ['1', '王慧文', '穆荣均', '', '', ''],
  //   ['1', '王兴', '没有内容了', '', '', ''],
  //   ['', '没有内容了', '没有内容了', '', '', ''],
  //   ['', '没有内容了', '没有内容了', '', '', ''],
  // ]
  doc.table[1][0] = '1'
  doc.table[2][0] = '1'
  doc.table[0].splice(1, 0, '1')
  doc.table[1].splice(1, 0, '王慧文')
  doc.table[2].splice(1, 0, '王兴')
  doc.table[3].splice(1, 0, '没有内容了')
  doc.table[4].splice(1, 0, '没有内容了')
  doc.table[0].splice(2, 0, '1')
  doc.table[1].splice(2, 0, '穆荣均')
  doc.table[2].splice(2, 0, '没有内容了')
  doc.table[3].splice(2, 0, '没有内容了')
  doc.table[4].splice(2, 0, '没有内容了')
})

let liujun = Automerge.load(serialized)
liujun = Automerge.change(liujun, (doc) => {
  // doc.table = [
  //   ['嘉辰', '刘俊', '', '吕喆', '高丽君'],
  //   ['', '1', 'q', '', ''],
  //   ['', '2', 'w', '', ''],
  //   ['', '3', 'e', '', ''],
  //   ['', '4', 'r', '', ''],
  // ]
  doc.table[1][1] = '1'
  doc.table[2][1] = '2'
  doc.table[3][1] = '3'
  doc.table[4][1] = '4'
  doc.table[0].splice(2, 0, '')
  doc.table[1].splice(2, 0, 'q')
  doc.table[2].splice(2, 0, 'w')
  doc.table[3].splice(2, 0, 'e')
  doc.table[4].splice(2, 0, 'r')
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
//     ['嘉辰', '1', '1', '刘俊', '吕喆', '高丽君'],
//     ['1', '王慧文', '穆荣均', '', '', ''],
//     ['1', '王兴', '没有内容了', '', '', ''],
//     ['', '没有内容了', '没有内容了', '', '', ''],
//     ['', '没有内容了', '没有内容了', '', '', '']
//   ]
// }
// 222 {
//   table: [
//     ['嘉辰', '1', '1', '刘俊', '', '吕喆', '高丽君'],
//     ['1', '王慧文', '穆荣均','1', 'q', '', ''],
//     ['1', '王兴', '没有内容了', '2', 'w', '', ''],
//     ['', '没有内容了', '没有内容了', '3', 'e', '', ''],
//     ['', '没有内容了', '没有内容了', '4', 'r', '', '']
//   ]
// }