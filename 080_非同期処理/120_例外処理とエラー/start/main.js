// try  {
//   console.log('start');
//   // throw new Error('error message');
//   console.log('end');
// } catch(e) {
//   console.error(e);
// } finally {
//   console.log('bye')
// }


async function fetchUsers() {
  const response = await fetch('users.json');
  if(response.ok) {
    const json = await response.json();
    if(!json.length) {
      throw new NoDataError('no data found')
    }
    return json;
  }
}

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoDataError';
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  } catch(e) {
    if(e instanceof NoDataError) {
      console.error(e);
    } else {
      console.error('Oops, something went wrong');
    }
  } finally {
    console.log('bye');
  }
  console.log('end');
}

init();