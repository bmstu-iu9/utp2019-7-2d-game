const stringChange = (i,n,v) => {
  let str = map[i];
  let str1 = str.slice(0,n);
  let str2 = str.slice(n + 1,str.length);
  str1.concat(n);
  str1.concat(str2);
  str = str1;
  map[i] = str;
}
