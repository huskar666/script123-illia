document.addEventListener("DOMContentLoaded", () => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    function displayContacts() {
      const contactsList = document.getElementById("contactsList");
      contactsList.innerHTML = "";
      contacts.forEach((contact, index) => {
        contactsList.innerHTML += `
          <div class="contact-item">
            <span>${contact.firstName} ${contact.lastName} - ${contact.phone} - ${contact.email}</span>
            <button onclick="editContact(${index})">редагувати</button>
            <button onclick="deleteContact(${index})">видалити</button>
          </div>
        `;
      });
    }
  
    document.getElementById("contactForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      contacts.push({ firstName, lastName, phone, email });
      localStorage.setItem("contacts", JSON.stringify(contacts));
      document.getElementById("contactForm").reset();
      displayContacts();
    });
  
    window.editContact = (index) => {
      const contact = contacts[index];
      document.getElementById("firstName").value = contact.firstName;
      document.getElementById("lastName").value = contact.lastName;
      document.getElementById("phone").value = contact.phone;
      document.getElementById("email").value = contact.email;
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      displayContacts();
    };
  
    window.deleteContact = (index) => {
      contacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      displayContacts();
    };
  
    displayContacts();
  });
  