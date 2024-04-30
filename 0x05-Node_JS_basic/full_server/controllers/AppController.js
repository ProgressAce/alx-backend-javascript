// Controller for the home of the application server.
class AppController {
  /**
     * Returns the homepage.
     *
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     */
  static getHomepage(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;
