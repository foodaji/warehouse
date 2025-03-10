// script.js
const API_KEY = '$2a$10$K0GxG/YDDvwcCOicoQSc3OIPqPpUflP5JvKxVStM6sdQYjq4LdXKi'; // کلید API خود را از jsonbin.io جایگزین کنید
const API_URL = 'https://api.jsonbin.io/v3/b/67cd6a14ad19ca34f81912ef'; // شناسه Bin خود را جایگزین کنید

// تابع کمکی برای ارسال درخواست به jsonbin.io
async function fetchData() {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'X-Master-Key': API_KEY
        }
    });
    return response.json();
}

async function updateData(data) {
    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'X-Master-Key': API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}