const modal = document.getElementById('crudModal');
const modalContent = document.getElementById('crudModalContent');

function showModal() {
    const modal = document.getElementById('crudModal');
    const modalContent = document.getElementById('crudModalContent');
    modal.classList.remove('hidden'); 
    setTimeout(() => {
      modalContent.classList.remove('opacity-0', 'scale-95');
      modalContent.classList.add('opacity-100', 'scale-100');
    }, 50); 
}

function hideModal() {
    const modal = document.getElementById('crudModal');
    const modalContent = document.getElementById('crudModalContent');
    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 150); 
}

document.getElementById("cancelButton").addEventListener("click", hideModal);
document.getElementById("closeModalBtn").addEventListener("click", hideModal);
document.getElementById("productEntryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    addProductEntry();
  });