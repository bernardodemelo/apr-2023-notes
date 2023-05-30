import axios from 'axios';

/* Axios Service that deals with Project Requests */

class ProjectsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_APP_SERVER_URL || 'http://localhost:5005'
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/projects
  createProject = requestBody => {
    return this.api.post('/api/projects', requestBody);
  };

  // GET /api/projects
  getAllProjects = () => {
    return this.api.get('/api/projects');
  };

  // GET /api/projects/:id
  getProject = id => {
    return this.api.get(`/api/projects/${id}`);
  };

  // PUT /api/projects/:id
  updateProject = (id, requestBody) => {
    return this.api.put(`/api/projects/${id}`, requestBody);
  };

  // DELETE /api/projects/:id
  deleteProject = id => {
    return this.api.delete(`/api/projects/${id}`);
  };
}

// Create one instance object
const projectsService = new ProjectsService();

export default projectsService;
