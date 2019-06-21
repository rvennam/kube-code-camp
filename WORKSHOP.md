# IBM Cloud Kubernetes Service lab
Kubernetes is a container orchestrator to provision, manage, and scale applications. In other words, Kubernetes allows you to manage the lifecycle of containerized applications within a cluster of nodes (which are a collection of worker machines, for example, VMs, physical machines etc.).

Your applications may need many other resources to run such as Volumes, Networks, and Secrets that will help you to do things such as connect to databases, talk to firewalled backends, and secure keys. Kubernetes helps you add these resources into your application. Infrastructure resources needed by applications are managed declaratively.

## Objectives
This lab is an introduction to using Docker containers on Kubernetes in the IBM Cloud Kubernetes Service. By the end of the course, you'll achieve these objectives:
* Understand core concepts of Kubernetes
* Build a Docker image and deploy an application on Kubernetes in the IBM Cloud Kubernetes Service
* Control application deployments, while minimizing your time with infrastructure management
* Add AI services to extend your app
* Discover Role Based Access Controls for your Kubernetes cluster.

## Workshop
You will perform the following exercises in the lab.

* [Create account and get cluster](exercise-0/README.md)
* [Accessing the cluster](exercise-1/README.md)
* [Set up and deploy your first application](exercise-2/README.md)
* [Scale and update apps](exercise-3/README.md)
* [Deploy an application with IBM Watson services](exercise-4/README.md)
* [Role Based Access Control (RBAC)](exercise-5/README.md)