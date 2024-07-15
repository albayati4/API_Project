![Image](https://miro.medium.com/v2/resize:fit:670/1*PpZk1knHjIadHW-lpWSsOQ.png)

## Date: 07/16/2024

### By: Abdullah Albayati

### API Testing

#### Validating 5 test cases preforming All CRUD operations.

#### Creator Linkedin page

[Abdullah Albayati](https://www.linkedin.com/in/albayati-abdullah/)

---

#### This project was creatated and executed with the use of JaveScript, Node.js, Cypress.

---

### _Getting Started_

- I used `cy.request` with the method and url to explicitly chose my CURD method and hit the api end point using url
  ```JavaScript
  cy.request({
      method: "GET",
      url: baseUrl,
    }).then((response) => {
      expect(response.status).to.eq(200);
   });
  ```
- So in the `response` I'm verifing the status and anything I receive in the respones body

- In order to store the new student's ID for later use, I declared newStudentId at the top and assigned it to student.STUDENT_ID from the response body

  ```JavaScript
    newStudentId = student.STUDENT_ID;
  ```

### _Screenshots_

![Image](https://i.ibb.co/z25Nb9R/Screenshot-2024-07-15-at-2-05-51-PM.png)
