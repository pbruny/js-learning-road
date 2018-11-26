const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
        name: 'Marlon Brando',
        age: 22,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York NY',
        image: 'https://randomuser.me/api/portraits/men/26.jpg'
    },
    {
        name: 'Mary Jane',
        age: 25,
        gender: 'female',
        lookingfor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    },
    {
        name: 'Jenny Smith',
        age: 20,
        gender: 'female',
        lookingfor: 'female',
        location: 'San Francisco CA',
        image: 'https://randomuser.me/api/portraits/women/21.jpg'
    },
    {
        name: 'Januario Jose',
        age: 37,
        gender: 'male',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/men/24.jpg'
    }
]

const profiles = profileIterator(data);

document.querySelector('#next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (!currentProfile) {
        document.querySelector('#profileDisplay').innerHTML = `<h3>There is no other profile to show</h3>`;
        document.querySelector('#imageDisplay').innerHTML = '';
    } else {       
        document.querySelector('#profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Preference: ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `;
        document.querySelector('#imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }
}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}