const functionApi = ''; // Add your API endpoint here

const getVisitorCount = async () => {
    try {
        const response = await fetch(functionApi);
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