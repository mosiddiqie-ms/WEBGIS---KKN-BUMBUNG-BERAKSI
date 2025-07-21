// Zoom image on click
document.querySelectorAll('.team-card img').forEach(img => {
  img.addEventListener('click', function () {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = this.src;
  });
});

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Close modal on background click
document.getElementById("imageModal").addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
