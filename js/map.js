'use strict';

const maps = []; // массив карт

const map = [
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'G                    g                 GG                                      G',
  'G                    g                 GG                                      G',
  'G  GGGGGGGGGGGGGGGGGGG                 GG                                      G',
  'G     FF  FF   FF     FFFF        FF   GG   F          GGGGGGGGGGGG            G',
  'G     FF  FF                           GG  FFF      G             Gaaa         G',
  'GG    FF  FF          ggggGGGGGGGGggGGGGG F F F                   GGGGGGGGG    G',
  'G     FF  FF                           GG   F          G                 G     G',
  'G                                      GGGGGGGGGGGGGGGGGGggg           GGG     G',
  'G  G  FF  FF                           GG                   g          G      GG',
  'G     FF  FF                           GG                    G         G       G',
  'G     FF  FF                           GG                     G        G    GGGG',
  'GG C  FF  FF         FFF  FFF  FFF     GG             2                GG      G',
  'G             @       FFF  FFF  FFF    GG                              GGGsssssG',
  'Gaa       C            FFF  FFF  FFF   GG     GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGG    GGGGGG        FFF  FFF  FFF  GG                                      G',
  'G      F F   G           FFF  FFF  FFF GG                                      G',
  'G D     F        G      FFF  FFF  FFF  GGG                              F      G',
  'G      F F   C     B   FFF  FFF  FFF   GG                               F      G',
  'GGGGGGGgggGGGGGGGGGGGGFFF GGGG  FFF    gg   GG                       F  F  F   G',
  'GGGGGGGgggGGGGGGGGGGGGFF  GGGGGGFF     gg                             F F F    G',
  'GGGGGGGgggGGGGGGGGGGGGSSSSGGGGGGGGGGGGGGG                              FFF     G',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGG      GGG       1                     F      G',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGG     G                                      G',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGWWWGGGGGGGGGGGGGGggggGGGGGG',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggGGGGGGG',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggGGGGGGGG',
  'GGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggGGGGGGGGG',
  'GGGGGGGsssggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
];

var map2 = [
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'G                    g                 GG                                      G',
    'G                    g                 GG                                      G',
    'G  GGGGGGGGGGGGGGGGGGG                 GG                                      G',
    'G     FF  FF   FF     FFFF        FF   GG   F          GGGGGGGGGGGG            G',
    'G     FF  FF                           GG  FFF      G             Gaaa         G',
    'GG    FF  FF          ggggGGGGGGGGggGGGGG F F F                   GGGGGGGGG    G',
    'G     FF  FF                           GG   F          G                 G     G',
    'G                                      GGGGGGGGGGGGGGGGGGggg           GGG     G',
    'G  G  FF  FF                           GG                   g          G      GG',
    'G     FF  FF                           GG                    G         G       G',
    'G     FF  FF                           GG                     G        G    GGGG',
    'GG    FF  FF         FFF  FFF  FFF     GG             2                GG      G',
    'G             @       FFF  FFF  FFF    GG                              GGGsssssG',
    'Gaa       C            FFF  FFF  FFF   GG     GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGG    GGGGGG        FFF  FFF  FFF  GG                                      G',
    'G            G           FFF  FFF  FFF GG                                      G',
    'G  D             G      FFF  FFF  FFF  GGG                              F      G',
    'G                      FFF  FFF  FFF   GG                               F      G',
    'GGGGGGGgggGGGGGGGGGGGGFFF GGGG  FFF    gg   GG                       F  F  F   G',
    'GGGGGGGgggGGGGGGGGGGGGFF  GGGGGGFF     gg                             F F F    G',
    'GGGGGGGgggGGGGGGGGGGGGSSSSGGGGGGGGGGGGGGG                              FFF     G',
    'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGG      GGG                             F      G',
    'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGG     G                                      G',
    'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGLLLGGGGGGWWWGGGGGggggGGGGGG',
    'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggGGGGGGG',
    'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggGGGGGGGG',
    'GGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggGGGGGGGGG',
    'GGGGGGGsssggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
];

/* добавляем карты в масссив */
maps[1] = map;
maps[2] = map2;
