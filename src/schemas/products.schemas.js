import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category: yup.number().required()
});

export const idProductSchema = yup.object().shape({
    id: yup.string().matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, 'Id not found').required()
});

export const targetProductSchema = yup.object().shape({
    id: yup.string().matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/, 'Id not found').required(),
    name: yup.string(),
    price: yup.number(),
    category: yup.number()
})