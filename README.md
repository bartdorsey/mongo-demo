# mongo-demo

This demonstrates how you would go about using docker along with MongoDB and
how to connect to Mongo and do basic CRUD operations.

## To install

```shell
docker-compose -d up
```

Then connect to the `node` server to get a shell

```shell
docker-compose exec node bash
```

Then you can run the sample script with

```shell
node index.js
```
