// const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter'; // Add your API endpoint here
const functionApiUrl = 'https://cloudresumefunction.azurewebsites.net/api/GetResumeCounter?code=7OkEawjvU66ET_kLwlAw3stb9lTr3EvpiWjw7buTLodZAzFucbKwPQ%3D%3D';
                                                
const getVisitorCount = async () => {
    try {
        const response = await fetch(functionApiUrl);
        const data = await response.json();
        console.log(data);
        let count = data.count;
        document.getElementById('counter').innerHTML = count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('counter').innerHTML = 'Error loading count';
    }
};

window.addEventListener('DOMContentLoaded', () => {
    getVisitorCount();
});