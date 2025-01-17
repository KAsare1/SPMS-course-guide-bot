const options = {
  levelOptions: {
    firstYear: "Level 100",
    secondYear: "Level 200",
    thirdYear: "Level 300",
    fourthYear: "Level 400",
  },
  programOption: {
    option1: "Single Major",
    option3: "Major-Minor",
    option2: "Combined-Major",
  },

  courseOptionsL100: {
    physicalScience: "Physical Science",
    mathematicalScience: "Mathematical Science",
    earthScience: "Earth Science",
    informationTechnology: "Information Technology",
  },

  continuingStudentsSingleMajorOptions: {
    option1: "Acturial Science",
    option2: "Computer Science",
    option3: "Mathematics",
    option4: "Statistics",
    option5: "Physics",
    option6: "Chemistry",
    option7: "Geology",
    option8: "Geophysics",
    option9: "Applied Geophysics",
    option10: "Biomathematics",
    option11: "Information Technology",
    option12: "Applied Geology",
  },

  continuingStudentsCombinedMajorOptions: {
    option1: "Chemistry and a Biological Science Program",
    option2: "Chemistry and Physics",
    option3: "Computer Science and Mathematics",
    option4: "Computer Science and Physics",
    option5: "Computer Science and  Statistics",
    option6: "Mathematics and Physics",
    option7: "Mathematics and Statistics",
    option8: "Physics and Statistics",
  },
  continuingStudentsMajorMinorOptions: {
    option1: "Geology with Physics",
    option2: "Geology with Mathematics",
    option3: "Geology with Chemistry",
    option4: "Mathematics with Physics",
    option5: "Mathematics with Computer Science",
    option6: "Mathematics with Statistics",
    option7: "Mathematics with Geology",
    option13: "Physics with Statistics",
    option8: "Physics with Computer Science",
    option9: "Physics with Geology",
    option10: "Physics with Mathematics",
    option11: "Statistics with Computer Science",
    option12: "Statistics with Mathematics",
  },

  semesterOptions: {
    firstSemester: "First Semester",
    secondSemester: "Second Semester",
  },

  physicalScienceForPhysicsAndCompSciFirstSemester: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject3: "DCIT 101 : Introduction to Computer Science",
    subject4: "MATH 121 : Algebra and Trigonometry",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceForPhysicsAndCompSciSecondSemester: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus I",
    subject4: "PHYS 106 : Practical Physics II",
    subject5: "PHYS 144 : Electricity and Magnetism",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforChemsitryAndBioScienceFirstSemester: {
    subject2: "CHEM 113 : Foundation Chemistry I",
    subject3: "CHEM 120 : General Chemistry Laboratory",
    subject1: "ABSC 101 : Introductory Animal Biology",
    subject4: "MATH 121 : Algebra and Trigonometry",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforChemsitryAndBioScienceSecondSemester: {
    subject1: "BOTN 104 : Introductory Plant Biology",
    subject2: "CHEM 114 : Foundation Chemistry II",
    subject3: "MATH 122 : Calculus I",
    subject4: "PHYS 106 : Practical Physics II",
    subject5: "PHYS 144 : Electricity and Magnetism",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforMathsAndPhysicsFirstSemester: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject3: "MATH 121 : Algebra and Trigonometry",
    subject4: "MATH 123 : Vectors and Geometry",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforMathsAndPhysicsSecondSemester: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject2: "MATH 122 : Calculus I",
    subject3: "MATH 126 : Algebra and Geometry",
    subject4: "PHYS 106 : Practical Physics II",
    subject5: "PHYS 144 : Electricity and Magnetism",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforPhysicsAndStatisticsFirstSemester: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject3: "MATH 121 : Algebra and Trigonometry",
    subject4: "STAT 101 : Introduction to Statistics",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforPhysicsAndStatisticsSecondSemester: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject2: "MATH 122 : Calculus I",
    subject3: "PHYS 106 : Practical Physics II",
    subject4: "PHYS 144 : Electricity and Magnetism",
    subject5: "STAT 102 : Introduction to Probability",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforGeophysicsFirstSem: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject7: "EASC 101 : Physical Geology",
    subject3: "MATH 121 : Algebra and Trigonometry",
    subject4: "PHYS 105 : Practical Physics I",
    subject5: "PHYS 143 : Mechanics and Thermal Physics",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforGeophysicsSecondSem: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject6: "EASC 102 : Historical Geology",
    subject7: "EASC 106 : Geological Field Excursions",
    subject2: "MATH 122 : Calculus I",
    subject3: "PHYS 106 : Practical Physics II",
    subject4: "PHYS 144 : Electricity and Magnetism",
    subject5: "UGRC 110 : Academic Writing 1",
  },

  mathematicalScienceforComputerScienceFirstSem: {
    subject1: "DCIT 101 : Introduction to Computer Science",
    subject2: "DCIT 103 : Office Productivity Tools",
    subject3: "MATH 121 : Alegbra and Trigonometry",
    subject4: "Math 123 : Vectors and Geometry",
    subject5: "STAT 111 : Introduction to Statistics and Probability I",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  mathematicalScienceforComputerScienceSecondSem: {
    subject1: "DCIT 102 : Computer Hardware Fundamentals and Circuits",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus 1",
    subject4: "MATH 126 : Algebra and Geometry",
    subject5: "STAT 112 : Introduction to Statistics and Probabilty II",
    subject6: "UGRC 110 : Academic Writing I",
  },

  mathematicalScienceforActurialScienceFirstSem: {
    subject1: "DCIT 101 : Introduction to Computer Science",
    subject2: "ECON 101 : Introduction to Economics I",
    subject3: "MATH 121 : Alegbra and Trigonometry",
    subject4: "Math 123 : Vectors and Geometry",
    subject5: "STAT 111 : Introduction to Statistics and Probability I",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  mathematicalScienceforActurialScienceSecondSem: {
    subject1: "ECON 102 : Introduction to Economics II",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus 1",
    subject4: "MATH 126 : Algebra and Geometry",
    subject5: "STAT 112 : Introduction to Statistics and Probabilty II",
    subject6: "UGRC 110 : Academic Writing I",
  },

  mathematicalScienceforBioMathSecondSem: {
    subject1: "ABCS 101 : Introduction to Animal Biology",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus 1",
    subject4: "MATH 126 : Algebra and Geometry",
    subject5: "STAT 112 : Introduction to Statistics and Probabilty II",
    subject6: "UGRC 110 : Academic Writing I",
  },

  mathematicalScienceforBioMathFirstSem: {
    subject1: "DCIT 101 : Introduction to Computer Science",
    subject2: "BOTN 104 : Growth of Flowering Plants",
    subject3: "MATH 121 : Alegbra and Trigonometry",
    subject4: "Math 123 : Vectors and Geometry",
    subject5: "STAT 111 : Introduction to Statistics and Probability I",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  earthScienceFirstSem: {
    subject1: "PHYS 105 : Pratical Physics I",
    subject2: "PHYS 143 : Mechanics and Thermal Physics",
    subject3: "CHEM 113 : Foundation Chemistry I",
    subject4: "CHEM 120 : General Chemistry Laboratory I",
    subject5: "EASC 101 : Physical Geology",
    subject6: "MATH 121 : Algebra and Trigonometry",
    subject7: "MATH 123 : Vectors and Geometry",
    subject8: "DCIT 101 : Introduction to Computer Science",
    subject9: "STAT 111 : Introduction to Statistics and Probability I",
  },

  earthScienceSecondSem: {
    subject1: "PHYS 106 : Pratical Physics II",
    subject2: "PHYS 144 : Electricity and Magnetism",
    subject3: "CHEM 114 : Foundation Chemistry II",
    subject4: "EASC 104 : Historical Geology",
    subject5: "EASC 106 Geological Field Excursions",
    subject6: "MATH 122 : Calculus I",
    subject7: "MATH 126 : Algebra and Geometry",
    subject8: "DCIT 104 : Programming Fundamentals",
    subject9: "STAT 112 : Introduction to Statistics and Probability II",
  },

  l200ActurialSciFirstSem: {
    subject1: "ECON 201 : Element of Economics I",
    subject2: "STAT 240 : Introduction Statistical Computing",
    subject3: "STAT 220 : Introduction to Acturial Sciences",
    subject4: "UGRC 210 : Academic Writing II",
    subject5: "STAT 201 : Introductory Probability I",
    subject6: "ACTU 203 : Introduction to Financial Mathematics I",
    subject7: "MATH 223 : Calculus II",
    subject8: "STAT 223 : Elementary Statistical Methods",
  },
  l200ActurialSciSecondSem: {
    subject1: "ECON 202 : Element of Economics II",
    subject2: "DCIT 204 : Database Fundamentals",
    subject3: "MATH 225 : Vector Mechanics",
    subject4: "STAT 230 : Data Mining",
    subject5: "STAT 224 : Introductory Probability II",
    subject6: "ACTU 204 : Introduction to Financial Mathematics II",
    subject7: "MATH 224 : Introductory Abstract Algebra",
    subject8: "MATH 220: Introduction to Computational Mathematics",
  },
  l200ComputerScienceFirstSem: {
    subject1: "DCIT 201 : Programming I",
    subject2: "DCIT 203 : Digital and Logic systems design",
    subject3: "DCIT 205 : Multimedia and Web Design",
    subject4: "DCIT 207 : Computer Organization & Architecture",
    subject5: "MATH 223 : Calculus II",
    subject6: "CBAS 210 : Academic Writing II",
  },
  l200ComputerScienceSecondSem: {
    subject1: "DCIT 200 : Internship",
    subject2: "DCIT 202 : Mobile Application Development",
    subject3: "DCIT 204 : Data Structures and Algorithms",
    subject4: "DCIT 206 : Systems Administration",
    subject5: "DCIT 208 : Software Engineering",
    subject6: "DCIT 212 : Numerical and Computational Methods",
    subject7: "UGRC 234 : Intro to African Stud: Philosophy of African",
  },

  l200MathematicsFirstSem: {
    subject2: "Math 223 : Calculus II",
    subject1: "CBAS 210 : Academic Writing II",
    subject3: "MATH 225 : Vector and Mechanics",
    subject4: "MATH 224 : Introductory Probability I",
  },

  l200MathematicsSecondSem: {
    subject1: "STAT 224 : Introductory Probability II",
    subject2: "MATH 220 : Introduction to Computational Mathematics",
    subject3: "MATH 224 : Introductory Abstract Algebra",
    subject4: "MATH 222: Vector Mechanics",
    subject5: "UGRC 234 : Intro to African Stud: Philosophy of African",
  },

  l200StatisticsFirstSem: {
    subject1: "STAT 240 : Introduction Statistical Computing",
    subject2: "UGRC 210 / UGRC 220 : Academic Writing II/ Introduction to African Studies",
    subject3: "STAT 221 : Introductory Probability I",
    subject4: "STAT 223 : Elementary Statistical Methods",
    subject5: "MATH 223 : Calculus II",
    subject6: "ACTU 203 Introduction to Financial Mathematics I",
    subject7: "STAT 220 Introduction to Actuarial Science",
    subject8: "STAT 230 Data Mining",
  },

  l200StatisticsSecondSem: {
    subject1: "UGRC 210/UGRC 220 : Academic Writing II/ Introduction to African Studies",
    subject2: "STAT 222 : Introduction to Regression and Time Series Analysis",
    subject3: "STAT 224 : Introductory Probability II",
    subject4: "STAT 226 : Official Statistics",
    subject5: "ACTU 204 : Introduction to Financial Mathematics II",
    subject6: "STAT 220: Introduction to Actuarial Sciences",
    subject7: "MATH 224 Introduction to Abstract Algebra 3 MATH 126",
    subject8: "STAT 228 Introduction to Non-Parametric Statistics 3 STAT 223",
    subject9: "STAT 230 Data Mining",
  },

  l200PhysicsFirstSem: {
    subject1: "CBAS 210 : Academic Writing II",
    subject2: "MATH 223 : Calculus II",
    subject3: "PHYS 205 : Practical Physics III",
    subject4: "PHYS 241 : Atomic Physics and Quantum Phenomena",
    subject5: "PHYS 245 : Electromagnetism I",
    subject6: "STAT 223 : Elementary Statistical Methods",
    subject7: "MATH 225 : Vector and Mechanics",
  },

  l200PhysicsSecondSem: {
    subject1: "PHYS 246 : Nuclear Physics I",
    subject2: "UGRC 234 : Intro to African Stud: Philosophy of African",
    subject3: "PHYS 206 : Practical Physics IV",
    subject4: "PHYS 242 : Oscillations and Waves",
    subject5: "PHYS 244 : Mathematical Methods I",
    subject6: "PHYS 248 : Introduction to Physics of Materials",
    subject7: "PHYS256 : Computational Methods in Physics I",
  },

  l200ChemistryFirstSem: {
    subject1: "CHEM 217 : Physical Chemistry I",
    subject2: "CHEM 233 : Organic Chemistry I",
    subject3: "CHEM 271 : Foundation Chemistry III",
    subject4: "CHEM 215 : Structure and Bonding",
    subject5: "CHEM 203 : Analytical Chemistry Laboratory",
    subject6: "UGRC",
  },

  l200ChemistrySecondSem: {
    subject1: "CHEM 234 : Organic Chemistry II",
    subject2: "CHEM 252 : Inorganic Chemistry I",
    subject3: "CHEM 272 : Analytical Chemistry I",
    subject4: "CHEM 216 : Chemistry of Materials",
    subject5: "CHEM 204 : Organic Chemistry Laboratory I",
    subject6: "UGRC",
  },

  l200GeophysicsFirstSem: {
    subject1: "UGRC 210 : Writing Academic II",
    subject2: "PHYS 205 : Practical Physics III",
    subject3: "PHYS 245 : Electromagnetism I",
    subject4: "MATH 223 : Calculus II",
    subject5: "PHYS 241 : Atomic Physics and Quantum Phenomena",
    subject6: "EASC 227 : Geological Structures and Maps",
    subject7: "EASC 220 : Geological Field Exercises I",
    subject8: "EASC 225 : Quantitative Geology",
    subject9: "MATH 225 : Vectors and Mechanics",
    subject10: "STAT 223 : Elementary Statistical Methods",
  },

  l200GeophysicsSecondSem: {
    subject1: "UGRC 220/238 : Introduction to African Studies",
    subject2: "PHYS 206 : Practical Physics IV",
    subject3: "PHYS 242 : Oscillations and Waves",
    subject4: "MATH 223 : Calculus II",
    subject5: "PHYS 244 : Mathematical Methods I",
    subject6: "PHYS 246 : Nuclear Physics I",
    subject7: "PHYS 248 : Introduction to Physics of Materials",
    subject8: "PHYS 256 : Computational Methods in Physics I",
    subject9: "EASC 216 : Fundamentals of Geophysics",
  },

  l200ITFirstSem: {
    subject1: "UGRC 210 : Academic Writing II",
    subject2: "DCIT 201 : Programming I",
    subject3: "DCIT 203 : Digital and Logic Systems Design",
    subject4: "DCIT 205 : Multi Media and Web Design",
    subject5: "DCIT 207 : Computer Organization and Architecture",
    subject6: "DCIT 209 : E-Business Architectures",
  },

  l200ITSecondSem: {
    subject1: "UGRC 220/238 : Introduction to African Studies",
    subject2: "DCIT 202 : Mobile Application Development",
    subject3: "DCIT 204 : Data Structures & Algorithm I",
    subject4: "DCIT 206 : Systems Administration",
    subject5: "DCIT 208 : Software Engineering",
    subject6: "DCIT 200 : Internships",
    subject7: "DCIT 212 : Numerical and Computational Methods",
    subject8: "DCIT 214 : Information Modeling and Specification",
  },

  l200ChemistryAndPhysicsFirstSem: {
    subject1: "UGRC 210: Academic Writing II",
    subject2: "CHEM 233: Organic Chemistry I",
    subject3: "CHEM 271: Foundation Chemistry III",
    subject4: "CHEM 215: Structure and Bonding",
    subject5: "CHEM 203: Analytical Chemistry Laboratory I",
    subject6: "CHEM 217: Physical Chemistry I",
    subject7: "PHYS 205 Practical Physics III",
    subject8: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject9: "PHYS 245: Electromagnetism I",
    subject10: "MATH 223: Calculus II",
  },

  l200ChemistryAndPhysicsSecondSem: {
    subject1: "UGRC220/238: Introduction to African Studies",
    subject2: "CHEM 234: Organic Chemistry II",
    subject3: "CHEM 252: Inorganic Chemistry I",
    subject4: "CHEM 272: Analytical Chemistry I",
    subject5: "CHEM 204: Organic Chemistry Laboratory I",
    subject6: "CHEM 216: Chemistry of Materials",
    subject7: "PHYS 206 Practical Physics IV",
    subject8: "PHYS 242: Oscillations and Waves",
    subject9: "PHYS 244: Mathematical Methods I",
  },

  l200ComputerScienceandPhysicsFirstSem: {
    subject1: "UGRC 210: Academic Writing II",
    subject2: "DCIT 201: Programming I",
    subject3: "DCIT 203: Digital and Logic Systems Design",
    subject4: "PHYS 205: Practical Physics III",
    subject5: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject6: "PHYS 245: Electromagnetism I",
    subject7: "MATH 223: Calculus II",
  },

  l200ComputerScienceandPhysicsSecondSem: {
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "DCIT 202: Mobile Application Development",
    subject3: "DCIT 204: Data Structures and Algorithms",
    subject4: "DCIT 208 Software Engineering",
    subject5: "PHYS 206: Practical Physics IV",
    subject6: "PHYS 242: Oscillations and Waves",
    subject7: "PHYS 244: Mathematical Methods I",
  },

  l200MathematicsandPhysicsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "MATH 225: Vectors and Mechanics",
    subject3: "MATH 223: Calculus II",
    subject4: "PHYS 205: Practical Physics III",
    subject5: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject6: "PHYS 245: Electromagnetism I",
  },

  
  l200MathematicsandPhysicsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "MATH 224: Introductory Abstract Algebra",
    subject3: "MATH 222: Vector Mechanics",
    subject4: "MATH 220: Introductory Computational Mathematics",
    subject5: "PHYS 206: Practical Physics IV",
    subject6: "PHYS 242: Oscillations and Waves",
    subject7: "PHYS 244: Mathematical Methods I",
  },

  l200MathematicsandStatisticsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "MATH 225: Vectors and Mechanics",
    subject3: "MATH 223: Calculus II",
    subject4: "STAT 221 Introductory Probability I", 
    subject5: "STAT 223: Elementary Statistical Methods", 
    subject6: "STAT 230: Data Mining",
  },

  l200MathematicsandStatisticsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "MATH 224: Introductory Abstract Algebra",
    subject3: "MATH 222: Vector Mechanics",
    subject4: "MATH 220: Introductory Computational Mathematics",
    subject5: "STAT 224 Introductory Probability II", 
    subject6: "STAT 226: Official Statistics", 
    subject7: "STAT 222: Introduction to Regression and Time Series",
  },

  l200PhysicsandStatisticsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "PHYS 205: Practical Physics III",
    subject3: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject4: "PHYS 245: Electromagnetism I",
    subject5: "STAT 221 Introductory Probability I", 
    subject6: "STAT 223: Elementary Statistical Methods", 
    subject7: "STAT 230: Data Mining",
    subject8: "MATH 223: Calculus II",
  },

  l200PhysicsandStatisticsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "STAT 224 Introductory Probability II", 
    subject3: "STAT 226: Official Statistics", 
    subject4: "STAT 222: Introduction to Regression and Time Series",
    subject5: "PHYS 206: Practical Physics IV",
    subject6: "PHYS 242: Oscillations and Waves",
    subject7: "PHYS 244: Mathematical Methods I",
  },

  l200ComputerScienceandStatisticsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "DCIT 201: Programming I",
    subject3: "DCIT 203: Digital and Logic Systems Design",
    subject4: "MATH 223: Calculus II",
    subject5: "STAT 221 Introductory Probability I", 
    subject6: "STAT 223: Elementary Statistical Methods", 
    subject7: "STAT 230: Data Mining",
  },

  l200ComputerScienceandStatisticsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "DCIT 202: Mobile Application Development",
    subject3: "DCIT 204: Data Structures and Algorithms",
    subject4: "DCIT 208 Software Engineering",
    subject5: "STAT 224 Introductory Probability II", 
    subject6: "STAT 226: Official Statistics", 
    subject7: "STAT 222: Introduction to Regression and Time Series",
  },

  l200ChemistryandBiologicalScienceFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "CHEM 233: Organic Chemistry I",
    subject3: "CHEM 271: Foundation Chemistry III",
    subject4: "CHEM 215: Structure and Bonding",
    subject5: "CHEM 203: Analytical Chemistry Laboratory I",
    subject6: "CHEM 217: Physical Chemistry I",




  },

