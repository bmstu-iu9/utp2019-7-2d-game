const stringChange = (i,j,v) => {
  let str = map[i];
  map[i] = str.substr(0, j) + v + str.substr(j + 1);
}
