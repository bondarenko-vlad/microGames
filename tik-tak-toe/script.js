let turn = 0
let list = [ '','','','','','','','','' ]
let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	] 
document.querySelector('.container').onclick = () => {
  let element = event.target
  let char
  turn%2 === 1 ? char = 'o' : char = 'x'
  if(element.innerText=== '') {
    element.innerText = char
    let node = element.parentNode;
    let i = ([...node.children].indexOf(element));
    list[i] = char
    combs.forEach((e)=>{
      if (list[e[0]] === char && list[e[1]] === char && list[e[2]] === char) {
          document.querySelector('.isWinner').innerHTML = char + ' - WINNER'
        }
      })
     turn++
   }
}
