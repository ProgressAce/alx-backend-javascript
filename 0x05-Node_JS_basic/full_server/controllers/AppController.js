// Controller for the home of the application server.
class AppController {
    /**
     * Returns the homepage.
     * 
     * @param {import("express").Request} request 
     * @param {import("express").Response} response 
     */
    static getHomepage(request , response) {
        response.status(200);
        response.send('Hello Holberton School!');
        response.end();
    }
}

export default AppController;