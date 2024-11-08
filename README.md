# Portfolio Site

This is a dockerized portfolio site created with React. The site highlights course work completed in the program, organized into sections for Work, Skills, and Resources.

## Requirements

- Docker

## Getting Started

1. Clone this repository.
2. Navigate into the project directory.

## Running the Site

0. Locally: npm start

1. Build the Docker image:
   docker build -t portfolio-site .

2. Run the Docker container:
   docker run -p 5575:80 --name bhatti_ashbeel_coding_assignment14 portfolio-site

3. Open your browser and navigate to http://127.0.0.1:5575.

## Stopping the Site

To stop the container, run:
  docker stop bhatti_ashbeel_coding_assignment14

To remove the container, run:
  docker rm bhatti_ashbeel_coding_assignment14