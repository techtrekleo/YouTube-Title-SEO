document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('seo-form');
    const generateBtn = document.getElementById('generate-btn');
    const resultsDiv = document.getElementById('results');
    const titleOutput = document.getElementById('title-output');
    const tagsOutput = document.getElementById('tags-output');
    const copyBtns = document.querySelectorAll('.copy-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const songName = document.getElementById('song-name').value;
        const originalArtist = document.getElementById('original-artist').value;
        const styles = Array.from(document.querySelectorAll('input[name="style"]:checked')).map(el => el.value);

        if (!songName || !originalArtist || styles.length === 0) {
            alert('Please fill out all fields and select at least one style.');
            return;
        }

        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';

        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    songName,
                    originalArtist,
                    styles,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An unknown error occurred.');
            }

            const data = await response.json();

            titleOutput.textContent = data.title;
            tagsOutput.textContent = data.tags;
            resultsDiv.classList.remove('hidden');

        } catch (error) {
            alert('Error: ' + error.message);
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate';
        }
    });

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.clipboardTarget;
            const targetElement = document.querySelector(targetId);

            if (navigator.clipboard && targetElement) {
                navigator.clipboard.writeText(targetElement.textContent).then(() => {
                    btn.textContent = 'Copied!';
                    setTimeout(() => {
                        const buttonText = targetId.includes('title') ? 'Copy Title' : 'Copy Tags';
                        btn.textContent = buttonText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                    alert('Failed to copy text.');
                });
            }
        });
    });
});
