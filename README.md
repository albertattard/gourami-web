# Web Application

**References**

- [How to Host Static Website in the OCI Object Storage](https://medium.com/oracledevs/how-to-serve-website-static-files-from-the-oci-object-storage-bd79ca0805c7)

## Prerequisites

| Name | Version  | Used to           |
| ---- | -------- | ----------------- |
| Node | `20.4.0` | build the project |
| NPM  | `9.8.0`  | build the project |

## Useful commands

- Run project locally

  ```shell
  $ npm start
  ```

- Build the project

  ```shell
  $ npm run build
  ```

- Build the docker image

  ```shell
  $ docker build \
    --file=container/Dockerfile \
    --tag gourami-web:local \
    --load \
    .
  ```


## Pending work

1. Investigate how the `oci os object sync` can determine the file type
   automatically.

   I had to add a step for each file extension and provide the respective
   `--content-type`. I am confident that there is a better way to deal with
   this.
