import * as yup from 'yup';

export const categorySchema = yup.object().shape({
    name: yup.string().required()
});

export const idCategorySchema = yup.object().shape({
    id: yup.number().required()
});

export const targetCategorySchema = yup.object().shape({
    id: yup.number().required(),
    name: yup.string().required()
});