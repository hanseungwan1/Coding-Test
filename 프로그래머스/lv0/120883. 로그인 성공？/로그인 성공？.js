function solution(id_pw, db) {
  const [id, pw] = id_pw;
  let result = "";
  for (let i = 0; i < db.length; i++) {
    const dbId = db[i][0];
    const dbPw = db[i][1];
    if (dbId === id) {
      if (dbPw === pw) {
        return "login";
      } else {
        return "wrong pw";
      }
    } else {
      result = "fail";
    }
  }
  return result;
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
