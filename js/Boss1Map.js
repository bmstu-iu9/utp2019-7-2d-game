'use strict';

const bossMaps = []; // массив карт
const bossmap1 = [
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'G                  GGGggggggggG      F F F  G                      FFFFF      FFFFF      FFFFF      FFFFF                                              G',
    'G                  gggggggggggG       F F   G                     F     F    F     F    F     F    F     F                                             G',
    'G                  gggggggggggG        F    G                    F FF FF F  F FF FF F  F FF FF F  F FF FF F             sG              GG             G',
    'G            @     ggGGGGggggCG           C G CC                 F   F   F  F   F   F  F   F   F  F   F   F  GG        CGG             BGG             G',
    'GgGggGGg    GGGGGGGGGGGGGGGGGGGgggGGGGGgGGGGGGGGGGGGGGGGGG        F FFF F    F FFF F    F FFF F    F FFF F   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG         G',
    'GBGggGGg    G                    GGGGGGgGGGGGGGG          GGGGG    F   F      F   F      F   F      F   F    GG                                       CG',
    'GGGggGGG    g     F   F         GGGGGGGgGGGGGGGG               GGGG4FFF        FFF        FFF        FFF    GG                                   GGGGGGG',
    'GGGggGGg    g     F   F        GGGGGGGGgGGGGGGGG                   GGGGGGGGGG        GGGGGGG        GGGGGGGGG                                  ggg     G',
    'GGGggggg    GGGGG             GGGGGGGGGgGGGGGGGGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLG                                ggggg aaaaG',
    'GGGggggg    GGGGGgGgggGGGGGGGGG       GgGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                        GGGGGGGGGGGGGGGGGGGGG',
    'GGGggggg    G         GG             CGgGGGGGGGGGGGGGGGG   F F F F F F F F F F^^^F F F F F F F F F                               gggg                  G',
    'GGGggGGg    GLLLLLLLLLGGBB         GGGGgGGGGGGGGGGGGGGGG  F F F F F F F F F F F^^>>>>>>>>>>>>>>>>>>>>>>|                       gggggg                 CG',
    'GGGgGGGG    gGGGGGGGGGGGGGGGGgggggG   ggGGGGGGGGGGGGG    F F F F F F F F F F F ^^^ F F F F F F F F F   |                      GGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GgggGGgg    g                         ggGGGGGGGGGG      F F F F F F F F F |<<<<<<0<<<<<<F F F F F F F  |                    gggg                       G',
    'GgggGggg    g                         ggGGGGGGG        F F F F F F F F F F|F F F ^ F F ^ F F F F F F F |                  gggggg                    1BBG',
    'GgGGgggg    GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGF F F F F F F     FFF        F|FF    ^FF   ^    F         F|F F F F F F F F GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'Gggggggg    G                                                             |      ^     ^               |                                               G',
    'GggBgggg    G                                   2                         |>>>>>>^     ^<<<<<<<<<<*<<<<|                             2                 G',
    'GgGGgggg    GggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgggggGGGggggggggG>^GgggggGGggggggggGggggggggg^<GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG         GGGGGGG',
    'GgGggggg    G    GG      GG      Gs     GG      GGGLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGG',
    'GgGggggg    G      GG      GGa     Gs          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGG',
    'GgGggggs    GGG      GGa     GGa     GG      GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGG',
    'GgGggggG    G  GG      GGa     GG          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGG',
    'GgGggggG    G    GG      GG      GG      GGGGGGGGGGGG                                                                                 GGGGGGGGGGGGGGGGGG',
    'GgGsssss    G      GG      GG          GGGGGGGGGGGGGGaBaaa                                                                          GGGGGGGGGGGGGGGGGGGG',
    'GgGGGGGGSSSSGGG      GG      GG      GGGGGGGGGGGGGGGGGGGGGGGGGG       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGG',
    'GgGGGGGGGGGGGGGGG      GG          GGGGGGGGGGGGGGGGGGGGGGGGGG       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGG',
    'G                                GGGGGGGGGGGGGG                   GGGGGGGGGGGGGGGGGG                                          GGGGGGGGGGGGGGGGGGGGGGGGGG',
    'G                         1    GGGGGGGGGGGGGGGGC  2             GGGGGGGGGGGGGGGGGGGGB   C                                   GGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG     GGGGGGGGGGGGGGGGGGGGGGGG        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG         GGGGGGGGGGGGGGGGGGG         GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                             GGGGGGGGGGGGGGGGG         gGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GD                           F         F                                           G                            Ggggggg           GGGGGGGGGGGGGGGGGGGGGG',
    'G   2                                        B                             4       GGG  2                       GGGggggggggggBBBBBGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGssGGGGGssGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG'
  ];


