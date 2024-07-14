document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('mandalaCanvas');
    const ctx = canvas.getContext('2d');
    const symmetryInput = document.getElementById('symmetry');
    const symmetryValueLabel = document.getElementById('symmetryValue');
    const colorPicker = document.getElementById('colorPicker');
    const sizeSlider = document.getElementById('size');
    let symmetry = symmetryInput.value;
    let color = colorPicker.value;
    let size = sizeSlider.value;

    canvas.addEventListener('click', function(e) {
        placeDot(e.offsetX, e.offsetY);
    });

    symmetryInput.addEventListener('input', function() {
        symmetry = this.value;
        symmetryValueLabel.innerText = symmetry;
    });

    colorPicker.addEventListener('change', function() {
        color = this.value;
    });

    sizeSlider.addEventListener('input', function() {
        size = this.value;
    });

    function placeDot(x, y) {
        const angleIncrement = (Math.PI * 2) / symmetry;
        for (let i = 0; i < symmetry; i++) {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(i * angleIncrement);
            ctx.beginPath();
            ctx.arc(x - canvas.width / 2, y - canvas.height / 2, size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.restore();
        }
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    window.clearCanvas = clearCanvas;
});
