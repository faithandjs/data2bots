FROM ubuntu:latest

# Set the working directory
WORKDIR /app

# Copy the files into the container
COPY . .

# Install dependencies
RUN apt-get update && apt-get install -y curl

# Set the command to run when the container starts
CMD ["sh", "-c", "echo Hello World! && sleep infinity"]

# Expose port 8080
EXPOSE 8080