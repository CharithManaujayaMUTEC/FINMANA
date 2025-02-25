# Step 1: Use Node image for building the app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the frontend package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code (Make sure 'FINMANA' exists in your context)
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx for serving the built files
FROM nginx:alpine

# Copy the build files from the build step into Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Run Nginx to serve the static files
CMD ["nginx", "-g", "daemon off;"]