const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const categoryName = document.querySelector('h2.category-name');
const categoryDropdown = document.getElementById('category-dropdown');
const categoryList = document.getElementById('category-list');
const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const bookmarkListSection = document.getElementById('bookmark-list-section');
//buttons
const addBookmarkBtn = document.getElementById('add-bookmark-button');
const addBookmarkBtnForm = document.getElementById('add-bookmark-button-form');
const closeFormBtn = document.getElementById('close-form-button');
const viewCatBtn = document.getElementById('view-category-button');
const closeListBtn = document.getElementById('close-list-button');
const deleteBookmarkBtn = document.getElementById('delete-bookmark-button');

let bookmarks = [];
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

function addBookmark(bookmark) {
  const array = JSON.parse(localStorage.getItem('bookmarks'));
  array.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(array));
}

function removeBookmark() {
  const radioInputs = categoryList.querySelectorAll('input[type = "radio"]');
  radioInputs.forEach( input=> {
    if(input.checked) {
      bookmarks = getBookmarks();
      const bmToDeleteIndex = bookmarks.findIndex( (bookmark) => bookmark.name === input.value && bookmark.category === input.name);
      bookmarks.splice(bmToDeleteIndex, 1);      
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }
  });
  displayBookmarksByCat();
}

function getBookmarks() {
  try{
    const retrievedData = JSON.parse(localStorage.getItem('bookmarks'));
    let isDataValid = retrievedData.every( bookmark=> 
      (typeof bookmark === 'object') &&
      bookmark.hasOwnProperty('name') &&
      bookmark.hasOwnProperty('category') &&
      bookmark.hasOwnProperty('url')
    );
    return isDataValid ? retrievedData : [];
  }catch(error) { return []}
}

const resetInputs = ()=> {nameInput.value = ''; urlInput.value = '';}

function displayOrCloseForm() {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
}
const displayOrHideCategory = ()=> {mainSection.classList.toggle('hidden'); bookmarkListSection.classList.toggle('hidden')}

function displayBookmarksByCat() {
  const category = categoryDropdown.value;
  bookmarks = getBookmarks();
  const hasAtLeastOneBookmark = bookmarks.some( bookmark => bookmark.category === category);
  categoryList.innerHTML = '';
  if(hasAtLeastOneBookmark) {
    bookmarks
    .filter( bookmark => bookmark.category == category)
    .forEach( ({url, name, category}) => {
      categoryList.innerHTML += 
      `
      <label for="${name}">
        <a href="${url}">${name}</a>
      </label>
      <input type="radio" id="${name}" value="${name}" name="${category}">
      `
      })
  } else {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  }
}



addBookmarkBtn.addEventListener('click', (e)=> {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener('click', (e)=>{
  const bookmarkObj = {
    name: nameInput.value.trim(),
    category: categoryDropdown.value.trim(),
    url: urlInput.value.trim(),
  }
  addBookmark(bookmarkObj);
  resetInputs();
  displayOrCloseForm();
})
closeFormBtn.addEventListener('click', displayOrCloseForm);
viewCatBtn.addEventListener('click', ()=> {
  categoryName.innerText = categoryDropdown.value;
  displayBookmarksByCat();
  displayOrHideCategory();
});
closeListBtn.addEventListener('click', ()=> {
  bookmarkListSection.classList.add('hidden');
  mainSection.classList.remove('hidden');
})
deleteBookmarkBtn.addEventListener('click', removeBookmark);