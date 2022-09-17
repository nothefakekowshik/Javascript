
function palindrome(str) 
{
    let new_str="";
    str=str.toLowerCase();
    str=str.replace(/[\W_]+/g," ");
      for(let i=0;i<str.length;i++)
      {
        if(str[i]!=" ")
          new_str+=str[i];
      }
      var low=0;
      var high=new_str.length-1;
      while(low < high)
      {
          if(new_str[low]!=new_str[high])
          {
              return false;
          }
          //console.log(new_str[low]+" "+new_str[high]);
          low+=1;
          high-=1;
      }
      return true;
  }
  
  console.log(palindrome("madama"));