l200ChemistryaandBiologicalScienceSecondSem:{
    subject1: "UGRC220/238: Introduction to African Studies",
    subject2: "CHEM 234: Organic Chemistry II",
    subject3: "CHEM 252: Inorganic Chemistry I",
    subject4: "CHEM 272: Analytical Chemistry I",
    subject5: "CHEM 204: Organic Chemistry Laboratory I",
    subject6: "CHEM 216: Chemistry of Materials",



},

l200GeologywithPhysicsFirstSem:{

},

l200GeologywithPhysicsAecondSem:{

},

l200GeologywithMathematicsFirstSem:{

},

l200GeologywithMathematicsSecondSem:{

},

l200GeologywithChemistryFirstSem:{

},

l200GeologywithChemistrySecondSem:{

},

l200MathematicswithPhysics:{
  
},

  l300ActurialScienceSingleMajorFirstSem: {
    subject1: "STAT 331: Probability Distributions",
    subject2: "MATH 351/STAT 339 :Linear Algebra/Methods of Linear Algebra",
    subject3: "ACTU 301: Life Contingencies I ",
    subject4: "FINC 301 : Introduction to Business Finance",
    subject5: "MATH 355 : Calculus of Several Variables",
    subject6: "STAT 333: Statistical Inference I",
    subject7: "MATH 359: Discrete Mathematics ",
    subject8: "STAT 335 : Sample Survey Methods ",
    subject9: "MATH 353 : Analysis I",
    subject10: "MATH 358 : Computational Mathematics I ",
    subject11: "ACTU 320: Internship in Actuarial Science (either 1st or 2nd Semester) *",
    subject12: "ACTU 335 : Microeconomic Theory for Actuaries I ",
    subject13: "ACTU 359 : Risk Management and Insurance  ",
  },

  l300ActurialScienceSingleMajorSecondSem: {
    subject1: "STAT 332 : Multivariate Distributions",
    subject2: "ACTU 304 : Life Contingencies II  ",
    subject3: "MATH 350 : Differential Equations I*",
    subject4: "ACTU 302 : Introduction to Actuarial Computing",
    subject5: "MATH 356 : Analysis II",
    subject6: "CSCD 314 : Operations Research ",
    subject7: "MATH 354 :Abstract Algebra I** ",
    subject8: "STAT 334 : Statistical Inference II  ",
    subject9: "ACTU 334 :  Microeconomic Theory for Actuaries II  ",
    subject10: "FINC 352 : Principle and Practice of Insurance  ",
    subject11: "STAT 338 : Decision Theory ",
    subject12: " STAT 356 : Life Insurance and Retirement Security  ",
  },

  l300ComputerScienceSingleMajorFirstSem: {
    subject1: "DCIT 301 : Operating Systems",
    subject2: "DCIT 303 : Computer Networks",
    subject3: "DCIT 305 : Database Fundamentals",
    subject4: "DCIT 313 : Introduction to Artificial Intelligence",
    subject5: "MATH 359 : Discrete Mathematics",
    subject6: "DCIT 307 : Mini-Project  ",
    subject7: "DCIT 309 : Embedded Systems and IoT ",
    subject8: "DCIT 311 : Machine Learning ",
  },
  l300ComputerScienceSingleMajorSecondSem: {
    subject1: "DCIT 302 : Human Computer Interaction",
    subject2: "DCIT 304 : Research Methods",
    subject3: "DCIT 308 : Data Structures and Algorithms II",
    subject4: "DCIT 312 : Information Security Management",
    subject5: "DCIT 318 : Programming II ",
    subject6: "DCIT 306 : Cloud Computing",
    subject7: "DCIT 316 : Computational models for Social Media Mining",
  },

  l300MathematicsSingleMajorFirstSem: {
    subject1: "MATH 351 : Linear Algebra  ",
    subject2: "MATH 353 : Analysis I  ",
    subject3: "MATH 355 : Calculus of Several Variables ",
    subject4: "iMATH 350: Differential Equations I ",
    subject5: "MATH 359 : Discrete Mathematics  ",
    subject6: "MATH 361 : Classical Mechanics  ",
    subject7: "MATH 363 : Introductory concepts of financial mathematics ",
    subject8: "STAT 331 : Probability distributions  ",
  },

  l300MathematicsSingleMajorSecondSem: {
    subject1: "MATH 354 : Abstract Algebra I  ",
    subject2: "MATH 356 : Analysis II ",
    subject3: "MATH 372 : Topology  ",
    subject4: "iMATH 350: Differential Equations I  ",
    subject5: "MATH 366 : Electromagnetic Theory I  ",
    subject6: "MATH 362 : Analytical Mechanics  ",
    subject7: "MATH 358 : Computational Mathematics I ",
    subject8: "MATH 368 : Introductory number theory  ",
    subject9: " STAT 332 : Multivariate distributions  ",
  },

  l300StatisticsSingleMajorFirstSem: {
    subject1: "STAT 331 : Probability Distributions",
    subject2: "STAT 333 : Statistical Inference I ",
    subject3: "STAT 335 : Sampling Survey Methods",
    subject4: "MATH351/STAT: Linear Algebra/Methods of Linear ",
    subject5: "ACTU 301  : Life Contingency I ",
    subject6: " STAT 337 : Introduction to Operations Research",
    subject7: " MATH 353 : Analysis I ",
    subject8: "MATH 355  : Calculus of Several Variables",
    subject9: "MATH 359 : Discrete Mathematics ",
  },
  l300StatisticsSingleMajorSecondSem: {
    subject1: "STAT 332 : Multivariate Distributions ",
    subject2: "STAT 334 : Statistical Inference II  ",
    subject3: "STAT 336 : Design of Experiments  ",
    subject4: "MATH 350 : Differential Equations I ",
    subject5: "DCIT 308 : Data Structures and Algorithms  ",
    subject6: "ACTU 332 : Life Contingency II  ",
    subject7: "STAT 338 Decision Theory  ",
    subject8: "MATH 356 Analysis II",
  },

  l300PhysicsSingleMajorFirstSem: {
    subject1: "PHYS 305 : Practical Physics V  ",
    subject2: "PHYS 343 : Thermodynamics ",
    subject3: "PHYS 345 : Electromagnetism II  ",
    subject4: "PHYS 359 : Solid State Physics I ",
    subject5: "PHYS 351 : Optics  ",
    subject7: "PHYS 361 : Physics of the Atmosphere ",
    subject8: "PHYS 347 : Electronics I  ",
    subject9: "PHYS 365 : Physics of the Ocean  ",
    subject10: "EASC 339 : Principles of Applied Geophysics ",
  },
  l300PhysicsSingleMajorSecondSem: {
    subject1: "PHYS 306 : Practical Physics VI ",
    subject2: "PHYS 342 : Classical Mechanics  ",
    subject3: "PHYS 344 : Mathematical Methods II  ",
    subject4: "PHYS 352 : Quantum Mechanics I ",
    subject5: "PHYS 354 : Special Relativity  ",
    subject6: "PHYS 356 : Computational Methods in Physics II ",
    subject8: "PHYS 364 : Principles and Applications of Neutron Activation Analysis ",
    subject9: "STAT 336 : Design of Experiments ",
  },

  l300ChemistrySingleMajorFirstSem: {
    subject1: " CHEM 301 : Mathematics for Chemists ",
    subject2: " CHEM 341 : Spectroscopy and Structure Elucidation  ",
    subject3: " CHEM 343 : Chemistry of Aromatic Compounds  ",
    subject4: " CHEM 355 : Inorganic Chemistry II  ",
    subject5: " CHEM 311 : Physical Chemistry Laboratory  ",
    subject6: " CHEM 351 : Inorganic Chemistry Laboratory  ",
  },
  l300ChemistrySingleMajorSecondSem: {
    subject1: " CHEM 312 : Thermodynamics I  ",
    subject2: " CHEM 344 : Carbanions and their Reactions ",
    subject3: " CHEM 346 : Molecular Rearrangement Reactions ",
    subject4: " CHEM 352 : Coordination Chemistry  ",
    subject5: " CHEM 374 : Analytical Chemistry II ",
    subject6: " CHEM 332 : Organic Chemistry Laboratory II ",
    subject7: " CHEM 372 : Analytical Chemistry Laboratory II  ",
  },

  l300GeologySingleMajorFirstSem: {
    subject1: " ",
  },

  l300GeologySingleMajorSecondSem: {
    subject1: " ",
  },

  l300GeophysicsSingleMajorFirstSem: {
    subject1: " ",
  },

  l300GeophysicsSingleMajorSecondSem: {
    subject1: " ",
  },

  l300AppliedGeophysicsSingleMajorFirstSem: {
    subject1: " ",
  },

  l300AppliedGeophysicsSingleMajorSecondSem: {
    subject1: " ",
  },

  l300BiomathematicsSingleMajorFirstSem: {
    subject1: " ",
  },

  l300BiomathematicsSingleMajorSecondSem: {
    subject1: " ",
  },

  l300InformationTechnologySingleMajorFirstSem: {
    subject1: "DCIT 301 : Operating Systems  ",
    subject2: "DCIT 303 : Computer Networks  ",
    subject3: "DCIT 305 : Database Fundamentals ",
    subject4: " DCIT 313 : Introduction to Artificial Intelligence",
    subject5: "DCIT 317 : IT Project Management  ",
    subject6: "DCIT 307 : Mini-Project  ",
    subject7: "DCIT 315 : Principles of 3D Environment   ",
    subject8: "DCIT 321 Software Evolution   ",
  },
  l300InformationTechnologySingleMajorSecondSem: {
    subject1: "DCIT 302 : Human Computer Interaction  ",
    subject2: "DCIT 304 : Research Methods ",
    subject3: " DCIT 308 : Data Structures and Algorithms II  ",
    subject4: "DCIT 312 : Information Security Management ",
    subject5: "DCIT 318 : Programming II  ",
    subject6: "DCIT 314 Game Engine Architecture ",
    subject7: "DCIT 322 Database Management Administration ",
  },

  l300AppliedGeologySingleMajorFirstSem: {
    subject1: " ",
  },

  l300AppliedGeologySingleMajorSecondSem: {
    subject1: " ",
  },

  // LEVEL 400 (AUTHOR: KHEVLAR)

  l400ChemistrySingleMajorFirstSem: {
    subject1: "CHEM 400 : Project",
    subject2: "CHEM 473 : X-ray Crystallography",
    subject3: "CHEM 401 : Thermodynamics II",
    subject4: "CHEM 403 : Symmetry, Group Theory and Applications",
    subject5: "CHEM 405 : Reaction Kinetics",
    subject6: "CHEM 441 : Chemistry of Natural Products ",
    subject7: "CHEM 439 : Organometallic Chemistry",
    subject8: "CHEM 437 : Medicinal Chemistry",
    subject9: "CHEM 423 : Polymer Chemistry and Tech",
    subject10: "CHEM 471 : Nuclear Chemistry",
    subject11: "CHEM 491 : Petroleum Chemistry and Tech",
    subject12: "CHEM 493 : Mineral Processing",
    subject13: "CHEM 495 : Pulp and Paper Chemistry and Technology",
  },

  l400ChemistrySingleMajorSecondSem: {
    subject1: "CHEM 400 : Project",
    subject2: "CHEM 402 : Quantum Chemistry ",
    subject3: "CHEM 412 : Surface Chemistry Colloids ",
    subject4: "CHEM 454 : Transition Metal Chemistry",
    subject5: "CHEM 472 : Instrumental Methods of Chemical Analysis",
    subject6: "CHEM 414 : Molecular Structure ",
    subject7: "CHEM 452 : Solid State Chemistry",
    subject8: "CHEM 494 : Textile Chemistry and Technology",
    subject9: "CHEM 492 : Industrial Chemistry",
    subject10: "CHEM 474 : Elements of Forensic Chemistry",
    subject11: "CHEM 496 : Environmental Chemistry",
  },

  l400ChemistryCombinedMajorFirstSem: {
    subject1: "CHEM 401 : Thermodynamics II",
    subject2: "CHEM 423 : Polymer Chemistry and Technology",
    subject3: "CHEM 405 : Reaction Kinetics",
    subject4: "CHEM 441 : Chemistry of Natural Products",
    subject5: "CHEM 403 : Symmetry, Group Theory and Application",
    subject6: "CHEM 437 : Medicinal Chemistry",
    subject7: "CHEM 439 : Organometallic Chemistry",
    subject8: "CHEM 471 : Nuclear Chemistry",
    subject9: "CHEM 473 : X-ray Crystallography",
    subject10: "CHEM 491 : Petroleum Chemistry and Technology",
    subject11: "CHEM 493 : Mineral Processing",
    subject12: "CHEM 495 : Pulp and Paper Chemistry and Technology",
  },

  l400ChemistryCombinedMajorSecondSem: {
    subject1: "CHEM 402 : Quantum Chemistry",
    subject2: "CHEM 412 : Surface Chemistry and Colloids",
    subject3: "CHEM 454 : Transition Metal Chemistry",
    subject4: "CHEM 472 : Instrumental Methods of Chemical Analysis",
    subject5: "CHEM 414 : Molecular Structure",
    subject6: "CHEM 492 : Industrial Chemistry",
    subject7: "CHEM 494 : Textile Chemistry and Technology",
    subject8: "CHEM 452 : Solid State Chemistry",
    subject9: "CHEM 474 : Elements of Forensic Chemistry ",
    subject10: "CHEM 496 : Environmental Chemistry",
  },

  l400ComputerScienceSingleMajorFirstSem: {
    subject1: "DCIT 400 : Project",
    subject2: "DCIT 401 : Social, Legal, Ethical and Professional Issues",
    subject3: "DCIT 407 : Image Processing",
    subject4: "DCIT 403 : Designing Intelligent Agents",
    subject5: "DCIT 405 : Statistical Models  and Methods for Data Science",
    subject6: "DCIT 411 : Bioinformatics",
    subject7: "DCIT 417 : Network Performance Analysis and Modeling",
    subject8: "DCIT 423 : Network Servers and Infrastructure",
  },

  l400ComputerScienceSingleMajorSecondSem: {
    subject1: "DCIT 400 : Project",
    subject2: "DCIT 402 : Management Principles in Computing",
    subject3: "DCIT 418 : Systems and Network Security",
    subject4: "DCIT 428 : Wireless Systems and Networks",
    subject5: "DCIT 404 : Advanced Databases",
    subject6: "DCIT 406 : Advanced Computer Networks",
    subject7: "DCIT 408 : Compilers",
    subject8: "DCIT 426 : Telecommunication Systems",
    subject9: "DCIT 412 : Computer Vision",
    subject10: "DCIT 414 : Data Mining and Warehousing",
    subject11: "DCIT 416 : Digital Signal Processing",
    subject12: "DCIT 422 : Information Visualization",
  },

  l400ComputerScienceCombinedFirstSem: {
    subject1: "DCIT 400 : Project",
    subject2: "DCIT 401 : Social, Legal, Ethical and Professional Issues",
    subject3: "DCIT 407 : Image Processing",
    subject4: "DCIT 403 : Designing Intelligent Agents",
    subject5: "DCIT 405 : Statistical Models  and Methods for Data Science",
    subject6: "DCIT 411 : Bioinformatics",
    subject7: "DCIT 417 : Network Performance Analysis and Modeling",
    subject8: "DCIT 423 : Network Servers and Infrastructure",
  },

  l400ComputerScienceCombinedSecondSem: {
    subject1: "DCIT 400 : Project",
    subject2: "DCIT 402 : Management Principles in Computing",
    subject3: "DCIT 418 : Systems and Network Security",
    subject4: "DCIT 428 : Wireless Systems and Networks",
    subject5: "DCIT 404 : Advanced Databases",
    subject6: "DCIT 406 : Advanced Computer Networks",
    subject7: "DCIT 408 : Compilers",
    subject8: "DCIT 426 : Telecommunication Systems",
    subject9: "DCIT 412 : Computer Vision",
    subject10: "DCIT 414 : Data Mining and Warehousing",
    subject11: "DCIT 416 : Digital Signal Processing",
    subject12: "DCIT 422 : Information Visualization",
  },

  l400InformationTechnologyFirstSem: {
    subject1: "DCIT 400 : Project",
    subject2: "DCIT 401 : Social, Legal, Ethical and Professional Issues",
    subject3: "DCIT 409 : Digital Forensics",
    subject4: "DCIT 413 : Play and Games",
    subject5: "DCIT 415 : Advanced Software Engineering",
    subject6: "DCIT 419 : Agile Methods",
    subject7: "DCIT 421 : Persuasive Systems Development",
  },

  l400InformationTechnologySecondSem: {
    subject1: "DCIT 400 : Project 3",
    subject2: "DCIT 402 : Management Principles in Computing",
    subject3: "DCIT 418 : Systems and Network Security ",
    subject4: "DCIT 428 : Wireless Systems and Networks",
    subject5: "DCIT 404 : Advanced Databases",
    subject6: "DCIT 406 : Advanced Computer Networks",
    subject7: "DCIT 408 : Compilers",
    subject8: "DCIT 426 : Telecommunication Systems",
    subject9: "DCIT 412 : Computer Vision",
    subject10: "DCIT 414 : Data Mining and Warehousing",
    subject11: "DCIT 416 : Digital Signal Processing",
    subject12: "DCIT 422 : Information Visualization",
  },

  l400EarthScienceSingleMajorFirstSem: {
    subject1: "EASC 420 : Project",
    subject2: "EASC 471 : Remote Sensing and Geographic Information Systems",
    subject3: "EASC 450 : Geological Field Mapping",
    subject4: "EASC 419 : Igneous and Metamorphic Petrology",
    subject5: "EASC 417 : Mineralogy",
    subject6: "EASC 437 : Geochemistry and Cosmochemistry",
    subject7: "EASC 465 : Micropaleontology",
    subject8: "EASC 461 : Basin Analysis",
    subject9: "EASC 449 : Mineral Exploration Methods, Planning and Management",
  },

  l400EarthScienceSingleMajorSecondSem: {
    subject1: "EASC 420 : Project",
    subject2: "EASC 404 : Statistical Methods in Earth Science ",
    subject3: "EASC 480 : Field Studies in Earth Science",
    subject4: "EASC 470 : Communication and  Entrepreneurship in the Earth Sciences",
    subject5: "EASC 446 : Sedimentary Petrology",
    subject6: "EASC 448 : Geology of Africa",
    subject7: "EASC 454 : Geochronology",
    subject8: "EASC 476 : Geotectonics",
    subject9: "EASC 478 : Stratigraphy",
    subject10: "EASC 482 : Geology of Mineral Deposits",
  },

  l400GeologyMajorMinorFirstSem: {
    subject1: "EASC 420 : Project",
    subject2: "EASC 471 : Remote Sensing and Geographic Information Systems",
    subject3: "EASC 450 : Geological Field Mapping",
    subject4: "EASC 419 : Igneous and Metamorphic Petrology",
    subject5: "EASC 417 : Mineralogy",
    subject6: "EASC 437 : Geochemistry and Cosmochemistry",
    subject7: "EASC 465 : Micropaleontology",
    subject8: "EASC 461 : Basin Analysis",
  },

  l400GeologyMajorMinorSecondSem: {
    subject1: "EASC 420 : Project",
    subject2: "EASC 404 : Statistical Methods in Earth Science ",
    subject3: "EASC 480 : Field Studies in Earth Science",
    subject4: "EASC 470 : Communication and  Entrepreneurship in the Earth Sciences",
    subject5: "EASC 446 : Sedimentary Petrology",
    subject6: "EASC 448 : Geology of Africa ",
    subject7: "EASC 454 : Geochronology",
    subject8: "EASC 476 : Geotectonics",
    subject9: "EASC 478 : Stratigraphy",
    subject10: "EASC 482 : Geology of Mineral Deposits",
  },

  l400MathSingleMajorFirstSem: {
    subject1: "MATH 400 : Project",
    subject2: "MATH 441 : Advanced Calculus",
    subject3: "MATH 440 : Abstract Algebra II",
    subject4: "MATH 447 : Complex Analysis",
    subject5: "MATH 443 : Differential Geometry",
    subject6: "MATH 445 : Introductory Functional Analysis",
    subject7: "MATH 449 : Electromagnetic Theory II",
    subject8: "MATH 451 : Introduction to Algebraic Field Theory",
    subject9: "MATH 453 : Introduction to Quantum Mechanics",
    subject10: "MATH 455 : Computational Mathematics II",
    subject11: "MATH 457 : Mathematical Biology I",
  },

  l400MathSingleMajorSecondSem: {
    subject1: "MATH 400 : Project 3",
    subject2: "MATH 442 : Integration Theory and Measure",
    subject3: "MATH 440 : Abstract Algebra II",
    subject4: "MATH 444 : Calculus on Manifolds ",
    subject5: "MATH 446 : Module Theory",
    subject6: "MATH 448 : Special Relativity",
    subject7: "MATH 452 : Introduction to Lie Groups and Lie Algebra",
    subject8: "MATH 450 : Differential Equations II",
    subject9: "MATH 458 : Mathematical Biology II",
    subject10: "MATH 460 :  Fourier series and Fourier transforms",
  },

  l400MathMajorMinorFirstSem: {
    subject1: "MATH 400 : Project",
    subject2: "MATH 441 : Advanced Calculus",
    subject3: "MATH 440 : Abstract Algebra II",
    subject4: "MATH 447 : Complex Analysis",
    subject5: "MATH 443 : Differential Geometry",
    subject6: "MATH 445 : Introductory Functional Analysis",
    subject7: "MATH 449 : Electromagnetic Theory II",
    subject8: "MATH 451 : Introduction to Algebraic Field Theory",
    subject9: "MATH 453 : Introduction to Quantum Mechanics",
    subject10: "MATH 455 : Computational Mathematics II",
    subject11: "MATH 457 : Mathematical Biology I",
  },

  l400MathMajorMinorSecondSem: {
    subject1: "MATH 400 : Project 3",
    subject2: "MATH 442 : Integration Theory and Measure",
    subject3: "MATH 444 : Calculus on Manifolds ",
    subject4: "MATH 446 : Module Theory",
    subject5: "MATH 448 : Special Relativity",
    subject6: "MATH 452 : Introduction to Lie Groups and Lie Algebra",
    subject7: "MATH 450 : Differential Equations II",
    subject8: "MATH 458 : Mathematical Biology II",
    subject9: "MATH 460 : Fourier series and Fourier transforms",
  },

  l400MathCombinedMajorFirstSem: {
    subject1: "MATH 441 : Advanced Calculus",
    subject2: "MATH 447 : Complex Analysis",
    subject3: "MATH 440 : Abstract Algebra II",
    subject4: "MATH 443 : Differential Geometry",
    subject5: "MATH 445 : Introductory Functional Analysis",
    subject6: "MATH 449 : Electromagnetic theory II",
    subject7: "MATH 451 : Introduction to Algebraic Field Theory",
    subject8: "MATH 453 : Introduction to Quantum Mechanics",
    subject9: "MATH 455 : Computational Mathematics II",
    subject10: "MATH 457 : Mathematical Biology I",
  },

  l400MathCombinedMajorSecondSem: {
    subject1: "MATH 442 : Integration Theory and Measure",
    subject2: "MATH 372 : Topology",
    subject3: "MATH 444 : Calculus on Manifolds ",
    subject4: "MATH 446 : Module Theory",
    subject5: "MATH 448 : Special Relativity",
    subject6: "MATH 452 : Introduction to Lie Groups and Lie Algebra",
    subject7: "MATH 450 : Differential Equations II",
    subject8: "MATH 458 : Mathematical Biology II",
    subject9: "MATH 460 : Fourier series and Fourier transforms",
  },

  l400PhysicsMajorFirstSem: {
    subject1: "PHYS 410 : Project",
    subject2: "PHYS 401 : Seminar I",
    subject3: "PHYS 443 : Statistical Mechanics",
    subject4: "PHYS 459 : Solid State Physics II",
    subject5: "PHYS 447 : Electronics II",
    subject6: "PHYS 455 : Energy Systems",
    subject7: "PHYS 461 : Principles of Radioactive Dating",
    subject8: "PHYS 465 : Physics of Telecommunications",
  },

  l400PhysicsMajorSecondSem: {
    subject1: "PHYS 410 : Project",
    subject2: "PHYS 402 : Seminar II",
    subject3: "PHYS 446 : Nuclear Physics II",
    subject4: "PHYS 448 : Particle Physics",
    subject5: "PHYS 452 : Quantum Mechanics II",
    subject6: "PHYS 454 : Contemporary Physics",
    subject7: "PHYS 468 : Introduction to Cosmology and Astrophysics",
    subject8: "PHYS 462 : Basic Meteorology",
    subject9: "PHYS 466 : Physics at Nanoscale",
  },

  l400PhysicsMajorMinorFirstSem: {
    subject1: "PHYS 410 : Project",
    subject2: "PHYS 401 : Seminar I",
    subject3: "PHYS 443 : Statistical Mechanics",
    subject4: "PHYS 449 : Physics of Solids",
    subject5: "PHYS 447 : Electronics II",
    subject6: "PHYS 455 : Energy Systems",
    subject7: "PHYS 461 : Principles of Radioactive Dating",
    subject8: "PHYS 465 : Physics of Telecommunications",
  },

  l400PhysicsMajorMinorSecondSem: {
    subject1: "PHYS 410 : Project",
    subject2: "PHYS 402 : Seminar II",
    subject3: "PHYS 446 : Nuclear Physics II",
    subject4: "PHYS 448 : Particle Physics",
    subject5: "PHYS 452 : Quantum Mechanics II",
    subject6: "PHYS 454 : Contemporary Physics",
    subject7: "PHYS 468 : Introduction to Cosmology and Astrophysics",
    subject8: "PHYS 462 : Basic Meteorology",
    subject9: "PHYS 466 : Physics at Nanoscale",
  },

  l400PhysicsCombinedMajorFirstSem: {
    subject1: "PHYS 443 : Statistical Mechanics",
    subject2: "PHYS 449 : Physics of Solids",
    subject3: "PHYS 410 : Project",
    subject4: "PHYS 401 : Seminar I",
    subject5: "PHYS 447 : Electronics II",
    subject6: "PHYS 455 : Energy Systems",
    subject7: "PHYS 461 : Principles of Radioactive Dating",
    subject8: "PHYS 465 : Physics of Telecommunications",
  },

  l400PhysicsCombinedMajorSecondSem: {
    subject1: "PHYS 410 : Project",
    subject2: "PHYS 402 : Seminar II",
    subject3: "PHYS 446 : Nuclear Physics II",
    subject4: "PHYS 448 : Particle Physics",
    subject5: "PHYS 452 : Quantum Mechanics II",
    subject6: "PHYS 454 : Contemporary Physics",
    subject7: "PHYS 468 : Introduction to Cosmology and Astrophysics",
    subject8: "PHYS 462 : Basic Meteorology",
    subject9: "PHYS 466 : Physics at Nanoscale",
  },

  l400GeophysicsFirstSem: {
    subject1: "PHYS 401 : Seminar I",
    subject2: "PHYS 447 : Electronics II",
    subject3: "PHYS 443 : Statistical Mechanics",
    subject4: "PHYS 449 : Physics of Solids",
    subject5: "PHYS 455 : Energy systems",
    subject6: "PHYS 461 : Principles of Radioactive Dating",
    subject7: "EASC 401 : Remote Sensing and Geographic Information Systems",
    subject8: "EASC 451 : Rock Mechanics",
    subject9: "EASC 423 : Hydrogeology",
    subject10: "GPHY 400 : Project",
    subject11: "GPHY 403 : Geophysical Instrumentation and Techniques",
  },

  l400GeophysicsSecondSem: {
    subject1: "EASC 428 : Exploration Geophysics",
    subject2: "EASC 442 : Petroleum Reservoir Geophysics",
    subject3: "EASC 452 : Site Investigations",
    subject4: "PHYS 402 : Seminar II",
    subject5: "EASC 404 : Statistical Methods in Earth Science",
    subject6: "PHYS 446 : Nuclear Physics II",
    subject7: "PHYS 448 : Particle Physics",
    subject8: "PHYS 462 : Basic Meteorology",
    subject9: "PHYS 468 : Introduction to Cosmology and Astrophysics",
  },

  l400StatisticsSingleMajorFirstSem: {
    subject1: "STAT 443 : Theory of Sampling",
    subject2: "STAT 445 : Advanced Regression",
    subject3: "STAT 450 : Project",
    subject4: "STAT 461 : Bayesian Statistics",
    subject5: "STAT 440 : Business Statistics",
    subject6: "STAT 447 : Non-Parametric Statistics",
    subject7: "STAT 451 : Random Processes",
    subject8: "STAT 453 : Population Statistics",
    subject9: "STAT 459 : Statistical Quality Control",
    subject10: "STAT 455 : Actuarial Statistics I",
    subject11: "STAT 457 : Economic and Social Statistics I",
    subject12: "MATH 441 : Advanced Calculus",
    subject13: "MATH 445 : Introductory Functional Analysis",
  },

  l400StatisticsSingleMajorSecondSem: {
    subject1: "STAT 444 : Survey Organisation and Management",
    subject2: "STAT 466 : Discrete Data Analysis",
    subject3: "STAT 450 : Project",
    subject4: "STAT 442 : Applied Times Series Analysis",
    subject5: "STAT 446 : Multivariate Methods",
    subject6: "STAT 448 : Analysis of Experimental Design",
    subject7: "STAT 464 : Statistical Computing with R",
    subject8: "STAT 454 : Biometrics",
    subject9: "STAT 456 : Actuarial Statistics II",
    subject10: "STAT 458 : Economic and Social Statistics II ",
    subject11: "STAT 462 : Biostatistics",
    subject12: "MATH 422 : Integration Theory and Measure",
    subject13: "MATH 450 : Differential Equation II",
  },

  l400StatisticsMajorMinorFirstSem: {
    subject1: "STAT 443 : Theory of Sampling",
    subject2: "STAT 445 : Advanced Regression",
    subject3: "STAT 450 : Project",
    subject4: "STAT 461 : Bayesian Statistics",
    subject5: "STAT 440 : Business Statistics",
    subject6: "STAT 447 : Non-Parametric Statistics",
    subject7: "STAT 451 : Random Processes",
    subject8: "STAT 453 : Population Statistics",
    subject9: "STAT 459 : Statistical Quality Control",
    subject10: "STAT 455 : Actuarial Statistics I",
    subject11: "STAT 457 : Economic and Social Statistics I",
  },

  l400StatisticsMajorMinorSecondSem: {
    subject1: "STAT 444 : Survey Organisation and Management",
    subject2: "STAT 466 : Discrete Data Analysis",
    subject3: "STAT 450 : Project",
    subject4: "STAT 442 : Applied Times Series Analysis",
    subject5: "STAT 446 : Multivariate Methods",
    subject6: "STAT 464 : Statistical Computing with R",
    subject7: "STAT 454 : Biometrics",
    subject8: "STAT 456 : Actuarial Statistics II",
    subject9: "STAT 458 : Economic and Social Statistics II ",
    subject10: "STAT 462 : Biostatistics",
    subject11: "MATH 422 : Integration Theory and Measure",
    subject12: "MATH 450 : Differential Equation II",
  },

  l400StatisticsCombinedMajorFirstSem: {
    subject1: "STAT 443 : Theory of Sampling",
    subject2: "STAT 445 : Advanced Regression Analysis",
    subject3: "STAT 440 : Business Statistics",
    subject4: "STAT 447 : Non-Parametric Statistics",
    subject5: "STAT 450 : Project",
    subject6: "STAT 451 : Random Processes",
    subject7: "STAT 453 : Population Statistics",
    subject8: "STAT 455 : Actuarial Statistics I",
    subject9: "STAT 457 : Economic and Social Statistics I",
    subject10: "STAT 459 : Statistical Quality Control",
    subject11: "STAT 461 : Bayesian Statistics Methods",
  },

  l400StatisticsCombinedMajorSecondSem: {
    subject1: "STAT 444 : Survey Organisation and Management",
    subject2: "STAT 448 : Analysis of Experimental design",
    subject3: "STAT 450 : Project",
    subject4: "STAT 446 : Multivariate Methods",
    subject5: "STAT 464 : Statistical Computing with R",
    subject6: "STAT 454 : Biometrics",
    subject7: "STAT 456 : Actuarial Statistics II",
    subject8: "STAT 458 : Economic and Social Statistics II ",
    subject9: "STAT 466 : Discrete Data Analysis",
  },

  l400ActurialScienceSingleMajorFirstSem: {
    subject1: "ACTU 410 : Project",
    subject2: "ACTU 405 : Fundamentals of Financial Accounting I",
    subject3: "ACTU 409 : Loss Distributions & Actuarial Risk Measures",
    subject4: "ACTU 453 : Introduction to Non-Life Insurance Mathematics I",
    subject5: "ACTU 407 : Financial Economics I",
    subject6: "STAT 457 : Economic and Social Statistics II",
    subject7: "STAT 445 : Advanced Regression Analysis",
    subject8: "ACTU 445 : Macroeconomic Theory for Actuaries I",
    subject9: "STAT 443 : Population Statistics",
    subject10: "STAT 451 : Random Processes",
    subject11: "MATH 441 : Advanced Calculus",
    subject12: "MATH 445 : Introductory Functional Analysis",
    subject13: "ACTU 441 : Econometrics for Actuaries I",
    subject14: "MATH 447 : Complex Analysis",
    subject15: "STAT 459 : Statistical Quality Control",
    subject16: "STAT 440 : Business Statistics",
  },

  l400ActurialScienceSingleMajorSecondSem: {
    subject1: "ACTU 410 : Project",
    subject2: "ACTU 412 : Fundamental Financial Accounting II",
    subject3: "ACTU 454 : Introduction to Non-life Insurance Mathematics II",
    subject4: "ACTU 408 : Financial Economics II",
    subject5: "ACTU 404 : Pensions and Social Security",
    subject6: "MATH 442 : Differential Equation II",
    subject7: "ACTU 448 : Macroeconomic Theory for Actuaries II",
    subject8: "FINC 458 : Health Insurance",
    subject9: "STAT 458 : Economic and Social Statistics II",
    subject10: "ACTU 442 : Econometrics for Actuaries II",
    subject11: "FINC 452 : Property and Pecuniary Insurance",
  },

  l400ActurialScienceAndMathCombinedMajorFirstSem: {
    subject1: "ACTU 403 : Introduction to Non-Life Insurance Mathematics I",
    subject2: "ACTU 405 : Fundamentals of Financial Accounting I",
    subject3: "ACTU 407 : Financial Economics I",
    subject4: "ACTU 409 : Loss Distributions & Actuarial Risk Measures",
    subject5: "MATH 441 : Advanced Calculus",
    subject6: "MATH 445 : Introductory Functional Analysis",
    subject7: "STAT 440 : Business Statistics",
    subject8: "STAT 451 : Random Processes",
    subject9: "ACTU 443 : Econometrics for Actuaries I",
    subject10: "STAT 443 : Population Statistics",
    subject11: "STAT 445 : Advanced Regression Analysis",
    subject12: "ACTU 445 : Macroeconomic Theory for Actuaries I",
    subject13: "MATH 447 : Complex Analysis",
    subject14: "STAT 457 : Economic and Social Statistics I",
    subject15: "STAT 459 : Statistical Quality Control",
  },

  l400ActurialScienceAndMathCombinedMajorSecondSem: {
    subject1: "ACTU 404 : Pensions and Social Security",
    subject2: "ACTU 412 : Fundamental Financial Accounting II",
    subject3: "MATH 442 : Integration and Measure Theory",
    subject4: "ACTU 444 : Introduction Non-life Insurance Mathematics II",
    subject5: "ACTU 408 : Financial Economics II",
    subject6: "ACTU 442 : Econometrics for for Actuaries II",
    subject7: "ACTU 448 : Macroeconomic Theory for Actuaries II",
    subject8: "MATH 450 : Differential Equation II",
    subject9: "FINC 452 : Property and Pecuniary Insurance",
    subject10: "FINC 458 : Health Insurance",
    subject11: "STAT 458 : Economic and Social Statistics II",
  },
};

export default options;
