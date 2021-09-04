import { celebrate, Joi, Segments } from 'celebrate';

export default {
    create: celebrate({
        [Segments.BODY]: {
            plate: Joi.string()
                .required()
                .regex(/^\w{3}((-\d{4})|(\d[A-Za-z]\d{2}))$/), // ABC-1234 or ABC1C34
        },
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        }),
    }),
};
