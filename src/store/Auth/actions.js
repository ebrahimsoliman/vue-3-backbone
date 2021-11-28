import axios from "axios";
import {functions} from "../functions";


const base = process.env.VUE_APP_BASE_URL_BACK;

export default {
    async login(
        context,
        payload
    ) {

        let url =
            base + 'auth/local/';
        axios.post(url,
            functions.toFormData(payload))
            .then(response => {
                context.dispatch('getMeetups');
                context.dispatch('loading',
                    false);
                context.dispatch('toast',
                    true);
                context.dispatch('toastTitle',
                    'success');
                context.dispatch('toastDesc',
                    'Meetup has been Updated successfully');

                context.commit('setUser',
                    {
                        user: response,
                    });
                localStorage.setItem('user',
                    JSON.stringify(response))
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

            });

    },
    async signup(
        context,
        payload
    ) {

        let url =
            base + '/auth/local/register';
        axios.post(url,
            functions.toFormData(payload))
            .then(response => {
                context.dispatch('getMeetups');
                context.dispatch('loading',
                    false);
                context.dispatch('toast',
                    true);
                context.dispatch('toastTitle',
                    'success');
                context.dispatch('toastDesc',
                    'Meetup has been Updated successfully');

                context.commit('setUser',
                    {
                        user: response,
                    });
                localStorage.setItem('user',
                    JSON.stringify(response))
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

            });

    },
    async tryLogin(context) {
        if (localStorage.getItem('user') === null) {
            return
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.get(base + '/users/me',
                {
                    headers: {
                        'Authorization': `Bearer ${user.jwt}`
                    }
                })
                .then(() => {
                    context.commit('setUser',
                        {
                            user: JSON.parse(localStorage.getItem('user')),
                        });

                })
                .catch(() => {
                    localStorage.removeItem('user');
                    context.commit('setUser',
                        {
                            user: null,
                        });
                })
        }

    },
    async forgetPassword(
        context,
        payload
    ) {

        axios.post(base + '/marks/auth/forgot-password',
            {
                email: payload.email
            })
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
    async resetPassword(
        context,
        payload
    ) {

        axios
            .post(base + 'auth/reset-password',
                {
                    code: 'privateCode', // code contained in the reset link of step 3.
                    password: payload.password,
                    passwordConfirmation: payload.password,
                })
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

};
