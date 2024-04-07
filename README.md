# Deploy a Web App on AWS Amplify

This project was bootstrapped with [this guide](https://aws.amazon.com/getting-started/guides/deploy-webapp-amplify/?pg=webappamplify).

### Step 1: Update Node
```sh
sudo apt update
sudo apt upgrade
sudo n stable
```

### Restart WSL Ubuntu
```sh
exit
```

### Create React App
Simply name the react app the same name as your repo:
```sh
npx create-react-app my-app
cd my-app
npm start
```

### Common Amplify CLI Commands
Simply name the react app the same name as your repo:
```sh
amplify init
amplify add auth
amplify add api

amplify push

amplify add hosting
amplify publish

amplify delete

//to generate missing src/graphsql queries, mutations, etc
npx @aws-amplify/cli codegen add --apiId <...> --region <...>

//to regenerate src/graphsql queries, mutations, etc
npx @aws-amplify/cli codegen
```