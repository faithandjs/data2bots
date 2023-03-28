FROM alpine
WORKDIR /usr/src/app
COPY . .

CMD echo "Hello, world!"