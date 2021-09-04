import { celebrate, Joi, Segments } from 'celebrate';

export default {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            postalCode: Joi.string().regex(/^[\d]{5}-[\d]{3}$/),
        }),
    }),
};
