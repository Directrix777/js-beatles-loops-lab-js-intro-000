// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var arr = []
  for(let i = 0; i < musicians.length; i += 1)
  {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
