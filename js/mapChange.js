const stringChange = (i,j,v) => {
  let str = map[i];
  let str1 = str.slice(0,j);
  let str2 = str.slice(j + 1,str.length);
  str1.concat(v);
  str1.concat(str2);
  str = str1;
  map[i] = str;
}
