# Set up and deploy your first application

Learn how to push an image of an application to IBM Cloud Container Registry and deploy a basic application to a cluster.

# Push an image to IBM Cloud Container Registry

To push an image, we first must have an image to push. We have
prepared several `Dockerfile`s in this repository that will create the
images. We will be running the images, and creating new ones, in the
later labs. 

This lab uses the Container Registry built in to IBM Cloud, but the
image can be created and uploaded to any standard Docker registry to
which your cluster has access.

1. Download a copy of this repository:

    ```
    git clone https://github.com/beemarie/kube-code-camp
    ```

2. Change directory to Exercise 2: 

   ```
   cd Exercise2
   ```

3. Run `ibmcloud cr login`. This will allow you to push images to the IBM Cloud Container Registry.

4. Select a unique name for your project. This could be something like `your-initials-app-somenumber`, or `bmv-app-1227`. Set this unique name as the MYPROJECT environment variable:
    ```
    export MYPROJECT=<UNIQUE_PROJECT_NAME>
    ```

5. A namespace has already been created in this container registry for use in the lab. Set the namespace variable as well as the registry environment variable.
    ```
    export MYNAMESPACE=daimler-code-camp
    export MYREGISTRY=de.icr.io
    ```
   
6. Build and tag (`-t`) the docker image:
    ```
    docker build . -t $MYREGISTRY/$MYNAMESPACE/$MYPROJECT:v1.0.0
    ```

7. Verify the image is built: 

   ```
   docker images
   ```

8. Now push that image up to IBM Cloud Container Registry: 

   ```
   docker push $MYREGISTRY/$MYNAMESPACE/$MYPROJECT:v1.0.0
   ```

You are now ready to use Kubernetes to deploy the hello-world application.

# 2. Deploy your application

1. Run `ibmcloud ks cluster-config <yourclustername>`, and set the variables based on the output of the command.

2. Start by running your image as a deployment: 

   ```kubectl run hello-world --image=registry.ng.bluemix.net/<my_namespace>/hello-world:1```

   This action will take a bit of time. To check the status of your deployment, you can use `kubectl get pods` or `kubectl get pods --watch`. You can use `ctrl+c` to exit the watch.

   You should see output similar to the following:
   
   ```
   => kubectl get pods
   NAME                          READY     STATUS              RESTARTS   AGE
   hello-world-562211614-0g2kd   0/1       ContainerCreating   0          1m
   ```

3. Once the status reads `Running`, expose that deployment as a service, accessed through the IP of the worker nodes.  The example for this course listens on port 8080.  Run:

   ```kubectl expose deployment/hello-world --type="NodePort" --port=8080```

4. To find the port used on that worker node, examine your new service: 

   ```kubectl describe service <name-of-deployment>```

   Take note of the "NodePort:" line as `<nodeport>`

5. Run `ibmcloud ks workers <name-of-cluster>`, and note the public IP as `<public-IP>`.

6. You can now access your container/service using `curl <public-IP>:<nodeport>` (or your favorite web browser). If you see, "Hello world! Your app is up and running in a cluster!" you're done with this exercise!

Continue on to [Exercise 3](../Exercise3/README.md)