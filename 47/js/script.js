const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.user-name')
const userRole = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles #1',
        role: 'Marketing',
        photoUrl: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur recusandae est veniam rerum aliquid ratione dolore maxime, tempore rem. Corporis, mollitia quas cum quo repellat neque repudiandae vel debitis!"
    },
    {
        name: 'Miyah Myles #2',
        role: 'Technical Support',
        photoUrl: 'https://randomuser.me/api/portraits/women/48.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur recusandae est veniam rerum aliquid ratione dolore maxime, tempore rem. Corporis, mollitia quas cum quo repellat neque repudiandae vel debitis!"
    },
    {
        name: 'Miyah Myles #3',
        role: 'Partner Sales Assistant',
        photoUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur recusandae est veniam rerum aliquid ratione dolore maxime, tempore rem. Corporis, mollitia quas cum quo repellat neque repudiandae vel debitis!"
    },
    {
        name: 'Miyah Myles #4',
        role: 'HR Dept.',
        photoUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur recusandae est veniam rerum aliquid ratione dolore maxime, tempore rem. Corporis, mollitia quas cum quo repellat neque repudiandae vel debitis!"
    },
]

let idx = 0

function updateTestimonial(){
    const { name, role, photoUrl, text} = testimonials[idx]
    
    testimonial.innerHTML = text
    userImage.src = photoUrl
    userName.innerHTML = name
    userRole.innerHTML = role

    idx = (idx + 1) % testimonials.length
}

setInterval(updateTestimonial, 10000);