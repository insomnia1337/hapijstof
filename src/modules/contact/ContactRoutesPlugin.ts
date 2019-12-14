import Hapi from 'hapi';
import Joi from 'joi'
export const ContactRoutesPlugin: Hapi.Plugin<never> = {
    name: 'ContactRoutesPlugin',
    async register(server) {
        await server.route({
            method: 'GET',
            path: '/contact',
            options: {
                response: {
                    schema: Joi.object({
                        "author": Joi.string().required(),
                        "email": Joi.string().email().required(),
                        "webpage": Joi.string().uri().required(),
                        "twitterName": Joi.string().required(),
                    })
                }
            },
            async handler () {
                    return {
                        author: 'Mateusz B',
                        email: 'dasdsa@wp.pl',
                        webpage: 'https://typeofweb.com',
                        twitterName: 'matex'
                    }
    
            }
        });
    }
};