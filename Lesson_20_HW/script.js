document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const usersContainer = document.getElementById('usersContainer');
    let users = [];

    
    function addUser(firstName, lastName, email) {
        if (firstName && lastName && email) {
            const user = {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                id: Date.now()
            };
            
            users.push(user);
            renderUsers();
            userForm.reset();
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    }

    
    function renderUsers() {
        if (users.length === 0) {
            usersContainer.innerHTML = '<div class="empty-message">Пользователи не добавлены</div>';
        } else {
            usersContainer.innerHTML = '';
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <h3>${user.firstName} ${user.lastName}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>ID:</strong> ${user.id}</p>
                `;
                usersContainer.appendChild(userCard);
            });
        }
    }

  
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        if (!firstName) {
            alert('Пожалуйста, введите имя');
            document.getElementById('firstName').focus();
        } else if (!lastName) {
            alert('Пожалуйста, введите фамилию');
            document.getElementById('lastName').focus();
        } else if (!email) {
            alert('Пожалуйста, введите email');
            document.getElementById('email').focus();
        } else if (!isValidEmail(email)) {
            alert('Пожалуйста, введите корректный email');
            document.getElementById('email').focus();
        } else {
            addUser(firstName, lastName, email);
        }
    });

    
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        if (firstName && lastName && email) {
            
            if (isValidEmail(email)) {
                addUser(firstName, lastName, email);
            } else {
                alert('Пожалуйста, введите корректный email');
                document.getElementById('email').focus();
            }
        } else {
            
            if (!firstName) {
                alert('Пожалуйста, введите имя');
                document.getElementById('firstName').focus();
            } else if (!lastName) {
                alert('Пожалуйста, введите фамилию');
                document.getElementById('lastName').focus();
            } else {
                alert('Пожалуйста, введите email');
                document.getElementById('email').focus();
            }
        }
    });

    renderUsers();
});