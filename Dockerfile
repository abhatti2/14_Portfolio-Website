# Use a Node.js image to build the app
FROM node:16 as build-stage

# Set working directory in container
WORKDIR /bhatti_ashbeel_14

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the application
COPY . .
RUN npm run build

# Use an Nginx image to serve the build
FROM nginx:alpine as production-stage
COPY --from=build-stage /bhatti_ashbeel_14/build /usr/share/nginx/html

# Expose port
EXPOSE 5575

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
