function lockedProfile() {
    const btns = Array.from(document.querySelectorAll('.profile button'));

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentDivElement = btn.parentElement;
            const status = parentDivElement.querySelector('input:checked').value;
            if (status === 'unlock') {
                const personInfo = parentDivElement.querySelector('div');
                if (btn.textContent === 'Hide it') {
                    btn.textContent = 'Show more';
                    personInfo.style.display = 'none';
                } else {
                    btn.textContent = 'Hide it';
                    personInfo.style.display = 'block';
                }
            }
        })
    });
}