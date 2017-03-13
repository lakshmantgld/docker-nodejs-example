# docker-nodejs-example

A simple example on dockerizing a nodeJS app.

### NodeJS file

```
// Load the http module to create an http server.
var http = require("http");

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
});

// The server is listening on port 8080
server.listen(3000);


console.log("server listening at port 3000, navigate to http://127.0.0.1:3000");
```

### DockerFile
**1.** Dockerfile is the essential component which contains the steps for building the image.

```
# From should be the first line in Dockerfile. This forms the base image of the container. Usually OS.
# In our example we use "mhart/alpine-node", which contains the OS and nodeJS installed.

FROM mhart/alpine-node

# The next step is copying the nodeJS file to the image.
COPY index.js .

# This step exposes the node's port from the container.
EXPOSE 3000

# Finally this is the command for executing the nodejs app. This starts the app.
CMD node index.js

```

**2.** Once the **Dockerfile** is created, it has to be converted to a docker image. By a command like this:

```
cd docker-nodejs-example
docker build -t nodeserver .
```

**3.** The above command creates a docker image in the name **nodeserver.** The **.** indicates the Dockerfile location. In our case, it is in the present directory.

**4.** Now when you type docker images, you will see two entries, namely the **base image** and the newly created **nodeserver** image.

```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nodeserver          latest              6f5dd46ec5b7        11 minutes ago      53.6 MB
mhart/alpine-node   latest              f4a61241fe79        3 days ago          53.6 MB
```

**5.** Once the image is built, we can run the image using the following command:

```
docker run -p 3000:3000 nodeserver
```

The above command exposes the Container's port **3000** to our system port **3000**. Navigating to the http://127.0.0.1:3000, you will see Hello World. Thus, a simple nodeJS app is dockerized.
