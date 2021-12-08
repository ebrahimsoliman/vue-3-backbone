import axios from "axios";


export default {
    async getMeetups(context) {
        await context.dispatch('loading', true)
        let data;
        axios.get('http://localhost:1337/meetups')
            .then(response => {
                data = response.data
                context.commit('setMeetup', {meetup: data})
                context.dispatch('loading', false)
            })
            .catch(() => {
                /*context.dispatch('modal', true)
                 context.dispatch('loading', false)
                 context.dispatch('modalTitle', 'Error Occurred')
                 context.dispatch('modalDesc', e.message);*/
            })

    },

    async createMeetups(
        context,
        payload
    ) {
        await context.dispatch('loading',
            true)
        axios.post('http://localhost:1337/meetups',
            payload)
            .then(() => {
                context.dispatch('getMeetups');
                context.dispatch('loading',
                    false);
                context.dispatch('toast',
                    true);
                context.dispatch('toastTitle',
                    'success');
                context.dispatch('toastDesc',
                    'Data has been fetched successfully');

            })
            .catch((error) => {
                console.log(error)
             /*   let sd = ''
                for (const ele in
                    error.response.data.data.errors) {
                    sd += (error.response.data.data.errors[ele].toString())
                }
                console.log(error.response.data.data.errors)
                context.dispatch('loading',
                    false);*/
                context.dispatch('modal',
                    true);
                context.dispatch('modalTitle',
                    'Failed');
                context.dispatch('modalDesc',
                    'Failed');

            });

    },

    async updateMeetups(
        context,
        payload
    ) {
        axios.put(`http://localhost:1337/meetups/${payload.id}`,
            payload)
            .then(() => {
                context.dispatch('getMeetups');
                context.dispatch('loading',
                    false);
                context.dispatch('toast',
                    true);
                context.dispatch('toastTitle',
                    'success');
                context.dispatch('toastDesc',
                    'Meetup has been Updated successfully');

            })
            .catch((error) => {
                /*  let sd = ''
                 for (const ele in error.response.data.data.errors) {
                 sd += (error.response.data.data.errors[ele].toString())
                 }*/
                context.dispatch('loading',
                    false);
                context.dispatch('modal',
                    true);
                context.dispatch('modalTitle',
                    'Failed');
                context.dispatch('modalDesc',
                    error.message);

            })
    },

    async deleteMeetup(
        context,
        payload
    ) {
        console.log(payload)
        axios.delete(`http://localhost:1337/meetups/${payload.id}`)
            .then(() => {
                context.dispatch('getMeetups')
            })
            .catch(() => {

            })
    }

};
