/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var CC0 = 0; // bank select msb
var CC32 = 32; // bank select lsb
var MAP_LSB = 3; // fixed for native map

// each entry is (name, program number 0-127, variation cc0 value)
var instruments = [
  // -----------------------------------------------------
  // PIANOS
  // -----------------------------------------------------
  // 001
  { name: "Piano 1", pc: 0, var: 0 },
  { name: "Piano 1w", pc: 0, var: 8 },
  { name: "European Pf", pc: 0, var: 16 },
  { name: "Piano + Str.", pc: 0, var: 24 },
  // 002
  { name: "Piano 2", pc: 1, var: 0 },
  { name: "Piano 2w", pc: 1, var: 8 },
  { name: "Dance Piano", pc: 1, var: 16 },
  // 003
  { name: "Piano 3", pc: 2, var: 0 },
  { name: "EG+Rhodes 1", pc: 2, var: 1 },
  { name: "EG+Rhodes 2", pc: 2, var: 2 },
  { name: "Piano 3w", pc: 2, var: 8 },
  // 004
  { name: "Honky-tonk", pc: 3, var: 0 },
  { name: "Honky-tonk 2", pc: 3, var: 8 },
  // 005
  { name: "E.Piano 1", pc: 4, var: 0 },
  { name: "St.Soft EP", pc: 4, var: 8 },
  { name: "Cho.E.Piano", pc: 4, var: 9 },
  { name: "SilentRhodes", pc: 4, var: 10 },
  { name: "FM+SA EP", pc: 4, var: 16 },
  { name: "Dist E.Piano", pc: 4, var: 17 },
  { name: "Wurly", pc: 4, var: 24 },
  { name: "Hard Rhodes", pc: 4, var: 25 },
  { name: "MellowRhodes", pc: 4, var: 26 },
  // 006
  { name: "E.Piano 2", pc: 5, var: 0 },
  { name: "Detuned EP 2", pc: 5, var: 8 },
  { name: "St.FM EP", pc: 5, var: 16 },
  { name: "Hard FM EP", pc: 5, var: 24 },
  // 007
  { name: "Harpsichord", pc: 6, var: 0 },
  { name: "Harpsichord2", pc: 6, var: 1 },
  { name: "Coupled Hps.", pc: 6, var: 8 },
  { name: "Harpsi.w", pc: 6, var: 16 },
  { name: "Harpsi.o", pc: 6, var: 24 },
  { name: "Synth Harpsi", pc: 6, var: 32 },
  // 008
  { name: "Clav.", pc: 7, var: 0 },
  { name: "Comp Clav.", pc: 7, var: 8 },
  { name: "Reso Clav.", pc: 7, var: 16 },
  { name: "Clav.o", pc: 7, var: 24 },
  { name: "Analog Clav.", pc: 7, var: 32 },
  { name: "JP8 Clav. 1", pc: 7, var: 33 },
  { name: "JP8 Clav. 2", pc: 7, var: 35 },
  // -----------------------------------------------------
  // Chromatic Percussion
  // -----------------------------------------------------
  // 009
  { name: "Celesta", pc: 8, var: 0 },
  { name: "Pop Celesta", pc: 8, var: 1 },
  // 010
  { name: "Glockenspiel", pc: 9, var: 0 },
  // 011
  { name: "Music Box", pc: 10, var: 0 },
  // 012
  { name: "Vibraphone", pc: 11, var: 0 },
  { name: "Pop Vibe.", pc: 11, var: 1 },
  { name: "Vibraphone w", pc: 11, var: 8 },
  { name: "Vibraphones", pc: 11, var: 9 },
  // 013
  { name: "Marimba", pc: 12, var: 0 },
  { name: "Marimba w", pc: 12, var: 8 },
  { name: "Barafon", pc: 12, var: 16 },
  { name: "Barafon 2", pc: 12, var: 17 },
  { name: "Log drum", pc: 12, var: 24 },
  // 014
  { name: "Xylophone", pc: 13, var: 0 },
  // 015
  { name: "Tubular-bell", pc: 14, var: 0 },
  { name: "Church Bell", pc: 14, var: 8 },
  { name: "Carillon", pc: 14, var: 9 },
  // 016
  { name: "Santur", pc: 15, var: 0 },
  { name: "Santur 2", pc: 15, var: 1 },
  { name: "Cimbalom", pc: 15, var: 8 },
  { name: "Zither 1", pc: 15, var: 16 },
  { name: "Zither 2", pc: 15, var: 17 },
  { name: "Dulcimer", pc: 15, var: 24 },
  // -----------------------------------------------------
  // Organ
  // -----------------------------------------------------
  // 017
  { name: "Organ 1", pc: 16, var: 0 },
  { name: "Organ 101", pc: 16, var: 1 },
  { name: "Trem. Organ", pc: 16, var: 8 },
  { name: "Organ.o", pc: 16, var: 9 },
  { name: "60's Organ 1", pc: 16, var: 16 },
  { name: "60's Organ 2", pc: 16, var: 17 },
  { name: "60's Organ 3", pc: 16, var: 18 },
  { name: "Farf Organ", pc: 16, var: 19 },
  { name: "Cheese Organ", pc: 16, var: 24 },
  { name: "D-50 Organ", pc: 16, var: 25 },
  { name: "JUNO Organ", pc: 16, var: 26 },
  { name: "Hybrid Organ", pc: 16, var: 27 },
  { name: "VS Organ", pc: 16, var: 28 },
  { name: "Digi Church", pc: 16, var: 29 },
  { name: "70's E.Organ", pc: 16, var: 32 },
  { name: "Even Bar", pc: 16, var: 33 },
  { name: "Organ Bass", pc: 16, var: 40 },
  { name: "5th Organ", pc: 16, var: 48 },
  // 018
  { name: "Organ 2", pc: 17, var: 0 },
  { name: "Jazz Organ", pc: 17, var: 1 },
  { name: "E.Organ 16+2", pc: 17, var: 2 },
  { name: "Chorus Or.2", pc: 17, var: 8 },
  { name: "Octave Organ", pc: 17, var: 9 },
  { name: "Perc.Organ", pc: 17, var: 32 },
  // 019
  { name: "Organ 3", pc: 18, var: 0 },
  { name: "Rotary Org.", pc: 18, var: 8 },
  { name: "Rotary Org.S", pc: 18, var: 16 },
  { name: "Rock Organ 1", pc: 18, var: 17 },
  { name: "Rock Organ 2", pc: 18, var: 18 },
  { name: "Rotary Org.F", pc: 18, var: 24 },
  // 020
  { name: "Church Org.1", pc: 19, var: 0 },
  { name: "Church Org.2", pc: 19, var: 8 },
  { name: "Church Org.3", pc: 19, var: 16 },
  { name: "Organ Flute", pc: 19, var: 24 },
  { name: "Trem.Flute", pc: 19, var: 32 },
  { name: "Theater Org.", pc: 19, var: 33 },
  // 021
  { name: "Reed Organ", pc: 20, var: 0 },
  { name: "Wind Organ", pc: 20, var: 8 },
  // 022
  { name: "Accordion Fr", pc: 21, var: 0 },
  { name: "Accordion It", pc: 21, var: 8 },
  { name: "Dist. Accord", pc: 21, var: 9 },
  { name: "Cho. Accord", pc: 21, var: 16 },
  { name: "Hard Accord", pc: 21, var: 24 },
  { name: "Soft Accord", pc: 21, var: 25 },
  // 023
  { name: "Harmonica", pc: 22, var: 0 },
  { name: "Harmonica 2", pc: 22, var: 1 },
  // 024
  { name: "Bandoneon", pc: 23, var: 0 },
  { name: "Bandoneon 2", pc: 23, var: 8 },
  { name: "Bandoneon 3", pc: 23, var: 16 },
  // -----------------------------------------------------
  // Guitar
  // -----------------------------------------------------
  // 025
  { name: "Nylon-str.Gt", pc: 24, var: 0 },
  { name: "Ukulele", pc: 24, var: 8 },
  { name: "Nylon Gt.o", pc: 24, var: 16 },
  { name: "Velo Harmnix", pc: 24, var: 24 },
  { name: "Nylon Gt 2", pc: 24, var: 32 },
  { name: "Lequint Gt.", pc: 24, var: 40 },
  // 026
  { name: "Steel-str.Gt", pc: 25, var: 0 },
  { name: "12-str.Gt", pc: 25, var: 8 },
  { name: "Nylon+Steel", pc: 25, var: 9 },
  { name: "Mandolin", pc: 25, var: 16 },
  { name: "Mandolin 2", pc: 25, var: 17 },
  { name: "MandolinTrem", pc: 25, var: 18 },
  { name: "Steel Gt.2", pc: 25, var: 32 },
  // 027
  { name: "Jazz Gt.", pc: 26, var: 0 },
  { name: "Mellow Gt.", pc: 26, var: 1 },
  { name: "Pedal Steel", pc: 26, var: 8 },
  // 028
  { name: "Clean Gt.", pc: 27, var: 0 },
  { name: "Clean Half", pc: 27, var: 1 },
  { name: "Open Hard 1", pc: 27, var: 2 },
  { name: "Open Hard 2", pc: 27, var: 3 },
  { name: "JC Clean Gt.", pc: 27, var: 4 },
  { name: "Chorus Gt.", pc: 27, var: 8 },
  { name: "JC Chorus Gt", pc: 27, var: 9 },
  { name: "TC FrontPick", pc: 27, var: 16 },
  { name: "TC Rear Pick", pc: 27, var: 17 },
  { name: "TC Clean ff", pc: 27, var: 18 },
  { name: "TC Clean 2:", pc: 27, var: 19 },
  // 029
  { name: "Muted Gt.", pc: 28, var: 0 },
  { name: "Muted Dis.Gt", pc: 28, var: 1 },
  { name: "TC Muted Gt.", pc: 28, var: 2 },
  { name: "Funk Pop", pc: 28, var: 8 },
  { name: "Funk Gt.2", pc: 28, var: 16 },
  // 030
  { name: "OverdriveGt", pc: 29, var: 0 },
  { name: "Overdrive 2", pc: 29, var: 1 },
  { name: "Overdrive 3", pc: 29, var: 2 },
  { name: "More Drive", pc: 29, var: 3 },
  { name: "LP OverDrvGt", pc: 29, var: 8 },
  { name: "LP OverDrv:", pc: 29, var: 9 },
  // 031
  { name: "DistortionGt", pc: 30, var: 0 },
  { name: "Dist. Gt2 :", pc: 30, var: 1 },
  { name: "Dazed Guitar", pc: 30, var: 2 },
  { name: "Distortion:", pc: 30, var: 3 },
  { name: "Dist.Fast :", pc: 30, var: 4 },
  { name: "Feedback Gt.", pc: 30, var: 8 },
  { name: "Feedback Gt2", pc: 30, var: 9 },
  { name: "Power Guitar", pc: 30, var: 16 },
  { name: "Power Gt.2", pc: 30, var: 17 },
  { name: "5th Dist.", pc: 30, var: 18 },
  { name: "Rock Rhythm", pc: 30, var: 24 },
  { name: "Rock Rhythm2", pc: 30, var: 25 },
  // 032
  { name: "Gt.Harmonics", pc: 31, var: 0 },
  { name: "Gt. Feedback", pc: 31, var: 8 },
  { name: "Gt.Feedback2", pc: 31, var: 9 },
  { name: "Ac.Gt.Harmnx", pc: 31, var: 16 },
  { name: "E.Bass Harm.", pc: 31, var: 24 },
  // -----------------------------------------------------
  // Bass
  // -----------------------------------------------------
  // 033
  { name: "Acoustic Bs.", pc: 32, var: 0 },
  { name: "Rockabilly", pc: 32, var: 1 },
  { name: "Wild A.Bass", pc: 32, var: 8 },
  { name: "Bass + OHH", pc: 32, var: 16 },
  // 034
  { name: "Fingered Bs.", pc: 33, var: 0 },
  { name: "Fingered Bs2", pc: 33, var: 1 },
  { name: "Jazz Bass", pc: 33, var: 2 },
  { name: "Jazz Bass 2", pc: 33, var: 3 },
  { name: "Rock Bass", pc: 33, var: 4 },
  { name: "ChorusJazzBs", pc: 33, var: 8 },
  { name: "F.Bass/Harm.", pc: 33, var: 16 },
  // 035
  { name: "Picked Bass", pc: 34, var: 0 },
  { name: "Picked Bass2", pc: 34, var: 1 },
  { name: "Picked Bass3", pc: 34, var: 2 },
  { name: "Picked Bass4", pc: 34, var: 3 },
  { name: "Muted PickBs", pc: 34, var: 8 },
  { name: "P.Bass/Harm.", pc: 34, var: 16 },
  // 036
  { name: "Fretless Bs.", pc: 35, var: 0 },
  { name: "Fretless Bs2", pc: 35, var: 1 },
  { name: "Fretless Bs3", pc: 35, var: 2 },
  { name: "Fretless Bs4", pc: 35, var: 3 },
  { name: "Syn Fretless", pc: 35, var: 4 },
  { name: "Mr.Smooth", pc: 35, var: 5 },
  { name: "Wood+FlessBs", pc: 35, var: 8 },
  // 037
  { name: "Slap Bass 1", pc: 36, var: 0 },
  { name: "Slap Pop", pc: 36, var: 1 },
  { name: "Reso Slap", pc: 36, var: 8 },
  { name: "Unison Slap", pc: 36, var: 9 },
  // 038
  { name: "Slap Bass 2", pc: 37, var: 0 },
  { name: "FM Slap", pc: 37, var: 8 },
  // 039
  { name: "Synth Bass 1", pc: 38, var: 0 },
  { name: "SynthBass101", pc: 38, var: 1 },
  { name: "CS Bass", pc: 38, var: 2 },
  { name: "JP-4 Bass", pc: 38, var: 3 },
  { name: "JP-8 Bass", pc: 38, var: 4 },
  { name: "P5 Bass", pc: 38, var: 5 },
  { name: "JPMG Bass", pc: 38, var: 6 },
  { name: "Acid Bass", pc: 38, var: 8 },
  { name: "TB303 Bass", pc: 38, var: 9 },
  { name: "Tekno Bass", pc: 38, var: 10 },
  { name: "TB303 Bass 2", pc: 38, var: 11 },
  { name: "Kicked TB303", pc: 38, var: 12 },
  { name: "TB303 Saw Bs", pc: 38, var: 13 },
  { name: "Rubber303 Bs", pc: 38, var: 14 },
  { name: "Reso 303 Bs", pc: 38, var: 15 },
  { name: "Reso SH Bass", pc: 38, var: 16 },
  { name: "303 Sqr Bs", pc: 38, var: 17 },
  { name: "TB303 DistBs", pc: 38, var: 18 },
  { name: "Arpeggio Bs", pc: 38, var: 24 },
  // 040
  { name: "Synth Bass 2", pc: 39, var: 0 },
  { name: "SynthBass201", pc: 39, var: 1 },
  { name: "Modular Bass", pc: 39, var: 2 },
  { name: "Seq Bass", pc: 39, var: 3 },
  { name: "MG Bass", pc: 39, var: 4 },
  { name: "Mg Oct Bass 1", pc: 39, var: 5 },
  { name: "MG Oct Bass2", pc: 39, var: 6 },
  { name: "MG Blip Bs:", pc: 39, var: 7 },
  { name: "Beef FM Bass", pc: 39, var: 8 },
  { name: "Dly Bass", pc: 39, var: 9 },
  { name: "X Wire Bass", pc: 39, var: 10 },
  { name: "WireStr Bss", pc: 39, var: 11 },
  { name: "Blip Bass :", pc: 39, var: 12 },
  { name: "RubberBass 1", pc: 39, var: 13 },
  { name: "RubberBass 2", pc: 39, var: 16 },
  { name: "SH101 Bass 1", pc: 39, var: 17 },
  { name: "SH101 Bass 2", pc: 39, var: 18 },
  { name: "Smooth Bass", pc: 39, var: 19 },
  { name: "SH101 Bass 3", pc: 39, var: 20 },
  { name: "Spike Bass", pc: 39, var: 21 },
  { name: "House Bass:", pc: 39, var: 22 },
  { name: "KG Bass", pc: 39, var: 23 },
  { name: "Sync Bass", pc: 39, var: 24 },
  { name: "MG 5th Bass", pc: 39, var: 25 },
  { name: "RND Bass", pc: 39, var: 26 },
  { name: "WowMG Bass", pc: 39, var: 27 },
  { name: "Bubble Bass", pc: 39, var: 28 },
  // -----------------------------------------------------
  // Strings/Orchestra
  // -----------------------------------------------------
  // 041
  { name: "Violin:", pc: 40, var: 0 },
  { name: "Violin Atk:", pc: 40, var: 1 },
  { name: "Slow Violin", pc: 40, var: 8 },
  // 042
  { name: "Viola:", pc: 41, var: 0 },
  { name: "Viola Atk.:", pc: 41, var: 1 },
  // 043
  { name: "Cello:", pc: 42, var: 0 },
  { name: "Cello Atk.:", pc: 42, var: 1 },
  // 044
  { name: "Contrabass", pc: 43, var: 0 },
  // 045
  { name: "Tremolo Str", pc: 44, var: 0 },
  { name: "Slow Tremolo", pc: 44, var: 8 },
  { name: "Suspense Str", pc: 44, var: 9 },
  // 046
  { name: "PizzicatoStr", pc: 45, var: 0 },
  { name: "Vcs&Cbs Pizz", pc: 45, var: 1 },
  { name: "Chamber Pizz", pc: 45, var: 2 },
  { name: "St.Pizzicato", pc: 45, var: 3 },
  { name: "Solo Pizz.", pc: 45, var: 8 },
  { name: "Solo Spic.", pc: 45, var: 16 },
  // 047
  { name: "Harp", pc: 46, var: 0 },
  { name: "Synth Harp", pc: 46, var: 16 },
  // 048
  { name: "Timpani", pc: 47, var: 0 },
  // 049
  { name: "Strings:", pc: 48, var: 0 },
  { name: "Bright Str:", pc: 48, var: 1 },
  { name: "ChamberStr:", pc: 48, var: 2 },
  { name: "Cello sect.", pc: 48, var: 3 },
  { name: "Orchestra", pc: 48, var: 8 },
  { name: "Orchestra 2", pc: 48, var: 9 },
  { name: "Tremolo Orch", pc: 48, var: 10 },
  { name: "Choir Str.", pc: 48, var: 11 },
  { name: "Strings+Horn", pc: 48, var: 12 },
  { name: "St. Strings", pc: 48, var: 16 },
  { name: "Velo Strings", pc: 48, var: 24 },
  { name: "Oct Strings1", pc: 48, var: 32 },
  { name: "Oct Strings2", pc: 48, var: 33 },
  // 050
  { name: "SlowStrings", pc: 49, var: 0 },
  { name: "SlowStrings2", pc: 49, var: 1 },
  { name: "Legato Str.", pc: 49, var: 8 },
  { name: "Warm Strings", pc: 49, var: 9 },
  { name: "St.Slow Str.", pc: 49, var: 10 },
  // 051
  { name: "Syn.Strings1", pc: 50, var: 0 },
  { name: "OB Strings", pc: 50, var: 1 },
  { name: "StackStrings", pc: 50, var: 2 },
  { name: "JP Strings", pc: 50, var: 3 },
  { name: "Syn.Strings3", pc: 50, var: 8 },
  { name: "Syn.Strings4", pc: 50, var: 9 },
  { name: "High Strings", pc: 50, var: 16 },
  { name: "Hybrid Str.", pc: 50, var: 17 },
  { name: "Tron Strings", pc: 50, var: 24 },
  { name: "Noiz Strings", pc: 50, var: 25 },
  // 052
  { name: "Syn.Strings2", pc: 51, var: 0 },
  { name: "Syn.Strings5", pc: 51, var: 1 },
  { name: "JUNO Strings", pc: 51, var: 2 },
  { name: "Air Strings", pc: 51, var: 8 },
  // 053
  { name: "Choir Aahs", pc: 52, var: 0 },
  { name: "St.ChoirAahs", pc: 52, var: 8 },
  { name: "Melted Choir", pc: 52, var: 9 },
  { name: "Church Choir", pc: 52, var: 10 },
  { name: "Choir Hahs", pc: 52, var: 16 },
  { name: "Chorus Lahs", pc: 52, var: 24 },
  { name: "Chorus Aahs", pc: 52, var: 32 },
  { name: "Male Aah+Str", pc: 52, var: 33 },
  // 054
  { name: "Voice Oohs", pc: 53, var: 0 },
  { name: "Voice Dahs", pc: 53, var: 8 },
  // 055
  { name: "SynVox", pc: 54, var: 0 },
  { name: "Syn.Voice", pc: 54, var: 8 },
  { name: "Silent Night", pc: 54, var: 9 },
  { name: "VP330 Choir", pc: 54, var: 16 },
  { name: "Vinyl Choir", pc: 54, var: 17 },
  // 056
  { name: "OrchestraHit", pc: 55, var: 0 },
  { name: "Impact Hit", pc: 55, var: 8 },
  { name: "Philly Hit", pc: 55, var: 9 },
  { name: "Double Hit", pc: 55, var: 10 },
  { name: "Perc.Hit", pc: 55, var: 11 },
  { name: "Shock Wave", pc: 55, var: 12 },
  { name: "Lo Fi Rave", pc: 55, var: 16 },
  { name: "Techno Hit", pc: 55, var: 17 },
  { name: "Dist.Hit", pc: 55, var: 18 },
  { name: "Bam Hit", pc: 55, var: 19 },
  { name: "Bit Hit", pc: 55, var: 20 },
  { name: "Bim Hit", pc: 55, var: 21 },
  { name: "Technorg Hit", pc: 55, var: 22 },
  { name: "Rave Hit", pc: 55, var: 23 },
  { name: "Strings Hit", pc: 55, var: 24 },
  { name: "Stack Hit", pc: 55, var: 25 },
  // -----------------------------------------------------
  // Brass
  // -----------------------------------------------------
  // 057
  { name: "Trumpet", pc: 56, var: 0 },
  { name: "Trumpet 2", pc: 56, var: 1 },
  { name: "Trumpet:", pc: 56, var: 2 },
  { name: "Flugel Horn", pc: 56, var: 8 },
  { name: "4th Trumpets", pc: 56, var: 16 },
  { name: "Bright Tp.", pc: 56, var: 24 },
  { name: "Warm Tp.", pc: 56, var: 25 },
  { name: "Syn. Trumpet", pc: 56, var: 32 },
  // 058
  { name: "Trombone", pc: 57, var: 0 },
  { name: "Trombone 2", pc: 57, var: 1 },
  { name: "Twin bones", pc: 57, var: 2 },
  { name: "Bs. Trombone", pc: 57, var: 8 },
  // 059
  { name: "Tuba", pc: 58, var: 0 },
  { name: "Tuba 2", pc: 58, var: 1 },
  // 060
  { name: "MutedTrumpet", pc: 59, var: 0 },
  { name: "Muted Horns", pc: 59, var: 8 },
  // 061
  { name: "French Horns", pc: 60, var: 0 },
  { name: "Fr.Horn 2", pc: 60, var: 1 },
  { name: "Horn + Orche", pc: 60, var: 2 },
  { name: "Wide FreHrns", pc: 60, var: 3 },
  { name: "F.Hrn Slow:", pc: 60, var: 8 },
  { name: "Dual Horns", pc: 60, var: 9 },
  { name: "Synth Horn", pc: 60, var: 16 },
  { name: "F.Horn Rip", pc: 60, var: 24 },
  // 062
  { name: "Brass 1", pc: 61, var: 0 },
  { name: "Brass ff", pc: 61, var: 1 },
  { name: "Bones Sect.", pc: 61, var: 2 },
  { name: "Brass  2", pc: 61, var: 8 },
  { name: "Brass  3", pc: 61, var: 9 },
  { name: "Brass sfz", pc: 61, var: 10 },
  { name: "Brass Fall", pc: 61, var: 16 },
  { name: "Trumpet Fall", pc: 61, var: 17 },
  { name: "Octave Brass", pc: 61, var: 24 },
  { name: "Brass + Reed", pc: 61, var: 25 },
  // 063
  { name: "SynthBrass1", pc: 62, var: 0 },
  { name: "JUNO Brass", pc: 62, var: 1 },
  { name: "StackBrass", pc: 62, var: 2 },
  { name: "SH-5 Brass", pc: 62, var: 3 },
  { name: "MKS Brass", pc: 62, var: 4 },
  { name: "Pro Brass", pc: 62, var: 8 },
  { name: "P5 Brass", pc: 62, var: 9 },
  { name: "Oct SynBrass", pc: 62, var: 16 },
  { name: "Hybrid Brass", pc: 62, var: 17 },
  // 064
  { name: "SynthBrass 2", pc: 63, var: 0 },
  { name: "Soft Brass", pc: 63, var: 1 },
  { name: "Warm Brass", pc: 63, var: 2 },
  { name: "SynBrass sfz", pc: 63, var: 8 },
  { name: "OB Brass", pc: 63, var: 9 },
  { name: "Reso Brass", pc: 63, var: 10 },
  { name: "Velo Brass 1", pc: 63, var: 16 },
  { name: "Transbrass", pc: 63, var: 17 },
  // -----------------------------------------------------
  // Reed
  // -----------------------------------------------------
  // 065
  { name: "Soprano Sax", pc: 64, var: 0 },
  { name: "SopranoExp.", pc: 64, var: 8 },
  // 066
  { name: "Alto Sax", pc: 65, var: 0 },
  { name: "AltoSax Exp.", pc: 65, var: 8 },
  { name: "Grow Sax", pc: 65, var: 9 },
  { name: "AltoSax + Tp", pc: 65, var: 16 },
  // 067
  { name: "Tenor Sax", pc: 66, var: 0 },
  { name: "Tenor Sax :", pc: 66, var: 1 },
  { name: "BreathyTn.:", pc: 66, var: 8 },
  { name: "St.Tenor Sax", pc: 66, var: 9 },
  // 068
  { name: "Baritone Sax", pc: 67, var: 0 },
  { name: "Bari. Sax :", pc: 67, var: 1 },
  // 069
  { name: "Oboe", pc: 68, var: 0 },
  { name: "Oboe Exp.", pc: 68, var: 8 },
  { name: "Multi Reed", pc: 68, var: 16 },
  // 070
  { name: "English Horn", pc: 69, var: 0 },
  // 071
  { name: "Bassoon", pc: 70, var: 0 },
  // 072
  { name: "Clarinet", pc: 71, var: 0 },
  { name: "Bs Clarinet", pc: 71, var: 8 },
  { name: "Multi Wind", pc: 71, var: 16 },
  // -----------------------------------------------------
  // Pipe
  // -----------------------------------------------------
  // 073
  { name: "Piccolo", pc: 72, var: 0 },
  { name: "Piccolo:", pc: 72, var: 1 },
  { name: "Nay", pc: 72, var: 8 },
  { name: "Nay Tremolo", pc: 72, var: 9 },
  { name: "Di", pc: 72, var: 16 },
  // 074
  { name: "Flute", pc: 73, var: 0 },
  { name: "Flute 2:", pc: 73, var: 1 },
  { name: "Flute Exp.", pc: 73, var: 2 },
  { name: "Flt Travelso", pc: 73, var: 3 },
  { name: "Flute + Vln", pc: 73, var: 8 },
  { name: "Tron Flute", pc: 73, var: 16 },
  // 075
  { name: "Recorder", pc: 74, var: 0 },
  // 076
  { name: "Pan Flute", pc: 75, var: 0 },
  { name: "Kawala", pc: 75, var: 8 },
  { name: "Zampona", pc: 75, var: 16 },
  { name: "Zampona Atk", pc: 75, var: 17 },
  // 077
  { name: "Bottle Blow", pc: 76, var: 0 },
  // 078
  { name: "Shakuhachi", pc: 77, var: 0 },
  { name: "Shakuhachi:", pc: 77, var: 1 },
  // 079
  { name: "Whistle", pc: 78, var: 0 },
  { name: "Whistle 2", pc: 78, var: 1 },
  // 080
  { name: "Ocarina", pc: 79, var: 0 },
  // -----------------------------------------------------
  // Synth Lead
  // -----------------------------------------------------
  // 081
  { name: "Square Wave", pc: 80, var: 0 },
  { name: "MG Square", pc: 80, var: 1 },
  { name: "Hollow Mini", pc: 80, var: 2 },
  { name: "Mellow FM", pc: 80, var: 3 },
  { name: "CC Solo", pc: 80, var: 4 },
  { name: "Shmoog", pc: 80, var: 5 },
  { name: "LM Square", pc: 80, var: 6 },
  { name: "2600 Sine", pc: 80, var: 8 },
  { name: "Sine Lead", pc: 80, var: 9 },
  { name: "KG Lead", pc: 80, var: 10 },
  { name: "P5 Square", pc: 80, var: 16 },
  { name: "OB Square", pc: 80, var: 17 },
  { name: "JP-8 Square", pc: 80, var: 18 },
  { name: "Pulse Lead", pc: 80, var: 24 },
  { name: "JP8 PulseLd1", pc: 80, var: 25 },
  { name: "JP8 PulseLd2", pc: 80, var: 26 },
  { name: "MG Reso. Pls", pc: 80, var: 27 },
  // 082
  { name: "Saw Wave", pc: 81, var: 0 },
  { name: "OB2 Saw", pc: 81, var: 1 },
  { name: "Pulse Saw", pc: 81, var: 2 },
  { name: "Feline GR", pc: 81, var: 3 },
  { name: "Big Lead", pc: 81, var: 4 },
  { name: "Velo Lead", pc: 81, var: 5 },
  { name: "GR-300", pc: 81, var: 6 },
  { name: "LA Saw", pc: 81, var: 7 },
  { name: "Doctor Solo", pc: 81, var: 8 },
  { name: "Fat Saw Lead", pc: 81, var: 9 },
  { name: "D-50 Fat Saw", pc: 81, var: 11 },
  { name: "Waspy Synth", pc: 81, var: 16 },
  { name: "PM Lead", pc: 81, var: 17 },
  { name: "CS Saw Lead", pc: 81, var: 18 },
  { name: "MG Saw 1", pc: 81, var: 24 },
  { name: "MG Saw 2", pc: 81, var: 25 },
  { name: "OB Saw 1", pc: 81, var: 26 },
  { name: "OB Saw 2", pc: 81, var: 27 },
  { name: "D-50 Saw", pc: 81, var: 28 },
  { name: "SH-101 Saw", pc: 81, var: 29 },
  { name: "CS Saw", pc: 81, var: 30 },
  { name: "MG Saw Lead", pc: 81, var: 31 },
  { name: "OB Saw Lead", pc: 81, var: 32 },
  { name: "P5 Saw Lead", pc: 81, var: 33 },
  { name: "MG unison", pc: 81, var: 34 },
  { name: "Oct Saw Lead", pc: 81, var: 35 },
  { name: "SequenceSaw1", pc: 81, var: 40 },
  { name: "SequenceSaw2", pc: 81, var: 41 },
  { name: "Reso Saw", pc: 81, var: 42 },
  { name: "Cheese Saw 1", pc: 81, var: 43 },
  { name: "Cheese Saw 2", pc: 81, var: 44 },
  { name: "Rhythmic Saw", pc: 81, var: 45 },
  // 083
  { name: "Syn.Calliope", pc: 82, var: 0 },
  { name: "Vent Synth", pc: 82, var: 1 },
  { name: "Pure PanLead", pc: 82, var: 2 },
  // 084
  { name: "Chiffer Lead", pc: 83, var: 0 },
  { name: "TB Lead", pc: 83, var: 1 },
  { name: "Mad Lead", pc: 83, var: 8 },
  // 085
  { name: "Charang", pc: 84, var: 0 },
  { name: "Dist.Lead", pc: 84, var: 8 },
  { name: "Acid Guitar1", pc: 84, var: 9 },
  { name: "Acid Guitar2", pc: 84, var: 10 },
  { name: "P5 Sync Lead", pc: 84, var: 16 },
  { name: "Fat Sync Lead", pc: 84, var: 17 },
  { name: "Rock Lead", pc: 84, var: 18 },
  { name: "5th DecaSync", pc: 84, var: 19 },
  { name: "Dirty Sync", pc: 84, var: 20 },
  { name: "JUNO Sub Osc", pc: 84, var: 24 },
  // 086
  { name: "Solo Vox", pc: 85, var: 0 },
  { name: "Vox Lead", pc: 85, var: 8 },
  { name: "LFO Vox", pc: 85, var: 9 },
  // 087
  { name: "5th Saw Wave", pc: 86, var: 0 },
  { name: "Big Fives", pc: 86, var: 1 },
  { name: "5th Lead", pc: 86, var: 2 },
  { name: "5th Ana.Clav", pc: 86, var: 3 },
  { name: "4th Lead", pc: 86, var: 8 },
  // 088
  { name: "Bass & Lead", pc: 87, var: 0 },
  { name: "Big & Raw", pc: 87, var: 1 },
  { name: "Fat & Perky", pc: 87, var: 2 },
  { name: "JUNO Rave", pc: 87, var: 3 },
  { name: "JP8 BsLead 1", pc: 87, var: 4 },
  { name: "JP8 BsLead 2", pc: 87, var: 5 },
  { name: "SH-5 Bs.Lead", pc: 87, var: 6 },
  // -----------------------------------------------------
  // Synth Pad, etc.
  // -----------------------------------------------------
  // 089
  { name: "Fantasia", pc: 88, var: 0 },
  { name: "Fantasia 2", pc: 88, var: 1 },
  { name: "New Age Pad", pc: 88, var: 2 },
  { name: "Bell Heaven", pc: 88, var: 3 },
  // 90
  { name: "Warm Pad", pc: 89, var: 0 },
  { name: "Thick Matrix", pc: 89, var: 1 },
  { name: "Horn Pad", pc: 89, var: 2 },
  { name: "Rotary Strng", pc: 89, var: 3 },
  { name: "OB Soft Pad", pc: 89, var: 4 },
  { name: "Octave Pad", pc: 89, var: 8 },
  { name: "Stack Pad", pc: 89, var: 9 },
  // 91
  { name: "Polysynth", pc: 90, var: 0 },
  { name: "80's PolySyn", pc: 90, var: 1 },
  { name: "Polysynth 2", pc: 90, var: 2 },
  { name: "Poly King", pc: 90, var: 3 },
  { name: "Power Stack", pc: 90, var: 8 },
  { name: "Octave Stack", pc: 90, var: 9 },
  { name: "Reso Stack", pc: 90, var: 10 },
  { name: "Techno Stack", pc: 90, var: 11 },
  // 092
  { name: "Space Voice", pc: 91, var: 0 },
  { name: "Heaven II", pc: 91, var: 1 },
  { name: "SC Heaven", pc: 91, var: 2 },
  { name: "Cosmic Voice", pc: 91, var: 8 },
  { name: "Auh Vox", pc: 91, var: 9 },
  { name: "AuhAuh", pc: 91, var: 10 },
  { name: "Vocorderman", pc: 91, var: 11 },
  // 093
  { name: "Bowed Glass", pc: 92, var: 0 },
  { name: "SoftBellPad", pc: 92, var: 1 },
  { name: "JP8 Sqr Pad", pc: 92, var: 2 },
  { name: "7thBelPad", pc: 92, var: 3 },
  // 094
  { name: "Metal Pad", pc: 93, var: 0 },
  { name: "Tine Pad", pc: 93, var: 1 },
  { name: "Panner Pad", pc: 93, var: 2 },
  // 095
  { name: "Halo Pad", pc: 94, var: 0 },
  { name: "Vox Pad", pc: 94, var: 1 },
  { name: "Vox Sweep", pc: 94, var: 2 },
  { name: "Horror Pad", pc: 94, var: 8 },
  // 096
  { name: "Sweep Pad", pc: 95, var: 0 },
  { name: "Polar Pad", pc: 95, var: 1 },
  { name: "Converge", pc: 95, var: 8 },
  { name: "Shwimmer", pc: 95, var: 9 },
  { name: "Celestial Pd", pc: 95, var: 10 },
  { name: "Bag Sweep", pc: 95, var: 11 },
  // -----------------------------------------------------
  // Synth SFX
  // -----------------------------------------------------
  // 097
  { name: "Ice Rain", pc: 96, var: 0 },
  { name: "Harmo Rain", pc: 96, var: 1 },
  { name: "African wood", pc: 96, var: 2 },
  { name: "Anklung Pad", pc: 96, var: 3 },
  { name: "Rattle Pad", pc: 96, var: 4 },
  { name: "Clavi Pad", pc: 96, var: 8 },
  // 098
  { name: "Soundtrack", pc: 97, var: 0 },
  { name: "Ancestral", pc: 97, var: 1 },
  { name: "Prologue", pc: 97, var: 2 },
  { name: "Prologue 2", pc: 97, var: 3 },
  { name: "Hols Strings", pc: 97, var: 4 },
  { name: "Rave", pc: 97, var: 8 },
  // 099
  { name: "Crystal", pc: 98, var: 0 },
  { name: "Syn Mallet", pc: 98, var: 1 },
  { name: "Soft Crystal", pc: 98, var: 2 },
  { name: "Round Glock", pc: 98, var: 3 },
  { name: "Loud Glock", pc: 98, var: 4 },
  { name: "GlockenChime", pc: 98, var: 5 },
  { name: "Clear Bells", pc: 98, var: 6 },
  { name: "ChristmasBel", pc: 98, var: 7 },
  { name: "Vibra Bells", pc: 98, var: 8 },
  { name: "Digi Bells", pc: 98, var: 9 },
  { name: "Music Bell", pc: 98, var: 10 },
  { name: "Analog Bell", pc: 98, var: 11 },
  { name: "Choral Bells", pc: 98, var: 16 },
  { name: "Air Bells", pc: 98, var: 17 },
  { name: "Bell Harp", pc: 98, var: 18 },
  { name: "Gamelimba", pc: 98, var: 19 },
  { name: "JUNO Bell", pc: 98, var: 20 },
  // 100
  { name: "Atmosphere", pc: 99, var: 0 },
  { name: "Warm Atmos", pc: 99, var: 1 },
  { name: "Nylon Harp", pc: 99, var: 2 },
  { name: "Harpvox", pc: 99, var: 3 },
  { name: "HollowReleas", pc: 99, var: 4 },
  { name: "Nylon+Rhodes", pc: 99, var: 5 },
  { name: "Ambient Pad", pc: 99, var: 6 },
  { name: "Invisible", pc: 99, var: 7 },
  { name: "Pulsey Key", pc: 99, var: 8 },
  { name: "Noise Piano", pc: 99, var: 9 },
  // 101
  { name: "Brightness", pc: 100, var: 0 },
  { name: "Shining Star", pc: 100, var: 1 },
  { name: "OB Stab", pc: 100, var: 2 },
  { name: "Org Bell", pc: 100, var: 8 },
  // 102
  { name: "Goblin", pc: 101, var: 0 },
  { name: "Goblinson", pc: 101, var: 1 },
  { name: "50's Sci-Fi", pc: 101, var: 2 },
  { name: "Abduction", pc: 101, var: 3 },
  { name: "Auhbient", pc: 101, var: 4 },
  { name: "LFO Pad", pc: 101, var: 5 },
  { name: "Random Str", pc: 101, var: 6 },
  { name: "Random Pad", pc: 101, var: 7 },
  { name: "LowBirds Pad", pc: 101, var: 8 },
  { name: "Falling Down", pc: 101, var: 9 },
  { name: "LFO RAVE", pc: 101, var: 10 },
  { name: "LFO Horror", pc: 101, var: 11 },
  { name: "LFO Techno", pc: 101, var: 12 },
  { name: "Alternative", pc: 101, var: 13 },
  { name: "UFO FX", pc: 101, var: 14 },
  { name: "Gargle Man", pc: 101, var: 15 },
  { name: "Sweep FX", pc: 101, var: 16 },
  // 103
  { name: "Echo Drops", pc: 102, var: 0 },
  { name: "Echo Bell", pc: 102, var: 1 },
  { name: "Echo Pan", pc: 102, var: 2 },
  { name: "Echo Pan 2", pc: 102, var: 3 },
  { name: "Big Panner", pc: 102, var: 4 },
  { name: "Reso Panner", pc: 102, var: 5 },
  { name: "Water Piano", pc: 102, var: 6 },
  { name: "Pan Sequence", pc: 102, var: 8 },
  { name: "Aqua", pc: 102, var: 9 },
  // 104
  { name: "Star Theme", pc: 103, var: 0 },
  { name: "Star Theme 2", pc: 103, var: 1 },
  { name: "Dream Pad", pc: 103, var: 8 },
  { name: "Silky Pad", pc: 103, var: 9 },
  { name: "New Century", pc: 103, var: 16 },
  { name: "7th Atmos.", pc: 103, var: 17 },
  { name: "Galaxy Way", pc: 103, var: 18 },
  // -----------------------------------------------------
  // Ethnic, etc.
  // -----------------------------------------------------
  // 105
  { name: "Sitar", pc: 104, var: 0 },
  { name: "Sitar 2", pc: 104, var: 1 },
  { name: "Detune Sitar", pc: 104, var: 2 },
  { name: "Sitar 3", pc: 104, var: 3 },
  { name: "Tambra", pc: 104, var: 8 },
  { name: "Tamboura", pc: 104, var: 16 },
  // 106
  { name: "Banjo", pc: 105, var: 0 },
  { name: "Muted Banjo", pc: 105, var: 1 },
  { name: "Rabab", pc: 105, var: 8 },
  { name: "San Xian", pc: 105, var: 9 },
  { name: "Gopichant", pc: 105, var: 16 },
  { name: "Oud", pc: 105, var: 24 },
  { name: "Oud+Strings", pc: 105, var: 28 },
  { name: "Pi Pa", pc: 105, var: 32 },
  // 107
  { name: "Shamisen", pc: 106, var: 0 },
  { name: "Tsugaru", pc: 106, var: 1 },
  { name: "Syn Shamisen", pc: 106, var: 8 },
  // 108
  { name: "Koto", pc: 107, var: 0 },
  { name: "Gu Zheng", pc: 107, var: 1 },
  { name: "Taisho Koto", pc: 107, var: 8 },
  { name: "Kanoon", pc: 107, var: 16 },
  { name: "Kanoon+Choir", pc: 107, var: 19 },
  { name: "Oct Harp", pc: 107, var: 24 },
  // 109
  { name: "Kalimba", pc: 108, var: 0 },
  { name: "Sanza", pc: 108, var: 8 },
  // 110
  { name: "Bagpipe", pc: 109, var: 0 },
  { name: "Didgeridoo", pc: 109, var: 8 },
  // 111
  { name: "Fiddle", pc: 110, var: 0 },
  { name: "Er Hu", pc: 110, var: 8 },
  { name: "Gao Hu", pc: 110, var: 9 },
  // 112
  { name: "Shanai", pc: 111, var: 0 },
  { name: "Shanai 2", pc: 111, var: 1 },
  { name: "Pungi", pc: 111, var: 8 },
  { name: "Hichiriki", pc: 111, var: 16 },
  { name: "Mizmar", pc: 111, var: 24 },
  { name: "Suona 1", pc: 111, var: 32 },
  { name: "Suona 2", pc: 111, var: 33 },
  // -----------------------------------------------------
  // Percussive
  // -----------------------------------------------------
  // 113
  { name: "Tinkle Bell", pc: 112, var: 0 },
  { name: "Bonang", pc: 112, var: 8 },
  { name: "Gender", pc: 112, var: 9 },
  { name: "Gamelan Gong", pc: 112, var: 10 },
  { name: "St.Gamelan", pc: 112, var: 11 },
  { name: "Jang-Gu", pc: 112, var: 12 },
  { name: "RAMA Cymbal", pc: 112, var: 16 },
  // 114
  { name: "Agogo", pc: 113, var: 0 },
  { name: "Atarigane", pc: 113, var: 8 },
  { name: "Tambourine", pc: 113, var: 16 },
  // 115
  { name: "Steel Drums", pc: 114, var: 0 },
  { name: "Island Mlt", pc: 114, var: 1 },
  // 116
  { name: "Woodblock", pc: 115, var: 0 },
  { name: "Castanets", pc: 115, var: 8 },
  { name: "Angklung", pc: 115, var: 16 },
  { name: "Angkl Rhythm", pc: 115, var: 17 },
  { name: "Finger Snaps", pc: 115, var: 24 },
  { name: "909 HandClap", pc: 115, var: 32 },
  // 117
  { name: "Taiko", pc: 116, var: 0 },
  { name: "Small Taiko", pc: 116, var: 1 },
  { name: "Concert BD", pc: 116, var: 8 },
  { name: "Jungle BD", pc: 116, var: 16 },
  { name: "Techno BD", pc: 116, var: 17 },
  { name: "Bounce", pc: 116, var: 18 },
  // 118
  { name: "Melo. Tom 1", pc: 117, var: 0 },
  { name: "Real Tom", pc: 117, var: 1 },
  { name: "Melo. Tom 2", pc: 117, var: 8 },
  { name: "Rock Tom", pc: 117, var: 9 },
  { name: "Rash SD", pc: 117, var: 16 },
  { name: "House SD", pc: 117, var: 17 },
  { name: "Jungle SD", pc: 117, var: 18 },
  { name: "909 SD", pc: 117, var: 19 },
  // 119
  { name: "Synth Drum", pc: 118, var: 0 },
  { name: "808 Tom", pc: 118, var: 8 },
  { name: "Elec Perc", pc: 118, var: 9 },
  { name: "Sine Perc.", pc: 118, var: 10 },
  { name: "606 Tom", pc: 118, var: 11 },
  { name: "909 Tom", pc: 118, var: 12 },
  // 120
  { name: "Reverse Cym.", pc: 119, var: 0 },
  { name: "Reverse Cym2", pc: 119, var: 1 },
  { name: "Reverse Cym3", pc: 119, var: 2 },
  { name: "Rev.Snare 1", pc: 119, var: 8 },
  { name: "Rev.Snare 2", pc: 119, var: 9 },
  { name: "Rev.Kick 1", pc: 119, var: 16 },
  { name: "Rev.ConBD", pc: 119, var: 17 },
  { name: "Rev.Tom 1", pc: 119, var: 24 },
  { name: "Rev.Tom 2", pc: 119, var: 25 },
  // -----------------------------------------------------
  // SFX
  // -----------------------------------------------------
  // 121
  { name: "Gt.FretNoise", pc: 120, var: 0 },
  { name: "Gt.Cut Noise", pc: 120, var: 1 },
  { name: "String Slap", pc: 120, var: 2 },
  { name: "Gt.CutNoise2", pc: 120, var: 3 },
  { name: "Dist.CutNoiz", pc: 120, var: 4 },
  { name: "Bass Slide", pc: 120, var: 5 },
  { name: "Pick Scrape", pc: 120, var: 6 },
  { name: "Gt. FX Menu", pc: 120, var: 8 },
  { name: "Bartok Pizz.", pc: 120, var: 9 },
  { name: "Guitar Slap", pc: 120, var: 10 },
  { name: "Chord Stroke", pc: 120, var: 11 },
  { name: "Biwa Stroke", pc: 120, var: 12 },
  { name: "Biwa Tremolo", pc: 120, var: 13 },
  // 122
  { name: "Breath Noise", pc: 121, var: 0 },
  { name: "Fl.Key Click", pc: 121, var: 1 },
  // 123
  { name: "Seashore", pc: 122, var: 0 },
  { name: "Rain", pc: 122, var: 1 },
  { name: "Thunder", pc: 122, var: 2 },
  { name: "Wind", pc: 122, var: 3 },
  { name: "Stream", pc: 122, var: 4 },
  { name: "Bubble", pc: 122, var: 5 },
  { name: "Wind 2", pc: 122, var: 6 },
  { name: "Pink Noise", pc: 122, var: 16 },
  { name: "White Noise", pc: 122, var: 17 },
  // 124
  { name: "Bird", pc: 123, var: 0 },
  { name: "Dog", pc: 123, var: 1 },
  { name: "Horse-Gallop", pc: 123, var: 2 },
  { name: "Bird 2", pc: 123, var: 3 },
  { name: "Kitty", pc: 123, var: 4 },
  { name: "Growl", pc: 123, var: 5 },
  // 125
  { name: "Telephone 1", pc: 124, var: 0 },
  { name: "Telephone 2", pc: 124, var: 1 },
  { name: "DoorCreaking", pc: 124, var: 2 },
  { name: "Door", pc: 124, var: 3 },
  { name: "Scratch", pc: 124, var: 4 },
  { name: "Wind Chimes", pc: 124, var: 5 },
  { name: "Scratch 2", pc: 124, var: 7 },
  { name: "ScratchKey", pc: 124, var: 8 },
  { name: "TapeRewind", pc: 124, var: 9 },
  { name: "Phono Noise", pc: 124, var: 10 },
  { name: "MC-500 Beep", pc: 124, var: 11 },
  // 126
  { name: "Helicopter", pc: 125, var: 0 },
  { name: "Car-Engine", pc: 125, var: 1 },
  { name: "Car-Stop", pc: 125, var: 2 },
  { name: "Car-Pass", pc: 125, var: 3 },
  { name: "Car-Crash", pc: 125, var: 4 },
  { name: "Siren", pc: 125, var: 5 },
  { name: "Train", pc: 125, var: 6 },
  { name: "Jetplane", pc: 125, var: 7 },
  { name: "Starship", pc: 125, var: 8 },
  { name: "Burst Noise", pc: 125, var: 9 },
  { name: "Calculating", pc: 125, var: 10 },
  { name: "Perc. Bang", pc: 125, var: 11 },
  // 127
  { name: "Applause", pc: 126, var: 0 },
  { name: "Laughing", pc: 126, var: 1 },
  { name: "Screaming", pc: 126, var: 2 },
  { name: "Punch", pc: 126, var: 3 },
  { name: "Heart Beat", pc: 126, var: 4 },
  { name: "Footsteps", pc: 126, var: 5 },
  { name: "Applause 2", pc: 126, var: 6 },
  { name: "Small Club", pc: 126, var: 7 },
  { name: "ApplauseWave", pc: 126, var: 8 },
  { name: "Voice One", pc: 126, var: 16 },
  { name: "Voice Two", pc: 126, var: 17 },
  { name: "Voice Three", pc: 126, var: 18 },
  { name: "Voice Tah", pc: 126, var: 19 },
  { name: "Voice Whey", pc: 126, var: 20 },
  // 128
  { name: "Gun Shot", pc: 127, var: 0 },
  { name: "Machine Gun", pc: 127, var: 1 },
  { name: "Lasergun", pc: 127, var: 2 },
  { name: "Explosion", pc: 127, var: 3 },
  { name: "Eruption", pc: 127, var: 4 },
  { name: "Big Shot", pc: 127, var: 5 },
];

