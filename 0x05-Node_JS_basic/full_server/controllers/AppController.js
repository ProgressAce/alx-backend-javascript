// Controller for the home of the application server.
class AppController {
  /**
     * Returns the homepage.
     *
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     */
  static getHomepage(request, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