const bossmap2 = [
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                                 ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G   GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                     F      F             ggGGGGGGGGGGGGGGG                                                   ',
  'G    GGGGGGGGGGGGGGGGGGGGGGGGGGGGG      F      F    FFF       1             gBGGGGGGGGGGGGGGG                                                   ',
  'G     GGGGGGGGGGGGGGGGGGGGGGGGGGGG @                        GGGGG   FGGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
  'G         GGGGGGGGGGGGGGGGGGGGGGGGGGGGB                  GGGGGGGGG   GGGGGGGGGGGGGGGGGGGGGGGG                                                   ',
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
  'GGGGGGGGGGGGGGGGGGGGGGG    F   B                                C          GGGGGGGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGGGG           GGGGGGGGGG                       GGG       F ggggggGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGGGGG    F     GGGGGGGGGGGGG    GG       F                     ggggggGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGGGGG          GGGGGGGGGGGGGGGG                               GGGGGGggggGGGG  GGGGGG                                                   ',
  'GGGGGGGGGGG       F  GGGGGGGGGGGGGGGGGGG         GGGg       F                  F       GGGGGG                                                   ',
  'GGGGGGGGGGG          GGGGGGGGGGGGGGGGGGG                       1  G                    GGGGGG                                                   ',
  'GGGGGGggggg         F  GGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSGGGGGGGGGGGGGGGGGGGGGgggGGGGGGGGGGGGGG                                                   ',
  'GGGGGGgggggBC                       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGsssGGGGGGGGGGGGGG                                                   ',
  'GGGGGGggGGGGGGSSSSGGG   F     F         GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                     ',
  'GGGGGGggGGGGGGGGGGGGG      2           F       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                      ',
  'GGGGGGgggggGGGGGGGGGGGGGGGGGGGGGGGG            GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                      ',
  'GGGGGGggggggg  GGGGGGGGGGGGGGGGGGGGGGGGGGggggggGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                                    ',
  'GGGGGGggggggg BGGGGGGGGGGGGGGGGGGGGGGGGGGggggggGGGGGGGGGGGGGGGGGGGGGGG                  GGGGGGGGGGGGGGGGGGGGGGGGGGG                             ',
  'GGGGGGggggGGGGGGG              ggggggggggggggggGGGGGGGGGGGGGGGGGGGGGGG                  GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                        ',
  'GGGGGGggGGGGG       F        F ggggggggggggggggGGGGGGGGGGGGGGGGGGG                           GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                    ',
  'GGGGGGggGG                     gggggggggggggGGGGGGGGGGGGGGGGGG                    FFF            GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                 ',
  'GGGGGGgg      F          GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG              FFF           F              GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG            ',
  'GGGGGG                GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                            GGG FF                 GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG        ',
  'GGGGGG  C         GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                     GGG          GG           FFFF      GGGGGGGGGGGGGGGGGGGGGGGGGGGGG        ',
  'GGGGGGGGGG   F  GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                             F        GG       FF    FF      GGGGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGG      GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG                FFF                                 C            GGGGGGGGGGGGGGGGGGGGGGGGGGG      ',
  'GGGGGGGGGG      GGGGGGGGGGGGGGGGGGGGGGGGGGGG                   C      FFF    Gsss                GGGG            GGGGGGGGGGGGGGGGGGGGGGGGGGGG   ',
  'GGGGGGGGGG   F  GGGGGGGGGGGGGGGGGGGGGGGGGGGG                  GGG                              GGG  GGG            GGGGGGGGGGGGGGGGGGGGGGGGGGG  ',
  'GGGGGGGGGG                                            FFFFF         ggGGG                        GGGG               GGGGGGGGGGGGGGGGGGGGGGGGGGG ',
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

var bossmap3 = [
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

var bossmap4 = [
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
bossMaps[1] = bossmap1;
bossMaps[2] = bossmap2;
bossMaps[3] = bossmap3;
bossMaps[4] = bossmap4;
