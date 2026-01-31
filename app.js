// Base class shared by all school types
class School {
  constructor(
    name,
    level,
    numberOfStudents,
    averageTestScores,
    schoolOverview
  ) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get averageTestScores() {
    return this._averageTestScores;
  }

  get schoolOverview() {
    return this._schoolOverview;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (
      typeof newNumberOfStudents === "number" &&
      newNumberOfStudents >= 0 &&
      Number.isInteger(newNumberOfStudents)
    ) {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log(
        "Invalid input: numberOfStudents must be a non-negative integer."
      );
    }
  }

  // Displays a short summary about the school
  quickFacts() {
    console.log("📘 SCHOOL FACTS");
    console.log("----------------------------");
    console.log(`${this.name}`);
    console.log(`Level: ${this.level}`);
    console.log(`Students Enrolled: ${this.numberOfStudents}`);
    console.log(`Average Test Score: ${this.averageTestScores}`);
    console.log(`${this.schoolOverview}`);
    console.log("");
  }

  // Picks a random substitute teacher from a list
  static pickSubstituteTeacher(substituteTeachers) {
    if (!Array.isArray(substituteTeachers) || substituteTeachers.length === 0) {
      console.log("No substitute teachers available.");
      return null;
    }

    let randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
  }
}

// Primary school class
class PrimarySchool extends School {
  constructor(
    name,
    numberOfStudents,
    pickupPolicy,
    averageTestScores,
    schoolOverview
  ) {
    super(name, "primary", numberOfStudents, averageTestScores, schoolOverview);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Middle school class
class MiddleSchool extends School {
  constructor(
    name,
    numberOfStudents,
    clubs,
    averageTestScores,
    schoolOverview
  ) {
    super(name, "middle", numberOfStudents, averageTestScores, schoolOverview);
    this._clubs = clubs;
  }

  get clubs() {
    return this._clubs;
  }
}

// High school class
class HighSchool extends School {
  constructor(
    name,
    numberOfStudents,
    sportsTeams,
    averageTestScores,
    schoolOverview
  ) {
    super(name, "high", numberOfStudents, averageTestScores, schoolOverview);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

// Catalog to store multiple schools
class SchoolCatalog {
  constructor() {
    this._schools = [];
  }

  get schools() {
    return this._schools;
  }

  // Adds a school to the catalog
  addSchool(school) {
    if (school instanceof School) {
      this._schools.push(school);
      console.log(`✅ Added ${school.name} to the school catalog.`);
    } else {
      console.log("❌ Only instances of School can be added.");
    }
  }
  // Displays all schools in the catalog
  displayCatalog() {
    console.log();
    console.log("🏫 SCHOOL CATALOG");
    console.log("============================");
    this._schools.forEach((school, index) => {
      console.log(`${index + 1}. ${school.name} (${school.level} school)`);
    });
    console.log("");
  }
}

/* ---------- SCHOOL INSTANCES ---------- */

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.",
  87,
  "A community-focused primary school."
);

const westviewMiddle = new MiddleSchool(
  "Westview Middle School",
  620,
  ["Robotics", "Drama", "Chess"],
  82,
  "A middle school that emphasizes critical thinking."
);

const alSmith = new HighSchool(
  "Al E. Smith",
  415,
  ["Baseball", "Basketball", "Volleyball", "Track and Field"],
  78,
  "A high school with strong athletic programs."
);

/* ---------- CATALOG USAGE ---------- */

const schoolCatalog = new SchoolCatalog();

schoolCatalog.addSchool(lorraineHansbury);
schoolCatalog.addSchool(westviewMiddle);
schoolCatalog.addSchool(alSmith);

schoolCatalog.displayCatalog();

/* ---------- OUTPUT EXAMPLES ---------- */

lorraineHansbury.quickFacts();

console.log("🎲 SUBSTITUTE TEACHER PICK");
console.log("----------------------------");
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobili",
  ])
);

console.log("");
console.log("🏀 AL E. SMITH SPORTS TEAMS");
console.log("----------------------------");
console.log(alSmith.sportsTeams);