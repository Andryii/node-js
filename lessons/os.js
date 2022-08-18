import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length - 6; i++) {
    cluster.fork();
    console.log("запустить ещё один node js процесс");
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Воркер с pid = ${process.pid} умер`);
    if (code === 200) {
        cluster.fork();
    }else
    {
        console.log('Воркер умер...');
    }
    
  });
} else {
  console.log(`Воркер с pid = ${process.pid} запщен`);
  setInterval(() => {
    console.log(`Воркер с pid = ${process.pid} ещё работает`);
  }, 5000);
}
