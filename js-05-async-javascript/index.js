console.log("------------Event Loop Demo")
console.log("Start");

setTimeout(() => {
  console.log("setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise (Microtask)");
});

console.log("End");


console.log("---------------------Loading Spinner Using setInterval---------------");
function showLoader() {
  let dots = 0;

  const interval = setInterval(() => {
    dots++;
    process.stdout.write("\rLoading" + ".".repeat(dots % 4));

  }, 300);

  return interval;
}
//showLoader();

console.log("-----------------------CALLBACK VERSION-----------------------");
function fetchUsersCallback(callback) {
  const loader = showLoader();

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => {
        clearInterval(loader);
        callback(null, data);
      })
      .catch(err => {
        clearInterval(loader);
        callback(err, null);
      });
  }, 2000); // Artificial delay
}

fetchUsersCallback((error, data) => {
  if (error) {
    console.log("\n❌ Error:", error.message);
  } else {
    console.log("\n✅ Users fetched (Callback):", data.length);
  }
});

console.log("----------------Promise Version----------------")

function fetchUsersPromise() {
  const loader = showLoader();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          if (!res.ok) throw new Error("Network error");
          return res.json();
        })
        .then(data => {
          clearInterval(loader);
          resolve(data);
        })
        .catch(err => {
          clearInterval(loader);
          reject(err);
        });
    }, 2000);
  });
}


fetchUsersPromise()
  .then(data => console.log("\n✅ Users fetched (Promise):", data.length))
  .catch(err => console.log("\n❌ Error:", err.message));


console.log("--------------------Async await Version-----------------");
async function fetchUsersAsync() {
  const loader = showLoader();

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    clearInterval(loader);
    console.log("\n✅ Users fetched (Async/Await):", data.length);

  } catch (error) {
    clearInterval(loader);
    console.log("\n❌ Error:", error.message);
  }
}

fetchUsersAsync();