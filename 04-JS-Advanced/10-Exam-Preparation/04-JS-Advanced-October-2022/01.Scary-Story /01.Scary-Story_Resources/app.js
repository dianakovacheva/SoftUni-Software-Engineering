window.addEventListener("load", solve);

function solve() {
  const firstNameInputField = document.getElementById('first-name');
  const lastNameInputField = document.getElementById('last-name');
  const ageInputField = document.getElementById('age');
  const storyTitleInputField = document.getElementById('story-title');
  const genreOptions = document.getElementById('genre');
  const storyInputField = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  const previewUlListElement = document.getElementById('preview-list');
  const divElementMain = document.getElementById('main');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault;
    if (firstNameInputField.value !== '' && lastNameInputField.value !== '' && ageInputField.value !== '' && ageInputField.value > 0 && storyTitleInputField.value !== '' && storyInputField.value !== '') {
      const storyInfoLiElement = document.createElement('li');
      storyInfoLiElement.classList.add('story-info');
      const articleElement = document.createElement('article');
      const nameh4Element = document.createElement('h4');
      nameh4Element.textContent = `Name: ${firstNameInputField.value} ${lastNameInputField.value}`;
      const agePElement = document.createElement('p');
      agePElement.textContent = `Age: ${ageInputField.value}`;
      const titlePElement = document.createElement('p');
      titlePElement.textContent = `Title: ${storyTitleInputField.value}`;
      const genrePElement = document.createElement('p');
      genrePElement.textContent = `Genre: ${genreOptions.value}`;
      const storyPElement = document.createElement('p');
      storyPElement.textContent = `${storyInputField.value}`;
      const saveBtnElement = document.createElement('button');
      saveBtnElement.classList.add('save-btn');
      saveBtnElement.textContent = 'Save Story';
      const editBtnElement = document.createElement('button');
      editBtnElement.classList.add('edit-btn');
      editBtnElement.textContent = 'Edit Story';
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete Story';
      // apped all element
      previewUlListElement.appendChild(storyInfoLiElement);
      storyInfoLiElement.appendChild(articleElement);
      articleElement.appendChild(nameh4Element);
      articleElement.appendChild(agePElement);
      articleElement.appendChild(titlePElement);
      articleElement.appendChild(genrePElement);
      articleElement.appendChild(storyPElement);
      storyInfoLiElement.appendChild(saveBtnElement);
      storyInfoLiElement.appendChild(editBtnElement);
      storyInfoLiElement.appendChild(deleteBtn);
      // clear all input fields
      document.getElementById('first-name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('age').value = '';
      document.getElementById('story-title').value = '';
      document.getElementById('genre').value = '';
      document.getElementById('story').value = '';
      // disable the ["Publish"] button
      publishBtn.disabled = true;
      // add eventListener to the ["Edit"] button
      editBtnElement.addEventListener('click', () => {
        let personInfo = nameh4Element.textContent.split(': ');
        let [firstName, lastName] = personInfo[1].split(' ');
        firstNameInputField.value = firstName;
        lastNameInputField.value = lastName;
        ageInputField.value = agePElement.textContent.split(': ')[1];
        storyTitleInputField.value = titlePElement.textContent.split(': ')[1];
        genreOptions.value = genrePElement.textContent.split(': ')[1];
        storyInputField.value = storyPElement.textContent;
        publishBtn.disabled = false;
        saveBtnElement.disabled = true;
        editBtnElement.disabled = true;
        deleteBtn.disabled = true;
        storyInfoLiElement.remove();
      });
      // add eventListener to the ["Save"] button
      saveBtnElement.addEventListener('click', () => {
        divElementMain.replaceChildren();
        const h1Element = document.createElement('h1');
        h1Element.innerText = 'Your scary story is saved!';
        divElementMain.appendChild(h1Element);
      });
      // add eventListener to the ["Delete"] button
      deleteBtn.addEventListener('click', () => {
        storyInfoLiElement.remove();
        publishBtn.disabled = false;
      });
    }
  })
}
