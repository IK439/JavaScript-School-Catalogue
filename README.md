# JavaScript-School-Catalogue

## Description
This project models a school management system using object-oriented programming in JavaScript. It defines a base `School` class and specialised subclasses for different school levels: `PrimarySchool`, `MiddleSchool`, and `HighSchool`.  

The system also includes a `SchoolCatalog` class to manage and display multiple schools. Features include quick facts about each school, random substitute teacher selection, and tracking specialised properties like pickup policies, clubs, and sports teams.

## Features
- Base `School` class with shared properties and methods:
  - Name, level, number of students
  - Average test scores
  - School overview
  - `quickFacts()` method to display key info
  - Static method `pickSubstituteTeacher()` to randomly select a substitute
- Subclasses with level-specific properties:
  - `PrimarySchool` → `pickupPolicy`
  - `MiddleSchool` → `clubs`
  - `HighSchool` → `sportsTeams`
- `SchoolCatalog` class to store and display multiple schools
- Encapsulation using getters and setters
- Validation for student numbers (non-negative integers)
- Polymorphic design using inheritance

## Coding Concepts Demonstrated

- Object-Oriented Programming (OOP)
- Class inheritance and polymorphism
- Getters and setters for data encapsulation
- Static methods
- Array manipulation (forEach, Math.random)
- Data validation and error handling

## Example Output

```
✅ Added Lorraine Hansbury to the school catalog.
✅ Added Westview Middle School to the school catalog.
✅ Added Al E. Smith to the school catalog.

🏫 SCHOOL CATALOG
============================
1. Lorraine Hansbury (primary school)
2. Westview Middle School (middle school)
3. Al E. Smith (high school)

📘 SCHOOL FACTS
----------------------------
Lorraine Hansbury
Level: primary
Students Enrolled: 514
Average Test Score: 87
A community-focused primary school.

🎲 SUBSTITUTE TEACHER PICK
----------------------------
James Harden

🏀 AL E. SMITH SPORTS TEAMS
----------------------------
[ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]
```
