document.getElementById("feedbackForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents Auto Reload

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('customerComments').value;

    if (!name || !rating || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    const feedback = document.createElement('div');
    feedback.classList.add('feedbackItem');

    document.getElementById('feedbackDisplay').appendChild(feedback);

    document.getElementById('feedbackForm').reset();
});