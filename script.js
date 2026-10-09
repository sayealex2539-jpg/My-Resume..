
function showMessage() {
    document.getElementById("profile-message").textContent =
        "Thank you for viewing my resume!";
}
```

### How the JavaScript works

* `function showMessage()` declares a function named `showMessage`.

* `document.getElementById("profile-message")` selects the HTML paragraph with the ID `profile-message`.

* `.textContent` changes the text inside that paragraph.

* `onclick="showMessage()"` in the HTML button calls the function when the user clicks Show Message.

The paragraph initially displays “Welcome to my digital resume.” After clicking the button, it displays “Thank you for viewing my resume!”

