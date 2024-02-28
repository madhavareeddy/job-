// Sample job data (replace with real data from backend)
const jobData = [
    { title: "Frontend Developer", location: "Hyderabad", category: "Technology", salary: "Rs.80,000 - Rs.1,00,000" },
    { title: "Marketing Manager", location: "Banglore", category: "Marketing", salary: "Rs.90,000 - Rs.1,10,000" },
    { title: "Graphic Designer", location: "Chennai", category: "Design", salary: "Rs.2,60,000 - Rs.3,80,000" },
    { title: "Backend Developer", location: "Pune", category: "Technology", salary: "Rs.1,00,000 - Rs.2,00,000" },
    { title: "Big Data Manager", location: "Delhi", category: "Marketing", salary: "Rs.2,00,000 - Rs.3,00,000" },
    { title: "VFX Designer", location: "Noida", category: "Design", salary: "Rs.1,60,000 - Rs.2,80,000" }
  ];
  
  const jobListings = document.getElementById('jobListings');
  
  // Function to display job listings
  function displayJobListings(jobs) {
    jobListings.innerHTML = '';
    jobs.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job');
      jobElement.innerHTML = `
        <h2>${job.title}</h2>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Category:</strong> ${job.category}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
      `;
      jobListings.appendChild(jobElement);
    });
  }
  
  // Initial display of job listings
  displayJobListings(jobData);
  
  // Search functionality
  document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredJobs = jobData.filter(job => 
      job.title.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.category.toLowerCase().includes(searchTerm) ||
      job.salary.toLowerCase().includes(searchTerm)
    );
    displayJobListings(filteredJobs);
  });
  // Filter functionality
  document.getElementById('locationFilter').addEventListener('change', applyFilters);
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  
  function applyFilters() {
      const locationFilter = document.getElementById('locationFilter').value;
      const categoryFilter = document.getElementById('categoryFilter').value;
  
      let filteredJobs = jobData;
  
      if (locationFilter) {
          filteredJobs = filteredJobs.filter(job => job.location === locationFilter);
      }
  
      if (categoryFilter) {
          filteredJobs = filteredJobs.filter(job => job.category === categoryFilter);
      }
  
      displayJobListings(filteredJobs);
  }
  