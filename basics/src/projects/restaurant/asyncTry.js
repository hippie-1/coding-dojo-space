  export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function task1() {
    console.log('Task 1 started');
    for (let i=1; i<=10; i++) {
        console.log(`Task 1 is working hard ${i}`);
        await sleep(2000); // Sleep for 2 seconds
    }
    console.log('Task 1 finished');
  }
  
  async function task2() {
    console.log('Task 2 started');
    for (let i=1; i<=5; i++) {
        console.log(`Task 2 is working hard ${i}`);
        await sleep(3000); // Sleep for 3 seconds
    }
    console.log('Task 2 finished');
  }
  
  async function task3() {
    console.log('Task 3 started');
    let i=0;
    //while (i<5) {
        console.log(`Task 3 is working hard ${i}`);
        taskRaktar(i);
        taskBufe(i);
        //await sleep(1000); // Sleep for 3 seconds
        i++;
    //}
    console.log('Task 3 finished');
  }

  async function taskRaktar(i) {
    console.log('Task Raktar ' + i + ' started');
    let j=0;
    while (j<10) {
        console.log(`Task Raktar ${i} is working hard in step ${j}`);
        await sleep(1000); // Sleep for 3 seconds
        j++;
    }
    console.log(`Task Raktar ${i} finished`);
  }

  async function taskBufe(i) {
    console.log('Task Bufe ' + i + ' started');
    let j=0;
    while (j<10) {
        console.log(`Task Bufe ${i} is eating food ${j}`);
        await sleep(1000); // Sleep for 3 seconds
        j++;
    }
    console.log(`Task Bufe ${i} finished`);
  }

  async function startTasks() {
    console.log('Starting tasks in parallel...');
    await Promise.all([task1(), task2(), task3()]);
    console.log('All tasks completed');
  }
  
  startTasks();


/*

 async function someWork () {
    let promise = new Promise(
      resolve => {
        console.log("I am working hard");
        setTimeout(resolve, 2000) 
      },
      reject => {
        console.log("Sorry I can not do that");
      }
    );
    promise.
      then(function () {
        finished();
      }).
      catch(function () {
        rejected();
      });
}

function finished() {
  console.log("I am finished, I am ready for the next task");
}
function rejected() {
  console.log("I am really sorry, please assing this task to someone else")
}

await Promise.all([someWork()]);
*/
/*
async function foodPreparation (foodId) {
  let foodPreparationPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
      setTimeout(myResolve, 3000) 
      myResolve("I have finished, I am ready to do the next task"); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    foodPreparationPromise.then(
      function(value) { 
        console.log(value);
      },
      function(error) {
        console.log(error);
      }
    );
}

function valami() {
  console.log("Valami");
}
//await Promise.all([foodPreparation(10)]);
*/


