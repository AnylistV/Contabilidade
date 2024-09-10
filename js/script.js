document.querySelectorAll('.toggle-details').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const details = this.nextElementSibling;
        const isExpanded = details.style.display === 'block';

        // Toggle visibility of the details
        details.style.display = isExpanded ? 'none' : 'block';

        // Rotate the arrow
        this.classList.toggle('expanded', !isExpanded);
    });
});
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
  
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000); // O toast desaparecerá após 3 segundos
  }
  
  showToast('Bem-vindo ao Território Contábil!');
  
  function openChatModal() {
    document.getElementById('chatModal').style.display = 'flex';
}

function closeChatModal() {
    document.getElementById('chatModal').style.display = 'none';
}
function openWhatsApp() {
    // Abre um chat do WhatsApp com o número fornecido
    window.open('https://wa.me/5583981352395', '_blank');
}

