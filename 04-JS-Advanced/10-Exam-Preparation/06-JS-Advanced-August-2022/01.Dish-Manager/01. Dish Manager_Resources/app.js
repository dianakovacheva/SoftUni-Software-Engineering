window.addEventListener("load", solve);

function solve() {
  const form = document.getElementsByTagName('form')[0]
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const selectedGender = document.getElementById('genderSelect');
  const taskInputField = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  const ulListInProgress = document.getElementById('in-progress');
  const inProgressCounter = document.getElementById('progress-count');
  const ulElementFinished = document.getElementById('finished');
  const clearBtn = document.getElementById('clear-btn');
  let counter = 0;
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && taskInputField.value !== '') {
      const liElement = document.createElement('li');
      liElement.classList.add('each-line');
      const articleElement = document.createElement('article');
      const h4FullNameElement = document.createElement('h4');
      let fName = firstName.value;
      let lName = lastName.value;
      let ageNumber = age.value;
      let gender = selectedGender.value;
      let taskDescription = taskInputField.value;
      h4FullNameElement.textContent = `${fName} ${lName}`;
      const pElement = document.createElement('p');
      pElement.textContent = `${gender}, ${ageNumber}`;
      const pElementDescription = document.createElement('p');
      pElementDescription.textContent = `Dish description: ${taskDescription}`;
      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('complete-btn');
      completeBtn.textContent = 'Mark as complete';
      // append all elements
      ulListInProgress.appendChild(liElement);
      liElement.appendChild(articleElement);
      articleElement.appendChild(h4FullNameElement);
      articleElement.appendChild(pElement);
      articleElement.appendChild(pElementDescription);
      liElement.appendChild(editBtn);
      liElement.appendChild(completeBtn);
      counter++;
      inProgressCounter.innerText = counter;
      // ["Edit"] button
      editBtn.addEventListener('click', () => {
        firstName.value = fName;
        lastName.value = lName;
        age.value = ageNumber;
        selectedGender.value = gender;
        taskInputField.value = taskDescription;
        liElement.remove();
        counter--;
        inProgressCounter.innerText = counter;
      });
      // ["Mark as complete"] button
      completeBtn.addEventListener('click', () => {
        liElement.remove();
        editBtn.remove();
        completeBtn.remove();
        ulElementFinished.appendChild(liElement);
        counter--;
        inProgressCounter.innerText = counter;
      });
      // ["Clear"] button
      clearBtn.addEventListener('click', () => {
        liElement.remove();
      });
      // cleat all input fields
      form.reset();
      // document.getElementById('first-name').value = '';
      // document.getElementById('last-name').value = '';
      // document.getElementById('age').value = '';
      // document.getElementById('genderSelect').value = '';
      // document.getElementById('task').value = '';
    }
  });
}
