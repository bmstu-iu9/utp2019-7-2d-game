const cod = [
  8, 
  25, 21, 7, 6, 19, 2, 13, 17, 14, 12, 9, 10, 16, 18, 1, 16, 14, 4, 4, 8, 14, 12, 10, 5, 9, 7, 22, 15, 7, 23, 12, 5, 18, 11, 10, 13, 20, 14, 18, 11, 6, 25, 6, 20, 18, 7, 19, 19, 2, 16, 8, 13, 25, 18, 11, 15, 22, 15, 7, 5, 18, 25, 6, 21, 21, 7, 16, 22, 15, 25, 2, 14, 21, 16, 21, 23, 14, 10, 24, 4, 7, 19, 5, 11, 4, 20, 25, 18, 1, 4, 18, 2, 4, 14, 24, 11, 5, 15, 5, 15,
  8, 21, 2, 18, 8, 22, 5, 10, 18, 20, 5, 17, 22, 22, 24, 7, 12, 17, 12, 15, 6, 18, 17, 22, 4, 3, 4, 24, 15, 5, 19, 10, 18, 7, 9, 24, 1, 10, 8, 14, 25, 22, 11, 3, 21, 1, 7, 3, 21, 10, 19, 8, 6, 10, 2, 23, 14, 24, 25, 17, 7, 12, 12, 21, 15, 11, 6, 9, 20, 17, 9, 21, 19, 12, 22, 17, 7, 5, 24, 5, 18, 4, 9, 16, 4, 1, 13, 7, 15, 23, 17, 10, 10, 25, 9, 5, 8, 2, 7, 4,
  15, 20, 23, 7, 16, 5, 20, 5, 7, 9, 8, 3, 5, 19, 6, 11, 23, 14, 4, 16, 21, 7, 13, 8, 25, 22, 13, 18, 16, 15, 1, 22, 16, 13, 2, 14, 4, 14, 18, 2, 10, 21, 21, 5, 1, 16, 18, 1, 19, 17, 18, 9, 21, 16, 25, 24, 4, 9, 18, 8, 20, 17, 17, 18, 14, 18, 12, 6, 16, 23, 22, 15, 24, 14, 23, 14, 10, 9, 14, 7, 11, 5, 9, 5, 16, 3, 21, 20, 21, 5, 20, 18, 14, 9, 24, 1, 2, 8, 18, 25,
  4, 21, 20, 17, 23, 25, 19, 17, 15, 13, 10, 4, 16, 20, 17, 19, 23, 21, 7, 14, 7, 14, 23, 6, 1, 19, 17, 6, 16, 2, 25, 11, 6, 14, 14, 25, 19, 3, 9, 25, 12, 19, 3, 17, 11, 10, 8, 11, 18, 18, 7, 17, 13, 1, 8, 15, 19, 2, 18, 5, 12, 3, 6, 14, 12, 18, 4, 15, 19, 11, 25, 22, 25, 5, 17, 12, 4, 4, 25, 5, 3, 4, 8, 7, 19, 5, 22, 4, 7, 19, 5, 13, 5, 14, 7, 11, 16, 12, 20, 10,
  10, 5, 14, 17, 3, 16, 15, 18, 6, 2, 8, 24, 12, 21, 7, 6, 15, 13, 3, 7, 1, 1, 12, 10, 25, 13, 11, 17, 21, 23, 5, 22, 4, 13, 10, 4, 17, 16, 19, 24, 14, 7, 6, 9, 14, 16, 17, 22, 5, 10, 9, 25, 25, 9, 23, 14, 18, 8, 12, 3, 2, 1, 24, 21, 23, 18, 7, 7, 10, 24, 15, 17, 23, 6, 11, 3, 8, 4, 16, 18, 5, 10, 22, 21, 20, 4, 9, 7, 7, 9, 20, 5, 18, 14, 21, 18, 15, 9, 24, 2,
  4, 15, 23, 23, 24, 14, 8, 2, 22, 14, 15, 6, 7, 14, 25, 15, 22, 17, 2, 19, 6, 24, 20, 18, 18, 19, 18, 1, 6, 21, 8, 2, 9, 7, 18, 17, 20, 19, 24, 4, 4, 19, 28, 23, 4, 1, 4, 17, 19, 10, 5, 14, 25, 16, 1, 16, 3, 22, 20, 9, 7, 12, 5, 9, 19, 23, 21, 3, 11, 15, 4, 3, 19, 11, 10, 6, 2, 13, 4, 9, 22, 1, 6, 5, 24, 20, 15, 24, 18, 19, 6, 4, 21, 5, 12, 7, 7, 6, 8, 6,
  4, 14, 18, 13, 14, 25, 10, 9, 5, 13, 12, 22, 9, 4, 1, 14, 17, 1, 19, 23, 8, 20, 13, 5, 22, 7, 8, 5, 23, 25, 25, 25, 14, 19, 21, 20, 10, 21, 14, 23, 15, 9, 4, 15, 7, 2, 18, 2, 17, 25, 23, 23, 20, 7, 6, 17, 13, 18, 15, 22, 4, 15, 9, 17, 3, 10, 6, 5, 9, 17, 16, 15, 17, 6, 5, 1, 21, 10, 4, 14, 17, 5, 7, 1, 15, 3, 21, 9, 1, 1, 14, 13, 9, 9, 8, 20, 9, 22, 23, 13,
  19, 21, 2, 19, 18, 5, 13, 15, 17, 4, 16, 13, 11, 10, 1, 25, 1, 16, 21, 5, 23, 25, 19, 15, 11, 22, 14, 17, 17, 24, 22, 20, 17, 20, 1, 16, 2, 10, 12, 16, 21, 13, 16, 14, 13, 5, 8, 12, 18, 12, 19, 8, 4, 19, 11, 15, 4, 23, 6, 3, 19, 10, 13, 6, 22, 13, 9, 15, 7, 17, 8, 21, 1, 5, 8, 13, 5, 22, 5, 3, 8, 5, 14, 5, 16, 3, 1, 20, 12, 24, 7, 7, 4, 3, 22, 2, 1, 18, 14, 19,
  17, 13, 19, 20, 9, 10, 21, 19, 14, 5, 25, 14, 21, 13, 25, 4, 1, 1, 9, 17, 6, 23, 2, 6, 17, 22, 15, 3, 13, 9, 17, 7, 6, 12, 1, 7, 20, 15, 5, 16, 21, 22, 22, 25, 2, 23, 18, 7, 9, 8, 1, 15, 16, 3, 4, 9, 5, 21, 9, 5, 2, 4, 17, 8, 11, 6, 11, 13, 14, 10, 24, 18, 25, 12, 18, 10, 3, 14, 22, 15, 1, 24, 5, 2, 10, 19, 22, 14, 21, 6, 25, 1, 11, 5, 6, 9, 10, 24, 12, 7,
  2, 13, 9, 16, 8, 6, 8, 22, 12, 9, 21, 5, 12, 22, 6, 9, 3, 22, 4, 21, 20, 10, 1, 12, 9, 25, 12, 3, 2, 25, 25, 2, 11, 20, 17, 10, 10, 3, 13, 19, 21, 7, 18, 11, 16, 21, 1, 1, 13, 15, 1, 15, 4, 20, 25, 15, 19, 12, 18, 1, 15, 21, 1, 3, 21, 24, 17, 24, 17, 6, 24, 10, 22, 12, 16, 12, 5, 5, 14, 12, 16, 19, 16, 22, 16, 18, 10, 4, 13, 17, 11, 9, 22, 2, 1, 8, 23, 9, 15
];
