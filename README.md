# Ports and Adapters with Fetch API and Axios
This repository demonstrates the implementation of the Ports and Adapters (Hexagonal) architecture using Fetch API and Axios. The goal is to provide a flexible and testable architecture for making HTTP requests.

## Introduction

<p align="center">
<img src="https://github.com/user-attachments/assets/fc7d8249-989d-4d63-8614-2873a52610f6" center />
</p>

The Ports and Adapters architecture, also known as Hexagonal Architecture, promotes the separation of concerns by isolating the core business logic from external systems like databases, web frameworks, and in this case, HTTP clients. This repository provides examples of how to use Fetch API and Axios as adapters for making HTTP requests.


## Directory Structure

The directory is divided into the following components:


- ports: Interfaces that define the operations the core expects from the outside world.
- adapters: Implementations of the adapters using specific technologies (Fetch API and Axios in this case).

```
└── 📁src
│   └── 📁shared
│   │   └── 📁api
│   │   │   └── 📁adapters
│   │   │   │   └── 📁axios
│   │   │   │   │    └── ...
│   │   │   │   │    └── AxiosAdapter.ts
│   │   │   │   └── 📁fetch
│   │   │   │   │    └── ...
│   │   │   │   │    └── FetchAdapter.ts
│   │   │   └── 📁ports
│   │   │   │    └── ...
│   │   │   │    └── ApiPort.ts
│   │   └── 📁hooks
│   │   │   └── 📁useApi
│   │   │   │   └── useApi.ts
```

<details>
  <summary>More info</summary>
    <pre>
```
└── 📁src
    └── 📁shared
        └── 📁api
            └── 📁adapters
                └── 📁axios
                    └── 📁__test__
                        └── AxiosAdapter.test.ts
                    └── 📁utils
                        └── 📁AxiosConfig
                            └── AxiosConfig.ts
                            └── index.ts
                        └── 📁AxiosInstance
                            └── AxiosInstance.ts
                            └── index.ts
                    └── AxiosAdapter.ts
                    └── AxiosCreate.ts
                    └── index.ts
                └── 📁fetch
                    └── 📁__test__
                        └── FetchAdapter.test.ts
                    └── 📁utils
                        └── 📁FetchConfig
                            └── 📁__test__
                                └── FetchConfig.test.ts
                            └── FetchConfig.ts
                            └── index.ts
                        └── 📁FetchErrorHandler
                            └── 📁__test__
                                └── FetchErrorHandler.test.ts
                            └── FetchErrorHandler.ts
                            └── index.ts
                        └── 📁FetchInstance
                            └── FetchInstance.ts
                            └── index.ts
                    └── FetchAdapter.constants.ts
                    └── FetchAdapter.ts
                    └── index.ts
            └── 📁ports
                └── 📁__test__
                    └── ApiPort.test.ts
                └── ApiPort.ts
                └── index.ts
            └── 📁types
                └── Api.types.ts
                └── index.ts
            └── 📁utils
                └── 📁HttpError
                    └── 📁types
                        └── HttpError.types.ts
                        └── index.ts
                    └── HttpError.ts
                    └── index.ts
        └── 📁hooks
            └── 📁useApi
                └── index.ts
                └── useApi.ts
```
    </pre>
</details>

## Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/Gabriel-Silverio-96/ports-and-adapters-with-fetch-api-and-axios.git
cd ports-and-adapters-with-fetch-api-and-axios

npm install
```

## API 
In the same repository there is a mock api:

```bash
cd api

npm install
```

## Start project 
In the directory ports-and-adapters-with-fetch-api-and-axios

```bash
npm run dev
```

## Recommended

Node: v18.20.3

Npm: v10.7.0
