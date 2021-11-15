import axios from "axios";


export default {
    async getMeetups(context) {
        let data
        axios.get('http://localhost:1337/meetups').then(response => {
            data = response.data
            context.commit('setMeetup', {
                meetup: data
            })
        })

    }, async createMeetups() {

        axios.post('http://localhost:1337/meetups', {
            title: "Standup",
            description: "This is a daily standup meeting",
            address: "Elmosta2bal",
            image: "https://dummyimage.com/600x400/000/fff",
        }).then(response => {
            console.log(response.data)
        })

    }

};
