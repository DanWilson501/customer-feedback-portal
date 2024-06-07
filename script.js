document.getElementById("feedbackForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents Auto Reload

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('customerComments').value;

});