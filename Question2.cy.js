/*
Write a Cypress test case to verify that a user can navigate to different pages within https://www.joget.com/
*/

describe('Verify navigation between pages on Joget.com', () => 
{
  const menus = 
  [
      { 
          menu: 'Platform', 
          dropdownItems: 
          [
              { item: 'Overview', expectedUrl: '/platform' },
              { item: 'Innovation Stack', expectedUrl: '/platform/innovation-stack' },
              { item: 'Future Readiness', expectedUrl: '/platform/future-readiness' },
              { item: 'Support Ecosystem', expectedUrl: '/platform/support' },
              { item: 'Platform Guide', expectedUrl: '/platform/platform-guide' }
          ] 
      },
      { 
          menu: 'Solutions', 
          dropdownItems: 
          [
              { item: 'Overview', expectedUrl: '/solutions' },
              { item: 'By Developer Persona', expectedUrl: '/solutions/by-developer-persona' },
              { item: 'By Organization Type', expectedUrl: '/solutions/by-organization-type' },
              { item: 'By Industry Sector', expectedUrl: '/solutions/by-industry-sector' },
              { item: 'Success Stories', expectedUrl: '/solutions/success-stories' }
          ] 
      },
      { 
          menu: 'Partner Network', 
          dropdownItems: 
          [
              { item: 'Overview', expectedUrl: '/partner-network' },
              { item: 'Find a Partner', expectedUrl: '/partner-network/find-a-partner' },
              { item: 'Become a Partner', expectedUrl: '/partner-network/become-a-partner' },
              { item: 'Partnership Sign Up', expectedUrl: '/partnership-sign-up' }
          ] 
      },
      { 
          menu: 'About', 
          dropdownItems: 
          [
              { item: 'Overview', expectedUrl: '/about/overview' },
              { item: 'Our Story', expectedUrl: '/about/our-story' },
              { item: 'Leadership', expectedUrl: '/leadership' },
              { item: 'Careers', expectedUrl: '/about/careers' },
              { item: 'Life@Joget', expectedUrl: '/lifejoget' },
              { item: 'Media Coverage', expectedUrl: '/about/media-coverage' },
              { item: 'Contact Us', expectedUrl: '/contact-us' },
          ] 
      },
      { 
          menu: 'Blog', 
          dropdownItems: 
          [
              { item: 'Overview', expectedUrl: '/blog' },
              { item: 'Highlights', expectedUrl: '/category/highlights' },
              { item: 'Insights', expectedUrl: '/category/insights' },
              { item: 'Updates', expectedUrl: '/category/updates' }
          ] 
      }
  ];

  beforeEach(() => 
  {
      cy.visit('https://www.joget.com/');
  });

  // Handler for uncaught exceptions
  Cypress.on('uncaught:exception', (err, runnable) => 
  {
      console.error('Uncaught Exception:', err);
      return false; // Prevents the test from failing
  });

  menus.forEach(({ menu, dropdownItems }) => 
  {
      it(`Navigates through the dropdown items under the "${menu}" menu`, () => 
      {
          dropdownItems.forEach(({ item, expectedUrl }) => 
          {
              // Open the menu dropdown by clicking the dropdown-toggle element
              cy.contains('a.dropdown-toggle', menu).click(); 

              // Wait for the dropdown menu to be visible, dynamically target the correct dropdown based on the menu
              cy.get(`a.dropdown-toggle:contains("${menu}")`).then($dropdownToggle => 
                {
                  // Find the corresponding dropdown menu for the clicked toggle
                  const dropdownMenuSelector = $dropdownToggle
                  .closest('li') // Find the closest 'li' element to the dropdown toggle
                  .find('ul.dropdown-menu'); // Find the corresponding 'ul' inside that 'li'

                  // Wrap the dropdownMenuSelector in a Cypress chainable to allow assertions
                  cy.wrap(dropdownMenuSelector).should('be.visible')
                    .and('have.css', 'display', 'block'); // Ensure it's displayed as block

                  // Find and click the specific dropdown item inside this dropdown menu
                  cy.wrap(dropdownMenuSelector)
                    .contains('a', item) // Use .contains with 'a' to search for the item text inside the anchor tag
                    .should('exist') // Ensure it exists
                    .should('be.visible') // Ensure it's visible
                    .click({ force: true }); // Force the click

                  // Assert the URL includes the expected fragment
                  cy.url().should('include', expectedUrl);
                });
          });
      });
  });
});
