const Y = require('yjs')

const initTable = [
  ['jc', 'lj', 'lz', 'glj'],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
]

const jiachen = new Y.Doc()
jiachen.getMap('data').set('table', initTable)
jiachen.getMap('data').set('table', [
  ['jc', '1', '1', 'lj', 'lz', 'glj'],
  ['1', 'whw', 'm', '', '', ''],
  ['1', 'w', '没有内容了', '', '', ''],
  ['', '没有内容了', '没有内容了', '', '', ''],
  ['', '没有内容了', '没有内容了', '', '', ''],
])

const liujun = new Y.Doc()
liujun.getMap('data').set('table', initTable)
liujun.getMap('data').set('table', [
  ['jc', 'lj', '', 'lz', 'glj'],
  ['', '1', 'q', '', ''],
  ['', '2', 'w', '', ''],
  ['', '3', 'e', '', ''],
  ['', '4', 'r', '', ''],
])

const state1 = Y.encodeStateAsUpdate(jiachen)
const state2 = Y.encodeStateAsUpdate(liujun)
Y.applyUpdate(jiachen, state2)
Y.applyUpdate(liujun, state1)


console.log(liujun.getMap('data').toJSON());
console.log(jiachen.getMap('data').toJSON());