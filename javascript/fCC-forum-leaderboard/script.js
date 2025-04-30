const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';
const postsContainer = document.getElementById('posts-container');

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const date = new Date(timestamp);
  const dateMs = date.getTime();
  const currDate = Date.now();
  const subtrTime = dateMs - currDate;
  const diffInSeconds = Math.abs(Math.floor(subtrTime / 1000));
  const diffInMinutes = Math.abs(Math.floor(diffInSeconds / 60));
  const diffInHours = Math.abs(Math.floor(diffInMinutes / 60));
  const diffInDays = Math.abs(Math.floor(diffInHours / 24));
  return diffInMinutes < 60 ?
    `${diffInMinutes}m ago` :
    diffInHours < 24 ?
    `${diffInHours}h ago` :
    `${diffInDays}d ago`;
}

const viewCount = (viewsCount) => {
  return viewsCount >= 1000 ?
    `${Math.floor(viewsCount / 1000)}k` :
    viewsCount; 
}

const forumCategory = (categoryId) => {
  if(allCategories.hasOwnProperty(categoryId)) {
    const {category, className} = allCategories[categoryId];
    return `<a href="${forumCategoryUrl}${className}/${categoryId}" class="category ${className}">${category}</a>`
  } else {
    return `<a href="${forumCategoryUrl}general/${categoryId}" class="category general">General</a>`;
  }
}

function avatars(posters, users) {
  return posters.map(poster => {
    const user = users.find( user => user.id === poster.user_id);
    
    user.avatar_template = user.avatar_template.replace(
      '{size}', 30);
    const imgUrl = user.avatar_template.startsWith('/') ?
      `${avatarUrl}${user.avatar_template}` :
      user.avatar_template;
          if(user) {
      return `<img src="${imgUrl}" alt="${user.name}">`;
    };
  }).join('');
}

function showLatestPosts(param) {
  if(!param.hasOwnProperty('topic_list') || !param.hasOwnProperty('users')) {
    throw new Error("parameter is invalid! Should include topic_list and users properties");
  }

  const {topic_list, users} = param;
   postsContainer.innerHTML = topic_list.topics.map( 
    ({id, title, views, posts_count, slug, posters, category_id, bumped_at }) => {
      return `<tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td><div class="avatar-container">${avatars(posters, users)}</div></td>
        <td>${posts_count -1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>`
    }).join('');
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const responseJSON = await response.json();
    showLatestPosts(responseJSON);
  } catch (error) {
    console.log(error);
  }
}

fetchData();