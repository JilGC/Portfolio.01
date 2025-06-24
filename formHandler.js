form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        message: form.elements['message'].value,
    };

    fetch('https://example.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
});
