// 尝试多客户端同步数据
const Y = require('yjs')
const { WebsocketProvider } = require('y-websocket')

const doc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:12321', 'docId', doc)
const type = doc.getMap('docId')

window.Y = Y
window.ttt = type
window.doc = doc
window.ws = provider
window.a = doc.getArray('arr')