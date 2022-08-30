function projectsCreation(projectInformation) {

    let architectName = projectInformation[0];
    let numberOfProjects = Number(projectInformation[1]);
    let totalHours = numberOfProjects * 3;

    console.log(`The architect ${architectName} will need ${totalHours} hours to complete ${numberOfProjects} project/s.`);
}

projectsCreation(["Sanya", 9]);