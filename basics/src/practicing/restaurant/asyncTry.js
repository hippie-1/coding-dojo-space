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
  
  async function startTasks() {
    console.log('Starting tasks in parallel...');
    await Promise.all([task1(), task2()]);
    console.log('Both tasks completed');
  }
  
  startTasks();
