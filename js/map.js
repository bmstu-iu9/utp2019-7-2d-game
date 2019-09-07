'use strict';
//Генерация карты
//Генерация происходит построчно с помощью Math.random()

const maps = []; // массив карт
const map1 = [
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'G                  GGGggggggggG      F F F  G                                                                                                          G',
  'G                  gggggggggggG       F F   G                                                                                                          G',
  'G                  gggggggggggG        F    G                                                                           sG              GG             G',
  'G             @    ggGGGGggggCG           C G CC                                                             GG        CGG             BGG             G',
  'GgGggGGg    GGGGGGGGGGGGGGGGGGGgggGGGGGgGGGGGGGGGGGGGGGGGG                                                   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG         G',
  'GBGggGGg    G                    GGGGGGgGGGGGGGG          GGGGG                                              GG                                       CG',
  'GGGggGGG    g                   GGGGGGGgGGGGGGGG               GGGG   4                                     GG                                   GGGGGGG',
  'GGGggGGg    g                  GGGGGGGGgGGGGGGGG                   GGGGGGGGGG        GGGGGGG        GGGGGGGGG                                   gg     G',
  'GGGggggg    GGGGG             GGGGGGGGGgGGGGGGGGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLG                                   ggg    G',
  'GGGggggg    GGGGGgGgg GGGGGGGGG       GgGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                        GGGGGGGGGGGGGGGGGGGGG',
  'GGGggggg    G         GG             CGgGGGGGGGGGGGGGGGG                                                                          ggg                  G',
  'GGGgGGGg    GLLLLLLLLLGGBB         GGGGgGGGGGGGGGGGGGGGG                                                                         gggg                 CG',
  'GGGgGGGG    gGGGGGGGGGGGGGGGG     G   ggGGGGGGGGGGGGG                                                                         GGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GgggGGgg    g                         ggGGGGGGGGGG                                                                           ggg                       G',
  'GgggGggg    g                         ggGGGGGGG                                                                             gggg                    1BBG',
  'GgGGgggg    GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGFFFFFFFFFFFFF     FFF        FFFF     FF        F                           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'Gggggggg    G                                                                                                                                          G',
  'GggBgggg    G                                   2                                                                         2                            G',
  'GgGGgggg    GggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggGGGggggggggGGGGgggggGGggggggggGgggggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG         GGGGGGGGGGG',
  'GgGggggg    G    GG      GG      Gs     GG      GG       LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG         GGGGGGGGGGG',
  'GgGggggg    G      Gs      Gs      Gs          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGG',
  'GgGggggs    GGG      Gs      Gs      GG      GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGG',
  'GgG    G    G  GG      GG      GG          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGG',
  'GgG    G    G    GG      GG      GG      GGGGGGGGGGGG                                                                                 GGGGGGGGGGGGGGGGGG',
  'GgGsssss    G      GG      GG          GGGGGGGGGGGGGG                                                                               GGGGGGGGGGGGGGGGGGGG',
  'GgGGGGGG    GGG      GG      GG      GGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGG',
  'GgGGGGGG    GGGGG      GG          GGGGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGG',
  'G                                GGGGGGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGGGGG                                          GGGGGGGGGGGGGGGGGGGGGGGGGG',
  'G                         1    GGGGGGGGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGGGGGB   C                                   GGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggggGGGGGGGGGGGGGGGGGGGGG     GGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGSSSSSSSGGGGGGGGGGGGGGGGGGG         GGGGGGGGGGGGGGGGGGG         GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                             GGGGGGGGGGGGGGGGG         gGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GD                           F         F                                           G                            Ggggggg           GGGGGGGGGGGGGGGGGGGGGG',
  'G   2                                        B                             4       GGG  2                       GGGggggggggggBBBBBGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGssGGGGGssGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
];

