let funcAddWater = () => {
  console.log(`add water`);
};

let funcAddTeaLeaves = async () => {
  await setTimeout(() => {
    //return `two... `;
    console.log(`add tea leaves`);
  }, 2000);

  // console.log(`add tea leaves`);

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     //return `two... `;
  //     resolve('two');
  //   }, 5000);
  // });
};

let funcAddMilk = () => {
  console.log(`add milk`);
};

funcAddWater();
funcAddTeaLeaves().then(() => {
  funcAddMilk();
});
