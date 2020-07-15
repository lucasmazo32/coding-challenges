const canFinish = function(numCourses, prerequisites) {
  const obj = {};
  prerequisites.forEach(prerequisite => {
      if (obj[prerequisite[0]]) {
          obj[prerequisite[0]].push(prerequisite[1]);
      } else {
          obj[prerequisite[0]] = [prerequisite[1]];
      }
  });
  const done = [];
  for(let i = 0; i < numCourse; i++) {
    if (obj[i] === null) {
        done.push(i);
    }
  }
  const condition = true;
  while (condition) {
    const check = [];
    if (check === []) {
      condition = false;
    }
  }
};