const map2 = [
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                                 ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                     F      F             ggGGGGGGGGGGGGGGG                                                   ',
  'G    GGGGGGGGGGGGGGGGGGGGGGGGGGGGG      F      F              1             gBGGGGGGGGGGGGGGG                                                   ',
  'G     GGGGGGGGGGGGGGGGGGGGGGGGGGGG @                        GGGGG   FGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G         GGGGGGGGGGGGGGGGGGGGGGGGGGGG                   GGGGGGGGG   GGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGsssGGGGGGGGGG    GGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G                GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGF  GGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      GGGGGGGGggggggggggGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG            GgCgggggggGGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG            GGgggggggGGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGggggggggggggggggggggggggg         F    GGggggggGGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGgBgggggggggggggggggCggggg     G         GGGggggGGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGSSS           GGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG  2   F   GGGGGGG                                                   ',
  'G                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG       GGGGGG                                                   ',
  'G     GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG  GGGGGG                                                   ',
  'G   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                        GGGGGGGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGGGGGGG             F       F                             GGGGGGGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGGGGGG    F                                    C          GGGGGGGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGG           GGGGGGGGGG                       GGG       F ggggggGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGG    F     GGGGGGGGGGGGG    GG       F                     ggggggGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGG          GGGGGGGGGGGGGGGG                               GGGGGGggggGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGG       F  GGGGGGGGGGGGGGGGGGG         GGGg       F                    F     GGGGGG                                                   ',
  'GGGGGGGGGGG          GGGGGGGGGGGGGGGGGGG                       1  G                    GGGGGG                                                   ',
  'GGGGGGggggg         F  GGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSGGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGG                                                   ',
  'GGGGGGggggg C                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGsssGGGGGGGGGGGGGG                                                   ',
  'GGGGGGggGGGGGGSSSSGGG   F     F         GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                     ',
  'GGGGGGggGGGGGGGGGGGGG      2           F       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                      ',
  'GGGGGGgggggGGGGGGGGGGGGGGGGGGGGGGGG            GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                      ',
  'GGGGGGggggggg  GGGGGGGGGGGGGGGGGGGGGGGGGGggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                    ',
  'GGGGGGggggggg BGGGGGGGGGGGGGGGGGGGGGGGGGGggggggGGGGGGGGGGGGGGGGGGGGGGG                  GGGGGGGGGGGGGGGGGGGGGGGGGGG                             ',
  'GGGGGGggggGGGGGGG              ggggggggggggggggGGGGGGGGGGGGGGGGGGGGGGG                  GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                        ',
  'GGGGGGggGGGGG       F        F ggggggggggggggggGGGGGGGGGGGGGGGGGGG                           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                    ',
  'GGGGGGggGG                     gggggggggggggGGGGGGGGGGGGGGGGGG                        F          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                 ',
  'GGGGGGgg      F          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG               F               F           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG            ',
  'GGGGG                 GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                            GGG       F            GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        ',
  'GGGGGG  C         GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                     GGG          GG                     GGGGGGGGGGGGGGGGGGGGGGGGGGGGG        ',
  'GGGGGGGGGG   F  GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                      GG                     GGGGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGG      GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                    C            GGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGG      GGGGGGGGGGGGGGGGGGGGGGGGGGGG                   C       F     Gsss                GGGG            GGGGGGGGGGGGGGGGGGGGGGGGGGGG   ',
  'GGGGGGGGGG   F  GGGGGGGGGGGGGGGGGGGGGGGGGGGG                  GGG                              GGG  GGG            GGGGGGGGGGGGGGGGGGGGGGGGGGG  ',
  'GGGGGGGGGG                                              F           ggGGG                        GGGG               GGGGGGGGGGGGGGGGGGGGGGGGGGG ',
  'GGGGGGGGGG        F      F      F      F                                                                      FF     gg          DGGGGGGGGGGGGGG',
  'GGGGGGGGGG                                            GGGGG                                                           gg          GGGGGGGGGGGGGG',
  'GGGGGGGGGG          1                  2                                                                  GGGGGGGGGG  GGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                                         GGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSGGGGGGGGGGGGGGGGGGGGGGGGG   ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG       '
];

var map3 = [
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
  'GG C  FF  FF         FFF  FFF          GG                              GG      G',
  'G             @       FFF  FFF  FFF    GG                              GGGsssssG',
  'Gaa       C            FFF  FFF  FFF   GG     GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGG    GGGGGG        FFF  FFF  FFF  GG                                      G',
  'G      F F   G           FFF  FFF  FFF GG                                      G',
  'G D     F        G      FFF  FFF  FFF  GGG                              F      G',
  'G      F F   C         FFF  FFF  FFF   GG                               F      G',
  'GGGGGGGgggGGGGGGGGGGGGFFF GGGG  FFF    gg   GG                       F  F  F   G',
  'GGGGGGGgggGGGGGGGGGGGGFF  GGGGGGFF     gg                             F F F    G',
  'GGGGGGGgggGGGGGGGGGGGGSSSSGGGGGGGGGGGGGGG                              FFF     G',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGG      GGG                             F      G',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGG     G                                      G',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGWWWWWWWWGGGGGGGGGggggGGGGGG',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggGGGGGGG',
  'GGGGGGGgggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGggggGGGGGGGG',
  'GGGGGGGggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggGGGGGGGGG',
  'GGGGGGGsssggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
];

var map4 = [
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
    'GG    FF  FF         FFF  FFF  FFF     GG                              GG      G',
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
maps[1] = map1;
maps[2] = map2;
maps[3] = map3;
maps[4] = map4;
