describe("API-Cypress Practice01", () => {
  const baseUrl = "https://api.tech-global-training.com/students";
  let newStudentId;

  it("TASK-1: Retrieve all students and validate the response", () => {
    cy.request({
      method: "GET",
      url: baseUrl,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.greaterThan(1);
      response.body.forEach((student) => {
        expect(student).to.have.property("STUDENT_ID");
      });
    });
  });

  it("TASK-2: Create a new student and validate the response", () => {
    const newStudent = {
      DOB: "2000-01-01",
      EMAIL: "student@example.com",
      FIRST_NAME: "John",
      LAST_NAME: "Doe",
      INSTRUCTOR_ID: 1,
    };

    cy.request({
      method: "POST",
      url: baseUrl,
      body: newStudent,
    }).then((response) => {
      expect(response.status).to.eq(201);
      const student = response.body;
      newStudentId = student.STUDENT_ID; // Store the new student's ID for later use
      expect(student.STUDENT_ID).to.be.greaterThan(2);
      expect(student.DOB).to.eq(newStudent.DOB);
      expect(student.EMAIL).to.eq(newStudent.EMAIL);
      expect(student.FIRST_NAME).to.eq(newStudent.FIRST_NAME);
      expect(student.LAST_NAME).to.eq(newStudent.LAST_NAME);
      expect(student.INSTRUCTOR_ID).to.eq(newStudent.INSTRUCTOR_ID);
    });
  });

  it("TASK-3: Retrieve the newly created student and validate the response", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/${newStudentId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const student = response.body;
      expect(student.STUDENT_ID).to.eq(newStudentId);
      expect(student.DOB).to.contain("2000-01-01");
      expect(student.EMAIL).to.eq("student@example.com");
      expect(student.FIRST_NAME).to.eq("John");
      expect(student.LAST_NAME).to.eq("Doe");
      expect(student.INSTRUCTOR_ID).to.eq(1);
    });
  });

  it("TASK-4: Update the newly created student with a different instructor and validate the response", () => {
    const updatedInstructorId = 4;

    cy.request({
      method: "PATCH",
      url: `${baseUrl}/${newStudentId}`,
      body: { INSTRUCTOR_ID: updatedInstructorId },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Student's instructor id updated to '4'");
    });
  });

  it("TASK-5: Delete the newly created student and validate the response", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/${newStudentId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
