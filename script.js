// U5223-1368

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

    const timestamp = new Date().toLocaleString();

    const feedbackContent = `
        <h3>Feedback Form</h3>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Rating: </strong>${rating}</p>
        <p><strong>Comments: </strong>${comments}</p>
        <p><small>Submitted on: ${timestamp}</small></p>
    `;

    feedback.innerHTML = feedbackContent;

    document.getElementById('feedbackDisplay').appendChild(feedback);

    document.getElementById('feedbackForm').reset();
});
