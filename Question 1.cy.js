/*Write a Cypress test case to verify this page https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home is displayed correctly.*/


describe('Verify Joget App Center Home Page Display', () => 
{
    beforeEach(() => 
    {
      cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/appcenter/v/_/home');
    });
  
    it('should load the Joget App Center home page correctly', () => 
    {
      // Verify the URL 
      cy.url().should('include', '/jw/web/userview/appcenter');
  
      // Check for "App Center" text visible
      cy.contains('App Center').should('be.visible');

  
      // Verify essential elements
      verifyElement('.user-link', 'User link');
      verifyElement('.fa.fa-home', 'Home icon');
      verifyElement('.icon-search.fa.fas.fa-search', 'Search icon');
      verifyElement('footer', 'Footer');
      verifyElement('.app-link', 'App links container');

      //Verify spesific section
      const sectionNames = 
      [
        'Asset Management',
        'Customer Relationship',
        'Document Repository',
        'Employee Services Portal',
        'Expenses Claims App',
        'Internal Service Request',
        'Joget DX Showcase',
        'Joget Knowledge Base',
        'Joget Learning Academy',
        'Joget Q&A',
        'Service Help Desk for DX',
        'Travel Advisory Tracking',
        'Travel Request',
      ];

      sectionNames.forEach((section) => 
      {
        cy.contains(section).should('be.visible');
      });

      function verifyElement(selector, description) 
      {
        cy.log(`Verifying ${description}`);
        cy.get(selector).should('exist').and('be.visible');
      }

    });
  });
  