var categories = {
  "🎹 Pianos": [0, 1, 2, 3, 4, 5, 6, 7],
  "🔔 Chromatic Percussion": [8, 9, 10, 11, 12, 13, 14, 15],
  "🎛️ Organ": [16, 17, 18, 19, 20, 21, 22, 23],
  "🎸 Guitar": [24, 25, 26, 27, 28, 29, 30, 31],
  "🎵 Bass": [32, 33, 34, 35, 36, 37, 38, 39],
  "🎻 Strings/Orchestra": [
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  ],
  "🎺 Brass": [56, 57, 58, 59, 60, 61, 62, 63],
  "🎷 Reed": [64, 65, 66, 67, 68, 69, 70, 71],
  "🍃 Pipe": [72, 73, 74, 75, 76, 77, 78, 79],
  "🎤 Synth Lead": [80, 81, 82, 83, 84, 85, 86, 87],
  "☁️ Synth Pad": [88, 89, 90, 91, 92, 93, 94, 95],
  "🌌 Synth SFX": [96, 97, 98, 99, 100, 101, 102, 103],
  "🌍 Ethnic": [104, 105, 106, 107, 108, 109, 110, 111],
  "🥁 Percussive": [112, 113, 114, 115, 116, 117, 118, 119],
  "💥 SFX": [120, 121, 122, 123, 124, 125, 126, 127],
};
var categoryNames = Object.keys(categories);
var instrumentNames = [];
var lastInstrumentIdx = -1;

