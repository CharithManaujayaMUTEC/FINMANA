# Step 1: Use Node image for building the app
FROM node:16-alpine AS build


# Set the working directory inside the container
WORKDIR /app

# Copy the frontend package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code 
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx for serving the built files
FROM nginx:alpine

# Copy the build files from the build step into Nginx
COPY --from=build /app/dist /usr/share/nginx/html  

# Expose the port that Nginx will use
EXPOSE 80

# Run Nginx to serve the static files
CMD ["nginx", "-g", "daemon off;"]
