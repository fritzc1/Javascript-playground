/**
 * Purpose: Experiment with Promise.all()
 */

const myArrOfObjs = [
  { obj1: 1 },
  { obj2: 2 },
  { obj3: 3 }
];
let targetArr;

(async () => {
  await Promise.all(myArrOfObjs.map(async (v, i) => { // without the "await Promise.all" part, the "done" message will come out before the maps end
    await new Promise(res => setTimeout(() => res(), 1000));
    console.log(`Map: v${JSON.stringify(v)} i${i}`);
  }));
  console.log(`done`);
})();