function HandleMIDI(e) {
  e.send();
}

function sendBankAndPC(entry) {
  var cc = new ControlChange();
  cc.number = CC0;
  cc.value = entry.var;
  cc.send();

  cc = new ControlChange();
  cc.number = CC32;
  cc.value = MAP_LSB;
  cc.sendAfterMilliseconds(1);

  var p = new ProgramChange();
  p.number = entry.pc;
  p.sendAfterMilliseconds(2);
}
var ignoreNextInstrument = false;

function ParameterChanged(p, v) {
  if (p === 0) {
    var cat = categoryNames[Math.floor(v)];
    var pcs = categories[cat];
    instrumentNames = instruments
      .filter((i) => pcs.includes(i.pc))
      .map((i) => i.name);

    PluginParameters[1].valueStrings = instrumentNames;
    UpdatePluginParameters();

    // prevent the auto-trigger from firing
    ignoreNextInstrument = true;
    lastInstrumentIdx = -1;
  } else if (p === 1) {
    var idx = Math.floor(v);
    if (ignoreNextInstrument) {
      ignoreNextInstrument = false;
      return; // swallow the phantom call
    }
    if (idx !== lastInstrumentIdx && instrumentNames[idx]) {
      var e = instruments.find((i) => i.name === instrumentNames[idx]);
      if (e) sendBankAndPC(e);
      lastInstrumentIdx = idx;
    }
  }
}

var PluginParameters = [
  {
    name: "Categories",
    type: "menu",
    valueStrings: categoryNames,
    defaultValue: 0,
  },
  {
    name: "Instrument",
    type: "menu",
    valueStrings: instrumentNames,
    defaultValue: 0,
  },
];
