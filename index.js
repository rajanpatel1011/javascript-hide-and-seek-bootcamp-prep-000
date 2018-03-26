function getFirstSelector(selector){
   const lis = document.querySelector(selector);
   for(let i = 0;i<lis.length;i++){
     lis[i].innerHTML = (i +1).toString();
   }
   return lis;
}

function nestedTarget(){
  const list = document.querySelector('div#nested div div div  div.target');
  return list;
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('.ranked-list li');
  const newlist=[];
  for(let i = 0 ;i<list.length;i++){
   list[i].innerHTML=parseInt(list[i].innerHTML,10)+n;
  }
}

function deepestChild(){
  const list = document.querySelector('div#grand-node div div div div');
  return list;
}