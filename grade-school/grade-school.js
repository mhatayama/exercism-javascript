export class GradeSchool {
  constructor() {
    this.students = {}
  }

  roster() {
    return Object.keys(this.students).sort().reduce((acc, cur) => {
      acc[cur] = this.grade(cur)
      return acc
    }, {})
  }

  add(name, grade) {
    const studentsOfGrade = this.students[grade]
    this.students[grade] = studentsOfGrade ? [...studentsOfGrade, name] : [name]
  }

  grade(grade) {
    const studentsOfGrade = this.students[grade]
    return studentsOfGrade ? [...studentsOfGrade.sort()] : []
  }
}
