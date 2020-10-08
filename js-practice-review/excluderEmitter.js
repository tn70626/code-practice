// could be potentially more than 3 keys in the object above
items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'gold', type: 'computer', age: 40 },
];

excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' },
];

// the function takes in two parameters
function excludeItems(items, excludes) {
  // iterates through the exclusion array
  excludes.forEach((pair) => {
    // items are filtered to:
    // item[color] = "silver" === item[silver] = undefined;
    items = items.filter((item) => item[pair.k] !== pair.v);
  });
  return items;
}

// 1. Describe what this function is doing...

// 2. What is wrong with that function ?
// pair.k = 'color', 'type'
// it is checking if

// 3. How would you optimize it ?

console.log(excludeItems(items, excludes));

/**
 * Create an emitter function
 * 1. Support subscribing to events
 * 2. Support emitting events
 * 3. Support unsubscribing events
 */

// class Emitter {
//   constructor() {
//     this.subscribedEvents = [];
//   }

//   subscribe(eventName, callback) {
//     this.subscribeEvents.push(eventName);
//   }

//   unsubscribe(eventName) {
//     this.subscribeEvents.filter((event) => event === eventName);
//   }

//   emit(eventName) {
//     const callback = this.subscribedEvents;
//   }
// }

class Emitter {
  constructor() {
    this.subscribedEvents = new Map();
  }

  subscribe(eventName, callback) {
    this.subscribedEvents.set(eventName, callback);
  }

  unsubscribe(eventName) {
    this.subscribedEvents.delete(eventName);
  }

  emit(eventName) {
    const callback = this.subscribedEvents.get(eventName);
    if (callback) {
      callback.call(this, ...arguments);
    }
  }
}

const emitter = new Emitter();

emitter.subscribe('event1', (name, surname) => {
  console.log(name + ' ' + surname);
});
emitter.emit('event1', 'Hello', 'World');
// emitter.unsubscribe('event1');

emitter.subscribe('event2', (name, surname) => {
  console.log(name + ' ' + surname);
});
emitter.emit('event2', 'Hello', 'event2');

console.log(emitter.subscribedEvents);
