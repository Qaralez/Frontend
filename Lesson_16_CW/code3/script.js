// Текст для отображения
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
Duis aute irure dolor in reprehenderit in voluptate velit esse. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa.`;


function showTextLineByLine() {
    
    const container = document.getElementById('textContainer');
    
    
    const lines = text.split('\n');

    lines.forEach((line, index) => {
        
        const lineElement = document.createElement('div');
        lineElement.className = 'text-line';
        lineElement.textContent = line;
        
        
        container.appendChild(lineElement);
        
        
        setTimeout(() => {
            lineElement.classList.add('visible');
        }, index * 600); 
    });
}


document.addEventListener('DOMContentLoaded', showTextLineByLine);

