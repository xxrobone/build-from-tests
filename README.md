# Build project from tests.

Here is the test project https://github.com/JTKsson/build-from-tests

All tests pass. 
Havent put to much enegry on the styling but added some 

Feedback:
- My recommendation would be to provide a little bit more detailed and organized information about your project, which is helpful for anyone who will be working on it. 
- Includes a clear structure of components, their responsibilities, and the overall flow of the application. 
- This kind of documentation not only serves as a guide for the person building the app but also acts as a reference for future maintenance and collaboration.

Some feedback on the tests (overall good): 
- Check linting and testing-library errors are related to best practices and conventions when creating the tests (usually highligheted in the code)
- Avoid destructuring queries from render result, not best practice
- Describe should never have an empty title ?

the test readme

The app is build using create-react-app

You are building an app where you can vote on three pokemons. 
The one with the most votes will be displayed as the winner, or if there's a tie, it should display that tie instead.
You should be able to change the name of the pokemons that you are voting for (plese note that the names displaying the winners will remain as the default names).

![A picture of the raw app](image.png)# build-from-tests
