const getAge = date => {
  let today = new Date();
  let birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  let deltaMonth = today.getMonth() - birthDate.getMonth();
  if (
    deltaMonth < 0 ||
    (deltaMonth === 0 && today.getDate() < birthDate.getDate())
  ) {
    age = age - 1;
  }
  return age;
};

export default dataBase => {
  return (dispatch, getState) => {
    const { position, name, age } = getState();
    const playerDataBase = dataBase.players();
    let results;
    let callback;
    if (position) {
      callback = playerDataBase
        .orderByChild("position")
        .equalTo(position)
        .once("value");
    } else {
      callback = playerDataBase.orderByChild("name").once("value");
    }

    callback.then(function(snapshot) {
      results = Object.values(snapshot.val());
      console.log(results);

      if (name) {
        results = results.filter(result => {
          return result.name.includes(name);
        });
      }

      if (age) {
        results = results.filter(result => {
          return +age === getAge(result.dateOfBirth);
        });
      }

      dispatch({ type: "CHANGE_RESULTS", payload: results });
    });
  };
};
