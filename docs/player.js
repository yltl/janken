  const GU = 0;
  const CHOKI = 1;
  const PA = 2;

let matches = 0;

function action(oppornent){
  matches = matches + 1;
  let amari = matches % 2;
  let isEven = amari == 0;
  console.log(`${matches}%2 = ${amari}: ${isEven}`);
  if(isEven){
    return GU
  }
  return PA;
}