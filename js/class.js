class Instructor {
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please creat quiz for module ${module}`)
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Developer {
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    tech;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.tech = this.tech;
    }
    developFeature(feature) {
        console.log(`plese develop the feature ${feature}`)
    }
    release(version) {
        console.log(`please relese the version ${version}`)
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class JobPlacement() {
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    tech;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.tech = this.tech;
    }
    developFeature(feature) {
        console.log(`plese develop the feature ${feature}`)
    }
    prepareStudent(version) {
        console.log(`please relese the version ${version}`)
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}




