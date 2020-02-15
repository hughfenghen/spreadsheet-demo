const Automerge = require('automerge')

let userADoc = Automerge.change(Automerge.init(), (doc) => {
  doc.list = []
})

const seriz = Automerge.save(userADoc)
// post to server
let serverDoc = Automerge.load(seriz) 
console.log('===== server doc', serverDoc);

// userA
let userACurDoc = Automerge.change(userADoc, doc => {
  doc.list.push('blackbird')
})
let userAChange = Automerge.getChanges(userADoc, userACurDoc)
userADoc = userACurDoc

// ------- userA update 
serverDoc = Automerge.applyChanges(serverDoc, userAChange)
console.log('===== server doc', serverDoc);
// ------- userA update 

// ------- userB join，init data from server
let userBDoc = Automerge.load(Automerge.save(serverDoc))
userBCurDoc = Automerge.change(userBDoc, doc => {
  doc.list.push('robin')
})
let userBChange = Automerge.getChanges(userBDoc, userBCurDoc)
userBDoc = userBCurDoc
// ------- userB join

// ------- broadcast to server and userA
serverDoc = Automerge.applyChanges(serverDoc, userBChange)
console.log('===== server doc', serverDoc);

userADoc = Automerge.applyChanges(userADoc, userBChange)
console.log('----- userA doc', userADoc);
// ------- broadcast to server and userA

console.log('######  A and B add an element at the same time');
userACurDoc = Automerge.change(userADoc, doc => {
  doc.list.push('~~~A')
})
userAChange = Automerge.getChanges(userADoc, userACurDoc)
userADoc = userACurDoc

userBCurDoc = Automerge.change(userBDoc, doc => {
  doc.list.push('~~~B')
})
userBChange = Automerge.getChanges(userBDoc, userBCurDoc)
userBDoc = userBCurDoc

serverDoc = Automerge.applyChanges(serverDoc, userBChange)
console.log('===== server doc', serverDoc);

userADoc = Automerge.applyChanges(userADoc, userBChange)
console.log('----- userA doc', userADoc);

serverDoc = Automerge.applyChanges(serverDoc, userAChange)
console.log('===== server doc', serverDoc);

userBDoc = Automerge.applyChanges(userBDoc, userAChange)
console.log('----- userB doc', userADoc);
console.log('######  A and B add an element at the same time');

console.log('###### A and B set first element at the same time');
userACurDoc = Automerge.change(userADoc, doc => {
  doc.list[0] = 'AAA'
})
userAChange = Automerge.getChanges(userADoc, userACurDoc)
userADoc = userACurDoc

userBCurDoc = Automerge.change(userBDoc, doc => {
  doc.list[0] = 'BBB'
})
userBChange = Automerge.getChanges(userBDoc, userBCurDoc)
userBDoc = userBCurDoc

serverDoc = Automerge.applyChanges(serverDoc, userBChange)
console.log('===== server doc', serverDoc);

userADoc = Automerge.applyChanges(userADoc, userBChange)
console.log('----- userA doc', userADoc);

serverDoc = Automerge.applyChanges(serverDoc, userAChange)
console.log('===== server doc', serverDoc);

userBDoc = Automerge.applyChanges(userBDoc, userAChange)
console.log('----- userB doc', userBDoc);
console.log('###### A and B set first element at the same time');
