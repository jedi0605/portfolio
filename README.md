# CGC Azure Resume Starter

This project is part of the Cloud Resume Challenge (Azure Version). It provides a foundation for creating a personal resume website leveraging Azure services. The website is hosted on Azure Storage Static Web with Azure Front Door for CDN, and includes a visitor counter using Azure Functions and Cosmos DB. In the end, repo interact with GitHub Actions for CI/CD.

## Project Structure

```
.
├── frontend/
│ ├── index.html
│ ├── css/
│ ├── js/
│ └── images/
├── backend/
│ └── api/
└── README.md
```
## Features

- Static HTML/CSS/JavaScript frontend
- Visitor counter using Azure Functions and Cosmos DB
- Responsive design
- CI/CD with GitHub Actions (optional)

## Prerequisites

- [GitHub account](https://github.com/join)
- [Azure account](https://azure.microsoft.com/en-us/free)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash#install-the-azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com)
- Visual Studio Code Extensions:
  - [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
  - [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
  - [Azure Storage](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestorage)

## Setup and Deployment

1. Clone this repository
2. Set up Azure resources:
   - Create a Cosmos DB account
   - Create an Azure Function App
3. Update the frontend:
   - Modify `index.html` with your personal information
   - Update the `functionApi` variable in `main.js` with your Azure Function URL
4. Deploy the frontend to Azure Blob Storage
5. Deploy the backend Azure Function
6. Set up GitHub Actions for CI/CD (optional)

## Local Development
1. Run the backend:
   ```
   cd backend/api
   func start
   ```

## Resources

For more detailed instructions and resources, refer to the following sections in the README_copy.md file:

## Good to know

When using GitHub Actions, please be aware of the resource groups for each service. If your services are in different resource groups, you need to set up the environment variables in GitHub Actions accordingly.

Make sure to:
- Review your Azure resource structure
- Update your GitHub Secrets with the appropriate resource group names
- Modify your workflow files to use the correct resource group variables

## License

This project is open source and available under the [MIT License](LICENSE).
