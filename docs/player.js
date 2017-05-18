  const GU = 0;
  const CHOKI = 1;
  const PA = 2;

let matches = 0;

function countup(){
matches = matches + 1;
return matches;
}

//　チョキ大好きマンに対するアクション
function actionAgainstChokiLove(){
  return GU;
}

//　表か裏かマンに対するアクション
function actionAgainstOmoteUra(){
  const isEven = matches % 2 == 0;
  let result = PA;
  if (isEven) {
    result = GU;
  }
  return result;
}

//　帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2(){
  let amari = matches % 3;
  let isEven = amari == 0;
  console.log(`${matches}%3 = ${amari}: ${isEven}`);
  if(isEven){
    return CHOKI;
  }
  return GU;
}

//　順番に出していくマンに対するアクション
function actionAgainstReturn(){
  let amari = matches % 3;
  let result = GU;
  const toReturnCHOKI = amari == 0;
  const toReturnPA = amari == 1;

  if (toReturnCHOKI){
    result = CHOKI;
  } else if(toReturnPA){
    result = PA;
  }
  
  return result;
}

/*
対戦相手名前まとめ

チョキ大好きマン：figther::choli-lover
表か裏かマン：fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
順番に出していくマン：fighter::rotation
*/


function action(oppornent){
  console.log(oppornent);
  countup();
  if(oppornent == "fighter::choki-lover"){
    result = actionAgainstChokiLove();
  } 
  else if(oppornent == "fighter::odd-even") {
    result = actionAgainstOmoteUra();
  }
  else if(oppornent == "fighter::on-third"){
    result = actionAgainstOmoteUra2();
  }
  else{
    result = actionAgainstReturn();
  }
  return result;
}

