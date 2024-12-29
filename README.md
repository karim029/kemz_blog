# The Kemz Blog

The Kemz Blog is a simple blog website built with React that allows users to view, create, and delete blog posts. It provides a clean and user-friendly interface to interact with blog content, built using React Router for navigation, and a mock backend API for managing blog data.

## Features

- **Home Page**: Displays a list of all blog posts.
- **Create Blog**: Allows users to create new blog posts by entering a title, body, and selecting an author.
- **Blog Details**: Displays detailed information about a selected blog post, with the option to delete the blog.
- **404 Page**: Shows a user-friendly error page for non-existent routes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routing and navigation in the app.
- **CSS**: For styling the components.
- **Fetch API**: For fetching blog data from a backend server (mocked with local data for now).

## Setup and Installation

To get started with this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kemz-blog.git
   ```


2. Install the dependencies:

   ```bash
   cd kemz-blog
   npm install
   ```

3. Run the app locally:

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to view the app.

## Components

### 1. `App.js`

- The root component that contains routing setup and includes the Navbar and routes for different pages.

### 2. `Navbar.js`

- A simple navigation bar that links to the homepage and the blog creation page.

### 3. `Home.js`

- Displays all blog posts fetched from the backend using the `useFetch` custom hook. It uses `BlogList` to render the list of blogs.

### 4. `BlogList.js`

- A component that takes an array of blogs and renders them with a title and author.

### 5. `BlogDetails.js`

- Displays detailed information about a single blog post. It includes a button to delete the blog post.

### 6. `Create.js`

- A form to create new blog posts. It includes fields for the blog title, body, and author, and sends a POST request to add the new blog post.

### 7. `NotFound.js`

- A 404 page that is shown when the user navigates to a non-existent route.

### 8. `useFetch.js`

- A custom hook that handles fetching data from an API endpoint, along with managing loading and error states.

## Demo

You can view the live demo of this project [here](https://silly-treacle-ffaa86.netlify.app)


## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Make sure to follow the coding style and write tests for any new features you add.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Router for navigation
- React for building the frontend UI

```

### Explanation of Sections:

- **Introduction**: A brief overview of what the app does.
- **Features**: Key functionalities of the website, like creating, viewing, and deleting blog posts.
- **Technologies Used**: Technologies and libraries you used to build the website.
- **Setup and Installation**: Steps for setting up the project locally.
- **Components**: A breakdown of each component and its function within the app.
- **Demo**: Link to a live demo if available.
- **Contributing**: Information on how others can contribute to the project.
- **License**: Include a reference to your project's license (MIT in this case).
- **Acknowledgments**: Credit to libraries and tools you used in the project.

Feel free to modify any section to fit the specifics of your project!
```
