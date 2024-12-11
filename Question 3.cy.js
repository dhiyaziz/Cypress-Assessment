/*
Question 3:
Write a Cypress test case 
a) Login to https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/home with username/password is cat/password 
b) Verify that this form https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/new_request cannot submit until all required fields are filled. 
c) Fill the form with your name as subject and upload a file to `Document Attachments 1` field. Due date is 1 week from the current date. Submit the form.
*/

describe('Joget ISR Application', () => 
{
  const loginUrl = 'https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/home';
  const formUrl = 'https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/new_request';
  const dayjs = require('dayjs');

    it('Login, Fill form and submit', () => 
    {
      // Question a - Login with username (cat) and password (password)

      // Visit the home page
      cy.visit(loginUrl);
  
      // Click the Visitor link using the exact path from the HTML structure
      cy.contains('small.login_link', 'Login').should('be.visible').click();
  
      // Wait for login form and verify it's visible
      cy.get('input[name="j_username"]').should('be.visible').type('cat');
  
      cy.get('input[name="j_password"]').should('be.visible').type('password');
  
      // Submit the login form
      cy.get('input[type="submit"]').click();

     
      // Question b - Verify the form

      // Visit the form page 
      cy.visit(formUrl);
  
      // Verify form cannot be submitted with missing required fields
      // Click the submit button
      cy.get('input#assignmentComplete').should('be.visible').click();
  
      // Assert validation errors for required fields
      cy.get('.form-error-message').should('contain', 'Missing required value');
  
      // Ensure form is not submitted
      cy.url().should('eq', formUrl);

      // Question c - Fill the form - Upload document - submit date

      // Fill the "Subject" field with my own name
      cy.get('input[name="Subject"]').should('be.visible').type('Dhiya');

      // Upload a file to the "Document Attachments 1" field
      const fileName = 'Resume_Nur_Dhiya_Badriah.pdf';
      cy.get('input#attachment1').attachFile(fileName);

      //Set the "Due date" field to one week from today
      const dueDate = dayjs().add(7, 'day').format('YYYY-MM-DD');
      cy.get('input[name="DueDate"]').type(dueDate);

      //Submit form
      cy.get('input#assignmentComplete').click();
  
    })
  
    beforeEach(() => 
    {
      // Clear cookies and localStorage before each test
      cy.clearCookies();
      cy.clearLocalStorage();
  
      // Set viewport size to ensure elements are visible
      cy.viewport(1280, 720)
    })
  
    afterEach(() => {
      // Clean up after test
      cy.clearCookies();
      cy.clearLocalStorage();
    })
})