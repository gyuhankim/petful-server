# Petful

### Petful is a full-stack website that displays adoptable cats and dogs
We want to make sure that no single pet is neglected and is guaranteed a new home,
therefore pets may only be adoptable in a first-in, first-out order.

### Live
[Petful](https://fierce-escarpment-91595.herokuapp.com/ "Petful")

### Client Repo
[Petful Client Repo](https://github.com/gyuhankim/petful-client "Petful Client Repo")

### Tech Stack
#### Front End:
* **React/Redux**

#### Back End:
* **NodeJS**
* **ExpressJS**

#### Data Structure:
* **The adoptable pets are stored in ```/src/db/queue.js``` as a _queue_ data structure**

### React Components
* Dashboard.js => Responsible for rendering Section components
* Section.js => Responsible for rendering pet image and information from state.

### Server API Consumption
* Endpoint ```/api/cat``` & ```/api/dog``` to get JSON data of associated cat and dog.
